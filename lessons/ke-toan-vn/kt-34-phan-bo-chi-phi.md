# Tập hợp và phân bổ chi phí theo tiêu thức

Bài này giúp hiểu khi nào chi phí được gắn thẳng cho đối tượng và khi nào phải phân bổ, các tiêu thức và phương pháp phân bổ (trực tiếp, theo bậc), bút toán phân bổ nào thật sự đi vào sổ, và dữ liệu hệ thống phải có để phân bổ tự động mỗi kỳ.

## Chi phí trực tiếp và chi phí gián tiếp

Thông tư 53/2006/TT-BTC (Phần III, mục 1.1.1.b) phân loại chi phí theo tính chất:

- **Chi phí trực tiếp**: cấu thành sản phẩm, gắn liền với một sản phẩm hoặc dịch vụ nhất định, ví dụ nguyên liệu, vật liệu trực tiếp, nhân công trực tiếp.
- **Chi phí gián tiếp**: liên quan đến nhiều sản phẩm hoặc dịch vụ, ví dụ chi phí quản lý hành chính, lương nhân viên quản lý. Thông tư nói rõ chi phí gián tiếp **phải được phân bổ** vào từng đơn vị, sản phẩm, công việc.

"Đối tượng chịu chi phí" có thể là sản phẩm, công việc, đơn hàng, cũng có thể là trung tâm chi phí, kênh, thương hiệu như ở [[kt-33-trung-tam-chi-phi]]. Một khoản chi phí là trực tiếp hay gián tiếp tuỳ vào đối tượng đang xét. Lương trưởng phân xưởng là chi phí trực tiếp của phân xưởng, nhưng là chi phí gián tiếp đối với từng sản phẩm phân xưởng làm ra.

## Hai phương pháp tập hợp chi phí

Thông tư 53 (Phần III, mục 1.1.2) nêu hai phương pháp:

- **Phương pháp trực tiếp**: chi phí chỉ liên quan đến một đối tượng thì tập hợp thẳng cho đối tượng đó.
- **Phương pháp phân bổ**: chi phí liên quan đến nhiều đối tượng thì phân bổ. Doanh nghiệp chọn **căn cứ phân bổ** (giờ công, ngày công, giờ máy hoạt động, diện tích sử dụng...) và chọn **phương pháp phân bổ** là trực tiếp hoặc phân bổ theo cấp bậc.

Phụ lục II Thông tư 99/2025/TT-BTC dùng đúng logic này cho các tài khoản chi phí sản xuất:

- **TK 621**: chi phí nguyên liệu, vật liệu trực tiếp được tập hợp theo từng đối tượng nếu khi xuất dùng đã xác định rõ đối tượng sử dụng. Nếu không xác định được thì tập hợp chung cho quá trình sản xuất. Cuối kỳ, phần tập hợp chung được phân bổ vào TK 154 theo tiêu thức phù hợp với đặc điểm sản xuất và yêu cầu quản lý.
- **TK 627**: khi một quy trình làm ra nhiều loại sản phẩm mà chi phí sản xuất chung của từng loại không tách riêng được, chi phí sản xuất chung được phân bổ theo **tiêu thức phù hợp và nhất quán giữa các kỳ kế toán**.

> 📌 Lựa chọn trực tiếp hay phân bổ bắt đầu từ chứng từ. Nếu phiếu xuất kho, bảng chấm công hay hoá đơn đã ghi rõ đối tượng thì không cần phân bổ. Thông tư 53 (Phần II, mục 3.c) cho dùng chứng từ điều hành như lệnh sản xuất, bảng kê khối lượng, quyết định điều động lao động làm căn cứ. Với lao động, Thông tư 53 (Phần III, mục 6.3) yêu cầu hệ thống chấm công, tính lương phù hợp với trung tâm chi phí. Chỉ khi một người làm cùng lúc nhiều việc mới cần chọn căn cứ phân bổ. Xem [[kt-31-tien-luong]].

## Tiêu thức phân bổ và cách tính

Phân bổ theo một tiêu thức luôn có ba bước:

1. Xác định **nhóm chi phí cần phân bổ**: tài khoản nào, của trung tâm nào, trong kỳ nào.
2. Xác định **lượng tiêu thức** của từng đối tượng nhận, ví dụ số giờ máy của từng phân xưởng.
3. Tính **hệ số phân bổ** = tổng chi phí cần phân bổ / tổng lượng tiêu thức. Phần của mỗi đối tượng = hệ số × lượng tiêu thức của đối tượng đó.

