// Example: src/app/page.tsx (Home Page)
export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900">Total Users</h3>
          <p className="text-3xl font-bold text-indigo-600">1,234</p>
          <p className="text-sm text-gray-500">+12% from last month</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900">Revenue</h3>
          <p className="text-3xl font-bold text-green-600">$45,678</p>
          <p className="text-sm text-gray-500">+8% from last month</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900">Active Projects</h3>
          <p className="text-3xl font-bold text-blue-600">23</p>
          <p className="text-sm text-gray-500">+3 this week</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Recent Activity
          </h2>
          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg"
              >
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                    <span className="text-indigo-600">#{item}</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Activity {item}
                  </p>
                  <p className="text-sm text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
