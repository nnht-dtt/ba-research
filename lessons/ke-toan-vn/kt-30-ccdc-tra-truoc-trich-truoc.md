# Công cụ dụng cụ, chi phí trả trước, chi phí phải trả và phân bổ tự động

Bài này gom ba nghiệp vụ có chung một câu hỏi: chi phí thuộc kỳ nào khi thời điểm chi tiền, thời điểm nhận chứng từ và thời điểm hưởng lợi ích lệch nhau. Đọc xong, BA phân biệt được công cụ dụng cụ (TK 153), chi phí chờ phân bổ (TK 242, tên cũ "chi phí trả trước") và chi phí phải trả (TK 335), biết bút toán ở từng bước và hệ thống cần lịch phân bổ gồm những dữ liệu gì.

## Nguyên tắc chung: dồn tích và phù hợp

VAS 01 đặt hai nguyên tắc chi phối cả bài:

- **Cơ sở dồn tích** (đoạn 03): nghiệp vụ được ghi sổ vào thời điểm phát sinh, không căn cứ vào thời điểm thực tế thu hoặc chi tiền.
- **Phù hợp** (đoạn 06): ghi nhận doanh thu thì phải ghi nhận chi phí tương ứng có liên quan đến việc tạo ra doanh thu đó, gồm chi phí của kỳ tạo ra doanh thu, chi phí của các kỳ trước và chi phí phải trả liên quan đến doanh thu của kỳ đó.

Hệ quả: một khoản đã chi nhưng phục vụ nhiều kỳ phải được dàn ra nhiều kỳ (242); một khoản chưa chi, chưa có hóa đơn nhưng thuộc kỳ này phải được ghi nhận ngay (335). Các nguyên tắc này đã giới thiệu ở [[kt-04-nguyen-tac-ke-toan]].

