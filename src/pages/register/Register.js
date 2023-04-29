import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import RegisterComponent from './RegisterComponent';
import Navbar from '../../components/navbar/Navbar';

export default function Register() {
  const [open, setOpen] = React.useState(false);
  

  const handleClickOpen = () => {
  
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
       
     <Navbar onSignUpClick={handleClickOpen}/>
      <Dialog open={open} onClose={handleClose}>
       
        <DialogContent>
          <DialogContentText>
            <RegisterComponent/>
          </DialogContentText>
        
        </DialogContent>
     
      </Dialog>
    </div>
  );
}
