import { useState } from "react";
import JSONDATA from "./data/MOCK_DATA.json";


function App() {
  const divStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const [value, setValue] = useState("");

  const filteredData = JSONDATA.filter((val) => {
    if (val === "") {
      return val;
    } else if (val.first_name.toLowerCase().includes(value.toLowerCase())) {
      return val;
    }
  });

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div style={divStyle}>
      <input type="text" placeholder="Search..." onChange={handleInputChange} />

      {filteredData.map((val, key) => {
        return <p key={key}> {val.first_name}</p>;
      })}
    </div>
  );
}

export default App;
