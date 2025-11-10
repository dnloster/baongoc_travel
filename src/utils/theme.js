import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#1976d2",
            light: "#42a5f5",
            dark: "#1565c0",
        },
        secondary: {
            main: "#dc004e",
            light: "#ff5983",
            dark: "#9a0036",
        },
        background: {
            default: "#f5f5f5",
            paper: "#ffffff",
        },
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        // Responsive typography
        h1: {
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 700,
            lineHeight: 1.2,
        },
        h2: {
            fontSize: "clamp(1.75rem, 4vw, 3rem)",
            fontWeight: 600,
            lineHeight: 1.3,
        },
        h3: {
            fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
            fontWeight: 600,
            lineHeight: 1.3,
        },
        h4: {
            fontSize: "clamp(1.25rem, 2.5vw, 2rem)",
            fontWeight: 600,
            lineHeight: 1.4,
        },
        h5: {
            fontSize: "clamp(1.1rem, 2vw, 1.5rem)",
            fontWeight: 500,
            lineHeight: 1.4,
        },
        h6: {
            fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
            fontWeight: 500,
            lineHeight: 1.4,
        },
        body1: {
            fontSize: "clamp(0.9rem, 1.2vw, 1rem)",
            lineHeight: 1.6,
        },
        body2: {
            fontSize: "clamp(0.8rem, 1vw, 0.875rem)",
            lineHeight: 1.5,
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },
    components: {
        // Customize components here
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                    borderRadius: 8,
                    fontSize: "clamp(0.85rem, 1.2vw, 1rem)",
                    padding: "8px 20px",
                    "@media (max-width:600px)": {
                        fontSize: "0.9rem",
                        padding: "10px 16px",
                    },
                },
                sizeLarge: {
                    padding: "12px 24px",
                    fontSize: "clamp(0.9rem, 1.3vw, 1.1rem)",
                    "@media (max-width:600px)": {
                        padding: "12px 20px",
                        fontSize: "1rem",
                    },
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 12,
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                },
            },
        },
        MuiContainer: {
            styleOverrides: {
                root: {
                    paddingLeft: "16px",
                    paddingRight: "16px",
                    "@media (min-width:600px)": {
                        paddingLeft: "24px",
                        paddingRight: "24px",
                    },
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    "@media (max-width:600px)": {
                        // Mobile text adjustments
                        "&.MuiTypography-h1": {
                            fontSize: "2rem",
                        },
                        "&.MuiTypography-h2": {
                            fontSize: "1.75rem",
                        },
                        "&.MuiTypography-h3": {
                            fontSize: "1.5rem",
                        },
                    },
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    "& .MuiOutlinedInput-root": {
                        borderRadius: 8,
                        fontSize: "clamp(0.85rem, 1.1vw, 1rem)",
                    },
                },
            },
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    fontSize: "clamp(0.7rem, 1vw, 0.8rem)",
                },
            },
        },
    },
});

export default theme;
