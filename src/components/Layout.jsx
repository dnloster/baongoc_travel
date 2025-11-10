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
            }}
        >
            <Header />
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    // Responsive padding-top for non-home pages to prevent header overlap
                    paddingTop: isHomePage
                        ? 0
                        : { xs: "70px", sm: "80px", md: "100px" },
                    // Add responsive horizontal padding
                    px: { xs: 0, sm: 0 }, // Let individual components handle padding
                    display: "flex",
                    justifyContent: "center",
                    width: "100%"
                }}
            >
                <Outlet />
            </Box>
            <Footer />

            {/* Global Chat Popup */}
            <ChatPopup />
        </Box>
    );
};

export default Layout;
