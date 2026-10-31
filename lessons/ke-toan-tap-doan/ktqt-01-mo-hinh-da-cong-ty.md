# Mô hình đa công ty và loại báo cáo tương ứng

Bài này giúp BA nhìn sơ đồ một tập đoàn rồi trả lời được ba câu: mỗi đơn vị là loại quan hệ gì, nó phải có loại báo cáo tài chính nào, và nên dựng nó trong ERP như một công ty riêng hay một chi nhánh.

## Hai câu hỏi phân loại

Mọi đơn vị trong sơ đồ tập đoàn được xếp loại bằng hai câu hỏi:

1. **Đơn vị có tư cách pháp nhân, hạch toán độc lập không?** Nếu không, đó là đơn vị trực thuộc (chi nhánh, cửa hàng, ban quản lý dự án...) của một doanh nghiệp. Nếu có, đó là một doanh nghiệp riêng.
2. **Nếu là doanh nghiệp riêng, nhà đầu tư có quyền gì với nó?** Kiểm soát, đồng kiểm soát, ảnh hưởng đáng kể, hay chỉ là nhà đầu tư thông thường.

Câu trả lời quyết định tài khoản ghi khoản vốn bỏ vào, cách hạch toán giao dịch qua lại (xem [[ktqt-03-giao-dich-noi-bo]]) và báo cáo phải lập.

## Các loại quan hệ

### Đơn vị trực thuộc (hạch toán phụ thuộc)

Đơn vị trực thuộc không phải pháp nhân riêng. Theo TT99, vốn doanh nghiệp giao cho đơn vị trực thuộc ghi ở TK 1361 "Vốn kinh doanh ở đơn vị trực thuộc", và các khoản phải thu, phải trả giữa trụ sở chính với đơn vị trực thuộc (hoặc giữa các đơn vị trực thuộc với nhau) đi qua TK 136 và TK 336.

TT99 tách rõ hai thế giới này: TK 1361 không phản ánh vốn công ty mẹ đầu tư vào công ty con (vì vốn đó ghi ở TK 221), và TK 336 không phản ánh các giao dịch thanh toán giữa công ty mẹ với công ty con và giữa các công ty con với nhau.

### Công ty con

VAS 25 định nghĩa công ty con là doanh nghiệp chịu sự kiểm soát của một doanh nghiệp khác (công ty mẹ); kiểm soát là quyền chi phối các chính sách tài chính và hoạt động của doanh nghiệp nhằm thu được lợi ích kinh tế từ hoạt động của doanh nghiệp đó.

Mốc định lượng: công ty mẹ nắm giữ trên 50% quyền biểu quyết (trực tiếp hoặc gián tiếp qua công ty con khác), trừ khi chứng minh được quyền sở hữu đó không gắn với quyền kiểm soát. Dưới 50% vẫn có thể là công ty con nếu (VAS 25 đoạn 09; TT99 TK 221):

- Các nhà đầu tư khác thoả thuận dành cho nhà đầu tư hơn 50% quyền biểu quyết;
- Nhà đầu tư có quyền chi phối các chính sách tài chính và hoạt động theo quy chế thoả thuận;
- Nhà đầu tư có quyền bổ nhiệm hoặc bãi miễn đa số thành viên Hội đồng quản trị hoặc cấp quản lý tương đương;
- Nhà đầu tư có quyền bỏ đa số phiếu tại các cuộc họp Hội đồng quản trị hoặc cấp quản lý tương đương.

TT202 Điều 8 bổ sung thêm dấu hiệu: có quyền quyết định sửa đổi, bổ sung Điều lệ của công ty con; và yêu cầu xét cả quyền biểu quyết tiềm năng (quyền chọn mua, công cụ nợ hoặc công cụ vốn có thể chuyển đổi thành cổ phiếu phổ thông tại thời điểm hiện tại).

