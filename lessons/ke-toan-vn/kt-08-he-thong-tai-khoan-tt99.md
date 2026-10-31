# Hệ thống tài khoản TT99 và tài khoản BA hay gặp

Bài này giúp BA đọc danh mục tài khoản của Thông tư 99/2025/TT-BTC (TT99), nắm những tài khoản bị bỏ, thêm mới hoặc đổi tên so với Thông tư 200/2014/TT-BTC (TT200), và biết mỗi phân hệ ERP chạm vào nhóm tài khoản nào. Đây là nền để review hoạch đồ tài khoản (chart of accounts) và chuyển đổi số dư khi triển khai.

## Khung pháp lý của hệ thống tài khoản

- Luật Kế toán: mỗi đơn vị kế toán chỉ dùng một hệ thống tài khoản cho mục đích kế toán tài chính theo quy định của Bộ Tài chính (khoản 2 Điều 22), và được chi tiết các tài khoản đã chọn (khoản 2 Điều 23).
- TT99 Điều 11 khoản 1: doanh nghiệp áp dụng hệ thống tài khoản tại **Phụ lục II**. TT99 có hiệu lực từ 01/01/2026 (Điều 31) và thay thế TT200 (trừ nội dung kế toán cổ phần hoá doanh nghiệp nhà nước), TT75/2015, TT53/2016 và TT195/2012, theo tóm tắt của Forvis Mazars.
- TT99 Điều 11 khoản 2: doanh nghiệp **được sửa đổi, bổ sung tên, số hiệu, kết cấu và nội dung phản ánh** của tài khoản trong Phụ lục II, với bốn điều kiện: phân loại và hệ thống hoá được nghiệp vụ theo nội dung kinh tế; không trùng lặp đối tượng; tuân thủ nguyên tắc kế toán; **không làm thay đổi hoặc ảnh hưởng đến chỉ tiêu trình bày trên Báo cáo tài chính**. Khi sửa đổi, doanh nghiệp phải ban hành Quy chế hạch toán kế toán (hoặc tài liệu tương đương), nêu rõ sự cần thiết và trách nhiệm trước pháp luật.
- TT99 Điều 11 khoản 3: nghiệp vụ chưa được TT99 hướng dẫn thì doanh nghiệp căn cứ bản chất giao dịch, Luật Kế toán, chuẩn mực kế toán và các nguyên tắc tại TT99 để hạch toán.

Theo bài viết của Khoa Kế toán, Đại học Duy Tân, TT200 trước đây buộc doanh nghiệp đề nghị Bộ Tài chính chấp thuận khi sửa đổi hệ thống tài khoản. TT99 bỏ thủ tục này và chuyển sang cơ chế tự ban hành quy chế.

> 📌 Với BA, khoản 2 Điều 11 có hai hệ quả. Một: khách hàng được tự mở tài khoản chi tiết hoặc đổi số hiệu cho hợp với ERP, nhưng phải có quy chế đi kèm. Hai: dù đổi thế nào, các tài khoản vẫn phải gom được về đúng chỉ tiêu BCTC, nên bảng mapping tài khoản → chỉ tiêu là tài liệu bắt buộc phải có.

## Cấu trúc danh mục tài khoản

Phụ lục II gồm hai phần: **A - Danh mục tài khoản kế toán** và **B - Nội dung và phương pháp kế toán** cho từng tài khoản. Phần B mô tả nguyên tắc kế toán, kết cấu Nợ/Có/số dư và bút toán của các giao dịch chủ yếu.

Danh mục phần A đánh số thứ tự **71 tài khoản cấp 1** (số hiệu 3 chữ số), kèm tài khoản cấp 2 (4 chữ số) và một số tài khoản cấp 3 (5 chữ số), ví dụ 33311, 82111. Các tài khoản được xếp theo nhóm, và chữ số đầu của số hiệu cho biết nhóm:

| Chữ số đầu | Nhóm trong Phụ lục II | Ví dụ | Lên báo cáo |
|---|---|---|---|
| 1, 2 | Loại tài khoản tài sản | 111, 112, 131, 133, 152, 156, 211, 214, 242 | Báo cáo tình hình tài chính |
| 3 | Loại tài khoản nợ phải trả | 331, 333, 334, 338, 341 | Báo cáo tình hình tài chính |
| 4 | Loại tài khoản vốn chủ sở hữu | 411, 413, 421 | Báo cáo tình hình tài chính |
| 5 | Loại tài khoản doanh thu | 511, 515, 521 | Báo cáo kết quả hoạt động kinh doanh |
| 6 | Loại tài khoản chi phí sản xuất, kinh doanh | 621, 622, 627, 632, 635, 641, 642 | Báo cáo kết quả hoạt động kinh doanh (và giá thành) |
| 7 | Loại tài khoản thu nhập khác | 711 | Báo cáo kết quả hoạt động kinh doanh |
| 8 | Loại tài khoản chi phí khác | 811, 821 | Báo cáo kết quả hoạt động kinh doanh |
| 9 | Tài khoản xác định kết quả kinh doanh | 911 | Không lên trực tiếp; kết chuyển sang 421 |

