import { MagnifyingGlass, ShoppingCart, User } from "@phosphor-icons/react";

function Navbar() {
  return (
    <>
      <div className="flex w-full h-18 bg-green-800 justify-center">
        <div className="container flex p-5 justify-between">
          <a href="" className="flex font-bold space-x-3 items-center">
            <img src="images/farmacia_novo.png" alt="" className="w-17 h-15" />
            <h2 className="text-white font-extrabold font-display">
              Farmácia Quero DISCONTU
            </h2>
          </a>
          <div className="flex items-center gap-2">
            <div className="flex items-center rounded-full border-5 border-white">
              <input
                type="text"
                name="tipo"
                className="w-75 p-2 text-white"
                placeholder="Procurar"
              />
            </div>
            <button className="bg-black p-2 rounded-full border-5 border-white">
              <MagnifyingGlass size={23} className="text-white" />
            </button>
          </div>
          <div className="text-white">
            <ul className="flex space-x-3 ">
              <li>
                <a href="">Produtos</a>
              </li>
              <li>
                <a href="">Categorias</a>
              </li>
              <li>
                <a href="">Cadastrar Categoria</a>
              </li>
              <li>
                <User size={32} />
              </li>
              <li>
                <ShoppingCart size={32} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
