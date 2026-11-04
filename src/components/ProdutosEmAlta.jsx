
import styled from "styled-components";
import Section from "./Section";
import ProductCard from "./ProductCard";

const ProdutosContainer = styled.div`
  width: 100%;

  h2 {
    margin: 0 0 20px;
    color: ${({ theme }) => theme.colors["dark-gray-2"]};
    font-size: 24px;
  }

  .produtosContainer {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 20px;
  }

  @media (max-width: 1024px) {
    .produtosContainer {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }

  @media (max-width: 768px) {
    .produtosContainer {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 480px) {
    .produtosContainer {
      grid-template-columns: 1fr;
    }
  }
`;

const produtos = [
  {
    id: 1,
    nomeProduto: "Sapato",
    marca: "Adidas",
    desconto: "R$ 199,90",
    precoOriginal: "R$ 299,90",
    imgProduct: "/produc-image-1.jpeg",
  },
  {
    id: 2,
    nomeProduto: "Tênis esportivo",
    marca: "Nike",
    desconto: "R$ 249,90",
    precoOriginal: "R$ 349,90",
    imgProduct: "/produc-image-2.jpeg",
  },
  {
    id: 3,
    nomeProduto: "Tênis casual",
    marca: "Puma",
    desconto: "",
    precoOriginal: "R$ 189,90",
    imgProduct: "/produc-image-3.jpeg",
  },
  {
    id: 4,
    nomeProduto: "Tênis moderno",
    marca: "Adidas",
    desconto: "R$ 159,90",
    precoOriginal: "R$ 229,90",
    imgProduct: "/produc-image-4.jpeg",
  },
  {
    id: 5,
    nomeProduto: "Tênis urbano",
    marca: "Nike",
    desconto: "",
    precoOriginal: "R$ 279,90",
    imgProduct: "/produc-image-5.jpeg",
  },
];

const ProdutosEmAlta = () => {
  return (
    <Section>
      <ProdutosContainer>
        <h2>Produtos em alta</h2>

        <div className="produtosContainer">
          {produtos.map((produto) => (
            <ProductCard
              key={produto.id}
              nomeProduto={produto.nomeProduto}
              Marca={produto.marca}
              desconto={produto.desconto}
              precoOriginal={produto.precoOriginal}
              imgProduct={produto.imgProduct}
            />
          ))}
        </div>
      </ProdutosContainer>
    </Section>
  );
};

export default ProdutosEmAlta;
