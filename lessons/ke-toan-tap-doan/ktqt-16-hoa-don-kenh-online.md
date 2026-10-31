# Hoá đơn điện tử cho bán hàng online

Bài này giúp BA xác định với đơn bán online: ai lập hoá đơn cho ai, lập vào lúc nào, lập theo từng đơn hay được gộp, dữ liệu đơn hàng khác hoá đơn ở đâu, và xử lý ra sao khi đơn bị huỷ hoặc trả hàng. Căn cứ là Nghị định 254/2026/NĐ-CP và Thông tư 91/2026/TT-BTC, hiệu lực từ 01/7/2026.

## Khung pháp lý hiện hành

Ngày 30/6/2026, Chính phủ ban hành Nghị định 254/2026/NĐ-CP về hoá đơn điện tử và chứng từ điện tử, hướng dẫn Luật Quản lý thuế số 108/2025/QH15, thay thế Nghị định 123/2020/NĐ-CP (đã sửa đổi bởi Nghị định 70/2025/NĐ-CP). Cùng ngày, Bộ Tài chính ban hành Thông tư 91/2026/TT-BTC hướng dẫn; từ khi Thông tư 91 có hiệu lực, Thông tư 32/2025/TT-BTC hết hiệu lực. Cả hai văn bản có hiệu lực từ 01/7/2026.

So với Nghị định 123, Nghị định 254 không còn quy định chi tiết về thủ tục đăng ký, ngừng sử dụng hoá đơn, định dạng hoá đơn, thay thế và điều chỉnh hoá đơn; các nội dung này giao Bộ trưởng Bộ Tài chính hướng dẫn (EY). Vì vậy phần xử lý hoá đơn sai, điều chỉnh, thay thế nằm ở Thông tư 91.

> 📌 Các điều khoản dẫn trong bài (Nghị định 254: Điều 6, Điều 9, Điều 17, Điều 19, Phụ lục về nội dung hoá đơn; Thông tư 91: Điều 10) đã đối chiếu với toàn văn đăng trên LuatVietnam. Những ý chỉ ghi nguồn EY, Forvis Mazars là lấy theo bản tóm tắt.

> ❌ Không dùng tài liệu còn viện dẫn Điều 9 Nghị định 123/2020/NĐ-CP hay Thông tư 32/2025/TT-BTC cho giao dịch từ 01/7/2026.

Hoá đơn là chứng từ thuế; doanh thu kế toán đi theo chuẩn mực. TT99 Phụ lục II (nguyên tắc kế toán các khoản doanh thu, điểm 5) nói rõ thời điểm, căn cứ ghi nhận doanh thu kế toán và doanh thu tính thuế có thể khác nhau, và doanh thu ghi sổ để lập BCTC không nhất thiết bằng số trên hoá đơn. Bài này chỉ bàn hoá đơn trong phạm vi BA cần để thiết kế luồng dữ liệu; kê khai thuế không thuộc phạm vi.

## Ai lập hoá đơn cho ai

Trong một đơn bán qua sàn, có hai luồng hoá đơn tách biệt:

| Luồng | Người lập | Người nhận | Nội dung |
|---|---|---|---|
| Bán hàng | Doanh nghiệp (người bán, bên chính) | Người mua cuối | Hàng hoá, dịch vụ theo đơn |
| Dịch vụ sàn | Nhà vận hành sàn, cổng thanh toán, đơn vị vận chuyển | Doanh nghiệp | Phí hoa hồng, phí thanh toán, cước vận chuyển, quảng cáo |

Khi doanh nghiệp là đại lý (vận hành nền tảng, bán hộ), doanh nghiệp lập hoá đơn cho phần phí, hoa hồng của mình; phân định bên chính và đại lý xem [[ktqt-13-doanh-thu-kenh-online]]. Luồng hoá đơn dịch vụ sàn và thời điểm sàn được lập hoá đơn sau đối soát xem [[ktqt-14-phi-san-cong-thanh-toan]].

Nghị định 254 (Điều 19 khoản 2; Điều 17 khoản 1 điểm c) quy định chủ quản nền tảng thương mại điện tử, nền tảng số có trách nhiệm cung cấp thông tin người mua, thông tin giao dịch, thời điểm giao hàng và xác nhận trạng thái hoàn tất đơn hàng để người bán lập hoá đơn điện tử; người bán có quyền yêu cầu sàn cung cấp các thông tin này. Với BA, đây là căn cứ để yêu cầu dữ liệu người mua từ sàn trong thiết kế tích hợp, trong giới hạn sàn cho phép.