> 💡 Ví dụ giả định: tiền thuê kho văn phòng 120 triệu đồng/tháng được phân bổ theo diện tích sử dụng. Bộ phận bán hàng dùng 300 m², bộ phận quản lý dùng 100 m², phân xưởng dùng 600 m². Hệ số = 120.000.000 / 1.000 = 120.000 đồng/m². Phần của bán hàng là 36 triệu, quản lý 12 triệu, phân xưởng 72 triệu.

Một số căn cứ thường gặp và nơi dữ liệu nằm trong hệ thống (ví dụ giả định về nguồn dữ liệu):

| Căn cứ (TT53 nêu) | Hợp với chi phí | Dữ liệu lấy từ |
|---|---|---|
| Giờ công, ngày công | Lương quản lý, chi phí nhân sự | Chấm công, timesheet |
| Giờ máy hoạt động | Khấu hao, điện, bảo trì máy | Nhật ký máy, lệnh sản xuất |
| Diện tích sử dụng | Thuê mặt bằng, an ninh, vệ sinh | Danh mục mặt bằng (dữ liệu tĩnh) |

Ngoài các căn cứ này, doanh nghiệp tự chọn thêm, như doanh thu hay số đơn hàng khi phân bổ chi phí quản lý cho kênh. Thông tư 53 ghi "Giờ công, ngày công, giờ máy hoạt động, diện tích sử dụng,…", tức danh sách không đóng.

## Phân bổ từ trung tâm phụ sang trung tâm chính

Thông tư 53 chia trung tâm chi phí thành trung tâm chính (mua hàng, sản xuất) và trung tâm phụ (hành chính, quản trị, kế toán, tài chính...). Chi phí của trung tâm phụ phải được đẩy về trung tâm chính rồi mới vào sản phẩm. Khi các trung tâm phụ phục vụ lẫn nhau, có ba cách. Bài *Allocating Service Department Costs with Excel* trên tạp chí Strategic Finance của IMA (2017) mô tả như sau:

- **Phương pháp trực tiếp**: phân bổ chi phí trung tâm phụ thẳng sang trung tâm chính, bỏ qua dịch vụ các trung tâm phụ cung cấp cho nhau. Dễ làm nhưng kém chính xác hơn.
- **Phương pháp bậc thang (step-down, tuần tự)**: phân bổ lần lượt từng trung tâm phụ cho trung tâm chính và cho các trung tâm phụ còn lại, nhưng chỉ theo một chiều. Trung tâm đã phân bổ xong không nhận lại chi phí. Không có thứ tự bắt buộc. Một cách phổ biến là bắt đầu từ trung tâm phụ phục vụ các trung tâm phụ khác nhiều nhất. Cách này tương ứng với "phân bổ theo cấp bậc" trong Thông tư 53.
- **Phương pháp tương hỗ (reciprocal)**: ghi nhận đầy đủ dịch vụ qua lại, cho phép phân bổ ngược lại các trung tâm phụ. Cách này phải giải hệ phương trình, khó tính nhất nhưng chính xác nhất.

Thông tư 53 chỉ nêu hai phương án là trực tiếp và theo cấp bậc.

### Ví dụ giả định

Hai trung tâm phụ là Bảo trì (100 triệu) và IT (60 triệu). Hai trung tâm chính là Phân xưởng 1 (PX1) và Phân xưởng 2 (PX2). Tỷ lệ sử dụng dịch vụ:

| Bên cung cấp | Bảo trì | IT | PX1 | PX2 |
|---|---|---|---|---|
| Bảo trì (theo giờ bảo trì) | — | 20% | 50% | 30% |
| IT (theo số máy tính) | 20% | — | 40% | 40% |

**Phương pháp trực tiếp** bỏ phần phục vụ lẫn nhau, chia lại theo tỷ lệ giữa PX1 và PX2:

- Bảo trì 100 triệu chia theo 50:30, PX1 nhận 62,5 triệu và PX2 nhận 37,5 triệu.
- IT 60 triệu chia theo 40:40, mỗi phân xưởng nhận 30 triệu.
- Kết quả: PX1 nhận 92,5 triệu, PX2 nhận 67,5 triệu.

**Phương pháp bậc thang** bắt đầu từ Bảo trì, vì Bảo trì phục vụ IT 20 triệu (20% × 100), nhiều hơn phần IT phục vụ Bảo trì là 12 triệu (20% × 60):

