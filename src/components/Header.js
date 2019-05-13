import React from 'react';



function Header() {
    return(
        <React.Fragment>
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
        <button type="button" data-toggle="modal" data-target="#exampleModalCenter" className="btn btn-light btn-sm"> <i className="fa fa-plus-circle"></i> Add Story</button>
        <button className="btn text-light"><i className="fa fa-lightbulb"></i> User Guide</button>
    </div>
  </div>


</nav>
<div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog"  aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLongTitle">Share New Story</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 mb-2">
                    <input className="form-control form-control-sm" placeholder="first name" type="text" />
                </div>
                <div className="col-md-6 mb-2">
                    <input className="form-control form-control-sm" placeholder="last name" type="text" />
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 mb-2">
                    <input className="form-control form-control-sm" placeholder="username" type="text" />
                </div>
                <div className="col-md-6 mb-2">
                <select className="form-control form-control-sm">
                    <option>Male</option>
                    <option>Female</option>
                </select>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 mb-2">
                <input className="form-control form-control-sm" placeholder="headline" type="text" />
                </div>
                <div className="col-md-12 mb-2">
                <textarea className="form-control form-control-sm" placeholder="story..." rows="5" cols="10" ></textarea>
                </div>
            </div>
        </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
</React.Fragment>
    )
}

export default Header;