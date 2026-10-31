# Tính giá thành: các phương án cần chốt với khách

Bài này giúp BA biết những quyết định nào về giá thành phải được khách hàng chốt trước khi cấu hình hệ thống sản xuất và kế toán: tính giá thành cho cái gì, theo kỳ nào, phân bổ sản xuất chung ra sao, đánh giá dở dang thế nào, và dùng giá thực tế hay giá định mức. Luồng bút toán nền tảng đã ở [[kt-27-chi-phi-san-xuat]].

## Vì sao giá thành là một tập lựa chọn

VAS 02 và TT99 quy định nguyên tắc (giá gốc, công suất bình thường, loại trừ chi phí vượt mức, tiêu thức phân bổ nhất quán) nhưng để doanh nghiệp tự chọn cách áp dụng. Các học phần kế toán chi phí dạy nhiều phương pháp đánh giá dở dang và tính giá thành; đề cương học phần Kế toán chi phí của Đại học Sao Đỏ chẳng hạn chia thành kế toán theo chi phí thực tế, theo chi phí định mức, thực tế kết hợp định mức, cùng các phương pháp đánh giá dở dang và tính giá thành cho quy trình công nghệ giản đơn và phức tạp.

Mỗi lựa chọn kéo theo yêu cầu dữ liệu và cấu hình khác nhau. Nếu không chốt sớm, hệ thống dễ được dựng theo mặc định của phần mềm rồi phải sửa khi kế toán đóng kỳ đầu tiên.

## Quyết định 1: Đối tượng tập hợp chi phí và đối tượng tính giá thành

Hai khái niệm này khác nhau:

- **Đối tượng tập hợp chi phí** là nơi chi phí được gom lại. TT99 cho chi tiết TK 154 theo địa điểm phát sinh (phân xưởng, bộ phận, đội), theo loại, nhóm sản phẩm hoặc chi tiết, bộ phận sản phẩm, theo dịch vụ hoặc công đoạn dịch vụ (TK 154 mục 1c). Sổ chi phí sản xuất, kinh doanh (S36-DN) mở theo từng đối tượng tập hợp chi phí.
- **Đối tượng tính giá thành** là thứ cần biết giá thành đơn vị. Thẻ tính giá thành sản phẩm, dịch vụ (S37-DN) theo dõi và tính giá thành sản xuất **từng loại sản phẩm, dịch vụ trong từng kỳ hạch toán** (TT99 Phụ lục III).

Một phân xưởng (đối tượng tập hợp) có thể làm ra nhiều sản phẩm (đối tượng tính giá thành). Khi đó chi phí phải được phân bổ từ phân xưởng xuống sản phẩm. Nếu một quy trình tạo ra nhiều loại sản phẩm mà chi phí chế biến từng loại không tách được, VAS 02 (đoạn 09) và TT99 (TK 627 mục 1e) yêu cầu phân bổ theo **tiêu thức phù hợp và nhất quán giữa các kỳ**. Tiêu thức phân bổ nguyên liệu, vật liệu là một nội dung TT99 (Phụ lục IV) liệt kê trong thuyết minh chính sách kế toán hàng tồn kho.

Câu hỏi cho khách:

- Giá thành cần cho từng mã sản phẩm, nhóm sản phẩm, từng đơn hàng, hay từng lô?
- Chi phí nào gắn thẳng được vào đối tượng tính giá thành (nguyên liệu theo lệnh sản xuất), chi phí nào phải phân bổ?
- Tiêu thức phân bổ là gì (giờ máy, giờ công, khối lượng, giá trị nguyên liệu...)?

Kỹ thuật phân bổ theo tiêu thức trong hệ thống được bàn ở [[kt-34-phan-bo-chi-phi]].

## Quyết định 2: Kỳ tính giá thành

Thẻ tính giá thành (S37-DN) tính theo từng kỳ hạch toán: giá thành = dở dang đầu kỳ + chi phí phát sinh − dở dang cuối kỳ. Kỳ dài hay ngắn quyết định giá thành thực tế có sớm hay muộn, và giá vốn trong kỳ có phải dùng giá tạm hay không.

