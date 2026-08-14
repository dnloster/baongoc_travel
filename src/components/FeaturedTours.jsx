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
    People as PeopleIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { TOURS } from "../data/tours";

const FeaturedTours = ({
    tours,
    title = "Tour nổi bật",
    subtitle = "Những tour du lịch được yêu thích nhất",
    backgroundColor = "background.default",
    showBackground = true,
}) => {
    const navigate = useNavigate();
    const displayTours = tours || TOURS.slice(0, 6);

    const content = (
        <Container
            maxWidth="lg"
            sx={{
                px: { xs: 1, sm: 2, md: 3 },
                py: { xs: 2, md: 4 },
            }}
        >
            {/* Header Section */}
            <Box
                textAlign="center"
                sx={{ mb: { xs: 4, md: 6 }, px: { xs: 1, sm: 0 } }}
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
                        fontSize: {
                            xs: "1.5rem",
                            sm: "1.8rem",
                            md: "3rem",
                        },
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
                        fontSize: { xs: "0.9rem", sm: "1rem", md: "1.25rem" },
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
                sx={{
                    px: { xs: 0, sm: 0 },
                    mt: { xs: 2, md: 4 },
                }}
            >
                {displayTours.map((tour) => (
                    <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={tour.id}>
                        <Card
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                borderRadius: { xs: 2, md: 3 },
                                overflow: "hidden",
                                transition:
                                    "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                                "&:hover": {
                                    transform: {
                                        xs: "none",
                                        md: "translateY(-8px)",
                                    },
                                    boxShadow: {
                                        xs: "0 8px 25px rgba(0,0,0,0.08)",
                                        md: "0 20px 40px rgba(0,0,0,0.12)",
                                    },
                                },
                                position: "relative",
                                height: "100%",
                                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
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
                                        top: { xs: 8, md: 12 },
                                        left: { xs: 8, md: 12 },
                                        zIndex: 2,
                                        fontWeight: "bold",
                                        fontSize: {
                                            xs: "0.7rem",
                                            md: "0.75rem",
                                        },
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
                                    top: { xs: 8, md: 12 },
                                    right: { xs: 8, md: 12 },
                                    zIndex: 2,
                                    backgroundColor: "rgba(255,255,255,0.9)",
                                    color: "primary.main",
                                    fontWeight: 600,
                                    fontSize: { xs: "0.7rem", md: "0.75rem" },
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
                                        transform: {
                                            xs: "none",
                                            md: "scale(1.05)",
                                        },
                                    },
                                }}
                            />

                            <CardContent
                                sx={{
                                    flex: 1,
                                    p: { xs: 1.5, sm: 2.5, md: 3 },
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                {/* Location */}
                                <Box
                                    display="flex"
                                    alignItems="center"
                                    sx={{ mb: { xs: 1, md: 1.5 } }}
                                >
                                    <LocationIcon
                                        sx={{
                                            fontSize: { xs: 14, md: 16 },
                                            color: "text.secondary",
                                            mr: 0.5,
                                        }}
                                    />
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{
                                            fontSize: {
                                                xs: "0.75rem",
                                                md: "0.875rem",
                                            },
                                        }}
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
                                        mb: { xs: 1, md: 1.5 },
                                        height: { xs: "2.6rem", md: "3.2rem" },
                                        lineHeight: 1.3,
                                        fontSize: {
                                            xs: "0.95rem",
                                            sm: "1.1rem",
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
                                    sx={{ mb: { xs: 1, md: 1.5 } }}
                                >
                                    <Rating
                                        value={tour.rating}
                                        precision={0.1}
                                        size="small"
                                        readOnly
                                        sx={{
                                            mr: 1,
                                            fontSize: {
                                                xs: "1rem",
                                                md: "1.2rem",
                                            },
                                        }}
                                    />
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{
                                            fontSize: {
                                                xs: "0.75rem",
                                                md: "0.875rem",
                                            },
                                        }}
                                    >
                                        {tour.rating}
                                        {tour.reviews
                                            ? ` (${tour.reviews} đánh giá)`
                                            : ""}
                                    </Typography>
                                </Box>

                                {/* Description - Fixed height */}
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    className="truncate-3-lines mobile-hidden sm-visible"
                                    sx={{
                                        mb: { xs: 1.5, md: 2 },
                                        lineHeight: 1.5,
                                        height: { xs: "3rem", md: "4.5rem" },
                                        fontSize: {
                                            xs: "0.8rem",
                                            md: "0.875rem",
                                        },
                                        display: { xs: "none", sm: "block" },
                                    }}
                                >
                                    {tour.description}
                                </Typography>

                                <Divider sx={{ my: { xs: 1, md: 1.5 } }} />

                                {/* Tour Info */}
                                <Box sx={{ mb: { xs: 1.5, md: 2 } }}>
                                    <Box
                                        display="flex"
                                        alignItems="center"
                                        sx={{ mb: { xs: 0.5, md: 1 } }}
                                    >
                                        <TimeIcon
                                            sx={{
                                                fontSize: { xs: 14, md: 16 },
                                                color: "primary.main",
                                                mr: 1,
                                            }}
                                        />
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                fontWeight: 500,
                                                fontSize: {
                                                    xs: "0.8rem",
                                                    md: "0.875rem",
                                                },
                                            }}
                                        >
                                            {tour.duration}
                                        </Typography>
                                    </Box>
                                    <Box display="flex" alignItems="center">
                                        <PeopleIcon
                                            sx={{
                                                fontSize: { xs: 14, md: 16 },
                                                color: "primary.main",
                                                mr: 1,
                                            }}
                                        />
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                fontWeight: 500,
                                                fontSize: {
                                                    xs: "0.8rem",
                                                    md: "0.875rem",
                                                },
                                            }}
                                        >
                                            {tour.transport || tour.duration}
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
                                                fontSize: {
                                                    xs: "0.75rem",
                                                    md: "0.875rem",
                                                },
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
                                                fontSize: { xs: 16, md: 18 },
                                                color: "success.main",
                                                mr: 0.5,
                                            }}
                                        />
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                fontWeight: "bold",
                                                color: "success.main",
                                                fontSize: {
                                                    xs: "1.1rem",
                                                    md: "1.3rem",
                                                },
                                            }}
                                        >
                                            {tour.price
                                                ? `${Number(
                                                      tour.price
                                                  ).toLocaleString()} VNĐ`
                                                : "Liên hệ"}
                                        </Typography>
                                    </Box>
                                </Box>
                            </CardContent>

                            <CardActions
                                sx={{
                                    p: { xs: 1.5, md: 2 },
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
                                        fontSize: { xs: "0.85rem", md: "1rem" },
                                        py: { xs: 1, md: 1.2 },
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
                                        fontSize: { xs: "0.85rem", md: "1rem" },
                                        py: { xs: 1, md: 1.2 },
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
