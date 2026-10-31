# Thuế GTGT đầu ra và quyết toán VAT cuối kỳ

Bài này giúp bạn hiểu thuế GTGT đầu ra được xác định từ đâu (giá tính thuế, thuế suất, thời điểm), đi vào sổ qua TK 3331 thế nào, cuối kỳ bù trừ với đầu vào ra sao, và hệ thống cần cung cấp dữ liệu gì để kế toán kê khai. Bài không hướng dẫn cách lập tờ khai.

## Thuế GTGT đầu ra là gì

Luật Thuế GTGT 48/2024/QH15 (hiệu lực từ 01/7/2025, đã sửa bởi Nghị quyết 204/2025/QH15, Luật 90/2025/QH15 và Luật 149/2025/QH15) quy định tại Điều 11 khoản 1, với phương pháp khấu trừ:

- Số thuế phải nộp = thuế GTGT **đầu ra** − thuế GTGT **đầu vào được khấu trừ**.
- Thuế đầu ra = tổng thuế GTGT của hàng hoá, dịch vụ bán ra ghi trên hoá đơn GTGT, bằng giá tính thuế nhân thuế suất.
- Nếu hoá đơn ghi giá thanh toán đã có thuế, thuế đầu ra = giá thanh toán − giá chưa thuế, với giá chưa thuế = giá thanh toán / (1 + thuế suất) (Điều 7 khoản 1 điểm k).

Phương pháp khấu trừ áp dụng cho cơ sở kinh doanh thực hiện đầy đủ chế độ kế toán, hoá đơn, chứng từ, gồm cơ sở có doanh thu hằng năm từ **01 tỷ đồng trở lên** (trừ hộ, cá nhân kinh doanh) và cơ sở tự nguyện áp dụng (Điều 11 khoản 2). Doanh nghiệp dưới ngưỡng này, trừ trường hợp tự nguyện, nộp theo phương pháp trực tiếp trên doanh thu với tỷ lệ % theo nhóm hoạt động: phân phối, cung cấp hàng hoá 1%; dịch vụ, xây dựng không bao thầu nguyên vật liệu 5%; sản xuất, vận tải, dịch vụ gắn với hàng hoá, xây dựng có bao thầu nguyên vật liệu 3%; hoạt động khác 2% (Điều 12 khoản 2).

Phía đầu vào và điều kiện khấu trừ được trình bày ở [[kt-16-thue-gtgt-dau-vao]].

## Ba yếu tố xác định thuế đầu ra

### Giá tính thuế

Luật Thuế GTGT Điều 7 khoản 1 và khoản 2, các trường hợp hay gặp trong bán hàng:

- Hàng hoá, dịch vụ bán ra: giá bán chưa có thuế GTGT. Hàng chịu thuế tiêu thụ đặc biệt, thuế bảo vệ môi trường: giá đã có các thuế đó nhưng chưa có GTGT.
- Trao đổi, tiêu dùng nội bộ, biếu, tặng, cho: giá tính thuế của hàng cùng loại hoặc tương đương tại thời điểm phát sinh.
- Hàng dùng để khuyến mại theo pháp luật thương mại: giá tính thuế bằng 0 (chi tiết theo hình thức ở [[kt-20-khuyen-mai-voucher-combo]]).
- Bán trả góp, trả chậm: giá bán trả một lần chưa thuế, **không gồm lãi** trả góp, trả chậm.
- Đại lý, môi giới hưởng hoa hồng: tiền hoa hồng chưa thuế.
- Giá tính thuế gồm cả phụ thu và phí thu thêm mà cơ sở kinh doanh được hưởng.

Nghị định 181/2025/NĐ-CP (Điều 14, bản hợp nhất 2026) bổ sung: giá tính thuế không gồm các khoản thu không liên quan tới bán hàng như bồi thường bằng tiền, tiền thưởng, các khoản thu hộ, các khoản thu tài chính; nếu có chiết khấu thương mại thì giá tính thuế là giá đã chiết khấu thương mại chưa có thuế.

### Thuế suất

Luật Thuế GTGT Điều 9:

- **0%:** hàng hoá, dịch vụ xuất khẩu và một số trường hợp như vận tải quốc tế, xây dựng lắp đặt ở nước ngoài hoặc trong khu phi thuế quan; có danh sách trường hợp không áp dụng 0% (khoản 1 điểm d).
- **5%:** danh mục tại khoản 2 (nước sạch phục vụ sản xuất và sinh hoạt, phân bón, thiết bị y tế, thuốc, đồ chơi trẻ em, sách các loại trừ sách thuộc đối tượng không chịu thuế, nhà ở xã hội...).
- **10%:** hàng hoá, dịch vụ không thuộc hai nhóm trên.

