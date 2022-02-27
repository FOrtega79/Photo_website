import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Link } from '@mui/material';

const style = {
  position: 'absolute',
  top: '30%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 350,
  bgcolor: 'rgba(255, 255, 255, 0.75)',
  // border: '1px solid #000',
  boxShadow: 24,
  p: 2,
 
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Link onClick={handleOpen}>About me</Link>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          backdropFilter: "blur(3px)",
          //other styles here
        }}
      >
        <Box className='modalBox' sx={style}>
          
          <Typography id="modal-modal-description" sx={{ mt: 1, fontFamily:'Special Elite' }}>
          Claudia Matute is a Madrid-based photographer focused on the fashion industry.
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 1, fontSize:16, fontFamily:'Special Elite' }}>
          Recent clients: <br></br>
          Ynesuelves, Vogue
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}