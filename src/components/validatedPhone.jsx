import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


function ValidatedPhone() {  

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
      };

    return (
      <>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Item><TextField id="outlined-basic" label="Outlined" variant="outlined" /></Item>
                </Grid>
                <Grid item xs={4}>
                    <Item><TextField id="filled-basic" label="Filled" variant="filled" /></Item>
                </Grid>
                <Grid item xs={4}>
                <   Item><TextField id="standard-basic" label="Standard" variant="standard" /></Item>
                </Grid>
                <Grid item xs={8}>
                    <Item>
                        <img src="https://cdn.pixabay.com/photo/2023/08/18/15/02/dog-8198719_640.jpg" width={'25%'} alt="" />
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>
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
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>
                    <Button variant="text" onClick={ () => alert("Boton 1")}>Text</Button>
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>
                    <Button variant="contained"  onClick={ () => alert("Boton 2")}>Contained</Button>
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>
                    <Button variant="outlined"  onClick={ () => alert("Boton 3")}>Outlined</Button>
                    </Item>
                </Grid>
            </Grid>
        </Box>
      </>
    )
}

  export default ValidatedPhone;