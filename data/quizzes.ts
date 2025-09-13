import type { Quiz } from '../types';

export const TRAINING_QUIZZES: Record<string, Quiz> = {
  'mda-intro': {
    topic: 'Giới thiệu về Model-driven Apps',
    questions: [
      {
        question: 'Nền tảng dữ liệu cốt lõi được sử dụng để xây dựng Model-driven Apps là gì?',
        options: ['SharePoint Lists', 'SQL Server', 'Microsoft Dataverse', 'Excel Online'],
        correctAnswer: 'Microsoft Dataverse',
        explanation: 'Dataverse là nền tảng dữ liệu an toàn, có thể mở rộng và là trái tim của Model-driven Apps, nơi bạn định nghĩa các bảng, cột và mối quan hệ.'
      },
      {
        question: 'Đặc điểm chính của Model-driven Apps so với Canvas Apps là gì?',
        options: ['Cho phép tùy chỉnh giao diện ở cấp độ pixel.', 'Giao diện người dùng được tự động tạo ra từ mô hình dữ liệu.', 'Chỉ có thể kết nối với một nguồn dữ liệu duy nhất.', 'Được thiết kế chủ yếu cho các ứng dụng di động đơn giản.'],
        correctAnswer: 'Giao diện người dùng được tự động tạo ra từ mô hình dữ liệu.',
        explanation: 'Model-driven Apps tự động sinh ra giao diện dựa trên cấu trúc dữ liệu trong Dataverse, giúp phát triển nhanh các ứng dụng nghiệp vụ phức tạp.'
      },
      {
        question: 'Thành phần nào sau đây KHÔNG phải là một component chính trong Model-driven Apps?',
        options: ['Forms (Biểu mẫu)', 'Views (Chế độ xem)', 'Screens (Màn hình)', 'Dashboards (Bảng điều khiển)'],
        correctAnswer: 'Screens (Màn hình)',
        explanation: '"Screens" là khái niệm cốt lõi của Canvas Apps, nơi bạn tự do thiết kế bố cục. Model-driven Apps sử dụng Forms, Views, và Dashboards.'
      }
    ]
  },
  'mda-data-model': {
    topic: 'Tạo Solution, Table, Form, View',
    questions: [
      {
        question: 'Tại sao nên làm việc bên trong một Solution khi phát triển Power Apps?',
        options: ['Để tăng hiệu suất của ứng dụng.', 'Để đóng gói và di chuyển tất cả các thành phần ứng dụng một cách dễ dàng.', 'Để giới hạn số lượng bảng có thể tạo.', 'Để tự động tạo giao diện người dùng.'],
        correctAnswer: 'Để đóng gói và di chuyển tất cả các thành phần ứng dụng một cách dễ dàng.',
        explanation: 'Solution hoạt động như một "container" giúp bạn quản lý, di chuyển (deploy) và cập nhật tất cả các thành phần của ứng dụng giữa các môi trường.'
      },
      {
        question: 'Thành phần nào được dùng để hiển thị một danh sách các hàng dữ liệu từ một table với các cột và bộ lọc được định nghĩa trước?',
        options: ['Form (Biểu mẫu)', 'Dashboard (Bảng điều khiển)', 'View (Chế độ xem)', 'Chart (Biểu đồ)'],
        correctAnswer: 'View (Chế độ xem)',
        explanation: 'View cho phép bạn định nghĩa các cột sẽ hiển thị, thứ tự sắp xếp, và các điều kiện lọc để hiển thị một danh sách dữ liệu.'
      },
      {
        question: 'Thành phần nào là giao diện để người dùng tạo mới hoặc chỉnh sửa một hàng dữ liệu cụ thể?',
        options: ['View (Chế độ xem)', 'Form (Biểu mẫu)', 'Site Map (Sơ đồ trang)', 'Solution (Giải pháp)'],
        correctAnswer: 'Form (Biểu mẫu)',
        explanation: 'Form là giao diện mà người dùng tương tác để nhập liệu và chỉnh sửa thông tin cho một bản ghi (hàng dữ liệu) duy nhất.'
      }
    ]
  },
  'mda-app-design': {
    topic: 'Tạo và Cấu trúc App Model-driven',
    questions: [
      {
        question: 'Thành phần nào định nghĩa cấu trúc điều hướng (menu) bên trái của một Model-driven App?',
        options: ['App Designer', 'Solution Explorer', 'Form Editor', 'Site Map'],
        correctAnswer: 'Site Map',
        explanation: 'Site Map định nghĩa cấu trúc điều hướng của ứng dụng, bao gồm các Area, Group, và Subarea, quyết định người dùng sẽ thấy những gì trong menu.'
      },
      {
        question: 'Trong Site Map, cấp độ nào là một liên kết cụ thể đến một thành phần (thường là một View của một Table)?',
        options: ['Area', 'Group', 'Subarea', 'Section'],
        correctAnswer: 'Subarea',
        explanation: 'Subarea là cấp độ thấp nhất trong Site Map, đại diện cho một liên kết trực tiếp đến một nội dung cụ thể như View, Dashboard, hoặc Web Resource.'
      }
    ]
  },
  'mda-columns': {
    topic: 'Làm việc với Cột Lookup, Calculated, và Rollup',
    questions: [
      {
        question: 'Loại cột nào được sử dụng để tạo mối quan hệ giữa hai bảng (ví dụ: liên kết một "Đơn bán" với một "Sản phẩm")?',
        options: ['Calculated Column', 'Lookup Column', 'Rollup Column', 'Choice Column'],
        correctAnswer: 'Lookup Column',
        explanation: 'Cột lookup tạo ra một mối quan hệ N:1 (nhiều-đến-một) giữa hai bảng, cho phép bạn "tra cứu" và liên kết đến một bản ghi ở bảng khác.'
      },
      {
        question: 'Một cột "Thành tiền" được tự động tính bằng công thức `Số lượng * Đơn giá`. Đây là loại cột gì?',
        options: ['Rollup Column', 'Lookup Column', 'Calculated Column', 'Number Column'],
        correctAnswer: 'Calculated Column',
        explanation: 'Cột calculated sử dụng công thức để tính toán giá trị dựa trên các cột khác trong cùng một hàng dữ liệu. Phép tính được thực hiện ngay lập tức.'
      },
      {
        question: 'Bạn muốn đếm số lượng "Đơn hàng đang hoạt động" cho mỗi "Sản phẩm". Loại cột nào là phù hợp nhất để đặt trên bảng "Sản phẩm"?',
        options: ['Calculated Column', 'Choice Column', 'Text Column', 'Rollup Column'],
        correctAnswer: 'Rollup Column',
        explanation: 'Cột rollup thực hiện một phép tính tổng hợp (COUNT, SUM, AVG,...) trên các hàng liên quan ở bảng con. Nó chạy định kỳ và phù hợp để tổng hợp dữ liệu.'
      }
    ]
  },
  'ca-intro': {
    topic: 'Tìm hiểu về Canvas App',
    questions: [
      {
        question: 'Ngôn ngữ công thức được sử dụng trong Canvas Apps để định nghĩa logic và hành vi là gì?',
        options: ['JavaScript', 'C#', 'Power Fx', 'Python'],
        correctAnswer: 'Power Fx',
        explanation: 'Power Fx là ngôn ngữ công thức low-code dựa trên Microsoft Excel, được sử dụng rộng rãi trong Canvas Apps.'
      },
      {
        question: 'Thành phần nào cho phép Canvas App kết nối và tương tác với các nguồn dữ liệu như SharePoint, SQL Server, hoặc các dịch vụ bên ngoài?',
        options: ['Controls (Điều khiển)', 'Screens (Màn hình)', 'Variables (Biến)', 'Connectors (Trình kết nối)'],
        correctAnswer: 'Connectors (Trình kết nối)',
        explanation: 'Connectors là cầu nối cho phép ứng dụng của bạn giao tiếp và làm việc với hàng trăm dịch vụ và nguồn dữ liệu khác nhau.'
      }
    ]
  },
  'ca-export-app': {
    topic: 'Tạo App Xuất kho tổng hợp',
    questions: [
      {
        question: 'Hàm Power Fx nào thường được sử dụng để ghi một bản ghi mới hoặc cập nhật một bản ghi đã có trong nguồn dữ liệu?',
        options: ['Navigate()', 'Filter()', 'Patch()', 'Collect()'],
        correctAnswer: 'Patch()',
        explanation: 'Hàm Patch() rất linh hoạt, cho phép bạn tạo mới hoặc sửa đổi một hoặc nhiều bản ghi trong nguồn dữ liệu một cách hiệu quả.'
      },
      {
        question: 'Để lặp qua tất cả các mục trong một Gallery và thực hiện một hành động cho mỗi mục (ví dụ: ghi dữ liệu), bạn nên sử dụng hàm nào?',
        options: ['If()', 'ForAll()', 'Switch()', 'UpdateContext()'],
        correctAnswer: 'ForAll()',
        explanation: 'Hàm ForAll() cho phép bạn lặp qua một bảng (ví dụ như thuộc tính .AllItems của Gallery) và thực thi một công thức cho mỗi hàng.'
      }
    ]
  },
  'ca-chatbot': {
    topic: 'Tạo App "Chat bot"',
    questions: [
      {
        question: 'Để kết nối Canvas App với một dịch vụ AI bên ngoài (như GPT), phương pháp phổ biến và an toàn nhất là gì?',
        options: ['Gọi API trực tiếp từ Canvas App bằng một connector tùy chỉnh.', 'Nhúng mã JavaScript phức tạp vào ứng dụng.', 'Sử dụng Power Automate flow làm trung gian để gọi API.', 'Lưu trữ khóa API trực tiếp trong biến của Canvas App.'],
        correctAnswer: 'Sử dụng Power Automate flow làm trung gian để gọi API.',
        explanation: 'Sử dụng Power Automate làm proxy giúp quản lý việc gọi API an toàn hơn (không lộ khóa API ở client) và cho phép xử lý logic phức tạp hơn ở phía sau.'
      },
      {
        question: 'Action nào trong Power Automate được dùng để gửi dữ liệu trả về cho Canvas App đã gọi nó?',
        options: ['HTTP Request', 'Send an email', 'Respond to a PowerApp or flow', 'Get items'],
        correctAnswer: 'Respond to a PowerApp or flow',
        explanation: 'Action này cho phép flow gửi lại các giá trị đầu ra (output) cho ứng dụng Power Apps, hoàn thành chu trình yêu cầu-phản hồi.'
      }
    ]
  },
  'pa-triggers': {
    topic: 'Tạo automate trigger cho Nhập/Xuất kho',
    questions: [
      {
        question: 'Loại Power Automate flow nào sẽ tự động kích hoạt khi một sự kiện xảy ra trong một hệ thống khác (ví dụ: một hàng mới được tạo trong Dataverse)?',
        options: ['Scheduled cloud flow', 'Instant cloud flow', 'Automated cloud flow', 'Business process flow'],
        correctAnswer: 'Automated cloud flow',
        explanation: 'Automated cloud flow được thiết kế để "lắng nghe" các sự kiện và tự động chạy khi sự kiện đó xảy ra.'
      },
      {
        question: 'Trong trigger "When a row is added, modified or deleted", thuộc tính nào xác định hành động cụ thể (tạo, sửa, hay xóa) sẽ kích hoạt flow?',
        options: ['Table name', 'Scope', 'Change type', 'Row ID'],
        correctAnswer: 'Change type',
        explanation: 'Change type cho phép bạn chỉ định chính xác flow nên chạy khi một hàng được "Added", "Modified", "Added or Modified", hay "Deleted".'
      }
    ]
  },
  'pa-scheduled': {
    topic: 'Tạo flow chạy theo giờ',
    questions: [
      {
        question: 'Trigger nào được sử dụng để bắt đầu một flow theo một lịch trình cố định (ví dụ: mỗi ngày lúc 9 giờ sáng)?',
        options: ['When an item is created', 'Manually trigger a flow', 'Recurrence', 'When a HTTP request is received'],
        correctAnswer: 'Recurrence',
        explanation: 'Trigger Recurrence (Lặp lại) là trái tim của Scheduled Cloud Flows, cho phép bạn thiết lập tần suất và thời gian chạy chính xác.'
      },
      {
        question: 'Trong kịch bản gửi báo cáo doanh số hàng ngày, action nào thường được dùng để tính tổng doanh thu từ một danh sách các đơn hàng?',
        options: ['HTTP Request', 'Compose', 'Initialize variable và Increment variable', 'Send an email'],
        correctAnswer: 'Initialize variable và Increment variable',
        explanation: 'Bạn thường tạo một biến để lưu tổng, sau đó lặp qua danh sách đơn hàng và cộng dồn giá trị vào biến đó bằng action "Increment variable".'
      }
    ]
  },
  'wr-js': {
    topic: 'Sử dụng JavaScript trong Form (Event onChange)',
    questions: [
      {
        question: 'Đối tượng chính trong Client API Object Model cung cấp quyền truy cập vào các thành phần trên form là gì?',
        options: ['window', 'Xrm.Page', 'executionContext', 'formContext'],
        correctAnswer: 'formContext',
        explanation: 'formContext là đối tượng chính để tương tác với dữ liệu và các điều khiển trên form, được lấy từ executionContext.'
      },
      {
        question: 'Sự kiện nào trên form sẽ kích hoạt một hàm JavaScript khi giá trị của một cột cụ thể thay đổi?',
        options: ['OnLoad', 'OnSave', 'OnChange', 'OnTabStateChange'],
        correctAnswer: 'OnChange',
        explanation: 'Sự kiện OnChange được gắn vào một cột cụ thể và sẽ được thực thi mỗi khi người dùng thay đổi giá trị của cột đó.'
      }
    ]
  },
  'wr-html': {
    topic: 'Tạo Command và Form in (HTML)',
    questions: [
      {
        question: 'Công cụ nào trong XrmToolBox thường được sử dụng để tùy chỉnh Command Bar (Ribbon) một cách trực quan?',
        options: ['FetchXML Builder', 'Ribbon Workbench', 'View Designer', 'SiteMap Editor'],
        correctAnswer: 'Ribbon Workbench',
        explanation: 'Ribbon Workbench là công cụ tiêu chuẩn và mạnh mẽ để thêm, ẩn hoặc tùy chỉnh các nút trên command bar của Model-driven Apps.'
      },
      {
        question: 'Khi tạo một form in tùy chỉnh bằng HTML Web Resource, làm thế nào để JavaScript trong trang HTML đó lấy được dữ liệu của bản ghi đang được xem?',
        options: ['Dữ liệu được tự động chèn vào.', 'Sử dụng Xrm.WebApi.retrieveRecord() với ID của bản ghi được truyền qua URL.', 'Không thể lấy được dữ liệu.', 'Sử dụng một Power Automate flow.'],
        correctAnswer: 'Sử dụng Xrm.WebApi.retrieveRecord() với ID của bản ghi được truyền qua URL.',
        explanation: 'Phương pháp phổ biến là truyền ID của bản ghi vào query string của URL của HTML Web Resource, sau đó dùng JavaScript và Web API để truy vấn dữ liệu chi tiết.'
      }
    ]
  },
  'pbi-dataflow': {
    topic: 'Tìm hiểu về Dataflow',
    questions: [
      {
        question: 'Lợi ích chính của việc sử dụng Power BI Dataflow là gì?',
        options: ['Tạo visual đẹp hơn.', 'Tái sử dụng logic chuẩn bị dữ liệu (ETL) cho nhiều báo cáo.', 'Tăng tốc độ làm mới dữ liệu từ nguồn.', 'Chỉ hoạt động trên Power BI Desktop.'],
        correctAnswer: 'Tái sử dụng logic chuẩn bị dữ liệu (ETL) cho nhiều báo cáo.',
        explanation: 'Dataflow giúp tập trung hóa việc chuẩn bị dữ liệu, cho phép logic ETL được tạo một lần và tái sử dụng bởi nhiều người dùng và bộ dữ liệu, đảm bảo tính nhất quán.'
      },
      {
        question: 'Dữ liệu đã được xử lý bởi Dataflow được lưu trữ ở đâu?',
        options: ['Trên máy tính của người dùng', 'Trong file PBIX', 'Azure Data Lake Storage Gen2', 'SQL Server'],
        correctAnswer: 'Azure Data Lake Storage Gen2',
        explanation: 'Power BI quản lý việc lưu trữ dữ liệu của dataflow trong Azure Data Lake, được tối ưu hóa cho việc phân tích dữ liệu lớn.'
      }
    ]
  },
  'pbi-etl': {
    topic: 'ETL với Power Query (Sale Order)',
    questions: [
      {
        question: 'Hành động nào trong Power Query được sử dụng để tổng hợp dữ liệu, ví dụ như tính tổng doanh thu theo nhóm sản phẩm và tỉnh thành?',
        options: ['Filter Rows', 'Merge Queries', 'Group By', 'Append Queries'],
        correctAnswer: 'Group By',
        explanation: 'Chức năng "Group By" là công cụ cốt lõi để tổng hợp (aggregate) dữ liệu. Nó nhóm các hàng dựa trên một hoặc nhiều cột và thực hiện các phép tính như Sum, Count, Average.'
      },
      {
        question: 'Quy trình ETL là viết tắt của cụm từ nào?',
        options: ['Extract, Transfer, Load', 'Execute, Transform, Link', 'Extract, Transform, Load', 'Export, Translate, Load'],
        correctAnswer: 'Extract, Transform, Load',
        explanation: 'ETL (Extract, Transform, Load) là quy trình tiêu chuẩn trong kho dữ liệu và business intelligence để trích xuất, biến đổi và tải dữ liệu vào hệ thống đích.'
      }
    ]
  },
  'pbi-report-agg': {
    topic: 'Tạo report Aggregated data',
    questions: [
      {
        question: 'Loại visual nào cho phép người dùng lọc dữ liệu trên toàn bộ trang báo cáo một cách trực quan?',
        options: ['Table (Bảng)', 'Card (Thẻ)', 'Slicer (Bộ lọc)', 'Column chart (Biểu đồ cột)'],
        correctAnswer: 'Slicer (Bộ lọc)',
        explanation: 'Slicer được thiết kế đặc biệt để cung cấp khả năng lọc tương tác, giúp người dùng dễ dàng khám phá các lát cắt khác nhau của dữ liệu.'
      },
      {
        question: 'Để hiển thị tỷ lệ phần trăm đóng góp của các danh mục vào một tổng thể, visual nào sau đây là phù hợp nhất?',
        options: ['Line chart (Biểu đồ đường)', 'Slicer (Bộ lọc)', 'Doughnut chart (Biểu đồ vành khuyên)', 'Table (Bảng)'],
        correctAnswer: 'Doughnut chart (Biểu đồ vành khuyên)',
        explanation: 'Biểu đồ vành khuyên (hoặc biểu đồ tròn) rất hiệu quả trong việc trực quan hóa mối quan hệ "một phần của tổng thể" (part-to-whole).'
      }
    ]
  },
  'pbi-report-detail': {
    topic: 'Tạo report Detail data (Đơn bán chi tiết)',
    questions: [
      {
        question: 'Khi tính toán tổng lũy kế (running total) trong Power Query, bước nào là quan trọng nhất cần thực hiện đầu tiên?',
        options: ['Thêm cột Index', 'Sắp xếp dữ liệu theo cột thời gian', 'Đổi tên các cột', 'Lọc ra các hàng trống'],
        correctAnswer: 'Sắp xếp dữ liệu theo cột thời gian',
        explanation: 'Việc sắp xếp dữ liệu đúng thứ tự (thường là theo ngày tháng tăng dần) là tối quan trọng để đảm bảo rằng phép tính lũy kế được cộng dồn một cách chính xác.'
      }
    ]
  },
  'pbi-margin-calc': {
    topic: 'Sử dụng Dataflow Gen1 tính Margin (%)',
    questions: [
      {
        question: 'Để tính giá bán hoặc giá mua trung bình một cách chính xác nhất khi số lượng mỗi lần mua/bán khác nhau, bạn nên sử dụng phương pháp nào?',
        options: ['Trung bình cộng đơn giản (Simple Average)', 'Lấy giá trị ở giữa (Median)', 'Bình quân gia quyền (Weighted Average)', 'Lấy giá trị xuất hiện nhiều nhất (Mode)'],
        correctAnswer: 'Bình quân gia quyền (Weighted Average)',
        explanation: 'Bình quân gia quyền (Tổng tiền / Tổng số lượng) cho kết quả chính xác hơn vì nó tính đến trọng số (số lượng) của mỗi giao dịch.'
      },
      {
        question: 'Công thức để tính Margin (Tỷ suất lợi nhuận) là gì?',
        options: ['(Giá bán - Giá mua) / Giá mua', '(Giá bán - Giá mua) / Giá bán', 'Giá bán / Giá mua', 'Giá mua / Giá bán'],
        correctAnswer: '(Giá bán - Giá mua) / Giá bán',
        explanation: 'Tỷ suất lợi nhuận (Margin) đo lường lợi nhuận trên mỗi đồng doanh thu, được tính bằng cách lấy lợi nhuận (Giá bán - Giá mua) chia cho doanh thu (Giá bán).'
      }
    ]
  },
  'pbi-report-margin': {
    topic: 'Tạo report Margin',
    questions: [
      {
        question: 'Tính năng nào của Power BI cho phép các visual trên cùng một trang tự động lọc lẫn nhau khi người dùng tương tác với một trong số chúng?',
        options: ['Bookmarks (Dấu trang)', 'Drillthrough (Xem chi tiết)', 'Cross-filtering and cross-highlighting (Lọc và tô sáng chéo)', 'Tooltips (Chú giải công cụ)'],
        correctAnswer: 'Cross-filtering and cross-highlighting (Lọc và tô sáng chéo)',
        explanation: 'Đây là hành vi tương tác mặc định trong Power BI. Khi bạn chọn một điểm dữ liệu trên một visual, nó sẽ tự động lọc hoặc tô sáng các visual khác trên trang báo cáo.'
      }
    ]
  },
};
