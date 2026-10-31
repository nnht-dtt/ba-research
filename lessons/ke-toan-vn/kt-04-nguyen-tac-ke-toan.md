# Các nguyên tắc kế toán chi phối thiết kế hệ thống

Chuẩn mực chung VAS 01 nêu bảy nguyên tắc kế toán cơ bản. Mỗi nguyên tắc kéo theo một quyết định thiết kế: bút toán sinh lúc nào, giá trị ghi bằng số nào, cấu hình nào được đổi giữa năm, khi nào khoá kỳ. Bài này đi qua từng nguyên tắc theo đúng câu chữ của VAS 01 và chỉ ra hệ quả lên hệ thống.

## Bảy nguyên tắc trong VAS 01 và Luật Kế toán

VAS 01 ban hành theo Quyết định 165/2002/QĐ-BTC, áp dụng cho mọi doanh nghiệp. Nó không thay thế các chuẩn mực cụ thể, nhưng khi chuẩn mực cụ thể chưa quy định thì thực hiện theo Chuẩn mực chung (đoạn 02). Luật Kế toán cũng có một điều riêng về nguyên tắc kế toán (Điều 6), trùng ý với VAS 01 ở nhiều điểm.

| Nguyên tắc | VAS 01 | Luật Kế toán | Câu hỏi thiết kế |
|---|---|---|---|
| Cơ sở dồn tích | Đoạn 03 | Khoản 3 Điều 6 (đúng kỳ) | Bút toán sinh ở thời điểm nào? |
| Hoạt động liên tục | Đoạn 04 | | Hệ thống có cần bộ mẫu BCTC khác không? |
| Giá gốc | Đoạn 05 | Khoản 1 Điều 6; khoản 5 Điều 3 | Giá trị ghi sổ gồm những chi phí nào? |
| Phù hợp | Đoạn 06, 45–47 | | Chi phí nào đi cùng doanh thu nào, kỳ nào? |
| Nhất quán | Đoạn 07 | Khoản 2 Điều 6 | Cấu hình nào bị khoá trong năm? |
| Thận trọng | Đoạn 08 | Khoản 5 Điều 6 | Dự phòng, ghi nhận doanh thu và chi phí khi nào? |
| Trọng yếu | Đoạn 09 | | Ngưỡng nào đủ lớn để xử lý riêng? |

Luật Kế toán còn hai nguyên tắc VAS 01 không liệt kê thành mục: **giá trị hợp lý** cho một số tài sản, nợ phải trả cuối kỳ (khoản 1 Điều 6, Điều 28), và **bản chất hơn hình thức** (khoản 6 Điều 6). TT99 nhắc lại nguyên tắc bản chất hơn hình thức ở khoản 2 Điều 20.

## Cơ sở dồn tích: ghi theo thời điểm phát sinh, không theo dòng tiền

> Mọi nghiệp vụ kinh tế, tài chính của doanh nghiệp liên quan đến tài sản, nợ phải trả, nguồn vốn chủ sở hữu, doanh thu, chi phí phải được ghi sổ kế toán vào thời điểm phát sinh, không căn cứ vào thời điểm thực tế thu hoặc thực tế chi tiền hoặc tương đương tiền. (VAS 01, đoạn 03)

Luật Kế toán nói cùng ý: phản ánh đúng kỳ kế toán mà nghiệp vụ phát sinh (khoản 3 Điều 6).

Hệ quả lên hệ thống:

- **Bút toán gắn với sự kiện nghiệp vụ, không gắn với thanh toán.** Nhận hàng sinh công nợ phải trả dù chưa trả tiền; giao hàng có thể sinh doanh thu dù khách chưa trả. Thời điểm cụ thể do chuẩn mực doanh thu quyết định, xem [[kt-17-quy-trinh-ban-hang]].
- **Ngày hạch toán là một trường dữ liệu riêng, quan trọng.** Nghiệp vụ tháng này mà chứng từ về tháng sau vẫn phải vào đúng kỳ phát sinh. Hệ thống phải cho ghi ngày hạch toán thuộc kỳ còn mở, và chặn khi kỳ đã khoá.
- **Cuối kỳ phải có bút toán dồn tích**: chi phí đã phát sinh nhưng chưa có hoá đơn (trích trước), tiền đã trả cho nhiều kỳ (phân bổ dần). Xem [[kt-30-ccdc-tra-truoc-trich-truoc]].

