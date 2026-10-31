# Định giá hàng tồn kho và giá vốn trong hệ thống

Bài này giúp BA hiểu giá trị hàng nhập, xuất, tồn được tính theo nguyên tắc nào, phương pháp tính giá xuất nào được phép theo VAS 02 và TT99, và các lựa chọn đó quyết định giá vốn, số dư tồn kho trên báo cáo ra sao khi đưa vào hệ thống.

## Hàng tồn kho gồm những gì

VAS 02 (đoạn 03) định nghĩa hàng tồn kho là tài sản giữ để bán trong kỳ sản xuất, kinh doanh bình thường, đang trong quá trình sản xuất dở dang, hoặc là nguyên liệu, vật liệu, công cụ, dụng cụ để dùng cho sản xuất, kinh doanh, cung cấp dịch vụ. Danh sách trong chuẩn mực gồm cả hàng mua đang đi đường, hàng gửi đi bán, hàng gửi đi gia công chế biến, sản phẩm dở dang và chi phí dịch vụ dở dang.

TT99 (Phụ lục II, "Nguyên tắc kế toán hàng tồn kho", điểm 2) chia nhóm hàng tồn kho theo tài khoản:

| Tài khoản | Nội dung |
|---|---|
| 151 | Hàng mua đang đi đường |
| 152 | Nguyên liệu, vật liệu |
| 153 | Công cụ, dụng cụ |
| 154 | Chi phí sản xuất, kinh doanh dở dang |
| 155 | Sản phẩm (thành phẩm và bán thành phẩm; TT99 đổi tên từ "Thành phẩm") |
| 156 | Hàng hóa |
| 157 | Hàng gửi đi bán |
| 158 | Nguyên liệu, vật tư tại kho bảo thuế |

Hai điểm BA cần nhớ khi thiết kế danh mục sản phẩm và kho:

- Hàng nhận giữ hộ, nhận ký gửi, nhận ủy thác xuất nhập khẩu, nhận gia công không thuộc quyền sở hữu và kiểm soát của doanh nghiệp thì không ghi vào hàng tồn kho. Doanh nghiệp mở sổ chi tiết theo dõi riêng và thuyết minh trên báo cáo tài chính (TT99, nguyên tắc điểm 3). Chi tiết ở [[kt-25-kho-thue-ngoai-kho-san]] và [[kt-26-gia-cong]].
- Vật tư, phụ tùng thay thế dự trữ trên 12 tháng hoặc hơn một chu kỳ kinh doanh, sản phẩm dở dang có thời gian sản xuất vượt một chu kỳ thì không trình bày là hàng tồn kho mà trình bày là tài sản dài hạn (nguyên tắc điểm 2). Số liệu vẫn nằm trên 153, 154 nhưng khi lên Báo cáo tình hình tài chính phải tách ra, nên hệ thống cần thông tin để phân loại (xem [[kt-39-bao-cao-tinh-hinh-tai-chinh]]).

## Nguyên tắc giá gốc

VAS 02 đoạn 04: hàng tồn kho tính theo giá gốc; nếu giá trị thuần có thể thực hiện được thấp hơn giá gốc thì tính theo giá trị thuần có thể thực hiện được. Phần giảm này đi qua dự phòng, xem [[kt-24-kiem-ke-du-phong]].

Giá gốc gồm chi phí mua, chi phí chế biến và các chi phí liên quan trực tiếp khác để có hàng ở địa điểm và trạng thái hiện tại (đoạn 05):

- **Chi phí mua** (đoạn 06): giá mua, thuế không được hoàn lại, chi phí vận chuyển, bốc xếp, bảo quản trong quá trình mua và chi phí khác liên quan trực tiếp. Chiết khấu thương mại và giảm giá hàng mua do không đúng quy cách được trừ khỏi chi phí mua. TT99 (TK 152) ghi thêm hao hụt tự nhiên trong định mức. Bút toán chi phí mua, hàng nhập khẩu đã trình bày ở [[kt-13-mua-hang-nhap-khau]].
- **Chi phí chế biến** (đoạn 07–09): nhân công trực tiếp, sản xuất chung cố định và biến đổi. Cách phân bổ sản xuất chung cố định theo công suất bình thường nằm ở [[kt-27-chi-phi-san-xuat]] và [[kt-28-gia-thanh]].
- **Không tính vào giá gốc** (đoạn 11): nguyên vật liệu, nhân công, chi phí khác phát sinh trên mức bình thường; chi phí bảo quản (trừ chi phí bảo quản cần cho quá trình sản xuất tiếp theo và bảo quản trong quá trình mua); chi phí bán hàng; chi phí quản lý doanh nghiệp.

