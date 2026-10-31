# Ghi sổ kép, Nợ/Có và đọc một bút toán

Bài này giúp BA đọc được một bút toán do hệ thống sinh ra: dòng nào ghi Nợ, dòng nào ghi Có, vì sao tổng hai bên phải bằng nhau, và bút toán đó làm thay đổi tài sản, nguồn vốn, doanh thu hay chi phí. Đây là kỹ năng dùng hằng ngày khi review cấu hình tự động hạch toán và khi đối chiếu số liệu UAT.

## Tài khoản kế toán là gì

Luật Kế toán quy định: tài khoản kế toán dùng để **phân loại và hệ thống hoá các nghiệp vụ kinh tế, tài chính theo nội dung kinh tế** (khoản 1 Điều 22). Mỗi đơn vị kế toán chỉ dùng **một** hệ thống tài khoản cho mục đích kế toán tài chính theo quy định của Bộ Tài chính (khoản 2 Điều 22). Doanh nghiệp được mở chi tiết các tài khoản đã chọn để phục vụ quản lý (khoản 2 Điều 23). Với doanh nghiệp, hệ thống đó nằm ở Phụ lục II Thông tư 99/2025/TT-BTC (TT99), xem [[kt-08-he-thong-tai-khoan-tt99]].

Mỗi tài khoản trong Phụ lục II được mô tả theo cùng một khung "Kết cấu và nội dung phản ánh": **Bên Nợ** ghi gì, **Bên Có** ghi gì, và **Số dư** nằm bên nào hoặc không có số dư. Muốn biết một nghiệp vụ ghi vào bên nào của tài khoản, đọc đúng khung này của tài khoản đó.

### Hình dung bằng chữ T

Bài này vẽ mỗi tài khoản như một chữ T: một bên là Nợ, một bên là Có, theo đúng thứ tự cột "ghi Nợ, ghi Có" của mẫu Sổ Cái S02c1-DN (TT99 Phụ lục III). Ví dụ TK 111 - Tiền mặt sau ba nghiệp vụ (ví dụ giả định, đơn vị triệu đồng):

```
            TK 111 - Tiền mặt
  Nợ                          Có
  Số dư đầu kỳ     20 |
  Thu bán hàng     30 | Chi tạm ứng      5
                      | Nộp vào ngân hàng 25
  ---------------------------------------
  Cộng phát sinh   30 | Cộng phát sinh   30
  Số dư cuối kỳ    20 |
```

Số dư cuối kỳ = Số dư đầu kỳ + Phát sinh tăng − Phát sinh giảm. Với tài khoản dư Nợ như TK 111: 20 + 30 − 30 = 20. Tài liệu Odoo 19 viết gọn công thức số dư là "Balance = Debit − Credit".

## Quy tắc ghi Nợ/Có theo loại tài khoản

"Nợ" và "Có" chỉ là tên hai bên của tài khoản, không mang nghĩa "nợ tiền" hay "có tiền". Tăng ghi bên nào là do kết cấu của từng loại tài khoản. Đọc kết cấu các tài khoản tiêu biểu trong Phụ lục II TT99 rút ra được bảng sau:

| Loại tài khoản | Tăng ghi | Giảm ghi | Số dư | Ví dụ trong Phụ lục II |
|---|---|---|---|---|
| Tài sản | Nợ | Có | Nợ | 111, 131, 133, 156 |
| Nợ phải trả | Có | Nợ | Có | 331, 338 |
| Vốn chủ sở hữu | Có | Nợ | Có | 411, 421 (lãi) |
| Doanh thu, thu nhập khác | Có (phát sinh) | Nợ (giảm trừ, kết chuyển) | Không có | 511, 515, 711 |
| Chi phí | Nợ (phát sinh) | Có (ghi giảm, kết chuyển) | Không có | 632, 641, 642, 811 |
| Xác định kết quả | Có: doanh thu, thu nhập kết chuyển vào; Nợ: chi phí kết chuyển vào | | Không có | 911 |

