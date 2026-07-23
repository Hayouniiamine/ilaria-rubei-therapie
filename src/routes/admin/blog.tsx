import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Plus, Edit, Trash2, Eye } from "lucide-react";

export const Route = createFileRoute("/admin/blog")({
  component: BlogManager,
});

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  status: "published" | "draft";
  date: string;
}

const initialPosts: BlogPost[] = [
  {
    id: "1",
    title: "Le sens de la maladie : quand le corps exprime ce que l'âme tait",
    excerpt: "Découvrez comment la thérapie transpersonnelle aborde les maux du corps...",
    category: "Thérapie",
    status: "published",
    date: "10 Sep 2026",
  },
  {
    id: "2",
    title: "Guérir l'enfant intérieur pour libérer l'adulte",
    excerpt: "Un voyage au cœur de nos premières blessures...",
    category: "Développement Personnel",
    status: "published",
    date: "24 Août 2026",
  },
  {
    id: "3",
    title: "Méditation et états modifiés de conscience",
    excerpt: "Comment la respiration holotropique et la méditation profonde...",
    category: "Spiritualité",
    status: "draft",
    date: "05 Jui 2026",
  },
];

function BlogManager() {
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts);
  const [editing, setEditing] = useState<BlogPost | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ title: "", excerpt: "", category: "Thérapie", status: "draft" as BlogPost["status"] });

  function handleDelete(id: string) {
    setPosts(posts.filter((p) => p.id !== id));
  }

  function handleSave() {
    if (editing) {
      setPosts(posts.map((p) => (p.id === editing.id ? { ...p, ...formData } : p)));
    } else {
      setPosts([
        ...posts,
        { id: Date.now().toString(), ...formData, date: new Date().toLocaleDateString("fr-FR", { day: "2-digit", month: "short", year: "numeric" }) },
      ]);
    }
    setShowForm(false);
    setEditing(null);
    setFormData({ title: "", excerpt: "", category: "Thérapie", status: "draft" });
  }

  function handleEdit(post: BlogPost) {
    setEditing(post);
    setFormData({ title: post.title, excerpt: post.excerpt, category: post.category, status: post.status });
    setShowForm(true);
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Gestion du Blog</h1>
        <button
          onClick={() => { setEditing(null); setFormData({ title: "", excerpt: "", category: "Thérapie", status: "draft" }); setShowForm(true); }}
          className="flex items-center gap-2 px-5 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors font-medium"
        >
          <Plus size={18} />
          Nouvel Article
        </button>
      </div>

      {/* Post Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-lg w-full shadow-2xl">
            <h2 className="text-xl font-bold mb-6">{editing ? "Modifier l'article" : "Nouvel article"}</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Titre</label>
                <input
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="Titre de l'article"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Extrait</label>
                <textarea
                  rows={3}
                  value={formData.excerpt}
                  onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  className="w-full border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                  placeholder="Résumé de l'article..."
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Catégorie</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 outline-none"
                  >
                    <option>Thérapie</option>
                    <option>Développement Personnel</option>
                    <option>Spiritualité</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Statut</label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value as "published" | "draft" })}
                    className="w-full border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 outline-none"
                  >
                    <option value="draft">Brouillon</option>
                    <option value="published">Publié</option>
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

      {/* Posts Table */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              <th className="text-left p-4 text-sm font-semibold text-gray-600">Titre</th>
              <th className="text-left p-4 text-sm font-semibold text-gray-600">Catégorie</th>
              <th className="text-left p-4 text-sm font-semibold text-gray-600">Statut</th>
              <th className="text-left p-4 text-sm font-semibold text-gray-600">Date</th>
              <th className="text-right p-4 text-sm font-semibold text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id} className="border-b border-gray-50 last:border-0 hover:bg-gray-50/50 transition-colors">
                <td className="p-4">
                  <p className="font-medium text-gray-900 line-clamp-1">{post.title}</p>
                  <p className="text-sm text-gray-500 line-clamp-1">{post.excerpt}</p>
                </td>
                <td className="p-4">
                  <span className="text-sm text-gray-600">{post.category}</span>
                </td>
                <td className="p-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${post.status === "published" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"}`}>
                    {post.status === "published" ? "Publié" : "Brouillon"}
                  </span>
                </td>
                <td className="p-4 text-sm text-gray-500">{post.date}</td>
                <td className="p-4">
                  <div className="flex gap-2 justify-end">
                    <button className="p-2 text-gray-400 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"><Eye size={16} /></button>
                    <button onClick={() => handleEdit(post)} className="p-2 text-gray-400 hover:text-amber-600 rounded-lg hover:bg-amber-50 transition-colors"><Edit size={16} /></button>
                    <button onClick={() => handleDelete(post.id)} className="p-2 text-gray-400 hover:text-red-600 rounded-lg hover:bg-red-50 transition-colors"><Trash2 size={16} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
