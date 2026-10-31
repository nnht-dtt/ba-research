# Quy trình khoá sổ cuối kỳ và checklist đóng sổ

Bài này giúp bạn đọc được một quy trình khoá sổ: cuối kỳ phải chạy những bút toán nào, theo thứ tự nào, vì sao bước sau phụ thuộc bước trước, và sau khi khoá kỳ thì sửa sai ra sao. Đây là phần nối các chu trình nghiệp vụ ở các chương trước với bộ báo cáo tài chính ở các bài sau.

## Khoá sổ là gì và luật yêu cầu gì

Luật Kế toán quy định đơn vị kế toán phải khoá sổ kế toán vào cuối kỳ kế toán trước khi lập báo cáo tài chính và trong các trường hợp khác theo quy định của pháp luật (Điều 26 khoản 6). Thông tư 99/2025/TT-BTC (TT99) nhắc lại yêu cầu này tại Điều 13 khoản 3: doanh nghiệp phải khoá sổ tại thời điểm kết thúc kỳ kế toán để lập báo cáo tài chính. Điều 29 Luật Kế toán chốt quan hệ giữa hai việc: báo cáo tài chính phải lập căn cứ vào số liệu sau khi khoá sổ.

Với sổ ghi bằng phương tiện điện tử (tức mọi hệ thống ERP), Điều 26 khoản 7 thêm hai điểm:

- Sau khi khoá sổ phải in sổ ra giấy và đóng quyển riêng cho từng kỳ kế toán năm, hoặc nếu lưu trữ trên phương tiện điện tử thì phải bảo đảm an toàn, bảo mật và tra cứu được trong thời hạn lưu trữ.
- Sổ phải ghi liên tục từ khi mở sổ đến khi khoá sổ; số liệu năm sau phải kế tiếp số liệu năm trước liền kề (khoản 4).

Các tình huống khác buộc khoá sổ giữa chừng cũng có trong TT99: thay đổi kỳ kế toán (Điều 21) và chuyển đổi loại hình doanh nghiệp (Điều 22) đều ghi rõ phải khoá sổ, lập BCTC; khi bị chia, hợp nhất, sáp nhập, giải thể, phá sản thì phải lập BCTC tại thời điểm đó (Điều 15 khoản 3 điểm b).

> 📌 Với BA, "khoá sổ" có hai nghĩa cần tách bạch khi làm việc với khách: (1) nghiệp vụ, tức chạy đủ các bút toán cuối kỳ và kết chuyển xác định kết quả; (2) kỹ thuật, tức chặn không cho ghi hoặc sửa bút toán có ngày thuộc kỳ đã đóng. Luật nói về cả hai nhưng hệ thống thường tách thành hai chức năng.

## Các nhóm bút toán cuối kỳ

Các tài khoản dùng dưới đây theo Phụ lục II TT99. Lưu ý vài tên tài khoản đã đổi so với TT200, ví dụ TK 242 nay là "Chi phí chờ phân bổ", TK 3387 là "Doanh thu chờ phân bổ".

### 1. Phân bổ, khấu hao, trích trước

Đây là các bút toán "dồn tích" đưa chi phí về đúng kỳ:

- Khấu hao TSCĐ: `Nợ TK 623, 627, 641, 642, 811 / Có TK 214`. Khấu hao BĐSĐT đang cho thuê hoạt động: `Nợ TK 632 / Có TK 2147`. Chi tiết ở [[kt-29-vong-doi-tscd]].
- Phân bổ chi phí chờ phân bổ (công cụ dụng cụ, tiền thuê trả trước, sửa chữa định kỳ): `Nợ TK 623, 627, 635, 641, 642 / Có TK 242`.
- Trích trước chi phí phải trả, ví dụ lương nghỉ phép công nhân sản xuất `Nợ TK 622 / Có TK 335`; lãi vay trả sau `Nợ TK 635 (hoặc 627, 241 nếu được vốn hoá) / Có TK 335`. Xem [[kt-30-ccdc-tra-truoc-trich-truoc]].

### 2. Đánh giá lại khoản mục tiền tệ có gốc ngoại tệ

Khi lập báo cáo tài chính, doanh nghiệp phải đánh giá lại số dư tất cả các khoản mục tiền tệ có gốc ngoại tệ. Theo hướng dẫn TK 413 của TT99, chênh lệch do đánh giá lại cuối kỳ phản ánh thẳng vào doanh thu hoạt động tài chính hoặc chi phí tài chính:

