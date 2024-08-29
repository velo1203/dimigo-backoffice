import React from "react";
import styled from "styled-components";
import { Color } from "../../style/constants";

interface SwitchProps {
    enabled: boolean;
    onToggle: () => void;
}

interface SwitchThumbProps {
    enabled: boolean;
}

const SwitchWrapper = styled.div<SwitchThumbProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 56px;
    height: 28px;
    background-color: ${({ enabled }) =>
        enabled ? Color.MainPoint : Color.MainGrey};
    border-radius: 5000px;
    padding: 4px;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
`;

const SwitchThumb = styled.span<SwitchThumbProps>`
    display: block;
    width: 22px;
    height: 22px;
    background-color: white;
    border-radius: 50%;
    transition: transform 0.2s ease-in-out;
    transform: ${({ enabled }) =>
        enabled ? "translateX(14px)" : "translateX(-14px)"};
`;

const ToggleSwitch: React.FC<SwitchProps> = ({ enabled, onToggle }) => {
    return (
        <SwitchWrapper enabled={enabled} onClick={onToggle}>
            <SwitchThumb enabled={enabled} />
        </SwitchWrapper>
    );
};

export default ToggleSwitch;
