import { useState } from "react"
import PrinterHSK from "./components/PrinterHSK"
import PrinterIDM from "./components/PrinterIDM"

// added for deployment
// import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  const [isSwitched, setIsSwitched] = useState<boolean>(true)

  const toggleIO = () => {
    setIsSwitched((prevChoice: boolean) => !prevChoice)
  }

  // type TargetRoute = React.FC
  // const routes: { [key: string]: TargetRoute } = {
  //   'Idioms': PrinterIDM,
  //   'Words': PrinterHSK
  // }

  // const [ route, setRoute ] = useState<string>('Idioms')

  // const handleSetRoute = (r: string) => {
  //   setRoute(r)
  // }

  return (
    <>
      <div className="main-body-upper">
        <button className="toggle-button" onClick={ toggleIO } >
          {isSwitched ? "Idioms" : "Words"}
        </button>
      </div>
      {isSwitched ? <PrinterIDM /> : <PrinterHSK />}
      {/* <div className="main-body-lower">
        <button className="toggle-button" 
          onClick={ (e) => {
            e.preventDefault();
            window.location.href='http://nuoxoxo.github.io';
          }}>
          &nbsp;io&nbsp;
        </button>
      </div> */}
        
    </>


  )
}

export default App