Giá gốc còn phụ thuộc nguồn nhập. TT99 (TK 152, mục 1b) phân biệt: mua ngoài, tự chế biến (giá thực tế vật liệu xuất chế biến cộng chi phí chế biến), thuê ngoài gia công (vật liệu xuất đi, chi phí vận chuyển đi và về, tiền thuê gia công), nhận góp vốn (giá các bên đánh giá). Với hàng mua bằng ngoại tệ, giá mua theo tỷ giá giao dịch thực tế tại thời điểm mua, phần đã ứng trước theo tỷ giá lúc ứng (nguyên tắc điểm 10).

> 💡 Với chi phí thu mua liên quan nhiều mặt hàng, TT99 (TK 156, mục 1c) cho phép phân bổ theo tiêu thức phù hợp và nhất quán. Chi phí thu mua giá trị nhỏ liên quan nhiều mặt hàng có thể ghi ngay vào giá vốn hàng bán. Đây là lựa chọn chính sách cần chốt, vì nó quyết định hệ thống có phải phân bổ chi phí mua (landed cost) xuống từng dòng hàng hay không.

## Phương pháp tính giá trị hàng xuất kho

Khi cùng một mặt hàng được nhập nhiều lần với giá khác nhau, phải có quy tắc chọn giá cho lượng xuất. VAS 02 (2001, đoạn 13) liệt kê bốn phương pháp: đích danh, bình quân gia quyền, nhập trước xuất trước, nhập sau xuất trước. TT99 (nguyên tắc điểm 9) hướng dẫn năm phương pháp, không có nhập sau xuất trước:

| Phương pháp | Cách tính theo TT99 | Phạm vi TT99 nêu |
|---|---|---|
| Đích danh | Theo giá thực tế của từng thứ hàng mua vào, từng thứ sản phẩm sản xuất ra | Chỉ cho doanh nghiệp ít mặt hàng hoặc mặt hàng ổn định, nhận diện được |
| Bình quân gia quyền | Giá trung bình của tồn đầu kỳ và hàng nhập trong kỳ | Tính theo từng kỳ hoặc sau từng lô nhập, tùy điều kiện doanh nghiệp |
| Nhập trước, xuất trước (FIFO) | Hàng nhập trước xuất trước; tồn cuối kỳ mang giá của lô nhập gần cuối kỳ | Không nêu giới hạn |
| Giá bán lẻ | Giá bán trừ lợi nhuận biên theo tỷ lệ phần trăm hợp lý; mỗi bộ phận bán lẻ thường dùng một tỷ lệ bình quân riêng | Ngành bán lẻ, siêu thị: nhiều mặt hàng, thay đổi nhanh, biên lợi nhuận tương tự |
| Chi phí chuẩn | Theo mức sử dụng bình thường của nguyên vật liệu, công cụ, nhân công, hiệu suất; xem xét lại thường xuyên | Doanh nghiệp sản xuất |

Phương pháp chọn cho từng mặt hàng phải áp dụng nhất quán giữa các kỳ, trừ khi thay đổi chính sách kế toán (nguyên tắc điểm 9). Phương pháp tính giá trị hàng tồn kho là một nội dung bắt buộc trình bày trong thuyết minh báo cáo tài chính (VAS 02 đoạn 27; TT99 Phụ lục IV, mục chính sách kế toán hàng tồn kho), xem [[kt-05-chinh-sach-quy-che]] và [[kt-42-thuyet-minh-bctc]].

### Ví dụ so sánh FIFO và bình quân

Ví dụ giả định, một mặt hàng trong tháng:

- Ngày 02: nhập 100 đơn vị, giá 50.000 đ/đơn vị (5.000.000 đ).
- Ngày 10: nhập 50 đơn vị, giá 56.000 đ/đơn vị (2.800.000 đ).
- Ngày 20: xuất bán 120 đơn vị.

| | FIFO | Bình quân sau mỗi lần nhập |
|---|---|---|
| Giá vốn 120 đơn vị xuất | 100 × 50.000 + 20 × 56.000 = 6.120.000 đ | 120 × 52.000 = 6.240.000 đ |
| Tồn cuối 30 đơn vị | 30 × 56.000 = 1.680.000 đ | 30 × 52.000 = 1.560.000 đ |

Đơn giá bình quân sau lần nhập ngày 10 là 7.800.000 / 150 = 52.000 đ. Tổng giá vốn cộng tồn kho ở hai cách đều bằng 7.800.000 đ; phương pháp chỉ chia giá trị đó khác nhau giữa giá vốn trên Báo cáo kết quả kinh doanh và hàng tồn kho trên Báo cáo tình hình tài chính.

