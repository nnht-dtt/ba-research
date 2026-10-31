# Bán hàng qua sàn và kênh online: doanh thu gộp hay thuần

Bài này giúp BA trả lời câu hỏi đầu tiên của mọi dự án có kênh online: với mỗi đơn bán qua sàn, website hay cổng thanh toán, doanh nghiệp ghi doanh thu theo số tiền khách trả (gộp) hay theo số tiền sàn chuyển về (thuần), và doanh thu đó thuộc pháp nhân nào. Trả lời sai chỗ này thì mọi báo cáo doanh thu, biên lợi nhuận gộp và đối soát phía sau đều lệch theo.

## Câu hỏi gốc: ai là khách hàng, doanh nghiệp đóng vai gì

Trong một đơn online thường có ít nhất bốn bên: người mua, người bán, sàn hoặc cổng thanh toán, đơn vị vận chuyển. Trước khi bàn bút toán, BA cần xác định hai điều cho từng mô hình bán hàng của khách:

1. **Khách hàng của doanh nghiệp là ai**: người mua cuối, hay chính nhà vận hành sàn.
2. **Doanh nghiệp là bên chính hay đại lý** đối với hàng hoá, dịch vụ giao cho khách hàng đó.

Các mô hình hay gặp:

| Mô hình | Khách hàng của doanh nghiệp | Vai trò thường thấy của doanh nghiệp |
|---|---|---|
| Website riêng, thu tiền qua cổng thanh toán | Người mua cuối | Bên chính; cổng thanh toán chỉ là kênh thu tiền |
| Gian hàng của doanh nghiệp trên sàn, doanh nghiệp tự định giá, giữ hàng (tự giao hoặc gửi kho sàn) | Người mua cuối | Bên chính; sàn cung cấp dịch vụ cho doanh nghiệp và thu tiền hộ |
| Doanh nghiệp bán đứt hàng cho nhà bán lẻ trực tuyến, nhà bán lẻ tự bán lại | Nhà bán lẻ trực tuyến | Bên chính trong giao dịch bán cho nhà bán lẻ; việc bán lại không phải giao dịch của doanh nghiệp |
| Doanh nghiệp vận hành nền tảng, hoặc nhận bán hộ hàng của bên khác | Người bán trên nền tảng (với phí dịch vụ) | Đại lý; doanh thu là phí hoặc hoa hồng |

Bảng trên là cách đọc thường gặp, không phải kết luận sẵn. Kết luận phụ thuộc điều khoản hợp đồng giữa doanh nghiệp với sàn và với người mua, theo các tiêu chí ở phần dưới.

## Quy định: VAS 14, TT99 và IFRS 15 cùng nói gì

### VAS 14: doanh thu không gồm khoản thu hộ

VAS 14 đoạn 04: doanh thu chỉ gồm tổng giá trị lợi ích kinh tế doanh nghiệp đã thu hoặc sẽ thu. Các khoản thu hộ bên thứ ba không làm tăng vốn chủ sở hữu nên không phải doanh thu. Ví dụ ngay trong chuẩn mực: người nhận đại lý thu hộ tiền bán hàng cho chủ hàng thì doanh thu của người nhận đại lý chỉ là tiền hoa hồng được hưởng.

VAS 14 đoạn 06: doanh thu xác định theo giá trị hợp lý của khoản đã thu hoặc sẽ thu, sau khi trừ chiết khấu thương mại, chiết khấu thanh toán, giảm giá hàng bán, hàng bán bị trả lại. Phí trả cho sàn không nằm trong danh sách các khoản được trừ này.

### TT99: tiêu chí "kiểm soát" đã vào thẳng hướng dẫn TK 511

Phụ lục II TT99, phần nguyên tắc kế toán các khoản doanh thu, điểm 4: doanh thu không bao gồm các khoản thu hộ bên thứ ba, ví dụ thuế gián thu phải nộp; các khoản phụ thu và phí thu thêm ngoài giá bán mà doanh nghiệp không được hưởng; số tiền người bán hàng đại lý thu hộ cho bên chủ hàng.

Hướng dẫn TK 511 mục 1.3 đặt tiêu chí phân biệt:

- Doanh nghiệp là **chủ thể cung cấp** hàng hoá, dịch vụ nếu có quyền kiểm soát hàng hoá, dịch vụ cụ thể trước khi chuyển giao cho khách hàng.
- Doanh nghiệp là **đại lý** nếu nghĩa vụ của doanh nghiệp là sắp xếp, tổ chức để bên thứ ba cung cấp hàng hoá, dịch vụ. Đại lý không kiểm soát một trong các yếu tố như giá bán, chất lượng của hàng hoá, dịch vụ đó. Khi ấy doanh thu là phần hoa hồng hoặc số tiền được hưởng nhờ việc sắp xếp, tổ chức.
- Có quyền sở hữu pháp lý chỉ trong thời gian ngắn trước khi chuyển cho khách thì chưa chắc đã là kiểm soát.

Điểm 5 cùng phần nguyên tắc: doanh thu ghi sổ để lập BCTC có thể khác số trên hoá đơn và khác doanh thu tính thuế. Điều này quan trọng khi bàn hoá đơn ở [[ktqt-16-hoa-don-kenh-online]].

### IFRS 15: B34 đến B38

IFRS 15 các đoạn B34–B38 đặt khung xác định bên chính hay đại lý, theo cách IFRS Interpretations Committee tóm tắt trong quyết định năm 2022 về đại lý bán lại phần mềm:

1. Xác định hàng hoá, dịch vụ cụ thể giao cho khách hàng (B34A(a)).
2. Đánh giá doanh nghiệp có kiểm soát từng hàng hoá, dịch vụ đó trước khi chuyển cho khách hàng không (B34A(b)). Có kiểm soát thì là bên chính (B35); không thì là đại lý (B36).
3. Khi khó kết luận, xem các dấu hiệu ở B37: (a) chịu trách nhiệm chính trong việc thực hiện lời hứa giao hàng; (b) chịu rủi ro tồn kho trước khi giao, hoặc sau khi giao nếu khách có quyền trả lại; (c) có quyền quyết định giá bán. B37A nói mức liên quan của từng dấu hiệu tuỳ bản chất hàng hoá và điều khoản hợp đồng.

Hệ quả: bên chính ghi doanh thu theo tổng số tiền được quyền nhận để đổi lấy hàng hoá, dịch vụ; đại lý ghi doanh thu theo phí hoặc hoa hồng, có thể là phần còn lại sau khi trả cho bên cung cấp.

Tài liệu rà soát sau áp dụng IFRS 15 (IASB, 2024) ghi nhận việc đánh giá này gây khó và dễ thiếu nhất quán đặc biệt ở nền tảng thương mại điện tử, và nhắc tới Ví dụ 45 (online marketplace) trong phần ví dụ minh hoạ của IFRS 15 là ví dụ dành cho tình huống này.

> 📌 TT99 dùng cả hai cách nói: điều kiện ghi nhận doanh thu bán hàng vẫn theo năm điều kiện chuyển giao rủi ro và lợi ích của VAS 14 (TK 511 mục 1.2), còn phân định chủ thể với đại lý dùng tiêu chí kiểm soát gần với IFRS 15 (TK 511 mục 1.3). Với gian hàng tự định giá, tự giữ hàng, hai hệ thống thường cho cùng kết luận. Khác biệt VAS và IFRS nói chung xem [[ktqt-07-vas-ifrs]].

### Áp tiêu chí vào gian hàng trên sàn

Với gian hàng thông thường của doanh nghiệp, câu hỏi kiểm tra cho BA khi đọc hợp đồng sàn và quy trình của khách:

| Dấu hiệu | Câu hỏi | Thường thấy khi doanh nghiệp là bên chính |
|---|---|---|
| Trách nhiệm chính | Ai chịu trách nhiệm với người mua khi giao sai, hàng lỗi? | Người bán |
| Rủi ro tồn kho | Hàng chưa bán, hàng hoàn về thuộc ai? Hàng gửi kho sàn còn thuộc sở hữu ai? | Người bán |
| Quyền định giá | Ai đặt giá niêm yết, ai quyết định giảm giá của shop? | Người bán |

Có câu trả lời "sàn" ở cả ba dấu hiệu thì cần xem lại: có thể doanh nghiệp đang bán cho sàn (khách hàng là sàn), hoặc là nhà cung cấp cho sàn chứ không phải người bán trên sàn.

## Gộp và thuần khác nhau ra sao trên sổ

Ví dụ giả định: một đơn bán qua sàn, giá bán chưa thuế 1.000.000 đ, thuế GTGT giả định 10%, giá vốn 700.000 đ. Sàn thu của người mua 1.100.000 đ, trừ phí dịch vụ 80.000 đ (chưa thuế) và thuế GTGT trên phí 8.000 đ, chuyển về cho doanh nghiệp 1.012.000 đ.

### Doanh nghiệp là bên chính (gộp)

