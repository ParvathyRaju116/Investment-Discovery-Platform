import React, { useEffect, useState } from "react";
import Badge from "@mui/material/Badge";
import Snackbar from "@mui/material/Snackbar";
import MailIcon from "@mui/icons-material/Mail";
import { Button, Col, Row } from "react-bootstrap";
import Avatar from "@mui/material/Avatar";
import CloseIcon from "@mui/icons-material/Close";
import "./Notifications.css";
import { Box, IconButton, Button as MuiButton } from "@mui/material";

function Notifications() {
  const [open, setOpen] = React.useState(false);
  const [notifications, setNotifications] = useState([]);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  

  const fetchNotifications = [
    {
      userId: "1",
      name: "Notification 1",
      avatar:
        "https://i.postimg.cc/28jmQ1gd/head-shot-portrait-close-smiling-600nw-1714666150.webp",
      content:
        "    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim dicta, laborum et dolore quis consequatur, laudantium dolor aspernatur, at suscipit quidem minima illum corrupti iure ipsum voluptatem commodi possimus in.",
    },
    {
      userId: "1",
      name: "Notification 2",
      avatar:
        "https://i.postimg.cc/28jmQ1gd/head-shot-portrait-close-smiling-600nw-1714666150.webp",
      content:
        "    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim dicta, laborum et dolore quis consequatur, laudantium dolor aspernatur, at suscipit quidem minima illum corrupti iure ipsum voluptatem commodi possimus in.",
    },
    {
      userId: "1",
      name: "Notification ",
      avatar:
        "https://i.postimg.cc/28jmQ1gd/head-shot-portrait-close-smiling-600nw-1714666150.webp",
      content:
        "    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim dicta, laborum et dolore quis consequatur, laudantium dolor aspernatur, at suscipit quidem minima illum corrupti iure ipsum voluptatem commodi possimus in.",
    },
    {
      userId: "1",
      name: "Notification 2",
      avatar:
        "https://i.postimg.cc/28jmQ1gd/head-shot-portrait-close-smiling-600nw-1714666150.webp",
      content:
        "    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim dicta, laborum et dolore quis consequatur, laudantium dolor aspernatur, at suscipit quidem minima illum corrupti iure ipsum voluptatem commodi possimus in.",
    },
    {
      userId: "1",
      name: "Notification 2",
      avatar:
        "https://i.postimg.cc/28jmQ1gd/head-shot-portrait-close-smiling-600nw-1714666150.webp",
      content:
        "    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim dicta, laborum et dolore quis consequatur, laudantium dolor aspernatur, at suscipit quidem minima illum corrupti iure ipsum voluptatem commodi possimus in.",
    },
    {
      userId: "1",
      name: "Notification 2",
      avatar:
        "https://i.postimg.cc/28jmQ1gd/head-shot-portrait-close-smiling-600nw-1714666150.webp",
      content:
        "    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim dicta, laborum et dolore quis consequatur, laudantium dolor aspernatur, at suscipit quidem minima illum corrupti iure ipsum voluptatem commodi possimus in.",
    },
    {
      userId: "1",
      name: "Notification 2",
      avatar:
        "https://i.postimg.cc/28jmQ1gd/head-shot-portrait-close-smiling-600nw-1714666150.webp",
      content:
        "    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim dicta, laborum et dolore quis consequatur, laudantium dolor aspernatur, at suscipit quidem minima illum corrupti iure ipsum voluptatem commodi possimus in.",
    },
    {
      userId: "1",
      name: "Notification 2",
      avatar:
        "https://i.postimg.cc/28jmQ1gd/head-shot-portrait-close-smiling-600nw-1714666150.webp",
      content:
        "    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim dicta, laborum et dolore quis consequatur, laudantium dolor aspernatur, at suscipit quidem minima illum corrupti iure ipsum voluptatem commodi possimus in.",
    },
    {
      userId: "1",
      name: "Notification 2",
      avatar:
        "https://i.postimg.cc/28jmQ1gd/head-shot-portrait-close-smiling-600nw-1714666150.webp",
      content:
        "    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim dicta, laborum et dolore quis consequatur, laudantium dolor aspernatur, at suscipit quidem minima illum corrupti iure ipsum voluptatem commodi possimus in.",
    },
  ];

  return (
    <div>
      <Badge
        onClick={handleClick}
        className="fs-2 me-4"
        badgeContent={fetchNotifications.length}
        color="primary"
      >
        <i class="fa-regular fa-bell"></i>
      </Badge>
      <Snackbar
        className="mt-5 snackbar"
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        message={
          <>
            {fetchNotifications.map((i, index) => (
              <div key={index}>
                <Row>
                  <Col lg={1}>
                    <Avatar alt="Remy Sharp" src={i.avatar} />
                    
                  </Col>
                  <Col lg={11}>
                    <h6 className="">{i.name}</h6>
                    <p>{`${i.content.substring(0, 80)}${
                      i.content.length > 80 ? "..." : ""
                    }`}</p>                    
                  </Col>
                  
                </Row>
                <hr />
              </div>
            ))}
            <div className="snackbar-buttons">
              <button className="button p-2" size="small">
               <b> Clear All</b>
              </button>
              <button
                className="button p-2"
                size="small"
                aria-label="close"
                onClick={handleClose}
              >
               <b> Close</b>
              </button>
            </div>
          </>
        }
      />
      <></>
    </div>
  );
}

export default Notifications;
