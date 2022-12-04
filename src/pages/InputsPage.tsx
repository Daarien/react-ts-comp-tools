import { useState, ChangeEvent } from "react";
import { TextField, Checkbox } from "../components";
import styled from "../components/styled-components";

export default function InputsPage() {
  const [checkboxState, setCheckboxState] = useState(false);
  function handleCheckboxChange(e: ChangeEvent<HTMLInputElement>) {
    const { checked } = e.target;
    setCheckboxState(checked);
  }

  return (
    <div>
      <h2>Inputs expamles</h2>
      <hr />
      <h4>Simple textfield with placeholer</h4>
      <p>
        <TextField placeholder="placeholer" />
      </p>
      <h4>Textfield with label, default value and helper text</h4>
      <p>
        <TextField
          label="Simple text field"
          defaultValue="Default value"
          helperText="This is helper text"
        />
      </p>
      <p>
        <Box>
          <label htmlFor="check-1">Uncontrolled checkbox</label>
          <Checkbox id="check-1" />
        </Box>
        <Box>
          <label htmlFor="check-2">Checkbox with default check</label>
          <Checkbox id="check-2" defaultChecked />
        </Box>
        <Box>
          <label htmlFor="check-3">Contolled checkbox</label>
          <Checkbox
            id="check-3"
            checked={checkboxState}
            onChange={handleCheckboxChange}
          />
        </Box>
      </p>
    </div>
  );
}

const Box = styled.div`
  display: inline-flex;
  margin-right: 24px;
  label {
    margin-right: 8px;
  }
`;
