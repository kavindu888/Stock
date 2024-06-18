'use client'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Image from 'next/image';
import { useEffect, useState,useRef } from 'react';
import ct1 from '../../../public/category/1.jpg'
import ct2 from '../../../public/category/2.jpg'
import axios from "axios";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import ScrollDialog from './ScrollDialog';


import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard(props) {
  const [expanded, setExpanded] = React.useState(false);

  const [open, setOpen] = useState(false);
  const [scroll, setScroll] =useState('paper');
  
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleClickOpen =  () => {
   
    setOpen(true);
   
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef =useRef(null);
  useEffect(() => {
 
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);
  return (
    <>
   <div>


<div>
   
    <Card className='w-full h-96 hover:scale-105'  sx={{ maxWidth: 345, }}>
      <CardHeader
      
        title={props.title}
        subheader="Export Products"
      />
    <Image className=' h-40 overflow-hidden' style={{borderTopRadius:10,overflow:'hidden'}}  width={1000} height={100} alt='cardimg' src={props.src} />
 
      <CardActions className='flex justify-center' disableSpacing>  
     
        <Button color='success' className='font-extrabold' onClick={handleClickOpen}  >
        View Datails
      </Button>
      </CardActions>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        {props.discription.length > 55 ? `${props.discription.slice(0, 100)}...` : props.discription}
        </Typography>
      </CardContent>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Discription</Typography>
          <Typography paragraph>
           
          </Typography>
          <Typography paragraph>
         {props.discription}
          </Typography>
          <Typography paragraph>Package Discription</Typography>
          <Typography>
      {props.packageDtl}
       </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </div>
    </div>

    
    <React.Fragment>
  
  <Dialog
    open={open}
    onClose={handleClose}
    scroll='paper'
    aria-labelledby="scroll-dialog-title"
    aria-describedby="scroll-dialog-description"
  >
    <DialogTitle className='text-center '  id="scroll-dialog-title"><span className='font-bold text-green-600 text-3xl'>{props.title}</span> 
   </DialogTitle>
    <DialogContent dividers={scroll === 'paper'}>
      <DialogContentText
        id="scroll-dialog-description"
        ref={descriptionElementRef}
        tabIndex={-1}
        style={{textAlign:'justify'}}
    
    
       
      >
          <Image className='w-full h-auto  p-0 ' 	style={{objectFit: "fill"}} width={1000} height={300} alt='cardimg' src={props.src} />
   <br/>

        <span className='text-2xl font-bold underline'>Discption</span><br/>

     
        {props.discription}
      <br/>
      <br/>
      <span className='text-2xl font-bold underline'>Package Datails</span>
      <br/>
     
      {props.packageDtl}

      </DialogContentText>
     
    </DialogContent>
    <DialogActions>
      <Button color='success' onClick={handleClose}>Close</Button>

    </DialogActions>
  </Dialog>
</React.Fragment>
    
   
       </>
  );
}