1. Khi đơn đủ điều kiện ghi nhận doanh thu (thời điểm xem [[kt-17-quy-trinh-ban-hang]]):
   - `Nợ TK 131` (chi tiết sàn) 1.100.000 `/ Có TK 511` 1.000.000 `/ Có TK 3331 (33311)` 100.000
   - `Nợ TK 632 / Có TK 156` (hoặc `Có TK 157` nếu đã ghi hàng gửi đi bán) 700.000
2. Phí sàn trừ vào tiền bán hàng:
   - `Nợ TK 641` 80.000, `Nợ TK 133 (1331)` 8.000 `/ Có TK 131` (chi tiết sàn) 88.000
3. Sàn chuyển tiền về:
   - `Nợ TK 112 / Có TK 131` (chi tiết sàn) 1.012.000

Bút toán 2 có tiền lệ trong chính TT99: khi giao hàng cho đại lý, hoa hồng phải trả cho bên nhận đại lý ghi `Nợ TK 641`, `Nợ TK 133` `/ Có các TK 111, 112, 131` (TK 511 mục 3.8a), tức hoa hồng có thể ghi giảm thẳng khoản đại lý còn phải nộp. Ghi phí qua TK 331 rồi bù trừ với TK 131 cũng là cách làm được, miễn chứng từ và chính sách thống nhất. Chi tiết thời điểm và tài khoản chi phí ở [[ktqt-14-phi-san-cong-thanh-toan]]; đối soát số tiền về ở [[ktqt-15-doi-soat-san-cod]].

### Ghi nhầm theo thuần

Nếu hệ thống chỉ ghi số tiền sàn chuyển về làm doanh thu (920.000 đ chưa thuế), thì trên B02-DN:

| Chỉ tiêu | Ghi gộp | Ghi nhầm thuần |
|---|---|---|
| Doanh thu bán hàng | 1.000.000 | 920.000 |
| Giá vốn | 700.000 | 700.000 |
| Lợi nhuận gộp | 300.000 | 220.000 |
| Chi phí bán hàng (phí sàn) | 80.000 | 0 |
| Lợi nhuận thuần từ HĐKD (phần này) | 220.000 | 220.000 |

Lợi nhuận cuối cùng như nhau nhưng doanh thu, biên lợi nhuận gộp, tỷ lệ chi phí bán hàng trên doanh thu đều sai. Thuế GTGT đầu ra cũng lệch nếu số thuế tính trên số tiền thuần, trong khi người mua trả và hoá đơn ghi trên giá bán. Phí của sàn đi kèm hoá đơn của sàn, có thuế GTGT đầu vào riêng; gộp vào doanh thu thì mất đường đi của thuế đầu vào này.

> ❌ Không thiết kế tích hợp chỉ đẩy "số tiền thực nhận" từ báo cáo quyết toán sàn vào doanh thu. Đơn hàng cần mang giá bán cho người mua, còn phí và khoản bị trừ đi theo dòng riêng.

### Doanh nghiệp là đại lý (thuần)

Khi doanh nghiệp vận hành nền tảng hoặc nhận bán hộ, TT99 hướng dẫn tại TK 511 mục 3.8b (đơn vị nhận đại lý):

- Hàng nhận bán đại lý không ghi vào tài sản của doanh nghiệp; doanh nghiệp tự mở sổ theo dõi như tài sản nhận giữ hộ và thuyết minh trên BCTC.
- Khi bán được: `Nợ TK 111, 112, 131 / Có TK 331` (tổng giá thanh toán phải trả bên giao hàng).
- Định kỳ xác định hoa hồng được hưởng: `Nợ TK 331 / Có TK 511 / Có TK 3331`.
- Trả tiền cho bên giao hàng: `Nợ TK 331 / Có TK 111, 112`.

Tập đoàn có cả công ty bán hàng lẫn công ty vận hành nền tảng thì hai công ty dùng hai cách hạch toán khác nhau cho cùng một đơn. Bên vận hành nền tảng ghi phí dịch vụ là doanh thu; bên bán ghi phí đó là chi phí bán hàng. Khi hợp nhất, cặp doanh thu và chi phí này là giao dịch nội bộ cần loại trừ ([[ktqt-03-giao-dich-noi-bo]], [[ktqt-04-bctc-hop-nhat]]).

## Những khoản trong đơn cần xếp đúng chỗ

Đơn online hiếm khi chỉ có giá hàng. Cùng logic bên chính và đại lý, BA nên lập bảng các thành phần tiền trong báo cáo đơn và quyết toán của sàn, xếp mỗi dòng vào một trong ba nhóm:

1. **Thuộc doanh thu của doanh nghiệp**: giá hàng; phí vận chuyển khách trả khi doanh nghiệp tự chịu trách nhiệm giao hàng và được hưởng khoản này.
2. **Giảm trừ doanh thu hoặc giảm giá ngay trên giá bán**: giảm giá, voucher do shop tự tài trợ. Cách ghi theo hoá đơn và thời điểm xem [[kt-18-giam-tru-tra-truoc]], [[kt-20-khuyen-mai-voucher-combo]].
3. **Không thuộc doanh thu của doanh nghiệp**: phí vận chuyển sàn thu của người mua để trả thẳng cho đơn vị vận chuyển mà doanh nghiệp không được hưởng (đúng loại "phụ thu và phí thu thêm ngoài giá bán mà doanh nghiệp không được hưởng" ở điểm 4 nêu trên); thuế GTGT đầu ra.

> ⚠️ Cần xác nhận: voucher do sàn tài trợ (người mua trả ít hơn, sàn bù phần chênh cho người bán) ghi doanh thu theo giá trước hay sau voucher. Nguồn đã đọc (VAS 14, TT99, các tài liệu IFRS 15 ở cuối bài) không có hướng dẫn riêng cho trường hợp này. Cần chốt với kế toán trưởng hoặc kiểm toán của khách, căn cứ điều khoản chương trình voucher của sàn.

## Doanh thu thuộc pháp nhân nào

Với tập đoàn nhiều pháp nhân, ngoài câu hỏi gộp hay thuần còn câu hỏi doanh thu thuộc pháp nhân nào. Gian hàng trên sàn đăng ký theo một chủ thể (pháp nhân, hộ kinh doanh hoặc cá nhân); hợp đồng dịch vụ, báo cáo quyết toán, tiền về và hoá đơn phí của sàn đều gắn với chủ thể đó. Vì vậy:

- **Gian hàng của pháp nhân A nhưng hàng thuộc tồn kho pháp nhân B**: A là người bán với người mua; B bán cho A. Phải có giao dịch mua bán giữa B và A với chứng từ, giá chuyển giao, và loại trừ khi hợp nhất ([[ktqt-03-giao-dich-noi-bo]]). Hàng gửi kho sàn xem [[kt-25-kho-thue-ngoai-kho-san]].
- **Một pháp nhân nhiều gian hàng, nhiều sàn**: cùng một doanh thu, cần chiều phân tích theo kênh và theo gian hàng để báo cáo quản trị ([[kt-33-trung-tam-chi-phi]]); sổ phải thu theo dõi chi tiết từng sàn vì TK 131 phải hạch toán chi tiết từng đối tượng (TT99, TK 131 mục 1b).
- **Gian hàng đứng tên hộ kinh doanh hoặc cá nhân** (thường là gian hàng mở trước khi thành lập doanh nghiệp): theo Nghị định 117/2025/NĐ-CP, sàn có chức năng thanh toán khấu trừ và nộp thay thuế GTGT, thuế TNCN cho hộ, cá nhân kinh doanh trên sàn. Thấy dòng khấu trừ thuế trong báo cáo quyết toán của một gian hàng đáng lẽ thuộc doanh nghiệp là dấu hiệu gian hàng chưa đứng tên doanh nghiệp. BA cần nêu rủi ro này sớm, vì nó quyết định doanh thu có được ghi vào sổ của pháp nhân hay không. Phạm vi Nghị định 117 xem [[ktqt-16-hoa-don-kenh-online]].

## Điểm chạm hệ thống

Ví dụ trên Odoo 19, viết trung lập để hiểu nghiệp vụ:

- Amazon Connector đồng bộ về Odoo các đơn đã xác nhận (cả hàng do Amazon giao và hàng người bán tự giao), tạo đơn bán và khách hàng nếu chưa có. Phí hằng tháng, tranh chấp, hoàn tiền vẫn xử lý trên Amazon Seller Central, không qua connector. Như vậy đơn bán mang giá bán cho người mua (mô hình gộp), còn phí đi luồng riêng.
- Tài liệu Odoo khuyến nghị lập một sổ nhật ký ngân hàng riêng cho tiền Amazon (ví dụ "Amazon Payments") với tài khoản trung gian riêng, vì người mua trả tiền cho Amazon và Amazon chuyển một lần mỗi tháng. Hoá đơn hoa hồng của Amazon ghi là hoá đơn nhà cung cấp và xử lý cùng cách. Đây đúng là mô hình phải thu theo từng sàn ở trên.
- Với eCommerce trên website riêng, đơn đi qua ba bước: đơn bán, giao hàng, hoá đơn. Có thể bật tự động lập hoá đơn; hoá đơn chỉ được gửi tự động khi thanh toán đã được ghi nhận.

