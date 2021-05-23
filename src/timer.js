import React from "react";

function TimerComponent() {
  const [time, setTime] = React.useState(0);
  React.useEffect(function updateTime() {
    setTime(time + 1);
  }, []);
  return (
    <div>
      <p>{time}초</p>
      <button onClick={updateTime}>클릭해보세요</button>
    </div>
  );
}

export default TimerComponent;
