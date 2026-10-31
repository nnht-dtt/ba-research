# Các điều chỉnh VAS sang IFRS thường gặp và dữ liệu hệ thống cần có

Bài này đi qua sáu nhóm điều chỉnh hay gặp khi một pháp nhân ghi sổ theo VAS nhưng phải báo cáo số IFRS cho tập đoàn: IFRS 16, IFRS 15, IFRS 9, IAS 16, IAS 37 và IAS 12. Với mỗi nhóm, bài nêu VAS làm gì, IFRS yêu cầu gì, điều chỉnh ảnh hưởng báo cáo ra sao và hệ thống phải giữ dữ liệu gì để tính được điều chỉnh.

## Điều chỉnh là gì và ghi ở đâu

Có hai tình huống:

1. **Lần đầu chuyển sang IFRS.** IFRS 1 yêu cầu lập báo cáo tình hình tài chính đầu kỳ theo IFRS tại "ngày chuyển đổi", là ngày đầu tiên của năm sớm nhất có số so sánh trình bày theo IFRS. Theo Deloitte Việt Nam, các điều chỉnh từ VAS sang IFRS tại ngày này thường ghi vào lợi nhuận giữ lại, trừ khi có tài khoản khác được chỉ định. Nguyên tắc chung là áp dụng hồi tố mọi IFRS có hiệu lực, kèm một số miễn trừ tự chọn và ngoại lệ bắt buộc.
2. **Hằng kỳ sau đó.** Nếu pháp nhân vẫn ghi sổ theo VAS (vì phải nộp BCTC theo VAS), mỗi kỳ báo cáo cho tập đoàn lại phải tính các khoản chênh lệch phát sinh trong kỳ. Cách tổ chức sổ cho việc này nằm ở [[ktqt-10-kien-truc-so-hai-chuan]].

Trong cả hai trường hợp, IFRS 1 yêu cầu đối chiếu vốn chủ sở hữu và lợi nhuận giữa chuẩn cũ và IFRS (xem [[ktqt-12-bao-cao-cho-tap-doan]]). Thông tư 118/2026/TT-BTC cũng yêu cầu doanh nghiệp chuyển từ chế độ kế toán hiện hành sang chuẩn mực quốc tế trình bày thông tin so sánh và thuyết minh theo IFRS 1.

> 📌 Các bút toán điều chỉnh dưới đây ghi bằng tên khoản mục IFRS (ví dụ "Tài sản quyền sử dụng"), không phải số hiệu TT99, vì Phụ lục II TT99 không có tài khoản tương ứng cho các khoản mục này. Chúng nằm ở sổ hoặc bảng điều chỉnh IFRS, không nằm trong sổ VAS.

## IFRS 16 – Thuê tài sản

### VAS và IFRS khác nhau thế nào

- VAS 6: bên thuê phân loại thuê tài chính hay thuê hoạt động theo mức chuyển giao rủi ro và lợi ích. Thuê hoạt động chỉ ghi tiền thuê từng kỳ vào chi phí. Thuê tài chính ghi tài sản và nợ thuê tài chính (TK 212, TK 3412 theo TT99).
- IFRS 16: bên thuê dùng một mô hình duy nhất. Với hợp đồng trên 12 tháng (trừ tài sản giá trị thấp), bên thuê ghi tài sản quyền sử dụng (right-of-use, ROU) và nợ thuê. Nợ thuê đo bằng giá trị hiện tại của các khoản thanh toán tiền thuê; tài sản quyền sử dụng bằng nợ thuê cộng chi phí trực tiếp ban đầu, chi phí tháo dỡ ước tính, các khoản trả trước ngày bắt đầu, trừ ưu đãi thuê. Sau đó tài sản được khấu hao, nợ thuê tính lãi vào chi phí tài chính.
- Bên cho thuê theo IFRS 16 vẫn phân loại thuê tài chính và thuê hoạt động, nên điều chỉnh chủ yếu ở phía bên thuê.

### Ảnh hưởng báo cáo

