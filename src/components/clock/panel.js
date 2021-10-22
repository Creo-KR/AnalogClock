import styled from "styled-components";

const StyledContainer = styled.div`
  position: relative;
  display: inline-block;
  background-color: #c0c0c0;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  padding: 10px;
  overflow: hidden;
  border-radius: 10px;
  text-align: center;
`;

const StyledPanel = styled.div`
  position: absolute;
  display: inline-block;
  background-color: #a0a0a0;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  margin-left: -${({ size }) => size / 2}px;
  border-radius: 50%;
`;

const StyledClockIndex = styled.div`
  position: absolute;
  margin: auto;
  top: 0px;
  bottom: 0px;
  ${({ left }) => (left ? "left" : "right")}: 0px;
  width: 8%;
  height: 5px;
  background: black;
`;

const StyledClockIndexContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform: rotate(${({ degree }) => degree}deg);
`;

const ClockIndex = () =>
  [0, 30, 60, 90, 120, 150].map((degree) => (
    <StyledClockIndexContainer key={degree} degree={degree}>
      <StyledClockIndex left={true} />
      <StyledClockIndex left={false} />
    </StyledClockIndexContainer>
  ));

const StyledPin = styled.div`
  position: absolute;
  margin: auto;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background-color: #303030;
  width: 15px;
  height: 15px;
  border-radius: 50%;
`;

function Panel(props) {
  const { size } = props;
  return (
    <StyledContainer
      size={size}
      onMouseEnter={props.mouseHandler.enter}
      onMouseLeave={props.mouseHandler.leave}
    >
      <StyledPanel size={size}>
        <ClockIndex />
        {props.children}
        <StyledPin />
      </StyledPanel>
    </StyledContainer>
  );
}

export default Panel;
