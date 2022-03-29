import React, {useContext} from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { ContextObject } from '../../context/ContextProvider';


const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbar() {
  const {snackBarData, setSnackBarData} = useContext(ContextObject);
  
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackBarData({ open :false, severity:"", message:""});
  };

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={snackBarData.open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={snackBarData.severity} sx={{ width: '100%' }}>
          {snackBarData.message}
        </Alert>
      </Snackbar>
    </Stack>
  );
}
