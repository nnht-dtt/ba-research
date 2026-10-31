# Quy trình mua hàng: bước nào sinh bút toán

Bài này đi qua chu trình mua hàng từ đề nghị mua đến thanh toán, chỉ ra bước nào chỉ là chứng từ quản lý và bước nào làm phát sinh bút toán theo Thông tư 99/2025/TT-BTC (TT99). Đọc xong, bạn biết khi nào kho, công nợ phải trả và thuế GTGT đầu vào thay đổi, và vì sao hệ thống phải đối chiếu đơn mua, phiếu nhập và hoá đơn.

## Năm bước của chu trình mua hàng

Một giao dịch mua hàng hoá, vật tư thường đi qua năm bước:

1. **Đề nghị mua**: bộ phận có nhu cầu đề xuất mua.
2. **Đơn mua hàng** (hoặc hợp đồng): doanh nghiệp cam kết mua với nhà cung cấp.
3. **Nhận hàng**: hàng về kho, được kiểm nhận và lập phiếu nhập kho.
4. **Hoá đơn của người bán**: căn cứ ghi nhận giá mua và thuế GTGT đầu vào.
5. **Thanh toán**: trả tiền cho người bán (hoặc ứng trước từ trước khi nhận hàng).

Đề nghị mua và đơn mua là chứng từ quản lý nội bộ và chứng từ cam kết. Ở hai bước này doanh nghiệp chưa nhận tài sản và chưa có khoản nợ đối với người bán, nên chưa có bút toán trên sổ cái. TT99 định nghĩa phải trả cho người bán là khoản phải trả "phát sinh từ giao dịch mua hàng hóa, dịch vụ, tài sản". Bút toán bắt đầu khi hàng hoặc hoá đơn về.