Tài sản và nợ phải trả cùng tăng; chi phí thuê trên báo cáo kết quả được thay bằng khấu hao và lãi. Deloitte lưu ý các chỉ số như ROCE, ROI, thanh khoản và các điều kiện trong hợp đồng vay (covenant) có thể thay đổi.

### Ví dụ giả định

Pháp nhân thuê kho 3 năm, trả 100 triệu đồng vào cuối mỗi năm, lãi suất chiết khấu giả định 8%/năm, không có chi phí trực tiếp ban đầu. Theo VAS, đây là thuê hoạt động: cuối mỗi năm ghi chi phí thuê 100 triệu.

- Giá trị hiện tại của 3 khoản 100 triệu: 92,59 + 85,73 + 79,38 = 257,71 triệu.
- Ngày bắt đầu thuê, sổ IFRS: Nợ Tài sản quyền sử dụng 257,71 / Có Nợ thuê phải trả 257,71.
- Cuối năm 1:
  - Khấu hao đường thẳng 3 năm: Nợ Chi phí khấu hao 85,90 / Có Hao mòn tài sản quyền sử dụng 85,90.
  - Lãi: 257,71 × 8% = 20,62. Nợ Chi phí lãi 20,62 / Có Nợ thuê phải trả 20,62.
  - Khoản trả 100 triệu: VAS đã ghi vào chi phí thuê, IFRS coi là trả nợ thuê. Điều chỉnh: Nợ Nợ thuê phải trả 100 / Có Chi phí thuê 100.
- Chi phí năm 1 theo IFRS: 85,90 + 20,62 = 106,52 triệu, cao hơn VAS 6,52 triệu. Tổng chi phí 3 năm hai bên bằng nhau (300 triệu), chỉ phân bổ khác: IFRS cao hơn ở năm đầu vì lãi tính trên dư nợ lớn.

### Dữ liệu hệ thống cần có

- Danh mục hợp đồng thuê: tài sản, ngày bắt đầu, thời hạn thuê, quyền gia hạn hoặc chấm dứt, lịch thanh toán.
- Lãi suất chiết khấu cho từng hợp đồng. Deloitte mô tả lãi suất đi vay biên của bên thuê là lãi suất phải trả để vay một khoản tương đương giá trị tài sản, cùng kỳ hạn, cùng mức đảm bảo, trong môi trường kinh tế tương tự; có thể lấy lãi suất từ tập đoàn hoặc công ty mẹ làm cơ sở rồi điều chỉnh theo đặc điểm thị trường Việt Nam và tài sản.
- Chi phí trực tiếp ban đầu, ưu đãi thuê, chi phí tháo dỡ ước tính.
- Lịch sử sửa đổi hợp đồng (IFRS 16 yêu cầu đánh giá thay đổi có tạo thành hợp đồng thuê riêng hay không).
- Cờ miễn trừ: thuê ngắn hạn 12 tháng trở xuống không có quyền mua, hoặc tài sản giá trị thấp.

## IFRS 15 – Doanh thu từ hợp đồng với khách hàng

### VAS và IFRS khác nhau thế nào

- VAS 14 đặt điều kiện ghi nhận riêng cho từng loại doanh thu: bán hàng khi chuyển giao phần lớn rủi ro và lợi ích; dịch vụ theo phần công việc hoàn thành; lãi, bản quyền, cổ tức theo cơ sở riêng.
- IFRS 15 dùng một mô hình 5 bước cho mọi hợp đồng với khách hàng: (1) xác định hợp đồng, (2) xác định nghĩa vụ thực hiện, (3) xác định giá giao dịch, (4) phân bổ giá giao dịch cho từng nghĩa vụ theo giá bán riêng lẻ tương đối, (5) ghi nhận doanh thu khi (hoặc trong khi) nghĩa vụ được thực hiện. Thời điểm ghi nhận là khi khách hàng có quyền kiểm soát hàng hoá, dịch vụ.
- Theo KPMG, TT99 đã đưa một số nội dung theo tinh thần IFRS 15: phân bổ doanh thu cho hàng khuyến mại đi kèm (trừ khi giá hàng chính không đổi dù khách có nhận khuyến mại hay không, khi đó giá vốn hàng khuyến mại ghi vào chi phí bán hàng), hoãn một phần doanh thu cho chương trình khách hàng thân thiết, giá trị biến đổi trong hợp đồng xây dựng. Phần còn lại, số tiền và thời điểm ghi nhận doanh thu có thể khác đáng kể giữa VAS và IFRS.

