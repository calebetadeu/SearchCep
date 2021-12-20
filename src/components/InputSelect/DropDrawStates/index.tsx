import React, { ChangeEventHandler, useEffect, useState } from 'react';
import { fetchStates } from '../../../helpers/fetchStates';
//import { fetchStates } from '../../../helpers/fetchStates';
import * as S from './style';


type DropDawStates={
   onChange?: ChangeEventHandler<HTMLSelectElement>;
}
type StateProps=[{
  sigla?: string
  nome?: string
  id?: string
}]

//HTMLSelectElement
export default function DropDawStates({onChange}: DropDawStates ) {
    const [states,setStates]=useState([])
  

   useEffect(() => {
      fetchStates().then((states)=>{
        setStates(states)
      })
      
    }, []) 

            
    return (
        <S.SelectContainer>
             <select className="inputStyle" onChange={onChange} name="state"  >
            <option value=""> Selecione uma Estado... </option>
                {states.map((state)=>{
                  const {sigla,nome,id}=state      
                  return(<option key={sigla} value={sigla}> {nome} ({sigla}) </option>)
            })}
        </select>
        </S.SelectContainer>
    )
}
