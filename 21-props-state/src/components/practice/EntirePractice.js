import { useState } from "react";
import Select from "./Select";
import Input from "./Input";
import Result from "./Result";

export default function EntirePractice() {
  const [data, setData] = useState({
    fruit: "apple",
    background: "white",
    color: "gray",
    content: "text",
  });
  return (
    <>
      <Select setData={setData} />
      <Input setData={setData} />
      <Result data={data} />
    </>
  );
}
