# Mua dịch vụ, tài sản và phân loại chi phí

Cùng một hoá đơn mua có thể đi vào chi phí trong kỳ, tài sản cố định, công cụ dụng cụ hoặc chi phí chờ phân bổ. Chọn sai nhóm thì lợi nhuận kỳ này và giá trị tài sản trên báo cáo đều sai. Bài này nêu tiêu chí phân loại theo VAS 03 và TT99, bút toán cho từng nhóm, và cách hạng mục chi phí trên hệ thống nối với tài khoản.

## Bốn đích đến của một khoản mua

Khi nhận một hoá đơn không phải hàng để bán hay nguyên vật liệu, câu hỏi là khoản mua này mang lại lợi ích trong bao lâu và có đủ tiêu chuẩn tài sản cố định không.

| Đích đến | Khi nào | Tài khoản TT99 |
|---|---|---|
| Chi phí trong kỳ | Lợi ích dùng hết trong kỳ: dịch vụ, sửa chữa thường xuyên, công cụ giá trị nhỏ | 627, 641, 642, 635… |
| Tài sản cố định | Đủ bốn tiêu chuẩn ghi nhận TSCĐ | 211 (hữu hình), 213 (vô hình); qua 241 nếu cần lắp đặt, chạy thử |
| Công cụ, dụng cụ | Tư liệu lao động không đủ tiêu chuẩn giá trị và thời gian của TSCĐ | 153, khi xuất dùng thì vào chi phí hoặc 242 |
| Chi phí chờ phân bổ | Chi phí đã phát sinh nhưng liên quan đến kết quả kinh doanh của nhiều kỳ | 242 |

> 📌 Trong TT99, TK 242 có tên **"Chi phí chờ phân bổ"**. Tài liệu viết theo TT200 gọi là "chi phí trả trước". Tên mới khớp nội dung hơn: TK 242 nhận cả chi phí đã trả tiền trước lẫn chi phí chưa trả tiền, miễn là liên quan đến nhiều kỳ (TT99, TK 242 nguyên tắc a).

VAS 03 (đoạn 08) giải thích vì sao việc phân loại quan trọng: xác định một khoản là TSCĐ hữu hình hay chi phí sản xuất kinh doanh trong kỳ ảnh hưởng đáng kể đến báo cáo kết quả hoạt động kinh doanh.

## Khi nào là tài sản cố định hữu hình

VAS 03 (đoạn 06) và TT99 (TK 211, nguyên tắc c) yêu cầu thoả mãn **đồng thời bốn tiêu chuẩn**:

1. Chắc chắn thu được lợi ích kinh tế trong tương lai từ việc sử dụng tài sản;
2. Nguyên giá được xác định một cách đáng tin cậy;
3. Thời gian sử dụng ước tính trên 1 năm;
4. Có đủ tiêu chuẩn giá trị theo quy định hiện hành.

Tiêu chuẩn giá trị nằm ngoài chuẩn mực. Thông tư 45/2013/TT-BTC (Điều 3 khoản 1) quy định nguyên giá từ 30.000.000 đồng trở lên.

> 📌 Theo Quyết định 1760/QĐ-BTC ngày 01/07/2026 của Bộ Tài chính, Thông tư 45/2013/TT-BTC (và Thông tư 48/2019/TT-BTC về dự phòng) tiếp tục được áp dụng từ kỳ tính thuế TNDN năm 2025 cho đến khi có văn bản thay thế, bãi bỏ, nhưng **không quá ngày 31/12/2026**. Ngưỡng 30 triệu đồng vì vậy có thể đổi khi có văn bản thay thế. Trên hệ thống, nên để ngưỡng là tham số cấu hình, không viết cứng, và kiểm tra lại văn bản hiện hành trước kỳ kế toán 2027.

TT99 còn cho phép coi cả một hệ thống hoặc **từng bộ phận** là một TSCĐ độc lập nếu bộ phận đó tự thoả bốn tiêu chuẩn. VAS 03 (đoạn 12, 27) cho hạch toán riêng các bộ phận có thời gian sử dụng hữu ích khác nhau. Chi tiết vòng đời TSCĐ ở [[kt-29-vong-doi-tscd]].

