# Giao dịch nội bộ: mua bán, chi hộ thu hộ, cho vay nội bộ

Bài này giúp BA xác định một giao dịch "nội bộ" đi vào tài khoản nào ở mỗi bên, tuỳ hai bên là đơn vị trong cùng một pháp nhân hay là hai pháp nhân khác nhau, và cuối kỳ phải đối chiếu những gì để báo cáo tổng hợp hoặc hợp nhất loại trừ được.

## Hai loại "nội bộ"

Trong dự án tập đoàn, chữ "nội bộ" bị dùng cho hai tình huống có cách hạch toán khác hẳn nhau:

| | Trong một pháp nhân | Giữa các pháp nhân trong tập đoàn |
|---|---|---|
| Hai bên | Trụ sở chính và đơn vị trực thuộc, hoặc các đơn vị trực thuộc với nhau | Công ty mẹ và công ty con, các công ty con với nhau |
| Tài khoản công nợ | 136 / 336 | 131 / 331, 1388 / 3388, 1283 / 341, 221 / 411 |
| Báo cáo loại trừ | BCTC của doanh nghiệp (tổng hợp) | BCTC hợp nhất |

TT99 vạch ranh giới này ở nhiều chỗ:

- Phải thu nội bộ (TK 136) gồm các khoản phải thu giữa doanh nghiệp và đơn vị trực thuộc hoặc giữa các đơn vị trực thuộc với nhau. Phải thu của khách hàng (TK 131) là phải thu thương mại với người mua là đơn vị độc lập với người bán, không phải đơn vị trực thuộc.
- Không phản ánh vào TK 336 các giao dịch thanh toán giữa công ty mẹ với các công ty con và giữa các công ty con với nhau.
- Phải trả cho người bán (TK 331) bao gồm cả các khoản phải trả giữa công ty mẹ và công ty con, công ty liên doanh, liên kết.

> ❌ Không dùng TK 136/336 cho giao dịch giữa công ty mẹ và công ty con chỉ vì cả hai cùng "trong tập đoàn". TT99 loại trừ trường hợp này khỏi TK 336.

Phân loại quan hệ giữa các đơn vị xem [[ktqt-01-mo-hinh-da-cong-ty]].

## Trong một pháp nhân: TK 136 và TK 336

### Tài khoản cấp 2

TT99 Phụ lục II quy định TK 136 và TK 336 mỗi tài khoản có 4 tài khoản cấp 2:

| TK 136 - Phải thu nội bộ | TK 336 - Phải trả nội bộ |
|---|---|
| 1361 Vốn kinh doanh ở đơn vị trực thuộc (chỉ mở ở doanh nghiệp) | 3361 Phải trả nội bộ về vốn kinh doanh (chỉ mở ở đơn vị cấp dưới) |
| 1362 Phải thu nội bộ về chênh lệch tỷ giá | 3362 Phải trả nội bộ về chênh lệch tỷ giá |
| 1363 Phải thu nội bộ về chi phí đi vay đủ điều kiện được vốn hoá | 3363 Phải trả nội bộ về chi phí đi vay đủ điều kiện được vốn hoá |
| 1368 Phải thu nội bộ khác | 3368 Phải trả nội bộ khác |

TK 1362, 1363, 3362, 3363 chỉ dùng cho chủ đầu tư có thành lập ban quản lý dự án. Giao dịch thường ngày giữa trụ sở và chi nhánh đi qua TK 1368 và TK 336 (3368).

### Cấp vốn cho đơn vị trực thuộc

- Tại doanh nghiệp, giao vốn bằng tiền hoặc hàng: `Nợ TK 1361 / Có TK 111, 112, 156`. Giao vốn bằng TSCĐ: `Nợ TK 1361` (giá trị còn lại), `Nợ TK 214` (hao mòn) / `Có TK 211` (nguyên giá).
- Tại đơn vị trực thuộc nhận vốn: `Nợ TK 111, 112, 152, 155, 156, 211... / Có TK 336 (3361)`.

TT99 cho doanh nghiệp quyết định đơn vị trực thuộc ghi vốn được cấp vào TK 3361 hay TK 411, tuỳ phân cấp quản lý.

### Bán hàng giữa trụ sở và đơn vị trực thuộc

TT99 cho hai cách, tuỳ phân cấp:

1. **Ghi doanh thu ngay khi chuyển giao nội bộ.** Bên chuyển: `Nợ TK 136 (1368) / Có TK 511` (chi tiết giao dịch bán hàng nội bộ) `/ Có TK 333`, đồng thời `Nợ TK 632 / Có TK 154, 155, 156`. Bên nhận: `Nợ TK 152, 153, 156`, `Nợ TK 133` (nếu có) `/ Có TK 336`.
2. **Không ghi doanh thu khi chuyển giao.** Bên chuyển: `Nợ TK 136 (1368) / Có TK 154, 155, 156 / Có TK 333` (nếu có). Khi đơn vị trực thuộc báo đã bán cho bên thứ ba, trụ sở mới ghi `Nợ TK 136 (1368) / Có TK 511` và `Nợ TK 632 / Có TK 136 (1368)`.

Với cách 1, doanh thu nội bộ nằm trong TK 511 của từng đơn vị nên khi tổng hợp BCTC phải loại trừ (TT99 Điều 16 khoản 2). Đây là lý do TT99 yêu cầu ghi chi tiết "giao dịch bán hàng nội bộ" trong TK 511: hệ thống phải tách được phần doanh thu này.

### Chi hộ, thu hộ, vay mượn trong pháp nhân

- Đơn vị chi hộ: `Nợ TK 136 (1368) / Có TK 111, 112`.
- Đơn vị được chi hộ: `Nợ TK 331, 641, 642...`, `Nợ TK 133` (nếu có) `/ Có TK 336`.
- Đơn vị thu tiền hộ hoặc vay của đơn vị nội bộ khác: `Nợ TK 111, 112 / Có TK 336`.
- Thanh toán: `Nợ TK 336 / Có TK 111, 112` ở bên trả, `Nợ TK 111, 112 / Có TK 136 (1368)` ở bên nhận.

### Kết chuyển kết quả của đơn vị trực thuộc

Đơn vị trực thuộc không được phân cấp đến lợi nhuận sau thuế thì định kỳ kết chuyển doanh thu, chi phí lên doanh nghiệp qua TK 336 hoặc qua TK 911. Đơn vị được phân cấp đến lợi nhuận sau thuế thì kết chuyển lãi `Nợ TK 421 / Có TK 336`, kết chuyển lỗ `Nợ TK 336 / Có TK 421`. Tại doanh nghiệp, khoản phải thu về lãi của đơn vị trực thuộc ghi `Nợ TK 136 (1368) / Có TK 421`.

### Đối chiếu và bù trừ cuối kỳ

TT99 yêu cầu tại thời điểm kết thúc kỳ kế toán:

- Kiểm tra, đối chiếu và xác nhận số phát sinh, số dư TK 136 và TK 336 với từng đơn vị trực thuộc theo từng nội dung thanh toán;
- Lập biên bản thanh toán bù trừ theo từng đơn vị làm căn cứ hạch toán bù trừ: `Nợ TK 336 (3368) / Có TK 136 (1368)`;
- Có chênh lệch thì tìm nguyên nhân và điều chỉnh kịp thời.

TK 136 và TK 336 phải hạch toán chi tiết theo từng đơn vị có quan hệ thanh toán và theo từng khoản. Với hệ thống, điều này có nghĩa là mỗi bút toán nội bộ phải mang mã đơn vị đối ứng.

## Giữa các pháp nhân: dùng tài khoản như với bên ngoài

Giữa hai pháp nhân, mỗi bên ghi sổ như với một đối tác độc lập. Khác biệt duy nhất là đối tác được đánh dấu là đơn vị trong tập đoàn để cuối kỳ đối chiếu và loại trừ khi hợp nhất.

### Mua bán hàng hoá, dịch vụ

- Bên bán: `Nợ TK 131 / Có TK 511 / Có TK 333 (3331)`; `Nợ TK 632 / Có TK 155, 156`.
- Bên mua: `Nợ TK 152, 153, 156...`, `Nợ TK 133 / Có TK 331`.

TT99 nêu rõ TK 331 bao gồm cả phải trả giữa công ty mẹ và công ty con, công ty liên doanh, liên kết. Chứng từ là hoá đơn bên bán phát hành như với khách hàng thường.

Ví dụ giả định: công ty mẹ M bán cho công ty con B lô hàng giá chưa thuế 1.000 triệu đồng, giá vốn tại M 800 triệu đồng. M ghi doanh thu 1.000 và giá vốn 800; B ghi hàng tồn kho 1.000. Trên BCTC riêng của từng bên đây là giao dịch bình thường. Trên BCTC hợp nhất, doanh thu, giá vốn, công nợ của giao dịch này và phần lãi còn nằm trong hàng tồn kho của B phải được loại trừ (xem [[ktqt-04-bctc-hop-nhat]]).

### Chi hộ, thu hộ giữa các pháp nhân

TT99 xếp các khoản này vào phải thu khác / phải trả khác vì không mang tính thương mại:

- Phải thu khác (TK 138) gồm các khoản đã chi hộ bên thứ ba phải thu hồi; TK 1388 phản ánh các khoản phải thu khác ngoài TK 1381, 1383.
- Phải trả khác gồm các khoản phải trả do bên thứ ba chi hộ; TK 338 phản ánh các khoản thu hộ bên thứ ba phải trả lại; TK 3388 là phải trả, phải nộp khác.

Ví dụ giả định: M trả hộ B phí thuê phần mềm 50 triệu đồng.

- M: `Nợ TK 1388 / Có TK 112` (50).
- B: `Nợ TK 642 / Có TK 3388` (50).
- Khi B hoàn tiền: B `Nợ TK 3388 / Có TK 112`; M `Nợ TK 112 / Có TK 1388`.

> ⚠️ Cần xác nhận: thuế GTGT đầu vào của khoản chi hộ (hoá đơn đứng tên bên nào, bên nào được khấu trừ) phụ thuộc quy định về hoá đơn và thuế GTGT, không nằm trong TT99. Hỏi kế toán thuế của khách hàng trước khi thiết kế luồng chi hộ có thuế.

### Cho vay nội bộ

TT99 quy định số hiệu tài khoản như sau:

- **Bên cho vay: TK 1283 - Cho vay**, là tài khoản cấp 2 của TK 128 "Đầu tư nắm giữ đến ngày đáo hạn". TK 1283 phản ánh các khoản cho vay theo khế ước giữa các bên phù hợp quy định của pháp luật; tuỳ hợp đồng, khoản cho vay thu hồi một lần khi đáo hạn hoặc thu hồi dần từng kỳ. TT99 TK 138 còn nêu: cho bên khác mượn bằng tiền thì phải kế toán là cho vay trên TK 1283 (TK 138 chỉ dùng cho cho mượn tài sản phi tiền tệ).
- **Bên đi vay: TK 341 - Vay và nợ thuê tài chính**, chi tiết TK 3411 - Các khoản đi vay. TK 341 phải theo dõi chi tiết từng đối tượng cho vay, từng khế ước, từng thời hạn.

Bút toán theo TT99:

- Giải ngân: bên cho vay `Nợ TK 128 (1283) / Có TK 111, 112`; bên đi vay `Nợ TK 111, 112 / Có TK 341 (3411)`.
- Lãi ở bên cho vay: nhận lãi định kỳ `Nợ TK 111, 112 / Có TK 515`; nhận lãi sau (ghi nhận lãi từng kỳ, thu khi đáo hạn) `Nợ TK 128 / Có TK 515`. TK 1388 cũng có nội dung "phải thu về tiền lãi".
- Lãi ở bên đi vay: `Nợ TK 635` (hoặc TK 627, 241 nếu vốn hoá) `/ Có TK 111, 112` nếu trả định kỳ, `/ Có TK 335` nếu trả sau.
- Trả gốc: bên đi vay `Nợ TK 341 / Có TK 111, 112`; bên cho vay `Nợ TK 111, 112 / Có TK 128`.

Khi lập BCTC, cả hai bên phân loại ngắn hạn / dài hạn theo kỳ hạn còn lại (từ 12 tháng trở xuống hay trên 12 tháng kể từ cuối kỳ). Khoản vay bằng ngoại tệ là khoản mục tiền tệ có gốc ngoại tệ, cuối kỳ đánh giá lại theo hướng dẫn TK 413 (xem [[ktqt-05-giao-dich-ngoai-te]]).

> 📌 Trong một pháp nhân, tiền "vay" giữa trụ sở và chi nhánh không dùng TK 1283/341 mà đi qua TK 336 (TT99 TK 336 mục 3.1 điểm c: khi thu tiền hộ hoặc vay các đơn vị nội bộ khác, ghi `Nợ TK 111, 112 / Có TK 336`).

### Góp vốn và cổ tức

- Công ty mẹ góp vốn bằng tiền vào công ty con: `Nợ TK 221 / Có TK 111, 112`. Công ty con nhận vốn ghi tăng TK 411 (TK 4111 Vốn góp của chủ sở hữu).
- Công ty con chia cổ tức: tại ngày không có quyền từ chối chi trả, `Nợ TK 421 / Có TK 332 - Phải trả cổ tức, lợi nhuận`; khi trả `Nợ TK 332 / Có TK 111, 112`.
- Công ty mẹ: `Nợ TK 1388 / Có TK 515` (phần lợi nhuận sau ngày đầu tư) hoặc `/ Có TK 221` (phần trước ngày đầu tư); khi nhận tiền `Nợ TK 111, 112 / Có TK 1388`.

## Đối chiếu số dư giữa các pháp nhân

