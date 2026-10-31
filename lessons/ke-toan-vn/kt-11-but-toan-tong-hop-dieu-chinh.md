# Bút toán tổng hợp, huỷ và điều chỉnh chứng từ

Bài này giúp BA thiết kế đúng ba việc hay gây tranh cãi trong dự án: cho phép kế toán nhập bút toán tay trên sổ cái, sửa một bút toán đã ghi sổ, và xử lý hoá đơn điện tử đã lập sai. Cả ba đều phải để lại dấu vết. Luật Kế toán, Thông tư 99/2025/TT-BTC (TT99) và Thông tư 91/2026/TT-BTC (TT91) quy định khá cụ thể cách làm.

## Bút toán tổng hợp (bút toán tay)

Phần lớn bút toán trong ERP sinh tự động từ phân hệ: hoá đơn, phiếu nhập, phiếu chi. Bút toán tổng hợp là bút toán kế toán nhập trực tiếp vào sổ cái, không qua phân hệ nghiệp vụ. Ví dụ trong Phụ lục II TT99 có nhiều bút toán thuộc loại này:

- Kết chuyển cuối kỳ: `Nợ TK 511 / Có TK 911`, `Nợ TK 911 / Có TK 632`, `Nợ TK 911 / Có TK 421` (TK 911, điểm 3.a–i).
- Phân bổ chi phí chờ phân bổ vào chi phí từng kỳ theo tiêu thức doanh nghiệp chọn (TK 242, điểm 1.c).
- Xử lý chênh lệch giữa sổ kế toán và sổ phụ ngân hàng chưa rõ nguyên nhân: ghi theo số ngân hàng, phần chênh lệch đưa vào TK 138 hoặc TK 338 (TK 112, điểm 1.b).

### Bút toán tay vẫn phải có chứng từ

Luật Kế toán yêu cầu **căn cứ vào chứng từ kế toán để ghi sổ** (khoản 2 Điều 26). TT99 nhắc lại tại khoản 2 Điều 13. Phụ lục I TT99 không có mẫu chứng từ riêng cho bút toán nhập tay. Luật cho phép: chứng từ chưa có mẫu thì đơn vị **được tự lập**, nhưng phải đủ nội dung của Điều 16 (khoản 2 Điều 18). TT99 Điều 9 cho doanh nghiệp tự thiết kế biểu mẫu, kèm Quy chế hạch toán kế toán.

Với ERP, bút toán tay nên là một loại chứng từ có:

- Số hiệu và ngày lập. Số chạy theo dãy riêng của journal tổng hợp.
- Diễn giải nội dung nghiệp vụ.
- Người lập, người duyệt. Luồng duyệt áp dụng trước khi ghi sổ.
- Chứng từ gốc đính kèm hoặc tham chiếu, ví dụ bảng tính phân bổ, biên bản đối chiếu, quyết định xử lý.
- Trường đối tượng (khách hàng, nhà cung cấp, mặt hàng, tài sản) trên dòng ghi vào tài khoản cần theo dõi chi tiết. Nếu thiếu, sổ chi tiết sẽ lệch Sổ Cái, xem [[kt-10-so-con-so-cai]].

> 💡 Có thể cân nhắc chặn bút toán tay vào một số tài khoản do phân hệ quản lý, như TK 131, 331, 152–156, 211–214, để buộc nghiệp vụ đi qua phân hệ. Đây là quyết định kiểm soát nội bộ của doanh nghiệp, không phải quy định pháp luật. Cần chốt với kế toán trưởng và ghi vào quy chế.

## Sửa sổ kế toán: không xoá, chỉ điều chỉnh

### Quy định gốc

Điều 27 Luật Kế toán:

- Khi phát hiện sổ có sai sót, **không được tẩy xoá làm mất dấu vết** thông tin, số liệu ghi sai. Phải sửa theo một trong ba phương pháp (khoản 1):
  - a) **Ghi cải chính**: gạch một đường thẳng vào chỗ sai, ghi số hoặc chữ đúng ở phía trên, kế toán trưởng ký bên cạnh.
  - b) **Ghi số âm**: ghi lại số sai bằng mực đỏ hoặc trong ngoặc đơn, sau đó ghi số đúng, kế toán trưởng ký bên cạnh.
  - c) **Ghi điều chỉnh**: lập "chứng từ điều chỉnh" và ghi thêm số chênh lệch cho đúng.
- **Ghi sổ bằng phương tiện điện tử thì sửa theo phương pháp c**, tức ghi điều chỉnh (khoản 4).
- Phát hiện sai sót **trước** khi nộp BCTC năm cho cơ quan nhà nước có thẩm quyền: sửa trên sổ kế toán của năm đó (khoản 2).
- Phát hiện **sau** khi đã nộp BCTC năm: sửa trên sổ của năm phát hiện sai sót và thuyết minh việc sửa (khoản 3).

