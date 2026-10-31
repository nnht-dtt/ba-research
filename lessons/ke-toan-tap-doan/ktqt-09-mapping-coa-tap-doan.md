# Mapping hệ thống tài khoản địa phương sang COA tập đoàn

Bài này giải thích vì sao pháp nhân Việt Nam trong tập đoàn cần bảng mapping từ hệ thống tài khoản theo TT99 sang hệ thống tài khoản (COA) của tập đoàn, các kiểu quan hệ mapping, cách tách số liệu khi một tài khoản địa phương ứng với nhiều tài khoản tập đoàn, và những gì cần kiểm tra khi bảng mapping thay đổi.

## Vì sao có hai hệ thống tài khoản

**Phía Việt Nam.** Điều 11 Thông tư 99/2025/TT-BTC yêu cầu doanh nghiệp áp dụng hệ thống tài khoản tại Phụ lục II. Doanh nghiệp được sửa đổi, bổ sung tên, số hiệu, kết cấu và nội dung phản ánh của tài khoản để phù hợp đặc điểm hoạt động và yêu cầu quản lý, với ba điều kiện:

- Vẫn phân loại, hệ thống hoá được nghiệp vụ theo nội dung kinh tế, không trùng lặp đối tượng, tuân thủ nguyên tắc kế toán.
- Không làm thay đổi hoặc ảnh hưởng chỉ tiêu, thông tin trình bày trên báo cáo tài chính.
- Ban hành Quy chế hạch toán kế toán (hoặc tài liệu tương đương) nêu rõ sự cần thiết của việc sửa đổi và trách nhiệm của doanh nghiệp. Không sửa đổi thì áp dụng nguyên Phụ lục II.

Xem thêm cấu trúc Phụ lục II ở [[kt-08-he-thong-tai-khoan-tt99]] và cách số dư tài khoản lên chỉ tiêu B01 ở [[kt-39-bao-cao-tinh-hinh-tai-chinh]].

**Phía tập đoàn.** IFRS không quy định thứ tự hay mẫu hệ thống tài khoản (KPMG). Tập đoàn tự đặt COA để gom số liệu của mọi pháp nhân cho hợp nhất và báo cáo. SAP mô tả "group chart of accounts" là hệ thống tài khoản dùng cho hợp nhất và báo cáo toàn tập đoàn; Odoo mô tả "account mapping" là gắn các tài khoản tương tự của nhiều công ty với nhau để báo cáo hợp nhất cộng đúng.

Deloitte Việt Nam nêu khác biệt hạch toán giữa VAS và IFRS sẽ kéo theo thay đổi thiết kế sổ cái, hệ thống tài khoản, sổ phụ và luồng dữ liệu. Nghĩa là mapping không chỉ là đổi mã: COA tập đoàn thường phân loại theo logic IFRS, còn tài khoản TT99 phân loại theo logic VAS và mẫu B01, B02.

## Ba kiểu quan hệ mapping

### Một – một

Một tài khoản địa phương ứng đúng một tài khoản tập đoàn. Ví dụ giả định: TK 112 Tiền gửi không kỳ hạn → tài khoản tập đoàn "Cash at bank". Đây là trường hợp đơn giản nhất: số dư chuyển nguyên.

### Nhiều – một

Nhiều tài khoản địa phương gom vào một tài khoản tập đoàn. Đây là trường hợp tài liệu ERP minh hoạ nhiều nhất:

- Odoo 19 nêu ví dụ công ty con ở Mỹ có năm tài khoản doanh thu (bán hàng trong nước, bán hàng quốc tế, dịch vụ tư vấn, thuê bao, phí vận chuyển) cùng ứng một tài khoản 700000 Income của công ty mẹ ở Bỉ. Muốn báo cáo lãi lỗ của công ty mẹ hiện một dòng cho cả năm tài khoản, phải map cả năm vào 700000 và nhóm dòng báo cáo theo mã tài khoản (account code) thay vì theo ID tài khoản.
- SAP S/4HANA dùng "group account number" để gom mọi tài khoản cần hiện dưới cùng một khoản mục báo cáo, ví dụ 0000111100 (Cash on Hand).

