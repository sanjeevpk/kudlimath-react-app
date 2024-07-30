

import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import HomeOrigin from '../images/home_origin.png';

const style = {
  position: 'absolute' ,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Chaturmasa() {
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            ||Shree Vaikunta Seeta Raamchandro Vijayate||
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            22nd Chaturmasya of Shree Shree 1008 Shree RaghuVijaya Teertha Swamiji 
            will be held at Ranebennuru from 30th July to 18th Sep 2024

            <br/>
            Venue:<br/>
            Shree Vidyadhishateertha Matha<br/>
            Shree Satyabhijyateertha Sannidhana<br/>
            Uttaradhi Math, Kote Ranebennuru<br/>
            <br/>
          </Typography>
          <img className='rounded'
                            alt="Origin"
                            src={HomeOrigin}
                            style={{height:'400px', width:'auto'}}
                        />
        </Box>
      </Modal>
    </div>
  );
}