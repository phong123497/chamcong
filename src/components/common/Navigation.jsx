import React from "react";
import Box from "@mui/material/Box";
import logo from "../../image/logo.svg";
import account from "../../image/account.svg";
import { Link } from "react-router-dom/dist";
import Popper from "@mui/material/Popper";
import Tooltip from '@mui/material/Tooltip';
function Navigation({ ...props }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleOpenAdmin = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;
  return (
    <Box
      sx={{
        minWidth: "1280px",
        height: "60px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #F0F0F0",
        position: "sticky"
      }}
    >
      <Box className="flexCenter">
        <Box marginRight="48px">
          <img src={logo} alt="rikkeiLogo" />
        </Box>

        <Box className="flexCenter">
          <Box className="item-heading">
            <Link className="link-heading">
              <h2 className="title-heading">Tổng quan</h2>
            </Link>
          </Box>

          <Box className="item-heading">
            <Link className="link-heading">
              <h2 className="title-heading">Nhân sự</h2>
            </Link>
          </Box>

          <Box className="item-heading">
            <Link className="link-heading">
              <h2 className="title-heading">Thống kê</h2>
            </Link>
          </Box>
          <Box className="item-heading">
            <Link className="link-heading">
              <h2 className="title-heading">QRCode Checkin</h2>
            </Link>
          </Box>

          <Box />
        </Box>
      </Box>

      {/* icon admin */}
      <Box className="flexCenter">
        <img src={account} alt="" />
        <h2
          className="title-heading"
          style={{ fontWeight: "400", paddingLeft: "4px" }}
          onClick={handleOpenAdmin}
        >
          admin
        </h2>
      </Box>
      <Tooltip>
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <Box
          className="flexCenter_column_gap8 status-text"
          sx={{
            width:"200px",
            position: "absolute",
            top: "6px",
            right: "-90px",
            background: "#fff",
            border: "none",
            borderRadius: "10px",
            boxShadow: "0px 0px 16px 0px rgba(0, 0, 0, 0.25)"
          }}
        >
          <Box sx={{ borderBottom:"1px solid #F0F0F0",width:"100%"}}>
            <Link className="link-heading">
              <h4 className="status-text " style={{marginBottom:"8px"}}>admin@rikkeisoft.com</h4>
            </Link>
          </Box>
          <Box sx={{ borderBottom:"1px solid #F0F0F0" ,width:"100%" ,padding:"0 0 4px 0"}}>
            <Link className="link-heading">
              <h4 className="status-text ">Cập nhập thông tin</h4>
            </Link>
          </Box>
          <Box sx={{paddingTop:0}}>
            <Link className="link-heading">
              <h4 className="status-text ">Đăng xuất</h4>
            </Link>
          </Box>
        </Box>
      </Popper>
      </Tooltip>
    </Box>
  );
}

export default Navigation;