- Lãi: `Nợ TK 112 (hoặc 111, 128, 228, 131, 138, 331, 341...) / Có TK 515`
- Lỗ: `Nợ TK 635 / Có TK 112 (hoặc các tài khoản tương ứng)`

Tiền gửi không kỳ hạn bằng ngoại tệ đánh giá theo tỷ giá mua bán chuyển khoản trung bình của ngân hàng nơi mở tài khoản; các khoản mục tiền tệ khác theo tỷ giá đó của ngân hàng doanh nghiệp thường xuyên giao dịch. Với đánh giá lại cuối kỳ, hướng dẫn TK 413 chỉ nêu việc treo chênh lệch trên TK 413 cho trường hợp đặc thù của doanh nghiệp nhà nước (giai đoạn trước hoạt động của dự án trọng điểm). Logic tỷ giá chi tiết ở [[ktqt-05-giao-dich-ngoai-te]].

### 3. Dự phòng

Lập hoặc hoàn nhập phần chênh lệch giữa số phải trích kỳ này với số đã trích (TK 229):

- Dự phòng phải thu khó đòi: `Nợ TK 642 / Có TK 2293`
- Dự phòng giảm giá hàng tồn kho: `Nợ TK 632 / Có TK 2294`
- Dự phòng giảm giá chứng khoán kinh doanh và tổn thất đầu tư: `Nợ TK 635 / Có TK 2291, 2292`

Hoàn nhập thì ghi ngược lại. Nghiệp vụ dự phòng ở [[kt-21-cong-no-phai-thu]] và [[kt-24-kiem-ke-du-phong]].

### 4. Tập hợp chi phí sản xuất và giá vốn

Với doanh nghiệp sản xuất, cuối kỳ kết chuyển chi phí trực tiếp và chi phí sản xuất chung vào TK 154:

- `Nợ TK 154 / Có TK 621`, `Nợ TK 154 / Có TK 622` (phần trên mức bình thường ghi `Nợ TK 632`)
- `Nợ TK 154 / Có TK 627`; nếu sản lượng thực tế thấp hơn công suất bình thường thì phần chi phí sản xuất chung cố định không phân bổ ghi `Nợ TK 632`
- Giá thành nhập kho: `Nợ TK 155 / Có TK 154`; giao thẳng không qua kho: `Nợ TK 632 / Có TK 154`

Xem [[kt-27-chi-phi-san-xuat]] và [[kt-28-gia-thanh]].

### 5. Giảm trừ doanh thu và thuế GTGT

- Kết chuyển giảm trừ doanh thu để ra doanh thu thuần: `Nợ TK 511 / Có TK 521`. TK 521 không có số dư cuối kỳ.
- Khấu trừ thuế GTGT đầu vào với đầu ra: `Nợ TK 3331 (33311) / Có TK 133`. Xem [[kt-22-thue-gtgt-dau-ra]].

### 6. Thuế thu nhập doanh nghiệp

Ghi nhận hoặc điều chỉnh chi phí thuế TNDN hiện hành (`Nợ TK 8211 / Có TK 3334`) và thuế hoãn lại (TK 8212 đối ứng TK 243, 347). Chi tiết ở [[kt-37-thue-tndn]].

### 7. Kết chuyển xác định kết quả (TK 911)

TK 911 dùng để xác định kết quả hoạt động kinh doanh, tài chính và hoạt động khác trong kỳ; doanh thu và thu nhập kết chuyển vào là số thuần; TK 911 không có số dư cuối kỳ. Các bút toán theo hướng dẫn TK 911:

- `Nợ TK 511 / Có TK 911` (doanh thu thuần)
- `Nợ TK 515, 711 / Có TK 911`
- `Nợ TK 911 / Có TK 632`, `Nợ TK 911 / Có TK 641`, `Nợ TK 911 / Có TK 642`
- `Nợ TK 911 / Có TK 635, 811`
- `Nợ TK 911 / Có TK 8211`; TK 8212 kết chuyển theo chênh lệch phát sinh Nợ, Có (bên nào lớn hơn)

### 8. Kết chuyển lãi lỗ vào lợi nhuận chưa phân phối

