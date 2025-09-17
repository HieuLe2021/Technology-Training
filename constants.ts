import type { Module, AppTable } from './types';
import { PowerAppsIcon } from './components/icons/PowerAppsIcon';
import { PowerAutomateIcon } from './components/icons/PowerAutomateIcon';
import { PowerBIIcon } from './components/icons/PowerBIIcon';
import { TableIcon } from './components/icons/TableIcon';
import { PowerVAgentsIcon } from './components/icons/PowerVAgentsIcon';
import { PromptEngineeringIcon } from './components/icons/PromptEngineeringIcon';
import { MockupAppIcon } from './components/icons/MockupAppIcon';

export const MOCKUP_APP_MODULE: Module = {
  id: 'mockup-app',
  title: 'Mockup App',
  icon: MockupAppIcon,
  description: 'Xem các bản demo giao diện người dùng cho các ứng dụng mẫu.',
  subTopics: [
    { id: 'mockup-xuat-kho', title: 'Ứng dụng Xuất kho', keywords: ['mockup', 'demo', 'ui', 'xuat kho'] },
    { id: 'mockup-chatbot', title: 'Ứng dụng Chatbot', keywords: ['mockup', 'demo', 'ui', 'chatbot', 'ai'] },
    { id: 'mockup-don-ban-print', title: 'Form in Đơn bán', keywords: ['mockup', 'demo', 'ui', 'print', 'sales order'] },
    { id: 'mockup-xuat-kho-print', title: 'Form in Xuất kho', keywords: ['mockup', 'demo', 'ui', 'print', 'export'] },
  ],
};

export const MODULES: Module[] = [
  {
    id: 'model-driven-apps',
    title: 'Model-driven Apps',
    icon: PowerAppsIcon,
    description: 'Xây dựng ứng dụng nghiệp vụ dựa trên dữ liệu Dataverse.',
    subTopics: [
      { id: 'mda-intro', title: 'Tìm hiểu về Model-driven App', keywords: ['Model-driven App fundamentals', 'Dataverse', 'solutions', 'power app'] },
      { id: 'mda-data-model', title: 'Tạo Solution, Table, Form, View', keywords: ['Solutions', 'Tables (Entities)', 'Columns (Fields)', 'Forms', 'Views', 'data model'] },
      { id: 'mda-relationships', title: 'Các loại Relationships', keywords: ['Relationships', '1:N', 'N:1', 'N:N', 'one-to-many', 'many-to-one', 'many-to-many'] },
      { id: 'mda-columns', title: 'Làm việc với Cột Lookup, Calculated, Rollup', keywords: ['Lookup columns', 'Calculated columns', 'Rollup columns', 'Relationships', 'parent information'] },
      { id: 'mda-keys', title: 'Định nghĩa Alternate Keys', keywords: ['Alternate Keys', 'duplicate detection', 'unique constraint', 'data integration'] },
      { id: 'mda-app-design', title: 'Tạo và cấu trúc App Model-driven', keywords: ['App Designer', 'Site Map', 'Grouping tables', 'add tables to app'] },
      { id: 'mda-business-rules', title: 'Tạo Business Rules', keywords: ['Business Rules', 'logic', 'no-code', 'form logic', 'validation'] },
      { id: 'mda-charts', title: 'Tạo và sử dụng Charts', keywords: ['Charts', 'data visualization', 'dashboards', 'visualizations'] },
    ],
  },
  {
    id: 'canvas-apps',
    title: 'Canvas Apps',
    icon: PowerAppsIcon,
    description: 'Thiết kế giao diện tùy chỉnh và kết nối nhiều nguồn dữ liệu.',
    subTopics: [
      { id: 'ca-intro', title: 'Tìm hiểu về Canvas App', keywords: ['Canvas App fundamentals', 'Controls', 'Screens', 'Formulas', 'connectors'] },
      { id: 'ca-common-functions', title: 'Các hàm Power Fx thông dụng', keywords: ['Power Fx', 'functions', 'formulas', 'Filter', 'Patch', 'Navigate', 'Collect'] },
      { id: 'ca-export-app', title: 'Tạo App Xuất kho tổng hợp', keywords: ['UI Design from template', 'Load related data (Sales Orders)', 'Data input', 'Patch function', 'write code for button'] },
      { id: 'ca-chatbot', title: 'Tạo App "Chat bot"', keywords: ['Chat interface UI', 'Connect to Power Automate Flow', 'Call external API (GPT)', 'display API response'] },
      { id: 'ca-performance', title: 'Tối ưu hóa hiệu năng', keywords: ['Performance', 'optimization', 'delegation', 'Concurrent', 'OnStart', 'collections'] },
      { id: 'ca-tips-tricks', title: 'Mẹo và thủ thuật', keywords: ['Tips', 'tricks', 'components', 'responsive design', 'error handling'] },
    ],
  },
  {
    id: 'power-automate',
    title: 'Power Automate',
    icon: PowerAutomateIcon,
    description: 'Tự động hóa các quy trình và luồng công việc.',
    subTopics: [
        { id: 'pa-intro', title: 'Giới thiệu về Power Automate', keywords: ['Power Automate fundamentals', 'cloud flows', 'desktop flows', 'triggers', 'actions', 'connectors'] },
        { id: 'pa-triggers', title: 'Sử dụng Triggers (Automated Flows)', keywords: ['Automated cloud flow', 'Dataverse Triggers', 'Update row action', 'inventory calculation', 'update stock'] },
        { id: 'pa-scheduled', title: 'Tạo Flow theo lịch (Scheduled Flows)', keywords: ['Scheduled cloud flow', 'Recurrence trigger', 'calculate sales revenue', 'send email notification'] },
        { id: 'pa-expressions', title: 'Làm chủ Biểu thức (Expressions)', keywords: ['Expressions', 'WDL', 'functions', 'formatDateTime', 'concat', 'variables'] },
        { id: 'pa-error-handling', title: 'Xử lý lỗi nâng cao', keywords: ['Error handling', 'try-catch', 'run after', 'scopes', 'terminate'] },
        { id: 'pa-best-practices', title: 'Mẹo và Tối ưu hóa hiệu năng', keywords: ['Best practices', 'performance', 'optimization', 'concurrency', 'filtering', 'variables'] },
    ],
  },
  {
    id: 'power-query',
    title: 'Power Query',
    icon: PowerBIIcon,
    description: 'Chuẩn bị, làm sạch và chuyển đổi dữ liệu.',
    subTopics: [
        { id: 'pq-intro', title: 'Giới thiệu Power Query & Ngôn ngữ M', keywords: ['Power Query', 'ETL', 'M Language', 'data transformation', 'introduction'] },
        { id: 'pq-common-transforms', title: 'Các kỹ thuật transform dữ liệu cơ bản', keywords: ['transformations', 'filter', 'remove columns', 'change type', 'split column'] },
        { id: 'pq-advanced-transforms', title: 'Các kỹ thuật transform nâng cao', keywords: ['group by', 'unpivot', 'pivot', 'custom column', 'conditional column'] },
        { id: 'pq-merge-append', title: 'Kết hợp Queries (Merge & Append)', keywords: ['merge queries', 'append queries', 'join', 'union'] },
        { id: 'pq-query-folding', title: 'Chủ đề chuyên sâu: Query Folding', keywords: ['performance', 'optimization', 'query folding', 'native query', 'sql'] },
        { id: 'pq-in-power-bi', title: 'Ứng dụng trong Power BI (Dataflows & Linked Tables)', keywords: ['Power BI', 'Dataflow', 'linked tables', 'linked entities', 'ETL'] },
        { id: 'pq-in-power-apps', title: 'Ứng dụng trong Power Apps', keywords: ['Power Apps', 'read-only', 'data shaping', 'canvas apps'] },
        { id: 'pq-in-excel', title: 'Ứng dụng trong Excel (Get & Transform)', keywords: ['Excel', 'Get & Transform', 'data automation', 'spreadsheets'] },
        { id: 'pq-best-practices', title: 'Mẹo & Tối ưu hóa khác', keywords: ['best practices', 'organize queries', 'renaming steps', 'documentation'] },
    ],
  },
  {
    id: 'power-bi',
    title: 'Power BI',
    icon: PowerBIIcon,
    description: 'Phân tích dữ liệu và tạo báo cáo, dashboard tương tác.',
    subTopics: [
        { id: 'pbi-report-agg', title: 'Tạo report Aggregated data', keywords: ['Load data from Aggregated table', 'Slicer visualization', 'Column chart', 'Doughnut chart', 'Table visualization'] },
        { id: 'pbi-report-detail', title: 'Tạo report Detail data (Đơn bán chi tiết)', keywords: ['Cumulative calculation in Power Query', 'Table detail view', 'Product ENV'] },
        { id: 'pbi-report-margin', title: 'Tạo report Margin', keywords: ['Slicer for product', 'Table for margin details', 'Interaction between visuals', 'auto load SOD BOD'] },
    ],
  },
  {
    id: 'web-resources',
    title: 'Web Resources',
    icon: PowerAppsIcon,
    description: 'Tùy chỉnh Model-driven app nâng cao bằng JavaScript và HTML.',
    subTopics: [
        { id: 'wr-js', title: 'Sử dụng JavaScript trong Form (Event onChange)', keywords: ['JavaScript web resource', 'Form event handlers', 'onChange event', 'Client API object model', 'show notification', 'validate stock'] },
        { id: 'wr-html', title: 'Tạo Command và Form in (HTML)', keywords: ['HTML web resource', 'Command bar customization', 'Ribbon Workbench', 'custom print form'] },
    ],
  },
  {
    id: 'ai-agent',
    title: 'AI & Agent',
    icon: PowerVAgentsIcon,
    description: 'Tích hợp AI và xây dựng các Agent thông minh.',
    subTopics: [
      { id: 'ai-fundamentals', title: 'Giới thiệu về Trí tuệ Nhân tạo', keywords: ['AI', 'Artificial Intelligence', 'Machine Learning', 'Deep Learning', 'Generative AI'] },
      { id: 'agent-concepts', title: 'Các khái niệm về Agent', keywords: ['AI Agent', 'intelligent agent', 'sensors', 'actuators', 'framework'] },
      { id: 'ai-builder', title: 'Giới thiệu AI Builder', keywords: ['AI Builder', 'prediction models', 'object detection', 'form processing'] },
      { id: 'copilot-studio', title: 'Xây dựng Copilot (Virtual Agents)', keywords: ['Copilot Studio', 'Power Virtual Agents', 'chatbots', 'topics', 'triggers', 'entities'] },
      { id: 'agent-best-practices', title: 'Best Practices cho Agent', keywords: ['AI Agent', 'best practices', 'design', 'testing', 'human-in-the-loop'] },
    ],
  },
  {
    id: 'prompt-engineering',
    title: 'Prompt Engineering',
    icon: PromptEngineeringIcon,
    description: 'Kỹ thuật thiết kế câu lệnh cho các mô hình AI.',
    subTopics: [
      { id: 'pe-basics', title: 'Nguyên tắc cơ bản của Prompt', keywords: ['Prompt Engineering', 'LLM', 'instructions', 'context', 'persona'] },
      { id: 'pe-advanced', title: 'Kỹ thuật Prompt nâng cao', keywords: ['Few-shot prompting', 'Chain of Thought', 'ReAct', 'prompt chaining'] },
    ],
  },
];

