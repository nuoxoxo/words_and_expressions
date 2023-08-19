import { useState } from "react"
import PrinterHSK from "./components/PrinterHSK"
import PrinterIDM from "./components/PrinterIDM"

// added for deployment
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  const [isSwitched, setIsSwitched] = useState<boolean>(true)

  const toggleIO = () => {
    setIsSwitched((prevChoice: boolean) => !prevChoice)
  }

  return (
    <BrowserRouter basename={import.meta.env.DEV ? "/" : "/coughing/"}>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="main-body-upper">
                <button className="toggle-button" onClick={toggleIO}>
                  {isSwitched ? "Idioms" : "Words"}
                </button>
              </div>
              {isSwitched ? <PrinterIDM /> : <PrinterHSK />}
            </>
          }
        />
        <Route path="/about" element={<div>About</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
