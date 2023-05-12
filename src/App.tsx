import "../css/index.css";
import Splitter from "./assets/components/form/Splitter";
import ContextProvider from "./assets/context/Context";
function App() {
  return (
    <ContextProvider>
      <img src="./images/logo.svg" alt="logo" />
      <Splitter />
    </ContextProvider>
  )
}

export default App
