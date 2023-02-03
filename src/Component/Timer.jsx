import React from "react";

export default function Timer() {
  const [timer, setTimer] = React.useState(10);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((prevCount) => {
        console.log(prevCount);
        if (prevCount === 0) {
          clearInterval(intervalId);
          return 0;
        }

        return prevCount - 1;
      });
    }, 1000);

    const cleanUp = () => {
      clearInterval(intervalId);
    };

    return cleanUp;
  }, []);

  return (
    <div>
      <h1>Timer</h1>
      <h1>{timer}</h1>
    </div>
  );
}
