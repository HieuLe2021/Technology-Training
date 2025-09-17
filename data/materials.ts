export const TRAINING_MATERIALS: Record<string, string> = {
  'mda-intro': `
## Giới thiệu về Model-driven Apps
Model-driven Apps là một phương pháp xây dựng ứng dụng trong Power Apps, tập trung vào việc sử dụng mô hình dữ liệu có sẵn trong Microsoft Dataverse để nhanh chóng tạo ra các ứng dụng nghiệp vụ phức tạp. Khác với Canvas Apps nơi bạn toàn quyền kiểm soát giao diện, Model-driven Apps tự động tạo ra giao diện người dùng dựa trên cấu trúc dữ liệu của bạn.

### Các khái niệm cốt lõi
*   **Dataverse:** Là nền tảng dữ liệu cốt lõi, nơi bạn định nghĩa các bảng (tables), cột (columns), và mối quan hệ (relationships) để lưu trữ dữ liệu cho ứng dụng. Nó cung cấp một mô hình dữ liệu an toàn và có thể mở rộng.
*   **Thành phần (Components):** Giao diện của Model-driven App được tạo thành từ các thành phần như Bảng (Tables), Biểu mẫu (Forms), Chế độ xem (Views), Biểu đồ (Charts), và Bảng điều khiển (Dashboards).
*   **Tự động tạo giao diện (UI Generation):** Power Apps tự động tạo ra một giao diện người dùng (UI) đáp ứng (responsive), hoạt động tốt trên cả trình duyệt web và thiết bị di động. Giao diện này nhất quán và dễ sử dụng, giúp người dùng tập trung vào dữ liệu và quy trình nghiệp vụ.

### So sánh Model-driven Apps và Canvas Apps
| Tiêu chí | Model-driven Apps | Canvas Apps |
|---|---|---|
| **Điểm bắt đầu** | Mô hình dữ liệu (Data-first) | Giao diện người dùng (UI-first) |
| **Kiểm soát UI** | Ít, giao diện được tự động tạo | Hoàn toàn, thiết kế từng pixel |
| **Nguồn dữ liệu** | Chủ yếu là Dataverse | Hàng trăm connectors |
| **Đối tượng** | Ứng dụng quy trình nghiệp vụ phức tạp | Ứng dụng tập trung vào tác vụ cụ thể |
| **Responsive** | Mặc định | Cần cấu hình thủ công |

### Vòng đời phát triển
1.  **Lập mô hình dữ liệu (Model Business Data):** Xác định các bảng, cột và mối quan hệ cần thiết trong Dataverse.
2.  **Định nghĩa quy trình (Define Business Processes):** Xây dựng các Business Process Flows, Business Rules để dẫn dắt người dùng.
3.  **Soạn thảo ứng dụng (Compose the App):** Sử dụng App Designer để chọn và cấu hình các thành phần (bảng, dashboard) và thiết lập điều hướng (Site Map).
4.  **Cấu hình bảo mật (Configure Security Roles):** Gán quyền truy cập cho người dùng để họ chỉ thấy và làm những gì được phép.
5.  **Triển khai và Lặp lại (Deploy & Iterate):** Chia sẻ ứng dụng và thu thập phản hồi để cải tiến.
  `,
  'mda-data-model': `
## Tạo Solution, Table, Form, View
Đây là những khối xây dựng cơ bản của một Model-driven App. Việc cấu trúc chúng đúng cách là rất quan trọng.

### Solutions (Giải pháp)
*   **Khái niệm:** Solution là một "container" để đóng gói tất cả các thành phần của ứng dụng. Luôn luôn làm việc trong một solution.
*   **Publisher (Nhà phát hành):** Mỗi solution được liên kết với một Publisher. Publisher chứa thông tin về nhà phát triển và một tiền tố (prefix) duy nhất cho tất cả các thành phần mới được tạo, giúp tránh xung đột tên.
*   **Các loại Solution:**
    *   **Unmanaged (Không được quản lý):** Dùng trong môi trường phát triển (DEV). Bạn có thể thêm, bớt, sửa đổi các thành phần một cách tự do.
    *   **Managed (Được quản lý):** Dùng để triển khai đến các môi trường khác (TEST, UAT, PROD). Các thành phần trong solution managed thường không thể chỉnh sửa trực tiếp, đảm bảo tính nhất quán và chỉ có thể được cập nhật bằng cách triển khai một phiên bản mới của solution.

### Tables (Bảng)
*   **Khái niệm:** Là nơi lưu trữ dữ liệu.
*   **Ownership (Quyền sở hữu):**
    *   **User or Team:** Các hàng dữ liệu thuộc sở hữu của một người dùng hoặc một nhóm. Loại này cho phép thiết lập các quyền bảo mật chi tiết (Create, Read, Write, Delete, Append, Append To, Assign, Share). Phù hợp cho dữ liệu cần phân quyền phức tạp như Khách hàng, Đơn hàng.
    *   **Organization:** Các hàng dữ liệu thuộc về toàn bộ tổ chức. Chỉ có hai cấp độ quyền: có hoặc không. Phù hợp cho dữ liệu tham chiếu như Danh mục sản phẩm, Tỉnh thành.

### Forms (Biểu mẫu)
*   **Khái niệm:** Giao diện để tương tác với một hàng dữ liệu.
*   **Các loại Form chính:**
    *   **Main Form:** Giao diện chính và đầy đủ nhất để xem và chỉnh sửa dữ liệu.
    *   **Quick Create Form:** Một form đơn giản để nhập nhanh dữ liệu cần thiết. Người dùng có thể truy cập từ nút "+" trên thanh điều hướng mà không cần rời khỏi màn hình hiện tại.
    *   **Quick View Form:** Hiển thị dữ liệu từ một bảng liên quan (lookup) ngay trên form của bảng khác. Ví dụ: hiển thị thông tin tóm tắt của Khách hàng ngay trên form Đơn hàng.
    *   **Card Form:** Được sử dụng trong các giao diện di động và một số view đặc biệt, hiển thị thông tin dưới dạng thẻ tóm tắt.

### Views (Chế độ xem)
*   **Khái niệm:** Một danh sách các hàng dữ liệu.
*   **Các loại View:**
    *   **Public Views:** Có sẵn cho tất cả người dùng.
    *   **System Views:** Các view đặc biệt do hệ thống quản lý, ví dụ: "Lookup View" (xác định các cột hiển thị khi tìm kiếm trong lookup), "Advanced Find View".
    *   **Personal Views:** View do người dùng tự tạo cho riêng mình.
  `,
  'mda-app-design': `
## Tạo và Cấu trúc App Model-driven
Sau khi đã có mô hình dữ liệu, bước tiếp theo là tập hợp các thành phần lại thành một ứng dụng hoàn chỉnh.

### App Designer
*   **Khái niệm:** Công cụ trực quan nơi bạn xây dựng Model-driven app, chọn các thành phần (tables, dashboards, business process flows) để đưa vào ứng dụng.
*   **Thực tiễn tốt nhất:** Chỉ bao gồm những thành phần thực sự cần thiết cho vai trò người dùng mục tiêu của ứng dụng. Một ứng dụng gọn gàng, tập trung sẽ dễ sử dụng hơn.

### Site Map (Sơ đồ trang)
*   **Khái niệm:** Site Map định nghĩa cấu trúc điều hướng (menu) bên trái của ứng dụng.
*   **Cấu trúc:**
    1.  **Area:** Cấp cao nhất, phân chia các khu vực chức năng lớn (ví dụ: Bán hàng, Kho).
    2.  **Group:** Nhóm các liên kết có liên quan lại với nhau (ví dụ: "Quản lý sản phẩm").
    3.  **Subarea:** Là một liên kết cụ thể.
*   **Các loại Subarea:**
    *   **Entity (Table):** Liên kết đến một view của một bảng (phổ biến nhất).
    *   **Dashboard:** Hiển thị một dashboard.
    *   **Web Resource:** Hiển thị một trang HTML tùy chỉnh.
    *   **URL:** Mở một liên kết web bên ngoài.
  `,
    'mda-relationships': `
## Các loại Relationships (Mối quan hệ)
Relationships định nghĩa cách các bảng liên kết với nhau trong Dataverse.

### One-to-Many (1:N) hay Many-to-One (N:1)
*   **Khái niệm:** Một hàng trong Bảng A có thể liên quan đến nhiều hàng trong Bảng B.
*   **Relationship Behaviors (Hành vi của mối quan hệ):** Đây là một khái niệm nâng cao và rất quan trọng, xác định các hành động sẽ tự động xảy ra (cascading) với các bản ghi con khi bản ghi cha thay đổi.
    *   **Parental:** Các hành động trên bản ghi cha sẽ áp dụng cho bản ghi con. Ví dụ: Xóa Khách hàng sẽ xóa tất cả Đơn hàng của họ. Chia sẻ Khách hàng cũng sẽ chia sẻ các Đơn hàng.
    *   **Referential:** Chỉ là một liên kết tham chiếu. Không có hành động nào tự động xảy ra. Nếu bạn xóa bản ghi cha, trường lookup ở bản ghi con sẽ bị xóa rỗng.
    *   **Referential, Restrict Delete:** Giống Referential, nhưng bạn sẽ không thể xóa bản ghi cha nếu nó vẫn còn các bản ghi con liên quan. Đây là lựa chọn an toàn nhất trong nhiều trường hợp.
    *   **Configurable Cascading:** Cho phép bạn tùy chỉnh hành vi cho từng hành động (Assign, Share, Delete, etc.).

### Many-to-Many (N:N)
*   **Khái niệm:** Một hàng trong Bảng A có thể liên quan đến nhiều hàng trong Bảng B và ngược lại.
*   **Native N:N vs. Manual N:N:**
    *   **Native N:N:** Dataverse tự động tạo một bảng trung gian ẩn. Bạn chỉ có thể liên kết hoặc hủy liên kết các bản ghi. Dễ thiết lập.
    *   **Manual N:N (Intersect Table):** Bạn tự tạo một bảng trung gian (ví dụ: Bảng "Đăng ký sự kiện" để nối "Học viên" và "Sự kiện"). Phương pháp này cho phép bạn thêm các cột thuộc tính vào chính mối quan hệ đó (ví dụ: "Ngày đăng ký", "Trạng thái tham dự").
  `,
  'mda-columns': `
## Làm việc với Cột Lookup, Calculated, và Rollup
Đây là các loại cột đặc biệt giúp tự động hóa và tạo ra các mối quan hệ trong dữ liệu.

### Lookup Columns (Cột tra cứu)
*   **Khái niệm:** Tạo ra một mối quan hệ N:1. Cho phép người dùng chọn một bản ghi từ một bảng liên quan.

### Calculated Columns (Cột tính toán)
*   **Khái niệm:** Sử dụng công thức để tính toán giá trị dựa trên các cột khác **trong cùng một hàng dữ liệu**.
*   **Giới hạn:**
    *   Không thể lấy dữ liệu từ các hàng liên quan (ví dụ: không thể lấy tên khách hàng từ lookup để tính toán).
    *   Phép tính được thực hiện đồng bộ khi dữ liệu được truy vấn.
    *   Không thể tự kích hoạt workflow hay plugin.

### Rollup Columns (Cột tổng hợp)
*   **Khái niệm:** Thực hiện một phép tính tổng hợp (SUM, COUNT, MIN, MAX, AVG) trên các **hàng con liên quan**.
*   **Giới hạn:**
    *   Dữ liệu **không được cập nhật theo thời gian thực**. Một công việc hệ thống (system job) chạy định kỳ (mặc định là mỗi giờ) để cập nhật giá trị. Bạn có thể bấm nút "Recalculate" để cập nhật thủ công.
    *   Chỉ có thể tổng hợp trên các mối quan hệ 1:N trực tiếp.
    *   Số lượng cột rollup trên mỗi bảng và mỗi tổ chức là có giới hạn.

### Choice / Choices Columns (Cột lựa chọn)
*   **Choice (Lựa chọn đơn):** Cho phép người dùng chọn một giá trị từ một danh sách được định nghĩa trước.
*   **Choices (Lựa chọn đa):** Cho phép người dùng chọn nhiều giá trị.
*   **Global vs. Local:**
    *   **Local Choice:** Danh sách lựa chọn chỉ tồn tại trong cột đó.
    *   **Global Choice:** Danh sách lựa chọn được định nghĩa một lần và có thể tái sử dụng trên nhiều cột và nhiều bảng khác nhau, đảm bảo tính nhất quán.
  `,
    'mda-business-rules': `
## Tạo Business Rules (Quy tắc nghiệp vụ)
Business Rules cung cấp một cách đơn giản, không cần code để triển khai các logic nghiệp vụ phổ biến trên form.

### Các thành phần của một Business Rule
*   **Condition (Điều kiện):** Xác định khi nào rule sẽ được áp dụng.
*   **Actions (Hành động):** Các hành động sẽ được thực hiện nếu điều kiện đúng.
*   **Scope (Phạm vi):** Entity, All Forms, hoặc một Form cụ thể.

### Ví dụ nâng cao
*   **Kịch bản:** Trên form "Cơ hội", nếu "Xác suất" (Probability) lớn hơn 70%, thì tự động đặt cột "Đánh giá" (Rating) thành "Hot", đồng thời ẩn cột "Lý do thất bại" và khóa cột "Ngân sách ước tính". Nếu không, hiển thị cột "Lý do thất bại".
*   **Cách thực hiện:**
    1.  Tạo một Business Rule.
    2.  **Condition:** \`If 'Probability' > 70\`
    3.  **Action (if true):**
        *   \`Set 'Rating' value to 'Hot'\`
        *   \`Set visibility of 'Failure Reason' to No\`
        *   \`Lock 'Estimated Budget' field\`
    4.  **Action (if false - Else branch):**
        *   \`Set visibility of 'Failure Reason' to Yes\`

### Giới hạn
*   Không thể thực hiện các hành động trên các bảng liên quan.
*   Không thể thực hiện các phép tính phức tạp hoặc lặp (loops).
*   Không thể gọi API hoặc tích hợp với hệ thống bên ngoài. (Sử dụng JavaScript hoặc Power Automate cho các nhu cầu này).
  `,
  'mda-keys': `
## Định nghĩa Alternate Keys (Khóa thay thế)
Alternate Key cho phép bạn định nghĩa một hoặc nhiều cột mà sự kết hợp giá trị của chúng phải là duy nhất, dùng làm định danh nghiệp vụ thay cho GUID.

### Mục đích chính
1.  **Chống trùng lặp dữ liệu:** Ngăn người dùng tạo ra các bản ghi có cùng mã định danh nghiệp vụ.
2.  **Tích hợp dữ liệu:** Cực kỳ quan trọng khi làm việc với Web API.

### Ví dụ sử dụng trong tích hợp
Giả sử bạn có một bảng "Sản phẩm" với một Alternate Key trên cột "Mã sản phẩm" (\`productcode\`). Khi bạn muốn cập nhật thông tin một sản phẩm từ hệ thống bên ngoài, thay vì phải truy vấn để tìm GUID của sản phẩm trước, bạn có thể gửi một yêu cầu \`PATCH\` trực tiếp bằng Alternate Key:

\`\`\`http
PATCH [Organization URI]/api/data/v9.2/products(productcode='PROD-00123')
\`\`\`
\`\`\`json
{
  "price": 150.00
}
\`\`\`
Hệ thống sẽ tự động tìm đúng sản phẩm có mã 'PROD-00123' và cập nhật giá. Điều này làm cho việc tích hợp trở nên đơn giản và hiệu quả hơn rất nhiều.
  `,
  'mda-charts': `
## Tạo và sử dụng Charts (Biểu đồ)
Charts trong Model-driven Apps cung cấp một cách trực quan để xem và phân tích dữ liệu từ các View.

### Tạo một Chart
1.  **Mở trình thiết kế Chart:** Từ một View, mở khu vực Charts và chọn "New Chart".
2.  **Chọn dữ liệu:**
    *   **Series (Chuỗi):** Chọn cột chứa giá trị số bạn muốn đo lường (ví dụ: "Doanh thu").
    *   **Category (Danh mục):** Chọn cột mà bạn muốn nhóm dữ liệu theo (trục ngang, ví dụ: "Nhân viên bán hàng").
    *   **Legend (Chú giải - cho biểu đồ nhiều chuỗi):** Thêm một chiều thứ hai để phân tách dữ liệu (ví dụ: xem doanh thu theo nhân viên bán hàng, phân tách theo "Trạng thái").

### Các tính năng nâng cao
*   **Drill Down (Xem chi tiết):** Bạn có thể cấu hình một biểu đồ để cho phép người dùng bấm vào một phần của biểu đồ (ví dụ: một cột đại diện cho một nhân viên) để xem dữ liệu chi tiết hơn (ví dụ: doanh thu của nhân viên đó theo từng tháng). Điều này được thực hiện bằng cách thêm nhiều trường vào trục Category.
*   **Tương tác trên Dashboard:** Khi bạn đặt nhiều biểu đồ và view trên cùng một dashboard, chúng có thể tương tác với nhau.
    *   Bật "Visual Filters" trên dashboard.
    *   Khi người dùng bấm vào một phần của biểu đồ (ví dụ: một lát cắt trên biểu đồ tròn), các visual khác trên dashboard sẽ tự động được lọc để chỉ hiển thị dữ liệu liên quan đến phần đã chọn.
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
  'ca-common-functions': `
## Các hàm Power Fx thông dụng
Power Fx là ngôn ngữ công thức low-code cung cấp sức mạnh cho Canvas Apps. Nắm vững các hàm thông dụng là chìa khóa để xây dựng các ứng dụng mạnh mẽ.

### Các hàm xử lý dữ liệu
*   **\`Filter(Source, Formula)\`**: Trả về một bảng chứa các bản ghi từ \`Source\` thỏa mãn \`Formula\`.
    *   **Ví dụ**: \`Filter(Products, Price > 100)\` trả về tất cả sản phẩm có giá lớn hơn 100.
*   **\`Search(Source, SearchText, Column)\`**: Tìm kiếm một chuỗi văn bản trong một hoặc nhiều cột. Không thể ủy thác (non-delegable).
    *   **Ví dụ**: \`Search(Customers, TextInput1.Text, "Name", "Address")\` tìm kiếm trong cột Name và Address.
*   **\`LookUp(Source, Formula)\`**: Tìm và trả về bản ghi (record) đầu tiên từ \`Source\` thỏa mãn \`Formula\`.
    *   **Ví dụ**: \`LookUp(Products, ProductID = 123)\` trả về thông tin chi tiết của sản phẩm có ID là 123.
*   **\`Patch(Source, BaseRecord, ChangeRecord)\`**: Tạo mới hoặc sửa đổi một hoặc nhiều bản ghi trong \`Source\`.
    *   **Ví dụ tạo mới**: \`Patch(Products, Defaults(Products), { Name: "New Product", Price: 50 })\`.
    *   **Ví dụ cập nhật**: \`Patch(Products, LookUp(Products, ID = 1), { Price: 150 })\`.
*   **\`SubmitForm(FormName)\`**: Lưu dữ liệu từ một control Form vào nguồn dữ liệu.

### Các hàm về Collection (Bộ sưu tập)
Collections là các bảng dữ liệu được lưu trữ tạm thời trong bộ nhớ của ứng dụng.
*   **\`Collect(CollectionName, Item)\`**: Thêm một bản ghi vào một collection. Nếu collection chưa tồn tại, nó sẽ được tạo.
*   **\`ClearCollect(CollectionName, Items)\`**: Xóa tất cả các bản ghi của một collection và sau đó thêm một tập hợp các bản ghi mới. Rất hữu ích để làm mới dữ liệu.
*   **\`Clear(CollectionName)\`**: Xóa tất cả các bản ghi của một collection.

### Điều hướng và biến
*   **\`Navigate(ScreenName, Transition)\`**: Chuyển hướng người dùng đến một màn hình khác.
*   **\`Back()\`**: Quay lại màn hình trước đó.
*   **\`Set(VariableName, Value)\`**: Tạo hoặc cập nhật một biến toàn cục (global variable), có thể truy cập từ bất kỳ màn hình nào trong ứng dụng.
*   **\`UpdateContext({ ContextVariableName: Value })\`**: Tạo hoặc cập nhật một biến ngữ cảnh (context variable), chỉ có thể truy cập được trên màn hình hiện tại.

<div class="my-6">
    <h3 class="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">Video tham khảo</h3>
    <a href="https://www.youtube.com/watch?v=m_hC7gV6A9c" target="_blank" rel="noopener noreferrer" class="flex items-center p-4 bg-gray-100 dark:bg-gray-700/50 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600/50 transition-colors shadow-sm">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-red-600 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg>
        <div class="ml-4">
            <p class="font-semibold text-blue-600 dark:text-blue-400">Top 10 Power Apps Functions</p>
            <p class="text-sm text-gray-600 dark:text-gray-400">Video tổng hợp các hàm Power Fx quan trọng nhất cho người mới bắt đầu.</p>
        </div>
    </a>
</div>
  `,
  'ca-performance': `
## Tối ưu hóa hiệu năng trong Canvas Apps
Một ứng dụng hoạt động chậm chạp sẽ ảnh hưởng tiêu cực đến trải nghiệm người dùng. Dưới đây là các kỹ thuật quan trọng để tối ưu hóa hiệu năng cho Canvas App của bạn.

### 1. Hiểu và sử dụng Delegation (Ủy thác)
*   **Khái niệm**: Delegation là việc yêu cầu nguồn dữ liệu (như Dataverse, SQL Server) tự thực hiện các tác vụ xử lý dữ liệu (lọc, sắp xếp) thay vì tải toàn bộ dữ liệu về ứng dụng rồi mới xử lý. Đây là yếu tố quan trọng nhất ảnh hưởng đến hiệu năng khi làm việc với tập dữ liệu lớn.
*   **Giới hạn**: Power Apps có một giới hạn số lượng bản ghi có thể xử lý cục bộ (mặc định là 500, tối đa 2000). Nếu một công thức không thể ủy thác, nó sẽ chỉ hoạt động trên tập dữ liệu giới hạn này, dẫn đến kết quả không chính xác hoặc thiếu sót.
*   **Cách kiểm tra**: Tìm các cảnh báo "dấu chấm xanh" (blue dot) trong công thức của bạn. Power Apps sẽ cảnh báo nếu một phần của công thức không thể ủy thác.
*   **Mẹo**: Luôn cố gắng sử dụng các hàm và toán tử có thể ủy thác (delegable functions) khi có thể.

### 2. Tối ưu hóa thuộc tính App.OnStart
*   Thuộc tính \`App.OnStart\` chạy một lần khi ứng dụng khởi động. Việc đặt quá nhiều logic nặng, đặc biệt là các lệnh \`ClearCollect\` lớn, ở đây sẽ làm tăng đáng kể thời gian tải ứng dụng.
*   **Giải pháp**:
    *   Chỉ tải những dữ liệu thực sự cần thiết khi khởi động.
    *   Sử dụng hàm \`Concurrent()\` để chạy nhiều công thức cùng một lúc, rút ngắn thời gian chờ.
        *   **Ví dụ**: \`Concurrent(ClearCollect(colUsers, 'Users'), ClearCollect(colProducts, 'Products'))\`
    *   Cân nhắc tải dữ liệu theo yêu cầu trên các màn hình cụ thể thay vì tải tất cả ngay từ đầu.

### 3. Giảm số lượng Controls và tối ưu hóa Galleries
*   Mỗi control trên màn hình đều làm tăng thời gian tải. Hãy giữ cho giao diện đơn giản và chỉ hiển thị những gì cần thiết.
*   Đối với Galleries, tránh đặt quá nhiều control phức tạp bên trong mỗi item. Sử dụng các layout gallery nhẹ nhàng.
*   Sử dụng "Loading spinners" (biểu tượng đang tải) để thông báo cho người dùng biết ứng dụng đang xử lý dữ liệu, cải thiện trải nghiệm chờ đợi.

### 4. Sử dụng Collections một cách thông minh
*   Tải dữ liệu từ nguồn vào một collection (sử dụng \`ClearCollect\`) một lần khi màn hình được tải (trong thuộc tính \`OnVisible\`), sau đó cho các control trong màn hình đó sử dụng dữ liệu từ collection.
*   Việc này tránh được việc gọi đến nguồn dữ liệu nhiều lần, giúp ứng dụng phản hồi nhanh hơn khi người dùng tương tác.

<div class="my-6">
    <h3 class="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">Video tham khảo</h3>
    <a href="https://www.youtube.com/watch?v=uB8s_23nL1o" target="_blank" rel="noopener noreferrer" class="flex items-center p-4 bg-gray-100 dark:bg-gray-700/50 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600/50 transition-colors shadow-sm">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-red-600 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg>
        <div class="ml-4">
            <p class="font-semibold text-blue-600 dark:text-blue-400">Power Apps Performance Best Practices</p>
            <p class="text-sm text-gray-600 dark:text-gray-400">Hướng dẫn chi tiết về các phương pháp hay nhất để tối ưu hiệu năng Canvas App.</p>
        </div>
    </a>
</div>
  `,
  'ca-tips-tricks': `
## Mẹo và thủ thuật trong Canvas Apps
Dưới đây là một số mẹo và kỹ thuật từ cơ bản đến nâng cao để giúp bạn xây dựng ứng dụng tốt hơn và nhanh hơn.

### Mẹo cơ bản
*   **Sử dụng Components (Thành phần)**: Đối với các yếu tố giao diện người dùng mà bạn sử dụng lặp đi lặp lại (như header, footer, menu), hãy tạo chúng thành một component. Điều này giúp bạn dễ dàng quản lý và cập nhật; chỉ cần sửa component là tất cả các nơi sử dụng nó sẽ được cập nhật theo.
*   **Đặt tên có ý nghĩa**: Đặt tên cho các screens, controls và variables một cách rõ ràng và nhất quán (ví dụ: \`scrHome\`, \`lblTitle\`, \`galProducts\`). Điều này giúp bạn và những người khác dễ dàng đọc và bảo trì công thức.
*   **Sử dụng Global Variables vs. Context Variables**:
    *   Dùng biến toàn cục (\`Set()\`) cho những giá trị cần được truy cập trên toàn bộ ứng dụng (ví dụ: thông tin người dùng đăng nhập).
    *   Dùng biến ngữ cảnh (\`UpdateContext()\`) cho những giá trị chỉ cần thiết trong một màn hình duy nhất.

### Thủ thuật nâng cao
*   **Tạo Layout đáp ứng (Responsive Layout)**:
    *   Sử dụng các thuộc tính như \`Parent.Width\`, \`Parent.Height\`, \`App.Width\`, và \`App.Height\` trong các công thức cho thuộc tính \`X\`, \`Y\`, \`Width\`, \`Height\` của control.
    *   Sử dụng các control container (Layout containers) để tự động sắp xếp các control bên trong khi kích thước màn hình thay đổi.
*   **Cập nhật hàng loạt (Bulk Updates)**:
    *   Kết hợp hàm \`ForAll()\` và \`Patch()\` để cập nhật nhiều bản ghi cùng một lúc. Điều này hiệu quả hơn nhiều so với việc cập nhật từng bản ghi trong một vòng lặp.
    *   **Ví dụ**: \`ForAll(galProducts.AllItems, Patch(Products, ThisRecord, { Price: ThisRecord.Price * 1.1 }))\`
*   **Xử lý lỗi (Error Handling)**:
    *   Sử dụng các hàm \`IfError()\`, \`IsError()\` để kiểm tra và xử lý các lỗi có thể xảy ra trong công thức của bạn (ví dụ: lỗi chia cho 0, lỗi kết nối mạng).
    *   Điều này cho phép bạn hiển thị các thông báo lỗi thân thiện cho người dùng thay vì để ứng dụng bị treo.
*   **Component Libraries**: Tạo một thư viện component để chia sẻ và tái sử dụng các component của bạn trên nhiều ứng dụng khác nhau trong cùng một môi trường.

<div class="my-6">
    <h3 class="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">Video tham khảo</h3>
    <a href="https://www.youtube.com/watch?v=sTr3a2g33p4" target="_blank" rel="noopener noreferrer" class="flex items-center p-4 bg-gray-100 dark:bg-gray-700/50 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600/50 transition-colors shadow-sm">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-red-600 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg>
        <div class="ml-4">
            <p class="font-semibold text-blue-600 dark:text-blue-400">Power Apps Tips and Tricks</p>
            <p class="text-sm text-gray-600 dark:text-gray-400">Khám phá các mẹo và thủ thuật giúp bạn làm việc hiệu quả hơn với Canvas Apps.</p>
        </div>
    </a>
</div>
  `,
  'pa-intro': `
## Giới thiệu về Power Automate
Power Automate là một dịch vụ dựa trên đám mây cho phép bạn tạo ra các luồng công việc tự động (workflows) để tích hợp các ứng dụng và dịch vụ khác nhau. Nó giúp tự động hóa các tác vụ lặp đi lặp lại trong kinh doanh, tiết kiệm thời gian và giảm thiểu sai sót do con người.

### Các thành phần chính
*   **Triggers (Trình kích hoạt):** Là sự kiện bắt đầu một flow. Mỗi flow phải có một và chỉ một trigger. Ví dụ: "Khi một email mới đến" hoặc "Khi một hàng được tạo trong Dataverse".
*   **Actions (Hành động):** Là các tác vụ mà flow thực hiện sau khi được kích hoạt. Một flow có thể có nhiều actions. Ví dụ: "Gửi một email" hoặc "Tạo một mục trong SharePoint List".
*   **Connectors (Trình kết nối):** Là cầu nối cho phép Power Automate giao tiếp với các dịch vụ khác. Có hàng trăm connectors có sẵn cho các dịch vụ của Microsoft và bên thứ ba, như Office 365, Dataverse, Salesforce, Twitter, v.v.

### Các loại Cloud Flows phổ biến
1.  **Automated cloud flow (Flow tự động):** Tự động kích hoạt bởi một sự kiện. Ví dụ: Tự động lưu tệp đính kèm trong email vào OneDrive.
2.  **Instant cloud flow (Flow tức thì):** Kích hoạt thủ công. Bạn có thể chạy nó từ một nút bấm trong ứng dụng Power Apps, trong SharePoint, hoặc từ ứng dụng di động Power Automate.
3.  **Scheduled cloud flow (Flow theo lịch):** Chạy vào một thời điểm cụ thể theo lịch trình bạn đặt ra. Ví dụ: Gửi báo cáo hàng ngày vào 8 giờ sáng.

Ngoài ra còn có Desktop flows (để tự động hóa trên máy tính) và Business process flows (để dẫn dắt người dùng qua một quy trình nghiệp vụ).
  `,
  'pa-triggers': `
## Sử dụng Triggers (Automated Flows)
Automated Cloud Flow tự động hóa các quy trình dựa trên các sự kiện xảy ra trong dữ liệu của bạn, giúp loại bỏ các tác vụ thủ công và đảm bảo tính nhất quán.

### Dataverse Triggers
*   **Khái niệm:** Đây là các sự kiện kích hoạt phổ biến khi làm việc với Dataverse. Trigger **"When a row is added, modified or deleted"** là một trong những trigger mạnh mẽ nhất.
*   **Cấu hình:** Khi sử dụng trigger này, bạn cần chỉ định:
    1.  **Change type:** Sự kiện nào sẽ kích hoạt flow (ví dụ: \`Added\` - khi một hàng mới được tạo).
    2.  **Table name:** Bảng nào cần theo dõi (ví dụ: "Nhập kho" hoặc "Xuất kho").
    3.  **Scope:** Phạm vi của trigger (thường là "Organization" để áp dụng cho toàn bộ tổ chức).
*   **Filtering Columns:** Để tối ưu hóa, bạn có thể chỉ định trigger chỉ chạy khi một số cột cụ thể thay đổi, tránh flow chạy không cần thiết.

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
## Tạo Flow theo lịch (Scheduled Flows)
Scheduled Cloud Flow cho phép bạn tự động hóa các tác vụ lặp đi lặp lại theo một lịch trình cố định (hàng giờ, hàng ngày, hàng tuần, v.v.).

### Recurrence Trigger (Trigger lặp lại)
*   **Cấu hình:** Bạn có thể thiết lập trigger này để chạy:
    *   **Interval:** Tần suất (ví dụ: mỗi \`1\` giờ, mỗi \`2\` ngày).
    *   **Frequency:** Đơn vị thời gian (Giây, Phút, Giờ, Ngày, Tuần, Tháng).
    *   **Time zone:** Múi giờ để chạy.
    *   **Start time:** Thời điểm bắt đầu chạy.

### Kịch bản: Tính và gửi báo cáo doanh số
*   **Mục tiêu:** Mỗi ngày vào lúc 8 giờ sáng, tự động tính tổng doanh số xuất kho của ngày hôm trước và gửi email báo cáo.
*   **Các bước trong Flow:**
    1.  **Trigger:** Dùng \`Recurrence\`, đặt lịch chạy hàng ngày vào 8:00 AM.
    2.  **Get past time:** Sử dụng action "Get past time" hoặc biểu thức \`subtractFromTime()\` để xác định khoảng thời gian của ngày hôm trước.
    3.  **List rows:** Lấy tất cả các bản ghi từ bảng "Xuất kho" có ngày tạo nằm trong khoảng thời gian đã xác định ở bước 2. Sử dụng **Filter Query** để lọc dữ liệu hiệu quả ngay tại nguồn.
    4.  **Initialize variable:** Tạo một biến kiểu \`Float\` hoặc \`Integer\` để lưu tổng doanh thu, đặt giá trị ban đầu là 0.
    5.  **Apply to each:** Lặp qua danh sách các bản ghi lấy được ở bước 3.
    6.  **Increment variable:** Trong vòng lặp, cộng giá trị của cột "Thành tiền" của mỗi bản ghi vào biến tổng doanh thu.
    7.  **Send an email:** Sau khi vòng lặp kết thúc, sử dụng action \`Send an email (V2)\` của trình kết nối Office 365 Outlook.
        *   **To:** Nhập địa chỉ email của người nhận.
        *   **Subject:** Tiêu đề email, ví dụ: "Báo cáo doanh số ngày [ngày]".
        *   **Body:** Nội dung email, chèn giá trị của biến tổng doanh thu vào.
  `,
  'pa-expressions': `
## Làm chủ Biểu thức (Expressions)
Biểu thức là một phần không thể thiếu để xây dựng các flow nâng cao. Chúng cho phép bạn thao tác dữ liệu, thực hiện các phép tính và đưa ra các quyết định logic. Các biểu thức trong Power Automate sử dụng ngôn ngữ Workflow Definition Language (WDL).

### Các hàm thông dụng
*   **Hàm xử lý chuỗi:**
    *   \`concat(text1, text2, ...)\`: Nối nhiều chuỗi lại với nhau.
        *   **Ví dụ:** \`concat('Hello', ' ', 'World')\` -> \`'Hello World'\`
    *   \`split(text, separator)\`: Tách một chuỗi thành một mảng dựa trên ký tự phân tách.
    *   \`replace(text, oldText, newText)\`: Thay thế một chuỗi con bằng một chuỗi mới.
*   **Hàm thời gian:**
    *   \`utcNow()\`: Lấy ngày giờ hiện tại theo múi giờ UTC.
    *   \`formatDateTime(timestamp, format)\`: Định dạng ngày giờ theo một chuỗi format cụ thể.
        *   **Ví dụ:** \`formatDateTime(utcNow(), 'dd/MM/yyyy')\` -> \`'01/04/2025'\`
    *   \`addDays(timestamp, days)\`: Thêm hoặc bớt số ngày vào một mốc thời gian.
*   **Hàm logic:**
    *   \`if(expression, valueIfTrue, valueIfFalse)\`: Trả về một giá trị dựa trên một điều kiện.
    *   \`equals(object1, object2)\`: Kiểm tra hai giá trị có bằng nhau không.
*   **Hàm chuyển đổi:**
    *   \`int(value)\`: Chuyển đổi một giá trị thành số nguyên.
    *   \`string(value)\`: Chuyển đổi một giá trị thành chuỗi.
*   **Lấy giá trị từ vòng lặp:**
    *   \`items('Apply_to_each')\`: Bên trong vòng lặp 'Apply to each', hàm này trả về mục hiện tại đang được xử lý.
  `,
  'pa-error-handling': `
## Xử lý lỗi nâng cao
Mặc định, một flow sẽ thất bại và dừng lại ngay khi một action gặp lỗi. Xử lý lỗi cho phép bạn xây dựng các flow mạnh mẽ hơn, có thể xử lý các tình huống không mong muốn một cách linh hoạt.

### 1. Configure run after
Đây là cơ chế cốt lõi để xử lý lỗi. Đối với mỗi action, bạn có thể định cấu hình để nó chạy dựa trên trạng thái của action trước đó.
*   \`is successful\`: (Mặc định) Chạy khi action trước thành công.
*   \`has failed\`: Chạy khi action trước thất bại.
*   \`is skipped\`: Chạy khi action trước bị bỏ qua.
*   \`has timed out\`: Chạy khi action trước vượt quá thời gian chờ.

Bằng cách kết hợp các trạng thái này, bạn có thể tạo các nhánh logic khác nhau để xử lý cả trường hợp thành công và thất bại.

### 2. Xây dựng khối Try-Catch-Finally
Đây là một mẫu thiết kế phổ biến để quản lý lỗi một cách có cấu trúc.
1.  **Scope 'Try':** Đặt tất cả các action có khả năng gây lỗi vào bên trong một control \`Scope\`. Đặt tên scope này là "Try".
2.  **Scope 'Catch':** Tạo một \`Scope\` khác song song với Scope "Try", đặt tên là "Catch". Bên trong Scope này, đặt các action bạn muốn thực hiện khi có lỗi (ví dụ: gửi email thông báo, ghi log lỗi).
3.  **Cấu hình 'Run After':** Thiết lập 'Configure run after' cho \`Scope\` "Catch" để nó chỉ chạy khi Scope "Try" \`has failed\`.
4.  **(Tùy chọn) Scope 'Finally':** Tạo một \`Scope\` thứ ba sau hai scope trên, đặt tên là "Finally". Cấu hình 'run after' cho nó để chạy khi Scope "Try" \`is successful\` VÀ khi Scope "Catch" \`is successful\` (hoặc khi cả hai failed/skipped). Điều này đảm bảo nó luôn chạy dù có lỗi hay không.

### 3. Action Terminate
Action \`Terminate\` cho phép bạn chủ động dừng flow tại một điểm bất kỳ và đặt trạng thái kết thúc cho nó (Succeeded, Failed, hoặc Canceled). Điều này rất hữu ích trong khối "Catch" để đánh dấu rằng flow đã thất bại sau khi xử lý lỗi.
  `,
  'pa-best-practices': `
## Mẹo và Tối ưu hóa hiệu năng
Xây dựng một flow không chỉ là làm cho nó hoạt động, mà còn làm cho nó hiệu quả, dễ đọc và dễ bảo trì.

### 1. Tối ưu hóa hiệu năng
*   **Lọc dữ liệu tại nguồn (Filter Early):**
    *   Trong các trigger và các action "Get items" (SharePoint) hoặc "List rows" (Dataverse), luôn sử dụng **OData Filter Query**.
    *   Điều này yêu cầu nguồn dữ liệu lọc trước khi gửi về cho flow, giảm đáng kể lượng dữ liệu cần xử lý và tăng tốc độ flow.
    *   **Xấu:** Lấy tất cả các mục rồi dùng action "Filter array".
    *   **Tốt:** \`statuscode eq 1\` trong Filter Query để chỉ lấy các mục đang hoạt động.
*   **Bật Concurrency Control:**
    *   Trong cài đặt của vòng lặp "Apply to each", bạn có thể bật \`Concurrency Control\` và tăng mức độ song song (Degree of Parallelism).
    *   Điều này cho phép flow xử lý nhiều mục trong mảng cùng một lúc thay vì tuần tự, giúp giảm đáng kể thời gian chạy đối với các tập dữ liệu lớn.
*   **Sử dụng action \`Select\` và \`Filter array\`:**
    *   Thay vì lặp (Apply to each) chỉ để lấy ra một vài thuộc tính từ một mảng đối tượng, hãy sử dụng action \`Select\`.
    *   Nó tạo ra một mảng mới chỉ chứa các thuộc tính bạn cần, hiệu quả hơn nhiều.

### 2. Tăng tính dễ đọc và bảo trì
*   **Đổi tên Actions:** Đặt tên có ý nghĩa cho các action của bạn. Thay vì "Get item 2", hãy đổi thành "Get Manager of Requester".
*   **Thêm ghi chú (Add a comment):** Sử dụng tính năng thêm ghi chú để giải thích các logic phức tạp hoặc lý do tại sao một action được cấu hình theo cách đó.
*   **Sử dụng Scopes:** Nhóm các hành động liên quan vào trong các control \`Scope\`. Điều này giúp flow của bạn gọn gàng hơn, có thể thu gọn các phần logic lại và dễ dàng theo dõi hơn.
*   **Khởi tạo biến ở đầu Flow:** Luôn sử dụng action "Initialize variable" ở phần đầu của flow cho tất cả các biến bạn sẽ sử dụng. Điều này làm cho flow dễ hiểu hơn.
  `,
  'wr-js': `
## Sử dụng JavaScript trong Form (Event onChange)
Web Resources cho phép bạn mở rộng khả năng của Model-driven Apps bằng cách sử dụng các công nghệ web như JavaScript, HTML, và CSS. Việc sử dụng JavaScript trên form giúp tạo ra các trải nghiệm người dùng động và thông minh hơn.

### JavaScript Web Resource
*   **Khái niệm:** Là một file .js mà bạn tải lên Power Apps. Sau đó, bạn có thể liên kết các hàm trong file này với các sự kiện trên form.

### Form Event Handlers (Trình xử lý sự kiện Form)
*   **Khái niệm:** Bạn có thể cấu hình để một hàm JavaScript được thực thi khi một sự kiện cụ thể xảy ra trên form, ví dụ như:
    *   \`OnLoad\`: Khi form được tải.
    *   \`OnSave\`: Khi form được lưu.
    *   \`OnChange\`: Khi giá trị của một cột cụ thể thay đổi.

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
  'pq-intro': `
## Giới thiệu Power Query & Ngôn ngữ M
Power Query là công cụ **ETL (Extract, Transform, Load)** mạnh mẽ của Microsoft, được tích hợp trong nhiều sản phẩm như Power BI, Excel, và Power Platform Dataflows. Nó cho phép bạn kết nối đến hàng trăm nguồn dữ liệu, làm sạch, định hình và chuyển đổi dữ liệu một cách trực quan trước khi tải vào để phân tích.

### Các khái niệm cốt lõi
*   **Queries (Truy vấn):** Mỗi kết nối và chuỗi các bước biến đổi dữ liệu được gọi là một Query.
*   **Applied Steps (Các bước đã áp dụng):** Power Query ghi lại mọi thao tác của bạn (lọc, xóa cột, đổi tên, v.v.) thành một danh sách các bước. Bạn có thể xem lại, sửa đổi hoặc xóa các bước này.
*   **M Language (Ngôn ngữ M):** Đằng sau giao diện người dùng trực quan, mọi bước bạn thực hiện đều tạo ra một dòng mã bằng ngôn ngữ M (M là viết tắt của Mashup). Bạn có thể xem và chỉnh sửa mã M trực tiếp trong "Advanced Editor" để thực hiện các kỹ thuật transform phức tạp hơn.

### Tại sao Power Query quan trọng?
*   **Tự động hóa việc làm sạch dữ liệu:** Một khi bạn đã thiết lập các bước biến đổi, bạn chỉ cần làm mới (refresh) dữ liệu và Power Query sẽ tự động lặp lại tất cả các bước đó cho dữ liệu mới.
*   **Giao diện trực quan:** Hầu hết các tác vụ có thể được thực hiện bằng cách nhấp chuột, giúp người dùng không chuyên về kỹ thuật cũng có thể chuẩn bị dữ liệu.
*   **Khả năng mở rộng:** Cho phép xử lý các tập dữ liệu lớn và thực hiện các logic phức tạp.

<div class="my-6">
    <h3 class="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">Video tham khảo</h3>
    <a href="https://www.youtube.com/watch?v=silo89Y_a_M" target="_blank" rel="noopener noreferrer" class="flex items-center p-4 bg-gray-100 dark:bg-gray-700/50 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600/50 transition-colors shadow-sm">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-red-600 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg>
        <div class="ml-4">
            <p class="font-semibold text-blue-600 dark:text-blue-400">Power Query là gì? Hướng dẫn cho người mới bắt đầu</p>
            <p class="text-sm text-gray-600 dark:text-gray-400">Video giới thiệu tổng quan về Power Query, giao diện và các thao tác cơ bản.</p>
        </div>
    </a>
</div>
  `,
'pq-common-transforms': `
## Các kỹ thuật transform dữ liệu cơ bản
Đây là những thao tác bạn sẽ sử dụng thường xuyên nhất trong Power Query để làm sạch và chuẩn bị dữ liệu.

### 1. Choose/Remove Columns (Chọn/Xóa cột)
*   **Mục đích:** Chỉ giữ lại những cột cần thiết cho việc phân tích. Việc loại bỏ các cột không cần thiết giúp mô hình dữ liệu nhẹ hơn và hiệu quả hơn.
*   **Cách làm:** Dùng chức năng "Choose Columns" hoặc chọn các cột muốn xóa và nhấn "Remove Columns".

### 2. Change Data Type (Thay đổi kiểu dữ liệu)
*   **Mục đích:** Đảm bảo mỗi cột có kiểu dữ liệu đúng (văn bản, số nguyên, số thập phân, ngày/giờ). Power Query thường tự động nhận diện nhưng bạn nên kiểm tra lại.
*   **Cách làm:** Nhấp vào biểu tượng kiểu dữ liệu ở đầu mỗi cột (ví dụ: ABC, 123, 1.2) và chọn kiểu đúng.

### 3. Filter Rows (Lọc hàng)
*   **Mục đích:** Loại bỏ các hàng không cần thiết dựa trên một hoặc nhiều điều kiện.
*   **Cách làm:** Nhấp vào mũi tên lọc ở đầu cột và chọn các điều kiện (ví dụ: bằng, lớn hơn, không chứa, loại bỏ giá trị null).

### 4. Split Column (Tách cột)
*   **Mục đích:** Tách một cột thành nhiều cột dựa trên một ký tự phân tách (delimiter) hoặc số lượng ký tự.
*   **Ví dụ:** Tách cột "Họ và Tên" thành hai cột "Họ" và "Tên" dựa trên khoảng trắng.
*   **Cách làm:** Chọn cột, vào tab "Transform" hoặc "Add Column", chọn "Split Column".

### 5. Replace Values (Thay thế giá trị)
*   **Mục đích:** Tìm và thay thế một giá trị cụ thể trong một cột. Rất hữu ích để sửa lỗi chính tả hoặc chuẩn hóa dữ liệu.
*   **Cách làm:** Chuột phải vào cột và chọn "Replace Values".
  `,
'pq-advanced-transforms': `
## Các kỹ thuật transform nâng cao
Khi dữ liệu của bạn có cấu trúc phức tạp, bạn sẽ cần đến các kỹ thuật nâng cao hơn.

### 1. Group By (Nhóm theo)
*   **Mục đích:** Tổng hợp (aggregate) dữ liệu. Tương tự như hàm \`GROUP BY\` trong SQL.
*   **Ví dụ:** Từ một bảng chi tiết các đơn hàng, bạn có thể nhóm theo "Tỉnh thành" và "Tháng" để tính tổng doanh thu cho mỗi tỉnh trong mỗi tháng.
*   **Cách làm:** Chọn tab "Transform", chọn "Group By".
    *   **Group by:** Chọn các cột bạn muốn dùng làm tiêu chí nhóm.
    *   **New column name:** Đặt tên cho cột giá trị tổng hợp mới.
    *   **Operation:** Chọn phép tính (Sum, Count, Average, Min, Max).
    *   **Column:** Chọn cột để thực hiện phép tính.

### 2. Pivot và Unpivot Columns
*   **Unpivot Columns (Bỏ gộp cột):**
    *   **Mục đích:** Chuyển đổi một bảng "rộng" (wide format) thành một bảng "dài" (long format). Rất hữu ích khi bạn có các cột đại diện cho các giá trị thời gian (ví dụ: Cột Tháng 1, Cột Tháng 2, ...).
    *   **Cách làm:** Chọn các cột bạn muốn bỏ gộp, chuột phải và chọn "Unpivot Columns". Power Query sẽ tạo ra hai cột mới: "Attribute" (chứa tên các cột cũ) và "Value" (chứa các giá trị tương ứng).
*   **Pivot Columns (Gộp cột):**
    *   **Mục đích:** Làm ngược lại với Unpivot, chuyển từ định dạng dài sang định dạng rộng.
    *   **Cách làm:** Chọn cột chứa tên các cột mới (Attribute column), vào tab "Transform", chọn "Pivot Column". Sau đó chọn cột chứa giá trị (Value column) và phép tính tổng hợp.

### 3. Conditional Column (Cột điều kiện)
*   **Mục đích:** Tạo một cột mới có giá trị dựa trên các điều kiện logic (if-then-else).
*   **Ví dụ:** Tạo một cột "Phân loại doanh thu" với các giá trị "Cao", "Trung bình", "Thấp" dựa trên giá trị của cột "Doanh thu".
*   **Cách làm:** Vào tab "Add Column", chọn "Conditional Column" và điền vào các điều kiện.
  `,
'pq-merge-append': `
## Kết hợp Queries (Merge & Append)
Power Query cung cấp hai cách chính để kết hợp các bảng dữ liệu từ các query khác nhau.

### 1. Append Queries (Nối truy vấn)
*   **Tương tự:** \`UNION ALL\` trong SQL.
*   **Mục đích:** Xếp chồng các bảng dữ liệu lên nhau. Bạn nối một bảng vào dưới một bảng khác.
*   **Yêu cầu:** Các bảng được nối phải có cấu trúc cột tương tự nhau (tên cột và kiểu dữ liệu). Nếu tên cột khác nhau, Power Query sẽ tạo ra các cột mới.
*   **Ví dụ:** Bạn có một bảng doanh thu cho năm 2023 và một bảng doanh thu cho năm 2024. Bạn có thể dùng "Append" để tạo ra một bảng duy nhất chứa dữ liệu của cả hai năm.

### 2. Merge Queries (Phối/Trộn truy vấn)
*   **Tương tự:** Các loại \`JOIN\` trong SQL.
*   **Mục đích:** Kết hợp hai bảng dữ liệu lại với nhau theo chiều ngang, dựa trên một hoặc nhiều cột chung.
*   **Cách làm:**
    1.  Chọn bảng chính (bảng bên trái).
    2.  Chọn chức năng "Merge Queries".
    3.  Chọn bảng thứ hai (bảng bên phải).
    4.  Chọn (các) cột chung giữa hai bảng để làm khóa nối.
    5.  Chọn loại Join (Join Kind).
*   **Các loại Join phổ biến:**
    *   **Left Outer (Mặc định):** Lấy tất cả các hàng từ bảng thứ nhất, và các hàng khớp từ bảng thứ hai.
    *   **Inner:** Chỉ lấy các hàng có sự khớp ở cả hai bảng.
    *   **Full Outer:** Lấy tất cả các hàng từ cả hai bảng.

<div class="my-6">
    <h3 class="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">Video tham khảo</h3>
    <a href="https://www.youtube.com/watch?v=A_2aSAhWb5U" target="_blank" rel="noopener noreferrer" class="flex items-center p-4 bg-gray-100 dark:bg-gray-700/50 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600/50 transition-colors shadow-sm">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-red-600 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg>
        <div class="ml-4">
            <p class="font-semibold text-blue-600 dark:text-blue-400">Merge vs Append trong Power Query</p>
            <p class="text-sm text-gray-600 dark:text-gray-400">Video giải thích sự khác biệt cơ bản và cách sử dụng của Merge và Append.</p>
        </div>
    </a>
</div>
  `,
'pq-query-folding': `
## Chủ đề chuyên sâu: Query Folding
Query Folding là khái niệm **quan trọng nhất** về hiệu năng trong Power Query. Nắm vững nó là chìa khóa để xây dựng các báo cáo nhanh và hiệu quả.

### Query Folding là gì?
*   **Khái niệm:** Query Folding là quá trình Power Query chuyển đổi các bước transform bạn thực hiện trên giao diện (lọc, sắp xếp, nhóm, v.v.) thành một câu lệnh duy nhất bằng ngôn ngữ của nguồn dữ liệu (ví dụ: SQL) và gửi câu lệnh đó về cho hệ thống nguồn để thực thi.
*   **Ví dụ:** Thay vì tải toàn bộ bảng \`Sales\` (hàng triệu dòng) về máy của bạn rồi mới lọc ra các đơn hàng của năm 2025, Query Folding sẽ tạo ra một câu lệnh SQL tương tự như \`SELECT * FROM Sales WHERE Year = 2025\` và gửi nó đến máy chủ SQL. Máy chủ SQL chỉ trả về kết quả đã được lọc, giúp giảm đáng kể lưu lượng mạng và tăng tốc độ làm mới.

### Tại sao nó lại quan trọng?
*   **Tăng tốc độ làm mới (Refresh Speed):** Giảm thời gian chờ đợi đáng kể, đặc biệt với dữ liệu lớn.
*   **Giảm tải cho máy trạm và dịch vụ:** Việc xử lý nặng được đẩy về phía máy chủ nguồn, nơi thường có tài nguyên mạnh hơn.
*   **Hỗ trợ làm mới tăng dần (Incremental Refresh):** Query Folding là một yêu cầu bắt buộc để có thể thiết lập tính năng làm mới tăng dần trong Power BI.

### Làm thế nào để kiểm tra Query Folding?
1.  Trong Power Query Editor, thực hiện một bước biến đổi.
2.  Nhìn vào danh sách "Applied Steps" ở bên phải.
3.  Chuột phải vào bước biến đổi cuối cùng bạn vừa thực hiện.
4.  Nếu tùy chọn **"View Native Query"** sáng lên và có thể nhấp vào, thì Query Folding **đang hoạt động** cho đến bước đó. Nếu nó bị mờ đi, Query Folding đã bị "phá vỡ" (broken) ở bước trước đó.

### Những gì có thể phá vỡ Query Folding?
Không phải tất cả các kỹ thuật transform đều hỗ trợ Query Folding. Một số thủ phạm phổ biến bao gồm:
*   Thêm cột Index.
*   Sử dụng các hàm M không có tương đương ở nguồn (ví dụ: các hàm xử lý văn bản phức tạp).
*   Thay đổi kiểu dữ liệu của cột theo một cách không chuẩn.
*   Hợp nhất các truy vấn từ các nguồn khác nhau (ví dụ: join một bảng SQL với một file Excel).

**Thực tiễn tốt nhất:** Luôn cố gắng thực hiện các kỹ thuật transform hỗ trợ Query Folding (lọc, sắp xếp, join các bảng từ cùng một nguồn) ở các bước đầu tiên của query.

<div class="my-6">
    <h3 class="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">Video tham khảo</h3>
    <a href="https://www.youtube.com/watch?v=vglyr2k57n4" target="_blank" rel="noopener noreferrer" class="flex items-center p-4 bg-gray-100 dark:bg-gray-700/50 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600/50 transition-colors shadow-sm">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-red-600 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg>
        <div class="ml-4">
            <p class="font-semibold text-blue-600 dark:text-blue-400">Query Folding trong Power BI</p>
            <p class="text-sm text-gray-600 dark:text-gray-400">Video giải thích sâu về Query Folding và tại sao nó lại quan trọng cho hiệu năng.</p>
        </div>
    </a>
</div>
  `,
'pq-in-power-bi': `
## Ứng dụng trong Power BI (Dataflows & Linked Tables)
Power Query là công cụ không thể thiếu trong Power BI, đóng vai trò là lớp chuẩn bị dữ liệu (Data Preparation Layer) cho tất cả các báo cáo.

### Vai trò chính
Trong Power BI Desktop, Power Query Editor được sử dụng để:
*   Kết nối đến các nguồn dữ liệu.
*   Thực hiện các bước làm sạch và chuyển đổi dữ liệu cần thiết.
*   Định hình dữ liệu thành các bảng phù hợp cho việc xây dựng mô hình dữ liệu (data modeling) bằng DAX.

### Dataflows
*   **Khái niệm:** Dataflow đưa sức mạnh của Power Query lên đám mây (Power BI Service). Nó cho phép bạn thực hiện ETL và lưu trữ dữ liệu đã được làm sạch trong Azure Data Lake do Power BI quản lý.
*   **Lợi ích:**
    *   **Tái sử dụng logic ETL:** Tạo một lần, dùng nhiều lần. Nhiều bộ dữ liệu (datasets) và báo cáo có thể cùng sử dụng một dataflow, đảm bảo tính nhất quán.
    *   **Tập trung hóa việc chuẩn bị dữ liệu:** Quản lý dữ liệu ở một nơi duy nhất.

### Linked Tables (hoặc Linked Entities)
*   **Khái niệm:** Linked Tables là một tính năng mạnh mẽ trong Dataflows, cho phép một dataflow **kết nối và sử dụng lại một bảng đã được xử lý trong một dataflow khác**.
*   **Kịch bản:**
    1.  Bạn tạo một "Staging/Base Dataflow" chứa các bảng dữ liệu gốc đã được làm sạch cơ bản (ví dụ: bảng "Customers", "Products").
    2.  Sau đó, các nhà phân tích khác có thể tạo các dataflow của riêng họ. Thay vì kết nối lại vào nguồn, họ chỉ cần tạo một "Linked Table" đến bảng "Customers" trong dataflow gốc.
*   **Lợi ích:**
    *   **Giảm sự trùng lặp:** Không cần phải định nghĩa lại logic làm sạch cho các bảng phổ biến như Khách hàng, Sản phẩm.
    *   **Tạo một "Single source of truth" (Nguồn sự thật duy nhất):** Mọi người đều sử dụng cùng một phiên bản của bảng "Customers" đã được chuẩn hóa.
    *   **Phân tách logic:** Cho phép tách biệt quá trình ingest/làm sạch dữ liệu gốc với quá trình biến đổi dữ liệu cho các mục đích kinh doanh cụ thể.
`,
'pq-in-power-apps': `
## Ứng dụng trong Power Apps
Gần đây, Power Query đã được tích hợp vào Power Apps Studio, mang lại một cách thức mới để định hình và truy vấn dữ liệu.

### Mục đích sử dụng
*   Trong Power Apps, Power Query chủ yếu được sử dụng để **định hình dữ liệu đọc vào (read-only data shaping)** cho các ứng dụng Canvas.
*   Nó cho phép bạn thực hiện các phép biến đổi phức tạp (như join, group by, unpivot) trên dữ liệu nguồn trước khi nó được tải vào ứng dụng của bạn.
*   **Ví dụ:** Bạn có thể join một SharePoint List với một bảng Excel và chỉ lấy ra một tập hợp dữ liệu đã được định hình sẵn để hiển thị trong một Gallery.

### Cách hoạt động
1.  Khi thêm một nguồn dữ liệu mới vào Canvas App, bạn sẽ thấy tùy chọn "Transform Data".
2.  Thao tác này sẽ mở ra giao diện Power Query Editor quen thuộc.
3.  Các bước biến đổi bạn thực hiện sẽ được lưu lại. Khi ứng dụng chạy, Power Fx sẽ gọi đến các truy vấn Power Query này.

### Giới hạn quan trọng
*   **Read-only:** Các truy vấn Power Query trong Power Apps hiện tại chỉ dùng để đọc dữ liệu. Bạn **không thể** sử dụng chúng để ghi, cập nhật, hoặc xóa dữ liệu (không thể \`Patch()\` vào một truy vấn Power Query).
*   **Không thể ủy thác (Non-delegable):** Kết quả của một truy vấn Power Query được coi là một bảng dữ liệu tĩnh trong bộ nhớ của ứng dụng. Điều này có nghĩa là các quy tắc ủy thác (delegation) không được áp dụng. Bạn phải cẩn thận với giới hạn số lượng bản ghi (mặc định 500, tối đa 2000).
*   **Tốt nhất cho dữ liệu tĩnh:** Do các giới hạn trên, Power Query trong Power Apps phù hợp nhất cho các kịch bản cần xử lý dữ liệu tham chiếu, dữ liệu không thay đổi thường xuyên, hoặc khi bạn cần thực hiện các phép join phức tạp mà Power Fx không hỗ trợ một cách dễ dàng.
`,
'pq-in-excel': `
## Ứng dụng trong Excel (Get & Transform)
Power Query có nguồn gốc từ Excel và vẫn là một trong những tính năng mạnh mẽ nhất của nó, được biết đến dưới tên **"Get & Transform Data"** trong tab "Data".

### Trường hợp sử dụng
Power Query biến Excel từ một công cụ nhập liệu thủ công thành một công cụ tự động hóa báo cáo mạnh mẽ.
*   **Tự động hóa báo cáo lặp đi lặp lại:** Bạn có một báo cáo hàng tháng cần kết hợp dữ liệu từ nhiều file Excel, làm sạch và tạo ra một bảng tổng hợp. Với Power Query, bạn chỉ cần thiết lập các bước một lần. Tháng sau, bạn chỉ cần đặt các file mới vào thư mục và nhấn "Refresh All".
*   **Làm sạch dữ liệu bẩn:** Dữ liệu xuất ra từ các hệ thống cũ thường không có cấu trúc tốt. Power Query có thể xử lý các khoảng trắng thừa, tách cột, thay thế giá trị, và định hình lại dữ liệu một cách dễ dàng.
*   **Kết nối nhiều nguồn:** Kết hợp dữ liệu từ một file CSV, một bảng trên web, và một cơ sở dữ liệu SQL trực tiếp trong Excel.
*   **Unpivot dữ liệu:** Chuyển đổi các bảng tổng hợp chéo (crosstab reports) thành dạng bảng (tabular format) phù hợp để sử dụng với PivotTables.

### So sánh với VBA/Macros
*   **Dễ học hơn:** Power Query có giao diện trực quan, không yêu cầu kiến thức lập trình sâu như VBA.
*   **Mạnh mẽ hơn cho ETL:** Power Query được thiết kế chuyên cho việc kết nối và biến đổi dữ liệu, trong khi VBA là một ngôn ngữ lập trình đa mục đích.
*   **Ghi lại các bước:** Các bước trong Power Query rõ ràng và dễ kiểm tra hơn so với việc đọc code VBA.

Đối với bất kỳ ai làm việc nhiều với dữ liệu trong Excel, việc thành thạo Power Query là một kỹ năng thay đổi cuộc chơi.
`,
'pq-best-practices': `
## Mẹo & Tối ưu hóa khác
Ngoài Query Folding, việc tuân theo các thực tiễn tốt nhất sẽ giúp các truy vấn của bạn dễ quản lý, dễ bảo trì và hiệu quả hơn.

### 1. Tổ chức Queries
*   **Tạo các nhóm (Query Groups):** Khi bạn có nhiều query, hãy chuột phải vào vùng danh sách query và tạo các nhóm để tổ chức chúng một cách logic (ví dụ: nhóm "Staging Queries", "Dimension Tables", "Fact Tables").
*   **Sử dụng Staging Queries:**
    *   Tạo các query gốc chỉ để kết nối và tải dữ liệu thô từ nguồn (không transform nhiều). Vô hiệu hóa việc tải các query này vào mô hình dữ liệu (Disable Load).
    *   Sau đó, **Reference** (tham chiếu) đến các staging query này để tạo các query biến đổi khác.
    *   **Lợi ích:** Tránh kết nối đến cùng một nguồn dữ liệu nhiều lần và tách biệt logic lấy dữ liệu khỏi logic biến đổi.

### 2. Ghi chép và tài liệu hóa
*   **Đổi tên các bước (Rename Steps):** Trong "Applied Steps", hãy đổi tên các bước thành những tên có ý nghĩa. Thay vì "Filtered Rows1", hãy đổi thành "Filtered out inactive products". Điều này cực kỳ hữu ích khi bạn xem lại query sau này.
*   **Thêm mô tả (Add Descriptions):** Chuột phải vào một query và thêm mô tả về mục đích và logic của nó.

### 3. Tối ưu hóa các bước
*   **Xóa các cột không cần thiết càng sớm càng tốt:** Bước đầu tiên sau khi kết nối nguồn nên là "Choose Columns" hoặc "Remove Other Columns" để chỉ giữ lại những gì bạn cần. Điều này làm giảm lượng dữ liệu cần xử lý trong các bước tiếp theo.
*   **Thứ tự các bước quan trọng:** Thực hiện các bước lọc (filtering) trước các bước biến đổi phức tạp hơn. Việc giảm số lượng hàng sớm sẽ làm cho các bước sau chạy nhanh hơn.
*   **Cẩn thận với Custom Columns:** Việc thêm cột tùy chỉnh, đặc biệt là với logic phức tạp, có thể làm chậm query. Hãy xem xét liệu có cách nào đạt được kết quả tương tự bằng các chức năng tích hợp sẵn hay không.
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
Dataflow Gen1 cho phép bạn thực hiện các kỹ thuật transform dữ liệu phức tạp và ghi kết quả ra một đích đến (destination), giúp tăng cường khả năng của Power BI.

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
  'ai-fundamentals': `
## Giới thiệu về Trí tuệ Nhân tạo (AI)
Trí tuệ nhân tạo là một lĩnh vực rộng lớn của khoa học máy tính, tập trung vào việc tạo ra các máy móc thông minh có khả năng thực hiện các tác vụ thường đòi hỏi trí thông minh của con người.

### Machine Learning và Deep Learning
*   **Machine Learning (Học máy - ML):** Là một tập hợp con của AI. Thay vì được lập trình một cách rõ ràng, các hệ thống ML sử dụng thuật toán để phân tích một lượng lớn dữ liệu, học hỏi từ các mẫu (patterns) trong đó, và sau đó đưa ra quyết định hoặc dự đoán.
*   **Deep Learning (Học sâu - DL):** Là một lĩnh vực chuyên sâu hơn của ML, sử dụng các mạng nơ-ron nhân tạo (artificial neural networks) với nhiều lớp (layers) để giải quyết các vấn đề phức tạp. Deep learning là công nghệ đằng sau xe tự lái và nhận dạng giọng nói.

### Generative AI (AI tạo sinh)
Đây là một nhánh đột phá của AI, tập trung vào việc tạo ra nội dung mới, nguyên bản thay vì chỉ phân tích hoặc phân loại dữ liệu có sẵn. Các mô hình như GPT (Generative Pre-trained Transformer) có thể tạo ra văn bản, hình ảnh, âm nhạc và mã nguồn.
`,
  'agent-concepts': `
## Các khái niệm về Agent
Một AI Agent (tác nhân AI) là một thực thể tự trị có khả năng quan sát môi trường của nó, xử lý thông tin và thực hiện các hành động để đạt được một mục tiêu cụ thể.

### Các thành phần cốt lõi của một Agent
1.  **Perception (Nhận thức):** Agent sử dụng "cảm biến" (sensors) để thu thập thông tin về trạng thái hiện tại của môi trường. Trong một chatbot, cảm biến chính là đầu vào văn bản từ người dùng.
2.  **Brain (Bộ não):** Đây là phần xử lý trung tâm, nơi agent phân tích thông tin nhận được và đưa ra quyết định về hành động cần thực hiện. Nó có thể là một mô hình AI, một bộ quy tắc logic, hoặc sự kết hợp của cả hai.
3.  **Action (Hành động):** Agent sử dụng "cơ cấu chấp hành" (actuators) để tác động trở lại môi trường. Đối với một Copilot trong Power Platform, một hành động có thể là trả lời người dùng, gọi một Power Automate flow để tra cứu dữ liệu, hoặc cập nhật một bản ghi trong Dataverse.

### Agent trong Power Platform
Trong Power Platform, bạn có thể xây dựng các agent mạnh mẽ bằng cách kết hợp:
*   **Copilot Studio:** Làm "bộ não" và giao diện giao tiếp chính.
*   **Power Automate:** Đóng vai trò là "cơ cấu chấp hành", cho phép agent kết nối và thực hiện hành động trên hàng trăm hệ thống khác nhau.
*   **AI Builder:** Cung cấp các khả năng nhận thức chuyên biệt (ví dụ: đọc hóa đơn).
  `,
  'ai-builder': `
## Giới thiệu AI Builder
AI Builder là một tính năng của Microsoft Power Platform cho phép bạn dễ dàng thêm trí tuệ nhân tạo (AI) vào các ứng dụng Power Apps và luồng Power Automate mà không cần kiến thức về khoa học dữ liệu hay kỹ năng lập trình.

### AI Builder làm được gì?
Nó cung cấp các mô hình AI tạo sẵn (pre-built) hoặc cho phép bạn xây dựng các mô hình tùy chỉnh (custom) để giải quyết các bài toán nghiệp vụ phổ biến.
*   **Xử lý văn bản:** Phân tích cảm tính, nhận dạng thực thể, phân loại văn bản, dịch thuật.
*   **Xử lý hình ảnh:** Nhận dạng đối tượng (Object detection).
*   **Xử lý tài liệu có cấu trúc:** Trích xuất thông tin từ hóa đơn, biên nhận (Form processing).
*   **Dự đoán:** Dự đoán kết quả nhị phân (có/không) dựa trên dữ liệu lịch sử.

### Tích hợp
Các mô hình AI Builder có thể được sử dụng trực tiếp trong:
*   **Power Apps:** Sử dụng một control đặc biệt để gọi mô hình (ví dụ: chụp ảnh hóa đơn và để AI tự động trích xuất thông tin).
*   **Power Automate:** Sử dụng các action của AI Builder trong một flow (ví dụ: khi có email mới chứa tệp đính kèm, tự động dùng AI Builder để xử lý tệp và lưu kết quả vào Dataverse).
  `,
  'copilot-studio': `
## Xây dựng Copilot (trước đây là Power Virtual Agents)
Microsoft Copilot Studio là một công cụ low-code để xây dựng các chatbot (hay "copilot") tinh vi. Bạn có thể tạo ra các cuộc hội thoại tự nhiên để giải đáp thắc mắc của khách hàng, hướng dẫn người dùng, hoặc tự động hóa các tác vụ.

### Các khái niệm cốt lõi
*   **Topics (Chủ đề):** Một Topic đại diện cho một nhánh của cuộc hội thoại. Mỗi topic được kích hoạt bởi các cụm từ nhất định của người dùng và bao gồm một luồng hội thoại được thiết kế trên một canvas trực quan.
*   **Trigger Phrases (Cụm từ kích hoạt):** Là những câu hoặc từ khóa mà người dùng có thể nói để bắt đầu một Topic cụ thể.
*   **Nodes (Nút):** Trong canvas thiết kế hội thoại, bạn sử dụng các nút để gửi tin nhắn, đặt câu hỏi, gọi một action, hoặc thực hiện logic điều kiện (if/else).
*   **Entities (Thực thể):** Cho phép bot nhận dạng và trích xuất các thông tin cụ thể từ câu nói của người dùng, chẳng hạn như số điện thoại, ngày tháng, địa điểm.
*   **Actions:** Cho phép copilot của bạn thực hiện hành động bằng cách gọi một Power Automate flow, ví dụ như tra cứu thông tin đơn hàng trong Dataverse hoặc tạo một yêu cầu hỗ trợ.
  `,
  'agent-best-practices': `
## Best Practices cho Agent
Xây dựng một agent thông minh và hữu ích đòi hỏi nhiều hơn là chỉ công nghệ. Dưới đây là một số phương pháp hay nhất cần tuân theo.

### 1. Xác định mục tiêu rõ ràng và cụ thể
*   Một agent nên được thiết kế để giải quyết một vấn đề cụ thể. Đừng cố gắng xây dựng một agent "biết tuốt". Hãy bắt đầu với một phạm vi hẹp, ví dụ: "giúp người dùng kiểm tra tình trạng đơn hàng" thay vì "hỗ trợ mọi vấn đề của khách hàng".

### 2. Cung cấp các công cụ (Tools) mạnh mẽ và đáng tin cậy
*   Sức mạnh của một agent nằm ở khả năng hành động của nó. Hãy đảm bảo rằng các Power Automate flow mà agent sử dụng được xây dựng tốt, xử lý lỗi một cách linh hoạt và trả về kết quả nhất quán.

### 3. Thiết kế để thất bại một cách duyên dáng (Graceful Failure)
*   Sẽ có lúc agent không hiểu yêu cầu hoặc một công cụ bị lỗi. Hãy thiết kế các kịch bản dự phòng. Ví dụ, agent có thể nói: "Tôi chưa hiểu rõ yêu cầu đó. Bạn có muốn kết nối với một nhân viên hỗ trợ không?".

### 4. Bắt đầu đơn giản và lặp lại
*   Đừng cố gắng xây dựng một agent hoàn hảo ngay từ đầu. Hãy bắt đầu với một vài chức năng cốt lõi, triển khai, thu thập phản hồi từ người dùng thực tế và cải tiến dần dần.

### 5. Giữ con người trong vòng lặp (Human-in-the-Loop)
*   Đối với các quyết định quan trọng hoặc nhạy cảm, hãy cân nhắc việc thiết kế một quy trình để con người có thể xem xét và phê duyệt các hành động của agent trước khi chúng được thực hiện. Điều này xây dựng lòng tin và giảm thiểu rủi ro.
`,
'pe-basics': `
<h2>Hệ thống phân cấp kỹ năng Prompt (dựa theo hướng OpenAI)</h2>
<div class="space-y-4">
    <div>
        <h3 class="font-semibold">Level 1: Prompt Explorer (Người khám phá)</h3>
        <ul class="list-disc pl-5 mt-1 space-y-1">
            <li>Biết cách sử dụng ChatGPT/Copilot ở mức cơ bản.</li>
            <li>Viết prompt tự nhiên bằng ngôn ngữ đời thường.</li>
            <li>Biết yêu cầu chỉnh sửa/gợi ý lại.</li>
        </ul>
    </div>
    <div>
        <h3 class="font-semibold">Level 2: Prompt Improver (Người cải tiến)</h3>
        <ul class="list-disc pl-5 mt-1 space-y-1">
            <li>Biết cấu trúc lại prompt để có output tốt hơn.</li>
            <li>Dùng được các kỹ thuật như: Role-based prompting, Formatting, Style guide.</li>
            <li>Biết kiểm soát độ dài, định dạng.</li>
        </ul>
    </div>
    <div>
        <h3 class="font-semibold">Level 3: Prompt Strategist (Chiến lược gia prompt)</h3>
        <ul class="list-disc pl-5 mt-1 space-y-1">
            <li>Thành thạo các kỹ thuật như: Few-shot Prompting → Chain-of-thought → Zero-shot CoT.</li>
            <li>Biết đánh giá chất lượng đầu ra, kiểm tra bias.</li>
            <li>Biết chia task phức tạp thành sub-task logic.</li>
        </ul>
    </div>
    <div>
        <h3 class="font-semibold">Level 4: Prompt Engineer (Kỹ sư prompt)</h3>
        <ul class="list-disc pl-5 mt-1 space-y-1">
            <li>Kết hợp nhiều kỹ thuật nâng cao như: ReAct, Self-consistency, Toolformer logic.</li>
            <li>Tối ưu prompt cho ứng dụng cụ thể (data labeling, code gen, content creation,...).</li>
            <li>Hiểu cơ chế hoạt động của LLMs để điều chỉnh prompt phù hợp.</li>
        </ul>
    </div>
    <div>
        <h3 class="font-semibold">Level 5: Prompt Architect (Kiến trúc sư prompt)</h3>
        <ul class="list-disc pl-5 mt-1 space-y-1">
            <li>Thiết kế hệ thống prompt phức hợp cho workflows/agents.</li>
            <li>Kết hợp API, system prompt, memory,...</li>
            <li>Tối ưu token, latency, cost.</li>
            <li>Áp dụng LLM vào ứng dụng cụ thể (chatbot, AI agent, data analysis system).</li>
            <li>Biết fine-tune hoặc phối hợp prompt + model tuning.</li>
        </ul>
    </div>
</div>
<hr class="my-6 dark:border-gray-600"/>
<h2>1. Cấu hình Output</h2>
<ul class="list-disc pl-5 space-y-2">
    <li><strong>Output length</strong>: số token sinh ra (ảnh hưởng chi phí & tốc độ).</li>
    <li><strong>Temperature</strong>: kiểm soát ngẫu nhiên.
        <ul class="list-disc pl-5">
            <li>0 = chính xác tuyệt đối.</li>
            <li>Cao = sáng tạo.</li>
        </ul>
    </li>
    <li><strong>Top-K / Top-P</strong>: chọn tập token ứng viên.</li>
    <li><strong>Best practice</strong>:
        <ul class="list-disc pl-5">
            <li>Chính xác: <code>temp=0.1, top-P=0.9, top-K=20</code>.</li>
            <li>Sáng tạo: <code>temp=0.9, top-P=0.99, top-K=40</code>.</li>
            <li>Toán học: <code>temp=0</code>.</li>
        </ul>
    </li>
</ul>
<br/>
<h2>2. Kỹ thuật Prompting (Cơ bản)</h2>
<div class="space-y-4">
    <div>
        <h3 class="font-semibold">Zero-shot</h3>
        <p><strong>Định nghĩa:</strong> Không đưa ví dụ, chỉ mô tả nhiệm vụ.</p>
        <p><strong>Ví dụ:</strong> <code>Classify review as POSITIVE/NEUTRAL/NEGATIVE. Review: "Her is a disturbing masterpiece..." → POSITIVE</code></p>
    </div>
    <div>
        <h3 class="font-semibold">One-shot</h3>
        <p><strong>Định nghĩa:</strong> Đưa 1 ví dụ mẫu để model học theo.</p>
        <p><strong>Ví dụ:</strong> Parse đơn hàng pizza với 1 mẫu JSON.</p>
    </div>
    <div>
        <h3 class="font-semibold">Few-shot</h3>
        <p><strong>Định nghĩa:</strong> Đưa nhiều ví dụ để model học pattern.</p>
        <p><strong>Ví dụ:</strong> Parse nhiều đơn hàng pizza → JSON.</p>
    </div>
    <div>
        <h3 class="font-semibold">System prompting</h3>
        <p><strong>Định nghĩa:</strong> Định nghĩa rõ nhiệm vụ & định dạng output.</p>
        <p><strong>Ví dụ:</strong> <code>Classify review → return JSON object { "sentiment": "NEGATIVE" }</code></p>
    </div>
    <div>
        <h3 class="font-semibold">Role prompting</h3>
        <p><strong>Định nghĩa:</strong> Gán vai trò cho model → thay đổi phong cách trả lời.</p>
        <p><strong>Ví dụ:</strong> <code>Act as travel guide for Amsterdam museums.</code></p>
    </div>
    <div>
        <h3 class="font-semibold">Contextual prompting</h3>
        <p><strong>Định nghĩa:</strong> Thêm bối cảnh cụ thể.</p>
        <p><strong>Ví dụ:</strong> <code>Context: Blog về game arcade 80s → gợi ý 3 chủ đề viết bài.</code></p>
    </div>
</div>
`,
'pe-advanced': `
<h2>2. Kỹ thuật Prompting (Nâng cao)</h2>
<div class="space-y-5">
    <div>
        <h3 class="font-bold">Step-back prompting</h3>
        <p><strong>Định nghĩa:</strong> Yêu cầu model trả lời câu khái quát trước rồi mới đi vào chi tiết.</p>
        <p><strong>Ví dụ:</strong> Liệt kê 5 setting game FPS → chọn 1 setting → viết cốt truyện.</p>
    </div>
    <div>
        <h3 class="font-bold">Chain of Thought (CoT)</h3>
        <p><strong>Định nghĩa:</strong> Buộc model giải thích từng bước reasoning.</p>
        <p><strong>Ví dụ:</strong> <code>Let's think step by step → tính tuổi chính xác.</code></p>
    </div>
    <div>
        <h3 class="font-bold">Self-consistency</h3>
        <p><strong>Định nghĩa:</strong> Sinh nhiều reasoning paths (temp cao) → chọn kết quả xuất hiện nhiều nhất.</p>
        <p><strong>Ví dụ:</strong> Phân loại email thành IMPORTANT/NOT IMPORTANT.</p>
    </div>
    <div>
        <h3 class="font-bold">Tree of Thoughts (ToT)</h3>
        <p><strong>Định nghĩa:</strong> Khám phá nhiều nhánh tư duy song song, thay vì chỉ một.</p>
        <p><strong>Ví dụ:</strong> Dùng khi bài toán phức tạp, cần exploration.</p>
    </div>
    <div>
        <h3 class="font-bold">ReAct</h3>
        <p><strong>Định nghĩa:</strong> Reason + Act → kết hợp suy luận + hành động (API, search).</p>
        <p><strong>Ví dụ:</strong> Dùng LangChain + SerpAPI để đếm số con của các thành viên Metallica.</p>
    </div>
    <div>
        <h3 class="font-bold">Automatic Prompt Engineering (APE)</h3>
        <p><strong>Định nghĩa:</strong> Dùng LLM sinh ra nhiều prompt → đánh giá → chọn prompt tốt nhất.</p>
        <p><strong>Ví dụ:</strong> Sinh 10 cách khác nhau để đặt hàng “1 Metallica t-shirt size S”.</p>
    </div>
</div>
<br/>
<h2>3. Prompt cho Code</h2>
<ul class="list-disc pl-5 space-y-1">
    <li><strong>Viết code</strong>: <code>Write a Bash script to rename all files in a folder with prefix "draft_"</code>.</li>
    <li><strong>Giải thích code</strong>: <code>Explain this Bash script line by line.</code></li>
    <li><strong>Dịch code</strong>: Bash → Python.</li>
    <li><strong>Debug code</strong>: Cung cấp traceback lỗi, yêu cầu fix và tối ưu.</li>
</ul>
<br/>
<h2>4. Best Practices</h2>
<ul class="list-disc pl-5 space-y-1">
    <li><strong>Cung cấp ví dụ</strong> (one/few-shot).</li>
    <li><strong>Giữ prompt ngắn gọn, rõ ràng</strong>.</li>
    <li><strong>Đặc tả output mong muốn</strong> (format JSON, số đoạn, phong cách…).</li>
    <li><strong>Ưu tiên instructions hơn constraints</strong>.</li>
    <li><strong>Kiểm soát độ dài</strong> bằng max tokens hoặc yêu cầu cụ thể.</li>
    <li><strong>Dùng biến trong prompt</strong> để tái sử dụng.</li>
    <li><strong>Thử nhiều format & style</strong> để tìm cách hiệu quả nhất.</li>
</ul>
`,
};