import React, { useState, ChangeEvent } from 'react';
import {
  TextField,
  Checkbox,
  Radio,
  RadioGroup,
  FormLabel,
  FormControl,
  FormControlLabel,
} from '../components';
import styled from '../components/styled-components';

export default function InputsPage() {
  const [checkboxState, setCheckboxState] = useState(false);
  function handleCheckboxChange(e: ChangeEvent<HTMLInputElement>) {
    const { checked } = e.target;
    setCheckboxState(checked);
  }

  return (
    <Container>
      <h2>Inputs expamles</h2>
      <hr />
      <h4>Simple textfield with placeholer</h4>
      <section>
        <TextField placeholder="placeholer" />
      </section>
      <h4>Textfield with label, default value and helper text</h4>
      <section>
        <TextField
          label="Simple text field"
          defaultValue="Default value"
          helperText="This is helper text"
        />
      </section>
      <h3>Checkboxes</h3>
      <section>
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
          <Checkbox id="check-3" checked={checkboxState} onChange={handleCheckboxChange} />
        </Box>
      </section>
      <h3>Radio buttons</h3>
      <section>
        <RadioButtonsGroup />
      </section>
    </Container>
  );
}

const Container = styled.div`
  h3 {
    color: white;
    background: linear-gradient(to right, green, white);
    padding: 4px 8px;
    margin-left: -8px;
  }
  section {
    margin: 16px 0;
  }
`;

const Box = styled.div`
  display: inline-flex;
  align-items: center;
  margin-right: 24px;
  label {
    margin-right: 8px;
  }
`;

function RadioButtonsGroup() {
  const [value, setValue] = React.useState('female');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  function handleFormControlEventBubbling(e: ChangeEvent<HTMLInputElement>) {
    console.log('handleFormControlEventBubbling -> e.target.value', e.target.value);
  }

  return (
    <FormControl component="fieldset" onChange={handleFormControlEventBubbling}>
      <FormLabel component="legend">Gender</FormLabel>
      <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
        <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" />
      </RadioGroup>
    </FormControl>
  );
}
