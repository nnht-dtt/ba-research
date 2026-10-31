# Báo cáo lưu chuyển tiền tệ (B03-DN): hệ thống cần dữ liệu gì

Bài này giúp bạn hiểu ba nhóm luồng tiền, hai phương pháp lập báo cáo lưu chuyển tiền tệ, và vì sao báo cáo này đòi hỏi dữ liệu mà các báo cáo khác không cần: mỗi khoản thu, chi tiền phải biết thuộc hoạt động nào. Đây là điểm BA cần chốt sớm khi thiết kế phân hệ tiền và công nợ.

## Báo cáo này cho biết gì

Chuẩn mực VAS 24 coi báo cáo lưu chuyển tiền tệ là bộ phận hợp thành của BCTC, giúp đánh giá thay đổi trong tài sản thuần, cơ cấu tài chính, khả năng thanh toán và khả năng tạo tiền. Báo cáo loại trừ ảnh hưởng của việc dùng các phương pháp kế toán khác nhau cho cùng giao dịch, nên tăng khả năng so sánh giữa các doanh nghiệp.

Các định nghĩa nền (VAS 24 đoạn 04):

- **Tiền**: tiền tại quỹ, tiền đang chuyển, tiền gửi không kỳ hạn.
- **Tương đương tiền**: khoản đầu tư ngắn hạn (không quá 3 tháng), dễ chuyển thành một lượng tiền xác định, ít rủi ro chuyển đổi. Phụ lục IV TT99 nói rõ thời hạn 3 tháng tính từ ngày mua khoản đầu tư.
- **Luồng tiền**: luồng vào và luồng ra của tiền và tương đương tiền, **không gồm** chuyển dịch nội bộ giữa các khoản tiền và tương đương tiền. Ví dụ rút tiền gửi về quỹ tiền mặt không phải là một luồng tiền.

## Ba nhóm hoạt động

VAS 24 (đoạn 05) và Phụ lục IV TT99 (mục D.1.3) yêu cầu trình bày luồng tiền theo ba loại hoạt động:

- **Hoạt động kinh doanh**: hoạt động tạo ra doanh thu chủ yếu và các hoạt động khác không phải đầu tư hay tài chính. Ví dụ: thu tiền bán hàng; trả tiền nhà cung cấp; trả lương; trả lãi vay; nộp thuế TNDN; thu hoàn thuế; tiền phạt, bồi thường. Mua bán chứng khoán vì mục đích thương mại cũng thuộc nhóm này.
- **Hoạt động đầu tư**: mua sắm, xây dựng, thanh lý tài sản dài hạn và các khoản đầu tư khác không thuộc tương đương tiền. Ví dụ: chi mua sắm, xây dựng TSCĐ; thu thanh lý TSCĐ; cho vay, thu hồi cho vay; góp vốn, thu hồi vốn góp; thu lãi cho vay, cổ tức, lợi nhuận được chia.
- **Hoạt động tài chính**: hoạt động làm thay đổi quy mô và kết cấu vốn chủ sở hữu và vốn vay. Ví dụ: nhận vốn góp, phát hành cổ phiếu; trả lại vốn góp, mua lại cổ phiếu; đi vay; trả nợ gốc vay; trả nợ thuê tài chính; trả cổ tức, lợi nhuận cho chủ sở hữu.

VAS 24 đoạn 07 nêu điểm quan trọng: **một giao dịch đơn lẻ có thể thuộc nhiều nhóm**. Trả ngân hàng một khoản gồm gốc và lãi thì phần lãi thuộc hoạt động kinh doanh, phần gốc thuộc hoạt động tài chính.

## Mẫu biểu và mã số

Phần đầu tư (Mã số 21 đến 27, tổng 30) và tài chính (31 đến 36, tổng 40) giống nhau ở hai phương pháp. Khác nhau ở phần hoạt động kinh doanh:

