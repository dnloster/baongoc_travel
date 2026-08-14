import React from "react";
import { Box } from "@mui/material";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ChatPopup from "./ChatPopup";

const Layout = () => {
    const location = useLocation();
    const isHomePage = location.pathname === "/";

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
                width: "100%",
                overflowX: "hidden",
            }}
        >
            <Header />
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    width: "100%",
                    minWidth: 0,
                    paddingTop: isHomePage
                        ? 0
                        : { xs: "64px", sm: "64px", md: "80px" },
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Outlet />
            </Box>
            <Footer />
            <ChatPopup />
        </Box>
    );
};

export default Layout;
