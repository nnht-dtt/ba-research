# Báo cáo kết quả hoạt động kinh doanh (B02-DN)

Bài này giúp bạn đọc mẫu B02-DN theo TT99 từ doanh thu đến lợi nhuận sau thuế, biết mỗi chỉ tiêu lấy số phát sinh từ tài khoản nào, và nhận ra những chỗ hệ thống phải mở chi tiết thì báo cáo mới tách đúng chỉ tiêu.

## Báo cáo này cho biết gì

Theo Phụ lục IV TT99, Báo cáo kết quả hoạt động kinh doanh phản ánh tình hình và kết quả kinh doanh của doanh nghiệp, gồm kết quả từ hoạt động kinh doanh chính, hoạt động tài chính và hoạt động khác. Khác với B01-DN đọc số dư, B02-DN đọc **số phát sinh trong kỳ**, căn cứ sổ tổng hợp và sổ chi tiết các tài khoản từ loại 5 đến loại 9, cùng báo cáo năm trước.

Báo cáo có 5 cột: chỉ tiêu, mã số, số hiệu thuyết minh, số năm nay, số năm trước để so sánh. Cột thuyết minh là đường dẫn tới phần giải trình chi tiết trong B09-DN ([[kt-42-thuyet-minh-bctc]]).

Phần lớn chỉ tiêu được lấy từ phát sinh của tài khoản doanh thu, chi phí **đối ứng với TK 911**, tức là số đã kết chuyển ở bước khoá sổ ([[kt-36-quy-trinh-khoa-so]]). Nếu chưa kết chuyển đủ, báo cáo sẽ thiếu.

## Các chỉ tiêu và tài khoản nguồn

| Mã số | Chỉ tiêu | Nguồn hoặc công thức |
|---|---|---|
| 01 | Doanh thu bán hàng và cung cấp dịch vụ | Luỹ kế phát sinh Có chi tiết TK 511 |
| 02 | Các khoản giảm trừ doanh thu | Phát sinh Nợ TK 511 đối ứng Có TK 521 (chiết khấu thương mại, giảm giá, hàng bán bị trả lại) |
| 10 | Doanh thu thuần | 10 = 01 − 02 |
| 11 | Giá vốn hàng bán | Phát sinh Có TK 632 đối ứng Nợ TK 911 |
| 20 | Lợi nhuận gộp | 20 = 10 − 11 |
| 21 | Lãi/lỗ của hoạt động bán, thanh lý BĐSĐT | Chênh lệch giữa doanh thu bán, thanh lý BĐSĐT với giá trị còn lại và chi phí bán; có thể âm |
| 22 | Doanh thu hoạt động tài chính | Phát sinh Nợ TK 515 đối ứng Có TK 911 |
| 23 | Chi phí tài chính | Phát sinh Có TK 635 đối ứng Nợ TK 911 |
| 24 | Trong đó: Chi phí đi vay | Sổ chi tiết TK 635 |
| 25 | Chi phí bán hàng | Phát sinh Có TK 641 đối ứng Nợ TK 911 |
| 26 | Chi phí quản lý doanh nghiệp | Phát sinh Có TK 642 đối ứng Nợ TK 911 |
| 30 | Lợi nhuận thuần từ hoạt động kinh doanh | 30 = 20 + 21 + 22 − (23 + 25 + 26) |
| 31 | Thu nhập khác | Phát sinh Nợ TK 711 đối ứng Có TK 911 |
| 32 | Chi phí khác | Phát sinh Có TK 811 đối ứng Nợ TK 911 |
| 40 | Lợi nhuận khác | 40 = 31 − 32 |
| 50 | Tổng lợi nhuận kế toán trước thuế | 50 = 30 + 40 |
| 51 | Chi phí thuế TNDN hiện hành | Phát sinh TK 8211 đối ứng TK 911; có thể âm |
| 52 | Chi phí thuế TNDN hoãn lại | Phát sinh TK 8212 đối ứng TK 911; có thể âm |
| 60 | Lợi nhuận sau thuế TNDN | 60 = 50 − 51 − 52 |
| 70 | Lãi cơ bản trên cổ phiếu | Chỉ công ty cổ phần |
| 71 | Lãi suy giảm trên cổ phiếu | Chỉ công ty cổ phần |

Chú ý Mã số 24 là chỉ tiêu "trong đó" của Mã số 23, không tham gia công thức Mã số 30.

## Những chỗ hệ thống phải mở chi tiết

