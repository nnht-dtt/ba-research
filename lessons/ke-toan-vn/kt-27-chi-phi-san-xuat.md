# Luồng chi phí sản xuất: từ lệnh sản xuất đến thành phẩm

Bài này giúp BA theo được dòng chi phí trong doanh nghiệp sản xuất theo TT99: nguyên vật liệu, nhân công, chi phí sản xuất chung tập hợp ở đâu, khi nào kết chuyển vào TK 154, phần nào bị đẩy thẳng vào giá vốn, và thành phẩm nhập kho với giá nào. Cách chọn phương pháp tính giá thành để ở [[kt-28-gia-thanh]].

## Ba khoản mục chi phí sản xuất

TT99 (Phụ lục II, TK 154 mục 1d) xác định chi phí phản ánh trên TK 154 gồm chi phí nguyên liệu, vật liệu trực tiếp; nhân công trực tiếp; sử dụng máy thi công (chỉ với xây lắp); và sản xuất chung. Mỗi khoản mục có tài khoản tập hợp riêng trong kỳ:

| Tài khoản | Tập hợp gì | Ví dụ chứng từ nguồn (Phụ lục I TT99) |
|---|---|---|
| 621 – Chi phí nguyên liệu, vật liệu trực tiếp | Nguyên liệu chính, vật liệu phụ dùng trực tiếp để sản xuất sản phẩm, thực hiện dịch vụ, theo giá thực tế khi xuất | Phiếu xuất kho (02-VT), Bảng phân bổ nguyên liệu, vật liệu, công cụ, dụng cụ (07-VT) |
| 622 – Chi phí nhân công trực tiếp | Tiền lương, tiền công, phụ cấp, các khoản trích theo lương của người lao động trực tiếp sản xuất, kể cả lao động thuê ngoài | Bảng thanh toán tiền lương (01-LĐTL), Bảng phân bổ tiền lương và các khoản trích theo lương (08-LĐTL) |
| 627 – Chi phí sản xuất chung | Chi phí phục vụ chung ở phân xưởng: lương quản lý phân xưởng, khấu hao TSCĐ dùng cho sản xuất, vật liệu, công cụ dùng chung, dịch vụ mua ngoài | Bảng tính và phân bổ khấu hao TSCĐ (06-TSCĐ), hoá đơn dịch vụ |

Cả ba tài khoản không có số dư cuối kỳ: cuối kỳ phải kết chuyển hết sang TK 154 hoặc TK 632 (TT99, TK 621, 622, 627 mục 2).

**TK 627 có bảy tài khoản cấp 2**: 6271 chi phí nhân viên phân xưởng, 6272 vật liệu, 6273 dụng cụ sản xuất, 6274 khấu hao TSCĐ, 6275 thuế, phí, lệ phí, 6277 dịch vụ mua ngoài, 6278 chi phí bằng tiền khác. Ngoài ra TK 627 phải được hạch toán chi tiết theo hai loại: **chi phí sản xuất chung cố định** và **chi phí sản xuất chung biến đổi** (TK 627 mục 1đ), và chi tiết theo từng phân xưởng, bộ phận, tổ, đội (mục 1d). Đây là yêu cầu cấu trúc dữ liệu, vì cách phân bổ hai loại vào giá thành khác nhau.

> 📌 TK 627 chỉ dùng ở doanh nghiệp sản xuất công nghiệp, nông, lâm, ngư nghiệp, XDCB, giao thông, bưu điện, du lịch, dịch vụ; không dùng cho kinh doanh thương mại (TK 627 mục 1c, 1h).

**Không hạch toán vào TK 154** (TK 154 mục 1e): chi phí bán hàng, chi phí quản lý doanh nghiệp, chi phí tài chính, chi phí khác, chi phí thuế TNDN, chi đầu tư XDCB, các khoản chi được trang trải bằng nguồn khác. Lương nhân viên quản lý phân xưởng đi vào 627, lương nhân viên quản lý doanh nghiệp, bán hàng thì không được ghi vào 622 (TK 622 mục 1b).

## Luồng bút toán từng bước

