# Gia công: thuê ngoài gia công và nhận gia công

Bài này giúp BA nắm hai phía của một hợp đồng gia công: bên giao vật tư đi gia công ghi nhận chi phí và giá trị hàng nhận lại thế nào, bên nhận gia công theo dõi vật tư không thuộc sở hữu và ghi doanh thu ra sao, và TT99 còn tài khoản ngoài bảng để theo dõi hàng nhận gia công hay không.

## Hai vai trong một hợp đồng

<ab-toggle data-labels="Bên thuê ngoài gia công|Bên nhận gia công">
<svg viewBox="0 0 660 150" role="img" aria-label="Luồng tại bên thuê ngoài gia công" style="width:100%;max-width:660px;height:auto;display:block;margin:1rem auto" font-family="ui-sans-serif, system-ui, sans-serif">
<defs>
<marker id="kt26a-arrow" markerWidth="9" markerHeight="9" refX="8" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 z" fill="currentColor"/></marker>
</defs>
<rect x="10" y="30" width="180" height="60" rx="10" fill="#3b82f6" fill-opacity="0.13" stroke="currentColor" stroke-opacity="0.22"/>
<text x="100" y="56" font-size="13" text-anchor="middle" fill="currentColor">Xuất vật tư đi</text>
<text x="100" y="76" font-size="13" text-anchor="middle" fill="currentColor">Nợ 154 / Có 152, 156</text>
<line x1="190" y1="60" x2="235" y2="60" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" marker-end="url(#kt26a-arrow)"/>
<rect x="240" y="30" width="180" height="60" rx="10" fill="#f59e0b" fill-opacity="0.14" stroke="currentColor" stroke-opacity="0.22"/>
<text x="330" y="56" font-size="13" text-anchor="middle" fill="currentColor">Phí gia công, vận chuyển</text>
<text x="330" y="76" font-size="13" text-anchor="middle" fill="currentColor">Nợ 154, 1331 / Có 331</text>
<line x1="420" y1="60" x2="465" y2="60" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" marker-end="url(#kt26a-arrow)"/>
<rect x="470" y="30" width="180" height="60" rx="10" fill="#10b981" fill-opacity="0.16" stroke="currentColor" stroke-opacity="0.22"/>
<text x="560" y="56" font-size="13" text-anchor="middle" fill="currentColor">Nhận lại nhập kho</text>
<text x="560" y="76" font-size="13" text-anchor="middle" fill="currentColor">Nợ 152, 155, 156 / Có 154</text>
<text x="330" y="125" font-size="13" text-anchor="middle" fill="currentColor">Vật tư vẫn là hàng tồn kho của mình suốt quá trình</text>
</svg>
<svg viewBox="0 0 660 150" role="img" aria-label="Luồng tại bên nhận gia công" style="width:100%;max-width:660px;height:auto;display:block;margin:1rem auto" font-family="ui-sans-serif, system-ui, sans-serif">
<defs>
<marker id="kt26b-arrow" markerWidth="9" markerHeight="9" refX="8" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 z" fill="currentColor"/></marker>
</defs>
<rect x="10" y="30" width="180" height="60" rx="10" fill="#94a3b8" fill-opacity="0.16" stroke="currentColor" stroke-opacity="0.22"/>
<text x="100" y="56" font-size="13" text-anchor="middle" fill="currentColor">Nhận vật tư của khách</text>
<text x="100" y="76" font-size="13" text-anchor="middle" fill="currentColor">Sổ chi tiết, không ghi 15x</text>
<line x1="190" y1="60" x2="235" y2="60" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" marker-end="url(#kt26b-arrow)"/>
<rect x="240" y="30" width="180" height="60" rx="10" fill="#f59e0b" fill-opacity="0.14" stroke="currentColor" stroke-opacity="0.22"/>
<text x="330" y="56" font-size="13" text-anchor="middle" fill="currentColor">Chi phí của mình</text>
<text x="330" y="76" font-size="13" text-anchor="middle" fill="currentColor">621, 622, 627 → 154</text>
<line x1="420" y1="60" x2="465" y2="60" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" marker-end="url(#kt26b-arrow)"/>
<rect x="470" y="30" width="180" height="60" rx="10" fill="#10b981" fill-opacity="0.16" stroke="currentColor" stroke-opacity="0.22"/>
<text x="560" y="56" font-size="13" text-anchor="middle" fill="currentColor">Doanh thu = tiền công</text>
<text x="560" y="76" font-size="13" text-anchor="middle" fill="currentColor">Nợ 131 / Có 511, 33311</text>
<text x="330" y="125" font-size="13" text-anchor="middle" fill="currentColor">Vật tư của khách không bao giờ vào hàng tồn kho của mình</text>
</svg>
<ab-note>Bên giao gia công: tập hợp giá vật tư và mọi chi phí gia công trên TK 154, rồi kết chuyển ra giá trị hàng nhận lại.</ab-note>
<ab-note>Bên nhận gia công: chỉ ghi chi phí do mình bỏ ra và doanh thu tiền công; vật tư nhận về theo dõi ngoài hàng tồn kho.</ab-note>
</ab-toggle>

## Bên thuê ngoài gia công

### Vật tư đi gia công vẫn là hàng tồn kho

VAS 02 (đoạn 03) liệt kê hàng hóa, nguyên liệu, vật liệu, công cụ gửi đi gia công chế biến là hàng tồn kho. TT99 đưa giá trị này vào TK 154: bên Nợ TK 154 gồm "giá trị nguyên liệu, vật liệu xuất thuê ngoài gia công chế biến, chi phí vận chuyển vật liệu đến nơi chế biến, tiền thuê ngoài gia công chế biến"; bên Có gồm trị giá vật liệu, hàng hóa gia công xong nhập lại kho hoặc dùng ngay (TT99, TK 154 mục 5). TK 154 nằm trong chỉ tiêu Hàng tồn kho (mã số 141), nên trong suốt thời gian hàng ở bên gia công, giá trị vẫn ở trên Báo cáo tình hình tài chính của bên giao.

Doanh nghiệp không ghi doanh thu khi xuất vật tư giao cho bên ngoài gia công (TT99, TK 511 mục 1.5.15).

### Giá trị hàng nhận lại

TT99 định nghĩa giá gốc theo loại hàng nhận về:

- Nguyên liệu, vật liệu thuê ngoài gia công (TK 152 mục 1b): giá thực tế vật liệu xuất đi, chi phí vận chuyển đến nơi chế biến và từ nơi chế biến về, tiền thuê gia công.
- Sản phẩm thuê ngoài gia công (TK 155 mục 1đ): chi phí nguyên vật liệu trực tiếp, chi phí thuê gia công và chi phí khác liên quan trực tiếp đến quá trình gia công. Thành phẩm do thuê ngoài gia công xong, đã kiểm nghiệm và nhập kho vẫn là thành phẩm của doanh nghiệp (TK 155 mục 1a).
- Hàng hóa thuê ngoài gia công (TK 156): trị giá gồm giá mua vào và chi phí gia công. Nếu hàng mua về để bán nhưng phải gia công, sơ chế, tân trang, phân loại để tăng giá trị hoặc khả năng bán thì giá hàng mua gồm cả chi phí đó (TK 156 mục 1c).

### Bút toán

TT99 (TK 152 mục 3.7, TK 156 mục 3.10, TK 511 mục 3.10a, TK 155 mục 3.1):

1. Xuất vật tư, hàng hóa giao gia công, căn cứ phiếu xuất kho: `Nợ TK 154 / Có TK 152, 156`.
2. Chi phí thuê gia công, chi phí vận chuyển đi và về: `Nợ TK 154`, `Nợ TK 1331` (nếu được khấu trừ) / `Có TK 111, 112, 331`.
3. Nhận lại hàng gia công xong nhập kho, căn cứ phiếu nhập kho: `Nợ TK 152, 155, 156 / Có TK 154`.

Ví dụ giả định: doanh nghiệp xuất 2.000 kg vải trị giá 120 triệu đồng cho xưởng bên ngoài may thành 4.000 áo. Phí gia công trên hoá đơn 40 triệu đồng chưa thuế GTGT, chi phí vận chuyển hai chiều 4 triệu đồng.

- `Nợ TK 154 120.000.000 / Có TK 152 120.000.000`
- `Nợ TK 154 44.000.000`, `Nợ TK 1331` (thuế GTGT theo hoá đơn) / `Có TK 331`
- Nhập kho 4.000 áo: `Nợ TK 155 164.000.000 / Có TK 154 164.000.000`, giá gốc 41.000 đ/áo.

Vải thừa trả về nhập lại kho thì ghi `Nợ TK 152 / Có TK 154` theo giá trị đã xuất (TT99, TK 154 mục 6e), và giá trị áo giảm tương ứng.

> 💡 Vật tư có thể còn nằm ở bên gia công khi khoá sổ. TK 154 nên được chi tiết theo từng hợp đồng hoặc lệnh gia công (TT99, TK 154 mục 1c và mục 5 cho phép chi tiết và mở thêm tài khoản chi tiết theo yêu cầu quản lý) để cuối kỳ biết giá trị đang nằm ở bên gia công nào và đối chiếu được với bên đó.

### Điểm chạm hệ thống

Odoo 19 Manufacturing có ba luồng thuê ngoài gia công (subcontracting): bên gia công tự lo nguyên liệu; doanh nghiệp gửi nguyên liệu cho bên gia công (Resupply Subcontractor on Order); doanh nghiệp mua nguyên liệu giao thẳng cho bên gia công (Dropship Subcontractor on Order). Sản phẩm được mua từ bên gia công bằng đơn mua, với định mức loại Subcontracting.

Về định giá (tài liệu Valuation of stock movements, mục Component consumption): nguyên liệu gửi cho bên gia công vẫn thuộc công ty, vì địa điểm của bên gia công là địa điểm nội bộ; gửi nguyên liệu đi không làm thay đổi giá trị tồn kho. Giá trị thay đổi ở phiếu nhập thành phẩm, gồm nguyên liệu bên gia công đã dùng cộng giá dịch vụ gia công trên đơn mua. Tài liệu Subcontracting viết giá trị thành phẩm là tổng của chi phí nguyên liệu do công ty cấp, giá trả cho bên gia công, chi phí vận chuyển đi và về, chi phí dropship (nếu có) và chi phí khác như thuế nhập khẩu.

Công thức đó khớp với giá gốc trong TT99. Khác biệt nằm ở tài khoản: TT99 chuyển vật tư sang TK 154 khi xuất đi, còn cách Odoo mô tả giữ vật tư trên giá trị tồn kho tại địa điểm của bên gia công tới khi nhận thành phẩm. Cả hai đều nằm trong chỉ tiêu Hàng tồn kho, nhưng số dư TK 152 và TK 154 trên sổ cái sẽ khác nhau giữa hai cách.

> ⚠️ Cần xác nhận với kế toán khách hàng: có cần số dư TK 154 phản ánh đúng giá trị vật tư đang ở bên gia công theo TT99 không, hay chấp nhận theo dõi trên TK 152 chi tiết theo địa điểm bên gia công. Nếu cần theo TT99, BA phải thiết kế thêm bút toán hoặc ánh xạ tài khoản cho địa điểm của bên gia công.

## Bên nhận gia công

### Vật tư nhận về không phải hàng tồn kho

TT99 nói rõ ở ba chỗ:

- Nguyên tắc kế toán hàng tồn kho, điểm 3: vật tư, hàng hóa nhận gia công không thuộc quyền sở hữu và kiểm soát thì không ghi là hàng tồn kho, mà mở sổ chi tiết theo dõi và thuyết minh trên báo cáo tài chính.
- TK 152 mục 1d: nguyên vật liệu nhận để gia công không được phản ánh vào TK 152.
- TK 511 mục 3.10b: khi nhận hàng để gia công, doanh nghiệp chủ động theo dõi và ghi chép thông tin về toàn bộ giá trị vật tư, hàng hóa nhận gia công cùng nhóm "vật tư, hàng hóa, TSCĐ nhận giữ hộ, nhận ký gửi, nhận gia công" và thuyết minh trong báo cáo tài chính.

Phụ lục IV TT99 (thuyết minh báo cáo tài chính) yêu cầu thuyết minh chi tiết số lượng, chủng loại, quy cách, phẩm chất của từng loại, từng nhóm vật tư, hàng hóa nhận gia công tại thời điểm cuối kỳ.

### Doanh thu chỉ là tiền gia công

TT99 (TK 511 mục 1.5.7): với đơn vị nhận gia công vật tư, hàng hóa, doanh thu là số tiền gia công thực tế được hưởng, không gồm giá trị vật tư, hàng hóa nhận gia công. Bút toán (TK 511 mục 3.10b):

`Nợ TK 111, 112, 131 / Có TK 511, Có TK 33311` (nếu có).

Chi phí bên nhận gia công tự bỏ ra (nhân công, vật liệu phụ của mình, khấu hao máy) được tập hợp như một hoạt động sản xuất, dịch vụ: TK 154 tập hợp chi phí của hoạt động "gia công, chế biến" (TT99, TK 154 mục 1d), và với dịch vụ đã hoàn thành chuyển giao, giá thành kết chuyển `Nợ TK 632 / Có TK 154` (TK 154 mục 7a). Luồng tập hợp 621, 622, 627 vào 154 xem [[kt-27-chi-phi-san-xuat]].

### Còn tài khoản ngoài bảng không?

Danh mục tài khoản ở Phụ lục II TT99 gồm 71 tài khoản cấp 1, từ TK 111 đến TK 911, và không có nhóm tài khoản ngoài bảng. Các hướng dẫn về hàng nhận gia công trong TT99 đã dẫn ở trên đều dùng cách "mở sổ chi tiết theo dõi" và "thuyết minh", không chỉ định số hiệu tài khoản.

> ⚠️ Cần xác nhận: phần hướng dẫn lập Bảng cân đối số phát sinh trong Phụ lục III TT99 vẫn có câu "Bảng cân đối số phát sinh còn phản ánh số dư, số phát sinh của các tài khoản ngoài Bảng Cân đối tài khoản". Văn bản đã đọc không giải thích tài khoản ngoài bảng nào còn được dùng. Doanh nghiệp đang quen dùng tài khoản ngoài bảng cho hàng nhận gia công có thể giữ làm tài khoản theo dõi nội bộ, vì TT99 (Điều 11 khoản 2) cho doanh nghiệp sửa đổi, bổ sung tên, số hiệu, kết cấu tài khoản nếu ban hành Quy chế hạch toán kế toán và không làm thay đổi chỉ tiêu trên Báo cáo tài chính; cách làm cần được kế toán trưởng chốt.

Với hệ thống, yêu cầu thực chất là quản lý được số lượng, chủng loại vật tư của từng khách gia công tại từng thời điểm, tách khỏi giá trị hàng tồn kho của mình. Trong Odoo, tính năng Consignment (gán Owner trên phiếu nhập) cho phép giữ hàng của bên khác trong kho mà không vào báo cáo Stock Valuation, như mô tả ở [[kt-25-kho-thue-ngoai-kho-san]].

### Nhận gia công hàng xuất khẩu

Một số điểm TT99 có hướng dẫn riêng, BA nên biết để hỏi khi khách là doanh nghiệp gia công cho đối tác nước ngoài:

- Nguyên liệu nhập khẩu để sản xuất hoặc gia công hàng xuất khẩu đưa vào kho bảo thuế ghi TK 158; khi đưa ra sản xuất hoặc gia công hàng xuất khẩu: `Nợ TK 621 / Có TK 158` (TT99, TK 158). TK 158 dùng cho nguyên liệu, vật tư của doanh nghiệp đã thông quan chưa nộp thuế.
- Thuế nhập khẩu đã nộp cho hàng không thuộc quyền sở hữu của đơn vị (ví dụ hàng tạm nhập tái xuất để gia công) không ghi vào giá trị hàng mà ghi phải thu khác; khi được hoàn thì ghi giảm khoản phải thu khác (TT99, TK 333 mục thuế xuất nhập khẩu).

## Câu hỏi BA nên chốt

- Doanh nghiệp là bên giao, bên nhận, hay cả hai? Mỗi vai một luồng khác nhau.
- Bên giao: TK 154 chi tiết theo hợp đồng gia công hay theo bên gia công? Vật tư thừa, hao hụt tại bên gia công được xác nhận bằng chứng từ nào?
- Chi phí vận chuyển đi và về có được gom vào giá hàng nhận lại không, và gắn vào lệnh gia công bằng cách nào?
- Bên nhận: báo cáo tồn vật tư của từng khách gia công lấy từ đâu để thuyết minh cuối kỳ? Có dùng tài khoản theo dõi nội bộ thay cho tài khoản ngoài bảng không?

## Nguồn

- Chuẩn mực kế toán Việt Nam số 02 – Hàng tồn kho (Quyết định 149/2001/QĐ-BTC), đoạn 03. Bản toàn văn: https://cdn.thuvienphapluat.vn//uploads/Hoidapphapluat/2024/TTTT/240912/vas2.doc
- Thông tư 99/2025/TT-BTC, Điều 11 khoản 2 (sửa đổi, bổ sung tài khoản kèm Quy chế hạch toán); Phụ lục II: nguyên tắc kế toán hàng tồn kho (điểm 3); TK 152 (mục 1b, 1d, 3.7); TK 154 (mục 1c, 1d, 5, 6e, 7a); TK 155 (mục 1a, 1đ, 3.1); TK 156 (mục 1c, 3.10); TK 158; TK 333 (thuế xuất, nhập khẩu); TK 511 (mục 1.5.7, 1.5.15, 3.10). Phụ lục III (hướng dẫn Bảng cân đối số phát sinh). Phụ lục IV (thuyết minh vật tư, hàng hóa nhận gia công). Bản toàn văn dạng Word: https://chedo.ketoanthue.net/tai-ve/thong-tu-99-2025-tt-btc-che-do-ke-toan-doanh-nghiep.docx; danh mục tài khoản Phụ lục II: https://docs.google.com/document/d/14NeM16EEKMINCoSraTafe0w_iySTX1Ub/export?format=pdf
- KPMG Việt Nam, "Những thay đổi chính trong chế độ kế toán doanh nghiệp Việt Nam – Thông tư số 99/2025/TT-BTC" (11/2025), mục Hệ thống tài khoản (quyền sửa đổi, bổ sung tài khoản kèm quy chế hạch toán): https://assets.kpmg.com/content/dam/kpmg/vn/pdf/2025/11/circular-99-vi.pdf
- Odoo 19 Documentation, Subcontracting (mục Subcontracted product valuation): https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/manufacturing/subcontracting.html
- Odoo 19 Documentation, Basic subcontracting: https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/manufacturing/subcontracting/subcontracting_basic.html
- Odoo 19 Documentation, Valuation of stock movements and inventory operations (mục Component consumption): https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/inventory_valuation/operations_valuation.html
- Odoo 19 Documentation, Consignment: https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/shipping_receiving/daily_operations/owned_stock.html