Phần mềm sản xuất thường tính chi phí theo từng lệnh sản xuất ngay khi lệnh hoàn thành. Odoo 19 tính MO cost và real cost cho từng lệnh, và trường Cost của sản phẩm là chi phí sản xuất trung bình của mọi lệnh đã hoàn thành. Giá thành theo lệnh và giá thành theo kỳ có thể lệch nhau vì những chi phí chỉ biết vào cuối kỳ (khấu hao, điện, lương thực tế).

Câu hỏi cho khách: kỳ tính giá thành là tháng, quý hay theo đơn hàng? Giá trị nhập kho thành phẩm trong kỳ dùng giá tạm rồi điều chỉnh, hay chờ cuối kỳ mới ghi?

## Quyết định 3: Phân bổ chi phí sản xuất chung

VAS 02 (đoạn 08), TT99 (TK 154 mục 1đ, TK 627 mục 1đ):

- **Sản xuất chung biến đổi** (nguyên liệu gián tiếp, nhân công gián tiếp...) phân bổ hết vào chi phí chế biến theo chi phí thực tế.
- **Sản xuất chung cố định** (khấu hao, bảo dưỡng máy, nhà xưởng, quản lý hành chính phân xưởng...) phân bổ dựa trên **công suất bình thường** của máy móc.
  - Sản lượng thực tế cao hơn công suất bình thường: phân bổ theo chi phí thực tế phát sinh.
  - Sản lượng thực tế thấp hơn công suất bình thường: chỉ phân bổ theo mức công suất bình thường; phần không phân bổ ghi vào giá vốn hàng bán trong kỳ.

Ví dụ giả định: phân xưởng có công suất bình thường 10.000 sản phẩm/tháng, chi phí sản xuất chung cố định tháng 200 triệu đồng.

| | Tháng thấp điểm | Tháng cao điểm |
|---|---|---|
| Sản lượng thực tế | 8.000 | 12.000 |
| So với công suất bình thường | Thấp hơn | Cao hơn |
| Mức phân bổ | 200 triệu / 10.000 = 20.000 đ/sp | Theo thực tế: 200 triệu / 12.000 ≈ 16.667 đ/sp |
| Vào giá thành (TK 154) | 8.000 × 20.000 = 160 triệu | 200 triệu |
| Vào giá vốn ngay (TK 632) | 40 triệu | 0 |

Bút toán tháng thấp điểm: `Nợ TK 154 160.000.000`, `Nợ TK 632 40.000.000` / `Có TK 627 200.000.000` (TT99, TK 154 mục 6d; TK 627 mục 3n).

Hệ quả cho hệ thống:

- TK 627 phải tách được cố định và biến đổi ngay từ lúc ghi nhận (TK 627 mục 1đ), thường bằng tài khoản chi tiết hoặc một chiều phân tích.
- Công suất bình thường của từng phân xưởng là dữ liệu đầu vào; hệ thống cần chỗ lưu và cập nhật nó.
- Bước tính phần không phân bổ chạy cuối kỳ, trước khi tính giá thành.

> ⚠️ Cần xác nhận với khách hàng: con số công suất bình thường và đơn vị đo (sản phẩm, giờ máy) cho từng phân xưởng, ai phê duyệt và khi nào xem lại. VAS 02 chỉ định nghĩa công suất bình thường là sản lượng trung bình trong điều kiện sản xuất bình thường.

## Quyết định 4: Đánh giá sản phẩm dở dang

Chi phí dở dang cuối kỳ trên Thẻ tính giá thành lấy từ **biên bản kiểm kê và đánh giá sản phẩm dở dang** (TT99 Phụ lục III, hướng dẫn S37-DN). Sản phẩm dở dang theo VAS 02 (đoạn 03) gồm sản phẩm chưa hoàn thành và sản phẩm hoàn thành chưa làm thủ tục nhập kho.

Các phương pháp đánh giá dở dang được đề cương Kế toán chi phí (Đại học Sao Đỏ) liệt kê:

