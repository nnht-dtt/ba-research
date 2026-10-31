# Đổi trả, hoàn tiền và các tình huống sau khi khách đã thanh toán

Bài này giúp bạn tách một yêu cầu "khách trả hàng / đổi hàng / hoàn tiền" thành các phần nghiệp vụ riêng: hàng về kho, giá vốn đảo lại, doanh thu giảm trừ, thuế GTGT điều chỉnh, tiền trả lại khách, và hoá đơn điều chỉnh. Mỗi phần có chứng từ và bút toán riêng, và không phải lúc nào cũng xảy ra cùng một ngày.

## Hàng bán bị trả lại là gì

VAS 14 (đoạn 03) định nghĩa giá trị hàng bán bị trả lại là giá trị khối lượng hàng **đã xác định là tiêu thụ** bị khách trả lại và từ chối thanh toán. Thông tư 99/2025/TT-BTC (TK 521 mục 1.đ) nêu nguyên nhân: vi phạm cam kết, vi phạm hợp đồng, hàng kém, mất phẩm chất, không đúng chủng loại, quy cách.

Điều kiện "đã xác định là tiêu thụ" quan trọng: nếu hàng còn nằm ở TK 157 (đã gửi đi nhưng chưa được xác định là đã bán, xem [[kt-17-quy-trinh-ban-hang]]) thì việc khách gửi trả không phải hàng bán bị trả lại, vì chưa có doanh thu để giảm.

> ⚠️ Cần xác nhận: bút toán nhận lại hàng đang ở TK 157 (chưa xác định là đã bán) không có trong phần TT99 đã đọc. Theo kết cấu TK 157, hàng vẫn thuộc sở hữu doanh nghiệp, nên cần chốt với kế toán của khách cách ghi nhập lại kho từ TK 157.

## Ba phần bút toán khi khách trả hàng

TT99 (TK 521 mục 3.b và TK 131 mục 3.2) hướng dẫn ba phần:

**1. Nhận lại hàng, đảo giá vốn**

`Nợ TK 154, 155, 156 / Có TK 632`

Giá trị ghi theo giá vốn của hàng bị trả lại. TT99 TK 632 liệt kê "trị giá vốn của hàng bán bị trả lại" ở bên Có.

**2. Thanh toán với khách về doanh thu của hàng bị trả lại**

`Nợ TK 521 / Nợ TK 3331 (33311) (nếu có) / Có TK 111, 112, 131`

- Có TK 131 nếu trừ vào công nợ khách còn nợ.
- Có TK 111, 112 nếu trả lại tiền cho khách.

**3. Chi phí phát sinh liên quan tới hàng bị trả lại (nếu có)**

`Nợ TK 641 / Có TK 111, 112, 141, 334...`

Ví dụ: chi phí vận chuyển hàng trả về do doanh nghiệp chịu.

Cuối kỳ, TK 521 kết chuyển sang TK 511 (`Nợ TK 511 / Có TK 521`) để ra doanh thu thuần.

> 📌 Giá trị đảo giá vốn (phần 1) và giá trị giảm doanh thu (phần 2) là hai con số khác nhau: một tính theo giá vốn, một tính theo giá bán. Hệ thống cần lấy giá vốn từ lần xuất bán gốc hoặc theo phương pháp tính giá tồn kho của khách. Xem [[kt-23-dinh-gia-ton-kho]].

### Ví dụ giả định

Khách trả lại 2 sản phẩm đã bán tháng trước, đơn giá bán chưa thuế 5 triệu, giá vốn 3 triệu/sản phẩm, thuế suất giả định 10%. Khách đã thanh toán đủ, doanh nghiệp chuyển khoản hoàn tiền.

- Nhập lại kho: `Nợ TK 156 / Có TK 632 (6 triệu)`.
- Hoàn tiền: `Nợ TK 521 (10 triệu) / Nợ TK 3331 (1 triệu) / Có TK 112 (11 triệu)`.

Nếu khách chưa thanh toán thì phần 2 ghi `Có TK 131 (11 triệu)` thay cho `Có TK 112`.

