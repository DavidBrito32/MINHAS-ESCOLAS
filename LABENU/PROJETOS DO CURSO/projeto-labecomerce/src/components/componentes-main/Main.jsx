import BannerInicial from "./BannerInicial/BannerInicial";
import ProdutosContainer from "./Produtos/ProdutosContainer";
import Modal from "../Utilitarios/Modal";

const Main = ({ search, modal, fechaModal }) => {
  return (
    <>
      <BannerInicial />

      <Modal fechaModal={fechaModal} modal={modal} search={search} />

      <ProdutosContainer search={search} />
    </>
  );
};

export default Main;
