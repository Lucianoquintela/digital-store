import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

import menu from "../../public/Menu.png";
import logo from "../assets/logo-header.svg";
import imgCarrinho from "../assets/mini-cart.svg";

import Sidebar from "./BarraLateral";
import menuLinks from "../data/menuLinks";

const HeaderContainer = styled.header`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  display: flex;
  flex-direction: column;
  margin: 20px 100px 0;

  .container {
    display: flex;
    gap: 30px;
    width: 100%;
    align-items: center;
    justify-content: space-between;
  }

  .containerLogo {
    display: flex;
    gap: 20px;
    align-items: center;
    flex: 1;
  }

  .containerBotoes {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    white-space: nowrap;
  }

  button {
    padding: 10px;
    width: 100px;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors["light-gray-3"]};
    cursor: pointer;
    font-size: 16px;
  }

  .navegacao {
    margin-top: 30px;
  }

  ul {
    display: flex;
    gap: 18px;
    list-style: none;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors["dark-gray-2"]};
  }

  a.active {
    color: ${({ theme }) => theme.colors.primary};
  }

  .logo {
    width: 200px;
  }

  input {
    padding: 10px;
    width: 100%;
    max-width: 400px;
    border: none;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors["light-gray-3"]};
    color: ${({ theme }) => theme.colors["dark-gray-3"]};
    outline: none;
  }

  .buscaDesktop {
    position: relative;
    width: 100%;
    max-width: 400px;
  }

  .buscaDesktop input {
    width: 100%;
    padding: 10px 40px 10px 10px;
  }

  .buscaMobile {
    display: none;
  }

  .lupaInput {
    display: block;
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    width: 15px;
    height: 15px;
    border: 1px solid ${({ theme }) => theme.colors["dark-gray-3"]};
    border-radius: 50%;
  }

  .lupaInput::after {
    content: "";
    width: 5px;
    height: 1px;
    background: ${({ theme }) => theme.colors["dark-gray-3"]};
    position: absolute;
    right: -4px;
    bottom: -3px;
    transform: rotate(45deg);
  }

  .imgCarrinho img {
    width: 30px;
    cursor: pointer;
  }

  .menu {
    display: none;
  }

  .lupa {
    display: none;
  }

  @media (max-width: 768px) {
    margin: 20px;

    .menu {
      display: block;
      cursor: pointer;
    }

    .container {
      flex-wrap: wrap;
      gap: 17px;
    }

    .containerLogo {
      width: 100%;
      flex-wrap: wrap;
      justify-content: space-between;
    }

    .buscaDesktop {
      display: none;
    }

    .logo {
      width: 138px;
      height: 24px;
    }

    .containerBotoes {
      display: none;
    }

    .navegacao ul {
      display: none;
    }

    .lupa {
      display: block;
      width: 15px;
      height: 16px;
      border: 1px solid ${({ theme }) => theme.colors["dark-gray-3"]};
      border-radius: 50%;
      position: relative;
      cursor: pointer;
    }

    .lupa::after {
      content: "";
      width: 5px;
      height: 1px;
      background: ${({ theme }) => theme.colors["dark-gray-3"]};
      position: absolute;
      right: -6px;
      bottom: -4px;
      transform: rotate(45deg);
    }

    .lupa.ativa {
      border-color: ${({ theme }) => theme.colors.primary};
    }

    .lupa.ativa::after {
      background-color: ${({ theme }) => theme.colors.primary};
    }

    .imgCarrinho img {
      width: 20px;
      margin-top: 10px;
    }

    .buscaMobile {
      display: flex;
      position: relative;
      width: 100%;
      max-width: 96%;
      margin-top: 15px;
    }

    .buscaMobile input {
      width: 100%;
      max-width: 100%;
      padding: 20px 40px 20px 10px;
    }
  }
`;

const Header = () => {
  const [mostrarBusca, setMostrarBusca] = useState(false);
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <HeaderContainer>
      {/* Barra lateral */}
      <Sidebar
        menuAberto={menuAberto}
        onClose={() => setMenuAberto(false)}
      />

      <div className="container">
        <div className="containerLogo">
          <img
            className="menu"
            src={menu}
            alt="Abrir menu"
            onClick={() => setMenuAberto(true)}
          />

          <img
            className="logo"
            src={logo}
            alt="Logo Drip Store"
          />

          <div
            className={`lupa ${mostrarBusca ? "ativa" : ""}`}
            onClick={() => setMostrarBusca(!mostrarBusca)}
          ></div>

          <div className="buscaDesktop">
            <input placeholder="Pesquisar produtos" />
            <div className="lupaInput"></div>
          </div>
        </div>

        <div className="containerBotoes">
          <Link to="#">Cadastre-se</Link>
          <button>Entrar</button>
        </div>

        <div className="imgCarrinho">
          <img src={imgCarrinho} alt="Carrinho de compras" />
        </div>
      </div>

      {mostrarBusca && (
        <div className="buscaMobile">
          <input placeholder="Pesquisar produtos" />
          <div className="lupaInput"></div>
        </div>
      )}

      {/* Navegação desktop */}
      <nav className="navegacao">
        <ul>
          {menuLinks.map((item) => (
            <li key={item.link}>
              <NavLink to={item.link}>
                {item.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </HeaderContainer>
  );
};

export default Header;