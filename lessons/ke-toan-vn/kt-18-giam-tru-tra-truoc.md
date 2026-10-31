# Giảm trừ doanh thu, khách trả trước và doanh thu nhận trước

Bài này giúp bạn phân biệt ba nhóm nghiệp vụ hay bị gộp làm một trong yêu cầu hệ thống: các khoản làm giảm doanh thu (chiết khấu thương mại, giảm giá, hàng bị trả lại), chiết khấu thanh toán (không phải giảm trừ doanh thu), và tiền khách trả trước (TK 131 hay TK 3387).

## Ba khoản giảm trừ doanh thu theo VAS 14 và TT99

VAS 14 (đoạn 03) định nghĩa:

- **Chiết khấu thương mại:** khoản doanh nghiệp bán giảm giá niêm yết cho khách mua hàng với khối lượng lớn.
- **Giảm giá hàng bán:** khoản giảm trừ cho người mua do hàng kém phẩm chất, sai quy cách hoặc lạc hậu thị hiếu.
- **Giá trị hàng bán bị trả lại:** giá trị khối lượng hàng đã xác định là tiêu thụ bị khách trả lại và từ chối thanh toán.

VAS 14 đoạn 06 nói doanh thu được xác định bằng giá trị hợp lý của khoản đã thu hoặc sẽ thu **sau khi trừ** chiết khấu thương mại, chiết khấu thanh toán, giảm giá hàng bán và giá trị hàng bán bị trả lại.

Thông tư 99/2025/TT-BTC dùng **TK 521 – Các khoản giảm trừ doanh thu** cho ba khoản chiết khấu thương mại, giảm giá hàng bán, hàng bán bị trả lại. Trong danh mục tài khoản của TT99, TK 521 không có tài khoản cấp 2; TT99 cho phép doanh nghiệp tự mở chi tiết (chiết khấu thương mại, giảm giá hàng bán, hàng bán bị trả lại...) và yêu cầu theo dõi chi tiết **cho từng khách hàng và từng loại hàng bán**. TK 521 không có số dư; cuối kỳ kết chuyển sang TK 511: `Nợ TK 511 / Có TK 521`.

TK 521 cũng không phản ánh các khoản thuế được giảm trừ vào doanh thu như thuế GTGT đầu ra tính theo phương pháp trực tiếp.

> 📌 Chiết khấu thanh toán (khách trả sớm hơn hạn) không đi qua TK 521. TT99 TK 131 mục 3.4 hạch toán vào chi phí tài chính: `Nợ TK 111, 112 / Nợ TK 635 / Có TK 131`. VAS 14 đoạn 02.c liệt kê chiết khấu thanh toán trong nhóm tiền lãi, tức là gắn với hoạt động tài chính. Lưu ý đoạn 06 của VAS 14 lại liệt kê chiết khấu thanh toán trong các khoản trừ khi xác định doanh thu; hướng dẫn hạch toán cụ thể của TT99 là đưa vào TK 635, nên khi cấu hình theo chế độ TT99 thì chiết khấu thanh toán đi vào chi phí tài chính.

## Khi nào dùng TK 521, khi nào ghi thẳng giá thuần

Điểm hay bị hiểu sai: không phải mọi khoản chiết khấu, giảm giá đều đi qua TK 521. TT99 (TK 521 mục 1.c, 1.d và TK 131 mục 3.3) phân hai trường hợp:

<ab-toggle data-labels="Thể hiện ngay trên hoá đơn|Phát sinh sau khi đã lập hoá đơn">
<svg viewBox="0 0 640 130" role="img" aria-label="Chiết khấu trên hoá đơn: ghi doanh thu thuần" style="width:100%;max-width:640px;height:auto;display:block;margin:1rem auto" font-family="ui-sans-serif, system-ui, sans-serif">
<rect x="10" y="20" width="290" height="90" rx="10" fill="#3b82f6" fill-opacity="0.13" stroke="currentColor" stroke-opacity="0.22"/>
<text x="155" y="55" font-size="14" text-anchor="middle" fill="currentColor">Hoá đơn ghi giá đã trừ</text>
<text x="155" y="80" font-size="14" text-anchor="middle" fill="currentColor">chiết khấu / giảm giá</text>
<rect x="340" y="20" width="290" height="90" rx="10" fill="#10b981" fill-opacity="0.16" stroke="currentColor" stroke-opacity="0.22"/>
<text x="485" y="55" font-size="14" text-anchor="middle" fill="currentColor">Có TK 511 theo giá thuần</text>
<text x="485" y="80" font-size="14" text-anchor="middle" fill="currentColor">Không dùng TK 521</text>
</svg>
<svg viewBox="0 0 640 130" role="img" aria-label="Chiết khấu sau hoá đơn: ghi doanh thu gộp rồi ghi TK 521" style="width:100%;max-width:640px;height:auto;display:block;margin:1rem auto" font-family="ui-sans-serif, system-ui, sans-serif">
<rect x="10" y="20" width="290" height="90" rx="10" fill="#f59e0b" fill-opacity="0.14" stroke="currentColor" stroke-opacity="0.22"/>
<text x="155" y="55" font-size="14" text-anchor="middle" fill="currentColor">Hoá đơn ban đầu: giá gộp</text>
<text x="155" y="80" font-size="14" text-anchor="middle" fill="currentColor">Sau đó mới đủ điều kiện</text>
<rect x="340" y="20" width="290" height="90" rx="10" fill="#f43f5e" fill-opacity="0.12" stroke="currentColor" stroke-opacity="0.22"/>
<text x="485" y="55" font-size="14" text-anchor="middle" fill="currentColor">Nợ TK 521, Nợ TK 3331</text>
<text x="485" y="80" font-size="14" text-anchor="middle" fill="currentColor">Có TK 131 / 111 / 112</text>
</svg>
<ab-note>Hoá đơn đã thể hiện khoản chiết khấu thương mại hoặc giảm giá như một khoản trừ vào số tiền khách phải trả: bên bán không dùng TK 521, doanh thu ghi theo giá đã trừ (doanh thu thuần).</ab-note>
<ab-note>Lúc lập hoá đơn khách chưa đủ điều kiện hoặc chưa xác định được số chiết khấu: ghi doanh thu theo giá chưa trừ (doanh thu gộp), khi khách đủ điều kiện thì ghi riêng khoản giảm trừ vào TK 521.</ab-note>
</ab-toggle>

TT99 (TK 521 mục 1.c) nêu hai tình huống chiết khấu thương mại thường phải theo dõi riêng trên TK 521:

- Khách mua nhiều lần mới đạt mức được hưởng chiết khấu, và số chiết khấu chỉ xác định được ở lần mua cuối, có thể lớn hơn số tiền trên hoá đơn lần cuối.
- Nhà sản xuất đến cuối kỳ mới biết số lượng nhà phân phối (như siêu thị) đã tiêu thụ, từ đó mới xác định số chiết khấu theo doanh số.

Với giảm giá hàng bán, TT99 (TK 521 mục 1.d) chỉ phản ánh vào TK 521 các khoản giảm do chấp thuận giảm giá **sau khi** đã bán hàng (đã ghi doanh thu) và phát hành hoá đơn, tức "giảm giá ngoài hoá đơn".

### Bút toán

Theo TT99 TK 521 mục 3.a, doanh nghiệp tính thuế GTGT theo phương pháp khấu trừ, hàng thuộc đối tượng chịu thuế:

`Nợ TK 521 / Nợ TK 3331 (thuế GTGT đầu ra được giảm) / Có TK 111, 112, 131`

Hàng không chịu thuế GTGT, hoặc doanh nghiệp tính thuế theo phương pháp trực tiếp:

`Nợ TK 521 / Có TK 111, 112, 131`

Ví dụ giả định: khách đạt mức doanh số quý và được chiết khấu 5 triệu chưa thuế, thuế suất giả định 10%, trừ vào công nợ: `Nợ TK 521 (5 triệu) / Nợ TK 3331 (0,5 triệu) / Có TK 131 (5,5 triệu)`.

### Hoá đơn cho chiết khấu thương mại theo doanh số

Thông tư 91/2026/TT-BTC, Điều 10 khoản 5 điểm b (hiệu lực từ 01/07/2026, hướng dẫn Nghị định 254/2026/NĐ-CP; thay quy định cũ tại Điều 19 Nghị định 123/2020/NĐ-CP đã hết hiệu lực): khi chiết khấu thương mại căn cứ vào số lượng, doanh số, số tiền chiết khấu được tính điều chỉnh trên hoá đơn của **lần mua cuối cùng hoặc kỳ tiếp sau**, bảo đảm không vượt quá giá trị trên hoá đơn đó; hoặc lập **hoá đơn điều chỉnh** kèm bảng kê các số hoá đơn cần điều chỉnh, số tiền, tiền thuế điều chỉnh. Bảng kê được lưu tại đơn vị và xuất trình khi cơ quan thuế yêu cầu. Người bán kê khai vào kỳ phát sinh hoá đơn điều chỉnh, người mua kê khai vào kỳ nhận được hoá đơn điều chỉnh (khoản 6 điểm d).

Về thuế GTGT, Nghị định 181/2025/NĐ-CP (Điều 14 khoản 2, bản hợp nhất 2026) quy định khi có chiết khấu thương mại thì giá tính thuế là giá bán đã chiết khấu thương mại, chưa có thuế GTGT.

## Giảm trừ phát sinh ở kỳ sau

TT99 (TK 521 mục 1.b) phân biệt theo thời điểm phát hành báo cáo tài chính:

- Phát sinh **cùng kỳ** tiêu thụ: ghi giảm doanh thu của kỳ phát sinh.
- Hàng bán kỳ trước, kỳ sau mới phát sinh chiết khấu, giảm giá, trả lại nhưng **trước khi phát hành báo cáo tài chính**: coi là sự kiện cần điều chỉnh phát sinh sau ngày lập báo cáo, ghi giảm doanh thu trên báo cáo của kỳ lập báo cáo (kỳ trước).
- Phát sinh **sau khi đã phát hành** báo cáo tài chính: ghi giảm doanh thu của kỳ phát sinh (kỳ sau).

> ⚠️ Với hệ thống, điều này nghĩa là một chứng từ giảm trừ ngày đầu kỳ mới có thể phải ảnh hưởng số liệu kỳ cũ nếu kỳ cũ chưa phát hành báo cáo. Cách khoá sổ và mở lại kỳ cần tính tới tình huống này. Xem [[kt-36-quy-trinh-khoa-so]].

## Khách trả trước: TK 131 chứ không phải doanh thu

TT99 TK 511 mục 1.5.2: tiền đã thu nhưng đến cuối kỳ chưa giao hàng, chưa cung cấp dịch vụ thì **không** ghi TK 511, chỉ ghi **bên Có TK 131**. VAS 14 đoạn 15: tiền nhận trước là một khoản nợ phải trả tại thời điểm nhận.

- Nhận tiền ứng trước theo hợp đồng: `Nợ TK 111, 112 / Có TK 131` (TT99 TK 131 mục 3.5).
- Khi giao hàng: `Nợ TK 131 / Có TK 511 / Có TK 3331`.

Vì vậy TK 131 **có thể có số dư Có**: số tiền nhận trước hoặc số đã thu nhiều hơn số phải thu, chi tiết theo từng khách. TT99 TK 131 mục 2 yêu cầu khi lập Báo cáo tình hình tài chính, lấy **số dư chi tiết theo từng đối tượng** để ghi vào cả hai chỉ tiêu bên "Tài sản" (phải thu) và bên "Nguồn vốn" (người mua trả tiền trước). Không được bù trừ số dư Nợ của khách này với số dư Có của khách khác.

