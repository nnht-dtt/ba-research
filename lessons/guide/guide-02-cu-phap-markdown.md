# Cú pháp Markdown site hỗ trợ

Bài học viết bằng Markdown chuẩn (GitHub Flavored Markdown) cộng một số phần mở rộng dưới đây. Mở file `lessons/guide/guide-02-cu-phap-markdown.md` để xem mã nguồn của từng ví dụ.

## Heading và mục lục

`#` dùng một lần cho tiêu đề bài. `##` và `###` vào mục lục bên phải và vào kết quả tìm kiếm (Ctrl+K / ⌘K tìm tới tận từng mục).

## Bảng

| Cột A | Cột B |
|---|---|
| Ô 1 | Ô 2 |
| Ô 3 | Ô 4 |

## Callout

Blockquote mở đầu bằng một emoji đánh dấu được đổi thành khung callout có icon:

> 💡 Mẹo (tip).

> 📌 Ghi chú (note).

> ⚠️ Cảnh báo (warning).

> ✅ Nên làm (success).

> ❌ Không nên làm (danger).

Blockquote không có emoji đánh dấu vẫn là trích dẫn thường:

> Trích dẫn thường.

## Liên kết giữa các bài

Viết `[[slug-cua-bai]]`, ví dụ `[[guide-01-them-noi-dung]]` thành: [[guide-01-them-noi-dung]]. Chữ hiển thị là tiêu đề bài. Slug không tồn tại thì giữ nguyên văn bản, nên đổi slug một bài thì tìm và sửa các `[[...]]` trỏ tới nó.

Liên kết thường vẫn dùng `[chữ](url)`.

## Tab code

Các khối code liền nhau, mỗi khối một ngôn ngữ lập trình khác nhau, được gộp thành tab. Lựa chọn ngôn ngữ được nhớ cho các bài sau.

```python
print("Xin chào")
```

```javascript
console.log("Xin chào");
```

Khối `bash`, `sql`, `json`, `yaml` và code không ghi ngôn ngữ không gộp tab.

## Sơ đồ bấm từng bước: `<step-flow>`

Một SVG trong `<step-flow>`, mỗi phần gắn `data-step="N"`, kèm `<step-note data-step="N">` làm chú thích cho bước đó. Người đọc bấm Tiếp / Phát để đi qua từng bước. Bên trong khối không để dòng trống, vì dòng trống làm Markdown kết thúc khối HTML.

<step-flow>
<svg viewBox="0 0 640 130" role="img" aria-labelledby="g02s-t" style="width:100%;max-width:640px;height:auto;display:block;margin:1.25rem auto" font-family="ui-sans-serif, system-ui, sans-serif">
<title id="g02s-t">Ba bước thêm một bài học</title>
<defs>
<marker id="g02s-arrow" markerWidth="9" markerHeight="9" refX="8" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 z" fill="currentColor"/></marker>
</defs>
<g data-step="1">
<rect x="10" y="40" width="170" height="56" rx="10" fill="#3b82f6" fill-opacity="0.13" stroke="currentColor" stroke-opacity="0.22"/>
<text x="95" y="73" font-size="14" text-anchor="middle" fill="currentColor">Viết file .md</text>
</g>
<g data-step="2">
<line x1="180" y1="68" x2="232" y2="68" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" marker-end="url(#g02s-arrow)"/>
<rect x="235" y="40" width="170" height="56" rx="10" fill="#f59e0b" fill-opacity="0.14" stroke="currentColor" stroke-opacity="0.22"/>
<text x="320" y="73" font-size="14" text-anchor="middle" fill="currentColor">Khai báo lessons.ts</text>
</g>
<g data-step="3">
<line x1="405" y1="68" x2="457" y2="68" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" marker-end="url(#g02s-arrow)"/>
<rect x="460" y="40" width="170" height="56" rx="10" fill="#10b981" fill-opacity="0.16" stroke="currentColor" stroke-opacity="0.22"/>
<text x="545" y="73" font-size="14" text-anchor="middle" fill="currentColor">npm run build</text>
</g>
</svg>
<step-note data-step="1">Tạo file trong <code>lessons/&lt;khoá&gt;/</code>.</step-note>
<step-note data-step="2">Thêm một dòng vào mảng lessons của khoá và slug vào <code>lessonSlugs</code> của chương.</step-note>
<step-note data-step="3">Build qua thì bài đã sẵn sàng.</step-note>
</step-flow>

Màu dùng `fill-opacity` thấp và chữ dùng `currentColor` để sơ đồ đọc được ở cả giao diện sáng và tối. `id` trong SVG (title, marker) cần duy nhất trong bài, nên thêm tiền tố riêng cho từng sơ đồ như `g02s-` ở trên.

## So sánh A/B: `<ab-toggle>`

Hai SVG vẽ trên cùng bố cục, mỗi SVG một trạng thái, nhãn nút ghi trong `data-labels` cách nhau bởi `|`. Mỗi `<ab-note>` là chú thích của trạng thái cùng thứ tự.

<ab-toggle data-labels="available: false|available: true">
<svg viewBox="0 0 640 110" role="img" aria-label="Bài chưa có nội dung" style="width:100%;max-width:640px;height:auto;display:block;margin:1rem auto" font-family="ui-sans-serif, system-ui, sans-serif">
<rect x="10" y="20" width="620" height="70" rx="10" fill="#f43f5e" fill-opacity="0.12" stroke="currentColor" stroke-opacity="0.22"/>
<text x="320" y="61" font-size="15" text-anchor="middle" fill="currentColor">Bài có trong danh sách, trang bài hiện "Chưa có nội dung"</text>
</svg>
<svg viewBox="0 0 640 110" role="img" aria-label="Bài hiển thị nội dung" style="width:100%;max-width:640px;height:auto;display:block;margin:1rem auto" font-family="ui-sans-serif, system-ui, sans-serif">
<rect x="10" y="20" width="620" height="70" rx="10" fill="#10b981" fill-opacity="0.14" stroke="currentColor" stroke-opacity="0.22"/>
<text x="320" y="61" font-size="15" text-anchor="middle" fill="currentColor">Site đọc file .md và hiển thị bài</text>
</svg>
<ab-note>Dùng khi đã lên dàn bài nhưng chưa viết nội dung.</ab-note>
<ab-note>Dùng khi file .md đã có ở đường dẫn <code>file</code>.</ab-note>
</ab-toggle>

## Hình động: `<auto-anim>`

`<auto-anim data-dur="10">` bọc một hoặc nhiều SVG tự chạy bằng `<animate>` (SMIL) trong `data-dur` giây, có nút tạm dừng và chạy lại. Hợp với quá trình lặp theo thời gian; luồng có thứ tự rõ ràng thì dùng `<step-flow>` dễ đọc hơn.
