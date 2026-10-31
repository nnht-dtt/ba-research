# Ví dụ tổng hợp: tập đoàn đa quốc gia bán hàng đa kênh

Bài này đi trọn một năm tài chính của một tập đoàn giả định, từ lúc lập danh mục pháp nhân tới lúc gửi số cho công ty mẹ hợp nhất. Mỗi bước dùng lại đúng quy tắc của bài gốc trong khoá và dẫn link về bài đó, để bạn thấy các mảnh ghép nối với nhau ra sao trên cùng một bộ số.

> 📌 Toàn bộ tập đoàn, giao dịch, tỷ giá và số tiền trong bài là ví dụ giả định, làm tròn cho dễ theo dõi. Không dùng cho tình huống thật nếu chưa đối chiếu quy định và chính sách của khách hàng.

## Tập đoàn A và danh mục pháp nhân

Tập đoàn A (giả định) có ba pháp nhân:

- **M**: công ty mẹ, thành lập ở nước X (ngoài Việt Nam). M lập BCTC hợp nhất theo IFRS, trình bày bằng USD. M cung cấp dịch vụ quản lý cho các công ty con và cho A-VN vay vốn.
- **A-VN**: công ty con ở Việt Nam, M sở hữu 100%. A-VN mua hàng, bán trong nước qua một sàn TMĐT và website riêng, đồng thời bán hàng cho A-US.
- **A-US**: pháp nhân bán hàng ở Mỹ, M sở hữu 100%. A-US mua hàng của A-VN, bán cho người tiêu dùng Mỹ qua một sàn TMĐT và website riêng.

Ba pháp nhân đều có tư cách pháp nhân riêng, nên A-VN và A-US là công ty con của M, không phải chi nhánh ([[ktqt-01-mo-hinh-da-cong-ty]]). Danh mục pháp nhân theo mẫu ở [[ktqt-02-danh-muc-phap-nhan]]:

| Cột | M | A-VN | A-US |
|---|---|---|---|
| Quốc gia | Nước X | Việt Nam | Mỹ |
| Công ty sở hữu trực tiếp | | M | M |
| % quyền biểu quyết / % lợi ích | | 100% / 100% | 100% / 100% |
| Phân loại | Công ty mẹ | Công ty con cấp 1 | Công ty con cấp 1 |
| Chuẩn mực ghi sổ địa phương | IFRS | VAS, chế độ kế toán theo TT99 | Chuẩn mực địa phương |
| Chuẩn mực báo cáo tập đoàn | IFRS | IFRS | IFRS |
| Đơn vị tiền tệ kế toán | USD | VND | USD |
| Năm tài chính | 01/01–31/12 | 01/01–31/12 | 01/01–31/12 |

Vài điểm cần đọc đúng từ bảng:

- Quyền biểu quyết và tỷ lệ lợi ích là hai cột riêng. Ở đây cả hai đều 100% nên không có cổ đông không kiểm soát; nếu M chỉ nắm, ví dụ, 80% A-US thì bước tách lợi ích cổ đông không kiểm soát ở [[ktqt-04-bctc-hop-nhat]] sẽ phát sinh.
- A-VN ghi sổ bằng VND theo TT99 Điều 4. Kết luận đơn vị tiền tệ kế toán theo VAS và đồng tiền chức năng theo IAS 21 là xét đoán của kế toán và kiểm toán, BA chỉ ghi nhận kết quả. Bài giả định cả hai đều là VND ([[ktqt-06-don-vi-tien-te-chuyen-doi]]).
- Ba pháp nhân khác chuẩn mực hoặc khác đồng tiền nên trong ERP mỗi pháp nhân là một company riêng. Một đơn vị có đồng tiền kế toán hoặc năm tài chính khác thì không thể dựng thành branch ([[ktqt-02-danh-muc-phap-nhan]]).
- Cả ba cùng kết thúc năm 31/12 nên không có bài toán năm tài chính lệch. Nếu A-VN chọn năm 01/04–31/03, chênh lệch với 31/12 là 9 tháng, vượt giới hạn 3 tháng, A-VN phải lập thêm số liệu cho kỳ 01/01–31/12 ([[ktqt-12-bao-cao-cho-tap-doan]]).

Tỷ giá giả định dùng trong cả bài:

| Thời điểm | USD/VND |
|---|---|
| Ngày phát sinh các giao dịch trong năm | 25.000 |
| 31/12 (tỷ giá đánh giá lại cuối kỳ) | 25.200 |
| 15/01 năm sau | 25.300 |

## Giao dịch nội bộ trong năm

Giữa các pháp nhân, mỗi bên ghi sổ như với đối tác độc lập; điểm khác duy nhất là đối tác được gắn cờ "đơn vị trong tập đoàn" (mã trading partner) để cuối kỳ đối chiếu và loại trừ ([[ktqt-03-giao-dich-noi-bo]]). A-VN không dùng TK 136/336 cho bất kỳ giao dịch nào dưới đây, vì TT99 dành hai tài khoản này cho quan hệ giữa doanh nghiệp và đơn vị trực thuộc.

Theo Nghị định 255/2026/NĐ-CP, M nắm ít nhất 25% vốn góp của A-VN, và A-VN với A-US cùng có ít nhất 25% vốn do một bên thứ ba (M) nắm giữ, nên cả ba là bên liên kết của nhau. Giá các giao dịch dưới đây phải theo nguyên tắc giao dịch độc lập ([[ktqt-11-giao-dich-cong-ty-me]]).

### Giao dịch 1: A-VN bán hàng cho A-US

