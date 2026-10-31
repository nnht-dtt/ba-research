# Khuyến mại, voucher, quà tặng và combo

Bài này giúp bạn phân loại một chương trình khuyến mại theo đúng bản chất kế toán trước khi bàn cấu hình: hàng tặng là chi phí bán hàng hay là một phần của giao dịch bán, doanh thu có phải phân bổ không, thuế GTGT tính trên giá nào, và hoá đơn lập ra sao. Ba bộ quy định chạm vào cùng một chương trình: chế độ kế toán (TT99), pháp luật thương mại về khuyến mại (Nghị định 81/2018), và thuế, hoá đơn (Luật Thuế GTGT, Nghị định 181/2025, Nghị định 123/2020).

## Nguyên tắc gốc: bản chất hơn hình thức

Thông tư 99/2025/TT-BTC (Phụ lục II, phần nguyên tắc kế toán các khoản doanh thu, mục 2) viết: doanh thu phải ghi nhận phù hợp với **bản chất hơn là hình thức hoặc tên gọi** của giao dịch và phải được phân bổ theo nghĩa vụ cung ứng hàng hoá, dịch vụ. Ví dụ TT99 đưa ra: "mua 2 sản phẩm được tặng thêm một sản phẩm" về hình thức gọi là khuyến mại, nhưng về bản chất là bán, vì khách không được hưởng nếu không mua.

Từ đó TT99 (TK 511 mục 1.5.3) chia hai trường hợp:

| | Khuyến mại không kèm điều kiện mua | Khuyến mại chỉ được hưởng khi mua |
|---|---|---|
| Ví dụ | Phát hàng mẫu, tặng quà cho người qua đường | Mua 2 tặng 1, mua máy tặng phụ kiện |
| Bản chất | Chi phí quảng bá | Giảm giá hàng bán, giao dịch bán gồm cả hàng tặng |
| Giá trị hàng tặng | Chi phí bán hàng (TK 641) | Giá vốn hàng bán (TK 632) |
| Doanh thu | Không có doanh thu cho hàng tặng | Phân bổ số tiền thu được cho cả hàng bán và hàng tặng |

TT99 nêu thêm một **ngoại lệ**: nếu theo đặc điểm mô hình kinh doanh, giá bán hàng chính **không thay đổi** dù khách có nhận hay không nhận hàng tặng kèm, thì giá trị hàng tặng ghi vào chi phí bán hàng như khuyến mại không kèm điều kiện. TT99 cũng để mở: doanh nghiệp căn cứ bản chất hàng hoá, dịch vụ đã cam kết, cách thức, thông lệ kinh doanh và danh mục hàng kinh doanh để hạch toán cho phù hợp.

> 💡 Câu hỏi BA cần hỏi khi khách mô tả một chương trình: "Khách không mua thì có được nhận không?" và "Giá bán hàng chính có đổi khi bỏ quà tặng không?". Hai câu trả lời này quyết định hàng tặng đi vào TK 641 hay TK 632, và có phải chia doanh thu hay không.

## Bút toán theo từng trường hợp

### Khuyến mại không kèm điều kiện mua

TT99 (TK 641 mục 3.g; TK 156 mục 3.14.a):

`Nợ TK 641 / Có TK 155, 156 / Có TK 3331 (nếu có)`

TT99 (nguyên tắc kế toán hàng tồn kho, mục 8.a) yêu cầu ghi vào chi phí bán hàng "chi tiết hàng khuyến mại, quảng cáo", nên hệ thống cần tách được khoản này trong TK 641.

Với hàng chịu thuế tiêu thụ đặc biệt dùng để khuyến mại không thu tiền, TT99 (TK 333 mục 3.2.2.e, thuế TTĐB): `Nợ TK 641, 642 / Có TK 154, 155 / Có TK 3332 (nếu có)`.

### Khuyến mại kèm điều kiện mua (mua X tặng Y)

TT99 (TK 511 mục 3.4; TK 156 mục 3.14.b; TK 632 mục 3.a):

- Giá vốn gồm cả hàng bán và hàng tặng: `Nợ TK 632 / Có TK 153, 155, 156`.
- Doanh thu gồm cả phần của hàng bán và phần của hàng tặng: `Nợ TK 111, 112, 131 / Có TK 511 / Có TK 3331 (nếu có)`.

