import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const StyledTableCell = styled(TableCell)(({ }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor:"#F0F0F0",
    color: "#303E65",
    textAlign:"center",
    fontSize:"12px",
    fontWeight:"700",
    lineHeight:"20px",
    borderBottom:"none",
    height:"50px"
  },
  [`&.${tableCellClasses.row}`]: {
    height:"40px"
  },
  [`&.${tableCellClasses.body}`]: {
    border:"none",
    textAlign:"center",
    fontSize:"12px",
    fontWeight:"400",
    lineHeight:"20px"

  },
}));

const StyledTableRow = styled(TableRow)(({  }) => ({
  boxShadow:"none",
  '& .MuiTableRow-root':{
    height:"40px !impotance"
  },
  '&:nth-of-type(even)': {
    backgroundColor:"rgba(240, 240, 240, 0.30)",
    height:"40px"
  },
  '&:nth-of-type(old)': {
    height:"40px"
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



export default function CustomTable({...props}) {
  function createData(stt,name,emplCode, startTime, endTime, realTime, status, note, operation ) {
    return {stt,name,emplCode, startTime, endTime, realTime, status, note, operation };
  }
  const rows = [
    createData(1,"phong", "phongnd2", "08:50","18:03","08:00","Binh thương","", "chinh sua"),
    createData(2,"phong", "phongnd3", "08:50","18:03","08:00","Binh thương","", "chinh sua"),
    createData(3,"phong", "phongnd3", "08:50","18:03","08:00","Binh thương","", "chinh sua"),
    createData(4,"phong", "phongnd3", "08:50","18:03","08:00","Binh thương","", "chinh sua")
  ];
  return (
    <TableContainer >
      
      <Table sx={{ minWidth:1000 }} aria-label="customized table">
          
        <TableHead>
          <TableRow>
            <StyledTableCell sx={{width:40,p:0}}>STT</StyledTableCell>
            <StyledTableCell sx={{width:220,p:0}}  >Họ và tên</StyledTableCell>
            <StyledTableCell sx={{width:150,p:0}} >Mã nhân viên</StyledTableCell>
            <StyledTableCell sx={{width:120,p:0}} >Giờ vào làm</StyledTableCell>
            <StyledTableCell sx={{width:120,p:0}} >Giờ tan làm</StyledTableCell>
            <StyledTableCell sx={{width:100,p:0}} >Thực làm</StyledTableCell>
            <StyledTableCell sx={{width:150,p:0}} >Trạng thái</StyledTableCell>
            <StyledTableCell sx={{minWidth:148,p:0}} >Ghi chú</StyledTableCell>
            <StyledTableCell sx={{width:148,p:0}} >Thao tác</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.stt}>
              <StyledTableCell component="th" scope="row">
                {row.stt}
              </StyledTableCell>
              <StyledTableCell sx={{width:220,height:40,p:0}} >{row.name}</StyledTableCell>
              <StyledTableCell sx={{width:150,height:40,p:0}} >{row.emplCode}</StyledTableCell>
              <StyledTableCell sx={{width:120,height:40,p:0}}>{row.startTime}</StyledTableCell>
              <StyledTableCell sx={{width:120,height:40,p:0}}>{row.endTime}</StyledTableCell>
              <StyledTableCell sx={{width:100,height:40,p:0}}>{row.realTime}</StyledTableCell>
              <StyledTableCell sx={{width:150,height:40,p:0}}>{row.status}</StyledTableCell>
              <StyledTableCell sx={{minWidth:148,height:40,p:0}}>{row.note}</StyledTableCell>
              <StyledTableCell sx={{width:148,height:40,p:0}}>{row.operation}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
