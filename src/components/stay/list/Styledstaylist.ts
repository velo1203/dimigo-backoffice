import styled from "styled-components";
import { Color, Font } from "../../../style/constants";

export const StyledStayList = styled.div`
    background-color: red;
`;

export const StyledStayUl = styled.ul`
    margin-top: 20px;
`;

export const StyledStayLi = styled.li`
    padding: 25px;
    height: 70px;
    border-radius: 5px;
    background-color: ${Color.MidWhite};
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
        font-size: ${Font.FontNormal};
        color: ${Color.MainGrey};
    }
`;
