import styled from "styled-components";
import { Color, Font } from "../../style/constants";

export const StyledSection = styled.section`
    background-color: ${Color.White};
    border-radius: 10px;
    padding: 30px;
    height: 400px;
    box-shadow: rgba(149, 157, 165, 0.1) 0px 8px 24px;
    display: flex;
    flex-direction: column;

    .title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: ${Font.FontSmall};
    }
`;