TT99 Điều 28 bổ sung yêu cầu với phần mềm kế toán: khi sửa chữa **phải lưu lại dấu vết** nội dung đã ghi sổ theo trình tự thời gian (điểm b khoản 1). Hệ thống phải có khả năng **cảnh báo hoặc ngăn chặn** việc cố ý can thiệp làm thay đổi thông tin, số liệu đã ghi sổ (điểm c khoản 1).

Hệ quả cho thiết kế: một bút toán đã ghi sổ không được sửa trực tiếp số tiền, tài khoản, và không được xoá. Mọi thay đổi đi bằng một chứng từ điều chỉnh mới.

### Hai kỹ thuật điều chỉnh thường gặp

Ví dụ giả định (bỏ qua thuế GTGT): tiền thuê kho chứa hàng hoá chờ bán 20.000.000 đồng nhưng bị ghi vào TK 6427 - Chi phí dịch vụ mua ngoài của chi phí quản lý doanh nghiệp. Bút toán gốc là `Nợ TK 6427 / Có TK 331`. Đúng ra phải ghi `Nợ TK 6417 / Có TK 331` (TK 6417 - Chi phí dịch vụ mua ngoài của chi phí bán hàng; Phụ lục II TT99 nêu tiền thuê kho, thuê bãi phục vụ bán hàng là ví dụ của tài khoản này).

**Cách 1: bút toán điều chỉnh phần chênh lệch.** Lập chứng từ điều chỉnh, chỉ ghi phần cần chuyển:

`Nợ TK 6417 / Có TK 6427`: 20.000.000

Đây đúng nghĩa "ghi thêm số chênh lệch cho đúng" của điểm c khoản 1 Điều 27.

**Cách 2: bút toán đảo rồi ghi lại.** Lập bút toán ngược toàn bộ bút toán gốc (`Nợ TK 331 / Có TK 6427`: 20.000.000), sau đó ghi bút toán đúng (`Nợ TK 6417 / Có TK 331`: 20.000.000). ERP thường có sẵn chức năng "đảo bút toán" (reverse). Tài liệu Odoo 19 mô tả: khi tạo credit note từ hoá đơn, hệ thống tạo một bút toán đảo để triệt tiêu các dòng của chứng từ gốc. Odoo 19 cũng coi phát hành credit note hoặc debit note là cách hợp lệ để huỷ, hoàn tiền hoặc sửa một hoá đơn đã xác nhận.

Cả hai cách đều giữ nguyên bút toán gốc và thêm chứng từ mới có ngày, người lập, lý do. Cách 2 tạo nhiều dòng hơn, nhưng dễ đọc hơn khi bút toán gốc sai nhiều trường cùng lúc.

> ⚠️ Cần xác nhận: Luật Kế toán chỉ gọi tên "ghi điều chỉnh bằng chứng từ điều chỉnh". Việc đảo toàn bộ rồi ghi lại có được coi là cùng phương pháp hay không, và kỳ nào dùng cách nào, nên được kế toán trưởng chốt trong quy chế hạch toán của doanh nghiệp.

### Kỳ đã khoá

ERP dùng ngày khoá sổ (lock date) để chặn sửa kỳ cũ. Tài liệu Odoo 19 viết: đặt lock date thì không sửa được bút toán đã ghi sổ và không ghi được bút toán mới có ngày hạch toán bằng hoặc trước ngày khoá. Hệ thống tự chuyển ngày bút toán mới sang sau ngày khoá. Quản trị viên có thể tạo ngoại lệ tạm thời, có ghi lại lý do. Riêng "hard lock date" thì không đảo ngược được.

Ghép với khoản 2, 3 Điều 27 Luật Kế toán:

- Sai sót phát hiện khi BCTC năm **chưa nộp**: điều chỉnh vào sổ của năm đó. Nếu kỳ đã khoá mềm thì cần mở ngoại lệ có kiểm soát.
- Sai sót phát hiện **sau khi đã nộp** BCTC năm: điều chỉnh vào sổ của năm phát hiện và thuyết minh. Không mở lại năm cũ.

Cách trình bày điều chỉnh sai sót kỳ trước trên BCTC theo chuẩn mực xem [[kt-42-thuyet-minh-bctc]]. Quy trình khoá sổ xem [[kt-36-quy-trinh-khoa-so]].

## Hoá đơn điện tử lập sai: điều chỉnh hay thay thế

Từ 01/07/2026, việc xử lý hoá đơn điện tử đã lập theo **Điều 10 TT91**. Thông tư này hướng dẫn Nghị định 254/2026/NĐ-CP. Hai văn bản thay Nghị định 123/2020/NĐ-CP, Nghị định 70/2025/NĐ-CP và Thông tư 32/2025/TT-BTC, xem [[kt-09-chung-tu-hoa-don]].