Bút toán ghi giá vốn khi hàng được xác định là đã bán vẫn là `Nợ TK 632 / Có TK 156` (TT99, TK 156 mục 3.9); phương pháp tính giá chỉ quyết định số tiền trên bút toán đó. Thời điểm ghi nhận doanh thu và giá vốn xem [[kt-17-quy-trinh-ban-hang]].

### Bình quân cuối kỳ và giá tạm tính

TT99 cho phép bình quân tính "theo từng kỳ". Khi chọn cách này, đơn giá xuất chỉ biết chắc sau khi đã có hết hàng nhập trong kỳ, nên hệ thống thường ghi xuất theo một giá tạm rồi tính lại khi đóng kỳ. TT99 (TK 152 mục 1c, TK 155 mục 1e) mô tả cách làm khi dùng giá tạm tính: cuối kỳ tính hệ số chênh lệch giữa giá thực tế và giá tạm tính.

```
Hệ số chênh lệch = (Giá thực tế tồn đầu kỳ + Giá thực tế nhập trong kỳ)
                 / (Giá tạm tính tồn đầu kỳ + Giá tạm tính nhập trong kỳ)

Giá thực tế xuất dùng trong kỳ = Giá tạm tính xuất dùng trong kỳ × Hệ số chênh lệch
```

Hệ quả cho hệ thống: giá vốn trong kỳ là số tạm; báo cáo lãi gộp theo ngày chỉ đúng sau bước tính lại cuối kỳ. Bước này phải nằm trong checklist khoá sổ ([[kt-36-quy-trinh-khoa-so]]).

## Hai cách xác định lượng và giá trị hàng xuất

TT99 (nguyên tắc điểm 13) cho doanh nghiệp chọn một trong hai cách, áp dụng nhất quán:

<ab-toggle data-labels="Theo từng lần phát sinh|Trên cơ sở tồn cuối kỳ">
<svg viewBox="0 0 640 150" role="img" aria-label="Ghi xuất kho theo từng lần phát sinh" style="width:100%;max-width:640px;height:auto;display:block;margin:1rem auto" font-family="ui-sans-serif, system-ui, sans-serif">
<rect x="10" y="20" width="190" height="56" rx="10" fill="#3b82f6" fill-opacity="0.13" stroke="currentColor" stroke-opacity="0.22"/>
<text x="105" y="53" font-size="14" text-anchor="middle" fill="currentColor">Mỗi phiếu nhập</text>
<rect x="225" y="20" width="190" height="56" rx="10" fill="#3b82f6" fill-opacity="0.13" stroke="currentColor" stroke-opacity="0.22"/>
<text x="320" y="53" font-size="14" text-anchor="middle" fill="currentColor">Mỗi phiếu xuất</text>
<rect x="440" y="20" width="190" height="56" rx="10" fill="#10b981" fill-opacity="0.16" stroke="currentColor" stroke-opacity="0.22"/>
<text x="535" y="53" font-size="14" text-anchor="middle" fill="currentColor">Tồn sổ biết mọi lúc</text>
<text x="320" y="115" font-size="13" text-anchor="middle" fill="currentColor">Cuối kỳ kiểm kê để đối chiếu; chênh lệch phải tìm nguyên nhân</text>
</svg>
<svg viewBox="0 0 640 150" role="img" aria-label="Xác định xuất kho trên cơ sở tồn cuối kỳ" style="width:100%;max-width:640px;height:auto;display:block;margin:1rem auto" font-family="ui-sans-serif, system-ui, sans-serif">
<rect x="10" y="20" width="190" height="56" rx="10" fill="#3b82f6" fill-opacity="0.13" stroke="currentColor" stroke-opacity="0.22"/>
<text x="105" y="53" font-size="14" text-anchor="middle" fill="currentColor">Ghi nhập trong kỳ</text>
<rect x="225" y="20" width="190" height="56" rx="10" fill="#f59e0b" fill-opacity="0.14" stroke="currentColor" stroke-opacity="0.22"/>
<text x="320" y="53" font-size="14" text-anchor="middle" fill="currentColor">Kiểm kê cuối kỳ</text>
<rect x="440" y="20" width="190" height="56" rx="10" fill="#f43f5e" fill-opacity="0.12" stroke="currentColor" stroke-opacity="0.22"/>
<text x="535" y="53" font-size="14" text-anchor="middle" fill="currentColor">Suy ra lượng xuất</text>
<text x="320" y="115" font-size="13" text-anchor="middle" fill="currentColor">Xuất = Tồn đầu kỳ + Nhập trong kỳ − Tồn cuối kỳ (theo kiểm kê)</text>
</svg>
<ab-note>Theo dõi thường xuyên, liên tục; số lượng và giá trị tồn trên sổ xác định được ở bất kỳ thời điểm nào. TT99 nêu cách này thường dùng ở doanh nghiệp sản xuất và thương mại hàng giá trị lớn.</ab-note>
<ab-note>Hợp với doanh nghiệp nhiều chủng loại hàng giá trị thấp, xuất thường xuyên (cửa hàng bán lẻ). Đơn giản nhưng độ chính xác phụ thuộc chất lượng quản lý kho, quầy, bến bãi; hao hụt lẫn vào lượng xuất.</ab-note>
</ab-toggle>

