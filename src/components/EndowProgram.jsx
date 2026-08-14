import { Box, Card, Container } from "@mui/material";
import React from "react";
import { LocalOffer as OfferIcon } from "@mui/icons-material";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionHeader from "./SectionHeader";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function EndowProgram() {
    const promotionalOffers = [
        {
            id: 1,
            image: "https://res.cloudinary.com/domomsbmz/image/upload/v1763696169/endow/1_fysnif.png",
        },
        {
            id: 2,
            image: "https://res.cloudinary.com/domomsbmz/image/upload/v1763696170/endow/2_ewi2ai.png",
        },
        {
            id: 3,
            image: "https://res.cloudinary.com/domomsbmz/image/upload/v1763696170/endow/4_g9beqd.png",
        },
        {
            id: 4,
            image: "https://res.cloudinary.com/domomsbmz/image/upload/v1763696171/endow/3_ii1g2i.png",
        },
    ];

    return (
        <Box
            sx={{
                py: { xs: 5, md: 8 },
                backgroundColor: "#fff",
            }}
        >
            <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
                <SectionHeader
                    title="Chương trình ưu đãi"
                    subtitle="Những ưu đãi đặc biệt dành riêng cho bạn — đặt ngay để không bỏ lỡ!"
                    icon={
                        <OfferIcon
                            sx={{ fontSize: { xs: 28, md: 34 }, color: "primary.main" }}
                        />
                    }
                />

                <Box
                    sx={{
                        "& .swiper": {
                            paddingBottom: { xs: "40px", md: "48px" },
                            overflow: "hidden",
                        },
                        "& .swiper-pagination-bullet": {
                            backgroundColor: "#94a3b8",
                            opacity: 1,
                            width: 8,
                            height: 8,
                        },
                        "& .swiper-pagination-bullet-active": {
                            backgroundColor: "#1976d2",
                            transform: "scale(1.2)",
                        },
                        "& .swiper-button-next, & .swiper-button-prev": {
                            color: "#1976d2",
                            backgroundColor: "rgba(255,255,255,0.92)",
                            borderRadius: "50%",
                            width: { xs: 36, md: 44 },
                            height: { xs: 36, md: 44 },
                            boxShadow: "0 2px 10px rgba(0,0,0,0.12)",
                            display: { xs: "none", sm: "flex" },
                            "&::after": {
                                fontSize: { xs: "14px", md: "16px" },
                                fontWeight: 700,
                            },
                        },
                    }}
                >
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={16}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        loop
                        breakpoints={{
                            600: { slidesPerView: 2, spaceBetween: 16 },
                            960: { slidesPerView: 3, spaceBetween: 20 },
                        }}
                    >
                        {promotionalOffers.map((offer) => (
                            <SwiperSlide key={offer.id}>
                                <Card
                                    sx={{
                                        borderRadius: 2,
                                        overflow: "hidden",
                                        boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
                                        aspectRatio: "3 / 4",
                                        maxHeight: { xs: 420, sm: 460, md: 480 },
                                    }}
                                >
                                    <Box
                                        component="img"
                                        src={offer.image}
                                        alt={`Ưu đãi ${offer.id}`}
                                        sx={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                            display: "block",
                                        }}
                                    />
                                </Card>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Box>
            </Container>
        </Box>
    );
}

export default EndowProgram;