<ab-toggle data-labels="TK 242: tiền trước, chi phí sau|TK 335: chi phí trước, tiền sau">
<svg viewBox="0 0 640 150" role="img" aria-label="Chi phí chờ phân bổ: chi tiền ở kỳ 1, chi phí dàn đều kỳ 1 đến kỳ 4" style="width:100%;max-width:640px;height:auto;display:block;margin:1rem auto" font-family="ui-sans-serif, system-ui, sans-serif">
<line x1="40" y1="100" x2="610" y2="100" stroke="currentColor" stroke-opacity="0.5" stroke-width="2"/>
<text x="110" y="125" font-size="13" text-anchor="middle" fill="currentColor">Kỳ 1</text>
<text x="250" y="125" font-size="13" text-anchor="middle" fill="currentColor">Kỳ 2</text>
<text x="390" y="125" font-size="13" text-anchor="middle" fill="currentColor">Kỳ 3</text>
<text x="530" y="125" font-size="13" text-anchor="middle" fill="currentColor">Kỳ 4</text>
<rect x="60" y="20" width="100" height="26" rx="6" fill="#3b82f6" fill-opacity="0.2" stroke="currentColor" stroke-opacity="0.22"/>
<text x="110" y="38" font-size="12" text-anchor="middle" fill="currentColor">Chi tiền: Nợ 242</text>
<rect x="60" y="58" width="100" height="26" rx="6" fill="#10b981" fill-opacity="0.18" stroke="currentColor" stroke-opacity="0.22"/>
<rect x="200" y="58" width="100" height="26" rx="6" fill="#10b981" fill-opacity="0.18" stroke="currentColor" stroke-opacity="0.22"/>
<rect x="340" y="58" width="100" height="26" rx="6" fill="#10b981" fill-opacity="0.18" stroke="currentColor" stroke-opacity="0.22"/>
<rect x="480" y="58" width="100" height="26" rx="6" fill="#10b981" fill-opacity="0.18" stroke="currentColor" stroke-opacity="0.22"/>
<text x="110" y="76" font-size="12" text-anchor="middle" fill="currentColor">Có 242</text>
<text x="250" y="76" font-size="12" text-anchor="middle" fill="currentColor">Có 242</text>
<text x="390" y="76" font-size="12" text-anchor="middle" fill="currentColor">Có 242</text>
<text x="530" y="76" font-size="12" text-anchor="middle" fill="currentColor">Có 242</text>
</svg>
<svg viewBox="0 0 640 150" role="img" aria-label="Chi phí phải trả: chi phí ghi nhận kỳ 1 đến kỳ 3, tiền chi ở kỳ 4" style="width:100%;max-width:640px;height:auto;display:block;margin:1rem auto" font-family="ui-sans-serif, system-ui, sans-serif">
<line x1="40" y1="100" x2="610" y2="100" stroke="currentColor" stroke-opacity="0.5" stroke-width="2"/>
<text x="110" y="125" font-size="13" text-anchor="middle" fill="currentColor">Kỳ 1</text>
<text x="250" y="125" font-size="13" text-anchor="middle" fill="currentColor">Kỳ 2</text>
<text x="390" y="125" font-size="13" text-anchor="middle" fill="currentColor">Kỳ 3</text>
<text x="530" y="125" font-size="13" text-anchor="middle" fill="currentColor">Kỳ 4</text>
<rect x="60" y="58" width="100" height="26" rx="6" fill="#f59e0b" fill-opacity="0.2" stroke="currentColor" stroke-opacity="0.22"/>
<rect x="200" y="58" width="100" height="26" rx="6" fill="#f59e0b" fill-opacity="0.2" stroke="currentColor" stroke-opacity="0.22"/>
<rect x="340" y="58" width="100" height="26" rx="6" fill="#f59e0b" fill-opacity="0.2" stroke="currentColor" stroke-opacity="0.22"/>
<text x="110" y="76" font-size="12" text-anchor="middle" fill="currentColor">Trích: Có 335</text>
<text x="250" y="76" font-size="12" text-anchor="middle" fill="currentColor">Trích: Có 335</text>
<text x="390" y="76" font-size="12" text-anchor="middle" fill="currentColor">Trích: Có 335</text>
<rect x="480" y="20" width="100" height="26" rx="6" fill="#3b82f6" fill-opacity="0.2" stroke="currentColor" stroke-opacity="0.22"/>
<text x="530" y="38" font-size="12" text-anchor="middle" fill="currentColor">Chi tiền: Nợ 335</text>
</svg>
<ab-note>TK 242 giữ khoản đã chi (hoặc đã phát sinh) cho nhiều kỳ như một tài sản, mỗi kỳ chuyển một phần sang chi phí. Số dư Nợ.</ab-note>
<ab-note>TK 335 ghi chi phí của kỳ khi chưa đủ chứng từ hoặc chưa đến hạn trả, tạo một khoản nợ; khi chi thực tế thì tất toán với số đã trích. Số dư Có.</ab-note>
</ab-toggle>

## Công cụ, dụng cụ (TK 153)

### Thế nào là công cụ, dụng cụ

TT99 (Phụ lục II, TK 153, mục 1a) định nghĩa công cụ, dụng cụ là tư liệu lao động không đủ tiêu chuẩn về giá trị và thời gian sử dụng của TSCĐ, nên được quản lý và hạch toán như nguyên liệu, vật liệu. Các ví dụ TT99 liệt kê: đà giáo, ván khuôn, dụng cụ gá lắp chuyên dùng cho xây lắp; thiết bị, phụ tùng thay thế; bao bì bán kèm hàng hóa có tính tiền riêng; dụng cụ, đồ nghề bằng thủy tinh, sành, sứ; phương tiện quản lý, đồ dùng văn phòng; quần áo, giày dép chuyên dùng. Ranh giới với TSCĐ là bốn tiêu chuẩn và ngưỡng giá trị ở [[kt-29-vong-doi-tscd]].

