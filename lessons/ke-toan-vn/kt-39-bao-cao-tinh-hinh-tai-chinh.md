# Báo cáo tình hình tài chính (B01-DN) và mapping tài khoản

Bài này giúp bạn đọc được mẫu B01-DN theo TT99, biết mỗi chỉ tiêu lấy số dư từ tài khoản nào, và hiểu vì sao hệ thống phải giữ số dư chi tiết theo đối tượng và theo kỳ hạn thì mới lập được báo cáo đúng. Mapping tài khoản sang chỉ tiêu là phần việc BA hay phải xác nhận khi dựng báo cáo trên ERP.

## Báo cáo này cho biết gì

Phụ lục IV TT99 mô tả Báo cáo tình hình tài chính là báo cáo tổng hợp, phản ánh toàn bộ giá trị tài sản hiện có và nguồn hình thành tài sản đó tại một thời điểm. Báo cáo có hai cột số liệu "Số cuối năm" và "Số đầu năm"; cơ sở lập là sổ kế toán tổng hợp, sổ chi tiết hoặc bảng tổng hợp chi tiết, và báo cáo năm trước (cho cột đầu năm).

Đây là bức ảnh số dư tại ngày kết thúc kỳ, khác với Báo cáo kết quả hoạt động kinh doanh là số phát sinh trong kỳ. Vì vậy mọi chỉ tiêu B01-DN đều đọc từ **số dư** tài khoản, chưa bao giờ đọc từ số phát sinh.

## Kết cấu và mã số

| Phần | Mã số | Nhóm chính |
|---|---|---|
| A. Tài sản ngắn hạn | 100 | 110 Tiền và tương đương tiền; 120 Đầu tư tài chính ngắn hạn; 130 Phải thu ngắn hạn; 140 Hàng tồn kho; 150 Tài sản sinh học ngắn hạn; 160 Tài sản ngắn hạn khác |
| B. Tài sản dài hạn | 200 | 210 Phải thu dài hạn; 220 TSCĐ; 230 Tài sản sinh học dài hạn; 240 BĐSĐT; 250 Tài sản dở dang dài hạn; 260 Đầu tư tài chính dài hạn; 270 Tài sản dài hạn khác |
| Tổng cộng tài sản | 280 | 280 = 100 + 200 |
| C. Nợ phải trả | 300 | 310 Nợ ngắn hạn (311 đến 325); 330 Nợ dài hạn (331 đến 344) |
| D. Vốn chủ sở hữu | 400 | 411 Vốn góp của chủ sở hữu đến 420 Lợi nhuận sau thuế chưa phân phối |
| Tổng cộng nguồn vốn | 440 | 440 = 300 + 400 |

Mỗi chỉ tiêu tổng hợp là tổng các chỉ tiêu con, ví dụ Mã số 100 = 110 + 120 + 130 + 140 + 150 + 160, Mã số 220 = 221 + 224 + 227. Các chỉ tiêu dự phòng và hao mòn luỹ kế có dấu (*), ghi số âm trong ngoặc đơn.

So với mẫu TT200, bài so sánh của MISA (dùng để đối chiếu) chỉ ra các thay đổi đáng chú ý: thêm nhóm tài sản sinh học (150, 230); "Chi phí trả trước" đổi thành "Chi phí chờ phân bổ" (161, 271); "Doanh thu chưa thực hiện" đổi thành "Doanh thu chờ phân bổ" (319, 337); thêm "Phải trả cổ tức, lợi nhuận" (313); nhiều nhóm dài hạn bị dịch mã (BĐSĐT từ 230 sang 240, tài sản dở dang từ 240 sang 250...). Báo cáo dựng sẵn theo mã TT200 trên hệ thống cũ không dùng lại nguyên được.

## Ngắn hạn hay dài hạn: dữ liệu kỳ hạn

Điều 20 khoản 4 TT99 yêu cầu tài sản và nợ phải trả trình bày tách ngắn hạn, dài hạn, sắp theo tính thanh khoản giảm dần. Tóm tắt tiêu chí:

- **Tài sản ngắn hạn** khi: dự kiến thu hồi, bán hoặc dùng trong một chu kỳ kinh doanh thông thường; nắm giữ chủ yếu để thương mại; dự kiến thu hồi trong 12 tháng trở xuống kể từ ngày kết thúc kỳ; hoặc là tiền, tương đương tiền không bị hạn chế. Còn lại là dài hạn.
- **Nợ ngắn hạn** khi: dự kiến thanh toán trong một chu kỳ kinh doanh thông thường; nắm giữ chủ yếu vì mục đích kinh doanh; đến hạn trong 12 tháng trở xuống; hoặc doanh nghiệp không có quyền từ chối thanh toán trong 12 tháng tới. Các khoản là một phần vốn lưu động (phải trả nhà cung cấp, chi phí phải trả nhân viên...) xếp ngắn hạn kể cả khi thanh toán sau 12 tháng.
- Chu kỳ kinh doanh không xác định rõ thì coi là 12 tháng.
- Khi lập báo cáo phải **tái phân loại** khoản dài hạn kỳ trước thành ngắn hạn nếu nay thoả điều kiện ngắn hạn, trừ trường hợp TT99 không cho tái phân loại. Ví dụ Phụ lục IV ghi rõ chi phí chờ phân bổ dài hạn (Mã số 271) không tái phân loại thành ngắn hạn.

Hệ quả cho hệ thống: cùng một tài khoản (131, 331, 341, 242, 3387...) có thể rơi vào cả chỉ tiêu ngắn hạn lẫn dài hạn. Muốn tách tự động, số dư phải đi kèm ngày đến hạn hoặc kỳ hạn còn lại (theo hợp đồng vay, theo lịch phân bổ, theo hạn thanh toán của từng khoản công nợ). Nếu hệ thống không giữ dữ liệu này, kế toán sẽ phải tách tay mỗi kỳ.

> 💡 Ví dụ hay gặp: khoản vay dài hạn có phần gốc đến hạn trả trong 12 tháng tới. Phần đó lên Mã số 321 (Vay và nợ thuê tài chính ngắn hạn), phần còn lại lên Mã số 339. Lịch trả nợ của hợp đồng vay là dữ liệu đầu vào cần có ([[kt-32-tien-ngan-hang-vay]]).

## Tách dư Nợ, dư Có theo đối tượng

Nhiều tài khoản công nợ là tài khoản lưỡng tính: trên cùng tài khoản, có đối tượng dư Nợ, có đối tượng dư Có. Phụ lục IV không cho lấy số dư ròng của tài khoản tổng hợp mà yêu cầu lấy **tổng số dư Nợ chi tiết** và **tổng số dư Có chi tiết** theo từng đối tượng:

| Tài khoản | Dư Nợ chi tiết lên | Dư Có chi tiết lên |
|---|---|---|
| 131 Phải thu của khách hàng | 131 Phải thu ngắn hạn của khách hàng / 211 dài hạn | 312 Người mua trả tiền trước ngắn hạn / 332 dài hạn |
| 331 Phải trả cho người bán | 132 Trả trước cho người bán ngắn hạn / 212 dài hạn | 311 Phải trả người bán ngắn hạn / 331 dài hạn |
| 333 Thuế và các khoản phải nộp Nhà nước | 163 Thuế và các khoản khác phải thu Nhà nước (cùng 1383) | 314 ngắn hạn / 333 dài hạn |
| 334 Phải trả người lao động | 135 Phải thu ngắn hạn khác / 215 dài hạn | 315 Phải trả người lao động |
| 338 Phải trả, phải nộp khác | 135 / 215 | 320 Phải trả ngắn hạn khác / 338 dài hạn |
| 138 Phải thu khác | 135 / 215 (1388) | 320 Phải trả ngắn hạn khác |

Mã số 135 còn lấy dư Nợ chi tiết TK 141 Tạm ứng và TK 244 Ký quỹ, ký cược; Mã số 320 lấy thêm dư Có TK 344 Nhận ký quỹ, ký cược.

> ⚠️ Nếu cấu hình báo cáo lấy số dư ròng TK 131, khách hàng A dư Nợ 500 và khách hàng B dư Có 80 sẽ ra phải thu 420. Theo Phụ lục IV phải trình bày phải thu 500 (Mã số 131) và người mua trả tiền trước 80 (Mã số 312). Ví dụ giả định, đơn vị triệu đồng. Muốn làm đúng, sổ công nợ phải giữ số dư theo từng khách hàng, nhà cung cấp ([[kt-10-so-con-so-cai]]).

