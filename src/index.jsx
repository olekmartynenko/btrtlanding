import React, { Component } from 'react';
import './header.scss';
import logo from './img/logo.svg';
import Btn from '../common/btn';
import menuIcon from './img/menu.svg';

class Header extends Component {
  state = {
    openMenu: false,
  };

  handleMenuOpen = () => {
    const { openMenu } = this.state;
    this.setState({
      openMenu: !openMenu,
    });
  };
  render() {
    const { openMenu } = this.state;
    let menuOpen = openMenu ? 'list' : 'list list_hide';
    return (
      <header className="header">
        <div className="wrapContent wrapContentJustify">
          <div className="boxLogo">
            <a href="#">
              <img src={logo} alt="" />
            </a>
            <div className="boxLang">
              En <span className="arrowDown" />
            </div>
            <img
              className="menuIcon"
              onClick={this.handleMenuOpen}
              src={menuIcon}
              alt=""
            />
          </div>
          <ul className={menuOpen}>
            <li className="list_item">
              <a href="#" className="list_link list_link_active">
                Start as <span className="arrowDown" />
              </a>
            </li>
            <li className="list_item">
              <a href="#" className="list_link">
                Courses <span className="arrowDown" />
              </a>
              <ul className="listUnder">
                <li>Introduction into IT</li>
                <li>
                  Development
                  <ul className="listUnderLinks">
                    <li>
                      <a href="#">Fron</a>
                    </li>
                    <li>
                      <a href="#">Back</a>
                    </li>
                    <li>
                      <a href="#">Sverstka</a>
                    </li>
                  </ul>
                </li>
                <li>Design</li>
                <li>Soft skills</li>
              </ul>
            </li>
            <li className="list_item">
              <a href="#" className="list_link">
                Locations <span className="arrowDown" />
              </a>
            </li>
            <li className="list_item">
              <a href="#" className="list_link">
                Blog
              </a>
            </li>
            <li className="list_item">
              <a href="#" className="list_link">
                Why BA? <span className="arrowDown" />
              </a>
            </li>
          </ul>
          <div className="btn_header_wrap">
            <Btn text="Sign in" style="empty" />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
