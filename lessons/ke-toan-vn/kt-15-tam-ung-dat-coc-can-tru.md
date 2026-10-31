# Tạm ứng nhân viên, đặt cọc nhà cung cấp và cấn trừ công nợ

Bài này gom ba nghiệp vụ hay bị nhập nhằng vì đều là "tiền đã chi ra nhưng chưa thành chi phí": tạm ứng cho nhân viên, tiền trả trước hoặc đặt cọc cho nhà cung cấp, và bù trừ công nợ giữa phải thu và phải trả. Đọc xong, bạn biết mỗi loại nằm ở tài khoản nào theo TT99, cần chứng từ gì, và khi nào hệ thống được phép bù trừ.

## Ba loại tiền chi trước

| Nghiệp vụ | Đối tượng | Tài khoản TT99 | Kết thúc bằng |
|---|---|---|---|
| Tạm ứng | Người lao động của doanh nghiệp | 141 – Tạm ứng | Quyết toán tạm ứng bằng chứng từ chi tiêu, hoàn lại phần thừa |
| Ứng trước cho người bán | Nhà cung cấp, nhà thầu | Bên Nợ 331 – Phải trả cho người bán | Trừ vào tiền hàng khi nhận hàng, dịch vụ |
| Ký quỹ, ký cược | Tổ chức, doanh nghiệp khác | 244 – Ký quỹ, ký cược | Nhận lại khi hết hạn, hoặc dùng để thanh toán, hoặc bị trừ khi vi phạm |

## Tạm ứng cho người lao động (TK 141)

### Phạm vi và quy chế

Theo TT99 (TK 141, nguyên tắc a), TK 141 phản ánh khoản tạm ứng cho **người lao động của doanh nghiệp** và việc thanh toán các khoản đó. Doanh nghiệp phải xây dựng **quy chế tạm ứng** và kiểm soát nội bộ, gồm: đối tượng được tạm ứng; giá trị, mục đích, hình thức, thời hạn tạm ứng; thẩm quyền phê duyệt (nguyên tắc b). Đây là những trường dữ liệu và quy tắc mà luồng tạm ứng trên hệ thống cần có.

Doanh nghiệp phải mở sổ chi tiết theo **từng người nhận tạm ứng** và ghi theo **từng lần tạm ứng** (nguyên tắc d). Hệ thống cần quản lý tạm ứng theo từng phiếu, không chỉ theo số dư của nhân viên.

### Chứng từ

Phụ lục I TT99 có ba mẫu tham khảo:

- **Giấy đề nghị tạm ứng** (Mẫu 03-TT): người xin tạm ứng ghi số tiền, lý do (công tác phí, mua văn phòng phẩm, tiếp khách…) và thời hạn hoàn lại. Kế toán trưởng xem xét, giám đốc duyệt, kế toán lập phiếu chi kèm giấy đề nghị.
- **Giấy thanh toán tiền tạm ứng** (Mẫu 04-TT): liệt kê số đã nhận tạm ứng (gồm số kỳ trước chưa chi hết và số tạm ứng kỳ này), số đã chi theo từng chứng từ gốc, và chênh lệch. Giấy này kèm chứng từ gốc là căn cứ ghi sổ.
- **Giấy đề nghị thanh toán** (Mẫu 05-TT): dùng khi đã chi nhưng **chưa nhận tạm ứng**, để tổng hợp các khoản đã chi kèm chứng từ và làm thủ tục thanh toán.

### Bút toán

Theo TT99 (TK 141, mục 3):

1. **Chi tạm ứng** bằng tiền hoặc vật tư: Nợ TK 141 / Có TK 111, 112, 152…
2. **Quyết toán tạm ứng** theo Bảng thanh toán tạm ứng kèm chứng từ gốc đã duyệt: Nợ TK 152, 153, 156, 241, 331, 621, 623, 627, 642… (và Nợ TK 133 nếu thuế đầu vào đủ điều kiện khấu trừ) / Có TK 141.
3. **Phần tạm ứng không dùng hết**, theo quyết định xử lý: Nợ TK 111, 112, 152, 334… / Có TK 141. Nghĩa là nộp lại quỹ, nhập lại kho, hoặc trừ vào lương.
4. **Chi vượt tạm ứng** đã được duyệt: doanh nghiệp chi bổ sung, Nợ TK 152, 153, 156, 241, 621, 622, 627… / Có TK 111, 112.