TT200 gọi hai cách này là kê khai thường xuyên và kiểm kê định kỳ. KPMG tóm tắt rằng TT99 loại bỏ các khái niệm này và bỏ TK 611, TK 631; danh mục Phụ lục II TT99 đúng là không còn hai tài khoản đó. Nội dung hai cách xác định thì vẫn được mô tả ở nguyên tắc điểm 13 như trên. Khi khách hàng nói "kiểm kê định kỳ", BA nên hỏi lại họ đang muốn cách thứ hai theo TT99 hay chỉ muốn kiểm kê đối chiếu cuối kỳ.

Dù chọn cách nào, TT99 (nguyên tắc điểm 12) yêu cầu theo dõi chi tiết cả giá trị và hiện vật theo từng thứ, từng loại, quy cách, theo từng địa điểm quản lý, bảo đảm khớp giữa thực tế, sổ chi tiết và sổ tổng hợp. Với hệ thống ERP, yêu cầu này nghĩa là số dư TK 152–158 trên sổ cái phải khớp báo cáo tồn kho theo giá trị, kho, mặt hàng.

## Định giá trong hệ thống: điểm chạm

Lấy Odoo 19 làm ví dụ (tài liệu Inventory valuation):

- **Phương pháp tính giá** đặt ở cấp công ty và có thể ghi đè theo nhóm sản phẩm (product category): Standard Price, FIFO, Average Cost (AVCO). Ba lựa chọn này tương ứng chi phí chuẩn, FIFO, bình quân sau mỗi lần nhập của TT99. Nhu cầu theo dõi giá vốn theo từng lô hoặc số serial (gần với đích danh) dùng tính năng Valuation by lots/serial numbers, chạy trên nền FIFO hoặc AVCO của nhóm sản phẩm. Giá bán lẻ không có trong ba lựa chọn này.
- **Chiến lược lấy hàng không phải phương pháp tính giá**: Odoo ghi rõ removal strategy có LIFO, FEFO nhưng chỉ quyết định hàng nào được nhặt trước, không đổi phương pháp định giá. BA cần tách hai câu hỏi "xuất lô nào" và "xuất theo giá nào" khi lấy yêu cầu.
- **Kho và sổ cái tách nhau**: ứng dụng Inventory giữ giá trị tồn kho theo thời gian thực theo từng dịch chuyển hàng. Phía kế toán chọn Periodic (cập nhật ở bút toán khoá kỳ) hoặc Perpetual (cập nhật khi ghi sổ hoá đơn, kết hợp bút toán khoá kỳ cho phần đã nhận/giao chưa có hoá đơn). Chênh lệch giữa hai bên hiện là Stock Variation trên báo cáo Inventory Valuation. Từ Odoo 19, các tài khoản stock input/output không còn dùng.
- **Xuất âm kho**: khi bán trước khi ghi nhận phiếu nhập, Odoo định giá lượng xuất theo giá gần nhất đã biết; khi phiếu nhập được ghi nhận với giá khác, Odoo điều chỉnh lại giá trị của lượng đã xuất.

> ⚠️ Xuất âm kho làm số tồn trên sổ tạm thời không phản ánh hiện vật, trái yêu cầu khớp giá trị và hiện vật ở nguyên tắc điểm 12 TT99. Có cho phép xuất âm hay không, và nếu cho thì xử lý chênh lệch giá vốn ra sao trước khi khoá sổ, là quyết định cần chốt với kế toán trưởng của khách. Tài liệu đã đọc không có quy định riêng về xuất âm kho.

> 📌 Với Standard Price, Odoo cho đặt Price Difference Account ở nhóm sản phẩm (khi dùng Perpetual) để ghi chênh lệch giữa giá chuẩn và giá trên hoá đơn mua. TT99 cho phép phương pháp chi phí chuẩn nhưng không hướng dẫn bút toán riêng cho khoản chênh lệch này.

