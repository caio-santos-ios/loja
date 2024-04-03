import { CardProduct } from "@/components/CardProduct";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <CardProduct key={1} id={1} name="teste" description="teste" photo="" price="" quanty={100} />
    </main>
  );
}
