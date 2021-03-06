import Head from "next/head";
import { useContext, useRef } from "react";
import { useReactToPrint } from 'react-to-print';
import Button from "../../components/Button";
import { Input } from "../../components/input";
import { SearchContext } from "../../hooks/useSearchAddress";
//import { FormsContext } from "../hooks/UseFormProvider";
import * as S from './styles';
export default function FindCep() {
  const { register,findAndressRouter } = useContext(SearchContext);
    const Print=()=>{
        const componentRef = useRef()
        const handlePrint=useReactToPrint({
            content: () => componentRef.current,
        })
    }
    function printPage(){
      var body=document.getElementById('body').innerHTML
      
     window.print()
    }
  return (
      <div >
      
    <S.Container>
      <Head>
        <title>Inicio | Buscar Endereço </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="headerArea" id='body'  >
          
        <Input
          {...register("address")}
          htmlFor="andress"
          label="Logradouro"
          name="logradouro"
          
         readOnly
        />
        <Input
          {...register("state")}
          htmlFor="Uf"
          label="Município / UF"
          name="cep"
          
          readOnly
        />
        <Input
          {...register("district")}
          htmlFor="bairro"
          label="Bairro"
          name="bairro"
          
          readOnly
          
        />
        <Input {...register("code")} htmlFor="cep" label="CEP" name="cep" readOnly/>
      </header>

      <S.ButtonContainer >
        <Button onClick={findAndressRouter}>Nova Busca</Button>
    <Button onClick={()=>window.print()} variant="primary"  >Imprimir</Button>
      </S.ButtonContainer>
      
    </S.Container>
   </div>
  );

}

