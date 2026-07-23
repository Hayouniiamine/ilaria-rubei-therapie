import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Plus, Edit, Trash2 } from "lucide-react";

export const Route = createFileRoute("/admin/agenda")({
  component: AgendaManager,
});

interface AgendaEvent {
  id: string;
  title: string;
  date: string;
  location: string;
  type: string;
}

const initialEvents: AgendaEvent[] = [
  { id: "1", title: "Cercle de Femmes : Renouer avec sa puissance", date: "15 Sep 2026", location: "En Ligne", type: "Cercle" },
  { id: "2", title: "Atelier Respiration Holotropique", date: "28 Sep 2026", location: "Paris", type: "Atelier" },
  { id: "3", title: "Retraite : L'Éveil du Cœur", date: "12 Oct 2026", location: "Sud de la France", type: "Retraite" },
];

function AgendaManager() {
  const [events, setEvents] = useState<AgendaEvent[]>(initialEvents);
  const [editing, setEditing] = useState<AgendaEvent | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ title: "", date: "", location: "", type: "Atelier" });

  function handleDelete(id: string) {
    setEvents(events.filter((e) => e.id !== id));
  }

  function handleSave() {
    if (editing) {
      setEvents(events.map((e) => (e.id === editing.id ? { ...e, ...formData } : e)));
    } else {
      setEvents([...events, { id: Date.now().toString(), ...formData }]);
    }
    setShowForm(false);
    setEditing(null);
    setFormData({ title: "", date: "", location: "", type: "Atelier" });
  }

  function handleEdit(event: AgendaEvent) {
    setEditing(event);
    setFormData({ title: event.title, date: event.date, location: event.location, type: event.type });
    setShowForm(true);
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Gestion de l'Agenda</h1>
        <button
          onClick={() => { setEditing(null); setFormData({ title: "", date: "", location: "", type: "Atelier" }); setShowForm(true); }}
          className="flex items-center gap-2 px-5 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors font-medium"
        >
          <Plus size={18} />
          Nouvel Événement
        </button>
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-lg w-full shadow-2xl">
            <h2 className="text-xl font-bold mb-6">{editing ? "Modifier l'événement" : "Nouvel événement"}</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Titre</label>
                <input value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} className="w-full border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                <input type="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} className="w-full border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 outline-none" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Lieu</label>
                  <input value={formData.location} onChange={(e) => setFormData({ ...formData, location: e.target.value })} className="w-full border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                  <select value={formData.type} onChange={(e) => setFormData({ ...formData, type: e.target.value })} className="w-full border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 outline-none">
                    <option>Atelier</option>
                    <option>Cercle</option>
                    <option>Retraite</option>
                    <option>Formation</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex gap-3 mt-8">
              <button onClick={handleSave} className="flex-1 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors font-medium">
                {editing ? "Enregistrer" : "Créer"}
              </button>
              <button onClick={() => { setShowForm(false); setEditing(null); }} className="flex-1 py-3 border border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-medium">
                Annuler
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="space-y-4">
        {events.map((event) => (
          <div key={event.id} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-6">
            <div className="bg-gray-100 w-16 h-16 rounded-xl flex flex-col items-center justify-center flex-shrink-0">
              <span className="font-bold text-lg text-gray-900">{event.date.split(" ")[0]}</span>
              <span className="text-xs text-gray-500 uppercase">{event.date.split(" ")[1]}</span>
            </div>
            <div className="flex-grow">
              <h3 className="font-medium text-gray-900">{event.title}</h3>
              <p className="text-sm text-gray-500">{event.location} · {event.type}</p>
            </div>
            <div className="flex gap-2">
              <button onClick={() => handleEdit(event)} className="p-2 text-gray-400 hover:text-amber-600 rounded-lg hover:bg-amber-50 transition-colors"><Edit size={16} /></button>
              <button onClick={() => handleDelete(event.id)} className="p-2 text-gray-400 hover:text-red-600 rounded-lg hover:bg-red-50 transition-colors"><Trash2 size={16} /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
