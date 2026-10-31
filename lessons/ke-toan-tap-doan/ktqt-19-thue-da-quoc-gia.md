# Nghĩa vụ thuế của tập đoàn bán hàng ở nhiều quốc gia

Bài này giúp BA dựng được bức tranh nghĩa vụ thuế của một tập đoàn bán hàng ở nhiều nước: pháp nhân nào chịu loại thuế nào ở nước nào, khi nào sàn thu hộ hoặc khấu trừ thay, và hệ thống chọn đúng thuế cho từng dòng bán hàng bằng cơ chế gì. Bài tổng hợp từ [[ktqt-17-vat-eu-uk]] và [[ktqt-18-sales-tax-my]], cộng phần cấu hình thuế trong ERP. Không hướng dẫn kê khai.

## Nghĩa vụ thuế gắn với pháp nhân, không gắn với tập đoàn

Tập đoàn không có một nghĩa vụ thuế chung. Mỗi pháp nhân có mã số thuế, đăng ký và tờ khai riêng ở nước nơi nó thành lập, và có thể phải đăng ký thêm ở nước khác nơi nó bán hàng. Hai pháp nhân cùng bán một sản phẩm vào cùng một nước có thể có nghĩa vụ khác nhau, tuỳ pháp nhân thành lập ở đâu và hàng đi từ đâu. Ví dụ: ở EU, sàn chỉ là người bán được coi là cho giao dịch hàng hoá nội khối khi người bán thật thành lập ngoài EU (Irish Revenue, Deemed supplier).

Vì vậy, câu hỏi đầu tiên khi thiết kế luôn là: đơn hàng này thuộc pháp nhân nào (pháp nhân sở hữu shop, xuất hoá đơn, ghi doanh thu). Phần pháp nhân sở hữu shop trên sàn nằm ở [[ktqt-13-doanh-thu-kenh-online]].

## Các loại thuế thường gặp

| Loại thuế | Phát sinh khi | Ai thu, nộp | Kỳ khai theo nguồn đã đọc |
|---|---|---|---|
| Thuế GTGT nội địa của pháp nhân | Bán trong nước nơi pháp nhân đăng ký | Pháp nhân | Theo luật nước đó; Việt Nam xem [[kt-22-thue-gtgt-dau-ra]] |
| VAT EU theo nước tiêu dùng | Bán từ xa B2C vào nước EU khác, vượt ngưỡng hoặc người bán ngoài EU | Người bán qua OSS/IOSS, hoặc sàn nếu là người bán được coi là | Union, Non-Union: quý; IOSS: tháng |
| VAT UK | Bán hàng cho khách ở UK, lô không quá 135 GBP hoặc hàng đã ở UK | Người bán đăng ký VAT UK, hoặc sàn | Nguồn đã đọc không nêu |
| Sales tax Mỹ | Có hiện diện vật lý hoặc vượt ngưỡng economic nexus của bang | Người bán, hoặc sàn theo luật marketplace facilitator | Theo từng bang |
| VAT nhập khẩu, thuế hải quan | Hàng qua biên giới, không thuộc cơ chế thu tại điểm bán | Thu tại khâu nhập khẩu | Nguồn đã đọc không nêu |
| Thuế TNDN | Lợi nhuận của từng pháp nhân | Pháp nhân, ở nước cư trú thuế | Việt Nam xem [[kt-37-thue-tndn]] |
| Thuế nộp thay nhà thầu nước ngoài | Pháp nhân Việt Nam trả tiền cho tổ chức nước ngoài (phí, bản quyền…) | Pháp nhân Việt Nam khấu trừ, nộp thay | Xem [[ktqt-11-giao-dich-cong-ty-me]] |
| Thuế do sàn khấu trừ, nộp thay | Hộ, cá nhân bán trên sàn ở Việt Nam có chức năng thanh toán | Sàn | Sàn khai theo tháng |

Nguồn bảng: European Commission OSS portal; HMRC; SST; MTC; EY Việt Nam về Nghị định 117/2025/NĐ-CP.

Ghi chú từng dòng:

- Thuế TNDN: TT99 quy định TK 3334 gồm cả thuế TNDN bổ sung theo quy định về thuế tối thiểu toàn cầu, và yêu cầu thuyết minh kỳ phát sinh, kỳ kê khai, tiêu thức phân bổ nghĩa vụ giữa đơn vị hợp thành chịu trách nhiệm kê khai và các đơn vị hợp thành khác (Phụ lục II, TK 333, mục 1 điểm e). Đây là điểm mà dữ liệu của một pháp nhân phụ thuộc vào tập đoàn.
- Thuế do sàn khấu trừ ở Việt Nam: Nghị định 117/2025/NĐ-CP, hiệu lực 01/07/2025, áp cho hộ, cá nhân kinh doanh trên nền tảng thương mại điện tử và nền tảng số. Sàn có chức năng thanh toán khấu trừ và nộp thay thuế GTGT, TNCN ngay khi giao dịch được xác nhận thành công và chấp nhận thanh toán; nền tảng không có chức năng thanh toán thì hộ, cá nhân tự khai (EY Việt Nam, 06/2025).

> ⚠️ Cần xác nhận: nguồn đã đọc không nói Nghị định 117/2025 áp cho doanh nghiệp, tổ chức bán trên sàn. Với pháp nhân trong tập đoàn bán trên sàn Việt Nam, cần đối chiếu văn bản gốc trước khi kết luận sàn không khấu trừ. Phạm vi hoá đơn của kênh online xem [[ktqt-16-hoa-don-kenh-online]].

## Thu hộ và khấu trừ: hai cơ chế khác nhau

Cả hai đều làm sàn đứng giữa người bán và cơ quan thuế, nhưng bút toán ở sổ người bán khác nhau.