### Nguyên giá TSCĐ mua sắm

VAS 03 (đoạn 14) và TT99 (TK 211, nguyên tắc đ1): nguyên giá gồm giá mua (trừ chiết khấu thương mại, giảm giá), các khoản thuế không được hoàn lại, và các chi phí liên quan trực tiếp để đưa tài sản vào trạng thái sẵn sàng sử dụng: chuẩn bị mặt bằng, vận chuyển và bốc xếp ban đầu, lắp đặt, chạy thử (trừ khoản thu hồi từ sản phẩm, phế liệu chạy thử), chi phí chuyên gia…

Không tính vào nguyên giá (VAS 03 đoạn 17): chi phí quản lý hành chính, chi phí sản xuất chung và các chi phí khác không liên quan trực tiếp đến việc mua sắm và đưa TSCĐ vào sử dụng. Khoản lỗ ban đầu do máy móc không hoạt động đúng dự tính được ghi vào chi phí trong kỳ.

Một số trường hợp đặc biệt:

- **Trả chậm** (VAS 03 đoạn 16; TT99 TK 211 mục 3.1c): nguyên giá theo giá mua trả ngay. Chênh lệch so với tổng tiền phải trả ghi vào chi phí tài chính theo kỳ hạn: Nợ TK 635 / Có TK 331, trừ khi được vốn hoá theo chuẩn mực chi phí đi vay.
- **Mua nhà cửa, vật kiến trúc gắn với quyền sử dụng đất** (VAS 03 đoạn 15; TT99 TK 211 nguyên tắc đ1): phải tách riêng giá trị quyền sử dụng đất. Phần tài sản trên đất là TSCĐ hữu hình. Quyền sử dụng đất ghi nhận là TSCĐ vô hình hoặc chi phí chờ phân bổ tuỳ trường hợp theo quy định pháp luật.
- **Mua kèm thiết bị, phụ tùng thay thế**: Nợ TK 211, Nợ TK 152, 153 (phụ tùng), Nợ TK 133 (1332) / Có TK 111, 112, 331…

### Bút toán

- **Mua về dùng ngay** (gồm cả tài sản đã ở trạng thái sẵn sàng hoạt động nhưng chưa dùng), căn cứ chứng từ, hồ sơ TSCĐ và Biên bản giao nhận TSCĐ (Mẫu 01-TSCĐ):
  > Nợ TK 211 (giá mua chưa thuế GTGT), Nợ TK 133 (1332) / Có TK 111, 112, 331, 341…
- **Phải qua lắp đặt, chạy thử**: tập hợp chi phí vào TK 2411 – Mua sắm TSCĐ. Khi chạy thử xong, bàn giao đưa vào trạng thái sẵn sàng hoạt động thì ghi Nợ TK 211 / Có TK 241 (TT99, TK 241 mục 3.1).

Thuế GTGT của TSCĐ ghi vào **TK 1332**, tách khỏi TK 1331 của hàng hoá, dịch vụ (TT99, TK 133). Trên hệ thống, mã thuế mua TSCĐ cần trỏ về TK 1332 ([[kt-16-thue-gtgt-dau-vao]]).

### Chi phí phát sinh sau khi đã ghi nhận TSCĐ

VAS 03 (đoạn 23–25) và TT99 (TK 211 nguyên tắc g, mục 3.1 l) chia ba loại:

| Loại | Hạch toán |
|---|---|
| Sửa chữa, bảo dưỡng thường xuyên | Chi phí trong kỳ: Nợ TK 623, 627, 641, 642, Nợ TK 133 / Có TK 111, 112 |
| Sửa chữa, bảo dưỡng định kỳ theo yêu cầu kỹ thuật | Tập hợp Nợ TK 2413; hoàn thành thì Nợ TK 242 / Có TK 2413; định kỳ phân bổ Nợ TK 623, 627, 641, 642 / Có TK 242 |
| Nâng cấp, cải tạo làm tăng năng lực hoặc kéo dài thời gian sử dụng | Tập hợp Nợ TK 2414; hoàn thành thì Nợ TK 211 / Có TK 2414 (tăng nguyên giá) |