Nhập, xuất, tồn công cụ dụng cụ phản ánh theo giá gốc, cách xác định giá gốc như nguyên liệu, vật liệu (TK 153, mục 1b); phương pháp tính giá xuất xem [[kt-23-dinh-gia-ton-kho]]. Kế toán chi tiết theo từng kho, loại, nhóm, thứ; công cụ dụng cụ đã xuất dùng phải được theo dõi cả hiện vật và giá trị theo nơi sử dụng, đối tượng thuê và người chịu trách nhiệm vật chất (mục 1c). Yêu cầu cuối cùng này có nghĩa là sau khi xuất kho, hệ thống vẫn phải biết món đồ đang ở bộ phận nào, ai giữ.

Danh mục TT99 không có tài khoản cấp 2 cho TK 153; doanh nghiệp tự mở chi tiết như thiết bị, phụ tùng thay thế, bao bì luân chuyển, đồ dùng cho thuê (TK 153, mục 2).

### Bút toán theo vòng đời

**Mua nhập kho** (TK 153, mục 3a): `Nợ TK 153, Nợ TK 133 (1331) / Có TK 111, 112, 141, 331`

**Xuất dùng, giá trị nhỏ hoặc chỉ liên quan một kỳ** (mục 1d, 3đ): ghi toàn bộ một lần vào chi phí

`Nợ TK 623, 627, 641, 642 / Có TK 153`

**Xuất dùng, liên quan nhiều kỳ** (mục 1đ, 3đ): đưa vào chi phí chờ phân bổ rồi phân bổ dần

- Khi xuất: `Nợ TK 242 / Có TK 153`
- Mỗi kỳ: `Nợ TK 623, 627, 641, 642 / Có TK 242`

**Cho thuê công cụ dụng cụ** (mục 3đ): xuất cho thuê như trên (Nợ 242), doanh thu cho thuê `Nợ TK 111, 112, 131 / Có TK 511, Có TK 3331 (33311)`; khi nhận lại `Nợ TK 153 / Có TK 242` theo giá trị còn lại chưa phân bổ.

**Chiết khấu thương mại, giảm giá nhận sau khi mua** (mục 3b): phân bổ theo nơi công cụ đang nằm, ghi Có TK 153 nếu còn tồn kho, Có 154, 641, 642 nếu đã xuất dùng, Có 242 nếu đang phân bổ dần, Có 632 nếu sản phẩm cấu thành đã tiêu thụ. Hệ thống muốn tự động hóa bước này phải truy được món công cụ đang ở trạng thái nào.

**Thanh lý, nhượng bán công cụ dụng cụ** (mục 3h): `Nợ TK 632 / Có TK 153` và doanh thu `Nợ TK 111, 112, 131 / Có TK 511, Có TK 333`.

Kiểm kê thừa, thiếu xử lý như nguyên liệu, vật liệu (mục 3g), xem [[kt-24-kiem-ke-du-phong]].

> 💡 "Giá trị nhỏ" không có ngưỡng trong TT99. Thông tư 45/2013 (Điều 3 khoản 2) chỉ nói khoản chi không đủ tiêu chuẩn TSCĐ thì hạch toán trực tiếp hoặc phân bổ dần vào chi phí. Ngưỡng ghi một lần, số kỳ phân bổ mặc định theo nhóm công cụ là chính sách nội bộ cần chốt và ghi vào quy chế kế toán ([[kt-05-chinh-sach-quy-che]]).

> ⚠️ Cần xác nhận: giới hạn thời gian phân bổ công cụ dụng cụ được chấp nhận khi tính chi phí được trừ thuế TNDN. Nguồn đã đọc cho bài này không quy định; Thông tư 45/2013 Điều 7 khoản 2 chỉ nêu mức tối đa 3 năm cho chi phí sửa chữa TSCĐ phân bổ dần.

## Chi phí chờ phân bổ (TK 242)

### Đổi tên và phạm vi

