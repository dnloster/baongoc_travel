import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SectionHeader from "./SectionHeader";
import { DESTINATIONS, TOUR_CATEGORIES } from "../data/tours";

const FeaturedDestinations = () => {
    const navigate = useNavigate();
    const [selectedTab, setSelectedTab] = useState(0);
    const currentCategory = TOUR_CATEGORIES[selectedTab];
    const currentDestinations = DESTINATIONS[currentCategory] || [];

    const getCardType = (index, total) => {
        if (total <= 2) return "equal";
        if (total === 3) return index === 0 ? "featured" : "tall";
        if (total === 4) {
            if (index === 0) return "featured";
            if (index === 3) return "wide";
            return "regular";
        }
        return index === 0 ? "featured" : "regular";
    };

    const handleDestinationClick = (destination) => {
        if (destination.tourId) {
            navigate(`/tours/${destination.tourId}`);
            return;
        }
        navigate("/tours");
    };

    return (
        <>
            <style>{`
                .featured-section {
                    padding: 40px 0 56px;
                    background-color: #f8fafc;
                }

                .featured-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 16px;
                }

                .tabs-wrapper {
                    margin-bottom: 20px;
                    overflow-x: auto;
                    -webkit-overflow-scrolling: touch;
                    scrollbar-width: none;
                    border-bottom: 1px solid #e2e8f0;
                }

                .tabs-wrapper::-webkit-scrollbar {
                    display: none;
                }

                .tabs-container {
                    display: flex;
                    justify-content: flex-start;
                    gap: 0;
                    min-width: min-content;
                }

                .tab-button {
                    background: transparent;
                    border: none;
                    padding: 10px 14px;
                    font-size: 0.85rem;
                    font-weight: 600;
                    color: #64748b;
                    cursor: pointer;
                    white-space: nowrap;
                    border-bottom: 2px solid transparent;
                    margin-bottom: -1px;
                    transition: color 0.2s ease, border-color 0.2s ease;
                    flex-shrink: 0;
                }

                .tab-button:hover,
                .tab-button.active {
                    color: #1976d2;
                }

                .tab-button.active {
                    border-bottom-color: #1976d2;
                }

                .destinations-grid {
                    display: grid;
                    grid-template-columns: repeat(2, minmax(0, 1fr));
                    grid-auto-rows: 150px;
                    gap: 10px;
                }

                .destination-card {
                    position: relative;
                    border-radius: 12px;
                    overflow: hidden;
                    cursor: pointer;
                    min-width: 0;
                    border: none;
                    padding: 0;
                    background: transparent;
                    width: 100%;
                    height: 100%;
                    text-align: inherit;
                    font: inherit;
                    color: inherit;
                }

                .destination-card.is-featured {
                    grid-column: span 2;
                    grid-row: span 2;
                }

                .destination-card.is-tall {
                    grid-column: span 1;
                    grid-row: span 2;
                }

                .destination-card.is-wide {
                    grid-column: span 2;
                    grid-row: span 1;
                }

                .destination-card.is-equal {
                    grid-column: span 1;
                    grid-row: span 2;
                }

                .destination-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    display: block;
                    transition: transform 0.45s ease;
                }

                .destination-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(
                        180deg,
                        rgba(0, 0, 0, 0.05) 35%,
                        rgba(0, 0, 0, 0.62) 100%
                    );
                    display: flex;
                    align-items: flex-end;
                    justify-content: center;
                    padding: 12px 10px;
                }

                .destination-name {
                    color: white;
                    font-weight: 700;
                    text-align: center;
                    font-size: 0.82rem;
                    letter-spacing: 0.6px;
                    text-transform: uppercase;
                    line-height: 1.3;
                    text-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
                    margin: 0;
                }

                .destination-card.is-featured .destination-name,
                .destination-card.is-equal .destination-name {
                    font-size: 1rem;
                }

                @media (min-width: 600px) {
                    .featured-section {
                        padding: 48px 0 64px;
                    }

                    .featured-container {
                        padding: 0 24px;
                    }

                    .tabs-container {
                        justify-content: center;
                    }

                    .destinations-grid {
                        gap: 12px;
                        grid-auto-rows: 180px;
                    }

                    .destination-card.is-equal {
                        grid-row: span 2;
                    }

                    .destination-name {
                        font-size: 0.95rem;
                    }

                    .destination-card.is-featured .destination-name,
                    .destination-card.is-equal .destination-name {
                        font-size: 1.25rem;
                    }
                }

                @media (min-width: 960px) {
                    .destinations-grid {
                        grid-template-columns: repeat(4, minmax(0, 1fr));
                        grid-auto-rows: 190px;
                        gap: 14px;
                    }

                    .destination-card.is-featured {
                        grid-column: span 2;
                        grid-row: span 2;
                    }

                    .destination-card.is-tall {
                        grid-column: span 1;
                        grid-row: span 2;
                    }

                    .destination-card.is-wide {
                        grid-column: span 2;
                        grid-row: span 1;
                    }

                    .destination-card.is-equal {
                        grid-column: span 2;
                        grid-row: span 2;
                    }

                    .destination-card.is-regular {
                        grid-column: span 1;
                        grid-row: span 1;
                    }

                    .destination-name {
                        font-size: 1rem;
                    }

                    .destination-card.is-featured .destination-name,
                    .destination-card.is-equal .destination-name,
                    .destination-card.is-tall .destination-name {
                        font-size: 1.45rem;
                    }

                    .destination-card:hover .destination-image {
                        transform: scale(1.06);
                    }
                }
            `}</style>

            <div className="featured-section">
                <div className="featured-container">
                    <SectionHeader
                        title="Điểm đến Trung Quốc"
                        subtitle="Chọn điểm đến theo tuyến Vân Nam, Hồng Hà, Hà Khẩu hoặc Quảng Tây để xem lịch trình chi tiết."
                    />

                    <div className="tabs-wrapper">
                        <div className="tabs-container">
                            {TOUR_CATEGORIES.map((category, index) => (
                                <button
                                    key={category}
                                    type="button"
                                    className={`tab-button ${
                                        selectedTab === index ? "active" : ""
                                    }`}
                                    onClick={() => setSelectedTab(index)}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="destinations-grid">
                        {currentDestinations.map(
                            (destination, index, list) => (
                                <button
                                    key={destination.id}
                                    type="button"
                                    className={`destination-card is-${getCardType(
                                        index,
                                        list.length
                                    )}`}
                                    onClick={() =>
                                        handleDestinationClick(destination)
                                    }
                                >
                                    <img
                                        src={destination.image}
                                        alt={destination.name}
                                        className="destination-image"
                                    />
                                    <div className="destination-overlay">
                                        <h4 className="destination-name">
                                            {destination.name}
                                        </h4>
                                    </div>
                                </button>
                            )
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default FeaturedDestinations;
