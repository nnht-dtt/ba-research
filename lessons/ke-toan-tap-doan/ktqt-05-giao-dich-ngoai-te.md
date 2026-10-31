# Giao dịch ngoại tệ, tỷ giá xuất quỹ và đánh giá lại cuối kỳ

Bài này giải thích một giao dịch bằng ngoại tệ được quy đổi theo tỷ giá nào ở từng bước, chênh lệch tỷ giá sinh ra ở đâu và ghi vào tài khoản nào, và cuối kỳ phải đánh giá lại những số dư nào. Đọc xong, bạn sẽ biết hệ thống kế toán cần lưu những dữ liệu gì để tính đúng tỷ giá, chứ không chỉ cần một bảng tỷ giá.

## Khung quy định

Ba tầng văn bản cùng điều chỉnh giao dịch ngoại tệ của doanh nghiệp Việt Nam:

- **Luật Kế toán 88/2015/QH13, Điều 10**: nghiệp vụ phát sinh bằng ngoại tệ phải ghi theo **nguyên tệ và Đồng Việt Nam** theo tỷ giá hối đoái thực tế. Loại ngoại tệ không có tỷ giá với VND thì quy đổi qua một ngoại tệ trung gian có tỷ giá với VND.
- **VAS 10 – Ảnh hưởng của việc thay đổi tỷ giá hối đoái**: giao dịch ngoại tệ ghi nhận ban đầu theo tỷ giá tại ngày giao dịch (đoạn 08). Tại ngày lập báo cáo, khoản mục tiền tệ báo cáo theo tỷ giá cuối kỳ, khoản mục phi tiền tệ theo tỷ giá ngày giao dịch (đoạn 10).
- **Thông tư 99/2025/TT-BTC, Phụ lục II, Tài khoản 413**: hướng dẫn chi tiết loại tỷ giá nào dùng cho bên Nợ/bên Có của tài khoản nào, chênh lệch ghi vào đâu, đánh giá lại cuối kỳ theo tỷ giá của ngân hàng nào. Các tài khoản tiền, phải thu, phải trả, hàng tồn kho, TSCĐ đều dẫn chiếu về phần này.

Tỷ giá dùng để kê khai, quyết toán thuế theo quy định của pháp luật thuế, không theo các quy tắc trong bài (TT99, Phụ lục II, TK 413, mục 1.2). Ví dụ: hàng tồn kho nhập khẩu ghi giá mua theo tỷ giá giao dịch thực tế lúc mua, còn các khoản thuế liên quan tính theo tỷ giá tính thuế của pháp luật thuế, hải quan (Phụ lục II, Nguyên tắc kế toán hàng tồn kho, mục 10). Xem thêm [[kt-13-mua-hang-nhap-khau]].

## Khoản mục tiền tệ và phi tiền tệ

Phải phân loại đúng trước khi bàn tới tỷ giá, vì chỉ **khoản mục tiền tệ** mới phát sinh chênh lệch khi thanh toán và mới bị đánh giá lại cuối kỳ.

Theo TT99 (Phụ lục II, TK 413, mục 1.3), khoản mục tiền tệ có gốc ngoại tệ là tài sản thu hồi bằng ngoại tệ hoặc nợ phải trả bằng ngoại tệ, gồm:

- Tiền mặt, tiền gửi không kỳ hạn, tiền đang chuyển, tiền gửi có kỳ hạn bằng ngoại tệ, các khoản đầu tư tài chính khác thu hồi bằng ngoại tệ.
- Nợ phải thu, nợ phải trả có gốc ngoại tệ.
- Khoản cho vay, đi vay dưới mọi hình thức được thu hồi hoặc phải hoàn trả bằng ngoại tệ.
- Khoản đặt cọc, ký quỹ, ký cược được nhận lại bằng ngoại tệ, và khoản nhận ký quỹ, ký cược phải hoàn trả bằng ngoại tệ.

Ngoại lệ thường bị bỏ sót khi cấu hình: **trả trước cho người bán, chi phí chờ phân bổ, người mua trả tiền trước, doanh thu nhận trước bằng ngoại tệ không phải khoản mục tiền tệ**. Bên kia sẽ giao hàng, cung cấp dịch vụ chứ không trả lại tiền. Chỉ khi cuối kỳ có bằng chứng chắc chắn rằng hàng hoá, dịch vụ sẽ không được giao và tiền sẽ phải hoàn lại thì các khoản này mới được coi là khoản mục tiền tệ.

