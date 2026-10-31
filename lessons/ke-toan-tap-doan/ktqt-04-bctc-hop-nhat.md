# Báo cáo tài chính hợp nhất: logic và dữ liệu cần chuẩn bị

Bài này giải thích BCTC hợp nhất được dựng từ BCTC riêng như thế nào: cộng ngang, loại trừ khoản đầu tư, tách lợi ích cổ đông không kiểm soát, loại trừ giao dịch nội bộ. Mục tiêu là để BA biết hệ thống của từng pháp nhân phải cung cấp dữ liệu gì cho kế toán tập đoàn.

## Khung pháp lý

- **VAS 25** quy định nguyên tắc lập và trình bày BCTC hợp nhất; **VAS 11** quy định hợp nhất kinh doanh theo phương pháp mua và lợi thế thương mại; **VAS 07, VAS 08** quy định phương pháp vốn chủ sở hữu cho liên kết, liên doanh.
- **TT202/2014/TT-BTC** hướng dẫn phương pháp lập và trình bày BCTC hợp nhất. **TT43/2026/TT-BTC** (ký ngày 20/04/2026, có hiệu lực từ ngày ký) sửa đổi TT202 và áp dụng cho BCTC hợp nhất của năm tài chính bắt đầu từ hoặc sau 01/01/2026. TT43 đổi tên "Bảng cân đối kế toán" thành "Báo cáo tình hình tài chính" trong TT202, thay Phụ lục 1, 2 bằng Phụ lục I, II mới.

### Ai phải lập

TT202 Điều 5: kết thúc kỳ kế toán, công ty mẹ có trách nhiệm lập BCTC hợp nhất của cả tập đoàn.

- Công ty mẹ là tổ chức niêm yết, công ty đại chúng quy mô lớn, công ty mẹ thuộc sở hữu Nhà nước: lập BCTC hợp nhất năm, bán niên dạng đầy đủ, quý dạng tóm lược.
- Công ty mẹ khác: phải lập BCTC hợp nhất năm dạng đầy đủ; khuyến khích lập giữa niên độ.

Công ty mẹ được miễn lập khi thoả mãn **tất cả** điều kiện: không phải đơn vị có lợi ích công chúng; không thuộc sở hữu Nhà nước hoặc do Nhà nước nắm cổ phần chi phối; đồng thời là công ty con của một công ty khác và việc không lập được các cổ đông (kể cả cổ đông không có quyền biểu quyết) đồng thuận; công cụ vốn, công cụ nợ không giao dịch trên thị trường; không trong quá trình xin phát hành công cụ tài chính ra công chúng; công ty sở hữu nó lập BCTC hợp nhất để công bố phù hợp VAS.

Thời hạn: BCTC hợp nhất năm nộp chủ sở hữu và cơ quan quản lý có thẩm quyền chậm nhất 90 ngày kể từ ngày kết thúc kỳ kế toán năm (TT202 Điều 6, sửa bởi TT43).

### Phạm vi hợp nhất

Công ty mẹ phải hợp nhất BCTC riêng của mình và của tất cả công ty con trong nước và ngoài nước do mình kiểm soát trực tiếp hoặc gián tiếp, trừ khi (TT202 Điều 10 khoản 1):

- Quyền kiểm soát chỉ là tạm thời vì công ty con được mua và nắm giữ để bán lại trong thời gian không quá 12 tháng (phải xác định ngay tại thời điểm mua);
- Hoạt động của công ty con bị hạn chế trên 12 tháng và điều này ảnh hưởng đáng kể tới khả năng chuyển vốn cho công ty mẹ.

Không được loại khỏi hợp nhất công ty con chỉ vì nó kinh doanh khác ngành với phần còn lại của tập đoàn (TT202 Điều 10 khoản 2; VAS 25 đoạn 11).

## Logic hợp nhất

BCTC hợp nhất trình bày tập đoàn như một doanh nghiệp độc lập (TT202 Điều 3). Hệ quả: những gì chỉ là tiền và hàng chuyển qua lại giữa các thành viên thì không phải doanh thu, chi phí, tài sản hay nợ của tập đoàn. Hợp nhất không ghi vào sổ của pháp nhân nào; nó là một lớp điều chỉnh trên số liệu đã cộng.

TT202 Điều 11 quy định trình tự:

