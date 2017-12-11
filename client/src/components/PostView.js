import React, {Component} from 'react';


class PostView extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div className="container">
                <div className="nav-content">
                        <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse fixed-top">
                            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                                    data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"/>
                            </button>
                            <a className="navbar-brand" href="/">Project's Issue Tracking System</a>
                            <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item dropdown">
                                        <a
                                            className="nav-link dropdown-toggle" href=""
                                            id="navbarDropdownMenuLink" data-toggle="dropdown"
                                            aria-haspopup="true" aria-expanded="false"> hello DpD
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <a href="#">Google</a>

                                        </div>
                                    </li>

                                    <li className="nav-item" >
                                        {/* map require unique key. So, I just put. Nothing special */}
                                        <a href="#">LoL</a>
                                    </li>

                                </ul>
                            </div>
                        </nav>
                    </div>


                <div className="row">
                    <div className="jumbotron">
                        <h2>Hiiiii</h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default PostView;