- Lãi: `Nợ TK 911 / Có TK 421 (4212)`
- Lỗ: `Nợ TK 421 (4212) / Có TK 911`

Đơn vị trực thuộc chỉ theo dõi kết quả mà không theo dõi đến lợi nhuận chưa phân phối thì kết chuyển lên doanh nghiệp qua TK 336 (`Nợ TK 911 / Có TK 336` nếu lãi).

Đầu năm sau, kết chuyển số dư TK 4212 sang TK 4211: dư Có (lãi) ghi `Nợ TK 4212 / Có TK 4211`, dư Nợ (lỗ) ghi ngược lại. Hai tài khoản cấp 2 này cấp số liệu cho hai chỉ tiêu 420a, 420b trên Báo cáo tình hình tài chính ([[kt-39-bao-cao-tinh-hinh-tai-chinh]]).

> 💡 TK 421 theo TT99 còn yêu cầu theo dõi trong hệ thống quản trị nội bộ số lỗ tính thuế và số lỗ không tính thuế, vì khi chuyển lỗ chỉ được chuyển phần lỗ tính thuế. Đây là một yêu cầu dữ liệu, không chỉ là bút toán.

## Thứ tự phụ thuộc

Thứ tự trên không phải quy định của văn bản mà suy ra từ chính các bút toán: bước sau dùng số dư do bước trước tạo ra.

- Khấu hao, phân bổ, trích trước vào TK 627 phải xong trước khi kết chuyển TK 627 sang TK 154, nếu không giá thành thiếu chi phí.
- Giá thành nhập kho phải chốt trước khi tính giá vốn xuất bán và trước khi xét dự phòng giảm giá hàng tồn kho (dự phòng tính trên số hàng tồn kho cuối kỳ).
- Đánh giá lại ngoại tệ, dự phòng, trích trước đều làm thay đổi lợi nhuận kế toán, nên phải xong trước khi tính thuế TNDN.
- Thuế TNDN phải ghi xong trước khi kết chuyển TK 821 sang TK 911.
- Mọi tài khoản doanh thu, chi phí phải kết chuyển xong thì TK 911 mới ra kết quả để chuyển sang TK 421.

