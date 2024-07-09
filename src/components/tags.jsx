import * as React from 'react';
import { useEffect } from 'react';
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

function Tags() {

    const [open, setOpen] = React.useState(false);
    const [tags, setTags] = React.useState([]);
    const [name, setName] = React.useState("");
    const [tagId, setTagId] = React.useState();

    useEffect(() => {
      refreshList()
    }, [])

    function refreshList(){
      let url = "https://localhost:7272/Tag";

      fetch(url, {
        method:"GET",
        credentials: "include"
      })
      .then(x => x.json())
      .then(data => {
        setTags(data)
      })
      .catch(e => {
        console.log(e)
      })
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleAdd = () => {
        let url = "https://localhost:7272/Tag"
        let body = {name : name};
        let aux = JSON.stringify(body);
        console.log("tag added: " + name);
        console.log(aux)
        var request = new Request(url, {
          method: 'POST',
          body: aux,
          headers: {
            'Content-Type': 'application/json'
          },
          credentials: "include"
        });
        
        fetch(request)
        .then(x => x.json())
        .then(data => {
          refreshList();
          setOpen(false);
        }).catch(x => {
          console.log(x)
        })
        
    };

    const handleDelete = (tagId) => {
      let url = "https://localhost:7272/Tag/ById/"+tagId
      let body = {name : name};
      var aux = JSON.stringify(body);
      console.log("tag added: " + name);
      console.log(aux)
      var request = new Request(url, {
        method: 'DELETE',
        body: aux,
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include'
      });
      
      fetch(request)
      .then(x => x.json())
      .then(data => {
        console.log(data)
        refreshList();
      }).catch(x => {
        console.log(x)
      })
      
      //todo: conectar con backend
  };

    const handleNameChange = (e) =>
    {
        setName(e.target.value)
    }

    return (
        <>
        <h1>Tags</h1>
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
                {tags.map((tag) => (
                <TableRow
                    key={tag.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {tag.id}
                    </TableCell>
                    <TableCell component="th" scope="row">
                    {tag.name}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      <Button variant="contained" onClick={handleClickOpen} color='info'>Update</Button>
                      <Button variant="contained" onClick={() => handleDelete(tag.id)} color='error'>Delete</Button>
                    </TableCell>
              
                </TableRow>
                )) }
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
          {"Add new tag"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <div>
            <TextField id="name" label="Name" variant="filled" onChange={handleNameChange} />
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={() => handleAdd()} autoFocus>
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
  
  export {Tags}