Các tài khoản nhóm 1–4 có số dư, nhóm 5–9 không có số dư cuối kỳ, xem [[kt-06-phuong-trinh-ke-toan]].

### Ít tài khoản cấp 2 bắt buộc hơn

So danh mục TT99 với danh mục TT200 (văn bản hợp nhất 04/VBHN-BTC), nhiều tài khoản cấp 1 không còn tài khoản cấp 2 do Bộ Tài chính quy định. Ví dụ: TT200 có TK 1111, 1121, 1531, 1561, 2111, 3341, 4131, 5111, 5211. Danh mục TT99 chỉ còn TK 111, 112, 153, 156, 211, 334, 413, 511, 521 ở cấp 1. Phần B của TT99 thay bằng câu "Doanh nghiệp có thể mở thêm các tài khoản chi tiết… cho phù hợp với đặc điểm hoạt động sản xuất, kinh doanh và yêu cầu quản lý". Câu này có ở TK 111, 156, 511, 521, 632. Ví dụ TK 511 gợi ý chi tiết theo doanh thu bán hàng hoá, sản phẩm, cung cấp dịch vụ, bán BĐSĐT, bán quyền được nhận hàng hoá, quyền sử dụng dịch vụ.

> ⚠️ Hoạch đồ tài khoản mẫu của phần mềm theo TT200 vẫn còn các tài khoản cấp 2 như 5111, 5113, 1561. Giữ lại không sai (doanh nghiệp được mở chi tiết), nhưng phải ghi vào quy chế hạch toán và giữ đúng mapping lên chỉ tiêu BCTC.

## Thay đổi so với TT200

Bảng dưới lập bằng cách so danh mục Phụ lục II TT99 với tiêu đề các tài khoản trong văn bản hợp nhất TT200, đối chiếu với bản so sánh của Đại học Duy Tân.

**Tài khoản cấp 1 bị bỏ**

| TK | Tên trong TT200 |
|---|---|
| 161 | Chi sự nghiệp |
| 417 | Quỹ hỗ trợ sắp xếp doanh nghiệp |
| 441 | Nguồn vốn đầu tư xây dựng cơ bản |
| 461 | Nguồn kinh phí sự nghiệp |
| 466 | Nguồn kinh phí hình thành tài sản cố định |
| 611 | Mua hàng |
| 631 | Giá thành sản xuất |

Tài khoản cấp 2 bị bỏ gồm TK 1385 - Phải thu về cổ phần hoá và TK 3385 - Phải trả về cổ phần hoá.

TK 611 và 631 trong TT200 phục vụ phương pháp kiểm kê định kỳ hàng tồn kho. Phần B Phụ lục II TT99 không còn hai tài khoản này và không có đoạn nào nhắc tới "kiểm kê định kỳ".

> ⚠️ Cần xác nhận: doanh nghiệp đang hạch toán hàng tồn kho theo kiểm kê định kỳ sẽ xử lý thế nào sau 01/01/2026 (chuyển sang kê khai thường xuyên, hay tự mở tài khoản theo khoản 2 Điều 11). TT99 không có quy định chuyển đổi riêng cho TK 611, 631. Hỏi kế toán trưởng và đơn vị tư vấn của khách hàng.

**Tài khoản mới**

| TK | Tên | Ghi chú |
|---|---|---|
| 215 | Tài sản sinh học | Cấp 1 mới, có chi tiết 2151, 2152, 2153 |
| 332 | Phải trả cổ tức, lợi nhuận | Cấp 1 mới; ghi nhận khi doanh nghiệp không còn quyền từ chối chi trả |
| 1383 | Thuế TTĐB của hàng nhập khẩu | Cấp 2 của TK 138 |
| 2295 | Dự phòng tổn thất tài sản sinh học | Cấp 2 của TK 229 |
| 2414 | Nâng cấp, cải tạo TSCĐ | Cấp 2 của TK 241 |
| 82111, 82112 | Chi phí thuế TNDN hiện hành theo Luật thuế TNDN; chi phí thuế TNDN bổ sung theo quy định về thuế tối thiểu toàn cầu | Cấp 3 của TK 8211 |

