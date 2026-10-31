# Sales tax Mỹ: economic nexus và marketplace facilitator

Bài này giúp BA hiểu vì sao một pháp nhân bán online vào Mỹ có thể phải thu sales tax ở một bang dù không có văn phòng ở đó, khi nào sàn thu và nộp thay, người bán còn nghĩa vụ gì, và hệ thống phải theo dõi dữ liệu theo bang ra sao. Bài nêu cơ chế, không hướng dẫn đăng ký hay kê khai. Ngưỡng dưới đây chỉ là ví dụ minh hoạ, tra cứu ngày 31/10/2026; mỗi bang tự quy định và thay đổi theo thời gian.

## Sales tax khác VAT ở chỗ nào cần cho thiết kế

Theo tài liệu của IASB/FASB (Staff Paper 7B, 2015): sales tax là thuế đánh vào tiêu dùng hàng hoá, dịch vụ do chính quyền bang và địa phương áp, thường tính theo phần trăm giá bán, thường ghi riêng trên hoá đơn và chỉ đánh ở giao dịch cuối cùng. VAT thì thu ở nhiều khâu sản xuất, phân phối: người bán thu VAT đầu ra, được trừ VAT đầu vào và nộp phần chênh. Use tax là thuế phái sinh từ sales tax, đánh vào hàng mua ngoài bang cư trú để dùng trong bang khi chưa nộp sales tax ở nơi mua, thường cùng thuế suất với sales tax. Hệ quả cho thiết kế: sales tax không đi theo chuỗi thu đầu ra, trừ đầu vào qua nhiều khâu như VAT; trọng tâm là thu đúng ở giao dịch bán cho người dùng cuối và chứng minh được giao dịch nào không chịu thuế.

Sales/use tax do từng bang quy định, và ở nhiều bang còn có thuế của chính quyền địa phương (hạt, thành phố) cộng thêm. MTC ghi nhận việc thu thuế địa phương làm tăng độ phức tạp cho người bán từ xa; một số bang có chính quyền địa phương tự quản (home rule) về thuế bán hàng (MTC, White Paper 2021, mục 13).

Với BA, hệ quả là:

- Nghĩa vụ xác định theo từng bang: mỗi bang là một nơi đăng ký, một ngưỡng, một tờ khai.
- Thuế suất xác định theo địa chỉ giao hàng ở mức chi tiết dưới bang. Các bang thành viên Hiệp định SSUTA áp dụng nguyên tắc xác định theo nơi đến (destination sourcing), có cơ sở dữ liệu thuế suất và ranh giới địa phương (MTC, mục 13).
- Phạm vi chịu thuế (taxability) khác nhau giữa các bang. Doanh nghiệp đề nghị cơ quan thuế các bang công bố hướng dẫn cụ thể về hàng nào chịu thuế, hàng nào được miễn (MTC, mục 10).
- Delaware không có sales/use tax. Alaska không có sales tax cấp bang, nhưng nhiều chính quyền địa phương ở Alaska có, và một số đã lập ARSSTC để quản lý tập trung (SST, Remote Seller State Guidance; MTC, Background).

## Trước và sau vụ Wayfair

Trước năm 2018, theo các án lệ Quill Corp. v. North Dakota (1992) và National Bellas Hess (1967), một bang không được buộc doanh nghiệp không có hiện diện vật lý (physical presence) trong bang phải thu sales tax của bang đó.

Ngày 21/06/2018, Tòa án Tối cao Mỹ xử vụ South Dakota v. Wayfair, cho rằng quy tắc hiện diện vật lý "unsound and incorrect" và bãi bỏ hai án lệ trên. Luật South Dakota trong vụ này áp cho người bán giao hơn 100.000 USD hàng hoá, dịch vụ vào bang hoặc có từ 200 giao dịch riêng biệt trở lên mỗi năm; luật không áp nghĩa vụ hồi tố, và South Dakota là một trong hơn 20 bang tham gia Hiệp định SSUTA (Wayfair, 585 U.S. (2018), bản của Cornell LII).

Sau Wayfair, các bang nhanh chóng ban hành luật economic nexus (nghĩa vụ thu thuế dựa trên doanh số vào bang) và đồng thời luật marketplace facilitator (MTC, Background).

## Economic nexus: ngưỡng theo bang

Theo SST:

