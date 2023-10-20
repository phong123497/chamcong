
import CustomTable from './CustomTable';
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 712,
  bgcolor: '#fff',
  border: '1px solid #f0f0f0',
  boxShadow: 24,
  p: "16px",

};

export default function CustomModal({isOpen,handleClose}) {
  const handleCloseModal =() =>{
    handleClose(true)
  }
  return (
    <div>
      <Modal
        open={isOpen}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          border:"none"
        }}
      >
        <Box sx={style}>
          <h2 className='title-text' style={{fontSize:"24px"}} >Danh sách nhân viên Đi muộn thứ 3 ngày 03 tháng 10</h2>
          <CustomTable/>
          <Button onClick={handleCloseModal} variant='contained' size='medium'>
          Đóng
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

