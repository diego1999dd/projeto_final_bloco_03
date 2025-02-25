import { Link } from "react-router-dom";
import Categoria from "../../../models/Categoria";

interface CardCategoriasProps {
  categoria: Categoria;
}

function CardCategorias({ categoria }: CardCategoriasProps) {
  return (
    <div className="flex flex-col rounded-2xl overflow-hidden justify-between shadow-xl shadow-black/60">
      <header className="py-2 px-6 bg-black text-white font-bold text-3xl">
        Categorias
      </header>
      <p className="p-8 text-3xl bg-slate-200 h-full">{categoria.nome}</p>

      <div className="flex">
        <Link
          to={`/editarcategoria/${categoria.id}`}
          className="w-full text-white bg-sky-900 hover:bg-green-400
    flex items-center justify-center py-2 delay-150 md:delay-150 font-medium"
        >
          <button className=" cursor-pointer">Editar</button>
        </Link>

        <Link
          to={`/deletarcategoria/${categoria.id}`}
          className="text-white bg-red-400 hover:bg-red-700 w-full 
		flex items-center justify-center delay-150 md:delay-150 font-medium"
        >
          <button className=" cursor-pointer">Deletar</button>
        </Link>
      </div>
    </div>
  );
}

export default CardCategorias;