| Phương pháp trực tiếp | Mã số | Phương pháp gián tiếp | Mã số |
|---|---|---|---|
| Tiền thu từ bán hàng, cung cấp dịch vụ và doanh thu khác | 01 | Lợi nhuận trước thuế | 01 |
| Tiền chi trả cho người cung cấp hàng hoá, dịch vụ | 02 | Khấu hao TSCĐ và BĐSĐT; các khoản dự phòng; lãi, lỗ tỷ giá do đánh giá lại; lãi, lỗ từ hoạt động đầu tư, tài chính; chi phí đi vay; điều chỉnh khác | 02 đến 07 |
| Tiền chi trả cho người lao động | 03 | Lợi nhuận từ hoạt động kinh doanh trước thay đổi vốn lưu động | 08 |
| Chi phí đi vay đã trả | 04 | Tăng, giảm phải thu; hàng tồn kho; phải trả; chi phí chờ phân bổ; chứng khoán kinh doanh | 09 đến 13 |
| Thuế TNDN đã nộp | 05 | Chi phí đi vay đã trả; thuế TNDN đã nộp | 14, 15 |
| Tiền thu khác, tiền chi khác từ hoạt động kinh doanh | 06, 07 | Tiền thu khác, tiền chi khác | 16, 17 |
| Lưu chuyển tiền thuần từ hoạt động kinh doanh | 20 | Lưu chuyển tiền thuần từ hoạt động kinh doanh | 20 |

Phần cuối chung cho cả hai: Mã số 50 = 20 + 30 + 40; Mã số 60 tiền đầu kỳ; Mã số 61 ảnh hưởng của thay đổi tỷ giá do đánh giá lại số dư tiền và tương đương tiền bằng ngoại tệ cuối kỳ; Mã số 70 = 50 + 60 + 61, và phải bằng Mã số 110 trên Báo cáo tình hình tài chính ([[kt-39-bao-cao-tinh-hinh-tai-chinh]]).

## Trực tiếp và gián tiếp: dữ liệu khác nhau thế nào

**Phương pháp trực tiếp** phân tích và tổng hợp trực tiếp các khoản thu, chi theo từng nội dung từ sổ kế toán. Ví dụ Mã số 01 lấy từ phần thu của sổ TK 111, 112, đối chiếu với sổ TK 511, 131. Mã số 02 lấy từ phần chi TK 111, 112 đối chiếu TK 331 và tài khoản hàng tồn kho. Phương pháp này cần biết **mỗi dòng tiền** thuộc nội dung nào.

**Phương pháp gián tiếp** đi từ lợi nhuận trước thuế (Mã số 50 của B02-DN), cộng trừ các khoản không bằng tiền (khấu hao, dự phòng, lãi lỗ tỷ giá chưa thực hiện), loại các khoản lãi lỗ thuộc hoạt động đầu tư, tài chính, rồi điều chỉnh thay đổi vốn lưu động (chênh lệch số dư đầu kỳ, cuối kỳ của phải thu, hàng tồn kho, phải trả). Phương pháp này cần **số dư đầu kỳ, cuối kỳ được tách theo hoạt động**. Ví dụ Mã số 09 lấy chênh lệch số dư đầu kỳ, cuối kỳ của các tài khoản phải thu (131, 136, 138, 133, 141, 244 và TK 331 gồm cả số đã trả trước cho người bán), chi tiết phần liên quan sản xuất, kinh doanh. Mã số 11 không tính lãi vay phải trả và thuế TNDN phải nộp (hai khoản này đi qua Mã số 14, 15).

VAS 24 (đoạn 16) cho chọn một trong hai phương pháp cho luồng tiền từ hoạt động kinh doanh. Dù chọn phương pháp nào, phần đầu tư và tài chính vẫn lập theo kiểu trực tiếp, nên dữ liệu phân loại dòng tiền vẫn cần.

