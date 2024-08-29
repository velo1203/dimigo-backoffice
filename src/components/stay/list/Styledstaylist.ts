import styled from "styled-components";
import { Color, Font } from "../../../style/constants";

export const StyledStayList = styled.div`
    background-color: red;
`;

export const StyledStayUl = styled.ul`
    margin-top: 20px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    overflow-y: auto;
    height: 100%;
`;

export const StyledStayLi = styled.li`
    padding: 25px;
    height: 70px;
    border-radius: 10px;
    background-color: ${Color.MidWhite};
    border: ${Color.MidWhiteBorder} solid 2px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    transition: all 0.3s;

    p {
        font-size: ${Font.FontNormal};
        color: ${Color.MainGrey};
    }
`;
