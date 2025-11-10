import React from "react";
import {
    Container,
    Typography,
    Box,
    Button,
    Grid,
    Card,
    CardContent,
    CardMedia,
    CardActions,
    Chip,
    Rating,
    Divider,
} from "@mui/material";
import {
    LocationOn as LocationIcon,
    AccessTime as TimeIcon,
    AttachMoney as MoneyIcon,
    Star as StarIcon,
    People as PeopleIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const FeaturedTours = ({
    tours,
    title = "Tour nổi bật",
    subtitle = "Những tour du lịch được yêu thích nhất",
    backgroundColor = "background.default",
    showBackground = true,
}) => {
    const navigate = useNavigate();

    const defaultTours = [
        {
            id: 1,
            title: "Hạ Long Bay Adventure",
            description:
                "Khám phá vẻ đẹp kỳ diệu của Vịnh Hạ Long với tour 3 ngày 2 đêm",
            image: "https://images.unsplash.com/photo-1669819894338-53ab7afc6958?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1741",
            price: "2,500,000",
            originalPrice: "3,000,000",
            duration: "3 ngày 2 đêm",
            location: "Quảng Ninh",
            rating: 4.8,
            reviews: 156,
            maxGuests: 20,
            category: "Thiên nhiên",
            discount: 17,
        },
        {
            id: 2,
            title: "Sapa Highland Trek",
            description:
                "Trải nghiệm văn hóa và thiên nhiên tuyệt đẹp tại Sapa",
            image: "https://images.pexels.com/photos/6876737/pexels-photo-6876737.jpeg",
            price: "1,800,000",
            originalPrice: "2,200,000",
            duration: "2 ngày 1 đêm",
            location: "Lào Cai",
            rating: 4.6,
            reviews: 89,
            maxGuests: 15,
            category: "Văn hóa",
            discount: 18,
        },
        {
            id: 3,
            title: "Phú Quốc Island",
            description:
                "Nghỉ dưỡng tại đảo ngọc Phú Quốc với bãi biển tuyệt đẹp",
            image: "https://images.pexels.com/photos/33545/sunrise-phu-quoc-island-ocean.jpg",
            price: "3,200,000",
            originalPrice: "3,800,000",
            duration: "4 ngày 3 đêm",
            location: "Kiên Giang",
            rating: 4.9,
            reviews: 203,
            maxGuests: 25,
            category: "Biển đảo",
            discount: 16,
        },
        {
            id: 4,
            title: "Bắc Kinh - Thủ Đô Ngàn Năm",
            description:
                "Khám phá Tử Cấm Thành, Vạn Lý Trường Thành và văn hóa cổ xưa",
            image: "https://images.pexels.com/photos/2846030/pexels-photo-2846030.jpeg",
            price: "4,500,000",
            originalPrice: "5,200,000",
            duration: "5 ngày 4 đêm",
            location: "Trung Quốc",
            rating: 4.7,
            reviews: 124,
            maxGuests: 18,
            category: "Lịch sử",
            discount: 13,
        },
        {
            id: 5,
            title: "Thượng Hải - Thành Phố Hiện Đại",
            description:
                "Trải nghiệm sự kết hợp hoàn hảo giữa truyền thống và hiện đại",
            image: "https://images.pexels.com/photos/33625670/pexels-photo-33625670.jpeg",
            price: "3,800,000",
            originalPrice: "4,300,000",
            duration: "4 ngày 3 đêm",
            location: "Trung Quốc",
            rating: 4.5,
            reviews: 97,
            maxGuests: 22,
            category: "Thành phố",
            discount: 12,
        },
        {
            id: 6,
            title: "Cửu Trại Câu - Tiên Cảnh Trần Gian",
            description:
                "Chiêm ngưỡng vẻ đẹp tuyệt vời của hồ nước trong xanh và thác nước",
            image: "https://media-cdn-v2.laodong.vn/storage/newsportal/2024/10/24/1411989/399216707_6478483805.jpg",
            price: "5,200,000",
            originalPrice: "6,000,000",
            duration: "6 ngày 5 đêm",
            location: "Trung Quốc",
            rating: 4.9,
            reviews: 167,
            maxGuests: 16,
            category: "Thiên nhiên",
            discount: 13,
        },
    ];

    const displayTours = tours || defaultTours;

    const content = (
        <Container maxWidth="lg">
            {/* Header Section */}
            <Box
                textAlign="center"
                sx={{ mb: { xs: 4, md: 6 }, px: { xs: 2, sm: 0 } }}
            >
                <Typography
                    variant="h3"
                    component="h2"
                    className="responsive-text-2xl lg-text-3xl"
                    sx={{
                        fontWeight: "bold",
                        background:
                            "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        mb: 2,
                        fontSize: { xs: "1.8rem", sm: "2.2rem", md: "3rem" },
                    }}
                >
                    {title}
                </Typography>
                <Typography
                    variant="h6"
                    color="text.secondary"
                    className="responsive-text-base md-text-lg"
                    sx={{
                        maxWidth: { xs: "100%", md: 600 },
                        mx: "auto",
                        lineHeight: 1.6,
                        fontSize: { xs: "1rem", md: "1.25rem" },
                        px: { xs: 2, sm: 0 },
                    }}
                >
                    {subtitle}
                </Typography>
                <Box
                    sx={{
                        width: { xs: 40, md: 60 },
                        height: 4,
                        backgroundColor: "primary.main",
                        mx: "auto",
                        mt: { xs: 2, md: 3 },
                        borderRadius: 2,
                    }}
                />
            </Box>

            <Grid
                container
                spacing={{ xs: 2, sm: 3, md: 4 }}
                sx={{ px: { xs: 2, sm: 0 } }}
            >
                {displayTours.map((tour) => (
                    <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={tour.id}>
                        <Card
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                borderRadius: 3,
                                overflow: "hidden",
                                transition:
                                    "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                                "&:hover": {
                                    transform: "translateY(-8px)",
                                    boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
                                },
                                position: "relative",
                            }}
                        >
                            {/* Discount Badge */}
                            {tour.discount && (
                                <Chip
                                    label={`-${tour.discount}%`}
                                    color="error"
                                    size="small"
                                    sx={{
                                        position: "absolute",
                                        top: 12,
                                        left: 12,
                                        zIndex: 2,
                                        fontWeight: "bold",
                                        fontSize: "0.75rem",
                                    }}
                                />
                            )}

                            {/* Category Badge */}
                            <Chip
                                label={tour.category}
                                variant="filled"
                                size="small"
                                sx={{
                                    position: "absolute",
                                    top: 12,
                                    right: 12,
                                    zIndex: 2,
                                    backgroundColor: "rgba(255,255,255,0.9)",
                                    color: "primary.main",
                                    fontWeight: 600,
                                }}
                            />

                            <CardMedia
                                component="img"
                                height="200"
                                image={tour.image}
                                alt={tour.title}
                                className="responsive-image"
                                sx={{
                                    objectFit: "cover",
                                    transition: "transform 0.3s ease",
                                    height: { xs: 180, sm: 200, md: 220 },
                                    "&:hover": {
                                        transform: "scale(1.05)",
                                    },
                                }}
                            />

                            <CardContent
                                sx={{
                                    flex: 1,
                                    p: { xs: 2, sm: 2.5, md: 3 },
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                {/* Location */}
                                <Box
                                    display="flex"
                                    alignItems="center"
                                    sx={{ mb: 1.5 }}
                                >
                                    <LocationIcon
                                        sx={{
                                            fontSize: 16,
                                            color: "text.secondary",
                                            mr: 0.5,
                                        }}
                                    />
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        {tour.location}
                                    </Typography>
                                </Box>

                                {/* Title - Fixed height */}
                                <Typography
                                    variant="h6"
                                    component="h3"
                                    className="truncate-2-lines"
                                    sx={{
                                        fontWeight: "bold",
                                        mb: 1.5,
                                        height: { xs: "2.8rem", md: "3.2rem" },
                                        lineHeight: 1.3,
                                        fontSize: {
                                            xs: "1.1rem",
                                            md: "1.25rem",
                                        },
                                    }}
                                >
                                    {tour.title}
                                </Typography>

                                {/* Rating */}
                                <Box
                                    display="flex"
                                    alignItems="center"
                                    sx={{ mb: 1.5 }}
                                >
                                    <Rating
                                        value={tour.rating}
                                        precision={0.1}
                                        size="small"
                                        readOnly
                                        sx={{ mr: 1 }}
                                    />
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        {tour.rating} ({tour.reviews} đánh giá)
                                    </Typography>
                                </Box>

                                {/* Description - Fixed height */}
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    className="truncate-3-lines mobile-hidden sm-visible"
                                    sx={{
                                        mb: 2,
                                        lineHeight: 1.5,
                                        height: { xs: "3.6rem", md: "4.5rem" },
                                        fontSize: {
                                            xs: "0.85rem",
                                            md: "0.875rem",
                                        },
                                    }}
                                >
                                    {tour.description}
                                </Typography>

                                <Divider sx={{ my: 1.5 }} />

                                {/* Tour Info */}
                                <Box sx={{ mb: 2 }}>
                                    <Box
                                        display="flex"
                                        alignItems="center"
                                        sx={{ mb: 1 }}
                                    >
                                        <TimeIcon
                                            sx={{
                                                fontSize: 16,
                                                color: "primary.main",
                                                mr: 1,
                                            }}
                                        />
                                        <Typography
                                            variant="body2"
                                            sx={{ fontWeight: 500 }}
                                        >
                                            {tour.duration}
                                        </Typography>
                                    </Box>
                                    <Box display="flex" alignItems="center">
                                        <PeopleIcon
                                            sx={{
                                                fontSize: 16,
                                                color: "primary.main",
                                                mr: 1,
                                            }}
                                        />
                                        <Typography
                                            variant="body2"
                                            sx={{ fontWeight: 500 }}
                                        >
                                            Tối đa {tour.maxGuests} người
                                        </Typography>
                                    </Box>
                                </Box>

                                {/* Price Section - Push to bottom */}
                                <Box sx={{ mt: "auto" }}>
                                    {tour.originalPrice && (
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                textDecoration: "line-through",
                                                color: "text.secondary",
                                                mb: 0.5,
                                            }}
                                        >
                                            {Number(
                                                tour.originalPrice
                                            ).toLocaleString()}{" "}
                                            VNĐ
                                        </Typography>
                                    )}
                                    <Box display="flex" alignItems="center">
                                        <MoneyIcon
                                            sx={{
                                                fontSize: 18,
                                                color: "success.main",
                                                mr: 0.5,
                                            }}
                                        />
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                fontWeight: "bold",
                                                color: "success.main",
                                                fontSize: "1.3rem",
                                            }}
                                        >
                                            {Number(
                                                tour.price
                                            ).toLocaleString()}{" "}
                                            VNĐ
                                        </Typography>
                                    </Box>
                                </Box>
                            </CardContent>

                            <CardActions
                                sx={{
                                    p: { xs: 2, sm: 2.5, md: 3 },
                                    pt: 0,
                                    flexDirection: { xs: "column", sm: "row" },
                                    gap: { xs: 1, sm: 0 },
                                }}
                            >
                                <Button
                                    variant="outlined"
                                    size="medium"
                                    onClick={() =>
                                        navigate(`/tours/${tour.id}`)
                                    }
                                    sx={{
                                        textTransform: "none",
                                        fontWeight: 600,
                                        borderRadius: 2,
                                        flex: 1,
                                        mr: { xs: 0, sm: 1 },
                                        width: { xs: "100%", sm: "auto" },
                                        fontSize: { xs: "0.9rem", md: "1rem" },
                                    }}
                                >
                                    <span className="mobile-hidden sm-visible">
                                        Xem chi tiết
                                    </span>
                                    <span className="mobile-visible sm-hidden">
                                        Chi tiết
                                    </span>
                                </Button>
                                <Button
                                    variant="contained"
                                    size="medium"
                                    sx={{
                                        textTransform: "none",
                                        fontWeight: 600,
                                        borderRadius: 2,
                                        flex: 1,
                                        width: { xs: "100%", sm: "auto" },
                                        fontSize: { xs: "0.9rem", md: "1rem" },
                                        background:
                                            "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                                        "&:hover": {
                                            background:
                                                "linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%)",
                                        },
                                    }}
                                >
                                    Đặt ngay
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );

    return showBackground ? (
        <Box sx={{ backgroundColor, py: 8 }}>{content}</Box>
    ) : (
        <Box sx={{ py: 8 }}>{content}</Box>
    );
};

export default FeaturedTours;
