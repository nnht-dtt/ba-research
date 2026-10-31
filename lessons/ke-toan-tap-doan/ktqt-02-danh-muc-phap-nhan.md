# Danh mục pháp nhân đa quốc gia: chuẩn mực, tiền tệ, năm tài chính, kỳ khoá sổ

Bài này liệt kê những thông tin BA cần có cho từng pháp nhân trong tập đoàn trước khi dựng công ty trong ERP, và vì sao mỗi thông tin đó ảnh hưởng tới sổ sách và báo cáo hợp nhất.

## Vì sao cần một danh mục pháp nhân

Danh mục pháp nhân là bảng tổng hợp mọi đơn vị trong phạm vi dự án, mỗi dòng một đơn vị. Nó là đầu vào cho ba việc:

- Dựng cấu trúc company / branch trong hệ thống (xem [[ktqt-01-mo-hinh-da-cong-ty]]);
- Thiết kế giao dịch nội bộ: cặp đơn vị nào giao dịch với nhau, bằng đồng tiền nào (xem [[ktqt-03-giao-dich-noi-bo]]);
- Chuẩn bị hợp nhất: phạm vi hợp nhất, tỷ lệ lợi ích, kỳ báo cáo (xem [[ktqt-04-bctc-hop-nhat]]).

Các nhóm thông tin dưới đây đi theo thứ tự đó.

## Nhóm 1: Định danh

- Tên pháp lý, quốc gia đăng ký, địa chỉ trụ sở;
- Mã số thuế, số đăng ký doanh nghiệp;
- Đơn vị là pháp nhân riêng hay đơn vị trực thuộc của pháp nhân nào.

VAS 25 đoạn 28 yêu cầu BCTC hợp nhất trình bày danh sách các công ty con quan trọng gồm tên công ty, nước nơi công ty con thành lập hoặc đặt trụ sở thường trú, tỷ lệ lợi ích của công ty mẹ. Đây cũng là những cột tối thiểu của danh mục.

## Nhóm 2: Quan hệ sở hữu

### Quyền biểu quyết và tỷ lệ lợi ích là hai con số khác nhau

TT202 tách hai khái niệm:

- **Quyền biểu quyết** dùng để xác định có kiểm soát hay không. Quyền kiểm soát được thiết lập khi công ty mẹ nắm giữ trực tiếp hoặc gián tiếp qua các công ty con khác trên 50% quyền biểu quyết (TT202 Điều 9 khoản 1).
- **Tỷ lệ lợi ích** dùng để chia tài sản thuần và lợi nhuận giữa công ty mẹ và cổ đông không kiểm soát. Tỷ lệ này căn cứ vào tỷ lệ vốn góp trực tiếp và gián tiếp, trừ khi có thoả thuận khác (TT202 Điều 9 khoản 2).

Tỷ lệ lợi ích gián tiếp = tỷ lệ lợi ích tại công ty con đầu tư trực tiếp × tỷ lệ lợi ích của công ty con đó tại công ty con đầu tư gián tiếp (TT202 Điều 9 khoản 5 điểm b).

Ví dụ giả định: M nắm 80% quyền biểu quyết và 80% vốn của B. B nắm 60% của C. M góp trực tiếp thêm 10% vào C.

- Quyền biểu quyết của M tại C: 10% trực tiếp + 60% qua B (vì M kiểm soát B nên M chi phối toàn bộ phiếu của B tại C) = 70%. C là công ty con của M.
- Tỷ lệ lợi ích của M tại C: 10% + 80% × 60% = 58%. Cổ đông không kiểm soát có lợi ích 42% tại C.

Cách tính quyền biểu quyết gián tiếp này theo ví dụ trong TT202 Điều 9 khoản 5 điểm a (công ty X nắm 80% Y, Y nắm 60% Z, X góp trực tiếp 20% vào Z thì quyền biểu quyết của X tại Z là 80%).

> 📌 VAS 25 đoạn 28 yêu cầu trình bày cả tỷ lệ quyền biểu quyết và tỷ lệ lợi ích nếu hai tỷ lệ khác nhau. Danh mục nên có hai cột riêng, không gộp thành "% sở hữu".