Về cách phân bổ, TT99 (nguyên tắc doanh thu mục 2) nói doanh nghiệp phải phân bổ giá giao dịch cho cả sản phẩm bán và sản phẩm miễn phí **trên cơ sở giá bán đơn lẻ** của từng loại, làm cơ sở xác định doanh thu của từng sản phẩm.

Ví dụ giả định: chương trình "mua 2 tặng 1" cùng một sản phẩm, giá bán đơn lẻ 300 nghìn chưa thuế, khách trả 600 nghìn chưa thuế cho 3 sản phẩm. Tổng giá bán đơn lẻ là 900 nghìn, nên mỗi sản phẩm được phân bổ 600 × 300 / 900 = 200 nghìn doanh thu. Tổng doanh thu TK 511 vẫn là 600 nghìn, nhưng chia đều cho 3 sản phẩm thay vì 2 sản phẩm × 300 và 1 sản phẩm × 0. Giá vốn ghi cho cả 3 sản phẩm.

> 📌 Tổng doanh thu không đổi trong ví dụ trên. Phân bổ chỉ thay đổi doanh thu theo từng mặt hàng, tức là ảnh hưởng báo cáo doanh thu, lãi gộp theo sản phẩm, không ảnh hưởng tổng TK 511.

### Bán kèm thiết bị thay thế phòng hỏng

TT99 TK 511 mục 1.5.14: bán sản phẩm kèm sản phẩm, thiết bị thay thế (phòng khi hỏng) thì phải phân bổ doanh thu cho cả hàng bán và hàng giao để thay thế; giá trị hàng thay thế ghi vào giá vốn.

### Biếu, tặng không gắn với bán hàng

TT99 (TK 156 mục 3.14.c, d; TK 641 mục 3.i):

- Biếu, tặng khách hàng bên ngoài, tính vào chi phí: `Nợ TK 641 (hoặc 642) / Có TK 155, 156 / Có TK 3331 (nếu có)`.
- Biếu, tặng người lao động, trang trải bằng quỹ khen thưởng, phúc lợi: ghi doanh thu và giá vốn như bán thông thường: `Nợ TK 353 / Có TK 511 / Có TK 3331` và `Nợ TK 632 / Có TK 156`.

## Chương trình tích điểm (khách hàng truyền thống)

TT99 TK 511 mục 1.5.10 có hướng dẫn riêng cho chương trình khách hàng truyền thống, khi đồng thời thoả mãn: khách mua hàng được tích điểm để đổi hàng, dịch vụ miễn phí hoặc chiết khấu; người bán xác định được giá trị hợp lý của phần sẽ phải cung cấp miễn phí hoặc chiết khấu; chương trình có giới hạn thời gian rõ ràng, quá hạn thì người bán hết nghĩa vụ; đổi xong thì trừ điểm; việc cung cấp có thể do người bán hoặc bên thứ ba.

Bút toán (TT99 TK 511 mục 3.5):

- Khi bán: doanh thu = tổng tiền thu trừ giá trị hợp lý ước tính của phần phải cung cấp miễn phí hoặc chiết khấu: `Nợ TK 111, 112, 131 / Có TK 511 / Có TK 3387 / Có TK 333 (nếu có)`.
- Hết hạn mà khách không đủ điều kiện: `Nợ TK 3387 / Có TK 511`.
- Khách đổi điểm, người bán trực tiếp cung cấp: `Nợ TK 3387 / Có TK 511 / Có TK 333 (nếu có)`, đồng thời `Nợ TK 632 / Có TK 154, 155, 156`.
- Bên thứ ba cung cấp: chỉ phần chênh lệch giữa doanh thu chờ phân bổ và số phải trả bên thứ ba được ghi là doanh thu (coi như hoa hồng đại lý): `Nợ TK 3387 / Có TK 511 / Có TK 333 / Có TK 111, 112, 331`.
- Cuối kỳ, chênh lệch giữa ước tính và thực tế được điều chỉnh tăng, giảm doanh thu trong kỳ.

TK 3387 (Doanh thu chờ phân bổ) được giới thiệu ở [[kt-18-giam-tru-tra-truoc]].

## Voucher, phiếu mua hàng

Nghị định 81/2018/NĐ-CP (Điều 11) mô tả hình thức "bán hàng, cung ứng dịch vụ có kèm theo phiếu mua hàng, phiếu sử dụng dịch vụ": phiếu dùng để mua hàng, dịch vụ của chính thương nhân đó **hoặc** của thương nhân, tổ chức khác; giá trị tối đa của phiếu tặng kèm một đơn vị hàng bán phải theo hạn mức ở Điều 6.

