import { Link } from "react-router-dom";

function Header(){
    return(

       <>
       <section id="header">
    <nav className="navbar navbar-expand-lg bg-white fixed-top">
      <div className="container-fluid h-50">
        <a className="navbar-brand" href="#">
          <img src="/assets/ProjImages/clickslogo.png" alt="Logo" height={40} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarContent"
        >
          <ul className="navbar-nav mx-auto gap-3 fw-bold">
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">
                MEN
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">
                WOMEN
              </a>
            </li>
            {/* <li class="nav-item"><a class="nav-link text-dark" href="#">KIDS</a></li> */}
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">
                MANY-MORE
              </a>
            </li>
          </ul>
          <form className="d-flex flex-grow-1 mx-3">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search for products, brands and more"
            />
            <button className="btn btn-outline-secondary" type="submit">
              Search
            </button>
          </form>
          <div className="d-flex align-items-center gap-3 me-3">
            <div>
              <i className="bi bi-person fs-4" />
            </div>
            <div>
              <i className="bi bi-heart fs-4" />
            </div>
            <div>
              <i className="bi bi-cart fs-4" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  </section>
       </>
    )
}

export default Header;