### Cấp công ty con

TT202 Điều 2 phân biệt công ty con cấp 1 (bị công ty mẹ kiểm soát trực tiếp) và công ty con cấp 2 (bị kiểm soát gián tiếp qua công ty con khác). Danh mục cần ghi công ty sở hữu trực tiếp của mỗi đơn vị để dựng được cây sở hữu.

### Căn cứ phân loại và ngày thay đổi

Ghi rõ căn cứ phân loại (con, liên doanh, liên kết, đầu tư khác) và các thoả thuận làm khác kết luận theo tỷ lệ (xem các dấu hiệu ở [[ktqt-01-mo-hinh-da-cong-ty]]). TT202 Điều 8 khoản 2 yêu cầu xét cả quyền biểu quyết tiềm năng từ quyền chọn mua hoặc công cụ có thể chuyển đổi thành cổ phiếu phổ thông tại thời điểm hiện tại.

Ngày đạt và ngày mất quyền kiểm soát là dữ liệu bắt buộc. Kết quả kinh doanh của công ty con đưa vào BCTC hợp nhất từ ngày công ty mẹ nắm quyền kiểm soát đến ngày công ty mẹ thực sự chấm dứt quyền kiểm soát (TT202 Điều 10 khoản 6, đã sửa bởi TT43/2026). VAS 11 đoạn 25 gọi ngày đó là ngày mua: ngày bên mua đạt quyền kiểm soát thực tế với bên bị mua.

### So sánh với IFRS 10

Nếu tập đoàn báo cáo theo IFRS, định nghĩa kiểm soát khác cách diễn đạt của VAS. IFRS 10 nêu ba yếu tố của kiểm soát: quyền lực đối với bên nhận đầu tư; mức độ tiếp xúc hoặc quyền đối với lợi ích biến đổi từ việc tham gia vào bên nhận đầu tư; và khả năng dùng quyền lực đó để tác động tới lợi ích của nhà đầu tư. IFRS 10 cũng yêu cầu đánh giá lại khi có dấu hiệu một trong ba yếu tố thay đổi. Vì vậy danh mục cho tập đoàn báo cáo IFRS cần ghi kết luận kiểm soát theo cả hai khuôn khổ nếu chúng có thể khác nhau (xem [[ktqt-07-vas-ifrs]]).

## Nhóm 3: Chuẩn mực và chế độ kế toán áp dụng

Mỗi pháp nhân ghi sổ theo chuẩn mực và chế độ của quốc gia mình. Pháp nhân ở Việt Nam áp dụng VAS và chế độ kế toán doanh nghiệp (TT99/2025 từ năm tài chính bắt đầu từ hoặc sau 01/01/2026), xem [[kt-03-che-do-ke-toan]].

Khi hợp nhất, TT202 Điều 10 khoản 4 yêu cầu chính sách kế toán thống nhất cho giao dịch và sự kiện cùng loại trong toàn tập đoàn. Công ty con dùng chính sách khác thì BCTC dùng để hợp nhất phải được điều chỉnh theo chính sách chung. TT202 nêu hai ví dụ:

- Công ty con ở nước ngoài áp dụng mô hình đánh giá lại TSCĐ, công ty mẹ ở Việt Nam áp dụng mô hình giá gốc: phải chuyển BCTC của công ty con về mô hình giá gốc trước khi hợp nhất.
- Công ty mẹ vốn hoá lãi vay cho tài sản xây dựng dở dang, công ty con ở nước ngoài ghi lãi vay vào chi phí trong kỳ: phải chuyển BCTC của công ty con theo phương pháp vốn hoá.

Nếu không thể dùng chung chính sách, thuyết minh BCTC hợp nhất phải trình bày các khoản mục ghi nhận theo chính sách khác nhau.

