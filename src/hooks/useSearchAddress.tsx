
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { useRouter } from "next/router";
import { createContext, ReactNode, useCallback, useEffect, useState } from "react";
import { useForm, UseFormRegister } from "react-hook-form";
import { schema } from "../schema/index";
import api from "../services/api";
import { AndressProps, FormInputs } from '../types/Forms';

interface FormsContextData {
    onClickZipCode: (e: React.SyntheticEvent) => void;
    register: UseFormRegister<FormInputs>;
    //handleSubmit: UseFormHandleSubmit<FormInputs>;
    //setMessage: Dispatch<SetStateAction<string>>;
    //setValue: UseFormSetValue<FormInputs>;
    findAndressRouter: () => void;
    buttonController: boolean;
    inputController: string;
    //handlePagination: SubmitHandler<SyntheticEvent<Element, Event>>;
    handleKeyUp: (e: React.FormEvent<HTMLInputElement>) => void;
   handleOnChangeUser: (e: React.SyntheticEvent) => void;
    message: string;
    /*errors: {
      name?: FieldError;
      cep?: FieldError;
      andress?: FieldError;
      andressNumber?: FieldError;
      neighborhood?: FieldError;
      city?: FieldError;
      uf?: FieldError;
    };**/
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
  const [zipCode, setZipCode] = useState("");
   const [message, setMessage] = useState("");

   const router= useRouter()
   const {
    register,
    setValue,
    setFocus,
    formState: { errors },

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
          router.push("/responseAddress");
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
    router.push("/searchAddress");
    setPagination(false);
    setButtonController(true);
  }
  return(
    <SearchContext.Provider 
    value={{
      inputController,
      handleKeyUp,
      handleOnChangeUser,
      onClickZipCode,
      buttonController,
      register,
      findAndressRouter,
      message
    }}
    > 
    {children}  </SearchContext.Provider>
  )
}
