import { StyledBreadcrumbWrapper, StyledCrumb } from "./Styledheader";
import { useNavigate } from "react-router-dom";

function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
    const navigate = useNavigate();

    const handleNavigation = (path: string) => {
        navigate(path);
    };

    return (
        <StyledBreadcrumbWrapper>
            {crumbs.map((crumb: Crumb, index) => {
                const isLast = index === crumbs.length - 1;
                return (
                    <StyledCrumb key={index}>
                        {!isLast ? (
                            <span
                                onClick={() => handleNavigation(crumb.path)}
                                style={{
                                    cursor: "pointer",
                                    color: "inherit",
                                    textDecoration: "none",
                                }}
                            >
                                {crumb.label}
                            </span>
                        ) : (
                            <span
                                style={{
                                    fontWeight: isLast ? "bold" : "normal",
                                }}
                            >
                                {crumb.label}
                            </span>
                        )}
                    </StyledCrumb>
                );
            })}
        </StyledBreadcrumbWrapper>
    );
}

export default Breadcrumbs;
