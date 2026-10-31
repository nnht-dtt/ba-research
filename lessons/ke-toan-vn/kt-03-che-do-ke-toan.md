# Chế độ kế toán doanh nghiệp: TT99, TT133, TT58

Bài này giúp xác định khách hàng thuộc chế độ kế toán nào, TT99 thay đổi gì so với TT200 mà hệ thống phải theo, và doanh nghiệp được tự thiết kế tài khoản, chứng từ, sổ, báo cáo đến đâu. Đây là các câu hỏi cần chốt trước khi dựng danh mục tài khoản.

## Ba chế độ kế toán và đối tượng áp dụng

| | TT99/2025/TT-BTC | TT133/2016/TT-BTC | TT58/2026/TT-BTC |
|---|---|---|---|
| Tên | Hướng dẫn chế độ kế toán doanh nghiệp | Hướng dẫn chế độ kế toán doanh nghiệp nhỏ và vừa | Hướng dẫn chế độ kế toán cho doanh nghiệp siêu nhỏ |
| Hiệu lực | 01/01/2026, cho năm tài chính bắt đầu từ hoặc sau ngày này | Năm tài chính bắt đầu từ hoặc sau 01/01/2017 | 01/7/2026, cho năm tài chính bắt đầu từ hoặc sau ngày này |
| Thay thế | TT200/2014 (trừ phần cổ phần hoá DNNN), TT75/2015, TT53/2016, TT195/2012 | Phần áp dụng cho DNNVV của QĐ 48/2006 và TT138/2011 | TT132/2018 |
| Đối tượng | Doanh nghiệp thuộc mọi lĩnh vực, mọi thành phần kinh tế; tổ chức tín dụng theo hướng dẫn của Ngân hàng Nhà nước | DNNVV (kể cả siêu nhỏ) theo pháp luật hỗ trợ DNNVV, trừ DNNN, doanh nghiệp Nhà nước sở hữu trên 50% vốn điều lệ, công ty đại chúng, hợp tác xã, liên hiệp hợp tác xã | Doanh nghiệp siêu nhỏ theo tiêu chí của pháp luật hỗ trợ DNNVV; hộ kinh doanh, cá nhân kinh doanh được tự nguyện áp dụng |
| Ghi sổ | Hệ thống tài khoản Phụ lục II, ghi sổ kép | Hệ thống tài khoản Phụ lục 1 của TT133, ghi sổ kép | Danh mục sổ theo phương pháp nộp thuế GTGT và TNDN (4 trường hợp, Điều 5–8) |

### Quyền lựa chọn giữa các chế độ

- **DNNVV được chọn TT99** để phù hợp đặc điểm hoạt động và yêu cầu quản lý, nhưng phải áp dụng nhất quán tối thiểu trong một kỳ kế toán năm (Điều 31 TT99). Trước đây TT133 cho DNNVV chọn TT200 với điều kiện thông báo cho cơ quan thuế (khoản 1 Điều 3 TT133).
- **Doanh nghiệp siêu nhỏ được chọn chế độ kế toán DNNVV**, áp dụng nhất quán trong năm tài chính; chỉ được đổi chế độ vào đầu kỳ kế toán năm tiếp theo (khoản 3 Điều 4 TT58).
- **Khi đổi chế độ kế toán**, doanh nghiệp phải trình bày lại số liệu so sánh như khi thay đổi chính sách kế toán, giải trình lý do và ảnh hưởng trong thuyết minh BCTC (Điều 31 TT99).
- **Khi doanh nghiệp không còn thuộc đối tượng** giữa năm (ví dụ hết là DNNVV), được dùng tiếp chế độ cũ đến hết năm tài chính, từ năm sau áp dụng chế độ phù hợp (khoản 3 Điều 3 TT133; khoản 2 Điều 4 TT58).

> ⚠️ Cần xác nhận: TT58 chỉ nói doanh nghiệp siêu nhỏ được chọn chế độ kế toán DNNVV; việc doanh nghiệp siêu nhỏ chọn thẳng TT99 dựa trên Điều 31 TT99 (DNNVV được chọn TT99) cần đối chiếu văn bản hướng dẫn của Bộ Tài chính.

