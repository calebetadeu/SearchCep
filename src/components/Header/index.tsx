import { ActiveLink } from "../ActiveLink";
import * as S from './styles';

export function Header() {
  return (
    <S.HeaderContainer>
      <div className="headerContent">
        <ActiveLink href="/" activeClassName="active">
          <h1>BuscadorCep</h1>
        </ActiveLink>
        <nav>
          <ActiveLink activeClassName="active" href="/searchAddress">
            <a>Buscar Endereço</a>
          </ActiveLink>
          <ActiveLink activeClassName="active" href="/searchCep">
            <a>Buscar Cep</a>
          </ActiveLink>
        </nav>
      </div>
    </S.HeaderContainer>
  );
}