Deloitte nêu ví dụ phần mềm: giấy phép sử dụng và dịch vụ hỗ trợ sau bán thường bán chung. Theo IFRS 15, giấy phép là nghĩa vụ ghi nhận tại một thời điểm, dịch vụ hỗ trợ ghi nhận theo thời gian, nên phải tách giá giao dịch cho từng nghĩa vụ.

### Dữ liệu hệ thống cần có

- Cấu trúc hợp đồng gồm nhiều dòng nghĩa vụ thực hiện, mỗi dòng có giá bán riêng lẻ để phân bổ.
- Cách thực hiện từng nghĩa vụ: tại một thời điểm hay theo thời gian, và thước đo tiến độ nếu theo thời gian.
- Các yếu tố giá biến đổi (chiết khấu theo sản lượng, quyền trả lại hàng), bảo hành, vai trò đại lý hay bên chính, phí trả trước không hoàn lại, bán kèm quyền chọn mua thêm. Đây là các mục hướng dẫn cụ thể của IFRS 15 mà Deloitte liệt kê là VAS không đề cập.
- Liên hệ với các bài VAS: [[kt-17-quy-trinh-ban-hang]], [[kt-20-khuyen-mai-voucher-combo]].

## IFRS 9 – Công cụ tài chính

### VAS và IFRS khác nhau thế nào

- VAS không có chuẩn mực tương đương IFRS 9. Thông tư 210/2009 về trình bày, thuyết minh công cụ tài chính không còn bắt buộc từ năm tài chính 2015 cho tới khi có VAS về công cụ tài chính (KPMG).
- IFRS 9 ghi nhận công cụ tài chính khi doanh nghiệp trở thành một bên của hợp đồng, đo ban đầu theo giá trị hợp lý (cộng hoặc trừ chi phí giao dịch nếu không đo theo giá trị hợp lý qua lãi lỗ). Tài sản tài chính sau đó phân loại vào giá phân bổ, giá trị hợp lý qua thu nhập toàn diện khác (FVOCI) hoặc qua lãi lỗ (FVTPL), dựa trên mô hình kinh doanh và đặc điểm dòng tiền hợp đồng (chỉ gồm gốc và lãi, SPPI). Phái sinh đo theo giá trị hợp lý.
- Tổn thất: IFRS 9 dùng tổn thất tín dụng dự kiến (ECL), 12 tháng hoặc toàn thời hạn tuỳ rủi ro tín dụng có tăng đáng kể kể từ ghi nhận ban đầu. TT99 cho trích dự phòng nợ phải thu khó đòi theo tỷ lệ ứng với thời gian quá hạn theo Thông tư 48/2019 (với doanh nghiệp thông thường: quá hạn 6 tháng–1 năm 30%, 1–2 năm 50%, 2–3 năm 70%, trên 3 năm 100%), hoặc phương pháp khác nếu có bằng chứng tin cậy phù hợp hơn. Quyết định 1760/QĐ-BTC công bố Thông tư 48/2019 (và Thông tư 45/2013 về ngưỡng TSCĐ) tiếp tục có hiệu lực nhưng không quá 31/12/2026, nên bảng tỷ lệ này cần kiểm tra lại cho năm 2027.

### Ảnh hưởng báo cáo

Với pháp nhân thương mại thông thường, điều chỉnh hay gặp nhất là dự phòng phải thu: ECL có thể ghi nhận tổn thất cho cả khoản chưa quá hạn, trong khi bảng tỷ lệ theo Thông tư 48 bắt đầu từ khoản quá hạn 6 tháng. Khoản cho vay nội bộ, đầu tư, phái sinh (nếu có) cũng có thể phải đo lại.

