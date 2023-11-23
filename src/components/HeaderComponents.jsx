import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class HeaderComponents extends Component {

    constructor(props){
        super(props)

        this.state = {

        }
    }


    render() {
        return (
            <div> 
                <header>
                    <nav className="navbar navbar-expand-lg" style={{backgroundColor: '#e3f2fd'}}>
                        <div className="container-fluid">
                            <Link className="navbar-brand" to="/">Issue Tracking System</Link>

                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">

                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/create-issue">Create Issue</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="update-issue">Update Issue</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link">Link</Link>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponents;