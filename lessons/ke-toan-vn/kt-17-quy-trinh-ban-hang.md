# Quy trình bán hàng: thời điểm ghi nhận doanh thu và giá vốn

Bài này giúp bạn nhìn một quy trình bán hàng (báo giá → đơn bán → giao hàng → hoá đơn → thu tiền) và chỉ ra được bước nào sinh bút toán, bút toán gì, và vì sao có lúc doanh thu kế toán không trùng ngày với hoá đơn hay ngày thu tiền.

## Bước nào trong quy trình sinh bút toán

Một luồng bán hàng điển hình có năm bước. Không phải bước nào cũng ghi sổ cái:

| Bước | Chứng từ thường gặp | Có bút toán sổ cái không |
|---|---|---|
| Báo giá | Báo giá | Không. Chưa có nghĩa vụ hay quyền nào phát sinh |
| Đơn bán / hợp đồng | Đơn đặt hàng, hợp đồng | Không. Chỉ là cam kết |
| Giao hàng | Phiếu xuất kho, biên bản giao nhận | Có, nếu giao hàng là thời điểm đủ điều kiện ghi nhận doanh thu; hoặc ghi hàng gửi đi bán nếu chưa đủ điều kiện |
| Hoá đơn | Hoá đơn GTGT / hoá đơn bán hàng | Thuế GTGT đầu ra gắn với hoá đơn; doanh thu ghi theo điều kiện ghi nhận, không theo tờ hoá đơn |
| Thu tiền | Phiếu thu, giấy báo có | Có: giảm phải thu |

Điểm cần nhớ: báo giá và đơn bán là dữ liệu nghiệp vụ, không phải dữ liệu kế toán. Thời điểm ghi doanh thu do điều kiện ghi nhận quyết định, không do việc hệ thống "xác nhận đơn".

