# Kiến trúc sổ: một sổ và mapping, sổ song song, hay COA tập đoàn làm chính

Một pháp nhân phải nộp báo cáo theo VAS và gửi số theo chuẩn tập đoàn (thường là IFRS) có ba cách tổ chức sổ. Bài này mô tả từng cách, đánh đổi về vận hành, kiểm soát, đối chiếu, và những gì tài liệu Odoo 19, SAP S/4HANA nói về khả năng của hệ thống.

## Yêu cầu đầu vào

Trước khi chọn kiến trúc, cần chốt ba điều:

1. **Sổ theo luật Việt Nam.** Điều 11 TT99 yêu cầu hệ thống tài khoản theo Phụ lục II hoặc bản sửa đổi có Quy chế hạch toán. Điều 28 TT99 yêu cầu phần mềm kế toán không làm thay đổi bản chất, nguyên tắc, phương pháp kế toán và số liệu trên sổ, báo cáo; khi sửa phải lưu dấu vết theo thời gian; có khả năng cảnh báo hoặc ngăn chặn can thiệp làm thay đổi số liệu đã ghi sổ.
2. **Chuẩn của tập đoàn và COA tập đoàn** ([[ktqt-09-mapping-coa-tap-doan]]).
3. **Những điều chỉnh VAS–IFRS thực sự phát sinh** ở pháp nhân, và chúng phát sinh từ đâu ([[ktqt-08-dieu-chinh-vas-ifrs]]).

Deloitte Việt Nam mô tả bài toán: nếu ghi nhận mọi giao dịch theo cả VAS và IFRS trên một phần mềm, kế toán có phải hạch toán hai lần không. Câu trả lời của Deloitte: các ERP như SAP hay Oracle có tính năng báo cáo song song, cho thiết lập nhiều hơn một sổ cái chạy song song theo các hệ thống kế toán khác nhau, nên doanh nghiệp có thể không phải ghi nhiều hơn một bút toán; giải pháp cụ thể tuỳ năng lực hệ thống hiện tại.

## Phương án 1: một sổ VAS, mapping và điều chỉnh

Pháp nhân chỉ có một sổ cái theo TT99. Cuối kỳ:

1. Lấy bảng cân đối số phát sinh theo VAS.
2. Map sang COA tập đoàn.
3. Cộng thêm các bút toán điều chỉnh IFRS, tính ngoài sổ (bảng tính, công cụ hợp nhất) hoặc trong một tập bút toán riêng không thuộc sổ VAS.

**Ưu điểm:** sổ VAS sạch, đúng yêu cầu luật; cấu hình ERP đơn giản nhất.

**Nhược điểm:** điều chỉnh tách khỏi giao dịch gốc nên khó truy vết; dữ liệu cho điều chỉnh (hợp đồng thuê, bộ phận tài sản, nghĩa vụ thực hiện) thường nằm ngoài hệ thống. Deloitte lưu ý việc thu thập dữ liệu và làm bảng tính mới hay sửa chương trình sổ cái có thể rất tốn thời gian.

**Hợp khi:** ít điều chỉnh, giá trị nhỏ, tập đoàn chấp nhận gói báo cáo có lớp điều chỉnh tách riêng.

## Phương án 2: sổ song song

Có hai cách làm sổ song song trong cùng một hệ thống.

### 2a. Nhiều sổ cái (ledger approach)

Theo SAP Help Portal (S/4HANA), mỗi bộ nguyên tắc kế toán có một sổ cái riêng trong từng company code:

- Phải có một sổ cái chính (leading ledger, mặc định 0L), cập nhật ở mọi company code, tích hợp với Controlling. Sổ cái phụ (non-leading ledger) chạy song song, có thể theo nguyên tắc kế toán địa phương.
- Bản Cloud Public Edition cho tối đa ba sổ cái chuẩn (một chính, một hoặc hai phụ) và không thêm, bớt sổ được sau khi hoàn tất scoping.
- Bút toán không chỉ định sổ cái hoặc nhóm sổ (ledger group) thì ghi vào mọi sổ. Bút toán thủ công có thể chỉ định ledger group để chỉ ghi vào các sổ trong nhóm. Bút toán tự động như đánh giá lại ngoại tệ mang nguyên tắc kế toán, hệ thống xác định sổ theo nhóm sổ gán cho nguyên tắc đó.
- Sổ phụ có thể dùng năm tài chính (fiscal year variant) và kỳ ghi sổ khác sổ chính trong từng company code.
- SAP nêu ưu điểm: sổ riêng cho từng nguyên tắc, báo cáo chuẩn cho mọi sổ, có thể có năm tài chính khác nhau, số tài khoản dễ quản lý; nhược điểm: khối lượng dữ liệu tăng.
- Lưu ý của SAP: bút toán vào tài khoản theo dõi theo khoản mục mở (open item) và sổ phụ (subledger) luôn tác động mọi sổ, không ghi riêng cho một sổ được.