> 💡 Với khấu hao, Phụ lục IV phân biệt: nếu bóc tách được khấu hao còn nằm trong hàng tồn kho cuối kỳ thì Mã số 02 chỉ gồm khấu hao đã vào kết quả kinh doanh; nếu không bóc tách được thì Mã số 02 gồm cả phần trong hàng tồn kho và Mã số 10 tương ứng gồm phần đó. Khấu hao nằm trong XDCB dở dang luôn phải loại ra.

## Yêu cầu mở sổ: gắn mã dòng tiền

Phụ lục IV TT99 có hẳn một mục "Yêu cầu về mở và ghi sổ kế toán phục vụ lập Báo cáo lưu chuyển tiền tệ" (mục D.3). Đây là phần BA cần đọc kỹ nhất:

- Sổ chi tiết **phải thu, phải trả, hàng tồn kho** phải theo dõi chi tiết cho từng giao dịch để trình bày được luồng tiền thu hồi hoặc thanh toán theo ba loại hoạt động. Ví dụ: trả nợ nhà thầu xây dựng cơ bản là luồng tiền đầu tư; trả nợ nhà cung cấp hàng hoá dịch vụ cho sản xuất kinh doanh là luồng tiền kinh doanh. Cả hai đều ghi `Nợ TK 331 / Có TK 112`.
- Sổ chi tiết **tiền** phải chi tiết theo các luồng thu, chi của ba loại hoạt động. Ví dụ trả ngân hàng gốc và lãi thì phải phản ánh riêng tiền trả lãi (kinh doanh hoặc đầu tư) và tiền trả gốc (tài chính).
- Cuối niên độ phải xác định các khoản đầu tư ngắn hạn thoả định nghĩa tương đương tiền để loại khỏi luồng tiền đầu tư và cộng vào tiền cuối kỳ.

Từ đó, một cách thiết kế thường dùng trên ERP là **mã dòng tiền** (cash flow code) gắn ở dòng bút toán tiền. Cách gán có thể theo các tầng sau (đây là gợi ý thiết kế, không phải quy định):

1. **Mặc định theo tài khoản đối ứng**: thu từ TK 131 mặc định Mã số 01, chi trả TK 334 mặc định Mã số 03, chi cho TK 211, 241 mặc định Mã số 21, thu từ TK 341 mặc định Mã số 33.
2. **Ghi đè theo đối tượng hoặc hợp đồng**: nhà cung cấp là nhà thầu XDCB, hợp đồng vay, khoản cho vay... mang sẵn mã dòng tiền riêng.
3. **Tách dòng khi một chứng từ có nhiều nhóm**: phiếu chi trả ngân hàng gồm gốc và lãi phải tách hai dòng (Mã số 34 và 04).
4. **Không gắn mã cho chuyển tiền nội bộ** giữa quỹ và ngân hàng, giữa hai tài khoản ngân hàng của doanh nghiệp.

> ⚠️ Nếu hệ thống chỉ mặc định theo tài khoản đối ứng, khoản trả nhà thầu XDCB qua TK 331 sẽ rơi vào Mã số 02 thay vì Mã số 21. Phải có cơ chế phân biệt từ khâu ghi nhận công nợ (ví dụ tài khoản chi tiết 331 cho XDCB, hoặc thuộc tính trên hợp đồng mua).

## Các tình huống đặc biệt trong Phụ lục IV

