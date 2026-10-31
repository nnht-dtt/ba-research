# Chi phí mua, trả hàng, chiết khấu và hàng nhập khẩu

Bài trước đi qua luồng mua hàng chuẩn. Bài này xử lý những thứ làm giá nhập kho khác giá trên hoá đơn: chi phí thu mua phân bổ vào giá (landed cost), chiết khấu và giảm giá, trả lại hàng, và các loại thuế ở khâu nhập khẩu. Đọc xong, bạn biết khoản nào được cộng vào giá gốc hàng tồn kho, khoản nào đi vào chi phí hay doanh thu tài chính, và bút toán tương ứng theo TT99.

## Giá gốc hàng mua gồm những gì

Chuẩn mực VAS 02 (đoạn 05–06) quy định giá gốc hàng tồn kho gồm chi phí mua, chi phí chế biến và các chi phí liên quan trực tiếp khác để có hàng ở địa điểm và trạng thái hiện tại. **Chi phí mua** gồm:

- giá mua;
- các loại thuế không được hoàn lại;
- chi phí vận chuyển, bốc xếp, bảo quản trong quá trình mua hàng;
- các chi phí khác liên quan trực tiếp đến việc mua hàng tồn kho.

Chiết khấu thương mại và giảm giá hàng mua do hàng không đúng quy cách, phẩm chất được **trừ khỏi** chi phí mua.

TT99 cụ thể hoá cho hàng hoá (TK 156, nguyên tắc c): giá gốc gồm giá mua, chi phí thu mua, thuế nhập khẩu, thuế tiêu thụ đặc biệt (TTĐB), thuế bảo vệ môi trường (BVMT) nếu có, và thuế GTGT hàng nhập khẩu nếu không được khấu trừ. Chi phí thu mua gồm bảo hiểm hàng hoá, thuê kho, thuê bến bãi, vận chuyển, bốc xếp, bảo quản từ nơi mua về kho, và hao hụt tự nhiên trong định mức. Hàng mua về phải gia công, sơ chế, tân trang để tăng giá trị hoặc dễ bán thì chi phí đó cũng tính vào giá mua.

VAS 02 (đoạn 11) loại khỏi giá gốc: chi phí vượt mức bình thường, chi phí bảo quản hàng tồn kho (trừ chi phí bảo quản cần cho quá trình sản xuất tiếp theo và chi phí bảo quản trong quá trình mua nêu ở đoạn 06), chi phí bán hàng và chi phí quản lý doanh nghiệp.

> 📌 Thuế GTGT được khấu trừ không nằm trong giá gốc. Nó ghi riêng vào TK 133 ([[kt-16-thue-gtgt-dau-vao]]). Chỉ phần thuế GTGT không được khấu trừ mới cộng vào giá trị hàng mua.

## Chi phí thu mua và phân bổ vào giá nhập (landed cost)

Hoá đơn vận chuyển, bảo hiểm, bốc xếp thường đến từ nhà cung cấp khác với người bán hàng, và có thể về sau phiếu nhập kho. TT99 cho hai cách ghi (TK 156, mục 3.5):

> Nợ TK 156 (nếu tính vào giá trị hàng mua) hoặc Nợ TK 632 (nếu tính vào giá vốn), Nợ TK 133 (nếu có) / Có TK 111, 112, 141, 331

Với nguyên vật liệu, chi phí thu mua, bốc xếp, vận chuyển về kho ghi Nợ TK 152, Nợ TK 133 / Có TK 111, 112, 141, 331 (TK 152, mục 3.6).

Quy tắc phân bổ theo TT99 (TK 156, nguyên tắc c):

- Chi phí thu mua liên quan đến nhiều mặt hàng được **phân bổ theo tiêu thức phù hợp**, và tiêu thức phải áp dụng **nhất quán**.
- Chi phí thu mua giá trị nhỏ liên quan đến nhiều mặt hàng có thể **ghi ngay vào giá vốn hàng bán**.
- Doanh nghiệp có thể theo dõi giá gốc hàng hoá chi tiết theo giá mua và chi phí thu mua. Cuối kỳ, phần chi phí thu mua phân bổ cho hàng đã bán ghi Nợ TK 632 / Có TK 156 (mục 3.17).

**Ví dụ giả định.** Một lô hàng gồm mặt hàng X trị giá 60.000.000 đồng và mặt hàng Y trị giá 40.000.000 đồng (chưa thuế). Phí vận chuyển lô hàng 3.000.000 đồng chưa thuế GTGT. Nếu doanh nghiệp chọn tiêu thức phân bổ theo giá trị, X nhận 1.800.000 đồng và Y nhận 1.200.000 đồng phí vận chuyển. Giá nhập kho của X là 61.800.000 đồng, của Y là 41.200.000 đồng. Chọn tiêu thức nào (giá trị, số lượng, trọng lượng…) là quyết định chính sách, phải ghi vào quy chế và áp dụng nhất quán.

