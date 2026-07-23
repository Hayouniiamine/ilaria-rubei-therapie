import { createFileRoute } from "@tanstack/react-router";
import { Users, FileText, Calendar, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/admin/")({
  component: DashboardPage,
});

function DashboardPage() {
  const stats = [
    { label: "Visites ce mois", value: "2,450", trend: "+12%", icon: <Users size={24} className="text-blue-600" />, bg: "bg-blue-100" },
    { label: "Articles Publiés", value: "24", trend: "+2", icon: <FileText size={24} className="text-emerald-600" />, bg: "bg-emerald-100" },
    { label: "Événements à venir", value: "3", trend: "Stable", icon: <Calendar size={24} className="text-purple-600" />, bg: "bg-purple-100" },
    { label: "Demandes de contact", value: "18", trend: "+5%", icon: <TrendingUp size={24} className="text-amber-600" />, bg: "bg-amber-100" },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Vue d'ensemble</h1>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 rounded-xl ${stat.bg}`}>
                {stat.icon}
              </div>
              <span className="text-sm font-medium text-gray-500 bg-gray-50 px-2 py-1 rounded-md">{stat.trend}</span>
            </div>
            <h3 className="text-gray-500 text-sm font-medium mb-1">{stat.label}</h3>
            <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <h2 className="text-xl font-bold mb-6">Activité récente</h2>
        <div className="space-y-6">
          {[
            { action: "Nouveau message de contact", time: "Il y a 2 heures", user: "Marie Dupont" },
            { action: "Article brouillon enregistré", time: "Il y a 5 heures", user: "Le sens de la maladie" },
            { action: "Nouvelle inscription à l'atelier", time: "Hier à 14:30", user: "Julien Bernard" },
            { action: "Témoignage ajouté", time: "Il y a 2 jours", user: "Sophie L." },
          ].map((activity, i) => (
            <div key={i} className="flex items-center gap-4 pb-6 border-b border-gray-50 last:border-0 last:pb-0">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              <div>
                <p className="text-gray-900 font-medium">{activity.action}</p>
                <p className="text-gray-500 text-sm">{activity.user} · {activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
