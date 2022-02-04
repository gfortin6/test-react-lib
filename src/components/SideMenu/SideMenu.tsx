// import { UIPath } from 'enums/UIPath';
import React, { ReactNode } from 'react';
import { FiArrowLeftCircle, FiArrowRightCircle, FiLogOut } from 'react-icons/fi';
import { Menu, MenuItem, ProSidebar, SidebarContent, SidebarFooter, SidebarHeader, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import '../../styles/component/side-menu.scss';
import Footer from '../Footer/Footer';
export interface SideMenuProps {
  isCollapsed: boolean;
  isToggled: boolean;
  menuItems: MenuItem[];
  onLoggedOut: () => void;
}

export interface MenuItem {
  link: string;
  name: string;
  icon: ReactNode;
  subMenuItems: MenuItem[];
}

const SideMenu: React.FC<SideMenuProps> = (props) => {
  // const { isCollapsed, isToggled } = useAppSelector((state) => state.sideMenuToggle);
  // const authState = useAppSelector((state) => state.auth);
  // const history = useHistory();

  // const allowedPages: string[] = JSON.parse(window.atob(authState.token.split('.')[1])).groups;

  // const dispatch = useAppDispatch();

  function handleLogout() {
    props.onLoggedOut();
    // dispatch(handleLogoutAction());
    // history.replace('/login');
  }

  function handleToggleChange() {
    // dispatch(handleToggleChangeAction());
  }
  function handleCollapseChange() {
    // dispatch(handleCollapseChangeAction());
  }

  function isAuthorized(requestedPages: string[]) {
    // let isUserAuthorized = false;
    // if (!allowedPages || allowedPages.length === 0) {
    //   isUserAuthorized = false;
    // } else {
    //   allowedPages.forEach((page) => {
    //     if (requestedPages.includes(page)) {
    //       isUserAuthorized = true;
    //       return false; // breaks the every loop
    //     }
    //   });
    // }

    // return isUserAuthorized;
    return true;
  }

  return (
    <>
      <div id="header">
        <ProSidebar
          collapsed={props.isCollapsed}
          className="bgDark"
          breakPoint={'sm'}
          width="220px"
          collapsedWidth="80px"
          toggled={props.isToggled}
          onToggle={handleToggleChange}
        >
          <SidebarHeader>
            <div className="closemenu" onClick={handleCollapseChange}>
              {props.isCollapsed ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              {props.menuItems.map((menuItem: MenuItem) => {
                if (menuItem.subMenuItems.length > 0) {
                  return (
                    <SubMenu
                      title={menuItem.name}
                      id={`${menuItem.name}-menu`}
                      icon={menuItem.icon}
                      key={`${menuItem.name}-menu`}
                    >
                      {menuItem.subMenuItems.map((subMenuItem: MenuItem) => {
                        {
                          return (
                            isAuthorized([subMenuItem.link]) && (
                              <MenuItem icon={subMenuItem.icon} key={`${menuItem.name}-${subMenuItem.name}-item`}>
                                {subMenuItem.name} <Link to={subMenuItem.link} />
                              </MenuItem>
                            )
                          );
                        }
                      })}
                    </SubMenu>
                  );
                } else {
                  return (
                    // isAuthorized([menuItem.link]) && (
                    <MenuItem icon={menuItem.icon} key={`${menuItem.name}-item`}>
                      {menuItem.name} <Link to={menuItem.link} />
                    </MenuItem>
                    // )
                  );
                }
              })}
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              {/* {isAuthorized([UIPath.ACL_MANAGEMENT]) && (
                <SubMenu title="Admin" icon={<MdAdminPanelSettings />}>
                  {isAuthorized([UIPath.ACL_MANAGEMENT]) && (
                    <MenuItem active={true} icon={<FiUsers />}>
                      ACL
                      <Link to={UIPath.ACL_MANAGEMENT} />
                    </MenuItem>
                  )}
                </SubMenu>
              )} */}

              <MenuItem icon={<FiLogOut />} onClick={handleLogout}>
                Logout
              </MenuItem>
              <Footer isMenuCollapsed={props.isCollapsed} />
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};
export default SideMenu;