- Theo chi phí nguyên vật liệu chính.
- Theo chi phí nguyên vật liệu trực tiếp.
- Theo phương pháp ước lượng sản phẩm hoàn thành tương đương.
- Theo chi phí kế hoạch (định mức).

Với BA, điểm cần nắm là mỗi phương pháp đòi dữ liệu khác nhau: chỉ cần số lượng dở dang và chi phí nguyên vật liệu, hay cần thêm mức độ hoàn thành của từng công đoạn, hay cần định mức chi phí. Công thức chi tiết là việc của kế toán; BA cần biết dữ liệu nào hệ thống phải thu ở xưởng (số lượng dở dang theo công đoạn, tỷ lệ hoàn thành) và vào thời điểm nào.

> 📌 Odoo 19 có bút toán WIP thủ công cho lệnh sản xuất kéo dài: ghi nhận chi phí thực tế đã phát sinh (nguyên liệu đã tiêu hao, thời gian work order đã làm) vào WIP Account tại thời điểm ghi, và phải đảo lại sau đó. Đây là cách phản ánh giá trị dở dang lên bảng cân đối, không phải một trong các phương pháp đánh giá dở dang nêu trên.

> ⚠️ Cần xác nhận: tài liệu đã đọc chỉ liệt kê tên các phương pháp đánh giá dở dang, không có công thức. Khi cấu hình, cần lấy công thức và ví dụ tính từ kế toán giá thành của khách hoặc giáo trình kế toán chi phí.

## Quyết định 5: Phương pháp tính giá thành

Đề cương Kế toán chi phí (Đại học Sao Đỏ) liệt kê các phương pháp: trực tiếp (giản đơn), loại trừ giá trị sản phẩm phụ, hệ số, tỷ lệ, theo đơn đặt hàng; và phân biệt phương pháp cho doanh nghiệp có quy trình công nghệ giản đơn với quy trình công nghệ phức tạp.

Từ góc nhìn hệ thống, câu hỏi để chọn:

| Đặc điểm sản xuất | Hướng phương pháp | Dữ liệu hệ thống cần |
|---|---|---|
| Một loại sản phẩm, quy trình đơn giản | Trực tiếp (giản đơn) | Tổng chi phí theo phân xưởng, sản lượng hoàn thành, dở dang |
| Một quy trình ra sản phẩm chính và sản phẩm phụ | Loại trừ giá trị sản phẩm phụ | Số lượng sản phẩm phụ, giá trị thuần có thể thực hiện được của nó |
| Một quy trình ra nhiều loại sản phẩm | Hệ số, tỷ lệ | Tiêu thức quy đổi hoặc tỷ lệ giữa các sản phẩm |
| Sản xuất theo đơn hàng của khách | Theo đơn đặt hàng | Mã đơn hàng trên mọi chứng từ chi phí |
| Nhiều công đoạn nối tiếp | Phương pháp cho quy trình phức tạp | Chi phí và sản lượng theo từng công đoạn, bán thành phẩm |

> ⚠️ Cần xác nhận: cột "Hướng phương pháp" là gợi ý dựa trên tên các phương pháp trong đề cương, trừ dòng sản phẩm phụ có căn cứ ở VAS 02 đoạn 09. Phương pháp cụ thể và công thức cần kế toán giá thành của khách xác nhận.

Về sản phẩm phụ, VAS 02 (đoạn 09) quy định giá trị sản phẩm phụ tính theo giá trị thuần có thể thực hiện được và được trừ khỏi chi phí chế biến đã tập hợp chung cho sản phẩm chính. Odoo 19 cho khai báo by-product trên định mức (BoM) để theo dõi số lượng sản phẩm phụ tạo ra khi hoàn thành lệnh sản xuất.

Với doanh nghiệp làm theo đơn hàng, VAS 02 (đoạn 10) còn cho phép tính vào giá gốc thành phẩm các chi phí liên quan trực tiếp khác, ví dụ chi phí thiết kế sản phẩm cho một đơn đặt hàng cụ thể.

