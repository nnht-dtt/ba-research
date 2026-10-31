# Kế toán trong dự án ERP: BA cần hiểu đến đâu

Bài này nói kế toán là gì theo Luật Kế toán, kế toán tài chính khác kế toán quản trị ở đâu, và vì sao nghiệp vụ nào trong ERP cuối cùng cũng thành bút toán trên sổ cái. Đọc xong, bạn biết khi làm dự án cần hỏi phần kế toán những gì và phần nào thì để kế toán viên lo.

## Kế toán là gì theo Luật Kế toán

Luật Kế toán 88/2015/QH13 (hiệu lực từ 01/01/2017, đã sửa đổi bởi Luật 38/2019/QH14, Luật 56/2024/QH15 và Luật Quản lý thuế 108/2025/QH15) định nghĩa ở khoản 8 Điều 3:

> Kế toán là việc thu thập, xử lý, kiểm tra, phân tích và cung cấp thông tin kinh tế, tài chính dưới hình thức giá trị, hiện vật và thời gian lao động.

Định nghĩa có ba thước đo: **giá trị** (tiền), **hiện vật** (số lượng, khối lượng) và **thời gian lao động** (giờ công, ngày công). Vì vậy một phiếu nhập kho trong ERP phải giữ cả số lượng lẫn giá trị, và bảng chấm công là đầu vào của kế toán chứ không chỉ của nhân sự.

Điều 4 giao cho kế toán bốn nhiệm vụ: thu thập và xử lý số liệu theo chuẩn mực, chế độ kế toán; kiểm tra, giám sát thu chi, công nợ, tài sản; phân tích số liệu để tham mưu cho quản trị; cung cấp thông tin theo quy định của pháp luật.

Điều 5 nêu sáu yêu cầu. Mỗi yêu cầu đều có hệ quả lên hệ thống:

| Yêu cầu (Điều 5) | Hệ quả lên thiết kế hệ thống |
|---|---|
| Phản ánh đầy đủ nghiệp vụ vào chứng từ, sổ, BCTC | Nghiệp vụ phát sinh ở phân hệ nào cũng phải có đường lên sổ kế toán, không để "nằm ngoài" |
| Kịp thời, đúng thời gian quy định | Bút toán sinh tại thời điểm nghiệp vụ hoàn thành, không dồn cuối tháng nhập tay |
| Rõ ràng, dễ hiểu, chính xác | Diễn giải bút toán, mã đối tượng, mã chứng từ gốc đi kèm |
| Trung thực, khách quan về bản chất và giá trị | Bút toán phản ánh đúng bản chất nghiệp vụ, không chọn tài khoản theo tiện cho người nhập |
| Liên tục; số kỳ này kế tiếp số kỳ trước | Số dư cuối kỳ chuyển sang đầu kỳ sau, không sửa số dư đầu kỳ tuỳ ý |
| Phân loại có hệ thống, so sánh và kiểm chứng được | Hệ thống tài khoản, chiều phân tích nhất quán giữa các kỳ |

## Kế toán tài chính và kế toán quản trị

Điều 9 khoản 1 chia kế toán ở đơn vị thành hai phần. Định nghĩa ở khoản 9 và 10 Điều 3:

- **Kế toán tài chính**: thu thập, xử lý, kiểm tra, phân tích và cung cấp thông tin kinh tế, tài chính **bằng báo cáo tài chính** cho đối tượng có nhu cầu sử dụng thông tin của đơn vị kế toán.
- **Kế toán quản trị**: thu thập, xử lý, phân tích và cung cấp thông tin kinh tế, tài chính **theo yêu cầu quản trị và quyết định** kinh tế, tài chính **trong nội bộ** đơn vị kế toán.

| | Kế toán tài chính | Kế toán quản trị |
|---|---|---|
| Ai dùng | Bên ngoài và nội bộ: chủ sở hữu, cơ quan nhà nước, chủ nợ, nhà đầu tư | Nội bộ: ban giám đốc, trưởng bộ phận |
| Sản phẩm | Báo cáo tài chính theo biểu mẫu của chuẩn mực và chế độ kế toán | Báo cáo quản trị do doanh nghiệp tự thiết kế |
| Ràng buộc | Luật Kế toán, chuẩn mực VAS, chế độ kế toán (TT99, TT133, TT58) | Do doanh nghiệp quyết định; Bộ Tài chính hướng dẫn áp dụng (khoản 3 Điều 9) |
| Trong ERP | Hệ thống tài khoản, sổ cái, bộ BCTC | Trung tâm chi phí, chiều phân tích, ngân sách, báo cáo lãi lỗ theo bộ phận |