Về thuế GTGT, Nghị định 181/2025/NĐ-CP (Điều 6 khoản 2 điểm c, bản hợp nhất 2026): bán hàng có kèm phiếu mua hàng thì giá tính thuế của hàng bán **không bao gồm giá trị phiếu mua hàng**.

Về kế toán, phiếu chỉ được tặng khi khách mua hàng là khuyến mại kèm điều kiện mua theo TT99 TK 511 mục 1.5.3.b, nên về nguyên tắc phải phân bổ số tiền thu được cho cả hàng bán và phần khuyến mại. Nếu phiếu vận hành như điểm thưởng có thời hạn thì có thể rơi vào hướng dẫn khách hàng truyền thống (TK 3387) ở trên.

> ⚠️ Cần xác nhận: TT99 không có mục riêng cho voucher trong phần đã đọc. Các điểm sau chưa có hướng dẫn cụ thể và cần chốt với kế toán của khách: (1) với phiếu tặng kèm, phần doanh thu phân bổ cho phiếu ghi nhận lúc phát hành phiếu hay lúc khách dùng phiếu, và có đi qua TK 3387 không; (2) voucher **bán lấy tiền** (thẻ quà tặng) ghi nhận ra sao trước khi khách đổi hàng; (3) phiếu dùng tại thương nhân khác thì doanh nghiệp là bên cung cấp hay đại lý.

## Combo nhiều mã hàng

Trường hợp một gói gồm nhiều mã hàng bán chung một giá:

- TT99 (nguyên tắc doanh thu mục 2) yêu cầu nhận biết các giao dịch trong một hợp đồng, phân bổ doanh thu theo nghĩa vụ cung ứng, và với giao dịch có nhiều nghĩa vụ thì phân bổ theo giá trị hợp lý của từng nghĩa vụ thực hiện.
- Với hàng tặng kèm, TT99 nêu rõ cơ sở phân bổ là giá bán đơn lẻ của từng loại (như ví dụ mua 2 tặng 1 ở trên).

> ⚠️ Cần xác nhận: các nguồn tư vấn chưa thống nhất cách phân bổ doanh thu combo và voucher. Văn bản đã đọc không quy định riêng cho "combo" gồm nhiều mã hàng cùng có giá: không nói combo có buộc phải phân bổ theo giá bán đơn lẻ hay được ghi theo một mã hàng gộp, cũng không nói xử lý khi một mã trong combo không có giá bán đơn lẻ. Đây là chính sách kế toán cần khách chốt và ghi vào quy chế, trước khi thiết kế cấu hình.

## Pháp luật thương mại: hình thức và hạn mức

Nghị định 81/2018/NĐ-CP quy định chi tiết Luật Thương mại về khuyến mại. Các hình thức BA hay gặp (Điều 8 đến Điều 14):

- Đưa hàng mẫu, dịch vụ mẫu dùng thử không trả tiền (Điều 8).
- Tặng hàng hoá, dịch vụ không thu tiền, có hoặc không kèm việc mua (Điều 9).
- Bán với giá thấp hơn giá trước đó trong thời gian khuyến mại đã thông báo, tức khuyến mại giảm giá (Điều 10).
- Bán kèm phiếu mua hàng, phiếu sử dụng dịch vụ (Điều 11).
- Bán kèm phiếu dự thi, chương trình may rủi (Điều 12, 13).
- Chương trình khách hàng thường xuyên, tặng thưởng theo số lượng hoặc trị giá mua (Điều 14).

Hạn mức trong bản gốc Nghị định 81/2018: giá trị vật chất dùng để khuyến mại cho một đơn vị hàng không quá 50% giá của đơn vị hàng đó trước thời gian khuyến mại; tổng giá trị hàng dùng để khuyến mại trong một chương trình không quá 50% tổng giá trị hàng được khuyến mại (Điều 6, có các ngoại lệ liệt kê); mức giảm giá tối đa không quá 50% giá ngay trước thời gian khuyến mại (Điều 7); chương trình khuyến mại tập trung áp dụng hạn mức 100%.

