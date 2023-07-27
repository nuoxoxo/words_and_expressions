// import PrinterHSK from './PrinterHSK'
// import PrinterIDM from './PrinterIDM'

// function App() {
//   return (
//     <>
//       {/* <div className='text'>Hello World</div> */}
//       <div className='text'><Printer /></div>
//     </>
//   )
// }

// export default App

import { useState } from "react";
import PrinterHSK from "./PrinterHSK";
import PrinterIDM from "./PrinterIDM";


// added for deployment
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {

  const [isSwitched, setIsSwitched] =
    useState<boolean>(true);

  const toggleIO = () => {
    setIsSwitched( (prevChoice: boolean) => !prevChoice );
  };

  return (
    <BrowserRouter
      basename={import.meta.env.DEV ? '/' : '/coughing/'}
    >
      <Routes>
        <Route
          path='/'
          element={

    <>

        <div className="main-body-upper">
          <button className="toggle-button" onClick={ toggleIO }>
            { isSwitched ? "成語" : "漢語" }
          </button>
        </div>
        <div className="main-body-lower">
          <div className="text">
            {/* <button className='toggle-button' onClick={toggleIO}>
              Toggle
            </button> */}
          </div>
          <div className="text">
            {isSwitched ? <PrinterHSK /> : <PrinterIDM />}
          </div>
        </div>
    </>
    }
        />
        <Route path='/about' element={<div>About</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

