# Sổ con, sổ cái và đối tượng theo dõi: dữ liệu đi từ phân hệ lên sổ cái

Bài này giúp BA hiểu quan hệ giữa sổ chi tiết theo khách hàng, nhà cung cấp, vật tư, tài sản ("sổ con", subledger) và Sổ Cái. Bài cũng chỉ ra những trường đối tượng phải có trên chứng từ để hai bên khớp nhau, và việc đối chiếu sổ con với sổ cái cuối kỳ diễn ra thế nào. Thuật ngữ "sổ con" là cách gọi trong dự án ERP. Văn bản pháp luật gọi là **sổ, thẻ kế toán chi tiết**.

## Quy định về sổ kế toán

Luật Kế toán:

- Sổ kế toán dùng để ghi chép, hệ thống và lưu giữ toàn bộ nghiệp vụ kinh tế, tài chính đã phát sinh (khoản 1 Điều 24).
- Sổ phải có các nội dung chủ yếu: ngày ghi sổ; số hiệu và ngày của chứng từ làm căn cứ ghi sổ; tóm tắt nội dung nghiệp vụ; số tiền ghi vào các tài khoản; số dư đầu kỳ, số phát sinh trong kỳ, số dư cuối kỳ (khoản 3 Điều 24).
- **Sổ kế toán gồm sổ kế toán tổng hợp và sổ kế toán chi tiết** (khoản 4 Điều 24).
- Mỗi đơn vị chỉ dùng **một hệ thống sổ kế toán cho một kỳ kế toán năm** (khoản 2 Điều 25).
- Sổ mở đầu kỳ kế toán năm. Phải căn cứ chứng từ để ghi sổ. Ghi theo trình tự thời gian phát sinh, liên tục từ khi mở sổ đến khi khoá sổ. Số liệu năm sau phải kế tiếp năm trước. Khoá sổ cuối kỳ trước khi lập BCTC (Điều 26 khoản 1–4, 6).
- **Được ghi sổ bằng phương tiện điện tử**. Khi đó vẫn phải tuân thủ các quy định về sổ, trừ việc đóng dấu giáp lai. Sau khi khoá sổ phải in sổ ra giấy, đóng quyển theo từng kỳ kế toán năm để lưu trữ. Nếu không in thì lưu điện tử, bảo đảm an toàn, bảo mật và tra cứu được trong thời hạn lưu trữ (khoản 7 Điều 26).

Thông tư 99/2025/TT-BTC (TT99) Điều 12: doanh nghiệp **tham khảo** biểu mẫu sổ tại Phụ lục III. Doanh nghiệp được thiết kế thêm hoặc sửa đổi, miễn là tuân thủ khoản 1–4 Điều 24 Luật Kế toán, và phải ban hành Quy chế hạch toán kế toán cho phần sửa đổi. TT99 Điều 13 nhắc lại yêu cầu mở sổ, ghi sổ, khoá sổ.

## Sổ tổng hợp và sổ chi tiết theo Phụ lục III

Phụ lục III TT99 (phần B mục 1) phân loại:

- **Sổ kế toán tổng hợp**: Sổ Nhật ký và Sổ Cái.
  - *Sổ Nhật ký* ghi nghiệp vụ theo trình tự thời gian và quan hệ đối ứng tài khoản. Số liệu phản ánh tổng phát sinh Nợ và Có của tất cả tài khoản.
  - *Sổ Cái* ghi nghiệp vụ theo từng tài khoản trong hệ thống tài khoản. Số liệu phản ánh tổng hợp tình hình tài sản, nguồn vốn và kết quả kinh doanh.
- **Sổ, thẻ kế toán chi tiết**: ghi các nghiệp vụ liên quan đến **đối tượng kế toán cần theo dõi chi tiết** theo yêu cầu quản lý. Sổ chi tiết cung cấp thông tin về từng loại tài sản, nguồn vốn, doanh thu, chi phí mà Sổ Nhật ký và Sổ Cái chưa phản ánh. **Số lượng, kết cấu sổ chi tiết không quy định bắt buộc**.

