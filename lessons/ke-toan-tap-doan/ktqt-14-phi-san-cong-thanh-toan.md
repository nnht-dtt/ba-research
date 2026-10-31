# Phí sàn, cổng thanh toán, vận chuyển: ghi nhận lúc nào

Bài này giúp BA thiết kế luồng ghi nhận các loại phí của kênh online: phí nào ghi theo từng đơn, phí nào ghi theo kỳ, ghi vào tài khoản nào, xử lý thế nào khi hoá đơn của sàn về muộn hơn đơn hàng. Bài giả định doanh nghiệp là bên chính trên sàn như đã phân tích ở [[ktqt-13-doanh-thu-kenh-online]].

## Các nhóm phí thường gặp

Tên gọi khác nhau giữa các sàn, cổng thanh toán, đơn vị vận chuyển; với kế toán chỉ cần xếp theo hai trục: phí gắn với từng đơn hay gắn với kỳ, và trừ thẳng vào tiền bán hàng hay thanh toán riêng.

| Nhóm phí | Gắn với | Cách thu thường thấy |
|---|---|---|
| Phí cố định, phí hoa hồng theo đơn | Từng đơn (theo % giá trị hoặc mức cố định) | Trừ vào tiền bán hàng khi quyết toán |
| Phí xử lý thanh toán của sàn, phí cổng thanh toán | Từng giao dịch thanh toán | Trừ vào tiền bán hàng hoặc trừ khi chuyển tiền |
| Phí vận chuyển do người bán chịu, phí thu hộ COD | Từng đơn, từng kiện | Trừ vào tiền COD hoặc tiền quyết toán |
| Phí tham gia chương trình (miễn phí vận chuyển, hoàn xu...) | Từng đơn tham gia chương trình | Trừ vào tiền bán hàng |
| Phí quảng cáo trên sàn | Kỳ hoặc số tiền nạp trước | Nạp trước vào tài khoản quảng cáo, trừ dần |
| Phí gian hàng, phí dịch vụ theo tháng | Kỳ | Trừ vào tiền quyết toán hoặc thanh toán riêng |
| Phí rút tiền, phí chuyển khoản | Lần rút tiền | Trừ khi chuyển về ngân hàng |

Danh sách cụ thể, tỷ lệ phí và tên dòng trong báo cáo quyết toán phải lấy từ hợp đồng và báo cáo thật của từng sàn mà khách dùng. Bài này không nêu tỷ lệ của sàn nào.

## Nguyên tắc: dồn tích và phù hợp

Ba quy định chi phối thời điểm ghi phí:

- **Cơ sở dồn tích** (VAS 01 đoạn 03): nghiệp vụ liên quan đến doanh thu, chi phí phải ghi sổ vào thời điểm phát sinh, không căn cứ vào thời điểm thực thu, thực chi tiền.
- **Phù hợp** (VAS 01 đoạn 06, 45): ghi nhận một khoản doanh thu thì phải ghi nhận chi phí tương ứng liên quan đến việc tạo ra doanh thu đó, gồm cả chi phí phải trả liên quan đến doanh thu của kỳ. TT99 nhắc lại nguyên tắc này tại điểm 2 phần nguyên tắc kế toán các khoản doanh thu.
- **Điều kiện ghi nhận chi phí** (VAS 01 đoạn 44): chi phí được ghi nhận khi làm giảm lợi ích kinh tế, gắn với giảm tài sản hoặc tăng nợ phải trả, và xác định được đáng tin cậy.

Áp vào kênh online:

- Phí gắn với đơn (hoa hồng, phí thanh toán, phí vận chuyển người bán chịu) thuộc **kỳ ghi doanh thu của đơn đó**, không phải kỳ sàn quyết toán hay kỳ sàn xuất hoá đơn.
- Phí gắn với kỳ (phí gian hàng tháng) thuộc kỳ dịch vụ được cung cấp.
- Phí quảng cáo nạp trước thuộc kỳ quảng cáo được chạy (tiền đã tiêu), không phải kỳ nạp tiền.

