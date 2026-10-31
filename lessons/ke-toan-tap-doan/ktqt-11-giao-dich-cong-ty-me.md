# Giao dịch với công ty mẹ và bên liên kết ở nước ngoài

Pháp nhân Việt Nam trong tập đoàn nước ngoài thường trả phí quản lý, phí bản quyền, vay tiền của công ty mẹ, mua bán hàng với các công ty cùng tập đoàn. Bài này giúp BA biết các giao dịch đó hạch toán vào tài khoản nào theo TT99, khi nào phát sinh thuế nhà thầu phải nộp thay, quy định giao dịch liên kết đặt yêu cầu gì lên dữ liệu, và vì sao đối chiếu liên công ty xuyên biên giới hay lệch.

## Tài khoản dùng cho giao dịch với công ty mẹ

Công ty mẹ ở nước ngoài là một pháp nhân khác, không phải đơn vị trực thuộc. TT99 dành TK 136 Phải thu nội bộ và TK 336 Phải trả nội bộ cho quan hệ giữa doanh nghiệp với đơn vị trực thuộc hoặc giữa các đơn vị trực thuộc với nhau; nguyên tắc kế toán TK 336 còn ghi rõ không phản ánh vào tài khoản này các giao dịch thanh toán giữa công ty mẹ với các công ty con và giữa các công ty con với nhau. Giao dịch với công ty mẹ, công ty con, công ty cùng tập đoàn vì vậy đi qua các tài khoản thanh toán thông thường:

| Giao dịch | Tài khoản chính theo TT99 |
|---|---|
| Bán hàng, cung cấp dịch vụ cho công ty trong tập đoàn | TK 131 Phải thu của khách hàng, chi tiết theo từng đối tượng |
| Mua hàng, nhận dịch vụ (phí quản lý, phí hỗ trợ kỹ thuật, bản quyền) | TK 331 Phải trả cho người bán, chi tiết theo từng đối tượng |
| Vay tiền | TK 341 Vay và nợ thuê tài chính (TK 3411 Các khoản đi vay), chi tiết theo từng đối tượng cho vay, từng khế ước |
| Chi hộ, thu hộ, các khoản phải thu, phải trả khác | TK 1388, TK 3388 |

Vì các tài khoản này cũng dùng cho khách hàng, nhà cung cấp bên ngoài, việc nhận diện "đây là công ty trong tập đoàn" nằm ở danh mục đối tượng, không nằm ở số hiệu tài khoản. Đây là điểm nối với [[ktqt-02-danh-muc-phap-nhan]] và [[ktqt-09-mapping-coa-tap-doan]].

## Các giao dịch hay gặp

### Phí quản lý, phí dịch vụ, phí bản quyền

Khi nhận dịch vụ hoặc quyền sử dụng từ công ty mẹ, ghi chi phí theo hợp đồng: Nợ TK 642 (hoặc TK 627, 641 tuỳ bộ phận sử dụng) / Có TK 331. Khi pháp luật thuế xác định công ty mẹ là nhà thầu nước ngoài và bên Việt Nam phải nộp thuế thay, bút toán thanh toán phải tách phần thuế nhà thầu (mục dưới). Phí bằng ngoại tệ quy đổi theo tỷ giá giao dịch thực tế và đánh giá lại số dư TK 331 cuối kỳ ([[ktqt-05-giao-dich-ngoai-te]]).

### Vay công ty mẹ

Theo phương pháp kế toán TK 341 trong TT99:

- Nhận tiền vay: Nợ TK 112 / Có TK 341 (3411). Vay bằng ngoại tệ quy đổi theo tỷ giá giao dịch thực tế.
- Lãi vay định kỳ tính vào chi phí: Nợ TK 635 (hoặc TK 627, 241 nếu được vốn hoá) / Có TK 112 nếu trả định kỳ, Có TK 335 nếu trả sau, Có TK 341 nếu trả trước.
- Lãi nhập gốc: Nợ TK 635 / Có TK 341 (3411).
- Chi phí thu xếp khoản vay liên quan trực tiếp (thẩm định, lập hồ sơ...) phân bổ dần theo thời hạn vay. Vay để đầu tư vào công ty con, liên doanh, liên kết thì chi phí đi vay không được vốn hoá.
- Cuối kỳ đánh giá lại số dư vay có gốc ngoại tệ (bên Nợ hoặc Có TK 341 tuỳ tỷ giá giảm hay tăng).
- Phân loại dài hạn hay ngắn hạn theo thời hạn trả còn lại so với 12 tháng kể từ cuối kỳ.