**Điểm chạm hệ thống (ví dụ Odoo 19).** Odoo gọi chức năng này là Landed Costs. Sản phẩm trên đơn mua phải thuộc nhóm sản phẩm tính giá theo AVCO hoặc FIFO. Phí được khai là sản phẩm loại dịch vụ, đánh dấu "Is a Landed Cost", với tiêu thức phân bổ: chia đều, theo số lượng, theo giá trị hiện tại, theo trọng lượng hoặc theo thể tích. Từ hoá đơn có dòng landed cost, người dùng tạo bản ghi landed cost, chọn phiếu nhập đã xác nhận, tính toán rồi xác nhận. Odoo hiển thị giá trị gốc, phần phân bổ thêm, giá trị mới và sinh bút toán điều chỉnh giá trị tồn kho. Landed cost gắn vào phiếu nhập đã xác nhận, nên phí có hoá đơn về sau vẫn phân bổ được vào lô hàng đã nhập kho.

> ⚠️ Khi phí về lúc một phần hàng của lô đã xuất bán, phần phân bổ cho hàng đã bán thuộc về giá vốn (TT99 TK 156 mục 3.17). Cách từng phần mềm chia phần này giữa tồn kho và giá vốn khác nhau, cần kiểm tra trên hệ thống cụ thể.

## Hàng nhận kèm khi mua

Mua hàng mà được nhà cung cấp tặng kèm sản phẩm, hàng hoá thì doanh nghiệp phải xác định và **ghi nhận riêng** hàng nhận kèm theo giá trị hợp lý (giá thị trường hoặc giá của tài sản tương tự). Ngoại lệ: doanh nghiệp không tách riêng hàng nhận thêm để sử dụng, cho, biếu, tặng hoặc bán (TT99, nguyên tắc kế toán hàng tồn kho, mục 7).

## Chiết khấu thương mại, giảm giá và chiết khấu thanh toán

Ba khoản này đều làm giảm số phải trả nhưng hạch toán khác nhau.

| Khoản | Bản chất | Hạch toán bên mua |
|---|---|---|
| Chiết khấu thương mại | Giảm giá do mua khối lượng lớn hoặc theo thoả thuận thương mại | Giảm giá trị hàng mua |
| Giảm giá hàng mua | Hàng không đúng quy cách, phẩm chất | Giảm giá trị hàng mua |
| Chiết khấu thanh toán | Trả tiền trước hạn | Doanh thu hoạt động tài chính (TK 515) |

**Chiết khấu, giảm giá đã trừ trên hoá đơn**: hàng nhập kho theo giá đã trừ, không có bút toán riêng. TT99 yêu cầu theo dõi rõ ràng các khoản chiết khấu, giảm giá **nếu chưa được phản ánh trong hoá đơn mua hàng** (TK 331, nguyên tắc d).

**Chiết khấu thương mại hoặc giảm giá nhận sau khi mua**: TT99 bắt phân bổ theo tình trạng của hàng tại thời điểm được hưởng. Phần nào còn tồn kho thì giảm tồn kho, phần nào đã bán hoặc đã dùng thì giảm chi phí tương ứng.

- Hàng hoá (TK 156, mục 3.3): Nợ TK 111, 112, 331 / Có TK 156 (phần còn tồn kho), Có TK 632 (phần đã tiêu thụ), Có TK 133 (thuế GTGT tương ứng, nếu có).
- Nguyên vật liệu (TK 152, mục 3.2): bên Có tách thêm TK 152 (còn tồn), TK 154, 621, 623, 627 (đã xuất cho sản xuất), TK 241 (đã dùng cho đầu tư xây dựng), TK 632 (sản phẩm đã tiêu thụ), TK 641, 642 (dùng cho bán hàng, quản lý), và TK 133.
- Công cụ dụng cụ (TK 153, mục 3b): tương tự, có thêm TK 242 nếu công cụ đang được phân bổ dần.

> 💡 Để chia được như trên, hệ thống phải truy được lô hàng được chiết khấu đã đi đâu (còn trong kho, đã xuất cho sản xuất hay đã bán). Nếu không có dữ liệu này, kế toán phải phân bổ thủ công ngoài hệ thống.

**Chiết khấu thanh toán** khi trả tiền trước hạn: Nợ TK 331 / Có TK 515 (TK 331 mục 3.6; TK 152 mục 3.4). Khoản này không làm giảm giá gốc hàng tồn kho.