**Giảm thuế đang áp dụng:** theo Nghị quyết 204/2025/QH15 (chú thích trong văn bản hợp nhất 12/VBHN-VPQH), thuế suất 10% được giảm 2% (còn 8%) cho các nhóm hàng hoá, dịch vụ thuộc khoản 3 Điều 9, trừ một số nhóm (viễn thông, tài chính, ngân hàng, chứng khoán, bảo hiểm, kinh doanh bất động sản, sản phẩm kim loại, sản phẩm khai khoáng trừ than, hàng chịu thuế tiêu thụ đặc biệt trừ xăng), áp dụng **từ 01/7/2025 đến hết 31/12/2026**.

> ⚠️ Mức giảm này có thời hạn. Hệ thống cần cho phép cấu hình thuế suất theo mặt hàng và theo khoảng thời gian, không mã hoá cứng 8% hay 10%. Từ 01/01/2027 cần kiểm tra lại văn bản hiện hành.

Điều 9 khoản 4: cơ sở kinh doanh nhiều loại hàng có thuế suất khác nhau (kể cả hàng không chịu thuế) **phải khai theo từng mức thuế suất**; nếu không xác định được theo từng mức thì phải tính và nộp theo mức thuế suất cao nhất. Đây là lý do dữ liệu bán ra phải giữ được thuế suất trên từng dòng hàng.

### Thời điểm

Luật Thuế GTGT Điều 8: với hàng hoá là thời điểm chuyển giao quyền sở hữu hoặc quyền sử dụng hoặc thời điểm lập hoá đơn; với dịch vụ là thời điểm hoàn thành cung cấp dịch vụ hoặc thời điểm lập hoá đơn; không phân biệt đã thu tiền hay chưa. Một số hoạt động (xuất nhập khẩu, viễn thông, bảo hiểm, điện nước, bất động sản, xây dựng lắp đặt, dầu khí) do Chính phủ quy định riêng.

Nghị định 123/2020/NĐ-CP, Điều 10 khoản 9 (sửa bởi Nghị định 70/2025/NĐ-CP): **người bán khai thuế theo thời điểm lập hoá đơn**.

Thông tư 99/2025/TT-BTC (nguyên tắc kế toán các khoản doanh thu, mục 5) nhắc rằng thời điểm và căn cứ ghi nhận doanh thu kế toán và doanh thu tính thuế có thể khác nhau. Tổng doanh thu trên tờ khai GTGT và doanh thu TK 511 vì vậy không nhất thiết bằng nhau; khoản chênh cần giải thích được (xem các tình huống lệch kỳ ở [[kt-17-quy-trinh-ban-hang]]).

## Ghi sổ thuế đầu ra: TK 3331

TT99 dùng TK 3331 – Thuế GTGT phải nộp, gồm hai tài khoản cấp 3:

- **TK 33311 – Thuế GTGT đầu ra:** phản ánh thuế đầu ra, thuế đầu vào đã khấu trừ, thuế của hàng bị trả lại, bị giảm giá, số phải nộp, đã nộp, còn phải nộp của hàng tiêu thụ trong kỳ.
- **TK 33312 – Thuế GTGT hàng nhập khẩu.**

Bút toán chính (TT99 TK 333 mục 3.1):

- Bán hàng, phương pháp khấu trừ, tách thuế ngay khi xuất hoá đơn: `Nợ TK 111, 112, 131 / Có TK 511, 515, 711 (giá chưa thuế) / Có TK 3331 (33311)`.
- Phương pháp trực tiếp: hoặc tách ngay như trên, hoặc ghi doanh thu gồm cả thuế rồi định kỳ ghi giảm `Nợ TK 511, 515, 711 / Có TK 3331 (33311)`.
- Hàng bị trả lại, giảm giá, chiết khấu thương mại: `Nợ TK 521 / Nợ TK 3331 / Có TK 111, 112, 131` (xem [[kt-18-giam-tru-tra-truoc]], [[kt-19-doi-tra-hoan-tien]]).