Doanh nghiệp có hoạt động sản xuất phụ (phục vụ sản xuất chính) cũng tập hợp chi phí hoạt động đó trên TK 154 (TT99, TK 154 mục 1b).

## Quyết định 6: Giá thực tế hay giá định mức

Ba cách tiếp cận theo đề cương Kế toán chi phí: theo chi phí thực tế, theo chi phí định mức, và thực tế kết hợp định mức. Trong TT99, có hai cơ chế liên quan:

- **Phương pháp chi phí chuẩn** là một phương pháp tính giá trị hàng tồn kho, có thể áp dụng cho doanh nghiệp sản xuất, tính theo mức sử dụng bình thường của nguyên vật liệu, công cụ, nhân công, hiệu quả và hiệu suất sử dụng chi phí; các yếu tố này phải thường xuyên được xem xét lại và điều chỉnh theo điều kiện hiện tại (TT99, nguyên tắc kế toán hàng tồn kho, điểm 9đ).
- **Giá tạm tính**: doanh nghiệp có thể ghi sổ chi tiết nhập, xuất thành phẩm hằng ngày theo giá tạm tính (giá thành kế hoạch, giá thành định mức, giá nhập kho thống nhất...). Cuối kỳ phải tính giá thành thực tế và hệ số chênh lệch giữa giá thực tế và giá tạm tính (tính cả chênh lệch của tồn đầu kỳ) để xác định giá thực tế của thành phẩm nhập, xuất trong kỳ (TT99, TK 155 mục 1e). Công thức hệ số ở [[kt-23-dinh-gia-ton-kho]].

Điểm khác nhau quan trọng: với giá tạm tính, số cuối cùng trên sổ vẫn là giá thực tế; với chi phí chuẩn, giá chuẩn là cơ sở định giá nhưng phải được rà soát để gần với thực tế.

Odoo 19 có các điểm tương ứng:

- **MO cost và real cost**: MO cost là chi phí ước tính theo định mức (BoM: nguyên liệu, công đoạn, đơn giá work center), real cost là chi phí thực tế (lượng nguyên liệu dùng thật, thời gian thực, đơn giá giờ của nhân viên). Trang Overview của lệnh sản xuất hiển thị hai cột cạnh nhau, chênh lệch lớn được tô màu.
- **Compute Price from BoM**: đặt lại cost của sản phẩm về chi phí dự kiến theo BoM; tài liệu lưu ý giá này không cố định vĩnh viễn.
- **Standard Price**: phương pháp tính giá cố định, cập nhật thủ công; khi dùng Perpetual có thể đặt Price Difference Account cho nhóm sản phẩm để ghi chênh lệch giữa giá chuẩn và giá mua thực tế.

> ⚠️ Cần xác nhận: TT99 không hướng dẫn bút toán riêng cho chênh lệch giữa chi phí chuẩn và chi phí thực tế của sản phẩm sản xuất. Doanh nghiệp chọn chi phí chuẩn cần chốt với kế toán trưởng chênh lệch này được phân bổ vào tồn kho và giá vốn hay ghi thẳng giá vốn, và tần suất xem lại giá chuẩn.

## Bảng tổng hợp các phương án cần chốt

| Quyết định | Phương án thường gặp | Ảnh hưởng tới hệ thống |
|---|---|---|
| Đối tượng tập hợp chi phí | Phân xưởng; sản phẩm; lệnh sản xuất; đơn hàng | Cấu trúc chi tiết TK 154, 621, 622, 627 và chiều phân tích |
| Đối tượng tính giá thành | Mã sản phẩm; nhóm; lô; đơn hàng | Thẻ tính giá thành S37-DN, báo cáo giá thành |
| Kỳ tính giá thành | Tháng; quý; theo đơn hàng | Lịch khoá sổ, nhu cầu giá tạm tính |
| Tiêu thức phân bổ | Giờ máy; giờ công; nguyên liệu; sản lượng | Dữ liệu từ xưởng, nhất quán giữa các kỳ, thuyết minh |
| Sản xuất chung cố định | Công suất bình thường từng phân xưởng | Tách 627 cố định/biến đổi, bút toán phần không phân bổ vào 632 |
| Đánh giá dở dang | Nguyên vật liệu chính; nguyên vật liệu trực tiếp; hoàn thành tương đương; định mức | Số lượng dở dang, mức độ hoàn thành, định mức |
| Phương pháp tính giá thành | Trực tiếp; loại trừ sản phẩm phụ; hệ số; tỷ lệ; đơn đặt hàng; quy trình phức tạp | Dữ liệu sản phẩm phụ, hệ số, mã đơn hàng, công đoạn |
| Giá thực tế hay định mức | Thực tế; giá tạm tính rồi điều chỉnh; chi phí chuẩn | Bước tính hệ số chênh lệch, xử lý chênh lệch chuẩn – thực tế |