> ⚠️ Trong ERP, khoản ứng trước nhà cung cấp và khoản khách trả trước thường nằm chung tài khoản công nợ 331/131 với nợ thông thường. Nếu job đánh giá lại cuối kỳ quét toàn bộ số dư 131/331 theo nguyên tệ mà không tách phần ứng trước, nhận trước, số chênh lệch sẽ sai.

## Hai loại tỷ giá

### Tỷ giá giao dịch thực tế

Theo TT99 (TK 413, mục 1.2.1), doanh nghiệp được chọn một trong hai:

- **Tỷ giá mua bán chuyển khoản trung bình** tại ngày giao dịch (trung bình cộng của tỷ giá mua chuyển khoản và bán chuyển khoản) của ngân hàng thương mại nơi doanh nghiệp thường xuyên có giao dịch.
- **Tỷ giá xấp xỉ**: chênh lệch không vượt quá **+/-1%** so với tỷ giá mua bán chuyển khoản trung bình tại ngày giao dịch. Thông tư nêu ví dụ tỷ giá xấp xỉ có thể là tỷ giá trung bình xác định hằng ngày, hằng tuần hoặc hằng tháng từ tỷ giá hằng ngày của ngân hàng. Dùng tỷ giá xấp xỉ không được làm ảnh hưởng trọng yếu đến tình hình tài chính và kết quả kinh doanh trong kỳ.

Nếu ngân hàng không công bố tỷ giá của loại ngoại tệ phát sinh, doanh nghiệp chọn một tiền tệ trung gian để quy đổi, áp dụng nhất quán và trình bày căn cứ trên thuyết minh BCTC.

Hai trường hợp đặc biệt:

- **Mua, bán ngoại tệ** với ngân hàng (giao ngay, kỳ hạn, tương lai, quyền chọn, hoán đổi): dùng tỷ giá ký trong hợp đồng (mục 1.4.1).
- **Hợp đồng không quy định tỷ giá cụ thể**: dùng tỷ giá giao dịch thực tế như trên (mục 1.4.2).

### Tỷ giá ghi sổ

Tỷ giá ghi sổ là tỷ giá mà một khoản tiền hoặc công nợ ngoại tệ đang được ghi trên sổ. Khi tiền rời quỹ hoặc tài khoản ngân hàng, giá trị VND ghi giảm được tính theo tỷ giá này, nên trong thực tế còn gọi là **tỷ giá xuất quỹ**. Theo TT99 (mục 1.2.2), có hai cách xác định:

- **Tỷ giá ghi sổ thực tế đích danh**: khi thu hồi phải thu hoặc thanh toán phải trả, dùng đúng tỷ giá giao dịch thực tế lúc khoản đó phát sinh. Nếu khoản đó đã được đánh giá lại ở cuối kỳ trước thì dùng tỷ giá đã đánh giá lại của từng đối tượng.
- **Tỷ giá ghi sổ bình quân gia quyền**: tổng giá trị đã quy đổi (theo tỷ giá giao dịch thực tế) của số dư đầu kỳ và phát sinh tăng, chia cho tổng số nguyên tệ tương ứng của từng đối tượng. Có thể tính **vào cuối kỳ** hoặc **tại từng thời điểm thanh toán** (bình quân di động).

Yêu cầu dữ liệu đi kèm (mục 1.2.2): sổ chi tiết phải theo dõi cả **số nguyên tệ và giá trị quy đổi** của tiền mặt, tiền gửi, tiền đang chuyển, phải thu, phải trả và các khoản mục tiền tệ khác. Tỷ giá ghi sổ phải tính riêng cho **từng loại tiền, tài sản** (tiền mặt, từng tài khoản tiền gửi...), **từng đối tượng công nợ** (khách hàng X, người bán Y...) và **từng loại nguyên tệ** (USD, EUR, JPY...).