- Doanh nghiệp có hiện diện vật lý ở một bang không phải là remote seller và phải đăng ký ở bang đó bất kể doanh số.
- Remote seller là người bán không có hiện diện vật lý ở bang nhưng bán hàng hoá, dịch vụ giao vào bang. Luật economic nexus áp cho họ khi vượt ngưỡng doanh số và/hoặc số giao dịch của bang.

Ngưỡng khác nhau theo ba chiều, và cả ba đều phải cấu hình được trong hệ thống:

| Chiều | Các cách bang quy định |
|---|---|
| Mức doanh số | Phần lớn 100.000 USD; một số bang cao hơn, ví dụ California 500.000 USD, Texas 500.000 USD, Alabama và Mississippi 250.000 USD |
| Có ngưỡng số giao dịch không | Nhiều bang dùng "hoặc 200 giao dịch"; nhiều bang đã bỏ; New York yêu cầu cả doanh số trên 500.000 USD và trên 100 giao dịch |
| Doanh số tính gì, trong kỳ nào | Doanh số gộp, chỉ doanh số bán lẻ (loại hàng bán để bán lại), hoặc chỉ doanh số chịu thuế; năm trước hoặc năm hiện tại, 12 tháng trước, bốn quý trước |

Nguồn bảng: SST, Remote Seller State Guidance (bảng ghi "as of January 11, 2023", có cập nhật một số bang về sau); MTC, White Paper 2021, mục 7.

MTC ghi nhận tới năm 2021 có ít nhất 18 bang không dùng ngưỡng số giao dịch, ít nhất 12 bang chỉ tính doanh số bán lẻ và 4 bang chỉ tính doanh số chịu thuế. Thực hành khuyến nghị của SST: bang không dùng ngưỡng số giao dịch, và không buộc remote seller đăng ký, thu, nộp thuế sớm hơn ngày đầu tiên của tháng dương lịch đầu tiên bắt đầu sau 30 ngày kể từ khi đạt ngưỡng.

> ⚠️ Cần xác nhận: số liệu từng bang ở trên chỉ minh hoạ cơ chế. Khi làm dự án, lấy ngưỡng hiện hành từ trang cơ quan thuế của bang hoặc công cụ tra cứu của SST, ghi ngày tra cứu.

## Marketplace facilitator: sàn thu và nộp thay

Mô hình marketplace facilitator cho phép bang đăng ký một sàn để sàn thu và nộp sales tax cho các giao dịch của nhiều người bán trên sàn, thay vì làm việc với từng người bán. Tới năm 2021, mọi bang có sales tax đều đã ban hành luật buộc sàn thu thuế (MTC, Background). Các điểm chính theo MTC White Paper 2021:

- Định nghĩa: định nghĩa hẹp yêu cầu sàn liệt kê hàng của người bán và trực tiếp hoặc gián tiếp thu tiền của khách rồi chuyển cho người bán; định nghĩa rộng có thể không cần điều kiện thu tiền. 27 bang và DC dùng định nghĩa hẹp, 15 bang dùng định nghĩa rộng. Một số luật dùng từ "marketplace provider", nghĩa như nhau.
- Sàn là "người bán lẻ": phần lớn các bang coi sàn là retailer theo luật sales tax; sàn đứng vào vị trí người bán, nhận cả quyền và nghĩa vụ như xử lý nợ khó đòi, hoàn tiền, lưu sổ sách.
- Thanh tra và trách nhiệm: phần lớn các bang quy định sàn chịu thanh tra và chịu trách nhiệm nếu thu thiếu, không phải người bán. Nếu sàn chứng minh thu thiếu do người bán cung cấp thông tin sai, rủi ro chuyển sang người bán cho các giao dịch đó.
- Không tự thoả thuận: phần lớn các bang không cho sàn và người bán tự thoả thuận bên nào thu, nộp; một số bang cho phép hoặc cho cơ quan thuế miễn trong một số trường hợp.
- Phạm vi: các bang thường áp nghĩa vụ của sàn trên toàn bộ cơ sở thuế (hàng hoá hữu hình, dịch vụ chịu thuế, sản phẩm số chịu thuế); thường chỉ áp cho sales/use tax, không gồm các loại thuế, phí khác.
- Xác nhận: ít nhất 12 bang yêu cầu sàn xác nhận với người bán rằng sàn đã bắt đầu thu thuế trên giao dịch qua sàn, để người bán có căn cứ khi bị thanh tra.

