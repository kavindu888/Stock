'use client'
import React, { useEffect, useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { FormControl } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import { LoadingButton } from '@mui/lab';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import axios from "axios";


const AddItem = () => {

  const [open, setOpen] = useState(false);
  const [openErr, setOpenErr] = useState(false);
  const [category, setCategory] = useState('');
  const [image, setImage] = useState();
  const [title, setTitle] = useState('');
  const [discription, setDiscption] = useState('');
  const [packge, setPackge] = useState('');
  const [url, setUrl] = useState(null);
  const [loading, setLoading] = useState(false);
const [categoryData,setCategoryData]=useState([]);
  useEffect(()=>{

    retriveCategorys();
 
   
  },[])

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  
  const uploadImage = async (event) => {
    const files = event.target.files;


    if (image) {
      const base64 = await convertBase64(image);
      uploadSingleImage(base64);
      return;
    }else{
      alert("No Product Image");
      setOpenErr(true);
    }
  }

  async function  uploadSingleImage (base64) {
    setLoading(true);
    if(category=='' || title==''||discription==''||packge===''){
      alert("Enter All data Feild");
      setLoading(false);
      setOpenErr(true);
    }else{
    await axios
      .post("http://localhost:3002/uploadImage", { image: base64,category:category,title:title,discription:discription,packge:packge })
      .then((res) => {
        console.log(res.data)
        setUrl(res.data);
        setOpen(true);

        setCategory('');
        setTitle('');
        setDiscption('');
        setPackge('');
     
       
     
      })
      .then(() => setLoading(false))
      .catch(console.log);
    }
  }






const retriveCategorys=async()=>{
await  axios.get('http://localhost:3002/getCategory')
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


  function handleClick() {
    setLoading(true);
  }


  const onInputChage = (e) => {
    setImage(e.target.files[0]);
  }





  const handleSnak = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
    setOpenErr(false);
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
          <form id='form1'  >
            <Accordion className='mt-4' onChange={retriveCategorys}>
              <AccordionSummary
                className='font-bold'
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                Add New Product
              </AccordionSummary>
              <AccordionDetails>
                <div className=''>

                  <FormControl fullWidth>
                    <InputLabel label="inputCategory" size='small'  id="demo-simple-select-label">Category</InputLabel>
                    <Select
                      size='small'
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={category}
                      label="category"
                      onChange={(event) => setCategory(event.target.value)}
                    >
   {categoryData.map((category, index) => (
       <MenuItem key={index} value={category.name}>{category.name}</MenuItem>
        ))}
                     
                   
                    </Select>
                  </FormControl>
           
                  <div className='flex flex-col justify-center mt-2'>

                    <input  type='file' accept='image/*' onChange={onInputChage} />

                  </div>
               <TextField value={title} onChange={(event) => setTitle(event.target.value)} className='w-full mt-2' id="title" size='small' label="title" variant="filled" />
                  <TextField className='w-full mt-4'
                    id="outlined"
                    label="discprition"
                    multiline
                    rows={10}
                    value={discription}
                    onChange={(e) => setDiscption(e.target.value)}

                  />

                  <TextField className='w-full mt-4'
                    id="outlined-multiline-static"
                    label="package"
                    multiline
                    rows={5}
                    value={packge}
                    onChange={(e) => setPackge(e.target.value)}

                  />
                  <div className='mt-4 justify-center flex flex-row'>
            
                  <LoadingButton
                      className='px-10'
                     onClick={uploadImage}
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
              </AccordionDetails>
            </Accordion>
          </form>

        </div>

      </div>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Item Saved"
        action={action}
      />

      <Snackbar
        open={openErr}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Somthing went Wrong !! hint:Check your data feilds"
        action={action}
      />
    </div>
  )
}

export default AddItem