import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
    Box,
    Container,
    Typography,
    Button,
    Chip,
    Grid,
    Paper,
    Divider,
} from "@mui/material";
import {
    LocationOn as LocationIcon,
    AccessTime as TimeIcon,
    DirectionsCar as CarIcon,
    ArrowBack as ArrowBackIcon,
} from "@mui/icons-material";
import { getTourById } from "../data/tours";

const TourDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const tour = getTourById(id);

    if (!tour) {
        return (
            <Container maxWidth="md" sx={{ py: 8, textAlign: "center" }}>
                <Typography variant="h5" sx={{ mb: 2, fontWeight: 700 }}>
                    Không tìm thấy tour
                </Typography>
                <Button variant="contained" onClick={() => navigate("/tours")}>
                    Về danh sách tour
                </Button>
            </Container>
        );
    }

    return (
        <Box sx={{ width: "100%", backgroundColor: "#f8fafc", pb: 8 }}>
            <Box
                sx={{
                    position: "relative",
                    height: { xs: 220, sm: 320, md: 380 },
                    backgroundImage: `url(${tour.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    "&::after": {
                        content: '""',
                        position: "absolute",
                        inset: 0,
                        background:
                            "linear-gradient(180deg, rgba(0,0,0,0.15) 20%, rgba(15,23,42,0.82) 100%)",
                    },
                }}
            >
                <Container
                    maxWidth="lg"
                    sx={{
                        position: "relative",
                        zIndex: 1,
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-end",
                        pb: { xs: 2.5, md: 4 },
                    }}
                >
                    <Button
                        startIcon={<ArrowBackIcon />}
                        onClick={() => navigate("/tours")}
                        sx={{
                            alignSelf: "flex-start",
                            color: "white",
                            mb: 1.5,
                            textTransform: "none",
                        }}
                    >
                        Tất cả tour
                    </Button>
                    <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 1 }}>
                        <Chip
                            label={tour.category}
                            size="small"
                            sx={{ bgcolor: "primary.main", color: "white" }}
                        />
                        {tour.noShopping && (
                            <Chip
                                label="No shopping"
                                size="small"
                                sx={{ bgcolor: "#0f766e", color: "white" }}
                            />
                        )}
                    </Box>
                    <Typography
                        variant="h3"
                        sx={{
                            color: "white",
                            fontWeight: 700,
                            fontSize: { xs: "1.4rem", sm: "1.9rem", md: "2.3rem" },
                            lineHeight: 1.3,
                        }}
                    >
                        {tour.title}
                    </Typography>
                </Container>
            </Box>

            <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 }, mt: { xs: 2, md: 3 } }}>
                <Grid container spacing={3}>
                    <Grid size={{ xs: 12, md: 8 }}>
                        <Paper sx={{ p: { xs: 2, md: 3 }, mb: 3, borderRadius: 2 }}>
                            <Typography sx={{ color: "#475569", lineHeight: 1.7, mb: 2 }}>
                                {tour.description}
                            </Typography>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    gap: { xs: 1.5, md: 3 },
                                    color: "#334155",
                                }}
                            >
                                <Box sx={{ display: "flex", alignItems: "center", gap: 0.75 }}>
                                    <TimeIcon fontSize="small" color="primary" />
                                    <Typography variant="body2">{tour.duration}</Typography>
                                </Box>
                                <Box sx={{ display: "flex", alignItems: "center", gap: 0.75 }}>
                                    <LocationIcon fontSize="small" color="primary" />
                                    <Typography variant="body2">{tour.location}</Typography>
                                </Box>
                                <Box sx={{ display: "flex", alignItems: "center", gap: 0.75 }}>
                                    <CarIcon fontSize="small" color="primary" />
                                    <Typography variant="body2">{tour.transport}</Typography>
                                </Box>
                            </Box>
                            {tour.departureNote && (
                                <Typography variant="body2" sx={{ mt: 1.5, color: "primary.main" }}>
                                    {tour.departureNote}
                                </Typography>
                            )}
                        </Paper>

                        <Paper sx={{ p: { xs: 2, md: 3 }, mb: 3, borderRadius: 2 }}>
                            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                Điểm nổi bật
                            </Typography>
                            <Box component="ul" sx={{ pl: 2.5, m: 0 }}>
                                {tour.highlights.map((item) => (
                                    <Typography
                                        component="li"
                                        key={item}
                                        variant="body2"
                                        sx={{ mb: 1, color: "#334155", lineHeight: 1.6 }}
                                    >
                                        {item}
                                    </Typography>
                                ))}
                            </Box>
                        </Paper>

                        <Paper sx={{ p: { xs: 2, md: 3 }, borderRadius: 2 }}>
                            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                Lịch trình
                            </Typography>
                            {tour.itinerary.map((item, index) => (
                                <Box key={item.day} sx={{ mb: 2.5 }}>
                                    <Typography
                                        sx={{
                                            fontWeight: 700,
                                            color: "primary.main",
                                            mb: 0.5,
                                        }}
                                    >
                                        {item.day}: {item.title}
                                    </Typography>
                                    {(item.meals || item.stay) && (
                                        <Typography
                                            variant="caption"
                                            sx={{ color: "#64748b", display: "block", mb: 0.75 }}
                                        >
                                            {[item.meals && `Bữa ăn: ${item.meals}`, item.stay && `Nghỉ: ${item.stay}`]
                                                .filter(Boolean)
                                                .join(" · ")}
                                        </Typography>
                                    )}
                                    <Typography variant="body2" sx={{ color: "#475569", lineHeight: 1.7 }}>
                                        {item.content}
                                    </Typography>
                                    {index < tour.itinerary.length - 1 && (
                                        <Divider sx={{ mt: 2 }} />
                                    )}
                                </Box>
                            ))}
                        </Paper>
                    </Grid>

                    <Grid size={{ xs: 12, md: 4 }}>
                        <Paper
                            sx={{
                                p: 3,
                                borderRadius: 2,
                                position: { md: "sticky" },
                                top: { md: 96 },
                            }}
                        >
                            <Typography variant="body2" sx={{ color: "#64748b" }}>
                                Giá từ
                            </Typography>
                            <Typography
                                variant="h5"
                                sx={{ color: "#dc2626", fontWeight: 800, mb: 2 }}
                            >
                                Liên hệ
                            </Typography>
                            <Typography variant="body2" sx={{ color: "#64748b", mb: 2, lineHeight: 1.6 }}>
                                Điểm khởi hành: {tour.departure}
                            </Typography>
                            <Button
                                fullWidth
                                variant="contained"
                                onClick={() => navigate("/contact")}
                                sx={{ textTransform: "none", fontWeight: 700, py: 1.2, mb: 1.5 }}
                            >
                                Liên hệ đặt tour
                            </Button>
                            <Button
                                fullWidth
                                variant="outlined"
                                onClick={() => navigate("/tours")}
                                sx={{ textTransform: "none" }}
                            >
                                Xem tour khác
                            </Button>

                            <Divider sx={{ my: 2.5 }} />
                            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1 }}>
                                Giá bao gồm
                            </Typography>
                            {tour.included.map((item) => (
                                <Typography
                                    key={item}
                                    variant="body2"
                                    sx={{ color: "#475569", mb: 0.75, lineHeight: 1.5 }}
                                >
                                    • {item}
                                </Typography>
                            ))}
                            <Typography
                                variant="subtitle2"
                                sx={{ fontWeight: 700, mt: 2, mb: 1 }}
                            >
                                Không bao gồm
                            </Typography>
                            {tour.excluded.map((item) => (
                                <Typography
                                    key={item}
                                    variant="body2"
                                    sx={{ color: "#475569", mb: 0.75, lineHeight: 1.5 }}
                                >
                                    • {item}
                                </Typography>
                            ))}
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default TourDetail;
