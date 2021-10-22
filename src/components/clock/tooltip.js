import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectTime, selectTooltip } from "../../app/slice";
import { timeZone } from "./util";

const StyledTooltip = styled.div`
  display: ${({ isShow }) => (isShow ? "block" : "none")};
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  bottom: 0;
  background: white;
  border: 3px solid black;
`;

function Tooltip(props) {
  const isShow = useSelector(selectTooltip);
  const time = useSelector(selectTime);
  let timeStr = "";

  if (isShow) {
    const date = new Date(time);
    date.setHours(date.getHours() - timeZone);
    timeStr = date.toISOString().substring(11, 19);
  }

  return (
    <StyledTooltip isShow={isShow}>
      <h1>{timeStr}</h1>
    </StyledTooltip>
  );
}

export default Tooltip;
