import React, { useState } from "react";
import "./App.css";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { withStyles } from "@material-ui/core/styles";

// Style
const MasterCheckbox = withStyles({
  root: {
    color: "#028D8D",
    "&$checked": {
      color: "#028D8D",
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const SimpleCheckbox = withStyles({
  root: {
    color: "#3CB0B0",
    "&$checked": {
      color: "#3CB0B0",
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

function App() {
  const [masterIsChecked, setMasterIsChecked] = useState(false);
  const [simpleCheckboxes, setSimpleCheckboxes] = useState([
    {
      id: "checkbox1",
      name: "checkbox-1",
      label: "Learn more about JavaScript and ReactJS.",
      isChecked: false,
    },
    {
      id: "checkbox2",
      name: "checkbox-2",
      label: "Work in a cool place.",
      isChecked: false,
    },
    {
      id: "checkbox3",
      name: "checkbox-3",
      label: "Be surrounded by awesome coworkers !",
      isChecked: false,
    },
    {
      id: "checkbox4",
      name: "checkbox-4",
      label: "Earn money doing something I like to do.",
      isChecked: false,
    },
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
    const notAllChecked = simpleCheckboxes.some(
      (elem) => elem.isChecked === false
    );
    if (notAllChecked) {
      setMasterIsChecked(false);
    } else {
      setMasterIsChecked(true);
    }
  };

  return (
    <>
      <main>
        <div className="container">
          <header>
            <h1>Checkboxes</h1>
            <h2>In my next job, I wish I...</h2>
          </header>

          <FormControlLabel
            control={
              <MasterCheckbox
                name="master-checkbox"
                checked={masterIsChecked}
                onChange={(event) => handleOnChangeMaster(event)}
                inputProps={{ "aria-label": "primary checkbox" }}
              />
            }
            label="Select / Unselect all"
          />

          <div className="checkbox-group">
            <FormGroup column>
              {simpleCheckboxes.map((checkbox, index) => {
                return (
                  // <SimpleCheckbox
                  //   key={index}
                  //   name={checkbox.name}
                  //   checked={checkbox.isChecked}
                  //   onChange={() => {
                  //     handleOnChange(index);
                  //   }}
                  //   inputProps={{ "aria-label": "primary checkbox" }}
                  // />
                  <FormControlLabel
                    control={
                      <SimpleCheckbox
                        key={index}
                        name={checkbox.name}
                        checked={checkbox.isChecked}
                        onChange={() => {
                          handleOnChange(index);
                        }}
                        inputProps={{ "aria-label": "primary checkbox" }}
                      />
                    }
                    label={checkbox.label}
                  />
                );
              })}
            </FormGroup>
          </div>
        </div>
      </main>
      <footer>Claire Leconte - for FULLL</footer>
    </>
  );
}

export default App;