> ⚠️ Cần xác nhận: TT133/2016 vẫn hiện hành tại 31/10/2026. Theo Thời báo Tài chính Việt Nam, ngày 02/10/2026 Cục Quản lý, giám sát kế toán, kiểm toán tổ chức hội thảo lấy ý kiến dự thảo thông tư thay thế TT133; dự thảo rút hệ thống tài khoản từ 49 xuống 22 tài khoản, cho doanh nghiệp tự sửa tài khoản cấp 1, cấp 2 không cần Bộ Tài chính chấp thuận, dự kiến ban hành cuối năm 2026 và hiệu lực từ 01/01/2028. Đây là dự thảo; trước khi khởi động dự án cho DNNVV, kiểm tra lại văn bản đã ban hành chưa.

Với dự án ERP, câu hỏi đầu tiên vì vậy không phải "dùng TT nào" mà là: khách hàng thuộc nhóm nào, năm tài chính bắt đầu ngày nào, có định chuyển chế độ không, và chuyển vào đầu năm nào. Thời điểm chuyển quyết định thời điểm go-live danh mục tài khoản mới.

## TT99 đổi cách tiếp cận: doanh nghiệp được tự thiết kế, nhưng phải có quy chế

KPMG Việt Nam tóm tắt điểm chính của TT99 là doanh nghiệp được tự thiết kế mẫu chứng từ và mẫu sổ với điều kiện tuân thủ Luật Kế toán, và phải ban hành quy chế hạch toán cho phần sửa đổi, bổ sung. Văn bản quy định cụ thể như sau:

| Đối tượng | Được làm gì | Điều kiện | Điều TT99 |
|---|---|---|---|
| Chứng từ | Thiết kế thêm, sửa đổi, bổ sung biểu mẫu so với Phụ lục I | Đủ nội dung Điều 16 Luật Kế toán; phản ánh đầy đủ, kịp thời, trung thực, dễ kiểm tra, đối chiếu | Điều 9 khoản 2 |
| Tài khoản | Sửa đổi, bổ sung tên, số hiệu, kết cấu, nội dung phản ánh của tài khoản Phụ lục II | Phân loại được nghiệp vụ theo nội dung kinh tế, không trùng lặp đối tượng, tuân thủ nguyên tắc kế toán, **không làm thay đổi hoặc ảnh hưởng đến chỉ tiêu trình bày trên BCTC** | Điều 11 khoản 2 |
| Sổ | Thiết kế thêm, sửa đổi, bổ sung biểu mẫu so với Phụ lục III | Tuân thủ khoản 1–4 Điều 24 Luật Kế toán | Điều 12 khoản 2 |
| BCTC | **Bổ sung** chỉ tiêu so với Phụ lục IV | Thuyết minh nội dung bổ sung; muốn **sửa** chỉ tiêu thì báo cáo Bộ Tài chính để được hướng dẫn | Điều 18 |

Cả bốn trường hợp đều có cùng một nghĩa vụ: doanh nghiệp **ban hành Quy chế hạch toán kế toán (hoặc tài liệu tương đương)** về nội dung sửa đổi, bổ sung, nêu rõ sự cần thiết và trách nhiệm của doanh nghiệp trước pháp luật. Không sửa đổi thì áp dụng đúng biểu mẫu, tài khoản hướng dẫn trong các phụ lục.

So với TT133 (vẫn áp dụng cho DNNVV không chọn TT99), khác biệt lớn nhất ở tài khoản và BCTC: theo TT133, bổ sung hoặc sửa tài khoản cấp 1, cấp 2 và sửa biểu mẫu, chỉ tiêu BCTC phải được Bộ Tài chính chấp thuận bằng văn bản trước khi thực hiện; doanh nghiệp chỉ tự mở thêm tài khoản cấp 2, cấp 3 cho tài khoản chưa có cấp chi tiết (Điều 10 TT133). Chứng từ và sổ theo TT133 cũng đều là biểu mẫu hướng dẫn, không bắt buộc.

> ✅ Với khách hàng áp dụng TT99 mà muốn đổi số hiệu hay thêm tài khoản riêng, đưa yêu cầu "ban hành quy chế hạch toán kế toán" vào danh sách việc của khách hàng ngay từ giai đoạn thiết kế. Danh mục tài khoản trên hệ thống phải khớp với quy chế đó. Nội dung quy chế được bàn ở [[kt-05-chinh-sach-quy-che]].

