import styled from "styled-components";
import { Color } from "../../style/constants";

interface ButtonProps {
    color: string;
    textColor: string;
}

export const Button = styled.button<ButtonProps>`
    background-color: ${(props) => props.color};
    color: ${(props) => props.textColor};
    border: none;
    border-radius: 10px;
    padding: 12px 20px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    transition: all 0.2s;
    &:hover {
        transform: scale(1.02);
        background-color: ${Color.HoverPoint};
    }
    &:active {
        transform: scale(1);
    }
`;
