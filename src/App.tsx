import { useState } from "react"
import PrinterHSK from "./components/PrinterHSK"
import PrinterIDM from "./components/PrinterIDM"



function App() {
  const storedIsSwitched = localStorage.getItem("isSwitched")

  // OLD CODE
  // const [isSwitched, setIsSwitched] = useState<boolean>(true)
  const [isSwitched, setIsSwitched] = useState<boolean>(
    storedIsSwitched ? JSON.parse(storedIsSwitched) : true
  )

  const toggleIO = () => {

    // OLD CODE
    // setIsSwitched((prevChoice: boolean) => !prevChoice)
    const res = !isSwitched
    setIsSwitched(res)
    localStorage.setItem("isSwitched", JSON.stringify(res))
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