## Trả lại hàng cho người bán

Hàng không đúng quy cách, phẩm chất theo hợp đồng mà phải trả lại (TK 156 mục 3.4; TK 152 mục 3.2; TK 133 mục 3.5):

> Nợ TK 111, 112, 331 (tổng giá thanh toán) / Có TK 152, 153, 156 (giá chưa thuế), Có TK 133 (thuế GTGT của hàng trả lại)

Căn cứ là chứng từ xuất hàng trả lại và chứng từ liên quan. Khi kiểm nhận phát hiện sai lệch, Biên bản kiểm nghiệm (Mẫu 03-VT, Phụ lục I TT99) là căn cứ quy trách nhiệm trong thanh toán. Thuế GTGT đầu vào của hàng trả lại được ghi giảm ở bên Có TK 133. Hoá đơn điều chỉnh, thay thế xem [[kt-09-chung-tu-hoa-don]] và [[kt-11-but-toan-tong-hop-dieu-chinh]].

## Hàng nhập khẩu

### Các loại thuế ở khâu nhập khẩu

Khi nhập khẩu, doanh nghiệp phát sinh nghĩa vụ với ngân sách nhà nước, theo dõi trên các tài khoản cấp 2, cấp 3 của TK 333:

- **TK 3333** – Thuế xuất, nhập khẩu (chi tiết thuế nhập khẩu);
- **TK 3332** – Thuế tiêu thụ đặc biệt (nếu hàng chịu thuế TTĐB);
- **TK 33381** – Thuế bảo vệ môi trường (nếu có);
- **TK 33312** – Thuế GTGT hàng nhập khẩu.

Thuế nhập khẩu, TTĐB, BVMT không được hoàn lại thì tính vào giá gốc hàng nhập khẩu. Thuế GTGT hàng nhập khẩu được khấu trừ thì ghi TK 133, không khấu trừ thì cộng vào giá hàng.

Theo Luật Thuế GTGT 48/2024/QH15 (Điều 7 khoản 1 điểm b), giá tính thuế GTGT hàng nhập khẩu là trị giá tính thuế nhập khẩu cộng thuế nhập khẩu, cộng thuế nhập khẩu bổ sung (nếu có), cộng thuế TTĐB (nếu có) và cộng thuế BVMT (nếu có). Thuế GTGT tính trên giá đã gồm các thuế kia.

### Bút toán

Theo TT99 (TK 156 mục 3.1b; TK 152 mục 3.5; TK 331 mục 3.1b):

1. Ghi nhận hàng nhập khẩu và các thuế tính vào giá:
   > Nợ TK 152, 153, 156, 211… / Có TK 331 (phải trả người bán nước ngoài), Có TK 3333 (thuế nhập khẩu), Có TK 3332 (thuế TTĐB, nếu có), Có TK 33381 (thuế BVMT, nếu có)
2. Thuế GTGT hàng nhập khẩu được khấu trừ:
   > Nợ TK 133 / Có TK 33312
   Nếu không được khấu trừ thì ghi Nợ TK 152, 153, 156, 211… / Có TK 33312.
3. Nộp thuế vào ngân sách: Nợ TK 3333, Nợ TK 33312 (và các TK thuế khác) / Có TK 111, 112.

**Ví dụ giả định.** Doanh nghiệp nhập một lô hàng hoá, trị giá tính thuế nhập khẩu quy đổi 250.000.000 đồng. Giả định thuế suất nhập khẩu 10% và thuế suất GTGT 10%, hàng không chịu TTĐB, BVMT.

- Thuế nhập khẩu: 25.000.000 đồng.
- Giá tính thuế GTGT: 250.000.000 + 25.000.000 = 275.000.000 đồng; thuế GTGT hàng nhập khẩu 27.500.000 đồng.
- Bút toán 1: Nợ TK 156 275.000.000 / Có TK 331 250.000.000, Có TK 3333 25.000.000.
- Bút toán 2: Nợ TK 133 27.500.000 / Có TK 33312 27.500.000.
- Phí vận chuyển nội địa từ cảng về kho, phí làm thủ tục… cộng vào giá nhập theo phần chi phí thu mua ở trên.

(Trong thực tế, trị giá tính thuế do hải quan xác định và có thể khác giá trên hợp đồng.)

### Tỷ giá

TT99 (nguyên tắc kế toán hàng tồn kho, mục 10) quy định:

- Giá mua bằng ngoại tệ ghi theo **tỷ giá giao dịch thực tế** tại thời điểm mua.
- Nếu đã **ứng trước** cho người bán bằng ngoại tệ, phần giá trị hàng tương ứng với số đã ứng ghi theo tỷ giá tại thời điểm ứng trước. Phần chưa trả ghi theo tỷ giá tại thời điểm nhận hàng.
- Các khoản thuế liên quan ghi theo **tỷ giá tính thuế** của pháp luật thuế, hải quan.

