import { ActiveLink } from "../ActiveLink";
import Title from "../Title";
import * as S from './styles';

export function Header() {
  return (
    <S.HeaderContainer>
      <div className="headerContent">

          <Title/>
      
        <nav>
          <ActiveLink activeClassName="active" href="/SearchAddress">
            <a>Buscar Endereço</a>
          </ActiveLink>
          <ActiveLink activeClassName="active" href="/SearchCep">
            <a>Buscar Cep</a>
          </ActiveLink>
        </nav>
      </div>
    </S.HeaderContainer>
  );
}