Như vậy, tài khoản tiền gửi USD tại ngân hàng A và tại ngân hàng B có hai tỷ giá ghi sổ khác nhau, công nợ USD của người bán Y không lấy tỷ giá ghi sổ của người bán Z. Hệ thống chỉ lưu số dư VND thì không tính được tỷ giá ghi sổ.

## Bên nào dùng tỷ giá nào

TT99 (mục 1.4.2 và 1.4.3) phân theo vị trí bút toán:

| Dùng tỷ giá giao dịch thực tế | Được chọn dùng tỷ giá ghi sổ |
|---|---|
| Doanh thu, thu nhập khác; chi phí; tài sản (hàng tồn kho, TSCĐ...) | Bên Có tài khoản tiền và tài sản khác |
| Bên Nợ tài khoản tiền, tài sản khác, phải thu | Bên Có tài khoản phải thu (trừ khoản nhận trước của người mua) |
| Bên Có tài khoản phải trả | Bên Nợ tài khoản phải trả (trừ khoản trả trước cho người bán) |
| Bên Nợ phải trả khi trả trước cho người bán; bên Có phải thu khi nhận trước tiền người mua | Bên Nợ phải thu khi tất toán khoản nhận trước; bên Có phải trả khi tất toán khoản ứng trước; bên Có ký quỹ, ký cược, chi phí chờ phân bổ |
| Các tài khoản vốn chủ sở hữu | |

Quy tắc dễ nhớ: **ghi tăng** tiền, phải thu, phải trả theo tỷ giá thực tế lúc phát sinh; **ghi giảm** chúng theo tỷ giá đang nằm trên sổ. Phần chênh lệch giữa hai tỷ giá là lãi hoặc lỗ tỷ giá đã thực hiện.

TT99 còn cho một lựa chọn khác (mục 1.4.2.b và 4.1.2): dùng tỷ giá giao dịch thực tế cho **cả bên Nợ và bên Có** của mọi khoản mục tiền tệ. Khi đó chênh lệch tỷ giá trong kỳ được ghi nhận lúc phát sinh giao dịch hoặc định kỳ, tuỳ đặc điểm doanh nghiệp. Cuối kỳ, khoản mục đã hết số dư nguyên tệ thì kết chuyển toàn bộ chênh lệch vào 515/635. Khoản mục còn số dư nguyên tệ thì đánh giá lại bằng số dư nguyên tệ nhân với chênh lệch giữa tỷ giá cuối kỳ và tỷ giá bình quân gia quyền cả kỳ.

Chọn cách nào là chính sách kế toán, phải thuyết minh trên BCTC và áp dụng nhất quán (mục 1.4.5). Với BA, đây là một quyết định thiết kế cần chốt sớm vì nó quyết định hệ thống tính chênh lệch ở từng chứng từ hay gom theo kỳ.

## Bút toán ở từng bước

Các bút toán dưới đây theo TT99, Phụ lục II, TK 413, mục 4.1.1 (doanh nghiệp dùng tỷ giá ghi sổ cho bên ghi giảm). Số liệu là **ví dụ giả định**.

### Mua hàng chưa trả tiền, sau đó thanh toán

Nhận hàng nhập khẩu 10.000 USD, chưa trả tiền, tỷ giá giao dịch thực tế ngày nhận hàng 25.000:

`Nợ TK 156 / Có TK 331`: 250.000.000

Một tháng sau chuyển khoản trả đủ 10.000 USD. Khoản phải trả đang ghi sổ ở 25.000. Tài khoản tiền gửi USD có tỷ giá ghi sổ bình quân 25.100:

- `Nợ TK 331`: 250.000.000 (tỷ giá ghi sổ của khoản phải trả)
- `Nợ TK 635`: 1.000.000 (lỗ tỷ giá)
- `Có TK 112`: 251.000.000 (tỷ giá ghi sổ của tài khoản tiền gửi)

Không có tỷ giá ngày thanh toán trong bút toán này. Chênh lệch là chênh lệch giữa hai tỷ giá ghi sổ: của khoản phải trả và của tài khoản tiền.

### Bán hàng chưa thu tiền, sau đó thu tiền

Xuất khẩu hàng trị giá 20.000 USD, tỷ giá giao dịch thực tế ngày ghi nhận doanh thu 25.050:

`Nợ TK 131 / Có TK 511`: 501.000.000

