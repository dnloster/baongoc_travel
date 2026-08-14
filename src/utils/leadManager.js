// Lead Management Utilities
export const leadManager = {
    // Lưu lead mới
    saveLead: (leadData) => {
        try {
            const existingLeads = JSON.parse(
                localStorage.getItem("customer_leads") || "[]"
            );
            const newLead = {
                ...leadData,
                id: Date.now().toString(),
                timestamp: new Date().toISOString(),
                status: "new",
            };
            existingLeads.push(newLead);
            localStorage.setItem(
                "customer_leads",
                JSON.stringify(existingLeads)
            );
            return newLead;
        } catch (error) {
            console.error("Error saving lead:", error);
            return null;
        }
    },

    // Lấy tất cả leads
    getAllLeads: () => {
        try {
            return JSON.parse(localStorage.getItem("customer_leads") || "[]");
        } catch (error) {
            console.error("Error getting leads:", error);
            return [];
        }
    },

    // Lấy leads mới (chưa xử lý)
    getNewLeads: () => {
        const allLeads = leadManager.getAllLeads();
        return allLeads.filter((lead) => lead.status === "new");
    },

    // Đánh dấu lead đã xử lý
    markAsProcessed: (leadId) => {
        try {
            const allLeads = leadManager.getAllLeads();
            const updatedLeads = allLeads.map((lead) =>
                lead.id === leadId
                    ? {
                          ...lead,
                          status: "processed",
                          processedAt: new Date().toISOString(),
                      }
                    : lead
            );
            localStorage.setItem(
                "customer_leads",
                JSON.stringify(updatedLeads)
            );
            return true;
        } catch (error) {
            console.error("Error updating lead:", error);
            return false;
        }
    },

    // Xóa lead
    deleteLead: (leadId) => {
        try {
            const allLeads = leadManager.getAllLeads();
            const filteredLeads = allLeads.filter((lead) => lead.id !== leadId);
            localStorage.setItem(
                "customer_leads",
                JSON.stringify(filteredLeads)
            );
            return true;
        } catch (error) {
            console.error("Error deleting lead:", error);
            return false;
        }
    },

    // Export leads ra CSV
    exportToCsv: () => {
        const leads = leadManager.getAllLeads();
        if (leads.length === 0) return null;

        const headers = [
            "Tên",
            "Số điện thoại",
            "Thời gian",
            "Nguồn",
            "Trạng thái",
        ];
        const csvContent = [
            headers.join(","),
            ...leads.map((lead) =>
                [
                    lead.name || "",
                    lead.phone || "",
                    new Date(lead.timestamp).toLocaleString("vi-VN"),
                    lead.source || "",
                    lead.status || "new",
                ].join(",")
            ),
        ].join("\n");

        const blob = new Blob(["\uFEFF" + csvContent], {
            type: "text/csv;charset=utf-8;",
        });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = `customer_leads_${
            new Date().toISOString().split("T")[0]
        }.csv`;
        link.click();

        return true;
    },

    // Thống kê leads
    getStatistics: () => {
        const leads = leadManager.getAllLeads();
        const today = new Date().toDateString();

        return {
            total: leads.length,
            new: leads.filter((lead) => lead.status === "new").length,
            processed: leads.filter((lead) => lead.status === "processed")
                .length,
            today: leads.filter(
                (lead) => new Date(lead.timestamp).toDateString() === today
            ).length,
            thisWeek: leads.filter((lead) => {
                const leadDate = new Date(lead.timestamp);
                const weekAgo = new Date();
                weekAgo.setDate(weekAgo.getDate() - 7);
                return leadDate >= weekAgo;
            }).length,
        };
    },
};

export default leadManager;