## Thời điểm lập hoá đơn

Theo Điều 9 Nghị định 254/2026/NĐ-CP:

- **Bán hàng hoá** (khoản 1): thời điểm chuyển giao quyền sở hữu hoặc quyền sử dụng hàng hoá cho người mua, không phân biệt đã thu được tiền hay chưa.
- **Cung cấp dịch vụ** (khoản 2): thời điểm hoàn thành việc cung cấp dịch vụ, không phân biệt đã thu tiền hay chưa; nếu thu tiền trước hoặc trong khi cung cấp dịch vụ thì là thời điểm thu tiền.
- **Giao dịch ban đêm**: người bán không có phần mềm lập hoá đơn tự động, giao dịch trong giờ làm việc ban đêm theo Bộ luật Lao động thì được lập hoá đơn chậm nhất vào ngày làm việc tiếp theo (khoản 5).
- Thời điểm ký số có thể khác thời điểm lập hoá đơn; khi đó việc ký số và gửi hoá đơn hoặc dữ liệu đến cơ quan thuế phải thực hiện chậm nhất ngày làm việc tiếp theo kể từ thời điểm lập hoá đơn (trừ trường hợp gửi dữ liệu theo bảng tổng hợp, bảng thông tin chi tiết giao dịch). Người bán kê khai theo thời điểm lập hoá đơn (quy định ở Phụ lục Nghị định 254, mục 7 về thời điểm ký số).

Với đơn online, "thời điểm chuyển giao quyền sở hữu" phụ thuộc điều kiện giao hàng: khi giao cho đơn vị vận chuyển hay khi người mua nhận hàng. Đây cũng là câu hỏi quyết định thời điểm ghi doanh thu kế toán theo VAS 14 đoạn 10 ([[kt-17-quy-trinh-ban-hang]]).

> ⚠️ Cần xác nhận: với đơn giao qua đơn vị vận chuyển (gồm đơn COD), mốc chuyển giao quyền sở hữu để lập hoá đơn là lúc bàn giao cho đơn vị vận chuyển hay lúc người mua nhận hàng. Nghị định 254 buộc sàn cung cấp thời điểm giao hàng và trạng thái hoàn tất đơn cho người bán (Điều 19 khoản 2) nhưng không định nghĩa mốc chuyển giao cho bán hàng qua sàn; cần chốt với tư vấn thuế của khách và ghi vào chính sách bán hàng.

> 💡 Nếu hệ thống lập hoá đơn khi đơn được xác nhận hoặc khi khách thanh toán, còn hàng giao sau, thì thời điểm lập hoá đơn đang đi theo dòng tiền chứ không theo chuyển giao quyền sở hữu như khoản 1. BA nên đưa câu hỏi này vào danh sách cần chốt.

## Theo từng đơn hay gộp

### Nguyên tắc: theo từng giao dịch

Không có cơ chế chung cho phép gộp hoá đơn bán lẻ cuối ngày. Khoản 4 Điều 9 Nghị định 254 liệt kê các trường hợp đặc thù (điểm a đến r), trong đó chỉ một số trường hợp được tổng hợp lập một hoá đơn, ví dụ:

- dịch vụ khám chữa bệnh khi người bệnh không lấy hoá đơn: cuối ngày tổng hợp lập hoá đơn cho dịch vụ thực hiện trong ngày (điểm m);
- thẻ trả trước, cước hoà mạng viễn thông mà khách không yêu cầu hoá đơn hoặc không cung cấp thông tin: lập chung một hoá đơn cuối ngày hoặc định kỳ trong tháng (điểm b).

Ngay cả bán lẻ xăng dầu cũng lập hoá đơn theo từng lần bán (điểm h). Không điểm nào trong khoản 4 cho gộp hoá đơn bán hàng hoá cho người tiêu dùng qua sàn hay website. Điểm r có nhắc "dịch vụ thương mại điện tử" cung cấp cho người tiêu dùng, nhưng đó là dịch vụ (của sàn) và là cơ chế chuyển dữ liệu chi tiết giao dịch đến cơ quan thuế, không cho người bán hàng hoá gộp hoá đơn. Với hoá đơn khởi tạo từ máy tính tiền, thời điểm lập là thời điểm kết thúc từng giao dịch bán hàng (theo Kế toán Lê Ánh).

### Hai trường hợp gộp liên quan tới kênh online