> ❌ Không đề xuất đổi tài khoản theo cách làm thay đổi chỉ tiêu BCTC. Chỉ tiêu BCTC là ràng buộc cứng của khoản 2 Điều 11; mọi tài khoản tự thêm vẫn phải map được vào đúng một chỉ tiêu trên mẫu B01-DN, B02-DN. Xem [[kt-39-bao-cao-tinh-hinh-tai-chinh]].

## Những thay đổi của TT99 so với TT200 mà hệ thống phải theo

### Hệ thống tài khoản

Theo bản tóm tắt của Grant Thornton Việt Nam và KPMG Việt Nam, đối chiếu với Phụ lục II TT99:

- **Bỏ** một số tài khoản, ví dụ TK 1385, 161, 441, 461, 466, 611, 631 (đã đối chiếu: không còn trong Phụ lục II).
- **Thêm** một số tài khoản, ví dụ TK 1383 (Thuế TTĐB của hàng nhập khẩu), 215 (Tài sản sinh học), 2295 (Dự phòng tổn thất tài sản sinh học), 332 (Phải trả cổ tức, lợi nhuận), 2413, 2414, 82111, 82112.
- **Đổi tên** một số tài khoản, ví dụ TK 112 thành "Tiền gửi không kỳ hạn", TK 242 thành "Chi phí chờ phân bổ", TK 3387 thành "Doanh thu chờ phân bổ".
- **Không còn quy định tài khoản chi tiết** cho một số tài khoản như 111, 112, 113, 121, 153, 156, 211, 213; doanh nghiệp tự chi tiết theo yêu cầu quản lý.

Điều 29 TT99 hướng dẫn chuyển số dư khi bắt đầu áp dụng, chẳng hạn: số dư chi tiết TK 2413 phần nâng cấp, cải tạo TSCĐ chưa hoàn thành chuyển sang TK 2414; số dư Có chi tiết TK 338 về cổ tức, lợi nhuận phải trả chuyển sang TK 332; số dư TK 441 và TK 466 chuyển sang TK 4118. Với dự án chuyển đổi, đây chính là danh sách mapping số dư đầu kỳ cần làm với kế toán. Danh mục đầy đủ ở [[kt-08-he-thong-tai-khoan-tt99]].

### Hạch toán và báo cáo

Một số thay đổi ảnh hưởng trực tiếp tới cấu hình:

- **Tính giá hàng tồn kho**: bổ sung phương pháp chi phí chuẩn; bỏ TK 611, doanh nghiệp căn cứ đặc điểm hàng tồn kho và điều kiện quản lý để xác định phương pháp xuất kho, áp dụng nhất quán giữa các kỳ (Grant Thornton). Xem [[kt-23-dinh-gia-ton-kho]].
- **Chi phí sửa chữa lớn TSCĐ**: doanh nghiệp đang trích trước mà chưa sửa chữa thì không tiếp tục trích trước (khoản 4 Điều 30 TT99). Lịch trích trước tự động trên hệ thống cần rà lại; xem [[kt-30-ccdc-tra-truoc-trich-truoc]].
- **Tên báo cáo**: "Bảng cân đối kế toán" đổi thành **"Báo cáo tình hình tài chính"**. Bộ BCTC năm gồm Mẫu B01-DN, B02-DN, B03-DN, B09-DN cho doanh nghiệp đáp ứng giả định hoạt động liên tục, và bộ mẫu DNKLT cho doanh nghiệp không đáp ứng (khoản 2 Điều 17).
- **Mã số chỉ tiêu**: chỉ tiêu không có số liệu được miễn trình bày, doanh nghiệp được đánh lại số thứ tự nhưng **không được đánh lại "Mã số"** chỉ tiêu (khoản 4 Điều 17). Mapping trong hệ thống nên neo vào mã số, không neo vào số thứ tự.
- **Đơn vị trực thuộc**: trụ sở chính và đơn vị trực thuộc không bắt buộc lập BCTC riêng; BCTC của doanh nghiệp phải tổng hợp cả hai sau khi loại trừ giao dịch nội bộ (khoản 2 Điều 16). Doanh nghiệp được phân cấp cho đơn vị trực thuộc ghi nhận hay không ghi nhận doanh thu, giá vốn khi luân chuyển nội bộ, không phụ thuộc hình thức chứng từ (Điều 7).
- **Thời hạn nộp BCTC năm**: chậm nhất 90 ngày kể từ ngày kết thúc kỳ kế toán năm (Điều 25).

