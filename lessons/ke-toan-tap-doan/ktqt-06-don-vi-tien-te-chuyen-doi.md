# Đơn vị tiền tệ kế toán, đồng tiền chức năng và chuyển đổi BCTC

Bài này giúp bạn xác định mỗi pháp nhân trong tập đoàn ghi sổ bằng đồng tiền nào, khi nào một doanh nghiệp Việt Nam được ghi sổ bằng ngoại tệ, và BCTC lập bằng một đồng tiền được chuyển sang đồng tiền khác theo tỷ giá nào. Đây là dữ liệu nền cho danh mục pháp nhân ([[ktqt-02-danh-muc-phap-nhan]]) và cho BCTC hợp nhất ([[ktqt-04-bctc-hop-nhat]]).

## Ba khái niệm cần tách bạch

- **Đơn vị tiền tệ trong kế toán** (cách gọi của TT99; VAS 10 gọi là "đơn vị tiền tệ kế toán"): đồng tiền dùng để ghi sổ kế toán, lập và trình bày BCTC. Mặc định là Đồng Việt Nam (TT99, Điều 4, khoản 1; Luật Kế toán, Điều 10, khoản 1).
- **Đồng tiền chức năng** (functional currency, IAS 21 đoạn 8): đồng tiền của môi trường kinh tế chính nơi doanh nghiệp hoạt động, thường là nơi doanh nghiệp chủ yếu tạo ra và chi tiền (đoạn 9).
- **Đồng tiền trình bày** (presentation currency, IAS 21 đoạn 8): đồng tiền dùng để trình bày BCTC. IAS 21 cho phép trình bày bằng bất kỳ đồng tiền nào (đoạn 38).

"Ngoại tệ" luôn được định nghĩa tương đối: theo VAS 10 (đoạn 06) là đơn vị tiền tệ khác với đơn vị tiền tệ kế toán của doanh nghiệp, theo IAS 21 (đoạn 8) là đồng tiền khác đồng tiền chức năng. Với một công ty con ghi sổ bằng USD, VND là ngoại tệ.

Khung của Việt Nam gộp hai vai trò "đồng tiền ghi sổ" và "đồng tiền BCTC pháp lý": doanh nghiệp được ghi sổ bằng ngoại tệ, nhưng BCTC nộp và công bố tại Việt Nam phải bằng VND (TT99, Điều 6). IAS 21 tách hẳn hai vai trò: đo lường theo đồng tiền chức năng, trình bày theo đồng tiền tuỳ chọn.

## Khi nào doanh nghiệp Việt Nam được ghi sổ bằng ngoại tệ

### Điều kiện theo Luật Kế toán và TT99

Luật Kế toán (Điều 10, khoản 1): đơn vị kế toán **chủ yếu thu, chi bằng một loại ngoại tệ** thì được tự chọn ngoại tệ đó làm đơn vị tiền tệ để kế toán, chịu trách nhiệm trước pháp luật và **thông báo cho cơ quan thuế quản lý trực tiếp**.

TT99 (Điều 4) cụ thể hoá thành các yếu tố xem xét:

- **Yếu tố chính** (khoản 2):
  - đồng tiền ảnh hưởng chính đến giá bán hàng hoá, dịch vụ, thường là đồng tiền niêm yết giá bán và thanh toán;
  - đồng tiền ảnh hưởng chính đến chi phí nhân công, nguyên vật liệu và chi phí sản xuất kinh doanh khác, thường là đồng tiền thanh toán các chi phí đó.
- **Yếu tố bổ sung**, chỉ xét khi hai yếu tố chính chưa đủ để xác định (khoản 3):
  - đồng tiền dùng để huy động nguồn lực tài chính (phát hành công cụ nợ, công cụ vốn...);
  - đồng tiền thường xuyên thu được từ hoạt động kinh doanh và được dùng để tích trữ.
- Đơn vị tiền tệ trong kế toán phản ánh các giao dịch, sự kiện, điều kiện liên quan đến hoạt động của doanh nghiệp. Đã xác định thì **không được thay đổi**, trừ khi có thay đổi lớn về hoạt động quản lý và kinh doanh dẫn đến thay đổi trọng yếu trong các giao dịch, sự kiện, điều kiện đó (khoản 4).

### So với tiêu chí đồng tiền chức năng của IAS 21

