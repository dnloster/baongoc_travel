export const TOUR_IMAGES = {
    kunming:
        "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?auto=format&fit=crop&w=1600&q=80",
    snow: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80",
    dali: "https://images.unsplash.com/photo-1474181487882-5abf3f0ba6c2?auto=format&fit=crop&w=1600&q=80",
    lijiang:
        "https://images.unsplash.com/photo-1513415564515-763d91423f88?auto=format&fit=crop&w=1600&q=80",
    shangrila:
        "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1600&q=80",
    village:
        "https://images.unsplash.com/photo-1528183429752-a97d0bf99ee4?auto=format&fit=crop&w=1600&q=80",
    flowers:
        "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1600&q=80",
    hekou: "https://images.unsplash.com/photo-1578662996442-48f50103eca2?auto=format&fit=crop&w=1600&q=80",
    night: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1600&q=80",
    ancient:
        "https://images.unsplash.com/photo-1529921879218-f995fed8ddc4?auto=format&fit=crop&w=1600&q=80",
    nanning:
        "https://images.unsplash.com/photo-1513415756790-2ac1db1297d0?auto=format&fit=crop&w=1600&q=80",
    park: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1600&q=80",
};

export const TOUR_CATEGORIES = [
    "Vân Nam",
    "Hồng Hà",
    "Hà Khẩu",
    "Quảng Tây",
];

