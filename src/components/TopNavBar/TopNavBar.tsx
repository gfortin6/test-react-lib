import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { CgMenuGridR } from 'react-icons/cg';
import '../../styles/component/top-nav-bar.scss';
import Image from '../Image/Image';
import TopNavBarProps from './TopNavBarProps';

const TopNavBar: React.FC<TopNavBarProps> = (props) => {
  function handleSideMenuToggle() {
    if (props.onToggleClicked !== undefined) {
      props.onToggleClicked();
    }
  }

  return (
    <header>
      <Navbar className="bgDark navTop">
        {/* <LinkContainer to="/"> */}
        <Navbar.Brand onClick={props.onBackHome} className="clickable">
          <Image path={props.brandLogo.path} alt={props.brandLogo.alt} />
        </Navbar.Brand>
        {/* </LinkContainer> */}
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            <Navbar.Text>
              <span>{props.appName}</span>
            </Navbar.Text>
          </Nav>
          <Nav>
            <Navbar.Text>
              <div className="flex-container">
                <div className="btn-toggle-side-menu" onClick={handleSideMenuToggle}>
                  <CgMenuGridR />
                </div>

                <div className="navigation-version">
                  <div> {props.apiVersion && `API : v.${props.apiVersion}`}</div>
                  <div> {!props.apiVersion && 'API : N/A'}</div>
                  <div> {`UI : v.${props.uiVersion}`}</div>
                </div>
              </div>
            </Navbar.Text>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};
export default TopNavBar;
