import React, { useState, useEffect } from "react";
import {
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    CardMedia,
    CardActions,
    Button,
    Box,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Pagination,
    Chip,
    Paper,
    Rating,
    Divider,
    IconButton,
    Fade,
    Skeleton,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    AppBar,
    Toolbar,
    Slide,
} from "@mui/material";
import {
    Search as SearchIcon,
    LocationOn as LocationIcon,
    AccessTime as TimeIcon,
    AttachMoney as MoneyIcon,
    Star as StarIcon,
    FilterList as FilterIcon,
    ViewModule as GridIcon,
    ViewList as ListIcon,
    Favorite as FavoriteIcon,
    FavoriteBorder as FavoriteBorderIcon,
    ExpandMore as ExpandMoreIcon,
    CalendarToday as CalendarIcon,
    DirectionsCar as CarIcon,
    Flight as FlightIcon,
    AccountBalance as LuxuryIcon,
    LocalOffer as OfferIcon,
    Close as CloseIcon,
    Sort as SortIcon,
} from "@mui/icons-material";
import useAppStore from "../store/appStore";
import { useNavigate } from "react-router-dom";
import { TOURS, TOUR_CATEGORIES } from "../data/tours";

const mockTours = TOURS;
const categories = TOUR_CATEGORIES;
const sortOptions = [
    { value: "name", label: "Tên A-Z" },
    { value: "price-low", label: "Giá thấp đến cao" },
    { value: "price-high", label: "Giá cao đến thấp" },
    { value: "rating", label: "Đánh giá cao nhất" },
    { value: "discount", label: "Khuyến mãi lớn nhất" },
];

