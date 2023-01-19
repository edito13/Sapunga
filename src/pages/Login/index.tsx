import React from "react";
import { Button } from "@mui/material";
import { Container } from "./style";
import { BsFacebook, BsInstagram, BsTwitter, BsWhatsapp } from "react-icons/bs";
import { VioletButton } from "../../Components/VioletButton/style";
import { FaRegPaperPlane } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Container>
      <div>
        <div className="post">
          <p>Crie sua conta aqui no nosso site e ganhe 10% de <span className="Green">desconto.</span></p>
          <Link to={'/criar_conta'}><VioletButton>Criar Conta</VioletButton></Link>
        </div>
        <div className="content">
          <h3>Iniciar Sessão</h3>
          <form>
            <div>
              <label htmlFor="email">E-mail ou Telefone</label>
              <input type="text" id="email" placeholder="email@gmail.com" />
            </div>
            <div>
              <label htmlFor="senha">Senha</label>
              <input type="password" id="senha" placeholder="Senha" />
            </div>
            <VioletButton
              type="submit"
              startIcon={<FaRegPaperPlane />}
              variant="contained"
              fullWidth
              disableElevation
            >
              Logar
            </VioletButton>
            <p>
              Ainda não tem uma conta?{" "}
              <Link to={'/criar_conta'}><span className="LightViolet">CRIAR CONTA.</span></Link>
            </p>
            <div className="sociais-media">
              <div>
                <BsFacebook />
              </div>
              <div>
                <BsInstagram />
              </div>
              <div>
                <BsWhatsapp />
              </div>
              <div>
                <BsTwitter />
              </div>
            </div>
          </form>
          <p>Sapunga | Todos os direitos reservados</p>
        </div>
      </div>
    </Container>
  );
};

export default Login;