Phụ lục III nêu năm hình thức sổ: Nhật ký chung; Nhật ký - Sổ Cái; Chứng từ ghi sổ; Nhật ký - Chứng từ; và **hình thức kế toán trên máy vi tính**. Danh mục phần A có 42 mẫu sổ (S01-DN đến S63-DN) và dòng "các sổ chi tiết khác theo yêu cầu quản lý của doanh nghiệp".

### Luồng ghi sổ theo hình thức Nhật ký chung

Phần lớn ERP vận hành gần với hình thức Nhật ký chung. Theo Phụ lục III (phần B mục 2):

<step-flow>
<svg viewBox="0 0 680 170" role="img" aria-labelledby="kt10s-t" style="width:100%;max-width:680px;height:auto;display:block;margin:1.25rem auto" font-family="ui-sans-serif, system-ui, sans-serif">
<title id="kt10s-t">Trình tự ghi sổ theo hình thức Nhật ký chung</title>
<defs>
<marker id="kt10s-arrow" markerWidth="9" markerHeight="9" refX="8" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 z" fill="currentColor"/></marker>
</defs>
<g data-step="1">
<rect x="10" y="55" width="120" height="56" rx="10" fill="#3b82f6" fill-opacity="0.13" stroke="currentColor" stroke-opacity="0.22"/>
<text x="70" y="88" font-size="13" text-anchor="middle" fill="currentColor">Chứng từ</text>
</g>
<g data-step="2">
<line x1="130" y1="70" x2="172" y2="40" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" marker-end="url(#kt10s-arrow)"/>
<line x1="130" y1="96" x2="172" y2="126" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" marker-end="url(#kt10s-arrow)"/>
<rect x="175" y="12" width="140" height="50" rx="10" fill="#f59e0b" fill-opacity="0.14" stroke="currentColor" stroke-opacity="0.22"/>
<text x="245" y="42" font-size="13" text-anchor="middle" fill="currentColor">Sổ Nhật ký chung</text>
<rect x="175" y="104" width="140" height="50" rx="10" fill="#f59e0b" fill-opacity="0.14" stroke="currentColor" stroke-opacity="0.22"/>
<text x="245" y="134" font-size="13" text-anchor="middle" fill="currentColor">Sổ, thẻ chi tiết</text>
</g>
<g data-step="3">
<line x1="315" y1="37" x2="357" y2="37" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" marker-end="url(#kt10s-arrow)"/>
<rect x="360" y="12" width="130" height="50" rx="10" fill="#8b5cf6" fill-opacity="0.14" stroke="currentColor" stroke-opacity="0.22"/>
<text x="425" y="42" font-size="13" text-anchor="middle" fill="currentColor">Sổ Cái</text>
<line x1="315" y1="129" x2="357" y2="129" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" marker-end="url(#kt10s-arrow)"/>
<rect x="360" y="104" width="130" height="50" rx="10" fill="#8b5cf6" fill-opacity="0.14" stroke="currentColor" stroke-opacity="0.22"/>
<text x="425" y="127" font-size="12" text-anchor="middle" fill="currentColor">Bảng tổng hợp</text>
<text x="425" y="143" font-size="12" text-anchor="middle" fill="currentColor">chi tiết</text>
</g>
<g data-step="4">
<line x1="490" y1="37" x2="530" y2="70" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" marker-end="url(#kt10s-arrow)"/>
<line x1="490" y1="129" x2="530" y2="96" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" marker-end="url(#kt10s-arrow)"/>
<line x1="425" y1="62" x2="425" y2="102" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" stroke-dasharray="4 3"/>
<rect x="533" y="55" width="137" height="56" rx="10" fill="#10b981" fill-opacity="0.16" stroke="currentColor" stroke-opacity="0.22"/>
<text x="601" y="80" font-size="12" text-anchor="middle" fill="currentColor">Bảng cân đối số</text>
<text x="601" y="96" font-size="12" text-anchor="middle" fill="currentColor">phát sinh → BCTC</text>
</g>
</svg>
<step-note data-step="1">Hằng ngày, chứng từ đã kiểm tra là căn cứ ghi sổ.</step-note>
<step-note data-step="2">Nghiệp vụ được ghi vào Sổ Nhật ký chung (hoặc sổ Nhật ký đặc biệt). Đồng thời, nghiệp vụ liên quan được ghi vào sổ, thẻ kế toán chi tiết nếu đơn vị có mở.</step-note>
<step-note data-step="3">Từ Nhật ký chung ghi vào Sổ Cái theo tài khoản. Cuối kỳ, từ sổ chi tiết lập Bảng tổng hợp chi tiết. Đường nét đứt là bước đối chiếu Sổ Cái với Bảng tổng hợp chi tiết.</step-note>
<step-note data-step="4">Cuối tháng, quý, năm: cộng Sổ Cái, lập Bảng cân đối số phát sinh. Sau khi đối chiếu khớp đúng, số liệu Sổ Cái và Bảng tổng hợp chi tiết được dùng để lập BCTC.</step-note>
</step-flow>

Phụ lục III còn cho phép mở **sổ Nhật ký đặc biệt** (Nhật ký thu tiền S03a1-DN, chi tiền S03a2-DN, mua hàng S03a3-DN, bán hàng S03a4-DN) cho đối tượng có nhiều phát sinh. Nghiệp vụ đã ghi vào nhật ký đặc biệt thì không ghi vào Nhật ký chung nữa, để tránh trùng (phần C mục 3).

Trong ERP, "sổ nhật ký" thường được tổ chức thành các journal (bán hàng, mua hàng, ngân hàng, tiền mặt, tổng hợp). Mỗi bút toán thuộc một journal, và Sổ Cái là cách xem cùng dữ liệu đó theo tài khoản. Vì vậy hệ thống không có bước "chuyển sổ" thủ công. Nhưng logic kiểm tra của Phụ lục III vẫn áp dụng.

## Đối tượng theo dõi chi tiết và mẫu sổ tương ứng

Phần B Phụ lục II TT99 bắt buộc theo dõi chi tiết nhiều tài khoản. Phần C Phụ lục III đưa mẫu sổ cho từng loại:

| Đối tượng | Yêu cầu chi tiết trong Phụ lục II | Mẫu sổ chi tiết (Phụ lục III) |
|---|---|---|
| Khách hàng (TK 131) | Hạch toán chi tiết cho từng đối tượng, từng nội dung phải thu, theo dõi kỳ hạn thu hồi (từ 12 tháng trở xuống hay trên 12 tháng), ghi theo từng lần thanh toán | S31-DN Sổ chi tiết thanh toán với người mua (người bán), mở theo từng tài khoản, từng đối tượng; S32-DN nếu bằng ngoại tệ |
| Nhà cung cấp (TK 331) và các khoản nợ phải trả | Theo dõi chi tiết theo từng đối tượng, kỳ hạn phải trả, loại nguyên tệ | S31-DN, S32-DN |
| Vật tư, hàng hoá (TK 152, 153, 155, 156, 158) | Theo từng kho, từng loại, từng mặt hàng, cả số lượng và giá trị | S10-DN Sổ chi tiết vật liệu, dụng cụ (sản phẩm, hàng hoá); S11-DN Bảng tổng hợp chi tiết; S12-DN Thẻ kho |
| Tài sản cố định (TK 211, 213) | TSCĐ hữu hình theo dõi chi tiết nguyên giá từng TSCĐ, theo từng đối tượng ghi TSCĐ, loại TSCĐ và địa điểm bảo quản, sử dụng; TSCĐ vô hình theo dõi chi tiết theo từng đối tượng ghi TSCĐ | S21-DN Sổ TSCĐ; S22-DN Sổ theo dõi TSCĐ và CCDC tại nơi sử dụng; S23-DN Thẻ TSCĐ |
| Tiền gửi (TK 112) | Chi tiết theo từng tài khoản ở từng ngân hàng | S08-DN Sổ tiền gửi không kỳ hạn |
| Tiền mặt (TK 111) | Sổ quỹ ghi liên tục hằng ngày, tính tồn quỹ mọi thời điểm | S07-DN Sổ quỹ tiền mặt; S07a-DN Sổ kế toán chi tiết quỹ tiền mặt |
| Doanh thu | Có thể mở chi tiết theo loại doanh thu | S35-DN Sổ chi tiết bán hàng |
| Các tài khoản khác: 136, 138, 141, 242, 333, 334, 335, 338, 411, 421… | | S38-DN Sổ chi tiết các tài khoản, mở theo từng tài khoản, từng đối tượng |

Trong ERP, cột "đối tượng" chính là các trường gắn trên dòng bút toán: đối tác (partner), sản phẩm, kho, mã tài sản, tài khoản ngân hàng. Một dòng ghi vào TK 131 mà không có khách hàng thì vẫn lên Sổ Cái TK 131, nhưng không lên sổ chi tiết của khách hàng nào. Đây là nguồn chênh lệch phổ biến nhất giữa sổ con và sổ cái.

> 💡 Với mỗi tài khoản trong bảng trên, nên chốt quy tắc "bắt buộc có đối tượng" ngay trong cấu hình. Ví dụ: không cho ghi sổ dòng TK 131, 331 thiếu đối tác; không cho ghi dòng TK 156 thiếu mặt hàng và kho. Bút toán tay (xem [[kt-11-but-toan-tong-hop-dieu-chinh]]) là chỗ hay lọt nhất.

### Số dư lưỡng tính phải xem theo từng đối tượng

Phụ lục II TT99 lưu ý: TK 131 có thể có số dư bên Có, phản ánh số tiền nhận trước hoặc thu thừa của khách hàng, **chi tiết theo từng đối tượng**. Khi lập Báo cáo tình hình tài chính, phải lấy số dư chi tiết theo từng đối tượng để ghi vào **cả hai chỉ tiêu** bên "Tài sản" và bên "Nguồn vốn". TK 331 tương tự với số dư Nợ (ứng trước cho người bán).

Hệ quả: báo cáo lấy số dư tổng của TK 131 trên Sổ Cái (đã bù trừ khách dư Nợ với khách dư Có) sẽ trình bày sai. Báo cáo phải đi từ sổ chi tiết theo đối tượng. Xem [[kt-21-cong-no-phai-thu]] và [[kt-39-bao-cao-tinh-hinh-tai-chinh]].

## Đối chiếu sổ con với sổ cái

Phụ lục III quy định rõ cách đối chiếu, lấy ví dụ hàng tồn kho:

- **Bảng tổng hợp chi tiết S11-DN** lập cuối tháng, mỗi tài khoản (152, 153, 155, 156, 158) một bảng, từ dòng cộng của các sổ chi tiết S10-DN. Dòng tổng của bảng được đối chiếu với Sổ Cái của tài khoản tương ứng theo bốn cặp: tồn đầu kỳ ↔ số dư đầu kỳ; nhập trong kỳ ↔ phát sinh Nợ; xuất trong kỳ ↔ phát sinh Có; tồn cuối kỳ ↔ số dư cuối kỳ.
- **Thẻ kho S12-DN** do thủ kho ghi, theo dõi **số lượng** nhập, xuất, tồn từng thứ hàng ở từng kho. Sổ chi tiết S10-DN của kế toán theo dõi cả số lượng và giá trị, làm căn cứ đối chiếu với ghi chép của thủ kho.
- **Bảng cân đối số phát sinh S06-DN** lập từ Sổ Cái. Bảng phải cân: tổng dư Nợ bằng tổng dư Có, tổng phát sinh Nợ bằng tổng phát sinh Có. Trước khi lập phải hoàn thành ghi sổ chi tiết, sổ tổng hợp và đối chiếu số liệu giữa các sổ liên quan.

Áp cùng logic cho công nợ: tổng số dư theo từng khách hàng trên sổ chi tiết TK 131 phải bằng số dư TK 131 trên Sổ Cái. Phát sinh tương tự.

Trong ERP, sổ con và sổ cái thường đọc từ cùng một bảng dòng bút toán, nên lệch thường không do "chưa chuyển sổ". Các nguyên nhân hay gặp:

- Bút toán tay vào tài khoản công nợ hoặc tồn kho không gắn đối tượng.
- Giá trị tồn kho trên phân hệ kho (định giá theo lớp, theo lô) lệch với số trên TK 156, do có bút toán điều chỉnh tay hoặc do cấu hình định giá không sinh bút toán cho một số loại dịch chuyển. Xem [[kt-23-dinh-gia-ton-kho]].
- Số dư đầu kỳ khi go-live nhập vào Sổ Cái theo tổng, nhưng sổ chi tiết theo đối tượng nhập thiếu hoặc khác số.

> ⚠️ Khi chuyển đổi dữ liệu, nhập số dư đầu kỳ của TK 131, 331, 152–158, 211–214 **theo từng đối tượng**, rồi đối chiếu tổng với Bảng cân đối số phát sinh của hệ thống cũ trước khi mở kỳ mới.

## Lưu trữ sổ trên phần mềm

TT99 Điều 28 yêu cầu phần mềm kế toán: khi sửa chữa phải lưu lại dấu vết nội dung đã ghi sổ theo trình tự thời gian; có khả năng cảnh báo hoặc ngăn chặn việc cố ý can thiệp làm thay đổi số liệu đã ghi sổ; cung cấp đủ, kịp thời dữ liệu đầu ra theo yêu cầu của cơ quan có thẩm quyền. Cùng với khoản 7 Điều 26 Luật Kế toán (in sổ sau khoá sổ, hoặc lưu điện tử tra cứu được), đây là căn cứ để yêu cầu ERP xuất được các mẫu sổ chi tiết và Sổ Cái cho từng kỳ đã khoá. Mẫu xuất ra có thể theo Phụ lục III hoặc theo mẫu doanh nghiệp tự thiết kế có quy chế.

## Nguồn

- Luật Kế toán số 88/2015/QH13 (văn bản hợp nhất 41/VBHN-VPQH, Công báo số 172 ngày 31/03/2026): Điều 24, 25, 26. https://cdn.thuvienphapluat.vn//uploads/Hoidapphapluat/2026/LNMT/Thang_4/260404/172_41_VBHN_VPQH.pdf
- Thông tư 99/2025/TT-BTC: Điều 12, 13, 28. Toàn văn: https://docs.google.com/document/d/1pVNpXGJEpTA1nRM2pM4IzomKqqulmWNz/export?format=pdf
- Thông tư 99/2025/TT-BTC, Phụ lục III "Sổ kế toán": phần A (danh mục 42 mẫu sổ); phần B mục 1–2 (loại sổ, hình thức sổ, trình tự ghi sổ Nhật ký chung); phần C (S03a-DN và các sổ Nhật ký đặc biệt, S06-DN, S10-DN, S11-DN, S12-DN, S31-DN, S38-DN). https://luatvietnam.vn/doanh-nghiep/thong-tu-99-2025-tt-btc-huong-dan-che-do-ke-toan-doanh-nghiep-tu-01-01-2026-417085-d1.html
- Thông tư 99/2025/TT-BTC, Phụ lục II phần B: TK 111, 112, 131, 156, 211, 213, nguyên tắc kế toán nợ phải trả, TK 331. Bản Word: https://cms.luatvietnam.vn/uploaded/Others/2025/11/16/Phu_luc_II._He_thong_tai_khoan_ke_toan_doanh_nghiep_1611132408.docx
- Đại học Cần Thơ, Đề cương chi tiết môn Nguyên lý kế toán, chương 3 (hạch toán tổng hợp và hạch toán chi tiết) và chương 7 (sổ kế toán, hình thức kế toán): https://tuyensinh.ctu.edu.vn/images/upload/TS_LT/decuongontap/NguyenLiKeToan.pdf
- Học viện Ngân hàng, Đề cương chi tiết học phần Nguyên lý kế toán (ACT01A), mục 3.3–3.4 (ghi sổ theo Nhật ký chung, sổ chi tiết và sổ nhật ký đặc biệt): https://hvnh.edu.vn/medias/acc/Uploads/ACT01A_20De_20cuong_20chi_20tiet_20hoc_20phan_20Nguyen_20ly_20ke_20toan_20-_20ACT01A.pdf
