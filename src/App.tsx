import "../css/index.css";
import Splitter from "./assets/components/form/Splitter";
import ContextProvider from "./assets/context/Context";
function App() {
  return (
    <ContextProvider>
      <Splitter />
    </ContextProvider>
  )
}

export default App