### Dữ liệu hệ thống cần có

- Tuổi nợ chi tiết theo từng khoản phải thu (đã có khi làm dự phòng theo VAS, xem [[kt-21-cong-no-phai-thu]]) và lịch sử thu hồi, lịch sử mất khả năng thanh toán để xây dựng tỷ lệ tổn thất.
- Thông tin để phân loại tài sản tài chính: mục đích nắm giữ, điều khoản dòng tiền hợp đồng.
- Giá trị hợp lý tại ngày báo cáo cho khoản đo theo giá trị hợp lý.
- Deloitte khuyến nghị doanh nghiệp chủ động xây dựng giả định và dữ liệu lịch sử càng sớm càng tốt cho các mô hình theo IFRS 13, IFRS 9, IAS 36.

## IAS 16 – Bất động sản, nhà xưởng và thiết bị

### VAS và IFRS khác nhau thế nào

| Nội dung | VAS 3 / TT99 | IAS 16 |
|---|---|---|
| Ngưỡng ghi nhận TSCĐ | Từ 30 triệu đồng (Thông tư 45/2013); dưới ngưỡng ghi là công cụ dụng cụ, chi phí chờ phân bổ (TK 242; TT200 gọi là chi phí trả trước) | Không đặt ngưỡng; doanh nghiệp tự đặt trong chính sách kế toán |
| Khấu hao theo bộ phận | Hướng dẫn hạn chế, có thừa nhận khái niệm bộ phận | Bộ phận chính của tài sản khấu hao riêng, có thể khác thời gian sử dụng |
| Đo lường sau ghi nhận ban đầu | Chỉ giá gốc | Chọn giá gốc hoặc đánh giá lại cho từng loại tài sản |
| Rà soát ước tính | VAS 3 chỉ nhắc rà soát thời gian sử dụng và phương pháp khấu hao | Giá trị còn lại và thời gian sử dụng rà soát ít nhất mỗi cuối năm tài chính; thay đổi áp dụng phi hồi tố theo IAS 8 |
| Sửa chữa | Sửa chữa thường xuyên ghi chi phí; sửa chữa định kỳ có thể phân bổ | Chi phí bảo dưỡng hằng ngày ghi vào lãi lỗ khi phát sinh |

Theo mô hình đánh giá lại, phần tăng ghi vào thu nhập toàn diện khác và tích luỹ trong "thặng dư đánh giá lại" thuộc vốn chủ (trừ khi đảo ngược một khoản giảm đã ghi chi phí trước đó); phần giảm ghi chi phí khi vượt số thặng dư đã có của chính tài sản đó.

Ví dụ của Deloitte: doanh nghiệp kho vận có nhiều máy quét mã vạch dưới ngưỡng 30 triệu, theo VAS ghi vào chi phí chờ phân bổ (TK 242) và phân bổ tối đa 3 năm; theo IAS 16 có thể ghi nhận là thiết bị và khấu hao theo thời gian sử dụng dài hơn.

### Dữ liệu hệ thống cần có

- Sổ tài sản có thể tách tài sản thành bộ phận, mỗi bộ phận có thời gian sử dụng và giá trị còn lại riêng.
- Hai bộ tham số khấu hao (VAS và IFRS) nếu thời gian sử dụng hoặc phương pháp khác nhau.
- Danh mục công cụ dụng cụ, chi phí chờ phân bổ (TK 242) có tính chất tài sản dài hạn (để xét vốn hoá theo IFRS); Deloitte lưu ý cần kiểm kê để xác nhận sự tồn tại và số lượng.
- Nếu chọn mô hình đánh giá lại: giá trị hợp lý theo kỳ (ví dụ từ dịch vụ định giá).
- Liên hệ: [[kt-29-vong-doi-tscd]], [[kt-30-ccdc-tra-truoc-trich-truoc]].

