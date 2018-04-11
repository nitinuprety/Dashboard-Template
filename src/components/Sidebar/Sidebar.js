import React, {Component} from 'react';
import {Nav} from 'reactstrap';
import classNames from 'classnames';

class Sidebar extends Component {

  render() {

    return (
      <div>
      <div className="sidebar page-sidebar">
       <nav className="sidebar-nav">
       <p className="mainStyle">MAIN</p>
        <ul className="list-group">
          <li className="list-group-item mt-10">
              <span className="tColor-ic fa fa-dashboard"></span> &nbsp;&nbsp; <a href="/index.html#/dashboard"><span className="tColor">Dashboard</span></a>
          </li>
          <li className="list-group-item mt-10">
              <span className="tColor-ic fa fa-user"></span> &nbsp;&nbsp; <a href="/index.html#/profile"><span className="tColor">Profile</span></a>
          </li>
        </ul>
       </nav>
      </div>
      </div>
    )
  }
}

export default Sidebar;