> 📌 Tài liệu Odoo 19 cho biết phần mềm hỗ trợ cả kế toán dồn tích và kế toán theo cơ sở tiền (báo cáo doanh thu, chi phí khi thu, chi tiền). Với doanh nghiệp áp dụng VAS, sổ kế toán tài chính phải theo cơ sở dồn tích; tuỳ chọn cơ sở tiền trong phần mềm, nếu dùng, chỉ là một cách lập báo cáo, không thay được nguyên tắc ghi sổ.

## Hoạt động liên tục

> Báo cáo tài chính phải được lập trên cơ sở giả định là doanh nghiệp đang hoạt động liên tục và sẽ tiếp tục hoạt động kinh doanh bình thường trong tương lai gần [...] Trường hợp thực tế khác với giả định hoạt động liên tục thì báo cáo tài chính phải lập trên một cơ sở khác và phải giải thích cơ sở đã sử dụng. (VAS 01, đoạn 04)

TT99 cụ thể hoá: doanh nghiệp bị coi là không hoạt động liên tục nếu dự kiến giải thể, phá sản, ngừng sản xuất kinh doanh hoặc thu hẹp đáng kể quy mô trong 12 tháng kể từ cuối kỳ kế toán (khoản 1 Điều 24). Khi đó doanh nghiệp lập bộ BCTC mẫu DNKLT (B01-DNKLT, B02-DNKLT, B03-DNKLT, B09-DNKLT), tái phân loại tài sản và nợ dài hạn thành ngắn hạn, đánh giá lại toàn bộ tài sản và nợ phải trả; dự phòng, tổn thất và khấu hao ghi giảm trực tiếp giá trị tài sản, không dùng TK 229 và TK 214 (khoản 3, 4, 7 Điều 24).

Với phần lớn dự án ERP, giả định hoạt động liên tục là mặc định và không cần cấu hình gì. Nó chỉ trở thành yêu cầu khi khách hàng là doanh nghiệp sắp giải thể, hoặc khi phạm vi dự án có báo cáo cho giai đoạn đó.

## Giá gốc

> Tài sản phải được ghi nhận theo giá gốc. Giá gốc của tài sản được tính theo số tiền hoặc khoản tương đương tiền đã trả, phải trả hoặc tính theo giá trị hợp lý của tài sản đó vào thời điểm tài sản được ghi nhận. Giá gốc của tài sản không được thay đổi trừ khi có quy định khác trong chuẩn mực kế toán cụ thể. (VAS 01, đoạn 05)

Luật Kế toán nói rõ hơn giá gốc gồm gì: chi phí mua, bốc xếp, vận chuyển, lắp ráp, chế biến và các chi phí liên quan trực tiếp khác đến khi đưa tài sản vào trạng thái sẵn sàng sử dụng (khoản 5 Điều 3).

Hệ quả lên hệ thống:

- **Chi phí mua phải cộng được vào giá trị hàng nhập kho hoặc tài sản.** Phí vận chuyển, bốc xếp của một lô hàng phải phân bổ vào giá trị lô hàng đó chứ không ghi thẳng vào chi phí. Đây là chức năng thường gọi là landed cost; xem [[kt-13-mua-hang-nhap-khau]].
- **Giá gốc không tự đổi.** Giá thị trường lên xuống không làm thay đổi giá trị hàng tồn kho hay TSCĐ đã ghi sổ. Muốn giảm giá trị thì phải qua một nghiệp vụ có căn cứ (dự phòng, đánh giá lại theo quy định), không sửa trực tiếp giá trên thẻ kho.

