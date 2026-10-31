# VAT EU và UK khi bán hàng xuyên biên giới: OSS, IOSS, sàn là người bán được coi là

Bài này giúp BA trả lời ba câu hỏi khi một pháp nhân trong tập đoàn bán hàng online cho người tiêu dùng ở EU hoặc Vương quốc Anh: VAT tính theo nước nào, ai thu và nộp (người bán hay sàn), và hệ thống phải lưu dữ liệu gì cho mỗi đơn để phục vụ kê khai. Bài nói về cơ chế, không hướng dẫn đăng ký hay kê khai. Ngưỡng và mốc thời gian dưới đây tra cứu ngày 31/10/2026, có thể thay đổi.

## Nguyên tắc chung: VAT theo nơi tiêu dùng

Bán từ xa B2C (distance selling) là bán cho người tiêu dùng cá nhân ở nước khác qua website, sàn, đặt hàng qua thư hoặc điện thoại, hàng được chuyển tới người mua. Với bán từ xa trong EU, người bán phải tính VAT theo thuế suất của nước người mua, kể cả khi người bán ở ngoài EU (Odoo 19, EU intra-community distance selling).

Hệ quả cho hệ thống: cùng một sản phẩm, cùng một website, mỗi đơn có thể mang thuế suất khác nhau tuỳ địa chỉ giao hàng. Mã thuế không còn gắn cố định theo sản phẩm mà phải chọn theo cặp (sản phẩm, nước tiêu dùng).

Cơ chế hiện hành của EU áp dụng từ 01/07/2021, khi chế độ MOSS (từ 01/01/2015) được mở rộng thành One Stop Shop (OSS) (European Commission, OSS portal).

## Ngưỡng 10.000 EUR cho người bán ở một nước thành viên

Doanh nghiệp chỉ thành lập ở một nước thành viên EU được tiếp tục áp quy tắc VAT nội địa (tính VAT nước mình) cho tổng doanh số bán từ xa hàng hoá nội khối và dịch vụ viễn thông, phát thanh truyền hình, dịch vụ điện tử B2C xuyên biên giới, chừng nào tổng doanh số này không vượt 10.000 EUR (chưa VAT) trong năm hiện tại và năm trước. Ngưỡng chỉ áp cho hai loại giao dịch đó. Doanh nghiệp có cơ sở thường trú ở nước thành viên khác không dùng được ngưỡng này (European Commission, OSS portal; Your Europe, Cross-border VAT).

Ngưỡng được nêu cho người bán chỉ thành lập ở một nước thành viên; nguồn đã đọc không nêu ngưỡng tương tự cho người bán ngoài EU, và Odoo ghi rõ nghĩa vụ tính VAT nước người mua áp dụng cả khi người bán ở ngoài EU.

> 📌 Ngưỡng tính trên tổng doanh số toàn EU, không tính riêng từng nước. Hệ thống cần theo dõi luỹ kế doanh số bán từ xa nội khối theo năm dương lịch để biết khi nào vượt ngưỡng và phải chuyển sang tính VAT theo nước người mua.

## Ba chế độ OSS

OSS cho phép doanh nghiệp đăng ký ở một nước thành viên (nước đăng ký, Member State of identification) để kê khai và nộp VAT phát sinh ở các nước thành viên khác qua một tờ khai, thay vì đăng ký VAT ở từng nước. Tờ khai OSS là tờ khai bổ sung, không thay tờ khai VAT nội địa (European Commission, OSS portal).

| Chế độ | Ai dùng | Giao dịch | Kỳ khai |
|---|---|---|---|
| Non-Union scheme | Doanh nghiệp không có trụ sở, cơ sở thường trú ở EU | Dịch vụ cung cấp cho người tiêu dùng ở bất kỳ nước thành viên nào | Quý |
| Union scheme | Doanh nghiệp thành lập ở EU; doanh nghiệp ngoài EU cho một số giao dịch hàng hoá | Dịch vụ B2C ở nước không có cơ sở; bán từ xa hàng hoá nội khối (hàng bắt đầu vận chuyển từ một nước thành viên); giao dịch của sàn khi là người bán được coi là | Quý |
| Import scheme (IOSS) | Doanh nghiệp trong hoặc ngoài EU; doanh nghiệp ngoài EU phải chỉ định trung gian (intermediary) | Bán từ xa hàng nhập khẩu từ ngoài EU, lô hàng giá trị không quá 150 EUR, trừ hàng chịu thuế tiêu thụ đặc biệt | Tháng |

Nguồn bảng: European Commission, OSS portal.

Một số điểm BA cần nắm:

- Doanh nghiệp ngoài EU cũng khai được bán từ xa hàng hoá nội khối qua Union scheme, với điều kiện hàng bắt đầu vận chuyển từ một nước thành viên. Ví dụ giả định: pháp nhân Việt Nam gửi hàng sẵn ở kho tại một nước EU rồi bán cho người tiêu dùng ở nước EU khác.
- Doanh nghiệp chỉ đăng ký ở một nước để dùng một chế độ đặc biệt và thường không được tự chọn nước đăng ký, phải theo quy định (European Commission, OSS portal).
- Dịch vụ cung cấp ở nước mà doanh nghiệp có cơ sở thường trú thì khai trên tờ khai VAT nội địa nước đó, không qua OSS.

## IOSS: thu VAT ở điểm bán thay vì ở cửa khẩu

Với hàng nhập khẩu lô không quá 150 EUR, IOSS cho phép người bán đăng ký ở một nước thành viên để khai và nộp VAT nhập khẩu của EU. Người tiêu dùng trả VAT ngay khi thanh toán đơn hàng, người bán nộp qua tờ khai IOSS hằng tháng, và khi hàng qua hải quan thì hải quan không thu VAT nhập khẩu nữa (Irish Revenue, Import One Stop Shop).

Không dùng IOSS thì VAT nhập khẩu được thu ở khâu nhập khẩu, người nhận có thể phải trả thêm khi nhận hàng. Lô trên 150 EUR nằm ngoài IOSS.

