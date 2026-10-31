# Tiền lương và các khoản trích theo lương: điểm nối HRM với kế toán

Bài này giúp BA đọc được bảng lương dưới góc kế toán: hệ thống nhân sự (HRM) tính ra những con số nào, mỗi con số đi vào tài khoản nào theo TT99, các khoản bảo hiểm và kinh phí công đoàn được trích theo tỷ lệ nào tại năm 2026, và dữ liệu nào phải chuyển từ HRM sang sổ cái để lên được báo cáo.

## Luồng nghiệp vụ một kỳ lương

<step-flow>
<svg viewBox="0 0 680 210" role="img" aria-labelledby="kt31f-t" style="width:100%;max-width:680px;height:auto;display:block;margin:1.25rem auto" font-family="ui-sans-serif, system-ui, sans-serif">
<title id="kt31f-t">Một kỳ lương từ HRM đến sổ cái</title>
<defs>
<marker id="kt31f-arrow" markerWidth="9" markerHeight="9" refX="8" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 z" fill="currentColor"/></marker>
</defs>
<g data-step="1">
<rect x="10" y="20" width="150" height="60" rx="10" fill="#3b82f6" fill-opacity="0.13" stroke="currentColor" stroke-opacity="0.22"/>
<text x="85" y="46" font-size="13" text-anchor="middle" fill="currentColor">Chấm công, sản lượng</text>
<text x="85" y="66" font-size="12" text-anchor="middle" fill="currentColor">HRM</text>
</g>
<g data-step="2">
<line x1="160" y1="50" x2="198" y2="50" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" marker-end="url(#kt31f-arrow)"/>
<rect x="200" y="20" width="150" height="60" rx="10" fill="#3b82f6" fill-opacity="0.13" stroke="currentColor" stroke-opacity="0.22"/>
<text x="275" y="46" font-size="13" text-anchor="middle" fill="currentColor">Bảng thanh toán</text>
<text x="275" y="66" font-size="13" text-anchor="middle" fill="currentColor">tiền lương</text>
</g>
<g data-step="3">
<line x1="350" y1="50" x2="388" y2="50" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" marker-end="url(#kt31f-arrow)"/>
<rect x="390" y="20" width="280" height="60" rx="10" fill="#f59e0b" fill-opacity="0.14" stroke="currentColor" stroke-opacity="0.22"/>
<text x="530" y="46" font-size="13" text-anchor="middle" fill="currentColor">Ghi nhận lương, trích BH, KPCĐ</text>
<text x="530" y="66" font-size="12" text-anchor="middle" fill="currentColor">Nợ 622/627/641/642 · Có 334, 338</text>
</g>
<g data-step="4">
<line x1="530" y1="80" x2="530" y2="118" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" marker-end="url(#kt31f-arrow)"/>
<rect x="390" y="120" width="280" height="60" rx="10" fill="#8b5cf6" fill-opacity="0.13" stroke="currentColor" stroke-opacity="0.22"/>
<text x="530" y="146" font-size="13" text-anchor="middle" fill="currentColor">Khấu trừ vào lương</text>
<text x="530" y="166" font-size="12" text-anchor="middle" fill="currentColor">Nợ 334 · Có 338, 3335, 141</text>
</g>
<g data-step="5">
<line x1="390" y1="150" x2="352" y2="150" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" marker-end="url(#kt31f-arrow)"/>
<rect x="200" y="120" width="150" height="60" rx="10" fill="#10b981" fill-opacity="0.15" stroke="currentColor" stroke-opacity="0.22"/>
<text x="275" y="146" font-size="13" text-anchor="middle" fill="currentColor">Chi trả lương</text>
<text x="275" y="166" font-size="12" text-anchor="middle" fill="currentColor">Nợ 334 · Có 112</text>
</g>
<g data-step="6">
<line x1="200" y1="150" x2="162" y2="150" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" marker-end="url(#kt31f-arrow)"/>
<rect x="10" y="120" width="150" height="60" rx="10" fill="#10b981" fill-opacity="0.15" stroke="currentColor" stroke-opacity="0.22"/>
<text x="85" y="146" font-size="13" text-anchor="middle" fill="currentColor">Nộp BH, KPCĐ, thuế</text>
<text x="85" y="166" font-size="12" text-anchor="middle" fill="currentColor">Nợ 338, 3335 · Có 112</text>
</g>
</svg>
<step-note data-step="1">Dữ liệu đầu vào: ngày công, giờ làm thêm, sản lượng, nghỉ phép, nghỉ ốm. Đây là phần của HRM, kế toán chỉ nhận kết quả.</step-note>
<step-note data-step="2">Bảng thanh toán tiền lương (mẫu 01-LĐTL) lập hằng tháng, căn cứ bảng chấm công, phiếu xác nhận sản phẩm hoặc công việc hoàn thành.</step-note>
<step-note data-step="3">Lương và phần bảo hiểm, KPCĐ doanh nghiệp chịu được ghi vào chi phí theo bộ phận của người lao động. Đây là bút toán cần dữ liệu bộ phận từ HRM.</step-note>
<step-note data-step="4">Phần bảo hiểm người lao động đóng, thuế TNCN, tạm ứng chưa hoàn được trừ vào số phải trả người lao động.</step-note>
<step-note data-step="5">Chi trả phần thực lĩnh, thường qua ngân hàng theo danh sách.</step-note>
<step-note data-step="6">Nộp cho cơ quan bảo hiểm xã hội, tổ chức công đoàn và nộp thuế TNCN đã khấu trừ.</step-note>
</step-flow>

## Chứng từ

TT99 Phụ lục I, nhóm "I. Lao động tiền lương", hướng dẫn tám mẫu: Bảng thanh toán tiền lương (01-LĐTL), Bảng thanh toán tiền thưởng (02-LĐTL), Bảng thanh toán tiền làm thêm giờ (03-LĐTL), Bảng thanh toán tiền thuê ngoài (04-LĐTL), Hợp đồng giao khoán (05-LĐTL), Biên bản thanh lý (nghiệm thu) hợp đồng giao khoán (06-LĐTL), Bảng kê trích nộp các khoản theo lương (07-LĐTL), Bảng phân bổ tiền lương và các khoản trích theo lương (08-LĐTL). Theo hướng dẫn mẫu 01-LĐTL, bảng thanh toán tiền lương được lập hằng tháng, căn cứ các tài liệu như bảng chấm công, phiếu xác nhận sản phẩm hoặc công việc hoàn thành.

Với BA, mẫu 08-LĐTL là chỗ gặp nhau của hai hệ thống: như tên gọi, nó phân bổ tiền lương và các khoản trích theo lương vào các đối tượng chịu chi phí, tức là chính nội dung bút toán tổng hợp mà HRM phải đẩy sang kế toán.

## Tài khoản

| Tài khoản (TT99) | Nội dung |
|---|---|
| 334 Phải trả người lao động | Tiền lương, tiền công, tiền thưởng, BHXH trả theo lương và các khoản khác thuộc thu nhập người lao động |
| 3382 Kinh phí công đoàn | Trích và nộp KPCĐ |
| 3383 Bảo hiểm xã hội | Trích, nộp và thanh toán BHXH |
| 3384 Bảo hiểm y tế | Trích và nộp BHYT |
| 3386 Bảo hiểm thất nghiệp | Trích và nộp BHTN |
| 3335 Thuế thu nhập cá nhân | Thuế TNCN khấu trừ của người lao động |
| 335 Chi phí phải trả | Trích trước tiền lương nghỉ phép |
| 622, 623, 627, 641, 642, 241 | Chi phí lương theo bộ phận: nhân công trực tiếp, máy thi công, sản xuất chung, bán hàng, quản lý, đầu tư XDCB |

Danh mục TT99 không có tài khoản cấp 2 cho TK 334. TK 334 có thể có số dư Nợ, phản ánh số đã trả lớn hơn số phải trả (TT99 TK 334, mục 2).

## Bút toán theo TT99

Các bút toán dưới đây theo TT99 Phụ lục II, TK 334 (mục 3) và TK 338 (mục 3.2).

**Ghi nhận lương, phụ cấp phải trả** (334 mục 3a):

`Nợ TK 622, 623, 627, 641, 642, 241 / Có TK 334`

**Tiền thưởng** (mục 3b): nếu tính vào chi phí thì `Nợ TK 622, 623, 627, 641, 642, 241 / Có TK 334`; nếu chi từ quỹ khen thưởng thì `Nợ TK 353 (3531) / Có TK 334`.

**Các khoản khác phải trả người lao động** như tiền ăn ca, tiền nhà, điện thoại, học phí, thẻ hội viên (mục 3k): `Nợ TK 622, 623, 627, 641, 642 / Có TK 334`.

**Trích BHXH, BHYT, BHTN, KPCĐ** (338 mục 3.2), một bút toán gộp cả phần doanh nghiệp chịu và phần trừ vào lương:

`Nợ TK 622, 623, 627, 641, 642 (phần tính vào chi phí), Nợ TK 334 (phần trừ lương) / Có TK 338 (3382, 3383, 3384, 3386)`

**Khấu trừ khác vào lương** (334 mục 3đ, 3e): tạm ứng chưa chi hết, bồi thường tài sản thiếu `Nợ TK 334 / Có TK 141, 138, 338`; thuế TNCN `Nợ TK 334 / Có TK 333 (3335)`.

**Chi trả** (334 mục 3g, 3h): `Nợ TK 334 / Có TK 111, 112`. Trả lương, thưởng bằng sản phẩm, hàng hóa (mục 3i): `Nợ TK 334 / Có TK 511, Có TK 3331 (33311)`.

**Nộp bảo hiểm, KPCĐ** (338 mục 3.2): `Nợ TK 338 (3382, 3383, 3384, 3386) / Có TK 111, 112`. Chi KPCĐ tại đơn vị: `Nợ TK 338 (3382) / Có TK 111, 112`.

**BHXH trả thay lương** khi người lao động ốm đau, thai sản, tai nạn (334 mục 3c; 338 mục 3.2): `Nợ TK 338 (3383) / Có TK 334`. Theo kết cấu TK 338, số BHXH đã chi trả người lao động khi được cơ quan BHXH thanh toán ghi bên Có 338; trong khi chưa được thanh toán, TK 338 có thể có số dư Nợ.

**Lương nghỉ phép**: nếu không trích trước thì khi phát sinh `Nợ TK 622, 623, 627, 641, 642, 241 / Có TK 334`; nếu trích trước thì `Nợ TK 335 / Có TK 334` (334 mục 3d). Bút toán trích trước nằm ở [[kt-30-ccdc-tra-truoc-trich-truoc]].

## Tỷ lệ trích theo lương tại năm 2026

### Bảo hiểm bắt buộc

Luật Bảo hiểm xã hội số 41/2024/QH15 có hiệu lực từ 01/7/2025. Tỷ lệ trên tiền lương làm căn cứ đóng, áp dụng cho người lao động Việt Nam làm việc theo hợp đồng lao động:

| Khoản | Người sử dụng lao động | Người lao động | Căn cứ đã đọc |
|---|---|---|---|
| BHXH – quỹ hưu trí, tử tuất | 14% | 8% | Luật BHXH 2024, Điều 34 khoản 1 (NSDLĐ), Điều 33 khoản 1 điểm a (NLĐ) |
| BHXH – quỹ ốm đau, thai sản | 3% | 0% | Luật BHXH 2024, Điều 34 khoản 1 |
| BHXH – quỹ tai nạn lao động, bệnh nghề nghiệp | 0,5% | 0% | Nghị định 58/2020/NĐ-CP; EY Việt Nam (06/2025); LuatVietnam (2026) |
| BHYT | 3% | 1,5% | Nghị định 188/2025/NĐ-CP: 4,5% tiền lương tháng, NSDLĐ 2/3, NLĐ 1/3; EY Việt Nam (06/2025) |
| BHTN | 1% | 1% | Luật Việc làm 2025, Điều 33 khoản 1 (tối đa 1% mỗi bên); Nghị định 374/2025/NĐ-CP (hiệu lực 01/01/2026) |
| **Cộng bảo hiểm** | **21,5%** | **10,5%** | |
| KPCĐ | 2% quỹ tiền lương làm căn cứ đóng BHXH bắt buộc | — | Luật Công đoàn 2024, Điều 29 khoản 1 điểm b (văn bản hợp nhất 2025) |

Luật Việc làm 2025 (hiệu lực 01/01/2026) chỉ đặt mức BHTN "tối đa" 1%; Nghị định 374/2025/NĐ-CP chốt người lao động đóng 1% tiền lương tháng, người sử dụng lao động đóng 1% quỹ tiền lương tháng của người đang tham gia BHTN. BHYT theo Nghị định 188/2025/NĐ-CP giữ 4,5% tiền lương tháng làm căn cứ đóng, chia 2/3 cho người sử dụng lao động và 1/3 cho người lao động.

> ⚠️ Cần xác nhận: quỹ tai nạn lao động, bệnh nghề nghiệp 0,5% theo Nghị định 58/2020/NĐ-CP; doanh nghiệp đủ điều kiện có thể được chấp thuận đóng 0,3%. Tháng 5/2026 Bộ Nội vụ đề xuất nghị định áp dụng 0,3% cho mọi doanh nghiệp đến hết 31/12/2027; đến thời điểm soát bài chưa tìm thấy văn bản đã ban hành. Kiểm tra lại trước khi cấu hình tỷ lệ.

Một số điểm ảnh hưởng tới cấu hình:

- **Tiền lương làm căn cứ đóng** gồm mức lương theo công việc hoặc chức danh, phụ cấp lương và các khoản bổ sung khác được thỏa thuận trả thường xuyên, ổn định trong mỗi kỳ trả lương (EY dẫn Luật BHXH 2024, Điều 31 khoản 1 điểm b). Đây không phải tổng thu nhập, nên HRM phải tách riêng cơ sở đóng bảo hiểm cho từng người.
- **Mức trần**: tiền lương tối đa đóng BHXH, BHYT là 20 lần mức tham chiếu; khi chưa bãi bỏ lương cơ sở thì mức tham chiếu bằng lương cơ sở. Tiền lương tối đa đóng BHTN là 20 lần lương tối thiểu vùng (EY, 06/2025).
- **Mức sàn**: không thấp hơn lương tối thiểu vùng tại thời điểm đóng đối với công việc giản đơn nhất trong điều kiện bình thường (LuatVietnam, 2026).
- **Lao động nước ngoài**: thuộc diện BHXH bắt buộc khi làm việc theo hợp đồng xác định thời hạn từ đủ 12 tháng, trừ một số trường hợp (EY); không thuộc diện BHTN (EY; LuatVietnam).
- **Thời hạn nộp**: phương thức đóng hằng tháng thì chậm nhất ngày cuối cùng của tháng tiếp theo (Luật BHXH 2024, Điều 34 khoản 4). KPCĐ đóng mỗi tháng một lần cùng thời điểm đóng BHXH bắt buộc, chậm nhất ngày cuối cùng của tháng tiếp theo, và được hạch toán vào chi phí sản xuất kinh doanh (Nghị định 105/2026/NĐ-CP, Điều 4, Điều 5, hiệu lực 16/5/2026).

Các mức áp dụng trong năm 2026: lương cơ sở 2.340.000 đ/tháng đến 30/6/2026 (trần BHXH, BHYT 46.800.000 đ) và 2.530.000 đ/tháng từ 01/7/2026 theo Nghị định 161/2026/NĐ-CP (trần 50.600.000 đ). Lương tối thiểu vùng từ 01/01/2026 theo Nghị định 293/2025/NĐ-CP: vùng I 5.310.000 đ, vùng II 4.730.000 đ, vùng III 4.140.000 đ, vùng IV 3.700.000 đ (trần BHTN vùng I là 106.200.000 đ). Mức tham chiếu đổi giữa năm, nên hệ thống phải để mức tham chiếu, lương tối thiểu theo vùng và các tỷ lệ là tham số có ngày hiệu lực, không viết cứng vào công thức.

### Thuế thu nhập cá nhân

Doanh nghiệp khấu trừ thuế TNCN của người lao động khi trả thu nhập và ghi `Nợ TK 334 / Có TK 3335`. Biểu thuế, giảm trừ gia cảnh và kê khai nằm ngoài phạm vi bài này. Với BA, điểm cần nắm là HRM phải xuất được số thuế đã khấu trừ theo từng người để kế toán đối chiếu số dư 3335 với tờ khai.

## Ví dụ giả định một nhân viên

Ví dụ giả định: nhân viên bán hàng, lương theo hợp đồng và phụ cấp thường xuyên tổng 20.000.000 đ/tháng (cũng là tiền lương làm căn cứ đóng, dưới mức trần). Thuế TNCN khấu trừ giả định 500.000 đ (không tính theo biểu thuế).

| Khoản | Doanh nghiệp chịu | Trừ vào lương |
|---|---|---|
| BHXH (17,5% / 8%) | 3.500.000 | 1.600.000 |
| BHYT (3% / 1,5%) | 600.000 | 300.000 |
| BHTN (1% / 1%) | 200.000 | 200.000 |
| KPCĐ (2%) | 400.000 | — |
| Cộng | 4.700.000 | 2.100.000 |

Bút toán:

1. Lương: `Nợ TK 641 / Có TK 334: 20.000.000`
2. Trích phần doanh nghiệp: `Nợ TK 641: 4.700.000 / Có TK 3383: 3.500.000, Có TK 3384: 600.000, Có TK 3386: 200.000, Có TK 3382: 400.000`
3. Trích phần người lao động: `Nợ TK 334: 2.100.000 / Có TK 3383: 1.600.000, Có TK 3384: 300.000, Có TK 3386: 200.000`
4. Thuế TNCN: `Nợ TK 334 / Có TK 3335: 500.000`
5. Chi lương thực lĩnh: `Nợ TK 334 / Có TK 112: 17.400.000`
6. Nộp bảo hiểm (cả hai phần) trước cuối tháng sau: `Nợ TK 3383: 5.100.000, Nợ TK 3384: 900.000, Nợ TK 3386: 400.000 / Có TK 112: 6.400.000`; nộp KPCĐ `Nợ TK 3382 / Có TK 112: 400.000`.

Chi phí nhân viên này trên báo cáo kết quả là 24.700.000 đ (lương cộng phần doanh nghiệp chịu), không phải 20.000.000 đ. Nếu cùng người này làm cho hai bộ phận, cả lương và phần trích đều phải chia theo cùng tỷ lệ.

## Dữ liệu HRM phải chuyển sang kế toán

Từ các bút toán trên, bút toán lương cần tối thiểu các chiều dữ liệu sau:

- **Bộ phận chịu chi phí của từng người**, map sang tài khoản 622, 623, 627, 641, 642 hoặc 241 và trung tâm chi phí. Người làm cho công trình XDCB thì lương vào 241, thuộc nguyên giá tài sản ([[kt-29-vong-doi-tscd]]). Công nhân trực tiếp vào 622, thuộc giá thành ([[kt-27-chi-phi-san-xuat]]). Chiều phân tích xem [[kt-33-trung-tam-chi-phi]].
- **Tách theo loại thu nhập**: lương và phụ cấp, thưởng (chi phí hay quỹ 353), các khoản khác như ăn ca, BHXH trả thay lương (338 chứ không phải chi phí).
- **Tách theo loại khấu trừ**: từng loại bảo hiểm (3383, 3384, 3386), thuế TNCN (3335), tạm ứng (141), bồi thường (138).
- **Cơ sở đóng bảo hiểm** của từng người, khác tổng thu nhập.

Hai cách tích hợp thường gặp: HRM đẩy một bút toán tổng hợp theo bộ phận (giống mẫu 08-LĐTL), hoặc đẩy chi tiết từng nhân viên. Lựa chọn ảnh hưởng tới việc theo dõi công nợ 334 theo từng người: TT99 hướng dẫn chỉ tiêu "Phải trả người lao động" (mã số 315) lấy số dư Có chi tiết TK 334, và 334 có thể dư Nợ khi trả thừa, nên nếu chỉ có số tổng thì không tách được người còn được trả và người đã nhận thừa. Tạm ứng nhân viên trừ vào lương liên quan [[kt-15-tam-ung-dat-coc-can-tru]].

## Ảnh hưởng tới báo cáo

- **Báo cáo tình hình tài chính**: lương còn phải trả ở mã số 315 (số dư Có chi tiết 334); bảo hiểm, KPCĐ đã trích chưa nộp thuộc "Phải trả ngắn hạn khác" (mã số 320, số dư Có chi tiết 338, TT99 nêu ví dụ khoản phải nộp cơ quan BHXH, KPCĐ); thuế TNCN chưa nộp nằm trong thuế và các khoản phải nộp Nhà nước. Trích trước lương nghỉ phép ở chi phí phải trả ngắn hạn (mã số 316). Xem [[kt-39-bao-cao-tinh-hinh-tai-chinh]].
- **Báo cáo kết quả hoạt động kinh doanh**: chi phí lương và các khoản trích nằm trong giá vốn (qua 622, 627 vào giá thành), chi phí bán hàng, chi phí quản lý tùy bộ phận.
- **Báo cáo lưu chuyển tiền tệ**: tiền chi trả cho người lao động là chỉ tiêu mã số 03 của hoạt động kinh doanh (mẫu B03-DN trong TT99), xem [[kt-41-luu-chuyen-tien-te]].

Lương, bảo hiểm phải trích và nộp đủ trước khi khóa sổ tháng; đối chiếu số dư 3383, 3384, 3386 với thông báo của cơ quan BHXH là một mục trong [[kt-36-quy-trinh-khoa-so]].

## Nguồn

- Thông tư 99/2025/TT-BTC, Phụ lục I: danh mục chứng từ nhóm I. Lao động tiền lương (01-LĐTL đến 08-LĐTL) và hướng dẫn mẫu 01-LĐTL. Phụ lục II: danh mục tài khoản (334, 335, 338, 3335); TK 334 (mục 1, 2, 3); TK 338 (mục 1, 2, 3.2). Phụ lục IV: hướng dẫn mã số 315, 316, 320; mẫu B03-DN mã số 03. Bản toàn văn dạng Word: https://chedo.ketoanthue.net/tai-ve/thong-tu-99-2025-tt-btc-che-do-ke-toan-doanh-nghiep.docx; danh mục tài khoản: https://docs.google.com/document/d/14NeM16EEKMINCoSraTafe0w_iySTX1Ub/export?format=pdf
- Kế toán Lê Ánh, trích Phụ lục II TT99 cho TK 334, 338 (dùng để đối chiếu): https://ketoanleanh.edu.vn/kinh-nghiem-ke-toan/tai-khoan-334-phai-tra-nguoi-lao-dong-theo-thong-tu-99-2025-tt-btc.html, https://ketoanleanh.edu.vn/kinh-nghiem-ke-toan/tai-khoan-338-phai-tra-phai-nop-khac-theo-thong-tu-99-2025-tt-btc.html
- Luật Bảo hiểm xã hội số 41/2024/QH15, Điều 33 khoản 1 điểm a, Điều 34 khoản 1 và khoản 4: https://hethongphapluat.com/luat-bao-hiem-xa-hoi-2024/dieu-33, https://hethongphapluat.com/luat-bao-hiem-xa-hoi-2024/dieu-34
- EY Việt Nam, "Một số điểm lưu ý liên quan vấn đề đóng Bảo hiểm bắt buộc kể từ ngày 1 tháng 7 năm 2025" (Tin nhanh Tư vấn Thuế & Nhân sự, 06/2025), mục 1–3: https://www.ey.com/content/dam/ey-unified-site/ey-com/vi-vn/technical/tax/documents/people-advisory-services-tax-alert-june-2025-notable-points-regarding-the-mandatory-social-security-from-1-july-2025-vn.pdf
- Luật Việc làm số 74/2025/QH15, Điều 33 khoản 1: https://hethongphapluat.com/luat-viec-lam-2025/dieu-33
- LuatVietnam, "Từ 2026, mức đóng BHXH, BHYT, BHTN của NLĐ và NSDLĐ được tính như thế nào?" (đối chiếu tỷ lệ 2026): https://luatvietnam.vn/bao-hiem/tu-2026-muc-dong-bhxh-bhyt-bhtn-cua-nld-va-nsdld-duoc-tinh-nhu-the-nao-563-106906-article.html
- Nghị định 374/2025/NĐ-CP về bảo hiểm thất nghiệp, mức đóng (tóm tắt của UBND tỉnh Hà Tĩnh, 01/2026): https://hatinh.gov.vn/vi/bai-viet/quy-dinh-moi-ve-muc-dong-va-huong-bao-hiem-that-nghiep
- Nghị định 188/2025/NĐ-CP hướng dẫn Luật Bảo hiểm y tế, hiệu lực 15/8/2025 (Thời báo Tài chính Việt Nam, "Mức đóng bảo hiểm y tế vẫn bằng 4,5% lương cơ sở"): https://thoibaotaichinhvietnam.vn/muc-dong-bao-hiem-y-te-van-bang-45-luong-co-so-179879.html
- Nghị định 58/2020/NĐ-CP về mức đóng quỹ bảo hiểm tai nạn lao động, bệnh nghề nghiệp: https://caselaw.vn/van-ban-phap-luat/347686-nghi-dinh-so-58-2020-nd-cp-ngay-27-05-2020-cua-chinh-phu-quy-dinh-ve-muc-dong-bao-hiem-xa-hoi-bat-buoc-vao-quy-bao-hiem-tai-nan-lao-dong-benh-nghe-nghiep; RSM Việt Nam: https://www.rsm.global/vietnam/sites/default/files/media/news/newsbriefs/rsm-tax-newsbrief_decree-58-2020_vn.pdf; Tạp chí Luật sư Việt Nam, đề xuất giảm xuống 0,3% (05/2026): https://lsvn.vn/muc-dong-bao-hiem-tai-nan-lao-dong-benh-nghe-nghiep-co-the-giam-xuong-0-3-a172407.html
- Nghị định 161/2026/NĐ-CP về lương cơ sở (tin UBND tỉnh Hà Tĩnh): https://hatinh.gov.vn/vi/bai-viet/tang-luong-co-so-tu-0172026
- Nghị định 293/2025/NĐ-CP về lương tối thiểu vùng từ 01/01/2026 (LuatVietnam): https://luatvietnam.vn/lao-dong-tien-luong/muc-luong-toi-thieu-vung-cua-34-tinh-thanh-tu-01-01-2026-562-103349-article.html
- Luật Công đoàn số 50/2024/QH15, Điều 29 khoản 1 điểm b (Văn bản hợp nhất số 90/VBHN-VPQH, Công báo số 1247+1248 ngày 06/9/2025, đã cập nhật Luật số 97/2025/QH15): https://vnuf.edu.vn/wp-content/uploads/2025/10/VBHN_90-VBHN-VPQH.pdf
- Nghị định 105/2026/NĐ-CP hướng dẫn Luật Công đoàn về tài chính công đoàn, Điều 4, 5, 6: https://hethongphapluat.com/nghi-dinh-105-2026-nd-cp-huong-dan-luat-cong-doan-ve-tai-chinh-cong-doan/chuong-2