Hai phần này dùng chung một nguồn dữ liệu: cùng một bút toán vừa lên BCTC vừa được gắn chiều phân tích (bộ phận, dự án, kênh bán) để làm báo cáo quản trị. Chương 7 đi vào phần quản trị: [[kt-33-trung-tam-chi-phi]].

> 📌 Luật cấm lập hai hệ thống sổ kế toán tài chính trở lên hoặc công bố BCTC có số liệu không đồng nhất trong cùng một kỳ (khoản 10 Điều 13), và mỗi đơn vị chỉ được dùng một hệ thống tài khoản cho mục đích kế toán tài chính (khoản 2 Điều 22). Dữ liệu quản trị là lớp phân tích trên cùng sổ, không phải một bộ sổ tài chính thứ hai. Tình huống tập đoàn cần thêm sổ theo IFRS được bàn ở [[ktqt-10-kien-truc-so-hai-chuan]].

## Kế toán tổng hợp và kế toán chi tiết

Khoản 2 Điều 9 yêu cầu làm cả hai lớp:

- **Kế toán tổng hợp** cung cấp thông tin tổng quát, chỉ dùng đơn vị tiền tệ, và được thực hiện trên cơ sở số liệu của kế toán chi tiết.
- **Kế toán chi tiết** theo dõi từng đối tượng cụ thể bằng tiền, hiện vật và thời gian lao động.
- **Số liệu kế toán chi tiết phải khớp đúng với số liệu kế toán tổng hợp trong một kỳ kế toán.**

Câu cuối là một yêu cầu đối chiếu mà hệ thống phải bảo đảm. Ví dụ: tổng công nợ từng nhà cung cấp phải bằng số dư tài khoản phải trả người bán trên sổ cái; tổng giá trị tồn kho theo từng mã hàng, từng kho phải bằng số dư tài khoản hàng tồn kho. Cách ERP tổ chức sổ con và sổ cái để giữ điều này được trình bày ở [[kt-10-so-con-so-cai]].

## Kế toán theo dõi những gì

Khoản 3 Điều 8 liệt kê đối tượng kế toán của hoạt động kinh doanh:

1. Tài sản;
2. Nợ phải trả và vốn chủ sở hữu;
3. Doanh thu, chi phí kinh doanh, thu nhập và chi phí khác;
4. Thuế và các khoản nộp ngân sách nhà nước;
5. Kết quả và phân chia kết quả hoạt động kinh doanh;
6. Tài sản, các khoản phải thu, nghĩa vụ phải trả khác có liên quan đến đơn vị kế toán.

Hệ thống tài khoản là cách phân loại chi tiết các đối tượng này. Quan hệ giữa chúng (tài sản = nợ phải trả + vốn chủ sở hữu, doanh thu và chi phí làm thay đổi vốn chủ sở hữu) là nội dung của [[kt-06-phuong-trinh-ke-toan]].

## Vì sao mọi nghiệp vụ kết thúc ở sổ cái

Luật đặt ra một chuỗi bắt buộc:

- **Nghiệp vụ kinh tế, tài chính** là hoạt động phát sinh cụ thể làm tăng, giảm tài sản, nguồn hình thành tài sản của đơn vị (khoản 15 Điều 3).
- Mọi nghiệp vụ phát sinh phải **lập chứng từ kế toán**, và chứng từ chỉ được lập **một lần** cho mỗi nghiệp vụ (khoản 1 Điều 18). Chứng từ là căn cứ ghi sổ (khoản 3 Điều 3).
- Đơn vị phải **căn cứ vào chứng từ để ghi sổ**, ghi theo trình tự thời gian phát sinh (khoản 2, 4 Điều 26).
- Đơn vị phải **khoá sổ cuối kỳ trước khi lập báo cáo tài chính** (khoản 6 Điều 26).

Trong ERP, chuỗi này chạy tự động: người dùng xác nhận một chứng từ nghiệp vụ, hệ thống sinh bút toán và ghi vào sổ. Tài liệu Odoo 19 mô tả phần mềm tự tạo các bút toán bên dưới cho mọi giao dịch kế toán như hoá đơn bán hàng và hoá đơn mua hàng, theo nguyên tắc ghi sổ kép nên Nợ và Có luôn cân. Các phần mềm ERP khác làm tương tự, khác nhau ở cách cấu hình.

