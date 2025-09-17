
import React from 'react';
import type { Module, SubTopic } from '../types';

interface MockupViewProps {
  module: Module;
  activeSubTopic: SubTopic | null;
}

const xuatKhoData = [
    { id: 1, name: 'Đinh nhựa đầu bằng 18x5 nhựa trắng', unit: 'Con', orderQty: 20000, exportQty: 12000, packaging: '1 bịch', checked: true },
    { id: 2, name: 'Van nhựa tay đỏ Tai Jaan AG1115 D49mm uPVC', unit: 'Cái', orderQty: 10, exportQty: 5, packaging: '1 thùng', checked: false },
    { id: 3, name: 'Adapter 5A', unit: 'Cái', orderQty: 2, exportQty: 1, packaging: '1', checked: false },
    { id: 4, name: 'Vít bắn tôn sắt ron den 12x50 sắt xi 7 màu', unit: 'Kg', orderQty: 10, exportQty: 10, packaging: '1 hộp', checked: true },
    { id: 5, name: 'Vít bắn tôn sắt ron den 12x40 sắt xi 7 màu', unit: 'Kg', orderQty: 10, exportQty: 10, packaging: '1', checked: true },
    { id: 6, name: 'Bu lông đầu bông 6x10 sắt xi 7 màu', unit: 'Con', orderQty: 30, exportQty: null, packaging: '', checked: false },
    { id: 7, name: 'Long đền tròn (mỏng) 12.5x30x1 sắt xi trắng', unit: 'Kg', orderQty: 2, exportQty: null, packaging: '', checked: false },
];

const chatData = [
    {
        from: 'ai',
        text: '16 điểm – cảnh ngộ dằn dơ\n\nDằn thường: Là kiểu lịch sự, tao nhã, ngồi nghiêm chỉnh, “tôi giữ bài, không rút thêm”.\n\nDằn dơ: Là khi 16 điểm mà vẫn lì mặt giữ, bất chấp nhà cái đang trưng cái 10 hay Át ra ngoài. Đây gọi là “dằn không phải vì khôn, mà vì hết đường rút” 🤣.\n\n🕺 Tư thế của kẻ dằn dơ 16 điểm\n\nNgồi rung đùi, giả bộ ngầu: “Tao dằn đây, coi thử số phận thế nào!”\n\nTrong bụng thì run như cầy sấy, vì biết dằn 16 giống như đặt niềm tin vào… cái ổ gà giữa đường, mong xe không sập gầm 🚗💥.\n\nNếu thắng: quay sang chém gió, “tao tính hết rồi, tao dằn chiến thuật đó!”\n\nNếu thua: gãi đầu, “ừ thì tao dằn dơ mà, chấp nhận thôi” 🤡.'
    },
    { from: 'user', text: 'Bài xì lát VN dằn 16 điểm được không?' },
];

