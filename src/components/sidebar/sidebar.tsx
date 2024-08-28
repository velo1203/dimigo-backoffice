import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    StyledSidebar,
    StyledSidebarMenus,
    StyledSidebarMenu,
    StyledSidebarProfile,
} from "./Styledsidebar";
import {
    faDoorClosed,
    faHome,
    faRightFromBracket,
    faRunning,
    faShirt,
} from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
    return (
        <StyledSidebar>
            <div className="header">
                <img src="./dimigoin.svg" alt="dimigoinlogo" />
                <h1>디미고인</h1>
            </div>

            <StyledSidebarProfile>
                <div>
                    <p>선생님</p>
                    <h1>심호성</h1>
                </div>
                <span>
                    <FontAwesomeIcon icon={faRightFromBracket} />
                </span>
            </StyledSidebarProfile>
            <hr />
            <StyledSidebarMenus>
                <span>시스템 관리</span>
                <StyledSidebarMenu active={true}>
                    <FontAwesomeIcon icon={faRunning} />
                    <p>잔류 관리</p>
                </StyledSidebarMenu>
                <StyledSidebarMenu active={false}>
                    <FontAwesomeIcon icon={faShirt} />
                    <p>세탁 관리</p>
                </StyledSidebarMenu>
                <StyledSidebarMenu active={false}>
                    <FontAwesomeIcon icon={faHome} />
                    <p>금요귀가 관리</p>
                </StyledSidebarMenu>
                <StyledSidebarMenu active={false}>
                    <FontAwesomeIcon icon={faDoorClosed} />
                    <p>잔류외출 관리</p>
                </StyledSidebarMenu>
            </StyledSidebarMenus>
        </StyledSidebar>
    );
}

export default Sidebar;
