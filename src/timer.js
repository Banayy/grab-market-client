import React from "react";

function TimerComponent() {
  const [time, setTime] = React.useState(0);
  React.useEffect(function () {
    setTime(time + 1);
  }, []);
  return (
    <div>
      <p>{time}초</p>
      <button>클릭해보세요</button>
    </div>
  );
}

export default TimerComponent;