- **Báo cáo thuần** (mục D.1.5): thu chi hộ khách hàng (tiền thuê thu hộ rồi trả chủ tài sản); các khoản có vòng quay nhanh, đáo hạn ngắn như mua bán ngoại tệ, đi vay hoặc cho vay ngắn hạn không quá 3 tháng.
- **Giao dịch không dùng tiền không trình bày** (D.1.7): mua tài sản bằng cách nhận nợ hoặc thuê tài chính; mua doanh nghiệp bằng phát hành cổ phiếu; chuyển nợ thành vốn chủ sở hữu. Thông tin này đưa sang thuyết minh (mục giao dịch không bằng tiền trong B09-DN).
- **Vay chuyển thẳng cho nhà cung cấp** (D.1.10): tiền vay không qua tài khoản doanh nghiệp vẫn phải trình bày: số đi vay là luồng vào hoạt động tài chính; số trả nhà cung cấp là luồng ra hoạt động kinh doanh hoặc đầu tư. Trên sổ không có bút toán tiền, nên hệ thống cần cách đánh dấu riêng cho nghiệp vụ này.
- **Thanh toán bù trừ** (D.1.11): bù trừ trong cùng một nhóm luồng tiền thì trình bày thuần; bù trừ giữa hai nhóm khác nhau (ví dụ tiền bán hàng phải thu bù với khoản đi vay) thì phải trình bày riêng từng giao dịch. Nghiệp vụ cấn trừ công nợ ([[kt-15-tam-ung-dat-coc-can-tru]]) vì vậy có ảnh hưởng tới báo cáo này.
- **Tiền bị hạn chế**: phải trình bày giá trị và lý do các khoản tiền có số dư lớn mà doanh nghiệp nắm giữ nhưng không được sử dụng (D.1.9).
- **Ngoại tệ**: luồng tiền bằng ngoại tệ quy đổi theo tỷ giá tại thời điểm phát sinh giao dịch (D.1.6); chênh lệch đánh giá lại số dư tiền cuối kỳ đưa vào Mã số 61.
- **Chi phí đi vay được vốn hoá** đã trả thì thuộc luồng tiền đầu tư, không vào Mã số 04 (phương pháp trực tiếp).

## Kiểm tra báo cáo

Hai phép thử nhanh khi nghiệm thu báo cáo trên hệ thống:

1. Mã số 70 bằng Mã số 110 cuối kỳ trên Báo cáo tình hình tài chính; Mã số 60 bằng Mã số 110 đầu kỳ.
2. Tổng các dòng tiền không gắn mã trong kỳ bằng 0 (chỉ còn chuyển tiền nội bộ). Nếu còn dòng tiền chưa gắn mã, báo cáo trực tiếp sẽ thiếu số.

> 📌 Ví dụ giả định (triệu đồng): ngày 30/6 doanh nghiệp chuyển khoản 1.050 trả ngân hàng, gồm 1.000 gốc vay và 50 lãi. Bút toán `Nợ TK 341: 1.000; Nợ TK 335 (hoặc 635): 50 / Có TK 112: 1.050`. Trên B03-DN: 1.000 vào Mã số 34 (trả nợ gốc vay, hoạt động tài chính), 50 vào Mã số 04 (chi phí đi vay đã trả, hoạt động kinh doanh).

## Nguồn

- Chuẩn mực kế toán số 24 – Báo cáo lưu chuyển tiền tệ (Quyết định 165/2002/QĐ-BTC): đoạn 03 đến 11, 16. https://vanban.vcci.com.vn/quyet-dinh-1652002qd-btc-cua-bo-tai-chinh-ve-viec-ban-hanh-va-cong-bo-sau-06-chuan-muc-ke-toan-viet-nam-dot-2
- Thông tư 99/2025/TT-BTC, Phụ lục IV: mẫu B03-DN (trực tiếp, gián tiếp) và Mục 2 phần D (nguyên tắc 1.1 đến 1.12, cơ sở lập, yêu cầu mở sổ, phương pháp lập từng chỉ tiêu). https://luatvietnam.vn/doanh-nghiep/thong-tu-99-2025-tt-btc-huong-dan-che-do-ke-toan-doanh-nghiep-tu-01-01-2026-417085-d1.html
- Thông tư 99/2025/TT-BTC, Phụ lục IV: mẫu B09-DN, phần thông tin bổ sung cho Báo cáo lưu chuyển tiền tệ.
