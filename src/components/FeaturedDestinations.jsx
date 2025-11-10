import React, { useState } from "react";
import {
    Container,
    Typography,
    Box,
    Grid,
    Card,
    CardMedia,
    Tab,
    Tabs,
    alpha,
} from "@mui/material";

const FeaturedDestinations = () => {
    const [selectedTab, setSelectedTab] = useState(0);

    const tabData = [
        { label: "Miền Bắc", value: "north" },
        { label: "Miền Trung", value: "central" },
        { label: "Miền Đông Nam Bộ", value: "southeast" },
        { label: "Miền Tây Nam Bộ", value: "southwest" },
        { label: "Châu Á", value: "asia" },
        { label: "Châu Âu", value: "europe" },
        { label: "Châu Mỹ", value: "america" },
    ];

    const destinations = {
        north: [
            {
                id: 1,
                name: "QUẢNG NINH",
                image: "https://images.unsplash.com/photo-1669819894338-53ab7afc6958?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1741",
                size: "large",
            },
            {
                id: 2,
                name: "HÀ GIANG",
                image: "https://images.unsplash.com/photo-1536511671359-849531c0a576?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
                size: "medium",
            },
            {
                id: 3,
                name: "LÀO CAI",
                image: "https://images.pexels.com/photos/6876737/pexels-photo-6876737.jpeg",
                size: "medium",
            },
            {
                id: 4,
                name: "NINH BÌNH",
                image: "https://images.unsplash.com/photo-1528127269322-539801943592?w=400&h=300&fit=crop",
                size: "medium",
            },
            {
                id: 5,
                name: "YÊN BÁI",
                image: "https://images.unsplash.com/photo-1697641682218-f668e9dfac9c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
                size: "medium",
            },
            {
                id: 6,
                name: "SƠN LA",
                image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=300&fit=crop",
                size: "large",
            },
            {
                id: 7,
                name: "CAO BẰNG",
                image: "https://images.unsplash.com/photo-1650610114362-29af75c44fd7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
                size: "medium",
            },
            {
                id: 8,
                name: "HẢI PHÒNG",
                image: "https://images.unsplash.com/photo-1570559120097-e6c3388329e6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
                size: "large",
            },
            {
                id: 9,
                name: "HÀ NỘI",
                image: "https://images.unsplash.com/photo-1710141968143-7ea1f6d89025?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1217",
                size: "medium",
            },
        ],
        central: [
            {
                id: 10,
                name: "HUẾ",
                image: "https://images.unsplash.com/photo-1664333039578-28ad613ee536?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074",
                size: "large",
            },
            {
                id: 11,
                name: "ĐÀ NẴNG",
                image: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1228",
                size: "medium",
            },
            {
                id: 12,
                name: "HỘI AN",
                image: "https://images.unsplash.com/photo-1652731011413-93d4c5aa5c7c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
                size: "medium",
            },
            {
                id: 13,
                name: "QUY NHƠN",
                image: "https://images.unsplash.com/photo-1584162031057-223bec5b7f81?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
                size: "medium",
            },
            {
                id: 14,
                name: "NHA TRANG",
                image: "https://images.unsplash.com/photo-1533002832-1721d16b4bb9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1878",
                size: "large",
            },
        ],
        southeast: [
            {
                id: 20,
                name: "HỒ CHÍ MINH",
                image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=400&h=300&fit=crop",
                size: "large",
            },
            {
                id: 21,
                name: "VŨNG TÀU",
                image: "https://images.unsplash.com/photo-1669867399180-40275114b8c4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332",
                size: "medium",
            },
            {
                id: 22,
                name: "ĐỒNG NAI",
                image: "https://images.unsplash.com/photo-1698918160380-2857bbc02bfc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
                size: "medium",
            },
            {
                id: 23,
                name: "TÂY NINH",
                image: "https://images.unsplash.com/photo-1732159141422-258f0ea4f68e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332",
                size: "medium",
            },
        ],
        southwest: [
            {
                id: 24,
                name: "CẦN THƠ",
                image: "https://images.unsplash.com/photo-1683617638309-b1fc59c8c7b3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1149",
                size: "large",
            },
            {
                id: 25,
                name: "PHÚ QUỐC",
                image: "https://images.unsplash.com/photo-1572572216428-91def7b78278?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1756",
                size: "medium",
            },
            {
                id: 26,
                name: "AN GIANG",
                image: "https://images.unsplash.com/photo-1580630873708-e0475b1856c4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1733",
                size: "medium",
            },
        ],
        asia: [
            {
                id: 15,
                name: "THÁI LAN",
                image: "https://plus.unsplash.com/premium_photo-1661929242720-140374d97c94?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
                size: "large",
            },
            {
                id: 16,
                name: "SINGAPORE",
                image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1052",
                size: "medium",
            },
            {
                id: 17,
                name: "NHẬT BẢN",
                image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&h=300&fit=crop",
                size: "medium",
            },
            {
                id: 18,
                name: "HÀN QUỐC",
                image: "https://plus.unsplash.com/premium_photo-1661886333708-877148b43ae1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
                size: "medium",
            },
            {
                id: 19,
                name: "TRUNG QUỐC",
                image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=400&h=300&fit=crop",
                size: "large",
            },
        ],
        europe: [
            {
                id: 27,
                name: "PHÁP",
                image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1173",
                size: "large",
            },
            {
                id: 28,
                name: "Ý",
                image: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=400&h=300&fit=crop",
                size: "medium",
            },
            {
                id: 29,
                name: "ĐỨC",
                image: "https://images.unsplash.com/photo-1618259278412-2819cbdea4dc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1121",
                size: "medium",
            },
        ],
        america: [
            {
                id: 30,
                name: "HOA KỲ",
                image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=400&h=300&fit=crop",
                size: "large",
            },
            {
                id: 31,
                name: "CANADA",
                image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1111",
                size: "medium",
            },
        ],
    };

    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    const getCurrentDestinations = () => {
        const currentTab = tabData[selectedTab];
        return destinations[currentTab.value] || destinations.north;
    };

    return (
        <Box
            sx={{
                py: 8,
                backgroundColor: "#f8f9fa",
                mt: { xs: 0, md: 0 }, // Remove negative margin on mobile since no overlapping search box
            }}
        >
            <Container maxWidth="lg">
                {/* Header */}
                <Box textAlign="center" sx={{ mb: 6 }}>
                    <Typography
                        variant="h3"
                        component="h2"
                        sx={{
                            fontWeight: "bold",
                            color: "#2563eb",
                            mb: 2,
                            fontSize: { xs: "2rem", md: "3rem" },
                        }}
                    >
                        ĐIỂM ĐẾN YÊU THÍCH
                    </Typography>
                    <Box
                        sx={{
                            width: 80,
                            height: 3,
                            backgroundColor: "#2563eb",
                            mx: "auto",
                            mb: 3,
                        }}
                    />
                    <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{
                            maxWidth: 700,
                            mx: "auto",
                            lineHeight: 1.8,
                            fontSize: "1.1rem",
                        }}
                    >
                        Hãy chọn một điểm đến du lịch nổi tiếng dưới đây để khám
                        phá các chuyến đi độc quyền của chúng tôi với mức giá vô
                        cùng hấp lý.
                    </Typography>
                </Box>

                {/* Tabs */}
                <Box sx={{ mb: 4 }}>
                    <Tabs
                        value={selectedTab}
                        onChange={handleTabChange}
                        variant="scrollable"
                        scrollButtons="auto"
                        sx={{
                            "& .MuiTabs-flexContainer": {
                                justifyContent: "center",
                            },
                            "& .MuiTab-root": {
                                textTransform: "none",
                                fontWeight: 600,
                                fontSize: "1rem",
                                color: "text.secondary",
                                minWidth: 120,
                                "&:hover": {
                                    color: "#2563eb",
                                },
                                "&.Mui-selected": {
                                    color: "#2563eb",
                                    fontWeight: 700,
                                },
                            },
                            "& .MuiTabs-indicator": {
                                backgroundColor: "#2563eb",
                                height: 3,
                                borderRadius: 2,
                            },
                        }}
                    >
                        {tabData.map((tab) => (
                            <Tab key={tab.value} label={tab.label} />
                        ))}
                    </Tabs>
                </Box>

                {/* Destinations Grid - Masonry Layout */}
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "1fr",
                            sm: "1fr 1fr",
                            md: "1fr 1fr 1fr",
                            lg: "1fr 1fr 1fr 1fr",
                        },
                        gap: 2,
                        gridAutoRows: "200px",
                    }}
                >
                    {getCurrentDestinations().map((destination) => {
                        // Dynamic grid spanning for masonry effect
                        const getGridSpan = () => {
                            if (destination.size === "large") {
                                return {
                                    gridColumn: { xs: "span 1", md: "span 2" },
                                    gridRow: { xs: "span 1", md: "span 2" },
                                };
                            }
                            return {
                                gridColumn: "span 1",
                                gridRow: "span 1",
                            };
                        };

                        return (
                            <Card
                                key={destination.id}
                                sx={{
                                    position: "relative",
                                    borderRadius: 3,
                                    overflow: "hidden",
                                    cursor: "pointer",
                                    transition:
                                        "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                                    ...getGridSpan(),
                                    "&:hover": {
                                        transform: "translateY(-8px)",
                                        boxShadow:
                                            "0 20px 40px rgba(0,0,0,0.15)",
                                        "& .destination-overlay": {
                                            backgroundColor: alpha("#000", 0.2),
                                        },
                                        "& .destination-name": {
                                            transform:
                                                "translateY(-5px) scale(1.05)",
                                        },
                                        "& .destination-image": {
                                            transform: "scale(1.1)",
                                        },
                                    },
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    className="destination-image"
                                    image={destination.image}
                                    alt={destination.name}
                                    sx={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        transition: "transform 0.5s ease",
                                    }}
                                />

                                {/* Overlay */}
                                <Box
                                    className="destination-overlay"
                                    sx={{
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        background:
                                            "linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.6) 100%)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        transition: "all 0.3s ease",
                                    }}
                                >
                                    <Typography
                                        className="destination-name"
                                        variant="h4"
                                        sx={{
                                            color: "white",
                                            fontWeight: "bold",
                                            textAlign: "center",
                                            textShadow:
                                                "2px 2px 8px rgba(0,0,0,0.5)",
                                            fontSize: {
                                                xs: "1.2rem",
                                                sm: "1.4rem",
                                                md:
                                                    destination.size === "large"
                                                        ? "2rem"
                                                        : "1.3rem",
                                            },
                                            letterSpacing: 2,
                                            transition: "all 0.3s ease",
                                            textTransform: "uppercase",
                                        }}
                                    >
                                        {destination.name}
                                    </Typography>
                                </Box>
                            </Card>
                        );
                    })}
                </Box>
            </Container>
        </Box>
    );
};

export default FeaturedDestinations;