- **Hàng khuyến mại, biếu tặng**: doanh nghiệp được lập hoá đơn tổng hợp cho các giao dịch trong tháng, quý phù hợp kỳ khai thuế GTGT, lưu danh sách chi tiết; khách yêu cầu hoá đơn theo từng giao dịch thì vẫn phải lập (Phụ lục Nghị định 254; Forvis Mazars, EY). Hàng tặng kèm đơn online thuộc diện nào (bán hay khuyến mại) xem [[kt-20-khuyen-mai-voucher-combo]].
- **Hoá đơn dịch vụ của sàn cho người bán**: dịch vụ thương mại điện tử, nền tảng số được lập sau đối soát, chậm nhất ngày 07 tháng sau. Đây là gộp theo kỳ ở chiều sàn lập cho doanh nghiệp, không phải chiều doanh nghiệp lập cho người mua.

### Loại hoá đơn: có mã hay không mã

Theo Điều 6 khoản 1 Nghị định 254, nguyên tắc chung là tổ chức kinh tế, hộ và cá nhân kinh doanh dùng hoá đơn điện tử có mã của cơ quan thuế. Doanh nghiệp kinh doanh ở một số lĩnh vực, trong đó có kinh doanh thương mại điện tử, siêu thị, thương mại, được dùng hoá đơn không có mã nếu có hạ tầng, phần mềm đáp ứng việc lập, tra cứu, lưu trữ và truyền dữ liệu hoá đơn đến người mua và cơ quan thuế (trừ trường hợp rủi ro cao về thuế). Người bán hàng trực tiếp đến người tiêu dùng (bán lẻ, siêu thị, ăn uống...) dùng hoá đơn khởi tạo từ máy tính tiền, nhưng nếu đã đăng ký hoá đơn có mã hoặc không mã thì không bắt buộc đăng ký thêm hoá đơn từ máy tính tiền. Với BA, loại hoá đơn khách đã đăng ký quyết định cách tích hợp với nhà cung cấp hoá đơn điện tử.

## Thông tin người mua trên hoá đơn

Người mua online thường là cá nhân, nhiều khi không cung cấp mã số thuế hay địa chỉ. Theo Phụ lục Nghị định 254 (EY, Forvis Mazars tóm tắt cùng nội dung):

- Người mua là người tiêu dùng cá nhân không cung cấp tên, địa chỉ, số định danh: người bán vẫn phải lập hoá đơn, ghi rõ "Bán cho người tiêu dùng". Hoá đơn không có thông tin người mua không dùng được để hạch toán chi phí hay quyết toán thuế, nên khách B2B phải cung cấp thông tin.
- Với một số hoạt động đặc thù (siêu thị, trung tâm thương mại, rạp chiếu phim), hoá đơn được phép không thể hiện thông tin người mua khi người mua không cung cấp.

Người mua là doanh nghiệp (đơn B2B qua sàn) cần mã số thuế, tên, địa chỉ đúng. Tài liệu Odoo 19 cho Amazon Connector ghi nhận một giới hạn thực tế: với khách B2B, phải tự lấy mã số thuế từ hệ thống quản trị của Amazon trước khi tạo hoá đơn trong Odoo, và không gửi được hoá đơn trực tiếp cho khách Amazon qua email vì Amazon không chia sẻ email khách; hoá đơn phải tải lên hệ thống quản trị Amazon thủ công. Sàn khác có giới hạn khác; cần hỏi khi khảo sát.

## Dữ liệu đơn hàng khác hoá đơn ở đâu

Hoá đơn lập từ dữ liệu đơn, nhưng hai bộ dữ liệu hiếm khi khớp từng dòng. Các điểm lệch thường gặp:

| Điểm lệch | Ví dụ giả định | Cần quyết định |
|---|---|---|
| Tên hàng | Tên tin đăng trên sàn khác tên trong danh mục hàng hoá của doanh nghiệp | Hoá đơn lấy tên theo danh mục; cần bảng ánh xạ mã sản phẩm sàn sang mã hàng nội bộ |
| Giá và giảm giá | Đơn có voucher của shop và voucher của sàn | Khoản nào ghi giảm trên hoá đơn, khoản nào không (gắn với cách ghi doanh thu ở [[ktqt-13-doanh-thu-kenh-online]]) |
| Phí vận chuyển | Người mua trả phí vận chuyển cho sàn | Có đưa lên hoá đơn của người bán không, tuỳ người bán có được hưởng khoản này |
| Combo, quà tặng | Một tin đăng gồm nhiều mã hàng | Tách dòng hàng trên hoá đơn và phân bổ giá ([[kt-20-khuyen-mai-voucher-combo]]) |
| Tách, gộp kiện | Một đơn giao thành nhiều kiện ở nhiều ngày | Lập hoá đơn theo từng lần chuyển giao hay khi giao đủ, theo mốc chuyển giao ở trên |
| Thuế suất | Danh mục hàng có nhiều thuế suất GTGT | Thuế suất lấy theo mã hàng nội bộ, không theo giá gộp của sàn |

