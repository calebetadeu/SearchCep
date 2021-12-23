
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import axios from 'axios';
import { useRouter } from "next/router";
import { createContext, Dispatch, ReactNode, SetStateAction, useCallback, useEffect, useState } from "react";
import { useForm, UseFormGetValues, UseFormRegister, UseFormSetValue } from "react-hook-form";
import { schema } from "../schema/index";
import api from "../services/api";
import { AndressProps, FormInputs } from '../types/Forms';
import { ICEPData } from '../types/SearchCEP';

interface FormsContextData {
    onClickZipCode: (e: React.SyntheticEvent) => void;
    register: UseFormRegister<FormInputs>;
    setSelectedState: Dispatch<SetStateAction<string>>
    selectedCity:string
    setSelectedCity:Dispatch<SetStateAction<string>>
    selectedAddress:string
    setSelectedAddress:Dispatch<SetStateAction<string>>
  
   selectedState: string
    setValue: UseFormSetValue<FormInputs>;
   getValues: UseFormGetValues<FormInputs>
    findAndressRouter: () => void;
   
    searchCepRequest: () => Promise<void>
    buttonController: boolean;
    inputController: string;

    handleKeyUp: (e: React.FormEvent<HTMLInputElement>) => void;
   handleOnChangeUser: (e: React.SyntheticEvent) => void;
    message: string;

  }
  type SearchAddressProvideProps = {
    children: ReactNode;
  };

  export const SearchContext = createContext<FormsContextData>(
    {} as FormsContextData
  );


export const SearchAddressProvider=({children} : SearchAddressProvideProps )=>{
  const [pagination, setPagination] = useState(true);
  const [inputController, setInputController] = useState(undefined);
  const [buttonController, setButtonController] = useState(true);
  const [zipCode, setZipCode] = useState('');
   const [message, setMessage] = useState("");
  const [selectedCity,setSelectedCity]=useState("");
  const [selectedState,setSelectedState]=useState("");
  const [selectedAddress,setSelectedAddress]=useState("");
   const router= useRouter()
   const {
    register,
    setValue,
    setFocus,
    formState: { errors },
    getValues,
    setError,
    handleSubmit,
    resetField,
  } = useForm<FormInputs>({
    resolver:yupResolver( schema )
  });


useEffect(() => {
 handleOnChangeUser
 
}, [zipCode])
  const handleKeyUp = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    const target = e.currentTarget.value;
    let value = e.currentTarget.value;
    if (!value) {
      setButtonController(true);
    } else if (value.length == 9) {
      setButtonController(false);
    } else if (value.length < 9) {
      setButtonController(true);
    }
    value = value.replace(/\D/g, "");
    value = value.replace(/^(\d{5})(\d)/, "$1-$2");
    e.currentTarget.value = value;
  }, []);
   

  function handleOnChangeUser(e: React.SyntheticEvent) {
    const target = e.target as HTMLInputElement;
    const { maxLength, value } = target;
    if (!value) {
      return setPagination(false);
    }
    setZipCode(value);

    if (value.length > 8) {
      setInputController(value.slice(0, maxLength));

    } else if (value.length <= 9) {
      setInputController(null);
    }
  }
 async function onClickZipCode() {
    const cep = zipCode

    if (cep == "") {
      setMessage("Campo Inválido");
    } else {
      try {
        const response = await api.get(`/${cep}/json/`);
        const data: AndressProps = await response.data;
        
        if (!data.cep) {
          setMessage("Cep não Encontrado");

          setInputController(null);
        }
        if (data.cep) {
          router.push("/ResponseAddress");
          setPagination(true);
          setValue("address", data.logradouro);
          setValue("district", data.bairro);
          setValue("state", `${data.localidade}(${data.uf})`);
          setValue("code", data.cep);
          setButtonController(false);
             setMessage("");

        }
      } catch (e) {
        console.log(e);
      }
    }}
    function findAndressRouter() {
    setValue("address", "");
    setValue("city", "");
    setValue("state", "");
    setValue("code", "");
    router.push("/SearchAddress");
    setPagination(false);
    setButtonController(true);
  }
  
  const searchCepRequest=async()=>{

    console.log(selectedState)
    try{
    const response=await axios.get<ICEPData[]>(
      `
      https://viacep.com.br/ws/${selectedState}/${selectedCity}/${selectedAddress.replace(
          /\s+/g,
          "+"
        )}/json/
      `
    ) 
    let data = response.data.map((item) => {
        return item;
      });
       if(!data){
        setMessage("Cep não encontrado")
       }
         alert(`Estado:${selectedState}
      Cidade:${selectedCity}
      Bairro:${selectedAddress}
      `)
    } 
  catch(err){
    console.log(err)
  }

  


  
  }
  
  return(
    <SearchContext.Provider 
    value={{
      setSelectedState,
      selectedState,
      setValue,
      getValues,
      searchCepRequest,
      inputController,
      handleKeyUp,
      handleOnChangeUser,
      onClickZipCode,
      buttonController,
      register,
      findAndressRouter,
      message,
      selectedCity,
      setSelectedCity,
      selectedAddress,
      setSelectedAddress
    
    }}
    > 
    {children}  </SearchContext.Provider>
  )
}