TT99 đặt tên TK 242 là "Chi phí chờ phân bổ" (danh mục Phụ lục II). Tài khoản phản ánh chi phí thực tế đã phát sinh, gồm cả khoản đã trả tiền trước và khoản chưa trả tiền, nhưng liên quan đến kết quả của nhiều kỳ kế toán, và việc phân bổ chúng vào các kỳ sau (TK 242, mục 1a). Như vậy "trả trước" không còn là điều kiện: điều kiện là chi phí đã phát sinh và liên quan nhiều kỳ.

Nội dung TT99 liệt kê (mục 1b):

- Chi phí thuê cơ sở hạ tầng, thuê hoạt động TSCĐ (quyền sử dụng đất, nhà xưởng, kho bãi, văn phòng, cửa hàng...) phục vụ nhiều kỳ.
- Chi phí mua bảo hiểm (cháy nổ, trách nhiệm dân sự chủ phương tiện, thân xe, tài sản...) và các khoản chi trả một lần cho nhiều kỳ.
- Công cụ, dụng cụ, bao bì luân chuyển, đồ dùng cho thuê liên quan nhiều kỳ.
- Chi phí sửa chữa, bảo dưỡng định kỳ TSCĐ liên quan nhiều kỳ.
- Chênh lệch giá bán nhỏ hơn giá trị còn lại (thuê tài chính) hoặc nhỏ hơn giá trị hợp lý (thuê hoạt động) trong giao dịch bán và thuê lại TSCĐ.
- Lợi thế thương mại từ hợp nhất kinh doanh không hình thành quan hệ công ty mẹ – con, trừ hợp nhất dưới sự kiểm soát chung.
- Các chi phí khác liên quan nhiều kỳ không thỏa điều kiện TSCĐ, ví dụ tiền đọc tài liệu khai thác tài nguyên, khoáng sản.

Danh sách này không có chi phí thành lập doanh nghiệp, chi phí quảng cáo, đào tạo trong giai đoạn trước hoạt động. TT99 (TK 213, mục 1e) ghi các khoản đó vào chi phí sản xuất kinh doanh trong kỳ, và Grant Thornton Việt Nam nêu đây là thay đổi so với quy định cũ cho phép đưa vào chi phí trả trước. Doanh nghiệp đang phân bổ dở các khoản này từ năm trước cần chốt cách xử lý số dư khi chuyển đổi.

> ⚠️ Cần xác nhận: số dư chi phí thành lập, quảng cáo trước hoạt động đang phân bổ dở trên TK 242 tại 31/12/2025 có được tiếp tục phân bổ hay phải xử lý một lần. Điều 30 TT99 (điều khoản chuyển tiếp) không nêu riêng trường hợp này; nguyên tắc chung tại khoản 1 cho phép áp dụng phi hồi tố khi văn bản không yêu cầu hồi tố. Chốt với kế toán trưởng hoặc kiểm toán.

### Bút toán

TK 242, mục 3:

- Phát sinh chi phí cần phân bổ nhiều kỳ: `Nợ TK 242, Nợ TK 133 / Có TK 111, 112, 153, 331, 334, 338`
- Trả trước tiền thuê hoạt động TSCĐ, cơ sở hạ tầng: `Nợ TK 242, Nợ TK 133 / Có TK 111, 112`
- Định kỳ phân bổ: `Nợ TK 623, 627, 635, 641, 642 / Có TK 242`

Ví dụ giả định: ngày 01/04 doanh nghiệp trả 120.000.000 đ (chưa thuế) tiền thuê kho 12 tháng cho bộ phận bán hàng. Ngày 01/04 ghi `Nợ TK 242: 120.000.000, Nợ TK 133 / Có TK 112`. Cuối mỗi tháng từ tháng 4 năm nay đến tháng 3 năm sau ghi `Nợ TK 641 / Có TK 242: 10.000.000`. Tại 31/12, số dư TK 242 là 30.000.000 đ.

### Phương pháp và tiêu thức phân bổ

