import './App.css'
import Header from "./components/Header.jsx";
import Content from "./components/Content.jsx";
import Footer from "./components/Footer.jsx";


// Üst tarafında bir input alanı olsun
// Alt tarafında ise bir liste tutan 2 tane component tasarlayınız.

// functional component
function App() {
    return (
      <>
          <Header/>
          <Content/>
          <Footer/>

          <p>Selam</p>
      </>
  )

}

export default App
