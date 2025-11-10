import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
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

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "../styles/carousel.css";

const HeroCarousel = () => {
    const navigate = useNavigate();

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

    return (
        <Box
            sx={{
                position: "relative",
                height: { xs: "100vh", md: "600px" },
                overflow: "hidden",
            }}
        >
            <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                spaceBetween={0}
                slidesPerView={1}
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                }}
                pagination={{
                    clickable: true,
                    bulletClass: "swiper-pagination-bullet",
                    bulletActiveClass: "swiper-pagination-bullet-active",
                }}
                // autoplay={{
                //     delay: 5000,
                //     disableOnInteraction: false,
                //     pauseOnMouseEnter: true,
                // }}
                effect="fade"
                fadeEffect={{
                    crossFade: true,
                }}
                speed={800}
                loop={true}
                className="hero-swiper"
                style={{ height: "100%" }}
            >
                {heroSlides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <Box
                            sx={{
                                height: { xs: "100vh", md: "600px" },
                                display: "flex",
                                alignItems: "center",
                                color: "white",
                                position: "relative",
                                backgroundImage: `url(${slide.image})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
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
                                sx={{ position: "relative", zIndex: 2 }}
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
                                                    xs: "2.5rem",
                                                    md: "3.5rem",
                                                },
                                                textShadow:
                                                    "2px 2px 4px rgba(0,0,0,0.5)",
                                                marginBottom: 2,
                                            }}
                                        >
                                            {slide.title}
                                        </Typography>
                                        <Typography
                                            variant="h5"
                                            paragraph
                                            sx={{
                                                fontSize: {
                                                    xs: "1.2rem",
                                                    md: "1.5rem",
                                                },
                                                textShadow:
                                                    "1px 1px 2px rgba(0,0,0,0.5)",
                                                marginBottom: 3,
                                                lineHeight: 1.4,
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
                                                px: 4,
                                                py: 1.5,
                                                fontSize: "1.1rem",
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
                    </SwiperSlide>
                ))}

                {/* Custom Navigation Arrows */}
                <IconButton
                    className="swiper-button-prev"
                    sx={{
                        position: "absolute",
                        left: 20,
                        top: "50%",
                        transform: "translateY(-50%)",
                        zIndex: 10,
                        backgroundColor: "rgba(0,0,0,0.3)",
                        color: "white",
                        width: 50,
                        height: 50,
                        "&:hover": {
                            backgroundColor: "rgba(0,0,0,0.5)",
                            transform: "translateY(-50%) scale(1.1)",
                        },
                        transition: "all 0.3s ease",
                    }}
                >
                    <ChevronLeft sx={{ fontSize: 30 }} />
                </IconButton>

                <IconButton
                    className="swiper-button-next"
                    sx={{
                        position: "absolute",
                        right: 20,
                        top: "50%",
                        transform: "translateY(-50%)",
                        zIndex: 10,
                        backgroundColor: "rgba(0,0,0,0.3)",
                        color: "white",
                        width: 50,
                        height: 50,
                        "&:hover": {
                            backgroundColor: "rgba(0,0,0,0.5)",
                            transform: "translateY(-50%) scale(1.1)",
                        },
                        transition: "all 0.3s ease",
                    }}
                >
                    <ChevronRight sx={{ fontSize: 30 }} />
                </IconButton>
            </Swiper>
        </Box>
    );
};

export default HeroCarousel;
