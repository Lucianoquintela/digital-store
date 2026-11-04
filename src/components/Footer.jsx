import styled from "styled-components";

import logoFooter from "../assets/logo-footer.svg";
import imgFacebook from "../assets/facebook.svg";
import imgInstagram from "../assets/instagram.svg";
import imgTwitter from "../assets/twitter.svg";

import Information from "./Information";

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors["dark-gray"]};
  width: 100%;
  padding: 40px 0 30px;

  .logoFooter {
    width: 200px;
    margin-bottom: 20px;
  }

  p {
    color: ${({ theme }) => theme.colors["light-gray-2"]};
    margin-bottom: 15px;
    line-height: 1.5;
  }

  .containerFooter {
    display: flex;
    justify-content: space-between;
    margin: 0 100px;
    gap: 50px;
  }

  .descricao {
    width: 400px;
    max-width: 100%;
  }

  .redesSociais {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-top: 25px;
  }

  .imgRedesSociais {
    width: 20px;
    cursor: pointer;
  }

  .containerCreditos {
    margin: 30px 100px 0;
    text-align: center;
  }

  .containerCreditos hr {
    border: none;
    border-top: 1px solid ${({ theme }) => theme.colors["dark-gray-2"]};
    margin-bottom: 20px;
  }

  .containerCreditos p {
    color: ${({ theme }) => theme.colors["light-gray-2"]};
    margin: 0;
    font-size: 14px;
  }

  .containerContato {
    color: ${({ theme }) => theme.colors.white};
  }

  @media (max-width: 768px) {
    .containerFooter {
      margin: 0 20px;
      flex-wrap: wrap;
      gap: 30px;
    }

    .descricao {
      width: 100%;
    }

    .containerCreditos {
      margin: 30px 20px 0;
    }
  }

  @media (max-width: 480px) {
    .containerFooter {
      flex-direction: column;
      gap: 25px;
    }
  }
`;

const Footer = () => {
  const informacoes = [
    { text: "Sobre Drip Store", link: "/about" },
    { text: "Segurança", link: "/security" },
    { text: "Wishlist", link: "/wishlist" },
    { text: "Blog", link: "/blog" },
    { text: "Trabalhe conosco", link: "/work" },
    { text: "Meus Pedidos", link: "/orders" },
  ];

  const categorias = [
    { text: "Camisetas", link: "/camisetas" },
    { text: "Calças", link: "/calcas" },
    { text: "Bonés", link: "/bones" },
    { text: "Headphones", link: "/headphones" },
    { text: "Tênis", link: "/tenis" },
  ];

  return (
    <FooterContainer>
      <div className="containerFooter">

        <div className="descricao">
          <img
            className="logoFooter"
            src={logoFooter}
            alt="Logo Drip Store"
          />

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore.
          </p>

          <div className="redesSociais">
            <img
              className="imgRedesSociais"
              src={imgFacebook}
              alt="Facebook"
            />

            <img
              className="imgRedesSociais"
              src={imgInstagram}
              alt="Instagram"
            />

            <img
              className="imgRedesSociais"
              src={imgTwitter}
              alt="Twitter"
            />
          </div>
        </div>

        <Information
          title="Informação"
          informations={informacoes}
        />

        <Information
          title="Categorias"
          informations={categorias}
        />

        <div>
          <h3 className="containerContato">Contato</h3>

          <p>
            Av. Santos Dumont, 1510 - 1 andar - Aldeota,
            Fortaleza - CE, 60150-161
          </p>

          <p>(85) 3051-3411</p>
        </div>

      </div>

      <div className="containerCreditos">
        <hr />
        <p>© 2026 Digital Store</p>
      </div>

    </FooterContainer>
  );
};

export default Footer;