<step-flow>
<svg viewBox="0 0 680 200" role="img" aria-labelledby="kt17s-t" style="width:100%;max-width:680px;height:auto;display:block;margin:1.25rem auto" font-family="ui-sans-serif, system-ui, sans-serif">
<title id="kt17s-t">Năm bước bán hàng và bút toán phát sinh</title>
<defs>
<marker id="kt17s-arrow" markerWidth="9" markerHeight="9" refX="8" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 z" fill="currentColor"/></marker>
</defs>
<g data-step="1">
<rect x="5" y="30" width="120" height="50" rx="10" fill="#94a3b8" fill-opacity="0.15" stroke="currentColor" stroke-opacity="0.22"/>
<text x="65" y="60" font-size="13" text-anchor="middle" fill="currentColor">Báo giá, đơn bán</text>
<text x="65" y="110" font-size="12" text-anchor="middle" fill="currentColor" opacity="0.75">Không ghi sổ</text>
</g>
<g data-step="2">
<line x1="125" y1="55" x2="160" y2="55" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" marker-end="url(#kt17s-arrow)"/>
<rect x="163" y="30" width="120" height="50" rx="10" fill="#3b82f6" fill-opacity="0.13" stroke="currentColor" stroke-opacity="0.22"/>
<text x="223" y="60" font-size="13" text-anchor="middle" fill="currentColor">Giao hàng</text>
<text x="223" y="110" font-size="12" text-anchor="middle" fill="currentColor" opacity="0.75">Nợ 632 / Có 156</text>
<text x="223" y="128" font-size="12" text-anchor="middle" fill="currentColor" opacity="0.75">hoặc Nợ 157 / Có 156</text>
</g>
<g data-step="3">
<line x1="283" y1="55" x2="318" y2="55" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" marker-end="url(#kt17s-arrow)"/>
<rect x="321" y="30" width="120" height="50" rx="10" fill="#f59e0b" fill-opacity="0.14" stroke="currentColor" stroke-opacity="0.22"/>
<text x="381" y="60" font-size="13" text-anchor="middle" fill="currentColor">Đủ điều kiện</text>
<text x="381" y="110" font-size="12" text-anchor="middle" fill="currentColor" opacity="0.75">Nợ 131</text>
<text x="381" y="128" font-size="12" text-anchor="middle" fill="currentColor" opacity="0.75">Có 511, Có 3331</text>
</g>
<g data-step="4">
<line x1="441" y1="55" x2="476" y2="55" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" marker-end="url(#kt17s-arrow)"/>
<rect x="479" y="30" width="90" height="50" rx="10" fill="#10b981" fill-opacity="0.16" stroke="currentColor" stroke-opacity="0.22"/>
<text x="524" y="60" font-size="13" text-anchor="middle" fill="currentColor">Thu tiền</text>
<text x="524" y="110" font-size="12" text-anchor="middle" fill="currentColor" opacity="0.75">Nợ 112 / Có 131</text>
</g>
<g data-step="5">
<line x1="569" y1="55" x2="595" y2="55" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" marker-end="url(#kt17s-arrow)"/>
<rect x="598" y="30" width="77" height="50" rx="10" fill="#8b5cf6" fill-opacity="0.14" stroke="currentColor" stroke-opacity="0.22"/>
<text x="636" y="60" font-size="13" text-anchor="middle" fill="currentColor">Cuối kỳ</text>
<text x="636" y="110" font-size="12" text-anchor="middle" fill="currentColor" opacity="0.75">Kết chuyển</text>
<text x="636" y="128" font-size="12" text-anchor="middle" fill="currentColor" opacity="0.75">511, 632 → 911</text>
</g>
</svg>
<step-note data-step="1">Báo giá và đơn bán chỉ là cam kết, chưa có bút toán nào lên sổ cái.</step-note>
<step-note data-step="2">Xuất kho giao cho khách. Nếu giao hàng là lúc đủ điều kiện ghi nhận thì ghi giá vốn ngay; nếu hàng đi rồi mà khách chưa chấp nhận thì ghi hàng gửi đi bán (TK 157).</step-note>
<step-note data-step="3">Khi đủ điều kiện ghi nhận doanh thu: ghi phải thu, doanh thu chưa thuế và thuế GTGT đầu ra. Với hàng ở TK 157, đồng thời ghi Nợ 632 / Có 157.</step-note>
<step-note data-step="4">Thu tiền chỉ làm giảm công nợ phải thu, không tạo thêm doanh thu.</step-note>
<step-note data-step="5">Cuối kỳ, TK 511 và TK 632 không còn số dư: kết chuyển sang TK 911 để xác định kết quả.</step-note>
</step-flow>

## Điều kiện ghi nhận doanh thu bán hàng

VAS 14 (đoạn 10) và Thông tư 99/2025/TT-BTC (Phụ lục II, TK 511, mục 1.2.a) cùng yêu cầu doanh thu bán hàng chỉ được ghi nhận khi **đồng thời** thoả mãn năm điều kiện:

1. Đã chuyển giao phần lớn rủi ro và lợi ích gắn liền với quyền sở hữu sản phẩm, hàng hoá cho người mua.
2. Không còn nắm giữ quyền quản lý hàng hoá như người sở hữu hoặc quyền kiểm soát hàng hoá.
3. Doanh thu được xác định tương đối chắc chắn.
4. Đã hoặc sẽ thu được lợi ích kinh tế từ giao dịch.
5. Xác định được chi phí liên quan đến giao dịch bán hàng.

Với cung cấp dịch vụ, điều kiện là bốn: doanh thu xác định tương đối chắc chắn, có khả năng thu được lợi ích kinh tế, xác định được phần công việc đã hoàn thành tại ngày báo cáo, xác định được chi phí đã phát sinh và chi phí để hoàn thành (VAS 14 đoạn 16; TT99 TK 511 mục 1.2.b).

VAS 14 (đoạn 11) nêu các trường hợp doanh nghiệp **vẫn còn chịu phần lớn rủi ro** nên chưa được ghi doanh thu, ví dụ:

- Còn chịu trách nhiệm để tài sản hoạt động bình thường ngoài điều khoản bảo hành thông thường.
- Việc thanh toán còn chưa chắc chắn vì phụ thuộc vào người mua hàng hoá đó.
- Hàng đã giao nhưng còn chờ lắp đặt, và lắp đặt là phần quan trọng của hợp đồng mà doanh nghiệp chưa hoàn thành.
- Người mua có quyền huỷ mua vì lý do nêu trong hợp đồng và doanh nghiệp chưa chắc hàng có bị trả lại hay không.

Ngược lại, nếu chỉ còn chịu một phần nhỏ rủi ro, ví dụ giữ giấy tờ sở hữu chỉ để đảm bảo được thanh toán đủ, thì vẫn ghi nhận doanh thu (VAS 14 đoạn 13).

TT99 (TK 511 mục 1.3) đưa thêm ví dụ về hợp đồng gồm nhiều giao dịch: nếu bên bán chịu trách nhiệm lắp đặt thì doanh thu chỉ ghi nhận sau khi lắp đặt xong; nếu bán hàng kèm nghĩa vụ dịch vụ sau bán (ngoài bảo hành thông thường) thì phải ghi riêng doanh thu bán hàng và doanh thu dịch vụ.

> 💡 Với BA, năm điều kiện này là câu hỏi cần hỏi khách khi chốt "doanh thu ghi lúc nào": hàng giao xong là xong, hay còn chờ nghiệm thu, lắp đặt, chạy thử? Câu trả lời quyết định bút toán nằm ở bước giao hàng, bước nghiệm thu hay bước khác.

## Bút toán ở từng bước

Các bút toán dưới đây lấy từ TT99 Phụ lục II (TK 131, 157, 511, 632, 3331). Ví dụ giả định: doanh nghiệp tính thuế GTGT theo phương pháp khấu trừ, giá vốn lô hàng 70 triệu, giá bán chưa thuế 100 triệu, thuế suất giả định 10%.

### Trường hợp 1: giao hàng là lúc đủ điều kiện ghi nhận

Khi giao hàng và khách chấp nhận ngay:

- Ghi doanh thu và thuế: `Nợ TK 131 (110 triệu) / Có TK 511 (100 triệu) / Có TK 3331 (10 triệu)`.
- Ghi giá vốn: `Nợ TK 632 / Có TK 156 (70 triệu)`. TT99 TK 632 mục 3.a: khi xuất bán hàng được xác định là đã bán trong kỳ (kể cả hàng tặng kèm) ghi Nợ 632, Có các TK 154, 155, 156, 157.

Khi thu tiền: `Nợ TK 112 / Có TK 131 (110 triệu)`.

Doanh thu và giá vốn được ghi đồng thời theo nguyên tắc phù hợp (VAS 14 đoạn 15; TT99 phần nguyên tắc kế toán các khoản doanh thu, mục 2).

### Trường hợp 2: hàng đã đi nhưng chưa được xác định là đã bán

TT99 TK 157 dùng cho hàng hoá, sản phẩm đã gửi cho khách, gửi đại lý, ký gửi, hoặc dịch vụ đã bàn giao, nhưng **chưa được khách chấp nhận thanh toán** nên chưa tính là doanh thu. Hàng trên TK 157 vẫn thuộc quyền sở hữu của doanh nghiệp.

- Khi xuất kho gửi đi: `Nợ TK 157 / Có TK 155, 156`.
- Khi được xác định là đã bán: `Nợ TK 131 / Có TK 511 / Có TK 333`, đồng thời `Nợ TK 632 / Có TK 157`.

Số dư Nợ TK 157 cuối kỳ là hàng đã đi khỏi kho nhưng chưa được xác định là đã bán. TT99 TK 511 mục 1.5.15 cũng nói rõ không ghi doanh thu đối với trị giá hàng gửi bán đại lý, ký gửi chưa được xác định là đã bán.

> ⚠️ Kho vật lý đã giảm nhưng tài sản của doanh nghiệp chưa giảm: hàng trên TK 157 vẫn thuộc quyền sở hữu của doanh nghiệp và chưa có giá vốn. Báo cáo tồn kho của phân hệ kho và số dư sổ cái sẽ lệch nếu hệ thống không có khái niệm "hàng đang gửi". Chi tiết về hàng gửi đi và kho ảo: [[kt-25-kho-thue-ngoai-kho-san]].

### Trường hợp 3: khách trả tiền trước khi giao hàng

TT99 TK 511 mục 1.5.2: nếu trong kỳ đã thu tiền nhưng đến cuối kỳ vẫn chưa giao hàng, chưa cung cấp dịch vụ thì **không được ghi vào TK 511**, chỉ ghi bên Có TK 131 về khoản tiền đã thu. Khi thực giao hàng mới ghi TK 511.

- Khi nhận tiền trước: `Nợ TK 112 / Có TK 131`.
- Khi giao hàng: `Nợ TK 131 / Có TK 511 / Có TK 3331` và `Nợ TK 632 / Có TK 156`.

VAS 14 đoạn 15 nói cùng ý: tiền nhận trước của khách được ghi nhận là một khoản nợ phải trả, chỉ thành doanh thu khi thoả mãn năm điều kiện. Cách TT99 tách số dư Có TK 131 ra phía nguồn vốn khi lập báo cáo được trình bày ở [[kt-18-giam-tru-tra-truoc]].

### Thuế gián thu tách ngay hay ghi gộp rồi tách sau

TT99 (TK 511 mục 1.5.1 và TK 333 mục 1.c) cho phép hai cách:

- Tách riêng thuế gián thu ngay khi ghi doanh thu (`Có TK 511` theo giá chưa thuế, `Có TK 333` phần thuế).
- Nếu không tách ngay được, ghi doanh thu gồm cả thuế, rồi định kỳ ghi giảm: `Nợ TK 511 / Có TK 333`.

Dù chọn cách nào, chỉ tiêu "Doanh thu bán hàng và cung cấp dịch vụ" và "Các khoản giảm trừ doanh thu" trên Báo cáo kết quả hoạt động kinh doanh không được bao gồm thuế gián thu phải nộp.

## Lệch kỳ giữa giao hàng, hoá đơn và doanh thu

TT99 (nguyên tắc kế toán các khoản doanh thu, mục 5) viết rõ: thời điểm, căn cứ ghi nhận doanh thu kế toán và doanh thu tính thuế có thể khác nhau; doanh thu trên sổ để lập báo cáo tài chính phải tuân thủ nguyên tắc kế toán và **không nhất thiết phải bằng số đã ghi trên hoá đơn bán hàng**.

Phía hoá đơn và thuế có mốc riêng:

- Nghị định 254/2026/NĐ-CP (hiệu lực từ 01/07/2026, thay Nghị định 123/2020/NĐ-CP và Nghị định 70/2025/NĐ-CP theo Điều 43), Điều 9 khoản 1: thời điểm lập hoá đơn khi bán hàng hoá là thời điểm chuyển giao quyền sở hữu hoặc quyền sử dụng hàng hoá cho người mua, không phân biệt đã thu tiền hay chưa.
- Cùng điều, khoản 2: với dịch vụ là thời điểm hoàn thành cung cấp dịch vụ; nếu thu tiền trước hoặc trong khi cung cấp dịch vụ thì thời điểm lập hoá đơn là thời điểm thu tiền, không gồm tiền đặt cọc theo Bộ luật Dân sự để bảo đảm thực hiện hợp đồng cung cấp dịch vụ. Nghị định 70/2025 trước đây liệt kê riêng một số loại dịch vụ (kế toán, kiểm toán, tư vấn tài chính, thuế, thẩm định giá...) có tiền đặt cọc, tạm ứng được loại trừ; khoản 2 Điều 9 Nghị định 254 không còn danh sách này.
- Luật Thuế GTGT 48/2024/QH15, Điều 8: thời điểm xác định thuế GTGT với hàng hoá là thời điểm chuyển giao quyền sở hữu hoặc quyền sử dụng hoặc thời điểm lập hoá đơn; với dịch vụ là thời điểm hoàn thành cung cấp dịch vụ hoặc thời điểm lập hoá đơn.

Các tình huống lệch kỳ BA hay gặp:

- **Giao hàng ngày cuối kỳ, khách nghiệm thu đầu kỳ sau.** Nếu nghiệm thu là điều kiện chuyển giao rủi ro thì hàng nằm ở TK 157 qua kỳ; doanh thu và giá vốn thuộc kỳ sau.
- **Dịch vụ thu tiền trước.** Hoá đơn phải lập lúc thu tiền (trừ ngoại lệ đặt cọc nêu trên), nhưng doanh thu kế toán ghi theo phần dịch vụ đã cung cấp. Với tiền thu trước cho nhiều kỳ, TT99 hướng dẫn qua TK 3387 (xem [[kt-18-giam-tru-tra-truoc]]).
- **Hàng giao chờ lắp đặt.** Theo TT99 TK 511 mục 1.3, doanh thu chỉ ghi khi lắp đặt xong.

> ⚠️ Cần xác nhận: khi hàng đã giao (đã chuyển quyền sở hữu, phải lập hoá đơn) nhưng doanh thu kế toán chưa đủ điều kiện ghi nhận, cách hạch toán số thuế GTGT đầu ra đã kê khai trong thời gian chờ không được hướng dẫn trong các phần TT99 đã đọc. Cần đối chiếu với kế toán trưởng của khách hoặc văn bản hướng dẫn thuế.

## Ảnh hưởng tới báo cáo

- **Báo cáo kết quả hoạt động kinh doanh:** TK 511 không có số dư; cuối kỳ kết chuyển các khoản giảm trừ (`Nợ TK 511 / Có TK 521`) rồi kết chuyển doanh thu thuần (`Nợ TK 511 / Có TK 911`). TK 632 cũng kết chuyển sang TK 911. Xem [[kt-40-bao-cao-ket-qua-kinh-doanh]].
- **Báo cáo tình hình tài chính:** số dư Nợ TK 131 là tiền còn phải thu; số dư TK 157 là hàng đã gửi đi nhưng chưa được xác định là đã bán. Xem [[kt-39-bao-cao-tinh-hinh-tai-chinh]].
- **Thuyết minh:** VAS 14 đoạn 34 yêu cầu trình bày chính sách ghi nhận doanh thu và doanh thu theo từng loại giao dịch (bán hàng, cung cấp dịch vụ...). TT99 TK 511 cho phép mở tài khoản chi tiết doanh thu theo loại (hàng hoá, sản phẩm, dịch vụ...) cho phù hợp yêu cầu quản lý.

## Điểm chạm hệ thống

- Phân tách "xác nhận đơn", "giao hàng", "xuất hoá đơn" và "ghi nhận doanh thu" là bốn sự kiện có thể khác ngày. Hệ thống cần cho phép cấu hình sự kiện nào sinh bút toán doanh thu theo chính sách của khách.
- Nếu hệ thống ghi giá vốn lúc xuất kho còn doanh thu lúc xuất hoá đơn, cuối kỳ có thể có giá vốn không đi kèm doanh thu (hoặc ngược lại). Cần một báo cáo đối chiếu hàng đã giao chưa xuất hoá đơn và hoá đơn đã xuất chưa giao hàng.
- Bài tiếp: [[kt-18-giam-tru-tra-truoc]] (chiết khấu, giảm giá, tiền nhận trước) và [[kt-19-doi-tra-hoan-tien]] (đổi trả, hoàn tiền).

## Nguồn

- Chuẩn mực kế toán Việt Nam số 14 "Doanh thu và thu nhập khác" (ban hành theo Quyết định 149/2001/QĐ-BTC), đoạn 03, 10, 11, 13, 15, 16, 34. Bản .doc: https://cdn.thuvienphapluat.vn//uploads/Hoidapphapluat/2024/TTTT/240830/Chuan-muc-ke-toan-14.doc
- Thông tư 99/2025/TT-BTC, Phụ lục II, phần B: Nguyên tắc kế toán các khoản doanh thu (mục 1–7); TK 511 (mục 1.2, 1.3, 1.5.1, 1.5.2, 1.5.15, kết cấu, 3.1, 3.17, 3.18). Bản đăng tại https://expertis.vn/van-ban/phu-luc-ii-thong-tu-99-2025-tt-btc/ và tệp https://expertis.vn/wp-content/uploads/2026/01/Loai-tai-khoan-doanh-thu-TK-511-⟶-521.pdf
- Thông tư 99/2025/TT-BTC, Phụ lục II: TK 131 (mục 1, 2, 3.1), TK 157 (mục 1, 2, 3.1–3.3). Tệp https://expertis.vn/wp-content/uploads/2026/01/Loai-tai-khoan-tai-san-TK-111-⟶-244.pdf
- Thông tư 99/2025/TT-BTC, Phụ lục II: TK 632 (mục 1, 2, 3.a). Tệp https://expertis.vn/wp-content/uploads/2026/01/Loai-tai-khoan-chi-phi-san-xuat-kinh-doanh-TK-621-⟶-642.pdf
- Thông tư 99/2025/TT-BTC, Phụ lục II: TK 333 (mục 1.c, 3.1.1). Tệp https://expertis.vn/wp-content/uploads/2026/01/Loai-tai-khoan-no-phai-tra-TK-331-⟶-357.pdf
- Nghị định 254/2026/NĐ-CP quy định chi tiết Luật Quản lý thuế về hoá đơn điện tử, chứng từ điện tử: Điều 9 khoản 1, 2 (thời điểm lập hoá đơn); Điều 43 (hiệu lực, văn bản hết hiệu lực). https://luatvietnam.vn/thue/nghi-dinh-254-2026-nd-cp-huong-dan-thi-hanh-luat-quan-ly-thue-2025-ve-hoa-don-dien-tu-439381-d1.html
- Nghị định 70/2025/NĐ-CP sửa đổi Nghị định 123/2020/NĐ-CP (đã hết hiệu lực từ 01/07/2026; chỉ dùng để so sánh danh sách ngoại lệ tiền đặt cọc cũ), khoản 6 Điều 1: https://luatvietnam.vn/tai-chinh/nghi-dinh-70-2025-nd-cp-cua-chinh-phu-sua-doi-bo-sung-mot-so-dieu-cua-nghi-dinh-123-2020-nd-cp-ngay-19-10-2020-cua-chinh-phu-quy-dinh-ve-hoa-don-chung-tu-394682-d1.html
- Luật Thuế GTGT 48/2024/QH15, Văn bản hợp nhất 12/VBHN-VPQH (2026), Điều 8: https://datafiles.chinhphu.vn/cpp/files/vbpq/2026/02/12-vbhn-vpqh.pdf