Về việc gán chuẩn cho sổ chính, SAP Cloud mặc định sổ chính theo nguyên tắc địa phương, sổ phụ cho báo cáo tập đoàn, nhưng khuyến nghị ngược lại: sổ chính theo nguyên tắc tập đoàn, một sổ phụ cho nguyên tắc địa phương. Ví dụ trong tài liệu SAP on-premise: tập đoàn lập BCTC hợp nhất theo IFRS, các company code lập báo cáo theo US GAAP hoặc HGB, nên tạo 0L theo nguyên tắc tập đoàn và L1, L2 cho từng chuẩn địa phương.

SAP còn có extension ledger: dựa trên một sổ nền, chỉ lưu các bút toán thủ công ghi trực tiếp vào nó (không có bút toán tự động), báo cáo sẽ đọc cả dữ liệu sổ nền. Tiền tệ và năm tài chính không được khác sổ nền. SAP nêu công dụng ví dụ là thông tin theo góc nhìn quản trị.

### 2b. Thêm tài khoản (accounts approach)

Một sổ cái duy nhất, các giá trị khác nhau giữa chuẩn được ghi vào tài khoản riêng. SAP mô tả với tài sản cố định: mỗi nguyên tắc kế toán có một vùng khấu hao ghi sổ riêng, và có thể phải thêm tài khoản vào hệ thống tài khoản, thêm phiên bản báo cáo tài chính (financial statement version) cho từng nguyên tắc. Mỗi nguyên tắc bổ sung làm tăng số tài khoản. SAP khuyến nghị dùng cách nhiều sổ cái khi số tài khoản theo cách thêm tài khoản trở nên khó quản lý.

### Odoo 19

Tài liệu Odoo 19 có chức năng Multi-Ledgers (Accounting > Configuration > Multi-Ledgers): mỗi ledger gắn với một công ty và xác định các sổ nhật ký (journal) bị loại khỏi ledger đó. Tài liệu mô tả chức năng này cho hợp nhất: sổ thường của từng công ty loại trừ các journal điều chỉnh hợp nhất, còn công ty hợp nhất có một multi-ledger gồm các journal điều chỉnh đó; báo cáo mặc định hiển thị theo sổ thường (góc nhìn luật định), muốn xem toàn cảnh phải chọn multi-ledger.

> ⚠️ Cần xác nhận: dùng Multi-Ledgers của Odoo 19 để tách một journal điều chỉnh IFRS khỏi sổ VAS của cùng pháp nhân. Tài liệu chỉ mô tả cho điều chỉnh hợp nhất, không nói tới sổ song song theo hai chuẩn; cần thử trên môi trường của dự án. Tài liệu đã đọc cũng không cho thấy Odoo có cơ chế tương đương ledger group của SAP để một bút toán tự động ghi khác giá trị cho từng chuẩn.

**Ưu điểm chung của sổ song song:** điều chỉnh gắn với giao dịch và chạy cùng quy trình khoá sổ; số IFRS có sẵn trong hệ thống.

**Nhược điểm chung:** cấu hình phức tạp hơn; mỗi quy trình cuối kỳ phải chạy và kiểm tra cho từng sổ (SAP nêu phần lớn hoạt động khoá sổ chạy cho từng sổ riêng); dữ liệu tăng.

## Phương án 3: COA tập đoàn làm chính

Pháp nhân hạch toán hằng ngày trên COA tập đoàn (COA vận hành), số hiệu TT99 được giữ như hệ thống tài khoản thay thế.

SAP S/4HANA Cloud mô tả mô hình này: mọi company code dùng chung một COA vận hành (mặc định YCOA, dùng được cho mọi quốc gia); mỗi company code có thể có thêm một COA thay thế (local COA) chứa tài khoản đáp ứng yêu cầu luật định của quốc gia. Tài khoản COA vận hành gắn với tài khoản thay thế; người dùng có thể nhập bút toán thủ công bằng số tài khoản thay thế, và báo cáo cân đối, kết quả kinh doanh có thể hiển thị theo số tài khoản thay thế. Gộp nhiều company code dùng các COA thay thế khác nhau thì phải báo cáo theo COA vận hành hoặc COA tập đoàn.

Phương án này thường đi cùng sổ song song (sổ chính theo nguyên tắc tập đoàn, sổ phụ theo VAS như khuyến nghị của SAP), vì COA làm chính chỉ giải quyết khác biệt phân loại tài khoản, không giải quyết khác biệt đo lường.

**Ưu điểm:** số liệu tập đoàn có ngay khi ghi sổ, không cần mapping cuối kỳ; COA thống nhất giữa các pháp nhân.

**Nhược điểm:** người dùng Việt Nam làm việc trên số hiệu không quen; quan hệ COA vận hành – COA thay thế phải được thiết kế để mọi dòng VAS lên đúng tài khoản TT99. Khi một tài khoản tập đoàn ứng nhiều tài khoản TT99 hoặc ngược lại, vấn đề mapping trong [[ktqt-09-mapping-coa-tap-doan]] chỉ chuyển chỗ, không biến mất.

> ⚠️ Cần xác nhận: sổ kế toán xuất theo hệ thống tài khoản thay thế có được coi là đáp ứng Điều 11 và Điều 28 TT99 (sổ theo hệ thống tài khoản Phụ lục II hoặc Quy chế hạch toán) hay không. Cần ý kiến kế toán trưởng, kiểm toán của pháp nhân.

