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
        question: 'Mục tiêu chính khi chọn xây dựng một Model-driven App là gì?',
        options: ['Tạo một ứng dụng có giao diện độc đáo, tùy chỉnh cao.', 'Xây dựng nhanh một ứng dụng quản lý quy trình nghiệp vụ phức tạp, tập trung vào dữ liệu.', 'Tạo một ứng dụng đơn giản, tập trung vào một tác vụ duy nhất cho di động.', 'Tích hợp với nhiều nguồn dữ liệu không phải của Microsoft.'],
        correctAnswer: 'Xây dựng nhanh một ứng dụng quản lý quy trình nghiệp vụ phức tạp, tập trung vào dữ liệu.',
        explanation: 'Thế mạnh của Model-driven Apps là khả năng nhanh chóng tạo ra các ứng dụng mạnh mẽ cho các quy trình nghiệp vụ phức tạp bằng cách tập trung vào mô hình dữ liệu thay vì thiết kế giao diện.'
      }
    ]
  },
  'mda-data-model': {
    topic: 'Tạo Solution, Table, Form, View',
    questions: [
      {
        question: 'Loại solution nào nên được sử dụng để triển khai ứng dụng đến môi trường TEST hoặc PRODUCTION?',
        options: ['Unmanaged Solution', 'Managed Solution', 'Default Solution', 'Custom Solution'],
        correctAnswer: 'Managed Solution',
        explanation: 'Managed Solutions được dùng để triển khai, đảm bảo các tùy chỉnh không bị thay đổi trực tiếp trên môi trường đích và cho phép quản lý phiên bản cũng như gỡ bỏ một cách sạch sẽ.'
      },
      {
        question: 'Loại Form nào được sử dụng để hiển thị thông tin tóm tắt của một bản ghi liên quan (lookup) ngay trên một form khác?',
        options: ['Main Form', 'Quick Create Form', 'Card Form', 'Quick View Form'],
        correctAnswer: 'Quick View Form',
        explanation: 'Quick View Form cho phép bạn hiển thị dữ liệu chỉ đọc từ một bảng khác có liên quan thông qua một trường lookup, làm phong phú thêm thông tin ngữ cảnh cho người dùng.'
      },
      {
        question: 'Khi nào bạn nên chọn quyền sở hữu (ownership) là "User or Team" cho một bảng?',
        options: ['Khi dữ liệu là dữ liệu tham chiếu chung cho toàn công ty, như danh sách quốc gia.', 'Khi bạn cần các quyền bảo mật chi tiết, cho phép các người dùng khác nhau có các quyền truy cập khác nhau trên các hàng dữ liệu khác nhau.', 'Khi bảng chứa ít hơn 100 hàng dữ liệu.', 'Khi bạn muốn tối ưu hóa hiệu suất truy vấn.'],
        correctAnswer: 'Khi bạn cần các quyền bảo mật chi tiết, cho phép các người dùng khác nhau có các quyền truy cập khác nhau trên các hàng dữ liệu khác nhau.',
        explanation: 'Quyền sở hữu "User or Team" kích hoạt mô hình bảo mật dựa trên vai trò phức tạp của Dataverse, cho phép kiểm soát chặt chẽ ai có thể làm gì trên từng bản ghi.'
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
    'mda-relationships': {
    topic: 'Các loại Relationships',
    questions: [
      {
        question: 'Mối quan hệ giữa một "Khách hàng" và nhiều "Đơn bán" của khách hàng đó là loại quan hệ gì?',
        options: ['1:1 (One-to-One)', '1:N (One-to-Many)', 'N:N (Many-to-Many)', 'Không có quan hệ'],
        correctAnswer: '1:N (One-to-Many)',
        explanation: 'Đây là mối quan hệ 1:N vì một khách hàng có thể có nhiều đơn bán, nhưng mỗi đơn bán chỉ thuộc về một khách hàng.'
      },
      {
        question: 'Hành vi mối quan hệ (Relationship Behavior) nào sẽ ngăn chặn việc xóa một bản ghi cha nếu nó vẫn còn các bản ghi con liên quan?',
        options: ['Parental', 'Referential', 'Referential, Restrict Delete', 'Configurable Cascading'],
        correctAnswer: 'Referential, Restrict Delete',
        explanation: 'Hành vi "Referential, Restrict Delete" là một biện pháp an toàn để bảo vệ toàn vẹn dữ liệu, đảm bảo bạn không vô tình xóa các bản ghi cha mà vẫn còn các bản ghi con phụ thuộc.'
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
        question: 'Đặc điểm nào sau đây là đúng về Cột Rollup?',
        options: ['Giá trị được cập nhật ngay lập tức khi dữ liệu con thay đổi.', 'Giá trị được cập nhật định kỳ bởi một công việc hệ thống (thường là mỗi giờ).', 'Có thể thực hiện các phép tính phức tạp trên các bảng không liên quan.', 'Chỉ có thể đếm số lượng bản ghi.'],
        correctAnswer: 'Giá trị được cập nhật định kỳ bởi một công việc hệ thống (thường là mỗi giờ).',
        explanation: 'Cột Rollup không cập nhật theo thời gian thực. Chúng được tính toán bởi các công việc hệ thống chạy nền theo lịch trình, điều này quan trọng cần lưu ý khi thiết kế ứng dụng.'
      }
    ]
  },
    'mda-business-rules': {
    topic: 'Tạo Business Rules',
    questions: [
      {
        question: 'Hành động nào sau đây KHÔNG thể thực hiện bằng một Business Rule?',
        options: ['Hiện hoặc ẩn một cột', 'Cập nhật một cột trên một bảng liên quan', 'Thiết lập giá trị cho một cột', 'Hiển thị một thông báo lỗi trên form'],
        correctAnswer: 'Cập nhật một cột trên một bảng liên quan',
        explanation: 'Business Rules chỉ có thể thực hiện logic trên các cột của cùng một bảng. Để thực hiện các hành động trên các bảng liên quan, bạn cần sử dụng Power Automate hoặc JavaScript.'
      },
      {
        question: 'Phạm vi (Scope) nào của Business Rule sẽ đảm bảo logic được thực thi ngay cả khi dữ liệu được tạo/cập nhật thông qua một API?',
        options: ['Specific Form', 'All Forms', 'Entity', 'Application'],
        correctAnswer: 'Entity',
        explanation: 'Khi đặt scope là "Entity", rule sẽ được thực thi ở cả phía máy khách (client) và máy chủ (server), đảm bảo tính toàn vẹn dữ liệu từ mọi nguồn.'
      }
    ]
  },
  'mda-keys': {
    topic: 'Định nghĩa Alternate Keys',
    questions: [
      {
        question: 'Ngoài việc chống trùng lặp dữ liệu, mục đích quan trọng khác của Alternate Key là gì?',
        options: ['Để thay thế Primary Key (GUID) của hệ thống.', 'Để đơn giản hóa việc tích hợp dữ liệu thông qua API.', 'Để tăng tốc độ hiển thị của form.', 'Để tạo các mối quan hệ N:N.'],
        correctAnswer: 'Để đơn giản hóa việc tích hợp dữ liệu thông qua API.',
        explanation: 'Alternate Keys cho phép các hệ thống bên ngoài tham chiếu đến một bản ghi bằng một giá trị nghiệp vụ có ý nghĩa (như Mã sản phẩm) thay vì phải biết GUID, giúp việc tích hợp dễ dàng và đáng tin cậy hơn.'
      }
    ]
  },
  'mda-charts': {
    topic: 'Tạo và sử dụng Charts',
    questions: [
      {
        question: 'Charts trong Model-driven App trực quan hóa dữ liệu từ đâu?',
        options: ['Từ một Solution', 'Trực tiếp từ một Table', 'Từ một View', 'Từ một Form'],
        correctAnswer: 'Từ một View',
        explanation: 'Một chart luôn được liên kết với một table và hiển thị dữ liệu được lọc và sắp xếp bởi một View cụ thể của table đó.'
      },
      {
        question: 'Tính năng nào cho phép người dùng bấm vào một phần của biểu đồ để xem dữ liệu được chia nhỏ hơn theo một chiều khác?',
        options: ['Filtering', 'Drill Down', 'Sorting', 'Grouping'],
        correctAnswer: 'Drill Down',
        explanation: 'Drill Down là tính năng cho phép phân tích sâu hơn bằng cách điều hướng từ dữ liệu tổng hợp xuống dữ liệu chi tiết hơn ngay trên biểu đồ.'
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
  'ca-common-functions': {
    topic: 'Các hàm Power Fx thông dụng',
    questions: [
      {
        question: 'Hàm nào được sử dụng để thêm một bản ghi mới vào một collection mà không xóa các bản ghi hiện có?',
        options: ['ClearCollect()', 'Clear()', 'Patch()', 'Collect()'],
        correctAnswer: 'Collect()',
        explanation: 'Hàm Collect() được thiết kế để thêm các mục vào một collection. ClearCollect() sẽ xóa collection trước khi thêm các mục mới.'
      },
      {
        question: 'Sự khác biệt chính giữa biến được tạo bằng Set() và biến được tạo bằng UpdateContext() là gì?',
        options: ['Set() chỉ dùng cho số, UpdateContext() dùng cho văn bản.', 'Biến Set() là toàn cục (global), trong khi biến UpdateContext() là cục bộ cho màn hình hiện tại (local).', 'Set() nhanh hơn UpdateContext().', 'Không có sự khác biệt nào.'],
        correctAnswer: 'Biến Set() là toàn cục (global), trong khi biến UpdateContext() là cục bộ cho màn hình hiện tại (local).',
        explanation: 'Biến toàn cục (Set) có thể được sử dụng trên tất cả các màn hình, trong khi biến ngữ cảnh (UpdateContext) chỉ tồn tại trên màn hình nơi nó được tạo.'
      }
    ]
  },
  'ca-performance': {
    topic: 'Tối ưu hóa hiệu năng',
    questions: [
      {
        question: 'Delegation (Ủy thác) trong Power Apps có nghĩa là gì?',
        options: ['Giao nhiệm vụ cho một người dùng khác.', 'Yêu cầu nguồn dữ liệu thực hiện việc xử lý dữ liệu.', 'Tải tất cả dữ liệu về ứng dụng để xử lý cục bộ.', 'Tăng giới hạn số bản ghi từ 500 lên 2000.'],
        correctAnswer: 'Yêu cầu nguồn dữ liệu thực hiện việc xử lý dữ liệu.',
        explanation: 'Ủy thác là chìa khóa cho hiệu suất. Nó cho phép các nguồn dữ liệu như Dataverse hoặc SQL Server thực hiện công việc nặng nhọc, giảm lượng dữ liệu cần truyền qua mạng.'
      },
      {
        question: 'Hàm nào có thể giúp tăng tốc thời gian tải ứng dụng bằng cách chạy nhiều công thức cùng một lúc trong App.OnStart?',
        options: ['ForAll()', 'Concurrent()', 'If()', 'Patch()'],
        correctAnswer: 'Concurrent()',
        explanation: 'Hàm Concurrent() thực thi các công thức bên trong nó một cách đồng thời, không cần chờ công thức trước hoàn thành, giúp giảm đáng kể thời gian tải ban đầu.'
      }
    ]
  },
  'ca-tips-tricks': {
    topic: 'Mẹo và thủ thuật',
    questions: [
      {
        question: 'Phương pháp tốt nhất để tạo các yếu tố giao diện người dùng có thể tái sử dụng trên nhiều màn hình hoặc ứng dụng là gì?',
        options: ['Sao chép và dán các control.', 'Sử dụng Components và Component Libraries.', 'Tạo một màn hình mẫu và sao chép nó.', 'Viết một công thức dài trong App.OnStart.'],
        correctAnswer: 'Sử dụng Components và Component Libraries.',
        explanation: 'Components cho phép bạn đóng gói một nhóm các control thành một đơn vị có thể tái sử dụng, giúp quản lý và cập nhật giao diện một cách nhất quán và hiệu quả.'
      },
      {
        question: 'Hàm nào được sử dụng để xử lý các lỗi tiềm ẩn trong một công thức và cung cấp một giá trị thay thế hoặc hành động thay thế?',
        options: ['IsBlank()', 'Validate()', 'IfError()', 'Error()'],
        correctAnswer: 'IfError()',
        explanation: 'IfError() cho phép bạn bẫy các lỗi có thể xảy ra. Nếu công thức đầu tiên gây ra lỗi, nó sẽ thực thi công thức thay thế, giúp tạo ra trải nghiệm người dùng mượt mà hơn.'
      }
    ]
  },
  'pa-intro': {
    topic: 'Giới thiệu về Power Automate',
    questions: [
      {
        question: 'Loại flow nào được kích hoạt thủ công từ một nút bấm trong Power Apps?',
        options: ['Automated cloud flow', 'Scheduled cloud flow', 'Instant cloud flow', 'Desktop flow'],
        correctAnswer: 'Instant cloud flow',
        explanation: 'Instant cloud flows (Flow tức thì) được thiết kế để chạy theo yêu cầu, ví dụ như khi người dùng nhấn một nút.'
      },
      {
        question: 'Thành phần nào trong một flow định nghĩa sự kiện bắt đầu của nó?',
        options: ['Action', 'Connector', 'Trigger', 'Condition'],
        correctAnswer: 'Trigger',
        explanation: 'Mỗi flow bắt đầu với một và chỉ một Trigger (Trình kích hoạt), đó là sự kiện khởi động toàn bộ luồng công việc.'
      }
    ]
  },
  'pa-triggers': {
    topic: 'Sử dụng Triggers (Automated Flows)',
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
    topic: 'Tạo Flow theo lịch (Scheduled Flows)',
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
  'pa-expressions': {
    topic: 'Làm chủ Biểu thức (Expressions)',
    questions: [
      {
        question: 'Hàm biểu thức nào được sử dụng để nối chuỗi "Mr. " và tên "John" lại với nhau?',
        options: ['add()', 'concat()', 'join()', 'string()'],
        correctAnswer: 'concat()',
        explanation: "Hàm `concat()` được sử dụng để nối hai hoặc nhiều chuỗi văn bản lại với nhau. Ví dụ: `concat('Mr. ', 'John')`."
      },
      {
        question: "Hàm `formatDateTime(utcNow(), 'dd-MM-yyyy')` sẽ trả về kết quả có dạng như thế nào?",
        options: ['2025-04-01', '01-04-2025', 'April 1, 2025', '04-01-2025'],
        correctAnswer: '01-04-2025',
        explanation: "Chuỗi định dạng 'dd-MM-yyyy' chỉ định rằng ngày, tháng và năm phải được hiển thị theo thứ tự đó, với hai chữ số cho ngày và tháng."
      }
    ]
  },
  'pa-error-handling': {
    topic: 'Xử lý lỗi nâng cao',
    questions: [
      {
        question: "Để cấu hình một action chỉ chạy khi action trước đó thất bại, bạn sẽ sử dụng cài đặt nào?",
        options: ['Add a comment', 'Configure run after', 'Action Settings', 'Initialize variable'],
        correctAnswer: 'Configure run after',
        explanation: "'Configure run after' cho phép bạn xác định điều kiện để một action chạy, bao gồm cả việc chạy khi action trước đó 'has failed'."
      },
      {
        question: 'Control nào giúp nhóm một loạt các hành động lại với nhau để bạn có thể bắt lỗi cho cả khối?',
        options: ['Condition', 'Switch', 'Apply to each', 'Scope'],
        correctAnswer: 'Scope',
        explanation: "Control 'Scope' hoạt động như một container, cho phép bạn áp dụng 'Configure run after' cho toàn bộ nhóm hành động bên trong, rất lý tưởng để tạo khối 'Try' và 'Catch'."
      }
    ]
  },
  'pa-best-practices': {
    topic: 'Mẹo và Tối ưu hóa hiệu năng',
    questions: [
      {
        question: 'Phương pháp nào là hiệu quả nhất để chỉ lấy các mục từ SharePoint có cột "Trạng thái" là "Hoàn thành"?',
        options: ['Lấy tất cả các mục rồi dùng action "Filter array".', 'Sử dụng OData Filter Query trong action "Get items".', 'Dùng vòng lặp "Apply to each" và một "Condition".', 'Sử dụng action "Select".'],
        correctAnswer: 'Sử dụng OData Filter Query trong action "Get items".',
        explanation: 'Lọc tại nguồn bằng OData Filter Query là cách hiệu quả nhất vì nó giảm lượng dữ liệu truyền qua mạng và giảm tải xử lý cho flow của bạn.'
      },
      {
        question: 'Cài đặt nào trên vòng lặp "Apply to each" có thể tăng tốc đáng kể việc xử lý một mảng lớn?',
        options: ['Timeout', 'Chunking', 'Concurrency Control', 'Retry Policy'],
        correctAnswer: 'Concurrency Control',
        explanation: 'Bật "Concurrency Control" cho phép flow xử lý nhiều mục trong mảng một cách song song, giúp giảm đáng kể tổng thời gian thực thi.'
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
  'pq-intro': {
    topic: 'Giới thiệu Power Query & Ngôn ngữ M',
    questions: [
      {
        question: 'Mục đích chính của Power Query là gì?',
        options: ['Tạo các biểu đồ và báo cáo trực quan.', 'Viết các ứng dụng di động low-code.', 'Kết nối, làm sạch và định hình lại dữ liệu (ETL).', 'Tự động hóa các luồng công việc.'],
        correctAnswer: 'Kết nối, làm sạch và định hình lại dữ liệu (ETL).',
        explanation: 'Power Query là công cụ ETL (Extract, Transform, Load) chuyên dụng, giúp bạn chuẩn bị dữ liệu trước khi đưa vào phân tích hoặc lưu trữ.'
      },
      {
        question: 'Ngôn ngữ lập trình nào hoạt động "phía sau" giao diện người dùng của Power Query?',
        options: ['DAX', 'Python', 'SQL', 'Ngôn ngữ M'],
        correctAnswer: 'Ngôn ngữ M',
        explanation: 'Mọi thao tác nhấp chuột trên giao diện Power Query Editor đều tạo ra mã bằng ngôn ngữ M, bạn có thể xem và chỉnh sửa nó trong Advanced Editor.'
      }
    ]
  },
  'pq-common-transforms': {
    topic: 'Các phép transform dữ liệu cơ bản',
    questions: [
      {
        question: 'Để loại bỏ các hàng có giá trị "null" trong một cột, bạn nên sử dụng chức năng nào?',
        options: ['Remove Columns', 'Split Column', 'Filter Rows', 'Replace Values'],
        correctAnswer: 'Filter Rows',
        explanation: 'Chức năng Lọc (Filter) cho phép bạn giữ lại hoặc loại bỏ các hàng dựa trên các điều kiện, bao gồm cả việc loại bỏ các giá trị trống hoặc null.'
      },
      {
        question: 'Bạn có một cột "Thành phố, Quốc gia" (ví dụ: "Hà Nội, Việt Nam"). Bạn muốn tách nó thành hai cột riêng biệt. Bạn sẽ dùng chức năng gì?',
        options: ['Change Data Type', 'Merge Queries', 'Split Column', 'Group By'],
        correctAnswer: 'Split Column',
        explanation: 'Chức năng "Split Column by Delimiter" (Tách cột theo ký tự phân tách) là lựa chọn hoàn hảo để tách một cột thành nhiều cột dựa trên một ký tự như dấu phẩy, khoảng trắng, v.v.'
      }
    ]
  },
  'pq-advanced-transforms': {
    topic: 'Các kỹ thuật transform nâng cao',
    questions: [
      {
        question: 'Chức năng nào được sử dụng để chuyển đổi một bảng có các cột "Tháng 1", "Tháng 2", "Tháng 3" thành một bảng chỉ có hai cột "Tháng" và "Doanh thu"?',
        options: ['Pivot Columns', 'Group By', 'Unpivot Columns', 'Conditional Column'],
        correctAnswer: 'Unpivot Columns',
        explanation: 'Unpivot dùng để chuyển đổi dữ liệu từ định dạng "rộng" sang định dạng "dài", rất hữu ích cho việc chuẩn hóa dữ liệu để phân tích.'
      },
      {
        question: 'Để tính tổng doanh thu cho mỗi danh mục sản phẩm, bạn nên sử dụng chức năng nào?',
        options: ['Filter Rows', 'Merge Queries', 'Group By', 'Append Queries'],
        correctAnswer: 'Group By',
        explanation: 'Group By cho phép bạn nhóm các hàng dựa trên một hoặc nhiều cột và thực hiện các phép tính tổng hợp (Sum, Average, Count) trên mỗi nhóm.'
      }
    ]
  },
  'pq-merge-append': {
    topic: 'Kết hợp Queries (Merge & Append)',
    questions: [
      {
        question: 'Khi nào bạn nên sử dụng "Append Queries"?',
        options: ['Khi bạn muốn thêm các cột từ một bảng khác dựa trên một khóa chung.', 'Khi bạn muốn xếp chồng các hàng từ nhiều bảng có cấu trúc tương tự.', 'Khi bạn muốn tính tổng dữ liệu.', 'Khi bạn muốn lọc dữ liệu.'],
        correctAnswer: 'Khi bạn muốn xếp chồng các hàng từ nhiều bảng có cấu trúc tương tự.',
        explanation: 'Append (nối) được sử dụng để kết hợp các hàng, tương tự như UNION trong SQL. Ví dụ: nối dữ liệu bán hàng tháng 1 và tháng 2.'
      },
      {
        question: '"Merge Queries" trong Power Query tương đương với khái niệm nào trong SQL?',
        options: ['UNION', 'GROUP BY', 'JOIN', 'SELECT'],
        correctAnswer: 'JOIN',
        explanation: 'Merge (phối) được sử dụng để kết hợp các cột từ hai bảng dựa trên một hoặc nhiều cột chung, tương tự như các loại JOIN trong SQL.'
      }
    ]
  },
  'pq-query-folding': {
    topic: 'Chủ đề chuyên sâu: Query Folding',
    questions: [
      {
        question: 'Query Folding là gì?',
        options: ['Một cách để nhóm các query lại với nhau.', 'Quá trình Power Query dịch các bước transform thành ngôn ngữ của nguồn dữ liệu (ví dụ: SQL) để xử lý tại nguồn.', 'Một tính năng để đổi tên các bước đã áp dụng.', 'Một lỗi xảy ra khi query quá phức tạp.'],
        correctAnswer: 'Quá trình Power Query dịch các bước transform thành ngôn ngữ của nguồn dữ liệu (ví dụ: SQL) để xử lý tại nguồn.',
        explanation: 'Query Folding là tính năng hiệu năng quan trọng nhất, giúp đẩy việc xử lý nặng về phía máy chủ nguồn, giảm thời gian làm mới và lưu lượng mạng.'
      },
      {
        question: 'Bạn có thể kiểm tra xem Query Folding có còn hoạt động sau một bước transform hay không bằng cách nào?',
        options: ['Kiểm tra thanh công thức M.', 'Chuột phải vào bước đó và xem tùy chọn "View Native Query" có sáng lên không.', 'Kiểm tra phần xem trước dữ liệu.', 'Không có cách nào để kiểm tra.'],
        correctAnswer: 'Chuột phải vào bước đó và xem tùy chọn "View Native Query" có sáng lên không.',
        explanation: 'Nếu "View Native Query" có thể nhấp được, điều đó có nghĩa là Power Query có thể dịch bước đó và tất cả các bước trước đó thành một câu lệnh gốc, và Query Folding đang hoạt động.'
      },
      {
        question: 'Hành động nào sau đây có khả năng cao sẽ "phá vỡ" Query Folding?',
        options: ['Lọc một cột văn bản (Filter Rows)', 'Sắp xếp một cột ngày tháng (Sort Rows)', 'Thêm một cột Index (Add Index Column)', 'Xóa một vài cột (Remove Columns)'],
        correctAnswer: 'Thêm một cột Index (Add Index Column)',
        explanation: 'Việc thêm cột Index là một phép transform chỉ có thể thực hiện bởi Power Query engine, nó không có tương đương trong SQL, do đó nó sẽ phá vỡ Query Folding.'
      }
    ]
  },
  'pq-in-power-bi': {
    topic: 'Ứng dụng trong Power BI (Dataflows & Linked Tables)',
    questions: [
      {
        question: 'Lợi ích chính của việc sử dụng Power BI Dataflow là gì?',
        options: ['Tạo visual đẹp hơn.', 'Tái sử dụng logic chuẩn bị dữ liệu (ETL) cho nhiều báo cáo.', 'Tăng tốc độ làm mới dữ liệu từ nguồn.', 'Chỉ hoạt động trên Power BI Desktop.'],
        correctAnswer: 'Tái sử dụng logic chuẩn bị dữ liệu (ETL) cho nhiều báo cáo.',
        explanation: 'Dataflow giúp tập trung hóa việc chuẩn bị dữ liệu, cho phép logic ETL được tạo một lần và tái sử dụng bởi nhiều người dùng và bộ dữ liệu, đảm bảo tính nhất quán.'
      },
      {
        question: 'Linked Tables trong Dataflows cho phép bạn làm gì?',
        options: ['Kết nối một Dataflow với một Power App.', 'Sử dụng lại một bảng đã được xử lý trong một Dataflow này từ một Dataflow khác.', 'Tạo một liên kết web đến dữ liệu.', 'Join một bảng SQL với một file Excel.'],
        correctAnswer: 'Sử dụng lại một bảng đã được xử lý trong một Dataflow này từ một Dataflow khác.',
        explanation: 'Linked Tables là tính năng cốt lõi để tái sử dụng và phân tách logic, cho phép bạn xây dựng một nguồn dữ liệu đáng tin cậy và sử dụng nó trên nhiều dataflow khác nhau.'
      }
    ]
  },
  'pq-in-power-apps': {
    topic: 'Ứng dụng trong Power Apps',
    questions: [
      {
        question: 'Giới hạn chính của việc sử dụng truy vấn Power Query trong Power Apps là gì?',
        options: ['Chúng chỉ có thể kết nối với SharePoint.', 'Chúng chỉ dùng để đọc dữ liệu (read-only) và không thể ủy thác (non-delegable).', 'Chúng rất chậm.', 'Chúng yêu cầu phải có giấy phép Premium.'],
        correctAnswer: 'Chúng chỉ dùng để đọc dữ liệu (read-only) và không thể ủy thác (non-delegable).',
        explanation: 'Bạn không thể ghi dữ liệu trở lại nguồn thông qua truy vấn Power Query, và phải luôn cẩn thận với giới hạn số lượng bản ghi do không thể ủy thác.'
      },
      {
        question: 'Trường hợp nào sau đây là phù hợp nhất để sử dụng Power Query trong Canvas App?',
        options: ['Để tạo một form cho người dùng nhập và lưu dữ liệu.', 'Để hiển thị một danh sách lớn hơn 10,000 sản phẩm có thể tìm kiếm.', 'Để tải và định hình một danh sách các danh mục sản phẩm không thay đổi thường xuyên.', 'Để cập nhật tồn kho theo thời gian thực.'],
        correctAnswer: 'Để tải và định hình một danh sách các danh mục sản phẩm không thay đổi thường xuyên.',
        explanation: 'Power Query trong Power Apps rất lý tưởng cho việc chuẩn bị dữ liệu tham chiếu, dữ liệu tĩnh hoặc dữ liệu cần các phép biến đổi phức tạp mà Power Fx khó thực hiện.'
      }
    ]
  },
  'pq-in-excel': {
    topic: 'Ứng dụng trong Excel (Get & Transform)',
    questions: [
      {
        question: 'Trong Excel, Power Query được biết đến dưới tên gì trong giao diện người dùng?',
        options: ['Power Pivot', 'Data Streamer', 'Get & Transform Data', 'Formulas'],
        correctAnswer: 'Get & Transform Data',
        explanation: 'Trong tab "Data" của Excel, nhóm chức năng Power Query được gọi là "Get & Transform Data".'
      },
      {
        question: 'Kịch bản nào là phổ biến nhất khi sử dụng Power Query trong Excel?',
        options: ['Gửi email hàng loạt.', 'Tự động hóa việc kết hợp dữ liệu từ nhiều file và làm sạch chúng cho báo cáo hàng tháng.', 'Tạo các biểu đồ động.', 'Viết các macro VBA phức tạp.'],
        correctAnswer: 'Tự động hóa việc kết hợp dữ liệu từ nhiều file và làm sạch chúng cho báo cáo hàng tháng.',
        explanation: 'Thế mạnh lớn nhất của Power Query trong Excel là tự động hóa các quy trình ETL lặp đi lặp lại, tiết kiệm hàng giờ làm việc thủ công.'
      }
    ]
  },
  'pq-best-practices': {
    topic: 'Mẹo & Tối ưu hóa khác',
    questions: [
      {
        question: 'Phương pháp "Staging Queries" đề cập đến điều gì?',
        options: ['Tạo các query phức tạp nhất có thể.', 'Tạo các query gốc để lấy dữ liệu thô (vô hiệu hóa tải), sau đó tham chiếu đến chúng để biến đổi.', 'Đổi tên tất cả các query để có tiền tố "Staging_".', 'Chỉ sử dụng khi kết nối với SQL Server.'],
        correctAnswer: 'Tạo các query gốc để lấy dữ liệu thô (vô hiệu hóa tải), sau đó tham chiếu đến chúng để biến đổi.',
        explanation: 'Staging Queries giúp tách biệt logic lấy dữ liệu và logic biến đổi, giúp các truy vấn dễ quản lý hơn và tránh gọi đến nguồn dữ liệu nhiều lần.'
      },
      {
        question: 'Tại sao việc xóa các cột không cần thiết ở các bước đầu tiên lại quan trọng?',
        options: ['Vì có giới hạn về số lượng cột trong Power Query.', 'Nó làm giảm lượng dữ liệu cần xử lý trong các bước sau, giúp tăng hiệu suất.', 'Nó không quan trọng, bạn có thể xóa cột ở bất kỳ đâu.', 'Để làm cho thanh cuộn ngang nhỏ hơn.'],
        correctAnswer: 'Nó làm giảm lượng dữ liệu cần xử lý trong các bước sau, giúp tăng hiệu suất.',
        explanation: 'Việc giảm "chiều rộng" của bảng dữ liệu sớm sẽ làm cho tất cả các hoạt động tiếp theo (lọc, nhóm, v.v.) nhanh hơn vì có ít dữ liệu hơn để xử lý.'
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
  'ai-fundamentals': {
    topic: 'Giới thiệu về Trí tuệ Nhân tạo',
    questions: [
      {
        question: 'Mối quan hệ nào sau đây mô tả đúng nhất về AI, Machine Learning (ML), và Deep Learning (DL)?',
        options: [
          'AI là một tập hợp con của ML, ML là một tập hợp con của DL.',
          'ML là một tập hợp con của AI, DL là một tập hợp con của ML.',
          'DL là một tập hợp con của AI, AI là một tập hợp con của ML.',
          'AI, ML, và DL là các lĩnh vực hoàn toàn riêng biệt.'
        ],
        correctAnswer: 'ML là một tập hợp con của AI, DL là một tập hợp con của ML.',
        explanation: 'Trí tuệ Nhân tạo (AI) là lĩnh vực rộng lớn nhất. Machine Learning (ML) là một phương pháp để đạt được AI. Deep Learning (DL) là một kỹ thuật chuyên biệt trong ML.'
      },
      {
        question: 'Đặc điểm chính của Generative AI (AI tạo sinh) là gì?',
        options: [
          'Phân loại dữ liệu có sẵn.',
          'Dự đoán một giá trị số.',
          'Tạo ra nội dung mới và nguyên bản.',
          'Nhận dạng các đối tượng trong ảnh.'
        ],
        correctAnswer: 'Tạo ra nội dung mới và nguyên bản.',
        explanation: 'Generative AI tập trung vào việc tạo ra nội dung mới như văn bản, hình ảnh, âm thanh, thay vì chỉ phân tích dữ liệu hiện có.'
      }
    ]
  },
  'agent-concepts': {
    topic: 'Các khái niệm về Agent',
    questions: [
      {
        question: 'Ba thành phần cốt lõi của một AI Agent là gì?',
        options: [
          'Đầu vào, Xử lý, Đầu ra',
          'Dữ liệu, Thuật toán, Mô hình',
          'Nhận thức (Perception), Bộ não (Brain), Hành động (Action)',
          'Copilot Studio, Power Automate, AI Builder'
        ],
        correctAnswer: 'Nhận thức (Perception), Bộ não (Brain), Hành động (Action)',
        explanation: 'Một agent nhận thức môi trường, suy nghĩ và ra quyết định, sau đó thực hiện hành động để tác động lại môi trường.'
      },
      {
        question: 'Thành phần nào của một agent cho phép nó tác động trở lại môi trường (ví dụ: gửi email, cập nhật cơ sở dữ liệu)?',
        options: ['Sensors (Cảm biến)', 'Brain (Bộ não)', 'Actuators (Cơ cấu chấp hành)', 'Model (Mô hình)'],
        correctAnswer: 'Actuators (Cơ cấu chấp hành)',
        explanation: 'Actuators là các cơ chế mà agent sử dụng để thực hiện hành động. Trong Power Platform, Power Automate thường đóng vai trò là một tập hợp các actuators mạnh mẽ.'
      }
    ]
  },
  'ai-builder': {
    topic: 'Giới thiệu AI Builder',
    questions: [
      {
        question: 'Lợi ích chính của việc sử dụng AI Builder là gì?',
        options: ['Viết các thuật toán AI phức tạp bằng Python.', 'Thêm các khả năng AI vào ứng dụng và flow mà không cần code.', 'Chỉ dùng để phân tích dữ liệu trong Power BI.', 'Xây dựng các chatbot tùy chỉnh.'],
        correctAnswer: 'Thêm các khả năng AI vào ứng dụng và flow mà không cần code.',
        explanation: 'AI Builder dân chủ hóa AI bằng cách cung cấp các mô hình dựng sẵn và tùy chỉnh có thể tích hợp vào Power Platform một cách dễ dàng.'
      }
    ]
  },
  'copilot-studio': {
    topic: 'Xây dựng Copilot (Virtual Agents)',
    questions: [
      {
        question: 'Trong Copilot Studio, thành phần nào định nghĩa một nhánh của cuộc hội thoại được kích hoạt bởi các cụm từ của người dùng?',
        options: ['Entity', 'Action', 'Topic', 'Node'],
        correctAnswer: 'Topic',
        explanation: 'Mỗi Topic đại diện cho một luồng hội thoại cụ thể mà copilot có thể xử lý, được bắt đầu bởi các cụm từ kích hoạt (trigger phrases).'
      }
    ]
  },
  'agent-best-practices': {
    topic: 'Best Practices cho Agent',
    questions: [
      {
        question: 'Nguyên tắc thiết kế quan trọng nhất khi bắt đầu xây dựng một AI agent mới là gì?',
        options: [
          'Tích hợp càng nhiều công cụ càng tốt.',
          'Bắt đầu với một mục tiêu và phạm vi rõ ràng, cụ thể.',
          'Làm cho agent có thể trả lời mọi loại câu hỏi.',
          'Sử dụng mô hình AI phức tạp nhất hiện có.'
        ],
        correctAnswer: 'Bắt đầu với một mục tiêu và phạm vi rõ ràng, cụ thể.',
        explanation: 'Bắt đầu với phạm vi hẹp và được xác định rõ ràng giúp đảm bảo thành công ban đầu và cho phép bạn lặp lại và mở rộng một cách có kiểm soát.'
      },
      {
        question: 'Khái niệm "Human-in-the-Loop" trong thiết kế agent có nghĩa là gì?',
        options: [
          'Agent có thể trò chuyện một cách tự nhiên như con người.',
          'Một cơ chế để con người có thể giám sát hoặc phê duyệt các hành động của agent.',
          'Agent có thể tự động học hỏi từ các cuộc trò chuyện.',
          'Loại bỏ hoàn toàn sự can thiệp của con người.'
        ],
        correctAnswer: 'Một cơ chế để con người có thể giám sát hoặc phê duyệt các hành động của agent.',
        explanation: 'Human-in-the-loop là một thực tiễn an toàn quan trọng, đặc biệt đối với các hành động có rủi ro cao, đảm bảo có sự giám sát của con người.'
      }
    ]
  },
  'pe-basics': {
    topic: 'Nguyên tắc cơ bản của Prompt',
    questions: [
      {
        question: 'Tham số nào kiểm soát mức độ ngẫu nhiên hoặc "sáng tạo" của đầu ra từ một LLM?',
        options: ['Top-K', 'Top-P', 'Temperature', 'Output Length'],
        correctAnswer: 'Temperature',
        explanation: 'Temperature (Nhiệt độ) điều chỉnh sự ngẫu nhiên trong việc lựa chọn token. Giá trị cao hơn dẫn đến kết quả sáng tạo hơn, trong khi giá trị thấp hơn làm cho kết quả dễ đoán hơn.'
      },
      {
        question: 'Kỹ thuật prompting nào cung cấp cho mô hình một vài ví dụ về đầu vào và đầu ra mong muốn?',
        options: ['Zero-shot', 'One-shot', 'Few-shot', 'System Prompting'],
        correctAnswer: 'Few-shot',
        explanation: 'Few-shot prompting "dạy" mô hình cách thực hiện một tác vụ bằng cách cung cấp nhiều ví dụ, giúp nó hiểu rõ hơn về định dạng và kiểu kết quả mong đợi.'
      },
      {
        question: 'Việc yêu cầu mô hình "Hãy hành động như một nhà thơ" là một ví dụ về kỹ thuật prompting nào?',
        options: ['Contextual Prompting', 'Role Prompting', 'System Prompting', 'Zero-shot'],
        correctAnswer: 'Role Prompting',
        explanation: 'Role prompting (Gán vai trò) chỉ định một nhân vật hoặc vai trò cụ thể cho mô hình, ảnh hưởng đến giọng văn, phong cách và kiến thức của nó.'
      }
    ]
  },
  'pe-advanced': {
    topic: 'Kỹ thuật Prompt nâng cao',
    questions: [
      {
        question: 'Kỹ thuật nào yêu cầu mô hình giải thích các bước suy luận trung gian trước khi đưa ra câu trả lời cuối cùng?',
        options: ['ReAct', 'Step-back Prompting', 'Tree of Thoughts (ToT)', 'Chain of Thought (CoT)'],
        correctAnswer: 'Chain of Thought (CoT)',
        explanation: 'Chain of Thought (Chuỗi suy nghĩ) cải thiện khả năng suy luận của mô hình bằng cách buộc nó phải trình bày quá trình logic từng bước một.'
      },
      {
        question: 'Phương pháp hay nhất (Best Practice) nào sau đây là quan trọng nhất để giúp mô hình hiểu rõ định dạng đầu ra bạn mong muốn?',
        options: ['Sử dụng prompt ngắn gọn', 'Cung cấp ví dụ (Provide examples)', 'Tăng nhiệt độ (temperature)', 'Sử dụng ngôn ngữ phức tạp'],
        correctAnswer: 'Cung cấp ví dụ (Provide examples)',
        explanation: 'Cung cấp ví dụ (one-shot/few-shot) là một trong những cách hiệu quả nhất để hướng dẫn mô hình về cấu trúc và kiểu đầu ra mà bạn mong đợi.'
      },
      {
        question: 'Framework nào cho phép mô hình AI sử dụng các công cụ bên ngoài (như tìm kiếm web) để thu thập thông tin và kết hợp vào quá trình suy luận?',
        options: ['Chain of Thought (CoT)', 'ReAct (Reason & Act)', 'Tree of Thoughts (ToT)', 'Few-shot Prompting'],
        correctAnswer: 'ReAct (Reason & Act)',
        explanation: 'ReAct kết hợp Suy luận (Reasoning) với Hành động (Acting), cho phép mô hình tương tác với các công cụ bên ngoài để giải quyết các vấn đề đòi hỏi thông tin cập nhật hoặc khả năng tính toán.'
      }
    ]
  },
};