import type { Module } from './types';
import { PowerAppsIcon } from './components/icons/PowerAppsIcon';
import { PowerAutomateIcon } from './components/icons/PowerAutomateIcon';
import { PowerBIIcon } from './components/icons/PowerBIIcon';

export const MODULES: Module[] = [
  {
    id: 'model-driven-apps',
    title: 'Model-driven Apps',
    icon: PowerAppsIcon,
    description: 'Xây dựng ứng dụng nghiệp vụ dựa trên dữ liệu Dataverse.',
    subTopics: [
      { id: 'mda-intro', title: 'Tìm hiểu về Model-driven App', keywords: ['Model-driven App fundamentals', 'Dataverse', 'solutions', 'power app'] },
      { id: 'mda-data-model', title: 'Tạo Solution, Table, Form, View', keywords: ['Solutions', 'Tables (Entities)', 'Columns (Fields)', 'Forms', 'Views', 'data model'] },
      { id: 'mda-app-design', title: 'Tạo và cấu trúc App Model-driven', keywords: ['App Designer', 'Site Map', 'Grouping tables', 'add tables to app'] },
      { id: 'mda-columns', title: 'Làm việc với Cột Lookup, Calculated, Rollup', keywords: ['Lookup columns', 'Calculated columns', 'Rollup columns', 'Relationships', 'parent information'] },
    ],
  },
  {
    id: 'canvas-apps',
    title: 'Canvas Apps',
    icon: PowerAppsIcon,
    description: 'Thiết kế giao diện tùy chỉnh và kết nối nhiều nguồn dữ liệu.',
    subTopics: [
      { id: 'ca-intro', title: 'Tìm hiểu về Canvas App', keywords: ['Canvas App fundamentals', 'Controls', 'Screens', 'Formulas', 'connectors'] },
      { id: 'ca-export-app', title: 'Tạo App Xuất kho tổng hợp', keywords: ['UI Design from template', 'Load related data (Sales Orders)', 'Data input', 'Patch function', 'write code for button'] },
      { id: 'ca-chatbot', title: 'Tạo App "Chat bot"', keywords: ['Chat interface UI', 'Connect to Power Automate Flow', 'Call external API (GPT)', 'display API response'] },
    ],
  },
  {
    id: 'power-automate',
    title: 'Power Automate',
    icon: PowerAutomateIcon,
    description: 'Tự động hóa các quy trình và luồng công việc.',
    subTopics: [
        { id: 'pa-triggers', title: 'Tạo automate trigger cho Nhập/Xuất kho', keywords: ['Automated cloud flow', 'Dataverse Triggers', 'Update row action', 'inventory calculation', 'update stock'] },
        { id: 'pa-scheduled', title: 'Tạo flow chạy theo giờ', keywords: ['Scheduled cloud flow', 'Recurrence trigger', 'calculate sales revenue', 'send email notification'] },
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
    id: 'power-bi',
    title: 'Power BI & Power Query',
    icon: PowerBIIcon,
    description: 'Phân tích dữ liệu và tạo báo cáo, dashboard tương tác.',
    subTopics: [
        { id: 'pbi-dataflow', title: 'Tìm hiểu về Dataflow', keywords: ['Power BI Dataflow', 'data transformation', 'reusable data logic', 'create and use dataflows'] },
        { id: 'pbi-etl', title: 'ETL với Power Query (Sale Order)', keywords: ['Extract data (Sale Order Detail)', 'Transform data (Group by entity, Calculate revenue)', 'Load to new table (Aggregated Data)'] },
        { id: 'pbi-report-agg', title: 'Tạo report Aggregated data', keywords: ['Load data from Aggregated table', 'Slicer visualization', 'Column chart', 'Doughnut chart', 'Table visualization'] },
        { id: 'pbi-report-detail', title: 'Tạo report Detail data (Đơn bán chi tiết)', keywords: ['Cumulative calculation in Power Query', 'Table detail view', 'Product ENV'] },
        { id: 'pbi-margin-calc', title: 'Sử dụng Dataflow Gen1 tính Margin (%)', keywords: ['Dataflow Gen1', 'ETL for Margin', 'Calculate average weighted cost', 'Calculate average weighted price', 'Margin formula'] },
        { id: 'pbi-report-margin', title: 'Tạo report Margin', keywords: ['Slicer for product', 'Table for margin details', 'Interaction between visuals', 'auto load SOD BOD'] },
    ],
  },
];
