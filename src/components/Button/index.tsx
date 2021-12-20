import { ReactNode } from "react";
import * as S from './styles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  disabled?: boolean;
}

export default function Button({ children, disabled, ...props }: ButtonProps) {
  return (
    <S.ButtonContainer >
      <button
        type="submit"
        className="submitButton"
        onClick={props.onClick}
        disabled={disabled}
      >
        {children}
      </button>
    </S.ButtonContainer>
  );
}