<step-flow>
<svg viewBox="0 0 640 230" role="img" aria-labelledby="kt34s-t" style="width:100%;max-width:640px;height:auto;display:block;margin:1.25rem auto" font-family="ui-sans-serif, system-ui, sans-serif">
<title id="kt34s-t">Phân bổ bậc thang từ Bảo trì, rồi IT, sang hai phân xưởng</title>
<defs>
<marker id="kt34s-arrow" markerWidth="9" markerHeight="9" refX="8" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 z" fill="currentColor"/></marker>
</defs>
<g data-step="1">
<rect x="20" y="20" width="170" height="56" rx="10" fill="#f59e0b" fill-opacity="0.14" stroke="currentColor" stroke-opacity="0.22"/>
<text x="105" y="44" font-size="14" text-anchor="middle" fill="currentColor">Bảo trì</text>
<text x="105" y="64" font-size="13" text-anchor="middle" fill="currentColor">100 tr</text>
<rect x="235" y="20" width="170" height="56" rx="10" fill="#f59e0b" fill-opacity="0.14" stroke="currentColor" stroke-opacity="0.22"/>
<text x="320" y="44" font-size="14" text-anchor="middle" fill="currentColor">IT</text>
<text x="320" y="64" font-size="13" text-anchor="middle" fill="currentColor">60 tr</text>
</g>
<g data-step="2">
<line x1="190" y1="48" x2="232" y2="48" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" marker-end="url(#kt34s-arrow)"/>
<text x="211" y="40" font-size="12" text-anchor="middle" fill="currentColor">20</text>
<line x1="90" y1="76" x2="90" y2="148" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" marker-end="url(#kt34s-arrow)"/>
<text x="70" y="118" font-size="12" text-anchor="middle" fill="currentColor">50</text>
<line x1="150" y1="76" x2="455" y2="148" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" marker-end="url(#kt34s-arrow)"/>
<text x="250" y="118" font-size="12" text-anchor="middle" fill="currentColor">30</text>
</g>
<g data-step="3">
<text x="320" y="96" font-size="12" text-anchor="middle" fill="currentColor">IT còn 60 + 20 = 80 tr</text>
<line x1="300" y1="104" x2="160" y2="148" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" marker-end="url(#kt34s-arrow)"/>
<text x="215" y="140" font-size="12" text-anchor="middle" fill="currentColor">40</text>
<line x1="340" y1="104" x2="480" y2="148" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" marker-end="url(#kt34s-arrow)"/>
<text x="425" y="140" font-size="12" text-anchor="middle" fill="currentColor">40</text>
</g>
<g data-step="4">
<rect x="20" y="150" width="200" height="60" rx="10" fill="#10b981" fill-opacity="0.16" stroke="currentColor" stroke-opacity="0.22"/>
<text x="120" y="176" font-size="14" text-anchor="middle" fill="currentColor">PX1</text>
<text x="120" y="196" font-size="13" text-anchor="middle" fill="currentColor">50 + 40 = 90 tr</text>
<rect x="400" y="150" width="200" height="60" rx="10" fill="#10b981" fill-opacity="0.16" stroke="currentColor" stroke-opacity="0.22"/>
<text x="500" y="176" font-size="14" text-anchor="middle" fill="currentColor">PX2</text>
<text x="500" y="196" font-size="13" text-anchor="middle" fill="currentColor">30 + 40 = 70 tr</text>
</g>
</svg>
<step-note data-step="1">Chi phí đã tập hợp tại hai trung tâm phụ trước khi phân bổ.</step-note>
<step-note data-step="2">Bước 1: phân bổ toàn bộ 100 triệu của Bảo trì cho IT, PX1, PX2 theo 20%, 50%, 30%.</step-note>
<step-note data-step="3">Bước 2: IT giờ có 80 triệu, phân bổ cho PX1 và PX2 theo tỷ lệ 40:40. Phần 20% IT phục vụ Bảo trì bị bỏ qua vì Bảo trì đã phân bổ xong.</step-note>
<step-note data-step="4">Tổng chi phí nhận về hai phân xưởng vẫn là 160 triệu, chỉ khác cách chia giữa PX1 và PX2.</step-note>
</step-flow>

Phương pháp bậc thang cho PX1 90 triệu và PX2 70 triệu. Tổng vẫn là 160 triệu ở cả hai phương pháp, chỉ khác phần mỗi phân xưởng nhận. Kết quả này đi tiếp vào giá thành sản phẩm từng phân xưởng, nên chọn phương pháp nào ảnh hưởng tới giá vốn và tồn kho thành phẩm. Doanh nghiệp phải áp dụng nhất quán giữa các kỳ.

## Bút toán: phân bổ nào đi vào sổ, phân bổ nào chỉ là quản trị

### Phân bổ chi phí sản xuất chung vào giá thành: có bút toán

Phụ lục II TT99 (TK 627, mục phương pháp kế toán) hướng dẫn: cuối kỳ, căn cứ **Bảng phân bổ chi phí sản xuất chung**, kết chuyển hoặc phân bổ vào từng sản phẩm, nhóm sản phẩm, dịch vụ theo tiêu thức phù hợp:

- `Nợ TK 154 / Có TK 627`: phần chi phí sản xuất chung được tính vào giá thành.
- `Nợ TK 632 / Có TK 627`: phần chi phí sản xuất chung cố định không được phân bổ.

Quy tắc **công suất bình thường** (Phụ lục II TT99, TK 627 và TK 154):

- Chi phí sản xuất chung cố định được phân bổ vào chi phí chế biến mỗi đơn vị sản phẩm dựa trên công suất bình thường, tức số lượng sản phẩm đạt mức trung bình trong điều kiện sản xuất bình thường.
- Sản xuất thực tế cao hơn công suất bình thường: phân bổ theo chi phí thực tế phát sinh.
- Sản xuất thực tế thấp hơn công suất bình thường: chỉ phân bổ theo mức công suất bình thường. Phần còn lại ghi vào giá vốn hàng bán trong kỳ.
- Chi phí sản xuất chung biến đổi được phân bổ hết theo chi phí thực tế phát sinh.

> 💡 Ví dụ giả định: chi phí sản xuất chung cố định của PX1 là 90 triệu/tháng, công suất bình thường 10.000 sản phẩm. Tháng này PX1 làm được 8.000 sản phẩm. Mức phân bổ là 9.000 đồng/sản phẩm × 8.000 = 72 triệu vào TK 154. 18 triệu còn lại ghi `Nợ TK 632 / Có TK 627`. Nếu tháng sau làm được 11.000 sản phẩm thì phân bổ đủ 90 triệu vào TK 154.

Vì vậy TK 627 phải tách được phần cố định và phần biến đổi, đúng như TT99 yêu cầu. Hệ thống cũng phải lưu công suất bình thường theo phân xưởng. Luồng chi phí sản xuất chi tiết xem [[kt-27-chi-phi-san-xuat]], các phương án tính giá thành xem [[kt-28-gia-thanh]].

Thông tư 53 (Phần III, mục 1.2.1.a) còn nêu hai cách phân bổ chi phí sản xuất chung khi tính giá thành theo công việc:

- **Theo mức thực tế**: chênh lệch giữa số ước tính phân bổ và số thực tế được ghi tăng hoặc giảm giá vốn hàng bán nếu nhỏ. Nếu chênh lệch lớn thì chia cho chi phí dở dang, thành phẩm và giá vốn theo tỷ lệ số dư hoặc số luỹ kế của các tài khoản này.
- **Ước tính từ đầu kỳ**: ước tính chi phí sản xuất chung của từng công việc ngay từ đầu kỳ, cuối kỳ điều chỉnh chênh lệch với thực tế.

### Phân bổ chi phí bán hàng, quản lý cho kênh, thương hiệu: thường không có bút toán

Chi phí bán hàng (TK 641) và chi phí quản lý doanh nghiệp (TK 642) không được hạch toán vào TK 154 (Phụ lục II TT99, TK 154 điểm 1.e). Cuối kỳ, hai tài khoản này kết chuyển toàn bộ sang `Nợ TK 911 / Có TK 641, 642`. Trên BCTC chúng là chi phí thời kỳ, không chia cho sản phẩm hay kênh.

Muốn có lợi nhuận theo kênh hay thương hiệu sau khi đã trừ chi phí quản lý, việc phân bổ chỉ diễn ra trong báo cáo quản trị. Thông tư 53 (Phần II, mục 3.d) cho doanh nghiệp tự thiết kế chứng từ nội bộ như **Bảng tính phân bổ chi phí bán hàng, chi phí quản lý doanh nghiệp**. Về dữ liệu, có hai cách làm:

- Phân bổ trên chiều phân tích của chính dòng bút toán gốc. Ví dụ, mô hình phân bổ của Odoo chia một dòng chi phí theo tỷ lệ % cho nhiều analytic account ngay khi ghi nhận. Tài khoản Nợ/Có không đổi.
- Chạy phân bổ định kỳ ở tầng báo cáo, sinh ra số liệu quản trị riêng. Sổ cái không đổi.

> ⚠️ Nếu doanh nghiệp muốn ghi bút toán phân bổ nội bộ giữa các trung tâm trên sổ cái, ví dụ ghi giảm chi phí ở trung tâm phụ và ghi tăng ở trung tâm chính, thì cách làm đó phải nằm trong Quy chế hạch toán kế toán. Bút toán không được làm thay đổi chỉ tiêu BCTC (TT99 Điều 11 khoản 2). Cần xác nhận với kế toán trưởng khách hàng trước khi thiết kế.

## Dữ liệu cần để phân bổ tự động

Muốn hệ thống chạy phân bổ mỗi kỳ không cần bảng tính ngoài, một quy tắc phân bổ cần đủ các thành phần sau:

- **Nguồn**: nhóm tài khoản (ví dụ 627x, 642x) kết hợp trung tâm hoặc chiều phân tích nguồn, và kỳ áp dụng.
- **Đích**: danh sách đối tượng nhận (phân xưởng, sản phẩm, kênh), và tài khoản đích nếu có bút toán (TK 154, TK 632).
- **Tiêu thức**: tỷ lệ cố định khai báo sẵn, hoặc lượng thực tế trong kỳ lấy từ phân hệ khác (giờ công từ chấm công, giờ máy từ sản xuất, doanh thu từ bán hàng).
- **Thứ tự bước** nếu dùng phương pháp bậc thang. Quy tắc nào chạy trước, trung tâm nào đã phân bổ xong thì không nhận lại.
- **Tham số riêng**: công suất bình thường của từng phân xưởng, phân loại cố định/biến đổi của từng khoản chi phí sản xuất chung.
- **Bằng chứng**: bảng phân bổ lưu lại số liệu tiêu thức và kết quả. Đây là căn cứ của bút toán theo TT99, và là cơ sở để giải thích số liệu khi kiểm toán hỏi.

Tỷ lệ cố định khai báo sẵn là loại Odoo hỗ trợ qua *analytic distribution model*: điều kiện theo tiền tố tài khoản, đối tác, sản phẩm, công ty, và tỷ lệ % đi kèm.

> ⚠️ Cần xác nhận: phân bổ theo lượng tiêu thức thực tế trong kỳ (như giờ máy tháng này) và phân bổ bậc thang nhiều bước có phải là chức năng chuẩn của phần mềm đang triển khai hay không. Tài liệu Odoo 19 phần *Analytic accounting* chỉ mô tả mô hình chia theo tỷ lệ % cố định.

Phân bổ chi phí chờ phân bổ, công cụ dụng cụ theo thời gian (TK 242; TT200 gọi là chi phí trả trước) là một loại phân bổ khác, theo kỳ chứ không theo đối tượng. Xem [[kt-30-ccdc-tra-truoc-trich-truoc]]. Bút toán phân bổ cuối kỳ là một bước trong checklist khoá sổ ở [[kt-36-quy-trinh-khoa-so]].

## Nguồn

- Thông tư 53/2006/TT-BTC hướng dẫn áp dụng kế toán quản trị trong doanh nghiệp: Phần II mục 3; Phần III mục 1.1.1, 1.1.2, 1.1.3, 1.2.1, 6.3. Toàn văn tại VCCI: https://vanban.vcci.com.vn/thong-tu-532006tt-btc-cua-bo-tai-chinh-ve-viec-huong-dan-ap-dung-ke-toan-quan-tri-trong-doanh-nghiep
- Thông tư 99/2025/TT-BTC: Điều 11; Phụ lục II phần B, TK 154 (nguyên tắc 1.c, 1.đ, 1.e), TK 621 (1.c, 1.d), TK 627 (nguyên tắc 1.d, 1.đ, 1.e, 1.g; phương pháp kế toán điểm n), TK 641, TK 642. https://luatvietnam.vn/doanh-nghiep/thong-tu-99-2025-tt-btc-huong-dan-che-do-ke-toan-doanh-nghiep-tu-01-01-2026-417085-d1.html
- Học viện Ngân hàng, Đề cương chi tiết học phần Kế toán quản trị 1 (ACT47A, 2019): chương 2.3 "Các phương pháp tập hợp và phân bổ chi phí", chương 3 "Phân bổ chi phí chung"; giáo trình chính là Giáo trình Kế toán quản trị, ĐH Kinh tế Quốc dân (2014). https://hvnh.edu.vn/medias/acc/vi/05.2022/system/archivedate/4b17bddf_24.%202019%20DCCT%20-%20Ke%20toan%20quan%20tri%201%20ACT47A-ky.pdf
- David Christensen, Paul Schneider, "Allocating Service Department Costs with Excel", *Strategic Finance* (IMA), 05/2017: https://prod.sfmagazine.com/articles/2017/may/allocating-service-department-costs-with-excel
- Odoo 19.0 Documentation, Analytic accounting (mục Analytic distribution models): https://www.odoo.com/documentation/19.0/applications/finance/accounting/reporting/analytic_accounting.html