Khác với TK 136/336, giữa hai pháp nhân không có bút toán bù trừ trên sổ (mỗi pháp nhân giữ công nợ của mình). Việc đối chiếu phục vụ BCTC hợp nhất: TT202 Điều 32 yêu cầu lập Bảng tổng hợp và đối chiếu số dư các khoản mục phát sinh từ giao dịch giữa các đơn vị trong nội bộ tập đoàn, sau đó mới loại trừ.

Các cặp cần khớp:

| Bên A | Bên B |
|---|---|
| TK 131 phải thu đơn vị tập đoàn | TK 331 phải trả đơn vị tập đoàn |
| TK 1388 chi hộ, lãi phải thu, cổ tức phải thu | TK 3388, TK 335, TK 332 |
| TK 1283 cho vay | TK 341 vay |
| Doanh thu TK 511, 515 với đơn vị tập đoàn | Giá vốn / chi phí / hàng tồn kho, TK 635 tương ứng |

Lệch thường do: một bên đã ghi, bên kia chưa ghi (hàng đang đi đường, hoá đơn chưa nhận); khác tỷ giá quy đổi khi hai bên dùng đồng tiền khác nhau; khác cách phân loại (bên này ghi 131, bên kia ghi 3388).

> 💡 Để đối chiếu được, hệ thống cần mã đối tác tập đoàn (trading partner) trên mọi dòng công nợ và doanh thu, chi phí với đơn vị tập đoàn, và một quy ước chung về đồng tiền giao dịch nội bộ. Điều này nên chốt từ khi dựng danh mục pháp nhân (xem [[ktqt-02-danh-muc-phap-nhan]]).

## Điểm chạm hệ thống

Odoo 19 có tính năng Inter-Company Transactions cho các company trong cùng database, với các tuỳ chọn:

- Tạo hoá đơn mua (vendor bill) tự động khi một company xác nhận hoá đơn bán / credit note cho company kia;
- Tạo báo giá (sales order nháp) tự động khi một company xác nhận đơn mua với company kia;
- Tạo yêu cầu báo giá (purchase order nháp) tự động khi một company xác nhận đơn bán với company kia;
- Đồng bộ dịch chuyển kho giữa các company.

Odoo lưu ý phải cấu hình đúng fiscal position và localization để giao dịch liên công ty chạy đúng. Tính năng này giúp hai bên ghi đúng một giao dịch, giảm chênh lệch khi đối chiếu, nhưng không thay thế bước đối chiếu và loại trừ khi hợp nhất.

Với chi nhánh dựng dưới dạng branch trong Odoo, branch dùng chung hệ thống tài khoản và có thể có journal riêng; việc ghi TK 136/336 giữa trụ sở và chi nhánh là thiết kế cần chốt riêng với khách hàng nếu họ muốn theo dõi công nợ nội bộ như TT99 mô tả.

## Nguồn

- Thông tư 99/2025/TT-BTC, Phụ lục II: Nguyên tắc kế toán các khoản nợ phải thu (mục 2); TK 128 (mục 1.1, tài khoản cấp 2, mục 3.1.1); TK 131 (nguyên tắc kế toán); TK 136 (toàn bộ); TK 138 (nguyên tắc kế toán, tài khoản cấp 2); Nguyên tắc kế toán các khoản nợ phải trả (mục 2); TK 331; TK 332; TK 336 (toàn bộ); TK 338 (nguyên tắc kế toán, tài khoản cấp 2); TK 341 (nguyên tắc kế toán, tài khoản cấp 2, mục 3a); TK 221 (mục 3.1, 3.5); TK 411 (tài khoản cấp 2): https://thuvienphapluat.vn/phap-luat-nha-dat/tai-ve-toan-bo-phu-luc-thong-tu-992025ttbtc-thay-the-thong-tu-200-2014-tu-01012026-10694.html
- Thông tư 99/2025/TT-BTC, Điều 16 khoản 2: https://luatvietnam.vn/linh-vuc-khac/tai-thong-tu-99-2025-tt-btc-huong-dan-che-do-ke-toan-doanh-nghiep-186-105034-article.html
- Thông tư 202/2014/TT-BTC, Điều 32 khoản 1–2: https://caselaw.vn/van-ban-phap-luat/264198-thong-tu-202-2014-tt-btc-huong-dan-phuong-phap-lap-va-trinh-bay-bao-cao-tai-chinh-hop-nhat-do-bo-truong-bo-tai-chinh-ban-hanh
- Odoo 19 Documentation, Multi-company (Inter-company transactions): https://www.odoo.com/documentation/19.0/applications/general/companies/multi_company.html
- Odoo 19 Documentation, Accounting (Branches): https://www.odoo.com/documentation/19.0/applications/finance/accounting.html
