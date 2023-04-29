import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import LoginComponent from './LoginComponent';
import Navbar from '../../components/navbar/Navbar';
import { useNavigate } from 'react-router-dom';
export default function Login() {
  const [open, setOpen] = React.useState(false);
  const navigate=useNavigate()

  const handleClickOpen = () => {
    navigate("/login")
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
       
     <Navbar onLoginClick={handleClickOpen}/>
      <Dialog sx={{borderRadius:"5rem"}} open={open} onClose={handleClose}>
       
        <DialogContent sx={{width:"30rem", borderRadius:"5rem"}}>
          <DialogContentText>
            <LoginComponent/>
          </DialogContentText>
        
        </DialogContent>
     
      </Dialog>
    </div>
  );
}