Các yếu tố của TT99 gần như trùng với IAS 21 đoạn 9–10. Khác biệt đáng chú ý:

- IAS 21 đoạn 9(a)(ii) thêm yếu tố **đồng tiền của quốc gia mà cạnh tranh và quy định ở đó chủ yếu quyết định giá bán**.
- IAS 21 đoạn 11 có thêm nhóm yếu tố riêng cho **hoạt động ở nước ngoài**: hoạt động như một phần mở rộng của đơn vị báo cáo hay có mức tự chủ đáng kể; tỷ trọng giao dịch với đơn vị báo cáo cao hay thấp; dòng tiền có ảnh hưởng trực tiếp và sẵn sàng chuyển về đơn vị báo cáo không; có tự trả được nợ mà không cần đơn vị báo cáo cấp vốn không.
- Khi các dấu hiệu lẫn lộn, ban điều hành dùng xét đoán và **ưu tiên yếu tố chính ở đoạn 9** trước khi xét đoạn 10 và 11 (đoạn 12).

Hệ quả cho dự án: một pháp nhân Việt Nam có thể có đồng tiền chức năng theo IAS 21 khác với đơn vị tiền tệ đang ghi sổ theo VAS. Ví dụ, doanh nghiệp vẫn ghi sổ bằng VND nhưng xét theo IFRS thì đồng tiền chức năng là USD. Khi đó báo cáo theo IFRS phải đo lường lại, không chỉ quy đổi số cuối cùng. Xem [[ktqt-07-vas-ifrs]] và [[ktqt-10-kien-truc-so-hai-chuan]].

> ⚠️ Cần xác nhận: việc chọn đơn vị tiền tệ trong kế toán theo VAS và kết luận đồng tiền chức năng theo IFRS là xét đoán của kế toán doanh nghiệp và kiểm toán viên, không phải quyết định của dự án. BA chỉ cần ghi nhận kết quả cho từng pháp nhân.

## Thay đổi đơn vị tiền tệ trong kế toán

### Theo TT99

TT99 (Điều 5):

- Chỉ được đổi khi đơn vị tiền tệ đang dùng không còn thoả các yếu tố của Điều 4 do thay đổi lớn về hoạt động quản lý và kinh doanh, và **chỉ đổi tại thời điểm bắt đầu niên độ kế toán mới**.
- Kỳ đầu tiên sau khi đổi: chuyển số dư các khoản mục trên sổ kế toán và Báo cáo tình hình tài chính sang đơn vị tiền tệ mới theo **tỷ giá mua bán chuyển khoản trung bình** của ngân hàng thương mại nơi doanh nghiệp thường xuyên có giao dịch **tại ngày thay đổi**.
- Thông tin so sánh (cột kỳ trước) trên Báo cáo kết quả hoạt động kinh doanh và Báo cáo lưu chuyển tiền tệ: áp dụng tỷ giá mua bán chuyển khoản trung bình của ngân hàng đó **của kỳ trước liền kề** kỳ thay đổi.
- Thuyết minh lý do thay đổi và ảnh hưởng tới BCTC.

> ⚠️ Cần xác nhận: TT99 Điều 5 không nói rõ "tỷ giá ... của kỳ trước liền kề" là tỷ giá bình quân của kỳ trước hay tỷ giá tại một ngày cụ thể. Cần hỏi kế toán trưởng hoặc kiểm toán viên trước khi thiết kế phép tính cột so sánh.

Doanh nghiệp đang có chênh lệch tỷ giá phát sinh từ việc chuyển đơn vị tiền tệ ghi sổ (từ VND sang đơn vị khác và ngược lại) nằm trên số dư TK 412 phải kết chuyển số dư đó sang TK 4211 – Lợi nhuận sau thuế chưa phân phối khi chuyển sang TT99, và thuyết minh lý do, ảnh hưởng (TT99, Điều 30, khoản 3).

### Theo IAS 21

IAS 21 (đoạn 35–37): khi đồng tiền chức năng thay đổi, áp dụng **phi hồi tố** từ ngày thay đổi. Mọi khoản mục được quy đổi sang đồng tiền chức năng mới theo tỷ giá tại ngày thay đổi. Giá trị quy đổi của khoản mục phi tiền tệ được coi là giá gốc của chúng từ đó. Chênh lệch chuyển đổi đã ghi nhận vào thu nhập toàn diện khác trước đó chưa chuyển sang lãi lỗ cho đến khi thanh lý hoạt động.

