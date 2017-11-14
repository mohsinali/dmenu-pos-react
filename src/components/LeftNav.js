import React from 'react';

class LeftNav extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar-default navbar-static-side" role="navigation">
          <div className="sidebar-collapse">
            <ul className="nav" id="side-menu">
              <li className="nav-header">
                <div className="dropdown profile-element">
                  <span>
                    <img alt="image" className="img-circle" src="/inspinia/img/profile_small.jpg" />
                  </span>
                  <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                    <span className="clear">
                      <span className="block m-t-xs">
                        <strong className="font-bold">David Williams</strong>
                      </span>
                      <span className="text-muted text-xs block">Art Director
                    <b className="caret"></b>
                      </span>
                    </span>
                  </a>
                  <ul className="dropdown-menu animated fadeInRight m-t-xs">
                    <li>
                      <a href="profile.html">Profile</a>
                    </li>
                    <li>
                      <a href="contacts.html">Contacts</a>
                    </li>
                    <li>
                      <a href="mailbox.html">Mailbox</a>
                    </li>
                    <li className="divider"></li>
                    <li>
                      <a href="login.html">Logout</a>
                    </li>
                  </ul>
                </div>
                <div className="logo-element">
                  DM+
            </div>
              </li>
              <li className="active">
                <a href="index.html">
                  <i className="fa fa-th-large"></i>
                  <span className="nav-label">Table Number</span>
                </a>
              </li>
              <li>
                <a href="layouts.html">
                  <i className="fa fa-diamond"></i>
                  <span className="nav-label">Dashboard</span>
                </a>
              </li>
            </ul>

          </div>
        </nav>
      </div>
    )
  }
}

export default LeftNav;