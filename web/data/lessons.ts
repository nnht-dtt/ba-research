import type { Lesson, Chapter, CourseId } from "@/lib/types";

// Mỗi khoá có một mảng lessons + một mảng chapters, rồi gộp vào `lessons` và
// `chapters` ở cuối file. `file` là đường dẫn tương đối tới ../lessons.

// =====================================================================
// GUIDE — Hướng dẫn dùng BA Knowledge
// =====================================================================
const guideLessons: Lesson[] = [
  { slug: "guide-01-them-noi-dung", courseId: "GUIDE", title: "Thêm khoá, bài học và câu hỏi", shortTitle: "Thêm nội dung", chapter: "guide-ch1", order: 1, available: true,
    description: "Ba file cần sửa khi thêm khoá mới, cách đặt slug, cách viết câu hỏi luyện tập và câu hỏi thi.", file: "guide/guide-01-them-noi-dung.md" },
  { slug: "guide-02-cu-phap-markdown", courseId: "GUIDE", title: "Cú pháp Markdown site hỗ trợ", shortTitle: "Cú pháp Markdown", chapter: "guide-ch1", order: 2, available: true,
    description: "Callout, bảng, liên kết [[slug]], tab code, sơ đồ bấm từng bước <step-flow> và so sánh A/B <ab-toggle>.", file: "guide/guide-02-cu-phap-markdown.md" },
];
const guideChapters: Chapter[] = [
  { id: "guide-ch1", courseId: "GUIDE", title: "Bắt đầu", lessonSlugs: ["guide-01-them-noi-dung", "guide-02-cu-phap-markdown"], category: "foundation" },
];