## Ghi theo đơn hay khi quyết toán

Cả hai đều cho số cuối kỳ đúng nếu kỳ quyết toán nằm gọn trong kỳ kế toán. Vấn đề nằm ở đơn giao trong kỳ này nhưng quyết toán kỳ sau, đặc biệt ở ngày cuối tháng.

| Cách làm | Ưu | Nhược |
|---|---|---|
| Ghi phí theo từng đơn khi ghi doanh thu (lấy phí dự kiến từ dữ liệu đơn của sàn) | Doanh thu và phí của cùng đơn nằm cùng kỳ; lợi nhuận theo đơn, theo kênh tính được ngay | Phí dự kiến có thể khác phí thực tế trong quyết toán; cần bút toán điều chỉnh chênh lệch |
| Ghi phí theo báo cáo quyết toán của sàn | Số liệu khớp với tiền về và hoá đơn của sàn | Đơn giao cuối kỳ, quyết toán kỳ sau thì phí bị đẩy sang kỳ sau; phải trích trước phần này |

Dù chọn cách nào, cuối kỳ phải xử lý phần phí của đơn đã ghi doanh thu nhưng chưa có trong quyết toán hoặc chưa có hoá đơn. TT99 TK 335 (chi phí phải trả) dùng cho khoản phải trả về dịch vụ đã nhận trong kỳ nhưng chưa chi trả do chưa có đủ chứng từ, được ghi vào chi phí của kỳ báo cáo. TK 335 cũng yêu cầu khoản trích trước phải có bằng chứng hợp lý, tin cậy và phù hợp số thực tế phát sinh. Dữ liệu phí theo từng đơn từ sàn chính là bằng chứng đó.

> 💡 Câu hỏi cho khách khi khảo sát: kỳ quyết toán của từng sàn, cổng thanh toán, đơn vị vận chuyển là bao lâu (theo ngày, tuần, nửa tháng, tháng), và báo cáo quyết toán có tách phí theo mã đơn không. Câu trả lời quyết định có ghi phí theo đơn được hay chỉ ghi theo kỳ.

## Hoá đơn của sàn thường về sau đơn hàng

Theo Nghị định 254/2026/NĐ-CP (hiệu lực từ 01/7/2026, thay Nghị định 123/2020/NĐ-CP), dịch vụ thương mại điện tử, dịch vụ công nghệ số và nền tảng số, dịch vụ logistic, dịch vụ bưu chính và chuyển phát (kể cả thu hộ, chi hộ), dịch vụ trung gian thanh toán... thuộc nhóm được lập hoá đơn khi hoàn thành đối soát dữ liệu giữa các bên, chậm nhất ngày 07 của tháng sau tháng phát sinh dịch vụ hoặc 07 ngày kể từ ngày kết thúc kỳ quy ước (theo trích dẫn điểm a khoản 4 Điều 9 trong bài của Kế toán Lê Ánh; Forvis Mazars và EY xác nhận việc mở rộng danh sách ngành được lập hoá đơn sau đối soát).

> ⚠️ Cần xác nhận: số khoản, điểm và danh sách đầy đủ trong Điều 9 Nghị định 254/2026/NĐ-CP với văn bản gốc. Nguồn đã đọc là bản tóm tắt của EY, Forvis Mazars và bài trích dẫn của Kế toán Lê Ánh, chưa đọc được văn bản gốc trên cổng Chính phủ.

Hệ quả cho thiết kế: phí của tháng N thường có hoá đơn trong tháng N+1. Luồng hợp lý:

1. Trong kỳ, khi ghi doanh thu đơn hoặc khi nhận quyết toán: ghi chi phí, đối ứng `TK 335` (chưa có hoá đơn) hoặc ghi giảm phải thu sàn nếu phí đã bị trừ tiền.
2. Khi nhận hoá đơn của sàn: tách thuế GTGT đầu vào, chuyển khoản trích trước sang công nợ chính thức: `Nợ TK 335`, `Nợ TK 133 (1331)` `/ Có TK 331` (chi tiết sàn). Chênh lệch giữa số trích trước và hoá đơn ghi tăng hoặc giảm chi phí.
3. Bù trừ công nợ với số phải thu sàn: theo đối soát ở [[ktqt-15-doi-soat-san-cod]].