Khách chuyển 20.000 USD vào tài khoản, tỷ giá giao dịch thực tế ngày nhận tiền 25.200:

- `Nợ TK 112`: 504.000.000 (tỷ giá thực tế ngày nhận)
- `Có TK 131`: 501.000.000 (tỷ giá ghi sổ khoản phải thu)
- `Có TK 515`: 3.000.000 (lãi tỷ giá)

### Ứng trước cho người bán, nhận trước của khách hàng

Đây là chỗ khác biệt lớn nhất so với cách nghĩ "hoá đơn ngày nào lấy tỷ giá ngày đó":

- **Ứng trước người bán**: ghi `Nợ TK 331` theo tỷ giá thực tế lúc ứng trước, `Có TK 112` theo tỷ giá ghi sổ, chênh lệch vào 515/635. Khi nhận hàng, phần giá trị tương ứng với số đã ứng trước ghi theo **tỷ giá lúc ứng trước** (`Nợ TK 156... / Có TK 331`). Chỉ phần còn nợ mới ghi theo tỷ giá ngày nhận hàng.
- **Nhận trước của khách**: ghi `Nợ TK 112 / Có TK 131` theo tỷ giá lúc nhận trước. Khi giao hàng, doanh thu tương ứng với số đã nhận trước ghi theo **tỷ giá lúc nhận trước**. Phần chưa thu ghi theo tỷ giá ngày ghi nhận doanh thu.

Tương tự, khoản chi phí chờ phân bổ (TK 242) khi phân bổ dần vẫn dùng tỷ giá lúc trả trước, không dùng tỷ giá ngày phân bổ (mục 1.4.2.a).

Một hoá đơn bán 30.000 USD, trong đó khách đã trả trước 10.000 USD, vì vậy cho ra doanh thu VND là tổng của hai phần quy đổi theo hai tỷ giá khác nhau. Hệ thống phải liên kết được khoản trả trước với hoá đơn để lấy đúng tỷ giá. Phần cấn trừ công nợ xem [[kt-15-tam-ung-dat-coc-can-tru]].

### Các nghiệp vụ khác

TT99 mục 4.1.1 còn hướng dẫn cùng nguyên tắc cho: cho vay, đầu tư bằng ngoại tệ (`Nợ TK 121, 128, 221, 222, 228` theo tỷ giá thực tế, `Có TK 111, 112` theo tỷ giá ghi sổ); ký quỹ, ký cược (`Nợ TK 244` theo tỷ giá thực tế khi ký quỹ; khi nhận lại thì `Có TK 244` theo tỷ giá ghi sổ của từng khoản); trả nợ vay (`Nợ TK 341` theo tỷ giá ghi sổ).

## Chênh lệch tỷ giá trong kỳ đi đâu

Toàn bộ chênh lệch tỷ giá phát sinh trong kỳ khi hạch toán theo các nguyên tắc trên được ghi **ngay** vào (TT99, TK 413, mục 1.4.4):

- **TK 515 – Doanh thu hoạt động tài chính** nếu lãi. Phụ lục II, TK 515 liệt kê "lãi tỷ giá hối đoái phát sinh hoặc lãi khi đánh giá lại khoản mục có gốc ngoại tệ, gồm cả lãi do bán ngoại tệ".
- **TK 635 – Chi phí tài chính** nếu lỗ. Phụ lục II, TK 635 liệt kê "lỗ tỷ giá hối đoái phát sinh trong kỳ; lỗ tỷ giá hối đoái do đánh giá lại các khoản mục tiền tệ có gốc ngoại tệ tại thời điểm kết thúc kỳ kế toán".

Doanh nghiệp **không được vốn hoá** chênh lệch tỷ giá vào giá trị tài sản dở dang (mục 1.5.4).

> 📌 VAS 10 (ban hành năm 2002), đoạn 12(a), cho phép doanh nghiệp mới thành lập trong giai đoạn đầu tư xây dựng phản ánh luỹ kế chênh lệch tỷ giá trên Bảng cân đối kế toán và phân bổ dần tối đa 5 năm. TT99 chỉ giữ cách "treo" chênh lệch trên TK 413 cho doanh nghiệp do Nhà nước nắm 100% vốn điều lệ thực hiện dự án, công trình trọng điểm quốc gia, khi pháp luật về doanh nghiệp nhà nước cho phép. Khi thiết kế cho doanh nghiệp thông thường, hãy theo TT99.