// =====================================================================
// KT-VN — Nghiệp vụ kế toán doanh nghiệp Việt Nam cho BA
// =====================================================================
const ktvnLessons: Lesson[] = [
  { slug: "kt-01-ba-va-ke-toan", courseId: "KT-VN", title: "Kế toán trong dự án ERP: BA cần hiểu đến đâu", shortTitle: "BA và kế toán", chapter: "kt-ch1", order: 1, available: false,
    description: "Kế toán là gì theo luật, kế toán tài chính và quản trị, vì sao mọi nghiệp vụ trong ERP kết thúc ở sổ cái.", file: "ke-toan-vn/kt-01-ba-va-ke-toan.md" },
  { slug: "kt-02-khung-phap-ly", courseId: "KT-VN", title: "Khung pháp lý: luật, chuẩn mực VAS, chế độ kế toán", shortTitle: "Khung pháp lý", chapter: "kt-ch1", order: 2, available: false,
    description: "Ba tầng văn bản, tầng nào quyết định cấu hình hệ thống, VFRS/IFRS nằm ở đâu.", file: "ke-toan-vn/kt-02-khung-phap-ly.md" },
  { slug: "kt-03-che-do-ke-toan", courseId: "KT-VN", title: "Chế độ kế toán doanh nghiệp: TT99, TT133, TT58", shortTitle: "Chế độ kế toán", chapter: "kt-ch1", order: 3, available: false,
    description: "Đối tượng áp dụng, thay đổi của TT99 so với TT200 tác động tới hệ thống, quyền tự thiết kế tài khoản, chứng từ, sổ.", file: "ke-toan-vn/kt-03-che-do-ke-toan.md" },
  { slug: "kt-04-nguyen-tac-ke-toan", courseId: "KT-VN", title: "Các nguyên tắc kế toán chi phối thiết kế hệ thống", shortTitle: "Nguyên tắc VAS 01", chapter: "kt-ch1", order: 4, available: false,
    description: "Dồn tích, giá gốc, phù hợp, nhất quán, thận trọng, trọng yếu và hệ quả lên thời điểm ghi nhận, định giá, khoá kỳ.", file: "ke-toan-vn/kt-04-nguyen-tac-ke-toan.md" },
  { slug: "kt-05-chinh-sach-quy-che", courseId: "KT-VN", title: "Chính sách kế toán và quy chế kế toán nội bộ", shortTitle: "Chính sách kế toán", chapter: "kt-ch1", order: 5, available: false,
    description: "Chính sách kế toán gồm những gì, khi nào doanh nghiệp phải có quy chế kế toán nội bộ, thay đổi chính sách và ước tính.", file: "ke-toan-vn/kt-05-chinh-sach-quy-che.md" },
  { slug: "kt-06-phuong-trinh-ke-toan", courseId: "KT-VN", title: "Tài sản, nguồn vốn, doanh thu, chi phí và phương trình kế toán", shortTitle: "Phương trình kế toán", chapter: "kt-ch2", order: 6, available: false,
    description: "Năm nhóm yếu tố BCTC, điều kiện ghi nhận, tài khoản có số dư và tài khoản tạm thời.", file: "ke-toan-vn/kt-06-phuong-trinh-ke-toan.md" },
  { slug: "kt-07-ghi-so-kep", courseId: "KT-VN", title: "Ghi sổ kép, Nợ/Có và đọc một bút toán", shortTitle: "Ghi sổ kép", chapter: "kt-ch2", order: 7, available: false,
    description: "Tài khoản chữ T, quy tắc ghi theo loại tài khoản, đọc bút toán nhiều dòng do hệ thống sinh.", file: "ke-toan-vn/kt-07-ghi-so-kep.md" },
  { slug: "kt-08-he-thong-tai-khoan-tt99", courseId: "KT-VN", title: "Hệ thống tài khoản TT99 và tài khoản BA hay gặp", shortTitle: "Hệ thống tài khoản", chapter: "kt-ch2", order: 8, available: false,
    description: "Chín loại tài khoản, tài khoản mới, bỏ, đổi tên so với TT200, tài khoản nào gắn với phân hệ nào.", file: "ke-toan-vn/kt-08-he-thong-tai-khoan-tt99.md" },
  { slug: "kt-09-chung-tu-hoa-don", courseId: "KT-VN", title: "Chứng từ kế toán, chứng từ điện tử và hoá đơn điện tử", shortTitle: "Chứng từ và hoá đơn", chapter: "kt-ch2", order: 9, available: false,
    description: "Nội dung bắt buộc của chứng từ, chứng từ hệ thống phải in hoặc lưu, hoá đơn điện tử và điểm tích hợp với nhà cung cấp hoá đơn.", file: "ke-toan-vn/kt-09-chung-tu-hoa-don.md" },
  { slug: "kt-10-so-con-so-cai", courseId: "KT-VN", title: "Sổ con, sổ cái và đối tượng theo dõi: dữ liệu đi từ phân hệ lên sổ cái", shortTitle: "Sổ con và sổ cái", chapter: "kt-ch2", order: 10, available: false,
    description: "Sổ chi tiết theo khách hàng, nhà cung cấp, vật tư, tài sản; đối chiếu sổ con với sổ cái; mẫu sổ TT99.", file: "ke-toan-vn/kt-10-so-con-so-cai.md" },
  { slug: "kt-11-but-toan-tong-hop-dieu-chinh", courseId: "KT-VN", title: "Bút toán tổng hợp, huỷ và điều chỉnh chứng từ", shortTitle: "Điều chỉnh chứng từ", chapter: "kt-ch2", order: 11, available: false,
    description: "Bút toán nhập tay trên sổ cái, sửa sai bằng bút toán đảo hay điều chỉnh, hoá đơn điều chỉnh, quy định sửa sổ.", file: "ke-toan-vn/kt-11-but-toan-tong-hop-dieu-chinh.md" },
  { slug: "kt-12-quy-trinh-mua-hang", courseId: "KT-VN", title: "Quy trình mua hàng: bước nào sinh bút toán", shortTitle: "Quy trình mua hàng", chapter: "kt-ch3", order: 12, available: false,
    description: "Đề nghị mua, đơn mua, nhận hàng, hoá đơn, thanh toán; thời điểm ghi nhận; đối chiếu ba chiều.", file: "ke-toan-vn/kt-12-quy-trinh-mua-hang.md" },
  { slug: "kt-13-mua-hang-nhap-khau", courseId: "KT-VN", title: "Chi phí mua, trả hàng, chiết khấu và hàng nhập khẩu", shortTitle: "Tình huống mua hàng", chapter: "kt-ch3", order: 13, available: false,
    description: "Chi phí mua phân bổ vào giá nhập (landed cost), chiết khấu, trả hàng, thuế nhập khẩu, VAT hàng nhập khẩu.", file: "ke-toan-vn/kt-13-mua-hang-nhap-khau.md" },
  { slug: "kt-14-mua-dich-vu-tai-san", courseId: "KT-VN", title: "Mua dịch vụ, tài sản và phân loại chi phí", shortTitle: "Mua dịch vụ, tài sản", chapter: "kt-ch3", order: 14, available: false,
    description: "Khi nào khoản mua là chi phí, tài sản cố định, công cụ dụng cụ hay chi phí trả trước; hạng mục chi phí và luồng duyệt.", file: "ke-toan-vn/kt-14-mua-dich-vu-tai-san.md" },
  { slug: "kt-15-tam-ung-dat-coc-can-tru", courseId: "KT-VN", title: "Tạm ứng nhân viên, đặt cọc nhà cung cấp và cấn trừ công nợ", shortTitle: "Tạm ứng và cấn trừ", chapter: "kt-ch3", order: 15, available: false,
    description: "Tạm ứng và hoàn ứng, ứng trước cho nhà cung cấp, bù trừ công nợ phải thu phải trả cùng đối tượng, chứng từ cần có.", file: "ke-toan-vn/kt-15-tam-ung-dat-coc-can-tru.md" },
  { slug: "kt-16-thue-gtgt-dau-vao", courseId: "KT-VN", title: "Thuế GTGT đầu vào và quy tắc khấu trừ", shortTitle: "VAT đầu vào", chapter: "kt-ch3", order: 16, available: false,
    description: "Phương pháp khấu trừ và trực tiếp, điều kiện khấu trừ, VAT không được khấu trừ, cấu hình mã thuế.", file: "ke-toan-vn/kt-16-thue-gtgt-dau-vao.md" },
  { slug: "kt-17-quy-trinh-ban-hang", courseId: "KT-VN", title: "Quy trình bán hàng: thời điểm ghi nhận doanh thu và giá vốn", shortTitle: "Quy trình bán hàng", chapter: "kt-ch4", order: 17, available: false,
    description: "Báo giá, đơn bán, giao hàng, hoá đơn, thu tiền; điều kiện ghi nhận doanh thu; lệch kỳ giữa giao hàng và hoá đơn.", file: "ke-toan-vn/kt-17-quy-trinh-ban-hang.md" },
  { slug: "kt-18-giam-tru-tra-truoc", courseId: "KT-VN", title: "Giảm trừ doanh thu, khách trả trước và doanh thu nhận trước", shortTitle: "Giảm trừ, trả trước", chapter: "kt-ch4", order: 18, available: false,
    description: "Chiết khấu thương mại, giảm giá, tiền khách đặt cọc, doanh thu chưa thực hiện.", file: "ke-toan-vn/kt-18-giam-tru-tra-truoc.md" },
  { slug: "kt-19-doi-tra-hoan-tien", courseId: "KT-VN", title: "Đổi trả, hoàn tiền và các tình huống sau khi khách đã thanh toán", shortTitle: "Đổi trả, hoàn tiền", chapter: "kt-ch4", order: 19, available: false,
    description: "Hàng bán bị trả lại, đổi hàng, hoàn tiền một phần hoặc toàn bộ, hoá đơn điều chỉnh, nhập lại kho và giá vốn.", file: "ke-toan-vn/kt-19-doi-tra-hoan-tien.md" },
  { slug: "kt-20-khuyen-mai-voucher-combo", courseId: "KT-VN", title: "Khuyến mại, voucher, quà tặng và combo", shortTitle: "Khuyến mại và combo", chapter: "kt-ch4", order: 20, available: false,
    description: "Hàng khuyến mại có và không thu tiền, voucher, quà tặng, combo nhiều SKU: hạch toán, phân bổ doanh thu, hoá đơn.", file: "ke-toan-vn/kt-20-khuyen-mai-voucher-combo.md" },
  { slug: "kt-21-cong-no-phai-thu", courseId: "KT-VN", title: "Công nợ phải thu và dự phòng phải thu khó đòi", shortTitle: "Công nợ phải thu", chapter: "kt-ch4", order: 21, available: false,
    description: "Theo dõi theo khách và hoá đơn, tuổi nợ, đối trừ, trích dự phòng và dữ liệu cần có.", file: "ke-toan-vn/kt-21-cong-no-phai-thu.md" },
  { slug: "kt-22-thue-gtgt-dau-ra", courseId: "KT-VN", title: "Thuế GTGT đầu ra và quyết toán VAT cuối kỳ", shortTitle: "VAT đầu ra", chapter: "kt-ch4", order: 22, available: false,
    description: "VAT theo thuế suất, bù trừ đầu vào, báo cáo hệ thống cần cung cấp cho kê khai.", file: "ke-toan-vn/kt-22-thue-gtgt-dau-ra.md" },
  { slug: "kt-23-dinh-gia-ton-kho", courseId: "KT-VN", title: "Định giá hàng tồn kho và giá vốn trong hệ thống", shortTitle: "Định giá tồn kho", chapter: "kt-ch5", order: 23, available: false,
    description: "FIFO, bình quân, đích danh; kê khai thường xuyên và kiểm kê định kỳ; định giá tự động và xuất âm kho.", file: "ke-toan-vn/kt-23-dinh-gia-ton-kho.md" },
  { slug: "kt-24-kiem-ke-du-phong", courseId: "KT-VN", title: "Kiểm kê, điều chỉnh tồn kho và dự phòng giảm giá", shortTitle: "Kiểm kê, dự phòng", chapter: "kt-ch5", order: 24, available: false,
    description: "Chênh lệch kiểm kê, xuất huỷ, giá trị thuần có thể thực hiện, dữ liệu để trích dự phòng.", file: "ke-toan-vn/kt-24-kiem-ke-du-phong.md" },
  { slug: "kt-25-kho-thue-ngoai-kho-san", courseId: "KT-VN", title: "Kho thuê ngoài, kho trên sàn, kho ảo và hàng gửi đi", shortTitle: "Kho thuê ngoài, kho sàn", chapter: "kt-ch5", order: 25, available: false,
    description: "Hàng nằm ở kho bên thứ ba vẫn thuộc doanh nghiệp, hàng gửi bán, kho ảo để quản lý; pháp nhân sở hữu kho.", file: "ke-toan-vn/kt-25-kho-thue-ngoai-kho-san.md" },
  { slug: "kt-26-gia-cong", courseId: "KT-VN", title: "Gia công: thuê ngoài gia công và nhận gia công", shortTitle: "Gia công", chapter: "kt-ch5", order: 26, available: false,
    description: "Xuất nguyên liệu đi gia công, phí gia công vào giá thành, nhận lại thành phẩm; nhận gia công cho bên khác.", file: "ke-toan-vn/kt-26-gia-cong.md" },
  { slug: "kt-27-chi-phi-san-xuat", courseId: "KT-VN", title: "Luồng chi phí sản xuất: từ lệnh sản xuất đến thành phẩm", shortTitle: "Chi phí sản xuất", chapter: "kt-ch5", order: 27, available: false,
    description: "Chi phí NVL, nhân công, sản xuất chung tập hợp vào 154, nhập kho thành phẩm, bút toán từng bước.", file: "ke-toan-vn/kt-27-chi-phi-san-xuat.md" },
  { slug: "kt-28-gia-thanh", courseId: "KT-VN", title: "Tính giá thành: các phương án cần chốt với khách", shortTitle: "Giá thành", chapter: "kt-ch5", order: 28, available: false,
    description: "Đối tượng tính giá thành, phân bổ sản xuất chung, dở dang, giá định mức và thực tế.", file: "ke-toan-vn/kt-28-gia-thanh.md" },
  { slug: "kt-29-vong-doi-tscd", courseId: "KT-VN", title: "Vòng đời tài sản cố định: ghi nhận, khấu hao, thanh lý", shortTitle: "Vòng đời TSCĐ", chapter: "kt-ch6", order: 29, available: false,
    description: "Ghi nhận, nguyên giá, XDCB dở dang, khấu hao, nâng cấp, điều chuyển, thanh lý, nhượng bán.", file: "ke-toan-vn/kt-29-vong-doi-tscd.md" },
  { slug: "kt-30-ccdc-tra-truoc-trich-truoc", courseId: "KT-VN", title: "Công cụ dụng cụ, chi phí trả trước, chi phí phải trả và phân bổ tự động", shortTitle: "CCDC và phân bổ", chapter: "kt-ch6", order: 30, available: false,
    description: "Ghi tăng, phân bổ, thanh lý CCDC; chi phí trả trước; trích trước chi phí chưa có hoá đơn; lịch phân bổ.", file: "ke-toan-vn/kt-30-ccdc-tra-truoc-trich-truoc.md" },
  { slug: "kt-31-tien-luong", courseId: "KT-VN", title: "Tiền lương và các khoản trích theo lương: điểm nối HRM với kế toán", shortTitle: "Tiền lương", chapter: "kt-ch6", order: 31, available: false,
    description: "Bút toán lương theo bộ phận, bảo hiểm, KPCĐ, thuế TNCN khấu trừ, dữ liệu từ hệ thống nhân sự.", file: "ke-toan-vn/kt-31-tien-luong.md" },
  { slug: "kt-32-tien-ngan-hang-vay", courseId: "KT-VN", title: "Tiền, quỹ, đối soát ngân hàng và khoản vay", shortTitle: "Tiền và vay", chapter: "kt-ch6", order: 32, available: false,
    description: "Tiền mặt, tiền gửi, tiền đang chuyển, đối soát sao kê, khế ước vay, chi phí đi vay.", file: "ke-toan-vn/kt-32-tien-ngan-hang-vay.md" },
  { slug: "kt-33-trung-tam-chi-phi", courseId: "KT-VN", title: "Trung tâm chi phí và chiều phân tích quản trị", shortTitle: "Trung tâm chi phí", chapter: "kt-ch7", order: 33, available: true,
    description: "Kế toán quản trị khác kế toán tài chính, trung tâm chi phí, lợi nhuận, chiều phân tích (phòng ban, kênh, thương hiệu, khu vực).", file: "ke-toan-vn/kt-33-trung-tam-chi-phi.md" },
  { slug: "kt-34-phan-bo-chi-phi", courseId: "KT-VN", title: "Tập hợp và phân bổ chi phí theo tiêu thức", shortTitle: "Phân bổ chi phí", chapter: "kt-ch7", order: 34, available: true,
    description: "Chi phí trực tiếp và gián tiếp, tiêu thức phân bổ, phân bổ một bước và nhiều bước, dữ liệu cần để phân bổ tự động.", file: "ke-toan-vn/kt-34-phan-bo-chi-phi.md" },
  { slug: "kt-35-ngan-sach", courseId: "KT-VN", title: "Ngân sách và kiểm soát ngân sách", shortTitle: "Ngân sách", chapter: "kt-ch7", order: 35, available: true,
    description: "Lập ngân sách theo chiều phân tích, so sánh thực tế và kế hoạch, cảnh báo và chặn khi vượt ngân sách.", file: "ke-toan-vn/kt-35-ngan-sach.md" },
  { slug: "kt-36-quy-trinh-khoa-so", courseId: "KT-VN", title: "Quy trình khoá sổ cuối kỳ và checklist đóng sổ", shortTitle: "Khoá sổ", chapter: "kt-ch8", order: 36, available: false,
    description: "Bút toán cuối kỳ (phân bổ, khấu hao, đánh giá lại, trích trước, giá vốn), kết chuyển 911, khoá kỳ, thứ tự phụ thuộc.", file: "ke-toan-vn/kt-36-quy-trinh-khoa-so.md" },
  { slug: "kt-37-thue-tndn", courseId: "KT-VN", title: "Thuế TNDN: những gì hệ thống cần hỗ trợ", shortTitle: "Thuế TNDN", chapter: "kt-ch8", order: 37, available: false,
    description: "Lợi nhuận kế toán và thu nhập chịu thuế, chi phí không được trừ, chi phí thuế 821, thuế hoãn lại ở mức khái niệm.", file: "ke-toan-vn/kt-37-thue-tndn.md" },
  { slug: "kt-38-he-thong-bctc", courseId: "KT-VN", title: "Hệ thống báo cáo tài chính theo TT99", shortTitle: "Hệ thống BCTC", chapter: "kt-ch8", order: 38, available: false,
    description: "Thành phần, kỳ lập, thời hạn nộp, công khai, mẫu cho DN không hoạt động liên tục.", file: "ke-toan-vn/kt-38-he-thong-bctc.md" },
  { slug: "kt-39-bao-cao-tinh-hinh-tai-chinh", courseId: "KT-VN", title: "Báo cáo tình hình tài chính (B01-DN) và mapping tài khoản", shortTitle: "B01-DN", chapter: "kt-ch8", order: 39, available: false,
    description: "Kết cấu chỉ tiêu, ngắn hạn và dài hạn, chỉ tiêu lấy từ tài khoản nào, chi tiết đối tượng để tách dư Nợ, dư Có.", file: "ke-toan-vn/kt-39-bao-cao-tinh-hinh-tai-chinh.md" },
  { slug: "kt-40-bao-cao-ket-qua-kinh-doanh", courseId: "KT-VN", title: "Báo cáo kết quả hoạt động kinh doanh (B02-DN)", shortTitle: "B02-DN", chapter: "kt-ch8", order: 40, available: false,
    description: "Các chỉ tiêu từ doanh thu đến lợi nhuận sau thuế và tài khoản nguồn.", file: "ke-toan-vn/kt-40-bao-cao-ket-qua-kinh-doanh.md" },
  { slug: "kt-41-luu-chuyen-tien-te", courseId: "KT-VN", title: "Báo cáo lưu chuyển tiền tệ (B03-DN): hệ thống cần dữ liệu gì", shortTitle: "B03-DN", chapter: "kt-ch8", order: 41, available: false,
    description: "Ba nhóm hoạt động, trực tiếp và gián tiếp, gắn mã dòng tiền cho giao dịch tiền.", file: "ke-toan-vn/kt-41-luu-chuyen-tien-te.md" },
  { slug: "kt-42-thuyet-minh-bctc", courseId: "KT-VN", title: "Thuyết minh BCTC: phần nào hệ thống lấy được số liệu", shortTitle: "B09-DN", chapter: "kt-ch8", order: 42, available: false,
    description: "Cấu trúc thuyết minh, bảng chi tiết lấy từ hệ thống, chính sách kế toán.", file: "ke-toan-vn/kt-42-thuyet-minh-bctc.md" },
];
const ktvnChapters: Chapter[] = [
  { id: "kt-ch1", courseId: "KT-VN", title: "Chương 1 — Kế toán và khung pháp lý nhìn từ góc BA", lessonSlugs: ["kt-01-ba-va-ke-toan", "kt-02-khung-phap-ly", "kt-03-che-do-ke-toan", "kt-04-nguyen-tac-ke-toan", "kt-05-chinh-sach-quy-che"], category: "foundation" },
  { id: "kt-ch2", courseId: "KT-VN", title: "Chương 2 — Ngôn ngữ kế toán: tài khoản, bút toán, chứng từ, sổ", lessonSlugs: ["kt-06-phuong-trinh-ke-toan", "kt-07-ghi-so-kep", "kt-08-he-thong-tai-khoan-tt99", "kt-09-chung-tu-hoa-don", "kt-10-so-con-so-cai", "kt-11-but-toan-tong-hop-dieu-chinh"], category: "billing" },
  { id: "kt-ch3", courseId: "KT-VN", title: "Chương 3 — Mua hàng đến thanh toán (Procure-to-Pay)", lessonSlugs: ["kt-12-quy-trinh-mua-hang", "kt-13-mua-hang-nhap-khau", "kt-14-mua-dich-vu-tai-san", "kt-15-tam-ung-dat-coc-can-tru", "kt-16-thue-gtgt-dau-vao"], category: "storage" },
  { id: "kt-ch4", courseId: "KT-VN", title: "Chương 4 — Bán hàng đến thu tiền (Order-to-Cash)", lessonSlugs: ["kt-17-quy-trinh-ban-hang", "kt-18-giam-tru-tra-truoc", "kt-19-doi-tra-hoan-tien", "kt-20-khuyen-mai-voucher-combo", "kt-21-cong-no-phai-thu", "kt-22-thue-gtgt-dau-ra"], category: "compute" },
  { id: "kt-ch5", courseId: "KT-VN", title: "Chương 5 — Kho, giá vốn, gia công và sản xuất", lessonSlugs: ["kt-23-dinh-gia-ton-kho", "kt-24-kiem-ke-du-phong", "kt-25-kho-thue-ngoai-kho-san", "kt-26-gia-cong", "kt-27-chi-phi-san-xuat", "kt-28-gia-thanh"], category: "network" },
  { id: "kt-ch6", courseId: "KT-VN", title: "Chương 6 — Tài sản, tiền lương, tiền và vay", lessonSlugs: ["kt-29-vong-doi-tscd", "kt-30-ccdc-tra-truoc-trich-truoc", "kt-31-tien-luong", "kt-32-tien-ngan-hang-vay"], category: "database" },
  { id: "kt-ch7", courseId: "KT-VN", title: "Chương 7 — Kế toán quản trị: chiều phân tích, phân bổ, ngân sách", lessonSlugs: ["kt-33-trung-tam-chi-phi", "kt-34-phan-bo-chi-phi", "kt-35-ngan-sach"], category: "security" },
  { id: "kt-ch8", courseId: "KT-VN", title: "Chương 8 — Khoá sổ và bộ báo cáo tài chính (Record-to-Report)", lessonSlugs: ["kt-36-quy-trinh-khoa-so", "kt-37-thue-tndn", "kt-38-he-thong-bctc", "kt-39-bao-cao-tinh-hinh-tai-chinh", "kt-40-bao-cao-ket-qua-kinh-doanh", "kt-41-luu-chuyen-tien-te", "kt-42-thuyet-minh-bctc"], category: "foundation" },
];

