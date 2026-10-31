# Thuế TNDN: những gì hệ thống cần hỗ trợ

Bài này giúp bạn hiểu vì sao lợi nhuận kế toán và thu nhập chịu thuế khác nhau, chi phí thuế TNDN được ghi nhận qua những tài khoản nào, và hệ thống cần giữ dữ liệu gì để kế toán tính, đối chiếu và thuyết minh thuế TNDN. Bài không dạy kê khai hay quyết toán thuế.

## Hai con số lợi nhuận

Chuẩn mực kế toán số 17 (VAS 17) định nghĩa:

- **Lợi nhuận kế toán**: lợi nhuận hoặc lỗ của một kỳ, trước khi trừ thuế TNDN, xác định theo chuẩn mực và chế độ kế toán. Trên Báo cáo kết quả hoạt động kinh doanh đây là chỉ tiêu Mã số 50 ([[kt-40-bao-cao-ket-qua-kinh-doanh]]).
- **Thu nhập chịu thuế**: thu nhập chịu thuế TNDN của một kỳ, xác định theo Luật thuế TNDN hiện hành, là cơ sở tính thuế phải nộp.

Luật Thuế TNDN số 67/2025/QH15 (hiệu lực từ 01/10/2025, áp dụng từ kỳ tính thuế năm 2025) quy định cách tính:

- Thu nhập chịu thuế = Doanh thu − Các khoản chi được trừ + Các khoản thu nhập khác (kể cả thu nhập nhận được ở ngoài Việt Nam) (Điều 7 khoản 2).
- Thu nhập tính thuế = Thu nhập chịu thuế − (Thu nhập được miễn thuế + Các khoản lỗ được kết chuyển theo quy định) (Điều 7 khoản 1).
- Thuế phải nộp = Thu nhập tính thuế × Thuế suất (Điều 11 khoản 1, trừ trường hợp riêng).

Vì kế toán đi theo chuẩn mực còn thuế đi theo luật thuế, hai con số thường lệch nhau. Hệ thống kế toán ghi sổ theo chuẩn mực; phần chênh lệch cần được nhận diện để kế toán điều chỉnh khi tính thuế.

## Vì sao lệch: chi phí không được trừ và chênh lệch tạm thời

### Chi phí không được trừ

Điều 9 khoản 1 Luật 67/2025 cho trừ một khoản chi khi đáp ứng đủ các điều kiện: là khoản chi thực tế phát sinh liên quan đến sản xuất, kinh doanh (hoặc thuộc nhóm chi thực tế khác được luật liệt kê), và có đủ hoá đơn, chứng từ thanh toán không dùng tiền mặt theo quy định (trừ trường hợp đặc thù do Chính phủ quy định). Khoản 2 liệt kê các khoản không được trừ, một số khoản BA hay gặp vì có thể nhận diện ngay trên chứng từ:

- Khoản chi không đáp ứng đủ điều kiện ở khoản 1 (ví dụ thiếu hoá đơn, chứng từ).
- Tiền phạt do vi phạm hành chính.
- Phần trích lập dự phòng không đúng hoặc vượt mức; khấu hao TSCĐ không đúng hoặc vượt mức; trích trước vào chi phí không đúng quy định.
- Tiền lương, tiền công hạch toán vào chi phí nhưng thực tế không chi trả hoặc không có hoá đơn, chứng từ.
- Thuế GTGT đầu vào đã được khấu trừ; thuế TNDN; tiền chậm nộp theo pháp luật quản lý thuế.
- Khoản tài trợ, trừ các khoản tài trợ được liệt kê là được trừ.

> ⚠️ Cần xác nhận: mức chi, điều kiện chi tiết và hồ sơ của từng khoản do Nghị định 320/2025/NĐ-CP và Thông tư 20/2026/TT-BTC hướng dẫn. Bài này chưa đối chiếu các văn bản đó; khi thiết kế danh mục "chi phí không được trừ" cho khách, lấy danh sách từ kế toán thuế của khách.

