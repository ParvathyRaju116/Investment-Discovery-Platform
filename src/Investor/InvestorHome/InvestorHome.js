import { Box, Skeleton } from "@mui/material";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../../CommonComponents/Header";
import CardSkeleton from "../../CommonComponents/Card Skeleton/CardSkeleton";


export const InvestorHome = () => {
    const navObj = [
        { text: "Home", link: "/" },
        { text: "My Projects", link: "/innovator/projects" },
        { text: "Messages", link: "/innovator/messages" },
      ];
  return (
    <div>
        <Header navObj={navObj}/>
        <CardSkeleton/>
        
    </div>
  );
};