**Tài khoản đổi tên**

| TK | Tên trong TT200 | Tên trong TT99 |
|---|---|---|
| 112 | Tiền gửi ngân hàng | Tiền gửi không kỳ hạn |
| 155 | Thành phẩm | Sản phẩm |
| 158 | Hàng hoá kho bảo thuế | Nguyên liệu, vật tư tại kho bảo thuế |
| 242 | Chi phí trả trước | Chi phí chờ phân bổ |
| 244 | Cầm cố, thế chấp, ký quỹ, ký cược | Ký quỹ, ký cược |
| 419 | Cổ phiếu quỹ | Cổ phiếu mua lại của chính mình |
| 2413 | Sửa chữa lớn TSCĐ | Sửa chữa, bảo dưỡng định kỳ TSCĐ |
| 3387 | Doanh thu chưa thực hiện | Doanh thu chờ phân bổ |
| 4211 | Lợi nhuận sau thuế chưa phân phối năm trước | Lợi nhuận sau thuế chưa phân phối lũy kế đến cuối năm trước |

Đổi tên không chỉ là đổi nhãn. Ví dụ TK 112 nay chỉ phản ánh **tiền gửi không kỳ hạn**. Tiền gửi có kỳ hạn nằm ở TK 1281. TK 242 nay gồm cả chi phí đã phát sinh mà chưa trả tiền trước, miễn là liên quan nhiều kỳ (Phụ lục II, TK 242 điểm 1.a).

### Chuyển số dư khi áp dụng TT99

Điều 29 TT99 chỉ ra cách chuyển một số số dư. Đây là đầu vào trực tiếp cho kế hoạch migration dữ liệu:

- Số dư TK 441 và TK 466 → TK 4118 - Vốn khác.
- Số dư Có chi tiết TK 338 về cổ tức, lợi nhuận phải trả → TK 332.
- Số chi tiết TK 2413 về chi phí nâng cấp, cải tạo TSCĐ chưa hoàn thành → TK 2414.
- Bên góp vốn (không phải bên kế toán) trong hợp đồng hợp tác kinh doanh chưa kết thúc: số dư chi tiết TK 138 về giá trị vốn góp → TK 2281.
- Số dư chi tiết các TK 111, 112, 113, 121, 153, 154, 156, 211, 212, 213 được chuyển chi tiết cho phù hợp yêu cầu quản lý (nếu có).

Điều 29 không nêu TK 161 và TK 461. Trên Cổng hỏi đáp chính sách của Bộ Tài chính, một doanh nghiệp công ích hỏi đúng điểm này (câu hỏi ngày 12/02/2026). Cục Quản lý kế toán trả lời rằng chưa đủ cơ sở hướng dẫn cụ thể. Cục chỉ ra ba hướng tuỳ bản chất khoản tiền nhận từ Nhà nước:

- Khoản thu hộ, chi hộ: hạch toán qua TK 138 và TK 338.
- Khoản hỗ trợ giảm chi phí sản xuất, kinh doanh: ghi giảm chi phí liên quan.
- Khoản Nhà nước đặt hàng: ghi phải thu hoặc nhận ứng trước của khách hàng, như giao dịch bán hàng hoá, dịch vụ.

Mapping số dư TK 161, 461 vì vậy phải làm theo từng khoản, không chuyển nguyên khối sang một tài khoản.

## Tài khoản nào gắn với phân hệ nào

Bảng sau là cách chia phổ biến khi triển khai ERP. Phạm vi từng tài khoản lấy theo phần "Nguyên tắc kế toán" của Phụ lục II. Mỗi doanh nghiệp có thể chia phân hệ khác.

| Phân hệ | Tài khoản hay chạm | Ghi chú nghiệp vụ |
|---|---|---|
| Tiền, ngân hàng | 111, 112, 113, 1281 | TK 112 hạch toán chi tiết theo từng tài khoản ở từng ngân hàng; thấu chi không được ghi âm TK 112 mà phản ánh như khoản vay |
| Mua hàng, phải trả | 331, 1331, 1332, 151, 141 | Nợ phải trả theo dõi chi tiết theo đối tượng, kỳ hạn, nguyên tệ |
| Bán hàng, phải thu | 131, 511, 521, 3331, 3387 | Phải thu chi tiết theo đối tượng, nội dung, kỳ hạn thu hồi |
| Kho | 152, 153, 155, 156, 157, 158, 632, 2294 | Kế toán chi tiết hàng hoá theo từng kho, từng loại, từng mặt hàng, cả số lượng và giá trị |
| Sản xuất, giá thành | 154, 621, 622, 627 | Xem [[kt-27-chi-phi-san-xuat]] |
| Tài sản cố định | 211, 212, 213, 214, 217, 241, 242 | Xem [[kt-29-vong-doi-tscd]] |
| Lương | 334, 3382, 3383, 3384, 3386, 6411, 6421 | Xem [[kt-31-tien-luong]] |
| Thuế | 133, 333, 347, 243, 821 | Xem [[kt-37-thue-tndn]] |
| Tổng hợp, khoá sổ | 911, 421, 413, 229, 335 | Bút toán kết chuyển, đánh giá lại, dự phòng, trích trước |

