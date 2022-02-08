// import { UIPath } from 'enums/UIPath';
import React from 'react';
import { ExternalLink } from 'react-external-link';
import { BsBackspace } from 'react-icons/bs';
import { FiArrowLeftCircle, FiArrowRightCircle, FiLogOut } from 'react-icons/fi';
import { Menu, MenuItem, ProSidebar, SidebarContent, SidebarFooter, SidebarHeader, SubMenu } from 'react-pro-sidebar';
import '../../styles/component/side-menu.scss';
import Footer from '../Footer/Footer';
import MenuItemProps from './MenuItemProps';
import SideMenuProps from './SideMenuProps';

const SideMenu: React.FC<SideMenuProps> = (props) => {
  function handleLinkClicked(event: React.MouseEvent<HTMLLIElement>) {
    props.onLinkClicked(event.currentTarget.id);
  }

  function handleLogout() {
    props.onLoggedOut();
  }

  function handleToggleChange() {
    props.onToggleChange();
  }
  function handleCollapseChange() {
    props.onCollapseChange();
  }

  function isAuthorized(allowedPages: string[], validatePage: string[]) {
    let isUserAuthorized = false;
    if (!allowedPages || allowedPages.length === 0) {
      isUserAuthorized = false;
    } else {
      validatePage.forEach((page) => {
        if (allowedPages.includes(page)) {
          isUserAuthorized = true;
          return false; // breaks the every loop
        }
      });
    }

    return isUserAuthorized;
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
              {props.menuItems.map((menuItem: MenuItemProps) => {
                if (isAuthorized(props.allowedPages, [menuItem.link])) {
                  if (menuItem.subMenuItems && menuItem.subMenuItems.length > 0) {
                    return (
                      <SubMenu
                        title={menuItem.name}
                        id={`${menuItem.name}-menu`}
                        icon={menuItem.icon}
                        key={`${menuItem.name}-menu`}
                      >
                        {menuItem.subMenuItems.map((subMenuItem: MenuItemProps) => {
                          if (
                            menuItem.allowedSubMenuPages &&
                            isAuthorized(menuItem.allowedSubMenuPages, [subMenuItem.link])
                          ) {
                            return (
                              <MenuItem
                                icon={subMenuItem.icon}
                                key={`${menuItem.name}-${subMenuItem.name}-item`}
                                id={subMenuItem.link}
                                onClick={handleLinkClicked}
                              >
                                {subMenuItem.name}
                              </MenuItem>
                            );
                          }
                        })}
                      </SubMenu>
                    );
                  } else {
                    return (
                      <MenuItem
                        icon={menuItem.icon}
                        key={`${menuItem.name}-item`}
                        id={menuItem.link}
                        onClick={handleLinkClicked}
                      >
                        {menuItem.name}
                      </MenuItem>
                    );
                  }
                }
              })}
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<BsBackspace />}>
                Back to portal
                <ExternalLink href={props.portalURL} />
              </MenuItem>
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