### Doanh thu: không gồm thuế gián thu, tách doanh thu BĐSĐT

- Mã số 01 không bao gồm thuế GTGT (kể cả GTGT nộp theo phương pháp trực tiếp), thuế tiêu thụ đặc biệt, thuế xuất khẩu, thuế bảo vệ môi trường và các thuế, phí gián thu khác.
- Các khoản thuế gián thu doanh nghiệp không được hưởng mà đã ghi giảm TK 511 trên sổ **không** được tính là giảm trừ doanh thu ở Mã số 02, vì bản chất là khoản thu hộ Nhà nước.
- Doanh thu thanh lý, nhượng bán BĐSĐT không nằm trong Mã số 01; giá trị còn lại và chi phí thanh lý BĐSĐT không nằm trong Mã số 11. Hai phần này được bù trừ và trình bày thuần ở Mã số 21. Theo hướng dẫn TK 217, cuối kỳ có bút toán bù trừ giữa giá bán với giá trị còn lại và chi phí bán BĐSĐT. Khi lãi: `Nợ TK 511` (giá bán) `/ Có TK 632` (giá trị còn lại và chi phí bán) `/ Có TK 911` (số lãi). Khi lỗ: `Nợ TK 511` (giá bán), `Nợ TK 911` (số lỗ) `/ Có TK 632`.

Hệ thống cần tài khoản chi tiết hoặc chiều phân tích để tách doanh thu, giá vốn BĐSĐT khỏi doanh thu, giá vốn thông thường. Mã số 21 là chỉ tiêu mới của TT99; theo bài so sánh của MISA, TT200 không có chỉ tiêu này và công thức Mã số 30 cũng thay đổi theo.

### Giảm trừ doanh thu theo loại

Mã số 02 lấy phát sinh TK 511 đối ứng TK 521, chi tiết chiết khấu thương mại, giảm giá hàng bán, hàng bán bị trả lại. TK 521 phải theo dõi chi tiết theo từng khách hàng, loại hàng; bản thuyết minh cũng yêu cầu tách các khoản này ([[kt-18-giam-tru-tra-truoc]]).

### Chênh lệch tỷ giá trình bày thuần

Với lãi, lỗ chênh lệch tỷ giá do đánh giá lại khoản mục tiền tệ có gốc ngoại tệ cuối kỳ: nếu tổng lãi lớn hơn tổng lỗ thì trình bày số lãi thuần ở Mã số 22; ngược lại trình bày số lỗ thuần ở Mã số 23. Hệ thống cần tách riêng lãi, lỗ do đánh giá lại cuối kỳ với lãi, lỗ thực hiện khi thanh toán để tính được số thuần này.

### Chi phí đi vay

Mã số 24 lấy từ sổ chi tiết TK 635. Nếu TK 635 không mở chi tiết cho chi phí đi vay (tách với lỗ tỷ giá, chiết khấu thanh toán, dự phòng đầu tư...) thì không lập được chỉ tiêu này.

### Thanh lý TSCĐ trình bày thuần

Với giao dịch thanh lý, nhượng bán TSCĐ, Mã số 31 chỉ ghi phần chênh lệch thu cao hơn giá trị còn lại và chi phí thanh lý; Mã số 32 chỉ ghi phần chênh lệch thu thấp hơn. Nghĩa là dù trên sổ thu thanh lý ghi TK 711 và giá trị còn lại ghi TK 811 riêng ([[kt-29-vong-doi-tscd]]), khi lên báo cáo phải bù trừ theo từng giao dịch thanh lý. Hệ thống cần gắn được bút toán 711, 811 với giao dịch thanh lý tương ứng.

### Thuế TNDN có thể âm

Mã số 51 và 52 ghi số âm (trong ngoặc đơn) khi TK 8211 hoặc 8212 phát sinh bên Có đối ứng TK 911, tức trường hợp thu nhập thuế. Báo cáo không được giả định chi phí thuế luôn dương ([[kt-37-thue-tndn]]).

### Lãi trên cổ phiếu

Mã số 70, 71 chỉ trình bày trên BCTC của công ty cổ phần là doanh nghiệp độc lập; công ty mẹ là công ty cổ phần chỉ trình bày trên BCTC hợp nhất, không trình bày trên BCTC riêng. Công thức trừ số trích quỹ khen thưởng, phúc lợi khỏi lợi nhuận phân bổ cho cổ đông phổ thông; nếu số trích năm sau được duyệt khác số ước tính thì điều chỉnh hồi tố lãi trên cổ phiếu năm trước. Đây thường là bảng tính ngoài hệ thống, BA chỉ cần xác nhận nguồn số liệu.

