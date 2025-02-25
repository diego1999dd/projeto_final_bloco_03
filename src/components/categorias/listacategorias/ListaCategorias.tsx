import { useEffect, useState } from "react";
import Categoria from "../../../models/Categoria";

import { DNA } from "react-loader-spinner";
import CardCategorias from "../cardcategorias/CardCategorias";
import { listar } from "../../../services/Service";

function ListaCategorias() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  async function listarCategorias() {
    try {
      await listar("/categorias", setCategorias);
    } catch (error: any) {
      alert("Erro ao buscar categoria");
    }
  }

  useEffect(() => {
    listarCategorias();
  }, [categorias.length]);

  return (
    <>
      {categorias.length === 0 && (
        <DNA
          visible={true}
          height="500"
          width="500"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      )}
      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categorias.map((categoria) => (
              <CardCategorias key={categoria.id} categoria={categoria} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListaCategorias;
