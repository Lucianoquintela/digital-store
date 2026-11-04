
import styled from "styled-components";
import Section from "./Section";

const ColecoesContainer = styled.div`
  width: 100%;
  box-sizing: border-box;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;

  .tituloColecoes {
    width: 100%;
    flex-basis: 100%;
    margin: 0;
    color: ${({ theme }) => theme.colors["dark-gray-2"]};
    font-size: 24px;
    font-weight: 700;
    text-align: left;
  }

  .cardColecoes {
    flex: 1 1 280px;
    max-width: 300px;
    min-width: 0;
    height: 200px;
    padding: 15px;
    box-sizing: border-box;
    border-radius: 8px;
    overflow: hidden;
    background-color: #d8e3f2;
    position: relative;
    display: flex;
    align-items: center;
  }

  .informacoes {
    width: 55%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
    z-index: 2;
  }

  .desconto {
    margin: 0;
    padding: 6px 12px;
    background-color: ${({ theme }) => theme.colors.success};
    color: ${({ theme }) => theme.colors.white};
    border-radius: 20px;
    font-size: 12px;
    font-weight: 700;
  }

  .descricao {
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .texto,
  .marca {
    margin: 0;
    padding: 0;
    color: ${({ theme }) => theme.colors["dark-gray-2"]};
    font-family: "Inter", sans-serif;
    font-size: 32px;
    font-weight: 700;
    line-height: 36px;
    letter-spacing: 1px;
    white-space: nowrap;
  }

  .btnComprar {
    padding: 10px 20px;
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.primary};
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.white};
    }
  }

  .imagemContainer {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 50%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
  }

  .imagem {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: right bottom;
    transform-origin: right bottom;
  }

  @media (max-width: 768px) {
    .cardColecoes {
      flex: 1 1 100%;
      max-width: 100%;
      height: 230px;
    }

    .texto,
    .marca {
      font-size: 24px;
      line-height: 28px;
    }
  }
`;

const colecoes = [
  {
    id: 1,
    desconto: "30% OFF",
    texto: "Novo drop",
    marca: "Supreme",
    imagem: "/collection-1.png",
    rotacao: "",
    deslocamento: "15px",
  },
  {
    id: 2,
    desconto: "50% OFF",
    texto: "Coleção",
    marca: "Adidas",
    imagem: "/collection-2.png",
    rotacao: "",
    deslocamento: "10px",
  },
  {
    id: 3,
    desconto: "20% OFF",
    texto: "Novo",
    marca: "Beats Bass",
    imagem: "/collection-3.png",
    rotacao: "",
    deslocamento: "10px",
  },
];

const ColecoesDestaque = () => {
  return (
    <Section>
      <ColecoesContainer>
        <h2 className="tituloColecoes">
          Coleções em destaque
        </h2>

        {colecoes.map((item) => (
          <div className="cardColecoes" key={item.id}>
            <div className="informacoes">
              <p className="desconto">{item.desconto}</p>

              <div className="descricao">
                <p className="texto">{item.texto}</p>
                <p className="marca">{item.marca}</p>
              </div>

              <button className="btnComprar">
                Comprar
              </button>
            </div>

            <div className="imagemContainer">
              <img
                className="imagem"
                src={item.imagem}
                alt={item.marca}
                style={{
                  transform: `rotate(${item.rotacao}) scale(1.3) translateX(${item.deslocamento})`,
                }}
              />
            </div>
          </div>
        ))}
      </ColecoesContainer>
    </Section>
  );
};

export default ColecoesDestaque;