## So sánh

| | Một sổ + mapping + điều chỉnh | Sổ song song | COA tập đoàn làm chính |
|---|---|---|---|
| Ghi sổ hằng ngày | Theo TT99 | Một lần, hệ thống ghi vào các sổ; bút toán riêng chỉ cho phần khác biệt | Theo COA tập đoàn, ánh xạ sang TT99 |
| Nơi chứa điều chỉnh IFRS | Ngoài sổ hoặc tập bút toán riêng | Trong sổ theo chuẩn tương ứng | Cần thêm sổ song song hoặc lớp điều chỉnh |
| Mapping cuối kỳ | Có | Có nếu COA sổ khác COA tập đoàn | Không (đã ánh xạ từ đầu) |
| Kiểm soát | Truy vết điều chỉnh khó hơn | Truy vết theo bút toán; phải khoá sổ từng sổ | Phải kiểm soát quan hệ COA vận hành – COA thay thế |
| Đối chiếu VAS – IFRS | Bằng bảng điều chỉnh | Chênh lệch giữa các sổ | Tuỳ kiến trúc sổ đi kèm |
| Cấu hình | Đơn giản | Phức tạp nhất | Trung bình đến phức tạp |

Dù chọn phương án nào, cuối kỳ vẫn phải ra được bảng đối chiếu lợi nhuận và vốn chủ giữa VAS và IFRS ([[ktqt-12-bao-cao-cho-tap-doan]]).

## Câu hỏi BA cần chốt

- Tập đoàn yêu cầu gì: gói báo cáo theo COA tập đoàn đã điều chỉnh IFRS, hay số VAS để tập đoàn tự điều chỉnh?
- Có bao nhiêu điều chỉnh, phát sinh ở phân hệ nào (tài sản, thuê, doanh thu), tần suất ra sao?
- ERP đang dùng hỗ trợ cách nào: nhiều sổ cái, thêm tài khoản, COA thay thế? Giới hạn số sổ và việc không thêm sổ được sau khi đi vào vận hành (như SAP Cloud) ảnh hưởng thế nào tới lộ trình?
- Năm tài chính của pháp nhân và tập đoàn có trùng không (sổ phụ SAP có thể khác năm tài chính, extension ledger thì không)?

## Nguồn

- Thông tư 99/2025/TT-BTC, Điều 11 (hệ thống tài khoản), Điều 28 (phần mềm kế toán): https://luatvietnam.vn/doanh-nghiep/thong-tu-99-2025-tt-btc-huong-dan-che-do-ke-toan-doanh-nghiep-tu-01-01-2026-417085-d1.html
- Deloitte Việt Nam, *Những câu hỏi thường gặp – Chuyển đổi áp dụng IFRS tại doanh nghiệp*, câu 13: https://www2.deloitte.com/content/dam/Deloitte/vn/Documents/audit/vn-aud-ifrs-faq-vi.pdf
- Deloitte Việt Nam, *The conversion of VAS to IFRS – Volume one*, Part 1 "How much time will this journey take?", Part 3 "Information Technology Impacts and Preparation": https://www.deloitte.com/content/dam/assets-zone1/southeast-asia/en/docs/services/audit-assurance/2024/vn-aud-the-conversion-vas-to-ifrs-vol-1-en.pdf
- SAP Help Portal, SAP S/4HANA Cloud Public Edition (2608), *Parallel Accounting Using Parallel Ledgers*: https://help.sap.com/docs/SAP_S4HANA_CLOUD/0fa84c9d9c634132b7c4abb9ffdd8f06/08fc513328be4501bf2e42283313b820.html
- SAP Help Portal, SAP S/4HANA (on-premise), *Portrayal Using Parallel Ledgers*: https://help.sap.com/docs/SAP_S4HANA_ON-PREMISE/651d8af3ea974ad1a4d74449122c620e/f94fd7531a4d424de10000000a174cb4.html
- SAP Help Portal, SAP S/4HANA (on-premise), *Ledger* (leading, non-leading, extension ledgers): https://help.sap.com/docs/SAP_S4HANA_ON-PREMISE/651d8af3ea974ad1a4d74449122c620e/8a4fd7531a4d424de10000000a174cb4.html
- SAP Help Portal, SAP S/4HANA (on-premise), *Accounts Approach in Asset Accounting*: https://help.sap.com/docs/SAP_S4HANA_ON-PREMISE/67e323b7117e4c91869c258933f47182/defa455384877425e10000000a44176d.html
- SAP Help Portal, SAP S/4HANA Cloud Public Edition, *Chart of Accounts: Different Types*: https://help.sap.com/docs/SAP_S4HANA_CLOUD/0fa84c9d9c634132b7c4abb9ffdd8f06/32ed3c6435ea46afb4dbab6839fabe8e.html
- Odoo 19 Documentation, Accounting – Consolidation (Multi-Ledgers, Multi-Company Selector): https://www.odoo.com/documentation/19.0/applications/finance/accounting/get_started/consolidation.html