## Chuyển đổi BCTC lập bằng ngoại tệ sang VND theo TT99

### Vì sao phải chuyển đổi

Doanh nghiệp chọn ngoại tệ làm đơn vị tiền tệ trong kế toán vẫn phải có BCTC bằng VND (TT99, Điều 6):

- BCTC mang tính pháp lý để công bố ra công chúng và nộp cho cơ quan có thẩm quyền tại Việt Nam là BCTC trình bày bằng **Đồng Việt Nam**, trừ trường hợp pháp luật có quy định khác (khoản 1).
- Nếu BCTC phải được kiểm toán độc lập thì BCTC được kiểm toán là BCTC trình bày bằng VND (khoản 2).
- Luật Kế toán (Điều 10, khoản 1) cũng yêu cầu khi lập BCTC sử dụng tại Việt Nam phải quy đổi ra VND theo tỷ giá hối đoái thực tế, trừ trường hợp pháp luật có quy định khác.

### Tỷ giá cho từng nhóm chỉ tiêu

TT99, Điều 6, khoản 3.a:

| Nhóm chỉ tiêu | Tỷ giá quy đổi |
|---|---|
| Tài sản và nợ phải trả | Tỷ giá mua bán chuyển khoản trung bình của ngân hàng thường xuyên giao dịch tại thời điểm kết thúc kỳ kế toán |
| Vốn góp của chủ sở hữu, thặng dư vốn, vốn khác, quyền chọn chuyển đổi trái phiếu | Tỷ giá giao dịch thực tế tại **ngày góp vốn** |
| Chênh lệch đánh giá lại tài sản | Tỷ giá giao dịch thực tế tại **ngày đánh giá** |
| Lợi nhuận sau thuế chưa phân phối, các quỹ trích từ lợi nhuận phát sinh trong từng kỳ | Tính theo các khoản mục của Báo cáo kết quả hoạt động kinh doanh. Phần lợi nhuận chưa phân phối còn lại theo tỷ giá ghi sổ của khoản mục này |
| Khoản mục của Báo cáo kết quả hoạt động kinh doanh và Báo cáo lưu chuyển tiền tệ | Tỷ giá giao dịch thực tế tại thời điểm phát sinh giao dịch. Được dùng tỷ giá bình quân kỳ kế toán nếu xấp xỉ tỷ giá thực tế (chênh lệch không vượt biên độ tỷ giá giao ngay theo quy định của Ngân hàng Nhà nước) |

Vì các nhóm dùng tỷ giá khác nhau, bảng sau chuyển đổi không tự cân. Phần chênh lệch được ghi nhận trên chỉ tiêu **"Chênh lệch tỷ giá hối đoái" thuộc vốn chủ sở hữu** của Báo cáo tình hình tài chính (khoản 3.b), không đi qua Báo cáo kết quả hoạt động kinh doanh. Doanh nghiệp phải thuyết minh ảnh hưởng của việc chuyển đổi (khoản 3.c).

Chênh lệch này khác với chênh lệch tỷ giá của giao dịch ngoại tệ trong [[ktqt-05-giao-dich-ngoai-te]]: chênh lệch giao dịch vào 515/635, chênh lệch chuyển đổi BCTC nằm trong vốn chủ sở hữu.

### Ví dụ giả định

Một công ty Việt Nam ghi sổ bằng USD, năm đầu hoạt động. Cuối năm:

- Tài sản 1.000.000 USD, nợ phải trả 400.000 USD.
- Vốn góp 500.000 USD, góp khi tỷ giá 23.000.
- Lợi nhuận sau thuế trong năm 100.000 USD. Các khoản mục doanh thu, chi phí được quy đổi theo tỷ giá bình quân 24.500, ra 2,45 tỷ VND.
- Tỷ giá cuối năm 25.000.

Chuyển đổi:

- Tài sản: 25 tỷ. Nợ phải trả: 10 tỷ. Tài sản thuần: 15 tỷ.
- Vốn góp: 11,5 tỷ. Lợi nhuận sau thuế chưa phân phối: 2,45 tỷ. Cộng: 13,95 tỷ.
- Chênh lệch tỷ giá hối đoái trong vốn chủ sở hữu: 15 − 13,95 = **1,05 tỷ**.