TT99 (TK 242, mục 1c) không đặt một công thức chung: doanh nghiệp căn cứ tính chất, mức độ từng loại chi phí để chọn phương pháp và tiêu thức phân bổ. Hai ví dụ trong văn bản: chi phí sửa chữa, bảo dưỡng định kỳ phân bổ từ khi hoàn thành đến lần bảo dưỡng tiếp theo; công cụ dụng cụ, bao bì luân chuyển, đồ dùng cho thuê phân bổ theo thời gian sử dụng hữu ích dự kiến. TK 153 (mục 3đ) nêu thêm tiêu thức theo mức độ, khối lượng sản phẩm, dịch vụ mà công cụ tham gia trong từng kỳ.

Doanh nghiệp phải theo dõi chi tiết từng khoản chi phí chờ phân bổ theo kỳ hạn, số đã phát sinh, số đã phân bổ vào từng đối tượng chịu chi phí của từng kỳ và số còn lại (TK 242, mục 1d). Với hệ thống, đây là yêu cầu có một sổ chi tiết theo từng khoản, không chỉ một số dư tổng trên tài khoản.

## Chi phí phải trả (TK 335)

### Dùng khi nào

TT99 (TK 335, mục 1a) dùng TK 335 cho:

- Khoản phải trả cho hàng hóa, dịch vụ đã nhận từ người bán hoặc đã cung cấp cho người mua trong kỳ báo cáo nhưng chưa chi trả do chưa có đủ chứng từ, hồ sơ, tài liệu kế toán, được ghi vào chi phí của kỳ báo cáo.
- Tiền lương nghỉ phép phải trả người lao động (xem [[kt-31-tien-luong]]).
- Chi phí trong thời gian ngừng sản xuất theo mùa, vụ có kế hoạch.
- Lãi tiền vay trả sau, lãi trái phiếu trả sau (xem [[kt-32-tien-ngan-hang-vay]]).

Việc trích trước phải tính toán chặt chẽ, có dự toán được phê duyệt và bằng chứng hợp lý, tin cậy; nghiêm cấm trích trước vào chi phí những nội dung không được tính vào chi phí sản xuất kinh doanh (mục 1d). Cuối năm, khoản trích trước chưa sử dụng phải giải trình trong thuyết minh báo cáo tài chính (mục 1g).

### Phân biệt với dự phòng phải trả (TK 352)

TT99 (TK 335, mục 1b, 1c) đặt hai tiêu chí:

| | Chi phí phải trả (335) | Dự phòng phải trả (352) |
|---|---|---|
| Thời gian thanh toán | Chắc chắn | Thường chưa xác định cụ thể |
| Số phải trả | Xác định được chắc chắn | Ước tính được nhưng chưa chắc chắn |
| Ví dụ trong TT99 | Lương nghỉ phép, lãi vay trả sau | Bảo hành sản phẩm, công trình; tái cơ cấu |
| Trình bày | Là một phần của phải trả thương mại hoặc phải trả khác | Trình bày tách riêng |

Bảo hành sản phẩm vì thế không đi qua 335 dù doanh nghiệp gọi là "trích trước bảo hành".

### Bút toán

TK 335, mục 3:

- Trích trước lương nghỉ phép công nhân sản xuất: `Nợ TK 622 / Có TK 335`
- Trích trước chi phí ngừng việc theo thời vụ hoặc kế hoạch: `Nợ TK 623, 627 / Có TK 335`
- Lãi vay trả sau, cuối kỳ: `Nợ TK 635 (hoặc Nợ TK 627, 241 nếu được vốn hóa) / Có TK 335`
- Khi chi phí thực tế phát sinh: `Nợ TK 335 (số đã trích), Nợ TK 133 / Có TK 111, 112, 152, 153, 331, 334`. Thực tế lớn hơn số trích thì phần chênh ghi thêm Nợ 623, 627; thực tế nhỏ hơn thì phần chênh ghi Có 623, 627.

