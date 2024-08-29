import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { Color } from "../../style/constants";

const StyledDropDown = styled.div`
    padding: 5px 15px;
    border-radius: 5px;
    color: ${Color.MainGrey};
    cursor: pointer;
    &:hover {
        background-color: ${Color.LightGrey};
    }
    transition: background-color 0.2s ease-in-out;
`;

function DropDown() {
    return (
        <StyledDropDown>
            <FontAwesomeIcon icon={faEllipsisV} />
        </StyledDropDown>
    );
}
export default DropDown;