Muốn làm phép tính này, hệ thống phải lưu được tỷ giá tại ngày góp vốn của từng lần góp và tỷ giá ghi sổ của lợi nhuận chưa phân phối luỹ kế. Hai dữ liệu này thường không có sẵn nếu chỉ lưu số dư bằng USD.

## Chuyển đổi sang đồng tiền trình bày theo IAS 21

IAS 21 (đoạn 39–41) quy định cách chuyển đổi kết quả và tình hình tài chính của một đơn vị có đồng tiền chức năng không thuộc nền kinh tế siêu lạm phát sang đồng tiền trình bày khác:

- Tài sản và nợ phải trả của mỗi Báo cáo tình hình tài chính, kể cả số so sánh: theo **tỷ giá cuối kỳ** tại ngày của báo cáo đó.
- Thu nhập và chi phí, kể cả số so sánh: theo **tỷ giá tại ngày giao dịch**. Vì lý do thực tế thường dùng tỷ giá xấp xỉ như tỷ giá bình quân kỳ. Nếu tỷ giá biến động mạnh thì dùng tỷ giá bình quân là không phù hợp (đoạn 40).
- Mọi chênh lệch phát sinh ghi vào **thu nhập toàn diện khác (OCI)**. Số luỹ kế trình bày ở một cấu phần riêng của vốn chủ sở hữu cho đến khi thanh lý hoạt động ở nước ngoài (đoạn 41).

Chênh lệch sinh ra từ hai nguồn (đoạn 41): thu nhập, chi phí quy đổi theo tỷ giá ngày giao dịch trong khi tài sản, nợ phải trả theo tỷ giá cuối kỳ; và tài sản thuần đầu kỳ được quy đổi lại theo tỷ giá cuối kỳ mới. IAS 21 không đưa chênh lệch này vào lãi lỗ vì thay đổi tỷ giá ít hoặc không ảnh hưởng trực tiếp đến dòng tiền hoạt động hiện tại và tương lai.

Đồng tiền chức năng thuộc nền kinh tế siêu lạm phát dùng quy trình khác: mọi số liệu quy đổi theo tỷ giá cuối kỳ gần nhất, sau khi đã điều chỉnh theo IAS 29 (đoạn 42–43).

### So sánh nhanh với TT99 Điều 6

| | TT99 Điều 6 (BCTC ngoại tệ sang VND) | IAS 21 đoạn 39 (sang đồng tiền trình bày) |
|---|---|---|
| Tài sản, nợ phải trả | Tỷ giá cuối kỳ | Tỷ giá cuối kỳ |
| Thu nhập, chi phí | Tỷ giá ngày giao dịch, được dùng bình quân nếu xấp xỉ | Tỷ giá ngày giao dịch, thường dùng bình quân nếu xấp xỉ |
| Vốn góp | Tỷ giá ngày góp vốn | Đoạn 39 không quy định riêng |
| Chênh lệch | Chỉ tiêu "Chênh lệch tỷ giá hối đoái" trong vốn chủ sở hữu | OCI, luỹ kế trong một cấu phần riêng của vốn chủ sở hữu |

> 📌 IAS 21 đoạn 39 chỉ nêu tài sản, nợ phải trả, thu nhập và chi phí. Cách quy đổi các khoản mục vốn chủ sở hữu (tỷ giá lịch sử hay tỷ giá cuối kỳ) không được quy định trong các đoạn đã trích ở bài này. Cần đối chiếu chính sách kế toán của tập đoàn.

## Hoạt động ở nước ngoài khi hợp nhất

### Theo VAS 10

VAS 10 (đoạn 17–20) chia hoạt động ở nước ngoài thành hai loại theo mức độ phụ thuộc về tài chính và hoạt động với doanh nghiệp báo cáo:

- **Hoạt động ở nước ngoài không thể tách rời** với hoạt động của doanh nghiệp báo cáo, ví dụ chỉ bán hàng nhập từ doanh nghiệp báo cáo rồi chuyển tiền thu được về. Báo cáo của hoạt động này được chuyển đổi như giao dịch của chính doanh nghiệp báo cáo, theo đoạn 7–16 (đoạn 21–22): khoản mục tiền tệ theo tỷ giá cuối kỳ, nguyên giá và khấu hao TSCĐ theo tỷ giá ngày mua tài sản, hàng tồn kho theo tỷ giá tại thời điểm xác định trị giá.
- **Cơ sở ở nước ngoài**: đơn vị hoạt động độc lập, có tư cách pháp nhân ở nước sở tại, dùng đồng tiền nước sở tại làm đơn vị tiền tệ kế toán (đoạn 19). Khi chuyển đổi để tổng hợp vào báo cáo của doanh nghiệp báo cáo (đoạn 24): tài sản và nợ phải trả (cả tiền tệ và phi tiền tệ) theo tỷ giá cuối kỳ; doanh thu, thu nhập khác và chi phí theo tỷ giá ngày giao dịch; mọi chênh lệch phân loại vào vốn chủ sở hữu cho đến khi thanh lý khoản đầu tư thuần.