Thuế GTGT đầu vào của phí chỉ kê khai khi có hoá đơn; chi phí kế toán thì ghi theo kỳ phát sinh. Hai thời điểm này khác nhau là bình thường, hệ thống cần giữ được liên kết giữa khoản trích trước và hoá đơn về sau.

Sàn hoặc cổng thanh toán là nhà cung cấp nước ngoài thì hoá đơn, chứng từ và nghĩa vụ thuế khác hẳn trường hợp trong nước; xem [[ktqt-19-thue-da-quoc-gia]].

## Tài khoản chi phí

TT99 Phụ lục II, TK 641 (chi phí bán hàng) liệt kê trong nguyên tắc kế toán: chi phí chào hàng, giới thiệu, quảng cáo sản phẩm, hoa hồng bán hàng, chi phí bảo quản, đóng gói, vận chuyển. Các tài khoản cấp 2 liên quan:

- **TK 6417 – Chi phí dịch vụ mua ngoài**: gồm tiền thuê kho, thuê bãi, thuê bốc vác, vận chuyển hàng đi bán, tiền trả hoa hồng cho đại lý bán hàng. Phí hoa hồng sàn, phí vận chuyển người bán chịu, phí kho của sàn thường xếp vào đây.
- **TK 6418 – Chi phí bằng tiền khác**: gồm chi phí giới thiệu sản phẩm, quảng cáo, chào hàng. Phí quảng cáo trên sàn thường xếp vào đây.
- **TK 6412 – Chi phí vật liệu, bao bì**: vật liệu đóng gói đơn hàng.

TT99 cho mở thêm nội dung chi phí trong TK 641 tuỳ yêu cầu quản lý (TK 641 mục 1d). Với kênh online, nên có chiều phân tích theo sàn, theo loại phí để tính lợi nhuận theo kênh ([[kt-33-trung-tam-chi-phi]]).

**Phí cổng thanh toán**: TT99 không nêu đích danh. TK 635 (chi phí tài chính) liệt kê rõ không hạch toán vào TK 635 các khoản chi phí bán hàng; Danh sách nội dung TK 635 có chiết khấu thanh toán cho người mua nhưng không nêu phí dịch vụ thu tiền. Phí cổng thanh toán gắn với từng giao dịch bán hàng nên thường xếp vào chi phí bán hàng.

> ⚠️ Cần xác nhận: xếp phí cổng thanh toán và phí rút tiền từ ví sàn vào TK 641 hay TK 642. TT99 không quy định riêng; đây là chính sách kế toán của từng doanh nghiệp, cần chốt với kế toán trưởng và áp dụng nhất quán.

## Một số tình huống

### Phí vận chuyển: ai chịu, ai được hưởng

- **Người bán chịu** (miễn phí vận chuyển cho người mua): chi phí vận chuyển là chi phí bán hàng, `Nợ TK 641 (6417)`.
- **Người mua trả, sàn thu rồi trả thẳng đơn vị vận chuyển, người bán không được hưởng**: không phải doanh thu và không phải chi phí của người bán. Đây là loại phí thu thêm ngoài giá bán mà doanh nghiệp không được hưởng (TT99, nguyên tắc doanh thu điểm 4). Báo cáo quyết toán có thể hiện cả hai chiều thu và trả của khoản này thì hai dòng triệt tiêu, không ghi sổ.
- **Người bán tự thuê vận chuyển và thu phí vận chuyển của người mua**: phí thu là một phần doanh thu, phí trả đơn vị vận chuyển là chi phí bán hàng. Câu hỏi bên chính hay đại lý áp như với hàng hoá ([[ktqt-13-doanh-thu-kenh-online]]).

### Phí quảng cáo nạp trước