**Ngoại lệ giá trị hợp lý.** Sau ghi nhận ban đầu, một số tài sản, nợ phải trả có giá trị biến động thường xuyên và xác định lại được một cách đáng tin cậy thì ghi theo giá trị hợp lý tại thời điểm cuối kỳ lập BCTC (khoản 1 Điều 6 Luật). Điều 28 Luật liệt kê: công cụ tài chính theo yêu cầu của chuẩn mực; **các khoản mục tiền tệ có gốc ngoại tệ đánh giá theo tỷ giá giao dịch thực tế**; tài sản, nợ phải trả khác biến động thường xuyên theo yêu cầu chuẩn mực. Không xác định được giá trị đáng tin cậy thì giữ giá gốc. Trong ERP, đây là bút toán đánh giá lại số dư ngoại tệ cuối kỳ; xem [[ktqt-05-giao-dich-ngoai-te]].

## Phù hợp

> Việc ghi nhận doanh thu và chi phí phải phù hợp với nhau. Khi ghi nhận một khoản doanh thu thì phải ghi nhận một khoản chi phí tương ứng có liên quan đến việc tạo ra doanh thu đó. (VAS 01, đoạn 06)

VAS 01 còn nói: khi lợi ích kinh tế dự kiến thu được trong nhiều kỳ, chi phí liên quan được ghi nhận trên cơ sở phân bổ theo hệ thống hoặc theo tỷ lệ (đoạn 46); chi phí không đem lại lợi ích kinh tế cho các kỳ sau thì ghi ngay vào kỳ phát sinh (đoạn 47).

Hệ quả lên hệ thống:

- **Giá vốn phải đi cùng doanh thu.** Bút toán Nợ TK 632 / Có TK 156 phải vào cùng kỳ với bút toán doanh thu của lô hàng đó. Nếu hệ thống ghi giá vốn khi xuất kho nhưng doanh thu khi xuất hoá đơn, và hai việc rơi vào hai kỳ khác nhau, phải có cơ chế xử lý cuối kỳ (ví dụ hàng gửi đi bán, TK 157). Xem [[kt-17-quy-trinh-ban-hang]] và [[kt-25-kho-thue-ngoai-kho-san]].
- **Chi phí cho nhiều kỳ phải phân bổ.** Ví dụ tiền thuê trả trước cho cả năm được tập hợp vào TK 242 (Chi phí chờ phân bổ) rồi phân bổ dần vào từng kỳ hưởng lợi. Hệ thống cần lịch phân bổ tự động; khoản nào được đưa vào TK 242 theo TT99 được bàn ở [[kt-30-ccdc-tra-truoc-trich-truoc]].

## Nhất quán

> Các chính sách và phương pháp kế toán doanh nghiệp đã chọn phải được áp dụng thống nhất ít nhất trong một kỳ kế toán năm. Trường hợp có thay đổi chính sách và phương pháp kế toán đã chọn thì phải giải trình lý do và ảnh hưởng của sự thay đổi đó trong phần thuyết minh báo cáo tài chính. (VAS 01, đoạn 07)

Luật Kế toán quy định tương tự ở khoản 2 Điều 6. Yêu cầu "có thể so sánh" của VAS 01 (đoạn 15) dựa trên nguyên tắc này: số liệu chỉ so sánh được khi tính toán và trình bày nhất quán.

Hệ quả lên hệ thống:

- **Một số cấu hình là "chính sách" và không được đổi giữa năm**: phương pháp tính giá xuất kho, phương pháp khấu hao, cách phân bổ chi phí sản xuất chung, cách hạch toán chênh lệch tỷ giá. Thay đổi giữa năm đồng nghĩa với áp dụng hai chính sách trong một năm.
- **Đổi cấu hình phải đi kèm quy trình**: chỉ đổi vào đầu năm tài chính, có quyết định của doanh nghiệp, và có kế hoạch xử lý số liệu so sánh theo VAS 29. Xem [[kt-05-chinh-sach-quy-che]].