### Chênh lệch tạm thời

VAS 17 dùng khái niệm **cơ sở tính thuế** của tài sản, nợ phải trả và **chênh lệch tạm thời** là chênh lệch giữa giá trị ghi sổ trên Bảng cân đối (nay là Báo cáo tình hình tài chính) và cơ sở tính thuế. Có hai loại: chênh lệch tạm thời chịu thuế (làm phát sinh thu nhập chịu thuế trong tương lai) và chênh lệch tạm thời được khấu trừ (làm phát sinh khoản được khấu trừ trong tương lai).

Ví dụ trong VAS 17: khoản "chi phí phải trả" trích trước lương nghỉ phép có giá trị ghi sổ 100, nhưng chi phí này chỉ được khấu trừ khi tính thuế trên cơ sở thực chi, nên cơ sở tính thuế của khoản nợ phải trả đó là 0. Chênh lệch 100 là chênh lệch tạm thời được khấu trừ: năm nay kế toán đã ghi chi phí, thuế sẽ cho trừ ở năm thực chi.

Hướng dẫn TK 243 của TT99 ghi rõ kế toán không tiếp tục dùng khái niệm "chênh lệch vĩnh viễn" khi xác định thuế thu nhập hoãn lại. Tài liệu cũ hay chia "chênh lệch vĩnh viễn / tạm thời"; khi đọc yêu cầu của khách nên hỏi lại họ đang dùng khái niệm nào.

## Chi phí thuế TNDN trên sổ: TK 821, 3334, 243, 347

Theo VAS 17, chi phí thuế TNDN gồm chi phí thuế thu nhập hiện hành và chi phí thuế thu nhập hoãn lại. TT99 tổ chức thành:

- **TK 8211 – Chi phí thuế TNDN hiện hành**, gồm TK 82111 (theo Luật thuế TNDN) và TK 82112 (thuế TNDN bổ sung theo quy định về thuế tối thiểu toàn cầu).
- **TK 8212 – Chi phí thuế TNDN hoãn lại**.
- **TK 3334 – Thuế thu nhập doanh nghiệp**: số phải nộp, đã nộp, còn phải nộp.
- **TK 243 – Tài sản thuế thu nhập hoãn lại** và **TK 347 – Thuế thu nhập hoãn lại phải trả**.

TK 821 và các tài khoản cấp 2 không có số dư cuối kỳ.

### Thuế hiện hành

| Thời điểm | Bút toán |
|---|---|
| Hàng quý, theo số thuế tạm phải nộp | `Nợ TK 8211 / Có TK 3334` |
| Nộp thuế | `Nợ TK 3334 / Có TK 111, 112` |
| Cuối năm, số phải nộp theo quyết toán lớn hơn số tạm phải nộp | `Nợ TK 8211 / Có TK 3334` phần chênh lệch |
| Cuối năm, số phải nộp nhỏ hơn số tạm phải nộp | `Nợ TK 3334 / Có TK 8211` |
| Kết chuyển cuối kỳ | `Nợ TK 911 / Có TK 8211` (hoặc ngược lại nếu phát sinh Có lớn hơn) |

Sai sót không trọng yếu về thuế TNDN của năm trước được ghi tăng hoặc giảm chi phí thuế hiện hành năm phát hiện (`Nợ TK 8211 / Có TK 3334` hoặc ngược lại). Sai sót trọng yếu thì điều chỉnh hồi tố theo VAS 29, không đi qua TK 8211 năm nay.

### Thuế hoãn lại

- Ghi nhận thuế thu nhập hoãn lại phải trả (phần phát sinh lớn hơn phần hoàn nhập): `Nợ TK 8212 / Có TK 347`.
- Hoàn nhập tài sản thuế thu nhập hoãn lại đã ghi nhận năm trước: `Nợ TK 8212 / Có TK 243`.
- Ghi nhận tài sản thuế thu nhập hoãn lại: `Nợ TK 243 / Có TK 8212`.
- Hoàn nhập thuế thu nhập hoãn lại phải trả: `Nợ TK 347 / Có TK 8212`.
- Cuối kỳ kết chuyển chênh lệch phát sinh Nợ, Có của TK 8212 vào TK 911.

