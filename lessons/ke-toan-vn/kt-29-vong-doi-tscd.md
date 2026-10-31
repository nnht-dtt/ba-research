# Vòng đời tài sản cố định: ghi nhận, khấu hao, thanh lý

Bài này đi qua vòng đời một tài sản cố định (TSCĐ) từ lúc mua hoặc xây dựng đến lúc thanh lý, nhượng bán: mỗi bước dựa trên chứng từ nào, sinh bút toán gì theo TT99, chịu quy định nào (VAS 03, VAS 04, Thông tư 45/2013) và đi lên báo cáo ở chỉ tiêu nào. Đọc xong, BA biết phân hệ tài sản của ERP cần giữ dữ liệu gì cho từng tài sản.

## Thế nào là TSCĐ

### TSCĐ hữu hình

VAS 03 (đoạn 06) đặt bốn tiêu chuẩn, tài sản phải thỏa mãn đồng thời mới được ghi nhận là TSCĐ hữu hình: chắc chắn thu được lợi ích kinh tế trong tương lai; nguyên giá xác định được một cách tin cậy; thời gian sử dụng ước tính trên một năm; có đủ tiêu chuẩn giá trị theo quy định hiện hành. TT99 (Phụ lục II, TK 211, mục 1c) nhắc lại đúng bốn tiêu chuẩn này.

"Tiêu chuẩn giá trị theo quy định hiện hành" là ngưỡng do Thông tư 45/2013/TT-BTC đặt: Điều 3 khoản 1 điểm c yêu cầu nguyên giá xác định tin cậy và có giá trị từ 30.000.000 đồng trở lên. Khoản chi không đáp ứng đồng thời các tiêu chuẩn thì hạch toán trực tiếp hoặc phân bổ dần vào chi phí kinh doanh (Điều 3 khoản 2). Nhóm này thường đi vào công cụ, dụng cụ, xem [[kt-30-ccdc-tra-truoc-trich-truoc]].

> ⚠️ Tình trạng Thông tư 45/2013 tại thời điểm viết (10/2026): Quyết định 1760/QĐ-BTC ngày 01/7/2026 công bố Thông tư 45/2013 (đã sửa đổi bởi các Thông tư 147/2016, 28/2017, 30/2025) tiếp tục có hiệu lực, áp dụng từ kỳ tính thuế TNDN năm 2025 cho đến khi có văn bản thay thế nhưng không quá 31/12/2026. Ngày 14/10/2026 Bộ Tài chính lấy ý kiến dự thảo thông tư thay thế, dự kiến hiệu lực 01/01/2027, chưa ban hành. Ngưỡng 30 triệu, phương pháp và khung thời gian khấu hao có thể đổi theo văn bản mới, nên hệ thống nên để các giá trị này là tham số.

Thông tư 30/2025/TT-BTC (ban hành 30/5/2025, hiệu lực 15/7/2025) bổ sung khoản 12 vào Điều 9 Thông tư 45/2013: TSCĐ hữu hình tạm thời chưa có công năng sử dụng, chưa tham gia sản xuất kinh doanh của doanh nghiệp 100% vốn nhà nước thuộc Đề án xử lý dự án yếu kém ngành Công Thương (Quyết định 1468/QĐ-TTg) được giãn hoặc tạm hoãn trích khấu hao, thời gian khấu hao vẫn phải nằm trong khung. Các nguồn đối chiếu chỉ nêu thay đổi này, nên với doanh nghiệp thông thường các điều khoản Thông tư 45/2013 trích dưới đây không bị Thông tư 30/2025 động tới. Bài trích theo bản gốc; trước khi dùng một điều khoản cụ thể cho cấu hình, vẫn nên đối chiếu bản hợp nhất (các Thông tư 147/2016, 28/2017 cũng đã sửa một số điều).

VAS 03 (đoạn 11, 12) còn cho phép tách một tài sản thành các bộ phận cấu thành có thời gian sử dụng khác nhau để khấu hao riêng (ví dụ thân máy bay và động cơ). TT99 (TK 211, mục 1c) cho doanh nghiệp tùy yêu cầu quản lý coi cả hệ thống hoặc từng bộ phận là một TSCĐ độc lập nếu từng phần đạt bốn tiêu chuẩn. Đây là quyết định về "đơn vị tài sản" trong danh mục tài sản của hệ thống.

### TSCĐ vô hình

VAS 04 (đoạn 06) định nghĩa TSCĐ vô hình là tài sản không có hình thái vật chất nhưng xác định được giá trị, do doanh nghiệp nắm giữ để sử dụng. Ba điểm BA hay gặp:

- **Phần mềm**: phần mềm tách rời được khỏi phần cứng là TSCĐ vô hình; phần mềm là bộ phận không tách rời để máy hoạt động thì thuộc TSCĐ hữu hình (VAS 04 đoạn 03).
- **Quyền sử dụng đất**: khi mua nhà cửa, vật kiến trúc gắn liền với quyền sử dụng đất, giá trị quyền sử dụng đất phải xác định riêng (VAS 03 đoạn 15, VAS 04 đoạn 20). TT99 (TK 214, mục 1e) chỉ trích khấu hao quyền sử dụng đất xác định được thời hạn.
- **Nghiên cứu và triển khai**: toàn bộ chi phí giai đoạn nghiên cứu ghi vào chi phí trong kỳ. Chi phí giai đoạn triển khai chỉ được ghi nhận là TSCĐ vô hình khi thỏa điều kiện của VAS 04; theo TT99 (TK 213, mục 1c), các chi phí đủ điều kiện này được tập hợp vào TK 2412, kết thúc giai đoạn triển khai thì kết chuyển sang Nợ TK 213. Không phân biệt được hai giai đoạn thì toàn bộ chi phí dự án vào chi phí.

Chi phí thành lập doanh nghiệp, đào tạo nhân viên, quảng cáo phát sinh trước hoạt động của doanh nghiệp mới thành lập, chi phí chuyển dịch địa điểm được ghi vào chi phí sản xuất kinh doanh trong kỳ (TT99, TK 213, mục 1e). Grant Thornton Việt Nam tóm tắt đây là một thay đổi của TT99 so với quy định cũ về ghi nhận các chi phí này vào chi phí trả trước.

## Tài khoản dùng trong vòng đời TSCĐ

| Tài khoản (TT99) | Dùng cho |
|---|---|
| 211 Tài sản cố định hữu hình | Nguyên giá TSCĐ hữu hình, số dư Nợ |
| 212 Tài sản cố định thuê tài chính | Nguyên giá TSCĐ đi thuê tài chính |
| 213 Tài sản cố định vô hình | Nguyên giá TSCĐ vô hình |
| 214 Hao mòn tài sản cố định | Hao mòn lũy kế, số dư Có; cấp 2: 2141 hữu hình, 2142 thuê tài chính, 2143 vô hình, 2147 bất động sản đầu tư |
| 241 Xây dựng cơ bản dở dang | Cấp 2: 2411 Mua sắm TSCĐ, 2412 Xây dựng cơ bản, 2413 Sửa chữa, bảo dưỡng định kỳ TSCĐ, 2414 Nâng cấp, cải tạo TSCĐ |
| 711, 811 | Thu nhập khác, chi phí khác khi thanh lý, nhượng bán |

Danh mục tài khoản TT99 không quy định tài khoản cấp 2 cho 211 và 213. TT99 (TK 211 mục 2, TK 213 mục 2) để doanh nghiệp tự mở tài khoản chi tiết theo loại tài sản (nhà cửa, máy móc, phương tiện vận tải; quyền sử dụng đất, phần mềm, giấy phép...). Khi dựng hệ thống tài khoản, đây là chỗ khách phải chốt (xem [[kt-08-he-thong-tai-khoan-tt99]]).

Ngoài ra TT99 (nguyên tắc kế toán TSCĐ, điểm 2) yêu cầu theo dõi chi tiết nguồn hình thành: TSCĐ dùng cho sản xuất kinh doanh thì hao mòn vào chi phí; TSCĐ hình thành từ quỹ phúc lợi, quỹ phát triển khoa học và công nghệ thì hao mòn ghi giảm quỹ. TK 211 mục 1i yêu cầu theo dõi chi tiết từng đối tượng ghi TSCĐ theo loại và địa điểm bảo quản, sử dụng.

## Chứng từ

TT99 Phụ lục I (nhóm V. Tài sản cố định) hướng dẫn sáu mẫu chứng từ: Biên bản giao nhận TSCĐ (01-TSCĐ), Biên bản thanh lý TSCĐ (02-TSCĐ), Biên bản bàn giao TSCĐ sửa chữa, bảo dưỡng hoặc nâng cấp, cải tạo hoàn thành (03-TSCĐ), Biên bản đánh giá lại TSCĐ (04-TSCĐ), Biên bản tổng hợp kiểm kê TSCĐ (05-TSCĐ), Bảng tính và phân bổ khấu hao TSCĐ (06-TSCĐ). Doanh nghiệp được tự thiết kế, sửa đổi biểu mẫu nhưng phải ban hành quy chế làm cơ sở ([[kt-09-chung-tu-hoa-don]]). Mỗi mẫu tương ứng một sự kiện trong vòng đời dưới đây, nên đây cũng là danh sách các bản in hoặc tài liệu đính kèm mà phân hệ tài sản thường phải sinh ra.

## Toàn cảnh vòng đời

