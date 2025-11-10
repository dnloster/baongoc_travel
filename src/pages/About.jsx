import React from "react";
import {
    Container,
    Typography,
    Box,
    Grid,
    Card,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
} from "@mui/material";
import {
    Email as EmailIcon,
    Phone as PhoneIcon,
    LocationOn as LocationIcon,
    AccessTime as TimeIcon,
    Facebook as FacebookIcon,
    Instagram as InstagramIcon,
} from "@mui/icons-material";

const About = () => {
    const teamMembers = [
        {
            name: "Nguyễn Văn A",
            position: "Giám đốc điều hành",
            description: "Với hơn 10 năm kinh nghiệm trong ngành du lịch",
        },
        {
            name: "Trần Thị B",
            position: "Trưởng phòng Marketing",
            description: "Chuyên gia về marketing du lịch và truyền thông",
        },
        {
            name: "Lê Văn C",
            position: "Trưởng phòng Tour",
            description: "Chuyên gia thiết kế và vận hành các tour du lịch",
        },
    ];

    const services = [
        "Tư vấn lịch trình du lịch cá nhân hóa",
        "Đặt vé máy bay và khách sạn",
        "Hướng dẫn viên chuyên nghiệp",
        "Dịch vụ hỗ trợ 24/7",
        "Bảo hiểm du lịch toàn diện",
        "Các tour trọn gói với giá tốt nhất",
    ];

    return (
        <Container 
            maxWidth="lg" 
            sx={{ 
                py: { xs: 2, md: 4 },
                px: { xs: 1, sm: 2, md: 3 }
            }}
        >
            {/* Header */}
            <Box textAlign="center" sx={{ mb: { xs: 4, md: 6 } }}>
                <Typography 
                    variant="h3" 
                    component="h1" 
                    gutterBottom
                    sx={{
                        fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3rem" },
                        fontWeight: "bold",
                        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text", 
                        WebkitTextFillColor: "transparent",
                    }}
                >
                    Về chúng tôi
                </Typography>
                <Typography 
                    variant="h6" 
                    color="text.secondary"
                    sx={{
                        fontSize: { xs: "1rem", md: "1.25rem" },
                        px: { xs: 2, sm: 0 },
                        lineHeight: 1.6,
                    }}
                >
                    Bảo Ngọc Travel - Đối tác tin cậy cho mọi chuyến đi
                </Typography>
            </Box>

            {/* Company Story */}
            <Grid container spacing={{ xs: 3, md: 4 }} sx={{ mb: { xs: 4, md: 6 } }}>
                <Grid item xs={12} md={6}>
                    <Typography 
                        variant="h4" 
                        gutterBottom
                        sx={{
                            fontSize: { xs: "1.5rem", md: "2.125rem" },
                            fontWeight: "bold",
                            mb: { xs: 2, md: 3 },
                        }}
                    >
                        Câu chuyện của chúng tôi
                    </Typography>
                    <Typography 
                        variant="body1" 
                        paragraph
                        sx={{
                            fontSize: { xs: "0.95rem", md: "1rem" },
                            lineHeight: { xs: 1.6, md: 1.7 },
                            textAlign: "justify",
                        }}
                    >
                        Bảo Ngọc Travel được thành lập vào năm 2015 với sứ mệnh
                        mang đến những trải nghiệm du lịch tuyệt vời và đáng nhớ
                        cho mọi khách hàng. Chúng tôi tin rằng du lịch không chỉ
                        là việc di chuyển từ nơi này đến nơi khác, mà là cơ hội
                        để khám phá, học hỏi và tạo ra những kỷ niệm đẹp.
                    </Typography>
                    <Typography 
                        variant="body1" 
                        paragraph
                        sx={{
                            fontSize: { xs: "0.95rem", md: "1rem" },
                            lineHeight: { xs: 1.6, md: 1.7 },
                            textAlign: "justify",
                            mb: { xs: 2, md: 3 },
                        }}
                    >
                        Với đội ngũ nhân viên giàu kinh nghiệm và tâm huyết,
                        chúng tôi đã phục vụ hàng nghìn khách hàng và nhận được
                        nhiều phản hồi tích cực. Chúng tôi luôn cam kết cung cấp
                        dịch vụ chất lượng cao với giá cả hợp lý.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box
                        component="img"
                        sx={{
                            width: "100%",
                            height: { xs: 200, md: 300 },
                            objectFit: "cover",
                            borderRadius: { xs: 1, md: 2 },
                            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                        }}
                        src="/images/office2.jpg"
                        alt="Đội ngũ Bảo Ngọc Travel"
                    />
                </Grid>
            </Grid>

            {/* Mission & Vision */}
            <Grid container spacing={4} sx={{ mb: 6 }}>
                <Grid item xs={12} md={6}>
                    <Card sx={{ height: "100%", p: 3 }}>
                        <Typography variant="h5" gutterBottom color="primary">
                            Sứ mệnh
                        </Typography>
                        <Typography variant="body1">
                            Tạo ra những chuyến du lịch an toàn, thú vị và đáng
                            nhớ, giúp khách hàng khám phá vẻ đẹp của Việt Nam và
                            thế giới. Chúng tôi cam kết mang đến dịch vụ tốt
                            nhất với giá trị vượt trội.
                        </Typography>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card sx={{ height: "100%", p: 3 }}>
                        <Typography variant="h5" gutterBottom color="primary">
                            Tầm nhìn
                        </Typography>
                        <Typography variant="body1">
                            Trở thành công ty du lịch hàng đầu Việt Nam, được
                            khách hàng tin tưởng và lựa chọn cho mọi chuyến đi.
                            Chúng tôi hướng tới việc mở rộng dịch vụ và nâng cao
                            chất lượng không ngừng.
                        </Typography>
                    </Card>
                </Grid>
            </Grid>

            {/* Services */}
            <Box sx={{ mb: 6 }}>
                <Typography variant="h4" textAlign="center" gutterBottom>
                    Dịch vụ của chúng tôi
                </Typography>
                <Grid container spacing={2} sx={{ mt: 2 }}>
                    {services.map((service, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card
                                sx={{
                                    p: 2,
                                    textAlign: "center",
                                    height: "100%",
                                }}
                            >
                                <Typography variant="body1">
                                    {service}
                                </Typography>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Team */}
            <Box sx={{ mb: 6 }}>
                <Typography variant="h4" textAlign="center" gutterBottom>
                    Đội ngũ của chúng tôi
                </Typography>
                <Grid container spacing={4} sx={{ mt: 2 }}>
                    {teamMembers.map((member, index) => (
                        <Grid item xs={12} md={4} key={index}>
                            <Card sx={{ textAlign: "center", p: 3 }}>
                                <Box
                                    component="img"
                                    sx={{
                                        width: 120,
                                        height: 120,
                                        borderRadius: "50%",
                                        mx: "auto",
                                        mb: 2,
                                        objectFit: "cover",
                                    }}
                                    src={`https://via.placeholder.com/120x120?text=${member.name.charAt(
                                        0
                                    )}`}
                                    alt={member.name}
                                />
                                <Typography variant="h6" gutterBottom>
                                    {member.name}
                                </Typography>
                                <Typography
                                    variant="subtitle1"
                                    color="primary"
                                    gutterBottom
                                >
                                    {member.position}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    {member.description}
                                </Typography>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Contact Info */}
            <Card sx={{ p: 4 }}>
                <Typography variant="h4" textAlign="center" gutterBottom>
                    Thông tin liên hệ
                </Typography>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <List>
                            <ListItem>
                                <ListItemIcon>
                                    <LocationIcon color="primary" />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Địa chỉ"
                                    secondary="123 Đường ABC, Quận 1, TP.HCM"
                                />
                            </ListItem>
                            <Divider />
                            <ListItem>
                                <ListItemIcon>
                                    <PhoneIcon color="primary" />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Điện thoại"
                                    secondary="(+84) 123 456 789"
                                />
                            </ListItem>
                            <Divider />
                            <ListItem>
                                <ListItemIcon>
                                    <EmailIcon color="primary" />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Email"
                                    secondary="info@traveltours.vn"
                                />
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <List>
                            <ListItem>
                                <ListItemIcon>
                                    <TimeIcon color="primary" />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Giờ làm việc"
                                    secondary="Thứ 2 - Thứ 6: 8:00 - 18:00"
                                />
                            </ListItem>
                            <Divider />
                            <ListItem>
                                <ListItemIcon>
                                    <FacebookIcon color="primary" />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Facebook"
                                    secondary="facebook.com/traveltours"
                                />
                            </ListItem>
                            <Divider />
                            <ListItem>
                                <ListItemIcon>
                                    <InstagramIcon color="primary" />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Instagram"
                                    secondary="@traveltours_vn"
                                />
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>
            </Card>
        </Container>
    );
};

export default About;
