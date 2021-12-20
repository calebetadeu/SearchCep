import React, { useEffect, useState } from 'react'
import { fetchCities } from '../../../helpers/fetchStates'
//import { fetchCities } from '../../../helpers/fetchStates'
import * as S from '../DropDrawStates/style'


export default function DropDawCities({state}) {//state
    const [cities,setCities]=useState([])


    useEffect(() => {
      fetchCities(state).then((cities)=>{
          setCities(cities)
      })
    }, [state]) 

           
    return (
        <S.SelectContainer>
             <select className="inputStyle"  >
           <option value="">Selecione uma Cidade</option>
           { cities.map((city)=>{
                      const {id,nome}=city
                  return(<option key={id} value={id}>{nome} </option>) })}
        </select>
        </S.SelectContainer>
    )
}
