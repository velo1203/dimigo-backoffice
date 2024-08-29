import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Color } from "../../../style/constants";
import { Button } from "../../common/button";
import { StyledSection } from "../../section/styledsection";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import ToggleSwitch from "../../common/toggle";
import { StyledStayLi, StyledStayUl } from "./Styledstaylist";
import DropDown from "../../common/dropdown";

function StayList() {
    return (
        <StyledSection>
            <div className="title">
                <h1>잔류 목록</h1>
                <Button color={Color.MainPoint} textColor={Color.White}>
                    <p>잔류 추가</p>
                    <FontAwesomeIcon icon={faPlusCircle} />
                </Button>
            </div>
            <StyledStayUl>
                <Stay />
                <Stay />

                <Stay />
                <Stay />
                <Stay />
                <Stay />
                <Stay />
            </StyledStayUl>
        </StyledSection>
    );
}

function Stay() {
    const [enabled, setEnabled] = useState(false);
    const handleToggle = () => {
        setEnabled(!enabled);
    };

    return (
        <StyledStayLi>
            <ToggleSwitch enabled={enabled} onToggle={handleToggle} />
            <p>2024-08-31~2024-09-01</p>
            <DropDown />
        </StyledStayLi>
    );
}
export default StayList;
