import React, { ChangeEventHandler, useContext, useEffect, useState } from 'react';
import { fetchCities } from '../../../helpers/fetchStates';
import { SearchContext } from '../../../hooks/useSearchAddress';
//import { fetchCities } from '../../../helpers/fetchStates'
import * as S from '../DropDrawStates/style';

interface DropDawCitiesProps{
    state:any
    onChange?: ChangeEventHandler<HTMLSelectElement>;
}

export default function DropDawCities({onChange,state}:DropDawCitiesProps,) {//state
    const [cities,setCities]=useState([])
    const {setValue,getValues,setSelectedState,selectedCity,setSelectedCity } = useContext(SearchContext)
    const [selectCity,setSelectCity]=useState('')
    
    useEffect(() => {
      fetchCities(state).then((cities)=>{
          setCities(cities)
        
      })
     setValue("state",state)
      const estado =getValues("state")
      setSelectedState(estado)
    
    }, [state]) 

    
          

    return (
        <S.SelectContainer>
             <select className="inputStyle" value={selectedCity} onChange={e=> setSelectedCity(e.target.value)} >
           <option >Selecione uma Cidade</option>
           { cities.map((city)=>{
                      const {id,nome}=city

                  return(<option key={id} value={nome}> {nome} </option>) })}

        </select>
        </S.SelectContainer>
    )
}