Ví dụ giả định ở Việt Nam: Phụ lục II TT99 không chia cấp 2 cho TK 111 Tiền mặt nhưng cho doanh nghiệp mở thêm tài khoản chi tiết theo loại tiền (tiền Việt Nam, ngoại tệ, vàng tiền tệ). Nếu pháp nhân mở TK 111 chi tiết tiền VND và chi tiết ngoại tệ, cả hai cùng về "Cash on hand" của tập đoàn.

### Một – nhiều

Một tài khoản địa phương chứa nội dung mà tập đoàn muốn tách thành nhiều tài khoản. Ví dụ giả định:

- TK 131 Phải thu của khách hàng gồm cả phải thu bên ngoài và phải thu công ty cùng tập đoàn; COA tập đoàn tách "Trade receivables – third parties" và "Trade receivables – intercompany" vì khoản nội bộ phải loại trừ khi hợp nhất ([[ktqt-03-giao-dich-noi-bo]], [[ktqt-04-bctc-hop-nhat]]).
- TK 6427 Chi phí dịch vụ mua ngoài (cấp 2 của TK 642) gom nhiều loại dịch vụ; tập đoàn có thể muốn tách riêng chi phí thuê, phí tư vấn, phí phần mềm.

Với quan hệ một – nhiều, mã tài khoản địa phương không đủ để quyết định số tiền đi về đâu. Phải có thêm một thuộc tính trên dòng bút toán để tách.

> 📌 Các tài liệu đã đọc (Odoo, SAP) minh hoạ trực tiếp kiểu nhiều – một. Với kiểu một – nhiều, chúng không đưa ra quy tắc tách chung; phần dưới mô tả các thuộc tính có sẵn trong sổ để tách, không phải quy tắc bắt buộc.

## Tách bằng thuộc tính nào

Ba nguồn thông tin thường có sẵn trên dòng bút toán:

| Cách tách | Cơ sở có sẵn | Phù hợp khi |
|---|---|---|
| Theo đối tượng (đối tác) | TT99 yêu cầu TK 131 hạch toán chi tiết cho từng đối tượng phải thu; TK 331 chi tiết cho từng đối tượng phải trả; TK 341 chi tiết từng đối tượng cho vay | Tách theo bản chất bên giao dịch, ví dụ bên ngoài và nội bộ tập đoàn |
| Theo chiều phân tích (analytic) | Odoo cho gắn tài khoản phân tích theo kế hoạch phân tích (analytic plan), có thể đặt bắt buộc khi xác nhận bút toán; xem [[kt-33-trung-tam-chi-phi]] | Tách theo bộ phận, dự án, kênh, khi tiêu chí không gắn với đối tác |
| Theo tài khoản chi tiết | Điều 11 TT99 cho sửa đổi, bổ sung tài khoản (kèm Quy chế); Phụ lục II còn ghi rõ được mở chi tiết ở một số tài khoản, như TK 111 theo loại tiền, TK 33382 cấp 4 theo từng loại thuế | Tiêu chí ổn định, cần thấy rõ trên sổ cái và báo cáo VAS |

Mỗi cách có đánh đổi. Tách theo đối tượng dựa vào việc khai báo đối tác đúng (đối tác nào là công ty cùng tập đoàn). Tách theo analytic phụ thuộc người nhập chọn đúng chiều, nên thường đi kèm thiết lập bắt buộc. Tách bằng tài khoản chi tiết làm hệ thống tài khoản địa phương dài ra và mỗi lần thêm tài khoản là một lần sửa Quy chế hạch toán.

