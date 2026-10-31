# Chứng từ kế toán, chứng từ điện tử và hoá đơn điện tử

Bài này giúp BA biết một chứng từ do hệ thống sinh ra phải có những nội dung gì, chứng từ nào cần in hoặc lưu, và hoá đơn điện tử đi qua những bước nào giữa ERP, nhà cung cấp dịch vụ hoá đơn và cơ quan thuế. Bài dùng quy định hiện hành tại 31/10/2026. Riêng hoá đơn, từ 01/07/2026 văn bản áp dụng là Nghị định 254/2026/NĐ-CP và Thông tư 91/2026/TT-BTC, không còn là Nghị định 123/2020/NĐ-CP.

## Chứng từ kế toán là gì

Luật Kế toán định nghĩa: chứng từ kế toán là những giấy tờ và vật mang tin **phản ánh nghiệp vụ kinh tế, tài chính phát sinh và đã hoàn thành, làm căn cứ ghi sổ kế toán** (khoản 3 Điều 3). Thông tin, số liệu trên chứng từ là căn cứ để ghi sổ (khoản 1 Điều 21). Mọi nghiệp vụ phát sinh đều phải lập chứng từ, và **mỗi nghiệp vụ chỉ lập chứng từ một lần** (khoản 1 Điều 18; nhắc lại tại khoản 1 Điều 10 Thông tư 99/2025/TT-BTC).

Với hệ thống, nguyên tắc "lập một lần" có nghĩa là không được để cùng một nghiệp vụ sinh hai chứng từ ghi sổ. Ví dụ, phiếu nhập kho và hoá đơn mua hàng của cùng lô hàng không được cùng ghi Nợ TK 156.

### Nội dung bắt buộc

Theo Điều 16 Luật Kế toán (bản hợp nhất), chứng từ phải có các nội dung chủ yếu:

1. Tên và số hiệu của chứng từ.
2. Ngày, tháng, năm lập chứng từ.
3. Tên, địa chỉ của cơ quan, tổ chức, đơn vị hoặc cá nhân lập chứng từ.
4. Nội dung nghiệp vụ kinh tế, tài chính phát sinh.
5. Số lượng, đơn giá và số tiền ghi bằng số. Tổng số tiền của chứng từ dùng để thu, chi tiền ghi bằng số và bằng chữ.
6. Chữ ký, họ và tên của người lập, người duyệt và những người liên quan.

Điểm d khoản 1 Điều 16 bị bãi bỏ bởi Luật số 56/2024/QH15, hiệu lực từ 01/01/2025. Một số bài tổng hợp trên mạng vẫn chép danh sách nội dung cũ, nên đối chiếu với văn bản hợp nhất. Ngoài các nội dung chủ yếu, từng loại chứng từ có thể có thêm nội dung khác (khoản 2 Điều 16).

> 💡 Trường "số tiền bằng chữ" chỉ bắt buộc với chứng từ thu, chi tiền. Hệ thống in phiếu thu, phiếu chi phải tự sinh phần đọc số thành chữ.

### Lập, ký, kiểm soát

- Chứng từ phải lập rõ ràng, đầy đủ, kịp thời, chính xác. Chứng từ chưa có mẫu thì đơn vị được tự lập, nhưng phải đủ nội dung của Điều 16 (khoản 2 Điều 18 Luật Kế toán).
- Không được tẩy xoá, sửa chữa nội dung nghiệp vụ trên chứng từ. Chứng từ bị tẩy xoá, sửa chữa không có giá trị thanh toán và ghi sổ (khoản 3 Điều 18).
- Chứng từ chi tiền phải do người có thẩm quyền duyệt chi và kế toán trưởng (hoặc người được uỷ quyền) ký **trước khi thực hiện** (khoản 3 Điều 19).
- Chứng từ điện tử phải có **chữ ký điện tử hoặc hình thức xác nhận khác bằng phương tiện điện tử** theo pháp luật về giao dịch điện tử (khoản 4 Điều 19, sửa bởi Luật 56/2024).
- TT99 Điều 10: việc phân cấp ký phải phù hợp quy chế quản trị nội bộ để xác định được trách nhiệm cá nhân. Kế toán trưởng (hoặc người được kế toán trưởng uỷ quyền) **không được ký "thừa uỷ quyền"** chức danh của người quản lý, điều hành doanh nghiệp, trừ khi pháp luật quy định khác.

