import { Header } from "@/components/Header"
import { ListProduct } from "@/components/ListProduct";
import { ModalCart } from "@/components/ModalCart";

const Home = async () => {
  // console.log(process.env.API_LOJA)

  return (
    <>
      <ModalCart />
      <Header />  
      <main>
        <section className="section_default">
          <ListProduct />
        </section>
      </main>    
    </>
  );
}

export default Home;