### Yêu cầu đối với phần mềm kế toán

Điều 28 TT99 đặt yêu cầu tối thiểu cho phần mềm kế toán doanh nghiệp chọn dùng. Đây là danh sách BA có thể dùng khi rà một giải pháp ERP:

1. Quy trình, nghiệp vụ thiết lập trên phần mềm tuân thủ pháp luật kế toán, thuế; không làm thay đổi bản chất, nguyên tắc, phương pháp kế toán và số liệu trên sổ, BCTC.
2. Xử lý chính xác, không trùng lắp; **khi sửa chữa phải lưu lại dấu vết** nội dung đã ghi sổ theo trình tự thời gian.
3. Bảo mật, an toàn; **có khả năng cảnh báo hoặc ngăn chặn việc can thiệp có chủ ý** làm thay đổi số liệu đã ghi sổ.
4. Cung cấp đầy đủ, kịp thời dữ liệu đầu ra theo yêu cầu của cơ quan có thẩm quyền và các bên sử dụng.
5. Có khả năng kết nối với phần mềm liên quan (hoá đơn điện tử, chữ ký số...).
6. Có khả năng nâng cấp theo thay đổi của pháp luật kế toán, thuế.

Khoản 2 Điều 28 quy định người quản lý điều hành, kế toán trưởng/phụ trách kế toán chịu trách nhiệm về tính chính xác, trung thực của số liệu từ phần mềm. Nghĩa là trách nhiệm không chuyển sang nhà cung cấp phần mềm.

> 💡 Yêu cầu 2 và 3 khớp với khoản 4 Điều 27 Luật Kế toán (sửa sổ điện tử chỉ bằng ghi điều chỉnh). Trong ERP, chúng thường thể hiện qua: không cho sửa bút toán đã ghi sổ, nhật ký thay đổi (audit trail), khoá kỳ. Xem [[kt-11-but-toan-tong-hop-dieu-chinh]] và [[kt-36-quy-trinh-khoa-so]].

### Đơn vị tiền tệ trong kế toán

Điều 4 TT99 nêu tiêu chí chọn đơn vị tiền tệ kế toán khi doanh nghiệp chủ yếu thu, chi bằng ngoại tệ (đơn vị tiền tệ ảnh hưởng chính đến giá bán, đến chi phí; nếu chưa xác định được thì xét thêm tiền tệ huy động vốn và tiền tệ thu được thường xuyên). Điều 5 chỉ cho đổi đơn vị tiền tệ kế toán vào **thời điểm bắt đầu niên độ mới** và hướng dẫn tỷ giá chuyển đổi số dư. Điều 6 yêu cầu BCTC nộp và công khai tại Việt Nam trình bày bằng Đồng Việt Nam. Chi tiết ở [[ktqt-06-don-vi-tien-te-chuyen-doi]].

## TT58: chế độ cho doanh nghiệp siêu nhỏ khác hẳn về cấu trúc

TT58 không đi theo khung "hệ thống tài khoản + ghi sổ kép" như TT99 và TT133. Doanh nghiệp siêu nhỏ căn cứ phương pháp nộp thuế GTGT và TNDN của mình để ghi sổ theo một trong bốn trường hợp (khoản 1 Điều 4, Điều 5–8):

1. Nộp GTGT và TNDN theo tỷ lệ % trên doanh thu: chỉ dùng sổ doanh thu bán hàng hoá, dịch vụ (Mẫu S1-DNSN).
2. Nộp GTGT theo tỷ lệ % trên doanh thu, TNDN theo thu nhập tính thuế.
3. Nộp GTGT theo phương pháp khấu trừ, TNDN theo tỷ lệ % trên doanh thu.
4. Nộp GTGT theo phương pháp khấu trừ, TNDN theo thu nhập tính thuế: dùng các sổ như sổ chi tiết doanh thu, chi phí (S2b-DNSN), sổ chi tiết vật liệu, dụng cụ, sản phẩm, hàng hoá (S2c-DNSN)...

