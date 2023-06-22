import Header from "./components/Header/Header"
import Nav from "./components/Nav/Nav"
import Home from "./components/Home/Home"
import Footer from "./components/Footer/Footer"
import CreateStyledGlobal, {ContainerMain, TelaInteira} from './styledGlobal'

function App() {

  function reproduzVideo(){
    alert("O vídeo está sendo reproduzido")
  }

  return(
    <>
    
      <CreateStyledGlobal/>
      <TelaInteira>
        <Header/>
        <ContainerMain>
          <Nav />
          <Home reproduz={reproduzVideo}/>
        </ContainerMain>
        <Footer/>
      </TelaInteira>
      
      
    </>
  );

}

export default App;