Nguyên tắc tất toán (mục 1đ): chi phí phải trả phải được quyết toán với số thực tế, chênh lệch điều chỉnh tăng, giảm chi phí của bộ phận liên quan.

Ví dụ giả định: dịch vụ vệ sinh nhà xưởng tháng 12 đã thực hiện, theo hợp đồng 15.000.000 đ, nhưng đến ngày khóa sổ chưa nhận hóa đơn. Cuối tháng 12 ghi `Nợ TK 627 / Có TK 335: 15.000.000`. Tháng 1 nhận hóa đơn 15.000.000 đ chưa thuế, ghi `Nợ TK 335: 15.000.000, Nợ TK 133 / Có TK 331`. Chi phí nằm đúng kỳ tháng 12, thuế GTGT đầu vào theo hóa đơn tháng 1.

## Phân bổ và trích trước tự động trong hệ thống

Cả ba nghiệp vụ trên đều là bút toán định kỳ sinh ra từ một bản ghi gốc, nên hệ thống thường có một "lịch phân bổ" cho mỗi khoản. Từ các yêu cầu TT99 nêu trên, lịch phân bổ cần ít nhất: số tiền gốc, ngày bắt đầu và ngày kết thúc (hoặc số kỳ), cách tính phần của kỳ lẻ, tài khoản treo (242) và tài khoản chi phí, chiều phân tích (bộ phận, trung tâm chi phí, xem [[kt-33-trung-tam-chi-phi]]), số đã phân bổ và số còn lại.

Lấy Odoo 19 làm ví dụ (Deferred expenses): cấu hình chung gồm journal ghi bút toán phân bổ, tài khoản Deferred Expense (loại Current Asset), cách sinh bút toán (On bill validation, mặc định, hoặc Manually & Grouped) và cách tính (Based on: Days, Months, Full Months). Trên từng dòng hóa đơn mua, người dùng nhập ngày bắt đầu và kết thúc. Với On bill validation, bút toán đầu tiên vào ngày hạch toán của hóa đơn chuyển số tiền từ tài khoản chi phí sang tài khoản deferred, các bút toán sau chuyển dần về chi phí từng tháng. Với Manually & Grouped, cuối tháng người dùng bấm Generate Entries trong báo cáo Deferred Expense, Odoo tạo một bút toán gộp theo tài khoản và một bút toán đảo vào đầu tháng sau. Ba cách tính cho ra số khác nhau ở tháng đầu và tháng cuối khi kỳ bắt đầu giữa tháng, nên cách tính là một quyết định chính sách, không chỉ là tham số kỹ thuật.

> 📌 Lịch phân bổ trên dòng hóa đơn chỉ bao được khoản đi qua hóa đơn mua. Công cụ dụng cụ xuất từ kho và chi phí bảo dưỡng định kỳ kết chuyển từ 2413 không có hóa đơn ở thời điểm đưa vào 242, nên cần kiểm tra hệ thống có cách tạo lịch phân bổ từ phiếu xuất kho hoặc bút toán kết chuyển hay phải làm bút toán định kỳ thủ công.

Trích trước (335) thường không có lịch tự động sẵn vì số tiền là ước tính. Điểm cần chốt: ai lập dự toán trích trước, bút toán trích có được tự động đảo đầu kỳ sau hay tất toán khi hóa đơn về, và báo cáo nào liệt kê khoản 335 còn treo để giải trình cuối năm. Các bút toán này nằm trong checklist khóa sổ ở [[kt-36-quy-trinh-khoa-so]].

## Ảnh hưởng tới báo cáo

Báo cáo tình hình tài chính (TT99 Phụ lục IV):