Điều 20 khoản 5 TT99 chỉ cho bù trừ tài sản và nợ phải trả khi liên quan đến cùng một đối tượng, có vòng quay nhanh, thời gian đáo hạn ngắn và phát sinh từ giao dịch cùng loại. VAS 21 (đoạn 25) cũng không cho bù trừ tài sản và nợ phải trả trừ khi chuẩn mực khác cho phép.

## Mapping các chỉ tiêu chính

Bảng dưới tóm tắt nguồn số liệu theo Phụ lục IV TT99, Mục 2 phần B. "Dư Nợ chi tiết" nghĩa là chỉ lấy phần thoả điều kiện (ngắn hạn, dài hạn, không bị hạn chế...).

| Mã số | Chỉ tiêu | Nguồn |
|---|---|---|
| 111 | Tiền | Dư Nợ TK 111, 112, 113 (phần không bị hạn chế sử dụng) |
| 112 | Các khoản tương đương tiền | Dư Nợ chi tiết TK 1281 (tiền gửi kỳ hạn gốc không quá 3 tháng), 1288 |
| 121, 122 | Chứng khoán kinh doanh; dự phòng | Dư Nợ TK 121; dư Có TK 2291 (âm) |
| 123 | Đầu tư nắm giữ đến ngày đáo hạn ngắn hạn | Dư Nợ chi tiết TK 1281, 1282, 1283, 1288 (không tính phần đã là tương đương tiền) |
| 136 | Dự phòng phải thu ngắn hạn khó đòi | Dư Có chi tiết TK 2293 (âm) |
| 137 | Tài sản thiếu chờ xử lý | Dư Nợ TK 1381 |
| 141 | Hàng tồn kho | Dư Nợ TK 151, 152, 153, 154, 155, 156, 157, 158 (trừ phần dài hạn) |
| 142 | Dự phòng giảm giá hàng tồn kho | Dư Có chi tiết TK 2294 (âm) |
| 161 / 271 | Chi phí chờ phân bổ ngắn hạn / dài hạn | Dư Nợ chi tiết TK 242 |
| 162 | Thuế GTGT được khấu trừ | Dư Nợ TK 133 |
| 165 | Tài sản ngắn hạn khác | Dư Nợ chi tiết TK 2288 và tiền bị hạn chế sử dụng trong ngắn hạn |
| 222, 223 | TSCĐ hữu hình: nguyên giá; hao mòn | Dư Nợ TK 211; dư Có TK 2141 (âm) |
| 225, 226 / 228, 229 | TSCĐ thuê tài chính / vô hình | TK 212, 2142 / TK 213, 2143 |
| 251 | Chi phí SXKD dở dang dài hạn | Phần TK 154 thu hồi trên 12 tháng hoặc hơn một chu kỳ |
| 252 | Chi phí xây dựng cơ bản dở dang | Dư Nợ TK 241 |
| 272 | Tài sản thuế thu nhập hoãn lại | Dư Nợ TK 243 |
| 313 | Phải trả cổ tức, lợi nhuận | Dư Có TK 332 |
| 316 | Chi phí phải trả ngắn hạn | Dư Có chi tiết TK 335 |
| 317 | Phải trả nội bộ ngắn hạn | Dư Có chi tiết TK 3362, 3363, 3368 |
| 319 / 337 | Doanh thu chờ phân bổ ngắn hạn / dài hạn | Dư Có chi tiết TK 3387 |
| 321 / 339 | Vay và nợ thuê tài chính ngắn hạn / dài hạn | Dư Có TK 341, 343 (321); TK 341, 3431 (339) |
| 322 | Dự phòng phải trả ngắn hạn | Dư Có chi tiết TK 352 |
| 323 | Quỹ khen thưởng, phúc lợi | Dư Có TK 353 |
| 342 | Thuế thu nhập hoãn lại phải trả | Dư Có TK 347 |
| 411 | Vốn góp của chủ sở hữu | Dư Có TK 4111 (công ty cổ phần tách 411a, 411b) |
| 412 | Thặng dư vốn | Dư Có TK 4112 |
| 415 | Cổ phiếu mua lại của chính mình | Dư Nợ TK 419 (âm) |
| 418 | Quỹ đầu tư phát triển | Dư Có TK 414 |
| 420 | Lợi nhuận sau thuế chưa phân phối | Dư Có TK 421; dư Nợ thì ghi âm. 420 = 420a + 420b |

