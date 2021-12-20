import React, { forwardRef, ForwardRefRenderFunction } from "react";
import { InputProps } from "../../types/Input";
import * as S from "./style";

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { label, name, placeholder, htmlFor, ...rest },
  ref
) => {
  return (
    <S.FormContainer>
      <label className="labelInput" htmlFor={htmlFor}>
        {`${label}`}  
      </label>
      <section>
        <input
          className="inputStyle"
          placeholder={placeholder}
          name={name}
          ref={ref}
          {...rest}
        />
      </section>
    </S.FormContainer>
  );
};
export const Input = forwardRef(InputBase);