Điều 10 áp dụng cho hoá đơn đã được cấp mã và hoá đơn không mã đã gửi dữ liệu đến cơ quan thuế (khoản 1). Sai sót chia làm hai nhóm:

| Sai ở đâu | Cách xử lý (khoản 1 Điều 10 TT91) |
|---|---|
| Tên, địa chỉ, số tiền bằng chữ hoặc nội dung khác, **nhưng không sai** mã số thuế, số tiền, thuế suất, tiền thuế, hàng hoá | Người bán thông báo cho người mua, **không phải lập lại hoá đơn**. Gửi thông báo hoá đơn sai cho cơ quan thuế theo Mẫu 04/SS-HĐĐT (điểm a) |
| Mã số thuế; tên hàng hoá, quy cách, chất lượng; số tiền; thuế suất; tiền thuế; hoặc nội dung bắt buộc khác | Người bán **chọn** lập hoá đơn điều chỉnh (ghi "Điều chỉnh cho hoá đơn Mẫu số… ký hiệu… số… ngày…") hoặc hoá đơn thay thế (ghi "Thay thế cho hoá đơn Mẫu số… ký hiệu… số… ngày…") (điểm b) |

Các điểm cần đưa vào thiết kế:

- **Văn bản thoả thuận trước khi điều chỉnh, thay thế**: người mua là tổ chức, hộ kinh doanh thì hai bên lập văn bản thoả thuận ghi rõ nội dung sai. Người mua là cá nhân thì người bán thông báo cho người mua hoặc thông báo trên website. Người bán lưu văn bản và xuất trình khi được yêu cầu. Một số trường hợp không bắt buộc văn bản thoả thuận, như bán trên nền tảng thương mại điện tử (điểm b).
- **Gộp nhiều hoá đơn**: trong tháng lập sai cùng thông tin (người mua, tên hàng, đơn giá, số lượng, thuế suất) trên nhiều hoá đơn của cùng một người mua thì được lập **một** hoá đơn điều chỉnh hoặc thay thế cho nhiều hoá đơn, kèm bảng kê Mẫu 01/BK-ĐCTT (điểm b).
- **Chỉ được thay thế**: hoá đơn từ máy tính tiền, và hoá đơn bán tài sản phải đăng ký quyền sở hữu, sử dụng (điểm c, có ngoại lệ).
- **Nhất quán hình thức**: đã chọn điều chỉnh (hoặc thay thế) ở lần xử lý đầu thì các lần sau cũng phải theo hình thức đó (điểm a khoản 6).
- **Dấu của giá trị**: điều chỉnh tăng ghi số dương, điều chỉnh giảm ghi số âm, đúng thực tế (điểm c khoản 6). Nếu cơ quan thuế phát hiện sai, cơ quan thuế thông báo theo Mẫu 01/TB-RSĐT, và người bán rà soát để điều chỉnh hoặc thay thế (khoản 3).

### Hoá đơn điều chỉnh cho nghiệp vụ phát sinh sau

Khoản 5 Điều 10 TT91 dùng hoá đơn điều chỉnh cho các nghiệp vụ **không phải sai sót**:

- Chiết khấu thương mại tính theo số lượng, doanh số: điều chỉnh trên hoá đơn của lần mua cuối hoặc kỳ sau, hoặc lập hoá đơn điều chỉnh kèm bảng kê (điểm b).
- Trả lại hàng (kể cả đổi hàng làm thay đổi giá trị): người bán lập hoá đơn điều chỉnh. Nếu hai bên thoả thuận thì người mua lập hoá đơn trả lại hàng (điểm c.1).
- Giá trị, khối lượng thay đổi khi quyết toán theo kết luận của cơ quan có thẩm quyền: lập hoá đơn mới cho số chênh lệch (điểm a).

Với các trường hợp ở khoản 5, người bán kê khai vào kỳ phát sinh hoá đơn điều chỉnh, người mua kê khai vào kỳ nhận được hoá đơn điều chỉnh (điểm d khoản 6).

> ⚠️ Cần xác nhận: theo EY, TT91 không còn quy định riêng về kỳ kê khai của hoá đơn điều chỉnh, thay thế cho **sai sót** (khoản 1). TT32/2025 trước đây có quy định này. Thời điểm kê khai phải tra cứu thêm pháp luật thuế GTGT và quản lý thuế. Ghi nhận kế toán của bút toán điều chỉnh có cùng kỳ với kỳ kê khai hay không, cần chốt với kế toán và tư vấn thuế của khách hàng.

### Bút toán đi kèm hoá đơn điều chỉnh

