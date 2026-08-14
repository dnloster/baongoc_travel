import React from "react";
import {
    Box,
    Container,
    Grid,
    Typography,
    Link,
    IconButton,
    Divider,
} from "@mui/material";
import {
    Facebook as FacebookIcon,
    Phone as PhoneIcon,
    Email as EmailIcon,
    LocationOn as LocationIcon,
    WhatsApp,
} from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";
import Logo from "../assets/icon_png/BN1.png";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { label: "Trang chủ", path: "/" },
        { label: "Tour du lịch", path: "/tours" },
        { label: "Về chúng tôi", path: "/about" },
        { label: "Liên hệ", path: "/contact" },
    ];

    const tourCategories = [
        { label: "Tour Vân Nam", path: "/tours" },
        { label: "Tour Hồng Hà", path: "/tours" },
        { label: "Tour Hà Khẩu", path: "/tours" },
        { label: "Tour Quảng Tây", path: "/tours" },
    ];

    const services = [
        { label: "Đặt vé máy bay", path: "/services/flights" },
        { label: "Đặt khách sạn", path: "/services/hotels" },
        { label: "Thuê xe du lịch", path: "/services/car-rental" },
        { label: "Bảo hiểm du lịch", path: "/services/insurance" },
    ];

    const socialLinks = [
        {
            icon: <FacebookIcon />,
            url: "https://www.facebook.com/Baongoctravel24",
            label: "Facebook",
        },
        {
            icon: <WhatsApp />,
            url: "https://wa.me/+84786262222",
            label: "WhatsApp",
        },
    ];

    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: "grey.900",
                color: "white",
                pt: { xs: 5, md: 6 },
                pb: 2,
                mt: "auto",
            }}
        >
            <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
                <Grid container spacing={{ xs: 3, md: 4 }}>
                    {/* Company Info */}
                    <Grid size={{ xs: 12, md: 3 }}>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                mb: 2,
                            }}
                        >
                            <Box
                                component="img"
                                src={Logo}
                                alt="Bảo Ngọc Travel"
                                sx={{
                                    width: { xs: 180, sm: 220, md: 240 },
                                    maxWidth: "100%",
                                    height: "auto",
                                    display: "block",
                                }}
                            />
                        </Box>
                        <Typography variant="body2" paragraph>
                            Đối tác tin cậy cho mọi chuyến đi. Chúng tôi mang
                            đến những trải nghiệm du lịch tuyệt vời và đáng nhớ.
                        </Typography>

                        {/* Contact Info */}
                        <Box sx={{ mb: 2 }}>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    mb: 1,
                                }}
                            >
                                <PhoneIcon sx={{ fontSize: 16, mr: 1 }} />
                                <Typography variant="body2">
                                    (+84) 78 626 2222
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    mb: 1,
                                }}
                            >
                                <EmailIcon sx={{ fontSize: 16, mr: 1 }} />
                                <Typography variant="body2" sx={{ wordBreak: "break-word" }}>
                                    Baongoctravel24@gmail.com
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "flex-start",
                                    mb: 1,
                                }}
                            >
                                <LocationIcon
                                    sx={{ fontSize: 16, mr: 1, mt: 0.2 }}
                                />
                                <Typography variant="body2">
                                    051 Nguyễn Trung Trực, phường Lào Cai, tỉnh
                                    Lào Cai
                                </Typography>
                            </Box>
                        </Box>

                        {/* Social Links */}
                        <Box>
                            {socialLinks.map((social) => (
                                <IconButton
                                    key={social.label}
                                    component="a"
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{
                                        color: "white",
                                        "&:hover": {
                                            color: "primary.main",
                                        },
                                    }}
                                >
                                    {social.icon}
                                </IconButton>
                            ))}
                        </Box>
                    </Grid>

                    {/* Quick Links */}
                    <Grid size={{ xs: 6, sm: 4, md: 3 }}>
                        <Typography variant="h6" gutterBottom>
                            Liên kết nhanh
                        </Typography>
                        <Box>
                            {quickLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    component={RouterLink}
                                    to={link.path}
                                    sx={{
                                        display: "block",
                                        color: "grey.300",
                                        textDecoration: "none",
                                        mb: 1,
                                        "&:hover": {
                                            color: "primary.main",
                                        },
                                    }}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </Box>
                    </Grid>

                    {/* Tour Categories */}
                    <Grid size={{ xs: 6, sm: 4, md: 3 }}>
                        <Typography variant="h6" gutterBottom>
                            Loại tour
                        </Typography>
                        <Box>
                            {tourCategories.map((category) => (
                                <Link
                                    key={category.path}
                                    component={RouterLink}
                                    to={category.path}
                                    sx={{
                                        display: "block",
                                        color: "grey.300",
                                        textDecoration: "none",
                                        mb: 1,
                                        "&:hover": {
                                            color: "primary.main",
                                        },
                                    }}
                                >
                                    {category.label}
                                </Link>
                            ))}
                        </Box>
                    </Grid>

                    {/* Services */}
                    <Grid size={{ xs: 6, sm: 4, md: 3 }}>
                        <Typography variant="h6" gutterBottom>
                            Dịch vụ
                        </Typography>
                        <Box>
                            {services.map((service) => (
                                <Link
                                    key={service.path}
                                    component={RouterLink}
                                    to={service.path}
                                    sx={{
                                        display: "block",
                                        color: "grey.300",
                                        textDecoration: "none",
                                        mb: 1,
                                        "&:hover": {
                                            color: "primary.main",
                                        },
                                    }}
                                >
                                    {service.label}
                                </Link>
                            ))}
                        </Box>
                    </Grid>
                </Grid>

                <Divider sx={{ my: 4, backgroundColor: "grey.700" }} />

                {/* Bottom Footer */}
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", sm: "row" },
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexWrap: "wrap",
                        gap: 1,
                        textAlign: { xs: "center", sm: "left" },
                    }}
                >
                    <Typography variant="body2" color="grey.400">
                        © {currentYear} Bảo Ngọc Travel. Tất cả quyền được bảo
                        lưu.
                    </Typography>
                    <Box sx={{ display: "flex", gap: 2, mt: { xs: 1, sm: 0 } }}>
                        <Link
                            href="#"
                            sx={{
                                color: "grey.400",
                                textDecoration: "none",
                                fontSize: "0.875rem",
                                "&:hover": {
                                    color: "primary.main",
                                },
                            }}
                        >
                            Điều khoản sử dụng
                        </Link>
                        <Link
                            href="#"
                            sx={{
                                color: "grey.400",
                                textDecoration: "none",
                                fontSize: "0.875rem",
                                "&:hover": {
                                    color: "primary.main",
                                },
                            }}
                        >
                            Chính sách bảo mật
                        </Link>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
