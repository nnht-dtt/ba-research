# Tiền, quỹ, đối soát ngân hàng và khoản vay

Bài này giúp BA nắm nhóm tài khoản tiền theo TT99 (tiền mặt, tiền gửi không kỳ hạn, tiền đang chuyển), cách sổ kế toán được đối chiếu với sổ quỹ và sao kê ngân hàng, cách một phần mềm như Odoo tổ chức bước đối soát, và vòng đời một khoản vay: nhận tiền, lãi, chi phí đi vay, vốn hóa theo VAS 16, trả nợ và trình bày trên báo cáo.

## Nhóm tài khoản tiền theo TT99

TT99 (Phụ lục II, Nguyên tắc kế toán tiền, điểm 1) xác định tiền của doanh nghiệp gồm tiền mặt, tiền gửi không kỳ hạn tại ngân hàng và tổ chức khác được nhận tiền gửi theo quy định, và tiền đang chuyển; có thể là tiền Việt Nam, ngoại tệ, vàng tiền tệ. Vàng tiền tệ chỉ là vàng dùng để cất trữ giá trị, không gồm vàng là nguyên liệu hay hàng để bán.

| Tài khoản (TT99) | Nội dung | Căn cứ ghi sổ |
|---|---|---|
| 111 Tiền mặt | Thu, chi, tồn quỹ | Phiếu thu, phiếu chi có đủ chữ ký hoặc xác nhận |
| 112 Tiền gửi không kỳ hạn | Số hiện có và biến động tiền gửi không kỳ hạn | Giấy báo Có, báo Nợ, sao kê ngân hàng kèm chứng từ gốc (ủy nhiệm chi, ủy nhiệm thu, séc) |
| 113 Tiền đang chuyển | Tiền đã nộp vào ngân hàng, gửi bưu điện chưa nhận giấy báo Có; tiền đã chuyển trả đơn vị khác mà bên đó chưa nhận | Chứng từ nộp, chuyển tiền |
| 1281 Tiền gửi có kỳ hạn | Thuộc TK 128 Đầu tư nắm giữ đến ngày đáo hạn, không thuộc nhóm tiền | |

TT99 đặt tên TK 112 là "Tiền gửi không kỳ hạn", nên tiền gửi có kỳ hạn phải đi tài khoản 1281 chứ không mở chi tiết dưới 112. Danh mục TT99 không có tài khoản cấp 2 cho 111, 112, 113; doanh nghiệp tự mở chi tiết theo loại tiền như tiền Việt Nam, ngoại tệ, vàng tiền tệ (TK 111, 112, 113, mục 2). TK 112 còn phải hạch toán chi tiết theo từng tài khoản ở từng ngân hàng (TK 112, mục 1c), tức mỗi số tài khoản ngân hàng là một đối tượng theo dõi riêng trong hệ thống.

Chứng từ tiền tệ trong TT99 Phụ lục I (nhóm IV): Phiếu thu (01-TT), Phiếu chi (02-TT), Giấy đề nghị tạm ứng (03-TT), Giấy thanh toán tiền tạm ứng (04-TT), Giấy đề nghị thanh toán (05-TT), Biên lai thu tiền (06-TT), Bảng kê vàng tiền tệ (07-TT), Bảng kiểm kê quỹ dùng cho VND (08a-TT) và cho ngoại tệ, vàng tiền tệ (08b-TT), Bảng kê chi tiền (09-TT). Tạm ứng nhân viên nằm ở [[kt-15-tam-ung-dat-coc-can-tru]].

## Tiền mặt (TK 111)

TT99 (TK 111, mục 1) đặt các yêu cầu quản lý quỹ:

- Nhập, xuất quỹ phải có phiếu thu, phiếu chi có đủ chữ ký hoặc xác nhận của người nhận, người giao, người có thẩm quyền theo chế độ chứng từ và quy chế kiểm soát nội bộ; một số trường hợp đặc biệt phải có lệnh nhập quỹ, xuất quỹ.
- Kế toán mở sổ kế toán quỹ tiền mặt, ghi liên tục hằng ngày theo trình tự phát sinh và tính ra số tồn quỹ tại mọi thời điểm.
- Thủ quỹ quản lý quỹ, thường xuyên kiểm kê tồn quỹ thực tế và đối chiếu sổ quỹ với sổ kế toán; có chênh lệch thì kế toán và thủ quỹ kiểm tra, xác định nguyên nhân, kiến nghị xử lý.
- Giao dịch bằng tiền mặt phải tuân thủ pháp luật liên quan (văn bản nêu ví dụ giao dịch góp vốn, mua bán, chuyển nhượng phần vốn góp).