## Giao dịch nội bộ và đơn vị trực thuộc

Khi lập báo cáo tổng hợp trụ sở chính với đơn vị trực thuộc, phải loại trừ toàn bộ doanh thu, thu nhập, chi phí phát sinh từ giao dịch nội bộ. Hướng dẫn từng chỉ tiêu 01, 11, 22, 23, 31, 32 đều nhắc lại yêu cầu này. Hệ thống cần đánh dấu được giao dịch giữa các đơn vị trong cùng doanh nghiệp (đối tác nội bộ, tài khoản 136, 336) để báo cáo tự loại trừ. Với nhiều pháp nhân, xem thêm [[ktqt-04-bctc-hop-nhat]].

## Phân loại chi phí theo chức năng và theo yếu tố

B02-DN trình bày chi phí theo chức năng: giá vốn, bán hàng, quản lý. VAS 21 (đoạn 60) yêu cầu doanh nghiệp phân loại chi phí theo chức năng phải cung cấp thêm thông tin về tính chất chi phí, ví dụ khấu hao, lương. Mẫu B09-DN có bảng "Chi phí sản xuất kinh doanh theo yếu tố": nguyên liệu vật liệu, nhân công, khấu hao TSCĐ, dịch vụ mua ngoài, chi phí khác bằng tiền.

Vì vậy hệ thống cần giữ được cả hai chiều cho một khoản chi phí: chức năng (TK 632, 641, 642, 627...) và yếu tố (thường là tài khoản chi tiết cấp dưới hoặc một chiều phân tích). Thiết kế hệ thống tài khoản chi tiết TK 641, 642 theo nội dung chi phí là cách phổ biến; TT99 cũng hướng dẫn TK 641 mở chi tiết theo chi phí nhân viên, vật liệu bao bì, dụng cụ, khấu hao, dịch vụ mua ngoài, chi phí bằng tiền khác ([[kt-33-trung-tam-chi-phi]]).

> 📌 Ví dụ giả định (triệu đồng): doanh thu 511 là 10.000, giảm trừ 300, giá vốn 6.500, lãi bán BĐSĐT thuần 200, doanh thu tài chính 50, chi phí tài chính 120 (trong đó chi phí đi vay 100), chi phí bán hàng 900, quản lý 700, thu nhập khác 40, chi phí khác 10.
> Doanh thu thuần 9.700; lợi nhuận gộp 3.200; Mã số 30 = 3.200 + 200 + 50 − (120 + 900 + 700) = 1.730; lợi nhuận khác 30; lợi nhuận trước thuế 1.760. Chi phí đi vay 100 chỉ là dòng "trong đó", không trừ thêm lần nữa.

## Nguồn

- Thông tư 99/2025/TT-BTC, Phụ lục IV: mẫu B02-DN và Mục 2 phần C (nội dung, cơ sở lập, phương pháp lập chỉ tiêu Mã số 01 đến 71). https://luatvietnam.vn/doanh-nghiep/thong-tu-99-2025-tt-btc-huong-dan-che-do-ke-toan-doanh-nghiep-tu-01-01-2026-417085-d1.html
- Thông tư 99/2025/TT-BTC, Phụ lục II: hướng dẫn TK 521, 641, 911 và bút toán bù trừ bán, thanh lý BĐSĐT. https://cms.luatvietnam.vn/uploaded/Others/2025/11/16/Phu_luc_II._He_thong_tai_khoan_ke_toan_doanh_nghiep_1611132408.docx
- Thông tư 99/2025/TT-BTC, Phụ lục IV: mẫu B09-DN, bảng chi phí sản xuất kinh doanh theo yếu tố.
- Chuẩn mực kế toán số 21 – Trình bày báo cáo tài chính (Quyết định 234/2003/QĐ-BTC): đoạn 26 đến 29 (bù trừ thu nhập, chi phí), đoạn 60. https://vanban.vcci.com.vn/quyet-dinh-2342003qd-btc-cua-bo-tai-chinh-ve-viec-ban-hanh-va-cong-bo-sau-06-chuan-muc-ke-toan-viet-nam-dot-3
- MISA AMIS, So sánh biểu mẫu BCTC giữa TT99 và TT200 (chỉ dùng đối chiếu). https://amis.misa.vn/251687/so-sanh-ve-bieu-mau-bao-cao-tai-chinh-giua-thong-tu-99-va-thong-tu-200/
