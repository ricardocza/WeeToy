import { Header } from "../../components/Header";
import { HomeStyled } from "./styled";
import Modal from "react-modal";
import imageChild from "./../../assets/imageChild.png";
import { Button } from "../../components/Button";
import { useContext } from "react";
import { Register } from "../../components/Modal/auth";
import { CardProduct } from "../../components/CardProduct";
import { RegisterContext } from "../../context/RegisterContext";
import { AuthContext } from "../../context/AuthContext";
import { ModalEditProduct } from "../../components/ModalEditProduct";

export function Home() {
  const { openRegister, closeRegister, registerOpen } =
    useContext(RegisterContext);

  const {listToys} = useContext(AuthContext)  
  
  return (
    <HomeStyled>
      <Modal 
      isOpen={true}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)"
        },
        content: {
          borderRadius: "0.75rem",
          backgroundColor: "#F9F9F9",
          maxWidth: "100%",
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)"
        }
      }}
      >
        <ModalEditProduct />
      </Modal>
      <Header />
      <main>
        <section className="sectionImage">
          <img src={imageChild} alt="Criança" className="imageChild" />
          <div className="divTextButtonRegister">
            <div className="divContent">
              <p className="textHome">
                Brinquedos quase novos ou nunca usados procurando um novo dono.
                Compre online e receba em sua casa.
              </p>
              <Button
                padding="small"
                styleButton="style1"
                fontSize="1.688rem"
                onClick={openRegister}
              >
                Cadastre-se
              </Button>
              <Modal
                isOpen={registerOpen}
                onRequestClose={closeRegister}
                contentLabel="Example Modal"
                overlayClassName="modal-overlay"
                className="modal-content"
              >
                <Register />
              </Modal>
            </div>
          </div>
        </section>
        <section className="sectionList">
          <ul className="listProducts">
            {listToys.map((toy) => {
              return (
                <CardProduct
                  key={toy.id}
                  name={toy.toy_name}
                  price={toy.price}
                  img={toy.img}
                  id={toy.id}
                />
              );
            })}
          </ul>
        </section>
      </main>
    </HomeStyled>
  );
}
