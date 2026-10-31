# Kho thuê ngoài, kho trên sàn, kho ảo và hàng gửi đi

Bài này giúp BA phân biệt ba câu hỏi hay bị gộp làm một khi thiết kế kho: hàng đang nằm ở đâu, hàng thuộc sở hữu của ai, và hàng đã được xác định là bán hay chưa. Mỗi câu trả lời dẫn tới một cách ghi sổ khác nhau.

## Quy tắc gốc: sở hữu quyết định, không phải vị trí

VAS 02 (đoạn 03) liệt kê vào hàng tồn kho cả hàng mua đang đi đường, hàng gửi đi bán, hàng gửi đi gia công chế biến. Những hàng này không nằm trong kho của doanh nghiệp nhưng vẫn là hàng tồn kho của doanh nghiệp.

Chiều ngược lại, TT99 (Phụ lục II, nguyên tắc kế toán hàng tồn kho, điểm 3) quy định hàng nhận giữ hộ, nhận ký gửi, nhận ủy thác xuất nhập khẩu, nhận gia công... không thuộc quyền sở hữu và kiểm soát của doanh nghiệp thì không ghi là hàng tồn kho, dù đang nằm trong kho của doanh nghiệp. Doanh nghiệp mở sổ chi tiết theo dõi và thuyết minh trên báo cáo tài chính.

Chỉ tiêu Hàng tồn kho (mã số 141) trên Báo cáo tình hình tài chính được TT99 (Phụ lục IV) mô tả là giá trị hàng tồn kho "thuộc quyền sở hữu của doanh nghiệp và chưa xác định là đã bán trong kỳ". Hai điều kiện đó là khung để xét mọi loại kho dưới đây.

<ab-toggle data-labels="Hàng của mình ở kho người khác|Hàng người khác ở kho của mình">
<svg viewBox="0 0 640 150" role="img" aria-label="Hàng của doanh nghiệp nằm ở kho bên thứ ba" style="width:100%;max-width:640px;height:auto;display:block;margin:1rem auto" font-family="ui-sans-serif, system-ui, sans-serif">
<rect x="10" y="20" width="290" height="70" rx="10" fill="#3b82f6" fill-opacity="0.13" stroke="currentColor" stroke-opacity="0.22"/>
<text x="155" y="50" font-size="14" text-anchor="middle" fill="currentColor">Vị trí: kho thuê ngoài, kho sàn,</text>
<text x="155" y="72" font-size="14" text-anchor="middle" fill="currentColor">đại lý, kho ngoại quan</text>
<rect x="340" y="20" width="290" height="70" rx="10" fill="#10b981" fill-opacity="0.16" stroke="currentColor" stroke-opacity="0.22"/>
<text x="485" y="50" font-size="14" text-anchor="middle" fill="currentColor">Sở hữu: doanh nghiệp</text>
<text x="485" y="72" font-size="14" text-anchor="middle" fill="currentColor">→ vẫn là hàng tồn kho</text>
<text x="320" y="125" font-size="13" text-anchor="middle" fill="currentColor">Ghi TK 152, 155, 156 chi tiết theo địa điểm, hoặc TK 157 nếu đã gửi đi bán</text>
</svg>
<svg viewBox="0 0 640 150" role="img" aria-label="Hàng của bên khác nằm ở kho doanh nghiệp" style="width:100%;max-width:640px;height:auto;display:block;margin:1rem auto" font-family="ui-sans-serif, system-ui, sans-serif">
<rect x="10" y="20" width="290" height="70" rx="10" fill="#3b82f6" fill-opacity="0.13" stroke="currentColor" stroke-opacity="0.22"/>
<text x="155" y="50" font-size="14" text-anchor="middle" fill="currentColor">Vị trí: kho của doanh nghiệp</text>
<text x="155" y="72" font-size="14" text-anchor="middle" fill="currentColor">(nhận giữ hộ, ký gửi, gia công)</text>
<rect x="340" y="20" width="290" height="70" rx="10" fill="#f43f5e" fill-opacity="0.12" stroke="currentColor" stroke-opacity="0.22"/>
<text x="485" y="50" font-size="14" text-anchor="middle" fill="currentColor">Sở hữu: bên khác</text>
<text x="485" y="72" font-size="14" text-anchor="middle" fill="currentColor">→ không là hàng tồn kho</text>
<text x="320" y="125" font-size="13" text-anchor="middle" fill="currentColor">Sổ chi tiết theo dõi riêng và thuyết minh BCTC, không ghi TK 15x</text>
</svg>
<ab-note>Vị trí thay đổi không làm hàng rời khỏi bảng tình hình tài chính của doanh nghiệp.</ab-note>
<ab-note>Hàng có trong kho vật lý nhưng không có giá trị trên sổ của doanh nghiệp.</ab-note>
</ab-toggle>