## Công cụ, dụng cụ

TT99 (TK 153, nguyên tắc a) định nghĩa công cụ, dụng cụ là tư liệu lao động không đủ tiêu chuẩn về giá trị và thời gian sử dụng của TSCĐ, được quản lý và hạch toán như nguyên vật liệu. Ví dụ TT99 liệt kê: đà giáo, ván khuôn, dụng cụ gá lắp chuyên dùng cho xây lắp; thiết bị, phụ tùng thay thế; bao bì bán kèm hàng hoá có tính tiền riêng; dụng cụ bằng thuỷ tinh, sành, sứ; phương tiện quản lý, đồ dùng văn phòng; quần áo, giày dép chuyên dùng.

Mua nhập kho: Nợ TK 153, Nợ TK 133 / Có TK 111, 112, 141, 331. Khi xuất dùng:

- **Giá trị nhỏ hoặc chỉ liên quan một kỳ**: ghi một lần vào chi phí, Nợ TK 623, 627, 641, 642 / Có TK 153.
- **Liên quan nhiều kỳ**: Nợ TK 242 / Có TK 153 khi xuất, rồi mỗi kỳ phân bổ Nợ TK 623, 627, 641, 642 / Có TK 242. Thời gian phân bổ có thể là thời gian sử dụng hữu ích dự kiến của công cụ (TT99, TK 242 nguyên tắc c).

Công cụ xuất dùng vẫn phải theo dõi cả hiện vật và giá trị trên sổ chi tiết theo nơi sử dụng và người chịu trách nhiệm vật chất (TK 153, nguyên tắc c). Vì vậy trên hệ thống, công cụ đã xuất vẫn cần một sổ theo dõi riêng, không biến mất khỏi dữ liệu khi giá trị đã chuyển sang TK 242. Phân bổ tự động xem [[kt-30-ccdc-tra-truoc-trich-truoc]].

> ❌ TT99 không đặt ngưỡng giá trị cụ thể cho "công cụ giá trị nhỏ" được ghi một lần vào chi phí. Đây là lựa chọn chính sách của doanh nghiệp, phải ghi vào quy chế và áp dụng nhất quán. Đừng tự đặt một con số mặc định trên hệ thống.

## Chi phí chờ phân bổ (TK 242)

Theo TT99 (TK 242, nguyên tắc b), TK 242 gồm:

- tiền thuê cơ sở hạ tầng, thuê hoạt động TSCĐ (đất, nhà xưởng, kho bãi, văn phòng, cửa hàng…) phục vụ nhiều kỳ;
- chi phí mua bảo hiểm và các khoản chi trả một lần cho nhiều kỳ;
- công cụ, dụng cụ, bao bì luân chuyển, đồ dùng cho thuê liên quan nhiều kỳ;
- chi phí sửa chữa, bảo dưỡng định kỳ TSCĐ liên quan nhiều kỳ;
- một số chênh lệch trong giao dịch bán và thuê lại TSCĐ, lợi thế thương mại khi mua tài sản thuần;
- các chi phí liên quan nhiều kỳ khác không thoả điều kiện TSCĐ.

Bút toán: Nợ TK 242, Nợ TK 133 / Có TK 111, 112, 153, 331, 334, 338… Định kỳ phân bổ: Nợ TK 623, 627, 635, 641, 642 / Có TK 242.

Doanh nghiệp chọn phương pháp và tiêu thức phân bổ theo tính chất từng loại chi phí. TT99 (nguyên tắc d) yêu cầu theo dõi chi tiết **từng khoản** theo kỳ hạn, số đã phát sinh, số đã phân bổ cho từng đối tượng chịu chi phí và số còn lại. Hệ thống cần lưu từng khoản như một bản ghi có lịch phân bổ, không chỉ là một số dư trên TK 242.

