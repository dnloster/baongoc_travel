import React, { useState, useEffect } from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Box,
    IconButton,
    useMediaQuery,
    useTheme,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
} from "@mui/material";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/logo_PNG/logo-ngang.png";

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    // Check if current page is Home
    const isHomePage = location.pathname === "/";

    // Detect scroll
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 50);
        };

        // Only add scroll listener on Home page
        if (isHomePage) {
            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        } else {
            // On other pages, always show as scrolled (white background)
            setIsScrolled(true);
        }
    }, [isHomePage]);

    const menuItems = [
        { label: "Trang chủ", path: "/" },
        { label: "Tour du lịch", path: "/tours" },
        { label: "Về chúng tôi", path: "/about" },
        { label: "Liên hệ", path: "/contact" },
    ];

    // const handleMenuClick = (event) => {
    //     setAnchorEl(event.currentTarget);
    // };

    // const handleMenuClose = () => {
    //     setAnchorEl(null);
    // };

    const handleMobileMenuToggle = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const isActivePath = (path) => {
        return location.pathname === path;
    };

    const mobileMenu = (
        <Drawer
            anchor="left"
            open={mobileMenuOpen}
            onClose={handleMobileMenuToggle}
            sx={{
                "& .MuiDrawer-paper": {
                    width: 250,
                    boxSizing: "border-box",
                },
            }}
        >
            <Box
                sx={{
                    p: 2,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    backgroundColor: "primary.main",
                    color: "white",
                }}
            >
                <Typography variant="h6" color="inherit" fontWeight="bold">
                    Travel Tours
                </Typography>
                <IconButton
                    onClick={handleMobileMenuToggle}
                    sx={{ color: "white" }}
                >
                    <CloseIcon />
                </IconButton>
            </Box>
            <List>
                {menuItems.map((item) => (
                    <ListItem key={item.path} disablePadding>
                        <ListItemButton
                            component={Link}
                            to={item.path}
                            onClick={handleMobileMenuToggle}
                            selected={isActivePath(item.path)}
                        >
                            <ListItemText primary={item.label} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );

    return (
        <>
            <AppBar
                position="fixed"
                sx={{
                    backgroundColor:
                        isHomePage && !isScrolled
                            ? "transparent"
                            : "rgba(255, 255, 255, 0.95)",
                    backdropFilter:
                        isHomePage && !isScrolled ? "none" : "blur(10px)",
                    boxShadow:
                        isHomePage && !isScrolled
                            ? "none"
                            : "0 2px 20px rgba(0,0,0,0.1)",
                    color: "text.primary",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    borderBottom:
                        isHomePage && !isScrolled
                            ? "none"
                            : "1px solid rgba(0,0,0,0.08)",
                }}
            >
                <Toolbar>
                    {/* Logo */}
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            flexGrow: 0,
                        }}
                    >
                        <img
                            src={Logo}
                            alt="Travel Tours Logo"
                            className={`${
                                isHomePage && !isScrolled
                                    ? "logo-home-large"
                                    : "logo-default"
                            }`}
                            style={{
                                transition:
                                    "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                                filter:
                                    isHomePage && !isScrolled
                                        ? "drop-shadow(2px 2px 4px rgba(0,0,0,0.3))"
                                        : "none",
                            }}
                        />
                    </Box>

                    {/* Desktop Menu */}
                    {!isMobile && (
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            {menuItems.map((item) => (
                                <Button
                                    key={item.path}
                                    component={Link}
                                    to={item.path}
                                    sx={{
                                        mx: 1,
                                        color: isActivePath(item.path)
                                            ? "primary.main"
                                            : isHomePage && !isScrolled
                                            ? "white"
                                            : "text.primary",
                                        fontWeight: isActivePath(item.path)
                                            ? "bold"
                                            : "normal",
                                        textShadow:
                                            isHomePage && !isScrolled
                                                ? "1px 1px 2px rgba(0,0,0,0.5)"
                                                : "none",
                                        "&:hover": {
                                            backgroundColor: "primary.light",
                                            color: "white",
                                        },
                                        transition: "all 0.3s ease",
                                    }}
                                >
                                    {item.label}
                                </Button>
                            ))}
                        </Box>
                    )}

                    {/* Mobile Menu Button */}
                    {isMobile && (
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: "flex",
                                justifyContent: "flex-end",
                            }}
                        >
                            <IconButton
                                edge="start"
                                aria-label="menu"
                                onClick={handleMobileMenuToggle}
                                sx={{
                                    color:
                                        isHomePage && !isScrolled
                                            ? "white"
                                            : "text.primary",
                                    transition: "all 0.3s ease",
                                    filter:
                                        isHomePage && !isScrolled
                                            ? "drop-shadow(1px 1px 2px rgba(0,0,0,0.5))"
                                            : "none",
                                }}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Box>
                    )}
                </Toolbar>
            </AppBar>
            {mobileMenu}
        </>
    );
};

export default Header;
