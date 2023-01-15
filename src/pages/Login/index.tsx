import React from "react";
import { Button } from "@mui/material";
import { Container } from "./style";

const Login = () => {
  return (
    <Container>
      <div>
        <h1>Login</h1>

        <form>
          <div>
            <label htmlFor="email">E-mail ou Telefone</label>
            <input type="text" id="email"/>
          </div>
          <div>
            <label htmlFor="senha">Senha</label>
            <input type="password" id="senha"/>
          </div>
          <Button variant="contained" fullWidth disableElevation>Logar</Button>
        </form>
      </div>
    </Container>
  );
};

export default Login;