Khoản đầu tư vào công ty con ghi ở **TK 221 - Đầu tư vào công ty con**. Nếu quyền kiểm soát chỉ là tạm thời (nắm giữ để bán kiếm lời), TT99 không cho ghi TK 221 mà ghi là chứng khoán kinh doanh.

### Công ty liên doanh

VAS 08 định nghĩa đồng kiểm soát là quyền cùng chi phối của các bên góp vốn liên doanh về chính sách tài chính và hoạt động, trên cơ sở thoả thuận bằng hợp đồng. Thoả thuận đó phải bảo đảm không bên nào đơn phương kiểm soát được liên doanh.

VAS 08 có ba hình thức liên doanh, và chỉ hình thức thứ ba tạo ra một pháp nhân mới:

| Hình thức | Có lập pháp nhân mới? | Bên góp vốn ghi gì trên sổ của mình |
|---|---|---|
| Hoạt động kinh doanh được đồng kiểm soát | Không | Tài sản mình kiểm soát, nợ mình gánh, chi phí mình chịu, doanh thu được chia |
| Tài sản được đồng kiểm soát | Không | Phần vốn góp vào tài sản, phân loại theo tính chất tài sản (ví dụ TSCĐ hữu hình), không ghi như khoản đầu tư |
| Cơ sở kinh doanh được đồng kiểm soát | Có | Khoản đầu tư vào cơ sở đó |

Cơ sở kinh doanh được đồng kiểm soát phải tổ chức kế toán riêng như doanh nghiệp khác. Bên góp vốn ghi khoản đầu tư vào **TK 222 - Đầu tư vào công ty liên doanh, liên kết**.

### Công ty liên kết

Theo VAS 07, công ty liên kết là công ty mà nhà đầu tư có ảnh hưởng đáng kể nhưng không phải công ty con hay liên doanh. Ảnh hưởng đáng kể là quyền tham gia vào việc đưa ra quyết định về chính sách tài chính và hoạt động nhưng không kiểm soát các chính sách đó.

Mốc định lượng: nắm giữ trực tiếp hoặc gián tiếp qua công ty con ít nhất 20% quyền biểu quyết thì có ảnh hưởng đáng kể, trừ khi có quy định hoặc thoả thuận khác (VAS 07 đoạn 04). TT99 TK 222 diễn đạt là "từ 20% đến dưới 50% quyền biểu quyết ... mà không có thỏa thuận khác". Biểu hiện thường gặp: có đại diện trong Hội đồng quản trị, tham gia hoạch định chính sách, có giao dịch quan trọng với bên nhận đầu tư, trao đổi cán bộ quản lý, cung cấp thông tin kỹ thuật quan trọng.

### Đầu tư khác

Khoản đầu tư vào công cụ vốn của đơn vị khác mà không có quyền kiểm soát, đồng kiểm soát hay ảnh hưởng đáng kể ghi ở **TK 2281 - Đầu tư góp vốn vào đơn vị khác**. Khoản này không đi vào quy trình hợp nhất.

> 📌 Tỷ lệ % chỉ là điểm xuất phát. Cả VAS 25, VAS 07 và TT99 đều cho phép kết luận khác nếu thoả thuận thực tế khác. Khi lập danh mục pháp nhân, BA ghi cả tỷ lệ lẫn căn cứ phân loại (xem [[ktqt-02-danh-muc-phap-nhan]]).

## Ba loại báo cáo tài chính

### Báo cáo tài chính riêng

Mỗi pháp nhân lập báo cáo tài chính của chính mình. Trên BCTC riêng của nhà đầu tư:

- Khoản đầu tư vào công ty con trình bày theo phương pháp giá gốc (VAS 25 đoạn 26);
- Khoản đầu tư vào công ty liên kết kế toán theo phương pháp giá gốc (VAS 07 đoạn 08);
- Khoản vốn góp liên doanh trình bày theo phương pháp giá gốc (VAS 08 đoạn 25).