## Kho thuê ngoài và kho bên thứ ba

Doanh nghiệp thuê một công ty logistics giữ hàng, hoặc gửi hàng ở kho của đối tác vận hành (fulfillment): hàng vẫn thuộc doanh nghiệp, vẫn ghi ở TK 152, 155, 156. Điều thay đổi là địa điểm. TT99 (nguyên tắc điểm 12) yêu cầu theo dõi chi tiết hàng tồn kho theo từng địa điểm quản lý, sử dụng, nên kho thuê ngoài cần là một kho riêng trong hệ thống để số tồn ở đó khớp được với biên bản đối chiếu của bên giữ hàng.

Chuyển hàng từ kho của mình sang kho thuê ngoài là dịch chuyển nội bộ, không phát sinh bút toán giá trị vì tài khoản không đổi. Odoo 19 mô tả đúng nguyên tắc này: dịch chuyển giữa hai địa điểm loại Internal không đổi số lượng sở hữu, không ảnh hưởng đơn giá hay tổng giá trị.

**Chi phí thuê kho** không đi vào giá gốc hàng tồn kho theo mặc định. VAS 02 (đoạn 11b) loại chi phí bảo quản khỏi giá gốc, trừ chi phí bảo quản cần cho quá trình sản xuất tiếp theo và chi phí bảo quản trong quá trình mua. TT99 phản ánh hai trường hợp ở hai tài khoản:

- Tiền thuê kho, thuê bến bãi trong quá trình thu mua là chi phí thu mua, tính vào giá hàng mua (TK 156, mục 1c).
- Tiền thuê kho, thuê bãi phục vụ bán hàng ghi chi phí bán hàng, TK 6417 (TK 641).

Hệ quả cho BA: hoá đơn của đơn vị logistics phải được tách theo bản chất (lưu kho đầu vào gắn lô hàng mua, hay lưu kho và giao hàng phục vụ bán) trước khi hạch toán. Tách chi phí mua được trình bày ở [[kt-13-mua-hang-nhap-khau]].

## Kho trên sàn thương mại điện tử

Khi doanh nghiệp gửi hàng vào kho do sàn vận hành để sàn đóng gói và giao cho người mua, cần xét bản chất hợp đồng với sàn chứ không dựa vào tên gọi "kho sàn":

- Nếu sàn chỉ cung cấp dịch vụ lưu kho, giao hàng và doanh nghiệp vẫn là người bán, hàng ở kho sàn là hàng tồn kho của doanh nghiệp tại một địa điểm khác (TK 155, 156 chi tiết kho), cùng logic với kho thuê ngoài ở trên.
- Nếu hàng giao cho bên khác bán hộ theo phương thức đại lý, ký gửi, TT99 xếp vào hàng gửi đi bán (TK 157), xem mục dưới.

> ⚠️ Cần xác nhận: TT99 không có hướng dẫn riêng cho hàng gửi tại kho do sàn thương mại điện tử vận hành. Việc ghi ở TK 156 chi tiết kho hay TK 157 cần kế toán khách hàng chốt dựa trên hợp đồng với sàn. Doanh thu gộp hay thuần và phí sàn được bàn ở [[ktqt-13-doanh-thu-kenh-online]] và [[ktqt-14-phi-san-cong-thanh-toan]].

