import Hero from "@/components/Hero";
import Catalog from "@/components/Catalog";
import CheckoutBar from "@/components/CheckoutBar";

export default function Page() {
  return (
    <main className="wrap">
      <Hero />
      <Catalog />
      <CheckoutBar />
    </main>
  );
}
