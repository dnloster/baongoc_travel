import React from "react";
import { Box, Typography } from "@mui/material";

const SectionHeader = ({ title, subtitle, icon }) => {
    return (
        <Box textAlign="center" sx={{ mb: { xs: 4, md: 6 }, px: { xs: 1, sm: 0 } }}>
            <Typography
                variant="h3"
                component="h2"
                sx={{
                    fontWeight: 700,
                    color: "#1e3a8a",
                    mb: 1.5,
                    fontSize: { xs: "1.4rem", sm: "1.75rem", md: "2.15rem" },
                    lineHeight: 1.3,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: { xs: 1, md: 1.5 },
                    flexWrap: "wrap",
                    px: 1,
                }}
            >
                {icon}
                {title}
            </Typography>
            <Box
                sx={{
                    width: { xs: 44, md: 64 },
                    height: 3,
                    backgroundColor: "primary.main",
                    mx: "auto",
                    mb: 2,
                    borderRadius: 2,
                }}
            />
            {subtitle && (
                <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{
                        maxWidth: 680,
                        mx: "auto",
                        lineHeight: 1.7,
                        fontSize: { xs: "0.9rem", md: "1.05rem" },
                        px: { xs: 1.5, sm: 0 },
                    }}
                >
                    {subtitle}
                </Typography>
            )}
        </Box>
    );
};

export default SectionHeader;
