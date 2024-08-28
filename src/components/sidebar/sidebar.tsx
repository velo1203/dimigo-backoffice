// Sidebar.js

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    StyledSidebar,
    StyledSidebarMenus,
    StyledSidebarMenu,
    StyledSidebarProfile,
} from "./Styledsidebar";
import { sidebarConfig } from "../../config/SidebarConfig";

function Sidebar() {
    return (
        <StyledSidebar>
            <div className="header">
                <img src={sidebarConfig.header.logoSrc} alt="dimigoinlogo" />
                <h1>{sidebarConfig.header.title}</h1>
            </div>

            <StyledSidebarProfile>
                <div>
                    <p>{sidebarConfig.profile.role}</p>
                    <h1>{sidebarConfig.profile.name}</h1>
                </div>
                <span>
                    <FontAwesomeIcon icon={sidebarConfig.profile.logoutIcon} />
                </span>
            </StyledSidebarProfile>
            <hr />
            <StyledSidebarMenus>
                <span>{sidebarConfig.sectionTitle}</span>
                {sidebarConfig.menus.map((menu, index) => (
                    <StyledSidebarMenu key={index} active={menu.active}>
                        <FontAwesomeIcon icon={menu.icon} />
                        <p>{menu.label}</p>
                    </StyledSidebarMenu>
                ))}
            </StyledSidebarMenus>
        </StyledSidebar>
    );
}

export default Sidebar;