Trên báo cáo năm, 420a lấy số dư TK 4211 (luỹ kế đến cuối năm trước) và 420b lấy số dư TK 4212 (năm nay). Trên báo cáo quý, 420a gồm TK 4211 cộng phần lợi nhuận năm nay luỹ kế đến đầu quý, 420b chỉ là phần phát sinh trong quý. Đây là lý do bút toán kết chuyển 4212 sang 4211 đầu năm ([[kt-36-quy-trinh-khoa-so]]) quan trọng với báo cáo.

## Các quy tắc cần cấu hình riêng

- **Tiền bị hạn chế sử dụng** không vào Mã số 110 mà vào 165 hoặc 274. Hệ thống cần đánh dấu tài khoản ngân hàng hoặc khoản tiền gửi bị phong toả, ký quỹ.
- **Tương đương tiền** chỉ gồm khoản đầu tư có thời hạn thu hồi không quá 3 tháng kể từ ngày đầu tư. Cần lưu ngày gửi và kỳ hạn gốc của từng hợp đồng tiền gửi để tách 112 với 123.
- **Tài sản thiếu chờ xử lý** (1381): nếu không có bằng chứng chắc chắn thu hồi được thì khi lập BCTC phải ghi vào chi phí và thuyết minh.
- **Đơn vị trực thuộc**: khi tổng hợp, Mã số 133 bù trừ với "Phải trả nội bộ ngắn hạn" của đơn vị trực thuộc; Mã số 213 (vốn kinh doanh ở đơn vị trực thuộc, dư Nợ TK 1361) bù trừ với Mã số 335 hoặc 411 bên đơn vị trực thuộc.
- **Thuế hoãn lại**: TK 243 và TK 347 chỉ bù trừ khi lập báo cáo, không bù trừ trên sổ ([[kt-37-thue-tndn]]).

## Điểm chạm hệ thống

ERP thường dựng báo cáo này bằng một bảng cấu hình: mỗi dòng có mã số, công thức tổng hợp từ dòng con, và quy tắc lấy số dư (tài khoản, dư Nợ hay dư Có, theo đối tượng hay theo tài khoản, lọc theo thuộc tính kỳ hạn). Khi xác nhận với kế toán khách, BA nên đi từng dòng có ghi "chi tiết" trong Phụ lục IV và hỏi: hệ thống lấy thuộc tính nào để chia? Nếu câu trả lời là "kế toán điều chỉnh tay", cần ghi nhận đó là thao tác thủ công định kỳ.

Báo cáo đúng khi Mã số 280 bằng Mã số 440. Lệch thường do còn tài khoản chưa được map, hoặc chưa kết chuyển hết các tài khoản không có số dư cuối kỳ.

## Nguồn

- Thông tư 99/2025/TT-BTC: Điều 17 khoản 4, Điều 20 khoản 4 và 5. https://luatvietnam.vn/doanh-nghiep/thong-tu-99-2025-tt-btc-huong-dan-che-do-ke-toan-doanh-nghiep-tu-01-01-2026-417085-d1.html
- Thông tư 99/2025/TT-BTC, Phụ lục IV: mẫu B01-DN và Mục 2 phần B mục 1 (nội dung, phương pháp lập từng chỉ tiêu), tải từ trang trên.
- Thông tư 99/2025/TT-BTC, Phụ lục II: hướng dẫn TK 243 (bù trừ khi lập báo cáo), TK 421 (4211, 4212). https://cms.luatvietnam.vn/uploaded/Others/2025/11/16/Phu_luc_II._He_thong_tai_khoan_ke_toan_doanh_nghiep_1611132408.docx
- Chuẩn mực kế toán số 21 – Trình bày báo cáo tài chính (Quyết định 234/2003/QĐ-BTC): đoạn 25, 37, 38. https://vanban.vcci.com.vn/quyet-dinh-2342003qd-btc-cua-bo-tai-chinh-ve-viec-ban-hanh-va-cong-bo-sau-06-chuan-muc-ke-toan-viet-nam-dot-3
- MISA AMIS, So sánh biểu mẫu BCTC giữa TT99 và TT200 (chỉ dùng đối chiếu). https://amis.misa.vn/251687/so-sanh-ve-bieu-mau-bao-cao-tai-chinh-giua-thong-tu-99-va-thong-tu-200/