Khoản đặt cọc của khách để bảo đảm thực hiện hợp đồng có thể có bản chất khác tiền ứng trước. Cách tách đặt cọc, tạm ứng và cấn trừ công nợ được trình bày ở [[kt-15-tam-ung-dat-coc-can-tru]].

Tiền khách ký quỹ, ký cược để bảo đảm thực hiện hợp đồng (ví dụ hợp đồng đại lý) thì không phải tiền ứng trước: TT99 dùng **TK 344 – Nhận ký quỹ, ký cược**, ghi `Nợ TK 111, 112 / Có TK 344` khi nhận và `Nợ TK 344 / Có TK 111, 112` khi hoàn trả, theo dõi chi tiết từng đối tượng, kỳ hạn, nguyên tệ. Nếu bên ký quỹ vi phạm hợp đồng và bị phạt trừ vào tiền ký quỹ: `Nợ TK 344 / Có TK 711`.

Với khoản nhận trước bằng ngoại tệ, TT99 TK 511 mục 1.5.4: doanh thu tương ứng với số tiền ứng trước được quy đổi theo tỷ giá giao dịch thực tế tại thời điểm nhận ứng trước. Chi tiết tỷ giá: [[ktqt-05-giao-dich-ngoai-te]].

## Doanh thu chờ phân bổ (TK 3387)

Trong danh mục của TT99, TK 3387 có tên **"Doanh thu chờ phân bổ"**. Tài liệu viết theo chế độ cũ có thể gọi tài khoản này bằng tên khác; khi đọc yêu cầu của khách cần đối chiếu theo số hiệu.

TT99 (TK 338, mô tả TK 3387) nói TK này gồm các khoản doanh thu nhận trước như:

- Tiền khách đã trả trước cho một hoặc nhiều kỳ kế toán về cho thuê tài sản.
- Các khoản doanh thu chờ phân bổ khác như doanh thu tương ứng với giá trị hàng hoá, dịch vụ hoặc số chiết khấu, giảm giá cho khách trong chương trình khách hàng truyền thống (xem [[kt-20-khuyen-mai-voucher-combo]]).

TT99 cũng ghi rõ **không** hạch toán vào TK 3387:

- Tiền nhận trước của người mua mà doanh nghiệp chưa cung cấp sản phẩm, hàng hoá, dịch vụ (khoản này nằm ở TK 131 như trên).
- Doanh thu chưa thu được tiền của hoạt động cho thuê tài sản, cung cấp dịch vụ nhiều kỳ. Doanh thu nhận trước chỉ ghi khi đã thực thu tiền; **không được ghi đối ứng TK 3387 với TK 131**.

Bút toán thu trước tiền nhiều kỳ của hoạt động cung cấp dịch vụ (TT99 TK 511 mục 3.7):

- Khi nhận tiền: `Nợ TK 111, 112 / Có TK 3387 / Có TK 3331 (nếu có)`.
- Định kỳ kết chuyển doanh thu của kỳ: `Nợ TK 3387 / Có TK 511`.
- Nếu phải trả lại tiền vì hợp đồng không thực hiện tiếp hoặc thời gian thực hiện ngắn hơn: `Nợ TK 3387 / Nợ TK 3331 / Có TK 111, 112`.

Ví dụ giả định: khách trả trước 120 triệu chưa thuế cho dịch vụ bảo trì 12 tháng. Lúc thu: `Nợ TK 112 / Có TK 3387 (120 triệu) / Có TK 3331`. Mỗi tháng: `Nợ TK 3387 / Có TK 511 (10 triệu)`.