> ⚠️ Cần xác nhận: tài khoản ghi nhận chênh lệch giữa chi phí chuẩn và chi phí thực tế khi áp dụng phương pháp chi phí chuẩn theo TT99. Bản TT99 đã đọc không có hướng dẫn hạch toán riêng.

## Ảnh hưởng lên báo cáo

- **Báo cáo tình hình tài chính**: chỉ tiêu Hàng tồn kho (mã số 141) lấy số dư Nợ chi tiết TK 151–158; Dự phòng giảm giá hàng tồn kho (mã số 142) ghi âm; phần dài hạn tách sang mã số 251 (chi phí SXKD dở dang dài hạn) và 273 (thiết bị, vật tư, phụ tùng thay thế dài hạn) (TT99 Phụ lục IV).
- **Báo cáo kết quả kinh doanh**: giá vốn hàng bán (TK 632) gồm giá gốc hàng đã bán, dự phòng giảm giá, hao hụt sau khi trừ bồi thường, chi phí sản xuất chung không phân bổ (VAS 02 đoạn 29). Xem [[kt-40-bao-cao-ket-qua-kinh-doanh]].
- **Thuyết minh**: chính sách ghi nhận hàng tồn kho, phương pháp tính giá trị, cách xác định hàng xuất (theo từng lần phát sinh hay trên cơ sở tồn cuối kỳ), phương pháp lập dự phòng, giá trị hàng tồn kho dùng thế chấp (VAS 02 đoạn 27; TT99 Phụ lục IV).

## Câu hỏi BA nên chốt

- Phương pháp tính giá cho từng nhóm hàng là gì, có nhóm nào khác phương pháp chung không?
- Bình quân tính sau từng lần nhập hay cuối kỳ? Nếu cuối kỳ, ai chạy bước tính lại và khi nào?
- Chi phí thu mua được phân bổ vào giá hàng hay ghi thẳng giá vốn, theo tiêu thức nào?
- Có cho phép xuất âm kho không?
- Hàng nào không thuộc sở hữu (nhận ký gửi, nhận gia công) đang nằm trong kho vật lý, và hệ thống tách nó khỏi giá trị tồn kho thế nào?

## Nguồn

- Chuẩn mực kế toán Việt Nam số 02 – Hàng tồn kho (ban hành theo Quyết định 149/2001/QĐ-BTC), đoạn 03–17, 24, 27, 29. Bản toàn văn: https://cdn.thuvienphapluat.vn//uploads/Hoidapphapluat/2024/TTTT/240912/vas2.doc
- Thông tư 99/2025/TT-BTC, Phụ lục II: Nguyên tắc kế toán hàng tồn kho (điểm 2, 3, 9, 10, 12, 13); TK 152 (mục 1b, 1c); TK 155 (mục 1e); TK 156 (mục 1c, 3.9). Phụ lục IV: hướng dẫn chỉ tiêu mã số 141, 142 và thuyết minh chính sách kế toán hàng tồn kho. Bản toàn văn dạng Word: https://chedo.ketoanthue.net/tai-ve/thong-tu-99-2025-tt-btc-che-do-ke-toan-doanh-nghiep.docx; danh mục tài khoản Phụ lục II: https://docs.google.com/document/d/14NeM16EEKMINCoSraTafe0w_iySTX1Ub/export?format=pdf
- KPMG Việt Nam, "Những thay đổi chính trong chế độ kế toán doanh nghiệp Việt Nam – Thông tư số 99/2025/TT-BTC" (11/2025), mục Hệ thống tài khoản và Cập nhật chính sách kế toán: https://assets.kpmg.com/content/dam/kpmg/vn/pdf/2025/11/circular-99-vi.pdf
- Khoa Kế toán, Đại học Duy Tân, "Những thay đổi nổi bật trong Thông tư 99 về chế độ kế toán doanh nghiệp" (đối chiếu việc đổi tên TK 155): https://files01.duytan.edu.vn/svruploads/kketoan-duytan/639014680339281008-thu-hien-web-t12.25.docx
- Odoo 19 Documentation, Valuation cheat sheet: https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/inventory_valuation/cheat_sheet.html
- Odoo 19 Documentation, Accounting – Inventory valuation: https://www.odoo.com/documentation/19.0/applications/finance/accounting/get_started/inventory_valuation.html
- Odoo 19 Documentation, Valuation of stock movements and inventory operations (mục Negative stock): https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/inventory_valuation/operations_valuation.html
- Odoo 19 Documentation, Valuation by lots/serial numbers: https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/inventory_valuation/valuation_by_lots.html
