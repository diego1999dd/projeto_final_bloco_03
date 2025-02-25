import { useNavigate, useParams } from "react-router-dom";
import { atualizar, listar, cadastrar } from "../../../services/Service";
import { ChangeEvent, useEffect, useState } from "react";
import Categoria from "../../../models/Categoria";
import { RotatingLines } from "react-loader-spinner";

function FormCategoria() {
  const navigate = useNavigate();
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { id } = useParams<{ id: string }>();

  async function listarCategoriaPorId(id: string) {
    try {
      await listar(`/categorias/${id}`, setCategoria);
    } catch (error: any) {
      alert("Erro ao listar categoria!");
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      listarCategoriaPorId(id);
    }
  }, [id]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    });
  }

  function retornar() {
    navigate("/categorias");
  }

  async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    if (id !== undefined) {
      try {
        await atualizar(`/categorias`, categoria, setCategoria);
        alert("A Categoria foi atualizado com sucesso!");
      } catch (error: any) {
        alert("Erro ao atualizar a categoria!");
      }
    } else {
      try {
        await cadastrar(`/categorias`, categoria, setCategoria);
        alert("A Categoria foi cadastrado com sucesso!");
      } catch (error: any) {
        alert("Erro ao cadastrar a categoria.");
      }
    }

    setIsLoading(false);
    retornar();
  }

  return (
    <div
      className="w-full min-h-screen flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('src/assets/images/imagem_1.jpeg')",
      }}
    >
      <h1 className="text-4xl text-center my-8 font-extrabold text-black ">
        {id === undefined ? "Cadastrar Categoria" : "Editar Categoria"}
      </h1>

      <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
        <div className="flex flex-col gap-2">
          <label htmlFor="tipo" className="font-medium text-white">
            Descrição da Categoria
          </label>
          <input
            type="text"
            placeholder="Descreva aqui sua categoria"
            name="tipo"
            className="border-4 border-white rounded p-2 bg-black text-white"
            value={categoria.nome}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <div></div>
        <button
          className="
        cursor-pointer
        rounded-full
        font-medium
        text-white
        bg-black  
        hover:bg-green-500
        transition
        delay-150
        duration-300
        ease-in-out
        hover:-translate-y-1
        hover:scale-110
        hover:text-white
        w-1/2 
        py-2 
        mx-auto 
        flex 
        justify-center                   
        "
          type="submit"
        >
          {isLoading ? (
            <RotatingLines
              strokeColor="white"
              strokeWidth="5"
              animationDuration="0.75"
              width="24"
              visible={true}
            />
          ) : (
            <span>{id === undefined ? "Cadastrar" : "Atualizar"}</span>
          )}
        </button>
      </form>
    </div>
  );
}

export default FormCategoria;