> ⚠️ Cần xác nhận: cách xử lý khi VAS 10 đoạn 12(a) và TT99 khác nhau cho một doanh nghiệp cụ thể đang trong giai đoạn đầu tư. Nên hỏi kế toán trưởng hoặc kiểm toán viên của khách hàng.

## Đánh giá lại cuối kỳ

### Đánh giá lại những gì, theo tỷ giá nào

Khi lập BCTC, doanh nghiệp phải đánh giá lại số dư **tất cả** khoản mục tiền tệ có gốc ngoại tệ (TT99, TK 413, mục 1.5.1):

- **Tiền gửi không kỳ hạn bằng ngoại tệ**: theo tỷ giá mua bán chuyển khoản trung bình của **ngân hàng nơi mở tài khoản đó**. Hai tài khoản USD ở hai ngân hàng có thể được đánh giá lại theo hai tỷ giá khác nhau.
- **Các khoản mục tiền tệ còn lại** (tiền mặt, phải thu, phải trả, vay, tiền gửi có kỳ hạn...): theo tỷ giá mua bán chuyển khoản trung bình của ngân hàng nơi doanh nghiệp **thường xuyên có giao dịch**, tại thời điểm kết thúc kỳ kế toán.
- **Không đánh giá lại** phần nợ phải thu có gốc ngoại tệ đã trích lập dự phòng phải thu khó đòi (xem [[kt-21-cong-no-phai-thu]]).

### Bút toán

Theo TT99, TK 413, mục 4.2, chênh lệch đánh giá lại ghi thẳng vào tài khoản của khoản mục, đối ứng 515 hoặc 635:

- Tiền gửi: lãi `Nợ TK 112 / Có TK 515`; lỗ `Nợ TK 635 / Có TK 112`.
- Khoản mục khác: lãi `Nợ TK 111, 128, 228, 131, 138, 331, 341... / Có TK 515`; lỗ `Nợ TK 635 / Có TK 111, 128, 228, 131, 138, 331, 341...`.

Ví dụ giả định: cuối kỳ khách hàng còn nợ 5.000 USD, đang ghi sổ ở tỷ giá 25.050 (125.250.000). Tỷ giá cuối kỳ của ngân hàng giao dịch thường xuyên là 25.300 (126.500.000). Khoản phải thu tăng 1.250.000:

`Nợ TK 131 / Có TK 515`: 1.250.000

Ở kỳ sau, nếu dùng tỷ giá ghi sổ đích danh thì khi thu tiền, khoản phải thu này ghi giảm theo tỷ giá đã đánh giá lại 25.300, không phải tỷ giá gốc 25.050 (mục 1.2.2.a). Hệ thống phải cập nhật tỷ giá ghi sổ của từng khoản công nợ sau đánh giá lại.