Không phản ánh vào TK 821 phần thuế hoãn lại phát sinh từ giao dịch ghi nhận thẳng vào vốn chủ sở hữu. Tài sản thuế thu nhập hoãn lại chỉ ghi nhận khi dự tính chắc chắn có lợi nhuận tính thuế trong tương lai để sử dụng. Cuối năm doanh nghiệp lập các bảng xác định chênh lệch tạm thời được khấu trừ, bảng theo dõi chênh lệch chưa sử dụng và bảng xác định tài sản thuế thu nhập hoãn lại. Việc bù trừ TK 243 với TK 347 chỉ thực hiện khi lập Báo cáo tình hình tài chính, không bù trừ trên sổ.

> 📌 Thuế tối thiểu toàn cầu (TK 82112) chỉ liên quan tới doanh nghiệp thuộc tập đoàn đa quốc gia đủ điều kiện. Khi gặp khách là công ty con của tập đoàn nước ngoài, hỏi họ có thuộc diện này không, vì TT99 có hướng dẫn riêng về phân bổ nghĩa vụ giữa các đơn vị hợp thành (xem [[ktqt-19-thue-da-quoc-gia]]).

## Thuế suất, kỳ tính thuế, chuyển lỗ

Theo Luật 67/2025:

- Thuế suất phổ thông 20% (Điều 10 khoản 1). Doanh nghiệp có tổng doanh thu năm không quá 3 tỷ đồng áp dụng 15%; từ trên 3 tỷ đến không quá 50 tỷ đồng áp dụng 17%. Doanh thu làm căn cứ là tổng doanh thu của kỳ tính thuế trước liền kề (Điều 10 khoản 2, 3). Một số hoạt động (dầu khí, tài nguyên quý hiếm) có thuế suất riêng.
- Kỳ tính thuế theo năm dương lịch hoặc năm tài chính doanh nghiệp chọn; chọn năm tài chính khác năm dương lịch thì thông báo cơ quan thuế trước (Điều 5).
- Lỗ được chuyển sang năm sau, trừ vào thu nhập chịu thuế, thời gian chuyển lỗ liên tục không quá 5 năm kể từ năm tiếp theo năm phát sinh lỗ (Điều 16).

Hệ quả cho hệ thống: thuế suất không phải tham số cố định cho mọi khách, và cần lưu lịch sử lỗ tính thuế theo năm phát sinh. TT99 (hướng dẫn TK 421) cũng yêu cầu theo dõi riêng lỗ tính thuế và lỗ không tính thuế.

## Ảnh hưởng tới báo cáo tài chính

| Báo cáo | Chỉ tiêu | Nguồn |
|---|---|---|
| B02-DN | Mã số 51 Chi phí thuế TNDN hiện hành | Phát sinh TK 8211 đối ứng TK 911 |
| B02-DN | Mã số 52 Chi phí thuế TNDN hoãn lại | Phát sinh TK 8212 đối ứng TK 911; có thể âm |
| B01-DN | Mã số 314 Thuế và các khoản phải nộp Nhà nước | Dư Có chi tiết TK 333 (có 3334) |
| B01-DN | Mã số 163 Thuế và các khoản khác phải thu Nhà nước | Dư Nợ chi tiết TK 333 (nộp thừa) |
| B01-DN | Mã số 272, 342 | Dư Nợ TK 243, dư Có TK 347 |
| B03-DN | Mã số 05 Thuế TNDN đã nộp | Tiền chi nộp thuế, đối chiếu TK 3334 |

