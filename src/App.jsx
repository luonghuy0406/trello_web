import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import { Box, Container, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useColorScheme } from '@mui/material/styles';
import React from 'react';

function ModeSelect(){
  const {mode, setMode} = useColorScheme();

  const handleChange = (event) => {
    setMode(event.target.value);
  };
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Mode</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={mode}
        label="Mode"
        onChange={handleChange}
      >
        <MenuItem value={"light"}>
          <Box sx={{display: 'flex', alignItems: 'center', gap: '8px'}}>
            <LightModeIcon/>Light
          </Box>
        </MenuItem>
        <MenuItem value={"dark"}>
          <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
            <DarkModeIcon/>Dark
          </Box>
        </MenuItem>
        <MenuItem value={"system"}>
          <Box sx={{display: 'flex', alignItems: 'center', gap: 2}}>
            <SettingsBrightnessIcon/>Auto
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  );
}


function App() {
  return (
    <>
      <Container sx={{height:'100vh', backgroundColor:'primary.main'}}>
        <ModeSelect/>
      </Container>
    </>
  )
}

export default App
