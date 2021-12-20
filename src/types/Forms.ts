export interface FormInputs {
    code?: string; //cep
    address?: string; //logradouro
    district?: string; //Bairro
    city?: string; //localidade
    state?: string; //uf
  } 
  export type AndressProps = {
    cep:string,
    logradouro: string,
    localidade: string,
    bairro: string,
    uf: string,
   
    
  };
  export interface UserProps extends FormInputs {}
  