<ab-toggle data-labels="Có IOSS|Không IOSS">
<svg viewBox="0 0 640 150" role="img" aria-label="Có IOSS: VAT thu tại điểm bán" style="width:100%;max-width:640px;height:auto;display:block;margin:1rem auto" font-family="ui-sans-serif, system-ui, sans-serif">
<defs><marker id="q17ab-a1" markerWidth="9" markerHeight="9" refX="8" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 z" fill="currentColor"/></marker></defs>
<rect x="10" y="45" width="180" height="60" rx="10" fill="#10b981" fill-opacity="0.16" stroke="currentColor" stroke-opacity="0.22"/>
<text x="100" y="70" font-size="13" text-anchor="middle" fill="currentColor">Khách thanh toán</text>
<text x="100" y="90" font-size="13" text-anchor="middle" fill="currentColor">giá + VAT nước EU</text>
<line x1="190" y1="75" x2="228" y2="75" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" marker-end="url(#q17ab-a1)"/>
<rect x="230" y="45" width="180" height="60" rx="10" fill="#3b82f6" fill-opacity="0.13" stroke="currentColor" stroke-opacity="0.22"/>
<text x="320" y="70" font-size="13" text-anchor="middle" fill="currentColor">Hải quan: lô có số IOSS</text>
<text x="320" y="90" font-size="13" text-anchor="middle" fill="currentColor">không thu VAT nhập khẩu</text>
<line x1="410" y1="75" x2="448" y2="75" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" marker-end="url(#q17ab-a1)"/>
<rect x="450" y="45" width="180" height="60" rx="10" fill="#f59e0b" fill-opacity="0.14" stroke="currentColor" stroke-opacity="0.22"/>
<text x="540" y="70" font-size="13" text-anchor="middle" fill="currentColor">Người bán/sàn nộp VAT</text>
<text x="540" y="90" font-size="13" text-anchor="middle" fill="currentColor">qua tờ khai IOSS tháng</text>
</svg>
<svg viewBox="0 0 640 150" role="img" aria-label="Không IOSS: VAT thu khi nhập khẩu" style="width:100%;max-width:640px;height:auto;display:block;margin:1rem auto" font-family="ui-sans-serif, system-ui, sans-serif">
<defs><marker id="q17ab-a2" markerWidth="9" markerHeight="9" refX="8" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 z" fill="currentColor"/></marker></defs>
<rect x="10" y="45" width="180" height="60" rx="10" fill="#3b82f6" fill-opacity="0.13" stroke="currentColor" stroke-opacity="0.22"/>
<text x="100" y="70" font-size="13" text-anchor="middle" fill="currentColor">Khách thanh toán</text>
<text x="100" y="90" font-size="13" text-anchor="middle" fill="currentColor">giá chưa VAT EU</text>
<line x1="190" y1="75" x2="228" y2="75" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" marker-end="url(#q17ab-a2)"/>
<rect x="230" y="45" width="180" height="60" rx="10" fill="#f43f5e" fill-opacity="0.12" stroke="currentColor" stroke-opacity="0.22"/>
<text x="320" y="70" font-size="13" text-anchor="middle" fill="currentColor">Hải quan thu VAT</text>
<text x="320" y="90" font-size="13" text-anchor="middle" fill="currentColor">nhập khẩu</text>
<line x1="410" y1="75" x2="448" y2="75" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" marker-end="url(#q17ab-a2)"/>
<rect x="450" y="45" width="180" height="60" rx="10" fill="#f43f5e" fill-opacity="0.12" stroke="currentColor" stroke-opacity="0.22"/>
<text x="540" y="70" font-size="13" text-anchor="middle" fill="currentColor">Người nhận có thể</text>
<text x="540" y="90" font-size="13" text-anchor="middle" fill="currentColor">trả thêm khi nhận hàng</text>
</svg>
<ab-note>VAT là một phần giá bán và nằm trong sổ của người bán (hoặc sàn) như một khoản phải nộp.</ab-note>
<ab-note>Người bán không thu VAT EU; khoản thuế phát sinh ở khâu nhập khẩu, ngoài sổ của người bán.</ab-note>
</ab-toggle>

Mốc mới cần biết: theo Irish Revenue, từ 01/07/2026 miễn thuế hải quan cho lô không quá 150 EUR bị bãi bỏ; áp thuế hải quan 3 EUR cho mỗi dòng hàng trong lô giá trị không quá 150 EUR, và không tính VAT trên khoản thuế này nếu người bán dùng IOSS.

> ⚠️ Cần xác nhận: mức 3 EUR và cách tính "mỗi dòng hàng" lấy từ trang của cơ quan thuế Ireland; khi làm dự án cần đối chiếu văn bản của EU và hướng dẫn hải quan nước liên quan tại thời điểm triển khai.

## Sàn là "người bán được coi là" (deemed supplier)

Người vận hành giao diện điện tử (sàn, nền tảng, cổng…) trong một số trường hợp được coi là người bán. Khi đó sàn được đối xử như mọi người bán khác: phải thực hiện nghĩa vụ VAT của giao dịch, gồm thu và nộp VAT. Hai trường hợp (Irish Revenue, Deemed supplier; European Commission, OSS portal):

1. Sàn tạo điều kiện bán từ xa hàng nhập khẩu từ ngoài EU, lô giá trị không quá 150 EUR, cho người tiêu dùng, bất kể người bán thật (underlying supplier) thành lập ở đâu.
2. Sàn tạo điều kiện bán hàng trong nội bộ EU cho người tiêu dùng, khi người bán thật thành lập ngoài EU. Trường hợp này không phụ thuộc giá trị.

Sàn khi là người bán được coi là có thể chọn khai qua Union scheme (trường hợp 2) hoặc IOSS (trường hợp 1), và có thể khai cả giao dịch hàng hoá nội địa trong Union scheme.

Ý nghĩa với người bán dùng sàn: với các đơn rơi vào hai trường hợp trên, VAT trên giá bán cho người tiêu dùng do sàn thu và nộp. Người bán không ghi VAT đầu ra EU cho đơn đó trên sổ của mình. Việc người bán ghi doanh thu theo giá khách trả hay theo số sàn chuyển về là câu hỏi riêng, xem [[ktqt-13-doanh-thu-kenh-online]].

> ⚠️ Cần xác nhận: quy định EU coi một giao dịch thành hai giao dịch (người bán bán cho sàn, sàn bán cho người tiêu dùng) và cách xử lý VAT của giao dịch người bán bán cho sàn. Nguồn đã đọc không mô tả chi tiết; tài liệu đầy đủ là Explanatory Notes on VAT e-commerce của Ủy ban châu Âu và Điều 14a Chỉ thị VAT.

## Kê khai OSS: những gì ảnh hưởng tới hệ thống

Các quy định sau quyết định cách hệ thống tổng hợp số liệu (European Commission, Declare and pay OSS; Record keeping and audits in OSS):

- Kỳ thuế: quý dương lịch cho Non-Union và Union scheme, tháng dương lịch cho Import scheme.
- Hạn nộp tờ khai và tiền: cuối tháng sau kỳ thuế. Không lùi khi trùng cuối tuần, ngày lễ. Không nộp trước khi kỳ kết thúc.
- Đồng tiền: một đồng tiền duy nhất, thường là EUR; nước chưa dùng EUR có thể yêu cầu đồng nội tệ. Giao dịch bằng đồng tiền khác quy đổi theo tỷ giá Ngân hàng Trung ương châu Âu ngày cuối kỳ thuế. Tỷ giá này khác tỷ giá ghi sổ hằng ngày, xem [[ktqt-05-giao-dich-ngoai-te]].
- Lưu trữ: 10 năm tính từ cuối năm phát sinh giao dịch, kể cả khi đã ngừng dùng chế độ.
- Nội dung bản ghi (Quy định 282/2011 của Hội đồng, Điều 63c): nước tiêu dùng, loại giao dịch, ngày giao dịch, số VAT phải nộp, các khoản thanh toán trước, thông tin dùng để xác định nơi khách hàng cư trú, cùng các thông tin khác.

## Vương quốc Anh: ngưỡng 135 GBP và trách nhiệm của sàn

UK có cơ chế riêng từ 01/01/2021, áp dụng cho Great Britain (Anh, Scotland, xứ Wales). Bắc Ireland áp quy tắc khác ở một số điểm (ví dụ thu VAT nhập khẩu cho lô nhỏ), bài không đi vào (HMRC).

Hàng từ ngoài UK, lô không quá 135 GBP (tính theo giá trị cả lô, không theo từng món):

- Bán trực tiếp (website của người bán): người bán tính VAT bán hàng của UK tại điểm bán thay cho VAT nhập khẩu, phải đăng ký VAT ở UK.
- Bán qua sàn: sàn chịu trách nhiệm về VAT.
- Ưu đãi miễn VAT nhập khẩu cho hàng không quá 15 GBP (low value consignment relief) đã bị bãi bỏ.

Hàng đã ở UK tại thời điểm bán, người bán ở nước ngoài, bán qua sàn:

- Sàn chịu trách nhiệm VAT trên giao dịch bán cho khách, với hàng có giá trị bất kỳ.
- Người bán nước ngoài vẫn chịu VAT nhập khẩu và thuế hải quan khi đưa hàng vào UK, và được coi là thực hiện một giao dịch bán cho sàn với thuế suất 0% (zero-rated deemed supply).

Khách là doanh nghiệp có mã số VAT UK hợp lệ, với lô từ ngoài UK không quá 135 GBP: người bán (hoặc sàn) không tính VAT, khách tự kê khai theo cơ chế đảo ngược (reverse charge), hoá đơn ghi chú "reverse charge: customer to account for VAT to HMRC". Với hàng đã ở UK bán cho khách doanh nghiệp qua sàn, sàn chuyển thông tin (gồm mã VAT của khách) cho người bán và người bán chịu trách nhiệm VAT trên giao dịch đó, không phải sàn.

Lô trên 135 GBP: áp quy tắc VAT và hải quan thông thường khi nhập khẩu.

## Bút toán và báo cáo

Nguyên tắc chung theo TT99 (Phụ lục II, TK 333, mục 1 điểm c): thuế gián thu như thuế GTGT về bản chất là khoản thu hộ bên thứ ba, được loại trừ khỏi doanh thu trên báo cáo tài chính. IFRS 15 đoạn 47 cũng loại các khoản thu hộ bên thứ ba (ví dụ một số loại thuế bán hàng) khỏi giá giao dịch. VAT EU, UK mà pháp nhân thu của khách vì vậy là khoản phải trả, không phải doanh thu.

Ví dụ giả định: pháp nhân Việt Nam bán từ website cho người tiêu dùng ở một nước EU, lô 100 EUR chưa VAT, dùng IOSS qua trung gian, VAT nước người mua giả định 20%.

- Khi ghi nhận doanh thu: Nợ TK 131 (120 EUR quy đổi) / Có TK 511 (100 EUR quy đổi) / Có TK phải trả VAT EU (20 EUR quy đổi).
- Khi nộp qua tờ khai IOSS: Nợ TK phải trả VAT EU / Có TK 112.

> ⚠️ Cần xác nhận: tài khoản ghi VAT phải nộp cho cơ quan thuế nước ngoài. TK 333 theo TT99 phản ánh các khoản phải nộp Ngân sách Nhà nước; TK 33382 "Các loại thuế khác" cho phép mở tài khoản cấp 4, còn TK 3388 là phải trả, phải nộp khác. Chọn tài khoản nào cần kế toán trưởng và kiểm toán của khách chốt, và cần mở chi tiết theo nước tiêu dùng.

Nếu cùng đơn đó bán qua sàn mà sàn là người bán được coi là, pháp nhân không có dòng VAT EU trên bút toán bán hàng. Khoản sàn giữ lại (VAT, phí) được đối soát khi sàn quyết toán, xem [[ktqt-15-doi-soat-san-cod]].

Với tập đoàn, pháp nhân EU hoặc UK thường ghi theo hệ thống tài khoản và chuẩn mực địa phương; thuế suất từng nước, số dư VAT phải nộp theo từng nước vẫn cần xuất được cho gói báo cáo tập đoàn.

## Dữ liệu hệ thống cần cho mỗi đơn

- Nước tiêu dùng (địa chỉ giao hàng) và bằng chứng xác định nơi khách cư trú.
- Khách là người tiêu dùng hay doanh nghiệp; mã số VAT nếu là doanh nghiệp.
- Hàng gửi từ đâu: từ ngoài EU/UK, từ kho trong EU (nước nào), hay đã nằm sẵn ở UK.
- Giá trị lô hàng (so ngưỡng 150 EUR, 135 GBP), không phải giá trị từng dòng.
- Kênh bán: trực tiếp hay qua sàn; sàn có phải người bán được coi là cho đơn này không.
- Người bán thành lập ở đâu (trong hay ngoài EU), vì quyết định trường hợp deemed supplier.
- Loại giao dịch (hàng hoá hay dịch vụ), hàng có chịu thuế tiêu thụ đặc biệt không.
- Ngày giao dịch, thuế suất áp dụng, số VAT, đồng tiền và tỷ giá quy đổi cuối kỳ.
- Số IOSS dùng cho lô hàng (truyền cho đơn vị vận chuyển, khai hải quan).
- Luỹ kế doanh số bán từ xa nội khối theo năm (cho ngưỡng 10.000 EUR).

Điểm chạm ERP: Odoo 19 có tuỳ chọn EU Intra-community Distance Selling, tạo vị trí tài chính (fiscal position) và thuế theo nước của công ty, có nút làm mới ánh xạ thuế khi thêm hoặc sửa thuế, và báo cáo OSS Sales, OSS Imports xuất PDF, XLSX, XML để nộp trên cổng OSS. Odoo khuyến nghị kiểm tra ánh xạ đề xuất có phù hợp hàng hoá, dịch vụ đang bán trước khi dùng. Cách hệ thống chọn thuế theo nơi bán được nói kỹ hơn ở [[ktqt-19-thue-da-quoc-gia]].

## Nguồn

Tra cứu ngày 31/10/2026.

- European Commission, VAT One Stop Shop portal, trang One Stop Shop (định nghĩa ba chế độ, ngưỡng 10.000 EUR, deemed supplier, nước đăng ký): https://vat-one-stop-shop.ec.europa.eu/one-stop-shop_en
- European Commission, VAT One Stop Shop portal, Declare and pay OSS (kỳ thuế, hạn nộp, đồng tiền, tỷ giá ECB): https://vat-one-stop-shop.ec.europa.eu/one-stop-shop/declare-and-pay-oss_en
- European Commission, VAT One Stop Shop portal, Record keeping and audits in OSS (lưu 10 năm, Điều 63c Quy định 282/2011): https://vat-one-stop-shop.ec.europa.eu/one-stop-shop/record-keeping-and-audits-oss_en
- Your Europe, Cross-border VAT (ngưỡng 10.000 EUR, đăng ký một nước): https://europa.eu/youreurope/business/taxation/vat/cross-border-vat/index_en.htm
- Irish Revenue, Import One Stop Shop (IOSS, trung gian, tờ khai tháng, thuế hải quan 3 EUR từ 01/07/2026): https://www.revenue.ie/en/vat/vat-ecommerce/import-oss/index.aspx
- Irish Revenue, Deemed supplier (hai trường hợp sàn là người bán được coi là): https://www.revenue.ie/en/vat/vat-ecommerce/deemed-supplier/index.aspx
- HMRC, VAT and overseas goods sold to customers in the UK using online marketplaces: https://www.gov.uk/guidance/vat-and-overseas-goods-sold-to-customers-in-the-uk-using-online-marketplaces
- HMRC, VAT and overseas goods sold directly to customers in the UK: https://www.gov.uk/guidance/vat-and-overseas-goods-sold-directly-to-customers-in-the-uk
- Thông tư 99/2025/TT-BTC, Phụ lục II, Tài khoản 333 (mục 1 điểm c về thuế gián thu; TK 3338, 33382).
- IFRS 15 đoạn 47, trích trong IASB/FASB Staff Paper Agenda ref 7B "Sales Tax Presentation: Gross versus Net" (18/03/2015): https://www.ifrs.org/content/dam/ifrs/meetings/2015/march/iasb/revenue-from-contracts-with-customers/ap7b-sales-tax-presentation-gross-versus-net.pdf
- Odoo 19 Documentation, EU intra-community distance selling: https://www.odoo.com/documentation/19.0/applications/finance/accounting/taxes/eu_distance_selling.html
