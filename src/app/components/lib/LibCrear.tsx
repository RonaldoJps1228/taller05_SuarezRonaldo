export const LibCrear = () => {
  return (
    <>
      <div className="pt-5 d-flex justify-content-center">
        <div className="col-md-8">
          <form className="row g-3 needs-validation">
            <div className="col-md-6 position-relative">
              <label htmlFor="marcas" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                className="form-control border border-info"
                id="marca"
                required
              />
            </div>
            <div className="col-md-6 position-relative">
              <label htmlFor="colores" className="form-label">
                Editorial
              </label>
              <input
                type="text"
                className="form-control border border-info"
                id="color"
                required
              />
            </div>
            <div className="col-md-6 position-relative">
              <label htmlFor="precios" className="form-label">
                Volumen
              </label>
              <input
                type="text"
                className="form-control border border-info"
                id="precio"
                required
              />
            </div>
            <div className="col-md-6 position-relative">
              <label htmlFor="tallas" className="form-label">
                Año
              </label>
              <select
                className="form-select border border-info"
                id="talla"
                name="tall"
                required
              >
                <option selected disabled value="">
                  Seleccione...
                </option>
                <option>2025</option>
                <option>2024</option>
                <option>2023</option>
                <option>2022</option>
                <option>2021</option>
                <option>2020</option>
                
              </select>
            </div>
            <div className="col-12">
              <button className="btn btn-success " type="submit">
                Crear Libro
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
