import { useState } from "react"
import PrinterHSK from "./components/PrinterHSK"
import PrinterIDM from "./components/PrinterIDM"

function App() {
  const [isSwitched, setIsSwitched] = useState<boolean>(true)

  const toggleIO = () => {
    setIsSwitched((prevChoice: boolean) => !prevChoice)
  }

  return (
    <div className='outer'>
      <div className="upper">
        <button className="toggle-button" onClick={ toggleIO } >
          { isSwitched ? "Idioms" : "Words" }
        </button>
      </div>
      { isSwitched ? <PrinterIDM /> : <PrinterHSK /> }
    </div>
  )
}

export default App
