import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DashboardComponent extends Component<any, any> {

    constructor(props: any) {
        super(props);

    }

    render() {

        return (
            <div>
                <aside id="left-panel" className="left-panel">
                    <nav className="navbar navbar-expand-sm navbar-default">
                        <div id="main-menu" className="main-menu collapse navbar-collapse">
                            <ul className="nav navbar-nav">
                                <li className="active">
                                    <a href="#" title="Dashboard"><i className="menu-icon fa fa-laptop"></i>Dashboard </a>
                                </li>
                                <li className="menu-title" title="Profile">Profile</li>
                                <li>
                                <Link to="/page/agentprofile"><a href="#" title="Agent"> <i className="menu-icon fa fa-user" title="Agent"></i>Agent </a></Link>
                                </li>
                                <li>
                                <Link to="/page/clientprofile"><a href="#" title="Client"> <i className="menu-icon fa fa-user" title="Client"></i>Client </a></Link>
                                </li>
                                <li>
                                <Link to="/page/freelancerprofile"><a href="#" title="Freelancer"> <i className="menu-icon fa fa-user" title="Freelancer"></i>Freelancer </a></Link>
                                </li>


                            </ul>
                        </div>
                    </nav>
                </aside>

                <div id="right-panel" className="right-panel">

                    <header id="header" className="header">
                        <div className="top-left">
                            <div className="navbar-header">
                                <a className="navbar-brand" href="#"><img src="data:image/png;base64,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idYpDjZiQ6HOO/XFVk8k4uRii+vXRTHfnL27y/sLUX2Atm0ZpbLWxK6lbDDqsijcIdgQbI5OFlPimBLn8qOhgk0nZHE9rHA+KjwwSCkFKHmTdZHHCtvo+YY+LF+jVpUstd9ttvk8N5X1eSes9zHaeK/LayLrNPbyK0Sfq4ze25XtD4zl6n5jgmBDsIe1O9+/Y4SNEbavrwy6bqhgXzP5DDdN+dIkPxrd1ylRbO9krFzYWInUmtw5M42j87PJrSbBLbaAwujb3b3nOpF+Wx65jCvRCwU3e07/I27c5RuU3/TEPlxoF+WzbuUeonbQ82IkesmTrI91K5/IZgb5pWzZeeuAgiBJln/Nmu3Z2C/NqDX5HFFbqB9BAoFSBGZmtsvajec6AT7C/d7vfg03Kp1yo/Avud9n3X+vdv/fKe6/j3f/HpzR9DoSCIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAAJ4H/B+kP5GsjO+jXAAAAAElFTkSuQmCC" alt="Logo" /></a>                                
                                <a id="menuToggle" className="menutoggle"><i className="fa fa-bars"></i></a>
                            </div>
                        </div>
                        <div className="top-right">
                            <div className="header-menu">
                                <div className="header-left">
                                    <div className="user-area dropdown float-right">
                                        <a href="#" className="dropdown-toggle active" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="user-avatar rounded-circle fa fa-user"></i>
                                        </a>

                                        <div className="user-menu dropdown-menu">
                                            <a className="nav-link" href="#"><i className="fa fa-user"></i>My Profile</a>

                                            <a className="nav-link" href="#"><i className="fa fa-user"></i>Notifications <span className="count">13</span></a>

                                            <a className="nav-link" href="#"><i className="fa fa-cog"></i>Settings</a>

                                            <a className="nav-link" href="#"><i className="fa fa-power-off"></i>Logout</a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </header>

                    <div className="content">

                    </div>

                    <div className="clearfix"></div>


                </div>
            </div>
        );
    }
}
export default DashboardComponent;