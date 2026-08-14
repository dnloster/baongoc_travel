import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
    AppBar,
    Toolbar,
    Box,
    Button,
    IconButton,
    Drawer,
    List,
    ListItemButton,
    ListItemText,
    Container,
} from "@mui/material";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";
import LogoLight from "../assets/icon_png/BN1.png";
import LogoDark from "../assets/icon_png/2.png";

const navItems = [
    { label: "Trang chủ", path: "/" },
    { label: "Tour du lịch", path: "/tours" },
    { label: "Về chúng tôi", path: "/about" },
    { label: "Liên hệ", path: "/contact" },
];

export default function TravelHeader() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const isHomePage = location.pathname === "/";
    const isSolid = scrolled || !isHomePage;

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);
        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileOpen]);

    const handleNavClick = (path) => {
        navigate(path);
        setMobileOpen(false);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            <AppBar
                position="fixed"
                elevation={isSolid ? 2 : 0}
                sx={{
                    backgroundColor: isSolid
                        ? "rgba(255,255,255,0.97)"
                        : "transparent",
                    backdropFilter: isSolid ? "blur(10px)" : "none",
                    color: isSolid ? "#1e293b" : "#fff",
                    transition: "background-color 0.25s ease, box-shadow 0.25s ease",
                    zIndex: 1200,
                }}
            >
                <Container maxWidth="lg" disableGutters={false}>
                    <Toolbar
                        disableGutters
                        sx={{
                            minHeight: { xs: 64, md: 80 },
                            px: { xs: 1.5, sm: 2 },
                            justifyContent: "space-between",
                        }}
                    >
                        <Box
                            component="button"
                            onClick={() => handleNavClick("/")}
                            aria-label="Trang chủ Bảo Ngọc Travel"
                            sx={{
                                border: 0,
                                background: "none",
                                p: 0,
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                                width: { xs: 132, sm: 160, md: 188 },
                                flexShrink: 0,
                            }}
                        >
                            <Box
                                component="img"
                                src={isSolid ? LogoDark : LogoLight}
                                alt="Bảo Ngọc Travel"
                                sx={{
                                    width: "100%",
                                    height: "auto",
                                    display: "block",
                                }}
                            />
                        </Box>

                        <Box
                            sx={{
                                display: { xs: "none", md: "flex" },
                                gap: 0.5,
                                alignItems: "center",
                            }}
                        >
                            {navItems.map((item) => {
                                const active = location.pathname === item.path;
                                return (
                                    <Button
                                        key={item.path}
                                        onClick={() => handleNavClick(item.path)}
                                        sx={{
                                            color: active
                                                ? "#c9a227"
                                                : isSolid
                                                ? "#334155"
                                                : "#fff",
                                            fontWeight: active ? 700 : 500,
                                            fontSize: "0.95rem",
                                            px: 2,
                                            position: "relative",
                                            "&::after": {
                                                content: '""',
                                                position: "absolute",
                                                bottom: 6,
                                                left: "50%",
                                                transform: "translateX(-50%)",
                                                width: active ? "60%" : 0,
                                                height: 2,
                                                bgcolor: "#c9a227",
                                                transition: "width 0.2s ease",
                                            },
                                            "&:hover": {
                                                backgroundColor: "transparent",
                                                color: "#c9a227",
                                                "&::after": { width: "60%" },
                                            },
                                        }}
                                    >
                                        {item.label}
                                    </Button>
                                );
                            })}
                        </Box>

                        <IconButton
                            onClick={() => setMobileOpen(true)}
                            aria-label="Mở menu"
                            sx={{
                                display: { xs: "inline-flex", md: "none" },
                                color: isSolid ? "#1e293b" : "#fff",
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </Container>
            </AppBar>

            <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={() => setMobileOpen(false)}
                PaperProps={{
                    sx: {
                        width: { xs: "78%", sm: 320 },
                        maxWidth: 360,
                        bgcolor: "#111827",
                        color: "#fff",
                    },
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        p: 1.5,
                    }}
                >
                    <IconButton
                        onClick={() => setMobileOpen(false)}
                        sx={{ color: "#fff" }}
                        aria-label="Đóng menu"
                    >
                        <CloseIcon />
                    </IconButton>
                </Box>
                <List sx={{ px: 1 }}>
                    {navItems.map((item) => {
                        const active = location.pathname === item.path;
                        return (
                            <ListItemButton
                                key={item.path}
                                onClick={() => handleNavClick(item.path)}
                                selected={active}
                                sx={{
                                    borderRadius: 1,
                                    mb: 0.5,
                                    color: active ? "#facc15" : "#fff",
                                    "&.Mui-selected": {
                                        bgcolor: "rgba(250, 204, 21, 0.12)",
                                    },
                                }}
                            >
                                <ListItemText
                                    primary={item.label}
                                    primaryTypographyProps={{
                                        fontWeight: active ? 700 : 500,
                                        fontSize: "1.05rem",
                                    }}
                                />
                            </ListItemButton>
                        );
                    })}
                </List>
            </Drawer>
        </>
    );
}