Có thể quyết toán tạm ứng vào **Nợ TK 331**: nhân viên dùng tiền tạm ứng trả nợ hoặc ứng trước cho một nhà cung cấp.

**Ví dụ giả định.** Nhân viên A được tạm ứng 10.000.000 đồng đi công tác. Khi về, A nộp chứng từ chi 8.800.000 đồng gồm vé và khách sạn, trong đó tiền khách sạn có hoá đơn GTGT. Kế toán ghi Nợ TK 642 (phần chi phí), Nợ TK 133 (thuế GTGT của hoá đơn đủ điều kiện) / Có TK 141 8.800.000. A nộp lại 1.200.000 đồng: Nợ TK 111 / Có TK 141 1.200.000.

> ⚠️ Hoá đơn mua hàng hoá, dịch vụ từ 05 triệu đồng trở lên (đã gồm thuế GTGT) phải có **chứng từ thanh toán không dùng tiền mặt** thì mới được khấu trừ thuế GTGT đầu vào (Nghị định 181/2025/NĐ-CP, Điều 26). Nhân viên trả tiền mặt cho hoá đơn khách sạn 6 triệu đồng thì phần thuế GTGT đó không đủ điều kiện khấu trừ. Nghị định có một trường hợp đặc thù (Điều 26 khoản 2 điểm i): doanh nghiệp uỷ quyền cho người lao động **thanh toán không dùng tiền mặt** theo quy chế tài chính hoặc quy chế nội bộ, sau đó **thanh toán lại cho người lao động bằng hình thức không dùng tiền mặt**, thì được khấu trừ. Luồng hoàn ứng trên hệ thống cần ghi lại hình thức thanh toán của từng chứng từ. Xem [[kt-16-thue-gtgt-dau-vao]].

> 📌 TT99 giới hạn TK 141 cho người lao động của doanh nghiệp. Khoản ứng tiền cho người không phải nhân viên không đi qua TK 141. Tài khoản cụ thể tuỳ bản chất khoản ứng (ứng trước cho người bán thì vào TK 331).

## Ứng trước cho nhà cung cấp (bên Nợ TK 331)

### Bút toán

Ứng trước và trả nợ dùng chung một bút toán (TT99, TK 331 mục 3.3):

> Nợ TK 331 / Có TK 111, 112, 341…

Trong chi tiết từng nhà cung cấp, TK 331 phản ánh cả số tiền **đã ứng trước nhưng chưa nhận** hàng, dịch vụ (TK 331, nguyên tắc b). Khi hàng về, bút toán mua hàng ghi Có TK 331 như bình thường, và số ứng trước tự giảm trên cùng sổ chi tiết của nhà cung cấp đó. Không cần bút toán bù trừ riêng.

Một số trường hợp kèm theo:

- Người bán **hoàn lại tiền đã ứng** vì không cung cấp được hàng: Nợ TK 111, 112 / Có TK 331 (mục 3.4).
- **Ứng trước cho nhà thầu** xây dựng, sửa chữa, nâng cấp TSCĐ: TT99 (TK 241, mục 3.2.1) ghi Nợ TK 331, Nợ TK 133 (nếu có) / Có TK 111, 112. Bút toán ứng trước có dòng thuế GTGT "nếu có", khác với ứng trước mua hàng hoá thông thường.
- **Ứng trước bằng ngoại tệ**: bên Nợ TK 331 áp dụng tỷ giá giao dịch thực tế tại thời điểm trả trước. Khi nhận hàng, phần tương ứng với số đã ứng ghi bên Có TK 331 theo **tỷ giá tại thời điểm trả trước**, không theo tỷ giá ngày nhận hàng (TT99, nguyên tắc kế toán nợ phải trả, mục 5.1c).

### Trên hệ thống

Phần mềm ERP thường ghi khoản ứng trước như một khoản thanh toán chưa gắn hoá đơn, sau đó **đối soát** (reconcile) với hoá đơn khi hoá đơn về. Bút toán sổ cái giống nhau. Khác biệt nằm ở chỗ hệ thống biết khoản thanh toán nào đã trừ vào hoá đơn nào, để báo cáo tuổi nợ và theo dõi khoản ứng quá hạn chưa có hàng.

### Ảnh hưởng tới báo cáo

