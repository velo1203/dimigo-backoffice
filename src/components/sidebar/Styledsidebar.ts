import styled from "styled-components";
import { Color, Font } from "../../style/constants";

export const StyledSidebar = styled.div`
    padding: 20px;
    width: 250px;
    display: flex;
    flex-direction: column;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: ${Color.White};
    .header {
        img {
            width: 34px;
        }
        margin-top: 30px;
        gap: 10px;
        font-size: ${Font.FontLogo};
        color: ${Color.MainGrey};
        display: flex;
        align-items: center;
        justify-content: center;
    }

    hr {
        border: 1.5px solid ${Color.LightGrey};
        margin: 30px 0px;
    }
`;
export const StyledSidebarMenus = styled.ul`
    display: flex;
    flex-direction: column;
    span {
        text-align: left;
        font-size: ${Font.FontNormal};
        color: ${Color.MainGrey};
        margin-bottom: 10px;
        font-weight: bold;
    }
`;

export const StyledSidebarProfile = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5px;
    padding: 0px 10px;
    text-align: left;
    p {
        font-size: ${Font.FontSmall};
        color: ${Color.MainGrey};
    }
    h1 {
        font-size: ${Font.FontNormal};
        color: ${Color.MainGrey};
    }
    span {
        transition: all 0.2s;
        cursor: pointer;
        border-radius: 5px;
        font-weight: bold;
        font-size: 23px;
        color: ${Color.MainGrey};
        padding: 5px 10px;
        &:hover {
            background-color: ${Color.LightGrey};
        }
    }
`;

export const StyledSidebarMenu = styled.li<{ active: boolean }>`
    padding: 16px 30px;

    margin-top: 10px;
    font-size: ${Font.FontNormal};
    color: ${Color.MainGrey};
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.2s;
    display: flex;
    align-items: center;
    gap: 10px;

    &:hover {
        background-color: ${Color.LightGrey};
    }
    ${(props) =>
        props.active &&
        `
        background-color: ${Color.MainPoint};
        color: ${Color.White};
        &:hover{
        background-color: ${Color.MainPoint};
        opacity: 0.7;
        }
    `}
`;
