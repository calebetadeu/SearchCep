import Head from 'next/head';
import { useRouter } from 'next/router';
import Button from '../components/Button';
import * as S from '../styles/Pages/Home';

export default function Home() {
    const router =useRouter();

    function SearchCepRouter(){
        router.push('/searchCep')
    }
    function SearchAddressRouter(){
      router.push('/searchAddress')
    }

  return (
    <S.HomeContainer >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
<header className="headerArea">
        <h1>Bem Vindo ao BuscadoCep</h1>
      </header>
      <div>
        <p>
          {" "}
          O aplicativo BuscadorCep premite que você encontre códigos de
          endereçamento postais(Cep),
          <br />
          Se você já tiver o Cep em mãos e gostaroia de buscar o seu endereço, o
          BuscadorCep! também vai te ajudar. <br />
          Aproveite 😄
        </p>
      </div>
      <section className="groupButtons">
        <Button onClick={ SearchAddressRouter }  >Buscar Endereço</Button>
        <Button onClick={ SearchCepRouter }>Buscar Cep</Button>
      </section>
    </S.HomeContainer>
      
  )}