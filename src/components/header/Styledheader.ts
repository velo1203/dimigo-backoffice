import styled from "styled-components";
import { Color, Font } from "../../style/constants";

export const StyledHeader = styled.header`
    padding: 40px 40px 0px 40px;
    display: flex;
    align-items: center;
`;

export const StyledBreadcrumbWrapper = styled.nav`
    display: flex;
    align-items: center;
    margin-left: 20px;
    font-size: 16px;
`;

export const StyledCrumb = styled.span`
    &:not(:last-child)::after {
        content: ">";
        margin: 0 8px;
        color: ${Color.MainGrey};
    }
    font-size: ${Font.FontTitle};
    color: ${Color.Grey};

    span {
        font-size: inherit; // 부모의 폰트 크기를 상속
        color: inherit; // 부모의 색상을 상속
    }
`;