SST mô tả tương tự: luật nhiều bang buộc sàn nộp thuế cho giao dịch thay người bán trên sàn, nhưng người bán trên sàn vẫn có thể phải đăng ký và nộp tờ khai ở bang đó.

## Người bán trên sàn còn nghĩa vụ gì

- Tính ngưỡng: phần lớn các bang tính cả doanh số bán trực tiếp và doanh số qua sàn vào ngưỡng economic nexus của người bán; ít nhất 11 bang chỉ tính doanh số bán trực tiếp (MTC, mục 6). Một đơn qua sàn có thể không phát sinh thuế phải nộp cho người bán nhưng vẫn đẩy người bán vượt ngưỡng ở bang đó.
- Bán trực tiếp: đơn từ website riêng, bán buôn, hoặc kênh khác ngoài sàn là nghĩa vụ của chính người bán khi đã có nexus.
- Tờ khai: một số bang vẫn yêu cầu người bán báo cáo doanh số qua sàn trên tờ khai của mình, một số bang không (MTC, mục 11).
- Thông tin cho sàn: người bán cung cấp thông tin để phân loại đúng sản phẩm; thông tin sai có thể chuyển trách nhiệm sang người bán (MTC, mục 3, 4).
- Người bán nước ngoài: hiệp định thuế có thể bảo vệ người bán nước ngoài không có cơ sở thường trú khỏi thuế thu nhập cấp bang, nhưng không khỏi sales/use tax trên doanh số bán từ xa vào bang. Người bán nước ngoài không có cơ sở thường trú ở Mỹ, không có mã FEIN đã gặp khó khi đăng ký với các bang (MTC, mục 12).

> ⚠️ Cần xác nhận: hàng gửi ở kho của sàn hoặc kho thuê ngoài tại một bang có tạo hiện diện vật lý cho người bán ở bang đó không. Nguồn đã đọc không trả lời; cần đối chiếu quy định từng bang.

## Streamlined Sales Tax

SSUTA là hiệp định giữa các bang nhằm đơn giản hoá và thống nhất sales tax: quản lý ở cấp bang, cơ sở thuế thống nhất giữa bang và địa phương, cơ sở dữ liệu thuế suất và ranh giới, thông báo trước khi đổi thuế suất, xác định theo nơi đến (MTC, mục 13). Trang SST hiện liệt kê 23 bang thành viên đầy đủ và 1 bang thành viên liên kết (Tennessee). Người bán đăng ký ở các bang thành viên qua một hồ sơ trực tuyến trên hệ thống SSTRS; dịch vụ của các nhà cung cấp dịch vụ được chứng nhận (CSP) miễn phí cho remote seller ở các bang thành viên (SST, Remote Seller FAQs).

## Bút toán và báo cáo

IFRS 15 đoạn 47 loại các khoản thu hộ bên thứ ba khỏi giá giao dịch, và ví dụ nêu là "một số" loại sales tax, không phải mọi loại. Staff Paper 7B giải thích lý do: có bang đánh thuế vào người mua (customer-levy), người bán chỉ thu hộ; có bang đánh thuế vào người bán lẻ vì đặc quyền kinh doanh trong bang (seller privilege), người bán có thể tự chịu hoặc chuyển cho người mua; và có bang khó xác định ai là người có nghĩa vụ chính. Thông thường, sales tax ghi riêng trên hoá đơn và người bán phải nộp đúng số đã thu được ghi là khoản phải trả, không vào doanh thu. TT99 có nguyên tắc tương tự cho thuế gián thu (Phụ lục II, TK 333, mục 1 điểm c).

> 📌 Việc một loại sales tax cụ thể trình bày theo số gộp hay số thuần là quyết định chính sách kế toán của khách, xét theo từng loại thuế ở từng bang. BA chỉ cần hệ thống tách được thuế theo bang, theo loại thuế để kế toán áp chính sách.

Ví dụ giả định: pháp nhân bán trực tiếp từ website cho khách ở một bang đã có nexus, giá 200 USD, thuế suất tổng hợp bang và địa phương giả định 8%.

- Khi bán: Nợ TK 131 (216 USD) / Có TK 511 (200 USD) / Có TK sales tax phải nộp, chi tiết theo bang (16 USD).
- Khi nộp tờ khai bang: Nợ TK sales tax phải nộp / Có TK 112.
- Cùng đơn nhưng bán qua sàn ở bang có luật marketplace facilitator: bút toán bán hàng của người bán không có dòng sales tax; khoản sàn thu và giữ lại thể hiện khi đối soát quyết toán ([[ktqt-13-doanh-thu-kenh-online]], [[ktqt-15-doi-soat-san-cod]]).

