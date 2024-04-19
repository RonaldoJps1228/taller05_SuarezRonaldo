import Bookies from "../../../assets/img/bookies-removebg-preview.png"
export const Inicio = () => {
  return (
    <>
    <div className="pt-5 d-flex justify-content-center">
        <div className="col-md-6">
          <div className="h-100 p-5 text-bg-warning    rounded-3">
            <h2>Bienvenido a la mejor biblioteca del mundo</h2>
            <p>
            <img src={ Bookies } alt="bookies" />
              Aqui encontraras la mejor gran variedad de libros del mundo ;)
            </p>
            <button className="btn btn-outline-light btn-dark " type="button">
              Ver Mas
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