// Transition component for slide up effect
const SlideUpTransition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const Tours = () => {
    const { tours, setTours } = useAppStore();
    const navigate = useNavigate();

    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [sortBy, setSortBy] = useState("name");
    const [currentPage, setCurrentPage] = useState(1);
    const [toursPerPage] = useState(9);
    const [loading, setLoading] = useState(true);
    const [favorites, setFavorites] = useState(new Set());

    // Filter states matching the image
    const [priceRange, setPriceRange] = useState("");
    const [selectedDestination, setSelectedDestination] = useState("");
    const [departureDate, setDepartureDate] = useState("");
    const [tourType, setTourType] = useState("");
    const [transportation, setTransportation] = useState("");

    // Mobile filter dialog
    const [filterDialogOpen, setFilterDialogOpen] = useState(false);
    const [sortDialogOpen, setSortDialogOpen] = useState(false);
    useEffect(() => {
        // Initialize tours data and simulate loading
        setLoading(true);
        const timer = setTimeout(() => {
            setTours(TOURS);
            setLoading(false);
        }, 400);

        return () => clearTimeout(timer);
    }, [setTours]);

    // Handle favorite toggle
    const toggleFavorite = (tourId) => {
        setFavorites((prev) => {
            const newFavorites = new Set(prev);
            if (newFavorites.has(tourId)) {
                newFavorites.delete(tourId);
            } else {
                newFavorites.add(tourId);
            }
            return newFavorites;
        });
    };

    // Filter and sort tours based on all filter criteria
    const filteredAndSortedTours = React.useMemo(() => {
        let result = (tours.length > 0 ? tours : mockTours).filter((tour) => {
            // Search filter
            const matchesSearch =
                searchQuery === "" ||
                tour.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                tour.description
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase()) ||
                tour.location.toLowerCase().includes(searchQuery.toLowerCase());

            // Category filter
            const matchesCategory =
                selectedCategory === "" || tour.category === selectedCategory;

            // Price range filter
            const matchesPriceRange = (() => {
                if (priceRange === "") return true;
                const price = tour.price;
                if (!price) return false;
                switch (priceRange) {
                    case "under-5":
                        return price < 5000000;
                    case "5-10":
                        return price >= 5000000 && price <= 10000000;
                    case "10-20":
                        return price >= 10000000 && price <= 20000000;
                    case "over-20":
                        return price > 20000000;
                    default:
                        return true;
                }
            })();

            // Other filters (placeholder for future expansion)
            const matchesDestination =
                selectedDestination === "" ||
                (tour.departure || "")
                    .toLowerCase()
                    .includes(selectedDestination.toLowerCase());
            const matchesDepartureDate = departureDate === "" || true;
            const matchesTourType = tourType === "" || true;
            const matchesTransportation = transportation === "" || true;

            return (
                matchesSearch &&
                matchesCategory &&
                matchesPriceRange &&
                matchesDestination &&
                matchesDepartureDate &&
                matchesTourType &&
                matchesTransportation
            );
        });

        // Sort tours
        result.sort((a, b) => {
            switch (sortBy) {
                case "name":
                    return a.title.localeCompare(b.title);
                case "price-low":
                    return a.price - b.price;
                case "price-high":
                    return b.price - a.price;
                case "rating":
                    return b.rating - a.rating;
                case "discount":
                    return (b.discount || 0) - (a.discount || 0);
                default:
                    return 0;
            }
        });

        return result;
    }, [
        tours,
        searchQuery,
        selectedCategory,
        sortBy,
        priceRange,
        selectedDestination,
        departureDate,
        tourType,
        transportation,
    ]);

    // Pagination
    const indexOfLastTour = currentPage * toursPerPage;
    const indexOfFirstTour = indexOfLastTour - toursPerPage;
    const currentTours = filteredAndSortedTours.slice(
        indexOfFirstTour,
        indexOfLastTour
    );
    const totalPages = Math.ceil(filteredAndSortedTours.length / toursPerPage);

    const formatPrice = (price) => {
        if (!price) return "Liên hệ";
        return new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
        }).format(price);
    };

    const handlePageChange = (event, page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <Box
            sx={{
                backgroundColor: "#f8fafc",
                minHeight: "100vh",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
            }}
        >
            <Container
                maxWidth="xl"
                sx={{
                    py: { xs: 3, md: 5 },
                    pb: { xs: 8, md: 5 },
                    mx: "auto",
                    px: { xs: 2, sm: 3, md: 4 },
                    width: "100%",
                    maxWidth: "1400px",
                }}
            >
                <Grid
                    container
                    spacing={3}
                    sx={{ width: "100%", margin: 0, justifyContent: "center" }}
                >
                    {/* Left Sidebar - Filter Panel - Hidden on Mobile */}
                    <Grid
                        size={{ xs: 12, md: 3 }}
                        sx={{ display: { xs: "none", md: "block" } }}
                    >
                        <Paper
                            elevation={0}
                            sx={{
                                p: 3,
                                borderRadius: 2,
                                backgroundColor: "white",
                                border: "1px solid #e2e8f0",
                                position: "sticky",
                                top: 180,
                                maxHeight: "calc(100vh - 140px)",
                                overflowY: "auto",
                                "&::-webkit-scrollbar": {
                                    width: "4px",
                                },
                                "&::-webkit-scrollbar-track": {
                                    backgroundColor: "#f1f5f9",
                                },
                                "&::-webkit-scrollbar-thumb": {
                                    backgroundColor: "#cbd5e1",
                                    borderRadius: "2px",
                                },
                            }}
                        >
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: 600,
                                    mb: 3,
                                    color: "#1e293b",
                                    fontSize: "18px",
                                }}
                            >
                                BỘ LỌC TÌM KIẾM
                            </Typography>

                            {/* Price Range Filter */}
                            <Box sx={{ mb: 3 }}>
                                <Typography
                                    variant="subtitle2"
                                    sx={{
                                        fontWeight: 600,
                                        mb: 2,
                                        color: "#475569",
                                        fontSize: "14px",
                                    }}
                                >
                                    Ngân sách
                                </Typography>
                                <Grid container spacing={1}>
                                    {[
                                        {
                                            label: "Dưới 5 triệu",
                                            value: "under-5",
                                            range: [0, 5000000],
                                        },
                                        {
                                            label: "Từ 5 - 10 triệu",
                                            value: "5-10",
                                            range: [5000000, 10000000],
                                        },
                                        {
                                            label: "Từ 10 - 20 triệu",
                                            value: "10-20",
                                            range: [10000000, 20000000],
                                        },
                                        {
                                            label: "Trên 20 triệu",
                                            value: "over-20",
                                            range: [20000000, Infinity],
                                        },
                                    ].map((option) => (
                                        <Grid size={{ xs: 6 }} key={option.value}>
                                            <Button
                                                variant={
                                                    priceRange === option.value
                                                        ? "contained"
                                                        : "outlined"
                                                }
                                                size="small"
                                                fullWidth
                                                onClick={() => {
                                                    setPriceRange(
                                                        priceRange ===
                                                            option.value
                                                            ? ""
                                                            : option.value
                                                    );
                                                    setCurrentPage(1);
                                                }}
                                                sx={{
                                                    fontSize: "12px",
                                                    py: 1,
                                                    borderRadius: 1,
                                                    textTransform: "none",
                                                    fontWeight: 500,
                                                    borderColor: "#e2e8f0",
                                                    color:
                                                        priceRange ===
                                                        option.value
                                                            ? "white"
                                                            : "#64748b",
                                                    "&:hover": {
                                                        borderColor: "#1976d2",
                                                    },
                                                }}
                                            >
                                                {option.label}
                                            </Button>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Box>

                            {/* Destination Filter */}
                            <Box sx={{ mb: 3 }}>
                                <Typography
                                    variant="subtitle2"
                                    sx={{
                                        fontWeight: 600,
                                        mb: 2,
                                        color: "#475569",
                                        fontSize: "14px",
                                    }}
                                >
                                    Điểm khởi hành
                                </Typography>
                                <FormControl fullWidth size="small">
                                    <Select
                                        value={selectedDestination}
                                        onChange={(e) => {
                                            setSelectedDestination(
                                                e.target.value
                                            );
                                            setCurrentPage(1);
                                        }}
                                        displayEmpty
                                        sx={{
                                            fontSize: "14px",
                                            "& .MuiSelect-select": {
                                                py: 1.5,
                                            },
                                        }}
                                        endIcon={<ExpandMoreIcon />}
                                    >
                                        <MenuItem
                                            value=""
                                            sx={{ fontSize: "14px" }}
                                        >
                                            Tất cả
                                        </MenuItem>
                                        <MenuItem
                                            value="Hà Nội"
                                            sx={{ fontSize: "14px" }}
                                        >
                                            Hà Nội
                                        </MenuItem>
                                        <MenuItem
                                            value="Lào Cai"
                                            sx={{ fontSize: "14px" }}
                                        >
                                            Lào Cai
                                        </MenuItem>
                                        <MenuItem
                                            value="Móng Cái"
                                            sx={{ fontSize: "14px" }}
                                        >
                                            Móng Cái
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>

                            {/* Điểm đến */}
                            <Box sx={{ mb: 3 }}>
                                <Typography
                                    variant="subtitle2"
                                    sx={{
                                        fontWeight: 600,
                                        mb: 2,
                                        color: "#475569",
                                        fontSize: "14px",
                                    }}
                                >
                                    Điểm đến
                                </Typography>
                                <FormControl fullWidth size="small">
                                    <Select
                                        value={selectedCategory}
                                        onChange={(e) => {
                                            setSelectedCategory(e.target.value);
                                            setCurrentPage(1);
                                        }}
                                        displayEmpty
                                        sx={{
                                            fontSize: "14px",
                                            "& .MuiSelect-select": {
                                                py: 1.5,
                                            },
                                        }}
                                        endIcon={<ExpandMoreIcon />}
                                    >
                                        <MenuItem
                                            value=""
                                            sx={{ fontSize: "14px" }}
                                        >
                                            Tất cả
                                        </MenuItem>
                                        {categories.map((category) => (
                                            <MenuItem
                                                key={category}
                                                value={category}
                                                sx={{ fontSize: "14px" }}
                                            >
                                                {category}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Box>

                            {/* Departure Date */}
                            <Box sx={{ mb: 3 }}>
                                <Typography
                                    variant="subtitle2"
                                    sx={{
                                        fontWeight: 600,
                                        mb: 2,
                                        color: "#475569",
                                        fontSize: "14px",
                                    }}
                                >
                                    Ngày đi
                                </Typography>
                                <TextField
                                    fullWidth
                                    size="small"
                                    type="date"
                                    value={departureDate}
                                    onChange={(e) => {
                                        setDepartureDate(e.target.value);
                                        setCurrentPage(1);
                                    }}
                                    InputProps={{
                                        startAdornment: (
                                            <CalendarIcon
                                                sx={{
                                                    mr: 1,
                                                    color: "#64748b",
                                                    fontSize: 18,
                                                }}
                                            />
                                        ),
                                    }}
                                    sx={{
                                        "& .MuiInputBase-input": {
                                            fontSize: "14px",
                                            py: 1.5,
                                        },
                                    }}
                                />
                            </Box>

                            {/* Tour Type */}
                            <Box sx={{ mb: 3 }}>
                                <Typography
                                    variant="subtitle2"
                                    sx={{
                                        fontWeight: 600,
                                        mb: 2,
                                        color: "#475569",
                                        fontSize: "14px",
                                    }}
                                >
                                    Dòng tour
                                </Typography>
                                <Grid container spacing={1}>
                                    {[
                                        {
                                            label: "Cao cấp",
                                            value: "luxury",
                                            icon: <LuxuryIcon />,
                                        },
                                        {
                                            label: "Tiêu chuẩn",
                                            value: "standard",
                                            icon: <StarIcon />,
                                        },
                                        {
                                            label: "Tiết kiệm",
                                            value: "budget",
                                            icon: <OfferIcon />,
                                        },
                                        {
                                            label: "Giá tốt",
                                            value: "deal",
                                            icon: <OfferIcon />,
                                        },
                                    ].map((option) => (
                                        <Grid size={{ xs: 6 }} key={option.value}>
                                            <Button
                                                variant={
                                                    tourType === option.value
                                                        ? "contained"
                                                        : "outlined"
                                                }
                                                size="small"
                                                fullWidth
                                                onClick={() => {
                                                    setTourType(
                                                        tourType ===
                                                            option.value
                                                            ? ""
                                                            : option.value
                                                    );
                                                    setCurrentPage(1);
                                                }}
                                                sx={{
                                                    fontSize: "12px",
                                                    py: 1,
                                                    borderRadius: 1,
                                                    textTransform: "none",
                                                    fontWeight: 500,
                                                    borderColor: "#e2e8f0",
                                                    color:
                                                        tourType ===
                                                        option.value
                                                            ? "white"
                                                            : "#64748b",
                                                    "&:hover": {
                                                        borderColor: "#1976d2",
                                                    },
                                                }}
                                            >
                                                {option.label}
                                            </Button>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Box>

                            {/* Transportation */}
                            <Box sx={{ mb: 3 }}>
                                <Typography
                                    variant="subtitle2"
                                    sx={{
                                        fontWeight: 600,
                                        mb: 2,
                                        color: "#475569",
                                        fontSize: "14px",
                                    }}
                                >
                                    Phương tiện
                                </Typography>
                                <Grid container spacing={1}>
                                    {[
                                        {
                                            label: "Xe",
                                            value: "car",
                                            icon: <CarIcon />,
                                        },
                                        {
                                            label: "Máy bay",
                                            value: "plane",
                                            icon: <FlightIcon />,
                                        },
                                    ].map((option) => (
                                        <Grid size={{ xs: 6 }} key={option.value}>
                                            <Button
                                                variant={
                                                    transportation ===
                                                    option.value
                                                        ? "contained"
                                                        : "outlined"
                                                }
                                                size="small"
                                                fullWidth
                                                startIcon={option.icon}
                                                onClick={() => {
                                                    setTransportation(
                                                        transportation ===
                                                            option.value
                                                            ? ""
                                                            : option.value
                                                    );
                                                    setCurrentPage(1);
                                                }}
                                                sx={{
                                                    fontSize: "12px",
                                                    py: 1,
                                                    borderRadius: 1,
                                                    textTransform: "none",
                                                    fontWeight: 500,
                                                    borderColor: "#e2e8f0",
                                                    color:
                                                        transportation ===
                                                        option.value
                                                            ? "white"
                                                            : "#64748b",
                                                    "&:hover": {
                                                        borderColor: "#1976d2",
                                                    },
                                                    "& .MuiButton-startIcon": {
                                                        fontSize:
                                                            "16px !important",
                                                    },
                                                }}
                                            >
                                                {option.label}
                                            </Button>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Box>

                            {/* Apply Button */}
                            <Button
                                variant="contained"
                                fullWidth
                                sx={{
                                    py: 1.5,
                                    backgroundColor: "#1976d2",
                                    borderRadius: 1,
                                    textTransform: "none",
                                    fontWeight: 600,
                                    fontSize: "14px",
                                    "&:hover": {
                                        backgroundColor: "#1565c0",
                                    },
                                }}
                                onClick={() => {
                                    // Apply all filters
                                    setCurrentPage(1);
                                }}
                            >
                                Áp dụng
                            </Button>
                        </Paper>
                    </Grid>

                    {/* Right Content - Search & Tours */}
                    <Grid size={{ xs: 12, md: 9 }}>
                        {/* Results Header */}
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: { xs: "flex-start", md: "center" },
                                flexWrap: "wrap",
                                gap: 1.5,
                                mb: 3,
                            }}
                        >
                            <Typography
                                variant="body1"
                                sx={{
                                    color: "#475569",
                                    fontSize: { xs: "0.9rem", md: "16px" },
                                    lineHeight: 1.5,
                                    pr: 1,
                                }}
                            >
                                Chúng tôi tìm thấy{" "}
                                <Box
                                    component="span"
                                    sx={{
                                        color: "#dc2626",
                                        fontWeight: 700,
                                        fontSize: "18px",
                                    }}
                                >
                                    {filteredAndSortedTours.length}
                                </Box>{" "}
                                chương trình tour cho quý khách
                            </Typography>

                            <Box
                                sx={{
                                    display: { md: "flex", xs: "none" },
                                    gap: 2,
                                    alignItems: "center",
                                }}
                            >
                                <FormControl
                                    size="small"
                                    sx={{ minWidth: 140 }}
                                >
                                    <Select
                                        value={sortBy}
                                        onChange={(e) =>
                                            setSortBy(e.target.value)
                                        }
                                        sx={{
                                            fontSize: "14px",
                                            "& .MuiSelect-select": {
                                                py: 1,
                                            },
                                        }}
                                    >
                                        {sortOptions.map((option) => (
                                            <MenuItem
                                                key={option.value}
                                                value={option.value}
                                                sx={{ fontSize: "14px" }}
                                            >
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Box>
                        </Box>

                        {/* Tour List - Vertical Layout */}
                        {loading ? (
                            <Box>
                                {[...Array(3)].map((_, index) => (
                                    <Paper
                                        key={index}
                                        elevation={0}
                                        sx={{
                                            mb: 3,
                                            borderRadius: 2,
                                            overflow: "hidden",
                                            border: "1px solid #e2e8f0",
                                        }}
                                    >
                                        <Box sx={{ display: "flex" }}>
                                            <Skeleton
                                                variant="rectangular"
                                                width={300}
                                                height={200}
                                            />
                                            <Box sx={{ flex: 1, p: 3 }}>
                                                <Skeleton
                                                    variant="text"
                                                    height={28}
                                                    width="80%"
                                                />
                                                <Skeleton
                                                    variant="text"
                                                    height={20}
                                                    width="40%"
                                                    sx={{ mt: 1 }}
                                                />
                                                <Skeleton
                                                    variant="text"
                                                    height={20}
                                                    width="60%"
                                                    sx={{ mt: 1 }}
                                                />
                                                <Box sx={{ mt: 2 }}>
                                                    <Skeleton
                                                        variant="text"
                                                        height={32}
                                                        width="30%"
                                                    />
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Paper>
                                ))}
                            </Box>
                        ) : currentTours.length === 0 ? (
                            <Paper
                                elevation={0}
                                sx={{
                                    p: 6,
                                    textAlign: "center",
                                    backgroundColor: "white",
                                    borderRadius: 2,
                                    border: "1px solid #e2e8f0",
                                }}
                            >
                                <SearchIcon
                                    sx={{
                                        fontSize: 60,
                                        color: "#94a3b8",
                                        mb: 2,
                                    }}
                                />
                                <Typography
                                    variant="h6"
                                    gutterBottom
                                    color="#475569"
                                >
                                    Không tìm thấy tour phù hợp
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="#64748b"
                                    paragraph
                                >
                                    Hãy thử thay đổi từ khóa tìm kiếm hoặc bộ
                                    lọc
                                </Typography>
                                <Button
                                    variant="outlined"
                                    onClick={() => {
                                        setSearchQuery("");
                                        setSelectedCategory("");
                                        setPriceRange("");
                                        setSelectedDestination("");
                                        setDepartureDate("");
                                        setTourType("");
                                        setTransportation("");
                                        setCurrentPage(1);
                                    }}
                                    sx={{ mt: 2 }}
                                >
                                    Xóa bộ lọc
                                </Button>
                            </Paper>
                        ) : (
                            <Box>
                                {currentTours.map((tour, index) => (
                                    <Fade
                                        in={true}
                                        timeout={300 + index * 100}
                                        key={tour.id}
                                    >
                                        <Paper
                                            elevation={0}
                                            sx={{
                                                mb: 3,
                                                borderRadius: 2,
                                                overflow: "hidden",
                                                border: "1px solid #e2e8f0",
                                                transition:
                                                    "all 0.3s ease-in-out",
                                                "&:hover": {
                                                    boxShadow:
                                                        "0 4px 20px rgba(0,0,0,0.08)",
                                                    borderColor: "#1976d2",
                                                },
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    position: "relative",
                                                    flexDirection: {
                                                        xs: "column",
                                                        sm: "row",
                                                    },
                                                }}
                                            >
                                                {/* Image Section */}
                                                <Box
                                                    sx={{
                                                        position: "relative",
                                                        width: {
                                                            xs: "100%",
                                                            sm: 220,
                                                            md: 250,
                                                        },
                                                        flexShrink: 0,
                                                    }}
                                                >
                                                    <CardMedia
                                                        component="img"
                                                        image={tour.image}
                                                        alt={tour.title}
                                                        sx={{
                                                            width: "100%",
                                                            height: {
                                                                xs: 200,
                                                                sm: 180,
                                                                md: 200,
                                                            },
                                                            objectFit: "cover",
                                                        }}
                                                    />

                                                    {/* Favorite Heart */}
                                                    <IconButton
                                                        size="small"
                                                        onClick={() =>
                                                            toggleFavorite(
                                                                tour.id
                                                            )
                                                        }
                                                        sx={{
                                                            position:
                                                                "absolute",
                                                            top: 12,
                                                            left: 12,
                                                            backgroundColor:
                                                                "rgba(0,0,0,0.6)",
                                                            color: "white",
                                                            "&:hover": {
                                                                backgroundColor:
                                                                    "rgba(0,0,0,0.8)",
                                                            },
                                                        }}
                                                    >
                                                        {favorites.has(
                                                            tour.id
                                                        ) ? (
                                                            <FavoriteIcon
                                                                fontSize="small"
                                                                sx={{
                                                                    color: "#ff4d6d",
                                                                }}
                                                            />
                                                        ) : (
                                                            <FavoriteBorderIcon fontSize="small" />
                                                        )}
                                                    </IconButton>

                                                    {tour.discount ? (
                                                    <Box
                                                        sx={{
                                                            position:
                                                                "absolute",
                                                            bottom: 12,
                                                            left: 12,
                                                            backgroundColor:
                                                                "#e91e63",
                                                            color: "white",
                                                            px: 1.5,
                                                            py: 0.5,
                                                            borderRadius: 2,
                                                            fontSize: "12px",
                                                            fontWeight: 600,
                                                            display: "flex",
                                                            alignItems:
                                                                "center",
                                                            gap: 0.5,
                                                        }}
                                                    >
                                                        <OfferIcon fontSize="small" />
                                                        Tiết kiệm
                                                    </Box>
                                                    ) : tour.noShopping ? (
                                                    <Box
                                                        sx={{
                                                            position:
                                                                "absolute",
                                                            bottom: 12,
                                                            left: 12,
                                                            backgroundColor:
                                                                "#0f766e",
                                                            color: "white",
                                                            px: 1.5,
                                                            py: 0.5,
                                                            borderRadius: 2,
                                                            fontSize: "12px",
                                                            fontWeight: 600,
                                                        }}
                                                    >
                                                        No shopping
                                                    </Box>
                                                    ) : null}
                                                </Box>

                                                {/* Content Section */}
                                                <Box
                                                    sx={{
                                                        flex: 1,
                                                        p: {
                                                            xs: 2,
                                                            sm: 2.5,
                                                            md: 3,
                                                        },
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        minWidth: 0, // Prevent flex item from growing beyond container
                                                    }}
                                                >
                                                    {/* Title */}
                                                    <Typography
                                                        variant="h6"
                                                        sx={{
                                                            fontSize: {
                                                                xs: "16px",
                                                                md: "18px",
                                                            },
                                                            fontWeight: 600,
                                                            lineHeight: 1.4,
                                                            mb: 2,
                                                            color: "#1e293b",
                                                            display:
                                                                "-webkit-box",
                                                            WebkitLineClamp: 2,
                                                            WebkitBoxOrient:
                                                                "vertical",
                                                            overflow: "hidden",
                                                        }}
                                                    >
                                                        {tour.title}
                                                    </Typography>

                                                    {/* Tour Details Row */}
                                                    <Box sx={{ mb: 3 }}>
                                                        <Grid
                                                            container
                                                            spacing={{
                                                                xs: 2,
                                                                md: 3,
                                                            }}
                                                        >
                                                            <Grid
                                                                size={{
                                                                    xs: 12,
                                                                    sm: 6,
                                                                }}
                                                            >
                                                                <Box
                                                                    sx={{
                                                                        display:
                                                                            "flex",
                                                                        alignItems:
                                                                            "center",
                                                                        mb: 1,
                                                                    }}
                                                                >
                                                                    <Box
                                                                        component="span"
                                                                        sx={{
                                                                            minWidth: 16,
                                                                            height: 16,
                                                                            backgroundColor:
                                                                                "#64748b",
                                                                            borderRadius:
                                                                                "50%",
                                                                            mr: 1,
                                                                            display:
                                                                                "inline-block",
                                                                        }}
                                                                    />
                                                                    <Typography
                                                                        variant="body2"
                                                                        sx={{
                                                                            color: "#64748b",
                                                                            fontSize:
                                                                                "13px",
                                                                        }}
                                                                    >
                                                                        Mã tour:
                                                                    </Typography>
                                                                    <Typography
                                                                        variant="body2"
                                                                        sx={{
                                                                            color: "#1e293b",
                                                                            fontSize:
                                                                                "13px",
                                                                            ml: 1,
                                                                            fontWeight: 600,
                                                                        }}
                                                                    >
                                                                        TOUR
                                                                        {tour.id
                                                                            .toString()
                                                                            .padStart(
                                                                                4,
                                                                                "0"
                                                                            )}
                                                                    </Typography>
                                                                </Box>
                                                                <Box
                                                                    sx={{
                                                                        display:
                                                                            "flex",
                                                                        alignItems:
                                                                            "center",
                                                                        mb: 1,
                                                                    }}
                                                                >
                                                                    <Box
                                                                        component="span"
                                                                        sx={{
                                                                            minWidth: 16,
                                                                            height: 16,
                                                                            backgroundColor:
                                                                                "#64748b",
                                                                            borderRadius:
                                                                                "50%",
                                                                            mr: 1,
                                                                            display:
                                                                                "inline-block",
                                                                        }}
                                                                    />
                                                                    <Typography
                                                                        variant="body2"
                                                                        sx={{
                                                                            color: "#64748b",
                                                                            fontSize:
                                                                                "13px",
                                                                        }}
                                                                    >
                                                                        Thời
                                                                        gian:
                                                                    </Typography>
                                                                    <Typography
                                                                        variant="body2"
                                                                        sx={{
                                                                            color: "#1e293b",
                                                                            fontSize:
                                                                                "13px",
                                                                            ml: 1,
                                                                            fontWeight: 600,
                                                                        }}
                                                                    >
                                                                        {
                                                                            tour.duration
                                                                        }
                                                                    </Typography>
                                                                </Box>
                                                                <Box
                                                                    sx={{
                                                                        display:
                                                                            "flex",
                                                                        alignItems:
                                                                            "center",
                                                                        mb: 2,
                                                                    }}
                                                                >
                                                                    <Box
                                                                        component="span"
                                                                        sx={{
                                                                            minWidth: 16,
                                                                            height: 16,
                                                                            backgroundColor:
                                                                                "#64748b",
                                                                            borderRadius:
                                                                                "50%",
                                                                            mr: 1,
                                                                            display:
                                                                                "inline-block",
                                                                        }}
                                                                    />
                                                                    <Typography
                                                                        variant="body2"
                                                                        sx={{
                                                                            color: "#64748b",
                                                                            fontSize:
                                                                                "13px",
                                                                        }}
                                                                    >
                                                                        Ngày
                                                                        khởi
                                                                        hành:
                                                                    </Typography>
                                                                </Box>
                                                            </Grid>
                                                            <Grid
                                                                size={{
                                                                    xs: 12,
                                                                    sm: 6,
                                                                }}
                                                            >
                                                                <Box
                                                                    sx={{
                                                                        display:
                                                                            "flex",
                                                                        alignItems:
                                                                            "center",
                                                                        mb: 1,
                                                                    }}
                                                                >
                                                                    <Box
                                                                        component="span"
                                                                        sx={{
                                                                            minWidth: 16,
                                                                            height: 16,
                                                                            backgroundColor:
                                                                                "#64748b",
                                                                            borderRadius:
                                                                                "50%",
                                                                            mr: 1,
                                                                            display:
                                                                                "inline-block",
                                                                        }}
                                                                    />
                                                                    <Typography
                                                                        variant="body2"
                                                                        sx={{
                                                                            color: "#64748b",
                                                                            fontSize:
                                                                                "13px",
                                                                        }}
                                                                    >
                                                                        Khởi
                                                                        hành:
                                                                    </Typography>
                                                                    <Typography
                                                                        variant="body2"
                                                                        sx={{
                                                                            color: "#1e293b",
                                                                            fontSize:
                                                                                "13px",
                                                                            ml: 1,
                                                                            fontWeight: 600,
                                                                        }}
                                                                    >
                                                                        {
                                                                            tour.location
                                                                        }
                                                                    </Typography>
                                                                </Box>
                                                                <Box
                                                                    sx={{
                                                                        display:
                                                                            "flex",
                                                                        alignItems:
                                                                            "center",
                                                                        mb: 1,
                                                                    }}
                                                                >
                                                                    <Box
                                                                        component="span"
                                                                        sx={{
                                                                            minWidth: 16,
                                                                            height: 16,
                                                                            backgroundColor:
                                                                                "#64748b",
                                                                            borderRadius:
                                                                                "50%",
                                                                            mr: 1,
                                                                            display:
                                                                                "inline-block",
                                                                        }}
                                                                    />
                                                                    <Typography
                                                                        variant="body2"
                                                                        sx={{
                                                                            color: "#64748b",
                                                                            fontSize:
                                                                                "13px",
                                                                        }}
                                                                    >
                                                                        Phương
                                                                        tiện:
                                                                    </Typography>
                                                                    <Typography
                                                                        variant="body2"
                                                                        sx={{
                                                                            color: "#1e293b",
                                                                            fontSize:
                                                                                "13px",
                                                                            ml: 1,
                                                                            fontWeight: 600,
                                                                        }}
                                                                    >
                                                                        Máy bay
                                                                    </Typography>
                                                                </Box>
                                                            </Grid>
                                                        </Grid>

                                                        {/* Departure Dates */}
                                                        <Box
                                                            sx={{
                                                                display: "flex",
                                                                alignItems:
                                                                    "center",
                                                                gap: 1,
                                                                flexWrap:
                                                                    "wrap",
                                                                mb: 2,
                                                            }}
                                                        >
                                                            <IconButton
                                                                size="small"
                                                                sx={{
                                                                    color: "#64748b",
                                                                }}
                                                            >
                                                                <Box
                                                                    component="span"
                                                                    sx={{
                                                                        transform:
                                                                            "rotate(180deg)",
                                                                    }}
                                                                >
                                                                    →
                                                                </Box>
                                                            </IconButton>
                                                            {[
                                                                "08/10",
                                                                "05/11",
                                                                "17/12",
                                                                "07/01",
                                                                "21/01",
                                                            ].map(
                                                                (date, idx) => (
                                                                    <Chip
                                                                        key={
                                                                            idx
                                                                        }
                                                                        label={
                                                                            date
                                                                        }
                                                                        variant="outlined"
                                                                        size="small"
                                                                        sx={{
                                                                            fontSize:
                                                                                "12px",
                                                                            height: 28,
                                                                            borderColor:
                                                                                "#e2e8f0",
                                                                            color: "#64748b",
                                                                            "&:hover":
                                                                                {
                                                                                    borderColor:
                                                                                        "#1976d2",
                                                                                    backgroundColor:
                                                                                        "#f1f5f9",
                                                                                },
                                                                        }}
                                                                    />
                                                                )
                                                            )}
                                                            <IconButton
                                                                size="small"
                                                                sx={{
                                                                    color: "#64748b",
                                                                }}
                                                            >
                                                                →
                                                            </IconButton>
                                                        </Box>
                                                    </Box>

                                                    {/* Price and Action */}
                                                    <Box
                                                        sx={{
                                                            display: "flex",
                                                            alignItems: {
                                                                xs: "stretch",
                                                                sm: "center",
                                                            },
                                                            justifyContent:
                                                                "space-between",
                                                            flexDirection: {
                                                                xs: "column",
                                                                sm: "row",
                                                            },
                                                            gap: {
                                                                xs: 2,
                                                                sm: 0,
                                                            },
                                                            mt: "auto",
                                                        }}
                                                    >
                                                        <Box>
                                                            <Typography
                                                                variant="body2"
                                                                sx={{
                                                                    color: "#64748b",
                                                                    fontSize:
                                                                        "13px",
                                                                    mb: 0.5,
                                                                }}
                                                            >
                                                                Giá từ:
                                                            </Typography>
                                                            <Typography
                                                                variant="h5"
                                                                sx={{
                                                                    color: "#dc2626",
                                                                    fontWeight: 700,
                                                                    fontSize: {
                                                                        xs: "20px",
                                                                        md: "24px",
                                                                    },
                                                                }}
                                                            >
                                                                {formatPrice(
                                                                    tour.price
                                                                )}
                                                            </Typography>
                                                        </Box>
                                                        <Button
                                                            variant="contained"
                                                            onClick={() =>
                                                                navigate(
                                                                    `/tours/${tour.id}`
                                                                )
                                                            }
                                                            sx={{
                                                                backgroundColor:
                                                                    "#1976d2",
                                                                color: "white",
                                                                px: {
                                                                    xs: 2,
                                                                    sm: 3,
                                                                },
                                                                py: {
                                                                    xs: 1,
                                                                    sm: 1.5,
                                                                },
                                                                borderRadius: 1,
                                                                textTransform:
                                                                    "none",
                                                                fontWeight: 600,
                                                                fontSize: {
                                                                    xs: "13px",
                                                                    sm: "14px",
                                                                },
                                                                minWidth: {
                                                                    xs: "auto",
                                                                    sm: "auto",
                                                                },
                                                                width: {
                                                                    xs: "100%",
                                                                    sm: "auto",
                                                                },
                                                                "&:hover": {
                                                                    backgroundColor:
                                                                        "#1565c0",
                                                                },
                                                            }}
                                                        >
                                                            Xem chi tiết
                                                        </Button>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Paper>
                                    </Fade>
                                ))}
                            </Box>
                        )}

                        {/* Pagination */}
                        {totalPages > 1 && !loading && (
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    mt: 4,
                                }}
                            >
                                <Pagination
                                    count={totalPages}
                                    page={currentPage}
                                    onChange={handlePageChange}
                                    color="primary"
                                    size="medium"
                                    sx={{
                                        "& .MuiPaginationItem-root": {
                                            fontSize: "14px",
                                            border: "1px solid #e2e8f0",
                                            "&.Mui-selected": {
                                                backgroundColor: "#1976d2",
                                                color: "white",
                                                borderColor: "#1976d2",
                                                "&:hover": {
                                                    backgroundColor: "#1565c0",
                                                },
                                            },
                                            "&:hover": {
                                                borderColor: "#1976d2",
                                            },
                                        },
                                    }}
                                />
                            </Box>
                        )}
                    </Grid>
                </Grid>
            </Container>

            {/* Mobile Filter Buttons - Fixed at Bottom */}
            <Box
                sx={{
                    display: { xs: "flex", md: "none" },
                    position: "fixed",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    backgroundColor: "white",
                    borderTop: "1px solid #e2e8f0",
                    p: 1.5,
                    pr: 9,
                    gap: 1,
                    zIndex: 1100,
                }}
            >
                <Button
                    variant="outlined"
                    startIcon={<FilterIcon />}
                    onClick={() => setFilterDialogOpen(true)}
                    sx={{
                        flex: 1,
                        py: 1.5,
                        borderColor: "#e2e8f0",
                        color: "#475569",
                        textTransform: "none",
                        fontWeight: 500,
                        "&:hover": {
                            borderColor: "#1976d2",
                            backgroundColor: "#f8fafc",
                        },
                    }}
                >
                    Lọc
                </Button>
                <Button
                    variant="outlined"
                    startIcon={<SortIcon />}
                    onClick={() => setSortDialogOpen(true)}
                    sx={{
                        flex: 1,
                        py: 1.5,
                        borderColor: "#e2e8f0",
                        color: "#475569",
                        textTransform: "none",
                        fontWeight: 500,
                        "&:hover": {
                            borderColor: "#1976d2",
                            backgroundColor: "#f8fafc",
                        },
                    }}
                >
                    Sắp xếp
                </Button>
            </Box>

            {/* Mobile Filter Dialog */}
            <Dialog
                open={filterDialogOpen}
                onClose={() => setFilterDialogOpen(false)}
                TransitionComponent={SlideUpTransition}
                keepMounted
                PaperProps={{
                    sx: {
                        position: "fixed",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        top: "auto",
                        m: 0,
                        borderRadius: "20px 20px 0 0",
                        maxHeight: "80vh",
                        overflow: "hidden",
                        boxShadow: "0 -4px 20px rgba(0, 0, 0, 0.15)",
                    },
                }}
                sx={{
                    display: { xs: "block", md: "none" },
                    "& .MuiDialog-container": {
                        alignItems: "flex-end",
                    },
                    "& .MuiBackdrop-root": {
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                    },
                }}
            >
                <Box
                    sx={{
                        backgroundColor: "white",
                        borderBottom: "1px solid #e2e8f0",
                        p: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <Typography
                        variant="h6"
                        sx={{ fontWeight: 600, color: "#1e293b" }}
                    >
                        Lọc
                    </Typography>
                    <IconButton
                        onClick={() => setFilterDialogOpen(false)}
                        sx={{ color: "#64748b" }}
                    >
                        <CloseIcon />
                    </IconButton>
                </Box>
                <DialogContent
                    sx={{
                        p: 3,
                        backgroundColor: "#f8fafc",
                        overflowY: "auto",
                        maxHeight: "calc(80vh - 120px)", // Reserve space for header and footer
                    }}
                >
                    {/* Price Range Filter */}
                    <Box sx={{ mb: 4 }}>
                        <Typography
                            variant="subtitle1"
                            sx={{
                                fontWeight: 600,
                                mb: 2,
                                color: "#1e293b",
                                fontSize: "16px",
                            }}
                        >
                            Ngân sách
                        </Typography>
                        <Grid container spacing={2}>
                            {[
                                { label: "Dưới 5 triệu", value: "under-5" },
                                { label: "Từ 5 - 10 triệu", value: "5-10" },
                                { label: "Từ 10 - 20 triệu", value: "10-20" },
                                { label: "Trên 20 triệu", value: "over-20" },
                            ].map((option) => (
                                <Grid size={{ xs: 6 }} key={option.value}>
                                    <Button
                                        variant={
                                            priceRange === option.value
                                                ? "contained"
                                                : "outlined"
                                        }
                                        fullWidth
                                        onClick={() =>
                                            setPriceRange(
                                                priceRange === option.value
                                                    ? ""
                                                    : option.value
                                            )
                                        }
                                        sx={{
                                            py: 1.5,
                                            borderRadius: 2,
                                            textTransform: "none",
                                            fontWeight: 500,
                                            borderColor: "#e2e8f0",
                                            color:
                                                priceRange === option.value
                                                    ? "white"
                                                    : "#64748b",
                                            "&:hover": {
                                                borderColor: "#1976d2",
                                            },
                                        }}
                                    >
                                        {option.label}
                                    </Button>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>

                    {/* Destination Filter */}
                    <Box sx={{ mb: 4 }}>
                        <Typography
                            variant="subtitle1"
                            sx={{
                                fontWeight: 600,
                                mb: 2,
                                color: "#1e293b",
                                fontSize: "16px",
                            }}
                        >
                            Điểm khởi hành
                        </Typography>
                        <FormControl fullWidth>
                            <Select
                                value={selectedDestination}
                                onChange={(e) =>
                                    setSelectedDestination(e.target.value)
                                }
                                displayEmpty
                                sx={{
                                    backgroundColor: "white",
                                    borderRadius: 2,
                                }}
                                endIcon={<ExpandMoreIcon />}
                            >
                                <MenuItem value="">Tất cả</MenuItem>
                                <MenuItem value="Hà Nội">Hà Nội</MenuItem>
                                <MenuItem value="Lào Cai">Lào Cai</MenuItem>
                                <MenuItem value="Móng Cái">Móng Cái</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>

                    {/* Category Filter */}
                    <Box sx={{ mb: 4 }}>
                        <Typography
                            variant="subtitle1"
                            sx={{
                                fontWeight: 600,
                                mb: 2,
                                color: "#1e293b",
                                fontSize: "16px",
                            }}
                        >
                            Điểm đến
                        </Typography>
                        <FormControl fullWidth>
                            <Select
                                value={selectedCategory}
                                onChange={(e) =>
                                    setSelectedCategory(e.target.value)
                                }
                                displayEmpty
                                sx={{
                                    backgroundColor: "white",
                                    borderRadius: 2,
                                }}
                                endIcon={<ExpandMoreIcon />}
                            >
                                <MenuItem value="">Tất cả</MenuItem>
                                {categories.map((category) => (
                                    <MenuItem key={category} value={category}>
                                        {category}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Box>

                    {/* Tour Type */}
                    <Box sx={{ mb: 4 }}>
                        <Typography
                            variant="subtitle1"
                            sx={{
                                fontWeight: 600,
                                mb: 2,
                                color: "#1e293b",
                                fontSize: "16px",
                            }}
                        >
                            Dòng tour
                        </Typography>
                        <Grid container spacing={2}>
                            {[
                                { label: "Cao cấp", value: "luxury" },
                                { label: "Tiêu chuẩn", value: "standard" },
                                { label: "Tiết kiệm", value: "budget" },
                                { label: "Giá tốt", value: "deal" },
                            ].map((option) => (
                                <Grid size={{ xs: 6 }} key={option.value}>
                                    <Button
                                        variant={
                                            tourType === option.value
                                                ? "contained"
                                                : "outlined"
                                        }
                                        fullWidth
                                        onClick={() =>
                                            setTourType(
                                                tourType === option.value
                                                    ? ""
                                                    : option.value
                                            )
                                        }
                                        sx={{
                                            py: 1.5,
                                            borderRadius: 2,
                                            textTransform: "none",
                                            fontWeight: 500,
                                            borderColor: "#e2e8f0",
                                            color:
                                                tourType === option.value
                                                    ? "white"
                                                    : "#64748b",
                                            "&:hover": {
                                                borderColor: "#1976d2",
                                            },
                                        }}
                                    >
                                        {option.label}
                                    </Button>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>

                    {/* Transportation */}
                    <Box sx={{ mb: 4 }}>
                        <Typography
                            variant="subtitle1"
                            sx={{
                                fontWeight: 600,
                                mb: 2,
                                color: "#1e293b",
                                fontSize: "16px",
                            }}
                        >
                            Phương tiện
                        </Typography>
                        <Grid container spacing={2}>
                            {[
                                {
                                    label: "Xe",
                                    value: "car",
                                    icon: <CarIcon />,
                                },
                                {
                                    label: "Máy bay",
                                    value: "plane",
                                    icon: <FlightIcon />,
                                },
                            ].map((option) => (
                                <Grid size={{ xs: 6 }} key={option.value}>
                                    <Button
                                        variant={
                                            transportation === option.value
                                                ? "contained"
                                                : "outlined"
                                        }
                                        fullWidth
                                        startIcon={option.icon}
                                        onClick={() =>
                                            setTransportation(
                                                transportation === option.value
                                                    ? ""
                                                    : option.value
                                            )
                                        }
                                        sx={{
                                            py: 1.5,
                                            borderRadius: 2,
                                            textTransform: "none",
                                            fontWeight: 500,
                                            borderColor: "#e2e8f0",
                                            color:
                                                transportation === option.value
                                                    ? "white"
                                                    : "#64748b",
                                            "&:hover": {
                                                borderColor: "#1976d2",
                                            },
                                        }}
                                    >
                                        {option.label}
                                    </Button>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </DialogContent>
                <Box
                    sx={{
                        p: 3,
                        backgroundColor: "white",
                        borderTop: "1px solid #e2e8f0",
                        position: "sticky",
                        bottom: 0,
                    }}
                >
                    <Button
                        variant="contained"
                        fullWidth
                        onClick={() => {
                            setCurrentPage(1);
                            setFilterDialogOpen(false);
                        }}
                        sx={{
                            py: 1.5,
                            backgroundColor: "#1976d2",
                            borderRadius: 2,
                            textTransform: "none",
                            fontWeight: 600,
                            fontSize: "16px",
                            "&:hover": {
                                backgroundColor: "#1565c0",
                            },
                        }}
                    >
                        Áp dụng
                    </Button>
                </Box>
            </Dialog>

            {/* Mobile Sort Dialog */}
            <Dialog
                open={sortDialogOpen}
                onClose={() => setSortDialogOpen(false)}
                TransitionComponent={SlideUpTransition}
                keepMounted
                PaperProps={{
                    sx: {
                        position: "fixed",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        top: "auto",
                        m: 0,
                        borderRadius: "20px 20px 0 0",
                        maxHeight: "60vh",
                        overflow: "hidden",
                        boxShadow: "0 -4px 20px rgba(0, 0, 0, 0.15)",
                    },
                }}
                sx={{
                    display: { xs: "block", md: "none" },
                    "& .MuiDialog-container": {
                        alignItems: "flex-end",
                    },
                    "& .MuiBackdrop-root": {
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                    },
                }}
            >
                <Box
                    sx={{
                        backgroundColor: "white",
                        borderBottom: "1px solid #e2e8f0",
                        p: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <Typography
                        variant="h6"
                        sx={{ fontWeight: 600, color: "#1e293b" }}
                    >
                        Sắp xếp theo
                    </Typography>
                    <IconButton
                        onClick={() => setSortDialogOpen(false)}
                        sx={{ color: "#64748b" }}
                    >
                        <CloseIcon />
                    </IconButton>
                </Box>
                <Box
                    sx={{
                        p: 3,
                        maxHeight: "calc(60vh - 60px)",
                        overflowY: "auto",
                    }}
                >
                    {sortOptions.map((option) => (
                        <Button
                            key={option.value}
                            fullWidth
                            variant={
                                sortBy === option.value ? "contained" : "text"
                            }
                            onClick={() => {
                                setSortBy(option.value);
                                setSortDialogOpen(false);
                            }}
                            sx={{
                                justifyContent: "flex-start",
                                py: 1.5,
                                mb: 1,
                                textTransform: "none",
                                fontWeight: sortBy === option.value ? 600 : 400,
                                borderRadius: 2,
                                backgroundColor:
                                    sortBy === option.value
                                        ? "#1976d2"
                                        : "transparent",
                                color:
                                    sortBy === option.value
                                        ? "white"
                                        : "#475569",
                                "&:hover": {
                                    backgroundColor:
                                        sortBy === option.value
                                            ? "#1565c0"
                                            : "#f1f5f9",
                                },
                            }}
                        >
                            {option.label}
                        </Button>
                    ))}
                </Box>
            </Dialog>
        </Box>
    );
};

export default Tours;