> ❌ Không để quyền sửa phương pháp tính giá tồn kho hay phương pháp khấu hao mở cho người dùng nghiệp vụ. Đây là cấu hình cấp chính sách, chỉ quản trị hệ thống làm theo quyết định bằng văn bản.

## Thận trọng

> Thận trọng là việc xem xét, cân nhắc, phán đoán cần thiết để lập các ước tính kế toán trong các điều kiện không chắc chắn. (VAS 01, đoạn 08)

Nguyên tắc thận trọng đòi hỏi:

- phải lập các khoản dự phòng nhưng không lập quá lớn;
- không đánh giá cao hơn giá trị của các tài sản và các khoản thu nhập;
- không đánh giá thấp hơn giá trị của các khoản nợ phải trả và chi phí;
- doanh thu và thu nhập chỉ được ghi nhận khi có bằng chứng chắc chắn về khả năng thu được lợi ích kinh tế, còn chi phí phải được ghi nhận khi có bằng chứng về khả năng phát sinh chi phí.

Luật Kế toán yêu cầu phương pháp đánh giá tài sản và phân bổ thu, chi phải thận trọng, không làm sai lệch kết quả (khoản 5 Điều 6). TT99 viết: tài sản không được ghi nhận cao hơn giá trị có thể thu hồi; nợ phải trả không được ghi nhận thấp hơn nghĩa vụ phải thanh toán (khoản 3 Điều 20).

Hệ quả lên hệ thống: cần dữ liệu để lập dự phòng (tuổi nợ phải thu, giá trị thuần có thể thực hiện của hàng tồn kho, nghĩa vụ bảo hành) và bút toán dự phòng cuối kỳ. Xem [[kt-21-cong-no-phai-thu]] và [[kt-24-kiem-ke-du-phong]]. Điểm thứ tư cũng là lý do điều kiện ghi nhận doanh thu chặt hơn điều kiện ghi nhận chi phí.

## Trọng yếu

> Thông tin được coi là trọng yếu trong trường hợp nếu thiếu thông tin hoặc thiếu chính xác của thông tin đó có thể làm sai lệch đáng kể báo cáo tài chính, làm ảnh hưởng đến quyết định kinh tế của người sử dụng báo cáo tài chính. Tính trọng yếu phụ thuộc vào độ lớn và tính chất của thông tin hoặc các sai sót được đánh giá trong hoàn cảnh cụ thể. Tính trọng yếu của thông tin phải được xem xét trên cả phương diện định lượng và định tính. (VAS 01, đoạn 09)

TT99 nhắc lại: thông tin tài chính phải trình bày đầy đủ trên mọi khía cạnh trọng yếu; mức độ trọng yếu phụ thuộc quy mô hoặc tính chất hoặc cả hai (khoản 3 Điều 19).

Hệ quả lên hệ thống: chuẩn mực không cho một con số ngưỡng. Ngưỡng trọng yếu là xét đoán của doanh nghiệp trong hoàn cảnh cụ thể, ví dụ khoản chi dưới mức nào thì ghi thẳng chi phí thay vì phân bổ, chênh lệch đối chiếu dưới mức nào thì chấp nhận. Khi khách hàng nêu một ngưỡng, BA ghi lại như một tham số cấu hình có người chịu trách nhiệm, không tự đặt.

## Các yêu cầu cơ bản và điều kiện ghi nhận

Ngoài bảy nguyên tắc, VAS 01 đặt sáu yêu cầu đối với thông tin kế toán, phải thực hiện đồng thời (đoạn 10–16): trung thực, khách quan, đầy đủ, kịp thời, dễ hiểu, có thể so sánh. VAS 01 cũng định nghĩa năm yếu tố của BCTC: tài sản, nợ phải trả, vốn chủ sở hữu, doanh thu và thu nhập khác, chi phí (đoạn 17–31).

Một khoản mục chỉ được ghi nhận khi thoả **cả hai** tiêu chuẩn (đoạn 39):

