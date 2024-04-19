import bl1 from "../../../assets/img/gerente.png";
import bl2 from "../../../assets/img/bibliotecari.png";
import bl3 from "../../../assets/img/asistentebl.png";
import bl4 from "../../../assets/img/auxiliar.png";

export const Acercade = () => {
  return (
    <>
      <div className="pt-3 d-flex justify-content-center">
        <div className="col-md-6">
          <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col">
              <div className="card border border-info">
                <img
                  src={bl1}
                  alt="gerente"
                  style={{ width: "100%", height: "300px", borderRadius: "5px" }}
                  className="img-fluid"
                />
                <div className="card-body">
                  <h4 className="card-title">Gerente</h4>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, unde aliquam mollitia, quod provident et illo excepturi deserunt architecto aliquid temporibus esse, expedita similique nesciunt velit praesentium atque. Nulla, doloribus?
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card border border-info">
                <img
                  src={bl2}
                  alt="bibliotecaria"
                  style={{ width: "100%", height: "300px", borderRadius: "5px" }}
                  className="img-fluid"

                />
                <div className="card-body">
                  <h4 className="card-title">Bibliotecaria</h4>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam iure accusantium tempora pariatur quae earum natus at excepturi dignissimos recusandae qui, soluta expedita odit adipisci voluptates mollitia possimus ex corrupti?
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card border border-info">
                <img
                  src={bl3}
                  alt="asistente"
                  style={{ width: "100%", height: "300px", borderRadius: "5px" }}
                  className="img-fluid"

                />
                <div className="card-body">
                  <h4 className="card-title">Asistente</h4>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla veritatis cum aspernatur sunt repellendus quae reprehenderit similique nostrum? Eos, aperiam. Quo doloremque tempora rem non cupiditate vel. Cumque, ratione ad!
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card border border-info">
                <img
                  src={bl4}
                  alt="auxiliar"
                  style={{ width: "100%", height: "300px", borderRadius: "5px" }}
                  className="img-fluid"

                />
                <div className="card-body">
                  <h4 className="card-title">Auxiliar</h4>
                  <p className="card-text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, dolore beatae delectus unde ut voluptatem quaerat officia recusandae, ducimus aut illo quod aliquam? Alias ratione voluptates hic consequuntur fugit officia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