<step-flow>
<svg viewBox="0 0 660 150" role="img" aria-labelledby="qt05f-t" style="width:100%;max-width:660px;height:auto;display:block;margin:1.25rem auto" font-family="ui-sans-serif, system-ui, sans-serif">
<title id="qt05f-t">Vòng đời một khoản phải thu bằng USD qua hai kỳ</title>
<defs>
<marker id="qt05f-arrow" markerWidth="9" markerHeight="9" refX="8" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 z" fill="currentColor"/></marker>
</defs>
<g data-step="1">
<rect x="10" y="35" width="190" height="80" rx="10" fill="#3b82f6" fill-opacity="0.13" stroke="currentColor" stroke-opacity="0.22"/>
<text x="105" y="65" font-size="14" text-anchor="middle" fill="currentColor">Ghi nhận doanh thu</text>
<text x="105" y="88" font-size="12" text-anchor="middle" fill="currentColor">Tỷ giá giao dịch thực tế</text>
</g>
<g data-step="2">
<line x1="200" y1="75" x2="232" y2="75" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" marker-end="url(#qt05f-arrow)"/>
<rect x="235" y="35" width="190" height="80" rx="10" fill="#f59e0b" fill-opacity="0.14" stroke="currentColor" stroke-opacity="0.22"/>
<text x="330" y="65" font-size="14" text-anchor="middle" fill="currentColor">Đánh giá lại cuối kỳ</text>
<text x="330" y="88" font-size="12" text-anchor="middle" fill="currentColor">Tỷ giá cuối kỳ của ngân hàng</text>
</g>
<g data-step="3">
<line x1="425" y1="75" x2="457" y2="75" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" marker-end="url(#qt05f-arrow)"/>
<rect x="460" y="35" width="190" height="80" rx="10" fill="#10b981" fill-opacity="0.16" stroke="currentColor" stroke-opacity="0.22"/>
<text x="555" y="65" font-size="14" text-anchor="middle" fill="currentColor">Thu tiền kỳ sau</text>
<text x="555" y="88" font-size="12" text-anchor="middle" fill="currentColor">Nợ tiền: thực tế · Có 131: ghi sổ</text>
</g>
</svg>
<step-note data-step="1"><code>Nợ TK 131 / Có TK 511</code> theo tỷ giá giao dịch thực tế ngày ghi nhận doanh thu. Sổ chi tiết lưu cả số USD và số VND.</step-note>
<step-note data-step="2">Khoản phải thu là khoản mục tiền tệ nên được đánh giá lại. Chênh lệch ghi thẳng vào 131, đối ứng 515 hoặc 635. Tỷ giá đã đánh giá lại trở thành tỷ giá ghi sổ mới của khoản nợ này.</step-note>
<step-note data-step="3">Thu tiền: <code>Nợ TK 112</code> theo tỷ giá thực tế ngày nhận, <code>Có TK 131</code> theo tỷ giá ghi sổ (đã đánh giá lại). Phần chênh lệch là lãi hoặc lỗ tỷ giá đã thực hiện của kỳ sau.</step-note>
</step-flow>

### TK 413 còn dùng làm gì

Trong TT99, TK 413 – Chênh lệch tỷ giá hối đoái chủ yếu dùng cho trường hợp đặc biệt nêu trên: doanh nghiệp do Nhà nước nắm 100% vốn điều lệ được treo lãi, lỗ đánh giá lại trong giai đoạn trước hoạt động, sau đó phân bổ thẳng từ TK 413 vào 515/635, không qua TK 242 hay 3387 (mục 1.5.2 và 4.3). Với doanh nghiệp thông thường, chênh lệch trong kỳ và chênh lệch đánh giá lại đều vào 515/635. Chênh lệch khi chuyển đổi BCTC lập bằng ngoại tệ sang VND được trình bày trong vốn chủ sở hữu, xem [[ktqt-06-don-vi-tien-te-chuyen-doi]].

## Ảnh hưởng tới báo cáo

- **Báo cáo tình hình tài chính (B01)**: khoản mục tiền tệ có gốc ngoại tệ phản ánh theo tỷ giá cuối kỳ sau đánh giá lại. Khoản mục phi tiền tệ (hàng tồn kho, TSCĐ, trả trước) giữ theo tỷ giá ngày giao dịch (VAS 10, đoạn 10).
- **Báo cáo kết quả hoạt động kinh doanh (B02)**: lãi, lỗ tỷ giá nằm trong doanh thu hoạt động tài chính và chi phí tài chính, không nằm trong doanh thu bán hàng hay giá vốn. Riêng chênh lệch do đánh giá lại cuối kỳ phải trình bày theo **số thuần** giữa tổng lãi và tổng lỗ đánh giá lại (TT99, TK 413, mục 1.5.2 và 4.2). Xem [[kt-40-bao-cao-ket-qua-kinh-doanh]].
- **Thuyết minh BCTC**: phải nêu chính sách tỷ giá dùng để hạch toán giao dịch trong kỳ (mục 1.4.5) và tỷ giá dùng để đánh giá lại cuối kỳ (mục 1.5.3).

Đánh giá lại cuối kỳ là một bước trong checklist khoá sổ ([[kt-36-quy-trinh-khoa-so]]). Bước này phải chạy sau khi đã ghi đủ các khoản thu, chi và hoá đơn của kỳ, và trước khi kết chuyển xác định kết quả.

## Điểm chạm hệ thống

Những gì nghiệp vụ trên đòi hỏi ở hệ thống, nêu ngắn để bạn biết hỏi gì khi xem một ERP:

- **Bảng tỷ giá theo ngân hàng và theo ngày**: đánh giá lại tiền gửi cần tỷ giá của từng ngân hàng mở tài khoản, không chỉ một tỷ giá chung.
- **Sổ chi tiết song song nguyên tệ và VND** cho từng tài khoản tiền và từng đối tượng công nợ, làm cơ sở tính tỷ giá ghi sổ.
- **Chính sách tỷ giá ghi sổ**: đích danh hay bình quân gia quyền (cuối kỳ hoặc di động), cấu hình được và áp dụng nhất quán.
- **Liên kết khoản ứng trước, nhận trước với hoá đơn** để lấy tỷ giá lúc ứng trước, nhận trước.
- **Job đánh giá lại cuối kỳ** loại trừ được khoản trả trước, nhận trước và phần phải thu đã lập dự phòng.

Ví dụ Odoo 19: mỗi công ty có tiền tệ chính, mặc định theo quốc gia. Tỷ giá nhập tay hoặc cập nhật tự động theo chu kỳ (hằng ngày, tuần, tháng) từ một dịch vụ cung cấp tỷ giá. Chênh lệch tỷ giá được ghi tự động vào tài khoản lãi, lỗ riêng trong một sổ nhật ký riêng (mặc định tên "Exchange Difference"). Một sổ nhật ký hoặc tài khoản gắn tiền tệ thì chỉ nhận giao dịch bằng tiền tệ đó.

> ⚠️ Cần xác nhận: tài liệu Odoo 19 về đa tiền tệ không mô tả Odoo tính tỷ giá ghi sổ của tài khoản tiền theo đích danh hay bình quân, và không mô tả bước đánh giá lại cuối kỳ. Cần kiểm tra trên bản cài đặt cụ thể so với TT99 trước khi kết luận hệ thống đáp ứng.

## Nguồn

- Luật Kế toán số 88/2015/QH13 (văn bản hợp nhất 41/VBHN-VPQH, Công báo số 172 ngày 31/03/2026), Điều 10 – Đơn vị tính sử dụng trong kế toán: https://cdn.thuvienphapluat.vn//uploads/Hoidapphapluat/2026/LNMT/Thang_4/260404/172_41_VBHN_VPQH.pdf
- Chuẩn mực kế toán Việt Nam số 10 – Ảnh hưởng của việc thay đổi tỷ giá hối đoái (Quyết định 165/2002/QĐ-BTC), đoạn 06–13: toàn văn tại https://ketoanthienung.net/chua-n-mu-c-ke-toa-n-so-10-anh-huong-cua-viec-thay-doi-ty-gia-hoi-doai.htm
- Thông tư 99/2025/TT-BTC hướng dẫn Chế độ kế toán doanh nghiệp, Phụ lục II – Hệ thống tài khoản kế toán: Tài khoản 413 (mục 1.1–1.5, 3, 4.1–4.3), Tài khoản 515, Tài khoản 635, Nguyên tắc kế toán hàng tồn kho (mục 10): https://luatvietnam.vn/linh-vuc-khac/tai-thong-tu-99-2025-tt-btc-huong-dan-che-do-ke-toan-doanh-nghiep-186-105034-article.html và https://thuvienphapluat.vn/phap-luat-nha-dat/tai-ve-toan-bo-phu-luc-thong-tu-992025ttbtc-thay-the-thong-tu-200-2014-tu-01012026-10694.html
- Forvis Mazars Việt Nam, Góc nhìn chuyên môn – Thông tư 99/2025/TT-BTC, mục 4 "Đơn vị tiền tệ và giao dịch ngoại tệ" (đối chiếu): https://www.forvismazars.com/vn/vi/content/download/1305056/file/%5BVIE%5D%20Forvis%20Mazars%20Vi%E1%BB%87t%20Nam_G%C3%B3c%20nh%C3%ACn%20chuy%C3%AAn%20m%C3%B4n_Th%C3%B4ng%20t%C6%B0%2099.pdf
- Odoo 19 Documentation, Accounting – Multi-currency system: https://www.odoo.com/documentation/19.0/applications/finance/accounting/get_started/multi_currency.html
