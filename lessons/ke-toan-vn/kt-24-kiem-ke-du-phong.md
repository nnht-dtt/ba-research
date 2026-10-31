# Kiểm kê, điều chỉnh tồn kho và dự phòng giảm giá

Bài này giúp BA đọc được kết quả kiểm kê sinh ra bút toán gì tuỳ nguyên nhân chênh lệch, hàng huỷ và hàng ứ đọng được ghi nhận ra sao, và hệ thống cần chuẩn bị dữ liệu gì để kế toán trích lập dự phòng giảm giá hàng tồn kho cuối kỳ.

## Vì sao kiểm kê là một nghiệp vụ kế toán

TT99 (Phụ lục II, nguyên tắc kế toán hàng tồn kho, điểm 12 và 13a) yêu cầu số liệu hàng tồn kho khớp cả giá trị và hiện vật giữa thực tế, sổ chi tiết và sổ tổng hợp. Cuối kỳ, doanh nghiệp so số kiểm kê thực tế với sổ; về nguyên tắc hai số phải bằng nhau, có chênh lệch thì phải truy tìm nguyên nhân và xử lý kịp thời.

Kiểm kê vì vậy không dừng ở việc sửa số lượng trên phần mềm kho. Mỗi dòng chênh lệch phải đi kèm nguyên nhân, và nguyên nhân quyết định tài khoản đối ứng.

### Chứng từ

Phụ lục I TT99 có các mẫu chứng từ hàng tồn kho liên quan:

- Biên bản tổng hợp kiểm kê vật tư, công cụ, sản phẩm, hàng hóa (05-VT).
- Biên bản kiểm nghiệm vật tư, công cụ, sản phẩm, hàng hóa (03-VT).
- Phiếu nhập kho (01-VT), phiếu xuất kho (02-VT).

Bút toán xử lý ghi "căn cứ vào biên bản kiểm kê và quyết định xử lý của cấp có thẩm quyền" (TT99, TK 152 mục 3.13). Hai chứng từ này có thể ở hai thời điểm khác nhau: biên bản có ngay khi kiểm, quyết định xử lý có thể đến sau.

## Hàng thiếu: bút toán theo nguyên nhân

TT99 (TK 138 mục 3.3, TK 152 mục 3.13; TK 153, 155, 156 dẫn chiếu xử lý tương tự TK 152) chia thành các trường hợp:

<step-flow>
<svg viewBox="0 0 660 270" role="img" aria-labelledby="kt24s-t" style="width:100%;max-width:660px;height:auto;display:block;margin:1.25rem auto" font-family="ui-sans-serif, system-ui, sans-serif">
<title id="kt24s-t">Xử lý hàng thiếu khi kiểm kê theo nguyên nhân</title>
<defs>
<marker id="kt24s-arrow" markerWidth="9" markerHeight="9" refX="8" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 z" fill="currentColor"/></marker>
</defs>
<g data-step="1">
<rect x="230" y="10" width="200" height="50" rx="10" fill="#3b82f6" fill-opacity="0.13" stroke="currentColor" stroke-opacity="0.22"/>
<text x="330" y="40" font-size="14" text-anchor="middle" fill="currentColor">Kiểm kê phát hiện thiếu</text>
</g>
<g data-step="2">
<line x1="300" y1="60" x2="110" y2="110" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" marker-end="url(#kt24s-arrow)"/>
<rect x="10" y="112" width="200" height="60" rx="10" fill="#10b981" fill-opacity="0.16" stroke="currentColor" stroke-opacity="0.22"/>
<text x="110" y="137" font-size="13" text-anchor="middle" fill="currentColor">Nhầm lẫn, quên ghi sổ</text>
<text x="110" y="157" font-size="13" text-anchor="middle" fill="currentColor">→ ghi bổ sung, điều chỉnh</text>
</g>
<g data-step="3">
<line x1="330" y1="60" x2="330" y2="110" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" marker-end="url(#kt24s-arrow)"/>
<rect x="230" y="112" width="200" height="60" rx="10" fill="#f59e0b" fill-opacity="0.14" stroke="currentColor" stroke-opacity="0.22"/>
<text x="330" y="137" font-size="13" text-anchor="middle" fill="currentColor">Hao hụt trong định mức</text>
<text x="330" y="157" font-size="13" text-anchor="middle" fill="currentColor">→ Nợ 632</text>
</g>
<g data-step="4">
<line x1="360" y1="60" x2="550" y2="110" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" marker-end="url(#kt24s-arrow)"/>
<rect x="450" y="112" width="200" height="60" rx="10" fill="#f43f5e" fill-opacity="0.12" stroke="currentColor" stroke-opacity="0.22"/>
<text x="550" y="137" font-size="13" text-anchor="middle" fill="currentColor">Có người chịu trách nhiệm</text>
<text x="550" y="157" font-size="13" text-anchor="middle" fill="currentColor">→ Nợ 1388, 334, 632</text>
</g>
<g data-step="5">
<rect x="180" y="200" width="300" height="60" rx="10" fill="#8b5cf6" fill-opacity="0.14" stroke="currentColor" stroke-opacity="0.22"/>
<text x="330" y="225" font-size="13" text-anchor="middle" fill="currentColor">Chưa rõ nguyên nhân → Nợ 1381</text>
<text x="330" y="245" font-size="13" text-anchor="middle" fill="currentColor">Có quyết định xử lý → Có 1381</text>
</g>
</svg>
<step-note data-step="1">Lập biên bản kiểm kê, truy tìm nguyên nhân và người phạm lỗi.</step-note>
<step-note data-step="2">Không phải mất hàng thật: sửa lại số liệu trên sổ cho đúng.</step-note>
<step-note data-step="3"><code>Nợ TK 632 / Có TK 152, 153, 155, 156</code>.</step-note>
<step-note data-step="4">Phần bồi thường ghi phải thu (1388) hoặc trừ lương (334); phần còn lại tính vào giá vốn.</step-note>
<step-note data-step="5">Treo ở TK 1381 tới khi có quyết định; chỉ dùng 1381 khi chưa xác định được nguyên nhân.</step-note>
</step-flow>

Bút toán chi tiết:

- **Hao hụt trong định mức**: `Nợ TK 632 / Có TK 152, 153, 155, 156`.
- **Xác định được người chịu trách nhiệm**: `Nợ TK 1388` (số phải bồi thường), `Nợ TK 334` (trừ vào lương), `Nợ TK 632` (phần hao hụt, mất mát còn lại sau khi trừ bồi thường) / `Có TK 152, 153, 155, 156`.
- **Chưa rõ nguyên nhân, chờ xử lý**: `Nợ TK 1381 / Có TK 152, 153, 155, 156`.
- **Khi có quyết định xử lý**: `Nợ TK 111, 112` (người phạm lỗi nộp tiền), `Nợ TK 1388` (phải thu bồi thường), `Nợ TK 334` (trừ lương), `Nợ TK 632` (phần tính vào giá vốn) / `Có TK 1381`. Với TSCĐ thiếu, phần giá trị còn lại tính vào chi phí khác (TK 811) chứ không vào 632 (TK 138 mục 3.3b).

TT99 (TK 138, mô tả TK 1381) nhấn mạnh: nếu đã xác định được nguyên nhân và có biên bản xử lý ngay trong kỳ thì ghi thẳng vào tài khoản liên quan, không đi qua 1381. Khi lập báo cáo tài chính, nếu không có bằng chứng chắc chắn tài sản thiếu chờ xử lý có khả năng thu hồi thì phải ghi nhận giá trị đó vào chi phí trong kỳ và thuyết minh.

VAS 02 (đoạn 24 và 29) cũng xếp hao hụt, mất mát hàng tồn kho sau khi trừ phần bồi thường do trách nhiệm cá nhân vào chi phí trong kỳ, trình bày trong giá vốn hàng bán.

## Hàng thừa

TT99 (TK 338 mục 3.1; TK 152 mục 3.13b):

- Thừa đã rõ nguyên nhân (nhầm lẫn, cân đo đếm, quên ghi sổ): căn cứ nguyên nhân để ghi sổ.
- Thừa chưa rõ nguyên nhân: `Nợ TK 152, 153, 156 / Có TK 3381`.
- Khi có quyết định xử lý: `Nợ TK 3381 / Có` các tài khoản liên quan.

TK 3381 chỉ dùng cho tài sản thừa chưa xác định rõ nguyên nhân; đã có biên bản xử lý thì ghi ngay vào tài khoản liên quan (TT99, mô tả TK 3381). Nếu hàng thừa xác định là của doanh nghiệp khác thì không ghi tăng tài sản của mình mà theo dõi như hàng nhận giữ hộ ([[kt-25-kho-thue-ngoai-kho-san]]); TT99 nêu rõ cách này cho TSCĐ thừa ở TK 338 mục 3.1a.

## Hàng huỷ, hàng ứ đọng thanh lý

- **Huỷ do hết hạn, mất phẩm chất, hư hỏng, không còn giá trị sử dụng** (TT99, TK 229 mục 3.4c): `Nợ TK 2294` (phần được bù đắp bằng dự phòng đã lập), `Nợ TK 632` (phần tổn thất vượt số dự phòng) / `Có TK 152, 153, 155, 156`. TT99 cho phép hoàn nhập dự phòng ngay tại thời điểm huỷ hoặc khi tính lại dự phòng cuối kỳ, nhưng phải nhất quán.
- **Thanh lý, nhượng bán do ứ đọng, mất phẩm chất, không cần dùng** (TK 155 mục 3.12, TK 156 mục 3.20): giá vốn `Nợ TK 632 / Có TK 155, 156`; doanh thu thu được ghi như một giao dịch bán.
- **Bán phế liệu, nguyên vật liệu** (TK 152 mục 3.13c): `Nợ TK 632 / Có TK 152` và `Nợ TK 111, 112, 131 / Có TK 511, 333`.

## Dự phòng giảm giá hàng tồn kho

### Khi nào phải lập

VAS 02 (đoạn 18–19): giá trị hàng tồn kho không thu hồi đủ khi hàng hư hỏng, lỗi thời, giá bán giảm hoặc chi phí hoàn thiện, chi phí bán tăng. Khi giá trị thuần có thể thực hiện được nhỏ hơn giá gốc thì phải lập dự phòng bằng phần chênh lệch.

**Giá trị thuần có thể thực hiện được** (VAS 02 đoạn 03) = giá bán ước tính trong kỳ sản xuất, kinh doanh bình thường − chi phí ước tính để hoàn thành sản phẩm − chi phí ước tính cần thiết cho việc tiêu thụ.

Thời điểm: VAS 02 đoạn 19 viết "cuối kỳ kế toán năm"; TT99 (TK 229 mục 1.5b) viết việc trích lập hoặc hoàn nhập thực hiện "ở thời điểm lập Báo cáo tài chính", và bút toán mục 3.4 ghi "tại thời điểm kết thúc kỳ kế toán".

### Quy tắc tính

Theo VAS 02 (đoạn 19–23), TT99 (TK 229 mục 1.5; TK 632 mục 1b):

- Lập theo **từng mặt hàng** tồn kho, không bù trừ mặt hàng tăng giá với mặt hàng giảm giá. Với dịch vụ dở dang, lập theo từng loại dịch vụ có mức giá riêng.
- Ước tính dựa trên bằng chứng tin cậy tại thời điểm ước tính, tính cả biến động giá sau ngày kết thúc năm tài chính nếu sự kiện đó xác nhận điều kiện đã có tại thời điểm ước tính.
- Tính đến **mục đích dự trữ**: hàng dự trữ cho hợp đồng bán không thể huỷ bỏ thì giá trị thuần dựa vào giá hợp đồng; phần vượt số cần cho hợp đồng đánh giá theo giá bán ước tính. TT99 (TK 632 mục 1b) yêu cầu loại trừ khối lượng hàng đã ký hợp đồng tiêu thụ (giá trị thuần không thấp hơn giá trị ghi sổ) nếu có bằng chứng chắc chắn khách hàng không từ bỏ hợp đồng.
- **Nguyên vật liệu, công cụ** dự trữ để sản xuất không được đánh giá thấp hơn giá gốc nếu sản phẩm do chúng cấu thành bán được bằng hoặc cao hơn giá thành. Chỉ khi giá nguyên vật liệu giảm và giá thành sản phẩm cao hơn giá trị thuần của sản phẩm thì mới ghi giảm nguyên vật liệu xuống giá trị thuần (VAS 02 đoạn 22).
- Kỳ sau đánh giá lại: số phải lập cao hơn số dư đang có thì trích bổ sung phần chênh lệch; thấp hơn thì hoàn nhập phần chênh lệch.

### Bút toán

TT99 (TK 229 mục 3.4; TK 632 mục 3c):

- Lập lần đầu hoặc trích bổ sung: `Nợ TK 632 / Có TK 2294`.
- Hoàn nhập phần chênh lệch: `Nợ TK 2294 / Có TK 632`.

Ví dụ giả định cuối năm, mặt hàng A tồn 1.000 đơn vị, giá gốc 80.000 đ/đơn vị. Giá bán ước tính 85.000 đ, chi phí bán ước tính 10.000 đ/đơn vị, nên giá trị thuần là 75.000 đ/đơn vị. Dự phòng phải lập = 1.000 × (80.000 − 75.000) = 5.000.000 đ. Nếu số dư TK 2294 chi tiết mặt hàng A đang là 2.000.000 đ, kế toán trích bổ sung 3.000.000 đ: `Nợ TK 632 3.000.000 / Có TK 2294 3.000.000`. Mặt hàng B cùng kỳ có giá trị thuần cao hơn giá gốc thì không lập, và không được dùng để bù cho mặt hàng A.

### Dữ liệu hệ thống cần cung cấp

Dự phòng là ước tính của kế toán, nhưng hệ thống quyết định kế toán có đủ dữ liệu theo từng mặt hàng hay phải làm tay trên bảng tính. Từ các quy tắc trên, danh sách tối thiểu:

| Dữ liệu | Dùng để | Thường lấy từ |
|---|---|---|
| Số lượng, giá gốc tồn theo mặt hàng (và lô, nếu theo dõi lô) tại ngày khoá sổ | Tính giá gốc từng mặt hàng | Báo cáo tồn kho theo giá trị tại một ngày |
| Giá bán ước tính | Tính giá trị thuần | Bảng giá, giá bán thực tế sau ngày khoá sổ |
| Chi phí ước tính để hoàn thành (với sản phẩm dở dang, nguyên vật liệu) và chi phí bán | Trừ khỏi giá bán | Định mức sản xuất, tỷ lệ chi phí bán |
| Lượng hàng đã cam kết theo hợp đồng bán không huỷ ngang | Loại trừ hoặc định giá theo giá hợp đồng | Đơn bán đã xác nhận chưa giao |
| Tuổi tồn, hạn dùng, tình trạng chất lượng | Bằng chứng hàng lỗi thời, hư hỏng | Lô/hạn dùng, ngày nhập, kho hàng lỗi |
| Số dư 2294 theo từng mặt hàng | Tính số trích bổ sung hay hoàn nhập | Sổ chi tiết TK 2294 |

> 💡 Odoo có tính năng định giá theo lô/số serial, với một mục đích tài liệu nêu là ghi giảm giá trị những lô, serial cụ thể nằm kho quá lâu. Cách ghi nhận khoản giảm giá trị đó có khớp cơ chế dự phòng qua TK 2294 của TT99 hay không cần kiểm tra khi thiết kế, vì TT99 tách dự phòng thành tài khoản điều chỉnh riêng thay vì giảm trực tiếp giá gốc.

## Điểm chạm hệ thống

Với Odoo 19 (tài liệu Valuation of stock movements and inventory operations):

- **Inventory adjustment**: chênh lệch giữa số đếm và số dự kiến được ghi thành dịch chuyển tới hoặc từ địa điểm ảo Inventory adjustment, nằm ngoài kho, nên thay đổi cả số lượng lẫn giá trị. Đơn giá dùng là cost trung bình hiện tại của sản phẩm, kể cả khi nhóm sản phẩm dùng FIFO.
- **Scrap**: huỷ hàng làm giảm giá trị tồn kho theo cùng quy tắc tính giá như các lần xuất khác.
- **Loss account**: có thể đặt tài khoản riêng trên địa điểm loại Inventory Loss (tài liệu Accounting – Inventory valuation).

Một địa điểm điều chỉnh với một tài khoản lỗ duy nhất không đủ để phản ánh các nhánh xử lý của TT99 (632, 1388, 334, 1381, 3381). BA cần thiết kế cách ghi lý do chênh lệch trên phiếu kiểm kê và quy trình chuyển từ 1381/3381 sang tài khoản cuối cùng khi có quyết định xử lý.

> ⚠️ Cần xác nhận với kế toán khách hàng: định mức hao hụt cho từng nhóm hàng (để tách "trong định mức" ghi 632 với phần vượt định mức), và cấp có thẩm quyền ra quyết định xử lý hàng thiếu, thừa. Tài liệu đã đọc không đưa định mức cụ thể; đây là quy chế nội bộ của doanh nghiệp.

## Ảnh hưởng lên báo cáo

- **Báo cáo tình hình tài chính**: Dự phòng giảm giá hàng tồn kho trình bày ở mã số 142, ghi âm, lấy từ số dư Có chi tiết TK 2294 cho phần hàng tồn kho ngắn hạn (TT99 Phụ lục IV). Số dư Nợ TK 1381 lên chỉ tiêu riêng "Tài sản thiếu chờ xử lý" (mã số 137), nên tài sản thiếu treo lâu sẽ hiện rõ trên báo cáo.
- **Báo cáo kết quả kinh doanh**: trích lập, hoàn nhập dự phòng, hao hụt sau bồi thường đều đi qua giá vốn hàng bán (VAS 02 đoạn 29; TT99, TK 632).
- **Thuyết minh**: giá trị dự phòng, giá trị hoàn nhập, sự kiện dẫn tới trích thêm hoặc hoàn nhập (VAS 02 đoạn 27); phương pháp lập dự phòng (TT99 Phụ lục IV); giá trị tài sản thiếu chờ xử lý đã đưa vào kết quả kinh doanh (TT99, TK 1381).

Kiểm kê và tính dự phòng thường là các bước trong lịch khoá sổ cuối năm, xem [[kt-36-quy-trinh-khoa-so]]. Dự phòng phải thu khó đòi dùng cùng TK 229 nhưng tài khoản cấp 2 khác (2293) và đi vào chi phí quản lý, xem [[kt-21-cong-no-phai-thu]].

## Nguồn

- Chuẩn mực kế toán Việt Nam số 02 – Hàng tồn kho (Quyết định 149/2001/QĐ-BTC), đoạn 03, 18–24, 27, 29. Bản toàn văn: https://cdn.thuvienphapluat.vn//uploads/Hoidapphapluat/2024/TTTT/240912/vas2.doc
- Thông tư 99/2025/TT-BTC, Phụ lục I (danh mục chứng từ hàng tồn kho 01-VT đến 07-VT); Phụ lục II: nguyên tắc kế toán hàng tồn kho (điểm 12, 13a), TK 138 (mô tả 1381, mục 3.3), TK 152 (mục 3.13), TK 155 (mục 3.9, 3.12), TK 156 (mục 3.18, 3.20), TK 229 (mục 1.5, 3.4), TK 338 (mô tả 3381, mục 3.1), TK 632 (mục 1b, 3b, 3c); Phụ lục IV: chỉ tiêu mã số 137, 142 và thuyết minh. Bản toàn văn dạng Word: https://chedo.ketoanthue.net/tai-ve/thong-tu-99-2025-tt-btc-che-do-ke-toan-doanh-nghiep.docx
- Odoo 19 Documentation, Valuation of stock movements and inventory operations (mục Inventory adjustments, Scrap): https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/inventory_valuation/operations_valuation.html
- Odoo 19 Documentation, Accounting – Inventory valuation (mục Inventory Loss): https://www.odoo.com/documentation/19.0/applications/finance/accounting/get_started/inventory_valuation.html
- Odoo 19 Documentation, Valuation by lots/serial numbers: https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/inventory_valuation/valuation_by_lots.html