Lãi vay trả cho công ty mẹ ở nước ngoài cũng cần xét nghĩa vụ thuế nhà thầu (mục dưới). Vay từ bên liên kết còn chịu giới hạn chi phí lãi vay được trừ khi tính thuế TNDN (mục Giao dịch liên kết).

### Mua bán hàng với công ty trong tập đoàn

Hạch toán như mua bán với bên ngoài ([[kt-12-quy-trinh-mua-hang]], [[kt-13-mua-hang-nhap-khau]], [[kt-17-quy-trinh-ban-hang]]), chỉ khác đối tượng được gắn cờ nội bộ. Giá giao dịch chịu quy định giao dịch liên kết; số dư và lãi chưa thực hiện bị loại trừ khi hợp nhất ([[ktqt-03-giao-dich-noi-bo]], [[ktqt-04-bctc-hop-nhat]]).

## Thuế nhà thầu nước ngoài

### Hạch toán theo TT99

Mục 3.11.1 phương pháp kế toán TK 333 trong TT99 hướng dẫn trường hợp doanh nghiệp phải nộp thuế thay cho nhà thầu nước ngoài. Có ba trường hợp tuỳ giá hợp đồng đã gồm thuế nhà thầu hay chưa.

**a) Giá hợp đồng đã gồm thuế nhà thầu (thuế TNDN và thuế GTGT):**

- Khi nhận hàng hoá, dịch vụ: Nợ TK 627, 642... (giá trị hợp đồng không gồm thuế GTGT nhà thầu nếu thuộc diện được khấu trừ); Nợ TK 1388 (thuế GTGT nhà thầu nếu được khấu trừ) / Có TK 331 (giá trị hợp đồng đã gồm thuế).
- Khi ứng trước hoặc trả tiền: Nợ TK 331 / Có TK 333 (3339) (thuế GTGT và TNDN nộp thay) / Có TK 111, 112 (giá trị hợp đồng sau khi trừ thuế nộp thay).
- Khi nộp thuế: Nợ TK 333 (3339) / Có TK 111, 112. Đồng thời: Nợ TK 133 (nếu thuế GTGT nhà thầu đã nộp được khấu trừ) / Có TK 1388.

**b) Giá hợp đồng chưa gồm thuế nhà thầu:**

- Khi nhận dịch vụ: Nợ TK 627, 642... (gồm cả thuế TNDN nhà thầu) / Có TK 331 (giá trị hợp đồng) / Có TK 3388 (thuế TNDN nộp thay).
- Khi trả tiền: Nợ TK 331 / Có TK 111, 112. Đồng thời: Nợ TK 3388 (thuế TNDN), Nợ TK 1388 (thuế GTGT nhà thầu) / Có TK 333 (3339).
- Khi nộp thuế: như trường hợp a; thuế GTGT không được khấu trừ thì ghi vào TK 627, 642...

**c) Giá hợp đồng gồm thuế GTGT nhưng không gồm thuế TNDN của nhà thầu:** doanh nghiệp chỉ chịu nộp thay thuế TNDN; thuế TNDN nộp thay ghi Có TK 3388 khi nhận dịch vụ, chuyển sang TK 333 (3339) khi trả tiền. Bút toán trả tiền trong TT99 ở trường hợp này vẫn kèm Nợ TK 1388 (thuế GTGT nhà thầu) / Có TK 333 (3339), và khi nộp thuế xử lý thuế GTGT như trường hợp b.

TT99 cũng lưu ý: nếu thời điểm ghi nhận chi phí kế toán và chi phí được trừ khi tính thuế TNDN khác nhau đối với khoản thuế nhà thầu thì xử lý theo VAS 17.

> ⚠️ Cần xác nhận: tài khoản ghi nhận thuế nhà thầu nộp thay. Phần phương pháp kế toán (mục 3.11.1) ghi vào TK 3339 Phí, lệ phí và các khoản phải nộp khác, trong khi phần mô tả TK 3338 trong cùng Phụ lục II nêu TK 3338 phản ánh cả "thuế nộp thay cho các tổ chức, cá nhân nước ngoài có hoạt động kinh doanh tại Việt Nam". Cần chốt với kế toán trưởng để cấu hình thống nhất.

### Văn bản thuế hiện hành

Thông tư 103/2014/TT-BTC từng là văn bản riêng hướng dẫn thuế GTGT, TNDN cho nhà thầu nước ngoài. Đến 31/10/2026, các nguồn đã đọc cho thấy:

- Thông tư 20/2026/TT-BTC (hướng dẫn Luật Thuế TNDN, hiệu lực từ 12/03/2026, áp dụng từ kỳ tính thuế 2025) bãi bỏ một số quy định về thuế TNDN tại Thông tư 103; hợp đồng nhà thầu theo phương pháp hỗn hợp ký trước ngày Thông tư 20 có hiệu lực tiếp tục theo văn bản có hiệu lực lúc ký (Tạp chí Kinh tế Tài chính, theo văn bản hướng dẫn của Thuế tỉnh Hưng Yên).
- Thông tư 89/2026/TT-BTC ngày 30/06/2026 (quy định chi tiết Luật Quản lý thuế 108/2025/QH15 và Nghị định 252/2026/NĐ-CP) bãi bỏ Thông tư 103/2014 từ 01/07/2026, tại khoản 3 Điều 99, cùng 9 thông tư thuế khác (Cổng phổ biến giáo dục pháp luật TP Cần Thơ). Bài tổng hợp của một đơn vị tư vấn thuế nêu thêm Thông tư 89 có Điều 30 về khai thuế của nhà thầu nước ngoài, trong đó bên Việt Nam khấu trừ, nộp thay và khai thuế theo lần thanh toán.

> ⚠️ Cần xác nhận: nội dung Điều 30 Thông tư 89/2026 mới đọc qua bài tổng hợp, chưa đọc văn bản gốc. Tỷ lệ % tính thuế GTGT, TNDN trên doanh thu theo từng loại dịch vụ (phí dịch vụ, lãi vay, bản quyền) cũng chưa xác nhận được từ văn bản gốc; các bài tổng hợp dẫn về Điều 9 Thông tư 69/2025/TT-BTC (thuế GTGT) và Điều 7 Thông tư 20/2026/TT-BTC (thuế TNDN). Không cấu hình tỷ lệ thuế nhà thầu trên hệ thống khi chưa có văn bản gốc.

Với hệ thống, điều cần chốt là: hợp đồng nào thuộc diện nộp thay, giá hợp đồng thuộc trường hợp a, b hay c, và tỷ lệ áp dụng cho từng loại thu nhập, để bút toán trả tiền tự tách phần thuế.

## Giao dịch liên kết

### Văn bản hiện hành

Nghị định 255/2026/NĐ-CP ngày 30/06/2026 về quản lý thuế đối với giao dịch liên kết thay thế Nghị định 132/2020/NĐ-CP và Nghị định 20/2025/NĐ-CP, hiệu lực từ 01/07/2026, áp dụng từ kỳ tính thuế TNDN 2026 (EY Việt Nam). Cục Thuế (Công văn 4697/CT-CS ngày 09/07/2026) nêu Nghị định về cơ bản kế thừa Nghị định 132 đã sửa đổi.

### Ai là bên liên kết

Điều 5 Nghị định 255 liệt kê các trường hợp có quan hệ liên kết, ví dụ:

- Một doanh nghiệp nắm giữ trực tiếp hoặc gián tiếp ít nhất 25% vốn góp của chủ sở hữu của doanh nghiệp kia.
- Hai doanh nghiệp cùng có ít nhất 25% vốn góp do một bên thứ ba nắm giữ trực tiếp hoặc gián tiếp.
- Một doanh nghiệp bảo lãnh hoặc cho doanh nghiệp khác vay với tổng dư nợ ít nhất bằng 25% vốn góp của chủ sở hữu bên vay và chiếm trên 50% tổng dư nợ trung, dài hạn của bên vay.

Công ty mẹ sở hữu 100% công ty con Việt Nam rơi vào trường hợp đầu tiên.

### Nguyên tắc và chi phí được trừ