TT99 (TK 333 mục 1.c) coi thuế gián thu về bản chất là khoản thu hộ bên thứ ba, nên phải loại khỏi doanh thu trên báo cáo tài chính trong mọi trường hợp.

## Quyết toán VAT cuối kỳ trên sổ

Cuối mỗi kỳ tính thuế, ba bước kế toán (TT99 TK 333 mục 3.1.3, 3.1.1.c, 3.1.4, 3.1.5):

1. **Bù trừ đầu vào với đầu ra:** `Nợ TK 3331 (33311) / Có TK 133` bằng số thuế đầu vào được khấu trừ trong kỳ.
2. **Xử lý đầu vào không được khấu trừ:** nếu lúc mua chưa xác định được, đã ghi hết vào TK 133 thì định kỳ chuyển phần không được khấu trừ vào chi phí liên quan: `Nợ TK 152, 156, 211, 627, 632, 641, 642... / Có TK 133`.
3. **Nộp thuế:** `Nợ TK 3331 / Có TK 111, 112`.

Trường hợp đặc biệt:

- Được giảm thuế GTGT phải nộp: ghi vào thu nhập khác, `Nợ TK 33311 (nếu trừ vào số phải nộp) hoặc Nợ TK 111, 112 (nếu nhận lại bằng tiền) / Có TK 711`.
- Được hoàn thuế đầu vào do đầu vào lớn hơn đầu ra: khi nhận tiền hoàn, `Nợ TK 111, 112 / Có TK 133`.

Số dư sau bù trừ:

- Số dư **Có** TK 3331: số thuế còn phải nộp.
- Số dư **Nợ** TK 133: số thuế đầu vào còn được khấu trừ, hoặc đã được hoàn nhưng ngân sách chưa trả (TT99 TK 133 mục 2).
- TK 333 có thể có số dư Nợ trong trường hợp cá biệt: số đã nộp lớn hơn số phải nộp, hoặc số đã nộp được miễn, giảm, hoàn nhưng chưa thực hiện (TT99 TK 333 mục 2).

Ví dụ giả định cho một tháng: tổng thuế đầu ra trên hoá đơn bán ra 150 triệu, đã ghi giảm 5 triệu do hàng bị trả lại, thuế đầu vào được khấu trừ 120 triệu.

- Số dư Có TK 33311 trước bù trừ: 150 − 5 = 145 triệu.
- Bù trừ: `Nợ TK 33311 / Có TK 133 (120 triệu)`.
- Còn phải nộp 25 triệu: `Nợ TK 3331 / Có TK 112 (25 triệu)` khi nộp.

Nếu đầu vào được khấu trừ lớn hơn đầu ra, chỉ bù trừ tới số đầu ra; phần còn lại nằm ở số dư Nợ TK 133.

### Hoàn thuế

Luật Thuế GTGT Điều 15 quy định các trường hợp được hoàn. Ví dụ với xuất khẩu (khoản 1): cơ sở có hàng hoá, dịch vụ xuất khẩu, nếu số thuế đầu vào chưa khấu trừ hết **từ 300 triệu đồng trở lên** thì được hoàn theo tháng, quý; nếu vừa xuất khẩu vừa bán nội địa thì phải hạch toán riêng thuế đầu vào dùng cho xuất khẩu, hoặc phân bổ theo tỷ lệ doanh thu xuất khẩu trên tổng doanh thu chịu thuế; số được hoàn không quá 10% doanh thu xuất khẩu của kỳ hoàn thuế.

> ⚠️ Cần xác nhận: quy tắc chung về chuyển số thuế đầu vào chưa khấu trừ hết sang kỳ sau (ngoài các trường hợp hoàn thuế) và thủ tục khai thuế thuộc pháp luật quản lý thuế, chưa đọc trong bài này.

## Hệ thống cần cung cấp gì cho kê khai

Bài không dạy lập tờ khai, nhưng từ các quy định trên có thể rút ra dữ liệu tối thiểu hệ thống cần giữ và xuất được:

- **Danh sách hoá đơn bán ra theo kỳ lập hoá đơn,** vì người bán khai thuế theo thời điểm lập hoá đơn (Nghị định 123/2020 Điều 10 khoản 9).
- **Tách theo từng mức thuế suất** (0%, 5%, 8%, 10%, không chịu thuế), vì phải khai theo từng mức (Luật Thuế GTGT Điều 9 khoản 4).
- **Hoá đơn điều chỉnh, thay thế và kỳ kê khai của chúng,** vì Nghị định 123/2020 Điều 19 khoản 5 (sửa bởi Nghị định 70/2025) phân biệt: hoá đơn điều chỉnh, thay thế do **lập sai** thì khai bổ sung vào **kỳ của hoá đơn bị điều chỉnh, thay thế**; hoá đơn điều chỉnh cho chiết khấu theo doanh số, trả hàng và các trường hợp ở khoản 4 thì người bán khai vào **kỳ lập hoá đơn điều chỉnh**.
- **Đối chiếu số dư TK 33311 với tổng thuế trên dữ liệu hoá đơn** của kỳ, có chỉ ra chênh lệch do bút toán không qua hoá đơn.
- **Số dư TK 133 đầu kỳ, phát sinh, cuối kỳ** cho phần bù trừ.
- **Đối chiếu doanh thu TK 511 với doanh thu trên hoá đơn,** vì hai số này có thể khác nhau (TT99 nguyên tắc doanh thu mục 5).

> 💡 Câu hỏi BA nên hỏi kế toán khách: ai là "nguồn sự thật" cho tờ khai, sổ cái hay dữ liệu hoá đơn điện tử? Câu trả lời quyết định báo cáo đối chiếu nào là bắt buộc trước khi khoá kỳ. Xem [[kt-36-quy-trinh-khoa-so]].

## Ảnh hưởng tới báo cáo

- Báo cáo tình hình tài chính: số dư Có TK 3331 nằm trong thuế và các khoản phải nộp Nhà nước; số dư Nợ TK 133 là tài sản (thuế GTGT được khấu trừ). Xem [[kt-39-bao-cao-tinh-hinh-tai-chinh]].
- Báo cáo kết quả hoạt động kinh doanh: doanh thu và các khoản giảm trừ không gồm thuế GTGT; khoản thuế được giảm ghi vào thu nhập khác. Xem [[kt-40-bao-cao-ket-qua-kinh-doanh]].
- Bán hàng xuyên biên giới và VAT nước ngoài: [[ktqt-17-vat-eu-uk]].

## Nguồn

- Luật Thuế GTGT 48/2024/QH15, Văn bản hợp nhất 12/VBHN-VPQH (2026, hợp nhất Nghị quyết 204/2025/QH15, Luật 90/2025/QH15, Luật 149/2025/QH15): Điều 7, 8, 9 (kèm chú thích 5 về giảm thuế), 11, 12, 15 khoản 1, 16. https://datafiles.chinhphu.vn/cpp/files/vbpq/2026/02/12-vbhn-vpqh.pdf
- Nghị định 181/2025/NĐ-CP, Văn bản hợp nhất 18/VBHN-BTC (2026): Điều 6 khoản 2, Điều 14. https://luatvietnam.vn/thue/van-ban-hop-nhat-18-vbhn-btc-2026-quy-dinh-chi-tiet-thi-hanh-luat-thue-gia-tri-gia-tang-436641-d5.html
- Thông tư 99/2025/TT-BTC, Phụ lục II: TK 333 (mục 1.c, 2, mô tả TK 3331, 33311, 33312, 3.1.1, 3.1.3, 3.1.4, 3.1.5). https://expertis.vn/wp-content/uploads/2026/01/Loai-tai-khoan-no-phai-tra-TK-331-⟶-357.pdf
- Thông tư 99/2025/TT-BTC, Phụ lục II: TK 133 (mục 1, 2). https://expertis.vn/wp-content/uploads/2026/01/Loai-tai-khoan-tai-san-TK-111-⟶-244.pdf
- Thông tư 99/2025/TT-BTC, Phụ lục II, phần B: nguyên tắc kế toán các khoản doanh thu (mục 4, 5); TK 521 (mục 3). https://expertis.vn/van-ban/phu-luc-ii-thong-tu-99-2025-tt-btc/
- Nghị định 70/2025/NĐ-CP sửa đổi Nghị định 123/2020/NĐ-CP, khoản 7 Điều 1 (Điều 10 khoản 9) và khoản 13 Điều 1 (Điều 19 khoản 4, 5). https://luatvietnam.vn/tai-chinh/nghi-dinh-70-2025-nd-cp-cua-chinh-phu-sua-doi-bo-sung-mot-so-dieu-cua-nghi-dinh-123-2020-nd-cp-ngay-19-10-2020-cua-chinh-phu-quy-dinh-ve-hoa-don-chung-tu-394682-d1.html
