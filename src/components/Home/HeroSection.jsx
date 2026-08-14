import React from "react";
import { Box } from "@mui/material";
import HeroCarousel from "../HeroCarousel";
import MobileSearchPrompt from "../MobileSearchPrompt";

const HeroSection = () => {
    return (
        <Box sx={{ position: "relative" }}>
            <HeroCarousel />
            <MobileSearchPrompt />
        </Box>
    );
};

export default HeroSection;