## Ảnh hưởng lên báo cáo

- Giá thành quyết định giá trị thành phẩm, dở dang trong Hàng tồn kho (TK 154, 155) và giá vốn hàng bán khi bán.
- Phần sản xuất chung cố định không phân bổ và chi phí vượt mức bình thường làm tăng giá vốn ngay trong kỳ, kể cả khi sản phẩm chưa bán (TT99, TK 632 mục 1đ).
- Tiêu thức phân bổ phải nhất quán giữa các kỳ (VAS 02 đoạn 09), và phương pháp tính giá trị hàng tồn kho chỉ được đổi khi thay đổi chính sách kế toán (TT99, nguyên tắc kế toán hàng tồn kho, điểm 9). Xem [[kt-05-chinh-sach-quy-che]].

## Nguồn

- Chuẩn mực kế toán Việt Nam số 02 – Hàng tồn kho (Quyết định 149/2001/QĐ-BTC), đoạn 03, 07–10. Bản toàn văn: https://cdn.thuvienphapluat.vn//uploads/Hoidapphapluat/2024/TTTT/240912/vas2.doc
- Thông tư 99/2025/TT-BTC, Phụ lục II: nguyên tắc kế toán hàng tồn kho (điểm 9, 9đ); TK 154 (mục 1b, 1c, 1đ, 6d); TK 155 (mục 1e); TK 627 (mục 1đ, 1e, 3n); TK 632 (mục 1đ); Phụ lục III: hướng dẫn Sổ chi phí sản xuất, kinh doanh (S36-DN) và Thẻ tính giá thành sản phẩm, dịch vụ (S37-DN); Phụ lục IV: thuyết minh tiêu thức phân bổ nguyên liệu, vật liệu. Bản toàn văn dạng Word: https://chedo.ketoanthue.net/tai-ve/thong-tu-99-2025-tt-btc-che-do-ke-toan-doanh-nghiep.docx
- Học viện Ngân hàng, Đề cương chi tiết học phần Kế toán tài chính 1 (ACT02A), 2019, Chương 3, mục 3.3 "Kế toán giá thành và thành phẩm": https://hvnh.edu.vn/medias/acc/vi/05.2022/system/archivedate/795b99b6_25.%202019%20DCCT%20-%20KTTC%201%20ACT02A%20-%20ky.pdf
- Trường Đại học Sao Đỏ, Đề cương chi tiết học phần Kế toán chi phí (chuẩn đầu ra CĐR1.2–1.4; Chương 3 Đánh giá sản phẩm dở dang; Chương 4 Tính giá thành sản phẩm): https://saodo.edu.vn/uploads/about/ctdt2016-kt/ktoan348.pdf
- Odoo 19 Documentation, Manufacturing order costs: https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/manufacturing/basic_setup/mo_costs.html
- Odoo 19 Documentation, Work-in-progress costs: https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/manufacturing/basic_setup/work_in_progress.html
- Odoo 19 Documentation, By-Products: https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/manufacturing/workflows/byproducts.html
- Odoo 19 Documentation, Accounting – Inventory valuation (mục Price Difference Account): https://www.odoo.com/documentation/19.0/applications/finance/accounting/get_started/inventory_valuation.html