Doanh nghiệp siêu nhỏ nộp TNDN theo thu nhập tính thuế phải lập BCTC năm, nộp trong 90 ngày; nộp TNDN theo tỷ lệ % trên doanh thu thì không phải lập BCTC nộp cơ quan nhà nước, trừ khi luật khác yêu cầu (khoản 1 Điều 10 TT58). Khi chuyển từ TT132, số dư các tài khoản cũ (1111, 1112, 1311, 1521, 211, 4111...) được chuyển thành số dư đầu kỳ trên các sổ tương ứng (Điều 11 TT58).

TT58 cũng có quy định về bộ máy: doanh nghiệp siêu nhỏ được bố trí người thân của người đại diện theo pháp luật, người quản lý, thủ kho, thủ quỹ làm kế toán, và không bắt buộc bố trí kế toán trưởng (Điều 3 TT58).

> 📌 Một ERP đầy đủ thường thừa so với TT58. Nếu khách hàng là doanh nghiệp siêu nhỏ nhưng muốn dùng ERP với sổ kép, họ đang chọn chế độ DNNVV (khoản 3 Điều 4 TT58) và phải áp dụng nhất quán cả năm.

## Nguồn

- Thông tư 99/2025/TT-BTC (toàn văn phần quy định): Điều 1–7, 9, 11, 12, 16, 17, 18, 25, 28, 29, 30, 31. https://docs.google.com/document/d/1pVNpXGJEpTA1nRM2pM4IzomKqqulmWNz/export?format=pdf
- Thông tư 99/2025/TT-BTC, Phụ lục II – Hệ thống tài khoản kế toán doanh nghiệp (đối chiếu TK 112, 1383, 215, 2295, 242, 332, 3387; không có TK 161, 441, 611, 631, 1385). https://docs.google.com/document/d/14NeM16EEKMINCoSraTafe0w_iySTX1Ub/export?format=pdf
- Thông tư 133/2016/TT-BTC: Điều 2, 3, 4, 10, 93. https://ketoananpha.vn/uploads/files/Van-ban-luat/Ke-toan-Kiem-toan/Thong-tu-133_2016_TT-BTC.doc
- Thông tư 58/2026/TT-BTC, bản dịch tiếng Anh của Thư viện Pháp luật: Điều 1–8, 10, 11, 12. https://hrspring.vn/wp-content/uploads/2026/07/58_2026_TT-BTC_709489.docx
- Grant Thornton Việt Nam, "Hướng dẫn chế độ kế toán doanh nghiệp Việt Nam – Những thay đổi chính, Thông tư số 99/2025/TT-BTC". https://www.grantthornton.com.vn/contentassets/2453c36bf5094e8b82a9da0fb262b505/decree-99---vie-version.pdf
- Grant Thornton Việt Nam, slide webinar "Một số cập nhật quan trọng trong Thông tư số 99 về chế độ kế toán doanh nghiệp Việt Nam" (slide 19: thay đổi tài khoản; slide về TK 611). https://www.grantthornton.com.vn/contentassets/af9027513fcd4f7bb7c9e9aa395c3390/slides---webinar-mt-s-cp-nht-quan-trng-trong-thong-t-s-99-v-ch--k-toan-doanh-nghip-vit-nam.pdf
- KPMG Việt Nam, "Những điểm chính của Thông tư số 99/2025/TT-BTC", 11/2025. https://kpmg.com/vn/vi/insights/2025/11/key-changes-in-vietnamese-accounting-system-for-enterprises.html
- Luật Kế toán 88/2015/QH13 (văn bản hợp nhất 2026): Điều 16, 24, 27 khoản 4. https://cdn.thuvienphapluat.vn//uploads/Hoidapphapluat/2026/LNMT/Thang_4/260404/172_41_VBHN_VPQH.pdf
- Thời báo Tài chính Việt Nam, "Sửa đổi toàn diện chế độ kế toán doanh nghiệp nhỏ và vừa" (chỉ dùng cho thông tin dự thảo thay thế TT133). https://thoibaotaichinhvietnam.vn/sua-doi-toan-dien-che-do-ke-toan-doanh-nghiep-nho-va-vua-don-gian-hoa-toi-da-san-sang-cho-chuyen-doi-so-204780.html
