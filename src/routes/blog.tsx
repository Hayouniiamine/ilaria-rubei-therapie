import { createFileRoute, Link } from "@tanstack/react-router";
import { PublicLayout } from "../components/layout/PublicLayout";

export const Route = createFileRoute("/blog")({
  component: BlogPage,
});

function BlogPage() {
  const posts = [
    {
      id: "le-sens-de-la-maladie",
      title: "Le sens de la maladie : quand le corps exprime ce que l'âme tait",
      excerpt: "Découvrez comment la thérapie transpersonnelle aborde les maux du corps comme des messagers de notre monde intérieur.",
      category: "Thérapie",
      date: "10 Sep 2026",
      image: "/images/blog_1.webp"
    },
    {
      id: "guerir-l-enfant-interieur",
      title: "Guérir l'enfant intérieur pour libérer l'adulte",
      excerpt: "Un voyage au cœur de nos premières blessures pour retrouver notre spontanéité et notre joie de vivre originelle.",
      category: "Développement Personnel",
      date: "24 Août 2026",
      image: "/images/blog_2.webp"
    },
    {
      id: "meditation-et-etats-modifies",
      title: "Méditation et états modifiés de conscience",
      excerpt: "Comment la respiration holotropique et la méditation profonde nous permettent d'accéder à des dimensions supérieures de l'être.",
      category: "Spiritualité",
      date: "05 Jui 2026",
      image: "/images/blog_3.webp"
    }
  ];

  return (
    <PublicLayout>
      <section className="pt-32 pb-16 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl md:text-6xl text-midnight mb-6">Journal</h1>
          <p className="font-sans text-lg text-midnight/70 font-light max-w-2xl mx-auto">
            Réflexions, partages et ressources autour de la thérapie transpersonnelle, de la spiritualité et du développement de l'être.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden mb-6 bg-linen relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[10px] uppercase tracking-widest text-midnight">
                  {post.category}
                </div>
              </div>
              <p className="text-sm text-dusty-rose font-sans mb-2">{post.date}</p>
              <h2 className="font-serif text-2xl text-midnight mb-3 group-hover:text-dusty-rose transition-colors">
                <Link to={`/blog`}>{post.title}</Link>
              </h2>
              <p className="font-sans text-midnight/70 font-light line-clamp-3">
                {post.excerpt}
              </p>
            </article>
          ))}
        </div>
      </section>
    </PublicLayout>
  );
}
