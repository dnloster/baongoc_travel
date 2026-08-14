import { useEffect } from "react";
import Swal from "sweetalert2";
import leadManager from "../../utils/leadManager";

const WelcomePopup = () => {
    useEffect(() => {
        const showWelcomePopup = () => {
            // Ensure responsive styles exist for the SweetAlert popup (mobile / iPad)
            const ensureResponsiveStyles = () => {
                if (document.getElementById("welcome-popup-styles")) return;
                const style = document.createElement("style");
                style.id = "welcome-popup-styles";
                style.type = "text/css";
                style.appendChild(
                    document.createTextNode(`
                    /* Container centering for all devices */
                    .swal2-container.welcome-container {
                        align-items: center !important;
                        justify-content: center !important;
                        padding: 10px !important;
                        height: 100vh !important;
                        background-color: rgba(0, 0, 0, 0.4) !important;
                    }
                    
                    /* Base popup styling - Mobile First */
                    .swal2-popup.welcome-popup { 
                        width: 95vw !important; 
                        max-width: 400px !important; 
                        box-sizing: border-box; 
                        padding: 16px !important; 
                        margin: 0 auto !important;
                        border-radius: 12px !important;
                        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15) !important;
                    }
                    
                    .swal2-popup.welcome-popup img { 
                        width: 100%; 
                        max-width: 100%; 
                        height: auto; 
                        display: block; 
                        margin: 0 auto 14px; 
                        border-radius: 10px;
                        object-fit: cover;
                    }
                    
                    .swal2-popup.welcome-popup h3 { 
                        font-size: 16px; 
                        line-height: 1.4; 
                        margin: 0 0 12px;
                        color: #333;
                        font-weight: 600;
                    }
                    
                    .swal2-popup.welcome-popup .swal2-input { 
                        width: 100% !important; 
                        box-sizing: border-box; 
                        padding: 10px 12px !important; 
                        font-size: 14px !important;
                        border: 1px solid #ddd !important;
                        border-radius: 6px !important;
                        margin-bottom: 10px !important;
                    }
                    
                    .swal2-popup.welcome-popup .swal2-input:focus { 
                        outline: none !important;
                        border-color: #ff9500 !important;
                        box-shadow: 0 0 0 3px rgba(255, 149, 0, 0.1) !important;
                    }
                    
                    .swal2-popup.welcome-popup .swal2-actions { 
                        display: flex; 
                        gap: 10px; 
                        justify-content: center;
                        flex-wrap: wrap;
                        margin-top: 16px !important;
                    }
                    
                    .swal2-popup.welcome-popup .swal2-confirm,
                    .swal2-popup.welcome-popup .swal2-cancel {
                        flex: 1;
                        min-width: 140px;
                        font-weight: 600;
                        border-radius: 6px !important;
                        padding: 10px 16px !important;
                        font-size: 13px !important;
                    }
                    
                    /* Small phones (320px - 480px) */
                    @media (max-width: 480px) {
                        .swal2-popup.welcome-popup { 
                            width: 92vw !important; 
                            max-width: 350px !important; 
                            padding: 14px !important;
                        }
                        
                        .swal2-popup.welcome-popup h3 { 
                            font-size: 15px;
                            margin-bottom: 10px;
                        }
                        
                        .swal2-popup.welcome-popup .swal2-input { 
                            padding: 9px 10px !important; 
                            font-size: 13px !important;
                            margin-bottom: 8px !important;
                        }
                        
                        .swal2-popup.welcome-popup .swal2-actions {
                            flex-direction: column;
                            gap: 8px;
                            margin-top: 12px !important;
                        }
                        
                        .swal2-popup.welcome-popup .swal2-confirm,
                        .swal2-popup.welcome-popup .swal2-cancel {
                            width: 100% !important;
                            min-width: unset !important;
                        }
                        
                        .swal2-container.welcome-container {
                            padding: 8px !important;
                        }
                    }
                    
                    /* Tablets and larger phones (481px - 768px) */
                    @media (min-width: 481px) and (max-width: 768px) {
                        .swal2-popup.welcome-popup { 
                            max-width: 480px !important; 
                            padding: 18px !important;
                        }
                        
                        .swal2-popup.welcome-popup h3 { 
                            font-size: 17px;
                            margin-bottom: 12px;
                        }
                        
                        .swal2-popup.welcome-popup .swal2-input { 
                            padding: 11px 12px !important; 
                            font-size: 14px !important;
                        }
                        
                        .swal2-container.welcome-container {
                            padding: 16px !important;
                        }
                    }
                    
                    /* iPad and medium tablets (769px - 1024px) */
                    @media (min-width: 769px) and (max-width: 1024px) {
                        .swal2-popup.welcome-popup { 
                            max-width: 550px !important; 
                            padding: 20px !important;
                        }
                        
                        .swal2-popup.welcome-popup h3 { 
                            font-size: 18px;
                            margin-bottom: 14px;
                        }
                        
                        .swal2-popup.welcome-popup .swal2-input { 
                            padding: 11px 14px !important; 
                            font-size: 15px !important;
                        }
                        
                        .swal2-container.welcome-container {
                            padding: 24px !important;
                        }
                    }
                    
                    /* Desktop (1025px+) */
                    @media (min-width: 1025px) {
                        .swal2-popup.welcome-popup { 
                            max-width: 600px !important; 
                            padding: 24px !important;
                        }
                        
                        .swal2-popup.welcome-popup h3 { 
                            font-size: 20px;
                            margin-bottom: 16px;
                        }
                        
                        .swal2-popup.welcome-popup .swal2-input { 
                            padding: 12px 16px !important; 
                            font-size: 15px !important;
                        }
                        
                        .swal2-popup.welcome-popup .swal2-actions {
                            gap: 12px;
                        }
                        
                        .swal2-container.welcome-container {
                            padding: 32px !important;
                        }
                    }
                    
                    /* Landscape orientation adjustments */
                    @media (max-height: 600px) and (orientation: landscape) {
                        .swal2-popup.welcome-popup {
                            max-height: 90vh !important;
                            overflow-y: auto !important;
                        }
                        
                        .swal2-popup.welcome-popup img {
                            max-height: 30vh;
                        }
                    }
                `)
                );
                document.head.appendChild(style);
            };

            ensureResponsiveStyles();

            Swal.fire({
                title: "",
                html: `
                    <div style="text-align: center; padding: 0;">
                        <img src="/logo JPG/logo-ngang.jpg" alt="Bảo Ngọc Travel" style="width: 100%; height: auto; margin-bottom: 14px; border-radius: 10px;" />
                        <h3 style="color: #333; margin: 0 0 12px; font-weight: 600; font-size: clamp(15px, 4vw, 20px); line-height: 1.4;">
                            Hãy để lại số điện thoại, chúng tôi sẽ gọi lại cho bạn sau ít phút!
                        </h3>
                        <div style="margin: 16px 0;">
                            <input 
                                id="swal-input1" 
                                class="swal2-input" 
                                placeholder="Liên hệ"
                                style="margin-bottom: 10px;"
                            >
                            <input 
                                id="swal-input2" 
                                class="swal2-input" 
                                placeholder="Số điện thoại của tôi là"
                                type="tel"
                            >
                        </div>
                    </div>
                `,
                showCancelButton: true,
                confirmButtonText: "YÊU CẦU GỌI LẠI",
                cancelButtonText: "Để sau",
                confirmButtonColor: "#ff9500",
                cancelButtonColor: "#6c757d",
                backdrop: "rgba(0, 0, 0, 0.4)",
                allowOutsideClick: true,
                allowEscapeKey: true,
                focusConfirm: false,
                didOpen: (modal) => {
                    // Auto-focus first input on mobile
                    const firstInput = modal.querySelector("#swal-input1");
                    if (firstInput && window.innerWidth < 768) {
                        setTimeout(() => firstInput.focus(), 100);
                    }
                },
                customClass: {
                    container: "welcome-container",
                    popup: "welcome-popup",
                    confirmButton: "welcome-confirm-btn",
                    cancelButton: "welcome-cancel-btn",
                    closeButton: "welcome-close-btn",
                },
                preConfirm: () => {
                    const name = document.getElementById("swal-input1").value;
                    const phone = document.getElementById("swal-input2").value;

                    if (!name || !phone) {
                        Swal.showValidationMessage(
                            "Vui lòng điền đầy đủ thông tin"
                        );
                        return false;
                    }

                    if (!/^[0-9+\-\s()]+$/.test(phone)) {
                        Swal.showValidationMessage(
                            "Số điện thoại không hợp lệ"
                        );
                        return false;
                    }

                    return { name: name, phone: phone };
                },
            }).then((result) => {
                if (result.isConfirmed) {
                    // Hiển thị thông báo thành công
                    Swal.fire({
                        icon: "success",
                        title: "Cảm ơn bạn!",
                        text: "Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.",
                        confirmButtonColor: "#ff9500",
                        timer: 3000,
                        timerProgressBar: true,
                    });

                    // Lưu thông tin vào localStorage sử dụng leadManager
                    const customerData = {
                        name: result.value.name,
                        phone: result.value.phone,
                        source: "welcome_popup",
                    };

                    const savedLead = leadManager.saveLead(customerData);
                    console.log("Đã lưu lead:", savedLead);

                    // TODO: Gửi data lên server/API
                    // fetch('/api/leads', {
                    //     method: 'POST',
                    //     headers: { 'Content-Type': 'application/json' },
                    //     body: JSON.stringify(customerData)
                    // });
                }
            });
        };

        const showLeadsPanel = () => {
            const leads = leadManager.getAllLeads();
            const stats = leadManager.getStatistics();

            let leadsHtml = `
                <div style="text-align: left;">
                    <h4>📊 Thống kê Leads</h4>
                    <p><strong>Tổng số:</strong> ${stats.total} | <strong>Mới:</strong> ${stats.new} | <strong>Hôm nay:</strong> ${stats.today}</p>
                    <hr>
                    <h4>📞 Danh sách khách hàng (${leads.length} leads)</h4>
                    <div style="max-height: 400px; overflow-y: auto;">
            `;

            if (leads.length === 0) {
                leadsHtml += "<p>Chưa có khách hàng nào.</p>";
            } else {
                leads
                    .slice(-10)
                    .reverse()
                    .forEach((lead) => {
                        leadsHtml += `
                        <div style="border: 1px solid #ddd; padding: 10px; margin: 5px 0; border-radius: 5px; background: ${
                            lead.status === "new" ? "#f0f8f0" : "#f8f8f8"
                        }">
                            <strong>${lead.name}</strong><br/>
                            📱 ${lead.phone}<br/>
                            ⏰ ${new Date(lead.timestamp).toLocaleString(
                                "vi-VN"
                            )}<br/>
                            🏷️ ${lead.source} | ${
                            lead.status === "new" ? "🟢 Mới" : "✅ Đã xử lý"
                        }
                        </div>
                    `;
                    });
            }

            leadsHtml += "</div></div>";

            Swal.fire({
                title: "Admin Panel - Customer Leads",
                html: leadsHtml,
                width: "600px",
                showCancelButton: true,
                confirmButtonText: "Export CSV",
                cancelButtonText: "Đóng",
                confirmButtonColor: "#28a745",
                preConfirm: () => {
                    leadManager.exportToCsv();
                },
            });
        };

        // Kiểm tra xem popup đã được hiển thị chưa (trong session hiện tại)
        const popupShown = sessionStorage.getItem("welcomePopupShown");
        if (!popupShown) {
            // Delay 1 giây để trang load hoàn toàn
            const timer = setTimeout(() => {
                showWelcomePopup();
                sessionStorage.setItem("welcomePopupShown", "true");
            }, 1000);

            return () => clearTimeout(timer);
        }

        // Admin shortcut: Nhấn Ctrl+Shift+L để xem leads
        const handleKeyPress = (event) => {
            if (event.ctrlKey && event.shiftKey && event.key === "L") {
                event.preventDefault();
                showLeadsPanel();
            }
        };

        document.addEventListener("keydown", handleKeyPress);

        return () => {
            document.removeEventListener("keydown", handleKeyPress);
        };
    }, []);

    // Component này không render gì, chỉ xử lý logic popup
    return null;
};

export default WelcomePopup;
