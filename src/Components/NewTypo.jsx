import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function NewTypo() {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };
    // let initialValue;
    // if(localStorage.getItem("Plant"))===NULL
  return (
    <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <div>
        <Typography variant="h4" gutterBottom>
            Basic Details
        </Typography>
        <TextField
          required
          id="filled-required"
          label="Required"
          defaultValue="Enter First name"
          variant="filled"
        />
        <TextField id="filled-basic" label="Filled" variant="filled" defaultValue="Enter Middle name"/>
        <TextField
          required
          id="filled-required"
          label="Required"
          defaultValue="Enter Last name"
          variant="filled"
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DatePicker']}>
            <DatePicker label="Date of Birth" />
        </DemoContainer>
        </LocalizationProvider>
        {/* <br/> */}
        <Box sx={{ width: 100, maxWidth: '100%'  }}>
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
            >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
            </Select>
        </FormControl>
        </Box>
        <Box sx={{ width: 500, maxWidth: '100%' }}>
        <TextField fullWidth label="fullWidth" id="fullWidth" defaultValue="Enter Address"/>
        </Box>
        <Stack spacing={2} direction="row">
      <Button variant="contained">Submit</Button>
      </Stack>
      </div>
    </Box>
  );
}