
import styled from "styled-components";

const CardContainer = styled.section`
  width: 100%;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;

  .imagemContainer {
    width: 100%;
    height: 250px;
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors["light-gray-3"]};
  }

  .imagemProduto {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    z-index: 1;
  }

  .desconto {
    position: absolute;
    top: 12px;
    left: 12px;
    z-index: 2;
    margin: 0;
    padding: 6px 12px;
    border-radius: 20px;
    background-color: ${({ theme }) => theme.colors.success};
    color: ${({ theme }) => theme.colors.white};
    font-size: 12px;
    font-weight: 700;
  }

  .informacoes {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .marca {
    margin: 0;
    color: ${({ theme }) => theme.colors["dark-gray-2"]};
    font-size: 16px large;
    font-weight: 700;
  }

  .nomeProduto{
    margin: 0;
    color: ${({ theme }) => theme.colors["light-gray"]};
    font-size: 14px;
  }

  .precos {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .precoOriginal {
    margin: 0;
    color: ${({ theme }) => theme.colors["light-gray"]};
    font-size: 14px;
    text-decoration: line-through;
    
  }

  .preco {
    margin: 0;
    color: ${({ theme }) => theme.colors["dark-gray-2"]};
    font-size: 18px;
    font-weight: 700;
    padding: 15px;
  }
`;

const ProductCard = ({
  nomeProduto,
  Marca,
  desconto,
  precoOriginal,
  imgProduct,
}) => {
  return (
    <CardContainer>
      <div className="imagemContainer">
        <img
          className="imagemProduto"
          src={imgProduct}
          alt={nomeProduto}
        />

        {desconto && (
          <span className="desconto">30% OFF</span>
        )}
      </div>

      <div className="informacoes">
        <h4 className="nomeProduto">{nomeProduto}</h4>

        <p className="marca">{Marca}</p>

        <div className="precos">
          {desconto && (
            <p className="precoOriginal">{precoOriginal}</p>
          )}

          <p className="preco">
            {desconto || precoOriginal}
          </p>
        </div>
      </div>
    </CardContainer>
  );
};

export default ProductCard;
