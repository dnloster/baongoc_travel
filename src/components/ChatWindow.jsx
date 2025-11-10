import React, { useState, useRef, useEffect } from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Box,
    TextField,
    IconButton,
    Typography,
    Avatar,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Chip,
    Button,
    Divider,
    Paper,
    useTheme,
    alpha,
} from "@mui/material";
import {
    Close as CloseIcon,
    Send as SendIcon,
    Support as SupportIcon,
    Person as PersonIcon,
    AttachFile as AttachFileIcon,
    EmojiEmotions as EmojiIcon,
} from "@mui/icons-material";

const ChatWindow = ({ open, onClose }) => {
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([
        {
            id: 1,
            sender: "support",
            content:
                "Xin chào! Tôi là Hương - nhân viên tư vấn du lịch của Bảo Ngọc Travel. Tôi có thể giúp gì cho bạn?",
            timestamp: new Date(Date.now() - 60000),
            avatar: "/assets/images/support-avatar.png",
            senderName: "Hương - Tư vấn viên",
        },
        {
            id: 2,
            sender: "support",
            content:
                "Chúng tôi có nhiều tour hấp dẫn cho kỳ nghỉ của bạn. Bạn quan tâm đến loại tour nào?",
            timestamp: new Date(Date.now() - 30000),
            avatar: "/assets/images/support-avatar.png",
            senderName: "Hương - Tư vấn viên",
        },
    ]);
    const messagesEndRef = useRef(null);
    const theme = useTheme();

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSendMessage = () => {
        if (message.trim()) {
            const newMessage = {
                id: messages.length + 1,
                sender: "user",
                content: message,
                timestamp: new Date(),
                senderName: "Bạn",
            };
            setMessages([...messages, newMessage]);
            setMessage("");

            // Simulate support response
            setTimeout(() => {
                const supportResponse = {
                    id: messages.length + 2,
                    sender: "support",
                    content:
                        "Cảm ơn bạn đã liên hệ! Tôi sẽ tư vấn chi tiết cho bạn. Bạn có thể để lại số điện thoại để chúng tôi hỗ trợ tốt hơn không?",
                    timestamp: new Date(),
                    avatar: "/assets/images/support-avatar.png",
                    senderName: "Hương - Tư vấn viên",
                };
                setMessages((prev) => [...prev, supportResponse]);
            }, 1500);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    const formatTime = (timestamp) => {
        return new Intl.DateTimeFormat("vi-VN", {
            hour: "2-digit",
            minute: "2-digit",
        }).format(timestamp);
    };

    const quickReplies = [
        "Tôi muốn tư vấn tour",
        "Báo giá tour Hạ Long",
        "Tour Sapa có gì?",
        "Liên hệ hotline",
    ];

    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="sm"
            fullWidth={false}
            PaperProps={{
                sx: {
                    position: "fixed",
                    bottom: 100, // Trên popup button (56px height + 24px margin + 20px gap)
                    right: 24, // Sát bên phải như popup button
                    top: "auto",
                    left: "auto",
                    margin: 0,
                    width: 350,
                    height: 500,
                    maxHeight: "calc(100vh - 140px)", // Để không bị che bởi popup button
                    borderRadius: 3,
                    overflow: "hidden",
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
                    // Responsive cho mobile
                    "@media (max-width: 768px)": {
                        width: "calc(100vw - 32px)",
                        right: 16,
                        bottom: 90,
                        maxHeight: "calc(100vh - 120px)",
                    },
                },
            }}
            BackdropProps={{
                sx: {
                    backgroundColor: "transparent", // Loại bỏ backdrop
                },
            }}
            sx={{
                "& .MuiDialog-container": {
                    alignItems: "flex-end",
                    justifyContent: "flex-end",
                },
                "& .MuiDialog-paper": {
                    transform: open ? "translateX(0)" : "translateX(100%)",
                    transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                },
            }}
        >
            {/* Header */}
            <DialogTitle
                sx={{
                    background:
                        "linear-gradient(135deg, #4CAF50 0%, #45a049 100%)",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    p: 2,
                }}
            >
                <Box display="flex" alignItems="center">
                    <Avatar
                        sx={{
                            backgroundColor: "rgba(255,255,255,0.2)",
                            mr: 2,
                            width: 40,
                            height: 40,
                        }}
                    >
                        <SupportIcon />
                    </Avatar>
                    <Box>
                        <Typography variant="h6" sx={{ fontWeight: 600 }}>
                            Hỗ trợ trực tuyến
                        </Typography>
                        <Typography variant="caption" sx={{ opacity: 0.9 }}>
                            <Box
                                component="span"
                                sx={{
                                    display: "inline-block",
                                    width: 8,
                                    height: 8,
                                    borderRadius: "50%",
                                    backgroundColor: "#4CAF50",
                                    mr: 1,
                                    animation: "pulse 2s infinite",
                                }}
                            />
                            Đang hoạt động
                        </Typography>
                    </Box>
                </Box>
                <IconButton
                    onClick={onClose}
                    sx={{
                        color: "white",
                        "&:hover": {
                            backgroundColor: "rgba(255,255,255,0.1)",
                        },
                    }}
                >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>

            {/* Messages Area */}
            <DialogContent
                sx={{
                    p: 0,
                    backgroundColor: "#f5f5f5",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <Box
                    sx={{
                        flex: 1,
                        overflowY: "auto",
                        p: 2,
                        "&::-webkit-scrollbar": {
                            width: 6,
                        },
                        "&::-webkit-scrollbar-track": {
                            backgroundColor: "transparent",
                        },
                        "&::-webkit-scrollbar-thumb": {
                            backgroundColor: alpha(
                                theme.palette.primary.main,
                                0.3
                            ),
                            borderRadius: 3,
                        },
                    }}
                >
                    {messages.map((msg) => (
                        <Box
                            key={msg.id}
                            sx={{
                                display: "flex",
                                justifyContent:
                                    msg.sender === "user"
                                        ? "flex-end"
                                        : "flex-start",
                                mb: 2,
                            }}
                        >
                            <Box
                                sx={{
                                    maxWidth: "70%",
                                    display: "flex",
                                    flexDirection:
                                        msg.sender === "user"
                                            ? "row-reverse"
                                            : "row",
                                    alignItems: "flex-end",
                                }}
                            >
                                {msg.sender === "support" && (
                                    <Avatar
                                        sx={{
                                            width: 32,
                                            height: 32,
                                            mr: 1,
                                            backgroundColor: "#4CAF50",
                                        }}
                                    >
                                        <SupportIcon sx={{ fontSize: 18 }} />
                                    </Avatar>
                                )}
                                {msg.sender === "user" && (
                                    <Avatar
                                        sx={{
                                            width: 32,
                                            height: 32,
                                            ml: 1,
                                            backgroundColor:
                                                theme.palette.primary.main,
                                        }}
                                    >
                                        <PersonIcon sx={{ fontSize: 18 }} />
                                    </Avatar>
                                )}
                                <Paper
                                    sx={{
                                        p: 1.5,
                                        borderRadius: 2,
                                        backgroundColor:
                                            msg.sender === "user"
                                                ? theme.palette.primary.main
                                                : "white",
                                        color:
                                            msg.sender === "user"
                                                ? "white"
                                                : "text.primary",
                                        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                                        ...(msg.sender === "user" && {
                                            borderBottomRightRadius: 4,
                                        }),
                                        ...(msg.sender === "support" && {
                                            borderBottomLeftRadius: 4,
                                        }),
                                    }}
                                >
                                    <Typography
                                        variant="body2"
                                        sx={{ mb: 0.5 }}
                                    >
                                        {msg.content}
                                    </Typography>
                                    <Typography
                                        variant="caption"
                                        sx={{
                                            opacity: 0.7,
                                            fontSize: "0.7rem",
                                        }}
                                    >
                                        {formatTime(msg.timestamp)}
                                    </Typography>
                                </Paper>
                            </Box>
                        </Box>
                    ))}
                    <div ref={messagesEndRef} />
                </Box>

                {/* Quick Replies */}
                <Box sx={{ p: 2, backgroundColor: "white" }}>
                    <Typography
                        variant="caption"
                        color="text.secondary"
                        sx={{ mb: 1, display: "block" }}
                    >
                        Câu hỏi thường gặp:
                    </Typography>
                    <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                        {quickReplies.map((reply, index) => (
                            <Chip
                                key={index}
                                label={reply}
                                size="small"
                                onClick={() => setMessage(reply)}
                                sx={{
                                    cursor: "pointer",
                                    "&:hover": {
                                        backgroundColor:
                                            theme.palette.primary.light,
                                        color: "white",
                                    },
                                }}
                            />
                        ))}
                    </Box>
                </Box>
            </DialogContent>

            {/* Input Area */}
            <DialogActions
                sx={{
                    p: 2,
                    backgroundColor: "white",
                    borderTop: `1px solid ${theme.palette.divider}`,
                }}
            >
                <Box sx={{ display: "flex", width: "100%", gap: 1 }}>
                    <IconButton size="small" color="primary">
                        <AttachFileIcon />
                    </IconButton>
                    <IconButton size="small" color="primary">
                        <EmojiIcon />
                    </IconButton>
                    <TextField
                        fullWidth
                        variant="outlined"
                        placeholder="Nhập tin nhắn..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyPress={handleKeyPress}
                        multiline
                        maxRows={3}
                        size="small"
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                borderRadius: 3,
                            },
                        }}
                    />
                    <IconButton
                        color="primary"
                        onClick={handleSendMessage}
                        disabled={!message.trim()}
                        sx={{
                            backgroundColor: theme.palette.primary.main,
                            color: "white",
                            "&:hover": {
                                backgroundColor: theme.palette.primary.dark,
                            },
                            "&:disabled": {
                                backgroundColor: "grey.300",
                            },
                        }}
                    >
                        <SendIcon />
                    </IconButton>
                </Box>
            </DialogActions>
        </Dialog>
    );
};

export default ChatWindow;
