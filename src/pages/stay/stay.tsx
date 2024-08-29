import StayList from "../../components/stay/list/staylist";
import { StyledStay } from "./Styledstay";

function Stay() {
    return (
        <StyledStay>
            <StayList />
            <StayList />
            <StayList />
            <StayList />
        </StyledStay>
    );
}

export default Stay;
