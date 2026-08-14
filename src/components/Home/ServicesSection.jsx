import React from "react";
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
import SectionHeader from "../SectionHeader";

const ServicesSection = () => {
    const services = [
        {
            icon: <FlightIcon />,
            title: "Đặt vé máy bay",
            description: "Tìm kiếm và đặt vé máy bay với giá tốt nhất",
        },
        {
            icon: <HotelIcon />,
            title: "Đặt khách sạn",
            description: "Lựa chọn từ hàng nghìn khách sạn chất lượng",
        },
        {
            icon: <RestaurantIcon />,
            title: "Ẩm thực địa phương",
            description: "Trải nghiệm món ăn đặc sản tại mỗi điểm đến",
        },
        {
            icon: <ExploreIcon />,
            title: "Tour khám phá",
            description:
                "Các tour được thiết kế đặc biệt với hướng dẫn viên chuyên nghiệp",
        },
    ];

    return (
        <Box
            sx={{
                py: { xs: 5, md: 8 },
                backgroundColor: "#fff",
                overflow: "hidden",
            }}
        >
            <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
                <SectionHeader
                    title="Dịch vụ của chúng tôi"
                    subtitle="Đầy đủ dịch vụ du lịch chất lượng cao cho chuyến đi hoàn hảo của bạn"
                />

                {/* Services Grid - Mobile Optimized */}
                <Grid
                    container
                    spacing={{ xs: 2, sm: 2.5, md: 3 }}
                    sx={{
                        mb: { xs: 3.5, sm: 5 },
                    }}
                >
                    {services.map((service, index) => (
                        <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                            <Card
                                sx={{
                                    height: { xs: "auto", sm: "100%" },
                                    display: "flex",
                                    flexDirection: "column",
                                    textAlign: "center",
                                    borderRadius: { xs: 2, sm: 2.5 },
                                    border: "1px solid",
                                    borderColor: "divider",
                                    transition: "all 0.25s ease",
                                    position: "relative",
                                    overflow: "hidden",
                                    minHeight: { xs: 168, sm: 200 },

                                    // Mobile touch-friendly hover
                                    "&:active": {
                                        transform: "translateY(-2px)",
                                        boxShadow:
                                            "0 8px 25px rgba(102, 126, 234, 0.2)",
                                    },

                                    // Desktop hover
                                    "@media (hover: hover)": {
                                        "&:hover": {
                                            transform: "translateY(-6px)",
                                            boxShadow:
                                                "0 12px 40px rgba(102, 126, 234, 0.2)",
                                            borderColor: "primary.main",
                                        },
                                    },

                                    // Mobile gradient bar
                                    "&::before": {
                                        content: '""',
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        height: { xs: 3, sm: 4 },
                                        background:
                                            "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                                        borderRadius: {
                                            xs: "8px 8px 0 0",
                                            sm: "12px 12px 0 0",
                                        },
                                    },
                                }}
                            >
                                <CardContent
                                    sx={{
                                        p: { xs: 2, sm: 2.5, md: 3 },
                                        position: "relative",
                                        zIndex: 1,
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        flex: 1,
                                        pt: { xs: 3.5, sm: 4.5 },
                                    }}
                                >
                                    {/* Mobile-first Icon */}
                                    <Box
                                        sx={{
                                            mb: { xs: 1.5, sm: 2 },
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            width: { xs: 52, sm: 60, md: 68 },
                                            height: { xs: 52, sm: 60, md: 68 },
                                            borderRadius: "50%",
                                            backgroundColor:
                                                "rgba(102, 126, 234, 0.1)",
                                            border: "2px solid rgba(102, 126, 234, 0.2)",
                                            flexShrink: 0,
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                color: {
                                                    xs: "primary.main",
                                                    sm: "text.secondary",
                                                },
                                                fontSize: {
                                                    xs: "1.5rem", // Mobile: 24px
                                                    sm: "1.875rem",
                                                    md: "2.25rem",
                                                },
                                            }}
                                        >
                                            {service.icon}
                                        </Box>
                                    </Box>

                                    {/* Mobile Title */}
                                    <Typography
                                        variant="h6"
                                        component="h3"
                                        sx={{
                                            fontWeight: 700,
                                            mb: { xs: 1, sm: 1.5 },
                                            color: "text.primary",
                                            fontSize: {
                                                xs: "1rem", // Mobile: 16px
                                                sm: "1.125rem",
                                                md: "1.25rem",
                                            },
                                            lineHeight: 1.3,
                                        }}
                                    >
                                        {service.title}
                                    </Typography>

                                    {/* Mobile Description */}
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{
                                            fontSize: {
                                                xs: "0.8rem", // Mobile: 12.8px
                                                sm: "0.875rem",
                                            },
                                            lineHeight: 1.5,
                                            textAlign: "center",
                                            px: { xs: 0.5, sm: 0 },
                                        }}
                                    >
                                        {service.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                {/* Mobile CTA - Stack dọc */}
                <Box
                    textAlign="center"
                    sx={{
                        mt: { xs: 3, sm: 4, md: 6 },
                        px: { xs: 0.5, sm: 0 },
                    }}
                >
                    <Typography
                        variant="h6"
                        sx={{
                            mb: { xs: 2.5, sm: 3 },
                            color: "text.secondary",
                            fontSize: { xs: "0.95rem", sm: "1.1rem" },
                            lineHeight: 1.5,
                        }}
                    >
                        Sẵn sàng cho chuyến phiêu lưu tiếp theo?
                    </Typography>

                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: { xs: "column", sm: "row" },
                            gap: { xs: 1.5, sm: 2 },
                            width: "100%",
                            maxWidth: { xs: 280, sm: 480 },
                            mx: "auto",
                            justifyContent: "center",
                        }}
                    >
                        <Typography
                            component="a"
                            href="#/tours"
                            sx={{
                                textDecoration: "none",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                height: { xs: 48, sm: 48 },
                                px: 3,
                                width: { xs: "100%", sm: "auto" },
                                flex: { sm: 1 },
                                borderRadius: 2.5,
                                background:
                                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                                color: "white",
                                fontWeight: 600,
                                fontSize: { xs: "0.9rem", sm: "1rem" },
                                textTransform: "none",
                                boxShadow:
                                    "0 4px 12px rgba(102, 126, 234, 0.3)",
                            }}
                        >
                            Khám phá tour ngay
                        </Typography>

                        <Typography
                            component="a"
                            href="#/about"
                            sx={{
                                textDecoration: "none",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                height: { xs: 44, sm: 48 },
                                px: 3,
                                width: { xs: "100%", sm: "auto" },
                                flex: { sm: 1 },
                                borderRadius: 2.5,
                                border: "2px solid",
                                borderColor: "primary.main",
                                color: "primary.main",
                                fontWeight: 600,
                                fontSize: { xs: "0.9rem", sm: "1rem" },
                                textTransform: "none",
                                backgroundColor: "transparent",
                            }}
                        >
                            Tìm hiểu thêm
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default ServicesSection;