Phương pháp giá gốc nghĩa là ghi khoản đầu tư theo giá gốc và không điều chỉnh theo thay đổi phần sở hữu trong tài sản thuần của bên nhận đầu tư; thu nhập chỉ là phần được chia từ lợi nhuận thuần luỹ kế phát sinh sau ngày đầu tư (VAS 07 đoạn 03, 07). TT99 thể hiện điều này ở bút toán nhận cổ tức: cổ tức cho giai đoạn sau ngày đầu tư ghi Có TK 515, cổ tức cho giai đoạn trước ngày đầu tư ghi giảm khoản đầu tư (Có TK 221).

### Báo cáo tài chính tổng hợp

BCTC tổng hợp dành cho một pháp nhân có đơn vị trực thuộc. TT99 Điều 16 khoản 2: doanh nghiệp có đơn vị trực thuộc phải tổng hợp thông tin tài chính của trụ sở chính và các đơn vị trực thuộc vào BCTC của doanh nghiệp, trên cơ sở loại trừ tất cả giao dịch nội bộ giữa trụ sở chính với đơn vị trực thuộc hoặc giữa các đơn vị trực thuộc với nhau. Trụ sở chính và đơn vị trực thuộc không bắt buộc lập BCTC riêng của đơn vị mình, trừ khi pháp luật khác yêu cầu.

TT202 Điều 1 khoản 3 cho phép vận dụng nguyên tắc hợp nhất để lập BCTC tổng hợp giữa doanh nghiệp và các đơn vị trực thuộc (TT43/2026 đã sửa cụm từ trong khoản này thành "các đơn vị trực thuộc").

### Báo cáo tài chính hợp nhất

BCTC hợp nhất là báo cáo của cả tập đoàn (công ty mẹ và các công ty con), trình bày như của một doanh nghiệp độc lập, không tính đến ranh giới pháp lý giữa các pháp nhân (VAS 25 đoạn 06; TT202 Điều 3). Luật Kế toán Điều 29 yêu cầu đơn vị kế toán cấp trên lập BCTC tổng hợp hoặc BCTC hợp nhất dựa trên BCTC của các đơn vị kế toán trong cùng đơn vị kế toán cấp trên. Chi tiết logic hợp nhất ở [[ktqt-04-bctc-hop-nhat]].

Trong BCTC hợp nhất, mỗi loại quan hệ được đưa vào khác nhau:

| Loại quan hệ | Tài khoản trên sổ nhà đầu tư | BCTC riêng | BCTC hợp nhất |
|---|---|---|---|
| Đơn vị trực thuộc | 1361 / 136, 336 | Không phải là khoản đầu tư; số liệu đã nằm trong BCTC của doanh nghiệp | Đã tổng hợp từ trước |
| Công ty con | 221 | Giá gốc | Hợp nhất từng khoản mục, loại trừ khoản đầu tư và giao dịch nội bộ |
| Liên doanh (cơ sở được đồng kiểm soát) | 222 | Giá gốc | Phương pháp vốn chủ sở hữu (VAS 08 đoạn 26) |
| Liên kết | 222 | Giá gốc | Phương pháp vốn chủ sở hữu (VAS 07 đoạn 09) |
| Đầu tư khác | 2281 | Giá gốc | Không hợp nhất, không áp dụng vốn chủ sở hữu |

Phương pháp vốn chủ sở hữu: khoản đầu tư ghi ban đầu theo giá gốc, sau đó điều chỉnh tăng giảm theo phần sở hữu của nhà đầu tư trong lãi hoặc lỗ của bên nhận đầu tư; khoản được chia ghi giảm giá trị khoản đầu tư (VAS 07 đoạn 06). VAS 07 đoạn 09 và VAS 08 đoạn 28 nêu trường hợp vẫn dùng giá gốc trong BCTC hợp nhất: khoản đầu tư dự kiến thanh lý trong tương lai gần (dưới 12 tháng), hoặc bên nhận đầu tư hoạt động dưới hạn chế khắt khe dài hạn làm cản trở đáng kể việc chuyển vốn cho nhà đầu tư.