Bản thuyết minh (B09-DN) có bảng "Chi phí thuế thu nhập doanh nghiệp" đi từ lợi nhuận kế toán trước thuế, nhân thuế suất hiện hành, rồi điều chỉnh các khoản thu nhập không chịu thuế, chi phí không được khấu trừ, dự phòng thiếu hoặc thừa của các năm trước để ra chi phí thuế. Có thêm bảng tài sản thuế thu nhập hoãn lại và thuế hoãn lại phải trả, ghi rõ thuế suất dùng để xác định ([[kt-42-thuyet-minh-bctc]]).

## Hệ thống cần hỗ trợ gì

- **Đánh dấu chi phí không được trừ ngay khi ghi nhận**: một cờ trên dòng chứng từ hoặc tài khoản chi tiết riêng (ví dụ cho tiền phạt vi phạm hành chính) để cuối năm lọc được, thay vì kế toán dò tay.
- **Kiểm tra điều kiện chứng từ**: thanh toán không dùng tiền mặt và có hoá đơn hợp lệ là điều kiện được trừ, nên dữ liệu phương thức thanh toán và hoá đơn cần liên kết với khoản chi.
- **Theo dõi chênh lệch tạm thời**: nguồn dữ liệu thường là các khoản trích trước (TK 335), dự phòng, khấu hao kế toán khác khấu hao thuế. Nếu khách có thuế hoãn lại, cần sổ chi tiết theo khoản mục để lập các bảng mà TT99 yêu cầu.
- **Bút toán thuế quý và quyết toán năm**: thường nhập tay từ tờ khai; hệ thống cần cho ghi `8211/3334` theo kỳ và điều chỉnh cuối năm.
- **Lịch sử lỗ tính thuế** theo năm phát sinh để biết còn được chuyển bao nhiêu năm.

> 📌 Ví dụ giả định: lợi nhuận kế toán trước thuế 1.000 triệu đồng, trong đó có 50 triệu tiền phạt vi phạm hành chính và không có khoản điều chỉnh nào khác; doanh nghiệp áp dụng thuế suất 20%. Thu nhập chịu thuế là 1.050, thuế TNDN hiện hành 210. Bút toán `Nợ TK 8211 / Có TK 3334` 210 (sau khi trừ số đã tạm ghi theo quý), kết chuyển `Nợ TK 911 / Có TK 8211` 210, lợi nhuận sau thuế 790.

## Nguồn

- Luật Thuế thu nhập doanh nghiệp số 67/2025/QH15: Điều 5, 6, 7, 8, 9, 10, 11, 16, 19. https://luatvietnam.vn/thue/luat-thue-thu-nhap-doanh-nghiep-2025-so-67-2025-qh15-404386-d1.html
- Chuẩn mực kế toán số 17 – Thuế thu nhập doanh nghiệp (Quyết định 12/2005/QĐ-BTC): đoạn 01 đến 05 (định nghĩa, cơ sở tính thuế), 16, 32 đến 34. https://vanban.vcci.com.vn/quyet-dinh-122005qd-btc-cua-bo-tai-chinh-ve-viec-ban-hanh-va-cong-bo-sau-06-chuan-muc-ke-toan-viet-nam-dot-4
- Thông tư 99/2025/TT-BTC, Phụ lục II: TK 821, TK 3334 (mục 3.5 TK 333), TK 243, TK 421 điểm g. https://cms.luatvietnam.vn/uploaded/Others/2025/11/16/Phu_luc_II._He_thong_tai_khoan_ke_toan_doanh_nghiep_1611132408.docx
- Thông tư 99/2025/TT-BTC, Phụ lục IV: hướng dẫn chỉ tiêu Mã số 51, 52 (B02-DN), 163, 272, 314, 342 (B01-DN), 05 (B03-DN); mẫu B09-DN phần thông tin bổ sung về chi phí thuế TNDN và thuế hoãn lại. https://luatvietnam.vn/doanh-nghiep/thong-tu-99-2025-tt-btc-huong-dan-che-do-ke-toan-doanh-nghiep-tu-01-01-2026-417085-d1.html