<ab-toggle data-labels="Sàn thu hộ (người bán được coi là)|Sàn khấu trừ, nộp thay">
<svg viewBox="0 0 640 150" role="img" aria-label="Sàn thu hộ thuế của khách" style="width:100%;max-width:640px;height:auto;display:block;margin:1rem auto" font-family="ui-sans-serif, system-ui, sans-serif">
<defs><marker id="q19ab-a1" markerWidth="9" markerHeight="9" refX="8" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 z" fill="currentColor"/></marker></defs>
<rect x="10" y="45" width="180" height="60" rx="10" fill="#3b82f6" fill-opacity="0.13" stroke="currentColor" stroke-opacity="0.22"/>
<text x="100" y="70" font-size="13" text-anchor="middle" fill="currentColor">Khách trả giá</text>
<text x="100" y="90" font-size="13" text-anchor="middle" fill="currentColor">+ thuế cho sàn</text>
<line x1="190" y1="75" x2="228" y2="75" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" marker-end="url(#q19ab-a1)"/>
<rect x="230" y="45" width="180" height="60" rx="10" fill="#f59e0b" fill-opacity="0.14" stroke="currentColor" stroke-opacity="0.22"/>
<text x="320" y="70" font-size="13" text-anchor="middle" fill="currentColor">Sàn nộp thuế</text>
<text x="320" y="90" font-size="13" text-anchor="middle" fill="currentColor">trên giá bán cho khách</text>
<line x1="410" y1="75" x2="448" y2="75" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" marker-end="url(#q19ab-a1)"/>
<rect x="450" y="45" width="180" height="60" rx="10" fill="#10b981" fill-opacity="0.16" stroke="currentColor" stroke-opacity="0.22"/>
<text x="540" y="70" font-size="13" text-anchor="middle" fill="currentColor">Sổ người bán: không có</text>
<text x="540" y="90" font-size="13" text-anchor="middle" fill="currentColor">thuế đầu ra cho đơn này</text>
</svg>
<svg viewBox="0 0 640 150" role="img" aria-label="Sàn khấu trừ thuế của người bán" style="width:100%;max-width:640px;height:auto;display:block;margin:1rem auto" font-family="ui-sans-serif, system-ui, sans-serif">
<defs><marker id="q19ab-a2" markerWidth="9" markerHeight="9" refX="8" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 z" fill="currentColor"/></marker></defs>
<rect x="10" y="45" width="180" height="60" rx="10" fill="#3b82f6" fill-opacity="0.13" stroke="currentColor" stroke-opacity="0.22"/>
<text x="100" y="70" font-size="13" text-anchor="middle" fill="currentColor">Khách trả tiền</text>
<text x="100" y="90" font-size="13" text-anchor="middle" fill="currentColor">cho sàn</text>
<line x1="190" y1="75" x2="228" y2="75" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" marker-end="url(#q19ab-a2)"/>
<rect x="230" y="45" width="180" height="60" rx="10" fill="#f59e0b" fill-opacity="0.14" stroke="currentColor" stroke-opacity="0.22"/>
<text x="320" y="70" font-size="13" text-anchor="middle" fill="currentColor">Sàn trừ thuế vào</text>
<text x="320" y="90" font-size="13" text-anchor="middle" fill="currentColor">tiền của người bán</text>
<line x1="410" y1="75" x2="448" y2="75" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" marker-end="url(#q19ab-a2)"/>
<rect x="450" y="45" width="180" height="60" rx="10" fill="#10b981" fill-opacity="0.16" stroke="currentColor" stroke-opacity="0.22"/>
<text x="540" y="70" font-size="13" text-anchor="middle" fill="currentColor">Sổ người bán: thuế của</text>
<text x="540" y="90" font-size="13" text-anchor="middle" fill="currentColor">mình, đã được nộp thay</text>
</svg>
<ab-note>EU deemed supplier, UK online marketplace, Mỹ marketplace facilitator: về thuế, sàn là người bán cho khách. Thuế không phải của người bán.</ab-note>
<ab-note>Nghị định 117/2025 ở Việt Nam: thuế vẫn là nghĩa vụ của hộ, cá nhân bán hàng; sàn chỉ khấu trừ và nộp thay.</ab-note>
</ab-toggle>

Khi đối soát quyết toán sàn ([[ktqt-15-doi-soat-san-cod]]), hai loại khoản sàn giữ lại phải tách khỏi nhau và khỏi phí sàn ([[ktqt-14-phi-san-cong-thanh-toan]]): thuế sàn thu của khách (không phải tiền của người bán), thuế sàn khấu trừ (tiền của người bán đã dùng để nộp thuế của chính người bán), phí dịch vụ của sàn (chi phí).

## Bút toán theo TT99 cho pháp nhân Việt Nam

TT99 coi thuế gián thu (GTGT, tiêu thụ đặc biệt, xuất khẩu, bảo vệ môi trường…) là khoản thu hộ bên thứ ba, loại khỏi doanh thu trên báo cáo; chỉ tiêu doanh thu và các khoản giảm trừ doanh thu trên Báo cáo kết quả hoạt động kinh doanh không gồm thuế gián thu phải nộp (Phụ lục II, TK 333, mục 1 điểm c). Doanh nghiệp được chọn tách thuế ngay khi ghi doanh thu, hoặc ghi giảm doanh thu định kỳ.

- Bán trong nước: Nợ TK 131 / Có TK 511 / Có TK 33311 (TT99, TK 333, mục 3.1.1).
- Thuế nộp thay nhà thầu nước ngoài, hợp đồng đã gồm thuế nhà thầu: khi nhận dịch vụ Nợ TK 627, 642 / Nợ TK 1388 (GTGT nhà thầu nếu được khấu trừ) / Có TK 331; khi trả tiền Nợ TK 331 / Có TK 3339 (thuế nộp thay) / Có TK 112; khi nộp thuế Nợ TK 3339 / Có TK 112, đồng thời Nợ TK 133 / Có TK 1388 (TT99, TK 333, mục 3.11.1 điểm a). Các trường hợp khác xem [[ktqt-11-giao-dich-cong-ty-me]].
- VAT, sales tax phải nộp cho cơ quan thuế nước ngoài: xem ví dụ ở [[ktqt-17-vat-eu-uk]] và [[ktqt-18-sales-tax-my]]; tài khoản cụ thể cần chốt.

> ⚠️ Cần xác nhận: TT99 mô tả TK 3338 gồm "thuế nộp thay cho các tổ chức, cá nhân nước ngoài có hoạt động kinh doanh tại Việt Nam", nhưng hướng dẫn hạch toán thuế nhà thầu ở mục 3.11.1 lại dùng TK 3339. Cần kế toán trưởng của khách chốt tài khoản và nhất quán trong mapping COA tập đoàn ([[ktqt-09-mapping-coa-tap-doan]]).

TT99 cũng yêu cầu mở sổ chi tiết theo dõi từng khoản thuế, phí, lệ phí phải nộp, đã nộp, còn phải nộp (TK 333, mục 1 điểm g). Với tập đoàn bán nhiều nước, chiều chi tiết tối thiểu là: pháp nhân, loại thuế, nước (hoặc bang), kỳ khai.

## Hệ thống chọn thuế theo nơi bán như thế nào

Lấy Odoo 19 làm ví dụ vì tài liệu công khai; các ERP khác có cơ chế tương tự dưới tên khác.

<step-flow>
<svg viewBox="0 0 640 140" role="img" aria-labelledby="q19s-t" style="width:100%;max-width:640px;height:auto;display:block;margin:1.25rem auto" font-family="ui-sans-serif, system-ui, sans-serif">
<title id="q19s-t">Thuế đi từ sản phẩm tới tờ khai</title>
<defs><marker id="q19s-arrow" markerWidth="9" markerHeight="9" refX="8" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 z" fill="currentColor"/></marker></defs>
<g data-step="1">
<rect x="5" y="40" width="140" height="60" rx="10" fill="#3b82f6" fill-opacity="0.13" stroke="currentColor" stroke-opacity="0.22"/>
<text x="75" y="66" font-size="13" text-anchor="middle" fill="currentColor">Thuế mặc định</text>
<text x="75" y="84" font-size="13" text-anchor="middle" fill="currentColor">trên sản phẩm</text>
</g>
<g data-step="2">
<line x1="145" y1="70" x2="168" y2="70" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" marker-end="url(#q19s-arrow)"/>
<rect x="170" y="40" width="140" height="60" rx="10" fill="#f59e0b" fill-opacity="0.14" stroke="currentColor" stroke-opacity="0.22"/>
<text x="240" y="66" font-size="13" text-anchor="middle" fill="currentColor">Vị trí tài chính</text>
<text x="240" y="84" font-size="13" text-anchor="middle" fill="currentColor">theo nước khách</text>
</g>
<g data-step="3">
<line x1="310" y1="70" x2="333" y2="70" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" marker-end="url(#q19s-arrow)"/>
<rect x="335" y="40" width="140" height="60" rx="10" fill="#8b5cf6" fill-opacity="0.14" stroke="currentColor" stroke-opacity="0.22"/>
<text x="405" y="66" font-size="13" text-anchor="middle" fill="currentColor">Thuế thay thế</text>
<text x="405" y="84" font-size="13" text-anchor="middle" fill="currentColor">trên dòng hoá đơn</text>
</g>
<g data-step="4">
<line x1="475" y1="70" x2="498" y2="70" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" marker-end="url(#q19s-arrow)"/>
<rect x="500" y="40" width="135" height="60" rx="10" fill="#10b981" fill-opacity="0.16" stroke="currentColor" stroke-opacity="0.22"/>
<text x="567" y="66" font-size="13" text-anchor="middle" fill="currentColor">Bút toán thuế,</text>
<text x="567" y="84" font-size="13" text-anchor="middle" fill="currentColor">tax grid, tờ khai</text>
</g>
</svg>
<step-note data-step="1">Mỗi sản phẩm mang thuế bán và thuế mua mặc định. Thêm sản phẩm vào dòng bán hàng thì thuế của sản phẩm được áp vào dòng.</step-note>
<step-note data-step="2">Vị trí tài chính (fiscal position) áp tự động theo điều kiện nước hoặc nhóm nước, có yêu cầu mã số VAT hay không; hoặc chọn tay trên chứng từ; hoặc gán mặc định cho đối tác. Nhiều vị trí cùng thoả thì thứ tự (sequence) quyết định.</step-note>
<step-note data-step="3">Ánh xạ thuế cấu hình trên chính thuế thay thế: chọn vị trí tài chính và các thuế mà nó thay. Vị trí tài chính cũng có thể ánh xạ tài khoản doanh thu, chi phí.</step-note>
<step-note data-step="4">Mỗi thuế sinh một dòng bút toán thuế phải nộp theo dòng phân bổ (distribution) của thuế, gắn tax grid để báo cáo thuế lấy số cơ sở tính thuế và số thuế.</step-note>
</step-flow>

Chi tiết theo tài liệu Odoo 19 (Taxes; Fiscal positions):

- Vị trí tài chính dùng để điều chỉnh thuế và tài khoản doanh thu, chi phí theo vị trí và loại hình của khách hàng, nhà cung cấp. Có thể thêm ghi chú pháp lý (legal notes) hiện trên báo giá, đơn bán, hoá đơn. Gói địa phương hoá (fiscal localization) có sẵn một số vị trí tài chính mặc định.
- Áp tự động khi bật Detect Automatically, với điều kiện VAT Required (khách phải có mã số VAT; nếu bật kiểm tra mã VAT thì phải là mã VAT nội khối hợp lệ) và Country Group, Country. Ví dụ trong tài liệu: vị trí cho nước A đứng trước vị trí cho nhóm nước chứa A thì khách ở nước A nhận vị trí thứ nhất.
- Đơn eCommerce tự cập nhật thuế khi khách đăng nhập hoặc điền thông tin thanh toán.
- Vị trí tài chính đầu tiên trong thứ tự được coi là mặc định của công ty, thuế trên sản phẩm được dùng với vị trí này. Ánh xạ chỉ hoạt động với thuế đang kích hoạt.
- Dòng phân bổ của thuế: một dòng 100% là trường hợp thường gặp; một dòng 100% và một dòng -100% cho trường hợp thuế đồng thời sinh nợ và có triệt tiêu nhau, ví dụ VAT đảo ngược nội khối EU; hai dòng 50% cho VAT đầu vào được khấu trừ một phần.
- Báo cáo thuế (Tax Return) tổng hợp số cơ sở và số thuế từ hoá đơn trong kỳ theo mẫu của gói địa phương hoá.
- Riêng cho bán từ xa trong EU có tuỳ chọn tạo sẵn vị trí tài chính và thuế, kèm báo cáo OSS ([[ktqt-17-vat-eu-uk]]). Cho Mỹ, thuế suất theo bang, hạt, thành phố lấy từ AvaTax thay vì cấu hình tay ([[ktqt-18-sales-tax-my]]).

Về nghiệp vụ, vì nghĩa vụ thuế gắn với pháp nhân, cùng một khách ở cùng một nước có thể cần thuế khác nhau tuỳ đơn thuộc pháp nhân nào (ví dụ pháp nhân trong EU và pháp nhân ngoài EU bán vào cùng một nước EU).

> ⚠️ Cần xác nhận: cách Odoo 19 tách thuế và vị trí tài chính giữa các công ty trong cùng một database. Tài liệu Taxes và Fiscal positions đã đọc không mô tả; kiểm tra tài liệu đa công ty hoặc bản demo khi làm dự án.

### Giá đã gồm thuế và thuế suất khác nhau

B2C thường niêm yết giá đã gồm thuế, B2B thường đàm phán giá chưa thuế. Odoo nêu quan hệ giữa hai cách không đối xứng: với thuế 21%, giá gồm thuế 10 EUR cho giá chưa thuế 8,26 EUR, nhưng nhập 8,26 EUR chưa thuế lại cho 9,99 EUR gồm thuế. Odoo khuyến nghị chọn một cách lưu giá và giữ nhất quán (Odoo 19, B2B (tax excluded) and B2C (tax included) pricing).

Với bán nhiều nước, hệ quả cho doanh thu: nếu giữ một giá đã gồm thuế cho mọi nước, doanh thu ghi sổ của cùng một sản phẩm khác nhau theo thuế suất từng nước. Ví dụ giả định: giá niêm yết 12 EUR đã gồm thuế; ở nước thuế suất 20% doanh thu là 10 EUR, ở nước thuế suất 25% doanh thu là 9,60 EUR. Đây là quyết định giá của kinh doanh, nhưng BA cần nêu ra vì nó ảnh hưởng báo cáo doanh thu theo nước và biên lợi nhuận.

## Dữ liệu chủ cần có cho bài toán thuế đa quốc gia

- Danh mục đăng ký thuế theo pháp nhân: nước hoặc bang, loại thuế, mã đăng ký, chế độ (nội địa, OSS, IOSS, đăng ký bang), ngày hiệu lực, kỳ khai, đồng tiền kê khai.
- Ngưỡng cần theo dõi: luỹ kế doanh số bán từ xa nội khối EU theo năm; doanh số và số giao dịch theo bang Mỹ theo cách đo của bang.
- Khách hàng: nước, địa chỉ giao hàng chi tiết, cá nhân hay doanh nghiệp, mã số VAT, giấy chứng nhận miễn thuế.
- Sản phẩm: hàng hoá hay dịch vụ, phân loại để xác định thuế suất từng nước, hàng chịu thuế tiêu thụ đặc biệt.
- Kênh bán và vai trò thuế của sàn theo từng nước: sàn thu hộ, sàn khấu trừ, hay người bán tự thu.
- Kho xuất hàng: hàng đi từ nước nào, đã nằm ở nước tiêu dùng chưa.

Trên báo cáo, số dư thuế phải nộp theo từng nước, từng loại thuế là một phần của gói báo cáo gửi tập đoàn ([[ktqt-12-bao-cao-cho-tap-doan]]). Các khoản thuế bằng ngoại tệ chịu đánh giá lại cuối kỳ như các khoản phải trả ngoại tệ khác ([[ktqt-05-giao-dich-ngoai-te]]).

## Nguồn

Tra cứu ngày 31/10/2026.

- Odoo 19 Documentation, Taxes (thuế trên sản phẩm, bút toán thuế, tax grid, dòng phân bổ, ánh xạ thuế, báo cáo thuế): https://www.odoo.com/documentation/19.0/applications/finance/accounting/taxes.html
- Odoo 19 Documentation, Fiscal positions (tax and account mapping): https://www.odoo.com/documentation/19.0/applications/finance/accounting/taxes/fiscal_positions.html
- Odoo 19 Documentation, B2B (tax excluded) and B2C (tax included) pricing: https://www.odoo.com/documentation/19.0/applications/finance/accounting/taxes/B2B_B2C.html
- Odoo 19 Documentation, EU intra-community distance selling: https://www.odoo.com/documentation/19.0/applications/finance/accounting/taxes/eu_distance_selling.html
- Odoo 19 Documentation, AvaTax integration: https://www.odoo.com/documentation/19.0/applications/finance/accounting/taxes/avatax.html
- Thông tư 99/2025/TT-BTC, Phụ lục II, Tài khoản 333: mục 1 điểm c, e, g; mô tả TK 3334, 3338, 3339; mục 3.1.1, 3.11.1.
- EY Việt Nam, Tin nhanh tư vấn thuế nhân sự tháng 6/2025: Nghị định 117/2025/NĐ-CP về quản lý thuế đối với hoạt động kinh doanh trên nền tảng thương mại điện tử, nền tảng số: https://www.ey.com/vi_vn/technical/tax/tax-and-law-updates/tin-nhanh-tu-van-thue-nhan-su-thang-6-nam-2025-nghi-dinh-117-ve-quan-ly-thue-doi-voi-hoat-dong-kinh-doanh-tren-nen-tang-thuong-mai-dien-tu-nen-tang-so
- European Commission, VAT One Stop Shop portal: https://vat-one-stop-shop.ec.europa.eu/one-stop-shop_en
- Irish Revenue, Deemed supplier: https://www.revenue.ie/en/vat/vat-ecommerce/deemed-supplier/index.aspx
- HMRC, VAT and overseas goods sold to customers in the UK using online marketplaces: https://www.gov.uk/guidance/vat-and-overseas-goods-sold-to-customers-in-the-uk-using-online-marketplaces
- Streamlined Sales Tax Governing Board, Marketplace Sellers: https://www.streamlinedsalestax.org/for-businesses/marketplace-sellers
- Multistate Tax Commission, Wayfair Implementation & Marketplace Facilitator Work Group, White Paper 08/07/2021: https://www.mtc.gov/wp-content/uploads/2023/02/Wayfair-and-Marketplace-White-Paper-FINAL-7-8-2021.pdf