<step-flow>
<svg viewBox="0 0 680 300" role="img" aria-labelledby="kt27s-t" style="width:100%;max-width:680px;height:auto;display:block;margin:1.25rem auto" font-family="ui-sans-serif, system-ui, sans-serif">
<title id="kt27s-t">Dòng chi phí sản xuất từ kho nguyên liệu đến giá vốn</title>
<defs>
<marker id="kt27s-arrow" markerWidth="9" markerHeight="9" refX="8" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 z" fill="currentColor"/></marker>
</defs>
<g data-step="1">
<rect x="10" y="20" width="130" height="50" rx="10" fill="#3b82f6" fill-opacity="0.13" stroke="currentColor" stroke-opacity="0.22"/>
<text x="75" y="50" font-size="14" text-anchor="middle" fill="currentColor">152 NVL</text>
<line x1="140" y1="45" x2="195" y2="45" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" marker-end="url(#kt27s-arrow)"/>
<rect x="200" y="20" width="130" height="50" rx="10" fill="#f59e0b" fill-opacity="0.14" stroke="currentColor" stroke-opacity="0.22"/>
<text x="265" y="50" font-size="14" text-anchor="middle" fill="currentColor">621</text>
</g>
<g data-step="2">
<rect x="10" y="100" width="130" height="50" rx="10" fill="#3b82f6" fill-opacity="0.13" stroke="currentColor" stroke-opacity="0.22"/>
<text x="75" y="130" font-size="14" text-anchor="middle" fill="currentColor">334, 338</text>
<line x1="140" y1="125" x2="195" y2="125" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" marker-end="url(#kt27s-arrow)"/>
<rect x="200" y="100" width="130" height="50" rx="10" fill="#f59e0b" fill-opacity="0.14" stroke="currentColor" stroke-opacity="0.22"/>
<text x="265" y="130" font-size="14" text-anchor="middle" fill="currentColor">622</text>
</g>
<g data-step="3">
<rect x="10" y="180" width="130" height="50" rx="10" fill="#3b82f6" fill-opacity="0.13" stroke="currentColor" stroke-opacity="0.22"/>
<text x="75" y="203" font-size="13" text-anchor="middle" fill="currentColor">214, 153, 242,</text>
<text x="75" y="221" font-size="13" text-anchor="middle" fill="currentColor">331, 334...</text>
<line x1="140" y1="205" x2="195" y2="205" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" marker-end="url(#kt27s-arrow)"/>
<rect x="200" y="180" width="130" height="50" rx="10" fill="#f59e0b" fill-opacity="0.14" stroke="currentColor" stroke-opacity="0.22"/>
<text x="265" y="210" font-size="14" text-anchor="middle" fill="currentColor">627</text>
</g>
<g data-step="4">
<line x1="330" y1="45" x2="395" y2="110" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" marker-end="url(#kt27s-arrow)"/>
<line x1="330" y1="125" x2="395" y2="125" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" marker-end="url(#kt27s-arrow)"/>
<line x1="330" y1="205" x2="395" y2="140" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" marker-end="url(#kt27s-arrow)"/>
<rect x="400" y="100" width="120" height="50" rx="10" fill="#8b5cf6" fill-opacity="0.14" stroke="currentColor" stroke-opacity="0.22"/>
<text x="460" y="130" font-size="14" text-anchor="middle" fill="currentColor">154</text>
<rect x="400" y="240" width="120" height="44" rx="10" fill="#f43f5e" fill-opacity="0.12" stroke="currentColor" stroke-opacity="0.22"/>
<text x="460" y="267" font-size="14" text-anchor="middle" fill="currentColor">632</text>
<line x1="330" y1="215" x2="398" y2="255" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" stroke-dasharray="5 4" marker-end="url(#kt27s-arrow)"/>
</g>
<g data-step="5">
<line x1="520" y1="125" x2="565" y2="125" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" marker-end="url(#kt27s-arrow)"/>
<rect x="570" y="100" width="100" height="50" rx="10" fill="#10b981" fill-opacity="0.16" stroke="currentColor" stroke-opacity="0.22"/>
<text x="620" y="130" font-size="14" text-anchor="middle" fill="currentColor">155</text>
</g>
<g data-step="6">
<line x1="620" y1="150" x2="530" y2="255" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" marker-end="url(#kt27s-arrow)"/>
</g>
</svg>
<step-note data-step="1">Xuất nguyên liệu cho lệnh sản xuất: <code>Nợ TK 621 / Có TK 152</code>.</step-note>
<step-note data-step="2">Lương và các khoản trích của công nhân trực tiếp: <code>Nợ TK 622 / Có TK 334, 338</code>.</step-note>
<step-note data-step="3">Chi phí chung ở phân xưởng phát sinh trong kỳ: <code>Nợ TK 627 / Có TK 214, 152, 153, 242, 331, 334, 338...</code></step-note>
<step-note data-step="4">Cuối kỳ kết chuyển vào 154; phần vượt mức bình thường và sản xuất chung cố định không phân bổ (đường nét đứt) vào thẳng 632.</step-note>
<step-note data-step="5">Thành phẩm hoàn thành nhập kho theo giá thành thực tế: <code>Nợ TK 155 / Có TK 154</code>.</step-note>
<step-note data-step="6">Khi bán: <code>Nợ TK 632 / Có TK 155</code>.</step-note>
</step-flow>

### Bước 1: Nguyên vật liệu trực tiếp (TK 621)

TT99 (TK 621 mục 3):

- Xuất kho dùng cho sản xuất: `Nợ TK 621 / Có TK 152`.
- Mua dùng ngay không qua kho: `Nợ TK 621, Nợ TK 1331 / Có TK 111, 112, 141, 331`.
- Cuối kỳ dùng không hết, nhập lại kho: `Nợ TK 152 / Có TK 621`.

Nguyên vật liệu được ghi Nợ 621 theo từng đối tượng sử dụng nếu xác định được ngay khi xuất; nếu không, tập hợp chung rồi phân bổ cuối kỳ theo tiêu thức phù hợp (TK 621 mục 1c, 1d). Với hệ thống, điều này nghĩa là phiếu xuất cho sản xuất nên mang mã lệnh sản xuất hoặc mã sản phẩm, nếu không kế toán sẽ phải phân bổ lại.

Nguyên liệu xuất cho mục đích khác thì không vào 621: vật liệu dùng chung cho phân xưởng vào 6272; cho bán hàng, quản lý vào 641, 642 (TK 152 mục 3.9).

### Bước 2: Nhân công trực tiếp (TK 622)

TT99 (TK 622 mục 3):

- Lương, tiền công, phụ cấp phải trả công nhân trực tiếp: `Nợ TK 622 / Có TK 334`.
- Trích BHXH, BHYT, KPCĐ, BHTN phần doanh nghiệp chịu: `Nợ TK 622 / Có TK 338`.
- Trích trước tiền lương nghỉ phép của công nhân sản xuất: `Nợ TK 622 / Có TK 335`.

TK 622 phải mở chi tiết theo đối tượng tập hợp chi phí sản xuất (mục 1d). Dữ liệu này đến từ bảng phân bổ tiền lương, nên thiết kế tích hợp với hệ thống nhân sự cần trả về chi phí lương theo phân xưởng, sản phẩm hoặc lệnh sản xuất, chứ không chỉ theo phòng ban. Điểm nối HRM – kế toán được bàn ở [[kt-31-tien-luong]].

### Bước 3: Sản xuất chung (TK 627)

TT99 (TK 627 mục 3), một số bút toán thường gặp:

- Lương nhân viên phân xưởng: `Nợ TK 6271 / Có TK 334`; các khoản trích: `Nợ TK 6271 / Có TK 338`.
- Vật liệu dùng chung cho phân xưởng: `Nợ TK 6272 / Có TK 152`.
- Công cụ giá trị nhỏ: `Nợ TK 6273 / Có TK 153`; công cụ giá trị lớn phân bổ dần: xuất `Nợ TK 242 / Có TK 153`, định kỳ `Nợ TK 6273 / Có TK 242` (xem [[kt-30-ccdc-tra-truoc-trich-truoc]]).
- Khấu hao máy móc, nhà xưởng: `Nợ TK 6274 / Có TK 214` (xem [[kt-29-vong-doi-tscd]]).
- Thuế, phí, lệ phí liên quan phân xưởng (tiền thuê đất, thuế tài nguyên...): `Nợ TK 6275 / Có TK 333`.
- Điện, nước, dịch vụ mua ngoài: `Nợ TK 6277, 6278, Nợ TK 1331 / Có TK 111, 112, 331`.
- Sửa chữa, bảo dưỡng định kỳ TSCĐ phân xưởng: tập hợp ở `TK 2413`, hoàn thành chuyển `Nợ TK 242 / Có TK 2413`, rồi phân bổ dần `Nợ TK 627 / Có TK 242`.
- Khoản ghi giảm chi phí sản xuất chung: `Nợ TK 111, 112, 138 / Có TK 627`.

### Bước 4: Kết chuyển cuối kỳ vào TK 154

TT99 (TK 154 mục 6a–6d; TK 621, 622, 627 mục 3):

- `Nợ TK 154`, `Nợ TK 632` (phần nguyên vật liệu trên mức bình thường) / `Có TK 621`.
- `Nợ TK 154`, `Nợ TK 632` (phần nhân công trên mức bình thường) / `Có TK 622`.
- Sản lượng thực tế bằng hoặc cao hơn công suất bình thường: `Nợ TK 154 / Có TK 627` toàn bộ.
- Sản lượng thực tế thấp hơn công suất bình thường: `Nợ TK 154`, `Nợ TK 632` (phần sản xuất chung cố định không phân bổ) / `Có TK 627`.

Đây là cách TT99 thực hiện quy định của VAS 02 (đoạn 08, 11a): chi phí trên mức bình thường và sản xuất chung cố định không phân bổ không được tính vào giá gốc hàng tồn kho mà ghi vào chi phí trong kỳ. TT99 (TK 632 mục 1đ) nhấn mạnh các khoản này phải tính ngay vào giá vốn **kể cả khi sản phẩm chưa được xác định là tiêu thụ**. Cách tính phần không phân bổ có ví dụ ở [[kt-28-gia-thanh]].

> ⚠️ Cần xác nhận với khách hàng: "mức bình thường" của nguyên vật liệu, nhân công (định mức tiêu hao) và "công suất bình thường" của từng phân xưởng. VAS 02 chỉ định nghĩa công suất bình thường là số lượng sản phẩm đạt được ở mức trung bình trong điều kiện sản xuất bình thường; con số cụ thể là dữ liệu của doanh nghiệp, phải có trong hệ thống trước kỳ khoá sổ đầu tiên.

Các điều chỉnh khác trên TK 154 (mục 6đ–6g):

- Chiết khấu thương mại, giảm giá nhận được sau khi đã xuất nguyên vật liệu vào sản xuất dở dang: `Nợ TK 111, 112, 331 / Có TK 154, Có TK 1331`.
- Sản phẩm hỏng không sửa chữa được, người gây thiệt hại phải bồi thường: `Nợ TK 1388, Nợ TK 334 / Có TK 154`.
- Phế liệu thu hồi, giá trị sản phẩm hỏng không sửa chữa được ghi giảm TK 154 (bên Có TK 154, mục 5).

### Bước 5 và 6: Thành phẩm và giá vốn

TT99 (TK 154 mục 6h–6k; TK 155 mục 3):

- Thành phẩm nhập kho theo giá thành thực tế: `Nợ TK 155 / Có TK 154`. Chứng từ: phiếu nhập kho (01-VT).
- Sản xuất xong chuyển thẳng cho người mua không qua kho (ví dụ điện, nước): `Nợ TK 632 / Có TK 154`.
- Dùng ngay cho tiêu dùng nội bộ hoặc XDCB không qua kho: `Nợ TK 241, 641, 642 / Có TK 154`. VAS 02 (đoạn 26) cũng quy định hàng tồn kho dùng để sản xuất TSCĐ thì giá gốc được hạch toán vào giá trị TSCĐ.
- Bán thành phẩm: `Nợ TK 632 / Có TK 155`; gửi đi bán: `Nợ TK 157 / Có TK 155` (xem [[kt-25-kho-thue-ngoai-kho-san]]).

TK 154 có số dư Nợ cuối kỳ là chi phí sản xuất còn dở dang. Giá thành thành phẩm nhập kho trong kỳ được tính theo công thức trên Thẻ tính giá thành sản phẩm, dịch vụ (mẫu S37-DN, Phụ lục III TT99):

```
Giá thành sản phẩm = Chi phí SXKD dở dang đầu kỳ + Chi phí SXKD phát sinh trong kỳ − Chi phí SXKD dở dang cuối kỳ
```

Chi phí dở dang cuối kỳ lấy từ biên bản kiểm kê và đánh giá sản phẩm dở dang. Sổ chi phí sản xuất, kinh doanh (S36-DN) mở theo từng đối tượng tập hợp chi phí: phân xưởng, bộ phận, sản phẩm, nhóm sản phẩm hoặc nội dung chi phí.

## Ví dụ giả định một tháng

Phân xưởng sản xuất một loại sản phẩm, không có dở dang đầu kỳ. Sản lượng thực tế đạt công suất bình thường.

| Nghiệp vụ | Bút toán | Số tiền |
|---|---|---|
| Xuất nguyên liệu cho sản xuất | Nợ 621 / Có 152 | 300.000.000 |
| Nhập lại nguyên liệu thừa cuối tháng | Nợ 152 / Có 621 | 10.000.000 |
| Lương công nhân trực tiếp | Nợ 622 / Có 334 | 80.000.000 |
| Trích theo lương công nhân trực tiếp | Nợ 622 / Có 338 | (theo tỷ lệ quy định) |
| Khấu hao máy, nhà xưởng | Nợ 6274 / Có 214 | 40.000.000 |
| Điện sản xuất | Nợ 6277, 1331 / Có 331 | 25.000.000 (chưa thuế) |
| Kết chuyển 621, 622, 627 | Nợ 154 / Có 621, 622, 627 | tổng phát sinh ròng |
| Nhập kho thành phẩm | Nợ 155 / Có 154 | giá thành theo S37 |

Nếu cuối tháng còn sản phẩm dở dang, phần chi phí tương ứng ở lại số dư TK 154 và giá trị nhập kho 155 nhỏ hơn tổng đã kết chuyển.

## Điểm chạm hệ thống

Odoo 19 Manufacturing ghi nhận theo từng lệnh sản xuất (MO) thay vì tập hợp theo kỳ qua 621, 622, 627:

- **Nguyên liệu**: khi MO tiêu hao, nguyên liệu chuyển từ kho tới địa điểm Production và giá trị bị trừ theo phương pháp tính giá của chính nguyên liệu đó.
- **Thành phẩm**: chuyển từ Production vào kho với giá trị bằng nguyên liệu đã tiêu hao cộng chi phí lao động của work center và nhân viên. Tài liệu ví dụ: nguyên liệu 78, 180 và 20, lao động 200, thành phẩm vào kho giá trị 478.
- **Chi phí work center**: đặt chi phí mỗi giờ cho work center và cho mỗi nhân viên; chi phí ước tính (MO cost) dùng đơn giá của work center, chi phí thực tế (real cost) dùng đơn giá giờ của từng nhân viên.
- **Cost of Production**: tài khoản đặt trên địa điểm Production, làm đối ứng cho cả thành phẩm và nguyên liệu khi dùng Anglo-Saxon cùng Perpetual.
- **WIP**: với MO kéo dài, có thể ghi tay bút toán dở dang (WIP Account, WIP Overhead Account) theo chi phí thực tế đã phát sinh tại thời điểm ghi, và bút toán này phải được đảo lại.

So với TT99, cần lưu ý ba chỗ khi thiết kế:

1. Chi phí lao động trong Odoo là chi phí tính theo giờ và đơn giá, còn TK 622 của TT99 là lương thực tế phải trả và các khoản trích. Chênh lệch giữa hai số cần một cơ chế đối chiếu hoặc điều chỉnh cuối kỳ.
2. Chi phí sản xuất chung phát sinh trên hoá đơn, khấu hao (627) không tự động nằm trong giá trị thành phẩm của MO nếu không được đưa vào đơn giá work center.
3. TT99 yêu cầu tách phần vượt mức bình thường và sản xuất chung cố định không phân bổ sang 632. Phần này không có trong mô tả MO cost của tài liệu Odoo đã đọc, nên thường phải xử lý bằng bút toán cuối kỳ.

> ⚠️ Cần xác nhận: mức độ khách hàng cần bám sổ 621, 622, 627, 154 theo TT99 (ví dụ để lập Sổ chi phí SXKD S36-DN, Thẻ tính giá thành S37-DN), hay chấp nhận giá thành theo lệnh sản xuất của hệ thống kèm bút toán điều chỉnh cuối kỳ. Quyết định này ảnh hưởng thiết kế tài khoản, địa điểm Production và quy trình khoá sổ.

## Ảnh hưởng lên báo cáo

- **Báo cáo tình hình tài chính**: số dư TK 154 (dở dang) và TK 155 (thành phẩm) nằm trong Hàng tồn kho mã số 141; dở dang có thời gian thu hồi trên 12 tháng tách sang mã số 251 (TT99 Phụ lục IV).
- **Báo cáo kết quả kinh doanh**: giá vốn hàng bán gồm giá thành sản phẩm đã bán, cộng phần vượt mức bình thường và sản xuất chung cố định không phân bổ (VAS 02 đoạn 29; TT99 TK 632).
- **Thuyết minh**: Phụ lục IV TT99 có mục "Chi phí sản xuất, kinh doanh theo yếu tố", và nguyên tắc kế toán các khoản chi phí ở Phụ lục II (điểm 4) yêu cầu theo dõi chi tiết chi phí theo yếu tố như tiền lương, nguyên vật liệu, chi phí mua ngoài, khấu hao TSCĐ. Các tài khoản cấp 2 của 627 cùng 621, 622 là nguồn số liệu chính cho mục này. Xem [[kt-42-thuyet-minh-bctc]].

## Nguồn

- Chuẩn mực kế toán Việt Nam số 02 – Hàng tồn kho (Quyết định 149/2001/QĐ-BTC), đoạn 07, 08, 11, 26, 29. Bản toàn văn: https://cdn.thuvienphapluat.vn//uploads/Hoidapphapluat/2024/TTTT/240912/vas2.doc
- Thông tư 99/2025/TT-BTC, Phụ lục I (chứng từ 01-VT, 02-VT, 07-VT, 01-LĐTL, 08-LĐTL, 06-TSCĐ); Phụ lục II: nguyên tắc kế toán các khoản chi phí (điểm 4), TK 152 (mục 3.9), TK 154 (mục 1d, 1e, 5, 6), TK 155 (mục 3), TK 621, TK 622, TK 627, TK 632 (mục 1đ); Phụ lục III: Sổ chi phí sản xuất, kinh doanh (S36-DN), Thẻ tính giá thành sản phẩm, dịch vụ (S37-DN); Phụ lục IV: chỉ tiêu mã số 141, 251 và thuyết minh chi phí sản xuất, kinh doanh theo yếu tố. Bản toàn văn dạng Word: https://chedo.ketoanthue.net/tai-ve/thong-tu-99-2025-tt-btc-che-do-ke-toan-doanh-nghiep.docx
- Học viện Ngân hàng, Đề cương chi tiết học phần Kế toán tài chính 1 (ACT02A), 2019, Chương 3 "Kế toán CFSX và thành phẩm" (3.1 Các khái niệm cơ bản, 3.2 Kế toán chi phí sản xuất, 3.3 Kế toán giá thành và thành phẩm): https://hvnh.edu.vn/medias/acc/vi/05.2022/system/archivedate/795b99b6_25.%202019%20DCCT%20-%20KTTC%201%20ACT02A%20-%20ky.pdf
- Odoo 19 Documentation, Manufacturing order costs: https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/manufacturing/basic_setup/mo_costs.html
- Odoo 19 Documentation, Work-in-progress costs: https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/manufacturing/basic_setup/work_in_progress.html
- Odoo 19 Documentation, Valuation of stock movements and inventory operations (mục Finished goods, Component consumption): https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/inventory_valuation/operations_valuation.html
- Odoo 19 Documentation, Accounting – Inventory valuation (mục Cost of Production): https://www.odoo.com/documentation/19.0/applications/finance/accounting/get_started/inventory_valuation.html
