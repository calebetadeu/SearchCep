import * as S from './styles';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
   onClick?: (e?: any) => void;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  disabled?: boolean;
}

export default function Button({ children, disabled,variant,onClick, ...rest }: IButtonProps) {
  return (
    <S.ButtonContainer 
    
    >
      <S.Button  variant={variant} onClick={onClick} disabled={disabled} {...rest} >
      {children}</S.Button>
    </S.ButtonContainer>
  );
}
