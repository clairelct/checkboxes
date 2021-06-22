import React, { useState } from "react";
import "./App.css";

function App() {
  const [masterIsChecked, setMasterIsChecked] = useState(false);
  const [simpleCheckboxes, setSimpleCheckboxes] = useState([
    { id: "checkbox1", name: "checkbox-1", isChecked: false },
    { id: "checkbox2", name: "checkbox-2", isChecked: false },
    { id: "checkbox3", name: "checkbox-3", isChecked: false },
    { id: "checkbox4", name: "checkbox-4", isChecked: false },
  ]);

  const handleOnChangeMaster = (event) => {
    setMasterIsChecked(!masterIsChecked);

    const newList = [...simpleCheckboxes];
    newList.forEach((checkbox) => (checkbox.isChecked = event.target.checked));
    setSimpleCheckboxes(newList);
  };

  const handleOnChange = (index) => {
    setSimpleCheckboxes(
      [...simpleCheckboxes],
      (simpleCheckboxes[index].isChecked = !simpleCheckboxes[index].isChecked)
    );
    // Verifies (each time) all checkboxes 'isChecked' value
    // Looking for no 'false' value to update master checkbox's state
    const notAllChecked = simpleCheckboxes.some((elem) => elem.isChecked === false);
    if (notAllChecked){
      setMasterIsChecked(false);
    } else {
      setMasterIsChecked(true);
    }
  };

  return (
    <>
      <h1>Checkboxes</h1>
      <input
        type="checkbox"
        id="master-checkbox"
        name="master-checkbox"
        checked={masterIsChecked}
        onChange={(event) => handleOnChangeMaster(event)}
      />

      {simpleCheckboxes.map((checkbox, index) => {
        return (
          <input
            key={index}
            type="checkbox"
            id={checkbox.id}
            name={checkbox.name}
            checked={checkbox.isChecked}
            onChange={() => {
              handleOnChange(index);
            }}
          />
        );
      })}
    </>
  );
}

export default App;
