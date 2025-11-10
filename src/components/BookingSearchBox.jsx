import React, { useState } from "react";
import Swal from "sweetalert2";
import {
    Box,
    Container,
    Paper,
    Tabs,
    Tab,
    TextField,
    Button,
    Grid,
    Typography,
    InputAdornment,
    Autocomplete,
    IconButton,
} from "@mui/material";
import {
    Description as VisaIcon,
    Assignment as PassportIcon,
    Add as AddIcon,
    Search as SearchIcon,
    LocationOn as LocationIcon,
    CalendarToday as CalendarIcon,
    People as PeopleIcon,
} from "@mui/icons-material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { vi } from "date-fns/locale/vi";
import Logo from "../assets/logo_PNG/logo-main.png";
import ChinaTourIcon from "../assets/icon_flag/china.png";
import VietnamTourIcon from "../assets/icon_flag/vietnam.png";
import "../styles/sweetalert-custom.css";

const BookingSearchBox = () => {
    const [selectedTab, setSelectedTab] = useState(0); // Default to "Tour du lịch Trung Quốc"
    const [fromLocation, setFromLocation] = useState("");
    const [departureDate, setDepartureDate] = useState(new Date());
    const [guests, setGuests] = useState("Chọn mức giá");

    const tabs = [
        {
            id: 0,
            label: "Tour du lịch Trung Quốc",
            icon: (
                <img
                    src={ChinaTourIcon}
                    alt="China"
                    style={{ width: 40, height: 40 }}
                />
            ),
        },
        {
            id: 1,
            label: "Tour du lịch Việt Nam",
            icon: (
                <img
                    src={VietnamTourIcon}
                    alt="Vietnam"
                    style={{ width: 40, height: 40 }}
                />
            ),
        },
        { id: 2, label: "Visa", icon: <VisaIcon /> },
        { id: 3, label: "Sổ thông hành", icon: <PassportIcon /> },
    ];

    const chinaDestinations = [
        "Bắc Kinh",
        "Thượng Hải",
        "Tây An",
        "Quế Lâm",
        "Trương Gia Giới",
        "Cửu Trại Câu",
        "Côn Minh",
        "Đại Lý",
        "Lệ Giang",
        "Hàng Châu",
        "Nam Kinh",
        "Thành Đô",
    ];

    const vietnamDestinations = [
        "Đà Nẵng",
        "Hồ Chí Minh",
        "Hà Nội",
        "Nha Trang",
        "Phú Quốc",
        "Sapa",
        "Hạ Long",
        "Huế",
        "Hội An",
        "Cần Thơ",
        "Đà Lạt",
        "Phan Thiết",
    ];

    // Lấy destinations theo tab đang chọn
    const getCurrentDestinations = () => {
        if (selectedTab === 0) return chinaDestinations; // Tour Trung Quốc
        if (selectedTab === 1) return vietnamDestinations; // Tour Việt Nam
        return []; // Visa và Sổ thông hành không có destinations
    };

    const priceRanges = [
        "Dưới 1 triệu",
        "1-2 triệu",
        "2-3 triệu",
        "3-5 triệu",
        "Trên 5 triệu",
    ];

    const handleTabChange = (event, newValue) => {
        // Kiểm tra nếu click vào tab Visa (index 2)
        if (newValue === 2) {
            showVisaModal();
            return; // Không thay đổi tab
        }

        // Kiểm tra nếu click vào tab Sổ thông hành (index 3)
        if (newValue === 3) {
            showPassportModal();
            return; // Không thay đổi tab
        }

        // Reset fromLocation khi chuyển tab tour
        if (
            (selectedTab === 0 || selectedTab === 1) &&
            (newValue === 0 || newValue === 1) &&
            selectedTab !== newValue
        ) {
            setFromLocation("");
        }

        setSelectedTab(newValue);
    };

    const showVisaModal = () => {
        Swal.fire({
            title: "🛂 DỊCH VỤ VISA",
            html: `
                <div style="text-align: left; line-height: 1.6;">
                    <h3 style="color: #1976d2; margin-top: 0;">Bảo Ngọc Travel hỗ trợ làm Visa</h3>
                    <p><strong>✈️ Chúng tôi hỗ trợ làm visa cho các quốc gia:</strong></p>
                    <ul style="margin: 10px 0;">
                        <li>🇯🇵 Nhật Bản - Visa du lịch, thăm thân</li>
                        <li>🇰🇷 Hàn Quốc - Visa du lịch, công tác</li>
                        <li>🇸🇬 Singapore - Visa du lịch</li>
                        <li>🇹🇭 Thái Lan - Visa du lịch</li>
                        <li>🇺🇸 Mỹ - Visa du lịch, thăm thân</li>
                        <li>🇨🇦 Canada - Visa du lịch</li>
                        <li>🇦🇺 Úc - Visa du lịch</li>
                        <li>🇪🇺 Châu Âu - Visa Schengen</li>
                    </ul>
                    <p><strong>📋 Dịch vụ bao gồm:</strong></p>
                    <ul style="margin: 10px 0;">
                        <li>✅ Tư vấn hồ sơ miễn phí</li>
                        <li>✅ Chuẩn bị hồ sơ theo yêu cầu</li>
                        <li>✅ Điền form, đặt lịch hẹn</li>
                        <li>✅ Hỗ trợ phỏng vấn visa</li>
                        <li>✅ Theo dõi tiến độ xử lý</li>
                    </ul>
                    <p style="color: #d32f2f; font-weight: bold;">
                        💼 Tỷ lệ thành công: <span style="color: #2e7d32;">95%</span>
                    </p>
                    <p style="color: #1976d2; font-weight: bold;">
                        📞 Hotline: <a href="tel:1900xxxx" style="color: #1976d2;">1900.xxxx</a>
                    </p>
                </div>
            `,
            iconHtml: `<img src=${Logo} width="160" />`,
            confirmButtonText: "Liên hệ ngay",
            cancelButtonText: "Đóng",
            showCancelButton: true,
            confirmButtonColor: "#1976d2",
            cancelButtonColor: "#757575",
            width: "600px",
            customClass: {
                popup: "visa-modal",
            },
        }).then((result) => {
            if (result.isConfirmed) {
                // Chuyển đến trang liên hệ hoặc mở link chat
                window.open("tel:1900xxxx", "_self");
            }
        });
    };

    const showPassportModal = () => {
        Swal.fire({
            title: "📖 DỊCH VỤ SỔ THÔNG HÀNH",
            html: `
                <div style="text-align: left; line-height: 1.6;">
                    <h3 style="color: #1976d2; margin-top: 0;">Bảo Ngọc Travel hỗ trợ làm Sổ thông hành</h3>
                    <p><strong>📋 Dịch vụ làm hộ chiếu:</strong></p>
                    <ul style="margin: 10px 0;">
                        <li>📄 Sổ thông hành phổ thông (48 trang)</li>
                        <li>📗 Sổ thông hành ngoại giao</li>
                        <li>📘 Sổ thông hành công vụ</li>
                        <li>🔄 Gia hạn sổ thông hành</li>
                        <li>📝 Thay đổi thông tin trong sổ</li>
                        <li>🆕 Cấp lại khi mất/hỏng</li>
                    </ul>
                    <p><strong>⏱️ Thời gian xử lý:</strong></p>
                    <ul style="margin: 10px 0;">
                        <li>✅ Thường: 7-10 ngày làm việc</li>
                        <li>⚡ Gấp: 3-5 ngày làm việc</li>
                        <li>🚀 Khẩn cấp: 1-2 ngày làm việc</li>
                    </ul>
                    <p><strong>🎯 Dịch vụ bao gồm:</strong></p>
                    <ul style="margin: 10px 0;">
                        <li>✅ Tư vấn thủ tục miễn phí</li>
                        <li>✅ Kiểm tra hồ sơ trước khi nộp</li>
                        <li>✅ Hỗ trợ điền form đăng ký</li>
                        <li>✅ Nhận hồ sơ tại nhà</li>
                        <li>✅ Theo dõi tiến độ xử lý</li>
                        <li>✅ Giao sổ tận nơi</li>
                    </ul>
                    <p style="color: #d32f2f; font-weight: bold;">
                        💰 Phí dịch vụ từ: <span style="color: #2e7d32;">200.000đ</span>
                    </p>
                    <p style="color: #1976d2; font-weight: bold;">
                        📞 Hotline: <a href="tel:1900xxxx" style="color: #1976d2;">1900.xxxx</a>
                    </p>
                </div>
            `,
            iconHtml: `<img src=${Logo} width="160" />`,
            confirmButtonText: "Liên hệ ngay",
            cancelButtonText: "Đóng",
            showCancelButton: true,
            confirmButtonColor: "#1976d2",
            cancelButtonColor: "#757575",
            width: "600px",
            customClass: {
                popup: "visa-modal",
            },
        }).then((result) => {
            if (result.isConfirmed) {
                // Chuyển đến trang liên hệ hoặc mở link chat
                window.open("tel:1900xxxx", "_self");
            }
        });
    };

    const handleSearch = () => {
        console.log("Searching with:", {
            tab: tabs[selectedTab].label,
            fromLocation,
            departureDate,
            guests,
        });
    };

    return (
        <Box
            sx={{
                position: "relative",
                zIndex: 10,
                transform: "translateY(-50%)",
                mb: -6,
                display: { xs: "none", md: "block" }, // Hide on mobile, show on desktop
            }}
        >
            <Container maxWidth="lg">
                <Paper
                    elevation={8}
                    sx={{
                        borderRadius: 3,
                        overflow: "hidden",
                        backgroundColor: "white",
                    }}
                >
                    {/* Tabs */}
                    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                        <Tabs
                            value={selectedTab}
                            onChange={handleTabChange}
                            variant="fullWidth"
                            sx={{
                                "& .MuiTab-root": {
                                    minHeight: { xs: 48, md: 60 },
                                    textTransform: "none",
                                    fontSize: { xs: "0.8rem", md: "0.9rem" },
                                    fontWeight: 500,
                                    px: { xs: 1, md: 2 },
                                    "& img": {
                                        width: { xs: 24, md: 40 },
                                        height: { xs: 24, md: 40 },
                                    },
                                },
                                "& .MuiTabs-flexContainer": {
                                    flexWrap: { xs: "wrap", sm: "nowrap" },
                                },
                            }}
                        >
                            {tabs.map((tab) => (
                                <Tab
                                    key={tab.id}
                                    icon={tab.icon}
                                    label={tab.label}
                                    iconPosition="start"
                                    sx={{
                                        flexDirection: "row",
                                        gap: 1,
                                        "& .MuiSvgIcon-root": {
                                            fontSize: "1.2rem",
                                        },
                                    }}
                                />
                            ))}
                        </Tabs>
                    </Box>

                    {/* Search Form */}
                    <Box sx={{ p: { xs: 2, md: 3 } }}>
                        <LocalizationProvider
                            dateAdapter={AdapterDateFns}
                            adapterLocale={vi}
                        >
                            <Grid
                                container
                                spacing={2}
                                alignItems="stretch"
                                justifyContent="flex-start"
                                sx={{
                                    flexWrap: { xs: "wrap", lg: "nowrap" },
                                    flexDirection: {
                                        xs: "column",
                                        sm: "row",
                                        lg: "row",
                                    },
                                }}
                            >
                                {/* From Location */}
                                <Grid
                                    item
                                    xs={12}
                                    sm={6}
                                    lg="auto"
                                    sx={{
                                        minWidth: { xs: "100%", lg: 280 },
                                        flex: { lg: "1 1 auto" },
                                    }}
                                >
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{ mb: 1, fontWeight: 500 }}
                                    >
                                        {selectedTab === 0
                                            ? "Bạn muốn đi đâu ở Trung Quốc? *"
                                            : selectedTab === 1
                                            ? "Bạn muốn đi đâu ở Việt Nam? *"
                                            : "Bạn muốn đi đâu? *"}
                                    </Typography>
                                    <Autocomplete
                                        key={selectedTab} // Force re-render khi đổi tab
                                        options={getCurrentDestinations()}
                                        value={fromLocation}
                                        onChange={(event, newValue) =>
                                            setFromLocation(newValue || "")
                                        }
                                        disabled={
                                            selectedTab === 2 ||
                                            selectedTab === 3
                                        } // Disable cho Visa và Sổ thông hành
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                placeholder={
                                                    selectedTab === 0
                                                        ? "ví dụ: Bắc Kinh"
                                                        : selectedTab === 1
                                                        ? "ví dụ: Đà Nẵng"
                                                        : "Chọn điểm đến"
                                                }
                                                size="medium"
                                                InputProps={{
                                                    ...params.InputProps,
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <LocationIcon color="action" />
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                        )}
                                    />
                                </Grid>

                                {/* Departure Date */}
                                <Grid
                                    item
                                    xs={12}
                                    sm={6}
                                    lg="auto"
                                    sx={{
                                        minWidth: { xs: "100%", lg: 200 },
                                        flex: { lg: "0 0 auto" },
                                    }}
                                >
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{ mb: 1, fontWeight: 500 }}
                                    >
                                        Ngày đi
                                    </Typography>
                                    <DatePicker
                                        value={departureDate}
                                        onChange={(newValue) =>
                                            setDepartureDate(newValue)
                                        }
                                        format="dd/MM/yyyy"
                                        slotProps={{
                                            textField: {
                                                size: "medium",
                                                placeholder:
                                                    "Th 3, 26 thg 8, 2025",
                                                InputProps: {
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <CalendarIcon color="action" />
                                                        </InputAdornment>
                                                    ),
                                                },
                                            },
                                        }}
                                    />
                                </Grid>

                                {/* Price Range / Guests */}
                                <Grid
                                    item
                                    xs={12}
                                    sm={8}
                                    lg="auto"
                                    sx={{
                                        minWidth: { xs: "100%", lg: 280 },
                                        flex: { lg: "1 1 auto" },
                                    }}
                                >
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{ mb: 1, fontWeight: 500 }}
                                    >
                                        Ngân sách
                                    </Typography>
                                    <Autocomplete
                                        options={priceRanges}
                                        value={guests}
                                        onChange={(event, newValue) =>
                                            setGuests(
                                                newValue || "Chọn mức giá"
                                            )
                                        }
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                placeholder="Chọn mức giá"
                                                size="medium"
                                                InputProps={{
                                                    ...params.InputProps,
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <PeopleIcon color="action" />
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                        )}
                                    />
                                </Grid>

                                {/* Search Button */}
                                <Grid item xs={12} sm={4} lg="auto">
                                    <Box
                                        sx={{
                                            mt: { xs: 2, lg: 3 },
                                            display: "flex",
                                            justifyContent: {
                                                xs: "center",
                                                sm: "flex-start",
                                            },
                                        }}
                                    >
                                        <Button
                                            onClick={handleSearch}
                                            variant="contained"
                                            size="large"
                                            startIcon={<SearchIcon />}
                                            sx={{
                                                minWidth: {
                                                    xs: "100%",
                                                    sm: "auto",
                                                },
                                                height: 56,
                                                px: { xs: 4, sm: 3 },
                                                borderRadius: 2,
                                                textTransform: "none",
                                                fontSize: "1rem",
                                                fontWeight: 600,
                                                display: {
                                                    xs: "flex",
                                                    sm: "inline-flex",
                                                },
                                                "@media (max-width: 600px)": {
                                                    "& .MuiButton-startIcon": {
                                                        marginRight: 1,
                                                    },
                                                },
                                            }}
                                        >
                                            <span className="desktop-hidden sm-visible">
                                                Tìm kiếm
                                            </span>
                                            <span className="mobile-visible sm-hidden">
                                                Tìm tour
                                            </span>
                                        </Button>
                                    </Box>
                                </Grid>
                            </Grid>
                        </LocalizationProvider>
                    </Box>
                </Paper>
            </Container>
        </Box>
    );
};

export default BookingSearchBox;
