import React, { useState } from "react";
import {
    Box,
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    Typography,
    IconButton,
    Slide,
    Grid,
    TextField,
    Autocomplete,
    InputAdornment,
} from "@mui/material";
import {
    Close as CloseIcon,
    LocationOn as LocationIcon,
    CalendarToday as CalendarIcon,
    People as PeopleIcon,
    Search as SearchIcon,
} from "@mui/icons-material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { vi } from "date-fns/locale/vi";
import Swal from "sweetalert2";
import ChinaTourIcon from "../assets/icon_flag/china.png";
import VietnamTourIcon from "../assets/icon_flag/vietnam.png";
import Logo from "../assets/logo_PNG/logo-main.png";
import "../styles/sweetalert-custom.css";

const SlideUpTransition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const MobileSearchPrompt = () => {
    const [openDialog, setOpenDialog] = useState(null);
    const [searchData, setSearchData] = useState({
        fromLocation: "",
        departureDate: new Date(),
        priceRange: "Chọn mức giá",
    });

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

    const priceRanges = [
        "Dưới 1 triệu",
        "1-2 triệu",
        "2-3 triệu",
        "3-5 triệu",
        "Trên 5 triệu",
    ];

    const searchButtons = [
        {
            id: "china-tour",
            label: "Du lịch Trung Quốc",
            icon: (
                <img
                    src={ChinaTourIcon}
                    alt="China"
                    style={{ width: 28, height: 28 }}
                />
            ),
            color: "#d32f2f",
            modalTitle: "🇨🇳 TOUR DU LỊCH TRUNG QUỐC",
        },
        {
            id: "vietnam-tour",
            label: "Du lịch Việt Nam",
            icon: (
                <img
                    src={VietnamTourIcon}
                    alt="Vietnam"
                    style={{ width: 28, height: 28 }}
                />
            ),
            color: "#1976d2",
            modalTitle: "🇻🇳 TOUR DU LỊCH VIỆT NAM",
        },
        {
            id: "visa",
            label: "Dịch vụ Visa",
            icon: "🛂",
            color: "#388e3c",
            modalTitle: "🛂 DỊCH VỤ VISA",
        },
        {
            id: "passport",
            label: "Sổ thông hành",
            icon: "📔",
            color: "#f57c00",
            modalTitle: "📔 SỔ THÔNG HÀNH",
        },
    ];

    const handleButtonClick = (buttonId) => {
        if (buttonId === "visa") {
            showVisaModal();
        } else if (buttonId === "passport") {
            showPassportModal();
        } else {
            setOpenDialog(buttonId);
        }
    };

    const handleCloseDialog = () => {
        setOpenDialog(null);
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
            width: "90%",
            customClass: {
                popup: "visa-modal",
            },
        }).then((result) => {
            if (result.isConfirmed) {
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
        console.log("Searching with:", searchData);
        handleCloseDialog();
        // Redirect to tours page with search params
        window.location.href = `/tours?location=${searchData.fromLocation}&price=${searchData.priceRange}`;
    };

    const renderSearchDialog = (buttonId) => {
        const isChina = buttonId === "china-tour";
        const destinations = isChina ? chinaDestinations : vietnamDestinations;
        const button = searchButtons.find((b) => b.id === buttonId);

        return (
            <Dialog
                open={openDialog === buttonId}
                onClose={handleCloseDialog}
                TransitionComponent={SlideUpTransition}
                keepMounted
                maxWidth="sm"
                fullWidth
                sx={{
                    "& .MuiDialog-paper": {
                        margin: 1,
                        position: "fixed",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        top: "auto",
                        borderRadius: "16px 16px 0 0",
                        maxHeight: "90vh",
                    },
                }}
            >
                <DialogTitle
                    sx={{
                        bgcolor: button?.color || "#1976d2",
                        color: "white",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        py: 2,
                    }}
                >
                    <Typography variant="h6" fontWeight="bold">
                        {button?.modalTitle}
                    </Typography>
                    <IconButton
                        onClick={handleCloseDialog}
                        sx={{ color: "white" }}
                    >
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>

                <DialogContent sx={{ p: 3 }}>
                    <LocalizationProvider
                        dateAdapter={AdapterDateFns}
                        adapterLocale={vi}
                    >
                        <Grid container spacing={3}>
                            {/* Destination */}
                            <Grid item xs={12}>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    sx={{ mb: 1, fontWeight: 500 }}
                                >
                                    {isChina
                                        ? "Bạn muốn đi đâu ở Trung Quốc? *"
                                        : "Bạn muốn đi đâu ở Việt Nam? *"}
                                </Typography>
                                <Autocomplete
                                    options={destinations}
                                    value={searchData.fromLocation}
                                    onChange={(event, newValue) =>
                                        setSearchData((prev) => ({
                                            ...prev,
                                            fromLocation: newValue || "",
                                        }))
                                    }
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            placeholder={
                                                isChina
                                                    ? "vd: Bắc Kinh"
                                                    : "vd: Đà Nẵng"
                                            }
                                            fullWidth
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
                            <Grid item xs={12}>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    sx={{ mb: 1, fontWeight: 500 }}
                                >
                                    Ngày đi
                                </Typography>
                                <DatePicker
                                    value={searchData.departureDate}
                                    onChange={(newValue) =>
                                        setSearchData((prev) => ({
                                            ...prev,
                                            departureDate: newValue,
                                        }))
                                    }
                                    format="dd/MM/yyyy"
                                    slotProps={{
                                        textField: {
                                            fullWidth: true,
                                            placeholder: "Chọn ngày đi",
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

                            {/* Price Range */}
                            <Grid item xs={12}>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    sx={{ mb: 1, fontWeight: 500 }}
                                >
                                    Ngân sách
                                </Typography>
                                <Autocomplete
                                    options={priceRanges}
                                    value={searchData.priceRange}
                                    onChange={(event, newValue) =>
                                        setSearchData((prev) => ({
                                            ...prev,
                                            priceRange:
                                                newValue || "Chọn mức giá",
                                        }))
                                    }
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            placeholder="Chọn mức giá"
                                            fullWidth
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
                            <Grid item xs={12}>
                                <Button
                                    variant="contained"
                                    fullWidth
                                    size="large"
                                    startIcon={<SearchIcon />}
                                    onClick={handleSearch}
                                    sx={{
                                        py: 1.5,
                                        fontSize: "1.1rem",
                                        fontWeight: 600,
                                        bgcolor: button?.color || "#1976d2",
                                        "&:hover": {
                                            bgcolor: button?.color || "#1565c0",
                                        },
                                    }}
                                >
                                    Tìm tour{" "}
                                    {isChina ? "Trung Quốc" : "Việt Nam"}
                                </Button>
                            </Grid>
                        </Grid>
                    </LocalizationProvider>
                </DialogContent>
            </Dialog>
        );
    };

    return (
        <>
            {/* Mobile Floating Search Buttons */}
            <Box
                sx={{
                    position: "absolute",
                    bottom: 20,
                    left: "50%",
                    transform: "translateX(-50%)",
                    zIndex: 20,
                    display: { xs: "block", md: "none" }, // Only show on mobile
                }}
            >
                <Grid container spacing={1} justifyContent="center">
                    {searchButtons.map((button) => (
                        <Grid item xs={6} key={button.id}>
                            <Button
                                variant="contained"
                                fullWidth
                                onClick={() => handleButtonClick(button.id)}
                                startIcon={button.icon}
                                sx={{
                                    bgcolor: "rgba(255,255,255,0.95)",
                                    color: button.color,
                                    backdropFilter: "blur(10px)",
                                    border: `2px solid ${button.color}`,
                                    py: 1.5,
                                    px: 1,
                                    fontSize: "0.8rem",
                                    fontWeight: 600,
                                    borderRadius: 3,
                                    textTransform: "none",
                                    boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
                                    "&:hover": {
                                        bgcolor: button.color,
                                        color: "white",
                                        transform: "translateY(-2px)",
                                        boxShadow: "0 6px 25px rgba(0,0,0,0.2)",
                                    },
                                    transition:
                                        "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                                    "& .MuiButton-startIcon": {
                                        marginRight: 0.5,
                                    },
                                }}
                            >
                                {button.label}
                            </Button>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Render Search Dialogs */}
            {renderSearchDialog("china-tour")}
            {renderSearchDialog("vietnam-tour")}
        </>
    );
};

export default MobileSearchPrompt;