Bảng này khớp với phương trình ở [[kt-06-phuong-trinh-ke-toan]]: tài sản nằm vế trái nên tăng ghi Nợ; nợ phải trả và vốn chủ sở hữu nằm vế phải nên tăng ghi Có. Doanh thu làm tăng vốn chủ sở hữu nên phát sinh bên Có. Chi phí làm giảm vốn chủ sở hữu nên phát sinh bên Nợ.

### Các tài khoản "ngược chiều" cần nhớ

Theo kết cấu trong Phụ lục II:

- **TK 214 - Hao mòn TSCĐ**: thuộc loại tài sản nhưng trích khấu hao ghi **Có**, số dư **Có**.
- **TK 229 - Dự phòng tổn thất tài sản**: trích lập ghi **Có**, số dư **Có**.
- **TK 521 - Các khoản giảm trừ doanh thu**: thuộc loại doanh thu nhưng chiết khấu thương mại, giảm giá, hàng bán bị trả lại ghi **Nợ**, cuối kỳ kết chuyển sang TK 511.
- **TK 419 - Cổ phiếu mua lại của chính mình**: thuộc vốn chủ sở hữu nhưng số dư **Nợ**.
- **TK 131, 331**: số dư thông thường của TK 131 là Nợ, TK 331 là Có. Nhưng theo từng đối tượng, TK 131 có thể dư Có (khách trả trước), TK 331 có thể dư Nợ (ứng trước cho người bán).

> ⚠️ Khi thiết kế báo cáo hoặc kiểm tra số dư âm trong ERP, đừng áp một quy tắc "tài sản luôn dư Nợ" cho mọi tài khoản đầu 1, 2. Các tài khoản trên sẽ bị báo sai.

## Ghi sổ kép và định khoản

Ghi sổ kép nghĩa là mỗi nghiệp vụ được ghi đồng thời vào ít nhất hai tài khoản: ít nhất một tài khoản ghi Nợ, ít nhất một tài khoản ghi Có, với **tổng số tiền ghi Nợ bằng tổng số tiền ghi Có**. Tài liệu Odoo 19 diễn đạt: mỗi giao dịch được ghi nhận bằng cách ghi Nợ và ghi Có nhiều tài khoản trong một bút toán (journal entry).

Việc xác định tài khoản ghi Nợ, tài khoản ghi Có cho một nghiệp vụ gọi là **định khoản**. Mẫu Sổ Nhật ký chung S03a-DN (TT99 Phụ lục III, phần C) quy định cột "Số hiệu tài khoản" ghi theo định khoản: **tài khoản ghi Nợ ghi trước, tài khoản ghi Có ghi sau, mỗi tài khoản một dòng riêng**. Bút toán trong ERP được trình bày theo đúng logic đó: mỗi dòng (journal item) là một tài khoản, có số tiền ở cột Nợ hoặc cột Có.

Vì từng bút toán đều cân, cả kỳ cũng phải cân. Phụ lục III yêu cầu Bảng cân đối số phát sinh (S06-DN) bảo đảm: tổng số dư Nợ bằng tổng số dư Có (đầu kỳ và cuối kỳ), và tổng phát sinh Nợ bằng tổng phát sinh Có. Tổng phát sinh trên bảng này cũng phải bằng tổng phát sinh trên sổ Nhật ký chung cùng kỳ (Phụ lục III, phần B mục 2). Bảng này là công cụ kiểm tra số liệu ghi sổ, xem [[kt-10-so-con-so-cai]].

Bài này viết bút toán theo dạng `Nợ TK 156 / Có TK 331`: phần trước dấu `/` là các tài khoản ghi Nợ, phần sau là các tài khoản ghi Có.

## Đọc bút toán nhiều dòng do hệ thống sinh