Hoá đơn điều chỉnh là chứng từ làm căn cứ cho bút toán điều chỉnh trên sổ. Ví dụ theo Phụ lục II TT99 (TK 521, điểm 3.a), giảm giá hoặc chiết khấu thương mại cho người mua sau khi đã bán, doanh nghiệp tính thuế GTGT theo phương pháp khấu trừ:

`Nợ TK 521 / Nợ TK 3331 / Có TK 131` (hoặc Có TK 111, 112)

TK 521 cuối kỳ kết chuyển sang TK 511. Nếu giảm trừ phát sinh ở kỳ sau cho hàng đã bán kỳ trước, TT99 có nguyên tắc riêng: phát sinh **trước** thời điểm phát hành BCTC thì ghi giảm doanh thu của kỳ lập báo cáo (kỳ trước); phát sinh **sau** thời điểm phát hành thì ghi giảm doanh thu kỳ phát sinh (TK 521, điểm 1.b). Chi tiết ở [[kt-18-giam-tru-tra-truoc]] và [[kt-19-doi-tra-hoan-tien]].

Trong ERP như Odoo, hoá đơn điều chỉnh giảm được thể hiện bằng credit note gắn với hoá đơn gốc. Với hoá đơn thay thế, một cách thiết kế là đảo bút toán của hoá đơn gốc rồi ghi bút toán theo hoá đơn mới (Odoo có lựa chọn "Reverse and Create invoice" theo đúng hướng này). Dù chọn cách nào, cần giữ liên kết giữa hoá đơn gốc, hoá đơn điều chỉnh hoặc thay thế, và văn bản thoả thuận, để truy vết được khi kiểm tra.

> 💡 Trường dữ liệu tối thiểu cho chứng từ điều chỉnh trong ERP: loại xử lý (thông báo sai sót / điều chỉnh / thay thế); số, ký hiệu, mẫu số, ngày hoá đơn gốc; lý do; số văn bản thoả thuận; hình thức đã dùng ở lần xử lý đầu (để chặn đổi hình thức); trạng thái gửi cơ quan thuế.

## Nguồn

- Luật Kế toán số 88/2015/QH13 (văn bản hợp nhất 41/VBHN-VPQH, Công báo số 172 ngày 31/03/2026): Điều 16, khoản 2 Điều 18, khoản 2 Điều 26, Điều 27. https://cdn.thuvienphapluat.vn//uploads/Hoidapphapluat/2026/LNMT/Thang_4/260404/172_41_VBHN_VPQH.pdf
- Thông tư 99/2025/TT-BTC: Điều 9, khoản 2 Điều 13, Điều 28. Toàn văn: https://docs.google.com/document/d/1pVNpXGJEpTA1nRM2pM4IzomKqqulmWNz/export?format=pdf
- Thông tư 99/2025/TT-BTC, Phụ lục I (danh mục chứng từ) và Phụ lục II phần B (TK 112 điểm 1.b; TK 242 điểm 1.c; TK 521 điểm 1.b, 3.a; TK 641, 642 tài khoản cấp 2 6417, 6427; TK 911 điểm 3). https://luatvietnam.vn/doanh-nghiep/thong-tu-99-2025-tt-btc-huong-dan-che-do-ke-toan-doanh-nghiep-tu-01-01-2026-417085-d1.html; Phụ lục II bản Word: https://cms.luatvietnam.vn/uploaded/Others/2025/11/16/Phu_luc_II._He_thong_tai_khoan_ke_toan_doanh_nghiep_1611132408.docx
- Thông tư 91/2026/TT-BTC: Điều 10 (xử lý hoá đơn điện tử đã lập), Điều 25 (hiệu lực). https://luatvietnam.vn/thue/thong-tu-91-2026-tt-btc-quy-dinh-luat-quan-ly-thue-va-hoa-don-dien-tu-439780-d1.html
- Nghị định 254/2026/NĐ-CP: Điều 43 (hiệu lực, văn bản hết hiệu lực). https://luatvietnam.vn/thue/nghi-dinh-254-2026-nd-cp-huong-dan-thi-hanh-luat-quan-ly-thue-2025-ve-hoa-don-dien-tu-439381-d1.html
- EY Việt Nam, Tin nhanh về Thuế tháng 7/2026, mục 6 (Thông tư 91 và kê khai hoá đơn điều chỉnh, thay thế): https://www.ey.com/content/dam/ey-unified-site/ey-com/vi-vn/technical/tax/documents/ey-vn-decree-254-on-electronic-invoices-and-electronic-documents.pdf
- Odoo 19.0 Documentation, Accounting › Customer invoices › Credit notes and refunds: https://www.odoo.com/documentation/19.0/applications/finance/accounting/customer_invoices/credit_notes.html
- Odoo 19.0 Documentation, Accounting › Reporting › Year-end closing (Lock dates): https://www.odoo.com/documentation/19.0/applications/finance/accounting/reporting/year_end.html
