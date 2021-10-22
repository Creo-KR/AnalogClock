import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectTime } from "../../app/slice";
import { getHourDegree, getMinuteDegree, getSecondDegree } from "./util";

const handStyle = {
  hour: { color: "#a00000", width: 10, height: 15, margin: 32 },
  minute: { color: "#0000a0", width: 5, height: 30, margin: 17 },
  second: { color: "#c0c000", width: 3, height: 38, margin: 9 },
};

const StyledHand = styled.div`
  display: inline-block;
  background-color: ${({ type }) => handStyle[type].color};
  width: ${({ type }) => handStyle[type].width}px;
  height: calc(${({ type }) => handStyle[type].height}% + 10px);
  margin-top: ${({ type }) => handStyle[type].margin}%;
`;

const StyledHandContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const getDegree = {
  hour: getHourDegree,
  minute: getMinuteDegree,
  second: getSecondDegree,
};

function Hand({ type }) {
  const time = useSelector(selectTime);
  const degree = getDegree[type](time);
  return (
    <StyledHandContainer
      style={{
        transform: `rotate(${degree}deg)`,
      }}
    >
      <StyledHand type={type} />
    </StyledHandContainer>
  );
}

export default Hand;
