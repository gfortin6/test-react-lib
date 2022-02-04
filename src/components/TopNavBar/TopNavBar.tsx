// import { useAppDispatch } from 'hooks/redux-hooks';
// import useAxios from 'hooks/use-axios';
// import { HealthResponse } from 'interfaces/response/HealthResponse';
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import ADSLogo from '../../images/ADSLogo.svg';
import '../../styles/component/top-nav-bar.scss';
import Image from '../Image/Image';

export interface TopNavBarProps {
  appName: string;
  apiVersion?: string;
  uiVersion: string;
  // onGoHome: () => void;
}

const TopNavBar: React.FC<TopNavBarProps> = (props) => {
  // const [apiHealth, setApiHealth] = useState<HealthResponse>();
  // const dispatch = useAppDispatch();
  // const { sendRequest: fetchApiVersion } = useAxios();

  // useEffect(() => {
  //   fetchApiVersion({ config: { url: ApiPath.HEALTH }, applyData: setApiHealth });
  // }, []);

  // useEffect(() => {
  //   if (apiHealth) {
  //     dispatch(handleServerDownErrorAction(false));
  //   } else {
  //     dispatch(handleServerDownErrorAction(true));
  //   }
  // }, [apiHealth]);

  // function handleSideMenuToggle() {
  //   dispatch(handleToggleChangeAction());
  // }

  return (
    <header>
      <Navbar className="bgDark navTop">
        <LinkContainer to="/">
          <Navbar.Brand>
            <Image path={ADSLogo} alt="ADS Logo" />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            <Navbar.Text>
              <span>{props.appName}</span>
            </Navbar.Text>
          </Nav>
          <Nav>
            <Navbar.Text>
              <div className="flex-container">
                {/* <div className="btn-toggle-side-menu" onClick={}>
                  <CgMenuGridR />
                </div> */}

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