> ⚠️ Cần xác nhận: tài khoản ghi sales tax phải nộp cho bang khi pháp nhân hạch toán theo TT99 (TK 333 phản ánh khoản phải nộp Ngân sách Nhà nước Việt Nam). Pháp nhân ở Mỹ thường ghi theo hệ thống tài khoản địa phương; điểm cần thống nhất là mở chi tiết theo bang để đối chiếu với tờ khai.

Giao dịch không thu thuế vì khách xuất trình giấy chứng nhận miễn thuế (exemption certificate), ví dụ mua để bán lại, cần lưu giấy chứng nhận gắn với khách và giao dịch (SST, Remote Seller FAQs).

## Dữ liệu hệ thống cần

- Địa chỉ giao hàng đủ để xác định bang, hạt, thành phố, mã ZIP.
- Phân loại sản phẩm theo taxability của từng bang.
- Kênh bán: trực tiếp hay qua sàn; sàn có phải marketplace facilitator đã đăng ký ở bang đó không.
- Luỹ kế doanh số và số giao dịch theo bang, theo đúng cách bang đó tính (gộp, bán lẻ, chịu thuế; kỳ đo), tách trực tiếp và qua sàn.
- Trạng thái nexus theo bang: ngày đạt ngưỡng, ngày bắt đầu thu, số đăng ký.
- Giấy chứng nhận miễn thuế của khách và thời hạn.
- Số thuế theo từng cấp (bang, địa phương) trên mỗi dòng, để lên tờ khai và đối chiếu.
- Xác nhận của sàn về việc đã thu thuế trên giao dịch qua sàn.

Điểm chạm ERP: Odoo 19 tích hợp AvaTax để tính thuế theo vị trí giao dịch, theo thuế suất của bang, hạt, thành phố; tích hợp chỉ dùng cho công ty có quốc gia tài chính là Mỹ, Canada hoặc Brazil, và không hỗ trợ thuế tiêu thụ đặc biệt (thuốc lá, nhiên liệu…). Cách hệ thống chọn thuế theo nơi bán nói chung xem [[ktqt-19-thue-da-quoc-gia]].

## Nguồn

Tra cứu ngày 31/10/2026.

- Streamlined Sales Tax Governing Board, Remote Seller State Guidance (định nghĩa remote seller, bảng ngưỡng theo bang): https://www.streamlinedsalestax.org/for-businesses/remote-seller-faqs/remote-seller-state-guidance
- Streamlined Sales Tax Governing Board, Marketplace Sellers: https://www.streamlinedsalestax.org/for-businesses/marketplace-sellers
- Streamlined Sales Tax Governing Board, Remote Seller FAQs (bang thành viên, SSTRS, CSP, exemption certificate): https://www.streamlinedsalestax.org/for-businesses/remote-seller-faqs
- Streamlined Sales Tax Governing Board, 2023-01 Economic Nexus Threshold Best Practices (Disclosed Practice 8.1.d.i, 8.1.j): https://www.streamlinedsalestax.org/for-businesses/remote-seller-faqs/lists/slac-prior-workgroups/2023-01-economic-nexus-threshold-best-practices-passed-5-23-23-passed-5-16-24
- Multistate Tax Commission, Wayfair Implementation & Marketplace Facilitator Work Group, White Paper 08/07/2021 (Executive Summary mục 1–13; Background): https://www.mtc.gov/wp-content/uploads/2023/02/Wayfair-and-Marketplace-White-Paper-FINAL-7-8-2021.pdf
- South Dakota v. Wayfair, Inc., No. 17-494 (21/06/2018), Cornell Legal Information Institute: https://www.law.cornell.edu/supremecourt/text/17-494
- IFRS 15 đoạn 47, trích trong IASB/FASB Staff Paper Agenda ref 7B "Sales Tax Presentation: Gross versus Net" (18/03/2015): https://www.ifrs.org/content/dam/ifrs/meetings/2015/march/iasb/revenue-from-contracts-with-customers/ap7b-sales-tax-presentation-gross-versus-net.pdf
- Thông tư 99/2025/TT-BTC, Phụ lục II, Tài khoản 333, mục 1 điểm c.
- Odoo 19 Documentation, AvaTax integration: https://www.odoo.com/documentation/19.0/applications/finance/accounting/taxes/avatax.html
