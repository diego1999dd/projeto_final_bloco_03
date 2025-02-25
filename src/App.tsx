import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import ListaCategorias from "./components/categorias/listacategorias/ListaCategorias";
import FormCategoria from "./components/categorias/formcategoria/FormCategoria";
import DeletarCategoria from "./components/categorias/deletarcategoria/DeletarCategoria";

function App() {
  return (
    <>
      <div
        className="min-h-[80vh]
        "
      >
        <Navbar />
        <Home />
        <ListaCategorias />
        <FormCategoria />
        <DeletarCategoria />
        <Footer />
      </div>
    </>
  );
}

export default App;