**Ví dụ giả định.** Doanh nghiệp trả trước tiền thuê văn phòng 12 tháng, 120.000.000 đồng chưa thuế. Khi trả: Nợ TK 242 120.000.000, Nợ TK 133 / Có TK 112. Mỗi tháng phân bổ: Nợ TK 642 10.000.000 / Có TK 242 10.000.000.

## Dịch vụ mua ngoài và chọn tài khoản chi phí

Nhận dịch vụ (vận chuyển, điện, nước, điện thoại, kiểm toán, tư vấn, quảng cáo…) chưa trả tiền: Nợ TK 241, 242, 627, 641, 642…, Nợ TK 133 (1331) / Có TK 331 (TT99, TK 331 mục 3.5). Tài khoản Nợ phụ thuộc **bộ phận sử dụng** và **thời gian hưởng lợi**:

- **TK 627** – chi phí sản xuất chung ở phân xưởng ([[kt-27-chi-phi-san-xuat]]).
- **TK 641 – Chi phí bán hàng**: chi phí phát sinh trong quá trình bán hàng như chào hàng, quảng cáo, hoa hồng bán hàng, bảo quản, đóng gói, vận chuyển hàng đi bán, bảo hành. Dịch vụ mua ngoài ghi TK 6417 (ví dụ thuê kho bãi, thuê bốc vác, vận chuyển hàng đi bán, hoa hồng đại lý). Chi phí bằng tiền khác ghi TK 6418; TT99 xếp vào đây cả chi phí tiếp khách ở bộ phận bán hàng, giới thiệu sản phẩm, quảng cáo, chào hàng, hội nghị khách hàng. Vì vậy hạng mục "quảng cáo" thường trỏ về TK 6418, không phải 6417, trừ khi quy chế của doanh nghiệp quy định khác.
- **TK 642 – Chi phí quản lý doanh nghiệp**: chi phí quản lý chung. Dịch vụ mua ngoài ghi TK 6427 (thuê TSCĐ, điện, nước…). Chi phí bằng tiền khác ghi TK 6428 (hội nghị, tiếp khách bộ phận quản lý, công tác phí…).
- **TK 241** nếu dịch vụ phục vụ đầu tư xây dựng, sửa chữa lớn; **TK 242** nếu liên quan nhiều kỳ.

TT99 (nguyên tắc kế toán các khoản chi phí, mục 4) yêu cầu theo dõi chi tiết chi phí theo **yếu tố** (tiền lương, nguyên vật liệu, chi phí mua ngoài, khấu hao…). Các tài khoản cấp 2 của 641 và 642 (nhân viên, vật liệu, dụng cụ, khấu hao, thuế phí, dịch vụ mua ngoài, bằng tiền khác) là cách chia theo yếu tố đó. Doanh nghiệp được mở thêm tài khoản chi tiết.

> 📌 Khoản chi không được trừ khi tính thuế TNDN nhưng có đủ hoá đơn chứng từ và đã hạch toán đúng chế độ thì **không ghi giảm chi phí kế toán**. Khoản đó chỉ được điều chỉnh khi quyết toán thuế TNDN (TT99, nguyên tắc chi phí mục 5; TK 641, 642 nguyên tắc b). Vì vậy hệ thống nên đánh dấu khoản không được trừ trên dòng chi phí để phục vụ quyết toán thuế, còn bút toán chi phí vẫn giữ nguyên. Xem [[kt-37-thue-tndn]].

## Hạng mục chi phí và luồng duyệt trên hệ thống

Người đề nghị mua không chọn số hiệu tài khoản. Phần mềm ERP thường cho họ chọn **hạng mục chi phí** (ví dụ "Thuê văn phòng", "Quảng cáo trực tuyến", "Sửa chữa máy móc"), mỗi hạng mục được cấu hình sẵn:

- tài khoản chi phí mặc định (6417, 6427, 627…) hoặc đích đến 242, 153, 211;
- mã thuế GTGT đầu vào mặc định (1331 hoặc 1332);
- bộ phận hoặc trung tâm chi phí ([[kt-33-trung-tam-chi-phi]]);
- ngưỡng duyệt và người duyệt.

