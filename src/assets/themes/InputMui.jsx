import React from 'react';
import { TextField, Button, Box } from '@mui/material';

export default function NumberInput() {
  const [value, setValue] = React.useState(0);

  const increment = () => setValue((prev) => prev + 1);
  const decrement = () => setValue((prev) => (prev > 0 ? prev - 1 : 0));

  const handleChange = (e) => {
    const newValue = parseInt(e.target.value) || 0;
    setValue(newValue);
  };

  return (
    <Box display="flex" alignItems="center">
      <Button variant="outlined" onClick={decrement} color='secondary'>
        -
      </Button>
      <TextField
        type="number"
        value={value}
        onChange={handleChange}
        inputProps={{
          min: 0,
          style: { textAlign: 'center' },
        }}
        sx={{ width: 100, mx: 1 }}
      />
      <Button variant="outlined" onClick={increment} color='secondary'>
        +
      </Button>
    </Box>
  );
}
