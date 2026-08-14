import React, { useRef } from "react";
import {
    Container,
    Typography,
    Box,
    Card,
    CardContent,
    Avatar,
    Rating,
} from "@mui/material";
import {
    FormatQuote as QuoteIcon,
    ChevronLeft as ChevronLeftIcon,
    ChevronRight as ChevronRightIcon,
} from "@mui/icons-material";
import SectionHeader from "../SectionHeader";

const CustomerFeedbackSection = () => {
    const scrollContainerRef = useRef(null);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollLeft -= 350;
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollLeft += 350;
        }
    };

    const customerFeedbacks = [
        {
            id: 1,
            name: "Nguyễn Thị Hoa",
            avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b8c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            location: "TP. Hồ Chí Minh",
            rating: 5,
            feedback:
                "Tour Hạ Long tuyệt vời! Dịch vụ chuyên nghiệp, hướng dẫn viên nhiệt tình. Gia đình tôi rất hài lòng với chuyến đi này. Chắc chắn sẽ quay lại với Bảo Ngọc Travel.",
            tour: "Tour Vịnh Hạ Long 3N2Đ",
        },
        {
            id: 2,
            name: "Trần Văn Minh",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            location: "Hà Nội",
            rating: 5,
            feedback:
                "Phú Quốc đẹp tuyệt vời! Khách sạn 5 sao, ăn uống ngon, HDV tận tình. Giá cả hợp lý so với chất lượng dịch vụ. Cảm ơn team Bảo Ngọc Travel đã mang lại kỳ nghỉ tuyệt vời.",
            tour: "Tour Phú Quốc 4N3Đ",
        },
        {
            id: 3,
            name: "Lê Thị Mai",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            location: "Đà Nẵng",
            rating: 5,
            feedback:
                "Đà Lạt mùa hoa thật tuyệt! Được ngắm hoa cẩm tú cầu, dâu tây tươi ngon. Lịch trình hợp lý, không bị gấp rút. HDV vui vẻ, nhiếp ảnh đẹp. Recommend 100%!",
            tour: "Tour Đà Lạt 3N2Đ",
        },
        {
            id: 4,
            name: "Phạm Hoàng Nam",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            location: "Bình Dương",
            rating: 4,
            feedback:
                "Sapa rất đẹp, không khí trong lành. Trekking tới đỉnh Fansipan thử thách nhưng worth it. Homestay sạch sẽ, ăn thì ngon. Chỉ có điều thời tiết hơi lạnh so với dự báo.",
            tour: "Tour Sapa 2N3Đ",
        },
        {
            id: 5,
            name: "Võ Thị Lan",
            avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
            location: "Cần Thơ",
            rating: 5,
            feedback:
                "Nha Trang biển đẹp quá! Được tắm biển, lặn ngắm san hô, thưởng thức hải sản tươi ngon. Resort view biển tuyệt đẹp. Cả nhà đều rất thích và muốn quay lại.",
            tour: "Tour Nha Trang 3N2Đ",
        },
        {
            id: 6,
            name: "Đỗ Công Thành",
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            location: "Hải Phòng",
            rating: 5,
            feedback:
                "Hội An cổ kính, đẹp như tranh! Đi thuyền thúng, làm đèn lồng, ăn cao lầu ngon. Phố cổ về đêm lãng mạn với ánh đèn lung linh. Dịch vụ của công ty rất chuyên nghiệp.",
            tour: "Tour Hội An - Mỹ Sơn 2N1Đ",
        },
    ];

    return (
        <Box sx={{ py: { xs: 5, md: 8 }, backgroundColor: "grey.50" }}>
            <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
                <SectionHeader
                    title="Khách hàng nói gì về chúng tôi"
                    subtitle="Hàng nghìn khách hàng đã tin tưởng và có những trải nghiệm tuyệt vời cùng Bảo Ngọc Travel"
                />

                {/* Feedback Grid */}
                <Box
                    sx={{
                        position: "relative",
                        overflow: "hidden",
                    }}
                >
                    {/* Navigation Arrows - Desktop Only */}
                    <Box
                        sx={{
                            display: { xs: "none", md: "flex" },
                            position: "absolute",
                            top: "50%",
                            left: 0,
                            right: 0,
                            transform: "translateY(-50%)",
                            justifyContent: "space-between",
                            pointerEvents: "none",
                            zIndex: 3,
                            px: 1,
                        }}
                    >
                        <Box
                            onClick={scrollLeft}
                            sx={{
                                width: 50,
                                height: 50,
                                borderRadius: "50%",
                                backgroundColor: "rgba(255,255,255,0.9)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                cursor: "pointer",
                                pointerEvents: "auto",
                                transition: "all 0.3s ease",
                                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                                "&:hover": {
                                    backgroundColor: "primary.main",
                                    color: "white",
                                    transform: "scale(1.1)",
                                },
                            }}
                        >
                            <ChevronLeftIcon />
                        </Box>
                        <Box
                            onClick={scrollRight}
                            sx={{
                                width: 50,
                                height: 50,
                                borderRadius: "50%",
                                backgroundColor: "rgba(255,255,255,0.9)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                cursor: "pointer",
                                pointerEvents: "auto",
                                transition: "all 0.3s ease",
                                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                                "&:hover": {
                                    backgroundColor: "primary.main",
                                    color: "white",
                                    transform: "scale(1.1)",
                                },
                            }}
                        >
                            <ChevronRightIcon />
                        </Box>
                    </Box>
                    <Box
                        ref={scrollContainerRef}
                        className="feedback-scroll-container feedback-scrollbar"
                        sx={{
                            display: "flex",
                            gap: { xs: 2, md: 3 },
                            overflowX: "auto",
                            scrollBehavior: "smooth",
                            px: { xs: 1, sm: 2, md: 3 },
                            py: 1,
                            scrollSnapType: "x mandatory",
                            "&::-webkit-scrollbar": {
                                height: 8,
                            },
                            "&::-webkit-scrollbar-track": {
                                backgroundColor: "rgba(0,0,0,0.1)",
                                borderRadius: 4,
                            },
                            "&::-webkit-scrollbar-thumb": {
                                background:
                                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                                borderRadius: 4,
                                "&:hover": {
                                    background:
                                        "linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%)",
                                },
                            },
                            // Hide scrollbar on mobile but keep functionality
                            "@media (max-width: 600px)": {
                                "&::-webkit-scrollbar": {
                                    display: "none",
                                },
                                "-ms-overflow-style": "none",
                                "scrollbar-width": "none",
                                "-webkit-overflow-scrolling": "touch",
                            },
                        }}
                    >
                        {customerFeedbacks.map((feedback) => (
                            <Card
                                key={feedback.id}
                                className="feedback-card"
                                sx={{
                                    minWidth: {
                                        xs: "min(280px, 82vw)",
                                        sm: 300,
                                        md: 340,
                                    },
                                    maxWidth: {
                                        xs: "min(280px, 82vw)",
                                        sm: 300,
                                        md: 340,
                                    },
                                    height: { xs: 300, md: 340 },
                                    position: "relative",
                                    borderRadius: 3,
                                    border: "1px solid",
                                    borderColor: "grey.200",
                                    transition:
                                        "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                                    flexShrink: 0,
                                    "&:hover": {
                                        transform: {
                                            xs: "scale(1.02)",
                                            md: "translateY(-8px)",
                                        },
                                        boxShadow:
                                            "0 16px 40px rgba(0,0,0,0.12)",
                                        borderColor: "primary.main",
                                    },
                                    overflow: "hidden",
                                    cursor: "pointer",
                                }}
                            >
                                {/* Quote Icon Background */}
                                <Box
                                    className="floating-quote"
                                    sx={{
                                        position: "absolute",
                                        top: -10,
                                        right: 20,
                                        color: "primary.main",
                                        opacity: 0.1,
                                        fontSize: "4rem",
                                        zIndex: 1,
                                    }}
                                >
                                    <QuoteIcon fontSize="inherit" />
                                </Box>

                                <CardContent
                                    sx={{
                                        p: { xs: 2.5, md: 3 },
                                        position: "relative",
                                        zIndex: 2,
                                        height: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                    }}
                                >
                                    {/* Customer Info */}
                                    <Box
                                        display="flex"
                                        alignItems="center"
                                        sx={{ mb: 2 }}
                                    >
                                        <Avatar
                                            src={feedback.avatar}
                                            alt={feedback.name}
                                            sx={{
                                                width: { xs: 45, md: 55 },
                                                height: { xs: 45, md: 55 },
                                                mr: 1.5,
                                                border: "3px solid",
                                                borderColor: "primary.light",
                                            }}
                                        />
                                        <Box sx={{ flex: 1, minWidth: 0 }}>
                                            <Typography
                                                variant="h6"
                                                sx={{
                                                    fontWeight: "bold",
                                                    fontSize: {
                                                        xs: "0.9rem",
                                                        md: "1rem",
                                                    },
                                                    color: "text.primary",
                                                    mb: 0.3,
                                                    lineHeight: 1.2,
                                                }}
                                            >
                                                {feedback.name}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                color="text.secondary"
                                                sx={{
                                                    fontSize: {
                                                        xs: "0.75rem",
                                                        md: "0.8rem",
                                                    },
                                                    lineHeight: 1.2,
                                                }}
                                            >
                                                {feedback.location}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                color="primary.main"
                                                sx={{
                                                    fontSize: {
                                                        xs: "0.7rem",
                                                        md: "0.75rem",
                                                    },
                                                    fontWeight: 500,
                                                    lineHeight: 1.2,
                                                }}
                                            >
                                                {feedback.tour}
                                            </Typography>
                                        </Box>
                                    </Box>

                                    {/* Rating */}
                                    <Box sx={{ mb: 2 }}>
                                        <Rating
                                            value={feedback.rating}
                                            readOnly
                                            size="small"
                                            sx={{
                                                color: "warning.main",
                                                "& .MuiRating-iconFilled": {
                                                    color: "#ffd700",
                                                },
                                                "& .MuiRating-icon": {
                                                    fontSize: {
                                                        xs: "1rem",
                                                        md: "1.2rem",
                                                    },
                                                },
                                            }}
                                        />
                                    </Box>

                                    {/* Feedback Content */}
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            lineHeight: 1.6,
                                            fontSize: {
                                                xs: "0.85rem",
                                                md: "0.9rem",
                                            },
                                            color: "text.primary",
                                            fontStyle: "italic",
                                            position: "relative",
                                            pl: 1,
                                            pr: 1,
                                            textAlign: "justify",
                                            flex: 1,
                                            overflow: "hidden",
                                            display: "-webkit-box",
                                            "-webkit-line-clamp": {
                                                xs: 6,
                                                md: 7,
                                            },
                                            "-webkit-box-orient": "vertical",
                                        }}
                                    >
                                        {feedback.feedback}
                                    </Typography>
                                </CardContent>
                            </Card>
                        ))}
                    </Box>

                    {/* Scroll Indicator for Mobile */}
                    <Box
                        sx={{
                            display: { xs: "flex", md: "none" },
                            justifyContent: "center",
                            alignItems: "center",
                            mt: 2,
                            gap: 1,
                        }}
                    >
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ fontSize: "0.8rem" }}
                        >
                            Vuốt để xem thêm
                        </Typography>
                        <Box
                            sx={{
                                display: "flex",
                                gap: 0.5,
                            }}
                        >
                            {[...Array(3)].map((_, i) => (
                                <Box
                                    key={i}
                                    sx={{
                                        width: 6,
                                        height: 6,
                                        borderRadius: "50%",
                                        backgroundColor: "primary.main",
                                        opacity: 0.3 + i * 0.2,
                                        animation: `pulse 1.5s ease-in-out infinite ${
                                            i * 0.3
                                        }s`,
                                    }}
                                />
                            ))}
                        </Box>
                    </Box>
                </Box>

                {/* Call to Action for Reviews */}
                <Box textAlign="center" sx={{ mt: { xs: 6, md: 8 } }}>
                    <Typography
                        variant="h6"
                        sx={{
                            mb: 2,
                            color: "text.secondary",
                            fontSize: { xs: "1rem", md: "1.25rem" },
                        }}
                    >
                        Bạn đã từng trải nghiệm tour với chúng tôi?
                    </Typography>
                    <Typography
                        variant="contained"
                        component="a"
                        href="/contact"
                        sx={{
                            textDecoration: "none",
                            px: { xs: 3, md: 4 },
                            py: { xs: 1.2, md: 1.5 },
                            borderRadius: 25,
                            background:
                                "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                            color: "white",
                            fontWeight: "bold",
                            fontSize: { xs: "0.9rem", md: "1rem" },
                            textTransform: "none",
                            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
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
                        Chia sẻ trải nghiệm của bạn
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default CustomerFeedbackSection;