Danh mục vì vậy cần các cột: chuẩn mực / chế độ ghi sổ tại địa phương; chuẩn mực của báo cáo tập đoàn; các chính sách đã biết là khác với chính sách tập đoàn. Cột cuối là đầu vào cho [[ktqt-08-dieu-chinh-vas-ifrs]] và [[ktqt-10-kien-truc-so-hai-chuan]].

## Nhóm 4: Đơn vị tiền tệ

### Tại pháp nhân Việt Nam

TT99 Điều 4: đơn vị tiền tệ trong kế toán là Đồng Việt Nam. Doanh nghiệp chủ yếu thu, chi bằng ngoại tệ được chọn một loại ngoại tệ làm đơn vị tiền tệ trong kế toán, căn cứ vào:

- Đồng tiền ảnh hưởng chính đến giá bán hàng hoá, dịch vụ (thường là đồng tiền niêm yết giá bán và thanh toán);
- Đồng tiền ảnh hưởng chính đến chi phí nhân công, nguyên vật liệu, chi phí sản xuất kinh doanh khác (thường là đồng tiền thanh toán các chi phí đó).

Nếu hai yếu tố này chưa đủ để xác định, xét thêm đồng tiền dùng để huy động vốn (phát hành công cụ nợ, công cụ vốn) và đồng tiền thường xuyên thu được từ hoạt động kinh doanh và được tích trữ. Sau khi xác định, doanh nghiệp không được đổi trừ khi có thay đổi lớn về hoạt động quản lý và kinh doanh.

Doanh nghiệp chọn ngoại tệ làm đơn vị tiền tệ kế toán vẫn phải chuyển đổi BCTC sang Đồng Việt Nam để công bố và nộp cơ quan có thẩm quyền tại Việt Nam; BCTC được kiểm toán là bản bằng Đồng Việt Nam (TT99 Điều 6).

### Đồng tiền báo cáo của tập đoàn

Công ty con lập BCTC bằng đồng tiền khác với đồng tiền báo cáo của công ty mẹ thì phải được chuyển đổi trước khi hợp nhất (TT202 Điều 10 khoản 15). TT43/2026 sửa Điều 58 TT202 về tỷ giá chuyển đổi, tóm tắt:

- Tài sản, nợ phải trả của công ty con và lợi thế thương mại phát sinh khi mua công ty con ở nước ngoài: tỷ giá giao dịch thực tế cuối kỳ;
- Giá trị tài sản thuần của công ty con do công ty mẹ nắm giữ tại ngày mua: tỷ giá ghi sổ tại ngày mua;
- Cổ tức đã trả: tỷ giá giao dịch thực tế tại ngày trả cổ tức;
- Khoản mục báo cáo kết quả kinh doanh và lưu chuyển tiền tệ: tỷ giá giao dịch thực tế tại thời điểm phát sinh, hoặc tỷ giá bình quân kỳ nếu xấp xỉ (chênh lệch không vượt biên độ tỷ giá giao ngay của Ngân hàng Nhà nước).

Chi tiết ở [[ktqt-06-don-vi-tien-te-chuyen-doi]]. Với danh mục, BA chỉ cần ghi: đơn vị tiền tệ kế toán của từng pháp nhân, đồng tiền báo cáo của tập đoàn, và nguồn tỷ giá mỗi pháp nhân dùng.

> ⚠️ Cần xác nhận: khi ngân hàng thương mại nơi doanh nghiệp thường giao dịch không công bố tỷ giá của loại ngoại tệ cần quy đổi, TT43/2026 cho chọn một đồng tiền trung gian và phải thuyết minh căn cứ chọn. Với tập đoàn có công ty con ở nước dùng đồng tiền ít phổ biến, cần hỏi kế toán tập đoàn đồng tiền trung gian là gì.

## Nhóm 5: Năm tài chính và kỳ khoá sổ

### Năm tài chính

Luật Kế toán Điều 12: kỳ kế toán năm là 12 tháng từ 01/01 đến 31/12. Đơn vị có đặc thù về tổ chức, hoạt động được chọn kỳ kế toán năm là 12 tháng tròn bắt đầu từ ngày 01 tháng đầu một quý, kết thúc ngày cuối của tháng cuối quý trước năm sau, và phải thông báo cho cơ quan tài chính, cơ quan thuế. Công ty con ở nước ngoài theo quy định của nước sở tại.