Tiền nạp vào tài khoản quảng cáo của sàn là khoản trả trước cho người cung cấp dịch vụ. TT99 TK 331 phản ánh cả số tiền ứng trước cho người bán, người cung cấp nhưng chưa nhận dịch vụ, và TK 331 có thể có số dư Nợ cho phần ứng trước này.

- Nạp tiền: `Nợ TK 331` (chi tiết sàn, phần ứng trước) `/ Có TK 112`.
- Theo số quảng cáo đã chạy trong kỳ (theo báo cáo của sàn): `Nợ TK 641 (6418)` `/ Có TK 331`; thuế GTGT đầu vào theo hoá đơn của sàn.

Số còn lại chưa tiêu ở cuối kỳ là tài sản (số dư Nợ TK 331), không phải chi phí. Ghi toàn bộ tiền nạp vào chi phí ngay khi nạp làm lệch kỳ theo nguyên tắc dồn tích ở trên.

### Phí bị hoàn khi đơn bị huỷ, trả hàng

Đơn đã ghi doanh thu sau đó bị trả hàng: sàn có thể hoàn một phần hay toàn bộ phí, hoặc giữ lại phí. Hai dòng tiền cần tách: giảm doanh thu (`Nợ TK 521`, `Nợ TK 3331` `/ Có TK 131` theo TT99 TK 131 mục 3.2) và phí được hoàn (ghi giảm chi phí bán hàng; TT99 cho phép bên Có TK 641 ghi các khoản được ghi giảm chi phí bán hàng trong kỳ). Phí sàn giữ lại vẫn là chi phí. Chi tiết đổi trả xem [[kt-19-doi-tra-hoan-tien]].

## Tổng hợp bút toán theo sự kiện

Ví dụ giả định: doanh nghiệp là bên chính, phí trừ thẳng vào tiền bán hàng.

| Sự kiện | Bút toán |
|---|---|
| Đơn đủ điều kiện ghi doanh thu | `Nợ TK 131` (chi tiết sàn) `/ Có TK 511 / Có TK 3331` |
| Phí theo đơn, đã có số phí, chưa có hoá đơn | `Nợ TK 641 (6417) / Có TK 335` |
| Nhận hoá đơn phí của sàn | `Nợ TK 335`, `Nợ TK 1331 / Có TK 331` (chi tiết sàn) |
| Quyết toán: sàn trừ phí, chuyển số còn lại | `Nợ TK 112` (hoặc `TK 113`, xem bài sau), `Nợ TK 331 / Có TK 131` |
| Nạp tiền quảng cáo | `Nợ TK 331` (ứng trước) `/ Có TK 112` |
| Quảng cáo đã chạy trong kỳ | `Nợ TK 641 (6418) / Có TK 331` |
| Phí cổng thanh toán trừ khi chuyển tiền | `Nợ TK 641`, `Nợ TK 1331` (nếu có hoá đơn) `/ Có TK 131` (chi tiết cổng) |

Dòng quyết toán bù trừ TK 331 với TK 131 của cùng một sàn cần căn cứ là hợp đồng hoặc báo cáo quyết toán thể hiện việc trừ phí, kèm đối chiếu công nợ. Hạch toán bù trừ công nợ nói chung xem [[kt-15-tam-ung-dat-coc-can-tru]].

## Điểm chạm hệ thống

- Tài liệu Amazon Connector của Odoo 19 hướng dẫn ghi nhận tiền Amazon chuyển về bằng thanh toán theo lô (batch payment) qua sổ ngân hàng riêng cho Amazon, và ghi chú cùng thao tác đó áp dụng được cho các hoá đơn nhà cung cấp của Amazon dành cho hoa hồng. Tức là phí được ghi như hoá đơn nhà cung cấp riêng, không trừ vào doanh thu.
- Mô hình đối soát (reconciliation model) của Odoo dùng cho các dòng lặp lại như phí ngân hàng: điều kiện theo sổ, đối tác, khoảng số tiền, nội dung dòng giao dịch (kể cả biểu thức chính quy) và sinh sẵn bút toán đối ứng. Phí rút tiền, phí chuyển khoản lặp lại hằng ngày hợp với cách này.

