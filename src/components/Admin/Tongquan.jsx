import React from "react";
import Box from "@mui/material/Box";
import logo from "../../image/logo.svg";
import account from "../../image/account.svg";
import kosin from "../../image/kosin.svg";
import CustomBox from "../common/CustomBox";
import { Link } from "react-router-dom/dist";
function Tongquan() {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        // justifyContent: "center",
        flexDirection: "column"
      }}
    >
      {/* heading */}
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
        <Box display="flex" alignItems="center" justifyContent="center">
          <Box marginRight="48px">
            <img src={logo} alt="rikkeiLogo" />
          </Box>

          <Box display="flex" alignItems="center" justifyContent="center">
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
        <Box display="flex" alignItems="center">
          <img src={account} alt="" />
          <h2
            className="title-heading"
            style={{ fontWeight: "400", paddingLeft: "4px" }}
          >
            admin
          </h2>
        </Box>
      </Box>
      {/* titile */}
      <Box
        sx={{
          minWidth: "1280px",
          height: "84px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <Box>
          <h1
            className="title-heading"
            style={{ fontSize: "32px", paddingLeft: "0" }}
          >
            Tổng quan
          </h1>
        </Box>

        <Box>
          <img src={kosin} alt="" />
        </Box>
      </Box>
      {/* status */}
      <Box
        className="display-flex1280"
      >
        <Box display="flex" justifyContent="space-between" marginBottom="16px">
          <h4
            className="title-text"
            style={{ fontSize: "14px", fontWeight: "400" }}
          >
            Chấm công hôm nay
          </h4>
          <h4 className="title-text" style={{ fontSize: "14px" }}>
            08:56:32 thứ 3 ngày 03 tháng 10
          </h4>
        </Box>

        <Box display="flex" justifyContent="space-between">
          <CustomBox
            background="rgba(107, 203, 119, 0.20)"
            colorTitle="#6BCB77"
            title="35"
            detail="Vào làm"
            height="70px"
            width="300px"
            borderRadius="10px"
            marginBottom="8px"
          />

          <CustomBox
            background="rgba(255, 217, 61, 0.20)"
            title="5"
            detail="Đi muộn"
            height="70px"
            width="300px"
            borderRadius="10px"
            marginBottom="8px"
            colorTitle="#FFD93D"
          />

          <CustomBox
            background="rgba(231, 76, 60, 0.20)"
            colorTitle="#E74C3C"
            title="12"
            detail="Chưa vào"
            height="70px"
            width="300px"
            borderRadius="10px"
            marginBottom="8px"
          />

          <CustomBox
            background="rgba(187, 153, 129, 0.20)"
            colorTitle="#BB9981"
            title="2"
            detail="Nghỉ phép"
            height="70px"
            width="300px"
            borderRadius="10px"
            marginBottom="8px"
          />
        </Box>
      </Box>

      {/* detail */}
      <Box className="display-flex1280" marginTop="16px"> 
        <Box  display="flex" justifyContent="space-between" marginBottom="16px" >
        <h4
            className="title-text"
            style={{ fontSize: "14px", fontWeight: "400" }}
          >
            Lịch sử chấm công
          </h4>
          <h4 className="title-text" style={{ fontSize: "14px" }}>
            08:56:32 thứ 3 ngày 03 tháng 10
          </h4>
        </Box>

        <Box display="flex" justifyContent="space-between">
        <CustomBox
            title="T2 2 Th.10"
            detail="Chi tiết"
            border ="1px solid #303E65"
            fontTitle="12px"
            fontDetail="12px"
          />
        <CustomBox
            title="T2 2 Th.10"
            detail="Chi tiết"
            border ="1px solid #303E65"
            fontTitle="12px"
            fontDetail="12px"
          />
        <CustomBox
            title="T2 2 Th.10"
            detail="Chi tiết"
            border ="1px solid #F0F0F0"
            fontTitle="12px"
            fontDetail="12px"
          />
        <CustomBox
            title="T2 2 Th.10"
            detail="Chi tiết"
            border ="1px solid #F0F0F0"
            fontTitle="12px"
            fontDetail="12px"
          />
        <CustomBox
            title="T2 2 Th.10"
            detail="Chi tiết"
            border ="1px solid #F0F0F0"
            fontTitle="12px"
            fontDetail="12px"
          />
        <CustomBox
            title="T2 2 Th.10"
            detail="Chi tiết"
            border ="1px solid #F0F0F0"
            fontTitle="12px"
            fontDetail="12px"
          />
        <CustomBox
            title="T2 2 Th.10"
            detail="Chi tiết"
            border ="1px solid #F0F0F0"
            fontTitle="12px"
            fontDetail="12px"
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Tongquan;
