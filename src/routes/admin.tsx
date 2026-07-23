import { createFileRoute, Outlet, Link } from "@tanstack/react-router";
import { LayoutDashboard, FileText, Calendar, MessageSquare, LogOut } from "lucide-react";

export const Route = createFileRoute("/admin")({
  component: AdminLayout,
});

function AdminLayout() {
  const navItems = [
    { label: "Dashboard", path: "/admin", icon: <LayoutDashboard size={20} /> },
    { label: "Blog", path: "/admin/blog", icon: <FileText size={20} /> },
    { label: "Agenda", path: "/admin/agenda", icon: <Calendar size={20} /> },
    { label: "Témoignages", path: "/admin/testimonials", icon: <MessageSquare size={20} /> },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex font-sans text-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col fixed h-full z-10 shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <Link to="/" className="font-serif text-2xl text-midnight font-bold tracking-wide">Ilaria Rubei</Link>
          <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Admin Panel</p>
        </div>
        
        <nav className="flex-1 py-6 px-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-50 hover:text-midnight transition-colors [&.active]:bg-midnight [&.active]:text-white font-medium"
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-200">
          <button className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-red-600 hover:bg-red-50 transition-colors font-medium text-left">
            <LogOut size={20} />
            Déconnexion
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 p-8">
        <div className="max-w-5xl mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