Khi khảo sát, BA cần biết hệ thống lấy phí theo đơn từ đâu (API đơn, file quyết toán, hay chỉ từ hoá đơn của sàn), vì nguồn dữ liệu quyết định có ghi phí theo đơn được hay không.

## Ảnh hưởng tới báo cáo

- **B02-DN**: phí sàn, cổng thanh toán, vận chuyển nằm ở chi phí bán hàng; ghi nhầm vào giảm trừ doanh thu làm sai doanh thu thuần (xem bảng so sánh ở [[ktqt-13-doanh-thu-kenh-online]]).
- **B01-DN**: chi phí trích trước chưa có hoá đơn nằm ở chi phí phải trả (TK 335); tiền quảng cáo nạp trước chưa tiêu nằm ở trả trước cho người bán (số dư Nợ TK 331).
- **Kỳ báo cáo**: phí của đơn giao cuối tháng phải nằm trong tháng đó. Đây là điểm kiểm tra trong checklist khoá sổ ([[kt-36-quy-trinh-khoa-so]]).

## Nguồn

- Chuẩn mực kế toán Việt Nam số 01 "Chuẩn mực chung" (ban hành theo Quyết định 165/2002/QĐ-BTC), đoạn 03, 06, 44, 45: https://caselaw.vn/van-ban-phap-luat/234275-quyet-dinh-so-165-2002-qd-btc-ngay-31-12-2002-ban-hanh-va-cong-bo-sau-06-chuan-muc-ke-toan-viet-nam-cua-bo-truong-bo-tai-chinh
- Thông tư 99/2025/TT-BTC, Phụ lục II Mục B: nguyên tắc kế toán các khoản doanh thu (điểm 2, 4); TK 131 mục 3.2; TK 331 (nguyên tắc mục b, kết cấu, số dư Nợ); TK 335 (nguyên tắc mục a, d); TK 635 (nguyên tắc mục a, b); TK 641 (nguyên tắc a, d; TK cấp 2 6412, 6417, 6418; bên Có); TK 511 mục 3.8a. Toàn văn: https://luatvietnam.vn/linh-vuc-khac/tai-thong-tu-99-2025-tt-btc-huong-dan-che-do-ke-toan-doanh-nghiep-186-105034-article.html
- EY Việt Nam, Tin nhanh về Thuế tháng 7/2026 "Nghị định 254/2026/NĐ-CP về hóa đơn điện tử và chứng từ điện tử", mục 4: https://www.ey.com/content/dam/ey-unified-site/ey-com/vi-vn/technical/tax/documents/ey-vn-decree-254-on-electronic-invoices-and-electronic-documents.pdf
- Forvis Mazars Việt Nam, Bản tin "Cập nhật các điểm đáng chú ý trong Nghị định 254/2026/NĐ-CP và Thông tư 91/2026/TT-BTC", mục 4: https://www.forvismazars.com/vn/vi/n-ph-m-s-ki-n/c-p-nh-t-v-vi-t-nam/b-n-tin-thong-bao-chuyen-mon/b-n-tin-v-thu-va-phap-ly/ngh-d-nh-254-va-thong-t-91
- Kế toán Lê Ánh, "Thời điểm lập hóa đơn từ 01/7/2026 theo Nghị định 254/2026/NĐ-CP và Thông tư 91/2026/TT-BTC" (trích khoản 4 Điều 9, dùng để đối chiếu): https://ketoanleanh.edu.vn/kinh-nghiem-ke-toan/thoi-diem-lap-hoa-don-dien-tu.html
- Odoo 19 Documentation, Amazon order management (Register payments): https://www.odoo.com/documentation/19.0/applications/sales/sales/amazon_connector/manage.html
- Odoo 19 Documentation, Reconciliation models: https://www.odoo.com/documentation/19.0/applications/finance/accounting/bank/reconciliation_models.html