## IAS 37 – Dự phòng, nợ tiềm tàng và tài sản tiềm tàng

### VAS và IFRS khác nhau thế nào

Deloitte đánh giá IAS 37 và VAS 18 có nhiều điểm tương đồng về ghi nhận, đo lường, trình bày. Các khác biệt cần chú ý:

- **Chi phí tháo dỡ, khôi phục mặt bằng.** IAS 16.16 cho vốn hoá ước tính ban đầu vào nguyên giá tài sản (và ghi dự phòng tương ứng theo IAS 37). TT99 yêu cầu dự phòng chi phí hoàn nguyên môi trường, dọn dẹp, trả lại mặt bằng ghi vào chi phí (KPMG). Vì vậy theo IFRS, chi phí đi qua khấu hao trong suốt thời gian dùng tài sản; theo VAS, chi phí ghi nhận theo dự phòng.
- **Hợp đồng có rủi ro lỗ (onerous contract).** IAS 37 yêu cầu ghi dự phòng cho hợp đồng mà chi phí thực hiện vượt lợi ích; sửa đổi năm 2020 (hiệu lực từ 01/01/2022) làm rõ "chi phí thực hiện hợp đồng" gồm chi phí tăng thêm trực tiếp và phân bổ chi phí khác liên quan trực tiếp (ví dụ khấu hao thiết bị dùng cho hợp đồng). Deloitte ghi VAS không đề cập hợp đồng chưa thực hiện.
- **Ngưỡng ghi nhận.** Khi không rõ có nghĩa vụ hiện tại hay không, IAS 37 coi là có nếu "nhiều khả năng xảy ra hơn là không" (more likely than not); ngưỡng của VAS 18 có thể khác.
- **Đo lường.** IAS 37 đo dự phòng ở số tiền doanh nghiệp sẽ trả một cách hợp lý để tất toán hoặc chuyển giao nghĩa vụ, chiết khấu về giá trị hiện tại.

### Dữ liệu hệ thống cần có

- Danh mục nghĩa vụ hoàn nguyên gắn với tài sản: ước tính chi phí, thời điểm dự kiến, lãi suất chiết khấu.
- Danh sách hợp đồng bán đang thực hiện kèm dự toán chi phí còn lại để đánh giá rủi ro lỗ.
- Hồ sơ vụ kiện, bảo hành, cam kết, để phân loại dự phòng hay nợ tiềm tàng (chỉ thuyết minh).

## IAS 12 – Thuế thu nhập doanh nghiệp

### VAS và IFRS khác nhau thế nào

IAS 12 chủ yếu xử lý thuế hoãn lại theo phương pháp dựa trên bảng cân đối: chênh lệch giữa giá trị ghi sổ và cơ sở tính thuế của tài sản, nợ phải trả (cùng lỗ và ưu đãi thuế chưa sử dụng) được ghi nhận là thuế hoãn lại phải trả hoặc tài sản thuế hoãn lại, với tài sản thuế hoãn lại phải qua phép thử "có khả năng có lợi nhuận tính thuế". Deloitte so sánh với VAS 17 và liệt kê các khác biệt:

- Lỗ tính thuế được chuyển ngược về kỳ trước theo IAS 12 (nếu luật thuế cho phép) được ghi nhận là tài sản; VAS không có khái niệm chuyển lỗ ngược.
- IAS 12 có ba ngoại lệ không ghi thuế hoãn lại phải trả (ghi nhận ban đầu lợi thế thương mại; ghi nhận ban đầu tài sản, nợ ngoài hợp nhất kinh doanh không ảnh hưởng lợi nhuận kế toán và thu nhập chịu thuế; khoản đầu tư vào công ty con, chi nhánh, liên kết khi kiểm soát được thời điểm hoàn nhập). VAS chỉ có ngoại lệ thứ hai.
- Ngoại lệ ghi nhận ban đầu đã bị IASB thu hẹp bằng sửa đổi IAS 12 tháng 5/2021 (*Deferred Tax related to Assets and Liabilities arising from a Single Transaction*, hiệu lực cho kỳ năm bắt đầu từ 01/01/2023): giao dịch tạo ra chênh lệch tạm thời chịu thuế và được khấu trừ bằng nhau, như hợp đồng thuê hay nghĩa vụ hoàn nguyên, không được hưởng ngoại lệ, nên phải ghi thuế hoãn lại. Vì vậy với điều chỉnh IFRS 16 và chi phí hoàn nguyên ở trên, ngoại lệ này không áp dụng.
- VAS không hướng dẫn đo thuế hoãn lại khi có nhiều mức thuế suất, thuế phát sinh từ hợp nhất kinh doanh, ảnh hưởng thuế của cổ tức.

