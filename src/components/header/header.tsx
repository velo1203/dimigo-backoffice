import { StyledHeader } from "./Styledheader";
import Breadcrumbs from "./Breadcrumb";

function Header() {
    const crumbs: Crumb[] = [
        { label: "홈", path: "/" },
        { label: "잔류관리", path: "/management" },
    ];

    return (
        <StyledHeader>
            <Breadcrumbs crumbs={crumbs} />
        </StyledHeader>
    );
}

export default Header;