Cấu hình như vậy chuyển các quy tắc ở trên thành dữ liệu, nhưng tài khoản Nợ còn phụ thuộc bộ phận sử dụng. Cùng một hạng mục "dịch vụ mua ngoài" ghi 6417 nếu thuộc bộ phận bán hàng và 6427 nếu thuộc bộ phận quản lý. Hệ thống cần ánh xạ theo cặp hạng mục và bộ phận, hoặc cho kế toán sửa khi duyệt.

Về luồng duyệt, TT99 (Điều 10 khoản 3) yêu cầu phân cấp ký chứng từ phù hợp với pháp luật, yêu cầu quản lý và quy chế quản trị nội bộ, để kiểm soát chặt chẽ và xác định được trách nhiệm cá nhân. Ngưỡng duyệt theo giá trị, theo hạng mục hay theo ngân sách là quyết định quản trị của doanh nghiệp. Kiểm soát ngân sách ở [[kt-35-ngan-sach]].

## Ảnh hưởng tới báo cáo

- **Ghi vào chi phí** (641, 642, 627 rồi vào giá thành): lợi nhuận kỳ này giảm ngay.
- **Ghi vào TSCĐ**: tài sản dài hạn tăng, chi phí đi dần qua khấu hao trong thời gian sử dụng hữu ích (VAS 03 đoạn 29).
- **Ghi vào 242**: tài sản tăng, chi phí đi dần theo lịch phân bổ.
- Phân loại sai giữa chi phí và tài sản làm lệch lợi nhuận giữa các kỳ, dù tổng chi phí qua nhiều kỳ không đổi.

## Nguồn

- Chuẩn mực kế toán Việt Nam số 03 – TSCĐ hữu hình (Quyết định 149/2001/QĐ-BTC), đoạn 06, 08, 12, 14–17, 23–25, 27, 29: https://cdn.thuvienphapluat.vn//uploads/phapluat/2022-2/NBT_MST/2025/thang-2/ngay-13/vas3.doc
- Thông tư 99/2025/TT-BTC, phần thân, Điều 10 (lập, ký, kiểm soát chứng từ): https://static3.luatvietnam.vn/uploaded/others/2025/10/30/tt99_3010133637.pdf
- Thông tư 99/2025/TT-BTC, Phụ lục II: nguyên tắc kế toán các khoản chi phí (mục 1, 4, 5); TK 133; TK 153 (nguyên tắc a–đ, mục 3); TK 211 (nguyên tắc c, đ1, g; mục 3.1 b, c, l); TK 241 (TK 2411, mục 3.1); TK 242 (toàn bộ); TK 331 (mục 3.5); TK 641, TK 642 (nguyên tắc, tài khoản cấp 2). Bản đăng lại toàn văn: https://expertis.vn/kb/vbpl/phu-luc-ii-thong-tu-99-2025-tt-btc/ (file "Loại tài khoản tài sản TK 111–244", "Loại tài khoản nợ phải trả TK 331–357", "Loại tài khoản chi phí sản xuất kinh doanh TK 621–642").
- Thông tư 99/2025/TT-BTC, Phụ lục I: Mẫu 01-TSCĐ Biên bản giao nhận TSCĐ. Bản đăng lại: https://expertis.vn/kb/vbpl/phu-luc-i-thong-tu-99-2025-tt-btc/
- Thông tư 45/2013/TT-BTC, Điều 3 khoản 1 (tiêu chuẩn giá trị TSCĐ): https://vanban.vcci.com.vn/thong-tu-452013tt-btc-cua-bo-tai-chinh-ve-viec-huong-dan-che-do-quan-ly-su-dung-va-trich-khau-hao-tai-san-co-dinh
- Thời báo Tài chính Việt Nam, "Thông tư số 45/2013/TT-BTC và Thông tư số 48/2019/TT-BTC tiếp tục có hiệu lực" (Quyết định 1760/QĐ-BTC ngày 01/07/2026): https://thoibaotaichinhvietnam.vn/thong-tu-so-452013tt-btc-va-thong-tu-so-482019tt-btc-tiep-tuc-co-hieu-luc-200058.html
