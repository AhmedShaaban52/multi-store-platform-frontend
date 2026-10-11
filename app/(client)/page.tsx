import CuratedCollection from "@/components/CuratedCollection";
import Hero from "@/components/Hero";

export default async function Home() {

  return (
    <main className="flex-1 bg-white">
      <Hero />
      <CuratedCollection/>
    </main>
  );
}