### Vì sao IAS 12 đi kèm mọi điều chỉnh khác

Thuế TNDN phải nộp vẫn tính theo pháp luật thuế, không theo IFRS (Quyết định 345 và Điều 1 TT99 đều tách nghĩa vụ thuế khỏi kế toán). Vì vậy mỗi điều chỉnh IFRS làm giá trị ghi sổ IFRS của một tài sản hoặc nợ khác đi, trong khi cơ sở tính thuế không đổi, có thể tạo chênh lệch tạm thời mới. Trong ví dụ IFRS 16 ở trên, tài sản quyền sử dụng và nợ thuê chỉ có trên sổ IFRS.

Bước làm Deloitte nêu: liệt kê các chênh lệch tạm thời trong năm, nhân với thuế suất để ra điều chỉnh tài khoản thuế hoãn lại, cộng với số dư đầu kỳ để ra số dư cuối kỳ. Thuế hoãn lại ghi vào lãi lỗ, trừ khi giao dịch gốc ghi ngoài lãi lỗ (thu nhập toàn diện khác hoặc vốn chủ) hoặc phát sinh từ hợp nhất kinh doanh.

> ⚠️ Cần xác nhận: các quy tắc khấu trừ thuế cụ thể cho từng khoản (ví dụ chi phí thuê, dự phòng) để xác định cơ sở tính thuế. Bài không đi vào pháp luật thuế; xem [[kt-37-thue-tndn]] và hỏi chuyên gia thuế của dự án.

### Dữ liệu hệ thống cần có

- Cơ sở tính thuế của từng tài sản, nợ phải trả có điều chỉnh IFRS.
- Thuế suất áp dụng theo kỳ dự kiến hoàn nhập.
- Lỗ tính thuế chưa sử dụng và thời hạn chuyển lỗ.

## Tổng hợp dữ liệu theo điều chỉnh

| Điều chỉnh | Ảnh hưởng chính | Dữ liệu tối thiểu |
|---|---|---|
| IFRS 16 | Tăng tài sản và nợ; chi phí thuê thành khấu hao + lãi | Hợp đồng thuê, thời hạn, lịch thanh toán, lãi suất chiết khấu, sửa đổi hợp đồng |
| IFRS 15 | Thời điểm và số tiền doanh thu | Nghĩa vụ thực hiện, giá bán riêng lẻ, giá biến đổi, cách thực hiện nghĩa vụ |
| IFRS 9 | Dự phòng phải thu, đo lại công cụ tài chính | Tuổi nợ, lịch sử tổn thất, phân loại tài sản tài chính, giá trị hợp lý |
| IAS 16 | Nguyên giá, khấu hao, có thể có thặng dư đánh giá lại | Bộ phận tài sản, tham số khấu hao IFRS, công cụ dụng cụ có tính chất tài sản |
| IAS 37 | Dự phòng hoàn nguyên, hợp đồng lỗ | Ước tính chi phí hoàn nguyên, dự toán chi phí hợp đồng, hồ sơ nghĩa vụ |
| IAS 12 | Thuế hoãn lại trên các chênh lệch trên | Cơ sở tính thuế, thuế suất, lỗ chưa sử dụng |

