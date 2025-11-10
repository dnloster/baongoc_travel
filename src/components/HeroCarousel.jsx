import React, { useState, useEffect } from "react";
import {
    Box,
    Container,
    Typography,
    Button,
    Grid,
    IconButton,
} from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const HeroCarousel = () => {
    const navigate = useNavigate();
    const [currentSlide, setCurrentSlide] = useState(0);

    const heroSlides = [
        {
            id: 1,
            title: "Khám phá Việt Nam",
            subtitle:
                "Trải nghiệm những chuyến du lịch Việt Nam tuyệt vời với các tour chất lượng cao",
            buttonText: "Khám phá ngay",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            image: "https://images.pexels.com/photos/33599601/pexels-photo-33599601.jpeg",
        },
        {
            id: 2,
            title: "Vịnh Hạ Long Huyền Thoại",
            subtitle:
                "Chiêm ngưỡng kỳ quan thiên nhiên thế giới với hàng nghìn hòn đảo đá vôi",
            buttonText: "Đặt tour ngay",
            background: "linear-gradient(135deg, #2196F3 0%, #21CBF3 100%)",
            image: "https://images.pexels.com/photos/58597/pexels-photo-58597.jpeg",
        },
        {
            id: 3,
            title: "Sapa Mờ Sương",
            subtitle:
                "Khám phá văn hóa dân tộc và ruộng bậc thang tuyệt đẹp tại cao nguyên Sapa",
            buttonText: "Xem tour",
            background: "linear-gradient(135deg, #4CAF50 0%, #8BC34A 100%)",
            image: "https://images.pexels.com/photos/6876737/pexels-photo-6876737.jpeg",
        },
        {
            id: 4,
            title: "Phú Quốc Đảo Ngọc",
            subtitle:
                "Thư giãn tại những bãi biển trong xanh và thưởng thức hải sản tươi ngon",
            buttonText: "Nghỉ dưỡng",
            background: "linear-gradient(135deg, #FF9800 0%, #FFC107 100%)",
            image: "https://images.pexels.com/photos/33545/sunrise-phu-quoc-island-ocean.jpg",
        },
        {
            id: 5,
            title: "Bắc Kinh - Thủ Đô Ngàn Năm",
            subtitle:
                "Khám phá Tử Cấm Thành, Vạn Lý Trường Thành và văn hóa cổ xưa của Trung Hoa",
            buttonText: "Khám phá Bắc Kinh",
            background: "linear-gradient(135deg, #E91E63 0%, #F06292 100%)",
            image: "https://images.pexels.com/photos/2846030/pexels-photo-2846030.jpeg",
        },
        {
            id: 6,
            title: "Thượng Hải - Thành Phố Hiện Đại",
            subtitle:
                "Trải nghiệm sự kết hợp hoàn hảo giữa truyền thống và hiện đại tại Thượng Hải",
            buttonText: "Tour Thượng Hải",
            background: "linear-gradient(135deg, #9C27B0 0%, #BA68C8 100%)",
            image: "https://images.pexels.com/photos/33625670/pexels-photo-33625670.jpeg",
        },
        {
            id: 7,
            title: "Cửu Trại Câu - Tiên Cảnh Trần Gian",
            subtitle:
                "Chiêm ngưỡng vẻ đẹp tuyệt vời của hồ nước trong xanh và thác nước hùng vĩ",
            buttonText: "Đến Cửu Trại Câu",
            background: "linear-gradient(135deg, #00BCD4 0%, #4DD0E1 100%)",
            image: "https://media-cdn-v2.laodong.vn/storage/newsportal/2024/10/24/1411989/399216707_6478483805.jpg",
        },
        {
            id: 8,
            title: "Trương Gia Giới - Avatar Hallelujah",
            subtitle:
                "Khám phá những cột đá kỳ vĩ từng xuất hiện trong phim Avatar",
            buttonText: "Phiêu lưu ngay",
            background: "linear-gradient(135deg, #795548 0%, #A1887F 100%)",
            image: "https://images.pexels.com/photos/6139687/pexels-photo-6139687.jpeg",
        },
    ];

    // Auto slide functionality
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [heroSlides.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => 
            prev === 0 ? heroSlides.length - 1 : prev - 1
        );
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <Box
            sx={{
                position: "relative",
                height: { xs: "100vh", md: "600px" },
                overflow: "hidden",
                width: "100vw",
                left: "50%",
                right: "50%",
                marginLeft: "-50vw",
                marginRight: "-50vw",
            }}
        >
            {/* Carousel Container */}
            <Box
                sx={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                }}
            >
                {heroSlides.map((slide, index) => (
                    <Box
                        key={slide.id}
                        sx={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            alignItems: "center",
                            color: "white",
                            backgroundImage: `url(${slide.image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            opacity: index === currentSlide ? 1 : 0,
                            visibility: index === currentSlide ? "visible" : "hidden",
                            transition: "opacity 0.8s ease-in-out, visibility 0.8s ease-in-out",
                            "&::before": {
                                content: '""',
                                position: "absolute",
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                backgroundColor: "rgba(0,0,0,0.4)",
                                zIndex: 1,
                            },
                        }}
                    >
                                <Container
                                maxWidth="lg"
                                sx={{ 
                                    position: "relative", 
                                    zIndex: 2, 
                                    userSelect: "none",
                                    px: { xs: 2, sm: 3, md: 4 }
                                }}
                            >
                                <Grid container spacing={4} alignItems="center">
                                    <Grid item xs={12} md={8}>
                                        <Typography
                                            variant="h1"
                                            component="h1"
                                            gutterBottom
                                            sx={{
                                                fontWeight: "bold",
                                                fontSize: {
                                                    xs: "1.8rem",
                                                    sm: "2.2rem",
                                                    md: "3.5rem",
                                                },
                                                textShadow:
                                                    "2px 2px 4px rgba(0,0,0,0.5)",
                                                marginBottom: { xs: 1, md: 2 },
                                                lineHeight: { xs: 1.2, md: 1.1 }
                                            }}
                                        >
                                            {slide.title}
                                        </Typography>
                                        <Typography
                                            variant="h5"
                                            paragraph
                                            sx={{
                                                fontSize: {
                                                    xs: "1rem",
                                                    sm: "1.1rem",
                                                    md: "1.5rem",
                                                },
                                                textShadow:
                                                    "1px 1px 2px rgba(0,0,0,0.5)",
                                                marginBottom: { xs: 2, md: 3 },
                                                lineHeight: { xs: 1.4, md: 1.4 },
                                                display: { xs: "none", sm: "block" }
                                            }}
                                        >
                                            {slide.subtitle}
                                        </Typography>
                                        <Button
                                            variant="contained"
                                            size="large"
                                            onClick={() => navigate("/tours")}
                                            sx={{
                                                backgroundColor:
                                                    "rgba(255,255,255,0.9)",
                                                color: "primary.main",
                                                "&:hover": {
                                                    backgroundColor: "white",
                                                    transform:
                                                        "translateY(-2px)",
                                                    boxShadow:
                                                        "0 8px 25px rgba(0,0,0,0.3)",
                                                },
                                                px: { xs: 2, md: 4 },
                                                py: { xs: 1, md: 1.5 },
                                                fontSize: { xs: "0.9rem", md: "1.1rem" },
                                                fontWeight: "bold",
                                                borderRadius: 2,
                                                transition: "all 0.3s ease",
                                            }}
                                        >
                                            {slide.buttonText}
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Container>
                        </Box>
                ))}
            </Box>

            {/* Navigation Arrows */}
            <IconButton
                onClick={prevSlide}
                sx={{
                    position: "absolute",
                    left: { xs: 10, md: 20 },
                    top: "50%",
                    transform: "translateY(-50%)",
                    zIndex: 10,
                    backgroundColor: "rgba(0,0,0,0.3)",
                    color: "white",
                    width: { xs: 40, md: 50 },
                    height: { xs: 40, md: 50 },
                    "&:hover": {
                        backgroundColor: "rgba(0,0,0,0.5)",
                        transform: "translateY(-50%) scale(1.1)",
                    },
                    transition: "all 0.3s ease",
                }}
            >
                <ChevronLeft sx={{ fontSize: { xs: 24, md: 30 } }} />
            </IconButton>

            <IconButton
                onClick={nextSlide}
                sx={{
                    position: "absolute",
                    right: { xs: 10, md: 20 },
                    top: "50%",
                    transform: "translateY(-50%)",
                    zIndex: 10,
                    backgroundColor: "rgba(0,0,0,0.3)",
                    color: "white",
                    width: { xs: 40, md: 50 },
                    height: { xs: 40, md: 50 },
                    "&:hover": {
                        backgroundColor: "rgba(0,0,0,0.5)",
                        transform: "translateY(-50%) scale(1.1)",
                    },
                    transition: "all 0.3s ease",
                }}
            >
                <ChevronRight sx={{ fontSize: { xs: 24, md: 30 } }} />
            </IconButton>

            {/* Pagination Dots */}
            <Box
                sx={{
                    position: "absolute",
                    bottom: { xs: 20, md: 30 },
                    left: "50%",
                    transform: "translateX(-50%)",
                    display: "flex",
                    gap: { xs: 0.5, md: 1 },
                    zIndex: 10,
                }}
            >
                {heroSlides.map((_, index) => (
                    <Box
                        key={index}
                        onClick={() => goToSlide(index)}
                        sx={{
                            width: { xs: 8, md: 12 },
                            height: { xs: 8, md: 12 },
                            borderRadius: "50%",
                            backgroundColor: index === currentSlide 
                                ? "white" 
                                : "rgba(255,255,255,0.5)",
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                            "&:hover": {
                                backgroundColor: "white",
                                transform: "scale(1.2)",
                            },
                        }}
                    />
                ))}
            </Box>
        </Box>
    );
};

export default HeroCarousel;
