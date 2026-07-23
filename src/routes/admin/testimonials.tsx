import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Plus, Edit, Trash2, Star } from "lucide-react";

export const Route = createFileRoute("/admin/testimonials")({
  component: TestimonialsManager,
});

interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
  visible: boolean;
}

const initialTestimonials: Testimonial[] = [
  { id: "1", name: "Marie L.", text: "Mon accompagnement avec Ilaria a été un véritable tournant dans ma vie. Sa douceur et sa justesse m'ont permis de traverser des épreuves que je pensais insurmontables.", rating: 5, visible: true },
  { id: "2", name: "Thomas D.", text: "Un espace de sécurité incroyable. Je recommande vivement à toute personne en quête de sens.", rating: 5, visible: true },
  { id: "3", name: "Sophie M.", text: "Les séances de sophrologie m'ont aidée à retrouver un sommeil de qualité et une paix intérieure que je n'avais plus connue depuis des années.", rating: 4, visible: true },
];

function TestimonialsManager() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(initialTestimonials);
  const [editing, setEditing] = useState<Testimonial | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", text: "", rating: 5, visible: true });

  function handleDelete(id: string) {
    setTestimonials(testimonials.filter((t) => t.id !== id));
  }

  function handleSave() {
    if (editing) {
      setTestimonials(testimonials.map((t) => (t.id === editing.id ? { ...t, ...formData } : t)));
    } else {
      setTestimonials([...testimonials, { id: Date.now().toString(), ...formData }]);
    }
    setShowForm(false);
    setEditing(null);
    setFormData({ name: "", text: "", rating: 5, visible: true });
  }

  function handleEdit(testimonial: Testimonial) {
    setEditing(testimonial);
    setFormData({ name: testimonial.name, text: testimonial.text, rating: testimonial.rating, visible: testimonial.visible });
    setShowForm(true);
  }

  function toggleVisibility(id: string) {
    setTestimonials(testimonials.map((t) => (t.id === id ? { ...t, visible: !t.visible } : t)));
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Gestion des Témoignages</h1>
        <button
          onClick={() => { setEditing(null); setFormData({ name: "", text: "", rating: 5, visible: true }); setShowForm(true); }}
          className="flex items-center gap-2 px-5 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors font-medium"
        >
          <Plus size={18} />
          Nouveau Témoignage
        </button>
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-lg w-full shadow-2xl">
            <h2 className="text-xl font-bold mb-6">{editing ? "Modifier le témoignage" : "Nouveau témoignage"}</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
                <input value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Prénom N." />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Témoignage</label>
                <textarea rows={4} value={formData.text} onChange={(e) => setFormData({ ...formData, text: e.target.value })} className="w-full border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 outline-none resize-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Note ({formData.rating}/5)</label>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button key={star} onClick={() => setFormData({ ...formData, rating: star })} className="p-1">
                      <Star size={24} className={star <= formData.rating ? "fill-amber-400 text-amber-400" : "text-gray-300"} />
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <input type="checkbox" checked={formData.visible} onChange={(e) => setFormData({ ...formData, visible: e.target.checked })} className="w-4 h-4 rounded" />
                <label className="text-sm text-gray-700">Visible sur le site</label>
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
        {testimonials.map((t) => (
          <div key={t.id} className={`bg-white p-6 rounded-2xl border shadow-sm ${t.visible ? "border-gray-100" : "border-gray-200 opacity-60"}`}>
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="font-medium text-gray-900">{t.name}</h3>
                <div className="flex gap-0.5 mt-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={14} className={star <= t.rating ? "fill-amber-400 text-amber-400" : "text-gray-200"} />
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => toggleVisibility(t.id)} className={`px-3 py-1 rounded-full text-xs font-medium ${t.visible ? "bg-emerald-100 text-emerald-700" : "bg-gray-100 text-gray-500"}`}>
                  {t.visible ? "Visible" : "Masqué"}
                </button>
                <button onClick={() => handleEdit(t)} className="p-2 text-gray-400 hover:text-amber-600 rounded-lg hover:bg-amber-50 transition-colors"><Edit size={16} /></button>
                <button onClick={() => handleDelete(t.id)} className="p-2 text-gray-400 hover:text-red-600 rounded-lg hover:bg-red-50 transition-colors"><Trash2 size={16} /></button>
              </div>
            </div>
            <p className="text-gray-600 text-sm italic leading-relaxed">« {t.text} »</p>
          </div>
        ))}
      </div>
    </div>
  );
}