Phần lớn bút toán trong ERP không chỉ có hai dòng. Dưới đây là ba bút toán điển hình của một vòng mua, bán. Định khoản lấy từ phần "Phương pháp kế toán" trong Phụ lục II TT99. Số liệu là ví dụ giả định, đơn vị đồng. Thuế GTGT chỉ để minh hoạ cách tách dòng; thuế suất và điều kiện khấu trừ xem ở [[kt-16-thue-gtgt-dau-vao]] và [[kt-22-thue-gtgt-dau-ra]].

**1. Nhập kho hàng mua chưa trả tiền**, căn cứ hoá đơn, phiếu nhập kho (TK 156, điểm 3.1.a):

| Tài khoản | Nợ | Có |
|---|---|---|
| 156 - Hàng hoá | 100.000.000 | |
| 1331 - Thuế GTGT được khấu trừ của hàng hoá, dịch vụ | 8.000.000 | |
| 331 - Phải trả cho người bán (chi tiết nhà cung cấp X) | | 108.000.000 |

Đọc: tài sản tăng hai khoản (hàng tồn kho và thuế được khấu trừ), nợ phải trả tăng một khoản bằng tổng giá thanh toán. Hai vế tăng cùng 108 triệu.

**2. Ghi nhận doanh thu bán hàng chưa thu tiền** (TK 511, điểm 3.1):

| Tài khoản | Nợ | Có |
|---|---|---|
| 131 - Phải thu của khách hàng (chi tiết khách hàng Y) | 162.000.000 | |
| 511 - Doanh thu bán hàng và cung cấp dịch vụ | | 150.000.000 |
| 33311 - Thuế GTGT đầu ra | | 12.000.000 |

Đọc: phải thu tăng theo tổng giá thanh toán, doanh thu ghi theo giá chưa thuế, thuế gián thu tách riêng thành nợ phải nộp. Đây là cách TT99 hướng dẫn khi tách được thuế: các khoản thuế gián thu phải nộp tách riêng theo từng loại ngay khi ghi nhận doanh thu (TK 111, điểm 3.1.a). Nếu chưa tách ngay được, doanh nghiệp ghi doanh thu gồm cả thuế rồi định kỳ ghi giảm doanh thu (điểm 3.1.b), nhưng khi lập BCTC phải loại toàn bộ thuế gián thu ra khỏi chỉ tiêu doanh thu (nguyên tắc kế toán các khoản doanh thu, điểm 4).

**3. Ghi nhận giá vốn của hàng đã bán** (TK 632, điểm 3.a):

| Tài khoản | Nợ | Có |
|---|---|---|
| 632 - Giá vốn hàng bán | 100.000.000 | |
| 156 - Hàng hoá | | 100.000.000 |

Bút toán 2 và 3 thường do hai chứng từ khác nhau sinh ra (hoá đơn và phiếu xuất kho), có thể ở hai thời điểm khác nhau tuỳ cấu hình. Thiếu bút toán 3 thì doanh thu lên báo cáo mà giá vốn không lên, lợi nhuận bị thổi phồng.

> 💡 Năm câu hỏi khi đọc một bút toán trong ERP:
> 1. Chứng từ nguồn là gì (hoá đơn, phiếu nhập, phiếu chi, bút toán tay)?
> 2. Tổng Nợ có bằng tổng Có không?
> 3. Mỗi dòng thuộc loại tài khoản nào, tăng hay giảm?
> 4. Dòng nào gắn đối tượng (khách hàng, nhà cung cấp, mặt hàng, kho)? Thiếu đối tượng thì sổ chi tiết lệch sổ cái.
> 5. Bút toán này lên chỉ tiêu nào của Báo cáo tình hình tài chính hoặc Báo cáo kết quả kinh doanh?

### Một bút toán có nhiều dòng cùng một tài khoản

Hệ thống thường sinh nhiều dòng Có TK 511 trong một bút toán, mỗi dòng một mặt hàng hoặc một chiều phân tích. Về mặt kế toán vẫn là một định khoản: Nợ 131 / Có 511 / Có 33311. Khi đối chiếu với kế toán, gộp các dòng cùng tài khoản và cùng đối tượng trước khi so.

