import React from "react";
import { Container, Box, Grid } from "@mui/material";
import { Handshake as HandshakeIcon } from "@mui/icons-material";
import SectionHeader from "../SectionHeader";

const PartnersSection = () => {
    // Data cho đối tác (sẽ thay thế bằng logo thật sau)
    const partners = [
        {
            id: 1,
            logo: "https://res.cloudinary.com/domomsbmz/image/upload/v1763696235/partner/Picture1_ubtack.jpg",
            website: "https://www.facebook.com/Chebaongoc24/",
        },
        {
            id: 2,
            logo: "https://res.cloudinary.com/domomsbmz/image/upload/v1763696235/partner/Picture2_m5dsbt.jpg",
            website: "https://www.chinaexpresstours.com/",
        },
        {
            id: 3,
            logo: "https://res.cloudinary.com/domomsbmz/image/upload/v1763696235/partner/Picture3_wapxko.jpg",
            website: "https://grandviet.com.vn/",
        },
        {
            id: 4,
            logo: "https://res.cloudinary.com/domomsbmz/image/upload/v1763696235/partner/Picture4_b12sh4.jpg",
            website: "https://toponetravel.vn/",
        },
        {
            id: 5,
            logo: "https://res.cloudinary.com/domomsbmz/image/upload/v1763696235/partner/Picture5_n2vdwc.jpg",
            website: "https://www.mbbank.com.vn/",
        },
        {
            id: 6,
            logo: "https://res.cloudinary.com/domomsbmz/image/upload/v1763696236/partner/Picture6_hhyijv.jpg",
            website: "https://www.ruongbacthangtravel.com/",
        },
        {
            id: 7,
            logo: "https://res.cloudinary.com/domomsbmz/image/upload/v1763696236/partner/Picture7_yctixe.jpg",
            website: "https://www.baominh.com.vn/",
        },
    ];

    return (
        <Box sx={{ py: { xs: 5, md: 8 }, backgroundColor: "#fff" }}>
            <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
                <SectionHeader
                    title="Đối tác của chúng tôi"
                    subtitle="Hợp tác với những thương hiệu uy tín để mang đến dịch vụ tốt nhất"
                    icon={
                        <HandshakeIcon
                            sx={{
                                fontSize: { xs: 28, md: 34 },
                                color: "primary.main",
                            }}
                        />
                    }
                />

                {/* Partners Grid */}
                <Grid
                    container
                    spacing={{ xs: 3, sm: 4, md: 5 }}
                    sx={{ alignItems: "center", justifyContent: "center" }}
                >
                    {partners.map((partner) => (
                        <Grid size={{ xs: 6, sm: 4, md: 3 }} key={partner.id}>
                            <Box
                                component="a"
                                href={partner.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                    display: "block",
                                    textDecoration: "none",
                                    position: "relative",
                                    width: "100%",
                                    aspectRatio: "2/1",
                                    backgroundColor: "white",
                                    borderRadius: { xs: 2, md: 3 },
                                    border: "2px solid",
                                    borderColor: "grey.200",
                                    overflow: "hidden",
                                    transition:
                                        "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                                    cursor: "pointer",
                                    "&:hover": {
                                        transform: {
                                            xs: "scale(1.02)",
                                            md: "translateY(-8px) scale(1.05)",
                                        },
                                        boxShadow: {
                                            xs: "0 8px 25px rgba(102, 126, 234, 0.15)",
                                            md: "0 16px 40px rgba(102, 126, 234, 0.2)",
                                        },
                                        borderColor: "primary.main",
                                        "& .partner-logo": {
                                            transform: "scale(1.1)",
                                            filter: "brightness(1.1)",
                                        },
                                        "& .partner-overlay": {
                                            opacity: 1,
                                        },
                                    },
                                }}
                            >
                                {/* Logo Image */}
                                <Box
                                    component="img"
                                    src={partner.logo}
                                    alt={partner.name}
                                    className="partner-logo"
                                    sx={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "contain",
                                        padding: { xs: 1.5, md: 2 },
                                        transition: "all 0.3s ease",
                                    }}
                                />

                                {/* Click indicator */}
                                <Box
                                    sx={{
                                        position: "absolute",
                                        top: 8,
                                        right: 8,
                                        width: { xs: 20, md: 24 },
                                        height: { xs: 20, md: 24 },
                                        backgroundColor: "primary.main",
                                        borderRadius: "50%",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        opacity: 0.7,
                                        transition: "all 0.3s ease",
                                        "&::before": {
                                            content: '"↗"',
                                            color: "white",
                                            fontSize: {
                                                xs: "0.7rem",
                                                md: "0.8rem",
                                            },
                                            fontWeight: "bold",
                                        },
                                    }}
                                />
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default PartnersSection;
