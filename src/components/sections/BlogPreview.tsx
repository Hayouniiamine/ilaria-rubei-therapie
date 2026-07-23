"use client";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, ease: "easeOut" as const },
};

const posts = [
  {
    id: "le-sens-de-la-maladie",
    title: "Le sens de la maladie : quand le corps exprime ce que l'âme tait",
    category: "Thérapie",
    date: "10 Sep 2026",
    image: "/images/blog_1.webp"
  },
  {
    id: "guerir-l-enfant-interieur",
    title: "Guérir l'enfant intérieur pour libérer l'adulte",
    category: "Développement Personnel",
    date: "24 Août 2026",
    image: "/images/blog_2.webp"
  },
  {
    id: "meditation-et-etats-modifies",
    title: "Méditation et états modifiés de conscience",
    category: "Spiritualité",
    date: "05 Jui 2026",
    image: "/images/blog_3.webp"
  }
];

export function BlogPreview() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div {...fadeUp} className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-midnight/10 bg-midnight/5 text-midnight/60 font-sans text-xs tracking-widest uppercase">
              Ressources
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-midnight">
              Mon <span className="italic text-dusty-rose">Journal</span>
            </h2>
          </div>
          <Link 
            to="/blog"
            className="group flex items-center gap-2 font-sans text-midnight/70 hover:text-dusty-rose transition-colors"
          >
            <span>Lire tous les articles</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.article 
              key={post.id} 
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.15 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/3] rounded-3xl overflow-hidden mb-6 bg-linen relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[10px] uppercase tracking-widest text-midnight">
                  {post.category}
                </div>
              </div>
              <p className="text-sm text-dusty-rose font-sans mb-2">{post.date}</p>
              <h3 className="font-serif text-xl text-midnight mb-3 group-hover:text-dusty-rose transition-colors line-clamp-2">
                <Link to="/blog">{post.title}</Link>
              </h3>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