### Khi các pháp nhân có ngày kết thúc kỳ khác nhau

BCTC của công ty mẹ và công ty con dùng để hợp nhất phải lập cho cùng một kỳ kế toán. Nếu ngày kết thúc kỳ khác nhau, công ty con phải lập thêm một bộ BCTC cho mục đích hợp nhất có kỳ trùng với kỳ của công ty mẹ. Nếu không thể, được dùng BCTC lập vào thời điểm khác với điều kiện chênh lệch không quá 3 tháng, và phải điều chỉnh cho giao dịch, sự kiện quan trọng xảy ra trong khoảng chênh lệch (TT202 Điều 10 khoản 5; VAS 25 đoạn 16–17).

Ví dụ giả định: công ty mẹ kết thúc năm 31/12, công ty con ở nước X kết thúc năm 31/3. Hệ thống của công ty con cần cho ra số liệu theo kỳ 01/01–31/12 (tức là chạy được báo cáo theo khoảng ngày bất kỳ, không chỉ theo năm tài chính của nó), hoặc tập đoàn chấp nhận dùng số 31/3 kèm điều chỉnh vì chênh lệch đúng 3 tháng.

### Kỳ khoá sổ và lịch nộp

- TT99 Điều 13: doanh nghiệp phải khoá sổ kế toán tại thời điểm kết thúc kỳ kế toán để lập BCTC.
- TT99 Điều 15 khoản 3: doanh nghiệp lập BCTC theo kỳ kế toán khác (ví dụ tháng) theo yêu cầu của pháp luật, của công ty mẹ hoặc của chủ sở hữu.
- TT99 Điều 25: công ty mẹ quy định thời hạn nộp BCTC của công ty con, đơn vị trực thuộc để hợp nhất hoặc tổng hợp.
- TT202 Điều 6 (sửa bởi TT43/2026): BCTC hợp nhất năm nộp cho chủ sở hữu và cơ quan quản lý có thẩm quyền chậm nhất 90 ngày kể từ ngày kết thúc kỳ kế toán năm. Bản TT202 gốc còn quy định công khai trong 120 ngày và nộp BCTC hợp nhất giữa niên độ trong 45 ngày; sau sửa đổi, thời hạn công khai theo Luật Kế toán, còn thời hạn nộp và công khai BCTC hợp nhất giữa niên độ theo pháp luật liên quan quy định việc đó.

Từ các mốc này, BA ghi cho mỗi pháp nhân: kỳ khoá sổ tháng (nếu có), hạn nộp số liệu cho tập đoàn, hạn khoá sổ năm. Lịch khoá sổ tập đoàn chi tiết ở [[ktqt-12-bao-cao-cho-tap-doan]].

## Mẫu danh mục

Cột gợi ý cho bảng danh mục, mỗi dòng một đơn vị:

| Nhóm | Cột |
|---|---|
| Định danh | Tên pháp lý; quốc gia; mã số thuế; pháp nhân / đơn vị trực thuộc của ai |
| Sở hữu | Công ty sở hữu trực tiếp; % quyền biểu quyết; % lợi ích (trực tiếp, gián tiếp); phân loại; căn cứ phân loại; ngày đạt / mất kiểm soát |
| Chuẩn mực | Chuẩn mực / chế độ địa phương; chuẩn mực báo cáo tập đoàn; chính sách khác với tập đoàn |
| Tiền tệ | Đơn vị tiền tệ kế toán; đồng tiền báo cáo tập đoàn; nguồn tỷ giá |
| Kỳ | Ngày kết thúc năm tài chính; kỳ khoá sổ; hạn nộp số liệu cho tập đoàn |

## Điểm chạm hệ thống

