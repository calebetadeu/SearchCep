import React, { forwardRef, ForwardRefRenderFunction } from "react";
import { InputProps } from "../../types/Input";
import * as S from "./style";

const SelectBase: ForwardRefRenderFunction<
  HTMLSelectElement,
  InputProps
> = ({ label, name, placeholder, htmlFor,children,value, ...rest }, ref) => {

   
  return (
    <S.FormContainer>
      <label className="labelInput" htmlFor={htmlFor}>
        {" "}
        {label}{" "}
      </label>
    
    </S.FormContainer>
  );
};
export const InputSelect = forwardRef(SelectBase);