Hệ quả: hoá đơn và doanh thu kế toán có thể lệch nhau ở thời điểm và số tiền. TT99 cho phép điều này (điểm 5 đã nêu), nhưng hệ thống phải giải thích được chênh lệch theo từng đơn, nhất là khi đối chiếu doanh thu sổ sách với doanh thu trên hoá đơn cuối kỳ ([[kt-22-thue-gtgt-dau-ra]]).

## Đơn huỷ, trả hàng, hoàn tiền

### Huỷ trước khi lập hoá đơn

Nếu hoá đơn lập theo mốc chuyển giao quyền sở hữu, đơn huỷ trước khi giao không phát sinh hoá đơn và không phát sinh doanh thu. Đây là lý do thứ hai để không lập hoá đơn ngay khi đơn được xác nhận.

### Trả hàng sau khi đã lập hoá đơn

Theo Thông tư 91/2026/TT-BTC, Điều 10 khoản 5 điểm c:

- Người mua trả lại toàn bộ hoặc một phần hàng, kể cả đổi hàng làm thay đổi giá trị: người bán lập **hoá đơn điều chỉnh**. Nếu hai bên thoả thuận người mua lập hoá đơn khi trả hàng thì người mua lập hoá đơn giao cho người bán.
- Hàng là tài sản phải đăng ký quyền sở hữu (ô tô, xe máy) đã đăng ký tên người mua: người mua lập hoá đơn trả lại hàng.
- Đã lập hoá đơn khi thu tiền trước khi cung cấp dịch vụ (hoặc thu tiền theo tiến độ với bất động sản) rồi huỷ hoặc chấm dứt giao dịch: người bán điều chỉnh hoá đơn đã lập.
- Người bán, người mua lưu chứng từ liên quan đến việc trả hàng.

Với hoá đơn lập sai cần điều chỉnh hoặc thay thế, Thông tư 91 yêu cầu văn bản thoả thuận giữa người bán và người mua trước khi lập hoá đơn điều chỉnh, thay thế, trừ ba trường hợp: chuyển dữ liệu theo bảng tổng hợp, chuyển dữ liệu theo bảng thông tin chi tiết giao dịch, và hoạt động mua bán hàng hoá trên nền tảng thương mại điện tử hoặc nền tảng số khác (Điều 10 khoản 1 điểm b). Hoá đơn khởi tạo từ máy tính tiền lập sai thì phải lập hoá đơn thay thế, không dùng hoá đơn điều chỉnh. Đã chọn điều chỉnh hay thay thế cho một hoá đơn thì các lần xử lý sau của hoá đơn đó giữ cùng hình thức.

Thông tư 91 tiếp tục quy định hoá đơn điều chỉnh cho chiết khấu thương mại, hàng bán bị trả lại được kê khai tại thời điểm lập hoá đơn điều chỉnh (EY).

### Bút toán đi kèm

- Hàng trả lại: `Nợ TK 521`, `Nợ TK 333 (3331)` `/ Có TK 131` (TT99 TK 131 mục 3.2); nhập lại kho `Nợ TK 156 / Có TK 632`.
- Hoàn tiền cho người mua qua sàn: đi theo quyết toán của sàn, giảm phải thu sàn ([[ktqt-15-doi-soat-san-cod]]).
- Trả hàng của doanh thu kỳ trước: theo TT99 TK 511 mục 1.4, phát sinh trước ngày phát hành BCTC là sự kiện sau ngày kết thúc kỳ cần điều chỉnh; sau ngày phát hành thì ghi giảm doanh thu kỳ phát sinh. Chi tiết xem [[kt-19-doi-tra-hoan-tien]].

## Nghị định 117/2025: chỉ cho hộ, cá nhân kinh doanh

