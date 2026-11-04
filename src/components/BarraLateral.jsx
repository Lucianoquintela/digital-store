import { NavLink } from "react-router-dom";
import styled from "styled-components";

import menuLinks from "../data/menuLinks";

const SidebarContainer = styled.div`
  .fundoMenu {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 999;
    opacity: ${({ $aberto }) => ($aberto ? 1 : 0)};
    visibility: ${({ $aberto }) => ($aberto ? "visible" : "hidden")};
    transition: 0.3s;
  }

  .menuLateral {
    position: fixed;
    top: 0;
    left: 0;
    width: 280px;
    max-width: 80%;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.white};
    z-index: 1000;
    padding: 30px 20px;
    box-shadow: 2px 0 10px rgba(0, 0, 0, 0.2);
    transform: ${({ $aberto }) =>
      $aberto ? "translateX(0)" : "translateX(-100%)"};
    transition: transform 0.3s ease;
  }

  .fecharMenu {
    display: flex;
    justify-content: flex-end;
    font-size: 28px;
    color: ${({ theme }) => theme.colors["dark-gray"]};
    cursor: pointer;
    margin-bottom: 30px;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 25px;
    list-style: none;
  }

  a {
    text-decoration: none;
    font-size: 16px;
    color: ${({ theme }) => theme.colors["dark-gray-2"]};
  }

  a.active {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Sidebar = ({ menuAberto, onClose }) => {
  return (
    <SidebarContainer $aberto={menuAberto}>
      <div className="fundoMenu" onClick={onClose}></div>

      <aside className="menuLateral">
        <span className="fecharMenu" onClick={onClose}>
          ×
        </span>

        <ul>
          {menuLinks.map((item) => (
            <li key={item.link}>
              <NavLink to={item.link} onClick={onClose}>
                {item.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </aside>
    </SidebarContainer>
  );
};

export default Sidebar;