Nghị định 81/2018 đã được sửa bởi Nghị định 17/2020, 128/2024 và 239/2026 (Bộ Công Thương có Văn bản hợp nhất 55/VBHN-BCT ngày 01/7/2026). Theo bản tin của KPMG về Nghị định 239/2026/NĐ-CP (hiệu lực từ 26/6/2026): bãi bỏ giới hạn tổng thời gian khuyến mại giảm giá 120 ngày/năm (khoản 5 Điều 10 bản gốc), và bãi bỏ thủ tục thông báo đối với chương trình khách hàng thường xuyên.

> ⚠️ Cần xác nhận: Nghị định 128/2024/NĐ-CP có sửa Điều 6 và Điều 7 Nghị định 81/2018. Bài này chưa đọc được nguyên văn bản hợp nhất hiện hành (55/VBHN-BCT là bản scan), nên các con số hạn mức 50%, 100% ở trên cần đối chiếu lại với bản hợp nhất trước khi đưa vào quy tắc kiểm tra của hệ thống.

Với kế toán, hạn mức này quan trọng vì nó quyết định chương trình có được coi là "khuyến mại theo quy định của pháp luật về thương mại" hay không, và điều đó quyết định giá tính thuế GTGT ở mục dưới.

## Thuế GTGT của hàng khuyến mại

Luật Thuế GTGT 48/2024/QH15 (Điều 7 khoản 1 điểm c): hàng hoá, dịch vụ dùng để trao đổi, tiêu dùng nội bộ, biếu, tặng, cho tính theo giá tính thuế của hàng cùng loại hoặc tương đương; riêng hàng hoá, dịch vụ **dùng để khuyến mại theo quy định của pháp luật về thương mại**, giá tính thuế **bằng không (0)**.

Nghị định 181/2025/NĐ-CP (Điều 6 khoản 2, bản hợp nhất 2026) chi tiết theo từng hình thức:

- Hàng mẫu, dịch vụ mẫu; hàng tặng không thu tiền: giá tính thuế bằng 0.
- Khuyến mại giảm giá: giá tính thuế là **giá đã giảm** áp dụng trong thời gian khuyến mại đã đăng ký hoặc thông báo.
- Bán kèm phiếu mua hàng: giá tính thuế không gồm giá trị phiếu.
- Phiếu dự thi, chương trình may rủi: giá tính thuế không gồm giá trị giải thưởng.
- Khách hàng thường xuyên: giá tính thuế không gồm giá trị thẻ, phiếu ghi nhận.
- Nếu **không thực hiện theo quy định về khuyến mại** của pháp luật thương mại thì giá tính thuế tính **như hàng biếu, tặng**.

Nghị định 181/2025 (Điều 23 khoản 7) cũng cho phép khấu trừ thuế GTGT đầu vào của hàng hoá dùng để cho, biếu, tặng, khuyến mại, quảng cáo.

Vì vậy dòng `Có TK 3331 (nếu có)` trong bút toán khuyến mại của TT99 thường bằng 0 nếu chương trình đúng pháp luật thương mại, và có giá trị nếu không đúng (tính như biếu, tặng).

## Hoá đơn

- Nghị định 123/2020/NĐ-CP, Điều 4 khoản 1 (sửa bởi Nghị định 70/2025/NĐ-CP): khi bán hàng, người bán phải lập hoá đơn, **bao gồm cả** hàng hoá, dịch vụ dùng để khuyến mại, quảng cáo, hàng mẫu, cho, biếu, tặng.
- Điều 10 khoản 6 điểm a.3 (sửa bởi Nghị định 70/2025): khuyến mại theo pháp luật thương mại, hoặc cho, biếu, tặng phù hợp pháp luật thì **được lập hoá đơn tổng giá trị** khuyến mại, cho, biếu, tặng kèm danh sách; doanh nghiệp lưu hồ sơ chương trình và cung cấp bảng tổng hợp chi tiết khi cơ quan có thẩm quyền yêu cầu. Nếu khách yêu cầu lấy hoá đơn theo từng giao dịch thì người bán phải lập hoá đơn cho khách.

> ⚠️ Cần xác nhận: cách thể hiện đơn giá, thành tiền, thuế suất của dòng hàng khuyến mại trên hoá đơn (ghi giá trị hay ghi 0) không có trong phần văn bản đã đọc.

## Ảnh hưởng tới báo cáo