Trong Odoo 19, mỗi company có trường Currency riêng. Branch dùng chung hệ thống tài khoản, đồng tiền chính, thuế và kỳ tài chính của company mẹ, nên một đơn vị có đồng tiền kế toán hoặc năm tài chính khác thì không thể là branch. Khi hợp nhất các company khác đồng tiền, Odoo quy đổi: tài khoản vốn chủ sở hữu theo tỷ giá lịch sử, tài khoản lãi lỗ theo tỷ giá bình quân gia quyền, tài khoản bảng cân đối (trừ vốn chủ sở hữu) theo tỷ giá cuối kỳ; tỷ giá lấy theo company đang được chọn.

> 💡 Đối chiếu cách quy đổi mặc định của phần mềm với TT202 Điều 58 đã sửa trước khi chốt thiết kế. Ví dụ: TT202 quy đổi tài sản thuần tại ngày mua theo tỷ giá tại ngày mua, cổ tức theo tỷ giá ngày trả; phần mềm có thể không tách được các phần này nếu không cấu hình thêm.

## Nguồn

- Thông tư 202/2014/TT-BTC, Điều 2, Điều 8 khoản 2, Điều 9 (khoản 1, 2, 5), Điều 10 (khoản 4, 5, 15): https://caselaw.vn/van-ban-phap-luat/264198-thong-tu-202-2014-tt-btc-huong-dan-phuong-phap-lap-va-trinh-bay-bao-cao-tai-chinh-hop-nhat-do-bo-truong-bo-tai-chinh-ban-hanh
- Thông tư 43/2026/TT-BTC, Điều 1 khoản 2 (sửa Điều 6), khoản 4 (sửa khoản 6 Điều 10), khoản 10 (sửa Điều 58): https://luatvietnam.vn/tai-chinh/thong-tu-43-2026-tt-btc-sua-doi-bao-cao-tai-chinh-hop-nhat-hieu-luc-20-04-2026-432924-d1.html
- Chuẩn mực kế toán Việt Nam số 25, đoạn 16, 17, 28 (Quyết định 234/2003/QĐ-BTC): https://vanban.vcci.com.vn/quyet-dinh-2342003qd-btc-cua-bo-tai-chinh-ve-viec-ban-hanh-va-cong-bo-sau-06-chuan-muc-ke-toan-viet-nam-dot-3
- Chuẩn mực kế toán Việt Nam số 11 "Hợp nhất kinh doanh", đoạn 25 (Quyết định 100/2005/QĐ-BTC): https://caselaw.vn/van-ban-phap-luat/225170-quyet-dinh-so-100-2005-qd-btc-ngay-28-12-2005-ban-hanh-va-cong-bo-bon-04-chuan-muc-ke-toan-viet-nam-dot-5-cua-bo-truong-bo-tai-chinh
- IFRS 10 Consolidated Financial Statements, Introduction IN8, IN10 (IFRS Foundation; bản trích do AASB đăng lại): https://www.aasb.gov.au/admin/file/content105/c9/IFRS10_IN_1-16.pdf; trang chuẩn mực: https://www.ifrs.org/issued-standards/list-of-standards/ifrs-10-consolidated-financial-statements/
- Thông tư 99/2025/TT-BTC, Điều 4, Điều 6, Điều 13, Điều 15, Điều 25: https://luatvietnam.vn/linh-vuc-khac/tai-thong-tu-99-2025-tt-btc-huong-dan-che-do-ke-toan-doanh-nghiep-186-105034-article.html
- Luật Kế toán số 88/2015/QH13 (văn bản hợp nhất đăng Công báo số 172 ngày 31/03/2026), Điều 12; bản gốc: https://caselaw.vn/van-ban-phap-luat/115612-luat-ke-toan-so-88-2015-qh13-ngay-20-11-2015-cua-quoc-hoi
- Odoo 19 Documentation, Companies (Company, Branches): https://www.odoo.com/documentation/19.0/applications/general/companies.html
- Odoo 19 Documentation, Accounting (Branches): https://www.odoo.com/documentation/19.0/applications/finance/accounting.html
- Odoo 19 Documentation, Consolidation (Cumulative Translation Adjustments): https://www.odoo.com/documentation/19.0/applications/finance/accounting/get_started/consolidation.html
