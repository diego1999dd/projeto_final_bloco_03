import ListarProdutos from "../../components/produtos/listaprodutos/ListaProdutos";
import ModalProduto from "../../components/produtos/modalpostagem/ModalProduto";

function Home() {
  return (
    <>
      <div className="flex justify-center bg-blue-300">
        <div className="container grid grid-cols-2 text-black">
          <div className=" flex flex-col text-center justify-center items-center space-y-3">
            <h2 className="text-[40px] font-bold rounded-full font-display text-black  bg-clip-text">
              Seja Bem- Vindo
            </h2>
            <p className="text-2xl">
              Aqui você encontra Medicamentos e Cosméticos!
            </p>
            <div
              className="
                py-3 px-5 text-white
                "
            >
              <ModalProduto />
            </div>
          </div>
          <div className="justify-center w-170">
            <img src="/images/pharmacist-animate.svg" alt="" />
          </div>
        </div>
      </div>
      <ListarProdutos />
    </>
  );
}

export default Home;