> ⚠️ Một công ty mẹ không có công ty con thì không lập BCTC hợp nhất. VAS 08 đoạn 38–39: bên góp vốn liên doanh không có công ty con không lập BCTC hợp nhất mà trình bày thông tin về khoản vốn góp liên doanh theo yêu cầu của chuẩn mực.

## Ví dụ giả định

Công ty mẹ M tại Việt Nam có:

- Chi nhánh Hà Nội, hạch toán phụ thuộc;
- Công ty B, M nắm 70% quyền biểu quyết;
- Công ty C, M và một đối tác mỗi bên 50%, hợp đồng liên doanh quy định các quyết định trọng yếu cần cả hai bên đồng ý;
- Công ty D, M nắm 30%, có một ghế trong Hội đồng quản trị;
- Công ty E, M nắm 5%, không có thoả thuận gì thêm.

Phân loại và báo cáo:

| Đơn vị | Loại | Tài khoản trên sổ M | Báo cáo liên quan |
|---|---|---|---|
| Chi nhánh Hà Nội | Đơn vị trực thuộc | 1361, 136, 336 | Gộp vào BCTC của M (tổng hợp) |
| B | Công ty con | 221 | B lập BCTC riêng; M hợp nhất B |
| C | Liên doanh | 222 | C lập BCTC riêng; BCTC hợp nhất của M dùng phương pháp vốn chủ sở hữu |
| D | Liên kết | 222 | D lập BCTC riêng; BCTC hợp nhất của M dùng phương pháp vốn chủ sở hữu |
| E | Đầu tư khác | 2281 | Giá gốc ở cả hai báo cáo |

M lập hai bộ: BCTC riêng (đã gồm chi nhánh Hà Nội, khoản đầu tư vào B, C, D, E theo giá gốc) và BCTC hợp nhất (M + B hợp nhất từng khoản mục; C, D theo vốn chủ sở hữu; E theo giá gốc).

## Hệ quả lên thiết kế công ty trong ERP

Phân loại pháp lý ở trên là căn cứ để dựng cấu trúc công ty trong hệ thống. Lấy Odoo 19 làm ví dụ:

- **Company**: mỗi company khai báo thông tin riêng như mã số thuế (Tax ID) và đồng tiền (Currency); phần thông tin chung thay đổi theo gói bản địa hoá (fiscal localization). Odoo hướng dẫn công ty con độc lập phải tạo là company bổ sung, không tạo là branch.
- **Branch**: là phân nhánh trong một company. Branch dùng chung hệ thống tài khoản, đồng tiền chính và thuế của company mẹ; có thể có sổ nhật ký (journal) riêng; dùng chung kỳ tài chính nên ngày khoá sổ của company mẹ áp dụng cho mọi branch (branch có thể đặt ngày khoá sớm hơn). Company mẹ xem được dữ liệu của mọi branch, mỗi branch chỉ thấy dữ liệu của mình. Cấu trúc này khớp với đơn vị trực thuộc hạch toán phụ thuộc.
- **Consolidation**: Odoo mô tả hợp nhất là gộp dữ liệu của nhiều company tách biệt, mỗi company có sổ riêng; branch là phân nhánh của một pháp nhân và không hợp nhất theo cùng cách.

Liên doanh và liên kết thường không cần là company trong ERP của nhà đầu tư: nhà đầu tư chỉ theo dõi khoản đầu tư (TK 222) trên sổ của mình. Nếu tập đoàn vận hành sổ sách hộ cho liên doanh trên cùng hệ thống thì đó là quyết định vận hành, không đổi phân loại kế toán.