export const TOURS = [
    {
        id: "con-minh-kieu-tu-vuong-quoc-ti-hon",
        title: "Côn Minh – Núi Tuyết Kiệu Tử – Vương Quốc Tí Hon",
        description:
            "Tour no shopping 4 ngày 4 đêm: tàu cao tốc Hà Khẩu – Côn Minh, cáp treo Núi Tuyết Kiệu Tử, Vương Quốc Tí Hon và hồ Điền Trì.",
        image: TOUR_IMAGES.snow,
        price: null,
        duration: "4 ngày 4 đêm",
        location: "Côn Minh",
        departure: "Hà Nội – Lào Cai",
        category: "Vân Nam",
        transport: "Tàu cao tốc + Ô tô",
        noShopping: true,
        rating: 4.8,
        highlights: [
            "Tour no shopping",
            "Tặng vé cáp treo khứ hồi Núi Tuyết Kiệu Tử",
            "Vương Quốc Tí Hon – điểm tham quan độc quyền",
            "Tặng show biểu diễn nghệ sĩ tí hon",
            "Nâng cấp 1 bữa lẩu nấm tự nhiên Côn Minh",
            "3 đêm khách sạn trung tâm thành phố",
        ],
        itinerary: [
            {
                day: "Ngày 0",
                title: "Hà Nội – Lào Cai",
                meals: "",
                stay: "Trên xe",
                content:
                    "23h00 xe đón tại điểm tập trung, khởi hành đi cửa khẩu Lào Cai.",
            },
            {
                day: "Ngày 1",
                title: "Hà Khẩu – Côn Minh – Cổ trấn Quan Độ",
                meals: "Trưa, tối",
                stay: "Côn Minh",
                content:
                    "Làm thủ tục cửa khẩu Lào Cai – Hà Khẩu, tàu C560 Hà Khẩu – Côn Minh. Buổi tối khám phá cổ trấn Quan Độ.",
            },
            {
                day: "Ngày 2",
                title: "Núi Tuyết Kiệu Tử",
                meals: "Sáng, trưa, tối",
                stay: "Côn Minh",
                content:
                    "Tham quan Kiệu Tử Sơn cấp 4A, cáp treo lên 3.850m. Tối gợi ý phố đi bộ Song Kiều.",
            },
            {
                day: "Ngày 3",
                title: "Hồ Điền Trì – Vương Quốc Tí Hon",
                meals: "Sáng, trưa",
                stay: "Côn Minh",
                content:
                    "Ngắm hải âu hồ Điền Trì, lẩu nấm tự nhiên, tham quan Vương Quốc Tí Hon. Tối tự do Kim Mã Bích Kê / chợ đêm Nam Cường.",
            },
            {
                day: "Ngày 4",
                title: "Côn Minh – Hà Khẩu – Hà Nội",
                meals: "Sáng, trưa, tối",
                stay: "",
                content:
                    "Check-in phố Văn Lâm (hoặc Đại Quan Lầu), tàu C562 về Hà Khẩu, nhập cảnh Việt Nam. Tặng bữa tối cơm quê tại Lào Cai.",
            },
        ],
        included: [
            "Thuế VAT, xe giường nằm Hà Nội – Lào Cai khứ hồi",
            "Tàu cao tốc Hà Khẩu – Côn Minh – Hà Khẩu",
            "Visa đoàn và lệ phí xuất nhập cảnh hai nước",
            "Khách sạn 4 sao trung tâm, 2–3 người/phòng",
            "Vé vào cửa các điểm trong chương trình, cáp treo Kiệu Tử Sơn",
            "Show Vương Quốc Tí Hon, HDV, bảo hiểm, nước lọc, mũ du lịch",
        ],
        excluded: [
            "Chi tiêu cá nhân, đồ uống ngoài menu",
            "Tip HDV và lái xe: 5 USD/khách/ngày",
            "Phụ thu phòng đơn",
        ],
    },
    {
        id: "binh-bien-di-lac-kien-thuy-mong-tu",
        title: "Bình Biên – Di Lặc – Khai Viễn – Mông Tự – Kiến Thủy",
        description:
            "Hành trình 4 ngày 4 đêm Châu Hồng Hà: Miêu Trại Tích Thủy, Đông Phong Vận, tiểu trấn Bún Qua Cầu và thành cổ Kiến Thủy.",
        image: TOUR_IMAGES.flowers,
        price: null,
        duration: "4 ngày 4 đêm",
        location: "Mông Tự – Kiến Thủy",
        departure: "Hà Nội – Lào Cai",
        category: "Hồng Hà",
        transport: "Ô tô",
        noShopping: false,
        rating: 4.6,
        highlights: [
            "Đông Phong Vận – lâu đài ma thuật tương lai",
            "Làng Miêu Tích Thủy – Tiểu Phượng Hoàng cổ trấn",
            "Thưởng thức bún qua cầu Mông Tự",
            "Thành cổ Kiến Thủy, Phố cổ Lâm An, Tiểu Thiên An Môn",
            "Tặng bữa tối cơm quê ngày cuối",
        ],
        itinerary: [
            {
                day: "Ngày 0",
                title: "Hà Nội – Lào Cai",
                meals: "",
                stay: "Trên xe",
                content:
                    "23h00 xe đón tại điểm tập trung, khởi hành cửa khẩu Lào Cai.",
            },
            {
                day: "Ngày 1",
                title: "Hà Khẩu – Bình Biên – Di Lặc",
                meals: "Trưa, tối",
                stay: "Di Lặc",
                content:
                    "Xuất cảnh Hà Khẩu, tham quan Làng Miêu Tích Thủy, về Di Lặc. Tối làng Thủy Hương Hồng Hà, tắm khoáng nóng tại khách sạn.",
            },
            {
                day: "Ngày 2",
                title: "Di Lặc – Khai Viễn",
                meals: "Sáng, trưa, tối",
                stay: "Khai Viễn",
                content:
                    "Đông Phong Vận, trang trại rượu vang, công viên hồ Thái Bình, công viên sinh thái Phượng Hoàng. Tối chợ đêm Khai Viễn.",
            },
            {
                day: "Ngày 3",
                title: "Mông Tự – Kiến Thủy",
                meals: "Sáng, trưa, tối",
                stay: "Kiến Thủy",
                content:
                    "Chu Tử Lầu, tiểu trấn Bún Qua Cầu, Bối Sơn Đào Trang. Tối phố Tử Đào Kiến Thủy.",
            },
            {
                day: "Ngày 4",
                title: "Kiến Thủy – Hà Khẩu",
                meals: "Sáng, trưa, tối",
                stay: "",
                content:
                    "Phố cổ Lâm An, Chu Gia Hoa Viên, Thành Triều Dương. Về Hà Khẩu, tặng bữa tối cơm quê Lào Cai.",
            },
        ],
        included: [
            "Xe giường nằm Hà Nội – Lào Cai, xe ô tô bên Trung Quốc",
            "Khách sạn 3–4 sao, vé tham quan, bữa ăn theo chương trình",
            "Sổ thông hành, lệ phí xuất nhập cảnh, HDV, bảo hiểm",
        ],
        excluded: [
            "Chi phí cá nhân, phụ thu phòng đơn, tip HDV/lái xe",
        ],
    },
    {
        id: "dai-ly-con-minh-santorini",
        title: "Đại Lý – Côn Minh – Santorini",
        description:
            "Tour no shopping 4N4Đ: thành cổ Đại Lý, Santorini bên hồ Nhĩ Hải, Hỷ Châu cổ trấn và hồ Điền Trì Côn Minh.",
        image: TOUR_IMAGES.dali,
        price: null,
        duration: "4 ngày 4 đêm",
        location: "Đại Lý – Côn Minh",
        departure: "Hà Nội – Lào Cai",
        category: "Vân Nam",
        transport: "Tàu + Ô tô",
        noShopping: true,
        rating: 4.7,
        highlights: [
            "Tour no shopping",
            "Santorini bên hồ Nhĩ Hải – tặng set trà chiều",
            "Hỷ Châu cổ trấn, cung đường chữ S hồ Nhĩ Hải",
            "Phương Dương Áp thôn – làng dân tộc Bạch",
            "Lẩu nấm tự nhiên Côn Minh",
        ],
        itinerary: [
            {
                day: "Ngày 0",
                title: "Hà Nội – Lào Cai",
                meals: "",
                stay: "Trên xe",
                content: "23h00 khởi hành cửa khẩu Lào Cai.",
            },
            {
                day: "Ngày 1",
                title: "Hà Khẩu – Đại Lý",
                meals: "Trưa, tối",
                stay: "Đại Lý",
                content:
                    "Tàu Hà Khẩu – Đại Lý. Tối tự do khám phá thành cổ Đại Lý.",
            },
            {
                day: "Ngày 2",
                title: "Santorini – Hỷ Châu – Hồ Nhĩ Hải",
                meals: "Sáng, trưa, tối",
                stay: "Đại Lý",
                content:
                    "Santorini (tặng trà chiều), Hỷ Châu cổ trấn, đạp xe hồ Nhĩ Hải, Phương Dương Áp thôn.",
            },
            {
                day: "Ngày 3",
                title: "Đại Lý – Côn Minh",
                meals: "Sáng, trưa",
                stay: "Côn Minh",
                content:
                    "Chợ sỉ ốc, Quảng trường 1903. Tối gợi ý Kim Mã Bích Kê / chợ đêm Nam Cường.",
            },
            {
                day: "Ngày 4",
                title: "Hồ Điền Trì – Hà Khẩu",
                meals: "Sáng, trưa",
                stay: "",
                content:
                    "Hồ Điền Trì, lẩu nấm, tàu Côn Minh – Hà Khẩu, về Hà Nội.",
            },
        ],
        included: [
            "VAT, xe giường nằm, tàu cao tốc Hà Khẩu – Đại Lý và Côn Minh – Hà Khẩu",
            "Visa đoàn, khách sạn 4 sao, xe ô tô, vé tham quan, HDV, bảo hiểm",
        ],
        excluded: ["Chi tiêu cá nhân, tip, phụ thu phòng đơn"],
    },
    {
        id: "dai-ly-le-giang-con-minh",
        title: "Đại Lý – Lệ Giang – Côn Minh",
        description:
            "Tour no shopping 5N5Đ: hồ Nhĩ Hải, Núi Tuyết Ngọc Long, show Ấn tượng Lệ Giang và cổ trấn Lệ Giang.",
        image: TOUR_IMAGES.lijiang,
        price: null,
        duration: "5 ngày 5 đêm",
        location: "Đại Lý – Lệ Giang",
        departure: "Hà Nội – Lào Cai",
        category: "Vân Nam",
        transport: "Tàu + Ô tô",
        noShopping: true,
        rating: 4.9,
        highlights: [
            "Tour no shopping",
            "Núi Tuyết Ngọc Long – cáp treo Vân Tam Bình 3.200m",
            "Vé show Ấn tượng Lệ Giang (Trương Nghệ Mưu)",
            "Cổ trấn Lệ Giang / Công viên Hắc Long Đàm",
            "Lẩu gà thảo dược Lệ Giang",
        ],
        itinerary: [
            {
                day: "Ngày 0",
                title: "Hà Nội – Lào Cai",
                meals: "",
                stay: "Trên xe",
                content: "23h00 khởi hành cửa khẩu Lào Cai.",
            },
            {
                day: "Ngày 1",
                title: "Hà Khẩu – Đại Lý",
                meals: "Trưa, tối",
                stay: "Đại Lý",
                content: "Tàu đến Đại Lý, tối tự do thành cổ.",
            },
            {
                day: "Ngày 2",
                title: "Hồ Nhĩ Hải – Santorini – Sa Khê – Lệ Giang",
                meals: "Sáng, trưa, tối",
                stay: "Lệ Giang",
                content:
                    "Hồ Nhĩ Hải, Santorini, Sa Khê cổ trấn. Chiều di chuyển Lệ Giang.",
            },
            {
                day: "Ngày 3",
                title: "Ngọc Long – Lam Nguyệt Cốc – Ấn tượng Lệ Giang",
                meals: "Sáng, trưa",
                stay: "Lệ Giang",
                content:
                    "Cáp treo Núi Tuyết Ngọc Long, Lam Nguyệt Cốc – Bạch Thủy Hà, show Ấn tượng Lệ Giang.",
            },
            {
                day: "Ngày 4",
                title: "Cổ trấn Lệ Giang – Côn Minh",
                meals: "Sáng, trưa, tối",
                stay: "Côn Minh",
                content:
                    "Hắc Long Đàm hoặc thành cổ Lệ Giang, lẩu gà thảo dược, tàu C456 về Côn Minh.",
            },
            {
                day: "Ngày 5",
                title: "Hồ Điền Trì – Hà Khẩu",
                meals: "Sáng, trưa",
                stay: "",
                content: "Hồ Điền Trì, tàu Côn Minh – Hà Khẩu, về Hà Nội.",
            },
        ],
        included: [
            "VAT, xe giường nằm, tàu cao tốc, visa đoàn, khách sạn 4 sao",
            "Vé cáp treo Vân Tam Bình, vé show Ấn tượng Lệ Giang",
            "Vé tham quan, HDV, bảo hiểm",
        ],
        excluded: [
            "Cáp treo 4.500m (phụ thu 130 tệ, đăng ký trước 10 ngày)",
            "Chi tiêu cá nhân, tip, phòng đơn",
        ],
    },
    {
        id: "dai-ly-shangrila-le-giang-con-minh",
        title: "Đại Lý – Shangrila – Lệ Giang – Côn Minh",
        description:
            "Tour no shopping 6N6Đ xuyên Vân Nam: Shangrila, tu viện Tùng Tán Lâm, Núi Tuyết Ngọc Long và cổ trấn Lệ Giang.",
        image: TOUR_IMAGES.shangrila,
        price: null,
        duration: "6 ngày 6 đêm",
        location: "Shangrila – Lệ Giang",
        departure: "Hà Nội – Lào Cai",
        category: "Vân Nam",
        transport: "Ô tô + Tàu cao tốc",
        noShopping: true,
        rating: 4.9,
        highlights: [
            "Tour no shopping",
            "Tu viện Tùng Tán Lâm – Potala thu nhỏ",
            "Thảo nguyên Na Pháp Hải, thành cổ Dukezong",
            "Lẩu bò Yak Shangrila, lẩu gà thảo dược Lệ Giang",
            "Show Ấn tượng Lệ Giang",
        ],
        itinerary: [
            {
                day: "Ngày 0",
                title: "Hà Nội – Lào Cai",
                meals: "",
                stay: "Trên xe",
                content: "23h00 khởi hành cửa khẩu Lào Cai.",
            },
            {
                day: "Ngày 1",
                title: "Hà Khẩu – Đại Lý",
                meals: "Trưa, tối",
                stay: "Đại Lý",
                content: "Tàu đến Đại Lý, tối thành cổ Đại Lý.",
            },
            {
                day: "Ngày 2",
                title: "Hồ Nhĩ Hải – Sa Khê – Shangrila",
                meals: "Sáng, trưa, tối",
                stay: "Shangrila",
                content:
                    "Hồ Nhĩ Hải, Sa Khê cổ trấn. Chiều đến Shangrila, thưởng thức lẩu bò Yak.",
            },
            {
                day: "Ngày 3",
                title: "Tùng Tán Lâm – Dukezong – Lệ Giang",
                meals: "Sáng, trưa, tối",
                stay: "Lệ Giang",
                content:
                    "Tu viện Tùng Tán Lâm, Na Pháp Hải, thành cổ Dukezong, xưởng bò Yak. Tối cổ trấn Lệ Giang.",
            },
            {
                day: "Ngày 4",
                title: "Núi Tuyết Ngọc Long – Ấn tượng Lệ Giang",
                meals: "Sáng, trưa",
                stay: "Lệ Giang",
                content:
                    "Cáp treo Ngọc Long, Lam Nguyệt Cốc – Bạch Thủy Hà, show Ấn tượng Lệ Giang.",
            },
            {
                day: "Ngày 5",
                title: "Lệ Giang – Côn Minh",
                meals: "Sáng, trưa, tối",
                stay: "Côn Minh",
                content:
                    "Hắc Long Đàm / cổ trấn Lệ Giang, tàu về Côn Minh, Quảng trường 1903, Kim Mã Bích Kê.",
            },
            {
                day: "Ngày 6",
                title: "Hồ Điền Trì – Hà Khẩu",
                meals: "Sáng, trưa",
                stay: "",
                content: "Hồ Điền Trì, tàu Côn Minh – Hà Khẩu, về Hà Nội.",
            },
        ],
        included: [
            "VAT, xe giường nằm, tàu cao tốc, visa đoàn, khách sạn 4 sao",
            "Vé tham quan, cáp treo Vân Tam Bình, show Ấn tượng Lệ Giang",
            "HDV, bảo hiểm",
        ],
        excluded: ["Cáp treo 4.500m, chi tiêu cá nhân, tip, phòng đơn"],
    },
    {
        id: "binh-bien-mong-tu-2n1d",
        title: "Bình Biên – Mông Tự",
        description:
            "Tour 2 ngày 1 đêm: Miêu Trại Tích Thủy, Chu Tử Lầu, bún qua cầu và cổ trấn Bún. Khởi hành thứ 7 hàng tuần.",
        image: TOUR_IMAGES.village,
        price: null,
        duration: "2 ngày 1 đêm",
        location: "Bình Biên – Mông Tự",
        departure: "Lào Cai",
        category: "Hồng Hà",
        transport: "Ô tô",
        noShopping: false,
        rating: 4.5,
        departureNote: "Khởi hành thứ 7 hàng tuần",
        highlights: [
            "Miêu Trại Tích Thủy – Tiểu Phượng Hoàng cổ trấn",
            "Thưởng thức bún qua cầu Mông Tự",
            "Chu Tử Lầu và cổ trấn Bún",
        ],
        itinerary: [
            {
                day: "Ngày 1",
                title: "Lào Cai – Hà Khẩu – Bình Biên",
                meals: "Trưa, tối",
                stay: "Bình Biên",
                content:
                    "Xuất cảnh Hà Khẩu, tham quan Miêu Trại Tích Thủy, nhận phòng Bình Biên.",
            },
            {
                day: "Ngày 2",
                title: "Bình Biên – Mông Tự – Hà Khẩu",
                meals: "Sáng, trưa",
                stay: "",
                content:
                    "Trung tâm tơ lụa, bún qua cầu, Chu Tử Lầu, cổ trấn Bún. Về cửa khẩu Lào Cai.",
            },
        ],
        included: [
            "Sổ thông hành, khách sạn 3–4 sao (2 khách/phòng)",
            "Bữa ăn theo chương trình, xe ô tô, vé tham quan, HDV, bảo hiểm",
        ],
        excluded: ["VAT, tip 20 tệ/người/ngày, phụ thu phòng đơn, chi phí cá nhân"],
    },
    {
        id: "di-lac-kien-thuy-mong-tu-binh-bien",
        title: "Di Lặc – Kiến Thủy – Mông Tự – Bình Biên",
        description:
            "Tour 3 ngày 3 đêm Châu Hồng Hà: hồ Thái Bình, làng Thủy Hương Hồng Hà, thành cổ Kiến Thủy và cầu Song Long. Khởi hành thứ 6 hàng tuần.",
        image: TOUR_IMAGES.ancient,
        price: null,
        duration: "3 ngày 3 đêm",
        location: "Di Lặc – Kiến Thủy",
        departure: "Hà Nội – Lào Cai",
        category: "Hồng Hà",
        transport: "Ô tô",
        noShopping: false,
        rating: 4.6,
        departureNote: "Khởi hành thứ 6 hàng tuần",
        highlights: [
            "Tắm khoáng nóng khách sạn Di Lặc",
            "Làng Thủy Hương Hồng Hà – Tiểu Ô Trấn",
            "Thành cổ Kiến Thủy, Tiểu Thiên An Môn",
            "Cầu Song Long 17 nhịp",
        ],
        itinerary: [
            {
                day: "Ngày 0",
                title: "Hà Nội – Lào Cai",
                meals: "",
                stay: "Trên xe",
                content: "23h00 khởi hành cửa khẩu Lào Cai.",
            },
            {
                day: "Ngày 1",
                title: "Hà Khẩu – Bình Biên – Di Lặc",
                meals: "Trưa, tối",
                stay: "Di Lặc",
                content:
                    "Miêu Trại Tích Thủy, làng Thủy Hương Hồng Hà, tắm khoáng nóng Di Lặc.",
            },
            {
                day: "Ngày 2",
                title: "Di Lặc – Mông Tự – Kiến Thủy",
                meals: "Sáng, trưa",
                stay: "Kiến Thủy",
                content:
                    "Hồ Thái Bình, Chu Tử Lầu. Tối phố Tử Đào Kiến Thủy.",
            },
            {
                day: "Ngày 3",
                title: "Kiến Thủy – Hà Khẩu",
                meals: "Sáng, trưa",
                stay: "",
                content:
                    "Phố cổ Lâm An, Chu Gia Hoa Viên, Tiểu Thiên An Môn, cầu Song Long. Về Lào Cai.",
            },
        ],
        included: [
            "VAT, xe giường nằm, khách sạn 3–4 sao, vé tham quan",
            "Tặng vé tắm khoáng nóng Di Lặc, sổ thông hành, HDV, bảo hiểm",
        ],
        excluded: ["Phòng đơn, tip 3 USD/khách/ngày, xe điện hồ Thái Bình"],
    },
    {
        id: "ha-khau-1n",
        title: "Hà Khẩu trong ngày",
        description:
            "Tour 1 ngày cửa khẩu: công viên Sơn Lâm, siêu thị lòng đất Phúc Tín, ga tàu 1903 và tự do mua sắm Hà Khẩu.",
        image: TOUR_IMAGES.hekou,
        price: null,
        duration: "1 ngày",
        location: "Hà Khẩu",
        departure: "Lào Cai",
        category: "Hà Khẩu",
        transport: "Xe điện",
        noShopping: false,
        rating: 4.4,
        highlights: [
            "Công viên Sơn Lâm nhìn sang Lào Cai",
            "Siêu thị lòng đất Phúc Tín",
            "Ga tàu cũ Hà Khẩu 1903",
            "Xe điện 5 tiếng/người",
        ],
        itinerary: [
            {
                day: "Trong ngày",
                title: "Lào Cai – Hà Khẩu – Lào Cai",
                meals: "Tự túc",
                stay: "",
                content:
                    "Xuất cảnh Hà Khẩu, nhận xe điện. Tham quan công viên Sơn Lâm, siêu thị Phúc Tín, ga tàu 1903. Tự do ẩm thực và mua sắm, xuất cảnh về Việt Nam.",
            },
        ],
        included: [
            "Sổ thông hành, lệ phí xuất nhập cảnh, HDV đón tiễn",
            "Bảo hiểm, xe điện Hà Khẩu 5 tiếng/người",
        ],
        excluded: ["VAT, chi tiêu cá nhân, cảnh điểm tự phí"],
    },
    {
        id: "ha-khau-2n1d",
        title: "Hà Khẩu 2 ngày 1 đêm",
        description:
            "Nghỉ đêm Hà Khẩu: ga tàu 1903, công viên Ánh Sáng, siêu thị lòng đất và Quảng trường Bắc Sơn.",
        image: TOUR_IMAGES.night,
        price: null,
        duration: "2 ngày 1 đêm",
        location: "Hà Khẩu",
        departure: "Lào Cai",
        category: "Hà Khẩu",
        transport: "Xe điện",
        noShopping: false,
        rating: 4.5,
        highlights: [
            "Nghỉ khách sạn Hà Khẩu",
            "Ga tàu cũ 1903, công viên Ánh Sáng",
            "Quảng trường Bắc Sơn – viên ngọc cửa khẩu",
            "Xe điện 24 giờ",
        ],
        itinerary: [
            {
                day: "Ngày 1",
                title: "Lào Cai – Hà Khẩu",
                meals: "Tối",
                stay: "Hà Khẩu",
                content:
                    "Nhận phòng, công viên Ánh Sáng, siêu thị lòng đất, ga tàu 1903. Tối lẩu nấm và phố đêm Hà Khẩu.",
            },
            {
                day: "Ngày 2",
                title: "Quảng trường Bắc Sơn – về Lào Cai",
                meals: "Tự túc",
                stay: "",
                content:
                    "Quảng trường Bắc Sơn, shopping khu đồng giá 3–6–10 NDT, xuất cảnh về Việt Nam.",
            },
        ],
        included: [
            "Sổ thông hành, HDV đón tiễn, khách sạn 2 người/phòng",
            "Bảo hiểm, xe điện 24 giờ/người",
        ],
        excluded: ["VAT, chi tiêu cá nhân, phụ thu phòng đơn"],
    },
    {
        id: "mong-tu-kien-thuy-2n1d",
        title: "Mông Tự – Kiến Thủy",
        description:
            "Tour 2 ngày 1 đêm: thành cổ Kiến Thủy, Tiểu Thiên An Môn, bún qua cầu và Chu Tử Lầu. Khởi hành thứ 7 hàng tuần.",
        image: TOUR_IMAGES.kunming,
        price: null,
        duration: "2 ngày 1 đêm",
        location: "Mông Tự – Kiến Thủy",
        departure: "Lào Cai",
        category: "Hồng Hà",
        transport: "Ô tô",
        noShopping: false,
        rating: 4.5,
        departureNote: "Khởi hành thứ 7 hàng tuần",
        highlights: [
            "Chu Gia Hoa Viên, Tiểu Thiên An Môn",
            "Chợ đêm phố Tử Đào",
            "Bún qua cầu và Chu Tử Lầu",
        ],
        itinerary: [
            {
                day: "Ngày 1",
                title: "Hà Khẩu – Kiến Thủy",
                meals: "Trưa",
                stay: "Kiến Thủy",
                content:
                    "Chu Gia Hoa Viên, phố Minh Thanh, Triều Dương Lầu. Tối tự do chợ đêm phố Tử Đào.",
            },
            {
                day: "Ngày 2",
                title: "Kiến Thủy – Mông Tự – Hà Khẩu",
                meals: "Sáng, trưa",
                stay: "",
                content:
                    "Tơ lụa Vân Nam, bún qua cầu, Chu Tử Lầu, cổ trấn Bún. Về cửa khẩu Lào Cai.",
            },
        ],
        included: [
            "Sổ thông hành, khách sạn 3–4 sao, bữa ăn theo chương trình",
            "Xe ô tô, vé tham quan, HDV, bảo hiểm",
        ],
        excluded: ["VAT, tip, phòng đơn, chi phí cá nhân"],
    },
    {
        id: "nam-ninh-thai-binh-co-tran",
        title: "Nam Ninh – Thái Bình Cổ Trấn – Thanh Tú Sơn",
        description:
            "Tour no shopping 3N2Đ qua Hữu Nghị Quan: Thái Bình cổ trấn, Thanh Tú Sơn, phố Tam Ngõ Nhị và Tương Tư Hồ Trấn.",
        image: TOUR_IMAGES.nanning,
        price: null,
        duration: "3 ngày 2 đêm",
        location: "Nam Ninh",
        departure: "Hà Nội – Hữu Nghị Quan",
        category: "Quảng Tây",
        transport: "Ô tô",
        noShopping: true,
        rating: 4.7,
        highlights: [
            "Tour no shopping, khách sạn 4 sao",
            "Tặng 1 bữa lẩu sữa",
            "Thái Bình cổ trấn – Tiểu Phượng Hoàng",
            "Công viên Thanh Tú Sơn, Tương Tư Hồ Trấn",
        ],
        itinerary: [
            {
                day: "Ngày 1",
                title: "Hà Nội – Hữu Nghị Quan – Thái Bình cổ trấn",
                meals: "Trưa, tối",
                stay: "Nam Ninh",
                content:
                    "03h00 khởi hành. Bảo tàng dân tộc Choang Sùng Tả, Thái Bình cổ trấn về đêm.",
            },
            {
                day: "Ngày 2",
                title: "Thanh Tú Sơn – Tam Ngõ Nhị – Nam Ninh Chi Dạ",
                meals: "Sáng, trưa, tối",
                stay: "Nam Ninh",
                content:
                    "Công viên Thanh Tú Sơn, phố Tam Ngõ Nhị, Đình Mã Tử Đầu, lẩu sữa, phố Nam Ninh Chi Dạ.",
            },
            {
                day: "Ngày 3",
                title: "Tương Tư Hồ Trấn – về Hà Nội",
                meals: "Sáng, trưa",
                stay: "",
                content:
                    "Check-in Tương Tư Hồ Trấn, xuất cảnh Hữu Nghị Quan, về Hà Nội.",
            },
        ],
        included: [
            "Xe Hà Nội – Hữu Nghị Quan, khách sạn 4 sao, vé tham quan",
            "Visa/sổ thông hành, HDV, bảo hiểm, 1 bữa lẩu sữa",
        ],
        excluded: ["Chi tiêu cá nhân, tip, phòng đơn, thuê trang phục check-in"],
    },
    {
        id: "dong-hung-nam-ninh",
        title: "Đông Hưng – Nam Ninh – Thái Bình Cổ Trấn",
        description:
            "Tour no shopping 3N2Đ qua Móng Cái: Đông Hưng, Thái Bình cổ trấn, Thanh Tú Sơn và Tương Tư Hồ Trấn.",
        image: TOUR_IMAGES.park,
        price: null,
        duration: "3 ngày 2 đêm",
        location: "Nam Ninh – Đông Hưng",
        departure: "Móng Cái",
        category: "Quảng Tây",
        transport: "Ô tô + Tàu cao tốc",
        noShopping: true,
        rating: 4.7,
        highlights: [
            "Tour no shopping qua cửa khẩu Móng Cái",
            "Tàu cao tốc Nam Ninh – Đông Hưng",
            "Công viên Hữu Nghị Việt – Trung",
            "Thái Bình cổ trấn, Thanh Tú Sơn, Tương Tư Hồ",
        ],
        itinerary: [
            {
                day: "Ngày 1",
                title: "Móng Cái – Đông Hưng – Thái Bình cổ trấn",
                meals: "Trưa, tối",
                stay: "Nam Ninh",
                content:
                    "07h00 xuất cảnh Móng Cái. Công viên Hữu Nghị, phố Tây Bắc Đẩu, Thái Bình cổ trấn.",
            },
            {
                day: "Ngày 2",
                title: "Thanh Tú Sơn – Tam Ngõ Nhị – Nam Ninh Chi Dạ",
                meals: "Sáng, trưa, tối",
                stay: "Nam Ninh",
                content:
                    "Thanh Tú Sơn, phố Tam Ngõ Nhị, Đình Mã Tử Đầu, lẩu sữa, Nam Ninh Chi Dạ.",
            },
            {
                day: "Ngày 3",
                title: "Tương Tư Hồ – Đông Hưng – Móng Cái",
                meals: "Sáng, trưa",
                stay: "",
                content:
                    "Tương Tư Hồ Trấn, tàu/xe về Đông Hưng, nhập cảnh Móng Cái.",
            },
        ],
        included: [
            "Tàu cao tốc Nam Ninh – Đông Hưng, khách sạn 4 sao",
            "Vé tham quan, HDV, bảo hiểm, 1 bữa lẩu sữa",
        ],
        excluded: ["Chi tiêu cá nhân, tip, phòng đơn"],
    },
];

