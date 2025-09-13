
export const TRAINING_MATERIALS: Record<string, string> = {
  'mda-intro': `
## Giới thiệu về Model-driven Apps
Model-driven Apps là một phương pháp xây dựng ứng dụng trong Power Apps, tập trung vào việc sử dụng mô hình dữ liệu có sẵn trong Microsoft Dataverse để nhanh chóng tạo ra các ứng dụng nghiệp vụ phức tạp. Khác với Canvas Apps nơi bạn toàn quyền kiểm soát giao diện, Model-driven Apps tự động tạo ra giao diện người dùng dựa trên cấu trúc dữ liệu của bạn.

### Các khái niệm cốt lõi
*   **Dataverse:** Là nền tảng dữ liệu cốt lõi, nơi bạn định nghĩa các bảng (tables), cột (columns), và mối quan hệ (relationships) để lưu trữ dữ liệu cho ứng dụng. Nó cung cấp một mô hình dữ liệu an toàn và có thể mở rộng.
*   **Thành phần (Components):** Giao diện của Model-driven App được tạo thành từ các thành phần như Bảng (Tables), Biểu mẫu (Forms), Chế độ xem (Views), Biểu đồ (Charts), và Bảng điều khiển (Dashboards).
*   **Tự động tạo giao diện (UI Generation):** Power Apps tự động tạo ra một giao diện người dùng (UI) đáp ứng (responsive), hoạt động tốt trên cả trình duyệt web và thiết bị di động. Giao diện này nhất quán và dễ sử dụng, giúp người dùng tập trung vào dữ liệu và quy trình nghiệp vụ.

### Trường hợp sử dụng chính
*   Xây dựng các ứng dụng quản lý quy trình nghiệp vụ phức tạp như quản lý quan hệ khách hàng (CRM), quản lý dự án, quản lý nhân sự.
*   Các ứng dụng cần hiển thị và tương tác với lượng lớn dữ liệu có cấu trúc.
*   Khi cần phát triển ứng dụng nhanh chóng mà không cần tập trung quá nhiều vào thiết kế giao diện chi tiết.
  `,
  'mda-data-model': `
## Tạo Solution, Table, Form, View
Đây là những khối xây dựng cơ bản của một Model-driven App. Việc cấu trúc chúng đúng cách là rất quan trọng.

### Solutions (Giải pháp)
*   **Khái niệm:** Solution là một "container" để đóng gói tất cả các thành phần của ứng dụng (tables, forms, views, flows, v.v.). Việc sử dụng solution giúp bạn dễ dàng quản lý, di chuyển (deploy) và cập nhật ứng dụng giữa các môi trường khác nhau (ví dụ: từ môi trường phát triển sang môi trường sản phẩm).
*   **Tại sao cần dùng:** Luôn luôn làm việc trong một solution. Điều này đảm bảo tất cả các tùy chỉnh của bạn được theo dõi và có thể di chuyển được.

### Tables (Bảng)
*   **Khái niệm:** Tables (trước đây gọi là Entities) là nơi bạn định nghĩa và lưu trữ dữ liệu của mình. Mỗi table chứa các hàng (rows) và cột (columns). Ví dụ: table "Sản phẩm" sẽ có các cột như "Tên sản phẩm", "Mã sản phẩm", "Đơn giá".
*   **Cách tạo:** Khi tạo table, bạn cần đặt tên, xác định cột chính (Primary Column), và sau đó thêm các cột cần thiết với các kiểu dữ liệu phù hợp (văn bản, số, ngày tháng, lựa chọn, v.v.).

### Forms (Biểu mẫu)
*   **Khái niệm:** Form là giao diện mà người dùng sử dụng để xem, tạo mới hoặc chỉnh sửa một hàng dữ liệu cụ thể trong một table.
*   **Sử dụng:** Một table có thể có nhiều form khác nhau cho các mục đích khác nhau (ví dụ: form chính, form tạo nhanh, form xem nhanh). Bạn có thể kéo-thả các cột vào form, sắp xếp bố cục, thêm các tab, section để tổ chức thông tin một cách logic.

### Views (Chế độ xem)
*   **Khái niệm:** View là một danh sách các hàng dữ liệu từ một table. Nó cho phép bạn định nghĩa các cột sẽ hiển thị, thứ tự sắp xếp, và các điều kiện lọc.
*   **Sử dụng:** Bạn có thể tạo nhiều view khác nhau, ví dụ: "Đơn hàng đang hoạt động", "Đơn hàng đã hoàn thành", "Đơn hàng trong tháng này". Người dùng có thể dễ dàng chuyển đổi giữa các view để xem dữ liệu theo các góc độ khác nhau.
  `,
  'mda-app-design': `
## Tạo và Cấu trúc App Model-driven
Sau khi đã có mô hình dữ liệu, bước tiếp theo là tập hợp các thành phần lại thành một ứng dụng hoàn chỉnh.

### App Designer
*   **Khái niệm:** App Designer là công cụ trực quan nơi bạn xây dựng Model-driven app của mình. Tại đây, bạn sẽ chọn các thành phần (tables, dashboards, business process flows) mà bạn muốn đưa vào ứng dụng.
*   **Cách làm:** Bạn đặt tên cho ứng dụng và sau đó thêm các "artifact" (thành phần) cần thiết. Ví dụ, bạn có thể chỉ thêm các table liên quan đến quy trình bán hàng cho ứng dụng "Sales Hub".

### Site Map (Sơ đồ trang)
*   **Khái niệm:** Site Map định nghĩa cấu trúc điều hướng (menu) bên trái của ứng dụng. Nó quyết định người dùng sẽ thấy những gì và cách chúng được tổ chức.
*   **Cấu trúc:** Site Map bao gồm ba cấp độ:
    1.  **Area:** Cấp cao nhất, thường dùng để phân chia các khu vực chức năng lớn (ví dụ: Bán hàng, Dịch vụ, Kho).
    2.  **Group:** Nhóm các liên kết có liên quan lại với nhau trong một Area (ví dụ: trong Area "Kho", có thể có Group "Quản lý tồn kho", "Quản lý nhập/xuất").
    3.  **Subarea:** Là một liên kết cụ thể đến một thành phần, thường là một View của một Table.

### Ví dụ về cấu trúc
Trong ứng dụng quản lý kho, bạn có thể tạo một Site Map như sau:
*   **Area:** Kho
    *   **Group:** Quản lý sản phẩm
        *   **Subarea:** Sản phẩm (trỏ đến view "Tất cả sản phẩm")
        *   **Subarea:** Nhóm sản phẩm (trỏ đến view "Tất cả nhóm sản phẩm")
    *   **Group:** Giao dịch
        *   **Subarea:** Đơn nhập kho (trỏ đến view "Đơn nhập kho đang xử lý")
        *   **Subarea:** Đơn xuất kho (trỏ đến view "Đơn xuất kho đang xử lý")
  `,
  'mda-columns': `
## Làm việc với Cột Lookup, Calculated, và Rollup
Đây là các loại cột đặc biệt giúp tạo ra các mối quan hệ và tự động hóa tính toán trong dữ liệu của bạn.

### Lookup Columns (Cột tra cứu)
*   **Khái niệm:** Cột lookup tạo ra một mối quan hệ giữa hai table (quan hệ N:1 - nhiều-đến-một). Ví dụ, trong table "Đơn bán", bạn có thể tạo một cột lookup đến table "Sản phẩm". Điều này cho phép mỗi đơn bán chỉ liên kết với một sản phẩm.
*   **Lợi ích:** Khi người dùng điền thông tin đơn bán, họ có thể chọn một sản phẩm từ danh sách có sẵn thay vì phải gõ lại. Điều này đảm bảo tính nhất quán của dữ liệu. Bạn cũng có thể dễ dàng lấy thông tin từ "bảng cha" (Sản phẩm) xuống "bảng con" (Đơn bán), ví dụ như tự động điền đơn vị tính.

### Calculated Columns (Cột tính toán)
*   **Khái niệm:** Cột calculated cho phép bạn định nghĩa một công thức để tự động tính toán giá trị của nó dựa trên các cột khác trong cùng một hàng dữ liệu. Phép tính được thực hiện ngay lập tức khi dữ liệu thay đổi.
*   **Ví dụ:** Trong table "Đơn bán chi tiết", bạn có thể tạo một cột "Thành tiền" (Calculated) với công thức = \`Số lượng\` * \`Đơn giá\`. Bạn không cần nhập tay hay dùng code để tính toán giá trị này.
*   **Lưu ý:** Dữ liệu của cột calculated không được lưu trực tiếp trong cơ sở dữ liệu mà được tính toán khi truy vấn.

### Rollup Columns (Cột tổng hợp)
*   **Khái niệm:** Cột rollup thực hiện một phép tính tổng hợp (SUM, COUNT, MIN, MAX, AVG) trên các hàng liên quan (bảng con). Phép tính này không được thực hiện ngay lập tức mà chạy định kỳ theo một lịch trình hệ thống (thường là mỗi giờ).
*   **Ví dụ:** Trong table "Sản phẩm", bạn có thể tạo một cột rollup tên là "Số đơn hàng" để đếm (COUNT) tất cả các "Đơn bán" có trạng thái "Active" liên quan đến sản phẩm đó. Điều này cho bạn biết sản phẩm nào đang được bán chạy.
  `,
  'ca-intro': `
## Giới thiệu về Canvas Apps
Canvas Apps trong Power Apps cho phép bạn thiết kế giao diện người dùng với sự tự do hoàn toàn, giống như thiết kế một slide trong PowerPoint. Bạn có toàn quyền kiểm soát vị trí, kích thước, và hành vi của từng thành phần (controls) trên màn hình (screens).

### Các khái niệm cốt lõi
*   **Screens (Màn hình):** Một ứng dụng Canvas bao gồm một hoặc nhiều màn hình. Mỗi màn hình là một không gian làm việc nơi bạn xây dựng giao diện cho một tác vụ cụ thể.
*   **Controls (Điều khiển):** Đây là các yếu tố giao diện mà người dùng tương tác, ví dụ như nút bấm (Button), nhãn (Label), ô nhập liệu (Text Input), thư viện (Gallery), biểu mẫu (Form), v.v.
*   **Formulas (Công thức):** Canvas Apps sử dụng các công thức tương tự như trong Excel (ngôn ngữ Power Fx) để định nghĩa logic và hành vi cho ứng dụng. Bạn dùng công thức để xử lý dữ liệu, định dạng giao diện, điều hướng giữa các màn hình, v.v.
*   **Connectors (Trình kết nối):** Connectors cho phép ứng dụng của bạn kết nối và tương tác với hàng trăm nguồn dữ liệu và dịch vụ khác nhau như SharePoint, SQL Server, Dataverse, Office 365, và cả các dịch vụ bên ngoài như Twitter hay Salesforce.

### Trường hợp sử dụng chính
*   Xây dựng các ứng dụng tập trung vào tác vụ cụ thể, có giao diện tùy chỉnh cao.
*   Các ứng dụng dành cho thiết bị di động với trải nghiệm người dùng được tối ưu hóa.
*   Khi cần tích hợp với nhiều nguồn dữ liệu khác nhau trong một giao diện duy nhất.
  `,
  'ca-export-app': `
## Tạo App Xuất kho tổng hợp
Đây là một bài tập thực tế để áp dụng kiến thức về Canvas App. Ứng dụng này giúp người dùng thực hiện nghiệp vụ xuất kho một cách nhanh chóng.

### Yêu cầu chức năng
1.  **Thiết kế giao diện (UI):** Dựa trên một mẫu (template) có sẵn, xây dựng giao diện ứng dụng bao gồm:
    *   Một danh sách (Gallery) hoặc Dropdown để chọn khách hàng.
    *   Một Gallery khác để hiển thị danh sách các đơn bán chi tiết của khách hàng được chọn.
    *   Các ô nhập liệu (Text Input) cho phép người dùng nhập "Số lượng xuất thực tế" và "Quy cách".
    *   Một nút bấm (Button) "Xuất kho".

2.  **Logic tương tác:**
    *   Khi người dùng chọn một khách hàng, Gallery đơn bán chi tiết phải tự động tải và hiển thị đúng dữ liệu của khách hàng đó. Công thức thường dùng là \`Filter()\`.
    *   Người dùng có thể nhập dữ liệu vào các ô nhập liệu tương ứng với từng dòng đơn bán.

3.  **Xử lý nút "Xuất kho":**
    *   Khi nhấn nút, ứng dụng cần thu thập thông tin đã nhập (sản phẩm, số lượng xuất, quy cách).
    *   Sử dụng hàm \`Patch()\` hoặc \`Collect()\` để tạo một bản ghi mới trong bảng "Xuất kho" trong nguồn dữ liệu (ví dụ: Dataverse hoặc SharePoint List). Hàm \`ForAll()\` thường được sử dụng để lặp qua Gallery và ghi nhiều dòng dữ liệu cùng lúc.
  `,
  'ca-chatbot': `
## Tạo App "Chat bot"
Bài tập này hướng dẫn cách tích hợp Canvas App với các dịch vụ AI (như mô hình GPT) thông qua Power Automate để tạo một ứng dụng chatbot đơn giản.

### Các bước thực hiện
1.  **Thiết kế giao diện Chat:**
    *   Tạo một giao diện giống các ứng dụng chat phổ biến.
    *   Sử dụng một Gallery để hiển thị lịch sử cuộc trò chuyện. Mỗi mục trong gallery có thể hiển thị câu hỏi của người dùng và câu trả lời của bot.
    *   Thêm một ô Text Input ở dưới cùng để người dùng nhập câu hỏi (prompt).
    *   Thêm một nút "Gửi" (Send) hoặc một biểu tượng để kích hoạt việc gửi prompt.

2.  **Kết nối với Power Automate Flow:**
    *   Từ trong Canvas App, tạo một Power Automate flow mới.
    *   Flow này sẽ nhận một tham số đầu vào là "prompt" từ Canvas App.

3.  **Gọi API GPT trong Flow:**
    *   Trong Power Automate, sử dụng action "HTTP" để gửi một yêu cầu POST đến API của mô hình ngôn ngữ (ví dụ: Azure OpenAI GPT).
    *   Cấu hình action HTTP với URL điểm cuối (endpoint), khóa API (API Key), và phần thân (body) của yêu cầu chứa prompt của người dùng.
    *   Phân tích (parse) phản hồi JSON từ API để lấy ra nội dung câu trả lời.

4.  **Phản hồi lại Canvas App:**
    *   Sử dụng action "Respond to a PowerApp or flow" để gửi kết quả (câu trả lời của bot) trở lại Canvas App.
    *   Trong Canvas App, công thức gọi Flow sẽ nhận về kết quả này.
    *   Cập nhật một biến hoặc một collection với câu trả lời mới để Gallery hiển thị nó trên giao diện.
  `,
  'pa-triggers': `
## Tạo automate trigger cho Nhập/Xuất kho
Power Automate có thể tự động hóa các quy trình dựa trên các sự kiện xảy ra trong dữ liệu của bạn, giúp loại bỏ các tác vụ thủ công và đảm bảo tính nhất quán.

### Automated Cloud Flow
*   **Khái niệm:** Đây là loại flow tự động kích hoạt khi một sự kiện cụ thể xảy ra. Bạn không cần phải chạy nó bằng tay.

### Dataverse Triggers
*   **Khái niệm:** Đây là các sự kiện kích hoạt phổ biến khi làm việc với Dataverse. Trigger "When a row is added, modified or deleted" là một trong những trigger mạnh mẽ nhất.
*   **Cấu hình:** Khi sử dụng trigger này, bạn cần chỉ định:
    1.  **Change type:** Sự kiện nào sẽ kích hoạt flow (ví dụ: Added - khi một hàng mới được tạo).
    2.  **Table name:** Bảng nào cần theo dõi (ví dụ: "Nhập kho" hoặc "Xuất kho").
    3.  **Scope:** Phạm vi của trigger (thường là "Organization" để áp dụng cho toàn bộ tổ chức).

### Logic cập nhật tồn kho
*   **Kịch bản:** Khi một bản ghi mới được thêm vào bảng "Nhập kho" hoặc "Xuất kho".
*   **Các bước trong Flow:**
    1.  **Trigger:** Khi một hàng được thêm vào bảng "Xuất kho".
    2.  **Get related Product:** Lấy thông tin chi tiết về sản phẩm từ bản ghi "Xuất kho" (thường thông qua một cột lookup).
    3.  **Update Product row:** Sử dụng action "Update a row".
        *   **Row ID:** ID của sản phẩm cần cập nhật.
        *   **Update logic:** Cập nhật cột "Số lượng tồn kho".
            *   **Bán hàng (Xuất kho):** Tồn kho mới = Tồn kho hiện tại - Số lượng xuất.
            *   **Mua hàng (Nhập kho):** Tồn kho mới = Tồn kho hiện tại + Số lượng nhập.
            *   Bạn có thể dùng biểu thức (expressions) trong Power Automate để thực hiện các phép tính này.
  `,
  'pa-scheduled': `
## Tạo flow chạy theo giờ (Scheduled Flow)
Scheduled Cloud Flow cho phép bạn tự động hóa các tác vụ lặp đi lặp lại theo một lịch trình cố định (hàng giờ, hàng ngày, hàng tuần, v.v.).

### Scheduled Cloud Flow
*   **Khái niệm:** Loại flow này được kích hoạt bởi một trigger thời gian gọi là "Recurrence".

### Recurrence Trigger (Trigger lặp lại)
*   **Cấu hình:** Bạn có thể thiết lập trigger này để chạy:
    *   **Interval:** Tần suất (ví dụ: mỗi 1 giờ, mỗi 2 ngày).
    *   **Frequency:** Đơn vị thời gian (Giây, Phút, Giờ, Ngày, Tuần, Tháng).
    *   **Time zone:** Múi giờ để chạy.
    *   **Start time:** Thời điểm bắt đầu chạy.

### Kịch bản: Tính và gửi báo cáo doanh số
*   **Mục tiêu:** Mỗi ngày vào lúc 8 giờ sáng, tự động tính tổng doanh số xuất kho của ngày hôm trước và gửi email báo cáo.
*   **Các bước trong Flow:**
    1.  **Trigger:** Recurrence, đặt lịch chạy hàng ngày vào 8:00 AM.
    2.  **Get past time:** Sử dụng action "Get past time" hoặc biểu thức \`subtractFromTime()\` để xác định khoảng thời gian của ngày hôm trước.
    3.  **List rows:** Lấy tất cả các bản ghi từ bảng "Xuất kho" có ngày tạo nằm trong khoảng thời gian đã xác định ở bước 2. Sử dụng Filter Query để lọc dữ liệu hiệu quả.
    4.  **Initialize variable:** Tạo một biến kiểu "Float" hoặc "Integer" để lưu tổng doanh thu, đặt giá trị ban đầu là 0.
    5.  **Apply to each:** Lặp qua danh sách các bản ghi lấy được ở bước 3.
    6.  **Increment variable:** Trong vòng lặp, cộng giá trị của cột "Thành tiền" của mỗi bản ghi vào biến tổng doanh thu.
    7.  **Send an email:** Sau khi vòng lặp kết thúc, sử dụng action "Send an email (V2)" của trình kết nối Office 365 Outlook.
        *   **To:** Nhập địa chỉ email của người nhận.
        *   **Subject:** Tiêu đề email, ví dụ: "Báo cáo doanh số ngày [ngày]".
        *   **Body:** Nội dung email, chèn giá trị của biến tổng doanh thu vào.
  `,
  'wr-js': `
## Sử dụng JavaScript trong Form (Event onChange)
Web Resources cho phép bạn mở rộng khả năng của Model-driven Apps bằng cách sử dụng các công nghệ web như JavaScript, HTML, và CSS. Việc sử dụng JavaScript trên form giúp tạo ra các trải nghiệm người dùng động và thông minh hơn.

### JavaScript Web Resource
*   **Khái niệm:** Là một file .js mà bạn tải lên Power Apps. Sau đó, bạn có thể liên kết các hàm trong file này với các sự kiện trên form.

### Form Event Handlers (Trình xử lý sự kiện Form)
*   **Khái niệm:** Bạn có thể cấu hình để một hàm JavaScript được thực thi khi một sự kiện cụ thể xảy ra trên form, ví dụ như:
    *   **OnLoad:** Khi form được tải.
    *   **OnSave:** Khi form được lưu.
    *   **OnChange:** Khi giá trị của một cột cụ thể thay đổi.

### Client API Object Model
*   **Khái niệm:** Power Apps cung cấp một bộ thư viện API JavaScript (mô hình đối tượng phía máy khách) để bạn tương tác với các thành phần trên form. Đối tượng chính là \`formContext\`.
*   **Cách sử dụng:** Bạn cần truyền \`executionContext\` làm tham số cho hàm của mình. Từ đó, bạn có thể lấy \`formContext\` bằng \`executionContext.getFormContext()\`.
*   **Các hàm phổ biến:**
    *   \`formContext.getAttribute("logicalname").getValue()\`: Lấy giá trị của một cột.
    *   \`formContext.getAttribute("logicalname").setValue(value)\`: Thiết lập giá trị cho một cột.
    *   \`formContext.getControl("logicalname").setVisible(false)\`: Ẩn một control.
    *   \`formContext.ui.setFormNotification(message, level, id)\`: Hiển thị thông báo ở cấp độ form.

### Kịch bản: Kiểm tra tồn kho khi thay đổi số lượng
*   **Mục tiêu:** Trên form "Đơn bán chi tiết", khi người dùng thay đổi "Số lượng", hệ thống sẽ kiểm tra xem số lượng nhập vào có lớn hơn số lượng tồn kho của sản phẩm đã chọn hay không.
*   **Các bước:**
    1.  **Viết hàm JavaScript:** Tạo một hàm nhận \`executionContext\` làm tham số.
    2.  **Lấy giá trị:** Bên trong hàm, sử dụng \`formContext\` để lấy giá trị của cột "Số lượng" và cột lookup "Sản phẩm".
    3.  **Truy vấn tồn kho:** Sử dụng \`Xrm.WebApi.retrieveRecord()\` để lấy thông tin của sản phẩm đã chọn, bao gồm cả cột "Số lượng tồn kho".
    4.  **So sánh và thông báo:** So sánh số lượng nhập vào với số lượng tồn kho. Nếu lớn hơn, sử dụng \`formContext.ui.setFormNotification()\` để hiển thị một thông báo lỗi cho người dùng.
    5.  **Đăng ký sự kiện:** Trong trình chỉnh sửa form, thêm file JavaScript làm thư viện, sau đó đăng ký hàm đã viết vào sự kiện \`OnChange\` của cột "Số lượng".
  `,
  'wr-html': `
## Tạo Command và Form in (HTML)
HTML Web Resources cho phép bạn nhúng các trang web tùy chỉnh trực tiếp vào Model-driven Apps, mở ra nhiều khả năng tùy biến giao diện và chức năng.

### HTML Web Resource
*   **Khái niệm:** Là một file .html (có thể kèm theo CSS và JS) mà bạn tải lên Power Apps. Bạn có thể hiển thị nó trong form, dashboard, hoặc mở ra từ một nút lệnh trên command bar.

### Command Bar Customization (Tùy chỉnh thanh lệnh)
*   **Khái niệm:** Thanh lệnh (command bar, trước đây là Ribbon) là nơi chứa các nút hành động ở đầu các view và form. Bạn có thể thêm các nút tùy chỉnh của riêng mình.
*   **Ribbon Workbench:** Là một công cụ phổ biến trong XrmToolBox, giúp bạn tùy chỉnh command bar một cách trực quan.
*   **Hành động của nút:** Một nút tùy chỉnh có thể thực hiện nhiều hành động, phổ biến nhất là:
    1.  **Chạy JavaScript:** Gọi một hàm JavaScript từ một Web Resource.
    2.  **Mở URL:** Mở một URL, có thể là một HTML Web Resource.

### Kịch bản: Tạo nút "In" và Form in tùy chỉnh
*   **Mục tiêu:** Tạo một nút "In đơn hàng" trên form "Đơn bán". Khi nhấn vào, nút này sẽ mở ra một trang HTML hiển thị thông tin của đơn bán đó theo một định dạng in ấn tùy chỉnh.
*   **Các bước:**
    1.  **Tạo HTML Web Resource:**
        *   Thiết kế một trang HTML (ví dụ: \`print_form.html\`) với bố cục và CSS theo ý muốn.
        *   Trong file HTML, thêm một file JavaScript tham chiếu đến \`ClientGlobalContext.js.aspx\`. Điều này cho phép bạn truy cập dữ liệu từ Power Apps.
        *   Viết mã JavaScript trong trang HTML để lấy ID của bản ghi hiện tại từ query string.
        *   Sử dụng \`Xrm.WebApi.retrieveRecord()\` để lấy tất cả dữ liệu cần thiết của đơn bán.
        *   Dùng JavaScript để điền dữ liệu này vào các phần tử HTML tương ứng trên trang.

    2.  **Tùy chỉnh Command Bar:**
        *   Sử dụng Ribbon Workbench để thêm một nút mới tên là "In đơn hàng" vào command bar của form "Đơn bán".
        *   Cấu hình hành động cho nút này là "Open URL".
        *   Trong URL, trỏ đến HTML Web Resource đã tạo. Quan trọng là bạn cần truyền ID của bản ghi hiện tại vào URL dưới dạng tham số.

    3.  **Kết quả:** Khi người dùng mở một đơn bán và nhấn nút "In đơn hàng", một cửa sổ mới sẽ hiện ra với trang HTML của bạn, hiển thị dữ liệu của chính đơn bán đó, sẵn sàng để in.
  `,
  'pbi-dataflow': `
## Tìm hiểu về Dataflow trong Power BI
Dataflow là một công cụ chuẩn bị dữ liệu tự phục vụ (self-service data preparation) trong Power BI Service. Nó cho phép bạn kết nối, chuyển đổi, và làm sạch dữ liệu bằng Power Query Online, sau đó lưu kết quả vào Azure Data Lake Storage Gen2. Dữ liệu đã được chuẩn bị này có thể được tái sử dụng bởi nhiều bộ dữ liệu (datasets), báo cáo (reports) và dashboard khác nhau.

### Lợi ích chính
*   **Tái sử dụng logic ETL:** Bạn chỉ cần tạo logic chuyển đổi dữ liệu (ETL) một lần trong dataflow. Sau đó, nhiều người dùng khác có thể kết nối đến dataflow này để xây dựng báo cáo mà không cần phải lặp lại quá trình chuẩn bị dữ liệu.
*   **Tập trung hóa việc chuẩn bị dữ liệu:** Giúp quản lý và chuẩn bị dữ liệu ở một nơi duy nhất, đảm bảo tính nhất quán và chất lượng dữ liệu trên toàn tổ chức.
*   **Giảm tải cho nguồn dữ liệu:** Vì dữ liệu được làm mới và lưu trữ trong Azure Data Lake, các báo cáo sẽ truy vấn vào dataflow thay vì truy vấn trực tiếp vào hệ thống nguồn, giảm bớt gánh nặng cho các hệ thống tác nghiệp.

### Cách tạo và sử dụng
1.  **Tạo Dataflow:** Trong Power BI Service, vào một workspace, chọn New -> Dataflow.
2.  **Định nghĩa các bảng (Define tables):** Bạn có thể tạo bảng mới từ nhiều nguồn dữ liệu khác nhau (giống như trong Power BI Desktop).
3.  **Chuyển đổi dữ liệu:** Sử dụng giao diện Power Query Online quen thuộc để thực hiện các bước làm sạch, chuyển đổi và định hình dữ liệu.
4.  **Làm mới (Refresh):** Thiết lập lịch trình làm mới cho dataflow để đảm bảo dữ liệu luôn được cập nhật.
5.  **Sử dụng Dataflow:** Trong Power BI Desktop, chọn "Get Data" -> "Power BI dataflows". Kết nối đến dataflow đã tạo và chọn các bảng bạn cần để bắt đầu xây dựng báo cáo.
  `,
  'pbi-etl': `
## ETL với Power Query (Sale Order)
ETL (Extract, Transform, Load) là quy trình cốt lõi trong việc chuẩn bị dữ liệu cho phân tích. Power Query là công cụ ETL mạnh mẽ được tích hợp trong Power BI.

### Kịch bản: Xử lý dữ liệu chi tiết đơn hàng bán
*   **Mục tiêu:** Chuyển đổi dữ liệu chi tiết từ bảng "Sale Order Detail" thành một bảng tổng hợp (aggregated) để phân tích hiệu suất bán hàng theo các chiều khác nhau.

### Các bước thực hiện
1.  **Extract (Trích xuất):**
    *   Kết nối đến nguồn dữ liệu chứa bảng "Sale Order Detail" (ví dụ: Product ENV).
    *   Chọn các cột cần thiết cho việc phân tích, ví dụ: \`CreatedOn\`, \`Product Group\`, \`City\`, \`Total Amount (No VAT)\`. Việc chỉ chọn các cột cần thiết giúp cải thiện hiệu suất.

2.  **Transform (Chuyển đổi):**
    *   **Tạo cột Period:** Từ cột \`CreatedOn\`, tạo ra các cột mới để phân tích theo thời gian, ví dụ:
        *   **Tháng:** Dùng chức năng "Date" -> "Month" -> "Name of Month".
        *   **Tuần:** Dùng chức năng "Date" -> "Week" -> "Week of Year".
    *   **Group By (Nhóm theo):** Đây là bước quan trọng để tổng hợp dữ liệu.
        *   Sử dụng chức năng "Group By" trên tab "Transform".
        *   **Group by:** Chọn các cột chiều (dimension) bạn muốn phân tích, ví dụ: "Nhóm SP", "Tỉnh thành", "Period" (tháng/tuần).
        *   **New column name:** Đặt tên cho các cột giá trị mới, ví dụ: "Số đơn hàng", "Doanh thu".
        *   **Operation:** Chọn phép tính tổng hợp, ví dụ: "Count Rows" để đếm số đơn hàng, "Sum" để tính tổng doanh thu.
        *   **Column:** Chọn cột để thực hiện phép tính (ví dụ: Sum trên cột \`Total Amount\`).

3.  **Load (Tải):**
    *   Sau khi chuyển đổi, bạn sẽ có một bảng mới với dữ liệu đã được tổng hợp (ví dụ: mỗi hàng là tổng doanh thu của một nhóm sản phẩm, tại một tỉnh thành, trong một tháng cụ thể).
    *   Đặt tên cho bảng này là "Aggregated Data" và tải nó vào mô hình dữ liệu của Power BI. Bảng này nhỏ gọn và tối ưu hơn cho việc tạo báo cáo.
  `,
  'pbi-report-agg': `
## Tạo report từ Aggregated data
Sau khi đã có bảng dữ liệu tổng hợp (Aggregated Data), việc xây dựng báo cáo tương tác trở nên rất nhanh chóng và hiệu quả.

### Các loại Visualizations (Trực quan hóa) phổ biến
*   **Slicer:**
    *   **Công dụng:** Slicer là một bộ lọc trực quan trên trang báo cáo, cho phép người dùng dễ dàng lọc toàn bộ báo cáo theo một hoặc nhiều giá trị cụ thể (ví dụ: lọc theo "Nhóm SP" hoặc "Tỉnh thành").
    *   **Cách tạo:** Kéo cột bạn muốn dùng để lọc vào canvas và chuyển loại visual thành "Slicer".

*   **Column chart (Biểu đồ cột):**
    *   **Công dụng:** Rất tốt để so sánh giá trị giữa các danh mục khác nhau hoặc xem xu hướng theo thời gian.
    *   **Cách tạo:**
        *   **Axis (Trục):** Kéo cột chiều vào đây (ví dụ: "Period" - tháng/tuần).
        *   **Values (Giá trị):** Kéo cột số liệu vào đây (ví dụ: "Value" - Doanh thu).

*   **Doughnut chart (Biểu đồ vành khuyên):**
    *   **Công dụng:** Hiển thị tỷ lệ phần trăm của các phần trong một tổng thể. Rất hữu ích để xem sự đóng góp của từng danh mục.
    *   **Cách tạo:**
        *   **Legend (Chú giải):** Kéo cột chiều vào đây (ví dụ: "Tỉnh thành" hoặc "Nhóm SP").
        *   **Values (Giá trị):** Kéo cột số liệu vào đây (ví dụ: "Value" - Doanh thu).

*   **Table (Bảng):**
    *   **Công dụng:** Hiển thị dữ liệu chi tiết dưới dạng bảng, cung cấp thông tin chính xác.
    *   **Cách tạo:** Kéo các cột chiều ("Entity") và số liệu ("Value") vào vùng "Columns".

### Xây dựng báo cáo
Kết hợp các visual trên vào một trang báo cáo. Khi người dùng chọn một giá trị trong Slicer (ví dụ: chọn một tỉnh), tất cả các biểu đồ khác trên trang sẽ tự động được lọc lại để chỉ hiển thị dữ liệu của tỉnh đó.
  `,
  'pbi-report-detail': `
## Tạo report Detail data (Đơn bán chi tiết)
Báo cáo chi tiết cung cấp cái nhìn sâu hơn về các giao dịch riêng lẻ, thường được sử dụng để tra cứu hoặc kiểm tra thông tin.

### Kịch bản: Bảng chi tiết đơn bán với số lượng lũy kế
*   **Mục tiêu:** Tạo một bảng hiển thị danh sách các đơn bán chi tiết từ Product ENV và thêm một cột tính toán lũy kế số lượng bán theo thời gian.

### Tính toán lũy kế trong Power Query
Việc tính toán lũy kế (running total) có thể được thực hiện trực tiếp trong Power Query trước khi tải dữ liệu vào mô hình.
1.  **Sắp xếp dữ liệu:** Bước đầu tiên và quan trọng nhất là phải sắp xếp bảng theo cột thời gian (\`createdOn\`) theo thứ tự tăng dần. Điều này đảm bảo việc tính toán lũy kế diễn ra đúng trình tự.
2.  **Thêm cột Index:** Thêm một cột chỉ mục (Index Column) bắt đầu từ 0 hoặc 1. Cột này sẽ giúp trong việc tính toán.
3.  **Thêm cột tùy chỉnh (Custom Column):**
    *   Tạo một cột tùy chỉnh mới, đặt tên là "Cumulative Quantity".
    *   Sử dụng công thức Power Query M để tính tổng. Công thức sẽ giống như sau:
        \`\`\`m
        List.Sum(List.FirstN(#"Tên Bước Trước"[Số lượng DH], [Index] + 1))
        \`\`\`
        *   **Giải thích:** Đối với mỗi hàng, công thức này sẽ lấy danh sách các giá trị trong cột "Số lượng DH" từ hàng đầu tiên cho đến hàng hiện tại (dựa vào cột Index), sau đó tính tổng của chúng.

### Xây dựng Báo cáo
*   Sau khi đã có cột "Cumulative Quantity" trong Power Query và tải vào mô hình, bạn có thể tạo một visual "Table".
*   Kéo các cột chi tiết như "Mã DH", "Sản phẩm", "Đơn vị DH", "Số lượng DH" và cột "Cumulative Quantity" vừa tạo vào bảng.
*   Báo cáo này sẽ hiển thị chi tiết từng đơn hàng và cho thấy số lượng bán được tích lũy theo thời gian như thế nào.
  `,
  'pbi-margin-calc': `
## Sử dụng Dataflow Gen1 tính Margin (%)
Dataflow Gen1 cho phép bạn thực hiện các phép biến đổi dữ liệu phức tạp và ghi kết quả ra một đích đến (destination), giúp tăng cường khả năng của Power BI.

### Kịch bản: Tính toán Margin (Tỷ suất lợi nhuận)
*   **Mục tiêu:** Tính toán tỷ suất lợi nhuận cho từng sản phẩm bằng cách so sánh giá bán trung bình và giá mua trung bình. Việc tính giá trung bình có trọng số là rất quan trọng để có kết quả chính xác.

### Các bước ETL trong Dataflow
1.  **Extract:**
    *   Tạo hai truy vấn riêng biệt: một cho "Sale Order Details" và một cho "Buy Order Details".
    *   Trong mỗi truy vấn, chỉ chọn các cột cần thiết: "Sản phẩm", "Số lượng quy đổi", "Tổng tiền không VAT", "createdOn".
    *   Áp dụng bộ lọc cần thiết (ví dụ: \`createdOn > '2025-1-1'\` và \`status = Active\`).

2.  **Transform:**
    *   **Tính giá đơn vị (Gia_DVC):** Trong cả hai truy vấn, tạo một cột tùy chỉnh mới để tính giá đơn vị: \`Gia_DVC = Tổng tiền không VAT / Số lượng quy đổi\`.
    *   **Loại bỏ dữ liệu bất thường:** Để tránh các sai số lớn, bạn có thể lọc ra các giá trị ngoại lai. Một cách là tính toán phân vị (Percentile) thứ 20 và 80 của cột "Gia_DVC" và chỉ giữ lại các hàng có giá nằm trong khoảng này.
    *   **Tính giá mua/bán đại diện (Bình quân gia quyền):**
        *   Đây là bước quan trọng nhất. Không dùng phép tính trung bình đơn giản (\`Average\`).
        *   Nhóm (Group By) dữ liệu theo "Sản phẩm".
        *   Tạo hai cột tổng hợp: một để tính tổng "Tổng tiền không VAT" và một để tính tổng "Số lượng quy đổi".
        *   Tạo một cột tùy chỉnh mới để tính bình quân gia quyền: \`Giá đại diện = Tổng tiền / Tổng số lượng\`. Thực hiện việc này cho cả truy vấn mua và bán.
    *   **Join hai truy vấn:** Sau khi có bảng giá mua đại diện và giá bán đại diện cho từng sản phẩm, hợp nhất (Merge/Join) hai bảng này lại với nhau dựa trên cột "Sản phẩm".
    *   **Tính Margin:** Tạo một cột tùy chỉnh cuối cùng để tính Margin:
        \`Margin = (Giá bán đại diện - Giá mua đại diện) / Giá bán đại diện\`. Định dạng cột này dưới dạng phần trăm.

3.  **Load:**
    *   Bảng kết quả cuối cùng sẽ chứa các cột: "Sản phẩm", "Giá mua đại điện", "Giá bán đại diện", "Margin(%)".
    *   Cấu hình dataflow để tải (load) bảng này vào mô hình dữ liệu.
  `,
  'pbi-report-margin': `
## Tạo report Margin
Báo cáo này giúp các nhà quản lý phân tích tỷ suất lợi nhuận của từng sản phẩm và đưa ra các quyết định kinh doanh.

### Thiết kế báo cáo
Báo cáo này thường bao gồm các thành phần cho phép phân tích sâu, từ tổng quan đến chi tiết.
*   **Slicer (Bộ lọc):**
    *   Đặt một Slicer cho cột "Sản phẩm". Điều này cho phép người dùng chọn một hoặc nhiều sản phẩm cụ thể để phân tích.

*   **Table detail: margin (Bảng chi tiết margin):**
    *   Đây là visual chính. Tạo một visual "Table".
    *   Kéo các cột từ bảng Margin đã tính toán ở bước trước vào: "Sản phẩm", "Giá mua đại diện", "Giá bán đại diện", "Margin(%)".
    *   Áp dụng định dạng có điều kiện (Conditional Formatting) cho cột "Margin(%)" để làm nổi bật các giá trị cao (màu xanh) và thấp (màu đỏ).

*   **Table Sale Order Detail & Buy Order Detail:**
    *   Tạo hai visual "Table" riêng biệt.
    *   Một bảng hiển thị chi tiết các đơn hàng bán (Sale Order Detail).
    *   Bảng còn lại hiển thị chi tiết các đơn hàng mua (Buy Order Detail).

### Interaction (Tương tác giữa các visual)
*   Đây là tính năng mạnh mẽ của Power BI. Theo mặc định, các visual trên cùng một trang sẽ tương tác với nhau.
*   **Hành vi:** Khi người dùng chọn một sản phẩm trong Slicer hoặc một dòng trong bảng Margin, hai bảng chi tiết đơn hàng bán và đơn hàng mua sẽ tự động được lọc (auto load SOD, BOD) để chỉ hiển thị các giao dịch liên quan đến sản phẩm đó.
*   **Lợi ích:** Điều này cho phép người dùng nhanh chóng xem xét các giao dịch cụ thể đã góp phần tạo nên giá mua và giá bán trung bình của một sản phẩm, giúp họ hiểu rõ hơn về con số Margin.
  `,
};
