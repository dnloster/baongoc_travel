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
import { HERO_TOUR_IDS, TOURS } from "../data/tours";

const heroSlides = HERO_TOUR_IDS.map((id) => {
    const tour = TOURS.find((item) => item.id === id);
    if (!tour) return null;
    return {
        id: tour.id,
        title: tour.title,
        subtitle: `${tour.duration} • ${tour.location}`,
        description: tour.description,
        buttonText: "Xem lịch trình",
        image: tour.image,
        path: `/tours/${tour.id}`,
    };
}).filter(Boolean);

const HeroCarousel = () => {
    const navigate = useNavigate();
    const [currentSlide, setCurrentSlide] = useState(0);

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
                height: {
                    xs: "min(78vh, 560px)",
                    sm: "min(72vh, 580px)",
                    md: 560,
                    lg: 600,
                },
                overflow: "hidden",
                width: "100%",
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
                            visibility:
                                index === currentSlide ? "visible" : "hidden",
                            transition:
                                "opacity 0.8s ease-in-out, visibility 0.8s ease-in-out",
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
                                px: { xs: 2, sm: 3, md: 4 },
                                pt: { xs: 8, md: 2 },
                                pb: { xs: 16, md: 2 },
                            }}
                        >
                            <Grid container spacing={4} alignItems="center">
                                <Grid size={{ xs: 12, md: 8 }}>
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
                                            lineHeight: { xs: 1.2, md: 1.1 },
                                        }}
                                    >
                                        {slide.title}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: {
                                                xs: "0.9rem",
                                                md: "1.05rem",
                                            },
                                            fontWeight: 600,
                                            opacity: 0.95,
                                            mb: { xs: 1, md: 1.5 },
                                            textShadow:
                                                "1px 1px 2px rgba(0,0,0,0.5)",
                                        }}
                                    >
                                        {slide.subtitle}
                                    </Typography>
                                    <Typography
                                        paragraph
                                        sx={{
                                            fontSize: {
                                                xs: "0.95rem",
                                                sm: "1rem",
                                                md: "1.15rem",
                                            },
                                            textShadow:
                                                "1px 1px 2px rgba(0,0,0,0.5)",
                                            marginBottom: { xs: 2, md: 3 },
                                            lineHeight: 1.5,
                                            maxWidth: 640,
                                            display: {
                                                xs: "none",
                                                sm: "block",
                                            },
                                        }}
                                    >
                                        {slide.description}
                                    </Typography>
                                    <Button
                                        variant="contained"
                                        size="large"
                                        onClick={() => navigate(slide.path)}
                                        sx={{
                                            backgroundColor:
                                                "rgba(255,255,255,0.9)",
                                            color: "primary.main",
                                            "&:hover": {
                                                backgroundColor: "white",
                                                transform: "translateY(-2px)",
                                                boxShadow:
                                                    "0 8px 25px rgba(0,0,0,0.3)",
                                            },
                                            px: { xs: 2, md: 4 },
                                            py: { xs: 1, md: 1.5 },
                                            fontSize: {
                                                xs: "0.9rem",
                                                md: "1.1rem",
                                            },
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
                    display: { xs: "none", md: "flex" },
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
                    display: { xs: "none", md: "flex" },
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
                    display: { xs: "none", md: "flex" },
                    position: "absolute",
                    bottom: 30,
                    left: "50%",
                    transform: "translateX(-50%)",
                    gap: 1,
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
                            backgroundColor:
                                index === currentSlide
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