Dù chọn cách nào, kho sàn cần đối soát số lượng định kỳ với báo cáo tồn của sàn, giống đối soát tiền ở [[ktqt-15-doi-soat-san-cod]]. Chênh lệch xử lý theo nguyên tắc kiểm kê ở [[kt-24-kiem-ke-du-phong]].

## Hàng gửi đi bán (TK 157)

TT99 (TK 157, mục 1) dùng tài khoản này cho:

- Hàng hóa, sản phẩm đã gửi cho khách hàng theo hợp đồng nhưng chưa được xác định là đã bán.
- Hàng gửi bán đại lý, ký gửi.
- Dịch vụ đã hoàn thành bàn giao nhưng chưa được xác định là đã bán.
- Hàng hóa, sản phẩm gửi kho ngoại quan.

Hàng trên TK 157 vẫn thuộc quyền sở hữu của doanh nghiệp. Doanh nghiệp mở sổ chi tiết theo từng loại hàng, từng lần gửi, từng khách hàng hoặc cơ sở đại lý, từ lúc gửi đến khi xác định là đã bán. Chi phí vận chuyển, bốc xếp chi hộ khách hàng không ghi vào TK 157.

Bút toán (TT99, TK 157 mục 3; TK 511 mục 3.8 cho bán qua đại lý):

1. Xuất kho gửi khách hàng, đại lý, căn cứ phiếu xuất kho (với đại lý là phiếu xuất kho hàng gửi bán đại lý): `Nợ TK 157 / Có TK 155, 156`.
2. Khi hàng được xác định là đã bán (với đại lý, căn cứ bảng kê hoá đơn bán ra do bên nhận đại lý lập gửi về): doanh thu `Nợ TK 111, 112, 131 / Có TK 511, Có TK 3331`, đồng thời giá vốn `Nợ TK 632 / Có TK 157`.
3. Hoa hồng phải trả đại lý: `Nợ TK 641, Nợ TK 1331 / Có TK 111, 112, 131`.
4. Gửi hàng vào kho ngoại quan để xuất khẩu: `Nợ TK 157 / Có TK 154, 155, 156`; khi xuất khẩu: `Nợ TK 632 / Có TK 157` và ghi doanh thu.

TT99 (TK 511 mục 1.5.15) nêu rõ không ghi doanh thu đối với trị giá hàng gửi bán đại lý, ký gửi chưa được xác định là đã bán. Chứng từ Bảng thanh toán hàng đại lý, ký gửi (01-BH) có trong danh mục Phụ lục I. Thời điểm xác định là đã bán thuộc chủ đề ghi nhận doanh thu, xem [[kt-17-quy-trinh-ban-hang]].

> 📌 Phía nhận đại lý thì ngược lại: TT99 (TK 511 mục 3.8b) hướng dẫn bên nhận mở sổ theo dõi giá trị hàng nhận bán đại lý như tài sản nhận giữ hộ và thuyết minh, không ghi hàng tồn kho; tiền bán hàng phải trả bên giao ghi `Có TK 331`, chỉ hoa hồng mới là doanh thu.

## Kho ảo và địa điểm logic

Hệ thống kho thường có nhiều "kho" không phải nhà kho thật: kho hàng lỗi chờ xử lý, kho chờ kiểm chất lượng, kho hàng đang chuyển giữa hai chi nhánh, kho trưng bày. Câu hỏi kế toán chỉ là: hàng ở địa điểm đó có còn thuộc sở hữu và chưa bán hay không.

Odoo 19 phân loại địa điểm theo đúng câu hỏi này (tài liệu Valuation of stock movements):

