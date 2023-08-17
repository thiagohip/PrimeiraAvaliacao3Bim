import { GlobalStyle } from "./styles/GlobalStyle";
import { HomePage} from "./pages";
import { ComponentHeader, ComponentFooter } from "./components";

function App() {

  return (
    <>
      <GlobalStyle/>
      <ComponentHeader/>
      <HomePage/>
      <ComponentFooter/>
      
    </>
  )
}
export default App
