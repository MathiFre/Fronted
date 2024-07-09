import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';

function Categories() {

    const [open, setOpen] = React.useState(false);
    const [categories, setCategories] = React.useState([]);
    const [name, setName] = React.useState("");


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleAdd = () => {
        var body = {name : name};
        var aux = JSON.stringify(body);
        console.log("category added: " + name);
        console.log(aux)
        //todo: conectar con backend
    };

    const handleNameChange = (e) =>
    {
        setName(e.target.value)
    }

    return (
        <>
        <h1>Categories</h1>
        <hr></hr>
        <Button variant="contained" onClick={handleClickOpen}>Add</Button>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                <TableCell>Id</TableCell>
                <TableCell align="left">Name</TableCell>
                <TableCell align="left">Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {/* {rows.map((row) => (
                <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell component="th" scope="row">
                    {row.name}
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                    <TableCell align="right">{row.carbs}</TableCell>
                    <TableCell align="right">{row.protein}</TableCell>
                </TableRow>
                ))} */}
                <TableRow key={1}>
                    <TableCell component="th" scope="row">
                    1
                    </TableCell>
                    <TableCell component="th" scope="row">
                    Programming
                    </TableCell>
                    <TableCell component="th" scope="row">
                    <Button variant="contained" >Update</Button>
                    <Button variant="contained" color='error'>Delete</Button>
                    </TableCell>
                </TableRow>
            </TableBody>
            </Table>
        </TableContainer>
        <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Add new category"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <div>
            <TextField id="name" label="Name" variant="filled" onChange={handleNameChange} />
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={handleAdd} autoFocus>
                Add
            </Button>
            <Button onClick={handleClose} autoFocus>
                Cancel
            </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
      </>
    );
  }
  
  export {Categories}