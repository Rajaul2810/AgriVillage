'use client'
import { FiPackage, FiCalendar, FiBookOpen, FiClock, FiDollarSign, FiMapPin } from 'react-icons/fi';

const OrderHistory = () => {
  const orders = [
    {
      id: '#ORD-2023-001',
      type: 'Product',
      title: 'Organic Fertilizer Pack',
      date: '2023-12-01',
      status: 'Delivered',
      amount: '$149.99',
      icon: <FiPackage className="text-green-500" size={24} />
    },
    {
      id: '#TRN-2023-045', 
      type: 'Training',
      title: 'Advanced Hydroponics Workshop',
      date: '2023-11-15',
      status: 'Completed',
      amount: '$299.99',
      icon: <FiBookOpen className="text-blue-500" size={24} />
    },
    {
      id: '#EVT-2023-112',
      type: 'Event',
      title: 'Sustainable Farming Conference',
      date: '2023-10-30',
      status: 'Attended',
      amount: '$199.99', 
      icon: <FiCalendar className="text-purple-500" size={24} />
    }
  ];

  // Group orders by type
  const groupedOrders = orders.reduce((acc, order) => {
    if (!acc[order.type]) {
      acc[order.type] = [];
    }
    acc[order.type].push(order);
    return acc;
  }, {});

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Order History</h1>
        <p className="text-gray-600 mt-2">View all your past orders, trainings and events</p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-green-100 rounded-lg">
              <FiPackage className="text-green-600" size={24} />
            </div>
            <div>
              <p className="text-gray-600">Total Products</p>
              <p className="text-2xl font-bold text-gray-800">24</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <FiBookOpen className="text-blue-600" size={24} />
            </div>
            <div>
              <p className="text-gray-600">Training Sessions</p>
              <p className="text-2xl font-bold text-gray-800">12</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-purple-100 rounded-lg">
              <FiCalendar className="text-purple-600" size={24} />
            </div>
            <div>
              <p className="text-gray-600">Events Attended</p>
              <p className="text-2xl font-bold text-gray-800">8</p>
            </div>
          </div>
        </div>
      </div>

      {/* Orders List Grouped by Type */}
      {Object.entries(groupedOrders).map(([type, typeOrders]) => (
        <div key={type} className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">{type}s</h2>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Order ID</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Type</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Title</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Date</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Status</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {typeOrders.map((order, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          {order.icon}
                          <span className="text-sm font-medium text-gray-700">{order.id}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-gray-600">{order.type}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-gray-600">{order.title}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-gray-600">{order.date}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium
                          ${order.status === 'Delivered' ? 'bg-green-100 text-green-700' : 
                            order.status === 'Completed' ? 'bg-blue-100 text-blue-700' :
                            'bg-purple-100 text-purple-700'}`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm font-medium text-gray-700">{order.amount}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderHistory;