- Khuyến mại không kèm điều kiện làm tăng chi phí bán hàng; khuyến mại kèm điều kiện mua làm tăng giá vốn và thay đổi cơ cấu doanh thu theo mặt hàng. Hai cách cho cùng lợi nhuận trước thuế nhưng khác lãi gộp. Xem [[kt-40-bao-cao-ket-qua-kinh-doanh]].
- Chương trình tích điểm tạo số dư TK 3387 (nợ phải trả) cho tới khi khách đổi điểm hoặc hết hạn.
- Thuế GTGT đầu ra phụ thuộc chương trình có đúng pháp luật thương mại hay không. Xem [[kt-22-thue-gtgt-dau-ra]].

## Nguồn

- Thông tư 99/2025/TT-BTC, Phụ lục II, phần B: nguyên tắc kế toán các khoản doanh thu (mục 2); TK 511 (mục 1.5.3, 1.5.10, 1.5.14, 3.4, 3.5). https://expertis.vn/van-ban/phu-luc-ii-thong-tu-99-2025-tt-btc/ và https://expertis.vn/wp-content/uploads/2026/01/Loai-tai-khoan-doanh-thu-TK-511-⟶-521.pdf
- Thông tư 99/2025/TT-BTC, Phụ lục II: nguyên tắc kế toán hàng tồn kho (mục 8), TK 155 (mục 3.10), TK 156 (mục 3.14). https://expertis.vn/wp-content/uploads/2026/01/Loai-tai-khoan-tai-san-TK-111-⟶-244.pdf
- Thông tư 99/2025/TT-BTC, Phụ lục II: TK 632 (mục 3.a), TK 641 (mục 3.g, 3.i). https://expertis.vn/wp-content/uploads/2026/01/Loai-tai-khoan-chi-phi-san-xuat-kinh-doanh-TK-621-⟶-642.pdf
- Thông tư 99/2025/TT-BTC, Phụ lục II: TK 333 (mục 3.2.2.e, thuế TTĐB), TK 338 (mô tả TK 3387). https://expertis.vn/wp-content/uploads/2026/01/Loai-tai-khoan-no-phai-tra-TK-331-⟶-357.pdf
- Nghị định 81/2018/NĐ-CP, Điều 6 đến Điều 14 (bản gốc). https://tthc.hue.gov.vn/upload/images/2018/1568/81_2018_ND-CP_352393%20(2).doc
- Bộ Công Thương, Văn bản hợp nhất 55/VBHN-BCT ngày 01/7/2026 (trang mô tả; tệp đính kèm là bản scan). https://moit.gov.vn/van-ban-phap-luat/van-ban-hop-nhat/nghi-dinh-quy-dinh-chi-tiet-luat-thuong-mai-ve-hoat-dong-xuc-tien-thuong-mai..html
- KPMG Việt Nam, Bản tin nhanh về pháp luật tháng 07/2026: Nghị định 239/2026/NĐ-CP về khuyến mại, mục 2 và 3. https://assets.kpmg.com/content/dam/kpmgsites/vn/pdf/2026/07/decree-239-on-trade-promotion-vi.pdf.coredownload.inline.pdf
- Luật Thuế GTGT 48/2024/QH15, Văn bản hợp nhất 12/VBHN-VPQH (2026), Điều 7 khoản 1 điểm c. https://datafiles.chinhphu.vn/cpp/files/vbpq/2026/02/12-vbhn-vpqh.pdf
- Nghị định 181/2025/NĐ-CP, Văn bản hợp nhất 18/VBHN-BTC (2026), Điều 6 khoản 2, Điều 23 khoản 7. https://luatvietnam.vn/thue/van-ban-hop-nhat-18-vbhn-btc-2026-quy-dinh-chi-tiet-thi-hanh-luat-thue-gia-tri-gia-tang-436641-d5.html
- Nghị định 70/2025/NĐ-CP sửa đổi Nghị định 123/2020/NĐ-CP, khoản 3 Điều 1 (Điều 4 khoản 1) và khoản 7 Điều 1 (Điều 10 khoản 6 điểm a.3). https://luatvietnam.vn/tai-chinh/nghi-dinh-70-2025-nd-cp-cua-chinh-phu-sua-doi-bo-sung-mot-so-dieu-cua-nghi-dinh-123-2020-nd-cp-ngay-19-10-2020-cua-chinh-phu-quy-dinh-ve-hoa-don-chung-tu-394682-d1.html
