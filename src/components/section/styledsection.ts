import styled from "styled-components";
import { Color, Font } from "../../style/constants";

export const StyledSection = styled.section`
    background-color: ${Color.White};
    border-radius: 10px;
    padding: 30px;
    height: 100%;

    .title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: ${Font.FontSmall};
    }
`;