Các quy định này đi thẳng vào thiết kế luồng phê duyệt trong ERP. Ai được duyệt đề nghị thanh toán, phiếu chi nào phải qua kế toán trưởng trước khi chi, ai ký số trên chứng từ điện tử: tất cả phải khớp với ma trận phân quyền ký.

## Hệ thống biểu mẫu chứng từ theo TT99

TT99 Điều 9: doanh nghiệp **tham khảo** biểu mẫu tại Phụ lục I. Doanh nghiệp được thiết kế thêm hoặc sửa đổi biểu mẫu, miễn là tuân thủ Điều 16 Luật Kế toán, và phải ban hành Quy chế hạch toán kế toán cho phần sửa đổi. Không sửa thì dùng mẫu Phụ lục I. Chứng từ thuộc phạm vi pháp luật khác (ví dụ hoá đơn) thì theo pháp luật đó (khoản 3 Điều 9).

Phụ lục I có 33 mẫu, chia 5 nhóm. Các mẫu BA gặp nhiều nhất:

| Nhóm | Mẫu | Hay sinh ra từ |
|---|---|---|
| Lao động tiền lương | 01-LĐTL Bảng thanh toán tiền lương; 08-LĐTL Bảng phân bổ tiền lương và các khoản trích theo lương | Phân hệ lương |
| Hàng tồn kho | 01-VT Phiếu nhập kho; 02-VT Phiếu xuất kho; 03-VT Biên bản kiểm nghiệm; 05-VT Biên bản tổng hợp kiểm kê | Phân hệ kho, mua hàng |
| Bán hàng | 01-BH Bảng thanh toán hàng đại lý, ký gửi; 02-BH Thẻ quầy hàng | Bán qua đại lý, bán lẻ |
| Tiền tệ | 01-TT Phiếu thu; 02-TT Phiếu chi; 03-TT Giấy đề nghị tạm ứng; 04-TT Giấy thanh toán tiền tạm ứng; 05-TT Giấy đề nghị thanh toán; 08a/08b-TT Bảng kiểm kê quỹ | Phân hệ tiền, chi phí |
| Tài sản cố định | 01-TSCĐ Biên bản giao nhận TSCĐ; 02-TSCĐ Biên bản thanh lý; 06-TSCĐ Bảng tính và phân bổ khấu hao | Phân hệ tài sản |

Phần giải thích mẫu trong Phụ lục I có vài chi tiết ảnh hưởng trực tiếp tới thiết kế:

- **Phiếu nhập kho 01-VT** có hai cột số lượng: "theo chứng từ" (hoá đơn hoặc lệnh nhập) và "thực nhập" do thủ kho ghi. Kế toán ghi đơn giá và thành tiền. Phiếu dùng cho nhập mua ngoài, tự sản xuất, thuê gia công, nhận góp vốn, thừa khi kiểm kê. Hệ thống cần giữ cả hai số lượng để bắt chênh lệch khi nhận hàng.
- **Phiếu xuất kho 02-VT**: số lượng thực xuất "chỉ có thể bằng hoặc ít hơn số lượng yêu cầu".
- **Phiếu thu 01-TT, phiếu chi 02-TT**: số phiếu đánh **liên tục trong một kỳ kế toán**. Phiếu chi chỉ được xuất quỹ khi đủ chữ ký người lập, kế toán trưởng, giám đốc, thủ quỹ. Thu, chi ngoại tệ phải ghi tỷ giá tại thời điểm nhập, xuất quỹ.
- **Giấy đề nghị thanh toán 05-TT** phải ghi rõ số lượng chứng từ gốc đính kèm.

> 📌 Phụ lục I không có mẫu hoá đơn. Hoá đơn là chứng từ kế toán do bên bán lập (khoản 1 Điều 20 Luật Kế toán). Nội dung, hình thức và trình tự lập hoá đơn theo pháp luật về thuế (khoản 2 Điều 20).

## Chứng từ điện tử: in hay lưu