// =====================================================================
// KT-QT — Kế toán tập đoàn đa quốc gia và bán hàng xuyên biên giới
// =====================================================================
const ktqtLessons: Lesson[] = [
  { slug: "ktqt-01-mo-hinh-da-cong-ty", courseId: "KT-QT", title: "Mô hình đa công ty và loại báo cáo tương ứng", shortTitle: "Mô hình đa công ty", chapter: "ktqt-ch1", order: 1, available: false,
    description: "Chi nhánh phụ thuộc, công ty con, liên doanh, liên kết; BCTC riêng, tổng hợp, hợp nhất; hệ quả lên thiết kế công ty trong ERP.", file: "ke-toan-tap-doan/ktqt-01-mo-hinh-da-cong-ty.md" },
  { slug: "ktqt-02-danh-muc-phap-nhan", courseId: "KT-QT", title: "Danh mục pháp nhân đa quốc gia: chuẩn mực, tiền tệ, năm tài chính, kỳ khoá sổ", shortTitle: "Danh mục pháp nhân", chapter: "ktqt-ch1", order: 2, available: false,
    description: "Thông tin cần thu thập cho từng pháp nhân, quan hệ sở hữu, chuẩn mực địa phương, đơn vị tiền tệ hạch toán, năm tài chính khác nhau.", file: "ke-toan-tap-doan/ktqt-02-danh-muc-phap-nhan.md" },
  { slug: "ktqt-03-giao-dich-noi-bo", courseId: "KT-QT", title: "Giao dịch nội bộ: mua bán, chi hộ thu hộ, cho vay nội bộ", shortTitle: "Giao dịch nội bộ", chapter: "ktqt-ch1", order: 3, available: false,
    description: "Các loại giao dịch giữa pháp nhân, tài khoản dùng (136/336 với đơn vị phụ thuộc, 131/331/1283/341 giữa pháp nhân độc lập), đối chiếu số dư nội bộ.", file: "ke-toan-tap-doan/ktqt-03-giao-dich-noi-bo.md" },
  { slug: "ktqt-04-bctc-hop-nhat", courseId: "KT-QT", title: "Báo cáo tài chính hợp nhất: logic và dữ liệu cần chuẩn bị", shortTitle: "BCTC hợp nhất", chapter: "ktqt-ch1", order: 4, available: false,
    description: "Cộng ngang, loại trừ khoản đầu tư và giao dịch nội bộ, lãi chưa thực hiện, lợi ích cổ đông không kiểm soát.", file: "ke-toan-tap-doan/ktqt-04-bctc-hop-nhat.md" },
  { slug: "ktqt-05-giao-dich-ngoai-te", courseId: "KT-QT", title: "Giao dịch ngoại tệ, tỷ giá xuất quỹ và đánh giá lại cuối kỳ", shortTitle: "Ngoại tệ", chapter: "ktqt-ch2", order: 5, available: true,
    description: "Tỷ giá giao dịch, tỷ giá ghi sổ đích danh và bình quân, nguồn tỷ giá, chênh lệch khi thanh toán và cuối kỳ.", file: "ke-toan-tap-doan/ktqt-05-giao-dich-ngoai-te.md" },
  { slug: "ktqt-06-don-vi-tien-te-chuyen-doi", courseId: "KT-QT", title: "Đơn vị tiền tệ kế toán, đồng tiền chức năng và chuyển đổi BCTC", shortTitle: "Đơn vị tiền tệ", chapter: "ktqt-ch2", order: 6, available: false,
    description: "Điều kiện dùng ngoại tệ làm đơn vị tiền tệ kế toán theo TT99, đồng tiền chức năng và trình bày theo IAS 21, chuyển đổi BCTC, chênh lệch chuyển đổi.", file: "ke-toan-tap-doan/ktqt-06-don-vi-tien-te-chuyen-doi.md" },
  { slug: "ktqt-07-vas-ifrs", courseId: "KT-QT", title: "VAS và IFRS: khác biệt chính và lộ trình áp dụng", shortTitle: "VAS và IFRS", chapter: "ktqt-ch3", order: 7, available: false,
    description: "Khác biệt cách tiếp cận và các điểm trọng yếu, lộ trình QĐ 345.", file: "ke-toan-tap-doan/ktqt-07-vas-ifrs.md" },
  { slug: "ktqt-08-dieu-chinh-vas-ifrs", courseId: "KT-QT", title: "Các điều chỉnh VAS sang IFRS thường gặp và dữ liệu hệ thống cần có", shortTitle: "Điều chỉnh VAS–IFRS", chapter: "ktqt-ch3", order: 8, available: false,
    description: "IFRS 16, IFRS 15, IFRS 9, IAS 16, IAS 12, IAS 37; mỗi điều chỉnh cần dữ liệu gì.", file: "ke-toan-tap-doan/ktqt-08-dieu-chinh-vas-ifrs.md" },
  { slug: "ktqt-09-mapping-coa-tap-doan", courseId: "KT-QT", title: "Mapping hệ thống tài khoản địa phương sang COA tập đoàn", shortTitle: "Mapping COA", chapter: "ktqt-ch3", order: 9, available: false,
    description: "Mapping 1-1, nhiều-1, 1-nhiều; tách bằng đối tác, analytic hay tài khoản chi tiết; cấu trúc bảng mapping, kiểm tra đầy đủ, quản lý thay đổi.", file: "ke-toan-tap-doan/ktqt-09-mapping-coa-tap-doan.md" },
  { slug: "ktqt-10-kien-truc-so-hai-chuan", courseId: "KT-QT", title: "Kiến trúc sổ: một sổ và mapping, sổ song song, hay COA tập đoàn làm chính", shortTitle: "Kiến trúc sổ", chapter: "ktqt-ch3", order: 10, available: false,
    description: "Ba phương án, đánh đổi về vận hành, kiểm soát, đối chiếu; khả năng của ERP.", file: "ke-toan-tap-doan/ktqt-10-kien-truc-so-hai-chuan.md" },
  { slug: "ktqt-11-giao-dich-cong-ty-me", courseId: "KT-QT", title: "Giao dịch với công ty mẹ và bên liên kết ở nước ngoài", shortTitle: "Giao dịch với mẹ", chapter: "ktqt-ch3", order: 11, available: false,
    description: "Phí quản lý, bản quyền, vay mẹ; thuế nhà thầu nước ngoài; giao dịch liên kết; đối chiếu liên công ty xuyên biên giới.", file: "ke-toan-tap-doan/ktqt-11-giao-dich-cong-ty-me.md" },
  { slug: "ktqt-12-bao-cao-cho-tap-doan", courseId: "KT-QT", title: "Gói báo cáo tập đoàn, lịch khoá sổ và đối chiếu lợi nhuận VAS – IFRS", shortTitle: "Báo cáo cho tập đoàn", chapter: "ktqt-ch3", order: 12, available: false,
    description: "Gói báo cáo gửi công ty mẹ, khoá sổ theo lịch tập đoàn, năm tài chính lệch nhau, bảng đối chiếu lợi nhuận và vốn chủ.", file: "ke-toan-tap-doan/ktqt-12-bao-cao-cho-tap-doan.md" },
  { slug: "ktqt-13-doanh-thu-kenh-online", courseId: "KT-QT", title: "Bán hàng qua sàn và kênh online: doanh thu gộp hay thuần", shortTitle: "Doanh thu kênh online", chapter: "ktqt-ch4", order: 13, available: false,
    description: "Doanh nghiệp là bên chính hay đại lý, ghi nhận doanh thu theo giá khách trả hay số sàn chuyển về, pháp nhân sở hữu shop.", file: "ke-toan-tap-doan/ktqt-13-doanh-thu-kenh-online.md" },
  { slug: "ktqt-14-phi-san-cong-thanh-toan", courseId: "KT-QT", title: "Phí sàn, cổng thanh toán, vận chuyển: ghi nhận lúc nào", shortTitle: "Phí sàn và cổng TT", chapter: "ktqt-ch4", order: 14, available: false,
    description: "Phí trừ theo đơn và phí cuối kỳ, ghi nhận khi phát sinh đơn hay khi quyết toán, tài khoản chi phí, hoá đơn của sàn.", file: "ke-toan-tap-doan/ktqt-14-phi-san-cong-thanh-toan.md" },
  { slug: "ktqt-15-doi-soat-san-cod", courseId: "KT-QT", title: "Đối soát quyết toán sàn, cổng thanh toán, COD và sao kê ngân hàng", shortTitle: "Đối soát sàn, COD", chapter: "ktqt-ch4", order: 15, available: false,
    description: "Phải thu sàn và tiền đang chuyển, đối chiếu đơn – quyết toán – sao kê, chênh lệch thường gặp, tự động hoá đối soát.", file: "ke-toan-tap-doan/ktqt-15-doi-soat-san-cod.md" },
  { slug: "ktqt-16-hoa-don-kenh-online", courseId: "KT-QT", title: "Hoá đơn điện tử cho bán hàng online", shortTitle: "Hoá đơn online", chapter: "ktqt-ch4", order: 16, available: false,
    description: "Xuất theo đơn hay gộp cuối ngày, ai xuất hoá đơn, dữ liệu đơn hàng khác hoá đơn, xử lý đơn huỷ, hoàn.", file: "ke-toan-tap-doan/ktqt-16-hoa-don-kenh-online.md" },
  { slug: "ktqt-17-vat-eu-uk", courseId: "KT-QT", title: "VAT EU và UK khi bán hàng xuyên biên giới: OSS, IOSS, sàn là người bán được coi là", shortTitle: "VAT EU, UK", chapter: "ktqt-ch5", order: 17, available: false,
    description: "Bán từ xa B2C, ba chế độ OSS, IOSS cho hàng giá trị thấp, khi nào sàn chịu trách nhiệm thu VAT, dữ liệu hệ thống cần.", file: "ke-toan-tap-doan/ktqt-17-vat-eu-uk.md" },
  { slug: "ktqt-18-sales-tax-my", courseId: "KT-QT", title: "Sales tax Mỹ: economic nexus và marketplace facilitator", shortTitle: "Sales tax Mỹ", chapter: "ktqt-ch5", order: 18, available: false,
    description: "Sau vụ Wayfair, ngưỡng nexus theo bang, sàn thu và nộp thay, người bán còn nghĩa vụ gì, dữ liệu theo bang.", file: "ke-toan-tap-doan/ktqt-18-sales-tax-my.md" },
  { slug: "ktqt-19-thue-da-quoc-gia", courseId: "KT-QT", title: "Nghĩa vụ thuế của tập đoàn bán hàng ở nhiều quốc gia", shortTitle: "Thuế đa quốc gia", chapter: "ktqt-ch5", order: 19, available: false,
    description: "Các loại thuế theo pháp nhân và quốc gia (loại thuế, ai kê khai, tần suất), thuế do sàn khấu trừ hoặc thu hộ, cách hệ thống áp thuế theo nơi bán.", file: "ke-toan-tap-doan/ktqt-19-thue-da-quoc-gia.md" },
  { slug: "ktqt-20-case-tap-doan-da-kenh", courseId: "KT-QT", title: "Ví dụ tổng hợp: tập đoàn đa quốc gia bán hàng đa kênh", shortTitle: "Ví dụ tổng hợp", chapter: "ktqt-ch6", order: 20, available: false,
    description: "Đi qua một tập đoàn giả định: các pháp nhân, giao dịch nội bộ, ngoại tệ, doanh thu sàn, thuế và báo cáo cho công ty mẹ, nối các bài trong khoá.", file: "ke-toan-tap-doan/ktqt-20-case-tap-doan-da-kenh.md" },
];
const ktqtChapters: Chapter[] = [
  { id: "ktqt-ch1", courseId: "KT-QT", title: "Chương 1 — Cấu trúc tập đoàn, giao dịch nội bộ và hợp nhất", lessonSlugs: ["ktqt-01-mo-hinh-da-cong-ty", "ktqt-02-danh-muc-phap-nhan", "ktqt-03-giao-dich-noi-bo", "ktqt-04-bctc-hop-nhat"], category: "foundation" },
  { id: "ktqt-ch2", courseId: "KT-QT", title: "Chương 2 — Ngoại tệ và đơn vị tiền tệ", lessonSlugs: ["ktqt-05-giao-dich-ngoai-te", "ktqt-06-don-vi-tien-te-chuyen-doi"], category: "billing" },
  { id: "ktqt-ch3", courseId: "KT-QT", title: "Chương 3 — VAS, IFRS và báo cáo cho tập đoàn", lessonSlugs: ["ktqt-07-vas-ifrs", "ktqt-08-dieu-chinh-vas-ifrs", "ktqt-09-mapping-coa-tap-doan", "ktqt-10-kien-truc-so-hai-chuan", "ktqt-11-giao-dich-cong-ty-me", "ktqt-12-bao-cao-cho-tap-doan"], category: "storage" },
  { id: "ktqt-ch4", courseId: "KT-QT", title: "Chương 4 — Bán hàng đa kênh TMĐT", lessonSlugs: ["ktqt-13-doanh-thu-kenh-online", "ktqt-14-phi-san-cong-thanh-toan", "ktqt-15-doi-soat-san-cod", "ktqt-16-hoa-don-kenh-online"], category: "compute" },
  { id: "ktqt-ch5", courseId: "KT-QT", title: "Chương 5 — Thuế ở nhiều quốc gia", lessonSlugs: ["ktqt-17-vat-eu-uk", "ktqt-18-sales-tax-my", "ktqt-19-thue-da-quoc-gia"], category: "network" },
  { id: "ktqt-ch6", courseId: "KT-QT", title: "Chương 6 — Case tổng hợp", lessonSlugs: ["ktqt-20-case-tap-doan-da-kenh"], category: "database" },
];

export const lessons: Lesson[] = [...guideLessons, ...ktvnLessons, ...ktqtLessons];
export const chapters: Chapter[] = [...guideChapters, ...ktvnChapters, ...ktqtChapters];

export function lessonsOfCourse(courseId: CourseId): Lesson[] {
  return lessons.filter((l) => l.courseId === courseId).sort((a, b) => a.order - b.order);
}

export function chaptersOfCourse(courseId: CourseId): Chapter[] {
  return chapters.filter((c) => c.courseId === courseId);
}

export function getLessonBySlug(courseId: CourseId, slug: string): Lesson | undefined {
  return lessons.find((l) => l.courseId === courseId && l.slug === slug);
}

export function getChapterById(id: string): Chapter | undefined {
  return chapters.find((c) => c.id === id);
}
