import { MagnifyingGlass, ShoppingCart, User } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="flex w-full h-18 bg-green-800 justify-center border-b-5">
        <div className="container flex p-5 justify-between">
          <Link to="" className="flex font-bold space-x-3 items-center">
            <img src="images/farmacia_novo.png" alt="" className="w-17 h-15" />
            <h2 className="text-white font-extrabold font-display">
              Farmácia Quero DISCONTU
            </h2>
          </Link>
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
                <Link
                  to="/produtos"
                  className="font-bold relative before:absolute before:bottom-0 before:left-0 before:w-0 before:h-1 before:bg-white before:transition-all before:duration-300 before:ease-in-out hover:before:w-full pb-2"
                >
                  Produtos
                </Link>
              </li>
              <li>
                <Link
                  to="/categorias"
                  className="font-bold relative before:absolute before:bottom-0 before:left-0 before:w-0 before:h-1 before:bg-white before:transition-all before:duration-300 before:ease-in-out hover:before:w-full pb-2"
                >
                  Categorias
                </Link>
              </li>
              <li>
                <Link
                  to="/cadastrarcategoria"
                  className="font-bold relative before:absolute before:bottom-0 before:left-0 before:w-0 before:h-1 before:bg-white before:transition-all before:duration-300 before:ease-in-out hover:before:w-full pb-2"
                >
                  Cadastrar Categoria
                </Link>
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