Luật Kế toán Điều 17: chứng từ điện tử được coi là chứng từ kế toán khi có đủ nội dung của Điều 16, và được thể hiện dưới dạng dữ liệu điện tử, được mã hoá, không bị thay đổi khi truyền qua mạng hoặc trên vật mang tin. Chứng từ điện tử phải bảo đảm bảo mật, bảo toàn dữ liệu, chống truy cập, sao chép, sử dụng trái phép.

Về in và lưu, khoản 6 Điều 18 cho hai lựa chọn:

- In chứng từ điện tử ra giấy và lưu trữ theo Điều 41; hoặc
- **Không in**, lưu trên phương tiện điện tử, nhưng phải bảo đảm an toàn, bảo mật và **tra cứu được trong thời hạn lưu trữ**.

Khoản 3 Điều 17: khi chứng từ giấy chuyển thành chứng từ điện tử để giao dịch, thanh toán (hoặc ngược lại), bản dùng để giao dịch mới có hiệu lực. Bản còn lại chỉ có giá trị lưu giữ để ghi sổ, theo dõi, kiểm tra. Nghị định 254/2026/NĐ-CP áp dụng logic tương tự cho hoá đơn: hoá đơn điện tử chuyển thành giấy để phục vụ ghi sổ thì **không có hiệu lực để giao dịch, thanh toán**, trừ hoá đơn khởi tạo từ máy tính tiền (điểm b.2 khoản 4 Điều 5).

Thời hạn lưu trữ theo Điều 41 Luật Kế toán:

| Loại tài liệu | Thời hạn tối thiểu |
|---|---|
| Chứng từ dùng trực tiếp để ghi sổ và lập BCTC; sổ kế toán; BCTC năm | 10 năm (trừ khi pháp luật quy định khác) |
| Tài liệu dùng cho quản lý, điều hành, kể cả chứng từ không dùng trực tiếp để ghi sổ | 5 năm |
| Tài liệu có tính sử liệu, ý nghĩa quan trọng về kinh tế, an ninh, quốc phòng | Vĩnh viễn |

Tài liệu kế toán phải đưa vào lưu trữ trong 12 tháng kể từ ngày kết thúc kỳ kế toán năm (khoản 3 Điều 41).

> ⚠️ Lưu điện tử 10 năm nghĩa là dữ liệu và file chứng từ phải mở, tra cứu được suốt 10 năm, kể cả khi đổi phần mềm. Kế hoạch ngừng hệ thống cũ (decommission) phải có phương án giữ dữ liệu tra cứu được.

## Hoá đơn điện tử theo Nghị định 254/2026/NĐ-CP

Nghị định 254/2026/NĐ-CP ngày 30/06/2026 có hiệu lực từ 01/07/2026. Kể từ ngày đó, Nghị định 123/2020/NĐ-CP, Điều 1 Nghị định 41/2022/NĐ-CP và Nghị định 70/2025/NĐ-CP hết hiệu lực (Điều 43). Thông tư 91/2026/TT-BTC hướng dẫn Nghị định này, cùng hiệu lực từ 01/07/2026, và thay Thông tư 32/2025/TT-BTC (Điều 25 TT91).

### Ba dạng hoá đơn điện tử

Điều 3 Nghị định 254:

- **Có mã của cơ quan thuế**: được cơ quan thuế cấp mã trước khi người bán gửi cho người mua. Mã gồm số giao dịch duy nhất và chuỗi ký tự mã hoá từ thông tin người bán lập.
- **Không có mã của cơ quan thuế**: tổ chức bán hàng gửi cho người mua mà không có mã.
- **Khởi tạo từ máy tính tiền** có kết nối dữ liệu với cơ quan thuế: lập từ hệ thống tính tiền, dữ liệu chuyển đến cơ quan thuế theo định dạng chuẩn.

Theo Điều 6, nguyên tắc chung là dùng hoá đơn **có mã**. Doanh nghiệp một số lĩnh vực (điện lực, xăng dầu, bưu chính, viễn thông, nước sạch, tài chính ngân hàng, chứng khoán, bảo hiểm, y tế, thương mại điện tử, siêu thị, thương mại, vận tải…) đáp ứng điều kiện hạ tầng và truyền dữ liệu thì được dùng hoá đơn **không có mã** (điểm b khoản 1). Hoạt động bán trực tiếp đến người tiêu dùng (bán lẻ, ăn uống, khách sạn…) dùng hoá đơn từ máy tính tiền. Nếu đã đăng ký hoá đơn có mã hoặc không mã thì không bắt buộc đăng ký thêm hoá đơn từ máy tính tiền (điểm c khoản 1).

