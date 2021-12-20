import Footer from "../components/Footer"
import { Header } from "../components/Header"
import { SearchAddressProvider } from "../hooks/useSearchAddress"
import { GlobalStyle } from "../styles/GlobalStyles"

function MyApp({ Component, pageProps }) {
  return(
    <SearchAddressProvider>
    <GlobalStyle/>
    <Header/>
    <Component {...pageProps} />
    <Footer/>
    </SearchAddressProvider>
  ) 
}

export default MyApp