<step-flow>
<svg viewBox="0 0 700 170" role="img" aria-labelledby="kt12f-t" style="width:100%;max-width:700px;height:auto;display:block;margin:1.25rem auto" font-family="ui-sans-serif, system-ui, sans-serif">
<title id="kt12f-t">Chu trình mua hàng và bút toán phát sinh</title>
<defs>
<marker id="kt12f-arrow" markerWidth="9" markerHeight="9" refX="8" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 z" fill="currentColor"/></marker>
</defs>
<g data-step="1">
<rect x="5" y="30" width="120" height="56" rx="10" fill="#94a3b8" fill-opacity="0.15" stroke="currentColor" stroke-opacity="0.22"/>
<text x="65" y="63" font-size="13" text-anchor="middle" fill="currentColor">Đề nghị mua</text>
<line x1="125" y1="58" x2="143" y2="58" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" marker-end="url(#kt12f-arrow)"/>
<rect x="145" y="30" width="120" height="56" rx="10" fill="#94a3b8" fill-opacity="0.15" stroke="currentColor" stroke-opacity="0.22"/>
<text x="205" y="63" font-size="13" text-anchor="middle" fill="currentColor">Đơn mua</text>
<text x="135" y="112" font-size="12" text-anchor="middle" fill="currentColor" fill-opacity="0.75">Chưa có bút toán</text>
</g>
<g data-step="2">
<line x1="265" y1="58" x2="283" y2="58" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" marker-end="url(#kt12f-arrow)"/>
<rect x="285" y="30" width="120" height="56" rx="10" fill="#3b82f6" fill-opacity="0.14" stroke="currentColor" stroke-opacity="0.22"/>
<text x="345" y="63" font-size="13" text-anchor="middle" fill="currentColor">Nhận hàng</text>
<text x="345" y="112" font-size="12" text-anchor="middle" fill="currentColor">Nợ 152/153/156</text>
</g>
<g data-step="3">
<line x1="405" y1="58" x2="423" y2="58" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" marker-end="url(#kt12f-arrow)"/>
<rect x="425" y="30" width="120" height="56" rx="10" fill="#f59e0b" fill-opacity="0.15" stroke="currentColor" stroke-opacity="0.22"/>
<text x="485" y="63" font-size="13" text-anchor="middle" fill="currentColor">Hoá đơn</text>
<text x="485" y="112" font-size="12" text-anchor="middle" fill="currentColor">Nợ 133 / Có 331</text>
</g>
<g data-step="4">
<line x1="545" y1="58" x2="563" y2="58" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" marker-end="url(#kt12f-arrow)"/>
<rect x="565" y="30" width="120" height="56" rx="10" fill="#10b981" fill-opacity="0.16" stroke="currentColor" stroke-opacity="0.22"/>
<text x="625" y="63" font-size="13" text-anchor="middle" fill="currentColor">Thanh toán</text>
<text x="625" y="112" font-size="12" text-anchor="middle" fill="currentColor">Nợ 331 / Có 112</text>
</g>
<g data-step="5">
<rect x="285" y="128" width="260" height="34" rx="8" fill="#a855f7" fill-opacity="0.13" stroke="currentColor" stroke-opacity="0.22"/>
<text x="415" y="150" font-size="12" text-anchor="middle" fill="currentColor">Đối chiếu: đơn mua – phiếu nhập – hoá đơn</text>
</g>
</svg>
<step-note data-step="1">Đề nghị mua và đơn mua là chứng từ quản lý, chưa làm thay đổi tài sản hay nợ phải trả.</step-note>
<step-note data-step="2">Hàng về, kiểm nhận, lập phiếu nhập kho. Giá trị nhập kho ghi Nợ TK 152, 153 hoặc 156 tuỳ loại hàng. Sơ đồ tách hai vế cho dễ nhìn; khi hàng và hoá đơn cùng về, đây là một bút toán duy nhất với bước kế tiếp.</step-note>
<step-note data-step="3">Hoá đơn cho giá mua và thuế GTGT đầu vào. Khi có cả hoá đơn và phiếu nhập kho, TT99 ghi một bút toán: Nợ TK hàng tồn kho, Nợ TK 133, Có TK 331.</step-note>
<step-note data-step="4">Trả tiền ghi giảm nợ phải trả: Nợ TK 331 / Có TK 111, 112.</step-note>
<step-note data-step="5">Trước khi trả tiền, hệ thống đối chiếu số lượng và giá giữa đơn mua, phiếu nhập và hoá đơn.</step-note>
</step-flow>

## Chứng từ của từng bước

Phụ lục I TT99 có các mẫu chứng từ tham khảo dùng trong chu trình mua:

- **Phiếu nhập kho** (Mẫu 01-VT): xác nhận số lượng vật tư, công cụ, hàng hoá nhập kho, làm căn cứ ghi thẻ kho, thanh toán tiền hàng và ghi sổ kế toán. Phiếu ghi rõ số hoá đơn hoặc lệnh nhập kho, tên kho, địa điểm kho.
- **Biên bản kiểm nghiệm** (Mẫu 03-VT): xác định số lượng, quy cách, chất lượng trước khi nhập kho. Dùng khi nhập với số lượng lớn, và bắt buộc lập khi phát hiện khác biệt lớn về số lượng, chất lượng giữa hoá đơn và thực nhập.
- **Bảng kê mua hàng** (Mẫu 06-VT): dùng khi người bán không phải lập hoá đơn. Thuế GTGT của hàng mua lập trên bảng kê này không được khấu trừ.
- **Giấy đề nghị thanh toán** (Mẫu 05-TT), **Phiếu chi** (Mẫu 02-TT) hoặc chứng từ ngân hàng: căn cứ thanh toán.

Theo Điều 9 TT99, doanh nghiệp được thiết kế thêm hoặc sửa mẫu chứng từ, miễn tuân thủ Điều 16 Luật Kế toán và ban hành quy chế nội bộ cho phần sửa đổi. Hệ thống ERP thường dùng mẫu riêng (phiếu nhập, đơn mua). Khi đó doanh nghiệp cần quy chế nội bộ làm căn cứ. Chi tiết về chứng từ và hoá đơn điện tử ở [[kt-09-chung-tu-hoa-don]].

## Bút toán khi hàng và hoá đơn về cùng kỳ

Đây là trường hợp phổ biến nhất. Căn cứ hoá đơn, phiếu nhập kho và chứng từ liên quan, TT99 hướng dẫn (TK 152 mục 3.1, TK 156 mục 3.1, TK 153 mục 3a):

> Nợ TK 152, 153, 156 (giá chưa có thuế GTGT), Nợ TK 1331 (thuế GTGT được khấu trừ, nếu có) / Có TK 111, 112, 141, 331 (tổng giá thanh toán)

Một số điểm BA cần biết khi đọc bút toán này:

- **Chọn tài khoản hàng tồn kho theo mục đích mua.** TK 156 dùng cho hàng mua để bán. Hàng mua về dùng làm nguyên vật liệu, công cụ dụng cụ ghi vào TK 152, 153. Hàng vừa để bán vừa để sản xuất mà không phân biệt rõ mục đích thì TT99 cho ghi vào TK 152. Trên hệ thống, quy tắc này thường gắn vào nhóm sản phẩm.
- **Thuế GTGT không được khấu trừ** thì tính vào giá trị hàng mua (tổng giá thanh toán), không ghi TK 133. Điều kiện khấu trừ ở [[kt-16-thue-gtgt-dau-vao]].
- **Có TK 141** khi nhân viên dùng tiền tạm ứng để mua, **Có TK 111, 112** khi trả ngay, **Có TK 331** khi mua chịu. Tạm ứng xem [[kt-15-tam-ung-dat-coc-can-tru]].
- **Mua hàng về không nhập kho mà giao bán ngay cho khách**: TT99 (TK 133 mục 3.3) ghi Nợ TK 632, Nợ TK 133 / Có TK 111, 112, 331.
- **Dịch vụ mua ngoài** (vận chuyển, điện nước, tư vấn, quảng cáo…) không qua kho: Nợ TK 241, 242, 627, 641, 642…, Nợ TK 133 / Có TK 331 (TK 331 mục 3.5). Phân loại chi phí dịch vụ ở [[kt-14-mua-dich-vu-tai-san]].

> 📌 TK 331 phải hạch toán chi tiết cho từng đối tượng phải trả (TT99, TK 331 nguyên tắc b). Trên hệ thống, mỗi dòng công nợ phải gắn mã nhà cung cấp, không chỉ ghi tổng trên tài khoản. Cách sổ chi tiết đối tượng đổ lên sổ cái xem [[kt-10-so-con-so-cai]].

## Hoá đơn về trước, hàng về sau

TT99 phân biệt rõ thời điểm (TK 151, nguyên tắc d và đ):

- **Trong kỳ**: nhận hoá đơn nhưng hàng chưa về thì **chưa ghi sổ**. Hoá đơn được đối chiếu với hợp đồng và lưu vào hồ sơ riêng "Hàng mua đang đi đường". Nếu hàng về trong kỳ, kế toán căn cứ phiếu nhập kho và hoá đơn để ghi thẳng vào TK 152, 153…
- **Cuối kỳ hàng vẫn chưa về**: căn cứ hoá đơn ghi vào TK 151:

> Nợ TK 151, Nợ TK 133 / Có TK 111, 112, 141, 331

- **Sang kỳ sau, hàng về nhập kho**: Nợ TK 152, 153, 156, 621… / Có TK 151.
- **Hàng đi đường giao thẳng cho khách hoặc gửi đại lý**: Nợ TK 157, 632 / Có TK 151.
- **Hao hụt, mất mát phát hiện khi hàng về**: Nợ TK 138 (1381, 1388) / Có TK 151.

Theo TT99, TK 151 ghi hàng đã thuộc quyền sở hữu của doanh nghiệp nhưng còn đang đi đường. Hàng được coi là đang đi đường gồm hàng đã thanh toán hoặc đã chấp nhận thanh toán nhưng còn ở kho người bán, bến cảng, kho ngoại quan, đang vận chuyển, hoặc đã về doanh nghiệp nhưng đang chờ kiểm nhận nhập kho.

> 💡 Hệ thống không nhất thiết ghi TK 151 cho từng hoá đơn trong kỳ. Cái cần có là một thao tác cuối kỳ: lọc các hoá đơn đã nhận mà chưa có phiếu nhập, rồi ghi nhận vào TK 151. Thao tác này thuộc checklist khoá sổ.

## Hàng về trước, hoá đơn về sau

Trường hợp ngược lại là hàng đã về kho nhưng chưa nhận hoá đơn. Kết cấu TK 331 trong TT99 có dòng bên Có "điều chỉnh số chênh lệch giữa giá tạm tính nhỏ hơn giá thực tế của số vật tư, hàng hóa, dịch vụ đã nhận". Như vậy có thể nhập kho theo giá tạm tính (thường là giá trên đơn mua), khi có hoá đơn thì điều chỉnh theo giá thực tế. Thuế GTGT đầu vào chỉ ghi khi có hoá đơn, vì hoá đơn là điều kiện khấu trừ.

> ⚠️ Cần xác nhận: phần TT99 đã đọc (TK 151, 152, 156, 331) không có mục hướng dẫn riêng cho "hàng về chưa có hoá đơn" ngoài dòng kết cấu nói trên. Giá tạm tính lấy từ đâu và điều chỉnh vào kỳ nào nên được chốt trong chính sách kế toán của doanh nghiệp ([[kt-05-chinh-sach-quy-che]]).

## Thanh toán và các biến thể

- **Thanh toán hoặc ứng trước**: Nợ TK 331 / Có TK 111, 112, 341… (TK 331 mục 3.3). Ứng trước và trả nợ dùng chung bút toán này. Khác nhau ở chỗ ứng trước làm TK 331 của nhà cung cấp đó có số dư Nợ. Chi tiết ở [[kt-15-tam-ung-dat-coc-can-tru]].
- **Người bán hoàn lại tiền đã ứng** vì không giao được hàng: Nợ TK 111, 112 / Có TK 331.
- **Chiết khấu thanh toán** được hưởng do trả sớm: Nợ TK 331 / Có TK 515. Chiết khấu thương mại, giảm giá và trả lại hàng xem [[kt-13-mua-hang-nhap-khau]].
- **Mua trả chậm, trả góp** (TK 156 mục 3.6): hàng ghi theo giá mua trả tiền ngay; định kỳ ghi lãi trả chậm Nợ TK 635 / Có TK 331; khi trả tiền gồm cả gốc và lãi thì Nợ TK 331 / Có TK 111, 112.
- **Khoản phải trả không xác định được chủ nợ** hoặc xác định không phải trả: Nợ TK 331 / Có TK 711.

Với giao dịch bằng ngoại tệ, bên Có TK 331 áp dụng tỷ giá giao dịch thực tế, còn bên Nợ áp dụng tỷ giá giao dịch thực tế hoặc tỷ giá ghi sổ. Cuối kỳ, số dư phải trả gốc ngoại tệ được đánh giá lại (nguyên tắc kế toán nợ phải trả, TT99). Phần tỷ giá ở [[ktqt-05-giao-dich-ngoai-te]].

## Đối chiếu ba chiều

Đối chiếu ba chiều (3-way matching) là so khớp ba chứng từ trước khi trả tiền:

| Chứng từ | Trả lời câu hỏi |
|---|---|
| Đơn mua | Doanh nghiệp đã đặt gì, giá bao nhiêu |
| Phiếu nhập kho | Thực tế đã nhận bao nhiêu, đúng quy cách không |
| Hoá đơn người bán | Người bán đòi tiền bao nhiêu |

Đối chiếu này gắn với các quy định đã nêu. Phiếu nhập kho là căn cứ "thanh toán tiền hàng". Biên bản kiểm nghiệm là căn cứ "để quy trách nhiệm trong thanh toán". TK 151 đòi đối chiếu hoá đơn với hợp đồng. Lệch số lượng hoặc giá dẫn tới trả lại hàng, giảm giá hoặc điều chỉnh công nợ.

**Điểm chạm hệ thống (ví dụ Odoo 19).** Mỗi sản phẩm có chính sách kiểm soát hoá đơn: theo số lượng đặt (tạo hoá đơn ngay khi đơn mua được xác nhận) hoặc theo số lượng đã nhận (chỉ lập hoá đơn sau khi đã nhận ít nhất một phần). Khi bật 3-way matching, hoá đơn có trường "Should Be Paid" để chỉ trả tiền khi đã nhận một phần hoặc toàn bộ hàng. Hoá đơn nháp bị sửa khác đơn mua thì trạng thái chuyển sang Exception. Theo tài liệu Odoo, dịch vụ mặc định kiểm soát theo số lượng đặt. Các hệ thống khác có cơ chế tương đương dưới tên gọi khác.

## Ảnh hưởng tới báo cáo tài chính

- **Hàng tồn kho** tăng khi nhập kho (TK 152, 153, 156) và khi ghi nhận hàng đi đường cuối kỳ (TK 151). TT99 tính cả hàng mua đang đi đường vào nhóm hàng tồn kho. Giá trị ghi theo giá gốc của VAS 02 ([[kt-13-mua-hang-nhap-khau]], [[kt-23-dinh-gia-ton-kho]]).
- **Thuế GTGT được khấu trừ** (TK 133) là tài sản cho tới khi được bù trừ với thuế đầu ra hoặc được hoàn.
- **Phải trả người bán** (TK 331) có số dư Có là nợ phải trả. TK này có thể có số dư Nợ (ứng trước, trả thừa) theo từng đối tượng. Khi lập Báo cáo tình hình tài chính phải lấy số dư chi tiết từng đối tượng để ghi vào cả bên "Tài sản" và bên "Nguồn vốn", không bù trừ giữa các nhà cung cấp. Cuối kỳ, nợ phải trả được phân loại ngắn hạn hoặc dài hạn theo kỳ hạn còn lại. Xem [[kt-39-bao-cao-tinh-hinh-tai-chinh]].

> ❌ Không lấy số dư tổng của TK 331 đưa thẳng lên báo cáo. Nếu dữ liệu công nợ không gắn đối tượng, hệ thống không tách được phần trả trước cho người bán.

## Nguồn

- Thông tư 99/2025/TT-BTC, phần thân: Điều 9 (biểu mẫu chứng từ), Điều 11 (hệ thống tài khoản). Bản PDF: https://static3.luatvietnam.vn/uploaded/others/2025/10/30/tt99_3010133637.pdf
- Thông tư 99/2025/TT-BTC, Phụ lục II: danh mục tài khoản; nguyên tắc kế toán nợ phải trả; TK 133 (mục 3.1–3.3), TK 151, TK 152 (mục 1b, 3.1–3.4), TK 153 (mục 3), TK 156 (mục 1, 3.1–3.6), TK 331 (nguyên tắc, kết cấu, mục 3.1–3.8). Bản đăng lại toàn văn: https://expertis.vn/kb/vbpl/phu-luc-ii-thong-tu-99-2025-tt-btc/ (file "Loại tài khoản tài sản TK 111–244" và "Loại tài khoản nợ phải trả TK 331–357").
- Thông tư 99/2025/TT-BTC, Phụ lục I: danh mục và hướng dẫn Mẫu 01-VT, 03-VT, 06-VT, 05-TT. Bản đăng lại: https://expertis.vn/kb/vbpl/phu-luc-i-thong-tu-99-2025-tt-btc/
- Chuẩn mực kế toán Việt Nam số 02 – Hàng tồn kho (Quyết định 149/2001/QĐ-BTC), đoạn 03–06: https://cdn.thuvienphapluat.vn//uploads/Hoidapphapluat/2024/TTTT/240912/vas2.doc
- Odoo 19 Documentation, Purchase – Control bills (bill control policy, 3-way matching): https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/purchase/manage_deals/control_bills.html