### Khi nào phải lập hoá đơn

- Bán hàng hoá, cung cấp dịch vụ thì lập hoá đơn, **kể cả** hàng dùng để khuyến mại, quảng cáo, hàng mẫu; cho, biếu, tặng, trao đổi, trả thay lương, tiêu dùng nội bộ; xuất cho vay, cho mượn. Ngoại trừ các trường hợp không phải dùng hoá đơn tại Điều 7 (khoản 1 Điều 4).
- **Thời điểm lập** (Điều 9): bán hàng hoá là lúc chuyển giao quyền sở hữu hoặc quyền sử dụng cho người mua, **không phân biệt đã thu tiền hay chưa**. Cung cấp dịch vụ là lúc hoàn thành dịch vụ. Nếu thu tiền trước hoặc trong khi cung cấp dịch vụ thì lập khi thu tiền, trừ tiền đặt cọc theo Bộ luật Dân sự để bảo đảm thực hiện hợp đồng dịch vụ. Giao hàng nhiều lần hoặc bàn giao từng hạng mục thì mỗi lần giao đều lập hoá đơn cho phần tương ứng. Khoản 4 Điều 9 có thêm nhiều trường hợp riêng theo ngành.

> ⚠️ Thời điểm lập hoá đơn là quy định thuế. Thời điểm ghi nhận doanh thu kế toán theo chuẩn mực có thể khác. Không mặc định "xuất hoá đơn = ghi doanh thu" khi thiết kế luồng bán hàng, xem [[kt-17-quy-trinh-ban-hang]] và [[kt-18-giam-tru-tra-truoc]].

### Nội dung hoá đơn

Khoản 1 Điều 10 Nghị định 254 liệt kê các nội dung: tên hoá đơn, ký hiệu hoá đơn, ký hiệu mẫu số; số hoá đơn; tên, địa chỉ, mã số thuế người bán; tên, địa chỉ, mã số thuế (hoặc mã số đơn vị có quan hệ với ngân sách, hoặc số định danh cá nhân) của người mua; tên, đơn vị tính, số lượng, đơn giá, thành tiền chưa thuế, thuế suất, tiền thuế GTGT theo từng thuế suất, tổng tiền thanh toán; chữ ký người bán; thời điểm lập; thời điểm ký số; mã của cơ quan thuế (nếu là hoá đơn có mã); phí, lệ phí, chiết khấu thương mại, khuyến mại (nếu có).

Hoá đơn điện tử **không nhất thiết có chữ ký số của người mua**, trừ khi hai bên thoả thuận (điểm e khoản 1). Hoá đơn được thêm thông tin như số hợp đồng, lệnh vận chuyển, mã khách hàng (khoản 5).

Các loại hoá đơn chính (Điều 8): hoá đơn GTGT (cho tổ chức khai thuế GTGT theo phương pháp khấu trừ), hoá đơn bán hàng (phương pháp trực tiếp, khu phi thuế quan), hoá đơn thương mại điện tử (cho xuất khẩu). **Phiếu xuất kho kiêm vận chuyển nội bộ** và **phiếu xuất kho hàng gửi bán đại lý** được đăng ký, sử dụng và quản lý **như hoá đơn** (khoản 7). Vì vậy đánh số và gửi dữ liệu các phiếu này không làm tuỳ ý như phiếu xuất kho thường.

## Luồng tích hợp ERP với hoá đơn điện tử

TT99 Điều 28 yêu cầu phần mềm kế toán có khả năng kết nối, hoặc sẵn sàng kết nối, với phần mềm liên quan như **phần mềm hoá đơn điện tử, chữ ký số** (điểm đ khoản 1). Với hoá đơn có mã, Nghị định 254 Điều 12 mô tả luồng qua tổ chức cung cấp dịch vụ hoá đơn:

<step-flow>
<svg viewBox="0 0 680 150" role="img" aria-labelledby="kt09s-t" style="width:100%;max-width:680px;height:auto;display:block;margin:1.25rem auto" font-family="ui-sans-serif, system-ui, sans-serif">
<title id="kt09s-t">Luồng hoá đơn điện tử có mã của cơ quan thuế</title>
<defs>
<marker id="kt09s-arrow" markerWidth="9" markerHeight="9" refX="8" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 z" fill="currentColor"/></marker>
</defs>
<g data-step="1">
<rect x="10" y="45" width="140" height="60" rx="10" fill="#3b82f6" fill-opacity="0.13" stroke="currentColor" stroke-opacity="0.22"/>
<text x="80" y="72" font-size="13" text-anchor="middle" fill="currentColor">ERP lập dữ liệu</text>
<text x="80" y="90" font-size="13" text-anchor="middle" fill="currentColor">hoá đơn</text>
</g>
<g data-step="2">
<line x1="150" y1="75" x2="182" y2="75" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" marker-end="url(#kt09s-arrow)"/>
<rect x="185" y="45" width="140" height="60" rx="10" fill="#f59e0b" fill-opacity="0.14" stroke="currentColor" stroke-opacity="0.22"/>
<text x="255" y="72" font-size="13" text-anchor="middle" fill="currentColor">Nhà cung cấp</text>
<text x="255" y="90" font-size="13" text-anchor="middle" fill="currentColor">HĐĐT, ký số</text>
</g>
<g data-step="3">
<line x1="325" y1="75" x2="357" y2="75" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" marker-end="url(#kt09s-arrow)"/>
<rect x="360" y="45" width="140" height="60" rx="10" fill="#8b5cf6" fill-opacity="0.14" stroke="currentColor" stroke-opacity="0.22"/>
<text x="430" y="72" font-size="13" text-anchor="middle" fill="currentColor">Cơ quan thuế</text>
<text x="430" y="90" font-size="13" text-anchor="middle" fill="currentColor">cấp mã</text>
</g>
<g data-step="4">
<line x1="500" y1="75" x2="532" y2="75" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" marker-end="url(#kt09s-arrow)"/>
<rect x="535" y="45" width="135" height="60" rx="10" fill="#10b981" fill-opacity="0.16" stroke="currentColor" stroke-opacity="0.22"/>
<text x="602" y="72" font-size="13" text-anchor="middle" fill="currentColor">Gửi người mua,</text>
<text x="602" y="90" font-size="13" text-anchor="middle" fill="currentColor">ERP nhận lại mã</text>
</g>
</svg>
<step-note data-step="1">ERP tạo dữ liệu hoá đơn từ đơn bán hàng hoặc chứng từ giao hàng, đủ nội dung Điều 10 Nghị định 254.</step-note>
<step-note data-step="2">Người bán lập hoá đơn trên trang hoặc phần mềm của tổ chức cung cấp dịch vụ hoá đơn, ký số, gửi để cơ quan thuế cấp mã (điểm b khoản 1 Điều 12).</step-note>
<step-note data-step="3">Hệ thống của Cục Thuế tự động cấp mã nếu hoá đơn đủ nội dung, đúng định dạng, đúng thông tin đăng ký và người bán không bị ngừng sử dụng hoá đơn (khoản 2 Điều 12).</step-note>
<step-note data-step="4">Người bán gửi hoá đơn đã có mã cho người mua ngay sau khi nhận mã (khoản 3 Điều 15). ERP nên lưu lại số hoá đơn, ký hiệu, mã cơ quan thuế và trạng thái.</step-note>
</step-flow>

Với hoá đơn **không có mã**, doanh nghiệp tự lập, ký số và gửi người mua (Điều 13). Doanh nghiệp phải chuyển dữ liệu đến cơ quan thuế, thường **chậm nhất là ngày làm việc tiếp theo** kể từ thời điểm lập. Một số lĩnh vực được gửi theo Bảng tổng hợp dữ liệu hoá đơn trong thời hạn nộp tờ khai thuế GTGT. Dữ liệu được gửi trực tiếp (nếu đáp ứng tiêu chí, ví dụ bình quân từ 1.000.000 hoá đơn một tháng trở lên) hoặc qua tổ chức cung cấp dịch vụ (Điều 16 khoản 3).

Người bán được uỷ nhiệm cho bên thứ ba lập hoá đơn (khoản 5 Điều 4, chi tiết tại Điều 9 TT91). Khi hệ thống của cơ quan thuế hoặc nhà cung cấp gặp sự cố, Điều 14 quy định cách xử lý. Ví dụ: hệ thống tiếp nhận hoá đơn không mã bị lỗi thì chuyển dữ liệu trong 2 ngày làm việc sau khi Cục Thuế thông báo hệ thống hoạt động lại.

> 💡 Các câu hỏi cần chốt khi thiết kế tích hợp: doanh nghiệp dùng loại hoá đơn nào (có mã, không mã, máy tính tiền); ERP gọi API của nhà cung cấp hay người dùng lập trên cổng của nhà cung cấp; ai ký số và lúc nào; ERP nhận lại những trường nào; hoá đơn bị từ chối cấp mã thì chứng từ bán hàng ở trạng thái gì; phiếu xuất kho kiêm vận chuyển nội bộ có đi qua cùng luồng không.

Hoá đơn lập sai được xử lý bằng hoá đơn điều chỉnh hoặc thay thế theo Điều 10 TT91, xem [[kt-11-but-toan-tong-hop-dieu-chinh]]. Hoá đơn trên kênh online xem [[ktqt-16-hoa-don-kenh-online]].

## Nguồn

- Luật Kế toán số 88/2015/QH13 (văn bản hợp nhất 41/VBHN-VPQH, Công báo số 172 ngày 31/03/2026, gồm sửa đổi bởi Luật 38/2019/QH14, Luật 56/2024/QH15, Luật 108/2025/QH15): khoản 3 Điều 3; Điều 16–21; Điều 41. https://cdn.thuvienphapluat.vn//uploads/Hoidapphapluat/2026/LNMT/Thang_4/260404/172_41_VBHN_VPQH.pdf
- Thông tư 99/2025/TT-BTC: Điều 8, 9, 10, 28. Toàn văn: https://docs.google.com/document/d/1pVNpXGJEpTA1nRM2pM4IzomKqqulmWNz/export?format=pdf
- Thông tư 99/2025/TT-BTC, Phụ lục I "Danh mục và biểu mẫu chứng từ kế toán", phần danh mục và phần B giải thích các mẫu 01-VT, 02-VT, 01-TT, 02-TT, 03-TT, 05-TT: https://luatvietnam.vn/doanh-nghiep/thong-tu-99-2025-tt-btc-huong-dan-che-do-ke-toan-doanh-nghiep-tu-01-01-2026-417085-d1.html
- LuatVietnam, "Danh mục 33 biểu mẫu chứng từ kế toán theo Thông tư 99" (đối chiếu danh mục): https://luatvietnam.vn/linh-vuc-khac/danh-muc-33-bieu-mau-chung-tu-ke-toan-theo-thong-tu-99-883-105817-article.html
- Nghị định 254/2026/NĐ-CP quy định chi tiết Luật Quản lý thuế số 108/2025/QH15 về hoá đơn điện tử, chứng từ điện tử: Điều 3, 4, 5, 6, 8, 9, 10, 12, 13, 14, 15, 16, 43. https://luatvietnam.vn/thue/nghi-dinh-254-2026-nd-cp-huong-dan-thi-hanh-luat-quan-ly-thue-2025-ve-hoa-don-dien-tu-439381-d1.html
- Thông tư 91/2026/TT-BTC: Điều 9, 10, 25. https://luatvietnam.vn/thue/thong-tu-91-2026-tt-btc-quy-dinh-luat-quan-ly-thue-va-hoa-don-dien-tu-439780-d1.html
- EY Việt Nam, Tin nhanh về Thuế tháng 7/2026 "Nghị định 254/2026/NĐ-CP về hóa đơn điện tử và chứng từ điện tử" (đối chiếu các điểm thay đổi): https://www.ey.com/content/dam/ey-unified-site/ey-com/vi-vn/technical/tax/documents/ey-vn-decree-254-on-electronic-invoices-and-electronic-documents.pdf