1. chắc chắn thu được lợi ích kinh tế hoặc làm giảm lợi ích kinh tế trong tương lai;
2. khoản mục đó có giá trị và xác định được giá trị một cách đáng tin cậy.

Chi phí bỏ ra không chắc chắn mang lại lợi ích kinh tế trong tương lai thì ghi ngay vào báo cáo kết quả kinh doanh, không ghi thành tài sản (đoạn 41). Đây là căn cứ cho các câu hỏi phân loại hay gặp khi thiết kế luồng mua: một khoản chi là tài sản, chi phí trả trước hay chi phí trong kỳ. Xem [[kt-14-mua-dich-vu-tai-san]].

## Khoá kỳ: nơi các nguyên tắc gặp nhau

Dồn tích và đúng kỳ đòi hỏi nghiệp vụ vào đúng kỳ; nhất quán và so sánh đòi hỏi số liệu kỳ đã báo cáo không bị thay đổi âm thầm. Hai yêu cầu này gặp nhau ở cơ chế khoá kỳ:

- Đơn vị phải khoá sổ cuối kỳ trước khi lập BCTC (khoản 6 Điều 26 Luật Kế toán).
- Sai sót phát hiện **trước** khi nộp BCTC năm thì sửa trên sổ của năm đó; phát hiện **sau** khi đã nộp thì sửa trên sổ của năm phát hiện và thuyết minh (khoản 2, 3 Điều 27).
- Ghi sổ điện tử chỉ sửa bằng chứng từ điều chỉnh (khoản 4 Điều 27); phần mềm phải lưu dấu vết khi sửa và cảnh báo hoặc ngăn chặn can thiệp vào số đã ghi sổ (điểm b, c khoản 1 Điều 28 TT99).

Phần mềm ERP hiện thực hoá điều này bằng ngày khoá. Ví dụ, tài liệu Odoo 19 mô tả ngày khoá "Lock Everything" chặn sửa mọi bút toán đã ghi sổ có ngày hạch toán bằng hoặc trước ngày khoá; bút toán mới có ngày rơi vào kỳ đã khoá sẽ được tự đặt sang ngày sau ngày khoá; người có quyền quản trị kế toán có thể tạo ngoại lệ; còn ngày "Hard Lock" thì không gỡ được. Thiết kế quyền gỡ khoá và ngoại lệ là một quyết định kiểm soát nội bộ, cần chốt với kế toán trưởng. Quy trình khoá sổ đầy đủ ở [[kt-36-quy-trinh-khoa-so]].

## Nguồn

- Chuẩn mực kế toán số 01 – Chuẩn mực chung, ban hành theo Quyết định 165/2002/QĐ-BTC ngày 31/12/2002: đoạn 02–16, 17–19, 31, 39–47. https://caselaw.vn/van-ban-phap-luat/234275-quyet-dinh-so-165-2002-qd-btc-ngay-31-12-2002-ban-hanh-va-cong-bo-sau-06-chuan-muc-ke-toan-viet-nam-cua-bo-truong-bo-tai-chinh
- Luật Kế toán 88/2015/QH13, văn bản hợp nhất đăng Công báo số 172 ngày 31/3/2026: Điều 3 khoản 5, 6; Điều 6; Điều 26 khoản 6; Điều 27; Điều 28. https://cdn.thuvienphapluat.vn//uploads/Hoidapphapluat/2026/LNMT/Thang_4/260404/172_41_VBHN_VPQH.pdf
- Thông tư 99/2025/TT-BTC: Điều 19 khoản 3; Điều 20 khoản 2, 3; Điều 24; Điều 28 khoản 1. https://docs.google.com/document/d/1pVNpXGJEpTA1nRM2pM4IzomKqqulmWNz/export?format=pdf
- Odoo 19 Documentation, Accounting and Invoicing (mục Accrual and cash basis). https://www.odoo.com/documentation/19.0/applications/finance/accounting.html
- Odoo 19 Documentation, Year-end closing (mục Lock dates). https://www.odoo.com/documentation/19.0/applications/finance/accounting/reporting/year_end.html