<step-flow>
<svg viewBox="0 0 720 150" role="img" aria-labelledby="kt01f-t" style="width:100%;max-width:720px;height:auto;display:block;margin:1.25rem auto" font-family="ui-sans-serif, system-ui, sans-serif">
<title id="kt01f-t">Từ nghiệp vụ đến báo cáo tài chính</title>
<defs>
<marker id="kt01f-arrow" markerWidth="9" markerHeight="9" refX="8" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 z" fill="currentColor"/></marker>
</defs>
<g data-step="1">
<rect x="5" y="45" width="120" height="60" rx="10" fill="#3b82f6" fill-opacity="0.13" stroke="currentColor" stroke-opacity="0.22"/>
<text x="65" y="72" font-size="13" text-anchor="middle" fill="currentColor">Nghiệp vụ</text>
<text x="65" y="90" font-size="11" text-anchor="middle" fill="currentColor" fill-opacity="0.75">nhận hàng, bán hàng</text>
</g>
<g data-step="2">
<line x1="125" y1="75" x2="148" y2="75" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" marker-end="url(#kt01f-arrow)"/>
<rect x="150" y="45" width="120" height="60" rx="10" fill="#f59e0b" fill-opacity="0.14" stroke="currentColor" stroke-opacity="0.22"/>
<text x="210" y="72" font-size="13" text-anchor="middle" fill="currentColor">Chứng từ</text>
<text x="210" y="90" font-size="11" text-anchor="middle" fill="currentColor" fill-opacity="0.75">phiếu nhập, hoá đơn</text>
</g>
<g data-step="3">
<line x1="270" y1="75" x2="293" y2="75" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" marker-end="url(#kt01f-arrow)"/>
<rect x="295" y="45" width="120" height="60" rx="10" fill="#8b5cf6" fill-opacity="0.14" stroke="currentColor" stroke-opacity="0.22"/>
<text x="355" y="72" font-size="13" text-anchor="middle" fill="currentColor">Bút toán</text>
<text x="355" y="90" font-size="11" text-anchor="middle" fill="currentColor" fill-opacity="0.75">Nợ / Có</text>
</g>
<g data-step="4">
<line x1="415" y1="75" x2="438" y2="75" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" marker-end="url(#kt01f-arrow)"/>
<rect x="440" y="45" width="130" height="60" rx="10" fill="#10b981" fill-opacity="0.16" stroke="currentColor" stroke-opacity="0.22"/>
<text x="505" y="72" font-size="13" text-anchor="middle" fill="currentColor">Sổ chi tiết, sổ cái</text>
<text x="505" y="90" font-size="11" text-anchor="middle" fill="currentColor" fill-opacity="0.75">khớp đúng với nhau</text>
</g>
<g data-step="5">
<line x1="570" y1="75" x2="593" y2="75" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" marker-end="url(#kt01f-arrow)"/>
<rect x="595" y="45" width="120" height="60" rx="10" fill="#f43f5e" fill-opacity="0.12" stroke="currentColor" stroke-opacity="0.22"/>
<text x="655" y="72" font-size="13" text-anchor="middle" fill="currentColor">Khoá sổ, BCTC</text>
<text x="655" y="90" font-size="11" text-anchor="middle" fill="currentColor" fill-opacity="0.75">cuối kỳ</text>
</g>
</svg>
<step-note data-step="1">Nghiệp vụ làm tăng, giảm tài sản hoặc nguồn hình thành tài sản (khoản 15 Điều 3 Luật Kế toán).</step-note>
<step-note data-step="2">Mỗi nghiệp vụ lập chứng từ đúng một lần (khoản 1 Điều 18). Trong ERP, chứng từ là bản ghi nghiệp vụ đã xác nhận.</step-note>
<step-note data-step="3">Hệ thống sinh bút toán theo cấu hình tài khoản; tổng Nợ bằng tổng Có.</step-note>
<step-note data-step="4">Bút toán ghi vào sổ cái và sổ chi tiết theo đối tượng; số chi tiết phải khớp số tổng hợp (khoản 2 Điều 9).</step-note>
<step-note data-step="5">Khoá sổ cuối kỳ rồi mới lập báo cáo tài chính (khoản 6 Điều 26).</step-note>
</step-flow>

### Ví dụ giả định: một vòng mua bán

Doanh nghiệp thương mại mua 100 đơn vị hàng, giá 1.000.000 đồng/đơn vị chưa thuế, giả định thuế GTGT 10%, chưa trả tiền. Sau đó bán 60 đơn vị giá 1.500.000 đồng/đơn vị chưa thuế, khách chưa trả. Số hiệu tài khoản theo Phụ lục II Thông tư 99/2025/TT-BTC.

| Bước nghiệp vụ | Chứng từ | Bút toán |
|---|---|---|
| Nhận hàng và hoá đơn mua | Phiếu nhập kho, hoá đơn GTGT đầu vào | Nợ TK 156 (Hàng hoá) 100.000.000; Nợ TK 1331 (Thuế GTGT được khấu trừ của hàng hoá, dịch vụ) 10.000.000 / Có TK 331 (Phải trả cho người bán) 110.000.000 |
| Giao hàng và xuất hoá đơn bán | Phiếu xuất kho, hoá đơn GTGT đầu ra | Nợ TK 131 (Phải thu của khách hàng) 99.000.000 / Có TK 511 (Doanh thu bán hàng và cung cấp dịch vụ) 90.000.000; Có TK 33311 (Thuế GTGT đầu ra) 9.000.000 |
| Ghi nhận giá vốn hàng đã bán | Phiếu xuất kho | Nợ TK 632 (Giá vốn hàng bán) 60.000.000 / Có TK 156 60.000.000 |

Từ ba bút toán này, sổ cái có số dư hàng tồn kho 40.000.000, phải trả người bán 110.000.000, phải thu khách hàng 99.000.000; báo cáo kết quả kinh doanh có doanh thu 90.000.000 và giá vốn 60.000.000. Không ai nhập tay vào báo cáo: báo cáo đọc số dư và phát sinh của tài khoản. Cách đọc một bút toán và ý nghĩa Nợ/Có được giải thích ở [[kt-07-ghi-so-kep]]; luồng mua và bán đầy đủ ở [[kt-12-quy-trinh-mua-hang]] và [[kt-17-quy-trinh-ban-hang]].

> 💡 Khi khách hàng mô tả một requirement ("cho phép sửa giá sau khi đã giao hàng", "gộp nhiều phiếu nhập vào một hoá đơn"), hãy hỏi: bút toán nào đã sinh ra, và bút toán nào sẽ phải sinh thêm. Câu trả lời cho biết requirement đó chạm tới sổ cái ở đâu.

## Những quy định của Luật chạm thẳng vào cấu hình hệ thống

Ngoài chuỗi chứng từ – sổ – báo cáo, vài quy định ở Chương I và II của Luật quyết định cách cài đặt hệ thống ngay từ đầu:

- **Đơn vị tiền tệ** (Điều 10): là Đồng Việt Nam. Nghiệp vụ bằng ngoại tệ phải ghi theo nguyên tệ và Đồng Việt Nam theo tỷ giá thực tế. Đơn vị chủ yếu thu, chi bằng một ngoại tệ được chọn ngoại tệ đó làm đơn vị tiền tệ kế toán, thông báo cho cơ quan thuế, nhưng BCTC dùng tại Việt Nam phải quy đổi ra Đồng Việt Nam. Xem [[ktqt-06-don-vi-tien-te-chuyen-doi]].
- **Chữ viết và chữ số** (Điều 11): chữ viết là tiếng Việt; dùng tiếng nước ngoài trên BCTC tại Việt Nam thì phải song ngữ. Chữ số dùng dấu chấm sau hàng nghìn và dấu phẩy sau hàng đơn vị. Doanh nghiệp, chi nhánh của doanh nghiệp nước ngoài dùng chung phần mềm với công ty mẹ được đảo lại (dấu phẩy hàng nghìn, dấu chấm thập phân) nhưng phải chú thích, và BCTC nộp cơ quan nhà nước vẫn theo cách viết của Việt Nam.
- **Kỳ kế toán** (Điều 12): năm, quý, tháng. Năm kế toán là năm dương lịch; đơn vị có đặc thù được chọn 12 tháng tròn bắt đầu từ ngày đầu một quý và phải thông báo cho cơ quan tài chính, cơ quan thuế. Kỳ năm đầu tiên hoặc cuối cùng không quá 03 kỳ kế toán tháng liên tiếp được cộng với năm liền kề, nhưng không quá 15 tháng.
- **Sửa sổ khi ghi sổ bằng phương tiện điện tử** (khoản 4 Điều 27): khoản 1 Điều 27 cho ba cách sửa sổ (ghi cải chính, ghi số âm bằng mực đỏ hoặc trong ngoặc đơn có chữ ký kế toán trưởng, ghi điều chỉnh), nhưng sổ ghi bằng phương tiện điện tử chỉ được dùng cách thứ ba: lập "chứng từ điều chỉnh" và ghi thêm số chênh lệch. Không được tẩy xoá làm mất dấu vết số đã ghi. Đây là lý do ERP không cho sửa bút toán đã ghi sổ mà bắt huỷ bằng bút toán đảo hoặc ghi bút toán điều chỉnh; xem [[kt-11-but-toan-tong-hop-dieu-chinh]].
- **Lưu trữ sổ điện tử** (khoản 7 Điều 26): sau khi khoá sổ phải in ra giấy đóng quyển, hoặc lưu trên phương tiện điện tử với điều kiện an toàn, bảo mật và tra cứu được trong thời hạn lưu trữ.

## BA cần hiểu đến đâu

Một cách chia việc thực tế trong dự án:

- **BA cần nắm**: chứng từ nào của quy trình sinh bút toán, bút toán đó Nợ/Có tài khoản nào, ở bước nào; quy định nào là bắt buộc (khoá cứng trong hệ thống) và chỗ nào doanh nghiệp được tự chọn (chính sách kế toán, tài khoản chi tiết, mẫu chứng từ); bút toán ảnh hưởng tới chỉ tiêu nào của BCTC.
- **BA không cần làm**: ghi sổ thủ công, lập tờ khai thuế, tự tính giá thành hay dự phòng thay kế toán. Những con số đó là đầu ra của hệ thống mà BA phải thiết kế cho đúng, không phải công việc của BA.

Các bài còn lại của chương 1 đi tiếp vào khung văn bản ([[kt-02-khung-phap-ly]]), chế độ kế toán doanh nghiệp ([[kt-03-che-do-ke-toan]]), nguyên tắc kế toán ([[kt-04-nguyen-tac-ke-toan]]) và chính sách kế toán ([[kt-05-chinh-sach-quy-che]]).

## Nguồn

- Luật Kế toán 88/2015/QH13, văn bản hợp nhất đăng Công báo số 172 ngày 31/3/2026 (hợp nhất các sửa đổi của Luật 38/2019/QH14, Luật 56/2024/QH15, Luật 108/2025/QH15): Điều 3 khoản 3, 8, 9, 10, 15; Điều 4; Điều 5; Điều 8 khoản 3; Điều 9; Điều 10; Điều 11; Điều 12; Điều 13 khoản 10; Điều 18 khoản 1; Điều 22 khoản 2; Điều 26; Điều 27. https://cdn.thuvienphapluat.vn//uploads/Hoidapphapluat/2026/LNMT/Thang_4/260404/172_41_VBHN_VPQH.pdf
- Thông tư 99/2025/TT-BTC, Phụ lục II – Hệ thống tài khoản kế toán doanh nghiệp (TK 131, 1331, 156, 331, 33311, 511, 632). https://docs.google.com/document/d/14NeM16EEKMINCoSraTafe0w_iySTX1Ub/export?format=pdf
- Odoo 19 Documentation, Accounting and Invoicing (mục Double-entry bookkeeping). https://www.odoo.com/documentation/19.0/applications/finance/accounting.html
- Đại học Cần Thơ, Đề cương chi tiết môn Nguyên lý kế toán (tuyển sinh liên thông), mục 5 chương 1 "Những vấn đề cơ bản về kế toán" (khái niệm; yêu cầu, vai trò, nhiệm vụ; phân loại kế toán; đối tượng kế toán). https://tuyensinh.ctu.edu.vn/images/upload/TS_LT/decuongontap/NguyenLiKeToan.pdf
- Trường Đại học Sao Đỏ, Đề cương chi tiết học phần Nguyên lý kế toán (KETOAN 011, 2022), chương 1 "Bản chất và đối tượng của kế toán". https://saodo.edu.vn/uploads/about/ctdt2022/kt/ketoan011.pdf
- Đề cương môn học Nguyên lý kế toán (125033), Trường Đại học Lạc Hồng, Chương 1 (đối chiếu cấu trúc nội dung: khái niệm, nhiệm vụ, yêu cầu, đối tượng kế toán, các phương pháp kế toán). https://doanhoi.lhu.edu.vn/Data/News/830/files/125033_Fundamentals_of_Accounting.pdf

> ⚠️ Cần xác nhận: plan ghi nguồn đề cương Nguyên lý kế toán của CTU, UFM, Sao Đỏ; bài đã đối chiếu cấu trúc chương 1 với đề cương của Đại học Cần Thơ, Đại học Sao Đỏ và Đại học Lạc Hồng, chưa đọc được đề cương của UFM.