- **Công cụ dụng cụ còn trong kho** (TK 153) nằm trong hàng tồn kho.
- **Chi phí chờ phân bổ ngắn hạn** (mã số 161): khoản có thời gian phân bổ từ 12 tháng trở xuống hoặc trong một chu kỳ kinh doanh thông thường kể từ thời điểm phát sinh. **Chi phí chờ phân bổ dài hạn** (mã số 271): thời gian dự kiến phân bổ trên 12 tháng kể từ thời điểm phát sinh. TT99 ghi rõ không tái phân loại chi phí chờ phân bổ dài hạn thành ngắn hạn. Vì phân loại theo thời gian phân bổ tính từ lúc phát sinh, hệ thống cần lưu thuộc tính ngắn hạn/dài hạn trên từng khoản 242 ngay khi tạo, không tính lại theo thời gian còn lại.
- **Chi phí phải trả ngắn hạn** (mã số 316): số dư Có chi tiết TK 335 có kỳ hạn thanh toán không quá 12 tháng, ví dụ trích trước lương nghỉ phép, lãi vay phải trả.

Báo cáo kết quả hoạt động kinh doanh nhận phần phân bổ và phần trích trước vào đúng dòng chi phí theo tài khoản Nợ (giá vốn qua 627, chi phí bán hàng 641, quản lý 642, tài chính 635). Thuyết minh phải giải trình khoản trích trước chưa sử dụng cuối năm (TT99 TK 335, mục 1g). Xem [[kt-39-bao-cao-tinh-hinh-tai-chinh]] và [[kt-40-bao-cao-ket-qua-kinh-doanh]].

## Nguồn

- Chuẩn mực kế toán Việt Nam số 01 – Chuẩn mực chung (Quyết định 165/2002/QĐ-BTC), đoạn 03 (cơ sở dồn tích), đoạn 06 (phù hợp): https://ketoananpha.vn/he-thong-chuan-muc-ke-toan-dot-2-01-06-10-15-16-24
- Thông tư 99/2025/TT-BTC, Phụ lục II: danh mục tài khoản (TK 153, 242, 335); TK 153 (mục 1, 2, 3a, 3b, 3đ, 3g, 3h); TK 242 (mục 1, 2, 3a–3d); TK 335 (mục 1, 2, 3); TK 213 (mục 1e). Phụ lục IV: hướng dẫn mã số 161, 271, 316. Điều 30 khoản 1. Bản toàn văn dạng Word: https://chedo.ketoanthue.net/tai-ve/thong-tu-99-2025-tt-btc-che-do-ke-toan-doanh-nghiep.docx; danh mục tài khoản Phụ lục II: https://docs.google.com/document/d/14NeM16EEKMINCoSraTafe0w_iySTX1Ub/export?format=pdf
- Kế toán Lê Ánh, trích Phụ lục II TT99 cho TK 153, 242, 335 (dùng để đối chiếu): https://ketoanleanh.edu.vn/kinh-nghiem-ke-toan/tai-khoan-153-cong-cu-dung-cu-theo-thong-tu-99-2025-tt-btc.html, https://ketoanleanh.edu.vn/kinh-nghiem-ke-toan/tai-khoan-242-chi-phi-cho-phan-bo-theo-thong-tu-99-2025-tt-btc.html, https://ketoanleanh.edu.vn/kinh-nghiem-ke-toan/tai-khoan-335-chi-phi-phai-tra-theo-thong-tu-99-2025-tt-btc.html
- Thông tư 45/2013/TT-BTC, Điều 3 khoản 2, Điều 7 khoản 2: https://vcci.com.vn/legal-document/thong-tu-452013tt-btc-cua-bo-tai-chinh-ve-viec-huong-dan-che-do-quan-ly-su-dung-va-trich-khau-hao-tai-san-co-dinh
- Grant Thornton Việt Nam, "Thông tư số 99/2025/TT-BTC – Những thay đổi chính", mục Hướng dẫn hạch toán kế toán: https://www.grantthornton.com.vn/contentassets/2453c36bf5094e8b82a9da0fb262b505/decree-99---vie-version.pdf
- Odoo 19 Documentation, Deferred expenses: https://www.odoo.com/documentation/19.0/applications/finance/accounting/vendor_bills/deferred_expenses.html
