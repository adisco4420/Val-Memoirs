import React from 'react';
import './home.css';
class Home extends React.Component {
    render() {
        return (
            <div className="container">
            <h4 className="text-center text-danger mt-4">All Stories</h4>
                <div className="row">
                    <div className="col-md-4">
                    <div className="card">
                   <div className="card-body">
                   <span className="float-left">
                        <span className="user-avatar">SA</span>
                   </span>
                   <div className="ml-5">
                        <p className="text-muted">adisco4420</p>
                        <h6>Love Memory From Past</h6>
                        <p>This is a moremklld djhdj jkdj...</p>
                        <span>
                        <button className="btn btn-sm btn-info">read more</button>
                        <span className="ml-2 like-btn"><i className="fa fa-thumbs-up"></i> 2</span>
                        </span>
                   </div>                       
                    </div>
                </div> 
                    </div>
                </div> 
            </div>
        )
    }
}

export default Home;