Khi thanh lý cơ sở ở nước ngoài, chênh lệch luỹ kế đã hoãn lại được ghi nhận là thu nhập hoặc chi phí cùng kỳ với lãi lỗ thanh lý (đoạn 30). Nếu cơ sở ở nước ngoài không thuộc sở hữu toàn bộ, phần chênh lệch luỹ kế gắn với cổ đông thiểu số được phân bổ cho cổ đông thiểu số trên Bảng cân đối kế toán hợp nhất (đoạn 26).

IAS 21 không dùng cách phân loại hai nhóm này. Mỗi đơn vị xác định đồng tiền chức năng của mình theo đoạn 9–12; nếu đồng tiền chức năng của hoạt động ở nước ngoài khác đồng tiền trình bày của tập đoàn thì chuyển đổi theo đoạn 39.

### Những điểm IAS 21 quy định riêng cho hợp nhất

- **Lợi thế thương mại và điều chỉnh giá trị hợp lý** phát sinh khi mua hoạt động ở nước ngoài được coi là tài sản, nợ phải trả của hoạt động đó: thể hiện bằng đồng tiền chức năng của nó và quy đổi theo tỷ giá cuối kỳ (đoạn 47). VAS 10 đoạn 27 cũng đề cập vấn đề này.
- **Khoản mục tiền tệ nội bộ** (phải thu, phải trả nội bộ) dù ngắn hạn hay dài hạn không loại trừ được mà không thể hiện ảnh hưởng của biến động tỷ giá. Chênh lệch tỷ giá trên khoản này vẫn vào lãi lỗ hợp nhất (đoạn 45; VAS 10 đoạn 28). Vì vậy khi đối chiếu công nợ nội bộ giữa hai pháp nhân khác đồng tiền, hai bên sẽ lệch nhau đúng bằng phần chênh lệch tỷ giá. Xem [[ktqt-03-giao-dich-noi-bo]].
- **Khoản cho vay nội bộ là một phần đầu tư thuần**: khoản phải thu, phải trả với hoạt động ở nước ngoài mà việc thanh toán không được lên kế hoạch và khó xảy ra trong tương lai gần (đoạn 15). Chênh lệch tỷ giá vào lãi lỗ trên báo cáo riêng, nhưng trên BCTC hợp nhất thì vào OCI và chuyển sang lãi lỗ khi thanh lý khoản đầu tư thuần (đoạn 32). VAS 10 đoạn 14–15 có quy định tương tự. Hệ thống cần một cờ đánh dấu khoản vay nội bộ thuộc loại này.
- **Thanh lý hoạt động ở nước ngoài**: số chênh lệch luỹ kế trong OCI được chuyển từ vốn chủ sở hữu sang lãi lỗ khi ghi nhận lãi lỗ thanh lý (đoạn 48). Phần đã phân bổ cho lợi ích cổ đông không kiểm soát được dừng ghi nhận, không chuyển sang lãi lỗ (đoạn 48B).
- **Ngày lập báo cáo khác nhau**: nếu báo cáo của hoạt động ở nước ngoài lập vào ngày khác với đơn vị báo cáo, chênh lệch không quá ba tháng thì tài sản, nợ phải trả quy đổi theo tỷ giá tại ngày báo cáo của hoạt động ở nước ngoài, có điều chỉnh cho biến động tỷ giá đáng kể (đoạn 46; VAS 10 đoạn 29).

## Dữ liệu hệ thống cần có