## Hoá đơn khi trả hàng, đổi hàng

Từ 01/07/2026, xử lý hoá đơn điện tử đã lập theo Điều 10 Thông tư 91/2026/TT-BTC (hướng dẫn Nghị định 254/2026/NĐ-CP). Nghị định 123/2020/NĐ-CP và Nghị định 70/2025/NĐ-CP sửa đổi nó đã hết hiệu lực từ ngày này (Điều 43 Nghị định 254), xem [[kt-09-chung-tu-hoa-don]]. Khoản 5 điểm c Điều 10 TT91 quy định:

- **c.1) Trả lại hàng hoá:** người mua trả lại toàn bộ hoặc một phần hàng hoá, **bao gồm cả trường hợp đổi hàng làm thay đổi giá trị** của hàng đã mua, thì **người bán lập hoá đơn điều chỉnh**. Ngoại lệ: nếu hai bên thoả thuận người mua lập hoá đơn khi trả hàng thì người mua lập hoá đơn điện tử giao cho người bán.
- **c.2)** Hàng là tài sản phải đăng ký quyền sở hữu, quyền sử dụng và đã đăng ký theo tên người mua: nếu người mua là đối tượng sử dụng hoá đơn điện tử thì người mua lập hoá đơn trả lại hàng cho người bán.
- **c.4)** Người bán đã lập hoá đơn khi thu tiền trước khi cung cấp dịch vụ, sau đó huỷ hoặc chấm dứt giao dịch, huỷ một phần việc cung cấp dịch vụ: người bán điều chỉnh hoá đơn đã lập theo điểm c.1 nêu trên (lập hoá đơn điều chỉnh). Điểm này áp dụng cả cho hoá đơn thu tiền của hoạt động kinh doanh bất động sản, xây dựng cơ sở hạ tầng, xây dựng nhà để bán, chuyển nhượng.
- Các trường hợp c.1 đến c.3: người bán, người mua phải có đầy đủ hồ sơ, chứng từ liên quan tới việc trả lại hàng, xuất trình khi được yêu cầu.

Về kỳ kê khai, khoản 6 điểm d Điều 10 TT91: hoá đơn điều chỉnh cho các trường hợp ở khoản 5 (gồm trả hàng) thì người bán kê khai vào **kỳ phát sinh hoá đơn điều chỉnh**, người mua kê khai vào kỳ nhận được hoá đơn điều chỉnh. Trên hoá đơn điều chỉnh, điều chỉnh tăng ghi số dương, điều chỉnh giảm ghi số âm (khoản 6 điểm c).

> ⚠️ Cần xác nhận: Điều 10 TT91 chỉ nói rõ đổi hàng **làm thay đổi giá trị** phải lập hoá đơn điều chỉnh. Đổi hàng cùng giá trị (ví dụ đổi size, đổi màu cùng giá) xử lý hoá đơn ra sao không được nêu trong phần đã đọc.

### Khác với hoá đơn lập sai

Trả hàng không phải là hoá đơn lập sai. Khoản 1 Điều 10 TT91 dành cho hoá đơn **đã lập sai** (sai mã số thuế, số tiền, thuế suất, tiền thuế, hoặc hàng ghi trên hoá đơn không đúng quy cách, chất lượng), cho phép chọn lập hoá đơn điều chỉnh hoặc hoá đơn thay thế, và trước khi điều chỉnh, thay thế phải có văn bản thoả thuận ghi rõ nội dung sai (với người mua là tổ chức, hộ, cá nhân kinh doanh) hoặc thông báo cho người mua là cá nhân (điểm b). Kỳ kê khai của trả hàng đã được khoản 6 điểm d nêu rõ như trên.

> ⚠️ Cần xác nhận: Nghị định 123 (sửa bởi Nghị định 70) từng quy định hoá đơn điều chỉnh, thay thế cho hoá đơn **lập sai** được khai bổ sung vào kỳ của hoá đơn bị điều chỉnh, thay thế. Điều 10 TT91 không còn câu tương ứng; theo EY, kỳ kê khai cho trường hợp này phải tra cứu thêm pháp luật thuế GTGT và quản lý thuế. Xem thêm [[kt-11-but-toan-tong-hop-dieu-chinh]].

