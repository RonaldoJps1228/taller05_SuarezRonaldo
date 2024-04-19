export const LibAdmin = () => {
  return (
    <>
      <div className="pt-3 d-flex justify-content-center">
        <div className="col-md-8">
          <div className="bd-example">
            <table className="table table-bordered border border-info">
              <thead>
                <tr>
                  <th style={{ width: "10%" }}>Código</th>
                  <th style={{ width: "40%" }}>Nombre</th>
                  <th style={{ width: "15%" }}>Editorial</th>
                  <th style={{ width: "10%" }} className="text-center">Volumen</th>
                  <th style={{ width: "15%" }} className="text-center">
                    Año
                  </th>
                  <th style={{ width: "10" }}>Opciones</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>001</td>
                  <td>McLaren F1 GTR - La historia definitiva</td>
                  <td>Porter Press International</td>
                  <td className="text-center">1</td>
                  <td className="text-center">2020</td>
                  <td>
                    <i
                      className="fa-solid fa-pen-to-square"
                      style={{ color: "#1e90ff" }}
                    ></i>
                    <i
                      className="fa-solid fa-trash-can"
                      style={{ color: "#dc143c" }}
                    ></i>
                  </td>
                </tr>
                <tr>
                  <td>002</td>
                  <td>The Marvel Book</td>
                  <td>Marvel Comics</td>
                  <td className="text-center">1</td>
                  <td className="text-center">2020</td>
                  <td>
                    <i
                      className="fa-solid fa-pen-to-square"
                      style={{ color: "#1e90ff" }}
                    ></i>
                    <i
                      className="fa-solid fa-trash-can"
                      style={{ color: "#dc143c" }}
                    ></i>
                  </td>
                </tr>
                <tr>
                  <td>003</td>
                  <td>Todo va a mejorar</td>
                  <td>Tusquets</td>
                  <td className="text-center">1</td>
                  <td className="text-center">2022</td>
                  <td>
                    <i
                      className="fa-solid fa-pen-to-square"
                      style={{ color: "#1e90ff" }}
                    ></i>
                    <i
                      className="fa-solid fa-trash-can"
                      style={{ color: "#dc143c" }}
                    ></i>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      </>
  )
}