Hai sổ cần khớp: sổ quỹ của thủ quỹ và sổ kế toán TK 111. Theo kết cấu TK 111 (mục 2), tiền thừa khi kiểm kê ghi bên Nợ, thiếu ghi bên Có; tài sản thừa chưa rõ nguyên nhân chờ xử lý đi qua TK 3381 (TK 338, mục 3.1b).

Một số bút toán thường gặp (TK 111, mục 3):

- Bán hàng thu tiền mặt: `Nợ TK 111 / Có TK 511, Có TK 333` (thuế gián thu tách riêng ngay khi ghi doanh thu).
- Rút tiền gửi về quỹ: `Nợ TK 111 / Có TK 112`
- Thu nợ, thu hồi tạm ứng, ký quỹ bằng tiền mặt: `Nợ TK 111 / Có TK 128, 131, 136, 138, 141, 244, 344`

## Tiền gửi không kỳ hạn (TK 112) và chênh lệch với ngân hàng

TT99 (TK 112, mục 1b) quy định cách xử lý khi sổ doanh nghiệp, chứng từ gốc và chứng từ ngân hàng lệch nhau: doanh nghiệp thông báo ngân hàng để cùng đối chiếu, xác minh. Cuối tháng nếu chưa xác định được nguyên nhân thì ghi sổ theo số liệu trên giấy báo Nợ, báo Có hoặc sao kê ngân hàng; phần chênh lệch ghi:

- Bên Nợ TK 138 nếu số của kế toán lớn hơn số của ngân hàng;
- Bên Có TK 338 nếu số của kế toán nhỏ hơn số của ngân hàng.

Tháng sau tiếp tục đối chiếu, tìm nguyên nhân để điều chỉnh. Nghĩa là tại ngày khóa sổ, số dư TK 112 phải bằng số dư ngân hàng, phần chưa giải thích được nằm trên 138 hoặc 338 chứ không treo trên 112.

Thấu chi ngân hàng không ghi âm trên TK 112 mà phản ánh tương tự khoản vay ngân hàng (TK 112, mục 1d). Hệ thống cho phép tài khoản tiền âm thì cuối kỳ phải có bút toán phân loại số âm sang vay.

## Tiền đang chuyển (TK 113)

TK 113 dùng cho khoảng thời gian tiền đã rời một nơi mà chưa được xác nhận ở nơi kia (TT99 TK 113, mục 1, 3):

- Nộp tiền mặt hoặc séc thẳng vào ngân hàng, chưa nhận giấy báo Có: `Nợ TK 113 / Có TK 131, 511, 515, 711, Có TK 3331`
- Xuất quỹ nộp vào ngân hàng chưa nhận giấy báo Có: `Nợ TK 113 / Có TK 111`
- Chuyển tiền trả chủ nợ nhưng chủ nợ chưa nhận: `Nợ TK 113 / Có TK 112`
- Ngân hàng báo Có: `Nợ TK 112 / Có TK 113`
- Chủ nợ đã nhận tiền: `Nợ TK 331, 341 / Có TK 113`

## Tiền bằng ngoại tệ

Doanh nghiệp theo dõi chi tiết tiền theo nguyên tệ. Bên Nợ tài khoản tiền dùng tỷ giá giao dịch thực tế; bên Có dùng tỷ giá giao dịch thực tế hoặc tỷ giá ghi sổ. Cuối kỳ đánh giá lại số dư tiền gốc ngoại tệ theo tỷ giá mua bán chuyển khoản trung bình của ngân hàng thương mại nơi doanh nghiệp thường xuyên giao dịch; riêng tiền gửi không kỳ hạn bằng ngoại tệ đánh giá theo tỷ giá trung bình của chính ngân hàng nơi mở tài khoản (TT99, Nguyên tắc kế toán tiền, điểm 4). Lựa chọn tỷ giá phải thuyết minh và áp dụng nhất quán. Chi tiết ở [[ktqt-05-giao-dich-ngoai-te]].

## Đối soát ngân hàng trong hệ thống

### Quy trình

