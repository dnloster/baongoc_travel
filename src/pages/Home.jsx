import React from "react";
import { Box } from "@mui/material";
import BookingSearchBox from "../components/BookingSearchBox";
import FeaturedDestinations from "../components/FeaturedDestinations";
import EndowProgram from "../components/EndowProgram";
import FeaturedTours from "../components/FeaturedTours";
import {
    HeroSection,
    ServicesSection,
    CustomerFeedbackSection,
    PartnersSection,
    WelcomePopup,
} from "../components/Home";

const Home = () => {
    return (
        <Box sx={{ width: "100%", overflowX: "hidden" }}>
            <WelcomePopup />
            <HeroSection />
            <BookingSearchBox />
            <EndowProgram />
            <FeaturedDestinations />
            <FeaturedTours
                title="Tour Trung Quốc nổi bật"
                subtitle="Các chương trình Vân Nam, Hồng Hà, Hà Khẩu và Quảng Tây của Bảo Ngọc Travel"
            />
            <ServicesSection />
            <CustomerFeedbackSection />
            <PartnersSection />
        </Box>
    );
};

export default Home;
