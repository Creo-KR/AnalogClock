import Panel from "./panel";
import Hand from "./hand";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setTime, setTooltip } from "../../app/slice";
import Tooltip from "./tooltip";

function Clock(props) {
  const dispatch = useDispatch();
  const size = props.size || 300;

  const mouseHandler = {
    enter: (event) => {
      dispatch(setTooltip(true));
    },
    leave: (event) => {
      dispatch(setTooltip(false));
    },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(setTime());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <Panel mouseHandler={mouseHandler} size={size}>
      <Hand type="hour" />
      <Hand type="minute" />
      <Hand type="second" />
      <Tooltip />
    </Panel>
  );
}

export default Clock;