<step-flow>
<svg viewBox="0 0 680 140" role="img" aria-labelledby="kt32r-t" style="width:100%;max-width:680px;height:auto;display:block;margin:1.25rem auto" font-family="ui-sans-serif, system-ui, sans-serif">
<title id="kt32r-t">Bốn bước đối soát ngân hàng</title>
<defs>
<marker id="kt32r-arrow" markerWidth="9" markerHeight="9" refX="8" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 z" fill="currentColor"/></marker>
</defs>
<g data-step="1">
<rect x="10" y="40" width="145" height="60" rx="10" fill="#3b82f6" fill-opacity="0.13" stroke="currentColor" stroke-opacity="0.22"/>
<text x="82" y="66" font-size="13" text-anchor="middle" fill="currentColor">Ghi nhận thu, chi</text>
<text x="82" y="86" font-size="12" text-anchor="middle" fill="currentColor">từ chứng từ nội bộ</text>
</g>
<g data-step="2">
<line x1="155" y1="70" x2="183" y2="70" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" marker-end="url(#kt32r-arrow)"/>
<rect x="185" y="40" width="145" height="60" rx="10" fill="#3b82f6" fill-opacity="0.13" stroke="currentColor" stroke-opacity="0.22"/>
<text x="257" y="66" font-size="13" text-anchor="middle" fill="currentColor">Nhận giao dịch</text>
<text x="257" y="86" font-size="12" text-anchor="middle" fill="currentColor">từ sao kê</text>
</g>
<g data-step="3">
<line x1="330" y1="70" x2="358" y2="70" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" marker-end="url(#kt32r-arrow)"/>
<rect x="360" y="40" width="145" height="60" rx="10" fill="#f59e0b" fill-opacity="0.14" stroke="currentColor" stroke-opacity="0.22"/>
<text x="432" y="66" font-size="13" text-anchor="middle" fill="currentColor">Khớp từng dòng</text>
<text x="432" y="86" font-size="12" text-anchor="middle" fill="currentColor">tự động hoặc tay</text>
</g>
<g data-step="4">
<line x1="505" y1="70" x2="533" y2="70" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" marker-end="url(#kt32r-arrow)"/>
<rect x="535" y="40" width="135" height="60" rx="10" fill="#10b981" fill-opacity="0.15" stroke="currentColor" stroke-opacity="0.22"/>
<text x="602" y="66" font-size="13" text-anchor="middle" fill="currentColor">Xử lý chênh lệch,</text>
<text x="602" y="86" font-size="12" text-anchor="middle" fill="currentColor">chốt số dư</text>
</g>
</svg>
<step-note data-step="1">Kế toán ghi phiếu chi, ủy nhiệm chi, thanh toán của khách theo chứng từ gốc, chưa có xác nhận của ngân hàng.</step-note>
<step-note data-step="2">Dòng giao dịch từ ngân hàng vào hệ thống qua kết nối tự động, nhập file sao kê hoặc nhập tay.</step-note>
<step-note data-step="3">Mỗi dòng sao kê được ghép với khoản thanh toán, hóa đơn đã có. Dòng không có chứng từ đối ứng (phí ngân hàng, lãi tiền gửi) được ghi trực tiếp vào tài khoản phù hợp.</step-note>
<step-note data-step="4">Phần chưa giải thích được đến cuối tháng xử lý theo TT99 TK 112 mục 1b: ghi theo số ngân hàng, chênh lệch vào 138 hoặc 338.</step-note>
</step-flow>

### Ví dụ: Odoo 19

Odoo 19 tổ chức bước này như sau (tài liệu Bank and cash accounts, Bank reconciliation, Payments):

- Mỗi tài khoản ngân hàng có một journal riêng ghi vào một tài khoản kế toán riêng; Odoo tự tạo journal và tài khoản khi thêm tài khoản ngân hàng. Điều này khớp yêu cầu theo dõi chi tiết từng tài khoản ở từng ngân hàng của TT99.
- Giao dịch ngân hàng vào hệ thống qua đồng bộ ngân hàng (bank synchronization) hoặc nhập tay (Record transactions manually).
- Mỗi giao dịch ngân hàng gắn với một bút toán ghi vào tài khoản chính của journal và một **suspense account** cho đến khi được đối soát xong; khi đó suspense account được thay bằng tài khoản của bút toán đối ứng hoặc tài khoản người dùng chọn.
- Khớp tự động: chưa có partner thì Odoo so trường Label với số chứng từ, tham chiếu khách hàng, tham chiếu hóa đơn mua, tham chiếu thanh toán; có partner thì khớp theo số tiền qua quy tắc Exact match rồi Discounted match. Khoản không có chứng từ đối ứng như phí ngân hàng ghi bằng Set Account hoặc reconciliation models.
- Khi ghi nhận thanh toán (register payment) và có cấu hình outstanding account, Odoo ghi bút toán vào **outstanding receipts** hoặc **outstanding payments account**, hóa đơn giảm số còn phải thu, phải trả; hóa đơn chỉ chuyển sang Paid sau khi khoản thanh toán được đối soát với giao dịch ngân hàng. Nếu đặt chính tài khoản ngân hàng làm outstanding account trên phương thức thanh toán, đăng ký thanh toán đủ sẽ chuyển hóa đơn sang Paid ngay mà không cần đối soát.

> ⚠️ Cần xác nhận khi map hệ thống tài khoản: outstanding receipts/payments account của Odoo giữ khoản đã ghi nhận thanh toán nhưng chưa khớp sao kê, gần với nghĩa "tiền đang chuyển" nhưng không trùng định nghĩa TK 113 của TT99 (TK 113 gắn với việc chưa nhận giấy báo Có hoặc bên nhận chưa nhận tiền). Cần chốt với kế toán trưởng: map tài khoản này vào 113, vào một tài khoản chi tiết riêng, hay dùng tài khoản ngân hàng làm outstanding account. Suspense account cũng cần một tài khoản trên hệ thống tài khoản Việt Nam và phải về 0 hoặc được xử lý theo TK 112 mục 1b trước khi khóa sổ.

Đối soát tiền về từ sàn thương mại điện tử, cổng thanh toán, COD có thêm lớp quyết toán của bên trung gian, xem [[ktqt-15-doi-soat-san-cod]].

## Khoản vay (TK 341)

### Tài khoản và theo dõi chi tiết

TK 341 Vay và nợ thuê tài chính có hai tài khoản cấp 2: 3411 Các khoản đi vay, 3412 Nợ thuê tài chính (TT99 TK 341, mục 2). Vay bằng phát hành trái phiếu hoặc cổ phiếu ưu đãi phân loại là nợ phải trả không đi qua 341 (mục 1a). Doanh nghiệp phải hạch toán chi tiết theo từng đối tượng cho vay, từng khế ước vay, từng loại tài sản vay, từng thời hạn (mục 1đ), và theo dõi chi tiết kỳ hạn phải trả (mục 1b).

Yêu cầu theo khế ước khiến khế ước vay thường là một đối tượng quản lý riêng trong hệ thống, mang các thuộc tính: bên cho vay, số tiền, đồng tiền, lãi suất, kỳ trả lãi (trả định kỳ, trả trước, trả sau), lịch trả gốc, mục đích sử dụng (để xác định vốn hóa).

### Bút toán

TT99 TK 341, mục 3:

- **Nhận tiền vay**: `Nợ TK 111, 112 / Có TK 341`
- **Vay chuyển thẳng cho người bán** để mua hàng tồn kho, TSCĐ, thanh toán XDCB: `Nợ TK 152, 153, 156, 211, 213, 241, Nợ TK 133 (1332) / Có TK 341 (3411)`
- **Chi phí đi vay khác ngoài lãi** (kiểm toán, thẩm định hồ sơ, thu xếp khoản vay): khi phát sinh `Nợ TK 341 (3411) / Có TK 111, 112, 331`; khi phân bổ `Nợ TK 627, 241 (nếu được vốn hóa) hoặc Nợ TK 635 / Có TK 341 (3411)`. TT99 (mục 1c) yêu cầu phân bổ dần theo thời hạn khoản vay; với khoản vay dài hạn, doanh nghiệp có thể mở chi tiết 3411 để tách nợ gốc và phần chi phí thủ tục vay, phân bổ vào 635 theo phương pháp đường thẳng hoặc lãi suất thực.
- **Lãi vay định kỳ**: `Nợ TK 635, 627, 241 / Có TK 111, 112` nếu trả định kỳ; `Có TK 335` nếu trả sau; `Có TK 341` nếu trả trước.
- **Lãi nhập gốc**: `Nợ TK 635 (hoặc 627, 241 nếu vốn hóa) / Có TK 341 (3411)`
- **Trả nợ gốc**: `Nợ TK 341 (3411) / Có TK 112, 131`. Khi đáo hạn trả cả gốc và lãi kỳ cuối, lãi trả sau đã trích được tất toán qua `Nợ TK 335`.
- **Vay ngoại tệ**: quy đổi theo tỷ giá giao dịch thực tế; số dư gốc ngoại tệ được đánh giá lại cuối kỳ (kết cấu TK 341, mục 2).

Ví dụ giả định: ngày 01/10 vay ngân hàng 2.000.000.000 đ, kỳ hạn 6 tháng, lãi suất 8%/năm, trả lãi và gốc một lần khi đáo hạn, dùng cho vốn lưu động. Ngày 01/10: `Nợ TK 112 / Có TK 3411: 2.000.000.000`. Cuối mỗi tháng trích lãi trả sau, khoảng 2.000.000.000 × 8% / 12 ≈ 13.333.333 đ: `Nợ TK 635 / Có TK 335`. Tại 31/12, TK 335 có số dư khoảng 40.000.000 đ lãi đã trích chưa trả, TK 3411 dư 2.000.000.000 đ trình bày là vay ngắn hạn.

### Chi phí đi vay được vốn hóa (VAS 16)

Nguyên tắc chung: chi phí đi vay ghi vào chi phí sản xuất kinh doanh khi phát sinh, trừ khi được vốn hóa (VAS 16 đoạn 06). Chi phí đi vay gồm lãi vay (kể cả lãi thấu chi), phân bổ chiết khấu hoặc phụ trội trái phiếu, phân bổ chi phí phụ khi làm thủ tục vay, chi phí tài chính của tài sản thuê tài chính (đoạn 04).

Vốn hóa áp dụng cho chi phí đi vay liên quan trực tiếp đến đầu tư xây dựng hoặc sản xuất tài sản dở dang, tức tài sản cần thời gian đủ dài (trên 12 tháng) để đưa vào sử dụng hoặc bán (đoạn 03, 07):

- **Vay riêng** cho một tài sản dở dang: số vốn hóa là chi phí đi vay thực tế trừ thu nhập từ đầu tư tạm thời khoản vay đó (đoạn 09, 10).
- **Vay chung**: số vốn hóa xác định theo tỷ lệ vốn hóa (lãi suất bình quân gia quyền của các khoản vay chưa trả trong kỳ, trừ các khoản vay riêng) nhân với chi phí lũy kế bình quân gia quyền của tài sản; không vượt tổng chi phí đi vay phát sinh trong kỳ (đoạn 11).
- **Bắt đầu** khi đồng thời: chi phí đầu tư bắt đầu phát sinh, chi phí đi vay phát sinh, và các hoạt động cần thiết để chuẩn bị đưa tài sản vào sử dụng đang được tiến hành (đoạn 13).
- **Tạm ngừng** khi quá trình đầu tư bị gián đoạn bất thường; chi phí đi vay trong thời gian đó vào chi phí kỳ (đoạn 16, 17).
- **Chấm dứt** khi các hoạt động chủ yếu để đưa tài sản vào sử dụng hoặc bán đã hoàn thành (đoạn 18); công trình hoàn thành từng phần dùng được riêng thì chấm dứt theo từng phần (đoạn 20, 21).

TT99 bổ sung (TK 241, mục 1b; TK 341, mục 1c): vay để đầu tư vào công ty con, liên doanh, liên kết thì không vốn hóa chi phí đi vay; chi phí thẩm định, kiểm toán, lập hồ sơ, thu xếp khoản vay vào chi phí tài chính, trừ khi phát sinh từ khoản vay riêng cho tài sản dở dang và thỏa VAS 16. TT99 (TK 335, mục 1e) cũng nêu nhà thầu không vốn hóa lãi vay khi vay để thi công công trình cho khách hàng, kể cả vay riêng.

Với hệ thống, vốn hóa là một bút toán phân loại lại theo kỳ: lãi đã tính trên khoản vay được ghi Nợ 241 thay vì 635 trong khoảng thời gian vốn hóa. Hệ thống cần biết khế ước nào là vay riêng cho công trình nào, trạng thái công trình (đang thi công, tạm dừng, hoàn thành), và với vay chung thì chi phí lũy kế bình quân của công trình. Số vốn hóa đi vào nguyên giá TSCĐ khi công trình hoàn thành, xem [[kt-29-vong-doi-tscd]].

## Ảnh hưởng tới báo cáo

**Báo cáo tình hình tài chính** (TT99 Phụ lục IV):

- **Tiền** (mã số 111): tổng số dư Nợ chi tiết TK 111, 112, 113, chỉ gồm các khoản tiền không bị hạn chế sử dụng. Hệ thống cần đánh dấu được tài khoản tiền bị hạn chế (ví dụ tiền ký quỹ bị phong tỏa) để loại ra.
- **Vay và nợ thuê tài chính ngắn hạn** (mã số 321): số dư Có chi tiết TK 341 (và 343) có kỳ hạn thanh toán còn lại không quá 12 tháng kể từ ngày kết thúc kỳ. **Dài hạn** (mã số 339): kỳ hạn còn lại trên 12 tháng. TT99 TK 341 mục 1b thêm: khoản mà doanh nghiệp không có quyền từ chối nghĩa vụ chi trả trong 12 tháng tới phải trình bày là ngắn hạn. Phân loại dựa trên kỳ hạn còn lại, nên phần nợ gốc dài hạn đến hạn trả trong 12 tháng tới phải chuyển sang ngắn hạn khi lập báo cáo; hệ thống cần lịch trả nợ theo từng khế ước để tính được.
- Lãi vay trả sau đã trích nằm ở chi phí phải trả ngắn hạn (mã số 316).

**Báo cáo kết quả hoạt động kinh doanh**: lãi vay không vốn hóa vào chi phí tài chính (TK 635).

**Báo cáo lưu chuyển tiền tệ** (mẫu B03-DN trong TT99): tiền thu từ đi vay (mã số 33) và tiền trả nợ gốc vay (mã số 34) thuộc hoạt động tài chính; chi phí đi vay đã trả (mã số 04) nằm ở hoạt động kinh doanh. Xem [[kt-41-luu-chuyen-tien-te]].

**Thuyết minh**: VAS 16 (đoạn 22) yêu cầu trình bày chính sách kế toán cho chi phí đi vay, tổng chi phí đi vay được vốn hóa trong kỳ và tỷ lệ vốn hóa đã dùng. Xem [[kt-42-thuyet-minh-bctc]].

Đối chiếu số dư tiền gửi với sao kê, số dư vay với xác nhận của ngân hàng và trích lãi vay đến ngày khóa sổ là các bước trong [[kt-36-quy-trinh-khoa-so]].

## Nguồn

- Thông tư 99/2025/TT-BTC, Phụ lục II: danh mục tài khoản (111, 112, 113, 1281, 341, 3411, 3412); Nguyên tắc kế toán tiền (điểm 1, 4); TK 111 (mục 1, 2, 3); TK 112 (mục 1, 2); TK 113 (mục 1, 2, 3); TK 241 (mục 1b); TK 335 (mục 1e); TK 338 (mục 3.1b); TK 341 (mục 1, 2, 3). Phụ lục I: danh mục chứng từ nhóm IV. Tiền tệ. Phụ lục IV: hướng dẫn mã số 111, 316, 321, 339; mẫu B03-DN mã số 04, 33, 34. Bản toàn văn dạng Word: https://chedo.ketoanthue.net/tai-ve/thong-tu-99-2025-tt-btc-che-do-ke-toan-doanh-nghiep.docx; danh mục tài khoản: https://docs.google.com/document/d/14NeM16EEKMINCoSraTafe0w_iySTX1Ub/export?format=pdf
- Kế toán Lê Ánh, trích Phụ lục II TT99 cho TK 111, 112, 113, 341 (dùng để đối chiếu): https://ketoanleanh.edu.vn/kinh-nghiem-ke-toan/tai-khoan-111-tien-mat-theo-thong-tu-99-2025-tt-btc.html, https://ketoanleanh.edu.vn/kinh-nghiem-ke-toan/tai-khoan-112-tien-gui-khong-ky-han-theo-thong-tu-99-2025-tt-btc.html, https://ketoanleanh.edu.vn/kinh-nghiem-ke-toan/tai-khoan-113-tien-dang-chuyen-theo-thong-tu-99-2025-tt-btc.html, https://ketoanleanh.edu.vn/kinh-nghiem-ke-toan/tai-khoan-341-vay-va-no-thue-tai-chinh-theo-thong-tu-99-2025-tt-btc.html
- Chuẩn mực kế toán Việt Nam số 16 – Chi phí đi vay (Quyết định 165/2002/QĐ-BTC), đoạn 03, 04, 06–11, 13, 16–22: https://cdn.thuvienphapluat.vn//uploads/Hoidapphapluat/2024/TTTT/240830/Chuan-muc-ke-toan-16.doc
- Odoo 19 Documentation, Bank and cash accounts: https://www.odoo.com/documentation/19.0/applications/finance/accounting/bank.html
- Odoo 19 Documentation, Bank reconciliation: https://www.odoo.com/documentation/19.0/applications/finance/accounting/bank/reconciliation.html
- Odoo 19 Documentation, Payments (mục outstanding accounts và trạng thái Paid): https://www.odoo.com/documentation/19.0/applications/finance/accounting/payments.html
