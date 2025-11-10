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
    Instagram as InstagramIcon,
    Twitter as TwitterIcon,
    YouTube as YouTubeIcon,
    Phone as PhoneIcon,
    Email as EmailIcon,
    LocationOn as LocationIcon,
    Flight as FlightIcon,
} from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";
import Logo from "../assets/logo_PNG/logo-color1.png";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { label: "Trang chủ", path: "/" },
        { label: "Tour du lịch", path: "/tours" },
        { label: "Về chúng tôi", path: "/about" },
        { label: "Liên hệ", path: "/contact" },
    ];

    const tourCategories = [
        { label: "Tour biển đảo", path: "/tours?category=beach" },
        { label: "Tour miền núi", path: "/tours?category=mountain" },
        { label: "Tour văn hóa", path: "/tours?category=culture" },
        { label: "Tour thành phố", path: "/tours?category=city" },
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
            url: "https://facebook.com/traveltours",
            label: "Facebook",
        },
        {
            icon: <InstagramIcon />,
            url: "https://instagram.com/traveltours",
            label: "Instagram",
        },
        {
            icon: <TwitterIcon />,
            url: "https://twitter.com/traveltours",
            label: "Twitter",
        },
        {
            icon: <YouTubeIcon />,
            url: "https://youtube.com/traveltours",
            label: "YouTube",
        },
    ];

    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: "grey.900",
                color: "white",
                pt: 6,
                pb: 2,
                mt: "auto",
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    {/* Company Info */}
                    <Grid item xs={12} md={3}>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                mb: 2,
                            }}
                        >
                            <img src={Logo} alt="Bảo Ngọc Travel" width={300}/>
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
                                    (+84) 123 456 789
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
                                <Typography variant="body2">
                                    info@traveltours.vn
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
                                    123 Đường ABC, Quận 1, TP.HCM
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
                    <Grid item xs={12} sm={6} md={3} sx={{ pt: { md: 12 } }}>
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
                    <Grid item xs={12} sm={6} md={3} sx={{ pt: { md: 12 } }}>
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
                    <Grid item xs={12} sm={6} md={3} sx={{ pt: { md: 12 } }}>
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
                    }}
                >
                    <Typography variant="body2" color="grey.400">
                        © {currentYear} Bảo Ngọc Travel. Tất cả quyền được bảo lưu.
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