> ❌ Không dựng một công ty con thành branch chỉ vì muốn dùng chung danh mục hay báo cáo gộp. Công ty con là pháp nhân riêng, có sổ, BCTC riêng và nghĩa vụ riêng; giao dịch giữa nó với công ty mẹ hạch toán khác với giao dịch nội bộ một pháp nhân (xem [[ktqt-03-giao-dich-noi-bo]]).

> 💡 Câu hỏi đầu tiên khi nhận sơ đồ tập đoàn: "Đơn vị này có giấy chứng nhận đăng ký doanh nghiệp riêng không, và ai kiểm soát nó?" Hai câu trả lời này quyết định gần hết cấu trúc công ty trong hệ thống.

Phần thông tin chi tiết cần thu thập cho từng pháp nhân (chuẩn mực, tiền tệ, năm tài chính) ở [[ktqt-02-danh-muc-phap-nhan]]; hệ thống báo cáo tài chính của một doanh nghiệp đơn lẻ theo TT99 ở [[kt-38-he-thong-bctc]].

## Nguồn

- Chuẩn mực kế toán Việt Nam số 25 "Báo cáo tài chính hợp nhất và kế toán khoản đầu tư vào công ty con", đoạn 03, 06, 09, 10, 26 (ban hành theo Quyết định 234/2003/QĐ-BTC): https://vanban.vcci.com.vn/quyet-dinh-2342003qd-btc-cua-bo-tai-chinh-ve-viec-ban-hanh-va-cong-bo-sau-06-chuan-muc-ke-toan-viet-nam-dot-3
- Chuẩn mực kế toán Việt Nam số 07 "Kế toán các khoản đầu tư vào công ty liên kết", đoạn 03–09 (cùng Quyết định 234/2003/QĐ-BTC, URL như trên)
- Chuẩn mực kế toán Việt Nam số 08 "Thông tin tài chính về những khoản vốn góp liên doanh", đoạn 03–04, 09–28, 38–39 (cùng Quyết định 234/2003/QĐ-BTC, URL như trên)
- Thông tư 99/2025/TT-BTC, Điều 16 khoản 2 (BCTC của doanh nghiệp có đơn vị trực thuộc); Phụ lục II: nguyên tắc kế toán các khoản đầu tư vào đơn vị khác, TK 136 (TK 1361), TK 221, TK 222, TK 228 (TK 2281), TK 336: https://thuvienphapluat.vn/phap-luat-nha-dat/tai-ve-toan-bo-phu-luc-thong-tu-992025ttbtc-thay-the-thong-tu-200-2014-tu-01012026-10694.html
- Thông tư 202/2014/TT-BTC, Điều 1 khoản 3, Điều 3, Điều 8: https://caselaw.vn/van-ban-phap-luat/264198-thong-tu-202-2014-tt-btc-huong-dan-phuong-phap-lap-va-trinh-bay-bao-cao-tai-chinh-hop-nhat-do-bo-truong-bo-tai-chinh-ban-hanh
- Thông tư 43/2026/TT-BTC sửa đổi Thông tư 202/2014/TT-BTC, Điều 2 khoản 2: https://luatvietnam.vn/tai-chinh/thong-tu-43-2026-tt-btc-sua-doi-bao-cao-tai-chinh-hop-nhat-hieu-luc-20-04-2026-432924-d1.html
- Luật Kế toán số 88/2015/QH13 (văn bản hợp nhất đăng Công báo số 172 ngày 31/03/2026), Điều 29 khoản 2 điểm b; bản gốc: https://caselaw.vn/van-ban-phap-luat/115612-luat-ke-toan-so-88-2015-qh13-ngay-20-11-2015-cua-quoc-hoi
- Odoo 19 Documentation, Companies (mục Company, Branches): https://www.odoo.com/documentation/19.0/applications/general/companies.html
- Odoo 19 Documentation, Accounting (mục Branches): https://www.odoo.com/documentation/19.0/applications/finance/accounting.html
- Odoo 19 Documentation, Consolidation: https://www.odoo.com/documentation/19.0/applications/finance/accounting/get_started/consolidation.html