const DonBanPrintMockup: React.FC = () => {
  const donBanData = [
    { id: 1, name: 'Ống cứng PVC Đạt Hoà (A2) D60x3,0 màu xám', vat: '0%', ck: '28.0%', unit: 'Cây', qty: 50, price: '200,448', priceAfterCK: '144,323', priceAfterVAT: '144,323', total: '10,022,400', date: '03/4/2025' },
    { id: 2, name: 'Ống cứng PVC Đạt Hoà (A1) D49x2,8 màu xám', vat: '0%', ck: '28.0%', unit: 'Cây', qty: 50, price: '152,064', priceAfterCK: '109,486', priceAfterVAT: '109,486', total: '7,603,200', date: '03/4/2025' },
    { id: 3, name: 'Ống cứng', vat: '0%', ck: '28.0%', unit: 'Cây', qty: 50, price: '154,656', priceAfterCK: '111,352', priceAfterVAT: '111,352', total: '7,732,800', date: '03/4/2025' },
  ];

  return (
    <div className="bg-gray-200 dark:bg-gray-900 p-8 flex justify-center">
      <div className="w-full max-w-4xl bg-white dark:bg-gray-800 shadow-lg p-12 text-gray-900 dark:text-gray-200 min-h-[1123px] flex flex-col">
        <div className="flex-grow">
          <header className="flex justify-between items-start pb-6 border-b dark:border-gray-600">
            <div>
              <h2 className="text-2xl font-bold">WESHOP</h2>
              <p className="text-xs mt-2">Địa chỉ: Lô B39 Khu công nghiệp Phú Tài, phường Trần Quang Diệu, Quy Nhơn, Bình Định</p>
              <p className="text-xs">Số điện thoại: 037 833 9009</p>
              <p className="text-xs">MST: 4101562154</p>
              <p className="text-xs">Website: https://wecare.com.vn</p>
            </div>
            <div className="text-right">
              <p className="text-sm">Quy Nhơn, ngày 01 tháng 4 năm 2025</p>
            </div>
          </header>
          <section className="my-8">
            <div className="text-center mb-6">
               <h3 className="text-lg font-bold border-2 border-gray-700 dark:border-gray-300 inline-block px-4 py-2">
                  SO_10126473_31-03-2025_GL-Điện Nước Bảy Khang (Chuprong)_ĐH 31/3_ĐH
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <p><strong>Tên khách hàng:</strong> GL-Điện Nước Bảy Khang (Chuprong)</p>
              <p><strong>SĐT:</strong> 0354842567</p>
              <p className="col-span-2"><strong>Địa chỉ:</strong> Ngã 3 Mỹ Hạnh, Chuprong, Gia Lai</p>
            </div>
          </section>
          <table className="w-full text-xs border-collapse border border-gray-400 dark:border-gray-500">
            <thead className="bg-gray-100 dark:bg-gray-700">
              <tr>
                <th className="border border-gray-300 dark:border-gray-600 p-2">STT</th>
                <th className="border border-gray-300 dark:border-gray-600 p-2">Tên sản phẩm</th>
                <th className="border border-gray-300 dark:border-gray-600 p-2">VAT</th>
                <th className="border border-gray-300 dark:border-gray-600 p-2">CK</th>
                <th className="border border-gray-300 dark:border-gray-600 p-2">ĐVT</th>
                <th className="border border-gray-300 dark:border-gray-600 p-2">Số lượng</th>
                <th className="border border-gray-300 dark:border-gray-600 p-2">Đơn giá</th>
                <th className="border border-gray-300 dark:border-gray-600 p-2">Đơn giá sau CK</th>
                <th className="border border-gray-300 dark:border-gray-600 p-2">Đơn giá sau VAT</th>
                <th className="border border-gray-300 dark:border-gray-600 p-2">Thành tiền</th>
                <th className="border border-gray-300 dark:border-gray-600 p-2">Ngày giao dự kiến</th>
              </tr>
            </thead>
            <tbody>
              {donBanData.map(item => (
                <tr key={item.id}>
                  <td className="border border-gray-300 dark:border-gray-600 p-2 text-center">{item.id}</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-2">{item.name}</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-2 text-center">{item.vat}</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-2 text-center">{item.ck}</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-2 text-center">{item.unit}</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-2 text-center">{item.qty}</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-2 text-right">{item.price} đ</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-2 text-right">{item.priceAfterCK} đ</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-2 text-right">{item.priceAfterVAT} đ</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-2 text-right font-semibold">{item.total}</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-2 text-center">{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <footer className="pt-12 mt-auto text-center text-sm font-semibold">
          <div className="grid grid-cols-3 gap-8">
              <div>
                  <p>Người lập phiếu</p>
                  <p className="mt-16 text-xs italic">(Ký, họ tên)</p>
              </div>
              <div>
                  <p>Người giao hàng</p>
                  <p className="mt-16 text-xs italic">(Ký, họ tên)</p>
              </div>
              <div>
                  <p>Khách hàng</p>
                  <p className="mt-16 text-xs italic">(Ký, họ tên)</p>
              </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

const XuatKhoPrintMockup: React.FC = () => {
    const xuatKhoPrintData = [
        { stt: 1, name: 'Co trơn Đạt Hòa 2A (dày) D27mm uPVC', dvt: 'Cái', qty: 50, packaging: '5 bịch x 10 cái' },
        { stt: 2, name: 'Co trơn Đạt Hòa 2A (dày) D34mm uPVC', dvt: 'Cái', qty: 30, packaging: '3 bịch x 10 cái' },
        { stt: 3, name: 'Lơi 45° Đạt Hòa 2A (dày) D21mm uPVC', dvt: 'Cái', qty: 20, packaging: '2 bịch x 10 cái' },
        { stt: 4, name: 'Nối giảm ren ngoài Đạt Hoà 2A (dày) D21/34mm uPVC', dvt: 'Cái', qty: 20, packaging: '2 bịch x 10 cái' },
        { stt: 5, name: 'Nối giảm Đạt Hoà 2A (dày) D60/27mm uPVC', dvt: 'Cái', qty: 20, packaging: '2 bịch x 10 cái' },
    ];
    return (
        <div className="bg-gray-200 dark:bg-gray-900 p-8 flex justify-center">
            <div className="w-full max-w-4xl bg-white dark:bg-gray-800 shadow-lg p-12 text-gray-900 dark:text-gray-200 min-h-[1123px] flex flex-col">
                <div className="flex-grow">
                    <header className="flex justify-between items-start pb-6 border-b dark:border-gray-600">
                        <div>
                            <h2 className="text-2xl font-bold">WESHOP</h2>
                            <p className="text-xs mt-2">Địa chỉ: Lô B39 Khu công nghiệp Phú Tài, phường Trần Quang Diệu, Quy Nhơn, Bình Định</p>
                            <p className="text-xs">Số điện thoại: 0378 339 009</p>
                            <p className="text-xs">MST: 4101562154</p>
                            <p className="text-xs">Website: https://wecare.com.vn</p>
                        </div>
                        <div className="text-right">
                             <p className="text-sm">Quy Nhơn, ngày 01 tháng 4 năm 2025</p>
                        </div>
                    </header>
                    <section className="my-8 text-center">
                        <h3 className="text-2xl font-bold">PHIẾU XUẤT KHO</h3>
                    </section>
                    <section className="my-8 flex justify-between text-sm">
                        <div>
                            <p><strong>MPX:</strong> PXK-BĐ2025-1649961</p>
                            <p><strong>Tên nhân viên sale:</strong> Trần Nhật Đạt</p>
                        </div>
                        <div className="text-right">
                            <p><strong>Ngày xuất:</strong> 01/4/2025</p>
                            <p><strong>SĐT - sale:</strong> 0914141108</p>
                        </div>
                    </section>
                    <table className="w-full text-xs border-collapse border border-gray-400 dark:border-gray-500">
                        <thead className="bg-gray-100 dark:bg-gray-700">
                            <tr>
                                <th className="border border-gray-300 dark:border-gray-600 p-2">STT</th>
                                <th className="border border-gray-300 dark:border-gray-600 p-2">Tên sản phẩm</th>
                                <th className="border border-gray-300 dark:border-gray-600 p-2">ĐVT</th>
                                <th className="border border-gray-300 dark:border-gray-600 p-2">Số lượng</th>
                                <th className="border border-gray-300 dark:border-gray-600 p-2">Quy cách</th>
                            </tr>
                        </thead>
                        <tbody>
                            {xuatKhoPrintData.map(item => (
                                <tr key={item.stt}>
                                    <td className="border border-gray-300 dark:border-gray-600 p-2 text-center">{item.stt}</td>
                                    <td className="border border-gray-300 dark:border-gray-600 p-2">{item.name}</td>
                                    <td className="border border-gray-300 dark:border-gray-600 p-2 text-center">{item.dvt}</td>
                                    <td className="border border-gray-300 dark:border-gray-600 p-2 text-center">{item.qty}</td>
                                    <td className="border border-gray-300 dark:border-gray-600 p-2">{item.packaging}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <footer className="pt-12 mt-auto text-center text-sm font-semibold">
                  <div className="grid grid-cols-3 gap-8">
                      <div>
                          <p>Người lập phiếu</p>
                          <p className="mt-16 text-xs italic">(Ký, họ tên)</p>
                      </div>
                      <div>
                          <p>Thủ kho</p>
                          <p className="mt-16 text-xs italic">(Ký, họ tên)</p>
                      </div>
                      <div>
                          <p>Người nhận hàng</p>
                          <p className="mt-16 text-xs italic">(Ký, họ tên)</p>
                      </div>
                  </div>
                </footer>
            </div>
        </div>
    );
};

const XuatKhoMockup: React.FC = () => {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden border border-gray-200 dark:border-gray-700">
            <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Xuất kho</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Data: Customer, Đơn bán chi tiết, Khách hàng, Xuất kho</p>
            </div>
            <div className="p-4 space-y-4">
                <div className="flex items-center justify-between">
                     <div>
                        <label htmlFor="customer" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Khách hàng</label>
                        <select id="customer" name="customer" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
                            <option>*Anh Đảm - Mỹ Nguyên</option>
                        </select>
                    </div>
                     <div className="flex items-center space-x-2">
                        <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Xuất kho</button>
                        <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-500 focus:outline-none">Hủy</button>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className="bg-gray-50 dark:bg-gray-700">
                            <tr>
                                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Sản phẩm</th>
                                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Đơn vị</th>
                                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">SL đơn hàng</th>
                                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">SL xuất kho</th>
                                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Quy cách</th>
                                <th scope="col" className="px-4 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Check</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                            {xuatKhoData.map(item => (
                                <tr key={item.id}>
                                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{item.name}</td>
                                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{item.unit}</td>
                                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{item.orderQty}</td>
                                    <td className="px-4 py-3 whitespace-nowrap text-sm">
                                        <input type="number" defaultValue={item.exportQty ?? ''} className="w-24 p-1 border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600"/>
                                    </td>
                                    <td className="px-4 py-3 whitespace-nowrap text-sm">
                                        <input type="text" defaultValue={item.packaging} className="w-24 p-1 border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600"/>
                                    </td>
                                    <td className="px-4 py-3 text-center">
                                        <input type="checkbox" defaultChecked={item.checked} className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"/>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
             <div className="px-4 py-3 bg-gray-50 dark:bg-gray-700/50 border-t border-gray-200 dark:border-gray-700 text-sm text-gray-600 dark:text-gray-400">
                Xuất kho {xuatKhoData.filter(i => i.checked).length} sản phẩm
            </div>
        </div>
    );
};

const ChatbotMockup: React.FC = () => {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden border border-gray-200 dark:border-gray-700 flex flex-col h-[70vh]">
            {/* Header */}
            <div className="p-3 border-b border-gray-200 dark:border-gray-700 flex items-center space-x-3">
                 <div className="relative flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                        <span>AI</span>
                    </div>
                    <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-400 ring-2 ring-white dark:ring-gray-800"></span>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">AI Assistant</h3>
                    <p className="text-xs text-green-500">Online</p>
                </div>
            </div>
            
            {/* Chat Body */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
                {chatData.slice().reverse().map((msg, index) => (
                    <div key={index} className={`flex items-end gap-2 ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                        {msg.from === 'ai' && (
                            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold flex-shrink-0">
                                <span>AI</span>
                            </div>
                        )}
                        
                        <div className={`max-w-md p-3 rounded-2xl ${
                            msg.from === 'user' 
                            ? 'bg-blue-500 text-white rounded-br-none' 
                            : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-bl-none'
                        }`}>
                           <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
                           <p className={`text-xs mt-1 ${
                               msg.from === 'user' ? 'text-blue-200 text-right' : 'text-gray-500 dark:text-gray-400 text-left'
                           }`}>
                               11:4{index === 0 ? '5' : '6'} AM
                           </p>
                        </div>

                        {msg.from === 'user' && (
                             <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold flex-shrink-0">
                                <span>U</span>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Input Footer */}
            <div className="p-3 bg-gray-50 dark:bg-gray-900/50 border-t border-gray-200 dark:border-gray-700">
                <div className="relative">
                    <input type="text" placeholder="Ask anything..." className="w-full p-3 pr-12 text-sm border-gray-300 rounded-full dark:bg-gray-700 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500" />
                    <button className="absolute inset-y-0 right-0 flex items-center justify-center w-12 h-full text-white bg-blue-600 rounded-full hover:bg-blue-700 focus:outline-none transition-colors">
                        <svg className="w-5 h-5 transform rotate-90" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>
                    </button>
                </div>
            </div>
        </div>
    );
};


export const MockupView: React.FC<MockupViewProps> = ({ module, activeSubTopic }) => {
  return (
    <div>
      <header className="mb-8">
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <module.icon className="h-10 w-10 text-blue-500" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{module.title}</h1>
            <p className="text-gray-500 dark:text-gray-400 mt-1">{module.description}</p>
          </div>
        </div>
      </header>
      
      <div>
        {activeSubTopic?.id === 'mockup-xuat-kho' && <XuatKhoMockup />}
        {activeSubTopic?.id === 'mockup-chatbot' && <ChatbotMockup />}
        {activeSubTopic?.id === 'mockup-don-ban-print' && <DonBanPrintMockup />}
        {activeSubTopic?.id === 'mockup-xuat-kho-print' && <XuatKhoPrintMockup />}
      </div>
    </div>
  );
};
