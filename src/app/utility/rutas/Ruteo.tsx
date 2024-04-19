import { Route, Routes } from "react-router-dom";

import { Inicio } from "../../components/container/Inicio";
import { LibCrear } from "../../components/lib/LibCrear";
import { LibListar } from "../../components/lib/LibListar";
import { LibAdmin } from "../../components/lib/LibAdmin";
import { LibActualizar } from "../../components/lib/LibActualizar";
import { Acercade } from "../../components/others/Acercade";
import { NoEncontrado } from "../../components/container/NoEncontrado";

export const Ruteo = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />

      <Route path="/camcre" element={<LibCrear />} />
      <Route path="/camlis" element={<LibListar />} />
      <Route path="/camadm" element={<LibAdmin />} />

      <Route path="/camactual/:codigo" element={<LibActualizar />} />

      <Route path="/acer" element={<Acercade />} />

      <Route path="*" element={<NoEncontrado />} />
    </Routes>
  )
}