<step-flow>
<svg viewBox="0 0 660 300" role="img" aria-labelledby="kq04s-t" style="width:100%;max-width:660px;height:auto;display:block;margin:1.25rem auto" font-family="ui-sans-serif, system-ui, sans-serif">
<title id="kq04s-t">Trình tự hợp nhất theo TT202 Điều 11</title>
<defs>
<marker id="kq04s-arrow" markerWidth="9" markerHeight="9" refX="8" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 z" fill="currentColor"/></marker>
</defs>
<g data-step="1">
<rect x="10" y="20" width="200" height="56" rx="10" fill="#3b82f6" fill-opacity="0.13" stroke="currentColor" stroke-opacity="0.22"/>
<text x="110" y="45" font-size="13" text-anchor="middle" fill="currentColor">1. Cộng ngang</text>
<text x="110" y="63" font-size="11" text-anchor="middle" fill="currentColor" fill-opacity="0.75">BCTC mẹ + các con</text>
</g>
<g data-step="2">
<line x1="210" y1="48" x2="236" y2="48" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" marker-end="url(#kq04s-arrow)"/>
<rect x="240" y="20" width="200" height="56" rx="10" fill="#f59e0b" fill-opacity="0.14" stroke="currentColor" stroke-opacity="0.22"/>
<text x="340" y="45" font-size="13" text-anchor="middle" fill="currentColor">2. Loại trừ khoản đầu tư</text>
<text x="340" y="63" font-size="11" text-anchor="middle" fill="currentColor" fill-opacity="0.75">ghi nhận lợi thế thương mại</text>
</g>
<g data-step="3">
<line x1="440" y1="48" x2="466" y2="48" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" marker-end="url(#kq04s-arrow)"/>
<rect x="470" y="20" width="180" height="56" rx="10" fill="#f59e0b" fill-opacity="0.14" stroke="currentColor" stroke-opacity="0.22"/>
<text x="560" y="45" font-size="13" text-anchor="middle" fill="currentColor">3. Phân bổ lợi thế</text>
<text x="560" y="63" font-size="11" text-anchor="middle" fill="currentColor" fill-opacity="0.75">thương mại</text>
</g>
<g data-step="4">
<line x1="560" y1="76" x2="560" y2="116" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" marker-end="url(#kq04s-arrow)"/>
<rect x="470" y="120" width="180" height="56" rx="10" fill="#8b5cf6" fill-opacity="0.14" stroke="currentColor" stroke-opacity="0.22"/>
<text x="560" y="145" font-size="13" text-anchor="middle" fill="currentColor">4. Tách lợi ích</text>
<text x="560" y="163" font-size="11" text-anchor="middle" fill="currentColor" fill-opacity="0.75">cổ đông không kiểm soát</text>
</g>
<g data-step="5">
<line x1="470" y1="148" x2="444" y2="148" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" marker-end="url(#kq04s-arrow)"/>
<rect x="240" y="120" width="200" height="56" rx="10" fill="#f43f5e" fill-opacity="0.12" stroke="currentColor" stroke-opacity="0.22"/>
<text x="340" y="145" font-size="13" text-anchor="middle" fill="currentColor">5. Loại trừ giao dịch</text>
<text x="340" y="163" font-size="11" text-anchor="middle" fill="currentColor" fill-opacity="0.75">nội bộ tập đoàn</text>
</g>
<g data-step="6">
<line x1="240" y1="148" x2="214" y2="148" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" marker-end="url(#kq04s-arrow)"/>
<rect x="10" y="120" width="200" height="56" rx="10" fill="#64748b" fill-opacity="0.14" stroke="currentColor" stroke-opacity="0.22"/>
<text x="110" y="145" font-size="13" text-anchor="middle" fill="currentColor">6. Bảng tổng hợp</text>
<text x="110" y="163" font-size="11" text-anchor="middle" fill="currentColor" fill-opacity="0.75">bút toán điều chỉnh, kết chuyển</text>
</g>
<g data-step="7">
<line x1="110" y1="176" x2="110" y2="216" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" marker-end="url(#kq04s-arrow)"/>
<rect x="10" y="220" width="640" height="56" rx="10" fill="#10b981" fill-opacity="0.16" stroke="currentColor" stroke-opacity="0.22"/>
<text x="330" y="253" font-size="13" text-anchor="middle" fill="currentColor">7. Lập BCTC hợp nhất từ Bảng tổng hợp các chỉ tiêu hợp nhất</text>
</g>
</svg>
<step-note data-step="1">Cộng từng chỉ tiêu trên Báo cáo tình hình tài chính và Báo cáo kết quả kinh doanh của công ty mẹ và các công ty con. BCTC của công ty con khác đồng tiền phải được chuyển đổi trước.</step-note>
<step-note data-step="2">Loại toàn bộ giá trị ghi sổ khoản đầu tư của công ty mẹ vào từng công ty con với phần tài sản thuần công ty mẹ nắm giữ trong vốn chủ sở hữu của công ty con; ghi nhận lợi thế thương mại hoặc lãi từ giao dịch mua giá rẻ.</step-note>
<step-note data-step="3">Lợi thế thương mại phân bổ dần đều qua các năm, không quá 10 năm kể từ ngày kiểm soát.</step-note>
<step-note data-step="4">Phần của cổ đông không kiểm soát trong tài sản thuần và trong lợi nhuận sau thuế của công ty con được trình bày thành chỉ tiêu riêng.</step-note>
<step-note data-step="5">Loại trừ số dư công nợ, cho vay, doanh thu, chi phí, cổ tức nội bộ và lãi chưa thực hiện nằm trong tài sản.</step-note>
<step-note data-step="6">Tổng hợp các bút toán điều chỉnh, rồi kết chuyển tổng ảnh hưởng tới doanh thu, chi phí sang lợi nhuận sau thuế chưa phân phối.</step-note>
<step-note data-step="7">BCTC hợp nhất lấy số từ Bảng tổng hợp các chỉ tiêu hợp nhất sau khi đã điều chỉnh, loại trừ.</step-note>
</step-flow>

Các bút toán điều chỉnh khi hợp nhất ghi theo tên chỉ tiêu báo cáo ("Nợ Doanh thu bán hàng và cung cấp dịch vụ", "Có Đầu tư vào công ty con"), không ghi theo số hiệu tài khoản, vì chúng không vào sổ của pháp nhân nào. TT202 Điều 12 quy định hai bảng làm việc: Bảng tổng hợp bút toán điều chỉnh (mẫu BTH 01-HN) và Bảng tổng hợp các chỉ tiêu hợp nhất (mẫu BTH 02-HN), thuộc phụ lục của Thông tư.

TT43/2026 thay Phụ lục 2 của TT202 bằng Phụ lục II mới nhưng giữ nguyên ký hiệu hai bảng: BTH01-HN có các cột số hiệu bút toán, ngày tháng, diễn giải, Nợ, Có và được lập cho từng chỉ tiêu; BTH02-HN có các cột chỉ tiêu, mã số, số của công ty mẹ, từng công ty con, tổng cộng, điều chỉnh Nợ, điều chỉnh Có và số hợp nhất. Phụ lục II còn có bảng tổng hợp theo dõi các khoản đầu tư vào công ty liên doanh, liên kết.

## Bước 2: loại trừ khoản đầu tư vào công ty con

Trên BCTC riêng, công ty mẹ ghi khoản đầu tư vào công ty con theo giá gốc (TK 221). Trên BCTC của công ty con, phần vốn đó nằm trong vốn chủ sở hữu. Cộng ngang thì cùng một nguồn vốn bị tính hai lần, nên phải loại.

TT202 Điều 14 và 16: tại ngày mua, tài sản và nợ phải trả của công ty con được ghi nhận theo giá trị hợp lý; lợi thế thương mại là chênh lệch giữa giá phí khoản đầu tư và phần sở hữu của công ty mẹ trong giá trị hợp lý của tài sản thuần có thể xác định được của công ty con tại ngày mua. Bút toán loại trừ có dạng:

- Nợ các chỉ tiêu thuộc vốn chủ sở hữu của công ty con (phần công ty mẹ sở hữu, theo giá trị ghi sổ tại ngày mua)
- Nợ Lợi thế thương mại (nếu có)
- Nợ / Có các khoản mục tài sản, nợ phải trả (phần chênh lệch giá trị hợp lý so với giá trị ghi sổ)
- Có Đầu tư vào công ty con
- Có Lợi ích cổ đông không kiểm soát (phần của họ trong chênh lệch giá trị hợp lý cao hơn giá trị ghi sổ; nếu giá trị hợp lý thấp hơn thì ghi Nợ)
- Có Thu nhập khác (nếu phát sinh lãi từ giao dịch mua rẻ)

Biến động vốn chủ sở hữu của công ty con sau ngày mua (lợi nhuận, quỹ, chênh lệch tỷ giá) không bị loại trừ (TT202 Điều 14 khoản 3). Vì vậy dữ liệu cần lưu là **cơ cấu vốn chủ sở hữu của công ty con tại ngày mua** và **giá trị hợp lý của từng tài sản, nợ phải trả tại ngày mua**. Các số này không có trong sổ của công ty con mà nằm trong hồ sơ mua.

Lợi thế thương mại phân bổ dần đều, thời gian không quá 10 năm từ ngày công ty mẹ kiểm soát công ty con; nếu có bằng chứng tổn thất lớn hơn số phân bổ hằng năm thì phân bổ theo số tổn thất ngay trong kỳ (TT202 Điều 10 khoản 9; VAS 11 đoạn 53). Trên Báo cáo tình hình tài chính hợp nhất, lợi thế thương mại là chỉ tiêu VI, mã số 279 (TT202 Điều 13, sửa bởi TT43).

Chi tiết về hợp nhất kinh doanh (xác định ngày mua, giá phí, giá trị hợp lý) thuộc VAS 11 và không phải trọng tâm của BA; điều BA cần là hệ thống không ghi đè hay mất dữ liệu ngày mua.

## Bước 4: lợi ích cổ đông không kiểm soát

Cổ đông không kiểm soát là cổ đông không có quyền kiểm soát công ty con (trước đây gọi là cổ đông thiểu số) (TT202 Điều 2). TT202 Điều 21:

- Lợi ích cổ đông không kiểm soát trong tài sản thuần gồm: phần tại ngày mua (theo giá trị hợp lý), phần trong biến động vốn chủ sở hữu từ ngày mua đến đầu kỳ, và phần trong biến động phát sinh trong kỳ.
- Trên Báo cáo kết quả kinh doanh hợp nhất, phần của họ xác định theo tỷ lệ lợi ích và lợi nhuận sau thuế của công ty con.
- Khi xác định giá trị cuối kỳ phải loại ảnh hưởng của cổ tức ưu đãi phải trả và quỹ khen thưởng phúc lợi phải trích trong kỳ.

Chỉ tiêu trình bày theo TT202 Điều 13 (sửa bởi TT43):

- Báo cáo tình hình tài chính hợp nhất: "Lợi ích cổ đông không kiểm soát", mã số 429, thuộc phần vốn chủ sở hữu.
- Báo cáo kết quả kinh doanh hợp nhất: "Lợi nhuận sau thuế của công ty mẹ" mã số 61; "Lợi nhuận sau thuế của cổ đông không kiểm soát" mã số 62; "Phần lãi hoặc lỗ trong công ty liên doanh, liên kết" mã số 27.

> ⚠️ Cần xác nhận: VAS 25 đoạn 24 cho rằng khoản lỗ của công ty con vượt phần vốn của cổ đông thiểu số được tính giảm vào lợi ích của cổ đông đa số (trừ khi cổ đông thiểu số có nghĩa vụ và khả năng bù đắp). TT202 Điều 21 khoản 2 lại hướng dẫn các khoản lỗ phải phân bổ cho cổ đông không kiểm soát theo phần sở hữu, kể cả khi lớn hơn phần sở hữu của họ trong tài sản thuần. Hỏi kế toán tập đoàn của khách hàng đang áp dụng cách nào.

Tỷ lệ lợi ích (khác với tỷ lệ quyền biểu quyết) lấy từ danh mục pháp nhân, xem [[ktqt-02-danh-muc-phap-nhan]].

## Bước 5: loại trừ giao dịch nội bộ

Nguyên tắc chung (TT202 Điều 10 khoản 11; VAS 25 đoạn 14–15):

- Số dư phải thu, phải trả, cho vay... giữa các đơn vị trong tập đoàn phải được loại trừ hoàn toàn;
- Doanh thu, thu nhập, chi phí phát sinh từ giao dịch trong nội bộ tập đoàn phải được loại trừ toàn bộ;
- Lãi chưa thực hiện từ giao dịch nội bộ đang nằm trong giá trị tài sản (hàng tồn kho, TSCĐ...) phải được loại trừ hoàn toàn; lỗ chưa thực hiện cũng loại trừ, trừ khi chi phí gây ra khoản lỗ đó không thể thu hồi.

### Bán hàng tồn kho trong nội bộ

TT202 Điều 26:

> Lãi hoặc lỗ chưa thực hiện trong hàng tồn kho cuối kỳ = Giá trị hàng tồn kho cuối kỳ tính theo giá bán nội bộ − Giá trị hàng tồn kho cuối kỳ tính theo giá vốn của bên bán.

Ví dụ giả định (triệu đồng): công ty mẹ M bán cho công ty con B lô hàng giá 1.000, giá vốn tại M là 800. Đến cuối kỳ B đã bán ra ngoài 60% lô hàng, còn tồn 40%.

- Tồn kho tại B theo giá nội bộ: 400. Theo giá vốn của M: 320. Lãi chưa thực hiện: 80.
- Bút toán điều chỉnh khi hợp nhất: Nợ Doanh thu bán hàng và cung cấp dịch vụ 1.000 / Có Giá vốn hàng bán 920 / Có Hàng tồn kho 80.

Sau bút toán, trên số hợp nhất chỉ còn doanh thu B bán ra ngoài và giá vốn tính theo giá gốc của M, hàng tồn kho còn 320.

Các điểm TT202 Điều 26 nêu thêm, ảnh hưởng tới dữ liệu cần có:

- Giao dịch chiều xuôi (công ty mẹ bán) thì toàn bộ lãi chưa thực hiện thuộc về công ty mẹ, không ảnh hưởng phần của cổ đông không kiểm soát. Giao dịch chiều ngược (công ty con bán) thì lãi chưa thực hiện phải phân bổ giữa công ty mẹ và cổ đông không kiểm soát theo tỷ lệ lợi ích.
- Lãi chưa thực hiện trong hàng tồn kho đầu kỳ phải được loại khỏi giá vốn hàng bán trong kỳ.
- Cuối kỳ bên mua chưa trả hết tiền thì phải loại trừ cả khoản phải thu khách hàng và phải trả người bán giữa hai bên.
- Loại lãi chưa thực hiện làm giá trị ghi sổ hàng tồn kho trên BCTC hợp nhất nhỏ hơn cơ sở tính thuế, phát sinh tài sản thuế thu nhập hoãn lại.

Như vậy hệ thống của bên mua phải trả lời được: cuối kỳ còn bao nhiêu hàng tồn có nguồn gốc mua từ đơn vị tập đoàn, mua từ ai, giá mua nội bộ bao nhiêu; và bên bán phải cung cấp giá vốn tương ứng.

Giao dịch bán TSCĐ trong nội bộ được xử lý tương tự nhưng kéo dài qua nhiều kỳ do khấu hao (TT202 Điều 27).

### Vay nội bộ

TT202 Điều 31: khoản vay trong nội bộ tập đoàn chưa trả phải được loại trừ hoàn toàn; thu nhập từ cho vay và chi phí đi vay cũng loại trừ toàn bộ.

- Loại số dư: Nợ Vay và nợ thuê tài chính ngắn hạn, dài hạn / Có Phải thu về cho vay ngắn hạn, dài hạn.
- Loại lãi (khoản vay dùng cho sản xuất kinh doanh thông thường): Nợ Doanh thu hoạt động tài chính / Có Chi phí tài chính.
- Lãi vay chưa thanh toán đang nằm trong phải thu, phải trả cũng loại trừ.
- Nếu lãi vay nội bộ đã được vốn hoá vào tài sản dở dang thì phải loại khỏi giá trị tài sản đó, kèm điều chỉnh thuế hoãn lại.

Trên sổ từng pháp nhân, các khoản này nằm ở TK 1283, TK 341, TK 515, TK 635 (xem [[ktqt-03-giao-dich-noi-bo]]).

### Cổ tức nội bộ

TT202 Điều 30: toàn bộ cổ tức được chia từ lợi nhuận sau ngày mua của các công ty con phải được loại trừ. Khi công ty con trả cổ tức bằng tiền cho công ty mẹ: Nợ Doanh thu hoạt động tài chính / Có Lợi nhuận sau thuế chưa phân phối kỳ này. Cổ tức chưa trả thì loại cả số phải thu ở công ty mẹ và phải trả ở công ty con.

### Các khoản mục nội bộ khác

TT202 Điều 32 (khoản 3 sửa bởi TT43): số dư phải thu, phải trả, doanh thu chưa thực hiện, chi phí chờ phân bổ... giữa các đơn vị trong tập đoàn phải được loại trừ; doanh thu, thu nhập, giá vốn, chi phí từ các giao dịch khác trong nội bộ tập đoàn (kể cả doanh thu tài chính, chi phí tài chính do đánh giá lại khoản mục tiền tệ có gốc ngoại tệ, doanh thu cho thuê, cung cấp dịch vụ) phải được loại trừ hoàn toàn, trừ khoản chênh lệch tỷ giá thuộc phạm vi đoạn 28 VAS 10. Kế toán phải lập Bảng tổng hợp và đối chiếu số dư nội bộ trước khi loại trừ.

### Bút toán kết chuyển

Sau mọi điều chỉnh, tổng ảnh hưởng tới các chỉ tiêu kết quả kinh doanh được kết chuyển sang "Lợi nhuận sau thuế chưa phân phối" (TT202 Điều 33).

## Liên doanh, liên kết trong BCTC hợp nhất

Liên doanh và liên kết không hợp nhất từng khoản mục mà trình bày theo phương pháp vốn chủ sở hữu (VAS 07 đoạn 09; VAS 08 đoạn 26): khoản đầu tư ghi theo giá gốc rồi điều chỉnh theo phần sở hữu của nhà đầu tư trong lãi, lỗ của bên nhận đầu tư; khoản được chia ghi giảm giá trị khoản đầu tư. TT43 bổ sung vào TT202 Điều 66: cổ tức, lợi nhuận đã nhận trong kỳ từ công ty liên doanh, liên kết điều chỉnh Nợ Doanh thu hoạt động tài chính / Có Phần lãi hoặc lỗ trong công ty liên doanh, liên kết.

## Báo cáo lưu chuyển tiền tệ hợp nhất

BCLCTT hợp nhất chỉ trình bày luồng tiền giữa tập đoàn với bên ngoài (kể cả với công ty liên doanh, liên kết và cổ đông không kiểm soát); toàn bộ luồng tiền giữa công ty mẹ và công ty con phải được loại trừ (TT202 Điều 10 khoản 14). TT43 sửa Điều 73 TT202 theo hướng tương tự cho từng chỉ tiêu: ví dụ chỉ tiêu "Tăng, giảm các khoản phải thu" (mã số 09) không phản ánh các khoản phải thu giữa các đơn vị trong nội bộ tập đoàn. Vì vậy dòng tiền của từng pháp nhân cần nhận diện được đối tác là đơn vị tập đoàn.

## Dữ liệu cần chuẩn bị

Tổng hợp từ các điều trên, mỗi pháp nhân cần cung cấp cho kế toán tập đoàn:

| Dữ liệu | Dùng cho | Căn cứ |
|---|---|---|
| BCTC riêng cùng kỳ với công ty mẹ (hoặc lệch không quá 3 tháng kèm điều chỉnh), theo chính sách kế toán thống nhất | Cộng ngang | TT202 Điều 10 khoản 4, 5 |
| BCTC đã chuyển đổi sang đồng tiền báo cáo của công ty mẹ | Cộng ngang | TT202 Điều 10 khoản 15, Điều 58 |
| Cơ cấu vốn chủ sở hữu và giá trị hợp lý tài sản thuần tại ngày mua; giá phí khoản đầu tư | Loại trừ khoản đầu tư, lợi thế thương mại | TT202 Điều 14, 16 |
| Tỷ lệ lợi ích của công ty mẹ và cổ đông không kiểm soát; ngày đạt / mất kiểm soát | Tách lợi ích cổ đông không kiểm soát; phạm vi kỳ | TT202 Điều 9, 10 khoản 6, Điều 21 |
| Số dư công nợ, cho vay, lãi phải thu / phải trả, cổ tức phải thu / phải trả với từng đơn vị tập đoàn | Loại trừ số dư | TT202 Điều 10 khoản 11, Điều 30, 31, 32 |
| Doanh thu, giá vốn, chi phí, doanh thu tài chính, chi phí tài chính với từng đơn vị tập đoàn | Loại trừ giao dịch | TT202 Điều 26, 31, 32 |
| Hàng tồn kho cuối kỳ (và đầu kỳ) có nguồn gốc nội bộ, theo giá nội bộ và giá vốn bên bán | Loại lãi chưa thực hiện | TT202 Điều 26 |
| TSCĐ mua bán nội bộ: nguyên giá, khấu hao ở bên bán và bên mua | Loại lãi chưa thực hiện qua các kỳ | TT202 Điều 27 |
| Luồng tiền với từng đơn vị tập đoàn | BCLCTT hợp nhất | TT202 Điều 10 khoản 14, Điều 73 |

> 💡 Phần lớn các dòng trong bảng trên chỉ làm được nếu mọi bút toán với đơn vị tập đoàn mang mã đối tác tập đoàn từ lúc ghi sổ. Bổ sung sau khi đã khoá sổ thường phải rà thủ công từng chứng từ.

## Điểm chạm hệ thống

Odoo 19 mô tả công cụ hợp nhất gồm: ánh xạ tài khoản giữa các company (Account Mapping), multi-ledger để tách các journal điều chỉnh hợp nhất khỏi sổ thường của từng company, nhóm theo chiều ngang (Horizontal Groups) để xem mỗi company đóng góp bao nhiêu vào số hợp nhất, và quy đổi khi các company khác đồng tiền. Các công cụ này giải quyết bước cộng ngang và nơi ghi bút toán điều chỉnh; còn việc xác định số cần loại trừ (lãi chưa thực hiện, lợi ích cổ đông không kiểm soát, lợi thế thương mại) vẫn dựa vào dữ liệu ở bảng trên. Ánh xạ hệ thống tài khoản xem [[ktqt-09-mapping-coa-tap-doan]], gói báo cáo nộp tập đoàn xem [[ktqt-12-bao-cao-cho-tap-doan]].

## Nguồn

- Chuẩn mực kế toán Việt Nam số 25, đoạn 06, 11, 12, 14–17, 24 (Quyết định 234/2003/QĐ-BTC): https://vanban.vcci.com.vn/quyet-dinh-2342003qd-btc-cua-bo-tai-chinh-ve-viec-ban-hanh-va-cong-bo-sau-06-chuan-muc-ke-toan-viet-nam-dot-3
- Chuẩn mực kế toán Việt Nam số 07, đoạn 06, 09; số 08, đoạn 26 (cùng Quyết định 234/2003/QĐ-BTC, URL như trên)
- Chuẩn mực kế toán Việt Nam số 11 "Hợp nhất kinh doanh", đoạn 01, 25, 36, 53 (Quyết định 100/2005/QĐ-BTC): https://caselaw.vn/van-ban-phap-luat/225170-quyet-dinh-so-100-2005-qd-btc-ngay-28-12-2005-ban-hanh-va-cong-bo-bon-04-chuan-muc-ke-toan-viet-nam-dot-5-cua-bo-truong-bo-tai-chinh
- Thông tư 202/2014/TT-BTC, Điều 2, 3, 5, 9, 10, 11, 12, 13, 14, 16, 21, 26, 30, 31, 32, 33: https://caselaw.vn/van-ban-phap-luat/264198-thong-tu-202-2014-tt-btc-huong-dan-phuong-phap-lap-va-trinh-bay-bao-cao-tai-chinh-hop-nhat-do-bo-truong-bo-tai-chinh-ban-hanh
- Thông tư 43/2026/TT-BTC, Điều 1 khoản 2 (Điều 6), khoản 5 (Điều 13), khoản 7 (Điều 32), khoản 11 (Điều 66), khoản 12 (Điều 73); Điều 2 khoản 3, 11, 12; Điều 3; Phụ lục II (mẫu BTH01-HN, BTH02-HN): https://luatvietnam.vn/tai-chinh/thong-tu-43-2026-tt-btc-sua-doi-bao-cao-tai-chinh-hop-nhat-hieu-luc-20-04-2026-432924-d1.html
- Odoo 19 Documentation, Consolidation: https://www.odoo.com/documentation/19.0/applications/finance/accounting/get_started/consolidation.html