> ✅ Khi khảo sát tích hợp sàn, đối chiếu một báo cáo quyết toán thật của sàn với thiết kế bút toán: mỗi cột tiền trong báo cáo phải rơi vào một trong ba nhóm ở mục "Những khoản trong đơn cần xếp đúng chỗ".

## Ảnh hưởng tới báo cáo

- **B02-DN**: doanh thu bán hàng và cung cấp dịch vụ theo giá bán (bên chính) hoặc theo phí, hoa hồng (đại lý); phí sàn nằm ở chi phí bán hàng. Thuế gián thu không thuộc doanh thu (TT99, nguyên tắc doanh thu điểm 4).
- **B01-DN**: phải thu chi tiết theo từng sàn, cổng thanh toán; với đại lý, khoản thu hộ phải trả cho chủ hàng nằm ở nợ phải trả.
- **Thuyết minh**: theo IFRS 15 (đoạn 123), đánh giá bên chính hay đại lý là xét đoán ảnh hưởng đáng kể tới số và thời điểm doanh thu nên cần thuyết minh, như quyết định của IFRS Interpretations Committee năm 2022 nhắc lại. Đây là điểm cần đưa vào gói báo cáo IFRS cho tập đoàn ([[ktqt-12-bao-cao-cho-tap-doan]]).

## Nguồn

- Chuẩn mực kế toán Việt Nam số 14 "Doanh thu và thu nhập khác" (ban hành theo Quyết định 149/2001/QĐ-BTC), đoạn 04, 05, 06, 10: https://cdn.thuvienphapluat.vn//uploads/Hoidapphapluat/2024/TTTT/240830/Chuan-muc-ke-toan-14.doc
- Thông tư 99/2025/TT-BTC, Phụ lục II Mục B: phần "Nguyên tắc kế toán các khoản doanh thu" (điểm 4, 5); TK 511 mục 1.2, 1.3, 1.5.1, 3.1, 3.8; TK 131 mục 1; TK 157. Toàn văn thông tư: https://luatvietnam.vn/linh-vuc-khac/tai-thong-tu-99-2025-tt-btc-huong-dan-che-do-ke-toan-doanh-nghiep-186-105034-article.html; bản trích TK 511 đã đối chiếu: https://expertis.vn/wp-content/uploads/2026/01/Loai-tai-khoan-doanh-thu-TK-511-⟶-521.pdf
- IFRS Interpretations Committee, Agenda Decision "Principal versus Agent: Software Reseller (IFRS 15)", 2022 (tóm tắt B34–B38, B37, B37A, đoạn 119, 123): https://www.ifrs.org/content/dam/ifrs/supporting-implementation/agenda-decisions/2022/principal-versus-agent-software-reseller-may-2022.pdf
- IASB, Staff paper AP6B "Post-implementation Review of IFRS 15 – Principal versus agent considerations", tháng 2/2024 (tóm tắt B34–B37A, phản hồi về nền tảng TMĐT, Ví dụ 45): https://www.ifrs.org/content/dam/ifrs/meetings/2024/february/iasb/ap6b-ifrs-15-pir-principal-vs-agent-considerations.pdf
- BDO, "IFRS 15 In Practice", mục 5.5 Principal vs. Agent: https://www.bdo.global/getmedia/5909496a-8002-4de5-b770-0dcb810af3f4/IFRS-15-In-Practice.pdf
- EY Việt Nam, Tin nhanh tháng 6/2025 "Nghị định 117 về quản lý thuế đối với hoạt động kinh doanh trên nền tảng thương mại điện tử, nền tảng số": https://www.ey.com/content/dam/ey-unified-site/ey-com/vi-vn/technical/tax/documents/people-advisory-services-tax-alert-june-2025-decree-117-on-management-for-business-activities-on-e-commerce-and-digital-platforms-vn.pdf
- Odoo 19 Documentation, Amazon Connector features: https://www.odoo.com/documentation/19.0/applications/sales/sales/amazon_connector/features.html
- Odoo 19 Documentation, Amazon order management (Invoice and register payments): https://www.odoo.com/documentation/19.0/applications/sales/sales/amazon_connector/manage.html
- Odoo 19 Documentation, eCommerce Order handling: https://www.odoo.com/documentation/19.0/applications/websites/ecommerce/order_handling.html