> 💡 Với BA, câu hỏi phân loại là: tiền thu trước này gắn với một lần giao hàng sắp tới (TK 131) hay với một dịch vụ, quyền sử dụng tài sản trải ra nhiều kỳ (TK 3387)? Hệ thống cần lịch phân bổ cho TK 3387, còn TK 131 thì cần cơ chế cấn trừ tiền ứng trước vào hoá đơn khi giao hàng.

## Ảnh hưởng tới báo cáo

- TT99 TK 511 mục 1.5.1 và TK 333 mục 1.c: chỉ tiêu "Doanh thu bán hàng và cung cấp dịch vụ" và "Các khoản giảm trừ doanh thu" đều không gồm thuế gián thu. Báo cáo kết quả kinh doanh trình bày doanh thu, giảm trừ và doanh thu thuần, nên số liệu TK 521 cần tách được theo bản chất. Xem [[kt-40-bao-cao-ket-qua-kinh-doanh]].
- Chiết khấu thanh toán nằm ở chi phí tài chính, không làm giảm doanh thu thuần.
- Số dư Có TK 131 và số dư TK 3387 nằm phía nợ phải trả trên Báo cáo tình hình tài chính. Xem [[kt-39-bao-cao-tinh-hinh-tai-chinh]].

## Nguồn

- Chuẩn mực kế toán Việt Nam số 14 "Doanh thu và thu nhập khác" (Quyết định 149/2001/QĐ-BTC), đoạn 02, 03, 06, 15. https://cdn.thuvienphapluat.vn//uploads/Hoidapphapluat/2024/TTTT/240830/Chuan-muc-ke-toan-14.doc
- Thông tư 99/2025/TT-BTC, Phụ lục II: TK 511 (mục 1.4, 1.5.1, 1.5.2, 1.5.4, 3.7, 3.17) và TK 521 (mục 1, 2, 3). https://expertis.vn/wp-content/uploads/2026/01/Loai-tai-khoan-doanh-thu-TK-511-⟶-521.pdf
- Thông tư 99/2025/TT-BTC, Phụ lục II: TK 131 (mục 2, 3.3, 3.4, 3.5). https://expertis.vn/wp-content/uploads/2026/01/Loai-tai-khoan-tai-san-TK-111-⟶-244.pdf
- Thông tư 99/2025/TT-BTC, Phụ lục II: TK 338 (mô tả TK 3387, mục 3.4), TK 344 (mục 1, 3) và TK 333 (mục 1.c). https://expertis.vn/wp-content/uploads/2026/01/Loai-tai-khoan-no-phai-tra-TK-331-⟶-357.pdf
- Thông tư 99/2025/TT-BTC, Phụ lục II, phần A danh mục tài khoản (TK 521, 3387). https://expertis.vn/van-ban/phu-luc-ii-thong-tu-99-2025-tt-btc/
- Thông tư 91/2026/TT-BTC: Điều 10 khoản 5 điểm b, khoản 6 điểm d. https://luatvietnam.vn/thue/thong-tu-91-2026-tt-btc-quy-dinh-luat-quan-ly-thue-va-hoa-don-dien-tu-439780-d1.html
- Nghị định 254/2026/NĐ-CP: Điều 43 (hiệu lực; Nghị định 123/2020 và Nghị định 70/2025 hết hiệu lực từ 01/07/2026). https://luatvietnam.vn/thue/nghi-dinh-254-2026-nd-cp-huong-dan-thi-hanh-luat-quan-ly-thue-2025-ve-hoa-don-dien-tu-439381-d1.html
- Nghị định 181/2025/NĐ-CP, Văn bản hợp nhất 18/VBHN-BTC (2026), Điều 14 khoản 2. https://luatvietnam.vn/thue/van-ban-hop-nhat-18-vbhn-btc-2026-quy-dinh-chi-tiet-thi-hanh-luat-thue-gia-tri-gia-tang-436641-d5.html
