# Đối soát quyết toán sàn, cổng thanh toán, COD và sao kê ngân hàng

Bài này giúp BA thiết kế phần theo dõi tiền của kênh online: tiền khách đã trả nhưng đang nằm ở sàn, cổng thanh toán hay đơn vị vận chuyển thì ghi vào đâu, đối chiếu ba nguồn dữ liệu (đơn hàng, báo cáo quyết toán, sao kê ngân hàng) theo thứ tự nào, chênh lệch thường gặp là gì và phần nào tự động hoá được.

## Tiền đi đường vòng trước khi về ngân hàng

Với đơn bán trực tiếp, khách trả vào tài khoản ngân hàng của doanh nghiệp. Với kênh online, tiền đi qua ít nhất một bên trung gian và thường bị trừ phí trước khi về:

<step-flow>
<svg viewBox="0 0 680 210" role="img" aria-labelledby="k15f-t" style="width:100%;max-width:680px;height:auto;display:block;margin:1.25rem auto" font-family="ui-sans-serif, system-ui, sans-serif">
<title id="k15f-t">Dòng tiền của một đơn bán qua sàn</title>
<defs>
<marker id="k15f-arrow" markerWidth="9" markerHeight="9" refX="8" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 z" fill="currentColor"/></marker>
</defs>
<g data-step="1">
<rect x="10" y="30" width="140" height="60" rx="10" fill="#3b82f6" fill-opacity="0.13" stroke="currentColor" stroke-opacity="0.22"/>
<text x="80" y="57" font-size="13" text-anchor="middle" fill="currentColor">Người mua trả</text>
<text x="80" y="75" font-size="12" text-anchor="middle" fill="currentColor" fill-opacity="0.75">sàn / cổng / COD</text>
</g>
<g data-step="2">
<line x1="150" y1="60" x2="192" y2="60" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" marker-end="url(#k15f-arrow)"/>
<rect x="195" y="30" width="140" height="60" rx="10" fill="#f59e0b" fill-opacity="0.14" stroke="currentColor" stroke-opacity="0.22"/>
<text x="265" y="57" font-size="13" text-anchor="middle" fill="currentColor">Bên trung gian giữ</text>
<text x="265" y="75" font-size="12" text-anchor="middle" fill="currentColor" fill-opacity="0.75">phải thu theo bên</text>
</g>
<g data-step="3">
<line x1="335" y1="60" x2="377" y2="60" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" marker-end="url(#k15f-arrow)"/>
<rect x="380" y="30" width="140" height="60" rx="10" fill="#a855f7" fill-opacity="0.13" stroke="currentColor" stroke-opacity="0.22"/>
<text x="450" y="57" font-size="13" text-anchor="middle" fill="currentColor">Quyết toán kỳ</text>
<text x="450" y="75" font-size="12" text-anchor="middle" fill="currentColor" fill-opacity="0.75">trừ phí, hoàn tiền</text>
</g>
<g data-step="4">
<line x1="520" y1="60" x2="562" y2="60" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" marker-end="url(#k15f-arrow)"/>
<rect x="565" y="30" width="105" height="60" rx="10" fill="#10b981" fill-opacity="0.16" stroke="currentColor" stroke-opacity="0.22"/>
<text x="617" y="57" font-size="13" text-anchor="middle" fill="currentColor">Ngân hàng</text>
<text x="617" y="75" font-size="12" text-anchor="middle" fill="currentColor" fill-opacity="0.75">sao kê</text>
</g>
<g data-step="5">
<rect x="10" y="130" width="660" height="60" rx="10" fill="#f43f5e" fill-opacity="0.10" stroke="currentColor" stroke-opacity="0.22"/>
<text x="340" y="157" font-size="13" text-anchor="middle" fill="currentColor">Đối soát: đơn hàng ↔ báo cáo quyết toán ↔ sao kê ngân hàng</text>
<text x="340" y="176" font-size="12" text-anchor="middle" fill="currentColor" fill-opacity="0.75">khớp theo mã đơn ở bước 2–3, theo mã quyết toán ở bước 3–4</text>
</g>
</svg>
<step-note data-step="1">Người mua thanh toán qua sàn, cổng thanh toán, hoặc trả tiền mặt cho người giao hàng (COD). Doanh nghiệp chưa nhận đồng nào.</step-note>
<step-note data-step="2">Sàn, cổng hoặc đơn vị vận chuyển giữ tiền. Với doanh nghiệp, đây là khoản phải thu của bên trung gian đó, theo dõi chi tiết từng bên.</step-note>
<step-note data-step="3">Theo kỳ hợp đồng, bên trung gian lập báo cáo quyết toán: tiền đơn thành công trừ phí, trừ hoàn tiền, cộng trừ điều chỉnh.</step-note>
<step-note data-step="4">Số tiền thuần được chuyển về tài khoản ngân hàng, có khi qua một bước rút tiền từ ví người bán.</step-note>
<step-note data-step="5">Đối soát là nối ba nguồn dữ liệu: dữ liệu đơn trong hệ thống, báo cáo quyết toán của bên trung gian, sao kê ngân hàng.</step-note>
</step-flow>

## Tiền đang ở bên trung gian ghi vào đâu

TT99 không có tài khoản riêng cho "tiền nằm ở sàn". Lựa chọn nằm giữa ba tài khoản, mỗi tài khoản có phạm vi rõ trong Phụ lục II:

| Tài khoản | Phạm vi theo TT99 | Dùng cho kênh online khi |
|---|---|---|
| TK 131 – Phải thu của khách hàng | Phải thu về tiền bán sản phẩm, hàng hoá, dịch vụ; quyền thu tiền chỉ phụ thuộc yếu tố thời gian; hạch toán chi tiết từng đối tượng | Tiền bán hàng mà sàn, cổng, đơn vị vận chuyển thu hộ, mở chi tiết theo từng bên |
| TK 1388 – Phải thu khác | Phải thu ngoài phạm vi TK 131, 133, 136, 1381, 1383, như bồi thường, chi hộ phải thu hồi | Khoản sàn hoặc đơn vị vận chuyển bồi thường hàng thất lạc, hư hỏng; khoản doanh nghiệp chi hộ cần thu lại |
| TK 113 – Tiền đang chuyển | Tiền đã nộp vào ngân hàng, gửi bưu điện để chuyển vào ngân hàng nhưng chưa nhận giấy báo Có, hoặc đã chuyển trả cho doanh nghiệp khác nhưng bên đó chưa nhận | Khoảng thời gian rất ngắn khi lệnh chuyển tiền từ ví người bán về ngân hàng đã thực hiện nhưng ngân hàng chưa báo Có |

Lý do nghiêng về TK 131 cho tiền bán hàng: khoản tiền này phát sinh từ chính giao dịch bán hàng, và theo [[ktqt-13-doanh-thu-kenh-online]] người mua đã thanh toán cho bên trung gian thu hộ, nên doanh nghiệp còn quyền thu tiền với bên trung gian. TT99 cũng có tiền lệ gần: bên giao uỷ thác xuất khẩu ghi vào TK 131 khoản phải thu bên nhận uỷ thác về tiền bán hàng xuất khẩu (TK 131 mục 1c).

> ⚠️ Cần xác nhận: TT99 không nêu đích danh tiền do sàn, cổng thanh toán, đơn vị vận chuyển COD giữ hộ. Việc dùng TK 131 chi tiết theo bên trung gian (hay TK 1388) và việc có dùng TK 113 cho khoản đang rút về ngân hàng hay không là chính sách kế toán của doanh nghiệp, cần chốt với kế toán trưởng trước khi cấu hình. TT99 cho mở thêm tài khoản chi tiết của TK 113 theo nhu cầu quản lý.

> ❌ Không ghi tiền đang nằm ở ví sàn vào TK 112. TK 112 là tiền gửi không kỳ hạn tại ngân hàng; số dư ví sàn không có trên sao kê ngân hàng nào, và đối chiếu TK 112 với sổ phụ ngân hàng sẽ không bao giờ khớp.

## Bút toán theo từng bước

Ví dụ giả định, doanh nghiệp là bên chính, phải thu theo dõi ở `TK 131` chi tiết theo bên trung gian.

### Qua sàn

1. Đơn đủ điều kiện ghi doanh thu: `Nợ TK 131` (chi tiết sàn) `/ Có TK 511 / Có TK 3331`.
2. Phí theo quyết toán (phí và hoá đơn xem [[ktqt-14-phi-san-cong-thanh-toan]]): `Nợ TK 641`, `Nợ TK 1331 / Có TK 131` (chi tiết sàn), hoặc qua `TK 331` rồi bù trừ.
3. Đơn bị trả hàng sau khi đã ghi doanh thu: `Nợ TK 521`, `Nợ TK 3331 / Có TK 131` (TT99 TK 131 mục 3.2); nhập lại kho theo [[kt-19-doi-tra-hoan-tien]].
4. Sàn chuyển tiền về ngân hàng: `Nợ TK 112 / Có TK 131` (chi tiết sàn). Nếu dùng TK 113 cho khoảng chờ báo Có: lúc thực hiện lệnh rút `Nợ TK 113 / Có TK 131`, khi ngân hàng báo Có `Nợ TK 112 / Có TK 113` (TT99 TK 113 mục 3.5).
5. Sàn bồi thường hàng thất lạc: `Nợ TK 1388 / Có` tài khoản xử lý hàng thiếu theo biên bản; khi sàn trả hoặc trừ vào quyết toán: `Nợ TK 131` hoặc `TK 112 / Có TK 1388`.

### Qua cổng thanh toán trên website riêng

Giống luồng sàn, nhưng thường không có phí hoa hồng bán hàng, chỉ có phí giao dịch thanh toán. Khách là người mua cuối; cổng thanh toán là đối tượng chi tiết của phải thu.

### COD qua đơn vị vận chuyển

- Giao hàng cho đơn vị vận chuyển, người mua chưa nhận: hàng vẫn thuộc doanh nghiệp. TT99 TK 157 dùng cho hàng đã gửi đi cho khách hàng nhưng chưa xác định là đã bán: `Nợ TK 157 / Có TK 156`.
- Người mua nhận hàng và trả tiền cho người giao: ghi doanh thu, phải thu chi tiết đơn vị vận chuyển: `Nợ TK 131` (chi tiết đơn vị vận chuyển) `/ Có TK 511 / Có TK 3331`, đồng thời `Nợ TK 632 / Có TK 157`.
- Đơn vị vận chuyển chuyển tiền COD sau khi trừ cước và phí thu hộ: `Nợ TK 112`, `Nợ TK 641 (6417)`, `Nợ TK 1331 / Có TK 131` (chi tiết đơn vị vận chuyển).
- Người mua từ chối nhận, hàng hoàn về: không có doanh thu; `Nợ TK 156 / Có TK 157`; cước hoàn hàng (nếu có) là chi phí bán hàng.

Thời điểm ghi doanh thu cho đơn COD phụ thuộc thời điểm chuyển giao theo VAS 14 đoạn 10 và điều khoản giao hàng; xem [[kt-17-quy-trinh-ban-hang]]. Khoản COD đơn vị vận chuyển đã thu nhưng chưa nộp lại là rủi ro thực tế, cần đối chiếu định kỳ như mọi khoản phải thu (TT99 TK 131 mục 1d yêu cầu phân loại nợ phải thu khi lập BCTC; dự phòng xem [[kt-21-cong-no-phai-thu]]).

## Đối soát ba chiều

### Chiều 1: đơn hàng với báo cáo quyết toán

Khoá khớp là **mã đơn của sàn**. Mỗi đơn trong hệ thống đã ghi doanh thu phải tìm thấy trong một kỳ quyết toán, và ngược lại.

Mỗi kỳ quyết toán cần thoả một đẳng thức (ví dụ giả định về cấu trúc, tên dòng thực tế tuỳ sàn):

`Tiền về = Σ tiền đơn thành công − Σ phí − Σ hoàn tiền ± điều chỉnh khác`

Hệ thống nên tính được vế phải từ dữ liệu của chính mình rồi so với vế trái trong báo cáo quyết toán.

### Chiều 2: báo cáo quyết toán với sao kê ngân hàng

Khoá khớp là **mã hoặc ngày của đợt chuyển tiền**, số tiền, và tên bên chuyển trong nội dung giao dịch. Một dòng sao kê thường ứng với một kỳ quyết toán hoặc một lần rút tiền, không ứng với từng đơn.

### Chiều 3: số dư phải thu theo bên trung gian

Cuối kỳ, số dư `TK 131` chi tiết từng sàn, cổng, đơn vị vận chuyển phải bằng tổng các đơn đã ghi doanh thu mà chưa được quyết toán, cộng các khoản đã quyết toán nhưng chưa về ngân hàng. Số dư không giải thích được là dấu hiệu thiếu bút toán.

## Chênh lệch thường gặp

| Chênh lệch | Nguyên nhân | Hướng xử lý |
|---|---|---|
| Đơn có trong hệ thống, chưa có trong quyết toán | Đơn giao cuối kỳ, sàn quyết toán kỳ sau | Bình thường; nằm trong số dư phải thu. Phí của đơn trích trước theo [[ktqt-14-phi-san-cong-thanh-toan]] |
| Đơn có trong quyết toán, không có trong hệ thống | Đơn chưa đồng bộ, đơn tạo tay trên sàn, lỗi tích hợp | Bổ sung đơn, kiểm tra tích hợp |
| Số tiền đơn khác nhau | Voucher, giảm giá do sàn tài trợ; phí vận chuyển; làm tròn | Lập bảng ánh xạ từng dòng tiền của sàn sang bút toán ([[ktqt-13-doanh-thu-kenh-online]]) |
| Đơn đã ghi doanh thu nhưng quyết toán ghi hoàn tiền | Trả hàng, khiếu nại sau giao | Ghi giảm doanh thu, nhập lại hàng; không xoá đơn gốc |
| Dòng phí không gắn mã đơn | Phí tháng, phí quảng cáo, phí chương trình | Ghi theo kỳ, đối ứng chi tiết sàn |
| Tiền về ít hơn quyết toán | Phí rút tiền, phí chuyển khoản | Ghi chi phí; tự động hoá bằng mô hình đối soát |
| Có dòng "khấu trừ thuế" | Gian hàng đăng ký dạng hộ, cá nhân kinh doanh, sàn khấu trừ nộp thay theo Nghị định 117/2025/NĐ-CP | Không phải nghiệp vụ của doanh nghiệp; kiểm tra lại chủ thể đứng tên gian hàng |
| Tiền COD về thiếu, về chậm | Đơn vị vận chuyển giữ lại, trừ cước hoàn, đơn thất lạc | Đối chiếu bảng kê COD theo mã vận đơn; bồi thường ghi TK 1388 |

> 💡 Đối soát theo mã đơn ở chiều 1 là nơi tìm ra gần hết lỗi. Đối soát chiều 2 chỉ chứng minh tổng tiền về khớp, không chứng minh từng đơn đúng.

## Tự động hoá đối soát

Phần lớn kênh online cho tải báo cáo quyết toán theo file hoặc API. Luồng tự động hoá thường gồm:

1. Nhập báo cáo quyết toán, tách từng dòng: tiền đơn, từng loại phí, hoàn tiền, điều chỉnh.
2. Khớp từng dòng với đơn và hoá đơn trong hệ thống theo mã đơn; sinh bút toán phí, hoàn tiền.
3. Gom kết quả thành một khoản thanh toán theo lô cho kỳ quyết toán.
4. Khi sao kê ngân hàng về, khớp dòng tiền vào với khoản thanh toán theo lô.
5. Dòng lặp lại (phí rút tiền, phí ngân hàng) xử lý bằng quy tắc tự động.

Ví dụ trên Odoo 19, viết trung lập:

- Mỗi giao dịch ngân hàng sinh bút toán ghi vào tài khoản chính của sổ ngân hàng và một tài khoản tạm (suspense) cho tới khi đối soát xong; khi đó tài khoản tạm được thay bằng tài khoản của chứng từ đối ứng.
- Đối soát tự động khớp theo nội dung dòng giao dịch (so với số hoá đơn, tham chiếu) hoặc theo đối tác và số tiền; ngoài ra có thể chọn một lô thanh toán (batch payment) để khớp nhiều khoản cùng lúc.
- Mô hình đối soát cho phép đặt điều kiện theo sổ, đối tác, khoảng số tiền, nội dung (kể cả biểu thức chính quy) và tự sinh bút toán đối ứng, phù hợp với phí lặp lại.
- Với thanh toán trực tuyến, nhà cung cấp thanh toán cần một sổ thanh toán loại ngân hàng; có thể đặt tài khoản treo (outstanding account) riêng cho từng nhà cung cấp để tách tiền của nhà cung cấp đó khỏi các khoản thanh toán khác. Tài liệu Odoo cũng lưu ý tiền qua nhà cung cấp thanh toán bên thứ ba cần quy trình kế toán riêng và khuyên hỏi ý kiến kế toán.
- Với Amazon, tài liệu khuyến nghị sổ ngân hàng riêng có tài khoản trung gian, ghi nhận thanh toán theo lô cho các hoá đơn của kỳ, và khi tiền thực về ngân hàng thì ghi Có tài khoản trung gian Amazon theo số tiền nhận.

Đây chính là mô hình phải thu theo bên trung gian ở trên: tài khoản trung gian hoặc tài khoản treo của từng sàn, cổng đóng vai trò chi tiết phải thu.

## Ảnh hưởng tới báo cáo

- **B01-DN**: tiền ở bên trung gian là khoản phải thu, không phải tiền; TK 113 (nếu dùng) là tài khoản tiền như TK 111, 112. Mapping tài khoản sang chỉ tiêu xem [[kt-39-bao-cao-tinh-hinh-tai-chinh]]. Số dư `TK 131` có thể có số dư Có theo từng đối tượng (ví dụ sàn hoàn tiền nhiều hơn số còn phải thu) và TT99 yêu cầu lấy số dư chi tiết từng đối tượng để trình bày cả bên tài sản và bên nguồn vốn.
- **B03-DN**: tiền thu từ bán hàng chỉ phát sinh khi tiền về tài khoản ngân hàng, không phải khi người mua trả cho sàn ([[kt-41-luu-chuyen-tien-te]]).
- **Khoá sổ**: đối chiếu số dư phải thu từng sàn, cổng, đơn vị vận chuyển là một dòng trong checklist khoá sổ ([[kt-36-quy-trinh-khoa-so]]); đối soát ngân hàng nói chung xem [[kt-32-tien-ngan-hang-vay]].

## Nguồn

- Thông tư 99/2025/TT-BTC, Phụ lục II Mục B: TK 112, TK 113 (nguyên tắc, kết cấu, mục 3.1, 3.5, tài khoản chi tiết), TK 131 (nguyên tắc mục a–d, kết cấu, số dư Có, mục 3.1, 3.2), TK 138 và TK 1388 (nguyên tắc, kết cấu), TK 157 (nguyên tắc mục a, b; mục 3.1, 3.3). Toàn văn: https://luatvietnam.vn/linh-vuc-khac/tai-thong-tu-99-2025-tt-btc-huong-dan-che-do-ke-toan-doanh-nghiep-186-105034-article.html; bản trích TK 113, TK 131, TK 138 đã đối chiếu: https://ketoanleanh.edu.vn/kinh-nghiem-ke-toan/tai-khoan-113-tien-dang-chuyen-theo-thong-tu-99-2025-tt-btc.html, https://ketoanleanh.edu.vn/kinh-nghiem-ke-toan/tai-khoan-131-phai-thu-cua-khach-hang-theo-thong-tu-99-2025-tt-btc.html, https://ketoanleanh.edu.vn/kinh-nghiem-ke-toan/tai-khoan-138-phai-thu-khac-theo-thong-tu-99-2025-tt-btc.html
- Chuẩn mực kế toán Việt Nam số 14, đoạn 10 (điều kiện ghi nhận doanh thu bán hàng): https://cdn.thuvienphapluat.vn//uploads/Hoidapphapluat/2024/TTTT/240830/Chuan-muc-ke-toan-14.doc
- EY Việt Nam, Tin nhanh tháng 6/2025 về Nghị định 117/2025/NĐ-CP: https://www.ey.com/content/dam/ey-unified-site/ey-com/vi-vn/technical/tax/documents/people-advisory-services-tax-alert-june-2025-decree-117-on-management-for-business-activities-on-e-commerce-and-digital-platforms-vn.pdf
- Odoo 19 Documentation, Bank reconciliation: https://www.odoo.com/documentation/19.0/applications/finance/accounting/bank/reconciliation.html
- Odoo 19 Documentation, Reconciliation models: https://www.odoo.com/documentation/19.0/applications/finance/accounting/bank/reconciliation_models.html
- Odoo 19 Documentation, Payments (outstanding accounts): https://www.odoo.com/documentation/19.0/applications/finance/accounting/payments.html
- Odoo 19 Documentation, Payment providers (Payment journal, Accounting perspective): https://www.odoo.com/documentation/19.0/applications/finance/payment_providers.html
- Odoo 19 Documentation, Amazon order management (Register payments): https://www.odoo.com/documentation/19.0/applications/sales/sales/amazon_connector/manage.html