Với hệ thống, đây là hai luồng khác nhau: "trả hàng" sinh nghiệp vụ mới tại ngày trả; "sửa hoá đơn sai" là sửa một nghiệp vụ cũ. Cách xử lý chứng từ kế toán sai: [[kt-11-but-toan-tong-hop-dieu-chinh]]. Hoá đơn điện tử nói chung: [[kt-09-chung-tu-hoa-don]].

## Đổi hàng

Đổi hàng là tổ hợp của "nhận lại hàng cũ" và "giao hàng mới". Từ các hướng dẫn trên:

- Hàng cũ về kho: đảo giá vốn như hàng bán bị trả lại.
- Hàng mới đi: ghi giá vốn như bán hàng thông thường.
- Nếu giá trị thay đổi: phần chênh lệch doanh thu và thuế được điều chỉnh qua hoá đơn điều chỉnh của người bán (điểm c.1 khoản 5 Điều 10 TT91); khách trả thêm hoặc được hoàn chênh lệch qua TK 131, 111, 112.

> ⚠️ Cần xác nhận: TT99 không có mục riêng "đổi hàng" trong phần đã đọc. Ghi đổi hàng thành một cặp trả lại + bán mới (đủ bút toán TK 521 và TK 511) hay chỉ ghi phần chênh lệch là quyết định chính sách cần chốt với kế toán của khách.

## Giảm giá sau bán và hoàn tiền một phần

Khách giữ hàng nhưng được hoàn một phần tiền vì hàng kém phẩm chất, sai quy cách là **giảm giá hàng bán**, không phải hàng bán bị trả lại. Không có bút toán nhập kho, không đảo giá vốn. TT99 TK 521 mục 1.d: chỉ phản ánh vào TK 521 khoản giảm giá chấp thuận **sau khi** đã ghi doanh thu và phát hành hoá đơn.

`Nợ TK 521 / Nợ TK 3331 / Có TK 111, 112, 131`

Về hoá đơn, trường hợp hàng hoá ghi trên hoá đơn không đúng quy cách, chất lượng thuộc điểm b khoản 1 Điều 10 TT91 (điều chỉnh hoặc thay thế). Chi tiết chiết khấu, giảm giá: [[kt-18-giam-tru-tra-truoc]].

## Hoàn tiền khi chưa giao hàng

Nếu khách đã trả trước và huỷ đơn trước khi giao, chưa có doanh thu nên không dùng TK 521. Tiền trả trước đang nằm bên Có TK 131 (TT99 TK 511 mục 1.5.2); khi trả lại, TT99 TK 131 ghi "số tiền thừa trả lại cho khách hàng" ở bên Nợ:

`Nợ TK 131 / Có TK 111, 112`

Với dịch vụ thu trước nhiều kỳ đang ở TK 3387, TT99 TK 511 mục 3.7 hướng dẫn khi phải trả lại tiền vì hợp đồng không thực hiện tiếp hoặc thời gian ngắn hơn:

`Nợ TK 3387 / Nợ TK 3331 (thuế GTGT của phần dịch vụ không thực hiện) / Có TK 111, 112`

Phần hoá đơn đã lập khi thu tiền trước dịch vụ thì điều chỉnh theo điểm c.4 khoản 5 Điều 10 TT91 nêu trên.

## Trả hàng ở kỳ sau

Hàng bán kỳ trước bị trả lại ở kỳ sau: TT99 (TK 511 mục 1.4, TK 521 mục 1.b) phân biệt theo thời điểm phát hành báo cáo tài chính.

- Trả lại **trước** khi phát hành báo cáo tài chính kỳ trước: coi là sự kiện cần điều chỉnh sau ngày kết thúc kỳ kế toán, ghi giảm doanh thu trên báo cáo của kỳ trước.
- Trả lại **sau** khi đã phát hành: ghi giảm doanh thu của kỳ phát sinh.