TK 331 có thể có **số dư Nợ** theo từng nhà cung cấp, là số đã ứng trước hoặc trả thừa. Khi lập Báo cáo tình hình tài chính, phải lấy số dư chi tiết từng đối tượng để ghi vào cả chỉ tiêu bên "Tài sản" và bên "Nguồn vốn" (TT99, TK 331 kết cấu). Khoản ứng trước cho nhà cung cấp A **không được bù** với khoản còn nợ nhà cung cấp B. Xem [[kt-39-bao-cao-tinh-hinh-tai-chinh]].

## Đặt cọc, ký quỹ, ký cược (TK 244)

### Phân biệt với ứng trước

Trong hợp đồng, "tiền đặt cọc" có thể là hai thứ khác nhau:

- Tiền **sẽ trừ vào giá mua** khi giao hàng: về bản chất là ứng trước cho người bán, ghi Nợ TK 331.
- Tiền **bảo đảm thực hiện nghĩa vụ**, sẽ được **nhận lại** khi hết thời hạn hoặc hoàn thành hợp đồng (đặt cọc thuê văn phòng, ký quỹ bảo lãnh…): ghi TK 244.

TT99 (TK 244, nguyên tắc a, b) mô tả TK 244 là số tiền doanh nghiệp đem ký quỹ, ký cược tại doanh nghiệp, tổ chức khác trong các quan hệ kinh tế. Các khoản này phải được theo dõi để **thu hồi khi hết thời hạn**. TK 244 không dùng cho tài sản đem cầm cố, thế chấp.

> ⚠️ Cần xác nhận: TT99 không định nghĩa từ "đặt cọc". Việc xếp một khoản đặt cọc vào TK 331 hay TK 244 dựa vào điều khoản hợp đồng (khoản tiền được trừ vào giá hay được hoàn lại). BA nên yêu cầu kế toán chốt quy tắc này trong chính sách kế toán và gắn với loại hợp đồng trên hệ thống.

### Bút toán

Theo TT99 (TK 244, mục 3):

- Đem tiền ký quỹ, ký cược: Nợ TK 244 / Có TK 111, 112.
- Nhận lại tiền ký quỹ: Nợ TK 111, 112 / Có TK 244.
- Vi phạm cam kết, bị phạt trừ vào tiền ký quỹ: Nợ TK 811 / Có TK 244.
- **Dùng tiền ký quỹ để thanh toán cho người bán**: Nợ TK 331 / Có TK 244. Đây là một dạng cấn trừ được TT99 hướng dẫn trực tiếp.

### Yêu cầu dữ liệu và báo cáo

TT99 (TK 244, nguyên tắc b–d) yêu cầu:

- theo dõi chi tiết theo **loại, đối tượng, kỳ hạn, nguyên tệ**;
- phân loại **ngắn hạn** (kỳ hạn còn lại từ 12 tháng trở xuống) hoặc **dài hạn** (trên 12 tháng) khi lập báo cáo;
- khoản quá hạn chưa thu hồi được hoặc khó thu hồi thì **trích lập dự phòng** tương tự dự phòng nợ phải thu khó đòi ([[kt-21-cong-no-phai-thu]]);
- khoản bằng ngoại tệ được **đánh giá lại** cuối kỳ.

Vì vậy mỗi khoản ký quỹ cần ngày đến hạn trên hệ thống, không chỉ số tiền.

## Cấn trừ công nợ phải thu, phải trả cùng đối tượng

### Tình huống

Một đối tác vừa là nhà cung cấp vừa là khách hàng. Doanh nghiệp nợ họ trên TK 331 và họ nợ doanh nghiệp trên TK 131. Hai bên thoả thuận bù trừ thay vì chuyển tiền hai chiều.

Bút toán bù trừ thường dùng:

> Nợ TK 331 (chi tiết đối tác) / Có TK 131 (chi tiết đối tác), với số tiền bù trừ

> ⚠️ Cần xác nhận: phần hướng dẫn TK 131 và TK 331 trong Phụ lục II TT99 không có mục riêng cho bút toán bù trừ giữa phải thu và phải trả cùng một đối tượng. TT99 chỉ hướng dẫn bù trừ cho phải thu, phải trả **nội bộ** (TK 136 và 336, phải lập biên bản thanh toán bù trừ) và cho phải thu khác, phải trả khác (TK 138 và 338), cùng bút toán dùng tiền ký quỹ trả người bán (Nợ TK 331 / Có TK 244). Bút toán Nợ 331 / Có 131 ở trên là cách ghi theo bản chất giảm đồng thời hai khoản nợ. Doanh nghiệp nên chốt trong quy chế kế toán.

