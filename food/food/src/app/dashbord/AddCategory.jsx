'use client'
import { Accordion, AccordionDetails, AccordionSummary, Button, IconButton, Snackbar, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { LoadingButton } from '@mui/lab';
import SaveIcon from '@mui/icons-material/Save';
import CloseIcon from '@mui/icons-material/Close';
import axios from "axios";


  

const AddCategory = () => {
    const [loading, setLoading] =useState(false);
    const [open, setOpen] =useState(false);
    const [categoryData,setCategoryData]=useState([]);
    const [categoryTitle,setCategoryTitl]=useState('');
    const [openErr, setOpenErr] = useState(false);
  
    useEffect(()=>{
      retriveCategorys();
    },[])
  
  const retriveCategorys=async()=>{
   await axios.get('http://localhost:3002/getCategory')
    .then(function (response) {
      // handle success
      if(response.status==200){
        setCategoryData(response.data.response)
      }
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  }

  const submitData = async (e) => {
    handleClick();
    e.preventDefault();

    const formData = new FormData();
    formData.append('categoryTitle',categoryTitle)
    
try {

  const result = await axios.get(
    "http://localhost:3002/addCategory?categoryTitle="+categoryTitle
 
  ).then(responce =>{
    if(responce.status==200){
      retriveCategorys();
      setLoading(false);
      setOpen(true);
      setCategoryTitl('')

    }else{
      setLoading(false);
      setOpenErr(true)
    }
   
  })
} catch (error) {
  setLoading(false);
  setOpenErr(true)
}
  };
  
    function handleClick() {
      setLoading(true);
    }


    const handleSnak = () => {
        setOpen(true);
      };
    
      const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };

      const action = (
        <React.Fragment>
          <Button color="success" size="small" onClick={handleClose}>
            Done
          </Button>
          <IconButton
            size="small"
            aria-label="close"
            color="success"
            onClick={handleClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </React.Fragment>
      );
  return (
    <div>
         <div className='flex flex-col py-2 sm:px-10 md:px-24'>
      <div className=''>
      <Accordion className='mt-4'>
        <AccordionSummary 
        className='font-bold'
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Add New Category
        </AccordionSummary>
        <AccordionDetails>
<div>
  <form id='from2' >
    <div>
<TextField value={categoryTitle} onChange={(event)=>setCategoryTitl(event.target.value)}  className='w-full mt-2' id="title" size='small' label="Enter Category Titile" variant="filled" />
<div className='flex justify-center mt-4'>
<LoadingButton
                      className='px-10'
                     onClick={submitData}
                      size="large"
                      color="success"

                      loading={loading}
                      loadingPosition="start"
                      startIcon={<SaveIcon />}
                      variant="outlined"
                    >
                      <span>Save</span>
                    </LoadingButton>
      
</div>
</div>
</form>
<div className='mt-4 bg-stone-400'>
<TableContainer component={Paper}>
      <Table sx={{ minWidth: 360 }} aria-label="simple table">
        <TableHead>
          <TableRow >
            <TableCell className='font-extrabold' >No</TableCell>
            <TableCell  className='font-extrabold' align="left">Category</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {categoryData.map((category, index) => (

            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {index+1}
              </TableCell>
              <TableCell align="left">{category.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
</div>
</div>


        </AccordionDetails>
        </Accordion>
    </div>
    </div>
    <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Category Saved"
        action={action}
      />
          <Snackbar
        open={openErr}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Somthing went wrong.try again"
        action={action}
      />
    </div>
  )
}

export default AddCategory