export const TABLES: AppTable[] = [
  {
    id: 'nhom-san-pham',
    name: 'Nhóm sản phẩm',
    icon: TableIcon,
    description: 'Quản lý các nhóm sản phẩm.',
    columns: [
      { id: 'nsp-ten', name: 'Tên Nhóm sản phẩm', type: 'Text', description: 'Tên của nhóm sản phẩm.' },
      { id: 'nsp-so-sp', name: 'Số sp trong nhóm', type: 'Number', description: 'Rollup column (sản phẩm).' },
      { id: 'nsp-source', name: 'Source phụ trách', type: 'Text', description: 'Người hoặc bộ phận phụ trách.' },
    ],
  },
  {
    id: 'san-pham',
    name: 'Sản phẩm',
    icon: TableIcon,
    description: 'Quản lý thông tin chi tiết các sản phẩm.',
    columns: [
      { id: 'sp-ten', name: 'Tên sản phẩm', type: 'Calculate', description: 'Ghép từ (Nhóm sp + thương hiệu + quy cách).' },
      { id: 'sp-nhom', name: 'Nhóm sản phẩm', type: 'Lookup', description: 'Nhóm sản phẩm.' },
      { id: 'sp-don-vi', name: 'Đơn vị chuẩn', type: 'Text', description: 'Đơn vị chuẩn.' },
      { id: 'sp-quy-cach', name: 'Quy cách', type: 'Text', description: 'Quy cách đóng gói sản phẩm.' },
      { id: 'sp-thuong-hieu', name: 'Thương hiệu', type: 'Text', description: 'Thương hiệu của sản phẩm.' },
      { id: 'sp-so-don-mua', name: 'Số đơn hàng mua', type: 'Number', description: 'Rollup column (Mua table).' },
      { id: 'sp-so-don-ban', name: 'Số đơn hàng bán', type: 'Number', description: 'Rollup column (Bán table).' },
    ],
  },
  {
    id: 'ty-le-chuyen-doi',
    name: 'Tỷ lệ chuyển đổi',
    icon: TableIcon,
    description: 'Quản lý tỷ lệ quy đổi đơn vị cho sản phẩm.',
    columns: [
        { id: 'tlcd-ten', name: 'Tên tỷ lệ CD', type: 'Calculate', description: 'Ghép từ (Sản phẩm + đơn vị).' },
        { id: 'tlcd-san-pham', name: 'Sản phẩm', type: 'Lookup', description: 'Sản phẩm.' },
        { id: 'tlcd-don-vi-chuan', name: 'Đơn vị chuẩn', type: 'Text', description: 'Calculate (sản phẩm).' },
        { id: 'tlcd-don-vi-chuyen-doi', name: 'Đơn vị chuyển đổi', type: 'Text', description: 'Đơn vị được quy đổi.' },
        { id: 'tlcd-ty-le', name: 'Tỷ lệ chuyển đổi', type: 'Number', description: 'Tỷ lệ quy đổi so với đơn vị chuẩn.' },
    ]
  },
  {
    id: 'nhom-khach-hang',
    name: 'Nhóm khách hàng',
    icon: TableIcon,
    description: 'Phân loại khách hàng theo nhóm.',
    columns: [
        { id: 'nkh-ten', name: 'Tên nhóm (Nhà máy, Bán lẻ)', type: 'Text', description: 'Tên nhóm khách hàng.' },
        { id: 'nkh-so-kh', name: 'Số KH trong nhóm', type: 'Number', description: 'Rollup column (Khách hàng).' },
        { id: 'nkh-sale', name: 'Sale phụ trách', type: 'Text', description: 'Nhân viên kinh doanh phụ trách.' },
    ]
  },
  {
    id: 'khach-hang',
    name: 'Khách hàng',
    icon: TableIcon,
    description: 'Quản lý thông tin khách hàng.',
    columns: [
      { id: 'kh-ten', name: 'Tên KH', type: 'Text', description: 'Tên đầy đủ của khách hàng.' },
      { id: 'kh-nhom', name: 'Tên nhóm KH', type: 'Lookup', description: 'Nhóm Khách hàng.' },
      { id: 'kh-dia-chi', name: 'Địa chỉ', type: 'Text', description: 'Địa chỉ của khách hàng.' },
      { id: 'kh-sdt', name: 'SDT', type: 'Number', description: 'Số điện thoại liên hệ.' },
      { id: 'kh-mst', name: 'MST', type: 'Number', description: 'Mã số thuế của khách hàng.' },
      { id: 'kh-so-don-hang', name: 'Số đơn hàng', type: 'Number', description: 'Rollup column (Đơn bán).' },
    ],
  },
  {
    id: 'nhom-nha-cung-cap',
    name: 'Nhóm Nhà cung cấp',
    icon: TableIcon,
    description: 'Phân loại nhà cung cấp theo nhóm.',
    columns: [
        { id: 'nncc-ten', name: 'Tên nhóm (Nhà máy, Bán lẻ)', type: 'Text', description: 'Tên nhóm nhà cung cấp.' },
        { id: 'nncc-so-ncc', name: 'Số NCC trong nhóm', type: 'Number', description: 'Rollup column (Nhà cung cấp).' },
        { id: 'nncc-source', name: 'Source phụ trách', type: 'Text', description: 'Người hoặc bộ phận phụ trách.' },
    ]
  },
  {
    id: 'nha-cung-cap',
    name: 'Nhà cung cấp',
    icon: TableIcon,
    description: 'Quản lý thông tin nhà cung cấp.',
    columns: [
      { id: 'ncc-ten', name: 'Tên NCC', type: 'Text', description: 'Tên đầy đủ của nhà cung cấp.' },
      { id: 'ncc-nhom', name: 'Tên nhóm NCC', type: 'Lookup', description: 'Nhóm Nhà cung cấp.' },
      { id: 'ncc-dia-chi', name: 'Địa chỉ', type: 'Text', description: 'Địa chỉ của nhà cung cấp.' },
      { id: 'ncc-sdt', name: 'SDT', type: 'Number', description: 'Số điện thoại liên hệ.' },
      { id: 'ncc-mst', name: 'MST', type: 'Number', description: 'Mã số thuế của nhà cung cấp.' },
      { id: 'ncc-so-don-mua', name: 'Số đơn hàng mua', type: 'Number', description: 'Rollup column (Đơn mua).' },
    ],
  },
  {
    id: 'don-ban',
    name: 'Đơn bán',
    icon: TableIcon,
    description: 'Quản lý các đơn hàng bán.',
    columns: [
      { id: 'db-don-hang', name: 'Đơn hàng', type: 'Autonumber', description: 'Mã đơn hàng tự động.' },
      { id: 'db-khach-hang', name: 'Khách hàng', type: 'Lookup', description: 'Khách hàng.' },
      { id: 'db-vat-choice', name: 'VAT', type: 'Choice', description: 'Có VAT/Không VAT.' },
      { id: 'db-tong-tien-no-vat', name: 'Tổng tiền không VAT', type: 'Number', description: 'Roll up column thành tiền.' },
      { id: 'db-thue', name: 'Thuế', type: 'Number', description: 'Roll up column vat.' },
      { id: 'db-tong-tien', name: 'Tổng tiền', type: 'Calculate', description: 'Tổng tiền không VAT + Thuế.' },
    ],
  },
  {
    id: 'don-ban-chi-tiet',
    name: 'Đơn bán chi tiết',
    icon: TableIcon,
    description: 'Quản lý chi tiết các sản phẩm trong đơn bán.',
    columns: [
      { id: 'dbct-ma', name: 'Mã DH chi tiết', type: 'Text', description: 'Mã định danh của dòng chi tiết.' },
      { id: 'dbct-don-hang', name: 'Đơn hàng', type: 'Lookup', description: 'Đơn bán.' },
      // Fix for truncated and incomplete table column definition.
      { id: 'dbct-san-pham', name: 'Sản phẩm', type: 'Lookup', description: 'Sản phẩm được bán trong đơn hàng.' },
      { id: 'dbct-so-luong', name: 'Số lượng', type: 'Number', description: 'Số lượng sản phẩm được bán.' },
      { id: 'dbct-don-gia', name: 'Đơn giá', type: 'Number', description: 'Đơn giá của sản phẩm.' },
      { id: 'dbct-thanh-tien', name: 'Thành tiền', type: 'Calculate', description: 'Thành tiền trước thuế (Số lượng * Đơn giá).' },
      { id: 'dbct-vat', name: 'VAT', type: 'Number', description: 'Thuế VAT cho dòng này.' },
    ],
  },
];