A-VN bán một lô hàng cho A-US giá 40.000 USD. Giá vốn của lô hàng tại A-VN là 800 triệu đồng.

Tại A-VN (đơn vị: triệu đồng):

- `Nợ TK 131` (chi tiết A-US, cờ nội bộ) `/ Có TK 511`: 40.000 × 25.000 = 1.000
- `Nợ TK 632 / Có TK 156`: 800

Tại A-US: ghi hàng tồn kho 40.000 USD, phải trả A-VN 40.000 USD.

> ⚠️ Cần xác nhận: thuế GTGT của hàng xuất khẩu, thủ tục hải quan xuất khẩu ở Việt Nam và thuế nhập khẩu vào Mỹ nằm ngoài phạm vi các bài trong khoá. Bút toán trên chưa có dòng thuế; cần chuyên gia thuế của dự án bổ sung.

Đến 31/12, A-US đã bán ra ngoài 60% lô hàng, còn tồn 40%. Số này dùng ở bước hợp nhất.

### Giao dịch 2: M thu phí quản lý của A-VN

Hợp đồng dịch vụ quản lý giữa M và A-VN có giá 10.000 USD cho năm, giả định giá hợp đồng **đã gồm** thuế nhà thầu (trường hợp a ở [[ktqt-11-giao-dich-cong-ty-me]]). Gọi G là thuế GTGT nhà thầu và D là thuế TNDN nhà thầu A-VN phải nộp thay, quy đổi ra VND.

> ⚠️ Cần xác nhận: tỷ lệ tính thuế GTGT, TNDN nhà thầu cho từng loại thu nhập (phí dịch vụ, lãi vay) theo văn bản hiện hành chưa được xác nhận trong khoá, nên bài để G và D dạng ký hiệu. Không cấu hình tỷ lệ trên hệ thống khi chưa có văn bản gốc.

Tại A-VN (triệu đồng; giả định thanh toán cùng tỷ giá 25.000 để không phát sinh chênh lệch):

- Nhận dịch vụ: `Nợ TK 642` (250 − G), `Nợ TK 1388` (G, nếu thuế GTGT nhà thầu được khấu trừ) `/ Có TK 331` (chi tiết M) 250.
- Trả tiền: `Nợ TK 331` 250 `/ Có TK 3339` (G + D) `/ Có TK 112` (250 − G − D).
- Nộp thuế: `Nợ TK 3339 / Có TK 112`; đồng thời `Nợ TK 133 / Có TK 1388` (G).

> ⚠️ Cần xác nhận: TT99 hướng dẫn hạch toán thuế nhà thầu qua TK 3339 nhưng phần mô tả TK 3338 lại nêu "thuế nộp thay cho các tổ chức, cá nhân nước ngoài". Kế toán trưởng cần chốt tài khoản và dùng thống nhất trong mapping COA ([[ktqt-19-thue-da-quoc-gia]]).

Hai hệ quả cần nhớ cho các bước sau:

- M xuất hoá đơn 10.000 USD nhưng chỉ nhận về 10.000 USD trừ phần thuế nộp thay. Khi đối chiếu liên công ty, phần chênh phải giải thích bằng chứng từ nộp thuế.
- Về thuế TNDN của A-VN, chi phí dịch vụ trả bên liên kết chỉ được trừ khi đủ điều kiện ở Điều 16 khoản 2 Nghị định 255 (dịch vụ có giá trị, phục vụ trực tiếp hoạt động của A-VN, phí theo nguyên tắc giao dịch độc lập, có hợp đồng, chứng từ, phương pháp tính phí của tập đoàn). Đây là quy định thuế, sổ kế toán vẫn ghi đủ chi phí.

### Giao dịch 3: A-VN vay M

Ngày 01/01, M cho A-VN vay 200.000 USD, lãi suất giả định 6%/năm, trả lãi cuối kỳ hạn.

Tại A-VN (triệu đồng):

- Nhận tiền vay: `Nợ TK 112 / Có TK 341 (3411)` (chi tiết M, khế ước): 200.000 × 25.000 = 5.000.
- Lãi năm 12.000 USD, trả sau. Để số tròn, gộp trích lãi cả năm vào một bút toán ngày 31/12 theo tỷ giá 25.200: `Nợ TK 635 / Có TK 335`: 302,4.

Tại M: ghi khoản cho vay 200.000 USD và thu nhập lãi 12.000 USD.

Lãi trả cho M cũng cần xét nghĩa vụ thuế nhà thầu, và chi phí lãi vay của A-VN chịu giới hạn được trừ 30% theo Điều 16 khoản 3 Nghị định 255 ([[ktqt-11-giao-dich-cong-ty-me]]). Hệ thống của A-VN vì vậy phải tách được chi phí lãi vay, lãi tiền gửi, lãi cho vay và khấu hao.

### Bảng đối chiếu số dư nội bộ cuối năm

Trước khi gửi số cho M, các cặp số dư sau phải khớp. Đối chiếu dựa trên số nguyên tệ, không dựa trên số VND ([[ktqt-03-giao-dich-noi-bo]], [[ktqt-11-giao-dich-cong-ty-me]]):

| Bên A | Bên B | Nguyên tệ |
|---|---|---|
| A-VN: TK 131 chi tiết A-US | A-US: phải trả A-VN | 40.000 USD |
| M: cho vay A-VN | A-VN: TK 3411 chi tiết M | 200.000 USD |
| M: lãi phải thu A-VN | A-VN: TK 335 chi tiết M | 12.000 USD |
| M: doanh thu phí quản lý | A-VN: TK 642 phí quản lý của M | 10.000 USD, lệch phần thuế nhà thầu |

