import React from "react";
// import useAppStore from "@/store/appStore";
import {
    Container,
    Typography,
    Box,
    Grid,
    Card,
    CardContent,
} from "@mui/material";
import {
    Explore as ExploreIcon,
    FlightTakeoff as FlightIcon,
    Hotel as HotelIcon,
    Restaurant as RestaurantIcon,
} from "@mui/icons-material";
import HeroCarousel from "../components/HeroCarousel";
import BookingSearchBox from "../components/BookingSearchBox";
import MobileSearchPrompt from "../components/MobileSearchPrompt";
import FeaturedDestinations from "../components/FeaturedDestinations";

const Home = () => {
    // const { tours } = useAppStore();

    const services = [
        {
            icon: <FlightIcon fontSize="large" />,
            title: "Đặt vé máy bay",
            description: "Tìm kiếm và đặt vé máy bay với giá tốt nhất",
        },
        {
            icon: <HotelIcon fontSize="large" />,
            title: "Đặt khách sạn",
            description: "Lựa chọn từ hàng nghìn khách sạn chất lượng",
        },
        {
            icon: <RestaurantIcon fontSize="large" />,
            title: "Ẩm thực địa phương",
            description: "Trải nghiệm món ăn đặc sản tại mỗi điểm đến",
        },
        {
            icon: <ExploreIcon fontSize="large" />,
            title: "Tour khám phá",
            description:
                "Các tour được thiết kế đặc biệt với hướng dẫn viên chuyên nghiệp",
        },
    ];

    return (
        <Box>
            {/* Hero Carousel with Mobile Search Prompt */}
            <Box sx={{ position: "relative" }}>
                <HeroCarousel />
                <MobileSearchPrompt />
            </Box>

            {/* Booking Search Box - Desktop Only */}
            <BookingSearchBox />

            {/* Featured Destinations Section - Moved up */}
            <FeaturedDestinations />

            {/* Services Section */}
            <Box sx={{ py: 10, backgroundColor: "background.default" }}>
                <Container maxWidth="lg">
                    {/* Header */}
                    <Box textAlign="center" sx={{ mb: 8 }}>
                        <Typography
                            variant="h3"
                            component="h2"
                            sx={{
                                fontWeight: "bold",
                                background:
                                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                                backgroundClip: "text",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                mb: 2,
                                fontSize: { xs: "2rem", md: "3rem" },
                            }}
                        >
                            Dịch vụ của chúng tôi
                        </Typography>
                        <Box
                            sx={{
                                width: 80,
                                height: 4,
                                backgroundColor: "primary.main",
                                mx: "auto",
                                mb: 3,
                                borderRadius: 2,
                            }}
                        />
                        <Typography
                            variant="h6"
                            color="text.secondary"
                            sx={{
                                maxWidth: 600,
                                mx: "auto",
                                lineHeight: 1.8,
                                fontSize: "1.1rem",
                            }}
                        >
                            Chúng tôi cung cấp đầy đủ các dịch vụ du lịch chất
                            lượng cao cho chuyến đi hoàn hảo của bạn
                        </Typography>
                    </Box>

                    {/* Services Grid */}
                    <Grid container spacing={4}>
                        {services.map((service, index) => (
                            <Grid item xs={12} sm={6} md={3} key={index}>
                                <Card
                                    sx={{
                                        height: "100%",
                                        textAlign: "center",
                                        borderRadius: 3,
                                        border: "1px solid",
                                        borderColor: "divider",
                                        transition:
                                            "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                                        position: "relative",
                                        overflow: "hidden",
                                        "&:hover": {
                                            transform: "translateY(-8px)",
                                            boxShadow:
                                                "0 20px 40px rgba(102, 126, 234, 0.15)",
                                            borderColor: "primary.main",
                                            "& .service-icon": {
                                                transform:
                                                    "scale(1.1) rotate(5deg)",
                                                color: "primary.main",
                                            },
                                            "& .service-bg": {
                                                opacity: 1,
                                            },
                                        },
                                        "&::before": {
                                            content: '""',
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            height: 4,
                                            background:
                                                "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                                            borderRadius: "12px 12px 0 0",
                                        },
                                    }}
                                >
                                    {/* Background decoration */}
                                    <Box
                                        className="service-bg"
                                        sx={{
                                            position: "absolute",
                                            top: -50,
                                            right: -50,
                                            width: 100,
                                            height: 100,
                                            borderRadius: "50%",
                                            background:
                                                "linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)",
                                            opacity: 0,
                                            transition: "opacity 0.3s ease",
                                        }}
                                    />

                                    <CardContent
                                        sx={{
                                            p: 4,
                                            position: "relative",
                                            zIndex: 1,
                                        }}
                                    >
                                        {/* Icon container */}
                                        <Box
                                            sx={{
                                                mb: 3,
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                width: 80,
                                                height: 80,
                                                mx: "auto",
                                                borderRadius: "50%",
                                                backgroundColor:
                                                    "rgba(102, 126, 234, 0.1)",
                                                border: "2px solid rgba(102, 126, 234, 0.2)",
                                            }}
                                        >
                                            <Box
                                                className="service-icon"
                                                sx={{
                                                    color: "text.secondary",
                                                    transition:
                                                        "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                                                    fontSize: "2.5rem",
                                                }}
                                            >
                                                {service.icon}
                                            </Box>
                                        </Box>

                                        <Typography
                                            variant="h5"
                                            component="h3"
                                            sx={{
                                                fontWeight: "bold",
                                                mb: 2,
                                                color: "text.primary",
                                                fontSize: "1.3rem",
                                            }}
                                        >
                                            {service.title}
                                        </Typography>

                                        <Typography
                                            variant="body1"
                                            color="text.secondary"
                                            sx={{
                                                lineHeight: 1.6,
                                                fontSize: "0.95rem",
                                            }}
                                        >
                                            {service.description}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>

                    {/* Call to Action */}
                    <Box textAlign="center" sx={{ mt: 8 }}>
                        <Typography
                            variant="h6"
                            sx={{ mb: 3, color: "text.secondary" }}
                        >
                            Sẵn sàng cho chuyến phiêu lưu tiếp theo?
                        </Typography>
                        <Box
                            sx={{
                                display: "flex",
                                gap: 2,
                                justifyContent: "center",
                                flexWrap: "wrap",
                            }}
                        >
                            <Typography
                                variant="contained"
                                component="a"
                                href="/tours"
                                sx={{
                                    textDecoration: "none",
                                    px: 4,
                                    py: 1.5,
                                    borderRadius: 3,
                                    background:
                                        "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                                    color: "white",
                                    fontWeight: "bold",
                                    fontSize: "1rem",
                                    textTransform: "none",
                                    transition:
                                        "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                                    display: "inline-block",
                                    "&:hover": {
                                        transform: "translateY(-2px)",
                                        boxShadow:
                                            "0 8px 25px rgba(102, 126, 234, 0.3)",
                                        background:
                                            "linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%)",
                                    },
                                }}
                            >
                                Khám phá tour ngay
                            </Typography>
                            <Typography
                                variant="outlined"
                                component="a"
                                href="/about"
                                sx={{
                                    textDecoration: "none",
                                    px: 4,
                                    py: 1.5,
                                    borderRadius: 3,
                                    border: "2px solid",
                                    borderColor: "primary.main",
                                    color: "primary.main",
                                    fontWeight: "bold",
                                    fontSize: "1rem",
                                    textTransform: "none",
                                    transition:
                                        "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                                    display: "inline-block",
                                    "&:hover": {
                                        backgroundColor: "primary.main",
                                        color: "white",
                                        transform: "translateY(-2px)",
                                        boxShadow:
                                            "0 8px 25px rgba(102, 126, 234, 0.3)",
                                    },
                                }}
                            >
                                Tìm hiểu thêm
                            </Typography>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
};

export default Home;
