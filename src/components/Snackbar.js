import * as React from 'react';
import Button from '@mui/material/Button';
import {Snackbar,Alert} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export default function SimpleSnackbar({onClose, open, severity, message}) {


//   const action = (
//     <React.Fragment>
//       <Button color="secondary" size="small" onClick={onClose}>
//         UNDO
//       </Button>
//       <IconButton
//         size="small"
//         aria-label="close"
//         color="inherit"
//         onClick={onClose}
//       >
//         <CloseIcon fontSize="small" />
//       </IconButton>
//     </React.Fragment>
//   );

  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={onClose}>
      <Alert onClose={onClose} severity={severity}>
        {message}
      </Alert>
      </Snackbar>
    </div>
  );
}