Khi khảo sát một pháp nhân, BA có thể dùng bảng này để hỏi: điều chỉnh nào thực sự phát sinh ở doanh nghiệp, dữ liệu đó hiện nằm ở đâu (phân hệ, hợp đồng giấy, bảng tính), và ai chịu trách nhiệm tính.

## Nguồn

- IFRS Foundation, trang tóm tắt chuẩn mực: IFRS 16 (https://www.ifrs.org/issued-standards/list-of-standards/ifrs-16-leases/), IFRS 15 (https://www.ifrs.org/issued-standards/list-of-standards/ifrs-15-revenue-from-contracts-with-customers/), IFRS 9 (https://www.ifrs.org/issued-standards/list-of-standards/ifrs-9-financial-instruments/), IAS 16 (https://www.ifrs.org/issued-standards/list-of-standards/ias-16-property-plant-and-equipment/), IAS 12 (https://www.ifrs.org/issued-standards/list-of-standards/ias-12-income-taxes/), IAS 37 (https://www.ifrs.org/issued-standards/list-of-standards/ias-37-provisions-contingent-liabilities-and-contingent-assets/), IFRS 1 (https://www.ifrs.org/issued-standards/list-of-standards/ifrs-1-first-time-adoption-of-ifrs/)
- Deloitte Việt Nam, *The conversion of VAS to IFRS – Volume one: Scoping the effort*, Part 1 (IFRS 1 – First-time adoption), Part 2 Group 2 (IAS 12, IAS 16, IAS 37, IFRS 9, IFRS 15, IFRS 16): https://www.deloitte.com/content/dam/assets-zone1/southeast-asia/en/docs/services/audit-assurance/2024/vn-aud-the-conversion-vas-to-ifrs-vol-1-en.pdf
- Deloitte Việt Nam, *Những câu hỏi thường gặp – Chuyển đổi áp dụng IFRS tại doanh nghiệp*, câu 8, 9, 10: https://www2.deloitte.com/content/dam/Deloitte/vn/Documents/audit/vn-aud-ifrs-faq-vi.pdf
- KPMG Việt Nam, *Differences between Vietnamese GAAP and IFRS*, tháng 10/2026, các mục Financial instruments, PPE, Lease, Provisions, Revenue: https://assets.kpmg.com/content/dam/kpmgsites/vn/pdf/2026/10/vas-and-ifrs-en.pdf
- Thông tư 99/2025/TT-BTC, Điều 1; Phụ lục II TK 341 (TK 3412): https://luatvietnam.vn/doanh-nghiep/thong-tu-99-2025-tt-btc-huong-dan-che-do-ke-toan-doanh-nghiep-tu-01-01-2026-417085-d1.html
- Quyết định 345/QĐ-BTC, mục II.2.1.2: https://luatvietnam.vn/tai-chinh/quyet-dinh-345-qd-btc-2020-de-an-ap-dung-chuan-muc-bao-cao-tai-chinh-181513-d1.html
- IFRS Foundation, trang IAS 12 (sửa đổi tháng 5/2021 thu hẹp ngoại lệ ghi nhận ban đầu) và IAS Plus, *IASB publishes amendments to IAS 12* (hiệu lực từ 01/01/2023, áp dụng cho thuê và nghĩa vụ hoàn nguyên): https://www.iasplus.com/en/news/2021/05/ias-12
- Tạp chí Kinh tế Tài chính, *Thông tư số 45/2013/TT-BTC và Thông tư số 48/2019/TT-BTC tiếp tục có hiệu lực* (Quyết định 1760/QĐ-BTC): https://tapchikinhtetaichinh.vn/thong-tu-so-45-2013-tt-btc-va-thong-tu-so-48-2019-tt-btc-tiep-tuc-co-hieu-luc-160845.html
- Tạp chí Kinh tế Tài chính, bài về Thông tư 118/2026/TT-BTC (điều khoản chuyển tiếp theo IFRS 1): https://tapchikinhtetaichinh.vn/hoan-thien-hanh-lang-phap-ly-cho-chuan-muc-ke-toan-quoc-te-tai-viet-nam-165165.html