| Loại địa điểm | Tính vào tồn kho của công ty? | Ví dụ dùng |
|---|---|---|
| Internal | Có | Kho, khu nhận hàng, kiểm chất lượng, đóng gói, xuất hàng |
| Transit | Có | Hàng đang chuyển giữa hai kho của cùng công ty |
| Customers/Rental | Có | Hàng đang cho khách thuê |
| Vendors | Không | Hàng chưa nhận từ nhà cung cấp |
| Customers | Không | Hàng đã giao cho khách |
| Production | Không | Nơi tiêu hao nguyên liệu và tạo ra thành phẩm |
| Inventory Loss | Không | Điều chỉnh kiểm kê, huỷ hàng |
| Virtual | Không áp dụng | Địa điểm logic để tổ chức, không nên chứa hàng |

Một kho hàng lỗi hay kho chờ kiểm, nếu là địa điểm nội bộ, vẫn nằm trong giá trị tồn kho. Đó là đúng về kế toán; hàng lỗi chỉ ra khỏi tồn kho khi huỷ, thanh lý hoặc được xử lý như hàng thiếu (xem [[kt-24-kiem-ke-du-phong]]). Kho lỗi lại là nguồn dữ liệu tốt để chứng minh nhu cầu lập dự phòng.

> ✅ Khi thiết kế cây kho, đặt mỗi địa điểm vào một nhóm rõ ràng: thuộc sở hữu và tính giá trị, hay không thuộc sở hữu. Không để một địa điểm vừa chứa hàng của mình vừa chứa hàng nhận giữ hộ.

## Hàng nhận giữ hộ, nhận ký gửi trong kho của mình

Odoo 19 có tính năng Consignment: khi nhận hàng ký gửi, phiếu nhập ghi nhà cung cấp ở cả trường Receive From và Assign Owner. Hàng ký gửi xuất hiện trong báo cáo dịch chuyển nhưng không có trong báo cáo Stock Valuation và không ảnh hưởng giá trị tồn kho của bên nhận ký gửi. Cách làm này khớp với nguyên tắc điểm 3 của TT99.

Nghĩa vụ thuyết minh: TT99 (Phụ lục IV, thuyết minh báo cáo tài chính) yêu cầu thuyết minh chi tiết số lượng, chủng loại, quy cách, phẩm chất của vật tư, hàng hóa nhận giữ hộ, nhận gia công, hàng nhận bán hộ, nhận ký gửi, nhận bán đại lý, nhận ủy thác xuất nhập khẩu tại thời điểm cuối kỳ. Doanh nghiệp logistics, quản lý kho bãi phải thuyết minh thêm nhóm mặt hàng nhận giữ hộ, quyền và nghĩa vụ các bên trong bảo quản và rủi ro đáng kể. Hệ thống cần báo cáo tồn theo chủ sở hữu tại ngày khoá sổ để phục vụ phần này (xem [[kt-42-thuyet-minh-bctc]]).

> ⚠️ Cần xác nhận: danh mục tài khoản Phụ lục II TT99 không có tài khoản ngoài bảng, nhưng phần hướng dẫn Bảng cân đối số phát sinh ở Phụ lục III vẫn nhắc "các tài khoản ngoài Bảng Cân đối tài khoản". Doanh nghiệp có tiếp tục mở tài khoản theo dõi ngoài bảng cho hàng nhận giữ hộ hay chỉ dùng sổ chi tiết, cần chốt trong quy chế hạch toán của khách. Chi tiết ở [[kt-26-gia-cong]].

## Kho của chi nhánh và của pháp nhân khác

**Chi nhánh, đơn vị trực thuộc** cùng pháp nhân: hàng vẫn là của doanh nghiệp. TT99 (TK 155 mục 3.6, TK 156 mục 3.12) phân hai trường hợp khi xuất hàng cho đơn vị trực thuộc để bán:

- Đơn vị trực thuộc được phân cấp ghi nhận doanh thu, giá vốn: đơn vị xuất ghi giá vốn `Nợ TK 632 / Có TK 155, 156`.
- Không được phân cấp: giá trị hàng luân chuyển nội bộ ghi phải thu nội bộ `Nợ TK 136 (1368) / Có TK 155, 156`, có thể kèm `Có TK 333` nếu có thuế.

