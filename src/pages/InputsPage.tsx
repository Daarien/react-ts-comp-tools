import React, { useState, ChangeEvent } from 'react';
import {
  TextField,
  Checkbox,
  Input,
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
      <h3>Inputs</h3>
      <h4>Outlined inputs</h4>
      <section>
        <Box>
          <Input defaultValue="small outlined" variant="outlined" size="small" />
        </Box>
        <Box>
          <Input defaultValue="medium oulined" variant="outlined" />
        </Box>
        <Box>
          <Input defaultValue="large outlined" variant="outlined" size="large" />
        </Box>
      </section>
      <h4>Textfield with label, default value and helper text</h4>
      <section>
        <Box>
          <TextField
            size="small"
            variant="outlined"
            label="Input label"
            defaultValue="Small"
            helperText="This is helper text"
          />
        </Box>
        <Box>
          <TextField
            variant="outlined"
            label="Input label"
            defaultValue="Default"
            helperText="This is helper text"
          />
        </Box>
        <Box>
          <TextField
            size="large"
            variant="outlined"
            label="Input label"
            defaultValue="Large"
            helperText="This is helper text"
          />
        </Box>
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
  const [value, setValue] = React.useState('macos');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  function handleFormControlEventBubbling(e: ChangeEvent<HTMLInputElement>) {
    console.log('handleFormControlEventBubbling -> e.target.value', e.target.value);
  }

  return (
    <FormControl component="fieldset" onChange={handleFormControlEventBubbling}>
      <FormLabel component="legend">Choose OS</FormLabel>
      <RadioGroup aria-label="gender" name="os" value={value} onChange={handleChange}>
        <FormControlLabel value="macos" control={<Radio />} label="Mac OS" />
        <FormControlLabel value="windows" control={<Radio />} label="Windows" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
        <FormControlLabel value="dos" disabled control={<Radio />} label="(Disabled option)" />
      </RadioGroup>
    </FormControl>
  );
}