<step-flow>
<svg viewBox="0 0 680 200" role="img" aria-labelledby="kt29f-t" style="width:100%;max-width:680px;height:auto;display:block;margin:1.25rem auto" font-family="ui-sans-serif, system-ui, sans-serif">
<title id="kt29f-t">Vòng đời TSCĐ và tài khoản ở từng bước</title>
<defs>
<marker id="kt29f-arrow" markerWidth="9" markerHeight="9" refX="8" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 z" fill="currentColor"/></marker>
</defs>
<g data-step="1">
<rect x="10" y="30" width="140" height="60" rx="10" fill="#3b82f6" fill-opacity="0.13" stroke="currentColor" stroke-opacity="0.22"/>
<text x="80" y="56" font-size="13" text-anchor="middle" fill="currentColor">Mua sắm, XDCB</text>
<text x="80" y="76" font-size="12" text-anchor="middle" fill="currentColor">TK 241</text>
</g>
<g data-step="2">
<line x1="150" y1="60" x2="188" y2="60" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" marker-end="url(#kt29f-arrow)"/>
<rect x="190" y="30" width="140" height="60" rx="10" fill="#10b981" fill-opacity="0.15" stroke="currentColor" stroke-opacity="0.22"/>
<text x="260" y="56" font-size="13" text-anchor="middle" fill="currentColor">Ghi tăng</text>
<text x="260" y="76" font-size="12" text-anchor="middle" fill="currentColor">Nợ 211/213</text>
</g>
<g data-step="3">
<line x1="330" y1="60" x2="368" y2="60" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" marker-end="url(#kt29f-arrow)"/>
<rect x="370" y="30" width="140" height="60" rx="10" fill="#f59e0b" fill-opacity="0.14" stroke="currentColor" stroke-opacity="0.22"/>
<text x="440" y="56" font-size="13" text-anchor="middle" fill="currentColor">Khấu hao hằng kỳ</text>
<text x="440" y="76" font-size="12" text-anchor="middle" fill="currentColor">Có 214</text>
</g>
<g data-step="4">
<rect x="370" y="120" width="140" height="60" rx="10" fill="#8b5cf6" fill-opacity="0.13" stroke="currentColor" stroke-opacity="0.22"/>
<text x="440" y="146" font-size="13" text-anchor="middle" fill="currentColor">Sửa chữa, nâng cấp,</text>
<text x="440" y="166" font-size="13" text-anchor="middle" fill="currentColor">điều chuyển</text>
<line x1="440" y1="90" x2="440" y2="118" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" marker-end="url(#kt29f-arrow)"/>
</g>
<g data-step="5">
<line x1="510" y1="60" x2="528" y2="60" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" marker-end="url(#kt29f-arrow)"/>
<rect x="530" y="30" width="140" height="60" rx="10" fill="#f43f5e" fill-opacity="0.12" stroke="currentColor" stroke-opacity="0.22"/>
<text x="600" y="56" font-size="13" text-anchor="middle" fill="currentColor">Thanh lý, nhượng bán</text>
<text x="600" y="76" font-size="12" text-anchor="middle" fill="currentColor">711 / 811</text>
</g>
</svg>
<step-note data-step="1">Tài sản cần lắp đặt, chạy thử hoặc xây dựng thì chi phí tập hợp trên TK 241 theo từng công trình, hạng mục.</step-note>
<step-note data-step="2">Khi tài sản ở trạng thái có khả năng hoạt động theo cách thức dự định, ghi tăng nguyên giá. Mua về dùng ngay thì ghi thẳng vào 211 không qua 241.</step-note>
<step-note data-step="3">Mỗi kỳ trích khấu hao vào chi phí của bộ phận sử dụng, ghi Có 214.</step-note>
<step-note data-step="4">Trong quá trình sử dụng: sửa chữa thường xuyên vào chi phí, bảo dưỡng định kỳ qua 2413 rồi 242, nâng cấp qua 2414 rồi tăng nguyên giá; điều chuyển nội bộ chuyển cả nguyên giá và hao mòn.</step-note>
<step-note data-step="5">Ghi giảm nguyên giá và hao mòn, giá trị còn lại vào 811, tiền thu vào 711.</step-note>
</step-flow>

## Ghi tăng TSCĐ và xác định nguyên giá

### Nguyên giá gồm gì

Nguyên giá TSCĐ hữu hình mua sắm gồm giá mua trừ chiết khấu thương mại, giảm giá; các khoản thuế không được hoàn lại; và chi phí liên quan trực tiếp để đưa tài sản tới vị trí và trạng thái sẵn sàng sử dụng như chuẩn bị mặt bằng, vận chuyển, bốc xếp ban đầu, lắp đặt, chạy thử (trừ thu hồi từ sản phẩm, phế liệu chạy thử), chi phí chuyên gia (VAS 03 đoạn 14; TT99 TK 211, mục 1đ1). Không tính vào nguyên giá: chi phí quản lý hành chính, sản xuất chung, chi phí không liên quan trực tiếp, lỗ ban đầu do máy chạy không đúng dự tính (VAS 03 đoạn 17); lãi nội bộ và chi phí vượt mức bình thường khi tự xây, tự chế (VAS 03 đoạn 18).

Một số tình huống riêng:

- **Mua trả chậm, trả góp**: nguyên giá theo giá mua trả tiền ngay; phần lãi trả chậm vào chi phí tài chính từng kỳ hoặc vốn hóa theo VAS 16 (VAS 03 đoạn 16; TT99, nguyên tắc kế toán TSCĐ điểm 5). TT99 bắt buộc tách lãi khi hợp đồng không ghi rõ lãi mà thời hạn trả chậm trên 12 tháng, bằng lãi suất ngầm định từ chênh lệch giá trả chậm và giá trả ngay.
- **Mua kèm phụ tùng, thiết bị**: phân bổ giá phí cho TSCĐ chính và tài sản nhận kèm theo giá trị hợp lý, trừ trường hợp phụ tùng chuyên dùng chỉ để dự phòng cho TSCĐ chính (TT99, nguyên tắc kế toán TSCĐ điểm 4).
- **Nhà cửa gắn quyền sử dụng đất**: tách phần đất ra 213 hoặc 242 tùy trường hợp theo quy định pháp luật (TT99 TK 211, mục 1đ1 và 3.1g).
- **Trao đổi**: với tài sản không tương tự, nguyên giá theo giá trị hợp lý và có ghi nhận lãi, lỗ trao đổi qua 711, 811; với tài sản tương tự, nguyên giá bằng giá trị còn lại của tài sản đem đổi, không ghi lãi lỗ (VAS 03 đoạn 20, 21).
- **Mua bằng ngoại tệ**: theo hướng dẫn TK 413 (TT99 TK 211, mục 1đ7); tỷ giá xem [[ktqt-05-giao-dich-ngoai-te]].

### Bút toán ghi tăng

Mua về dùng ngay (TT99 TK 211, mục 3.1b), căn cứ hóa đơn, biên bản giao nhận TSCĐ:

`Nợ TK 211 (giá chưa thuế), Nợ TK 133 (1332) / Có TK 111, 112, 331, 341`

Mua cần lắp đặt, chạy thử (TT99 TK 241, mục 3.1): chi phí tập hợp `Nợ TK 241 / Có TK 111, 112, 331...`; khi chạy thử xong, bàn giao:

`Nợ TK 211 / Có TK 241`

Đầu tư xây dựng cơ bản (TT99 TK 241 mục 1, TK 211 mục 3.1h): nhận khối lượng hoàn thành từ nhà thầu `Nợ TK 241 (2412), Nợ TK 133 / Có TK 331`. Khi nghiệm thu, bàn giao đưa vào sử dụng `Nợ TK 211, Nợ TK 152, 153, 242 (phần vật tư, công cụ nhập kho) / Có TK 241`. Nếu chưa có quyết toán được duyệt, ghi tăng theo giá tạm tính để bắt đầu khấu hao, sau quyết toán thì điều chỉnh chênh lệch vào nguyên giá; phần chi phí không được duyệt phải thu hồi thì `Nợ TK 138 / Có TK 211`.

TSCĐ được tài trợ, biếu tặng (TT99 TK 211, mục 3.1d): `Nợ TK 211 / Có TK 711` nếu không kèm điều kiện; `Có TK 3387` nếu kèm điều kiện; `Có TK 4118` nếu được phép ghi tăng vốn.

Mua TSCĐ vô hình (TT99 TK 213, mục 3.1): `Nợ TK 213, Nợ TK 133 (1332) / Có TK 112, 331, 341`.

> 📌 Mua sắm TSCĐ có điểm tách với luồng mua hàng thông thường: phân loại chi phí khi nhận hóa đơn quyết định khoản đó vào 211, 241, 242 hay chi phí kỳ. Phần phân loại ở khâu mua nằm trong [[kt-14-mua-dich-vu-tai-san]].

### Chi phí đi vay trong giai đoạn đầu tư

Lãi vay liên quan trực tiếp đến đầu tư xây dựng hoặc sản xuất tài sản dở dang được vốn hóa vào giá trị tài sản khi đủ điều kiện của VAS 16 (TT99 TK 211, mục 1đ1, 1đ2). VAS 16 định nghĩa tài sản dở dang là tài sản cần thời gian đủ dài, trên 12 tháng (đoạn 03). Điều kiện bắt đầu, tạm ngừng, chấm dứt vốn hóa và bút toán nằm ở [[kt-32-tien-ngan-hang-vay]]. TT99 (TK 241, mục 1g) cấm vốn hóa chênh lệch tỷ giá vào giá trị tài sản dở dang.

## Khấu hao

### Nguyên tắc

Khấu hao là phân bổ có hệ thống giá trị phải khấu hao (nguyên giá trừ giá trị thanh lý ước tính) trong suốt thời gian sử dụng hữu ích (VAS 03 đoạn 05, 29). Phương pháp phải phù hợp với cách tài sản mang lại lợi ích; thời gian sử dụng hữu ích và phương pháp khấu hao phải được xem xét lại định kỳ, thường là cuối năm tài chính, thay đổi thì điều chỉnh mức khấu hao cho năm hiện hành và các năm sau, và thuyết minh trên báo cáo tài chính (VAS 03 đoạn 33, 34, 36).

TT99 (TK 214, mục 1) bổ sung các quy tắc mà hệ thống phải thực thi:

- Mọi TSCĐ liên quan đến sản xuất kinh doanh, kể cả tài sản chưa dùng, không cần dùng, chờ thanh lý, đều phải trích khấu hao, trừ khi đã khấu hao hết (mục 1b).
- TSCĐ đã khấu hao hết mà vẫn dùng thì không trích tiếp (mục 1đ).
- TSCĐ dùng cho phúc lợi không trích khấu hao vào chi phí mà chỉ tính hao mòn, ghi giảm quỹ phúc lợi đã hình thành TSCĐ (mục 1b).
- Quyền sử dụng đất không xác định thời hạn thì không trích khấu hao (mục 1e).
- Khấu hao TSCĐ dùng cho đầu tư XDCB hạch toán vào chi phí đầu tư XDCB (mục 1b).

VAS 04 (đoạn 54) giới hạn thời gian khấu hao TSCĐ vô hình tối đa 20 năm, vượt quá phải có bằng chứng tin cậy và giải trình.

### Phương pháp và thời điểm bắt đầu

Thông tư 45/2013 (Điều 13 khoản 1) cho ba phương pháp: đường thẳng; số dư giảm dần có điều chỉnh; theo số lượng, khối lượng sản phẩm. VAS 03 (đoạn 32) cũng nêu ba phương pháp. Thông tư 45/2013 (Điều 9 khoản 9) tính việc trích hoặc thôi trích khấu hao từ ngày (theo số ngày của tháng) mà TSCĐ tăng hoặc giảm, nên kỳ đầu và kỳ cuối thường là kỳ lẻ ngày. Theo bản gốc Thông tư 45/2013 (Điều 10 khoản 3), doanh nghiệp chỉ được thay đổi thời gian trích khấu hao một lần đối với một tài sản, phải lập phương án giải trình và được cơ quan tài chính phê duyệt theo thẩm quyền.

Ví dụ giả định: máy đóng gói nguyên giá 240.000.000 đ, giá trị thanh lý ước tính bằng 0, thời gian sử dụng 5 năm, khấu hao đường thẳng. Mức khấu hao năm 48.000.000 đ, tháng 4.000.000 đ. Máy đưa vào sử dụng ngày 16 tháng 3 (tháng 31 ngày), tháng 3 trích 4.000.000 × 16/31 ≈ 2.064.516 đ.

### Bút toán khấu hao

TT99 (TK 214, mục 3a):

`Nợ TK 623, 627, 641, 642, 811 / Có TK 214 (cấp 2 phù hợp)`

Tài khoản Nợ do bộ phận sử dụng tài sản quyết định: máy thi công 623, phân xưởng 627, bán hàng 641, quản lý 642. Khấu hao bất động sản đầu tư cho thuê hoạt động ghi `Nợ TK 632 / Có TK 2147` (mục 3c). Khi cuối năm xem lại thời gian, phương pháp khấu hao mà mức khấu hao tăng hoặc giảm, phần chênh lệch ghi tăng hoặc giảm các tài khoản chi phí đối ứng 214 (mục 3e). Phân bổ khấu hao cho nhiều bộ phận dùng chung tài sản là bài toán phân bổ chi phí, xem [[kt-34-phan-bo-chi-phi]].

## Trong quá trình sử dụng: sửa chữa, nâng cấp, điều chuyển

### Sửa chữa và nâng cấp

VAS 03 (đoạn 23–25) phân biệt: chi phí làm tăng lợi ích kinh tế tương lai so với trạng thái tiêu chuẩn ban đầu thì ghi tăng nguyên giá; chi phí để khôi phục hoặc duy trì trạng thái tiêu chuẩn ban đầu thì vào chi phí trong kỳ. Thông tư 45/2013 (Điều 7) cũng tách chi phí nâng cấp (tăng nguyên giá) và chi phí sửa chữa (không tăng nguyên giá, hạch toán trực tiếp hoặc phân bổ dần tối đa 3 năm).

TT99 (TK 211 mục 1g và 3.1l; TK 241 mục 1đ) chia ba loại:

| Loại | Bút toán khi phát sinh | Khi hoàn thành |
|---|---|---|
| Sửa chữa, bảo dưỡng thường xuyên | `Nợ TK 623, 627, 641, 642, Nợ TK 133 / Có TK 111, 112` | Không có bước sau |
| Sửa chữa, bảo dưỡng định kỳ theo yêu cầu kỹ thuật | `Nợ TK 241 (2413), Nợ TK 133 / Có TK 112, 152, 331, 334` | `Nợ TK 242 / Có TK 241 (2413)`, rồi định kỳ `Nợ TK 623, 627, 641, 642 / Có TK 242` đến kỳ bảo dưỡng tiếp theo |
| Nâng cấp, cải tạo làm tăng năng lực hoặc kéo dài thời gian sử dụng | `Nợ TK 241 (2414), Nợ TK 133 / Có TK 112, 152, 331, 334` | `Nợ TK 211 / Có TK 241 (2414)` |

TT99 (TK 241, mục 1đ) vẫn cho phép trích trước chi phí sửa chữa, bảo dưỡng định kỳ nếu doanh nghiệp có nghĩa vụ, hoặc đưa vào chi phí chờ phân bổ. Điều 30 khoản 4 TT99 xử lý số đã trích trước theo chế độ cũ: doanh nghiệp đang trích trước chi phí sửa chữa lớn TSCĐ mà đến khi TT99 có hiệu lực chưa sửa chữa thì không tiếp tục trích; khi sửa chữa thực hiện, kết chuyển chi phí thực tế với số đã trích, chênh lệch phân bổ dần vào chi phí các kỳ. Đây là việc cần xử lý khi chuyển số dư đầu kỳ sang hệ thống mới năm 2026.

> ⚠️ Cần xác nhận: trường hợp nào được coi là "có nghĩa vụ" để trích trước chi phí sửa chữa, bảo dưỡng định kỳ theo TT99 TK 241 mục 1đ. Văn bản không nêu tiêu chí; chốt với kế toán trưởng hoặc kiểm toán của khách.

### Điều chuyển trong nội bộ doanh nghiệp

Điều chuyển giữa các đơn vị trực thuộc giữ nguyên nguyên giá ghi ở đơn vị chuyển đi; chi phí liên quan đến việc điều chuyển không tăng nguyên giá mà vào chi phí kỳ (TT99 TK 211, mục 1đ4). Bút toán (TT99 TK 211, mục 3.1i):

- Đơn vị chuyển đi: `Nợ TK 1361, 411 (giá trị còn lại), Nợ TK 214 (hao mòn lũy kế) / Có TK 211 (nguyên giá)`
- Đơn vị nhận: `Nợ TK 211 (nguyên giá) / Có TK 214 (hao mòn lũy kế), Có TK 336, 411 (giá trị còn lại)`

Nếu cả hai đơn vị dùng chung một sổ trong hệ thống, việc chuyển tài sản giữa bộ phận chỉ đổi thuộc tính địa điểm, bộ phận sử dụng và tài khoản chi phí khấu hao từ ngày chuyển. Khi mỗi đơn vị trực thuộc có sổ riêng thì mới phát sinh cặp bút toán 136/336 ở trên.

## Thanh lý, nhượng bán

TT99 (TK 211, mục 3.2) phân biệt nhượng bán (tài sản không cần dùng, dùng không hiệu quả) và thanh lý (hư hỏng, lạc hậu). Thanh lý phải có quyết định thanh lý, thành lập Hội đồng thanh lý, lập Biên bản thanh lý TSCĐ; nhượng bán căn cứ biên bản giao nhận TSCĐ và chứng từ liên quan. Bút toán của hai trường hợp như nhau:

- Thu nhập: `Nợ TK 111, 112, 131 / Có TK 711 (giá bán chưa thuế), Có TK 3331 (33311)`
- Ghi giảm tài sản: `Nợ TK 214 (hao mòn lũy kế), Nợ TK 811 (giá trị còn lại) / Có TK 211 (nguyên giá)`
- Chi phí thanh lý, nhượng bán: `Nợ TK 811, Nợ TK 133 / Có TK 111, 112, 331`

Ví dụ giả định tiếp: máy đóng gói trên bán sau 3 năm, đã khấu hao 144.000.000 đ, bán được 110.000.000 đ chưa thuế, chi phí tháo dỡ 5.000.000 đ. Bút toán ghi 711 là 110.000.000 đ, 811 gồm giá trị còn lại 96.000.000 đ và chi phí 5.000.000 đ. Lãi thanh lý 9.000.000 đ, đúng công thức của VAS 03 đoạn 38: thu nhập trừ chi phí thanh lý, nhượng bán và giá trị còn lại.

TSCĐ dùng cho phúc lợi khi nhượng bán thì giá trị còn lại, số thu và số chi đều đi qua TK 353 thay vì 711, 811 (TT99 TK 211, mục 3.2.1b). TSCĐ thừa chưa rõ nguyên nhân khi kiểm kê ghi `Nợ TK 211 / Có TK 338 (3381)` chờ xử lý (mục 3.2.4).

Khấu hao dừng từ ngày tài sản giảm (Thông tư 45/2013, Điều 9 khoản 9), nên hệ thống phải chạy khấu hao đến ngày thanh lý trước khi sinh bút toán ghi giảm, nếu không giá trị còn lại vào 811 sẽ sai.

## Ảnh hưởng tới báo cáo

**Báo cáo tình hình tài chính** (TT99 Phụ lục IV): TSCĐ hữu hình mã số 221 gồm Nguyên giá (222, số dư Nợ TK 211) và Giá trị hao mòn lũy kế (223, số dư Có TK 2141, ghi số âm). TSCĐ vô hình mã số 227 gồm 228 (TK 213) và 229. Chi phí xây dựng cơ bản dở dang mã số 252 lấy số dư Nợ TK 241, gồm cả sửa chữa, bảo dưỡng định kỳ và nâng cấp còn dở dang. Hệ thống vì vậy phải giữ nguyên giá và hao mòn ở hai tài khoản riêng, không ghi thẳng giá trị còn lại (trừ trường hợp doanh nghiệp không còn đáp ứng giả định hoạt động liên tục, TT99 Điều 24 khoản 7 cho ghi giảm trực tiếp giá trị ghi sổ, không dùng TK 214). Xem [[kt-39-bao-cao-tinh-hinh-tai-chinh]].

**Báo cáo kết quả hoạt động kinh doanh**: khấu hao nằm trong giá vốn, chi phí bán hàng hoặc chi phí quản lý tùy tài khoản Nợ. Với thanh lý, nhượng bán TSCĐ, TT99 hướng dẫn chỉ tiêu Thu nhập khác (mã số 31) và Chi phí khác (mã số 32) chỉ lấy phần chênh lệch thuần: lãi thì vào mã 31, lỗ thì vào mã 32, không trình bày gộp cả số thu trên 711 và giá trị còn lại trên 811. Hệ thống cần nhận diện được dòng 711, 811 nào thuộc giao dịch thanh lý để lập báo cáo đúng. Xem [[kt-40-bao-cao-ket-qua-kinh-doanh]].

**Báo cáo lưu chuyển tiền tệ**: tiền chi mua sắm, xây dựng TSCĐ (mã số 21) và tiền thu thanh lý, nhượng bán TSCĐ (mã số 22) thuộc hoạt động đầu tư, xem [[kt-41-luu-chuyen-tien-te]].

**Thuyết minh**: VAS 03 (đoạn 39) yêu cầu trình bày theo từng loại TSCĐ phương pháp khấu hao, thời gian sử dụng hữu ích, nguyên giá, khấu hao lũy kế đầu và cuối kỳ, tăng giảm trong kỳ, giá trị còn lại của tài sản chờ thanh lý. Báo cáo tăng giảm TSCĐ theo loại vì thế là đầu ra bắt buộc của phân hệ tài sản, xem [[kt-42-thuyet-minh-bctc]].

## Điểm chạm hệ thống

Phân hệ tài sản là một sổ chi tiết: mỗi tài sản là một bản ghi, sinh bút toán khấu hao lên sổ cái theo lịch. Dữ liệu mỗi tài sản cần có, rút từ các quy định trên: nguyên giá, ngày bắt đầu sử dụng, thời gian sử dụng, phương pháp khấu hao, giá trị thanh lý ước tính, loại tài sản (để map tài khoản 211/213 chi tiết), nguồn hình thành, bộ phận và địa điểm sử dụng, tài khoản chi phí khấu hao, trạng thái (đang dùng, khấu hao hết, chờ thanh lý, đã thanh lý).

Lấy Odoo 19 làm ví dụ (Accounting, Assets): tài sản được tạo thủ công hoặc từ dòng bút toán bằng nút Create Asset; tài khoản tài sản có tùy chọn Automate Asset để tự tạo tài sản khi ghi hóa đơn; Asset Model chứa thiết lập mặc định cho một nhóm tài sản; phương pháp tính gồm Straight Line, Declining, Declining Then Straight Line; cách tính kỳ đầu gồm No Prorata, Constant Periods, Based on days per period; bút toán khấu hao được tạo sẵn ở trạng thái nháp trong Depreciation Board rồi ghi sổ theo kỳ.

> ⚠️ Cần xác nhận: phương pháp Declining Then Straight Line của Odoo có tính ra đúng kết quả của phương pháp "số dư giảm dần có điều chỉnh" theo Thông tư 45/2013 (hệ số điều chỉnh theo thời gian sử dụng, chuyển sang đường thẳng khi mức khấu hao theo số dư giảm dần thấp hơn mức bình quân) hay không. Tài liệu Odoo đã đọc không mô tả công thức chi tiết; cần chạy thử với số liệu mẫu.

Điểm cần chốt với khách khi cấu hình:

- Ngưỡng giá trị và quy tắc phân loại TSCĐ, CCDC, chi phí chờ phân bổ.
- Danh mục loại tài sản, tài khoản chi tiết 211/213, thời gian sử dụng mặc định từng loại.
- Tài sản lớn có tách bộ phận cấu thành để khấu hao riêng không.
- Khấu hao theo ngày hay theo tháng; ai duyệt bút toán khấu hao hằng kỳ trước khóa sổ ([[kt-36-quy-trinh-khoa-so]]).
- Số dư chuyển đổi: nguyên giá, hao mòn lũy kế, thời gian còn lại của từng tài sản; số dư trích trước sửa chữa lớn theo chế độ cũ.

## Nguồn

- Chuẩn mực kế toán Việt Nam số 03 – Tài sản cố định hữu hình (Quyết định 149/2001/QĐ-BTC), đoạn 05, 06, 11–18, 20–25, 29, 32–39. Bản toàn văn: https://cdn.thuvienphapluat.vn//uploads/phapluat/2022-2/NBT_MST/2025/thang-2/ngay-13/vas3.doc
- Chuẩn mực kế toán Việt Nam số 04 – Tài sản cố định vô hình (Quyết định 149/2001/QĐ-BTC), đoạn 03, 06, 20, 38–43, 48, 54, 56: https://www.ketoanthienung.net/chuan-muc-ke-toa-n-so-04-tai-san-co-dinh-vo-hinh.htm
- Chuẩn mực kế toán Việt Nam số 16 – Chi phí đi vay, đoạn 03: https://cdn.thuvienphapluat.vn//uploads/Hoidapphapluat/2024/TTTT/240830/Chuan-muc-ke-toan-16.doc
- Thông tư 99/2025/TT-BTC, Phụ lục II: Nguyên tắc kế toán TSCĐ, BĐSĐT và chi phí đầu tư XDCB dở dang (điểm 2, 4, 5); TK 211 (mục 1c, 1đ, 1g, 1i, 2, 3.1, 3.2); TK 213 (mục 1c, 1e, 2, 3.1); TK 214 (mục 1, 2, 3); TK 241 (mục 1, 3.1, 3.2). Phụ lục IV: hướng dẫn mã số 221–229, 252 (Báo cáo tình hình tài chính), mã số 31, 32 (Báo cáo kết quả), mã số 21, 22 (Báo cáo lưu chuyển tiền tệ). Điều 24 khoản 7; Điều 30 khoản 4. Phụ lục I, danh mục chứng từ nhóm V. Bản toàn văn dạng Word: https://chedo.ketoanthue.net/tai-ve/thong-tu-99-2025-tt-btc-che-do-ke-toan-doanh-nghiep.docx; danh mục tài khoản Phụ lục II: https://docs.google.com/document/d/14NeM16EEKMINCoSraTafe0w_iySTX1Ub/export?format=pdf
- Kế toán Lê Ánh, trích Phụ lục II TT99 cho TK 211, 213, 214, 241 (dùng để đối chiếu): https://ketoanleanh.edu.vn/kinh-nghiem-ke-toan/tai-khoan-211-tai-san-co-dinh-huu-hinh-theo-thong-tu-99-2025-tt-btc.html, https://ketoanleanh.edu.vn/kinh-nghiem-ke-toan/tai-khoan-214-hao-mon-tai-san-co-dinh-theo-thong-tu-99-2025-tt-btc.html, https://ketoanleanh.edu.vn/kinh-nghiem-ke-toan/tai-khoan-241-xay-dung-co-ban-do-dang-theo-thong-tu-99-2025-tt-btc.html; MISA AMIS, TK 214 theo TT99: https://amis.misa.vn/254481/tai-khoan-214-theo-thong-tu-99/
- Thông tư 45/2013/TT-BTC hướng dẫn chế độ quản lý, sử dụng và trích khấu hao TSCĐ, Điều 3 khoản 1, 2; Điều 7; Điều 9 khoản 9; Điều 10 khoản 3; Điều 13 khoản 1: https://vcci.com.vn/legal-document/thong-tu-452013tt-btc-cua-bo-tai-chinh-ve-viec-huong-dan-che-do-quan-ly-su-dung-va-trich-khau-hao-tai-san-co-dinh
- Tạp chí Kinh tế – Tài chính, "Thông tư số 45/2013/TT-BTC và Thông tư số 48/2019/TT-BTC tiếp tục có hiệu lực" (04/7/2026, về Quyết định 1760/QĐ-BTC): https://tapchikinhtetaichinh.vn/thong-tu-so-45-2013-tt-btc-va-thong-tu-so-48-2019-tt-btc-tiep-tuc-co-hieu-luc-160845.html
- Tạp chí Luật sư Việt Nam, "Bổ sung thêm nguyên tắc trích khấu hao tài sản cố định từ 15/7" (về Thông tư 30/2025/TT-BTC): https://lsvn.vn/bo-sung-them-nguyen-tac-trich-khau-hao-tai-san-co-dinh-tu-15-7-a158782.html
- Tạp chí Kinh tế – Tài chính, "Bộ Tài chính lấy ý kiến xây dựng quy định mới về quản lý, khấu hao tài sản cố định" (14/10/2026): https://tapchikinhtetaichinh.vn/bo-tai-chinh-lay-y-kien-xay-dung-quy-dinh-moi-ve-quan-ly-khau-hao-tai-san-co-dinh-169585.html
- Grant Thornton Việt Nam, "Thông tư số 99/2025/TT-BTC – Những thay đổi chính", mục Hướng dẫn hạch toán kế toán: https://www.grantthornton.com.vn/contentassets/2453c36bf5094e8b82a9da0fb262b505/decree-99---vie-version.pdf
- Odoo 19 Documentation, Non-current assets: https://www.odoo.com/documentation/19.0/applications/finance/accounting/vendor_bills/assets.html