- Với **mỗi pháp nhân**: đơn vị tiền tệ ghi sổ theo luật địa phương, đồng tiền chức năng theo IFRS (nếu khác), đồng tiền trình bày cho báo cáo tập đoàn. Đây là các trường của danh mục pháp nhân.
- **Ba loại tỷ giá** cho mỗi cặp tiền: tỷ giá cuối kỳ, tỷ giá bình quân kỳ, tỷ giá lịch sử (ngày góp vốn, ngày đánh giá lại tài sản).
- **Lịch sử vốn chủ sở hữu theo từng lần phát sinh** kèm tỷ giá, để chuyển đổi vốn góp theo tỷ giá ngày góp.
- **Số luỹ kế chênh lệch chuyển đổi theo từng hoạt động ở nước ngoài**, để chuyển sang lãi lỗ đúng phần khi thanh lý hoặc thanh lý từng phần.
- **Tài khoản hoặc chỉ tiêu riêng** cho chênh lệch chuyển đổi trong vốn chủ sở hữu, tách khỏi chênh lệch tỷ giá giao dịch.

Ví dụ Odoo 19: tiền tệ chính được xác định theo công ty, mặc định theo quốc gia của công ty và đổi được trong phần cài đặt kế toán. Sổ nhật ký hoặc tài khoản có thể gắn một tiền tệ riêng; khi đó chỉ nhận giao dịch bằng tiền tệ đó.

> ⚠️ Cần xác nhận: tài liệu Odoo 19 về đa tiền tệ không mô tả việc Odoo chuyển đổi BCTC theo các nhóm tỷ giá của TT99 Điều 6 hoặc IAS 21 đoạn 39. Cần kiểm tra tính năng hợp nhất, báo cáo của phiên bản cụ thể trước khi kết luận.

Lịch khoá sổ và tỷ giá dùng chung cho gói báo cáo tập đoàn xem [[ktqt-12-bao-cao-cho-tap-doan]].

## Nguồn

- Luật Kế toán số 88/2015/QH13 (văn bản hợp nhất 41/VBHN-VPQH, Công báo số 172 ngày 31/03/2026), Điều 10 – Đơn vị tính sử dụng trong kế toán: https://cdn.thuvienphapluat.vn//uploads/Hoidapphapluat/2026/LNMT/Thang_4/260404/172_41_VBHN_VPQH.pdf
- Thông tư 99/2025/TT-BTC hướng dẫn Chế độ kế toán doanh nghiệp, Điều 4 (Đơn vị tiền tệ trong kế toán), Điều 5 (Thay đổi đơn vị tiền tệ trong kế toán), Điều 6 (Công tác kế toán khi lựa chọn đơn vị tiền tệ không phải Đồng Việt Nam), Điều 30 khoản 3: https://luatvietnam.vn/linh-vuc-khac/tai-thong-tu-99-2025-tt-btc-huong-dan-che-do-ke-toan-doanh-nghiep-186-105034-article.html
- Chuẩn mực kế toán Việt Nam số 10 – Ảnh hưởng của việc thay đổi tỷ giá hối đoái (Quyết định 165/2002/QĐ-BTC), đoạn 02–06, 14–30: toàn văn tại https://ketoanthienung.net/chua-n-mu-c-ke-toa-n-so-10-anh-huong-cua-viec-thay-doi-ty-gia-hoi-doai.htm
- IAS 21 The Effects of Changes in Foreign Exchange Rates (IFRS Foundation), đoạn 8–19, 35–48B. Trang chuẩn mực: https://www.ifrs.org/issued-standards/list-of-standards/ias-21-the-effects-of-changes-in-foreign-exchange-rates/. Văn bản chuẩn mực đã đọc (bản IFRS Foundation trước sửa đổi Lack of Exchangeability năm 2023): https://ktkt.uel.edu.vn/Resources/Docs/SubDomain/ktkt/VanBan/IAS/ias21_en.pdf
- Forvis Mazars Việt Nam, Góc nhìn chuyên môn – Thông tư 99/2025/TT-BTC, mục 4 "Đơn vị tiền tệ và giao dịch ngoại tệ" (đối chiếu): https://www.forvismazars.com/vn/vi/content/download/1305056/file/%5BVIE%5D%20Forvis%20Mazars%20Vi%E1%BB%87t%20Nam_G%C3%B3c%20nh%C3%ACn%20chuy%C3%AAn%20m%C3%B4n_Th%C3%B4ng%20t%C6%B0%2099.pdf
- Odoo 19 Documentation, Accounting – Multi-currency system: https://www.odoo.com/documentation/19.0/applications/finance/accounting/get_started/multi_currency.html
