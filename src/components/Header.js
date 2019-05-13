import React from 'react';


function Header() {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-danger text-light">
            <a className="navbar-brand text-light" href="#">Val Memoirs</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>

    </ul>
    <div className="my-2 my-lg-0">
        <button className="btn btn-light btn-sm"> <i className="fa fa-plus-circle"></i> Add Story</button>
        <button className="btn text-light"><i className="fa fa-lightbulb"></i> User Guide</button>
    </div>
  </div>
</nav>
    )
}

export default Header;