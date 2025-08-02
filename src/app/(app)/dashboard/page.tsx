import DashboardForm from "@/features/dashboard/DashboardForm";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="w-full h-full p-6 flex flex-col bg-white rounded-lg shadow">
        <h2 className="pb-8 text-2xl font-semibold text-gray-900">
          Model Form
        </h2>
        <DashboardForm />
      </div>
    </div>
  );
}