Lưu ý mốc kế toán (phát hành báo cáo) và mốc hoá đơn (kỳ lập hoá đơn điều chỉnh) là hai mốc khác nhau; số liệu kế toán và số liệu kê khai thuế của một khoản trả hàng có thể nằm ở hai kỳ khác nhau.

## Ảnh hưởng tới báo cáo

- Báo cáo kết quả hoạt động kinh doanh: hàng bị trả lại và giảm giá làm tăng "Các khoản giảm trừ doanh thu"; giá vốn giảm tương ứng phần hàng nhập lại. Xem [[kt-40-bao-cao-ket-qua-kinh-doanh]].
- Thuế GTGT đầu ra giảm tương ứng (Nợ TK 3331). Xem [[kt-22-thue-gtgt-dau-ra]].
- TT99 TK 521 mục 1.e yêu cầu theo dõi chi tiết hàng bán bị trả lại theo từng khách và từng loại hàng bán, nên dữ liệu trả hàng cần giữ liên kết tới khách và mặt hàng, không chỉ là một con số tổng.

## Điểm chạm hệ thống

- Phiếu nhập trả hàng (phần kho) và chứng từ giảm trừ doanh thu, hoá đơn điều chỉnh (phần tài chính) có thể tạo ở hai bước khác nhau; cần quy định bước nào bắt buộc trước.
- Hoàn tiền có thể đi qua ngân hàng, cổng thanh toán hoặc trừ vào công nợ; mỗi kênh là một tài khoản đối ứng khác nhau. Với bán hàng online, xem [[ktqt-15-doi-soat-san-cod]].

## Nguồn

- Chuẩn mực kế toán Việt Nam số 14 "Doanh thu và thu nhập khác" (Quyết định 149/2001/QĐ-BTC), đoạn 03. https://cdn.thuvienphapluat.vn//uploads/Hoidapphapluat/2024/TTTT/240830/Chuan-muc-ke-toan-14.doc
- Thông tư 99/2025/TT-BTC, Phụ lục II: TK 511 (mục 1.4, 1.5.2, 3.7, 3.17), TK 521 (mục 1.b, 1.d, 1.đ, 1.e, 3.b, 3.c). https://expertis.vn/wp-content/uploads/2026/01/Loai-tai-khoan-doanh-thu-TK-511-⟶-521.pdf
- Thông tư 99/2025/TT-BTC, Phụ lục II: TK 131 (mục 2, 3.2), TK 157 (mục 1). https://expertis.vn/wp-content/uploads/2026/01/Loai-tai-khoan-tai-san-TK-111-⟶-244.pdf
- Thông tư 99/2025/TT-BTC, Phụ lục II: TK 632 (mục 2, bên Có). https://expertis.vn/wp-content/uploads/2026/01/Loai-tai-khoan-chi-phi-san-xuat-kinh-doanh-TK-621-⟶-642.pdf
- Thông tư 91/2026/TT-BTC: Điều 10 (khoản 1 điểm b; khoản 5 điểm c; khoản 6 điểm c, d). https://luatvietnam.vn/thue/thong-tu-91-2026-tt-btc-quy-dinh-luat-quan-ly-thue-va-hoa-don-dien-tu-439780-d1.html
- Nghị định 254/2026/NĐ-CP: Điều 43 (hiệu lực; Nghị định 123/2020 và Nghị định 70/2025 hết hiệu lực từ 01/07/2026). https://luatvietnam.vn/thue/nghi-dinh-254-2026-nd-cp-huong-dan-thi-hanh-luat-quan-ly-thue-2025-ve-hoa-don-dien-tu-439381-d1.html
- EY Việt Nam, Tin nhanh về Thuế tháng 7/2026 "Nghị định 254/2026/NĐ-CP về hóa đơn điện tử và chứng từ điện tử", mục 6 (Thông tư 91, kê khai hoá đơn điều chỉnh, thay thế): https://www.ey.com/content/dam/ey-unified-site/ey-com/vi-vn/technical/tax/documents/ey-vn-decree-254-on-electronic-invoices-and-electronic-documents.pdf