> 💡 Khi khảo sát một khách hàng đang chạy TT200, xin bản hoạch đồ tài khoản đang dùng. Đánh dấu ba nhóm: tài khoản bị bỏ, tài khoản đổi tên hoặc đổi phạm vi, và tài khoản cấp 2 do khách tự mở. Nhóm cuối cần đưa vào quy chế hạch toán theo TT99 Điều 11.

## Nguồn

- Thông tư 99/2025/TT-BTC hướng dẫn chế độ kế toán doanh nghiệp: Điều 11, Điều 29, Điều 31. Toàn văn (bản PDF chuyển từ Google Docs): https://docs.google.com/document/d/1pVNpXGJEpTA1nRM2pM4IzomKqqulmWNz/export?format=pdf; toàn văn kèm phụ lục tại LuatVietnam: https://luatvietnam.vn/doanh-nghiep/thong-tu-99-2025-tt-btc-huong-dan-che-do-ke-toan-doanh-nghiep-tu-01-01-2026-417085-d1.html
- Thông tư 99/2025/TT-BTC, Phụ lục II: phần A (danh mục tài khoản); phần B (TK 111, 112, 131, 156, 242, 332, 511, 521, 632, 911 và nguyên tắc kế toán nợ phải trả). Bản Word: https://cms.luatvietnam.vn/uploaded/Others/2025/11/16/Phu_luc_II._He_thong_tai_khoan_ke_toan_doanh_nghiep_1611132408.docx
- Văn bản hợp nhất 04/VBHN-BTC ngày 20/01/2020 của Thông tư 200/2014/TT-BTC (tiêu đề và tài khoản cấp 2 các Điều 12–96): https://cdn.thuvienphapluat.vn/uploads/Hoidapphapluat/2025/TTTT/251013/04_VBHN-BTC_436250.doc
- Luật Kế toán số 88/2015/QH13 (văn bản hợp nhất 41/VBHN-VPQH, Công báo số 172 ngày 31/03/2026): Điều 22, 23. https://cdn.thuvienphapluat.vn//uploads/Hoidapphapluat/2026/LNMT/Thang_4/260404/172_41_VBHN_VPQH.pdf
- Grant Thornton Việt Nam, "Hướng dẫn chế độ kế toán doanh nghiệp Việt Nam - Những thay đổi chính, Thông tư 99/2025/TT-BTC" (mục Tài khoản kế toán): https://www.grantthornton.com.vn/contentassets/2453c36bf5094e8b82a9da0fb262b505/decree-99---vie-version.pdf
- Forvis Mazars Việt Nam, Góc nhìn chuyên môn Thông tư 99 (mục 1 Các văn bản được thay thế): https://www.forvismazars.com/vn/vi/content/download/1305056/file/%5BVIE%5D%20Forvis%20Mazars%20Vi%E1%BB%87t%20Nam_G%C3%B3c%20nh%C3%ACn%20chuy%C3%AAn%20m%C3%B4n_Th%C3%B4ng%20t%C6%B0%2099.pdf
- Đại học Duy Tân, Khoa Kế toán: Nguyễn Khánh Thu Hằng, "So sánh Thông tư 99/2025/TT-BTC và Thông tư 200/2014/TT-BTC" (mục III): https://files01.duytan.edu.vn/svruploads/kketoan-duytan/638989628678124480-20251031bai-shht-so-sanh-thong-tu-99-t-hang.docx; Đinh Thị Thu Hiền, "Những thay đổi nổi bật trong Thông tư 99" (mục 1): https://files01.duytan.edu.vn/svruploads/kketoan-duytan/639014680339281008-thu-hien-web-t12.25.docx
- Bộ Tài chính, Cổng hỏi đáp chính sách, câu hỏi về xử lý số dư TK 161, 461 khi áp dụng TT99 và trả lời của Cục Quản lý kế toán: https://portal.mof.gov.vn/hoidapcstc/home/cthoidap/159654
