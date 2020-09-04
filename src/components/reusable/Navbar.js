import React, { Component } from "react"
import { Link } from "gatsby"
import logo from "../../images/alogo.png"
import "../layout.css"

export default class Navbar extends Component {
  state = {
    navState: false,
    navClass: "collapse navbar-collapse",
    menus: [
      {
        id: 1,
        text: "Bio",
        path: "/bio",
      },
      {
        id: 2,
        text: "Online Training",
        path: "/online-training",
      },
      {
        id: 3,
        text: "Shop",
        path: "/shop",
      },
      {
        id: 4,
        text: "Contact Us",
        path: "/contact-us",
      },
    ],
  }
  myToggler = () => {
    this.state.navState
      ? this.setState({ navState: false, navClass: "collapse navbar-collapse" })
      : this.setState({
          navState: true,
          navClass: "collapse navbar-collapse show",
        })
  }
  render() {
    return (
      <nav className="navbar navbar-expand-sm theme text-white">
        <Link to="/" className="nav-brand ml-5">
          <img width="170px" height="70px" src={logo} alt="logoishere" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={this.myToggler}
        >
          <span style={{ color: "black" }}>Menu</span>
        </button>
        <div className={this.state.navClass}>
          <ul className="navbar-nav ml-auto mr-5">
            {this.state.menus.map(menu => {
              return (
                <li key={menu.id} className="nav-item pr-5">
                  <Link to={menu.path} className="nav-link font-weight-bold ">
                    {menu.text}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
        {/* <div className="animation start-home"></div> */}
      </nav>
    )
  }
}