Lựa chọn này quyết định kho chi nhánh có hạch toán riêng hay chỉ là một địa điểm của kho công ty, nên cần chốt trước khi thiết kế cấu trúc kho.

**Pháp nhân khác trong cùng tập đoàn**: kho đặt ở công ty A nhưng chứa hàng của công ty B thì với A là hàng nhận giữ hộ, với B là hàng tồn kho tại địa điểm thuộc bên khác. Chuyển hàng giữa hai pháp nhân là giao dịch mua bán hoặc gửi hàng, không phải dịch chuyển nội bộ, xem [[ktqt-03-giao-dich-noi-bo]].

## Hàng mua đang đi đường và kho bảo thuế

Hai trường hợp nữa hàng không ở kho mà vẫn là hàng tồn kho:

- **Hàng mua đang đi đường** (TK 151): đã có hoá đơn, đã thuộc doanh nghiệp, cuối kỳ chưa về kho: `Nợ TK 151, Nợ TK 1331 / Có TK 111, 112, 331`; kỳ sau về nhập kho `Nợ TK 152, 156 / Có TK 151` (TT99, TK 152 mục 3.3, TK 156 mục 3.2).
- **Nguyên liệu, vật tư tại kho bảo thuế** (TK 158): chỉ cho doanh nghiệp sản xuất hàng xuất khẩu, nguyên liệu nhập khẩu đã thông quan nhưng chưa nộp thuế; nhập kho `Nợ TK 158 / Có TK 331`, xuất cho sản xuất `Nợ TK 621 / Có TK 158` (TT99, TK 158).

## Câu hỏi BA nên chốt

- Danh sách địa điểm vật lý và logic; địa điểm nào tính vào giá trị tồn kho, địa điểm nào là hàng không thuộc sở hữu.
- Với từng bên giữ hàng (logistics, sàn, đại lý): hợp đồng là dịch vụ kho hay bán hộ? Ghi TK 15x chi tiết kho hay TK 157?
- Chứng từ nào xác định hàng gửi đi đã bán (bảng kê của đại lý, báo cáo của sàn, xác nhận của khách)?
- Chi phí logistics tách thành chi phí mua và chi phí bán theo tiêu chí nào?
- Chi nhánh có được phân cấp ghi nhận doanh thu, giá vốn không?

## Nguồn

- Chuẩn mực kế toán Việt Nam số 02 – Hàng tồn kho (Quyết định 149/2001/QĐ-BTC), đoạn 03, 11. Bản toàn văn: https://cdn.thuvienphapluat.vn//uploads/Hoidapphapluat/2024/TTTT/240912/vas2.doc
- Thông tư 99/2025/TT-BTC, Phụ lục I (chứng từ 01-BH); Phụ lục II: nguyên tắc kế toán hàng tồn kho (điểm 3, 12), TK 151 qua TK 152 (mục 3.3) và TK 156 (mục 3.2), TK 155 (mục 3.6), TK 156 (mục 1c, 3.11, 3.12), TK 157, TK 158, TK 511 (mục 1.5.15, 3.8), TK 641 (TK 6417); Phụ lục III (hướng dẫn Bảng cân đối số phát sinh); Phụ lục IV (chỉ tiêu mã số 141; thuyết minh tài sản nhận giữ hộ, nhận ký gửi, nhận gia công). Bản toàn văn dạng Word: https://chedo.ketoanthue.net/tai-ve/thong-tu-99-2025-tt-btc-che-do-ke-toan-doanh-nghiep.docx; danh mục tài khoản Phụ lục II: https://docs.google.com/document/d/14NeM16EEKMINCoSraTafe0w_iySTX1Ub/export?format=pdf
- Odoo 19 Documentation, Valuation of stock movements and inventory operations (mục Location types, Internal moves): https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/inventory_valuation/operations_valuation.html
- Odoo 19 Documentation, Consignment: buy and sell stock without owning it: https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/shipping_receiving/daily_operations/owned_stock.html
