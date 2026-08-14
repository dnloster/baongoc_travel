import React, { useState } from "react";
import {
    Box,
    Container,
    Typography,
    Grid,
    TextField,
    Button,
    Paper,
    IconButton,
    Alert,
    Snackbar,
    InputAdornment,
} from "@mui/material";
import {
    LocationOn as LocationIcon,
    Phone as PhoneIcon,
    Email as EmailIcon,
    AccessTime as TimeIcon,
    Send as SendIcon,
    Facebook as FacebookIcon,
    Instagram as InstagramIcon,
    YouTube as YouTubeIcon,
    Language as WebsiteIcon,
    Person as PersonIcon,
    Message as MessageIcon,
    Business as BusinessIcon,
    WhatsApp as WhatsAppIcon,
    Telegram as TelegramIcon,
} from "@mui/icons-material";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [snackbar, setSnackbar] = useState({
        open: false,
        message: "",
        severity: "success",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors((prev) => ({
                ...prev,
                [name]: "",
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Vui lòng nhập họ tên";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Vui lòng nhập email";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email không hợp lệ";
        }

        if (!formData.phone.trim()) {
            newErrors.phone = "Vui lòng nhập số điện thoại";
        } else if (!/^[0-9]{10,11}$/.test(formData.phone.replace(/\s/g, ""))) {
            newErrors.phone = "Số điện thoại không hợp lệ";
        }

        if (!formData.subject.trim()) {
            newErrors.subject = "Vui lòng nhập tiêu đề";
        }

        if (!formData.message.trim()) {
            newErrors.message = "Vui lòng nhập nội dung tin nhắn";
        } else if (formData.message.trim().length < 10) {
            newErrors.message =
                "Nội dung tin nhắn quá ngắn (tối thiểu 10 ký tự)";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setLoading(true);

        try {
            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 2000));

            setSnackbar({
                open: true,
                message:
                    "Tin nhắn đã được gửi thành công! Chúng tôi sẽ liên hệ lại với bạn sớm nhất có thể.",
                severity: "success",
            });

            // Reset form
            setFormData({
                name: "",
                email: "",
                phone: "",
                subject: "",
                message: "",
            });
        } catch (error) {
            setSnackbar({
                open: true,
                message:
                    "Có lỗi xảy ra khi gửi tin nhắn. Vui lòng thử lại sau.",
                severity: "error",
            });
        } finally {
            setLoading(false);
        }
    };

    const socialLinks = [
        {
            name: "Bảo Ngọc Travel",
            icon: <FacebookIcon />,
            url: "https://www.facebook.com/baongoctravel24",
            color: "#1877f2",
        },
    ];

    const quickActions = [
        {
            name: "WhatsApp",
            icon: <WhatsAppIcon />,
            action: () => window.open("https://wa.me/0786262222", "_blank"),
            color: "#25d366",
            label: "Chat WhatsApp",
        },
        {
            name: "Zalo",
            icon: <MessageIcon />,
            action: () => window.open("https://zalo.me/0786262222", "_blank"),
            color: "#0068ff",
            label: "Chat Zalo",
        },
    ];

    return (
        <Box
            sx={{
                backgroundColor: "#f8fafc",
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
            }}
        >
            <Container
                maxWidth="lg"
                sx={{
                    py: { xs: 4, md: 6 },
                    mx: "auto",
                    px: { xs: 2, sm: 3, md: 4 },
                    width: "100%",
                }}
            >
                {/* Header Section */}
                <Box
                    sx={{
                        textAlign: "center",
                        mb: 6,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Typography
                        variant="h2"
                        sx={{
                            fontWeight: 700,
                            color: "#1e293b",
                            mb: 2,
                            fontSize: { xs: "1.6rem", sm: "2rem", md: "2.5rem" },
                        }}
                    >
                        Liên hệ với chúng tôi
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            color: "#64748b",
                            maxWidth: "600px",
                            mx: "auto",
                            lineHeight: 1.6,
                            fontSize: { xs: "1rem", md: "1.25rem" },
                            textAlign: "center",
                        }}
                    >
                        Hãy để lại thông tin để chúng tôi tư vấn và hỗ trợ bạn
                        tốt nhất. Đội ngũ chuyên viên của BẢO NGỌC Travel luôn
                        sẵn sàng phục vụ!
                    </Typography>
                </Box>

                <Grid
                    container
                    spacing={3}
                    sx={{
                        justifyContent: "center",
                        alignItems: "stretch",
                    }}
                >
                    <Grid size={{ xs: 12, md: 5 }}>
                    <Paper
                        elevation={0}
                        sx={{
                            p: { xs: 2.5, md: 4 },
                            borderRadius: 3,
                            border: "1px solid #e2e8f0",
                            height: "100%",
                            display: "flex",
                            flexDirection: { xs: "column", sm: "row", md: "column" },
                            gap: { xs: 3, md: 4 },
                            width: "100%",
                            background:
                                "linear-gradient(135deg, #ffffff 0%, #fafbfc 100%)",
                            boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                        }}
                    >
                        {/* Social Media */}
                        <Box>
                            <Box sx={{ mb: 2 }}>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontWeight: 700,
                                        color: "#1e293b",
                                        mb: 1,
                                        fontSize: "1.1rem",
                                    }}
                                >
                                    Theo dõi chúng tôi
                                </Typography>
                                <Box
                                    sx={{
                                        width: "50px",
                                        height: "3px",
                                        background:
                                            "linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)",
                                        borderRadius: "2px",
                                    }}
                                />
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    gap: 2,
                                    flexWrap: "wrap",
                                    p: 2,
                                    backgroundColor: "#fafbfc",
                                    borderRadius: 3,
                                    border: "1px solid #f1f5f9",
                                }}
                            >
                                <Box
                                    sx={{
                                        width: "100%",
                                        maxWidth: 340,
                                        overflow: "hidden",
                                        borderRadius: 2,
                                    }}
                                >
                                <iframe
                                    title="Facebook Bảo Ngọc Travel"
                                    src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FBaongoctravel24%2F&tabs&width=340&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=5664986890234638"
                                    width="100%"
                                    height="130"
                                    style={{
                                        border: "none",
                                        overflow: "hidden",
                                        width: "100%",
                                        display: "block",
                                    }}
                                    scrolling="no"
                                    frameBorder="0"
                                    allowFullScreen
                                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                ></iframe>
                                </Box>
                            </Box>
                        </Box>

                        {/* Quick Contact Actions */}
                        <Box>
                            <Box sx={{ mb: 3 }}>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontWeight: 700,
                                        color: "#1e293b",
                                        mb: 1,
                                        fontSize: "1.1rem",
                                    }}
                                >
                                    Liên hệ nhanh
                                </Typography>
                                <Box
                                    sx={{
                                        width: "50px",
                                        height: "3px",
                                        background:
                                            "linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)",
                                        borderRadius: "2px",
                                    }}
                                />
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 2,
                                }}
                            >
                                {quickActions.map((action, index) => (
                                    <Button
                                        key={index}
                                        variant="outlined"
                                        startIcon={action.icon}
                                        onClick={action.action}
                                        sx={{
                                            justifyContent: "flex-start",
                                            borderColor: action.color,
                                            color: action.color,
                                            textTransform: "none",
                                            py: 1.5,
                                            px: 3,
                                            fontWeight: 600,
                                            fontSize: "0.95rem",
                                            borderRadius: 3,
                                            borderWidth: 2,
                                            transition: "all 0.3s ease-in-out",
                                            "&:hover": {
                                                backgroundColor: action.color,
                                                color: "white",
                                                borderColor: action.color,
                                                transform: "translateX(8px)",
                                                boxShadow:
                                                    "0 4px 12px rgba(0,0,0,0.15)",
                                            },
                                            "& .MuiButton-startIcon": {
                                                marginRight: 2,
                                            },
                                        }}
                                    >
                                        {action.label}
                                    </Button>
                                ))}
                            </Box>
                        </Box>
                    </Paper>
                    </Grid>

                    {/* Contact Form */}
                    <Grid size={{ xs: 12, md: 7 }} sx={{ display: "flex" }}>
                        <Paper
                            elevation={0}
                            sx={{
                                p: { xs: 2.5, md: 4 },
                                borderRadius: 3,
                                border: "1px solid #e2e8f0",
                                width: "100%",
                                flex: 1,
                            }}
                        >
                            <Typography
                                variant="h5"
                                sx={{
                                    fontWeight: 600,
                                    color: "#1e293b",
                                    mb: 3,
                                }}
                            >
                                Gửi tin nhắn cho chúng tôi
                            </Typography>

                            <Box component="form" onSubmit={handleSubmit}>
                                <Grid container spacing={3}>
                                    <Grid size={{ xs: 12, md: 6 }}>
                                        <TextField
                                            fullWidth
                                            label="Họ và tên"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            error={!!errors.name}
                                            helperText={errors.name}
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <PersonIcon
                                                            sx={{
                                                                color: "#64748b",
                                                            }}
                                                        />
                                                    </InputAdornment>
                                                ),
                                            }}
                                            sx={{
                                                "& .MuiOutlinedInput-root": {
                                                    borderRadius: 2,
                                                },
                                            }}
                                        />
                                    </Grid>
                                    <Grid size={{ xs: 12, md: 6 }}>
                                        <TextField
                                            fullWidth
                                            label="Email"
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            error={!!errors.email}
                                            helperText={errors.email}
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <EmailIcon
                                                            sx={{
                                                                color: "#64748b",
                                                            }}
                                                        />
                                                    </InputAdornment>
                                                ),
                                            }}
                                            sx={{
                                                "& .MuiOutlinedInput-root": {
                                                    borderRadius: 2,
                                                },
                                            }}
                                        />
                                    </Grid>
                                    <Grid size={{ xs: 12, md: 6 }}>
                                        <TextField
                                            fullWidth
                                            label="Số điện thoại"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            error={!!errors.phone}
                                            helperText={errors.phone}
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <PhoneIcon
                                                            sx={{
                                                                color: "#64748b",
                                                            }}
                                                        />
                                                    </InputAdornment>
                                                ),
                                            }}
                                            sx={{
                                                "& .MuiOutlinedInput-root": {
                                                    borderRadius: 2,
                                                },
                                            }}
                                        />
                                    </Grid>
                                    <Grid size={{ xs: 12, md: 6 }}>
                                        <TextField
                                            fullWidth
                                            label="Tiêu đề"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                            error={!!errors.subject}
                                            helperText={errors.subject}
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <BusinessIcon
                                                            sx={{
                                                                color: "#64748b",
                                                            }}
                                                        />
                                                    </InputAdornment>
                                                ),
                                            }}
                                            sx={{
                                                "& .MuiOutlinedInput-root": {
                                                    borderRadius: 2,
                                                },
                                            }}
                                        />
                                    </Grid>
                                    <Grid size={12}>
                                        <TextField
                                            fullWidth
                                            multiline
                                            rows={6}
                                            label="Nội dung tin nhắn"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            error={!!errors.message}
                                            helperText={errors.message}
                                            placeholder="Vui lòng mô tả chi tiết nhu cầu của bạn để chúng tôi có thể tư vấn tốt nhất..."
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment
                                                        position="start"
                                                        sx={{
                                                            alignSelf:
                                                                "flex-start",
                                                            mt: 2,
                                                        }}
                                                    >
                                                        <MessageIcon
                                                            sx={{
                                                                color: "#64748b",
                                                            }}
                                                        />
                                                    </InputAdornment>
                                                ),
                                            }}
                                            sx={{
                                                "& .MuiOutlinedInput-root": {
                                                    borderRadius: 2,
                                                },
                                            }}
                                        />
                                    </Grid>
                                </Grid>

                                <Box
                                    sx={{
                                        mt: 4,
                                        display: "flex",
                                        gap: 2,
                                        flexWrap: "wrap",
                                    }}
                                >
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        size="large"
                                        startIcon={<SendIcon />}
                                        disabled={loading}
                                        sx={{
                                            backgroundColor: "#1976d2",
                                            borderRadius: 2,
                                            textTransform: "none",
                                            fontWeight: 600,
                                            px: 4,
                                            py: 1.5,
                                            "&:hover": {
                                                backgroundColor: "#1565c0",
                                            },
                                        }}
                                    >
                                        {loading
                                            ? "Đang gửi..."
                                            : "Gửi tin nhắn"}
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        size="large"
                                        onClick={() => {
                                            setFormData({
                                                name: "",
                                                email: "",
                                                phone: "",
                                                subject: "",
                                                message: "",
                                            });
                                            setErrors({});
                                        }}
                                        sx={{
                                            borderRadius: 2,
                                            textTransform: "none",
                                            fontWeight: 600,
                                            px: 4,
                                            py: 1.5,
                                            borderColor: "#e2e8f0",
                                            color: "#64748b",
                                            "&:hover": {
                                                borderColor: "#1976d2",
                                                backgroundColor: "#f8fafc",
                                            },
                                        }}
                                    >
                                        Làm mới
                                    </Button>
                                </Box>

                                {/* Form Information */}
                                <Box sx={{ mt: 3 }}>
                                    <Alert
                                        severity="info"
                                        sx={{ borderRadius: 2 }}
                                    >
                                        <Typography variant="body2">
                                            <strong>Lưu ý:</strong> Chúng tôi sẽ
                                            phản hồi trong vòng 24 giờ. Đối với
                                            các trường hợp khẩn cấp, vui lòng
                                            gọi trực tiếp hotline{" "}
                                            <strong>1900 1234</strong>.
                                        </Typography>
                                    </Alert>
                                </Box>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>

                {/* Map Section */}
                <Box
                    sx={{
                        mt: 6,
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <Paper
                        elevation={0}
                        sx={{
                            borderRadius: 3,
                            overflow: "hidden",
                            border: "1px solid #e2e8f0",
                            width: "100%",
                            maxWidth: "1200px",
                        }}
                    >
                        <Box sx={{ p: 4, backgroundColor: "white" }}>
                            <Typography
                                variant="h5"
                                sx={{
                                    fontWeight: 600,
                                    color: "#1e293b",
                                    mb: 2,
                                }}
                            >
                                Vị trí văn phòng
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{ color: "#64748b", mb: 3 }}
                            >
                                Hãy ghé thăm văn phòng của chúng tôi để được tư
                                vấn trực tiếp
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                height: { xs: 280, sm: 360, md: 420 },
                                backgroundColor: "#f1f5f9",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                position: "relative",
                            }}
                        >
                            {/* Placeholder for Google Maps */}
                            <Box
                                sx={{
                                    width: "100%",
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: 3,
                                    p: 3,
                                }}
                            >
                                <iframe
                                    title="Văn phòng Bảo Ngọc Travel"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230.38380003911485!2d103.96740518578223!3d22.498899867587532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x36cd139bebbb2cd5%3A0xc4dfe9fad75c1fb0!2zNTEgTmd1eeG7hW4gVHJ1bmcgVHLhu7FjLCBD4buRYyBM4bq_dSwgTMOgbyBDYWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1763694827707!5m2!1svi!2s"
                                    width="100%"
                                    height="100%"
                                    style={{
                                        border: 0,
                                        borderRadius: "8px",
                                        minHeight: "350px",
                                    }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                                <Button
                                    variant="contained"
                                    startIcon={<LocationIcon />}
                                    size="large"
                                    sx={{
                                        textTransform: "none",
                                        fontWeight: 600,
                                        px: 4,
                                        py: 1.5,
                                        borderRadius: 2,
                                        backgroundColor: "#1976d2",
                                        boxShadow:
                                            "0 4px 12px rgba(25, 118, 210, 0.3)",
                                        "&:hover": {
                                            backgroundColor: "#1565c0",
                                            boxShadow:
                                                "0 6px 16px rgba(25, 118, 210, 0.4)",
                                            transform: "translateY(-2px)",
                                        },
                                        transition: "all 0.3s ease-in-out",
                                    }}
                                    onClick={() =>
                                        window.open(
                                            "https://maps.app.goo.gl/t3GptNct1Qr3ipfE7",
                                            "_blank"
                                        )
                                    }
                                >
                                    Xem trên Google Maps
                                </Button>
                            </Box>
                        </Box>
                    </Paper>
                </Box>
            </Container>

            {/* Success/Error Snackbar */}
            <Snackbar
                open={snackbar.open}
                autoHideDuration={6000}
                onClose={() => setSnackbar({ ...snackbar, open: false })}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
                <Alert
                    onClose={() => setSnackbar({ ...snackbar, open: false })}
                    severity={snackbar.severity}
                    sx={{ width: "100%", borderRadius: 2 }}
                >
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default Contact;