> ⚠️ Cần xác nhận: tiêu chí chọn cách tách cho từng tài khoản (đối tượng, analytic hay tài khoản chi tiết). Các nguồn đã đọc không đưa ra quy tắc; cần chốt với kế toán tập đoàn và kiểm toán của dự án.

## Cấu trúc bảng mapping

Từ cách Odoo và SAP lưu mapping, bảng mapping tối thiểu gồm:

- **Pháp nhân (company / company code).** Odoo lưu mã mapping theo từng công ty (trường Code mapping/Code và Code mapping/Company khi xuất, nhập). SAP cho mỗi company code gắn một hệ thống tài khoản thay thế (alternative/local COA) bên cạnh COA vận hành.
- **Tài khoản địa phương** (số hiệu theo TT99 hoặc theo Quy chế hạch toán của pháp nhân).
- **Tài khoản tập đoàn** đích.
- **Điều kiện tách** với các dòng một – nhiều: thuộc tính dùng để tách (đối tượng, chiều phân tích...) và giá trị tương ứng.

> ⚠️ Cần xác nhận: các cột quản trị khác như ngày hiệu lực, người duyệt, phiên bản bảng mapping. Nguồn đã đọc không quy định; cần theo quy trình kiểm soát của tập đoàn.

### Ví dụ giả định

| Pháp nhân | TK địa phương | Điều kiện | TK tập đoàn |
|---|---|---|---|
| VN01 | 111 – chi tiết VND | | Cash on hand |
| VN01 | 111 – chi tiết ngoại tệ | | Cash on hand |
| VN01 | 112 | | Cash at bank |
| VN01 | 131 | Đối tượng thuộc danh sách công ty cùng tập đoàn | Trade receivables – intercompany |
| VN01 | 131 | Đối tượng còn lại | Trade receivables – third parties |
| VN01 | 6427 | Chiều phân tích "Thuê văn phòng" | Rental expense |

Dòng 131 cho thấy vì sao danh mục đối tác cần cờ "công ty trong tập đoàn" ([[ktqt-02-danh-muc-phap-nhan]]).

## Kiểm tra đầy đủ

Vì mapping chỉ sắp xếp lại số liệu sang tài khoản khác, không tạo hay xoá số tiền, có ba phép kiểm tra cơ học:

1. **Không bỏ sót:** mọi tài khoản địa phương có số dư hoặc phát sinh trong kỳ đều có dòng mapping. Tài khoản mới mở mà chưa map thì số liệu không lên được báo cáo tập đoàn.
2. **Không trùng:** với cùng một dòng bút toán, chỉ một dòng mapping thoả điều kiện (các điều kiện tách của một tài khoản không chồng nhau).
3. **Cộng khớp:** tổng số dư theo COA địa phương bằng tổng số dư sau mapping theo COA tập đoàn, cho từng pháp nhân và từng kỳ.

SAP lưu ý thêm: khi lập báo cáo gộp các company code dùng hệ thống tài khoản thay thế khác nhau, phải dùng COA vận hành hoặc COA tập đoàn cho báo cáo, vì các COA địa phương không cộng trực tiếp với nhau được.

Mapping tài khoản không xử lý khác biệt chuẩn mực. Số dư VAS map sang COA tập đoàn vẫn là số VAS; các điều chỉnh IFRS ([[ktqt-08-dieu-chinh-vas-ifrs]]) là một lớp riêng. Kiến trúc sổ quyết định hai lớp này nằm ở đâu ([[ktqt-10-kien-truc-so-hai-chuan]]).

## Quản lý thay đổi

Bảng mapping thay đổi khi một trong hai phía thay đổi:

- **COA địa phương đổi.** Ví dụ có thật: khi chuyển từ TT200 sang TT99, Điều 29 TT99 yêu cầu chuyển số dư một số tài khoản, như phần nâng cấp, cải tạo TSCĐ chưa hoàn thành trên TK 2413 chuyển sang TK 2414, số phải trả cổ tức, lợi nhuận trên TK 338 chuyển sang TK 332, số dư TK 441 và TK 466 chuyển sang TK 4118. Mỗi lần như vậy, dòng mapping của tài khoản cũ và mới phải được cập nhật, và kỳ chuyển đổi phải được kiểm tra cộng khớp lại. Thêm hoặc sửa tài khoản địa phương còn kéo theo cập nhật Quy chế hạch toán theo Điều 11.
- **COA tập đoàn đổi.** Khi tập đoàn thêm, tách hoặc gộp tài khoản, các pháp nhân phải cập nhật mapping trước kỳ báo cáo.
- **Thao tác trên hệ thống có thể không đảo ngược được hoàn toàn.** Odoo cho gộp (merge) tài khoản của nhiều công ty thành tài khoản dùng chung; khi tách lại (unmerge), lịch sử thay đổi (chatter) đã gộp thì không tách lại. Đây là lý do nên thử thay đổi mapping và gộp tài khoản trên môi trường thử trước.

> ⚠️ Cần xác nhận: mapping thay đổi giữa năm thì số so sánh kỳ trước có trình bày lại theo mapping mới hay không. Nguồn đã đọc không hướng dẫn; cần chốt với kế toán tập đoàn.

## Nguồn

- Thông tư 99/2025/TT-BTC, Điều 11 (hệ thống tài khoản), Điều 29 (chuyển đổi số dư); Phụ lục II các TK 111, 112, 131, 331, 333 (TK 33382), 341, 642: https://luatvietnam.vn/doanh-nghiep/thong-tu-99-2025-tt-btc-huong-dan-che-do-ke-toan-doanh-nghiep-tu-01-01-2026-417085-d1.html
- KPMG Việt Nam, *Differences between Vietnamese GAAP and IFRS*, tháng 10/2026, mục "Chart of accounts and standard form of financial statements": https://assets.kpmg.com/content/dam/kpmgsites/vn/pdf/2026/10/vas-and-ifrs-en.pdf
- KPMG Việt Nam, *IFRS conversion services* (nhóm tác động Systems & Processes: sổ cái, sổ chi tiết, khoảng trống dữ liệu, ERP): https://assets.kpmg.com/content/dam/kpmg/vn/pdf/2023-tax-and-legal-brochure/ifrs/lpa-ifrs-conversion-service.pdf
- Deloitte Việt Nam, *The conversion of VAS to IFRS – Volume one*, Part 3 "Information Technology Impacts and Preparation" và Part 4 "IFRS-ERP Implementation Engagement Overview" (Chart of Accounts): https://www.deloitte.com/content/dam/assets-zone1/southeast-asia/en/docs/services/audit-assurance/2024/vn-aud-the-conversion-vas-to-ifrs-vol-1-en.pdf
- Odoo 19 Documentation, Accounting – Consolidation (Account mapping, Account merging/unmerging, Import a mapping): https://www.odoo.com/documentation/19.0/applications/finance/accounting/get_started/consolidation.html
- Odoo 19 Documentation, Accounting – Analytic accounting (Analytic plans, Default Applicability): https://www.odoo.com/documentation/19.0/applications/finance/accounting/reporting/analytic_accounting.html
- SAP Help Portal, SAP S/4HANA Cloud Public Edition, *Chart of Accounts: Different Types*: https://help.sap.com/docs/SAP_S4HANA_CLOUD/0fa84c9d9c634132b7c4abb9ffdd8f06/32ed3c6435ea46afb4dbab6839fabe8e.html
- SAP Help Portal, SAP S/4HANA Cloud Public Edition, *How to Assign Group Account Numbers to G/L Accounts*: https://help.sap.com/docs/SAP_S4HANA_CLOUD/0fa84c9d9c634132b7c4abb9ffdd8f06/e4216f89722f47e0ba162122fcf9a640.html