Nghị định 117/2025/NĐ-CP (ban hành 09/6/2025, hiệu lực 01/7/2025) quy định quản lý thuế đối với hoạt động kinh doanh trên nền tảng thương mại điện tử, nền tảng số **của hộ, cá nhân**. Theo văn bản tuyên truyền của cơ quan thuế (Thuế tỉnh Đắk Lắk), đối tượng áp dụng tại Điều 2 gồm tổ chức quản lý nền tảng thuộc diện khấu trừ, nộp thay; hộ, cá nhân cư trú và cá nhân không cư trú kinh doanh trên nền tảng; cơ quan thuế và tổ chức, cá nhân liên quan. Nội dung chính theo EY:

- Tổ chức quản lý nền tảng có chức năng thanh toán (trong và ngoài nước) khấu trừ, nộp thay thuế GTGT và thuế TNCN cho từng giao dịch của hộ, cá nhân kinh doanh trên nền tảng, ngay khi xác nhận giao dịch thành công và chấp nhận thanh toán.
- Tỷ lệ khấu trừ tính trên số tiền bán hàng của hộ, cá nhân mà nền tảng thu hộ. Với hàng hoá: thuế GTGT 1%; thuế TNCN 0,5% (cá nhân cư trú) hoặc 1% (cá nhân không cư trú). Dịch vụ và vận tải có tỷ lệ khác. Không xác định được là hàng hoá hay dịch vụ thì áp tỷ lệ cao nhất.
- Nền tảng không có chức năng thanh toán thì hộ, cá nhân tự kê khai, nộp thuế.

**Không áp dụng cho doanh nghiệp.** Doanh nghiệp bán trên sàn không bị sàn khấu trừ thuế theo cơ chế này; doanh nghiệp tự lập hoá đơn cho người mua, tự kê khai thuế GTGT và thuế TNDN như với mọi kênh bán khác. Với BA dự án doanh nghiệp, Nghị định 117 chỉ có ý nghĩa ở hai điểm:

1. Gian hàng đứng tên hộ hoặc cá nhân (thường là chủ doanh nghiệp, nhân viên) mà hàng là của doanh nghiệp: báo cáo quyết toán sẽ có dòng khấu trừ thuế, và doanh thu đó về pháp lý chưa phải của pháp nhân ([[ktqt-13-doanh-thu-kenh-online]]).
2. Doanh nghiệp tự vận hành nền tảng có người bán là hộ, cá nhân: doanh nghiệp thành tổ chức có trách nhiệm khấu trừ, nộp thay; đây là yêu cầu nghiệp vụ lớn riêng, ngoài phạm vi bài này.

> ⚠️ Cần xác nhận: tình trạng sửa đổi của Nghị định 117/2025/NĐ-CP tại thời điểm 31/10/2026. Nguồn đã đọc là bản tóm tắt của EY (tháng 6/2025); kết quả tìm kiếm cho thấy Nghị định 68/2026/NĐ-CP về thuế với hộ, cá nhân kinh doanh vẫn dẫn chiếu Nghị định 117 cho việc khấu trừ, nộp thay, nhưng chưa đọc được văn bản gốc của cả hai.

## Điểm chạm hệ thống

Ví dụ Odoo 19, viết trung lập:

- eCommerce trên website có thể bật tự động lập hoá đơn; hoá đơn chỉ được gửi tự động khi thanh toán đã được ghi nhận. Khi tắt tự động, hoá đơn tạo tay hiện là hoá đơn chiếu lệ trên cổng khách hàng cho tới khi gửi.
- Amazon Connector đồng bộ đơn và tự huỷ đơn bán trong Odoo khi đơn bị huỷ trên Amazon sau khi đã đồng bộ; hoàn tiền vẫn xử lý trên Amazon Seller Central.

Hai điểm cần BA kiểm tra khi cấu hình: mốc tạo hoá đơn của hệ thống (khi thanh toán, khi giao hàng, hay khi người mua nhận) có khớp mốc lập hoá đơn theo Điều 9 hay không; và hoá đơn trong ERP có được đẩy sang nhà cung cấp hoá đơn điện tử để ký số, gửi cơ quan thuế đúng hạn không. Hoá đơn điện tử nói chung xem [[kt-09-chung-tu-hoa-don]]; điều chỉnh chứng từ trong sổ xem [[kt-11-but-toan-tong-hop-dieu-chinh]].

## Ảnh hưởng tới báo cáo

- **Doanh thu trên B02-DN** đi theo chuẩn mực, không theo hoá đơn; chênh lệch giữa doanh thu sổ sách và doanh thu trên hoá đơn của kỳ phải giải thích được theo đơn (đơn đã giao chưa lập hoá đơn, hoá đơn điều chỉnh, voucher...).
- **Thuế GTGT đầu ra** (TK 33311) đi theo hoá đơn và thời điểm lập hoá đơn; lệch kỳ giữa giao hàng và lập hoá đơn làm lệch số thuế giữa các kỳ khai.
- **Hàng trả lại** ghi qua TK 521, trình bày ở chỉ tiêu các khoản giảm trừ doanh thu.

