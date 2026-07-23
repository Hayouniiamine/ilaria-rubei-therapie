import { createFileRoute } from "@tanstack/react-router";
import { PublicLayout } from "../components/layout/PublicLayout";
import { Hero } from "../components/sections/Hero";
import { About } from "../components/sections/About";
import { Parcours } from "../components/sections/Parcours";
import { Tools } from "../components/sections/Tools";
import { BreathingExercise } from "../components/sections/BreathingExercise";
import { Testimonials } from "../components/sections/Testimonials";
import { Book } from "../components/sections/Book";
import { BlogPreview } from "../components/sections/BlogPreview";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <PublicLayout>
      <Hero />
      <About />
      <Parcours />
      <Tools />
      <BreathingExercise />
      <Testimonials />
      <BlogPreview />
      <Book />
    </PublicLayout>
  );
}