Vì vậy một lô hàng nhập khẩu có thể dùng hai đến ba tỷ giá khác nhau trên cùng bộ bút toán. Hệ thống cần lưu riêng từng tỷ giá. Chi tiết tỷ giá ở [[ktqt-05-giao-dich-ngoai-te]].

### Hàng đang đi đường và nhập khẩu uỷ thác

- Cuối kỳ hàng nhập khẩu đã thuộc quyền sở hữu nhưng còn ở cảng, kho ngoại quan hay trên đường vận chuyển thì ghi vào TK 151 ([[kt-12-quy-trinh-mua-hang]]).
- **Nhập khẩu uỷ thác**: bên giao uỷ thác ghi khoản phải trả người bán như mua thường, chi tiết theo từng đơn vị nhận uỷ thác (TK 331 mục 3.11). Phí uỷ thác tính vào giá trị hàng nhập khẩu: Nợ TK 151, 152, 156, 211…, Nợ TK 133 / Có TK 331. Nghĩa vụ thuế thuộc về bên giao uỷ thác. Chỉ bên giao uỷ thác dùng TK 333; bên nhận uỷ thác ghi khoản nộp hộ vào TK 138, 338 (TK 333 nguyên tắc đ).
- Thuế TTĐB của hàng nhập khẩu được hướng dẫn riêng tại TK 1383 cho một số mặt hàng (TT99 lấy ví dụ mặt hàng xăng).

> ⚠️ Cần xác nhận: hướng dẫn chi tiết TK 1383 nằm trong mục TK 138 của Phụ lục II, bài này chưa trích. Khi dự án có hàng nhập khẩu chịu thuế TTĐB thì đọc riêng mục này.

## Ảnh hưởng tới báo cáo

- Mọi khoản cộng vào giá gốc (chi phí thu mua, thuế nhập khẩu, thuế không được khấu trừ) đi vào **hàng tồn kho** và chỉ thành **giá vốn hàng bán** khi hàng được bán. Phân bổ sai làm lệch lãi gộp giữa các kỳ.
- Chiết khấu thương mại nhận sau làm giảm hàng tồn kho hoặc giá vốn tuỳ phần hàng còn hay đã bán. Chiết khấu thanh toán làm tăng **doanh thu hoạt động tài chính**.
- Thuế phải nộp ở khâu nhập khẩu nằm trong **nợ phải trả** (TK 333) cho tới khi nộp. Thuế GTGT hàng nhập khẩu được khấu trừ nằm trong **tài sản** (TK 133).
- Cách giá gốc đi vào giá xuất kho tuỳ phương pháp tính giá ([[kt-23-dinh-gia-ton-kho]]).

## Nguồn

- Chuẩn mực kế toán Việt Nam số 02 – Hàng tồn kho (Quyết định 149/2001/QĐ-BTC), đoạn 03, 04, 05, 06, 11: https://cdn.thuvienphapluat.vn//uploads/Hoidapphapluat/2024/TTTT/240912/vas2.doc
- Thông tư 99/2025/TT-BTC, Phụ lục II: nguyên tắc kế toán hàng tồn kho (mục 6, 7, 10); TK 133 (mục 3.4, 3.5); TK 151; TK 152 (mục 1b, 3.2, 3.4–3.6); TK 153 (mục 3b, 3c, 3e); TK 156 (nguyên tắc c, mục 3.1, 3.3–3.5, 3.17); TK 331 (nguyên tắc d, mục 3.1, 3.6, 3.7, 3.11); TK 333 (nguyên tắc d, đ; mục 3.1.2, 3.2, 3.4). Bản đăng lại toàn văn: https://expertis.vn/kb/vbpl/phu-luc-ii-thong-tu-99-2025-tt-btc/
- Thông tư 99/2025/TT-BTC, Phụ lục I: Mẫu 03-VT Biên bản kiểm nghiệm. Bản đăng lại: https://expertis.vn/kb/vbpl/phu-luc-i-thong-tu-99-2025-tt-btc/
- Luật Thuế giá trị gia tăng số 48/2024/QH15, Điều 7 khoản 1 điểm b (giá tính thuế hàng nhập khẩu): https://caselaw.vn/van-ban-phap-luat/411486-luat-thue-gia-tri-gia-tang-so-48-2024-qh15-ngay-26-11-2024-cua-quoc-hoi
- Odoo 19 Documentation, Inventory – Landed costs: https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/inventory_valuation/landed_costs.html
