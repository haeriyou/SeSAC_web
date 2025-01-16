import { useEffect, useState, useMemo } from "react";

export default function UseMemoObj() {
  const [number, setNumber] = useState(0);
  const [isKorea, setIsKorea] = useState(true);

  //   const location = {
  //     country: isKorea ? "Korea" : "abroad",
  //   };

  const location = useMemo(() => {
    return { country: isKorea ? "Korea" : "abroad" };
  }, [isKorea]);

  useEffect(() => {
    console.log("location이 변경될 때 마다 실행됩니다. ✊🏻");
  }, [location]);

  return (
    <div style={{ border: "1px solid blue" }}>
      <input
        type="number"
        onChange={(e) => setNumber(e.target.value)}
        value={number}
      />
      <p>나라: {location.country}</p>
      <button onClick={() => setIsKorea(!isKorea)}>나라 변경</button>
    </div>
  );
}