## Nguồn

- Nghị định 254/2026/NĐ-CP ngày 30/6/2026 (Điều 6, 9, 17, 19, 43; Phụ lục), toàn văn: https://luatvietnam.vn/thue/nghi-dinh-254-2026-nd-cp-huong-dan-thi-hanh-luat-quan-ly-thue-2025-ve-hoa-don-dien-tu-439381-d1.html
- Thông tư 91/2026/TT-BTC ngày 30/6/2026 (Điều 10, Điều 25), toàn văn: https://luatvietnam.vn/thue/thong-tu-91-2026-tt-btc-quy-dinh-luat-quan-ly-thue-va-hoa-don-dien-tu-439780-d1.html
- Thuế tỉnh Đắk Lắk, văn bản tuyên truyền Nghị định 117/2025/NĐ-CP và 04 sổ tay hướng dẫn (phạm vi, đối tượng áp dụng Điều 1, Điều 2): https://cuordang.daklak.gov.vn/uploads/xa-cuordang/thuedientu/TT%20so%20tay%20huong%20dan%20thuong%20mai%20dien%20tu.pdf
- EY Việt Nam, Tin nhanh về Thuế tháng 7/2026 "Nghị định 254/2026/NĐ-CP về hóa đơn điện tử và chứng từ điện tử" (mục 1, 4, 5, 6): https://www.ey.com/content/dam/ey-unified-site/ey-com/vi-vn/technical/tax/documents/ey-vn-decree-254-on-electronic-invoices-and-electronic-documents.pdf
- Forvis Mazars Việt Nam, Bản tin "Cập nhật các điểm đáng chú ý trong Nghị định 254/2026/NĐ-CP và Thông tư 91/2026/TT-BTC" (mục 1, 4, 5, 6): https://www.forvismazars.com/vn/vi/n-ph-m-s-ki-n/c-p-nh-t-v-vi-t-nam/b-n-tin-thong-bao-chuyen-mon/b-n-tin-v-thu-va-phap-ly/ngh-d-nh-254-va-thong-t-91
- Kế toán Lê Ánh, "Thời điểm lập hóa đơn từ 01/7/2026 theo Nghị định 254/2026/NĐ-CP và Thông tư 91/2026/TT-BTC" (trích Điều 9 khoản 1, 2, 4, 5; Thông tư 91 Điều 10; dùng để đối chiếu): https://ketoanleanh.edu.vn/kinh-nghiem-ke-toan/thoi-diem-lap-hoa-don-dien-tu.html
- MISA AMIS, "Tổng hợp thời điểm xuất hóa đơn theo quy định tại Nghị định 254/2026/NĐ-CP" (thời điểm ký số; dùng để đối chiếu): https://amis.misa.vn/39192/thoi-diem-xuat-hoa-don/
- EY Việt Nam, Tin nhanh tháng 6/2025 "Nghị định 117 về quản lý thuế đối với hoạt động kinh doanh trên nền tảng thương mại điện tử, nền tảng số": https://www.ey.com/content/dam/ey-unified-site/ey-com/vi-vn/technical/tax/documents/people-advisory-services-tax-alert-june-2025-decree-117-on-management-for-business-activities-on-e-commerce-and-digital-platforms-vn.pdf
- Thông tư 99/2025/TT-BTC, Phụ lục II Mục B: nguyên tắc kế toán các khoản doanh thu (điểm 5); TK 511 mục 1.4; TK 131 mục 3.2. Toàn văn: https://luatvietnam.vn/linh-vuc-khac/tai-thong-tu-99-2025-tt-btc-huong-dan-che-do-ke-toan-doanh-nghiep-186-105034-article.html
- Chuẩn mực kế toán Việt Nam số 14, đoạn 10: https://cdn.thuvienphapluat.vn//uploads/Hoidapphapluat/2024/TTTT/240830/Chuan-muc-ke-toan-14.doc
- Odoo 19 Documentation, eCommerce Order handling (Invoicing): https://www.odoo.com/documentation/19.0/applications/websites/ecommerce/order_handling.html
- Odoo 19 Documentation, Amazon order management (Issue invoices; cancellations): https://www.odoo.com/documentation/19.0/applications/sales/sales/amazon_connector/manage.html
