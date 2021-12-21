import React, { ChangeEventHandler, useContext, useEffect, useState } from 'react';
import { fetchStates } from '../../../helpers/fetchStates';
import { SearchContext } from '../../../hooks/useSearchAddress';
//import { fetchStates } from '../../../helpers/fetchStates';
import * as S from './style';


type DropDawStates={
   onChange?: ChangeEventHandler<HTMLSelectElement>;
}

//HTMLSelectElement
export default function DropDawStates({onChange}: DropDawStates ) {
    const [states,setStates]=useState([])
  const { register,findAndressRouter } = useContext(SearchContext)

   useEffect(() => {
      fetchStates().then((states)=>{
        setStates(states)
      })
       
    }, []) 
  
       
            
    return (
        <S.SelectContainer>
             <select className="inputStyle" onChange={onChange} name="state"   >
            <option value=""> Selecione uma Estado... </option>
                {states.map((state)=>{
                  const {sigla,nome,id}=state  
                  
                  return(<option key={sigla} value={sigla}> {nome} ({sigla}) </option>
                  )
            })}
        </select>
        </S.SelectContainer>
    )
}