- Nguyên tắc (Điều 3): người nộp thuế có giao dịch liên kết phải loại trừ yếu tố làm giảm nghĩa vụ thuế do quan hệ liên kết chi phối, kê khai nghĩa vụ thuế tương đương giao dịch độc lập có cùng điều kiện.
- Chi phí dịch vụ giữa các bên liên kết (Điều 16 khoản 2) được trừ khi đủ điều kiện: dịch vụ có giá trị thương mại, tài chính, kinh tế và phục vụ trực tiếp hoạt động của người nộp thuế; được cung cấp trong điều kiện tương tự bên độc lập sẵn sàng trả; phí theo nguyên tắc giao dịch độc lập, phương pháp tính hoặc phân bổ áp dụng thống nhất trong tập đoàn; và người nộp thuế cung cấp được hợp đồng, chứng từ, hoá đơn, thông tin về phương pháp tính, yếu tố phân bổ, chính sách giá của tập đoàn.
- Không được trừ, ví dụ: dịch vụ chỉ phục vụ lợi ích của bên liên kết khác; dịch vụ phục vụ lợi ích cổ đông của bên liên kết; dịch vụ tính phí trùng lặp; lợi ích có được chỉ do là thành viên tập đoàn; phần cộng thêm của bên liên kết trung gian không tạo thêm giá trị.
- Chi phí lãi vay (Điều 16 khoản 3): tổng chi phí lãi vay sau khi trừ lãi tiền gửi và lãi cho vay được trừ không vượt 30% của tổng lợi nhuận thuần từ hoạt động kinh doanh cộng chi phí lãi vay (sau khi trừ lãi tiền gửi, lãi cho vay) cộng chi phí khấu hao trong kỳ. Phần vượt được chuyển sang kỳ sau, liên tục không quá 5 năm.

Đây là quy định thuế, không làm thay đổi cách ghi sổ kế toán: chi phí vẫn ghi đủ trên sổ, phần không được trừ được loại ra khi xác định thu nhập chịu thuế ([[kt-37-thue-tndn]]).

### Dữ liệu hệ thống cần có

- Cờ bên liên kết trên danh mục đối tượng, kèm loại quan hệ.
- Giao dịch liên kết nhận diện được theo loại (mua bán hàng, dịch vụ, vay, bản quyền) để tổng hợp khi kê khai.
- Hợp đồng, hoá đơn, tài liệu phương pháp tính phí của tập đoàn gắn với chứng từ thanh toán phí dịch vụ.
- Chi phí lãi vay, lãi tiền gửi, lãi cho vay, khấu hao tách riêng được để tính giới hạn 30%.
- Với tập đoàn lớn: Nghị định 255 quy định công ty mẹ tối cao tại Việt Nam có doanh thu hợp nhất toàn cầu năm trước từ 750 triệu EUR trở lên phải lập báo cáo lợi nhuận liên quốc gia (CbCR); pháp nhân Việt Nam có công ty mẹ tối cao ở nước ngoài trong một số trường hợp phải nộp thay (EY).

## Thuyết minh bên liên quan theo IAS 24

Ở góc kế toán (không phải thuế), IAS 24 yêu cầu BCTC thuyết minh để người đọc thấy ảnh hưởng của bên liên quan tới tình hình tài chính và lãi lỗ:

- Bên liên quan gồm người hoặc đơn vị có quan hệ với đơn vị báo cáo, như công ty mẹ, công ty con, liên kết, liên doanh, đơn vị cùng chịu kiểm soát, nhân sự quản lý chủ chốt.
- Giao dịch với bên liên quan là mọi chuyển giao nguồn lực, dịch vụ, nghĩa vụ, dù có tính giá hay không.
- Phải thuyết minh bản chất quan hệ, thông tin về giao dịch và số dư còn lại (kể cả cam kết), và thù lao nhân sự quản lý chủ chốt tổng cộng và theo từng loại.

Định nghĩa bên liên quan của IAS 24 và bên liên kết của Nghị định 255 phục vụ hai mục đích khác nhau nên không nhất thiết trùng nhau; danh mục đối tượng nên lưu riêng hai thuộc tính.

> ⚠️ Cần xác nhận: yêu cầu thuyết minh bên liên quan theo VAS và mẫu B09-DN của TT99. Bài chưa đối chiếu văn bản này.

## Đối chiếu liên công ty xuyên biên giới

Hai bên của cùng một giao dịch ghi sổ ở hai hệ thống, hai đồng tiền, có thể hai chuẩn mực và hai lịch khoá sổ. Các nguồn lệch thường gặp, suy ra từ cách hạch toán ở trên:

- **Thuế nộp thay.** Trong trường hợp a, bên Việt Nam trả công ty mẹ số tiền đã trừ thuế nhà thầu nộp thay, còn khoản phải trả ghi theo giá hợp đồng đã gồm thuế. Số tiền công ty mẹ nhận ít hơn số tiền trên hoá đơn của họ; phần chênh phải được giải thích bằng chứng từ nộp thuế khi đối chiếu.
- **Tỷ giá.** Bên Việt Nam ghi bằng VND theo tỷ giá giao dịch thực tế và đánh giá lại cuối kỳ; công ty mẹ ghi bằng đồng tiền của họ. Đối chiếu nên dựa trên số nguyên tệ của từng khoản ([[ktqt-05-giao-dich-ngoai-te]]).
- **Thời điểm ghi nhận.** Phí quản lý mẹ xuất hoá đơn cuối tháng nhưng bên Việt Nam nhận chứng từ sau ngày khoá sổ, hoặc lãi vay mẹ ghi dồn tích còn bên Việt Nam chưa trích.
- **Khác chuẩn.** Một khoản bên này ghi theo VAS, bên kia theo IFRS (ví dụ khoản vay nội bộ đo theo giá phân bổ theo IFRS 9) có thể lệch số dư dù cùng một hợp đồng ([[ktqt-08-dieu-chinh-vas-ifrs]]).

Deloitte Việt Nam lưu ý kinh nghiệm chuyển đổi cho thấy thu thập dữ liệu kịp thời từ mọi địa điểm, pháp nhân trong phạm vi hợp nhất thường là thách thức. Đối chiếu số dư nội bộ trước ngày chốt gói báo cáo là một bước trong lịch khoá sổ tập đoàn ([[ktqt-12-bao-cao-cho-tap-doan]]).

## Nguồn

- Thông tư 99/2025/TT-BTC, Phụ lục II: TK 131, TK 136, TK 331, TK 333 (mô tả TK 3338, TK 3339; phương pháp kế toán mục 3.11.1 thuế nhà thầu), TK 341: https://luatvietnam.vn/doanh-nghiep/thong-tu-99-2025-tt-btc-huong-dan-che-do-ke-toan-doanh-nghiep-tu-01-01-2026-417085-d1.html
- Nghị định 255/2026/NĐ-CP ngày 30/06/2026, Điều 3, Điều 4, Điều 5, Điều 16 (toàn văn đăng tại): https://ketoanthienung.net/nghi-dinh-255-2026-nd-cp-ve-quan-ly-thue-giao-dich-lien-ket-doanh-nghiep.htm
- EY Việt Nam, *Tin nhanh Thuế về Giá giao dịch liên kết*, tháng 7/2026: https://www.ey.com/content/dam/ey-unified-site/ey-com/vi-vn/technical/tax/documents/ey-transfer-pricing-alert-vietnam-new-transfer-pricing-regulatory-developments-vi-1.pdf
- LuatVietnam, *Cục Thuế giới thiệu điểm mới của Nghị định 255/2026/NĐ-CP về giao dịch liên kết* (Công văn 4697/CT-CS): https://luatvietnam.vn/tin-van-ban-moi/cuc-thue-gioi-thieu-diem-moi-cua-nghi-dinh-so-255-2026-nd-cp-ve-giao-dich-lien-ket-186-110303-article.html
- Tạp chí Kinh tế Tài chính (Thuế – Hải quan), *Xác định nghĩa vụ thuế thu nhập doanh nghiệp với hợp đồng nhà thầu nước ngoài*: https://thuehaiquan.tapchikinhtetaichinh.vn/xac-dinh-nghia-vu-thue-thu-nhap-doanh-nghiep-voi-hop-dong-nha-thau-nuoc-ngoai-161845.html
- Cổng phổ biến giáo dục pháp luật TP Cần Thơ, *10 Thông tư về thuế bị bãi bỏ bởi Thông tư số 89/2026/TT-BTC từ 01/7/2026*: https://pbgdpl.cantho.gov.vn/10-thong-tu-ve-thue-bi-bai-bo-boi-thong-tu-so-892026tt-btc-tu-0172026
- MAN – Master Accountant Network, *So sánh thuế nhà thầu Thông tư 89/2026 và 103/2014* (nguồn đối chiếu, chưa phải văn bản gốc): https://thue.man.net.vn/so-sanh-thue-nha-thau-thong-tu-89-2026-va-103-2014/
- IFRS Foundation, IAS 24 Related Party Disclosures (tóm tắt chuẩn mực): https://www.ifrs.org/issued-standards/list-of-standards/ias-24-related-party-disclosures/
- Deloitte Việt Nam, *The conversion of VAS to IFRS – Volume one*, Part 1 "Scoping the effort: A question of priorities": https://www.deloitte.com/content/dam/assets-zone1/southeast-asia/en/docs/services/audit-assurance/2024/vn-aud-the-conversion-vas-to-ifrs-vol-1-en.pdf