## Một đơn bán qua sàn ở Việt Nam, từ lúc đặt tới lúc tiền về

A-VN mở gian hàng trên một sàn TMĐT ở Việt Nam, gian hàng đứng tên pháp nhân A-VN. A-VN tự định giá, tự giữ hàng, chịu trách nhiệm với người mua, nên A-VN là bên chính và ghi doanh thu theo giá khách trả ([[ktqt-13-doanh-thu-kenh-online]]).

Đơn giả định (lấy lại số của [[ktqt-13-doanh-thu-kenh-online]]): giá bán chưa thuế 1.000.000 đ, thuế GTGT giả định 10%, giá vốn 700.000 đ. Phí sàn 80.000 đ chưa thuế, thuế GTGT trên phí 8.000 đ. Tiền sàn chuyển về 1.012.000 đ. Đơn được đặt và giao sát cuối năm để thấy vấn đề cắt kỳ.

<step-flow>
<svg viewBox="0 0 680 220" role="img" aria-labelledby="q20s-t" style="width:100%;max-width:680px;height:auto;display:block;margin:1.25rem auto" font-family="ui-sans-serif, system-ui, sans-serif">
<title id="q20s-t">Vòng đời một đơn bán qua sàn vắt qua hai kỳ</title>
<defs>
<marker id="q20s-arrow" markerWidth="9" markerHeight="9" refX="8" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 z" fill="currentColor"/></marker>
</defs>
<line x1="345" y1="10" x2="345" y2="210" stroke="currentColor" stroke-opacity="0.35" stroke-dasharray="5 4"/>
<text x="170" y="22" font-size="12" text-anchor="middle" fill="currentColor" fill-opacity="0.75">Tháng 12</text>
<text x="515" y="22" font-size="12" text-anchor="middle" fill="currentColor" fill-opacity="0.75">Tháng 1 năm sau</text>
<g data-step="1">
<rect x="10" y="40" width="150" height="60" rx="10" fill="#3b82f6" fill-opacity="0.13" stroke="currentColor" stroke-opacity="0.22"/>
<text x="85" y="66" font-size="13" text-anchor="middle" fill="currentColor">28/12 đặt đơn</text>
<text x="85" y="84" font-size="11" text-anchor="middle" fill="currentColor" fill-opacity="0.75">giao vận chuyển</text>
</g>
<g data-step="2">
<line x1="160" y1="70" x2="182" y2="70" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" marker-end="url(#q20s-arrow)"/>
<rect x="185" y="40" width="150" height="60" rx="10" fill="#10b981" fill-opacity="0.16" stroke="currentColor" stroke-opacity="0.22"/>
<text x="260" y="66" font-size="13" text-anchor="middle" fill="currentColor">30/12 khách nhận</text>
<text x="260" y="84" font-size="11" text-anchor="middle" fill="currentColor" fill-opacity="0.75">doanh thu, hoá đơn</text>
</g>
<g data-step="3">
<rect x="185" y="130" width="150" height="60" rx="10" fill="#f59e0b" fill-opacity="0.14" stroke="currentColor" stroke-opacity="0.22"/>
<text x="260" y="156" font-size="13" text-anchor="middle" fill="currentColor">31/12 khoá sổ</text>
<text x="260" y="174" font-size="11" text-anchor="middle" fill="currentColor" fill-opacity="0.75">trích trước phí sàn</text>
</g>
<g data-step="4">
<line x1="335" y1="70" x2="357" y2="70" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" marker-end="url(#q20s-arrow)"/>
<rect x="360" y="40" width="150" height="60" rx="10" fill="#a855f7" fill-opacity="0.13" stroke="currentColor" stroke-opacity="0.22"/>
<text x="435" y="66" font-size="13" text-anchor="middle" fill="currentColor">05/01 quyết toán</text>
<text x="435" y="84" font-size="11" text-anchor="middle" fill="currentColor" fill-opacity="0.75">tiền về ngân hàng</text>
</g>
<g data-step="5">
<line x1="510" y1="70" x2="532" y2="70" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" marker-end="url(#q20s-arrow)"/>
<rect x="535" y="40" width="135" height="60" rx="10" fill="#f43f5e" fill-opacity="0.12" stroke="currentColor" stroke-opacity="0.22"/>
<text x="602" y="66" font-size="13" text-anchor="middle" fill="currentColor">07/01 hoá đơn</text>
<text x="602" y="84" font-size="11" text-anchor="middle" fill="currentColor" fill-opacity="0.75">phí sàn, bù trừ</text>
</g>
</svg>
<step-note data-step="1">Khách thanh toán cho sàn, A-VN bàn giao hàng cho đơn vị vận chuyển. Hàng chưa xác định là đã bán: <code>Nợ TK 157 / Có TK 156</code> 700.000. A-VN chưa nhận đồng nào, chưa có doanh thu.</step-note>
<step-note data-step="2">Giả định chính sách của A-VN: đơn đủ điều kiện ghi doanh thu khi người mua nhận hàng. <code>Nợ TK 131</code> (chi tiết sàn) 1.100.000 <code>/ Có TK 511</code> 1.000.000 <code>/ Có TK 33311</code> 100.000; <code>Nợ TK 632 / Có TK 157</code> 700.000. A-VN lập hoá đơn bán hàng cho người mua.</step-note>
<step-note data-step="3">Phí của đơn thuộc kỳ ghi doanh thu, sàn chưa có hoá đơn: <code>Nợ TK 641 (6417) / Có TK 335</code> 80.000. Số dư TK 131 chi tiết sàn 1.100.000 là đơn đã ghi doanh thu nhưng chưa quyết toán.</step-note>
<step-note data-step="4">Sàn quyết toán, trừ phí 88.000 và chuyển 1.012.000: <code>Nợ TK 112 / Có TK 131</code> (chi tiết sàn) 1.012.000. TK 131 chi tiết sàn còn 88.000 chờ bù trừ.</step-note>
<step-note data-step="5">Nhận hoá đơn phí của sàn: <code>Nợ TK 335</code> 80.000, <code>Nợ TK 1331</code> 8.000 <code>/ Có TK 331</code> (chi tiết sàn) 88.000. Bù trừ theo quyết toán: <code>Nợ TK 331 / Có TK 131</code> 88.000. Số dư với sàn về 0.</step-note>
</step-flow>

### Doanh thu và thời điểm ghi nhận

Thời điểm ghi doanh thu và thời điểm lập hoá đơn đều xoay quanh câu hỏi quyền sở hữu chuyển cho người mua lúc nào. Ví dụ chọn mốc "người mua nhận hàng" chỉ để minh hoạ.

> ⚠️ Cần xác nhận: với đơn giao qua đơn vị vận chuyển, mốc chuyển giao quyền sở hữu để lập hoá đơn là lúc bàn giao cho đơn vị vận chuyển hay lúc người mua nhận hàng. Khoá chưa có nguồn nêu riêng cho bán qua sàn; cần chốt với tư vấn thuế của khách ([[ktqt-16-hoa-don-kenh-online]]).

Nếu tích hợp chỉ đẩy "số tiền thực nhận" 1.012.000 đ vào doanh thu, doanh thu thuần chưa thuế sẽ là 920.000 đ thay vì 1.000.000 đ, phí sàn biến mất khỏi chi phí bán hàng và thuế GTGT đầu vào của phí sàn mất dấu ([[ktqt-13-doanh-thu-kenh-online]]).

### Phí sàn và cắt kỳ

Phí 80.000 đ gắn với đơn nên thuộc tháng 12, kỳ ghi doanh thu, dù quyết toán và hoá đơn phí về trong tháng 1 ([[ktqt-14-phi-san-cong-thanh-toan]]). Không trích trước thì lợi nhuận tháng 12 cao hơn thực tế 80.000 đ và tháng 1 thấp hơn chừng ấy. Dữ liệu phí theo từng đơn từ sàn là bằng chứng cho khoản trích trước trên TK 335.

Hoá đơn dịch vụ của sàn về sau đơn hàng là bình thường: dịch vụ TMĐT thuộc nhóm được lập hoá đơn khi hoàn thành đối soát, chậm nhất ngày 07 của tháng sau tháng phát sinh dịch vụ.

> ⚠️ Cần xác nhận: số khoản, điểm và danh sách đầy đủ tại Điều 9 Nghị định 254/2026/NĐ-CP với văn bản gốc, như đã ghi ở [[ktqt-14-phi-san-cong-thanh-toan]].

### Hoá đơn hai chiều

| Luồng | Người lập | Người nhận | Thời điểm trong ví dụ |
|---|---|---|---|
| Bán hàng | A-VN | Người mua cuối (ghi "Bán cho người tiêu dùng" nếu người mua không cung cấp thông tin) | 30/12 |
| Phí dịch vụ sàn | Nhà vận hành sàn | A-VN | 07/01 |

Bán hàng hoá qua sàn không nằm trong các trường hợp được lập hoá đơn tổng hợp cuối ngày mà các nguồn của khoá liệt kê, nên A-VN lập theo từng đơn ([[ktqt-16-hoa-don-kenh-online]]). Nếu sau đó khách trả hàng, A-VN lập hoá đơn điều chỉnh, ghi `Nợ TK 521`, `Nợ TK 3331 / Có TK 131` và nhập lại kho; phí sàn được hoàn (nếu có) ghi giảm chi phí bán hàng.

### Đối soát ba chiều

Theo [[ktqt-15-doi-soat-san-cod]]:

1. **Đơn hàng với báo cáo quyết toán**, khớp theo mã đơn của sàn: tiền về 1.012.000 = 1.100.000 tiền đơn − 88.000 phí.
2. **Báo cáo quyết toán với sao kê ngân hàng**, khớp theo mã hoặc ngày đợt chuyển tiền: dòng sao kê 05/01 bằng tổng tiền về của kỳ quyết toán, không phải từng đơn.
3. **Số dư phải thu theo sàn**: ngày 31/12 số dư TK 131 chi tiết sàn 1.100.000 bằng đúng đơn đã ghi doanh thu mà chưa quyết toán.

Tiền đang ở ví sàn không ghi vào TK 112. Có dùng TK 113 cho khoảng chờ ngân hàng báo Có hay không, và theo dõi tiền sàn giữ hộ ở TK 131 hay TK 1388, là chính sách kế toán cần chốt.

Gian hàng đứng tên pháp nhân A-VN nên báo cáo quyết toán không có dòng "khấu trừ thuế". Thấy dòng này là dấu hiệu gian hàng đang đứng tên hộ hoặc cá nhân kinh doanh, và doanh thu đó về pháp lý chưa phải của A-VN ([[ktqt-13-doanh-thu-kenh-online]]).

### Đơn qua website

Đơn trên website của A-VN đi cùng luồng, khác ở hai điểm: khách là người mua cuối và cổng thanh toán là đối tượng chi tiết của phải thu; thường không có phí hoa hồng, chỉ có phí giao dịch thanh toán.

> ⚠️ Cần xác nhận: phí cổng thanh toán và phí rút tiền từ ví sàn xếp vào TK 641 hay TK 642. TT99 không quy định riêng; đây là chính sách kế toán của A-VN ([[ktqt-14-phi-san-cong-thanh-toan]]).

Trên báo cáo quản trị, cùng TK 511 và TK 641 nhưng phải tách được theo kênh (sàn, website) và theo gian hàng bằng chiều phân tích ([[kt-33-trung-tam-chi-phi]]).

## Giao dịch ngoại tệ và đánh giá lại cuối kỳ ở A-VN

A-VN có ba khoản mục tiền tệ gốc USD ở 31/12 ([[ktqt-05-giao-dich-ngoai-te]]):

| Khoản mục | Nguyên tệ | Ghi sổ (25.000) | Cuối kỳ (25.200) | Chênh lệch |
|---|---|---|---|---|
| TK 131 phải thu A-US | 40.000 USD | 1.000 | 1.008 | Lãi 8 |
| TK 3411 vay M | 200.000 USD | 5.000 | 5.040 | Lỗ 40 |
| TK 335 lãi phải trả M | 12.000 USD | 302,4 (trích ở 25.200) | 302,4 | 0 |

Đơn vị: triệu đồng. Tỷ giá đánh giá lại là tỷ giá mua bán chuyển khoản trung bình của ngân hàng A-VN thường xuyên giao dịch tại 31/12; riêng tiền gửi USD (nếu có số dư) đánh giá theo tỷ giá của chính ngân hàng mở tài khoản.

Bút toán đánh giá lại (TT99, TK 413, mục 4.2):

- Phải thu A-US: `Nợ TK 131 / Có TK 515`: 8.
- Khoản vay M: `Nợ TK 635 / Có TK 341`: 40.

Những khoản **không** đánh giá lại: doanh thu 1.000 đã ghi theo tỷ giá ngày giao dịch, chi phí phí quản lý, hàng tồn kho. Đây là khoản mục phi tiền tệ hoặc khoản mục kết quả kinh doanh. Phải thu sàn 1.100.000 đ là khoản VND, không liên quan tỷ giá. Nếu A-VN có khoản trả trước bằng USD cho người bán, khoản đó cũng không đánh giá lại.

Trên B02 của A-VN, chênh lệch đánh giá lại trình bày theo số thuần giữa tổng lãi và tổng lỗ đánh giá lại; lãi, lỗ tỷ giá nằm ở doanh thu và chi phí tài chính, không nằm trong doanh thu bán hàng.

**Kỳ sau.** Ngày 15/01 A-US trả đủ 40.000 USD vào tài khoản USD của A-VN, tỷ giá 25.300. A-VN dùng tỷ giá ghi sổ đích danh, nên khoản phải thu ghi giảm theo tỷ giá đã đánh giá lại 25.200, không phải tỷ giá gốc 25.000:

- `Nợ TK 112`: 1.012 (tỷ giá thực tế ngày nhận)
- `Có TK 131`: 1.008 (tỷ giá ghi sổ sau đánh giá lại)
- `Có TK 515`: 4 (lãi tỷ giá đã thực hiện)

Hệ thống phải lưu song song nguyên tệ và VND cho từng đối tượng công nợ và cập nhật tỷ giá ghi sổ sau đánh giá lại, nếu không bút toán thu tiền sẽ sai ([[ktqt-05-giao-dich-ngoai-te]]).

## Thuế tại từng nơi bán

Nghĩa vụ thuế gắn với pháp nhân và nơi bán, không gắn với tập đoàn ([[ktqt-19-thue-da-quoc-gia]]). Ở mức cơ chế:

| Pháp nhân | Loại thuế | Ai thu, nộp | Bài gốc |
|---|---|---|---|
| A-VN | Thuế GTGT đầu ra trên đơn sàn và website ở Việt Nam | A-VN tự lập hoá đơn, kê khai | [[ktqt-16-hoa-don-kenh-online]], [[kt-22-thue-gtgt-dau-ra]] |
| A-VN | Thuế nhà thầu trên phí quản lý và lãi vay trả M | A-VN khấu trừ, nộp thay | [[ktqt-11-giao-dich-cong-ty-me]] |
| A-VN | Thuế TNDN, có xét quy định giao dịch liên kết | A-VN | [[kt-37-thue-tndn]], [[ktqt-11-giao-dich-cong-ty-me]] |
| A-US | Sales tax trên đơn qua sàn, ở bang có luật marketplace facilitator | Sàn thu và nộp | [[ktqt-18-sales-tax-my]] |
| A-US | Sales tax trên đơn website, ở bang A-US có nexus | A-US | [[ktqt-18-sales-tax-my]] |
| M, A-US | Thuế thu nhập tại nước cư trú | Từng pháp nhân | [[ktqt-19-thue-da-quoc-gia]] |

### Tại Việt Nam

Thuế GTGT là khoản thu hộ, không phải doanh thu, nên đơn sàn ghi 100.000 đ vào TK 33311 chứ không vào TK 511. Cơ chế sàn khấu trừ, nộp thay thuế GTGT và TNCN theo Nghị định 117/2025/NĐ-CP áp cho hộ, cá nhân kinh doanh; nguồn của khoá không nói cơ chế này áp cho doanh nghiệp.

> ⚠️ Cần xác nhận: đối chiếu văn bản gốc trước khi kết luận sàn không khấu trừ thuế với pháp nhân A-VN, như đã ghi ở [[ktqt-19-thue-da-quoc-gia]].

### Tại Mỹ

A-US bán một sản phẩm giá 200 USD cho hai khách ở cùng một bang, thuế suất tổng hợp bang và địa phương giả định 8%. A-US ghi sổ theo hệ thống tài khoản địa phương, nên bút toán dưới đây viết theo tên khoản mục, không theo số hiệu TT99:

- **Qua website, A-US đã có nexus ở bang đó**: Phải thu 216 / Doanh thu 200 / Sales tax phải nộp, chi tiết theo bang 16. Khi nộp tờ khai bang: Sales tax phải nộp / Tiền.
- **Qua sàn, bang có luật marketplace facilitator**: bút toán bán hàng của A-US không có dòng sales tax. Khoản sàn thu của khách và giữ lại chỉ hiện ra khi đối soát quyết toán, và phải tách khỏi phí sàn.

Hai điểm A-US vẫn phải theo dõi dù sàn thu thuế:

- Phần lớn các bang tính cả doanh số qua sàn vào ngưỡng economic nexus của người bán. Đơn qua sàn không làm phát sinh thuế phải nộp cho A-US nhưng vẫn có thể đẩy A-US vượt ngưỡng ở bang đó, từ đó đơn website vào bang đó phải thu thuế.
- Một số bang vẫn yêu cầu người bán báo cáo doanh số qua sàn trên tờ khai của mình.

> ⚠️ Cần xác nhận: ngưỡng economic nexus hiện hành của từng bang (ví dụ trong khoá chỉ minh hoạ cơ chế), và việc hàng gửi ở kho của sàn tại một bang có tạo hiện diện vật lý cho A-US ở bang đó không ([[ktqt-18-sales-tax-my]]).

Nếu tập đoàn mở thêm pháp nhân bán vào EU hoặc UK, cơ chế đổi sang VAT theo nơi tiêu dùng, OSS, IOSS và sàn là người bán được coi là ([[ktqt-17-vat-eu-uk]]).

### Hệ thống chọn thuế thế nào

Trong ERP, mỗi company có bộ thuế và vị trí tài chính riêng. Với A-US, vị trí tài chính hoặc dịch vụ tính thuế theo địa chỉ giao hàng chọn thuế cho từng dòng; với đơn qua sàn ở bang có luật marketplace facilitator, dòng bán không mang sales tax của người bán. Dữ liệu tối thiểu: kênh bán, bang giao hàng, luỹ kế doanh số và số giao dịch theo bang tách trực tiếp và qua sàn, trạng thái nexus ([[ktqt-18-sales-tax-my]], [[ktqt-19-thue-da-quoc-gia]]).

## Báo cáo gửi công ty mẹ

### Lịch khoá sổ

Giả định M đặt ngày chốt gói báo cáo năm là 10/01, sớm hơn nhiều so với hạn 90 ngày nộp BCTC năm theo VAS của A-VN. Từ ví dụ trên, A-VN phải làm xong trước 10/01:

1. Ghi đủ doanh thu và trích trước phí của đơn giao trong tháng 12, gồm đơn sàn ngày 30/12.
2. Đánh giá lại khoản mục tiền tệ gốc USD, sau khi đã ghi đủ thu chi, hoá đơn của kỳ và trước khi kết chuyển kết quả.
3. Đối chiếu số dư nội bộ với M và A-US theo bảng ở phần giao dịch nội bộ.
4. Khoá sổ trên hệ thống tới 31/12 cho ngày chốt, kèm ngoại lệ có kiểm soát cho bút toán sau chốt.

> ⚠️ Cần xác nhận: bút toán phát sinh sau ngày chốt gói báo cáo (ví dụ kiểm toán phát hiện thêm) được gửi lại gói báo cáo hay đưa vào kỳ sau là chính sách của từng tập đoàn ([[ktqt-12-bao-cao-cho-tap-doan]]).

### Mapping COA

A-VN gửi bảng cân đối số phát sinh theo COA tập đoàn. Các dòng mapping liên quan tới case (tên tài khoản tập đoàn giả định):

| TK A-VN | Điều kiện tách | TK tập đoàn |
|---|---|---|
| 131 | Đối tượng là A-US (cờ tập đoàn) | Trade receivables – intercompany |
| 131 | Đối tượng là sàn, cổng thanh toán, khách khác | Trade receivables – third parties |
| 511 | Đối tượng là A-US | Revenue – intercompany |
| 511 | Đối tượng còn lại | Revenue – third parties |
| 3411 | Đối tượng là M | Borrowings – intercompany |
| 335 | Đối tượng là M | Interest payable – intercompany |
| 635 | Lãi vay phải trả M | Finance cost – intercompany |
| 635, 515 | Chênh lệch tỷ giá | Foreign exchange gain/loss |
| 642 | Phí quản lý của M | Management fee – intercompany |
| 6417 | Chiều phân tích kênh "Sàn" | Selling expenses – marketplace fees |
| 3339 hoặc 3338 | Thuế nhà thầu nộp thay | Tài khoản thuế phải nộp tập đoàn chỉ định |

Phần lớn dòng là quan hệ một – nhiều: cùng TK 131, TK 511 nhưng tách theo đối tượng hoặc theo chiều phân tích. Vì vậy danh mục đối tác phải có cờ "công ty trong tập đoàn" ngay từ đầu ([[ktqt-09-mapping-coa-tap-doan]]). Ba phép kiểm tra trước khi gửi: không bỏ sót tài khoản có số dư, không có dòng bút toán thoả hai điều kiện mapping, tổng số dư trước và sau mapping khớp nhau.

Mapping chỉ đổi chỗ số liệu. Số dư sau mapping vẫn là số VAS; các điều chỉnh IFRS là một lớp riêng.

### Điều chỉnh VAS – IFRS và bảng đối chiếu

Giả định A-VN thuê kho 3 năm và có khoản dự phòng phải thu theo tổn thất tín dụng dự kiến bổ sung, đúng như ví dụ ở [[ktqt-08-dieu-chinh-vas-ifrs]] và [[ktqt-12-bao-cao-cho-tap-doan]]. Lấy lại bảng đối chiếu ở bài đó (triệu đồng, năm 1):

| Khoản mục | Lợi nhuận trước thuế | Vốn chủ cuối năm |
|---|---|---|
| Theo VAS | 2.000,00 | 10.000,00 |
| IFRS 16: hoàn nhập chi phí thuê VAS / tài sản quyền sử dụng còn lại | +100,00 | +171,81 |
| IFRS 16: khấu hao tài sản quyền sử dụng / nợ thuê còn lại | −85,90 | −178,33 |
| IFRS 16: chi phí lãi trên nợ thuê | −20,62 | |
| IFRS 9: dự phòng tổn thất tín dụng dự kiến bổ sung | −15,00 | −15,00 |
| Theo IFRS | 1.978,48 | 9.978,48 |

Chênh lệch vốn chủ (−21,52) bằng tổng điều chỉnh lợi nhuận năm 1 (−21,52) vì cả hai điều chỉnh bắt đầu trong năm. Ảnh hưởng thuế hoãn lại (IAS 12) là một dòng riêng, chưa tính vì phụ thuộc cơ sở tính thuế của từng khoản.

Về doanh thu sàn, gian hàng A-VN tự định giá, tự giữ hàng nên VAS và IFRS 15 cho cùng kết luận bên chính, không phát sinh điều chỉnh. Tuy vậy, đánh giá bên chính hay đại lý là xét đoán cần thuyết minh theo IFRS 15 đoạn 123, nên đưa vào gói báo cáo ([[ktqt-13-doanh-thu-kenh-online]]).

> ⚠️ Cần xác nhận: nếu đơn sàn có voucher do sàn tài trợ, doanh thu ghi theo giá trước hay sau voucher chưa có hướng dẫn trong nguồn của khoá ([[ktqt-13-doanh-thu-kenh-online]]).

Nếu tập đoàn chọn ghi sổ song song thay vì điều chỉnh ngoài sổ, các dòng trên sẽ nằm trong sổ IFRS của A-VN thay vì bảng tính; đánh đổi giữa các phương án ở [[ktqt-10-kien-truc-so-hai-chuan]].

### Chuyển đổi số liệu A-VN sang USD

M trình bày bằng USD nên số IFRS của A-VN (VND) được chuyển đổi trước khi cộng ngang. Theo IAS 21 đoạn 39–41: tài sản, nợ phải trả theo tỷ giá cuối kỳ 25.200; thu nhập, chi phí theo tỷ giá ngày giao dịch hoặc tỷ giá bình quân nếu xấp xỉ; chênh lệch vào thu nhập toàn diện khác ([[ktqt-06-don-vi-tien-te-chuyen-doi]]).

Với số của case:

- Phải thu A-US 1.008 triệu đồng ÷ 25.200 = 40.000 USD, khớp với phải trả của A-US.
- Khoản vay M 5.040 triệu đồng ÷ 25.200 = 200.000 USD, khớp với khoản cho vay của M.
- Doanh thu bán cho A-US 1.000 triệu đồng: bài giả định quy đổi theo tỷ giá ngày giao dịch 25.000, ra 40.000 USD. Nếu tập đoàn dùng tỷ giá bình quân năm khác 25.000, doanh thu nội bộ của A-VN sau chuyển đổi sẽ lệch với số A-US ghi, và phần lệch này phải được giải thích khi đối chiếu.

### Loại trừ nội bộ khi hợp nhất

M hợp nhất theo IFRS. Bài minh hoạ các bước loại trừ theo logic đã học ở [[ktqt-04-bctc-hop-nhat]] (TT202, VAS 25): hợp nhất không ghi vào sổ của pháp nhân nào, bút toán ghi theo tên chỉ tiêu báo cáo. Khoá chưa đi vào câu chữ IFRS 10 cho từng bút toán loại trừ, nên khi làm dự án cần đối chiếu hướng dẫn hợp nhất của tập đoàn.

Đơn vị: USD.

**1. Loại khoản đầu tư.** Loại giá trị khoản đầu tư của M vào A-VN và A-US với phần vốn chủ của hai công ty tại ngày M đạt quyền kiểm soát. Giả định M tự thành lập cả hai công ty nên không có lợi thế thương mại. Biến động vốn chủ sau ngày đó (lợi nhuận, chênh lệch tỷ giá) không bị loại.

**2. Bán hàng A-VN cho A-US, 40% còn tồn ở A-US.**

- Tồn kho tại A-US theo giá nội bộ: 40% × 40.000 = 16.000.
- Theo giá vốn của A-VN: 40% × 800 triệu đồng = 320 triệu đồng, quy đổi ở 25.000 là 12.800.
- Lãi chưa thực hiện: 16.000 − 12.800 = 3.200.
- Bút toán: Nợ Doanh thu bán hàng 40.000 / Có Giá vốn hàng bán 36.800 / Có Hàng tồn kho 3.200.
- Loại số dư: Nợ Phải trả người bán 40.000 / Có Phải thu khách hàng 40.000.

Sau loại trừ, giá vốn hợp nhất của phần A-US đã bán ra ngoài là 60% × 32.000 = 19.200, đúng bằng giá gốc tại A-VN; hàng tồn kho còn 12.800. Hai bên bán, mua đều thuộc sở hữu 100% của M nên toàn bộ lãi chưa thực hiện thuộc công ty mẹ, không có phần cổ đông không kiểm soát. Loại lãi chưa thực hiện làm giá trị hàng tồn kho hợp nhất thấp hơn cơ sở tính thuế, có thể phát sinh tài sản thuế thu nhập hoãn lại.

**3. Vay nội bộ.**

- Loại số dư: Nợ Vay 200.000 / Có Phải thu về cho vay 200.000.
- Loại lãi: Nợ Doanh thu hoạt động tài chính 12.000 / Có Chi phí tài chính 12.000.
- Loại lãi phải thu, phải trả: Nợ Chi phí phải trả 12.000 / Có Phải thu lãi 12.000.

Khoản lỗ tỷ giá 40 triệu đồng A-VN ghi khi đánh giá lại khoản vay **không** biến mất khi loại trừ. Khoản mục tiền tệ nội bộ không loại trừ được mà không thể hiện ảnh hưởng tỷ giá, nên chênh lệch này vẫn nằm trong lãi lỗ hợp nhất (IAS 21 đoạn 45; VAS 10 đoạn 28). Tương tự cho khoản lãi tỷ giá 8 triệu đồng trên phải thu A-US. Ngoại lệ: nếu khoản vay được xác định là một phần đầu tư thuần của M vào A-VN (việc thanh toán không được lên kế hoạch và khó xảy ra trong tương lai gần), chênh lệch tỷ giá trên BCTC hợp nhất chuyển vào thu nhập toàn diện khác (IAS 21 đoạn 15, 32). Hệ thống cần một cờ đánh dấu khoản vay nội bộ thuộc loại này ([[ktqt-06-don-vi-tien-te-chuyen-doi]]).

**4. Phí quản lý.** Loại doanh thu phí quản lý ở M với chi phí quản lý tương ứng ở A-VN.

> ⚠️ Cần xác nhận: doanh thu của M (10.000 USD) và chi phí ở A-VN (250 − G triệu đồng) lệch nhau vì phần thuế nhà thầu. Phần thuế nộp cho cơ quan thuế Việt Nam không phải giao dịch nội bộ; cách trình bày phần chênh này trên số hợp nhất không có trong các bài của khoá, cần kế toán tập đoàn chốt.

**5. Kết chuyển và lưu chuyển tiền tệ.** Tổng ảnh hưởng của các bút toán trên tới doanh thu, chi phí được kết chuyển sang lợi nhuận sau thuế chưa phân phối. Trên báo cáo lưu chuyển tiền tệ hợp nhất, luồng tiền giải ngân khoản vay của M cho A-VN và tiền A-US trả A-VN ngày 15/01 là luồng tiền nội bộ, bị loại; chỉ còn tiền đơn sàn về từ bên ngoài và tiền A-US thu từ khách Mỹ ([[ktqt-04-bctc-hop-nhat]]).

## Những gì hệ thống của mỗi pháp nhân phải có

Gom lại từ các bước trên:

- **Danh mục**: company riêng cho từng pháp nhân; đối tác mang cờ công ty trong tập đoàn và cờ bên liên kết (hai thuộc tính khác nhau theo IAS 24 và Nghị định 255).
- **Kênh online**: đơn mang giá bán cho người mua; phí sàn theo mã đơn để trích trước; phải thu chi tiết theo từng sàn, cổng; luồng nhập báo cáo quyết toán để đối soát theo mã đơn; mốc lập hoá đơn đã chốt.
- **Ngoại tệ**: sổ chi tiết song song nguyên tệ và VND theo từng đối tượng; tỷ giá theo ngân hàng và theo ngày; job đánh giá lại cập nhật tỷ giá ghi sổ.
- **Thuế**: thuế theo pháp nhân, kênh và nơi giao hàng; tách thuế sàn thu, thuế sàn khấu trừ và phí sàn khi đối soát; hợp đồng thuộc diện nộp thay thuế nhà thầu được đánh dấu.
- **Báo cáo tập đoàn**: bảng mapping có điều kiện tách theo đối tượng và chiều phân tích; điều chỉnh IFRS tách theo từng loại, có số luỹ kế; dữ liệu loại trừ (hàng tồn có nguồn gốc nội bộ kèm giá vốn bên bán, số dư và giao dịch theo từng đơn vị tập đoàn, luồng tiền nội bộ).

## Nguồn

Ví dụ giả định, tổng hợp từ các bài trong khoá.

- [[ktqt-01-mo-hinh-da-cong-ty]]
- [[ktqt-02-danh-muc-phap-nhan]]
- [[ktqt-03-giao-dich-noi-bo]]
- [[ktqt-04-bctc-hop-nhat]]
- [[ktqt-05-giao-dich-ngoai-te]]
- [[ktqt-06-don-vi-tien-te-chuyen-doi]]
- [[ktqt-08-dieu-chinh-vas-ifrs]]
- [[ktqt-09-mapping-coa-tap-doan]]
- [[ktqt-10-kien-truc-so-hai-chuan]]
- [[ktqt-11-giao-dich-cong-ty-me]]
- [[ktqt-12-bao-cao-cho-tap-doan]]
- [[ktqt-13-doanh-thu-kenh-online]]
- [[ktqt-14-phi-san-cong-thanh-toan]]
- [[ktqt-15-doi-soat-san-cod]]
- [[ktqt-16-hoa-don-kenh-online]]
- [[ktqt-17-vat-eu-uk]]
- [[ktqt-18-sales-tax-my]]
- [[ktqt-19-thue-da-quoc-gia]]
- [[kt-22-thue-gtgt-dau-ra]], [[kt-33-trung-tam-chi-phi]], [[kt-37-thue-tndn]]
