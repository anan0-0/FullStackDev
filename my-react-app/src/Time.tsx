import { useState, useEffect } from "react";

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ fontSize: "1.5rem", fontFamily: "monospace", textAlign: "center" }}>
      Current Time: {time.toLocaleTimeString()}
    </div>
  );
}