<step-flow>
<svg viewBox="0 0 660 150" role="img" aria-labelledby="kt36s-t" style="width:100%;max-width:660px;height:auto;display:block;margin:1.25rem auto" font-family="ui-sans-serif, system-ui, sans-serif">
<title id="kt36s-t">Thứ tự các nhóm bút toán khoá sổ</title>
<defs>
<marker id="kt36s-arrow" markerWidth="9" markerHeight="9" refX="8" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 z" fill="currentColor"/></marker>
</defs>
<g data-step="1">
<rect x="5" y="45" width="115" height="60" rx="10" fill="#3b82f6" fill-opacity="0.13" stroke="currentColor" stroke-opacity="0.22"/>
<text x="62" y="72" font-size="12" text-anchor="middle" fill="currentColor">Khấu hao, phân bổ,</text>
<text x="62" y="88" font-size="12" text-anchor="middle" fill="currentColor">trích trước</text>
</g>
<g data-step="2">
<line x1="120" y1="75" x2="140" y2="75" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" marker-end="url(#kt36s-arrow)"/>
<rect x="142" y="45" width="115" height="60" rx="10" fill="#f59e0b" fill-opacity="0.14" stroke="currentColor" stroke-opacity="0.22"/>
<text x="199" y="72" font-size="12" text-anchor="middle" fill="currentColor">Giá thành,</text>
<text x="199" y="88" font-size="12" text-anchor="middle" fill="currentColor">giá vốn</text>
</g>
<g data-step="3">
<line x1="257" y1="75" x2="277" y2="75" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" marker-end="url(#kt36s-arrow)"/>
<rect x="279" y="45" width="115" height="60" rx="10" fill="#8b5cf6" fill-opacity="0.13" stroke="currentColor" stroke-opacity="0.22"/>
<text x="336" y="72" font-size="12" text-anchor="middle" fill="currentColor">Tỷ giá, dự phòng,</text>
<text x="336" y="88" font-size="12" text-anchor="middle" fill="currentColor">giảm trừ, VAT</text>
</g>
<g data-step="4">
<line x1="394" y1="75" x2="414" y2="75" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" marker-end="url(#kt36s-arrow)"/>
<rect x="416" y="45" width="115" height="60" rx="10" fill="#f43f5e" fill-opacity="0.12" stroke="currentColor" stroke-opacity="0.22"/>
<text x="473" y="72" font-size="12" text-anchor="middle" fill="currentColor">Thuế TNDN</text>
<text x="473" y="88" font-size="12" text-anchor="middle" fill="currentColor">(8211, 8212)</text>
</g>
<g data-step="5">
<line x1="531" y1="75" x2="551" y2="75" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" marker-end="url(#kt36s-arrow)"/>
<rect x="553" y="45" width="102" height="60" rx="10" fill="#10b981" fill-opacity="0.16" stroke="currentColor" stroke-opacity="0.22"/>
<text x="604" y="72" font-size="12" text-anchor="middle" fill="currentColor">911 rồi 421,</text>
<text x="604" y="88" font-size="12" text-anchor="middle" fill="currentColor">khoá kỳ</text>
</g>
</svg>
<step-note data-step="1">Đưa chi phí về đúng kỳ: TK 214, 242, 335. Phần vào TK 627 phải có trước khi tính giá thành.</step-note>
<step-note data-step="2">Kết chuyển 621, 622, 627 sang 154, nhập kho 155, xác định giá vốn 632.</step-note>
<step-note data-step="3">Đánh giá lại ngoại tệ vào 515/635, lập hoặc hoàn nhập dự phòng 229, kết chuyển 521 sang 511, bù trừ 3331 với 133.</step-note>
<step-note data-step="4">Lợi nhuận kế toán đã đủ điều chỉnh thì mới tính được thuế TNDN.</step-note>
<step-note data-step="5">Kết chuyển doanh thu, chi phí vào 911, ra lãi lỗ chuyển 421 (4212), rồi chặn ghi sổ kỳ đã đóng.</step-note>
</step-flow>

## Checklist trước khi khoá kỳ

Phần lớn checklist là đối chiếu số liệu giữa sổ cái và dữ liệu chi tiết hoặc bên ngoài, để khi khoá rồi không phải mở lại. Một checklist tối thiểu (tổng hợp từ các nghiệp vụ trong khoá; tài liệu year-end closing của Odoo 19 cũng liệt kê các bước tương tự):

1. Chứng từ trong kỳ đã ghi sổ hết; bút toán nháp đã xác nhận hoặc huỷ.
2. Tiền: số dư từng tài khoản ngân hàng khớp sao kê ([[kt-32-tien-ngan-hang-vay]]).
3. Công nợ: đối chiếu với khách hàng, nhà cung cấp; rà các khoản quá hạn để xét dự phòng.
4. Kho: tồn kho trên sổ khớp kết quả kiểm kê, giá trị tồn kho phân hệ kho khớp TK 15x.
5. Tài sản: khấu hao đã chạy; tài sản tăng, giảm trong kỳ đã ghi nhận.
6. Các bút toán cuối kỳ ở trên đã chạy theo đúng thứ tự.
7. Các tài khoản không có số dư cuối kỳ (loại 5 đến 9, TK 521, 911) đã về 0 sau kết chuyển.
8. Bảng cân đối số phát sinh cân; số dư tài khoản lưỡng tính (131, 331, 333, 338...) đã tách được theo đối tượng để lên báo cáo.

## Sau khi khoá: sửa sai thế nào

Điều 27 Luật Kế toán phân biệt theo thời điểm phát hiện:

- Phát hiện sai sót **trước** khi báo cáo tài chính năm được nộp cho cơ quan nhà nước: sửa trên sổ kế toán của năm đó.
- Phát hiện sai sót **sau** khi đã nộp: sửa trên sổ kế toán của năm phát hiện và thuyết minh về việc sửa chữa.
- Sổ ghi bằng phương tiện điện tử chỉ được sửa bằng phương pháp ghi điều chỉnh: lập "chứng từ điều chỉnh" và ghi thêm số chênh lệch. Hệ thống không được cho xoá hay sửa đè bút toán đã ghi sổ ([[kt-11-but-toan-tong-hop-dieu-chinh]]).

Chuẩn mực VAS 29 bổ sung góc nhìn báo cáo: sai sót trọng yếu của kỳ trước phải điều chỉnh hồi tố, không điều chỉnh vào Báo cáo kết quả hoạt động kinh doanh của kỳ phát hiện. Trên sổ, TT99 hướng dẫn điều chỉnh số dư đầu năm TK 4211 khi hồi tố. Riêng thuế TNDN, sai sót không trọng yếu của năm trước được ghi tăng hoặc giảm chi phí thuế hiện hành của năm phát hiện (hướng dẫn TK 821).

> ⚠️ Yêu cầu hệ thống hay gặp: khách muốn "mở lại kỳ đã khoá để sửa". Điều đó có thể làm được về kỹ thuật, nhưng nếu báo cáo năm đã nộp thì về nghiệp vụ phải ghi điều chỉnh vào năm phát hiện. BA nên tách quyền mở kỳ và ghi nhật ký ai mở, vì sao.

## Điểm chạm hệ thống

- **Khoá kỳ**: nhiều ERP cho đặt ngày khoá. Ví dụ Odoo 19 có "Lock Everything date" chặn sửa mọi bút toán đã ghi có ngày từ ngày khoá trở về trước (quản trị viên có thể tạo ngoại lệ, được ghi lại), và "Hard Lock date" không thể đảo ngược. Cần thống nhất với khách ai được đặt, ai được tạo ngoại lệ.
- **Bút toán kết chuyển**: có hệ thống sinh bút toán kết chuyển 911 và 421 thật, có hệ thống chỉ tính lãi lỗ năm hiện tại khi chạy báo cáo. Với kế toán Việt Nam, sổ cái TK 911, 421 và mẫu sổ theo Phụ lục III cần thấy số liệu này, nên phải kiểm tra cách hệ thống ra được số dư 4211, 4212.
- **Bút toán định kỳ tự động**: khấu hao, phân bổ 242, trích trước thường cấu hình chạy tự động; checklist phải có bước xác nhận đã chạy đủ.

> 📌 Ví dụ giả định: một công ty thương mại tháng 12 có doanh thu 511 là 2.000, giảm trừ 521 là 100, giá vốn 1.200, chi phí bán hàng 200, chi phí quản lý 150, lỗ tỷ giá đánh giá lại 30. Sau khi kết chuyển 521 sang 511, doanh thu thuần là 1.900. TK 911 bên Có 1.900, bên Nợ 1.580; lợi nhuận trước thuế 320 (đơn vị: triệu đồng). Bút toán thuế TNDN được ghi ở bước 6, rồi mới kết chuyển 8211 và phần lãi sau thuế vào 4212.

## Nguồn

- Luật Kế toán số 88/2015/QH13, văn bản hợp nhất 25/VBHN-VPQH năm 2025: Điều 26 (mở sổ, ghi sổ, khoá sổ), Điều 27 (sửa chữa sổ kế toán), Điều 29 khoản 2 điểm b. https://luatvietnam.vn/tai-chinh/van-ban-hop-nhat-25-vbhn-vpqh-2025-hop-nhat-luat-ke-toan-397299-d1.html
- Thông tư 99/2025/TT-BTC: Điều 13 khoản 3, Điều 15 khoản 3 điểm b, Điều 21, 22. https://luatvietnam.vn/doanh-nghiep/thong-tu-99-2025-tt-btc-huong-dan-che-do-ke-toan-doanh-nghiep-tu-01-01-2026-417085-d1.html
- Thông tư 99/2025/TT-BTC, Phụ lục II: hướng dẫn TK 154, 214, 229, 242, 335, 413, 421, 521, 821, 911 và mục 3.8 TK 133. https://cms.luatvietnam.vn/uploaded/Others/2025/11/16/Phu_luc_II._He_thong_tai_khoan_ke_toan_doanh_nghiep_1611132408.docx
- Chuẩn mực kế toán số 29 (Quyết định 12/2005/QĐ-BTC), đoạn 22 đến 29 về sửa chữa sai sót. https://vanban.vcci.com.vn/quyet-dinh-122005qd-btc-cua-bo-tai-chinh-ve-viec-ban-hanh-va-cong-bo-sau-06-chuan-muc-ke-toan-viet-nam-dot-4
- Odoo 19 Documentation, Year-end closing (lock dates, checklist trước khi đóng năm). https://www.odoo.com/documentation/19.0/applications/finance/accounting/reporting/year_end.html
