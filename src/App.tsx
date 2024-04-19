import "./App.css";

import { BrowserRouter } from "react-router-dom";
import { Ruteo } from "./app/utility/rutas/Ruteo";
import { Cabecera } from "./app/components/container/Cabecera";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Cabecera />

          <Ruteo />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