## Kết chuyển cuối kỳ: ghi sổ kép giữa hai tài khoản tạm thời

Cuối kỳ, các tài khoản doanh thu và chi phí được kết chuyển về TK 911 (Phụ lục II, TK 911 điểm 3.a–i). Ví dụ:

- `Nợ TK 511 / Có TK 911`: kết chuyển doanh thu thuần.
- `Nợ TK 911 / Có TK 632`: kết chuyển giá vốn.
- `Nợ TK 911 / Có TK 641`, `Nợ TK 911 / Có TK 642`: kết chuyển chi phí bán hàng, chi phí quản lý.
- `Nợ TK 911 / Có TK 421` nếu lãi, hoặc `Nợ TK 421 / Có TK 911` nếu lỗ.

Đây vẫn là ghi sổ kép bình thường. Sau kết chuyển, các tài khoản loại 5–9 về số dư 0, còn TK 421 nhận kết quả kỳ. Trong ERP, bước này có thể là bút toán tự động khi khoá sổ, hoặc không ghi thành bút toán mà chỉ tính khi lập báo cáo. Cách nào thì cũng cần chốt với kế toán, xem [[kt-36-quy-trinh-khoa-so]].

## Nguồn

- Luật Kế toán số 88/2015/QH13 (văn bản hợp nhất 41/VBHN-VPQH, Công báo số 172 ngày 31/03/2026): Điều 22, Điều 23. https://cdn.thuvienphapluat.vn//uploads/Hoidapphapluat/2026/LNMT/Thang_4/260404/172_41_VBHN_VPQH.pdf
- Thông tư 99/2025/TT-BTC, Phụ lục II phần B: kết cấu TK 111, 131, 133, 156, 214, 229, 331, 338, 411, 419, 421, 511, 521, 632, 642, 911; phương pháp kế toán TK 111 (điểm 3.1.a, 3.1.b), nguyên tắc kế toán các khoản doanh thu (điểm 4), TK 156 (điểm 3.1.a), TK 511 (điểm 3.1), TK 632 (điểm 3.a), TK 911 (điểm 3.a–i). Phụ lục II (bản Word): https://cms.luatvietnam.vn/uploaded/Others/2025/11/16/Phu_luc_II._He_thong_tai_khoan_ke_toan_doanh_nghiep_1611132408.docx
- Thông tư 99/2025/TT-BTC, Phụ lục III: phần B mục 2 (hình thức Nhật ký chung), phần C mục I (Sổ Nhật ký chung S03a-DN, Sổ Cái S02c1-DN, Bảng cân đối số phát sinh S06-DN). https://luatvietnam.vn/doanh-nghiep/thong-tu-99-2025-tt-btc-huong-dan-che-do-ke-toan-doanh-nghiep-tu-01-01-2026-417085-d1.html
- Đại học Cần Thơ, Đề cương chi tiết môn Nguyên lý kế toán, chương 3 "Tài khoản và ghi sổ kép": https://tuyensinh.ctu.edu.vn/images/upload/TS_LT/decuongontap/NguyenLiKeToan.pdf
- Trường Đại học Sao Đỏ, Đề cương chi tiết học phần Nguyên lý kế toán (KETOAN 011, 2022), chương 4 "Tài khoản kế toán và phương pháp ghi sổ kép": https://saodo.edu.vn/uploads/about/ctdt2022/kt/ketoan011.pdf
- Học viện Ngân hàng, Đề cương chi tiết học phần Nguyên lý kế toán (ACT01A), chương 3 "Ghi nhận các giao dịch kinh tế": https://hvnh.edu.vn/medias/acc/Uploads/ACT01A_20De_20cuong_20chi_20tiet_20hoc_20phan_20Nguyen_20ly_20ke_20toan_20-_20ACT01A.pdf
- Odoo 19.0 Documentation, Accounting › Get started › Cheat sheet: https://www.odoo.com/documentation/19.0/applications/finance/accounting/get_started/cheat_sheet.html
