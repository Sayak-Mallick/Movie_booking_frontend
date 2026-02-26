import HomeSlider from "@/components/HomeSlider";
import MovieSlider from "@/components/MovieSlider/MovieSlider";

export default function Home() {
  return (
    <main className="bg-zinc-50 font-sans">
      <section className="w-full">
        <HomeSlider />
      </section>
      <section className="w-full mt-12 px-6">
        <MovieSlider />
      </section>
    </main>
  );
}