### Chứng từ cần có

Kế toán cần chứng từ chứng minh hai bên đã đồng ý số bù trừ, thường là **biên bản đối chiếu và bù trừ công nợ** có xác nhận của cả hai bên.

Phía thuế có yêu cầu chặt hơn. Thanh toán bù trừ thuộc "trường hợp đặc thù" được coi như thanh toán không dùng tiền mặt để khấu trừ thuế GTGT đầu vào (Nghị định 181/2025/NĐ-CP, Điều 26 khoản 2):

- **Bù trừ giữa hàng mua vào và hàng bán ra** (hoặc vay mượn hàng): phương thức bù trừ phải được **quy định cụ thể trong hợp đồng**, và phải có **biên bản đối chiếu số liệu và xác nhận giữa hai bên** (điểm a).
- **Bù trừ công nợ qua bên thứ ba**: phải có **biên bản bù trừ công nợ của ba bên** (điểm a).
- **Bù trừ với khoản vay, mượn tiền**: phải có hợp đồng vay, mượn bằng văn bản lập trước đó và chứng từ chuyển tiền từ tài khoản bên cho vay sang tài khoản bên đi vay (điểm b).
- **Phần chênh lệch còn lại** sau bù trừ, nếu thanh toán bằng tiền từ 05 triệu đồng trở lên, phải có chứng từ thanh toán không dùng tiền mặt (điểm đ).

> 💡 Nếu hợp đồng mua bán không ghi phương thức bù trừ, khoản bù trừ có thể không được dùng làm căn cứ khấu trừ thuế GTGT đầu vào. Khi thiết kế luồng bù trừ trên hệ thống, nên cho đính kèm biên bản và tham chiếu hợp đồng ngay trên chứng từ bù trừ.

### Bù trừ trên sổ khác với bù trừ khi lập báo cáo

Bù trừ có biên bản là một nghiệp vụ thật: cả hai khoản nợ cùng giảm trên sổ chi tiết đối tác. Còn khi lập báo cáo mà chưa có thoả thuận, số dư Nợ và Có của từng đối tượng phải trình bày riêng ở cả hai bên Tài sản và Nguồn vốn (TT99, kết cấu TK 131 và TK 331). Hệ thống không được tự động bù trừ số dư 131 và 331 của cùng một đối tác chỉ vì cùng mã đối tác.

Bù trừ trong nội bộ doanh nghiệp (trụ sở chính với đơn vị trực thuộc) đi qua TK 136 và 336, xem [[ktqt-03-giao-dich-noi-bo]].

## Nguồn

- Thông tư 99/2025/TT-BTC, Phụ lục II: TK 131 (nguyên tắc, kết cấu, mục 3); TK 136 (nguyên tắc về bù trừ); TK 141 (toàn bộ); TK 241 (mục 3.2.1); TK 244 (toàn bộ); TK 331 (nguyên tắc b, kết cấu, mục 3.3, 3.4); nguyên tắc kế toán các khoản nợ phải trả (mục 5.1). Bản đăng lại toàn văn: https://expertis.vn/kb/vbpl/phu-luc-ii-thong-tu-99-2025-tt-btc/ (file "Loại tài khoản tài sản TK 111–244" và "Loại tài khoản nợ phải trả TK 331–357").
- Thông tư 99/2025/TT-BTC, Phụ lục I: Mẫu 03-TT Giấy đề nghị tạm ứng, 04-TT Giấy thanh toán tiền tạm ứng, 05-TT Giấy đề nghị thanh toán. Bản đăng lại: https://expertis.vn/kb/vbpl/phu-luc-i-thong-tu-99-2025-tt-btc/
- Nghị định 181/2025/NĐ-CP quy định chi tiết Luật Thuế GTGT, Điều 26 (chứng từ thanh toán không dùng tiền mặt, khoản 1–3): https://hethongphapluat.com/nghi-dinh-181-2025-nd-cp-huong-dan-luat-thue-gia-tri-gia-tang.html
- EY Việt Nam, Tin nhanh về Thuế tháng 5/2026, Nghị định 144/2026/NĐ-CP sửa đổi Nghị định 181/2025/NĐ-CP (dùng để đối chiếu phạm vi sửa đổi Điều 26): https://www.ey.com/content/dam/ey-unified-site/ey-com/vi-vn/technical/tax/documents/ey-vietnam-tax-alert_may-2026_decree-144-on-value-added-tax_vn.pdf
