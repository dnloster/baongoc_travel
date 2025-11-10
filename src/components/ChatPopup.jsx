import React, { useState } from "react";
import { Box, Fab, Badge, Slide, alpha, Tooltip, Paper } from "@mui/material";
import {
    Chat as ChatIcon,
    Close as CloseIcon,
    Facebook as FacebookIcon,
    Message as MessageIcon,
    HeadsetMic as HeadsetMicIcon,
} from "@mui/icons-material";
import ZaloIcon from "../assets/zalo.svg";
import ChatWindow from "./ChatWindow";

const ChatPopup = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [chatWindowOpen, setChatWindowOpen] = useState(false);

    const chatOptions = [
        {
            id: "facebook",
            name: "Facebook",
            color: "#1877F2",
            href: "https://facebook.com/traveltoursvn",
            icon: FacebookIcon,
            bgColor: "#1877F2",
        },
        {
            id: "zalo",
            name: "Zalo",
            color: "#0068FF",
            href: "https://zalo.me/0123456789",
            icon: (props) => (
                <Box
                    component="img"
                    src={ZaloIcon}
                    sx={{
                        width: 24,
                        height: 24,
                        ...props.sx,
                    }}
                />
            ),
            bgColor: "#FFFFFF",
        },
        {
            id: "support",
            name: "Support",
            color: "#00BCD4",
            href: "#",
            icon: MessageIcon,
            bgColor: "#00BCD4",
            isInternal: true,
        },
    ];

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };

    const handleChatClick = (option) => {
        if (option.isInternal) {
            setChatWindowOpen(true);
        } else {
            window.open(option.href, "_blank");
        }
        setIsExpanded(false);
    };

    return (
        <>
            {/* Chat Button Container */}
            <Box
                sx={{
                    position: "fixed",
                    bottom: 24,
                    right: 24,
                    zIndex: 1000,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                    gap: 1,
                }}
            >
                {/* Individual Chat Buttons */}
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 1,
                        mb: 1,
                    }}
                >
                    {chatOptions.map((option, index) => (
                        <Paper
                            key={option.id}
                            elevation={isExpanded ? 6 : 0}
                            sx={{
                                borderRadius: "50%",
                                width: 48,
                                height: 48,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                cursor: "pointer",
                                backgroundColor: option.bgColor,
                                border:
                                    option.bgColor === "#FFFFFF"
                                        ? `2px solid ${option.color}`
                                        : "none",
                                // Smooth animation cho transform và opacity
                                transform: isExpanded
                                    ? "translateY(0) scale(1) rotate(0deg)"
                                    : "translateY(20px) scale(0.8) rotate(-10deg)",
                                opacity: isExpanded ? 1 : 0,
                                visibility: isExpanded ? "visible" : "hidden",
                                transition: `all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)`,
                                transitionDelay: isExpanded
                                    ? `${index * 80}ms`
                                    : `${
                                          (chatOptions.length - index - 1) * 40
                                      }ms`,
                                "&:hover": {
                                    transform: isExpanded
                                        ? "translateY(-3px) scale(1.15) rotate(5deg)"
                                        : "translateY(20px) scale(0.8) rotate(-10deg)",
                                    boxShadow: `0 12px 35px ${alpha(
                                        option.color,
                                        0.5
                                    )}`,
                                    transition:
                                        "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
                                },
                                "&:active": {
                                    transform: isExpanded
                                        ? "translateY(0) scale(1.05)"
                                        : "translateY(20px) scale(0.8)",
                                    transition: "all 0.1s ease",
                                },
                                // Thêm animation cho icon bên trong
                                "& .chat-icon": {
                                    transition:
                                        "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                                    transform: isExpanded
                                        ? "rotate(0deg)"
                                        : "rotate(-20deg)",
                                },
                            }}
                            onClick={() => handleChatClick(option)}
                        >
                            <Tooltip
                                title={option.name}
                                placement="left"
                                arrow
                                TransitionProps={{
                                    timeout: 300,
                                }}
                            >
                                <Box
                                    className="chat-icon"
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        width: "100%",
                                        height: "100%",
                                    }}
                                >
                                    <option.icon
                                        sx={{
                                            fontSize: 24,
                                            color:
                                                option.bgColor === "#FFFFFF"
                                                    ? option.color
                                                    : "#FFFFFF",
                                            transition: "all 0.2s ease",
                                        }}
                                    />
                                </Box>
                            </Tooltip>
                        </Paper>
                    ))}
                </Box>

                {/* Main Toggle Button */}
                <Tooltip
                    title={isExpanded ? "Đóng" : "Liên hệ hỗ trợ"}
                    placement="left"
                    arrow
                >
                    <Fab
                        color="primary"
                        sx={{
                            width: 56,
                            height: 56,
                            background: isExpanded
                                ? "linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)"
                                : "linear-gradient(135deg, #00BCD4 0%, #0097A7 100%)",
                            transform: isExpanded
                                ? "rotate(45deg)"
                                : "rotate(0deg)",
                            "&:hover": {
                                background: isExpanded
                                    ? "linear-gradient(135deg, #ee5a24 0%, #d63031 100%)"
                                    : "linear-gradient(135deg, #0097A7 0%, #006064 100%)",
                                transform: isExpanded
                                    ? "rotate(45deg) scale(1.1)"
                                    : "rotate(0deg) scale(1.1)",
                                boxShadow: isExpanded
                                    ? "0 12px 40px rgba(255, 107, 107, 0.5)"
                                    : "0 12px 40px rgba(0, 188, 212, 0.5)",
                            },
                            "&:active": {
                                transform: isExpanded
                                    ? "rotate(45deg) scale(0.95)"
                                    : "rotate(0deg) scale(0.95)",
                            },
                            transition:
                                "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
                            boxShadow: isExpanded
                                ? "0 8px 32px rgba(255, 107, 107, 0.4)"
                                : "0 8px 32px rgba(0, 188, 212, 0.4)",
                            animation: !isExpanded
                                ? "gentleBounce 3s ease-in-out infinite"
                                : "none",
                            "@keyframes gentleBounce": {
                                "0%, 100%": {
                                    transform: "translateY(0) rotate(0deg)",
                                },
                                "50%": {
                                    transform: "translateY(-3px) rotate(0deg)",
                                },
                            },
                        }}
                        onClick={handleToggle}
                    >
                        <Box
                            sx={{
                                position: "relative",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            {/* Chat Icon */}
                            <HeadsetMicIcon
                                sx={{
                                    fontSize: 28,
                                    color: "white",
                                    position: "absolute",
                                    transform: isExpanded
                                        ? "rotate(-90deg) scale(0)"
                                        : "rotate(0deg) scale(1)",
                                    opacity: isExpanded ? 0 : 1,
                                    transition:
                                        "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                                }}
                            />

                            {/* Close Icon */}
                            <CloseIcon
                                sx={{
                                    fontSize: 28,
                                    color: "white",
                                    position: "absolute",
                                    transform: isExpanded
                                        ? "rotate(180deg) scale(1)"
                                        : "rotate(90deg) scale(0)",
                                    opacity: isExpanded ? 1 : 0,
                                    transition:
                                        "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                                }}
                            />

                            {/* Online Badge */}
                            {!isExpanded && (
                                <Box
                                    sx={{
                                        position: "absolute",
                                        top: "15px",
                                        right: "15px",
                                        width: "12px",
                                        height: "12px",
                                        backgroundColor: "#4CAF50",
                                        borderRadius: "50%",
                                        border: "2px solid white",
                                        animation:
                                            "gentlePulse 2s ease-in-out infinite",
                                        zIndex: 1,
                                        "@keyframes gentlePulse": {
                                            "0%, 100%": {
                                                transform: "scale(1)",
                                                opacity: 1,
                                            },
                                            "50%": {
                                                transform: "scale(1.2)",
                                                opacity: 0.8,
                                            },
                                        },
                                    }}
                                />
                            )}
                        </Box>
                    </Fab>
                </Tooltip>
            </Box>

            {/* Internal Chat Window */}
            <ChatWindow
                open={chatWindowOpen}
                onClose={() => setChatWindowOpen(false)}
            />
        </>
    );
};

export default ChatPopup;