export const getTourById = (id) =>
    TOURS.find((tour) => String(tour.id) === String(id));

export const HERO_TOUR_IDS = [
    "dai-ly-shangrila-le-giang-con-minh",
    "dai-ly-le-giang-con-minh",
    "con-minh-kieu-tu-vuong-quoc-ti-hon",
    "dai-ly-con-minh-santorini",
    "nam-ninh-thai-binh-co-tran",
    "binh-bien-di-lac-kien-thuy-mong-tu",
    "ha-khau-2n1d",
];

export const DESTINATIONS = {
    "Vân Nam": [
        {
            id: "con-minh",
            name: "CÔN MINH",
            image: TOUR_IMAGES.snow,
            tourId: "con-minh-kieu-tu-vuong-quoc-ti-hon",
        },
        {
            id: "dai-ly",
            name: "ĐẠI LÝ",
            image: TOUR_IMAGES.dali,
            tourId: "dai-ly-con-minh-santorini",
        },
        {
            id: "le-giang",
            name: "LỆ GIANG",
            image: TOUR_IMAGES.lijiang,
            tourId: "dai-ly-le-giang-con-minh",
        },
        {
            id: "shangrila",
            name: "SHANGRILA",
            image: TOUR_IMAGES.shangrila,
            tourId: "dai-ly-shangrila-le-giang-con-minh",
        },
        {
            id: "ho-nhi-hai",
            name: "HỒ NHĨ HẢI",
            image: TOUR_IMAGES.dali,
            tourId: "dai-ly-con-minh-santorini",
        },
    ],
    "Hồng Hà": [
        {
            id: "mong-tu",
            name: "MÔNG TỰ",
            image: TOUR_IMAGES.kunming,
            tourId: "mong-tu-kien-thuy-2n1d",
        },
        {
            id: "kien-thuy",
            name: "KIẾN THỦY",
            image: TOUR_IMAGES.ancient,
            tourId: "di-lac-kien-thuy-mong-tu-binh-bien",
        },
        {
            id: "binh-bien",
            name: "BÌNH BIÊN",
            image: TOUR_IMAGES.village,
            tourId: "binh-bien-mong-tu-2n1d",
        },
        {
            id: "di-lac",
            name: "DI LẶC",
            image: TOUR_IMAGES.flowers,
            tourId: "binh-bien-di-lac-kien-thuy-mong-tu",
        },
        {
            id: "khai-vien",
            name: "KHAI VIỄN",
            image: TOUR_IMAGES.park,
            tourId: "binh-bien-di-lac-kien-thuy-mong-tu",
        },
    ],
    "Hà Khẩu": [
        {
            id: "ha-khau",
            name: "HÀ KHẨU",
            image: TOUR_IMAGES.hekou,
            tourId: "ha-khau-2n1d",
        },
        {
            id: "ga-tau-1903",
            name: "GA TÀU 1903",
            image: TOUR_IMAGES.night,
            tourId: "ha-khau-1n",
        },
        {
            id: "cong-vien-son-lam",
            name: "CÔNG VIÊN SƠN LÂM",
            image: TOUR_IMAGES.park,
            tourId: "ha-khau-1n",
        },
    ],
    "Quảng Tây": [
        {
            id: "nam-ninh",
            name: "NAM NINH",
            image: TOUR_IMAGES.nanning,
            tourId: "nam-ninh-thai-binh-co-tran",
        },
        {
            id: "thai-binh-co-tran",
            name: "THÁI BÌNH CỔ TRẤN",
            image: TOUR_IMAGES.ancient,
            tourId: "nam-ninh-thai-binh-co-tran",
        },
        {
            id: "dong-hung",
            name: "ĐÔNG HƯNG",
            image: TOUR_IMAGES.village,
            tourId: "dong-hung-nam-ninh",
        },
        {
            id: "thanh-tu-son",
            name: "THANH TÚ SƠN",
            image: TOUR_IMAGES.park,
            tourId: "dong-hung-nam-ninh",
        },
    ],
};

