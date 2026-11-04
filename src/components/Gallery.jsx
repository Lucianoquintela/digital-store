import { useState } from "react";
import styled from "styled-components";

import arrowLeft from "../assets/arrow-left.svg";
import arrowRight from "../assets/arrow-right.svg";

const GalleryContainer = styled.div`
  width: ${({ $width }) => $width || "100%"};
  max-width: 100%;
  position: relative;
  overflow: hidden;

  .slide {
    width: 100%;
    height: ${({ $height }) => $height || "auto"};
    position: relative;
    overflow: hidden;
    border-radius: ${({ $radius }) => $radius || "0"};
  }

  .imagens {
    display: flex;
    height: 100%;
    transition: transform 0.5s ease-in-out;
  }

  .imagens img {
    width: 100%;
    height: 100%;
    flex: 0 0 100%;
    object-fit: cover;
  }

  .seta {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: transparent;
    border: none;
    cursor: pointer;
    z-index: 2;
    padding: 10px;
  }

  .seta img {
    width: 25px;
    height: 25px;
  }

  .seta:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  .esquerda {
    left: 10px;
  }

  .direita {
    right: 10px;
  }

  .miniaturas {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 15px;
  }

  .miniaturas img {
    width: 117px;
    height: 95px;
    object-fit: cover;
    border-radius: ${({ $radius }) => $radius || "0"};
    cursor: pointer;
    border: 2px solid transparent;
  }

  .miniaturas img.selecionada {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 768px) {
    .slide {
      height: auto;
      aspect-ratio: 1440 / 681;
    }

    .seta img {
      width: 18px;
      height: 18px;
    }

    .miniaturas img {
      width: 65px;
      height: 55px;
    }
  }
`;

const Gallery = ({
  images = [],
  width,
  height,
  radius,
  showThumbs,
  className,
}) => {
  const [imagemAtual, setImagemAtual] = useState(0);

  const proximaImagem = () => {
    if (imagemAtual < images.length - 1) {
      setImagemAtual(imagemAtual + 1);
    }
  };

  const imagemAnterior = () => {
    if (imagemAtual > 0) {
      setImagemAtual(imagemAtual - 1);
    }
  };

  const selecionarImagem = (index) => {
    setImagemAtual(index);
  };

  if (images.length === 0) {
    return null;
  }

  return (
    <GalleryContainer
      className={className}
      $width={width ? `${width}px` : undefined}
      $height={height ? `${height}px` : undefined}
      $radius={radius}
    >
      <div className="slide">
        <button
          className="seta esquerda"
          onClick={imagemAnterior}
          disabled={imagemAtual === 0}
          aria-label="Imagem anterior"
        >
          <img src={arrowLeft} alt="" />
        </button>

        <div
          className="imagens"
          style={{
            transform: `translateX(-${imagemAtual * 100}%)`,
          }}
        >
          {images.map((imagem, index) => (
            <img
              key={index}
              src={imagem.src}
              alt={`Imagem ${index + 1}`}
            />
          ))}
        </div>

        <button
          className="seta direita"
          onClick={proximaImagem}
          disabled={imagemAtual === images.length - 1}
          aria-label="Próxima imagem"
        >
          <img src={arrowRight} alt="" />
        </button>
      </div>

      {showThumbs && (
        <div className="miniaturas">
          {images.map((imagem, index) => (
            <img
              key={index}
              src={imagem.src}
              alt={`Miniatura ${index + 1}`}
              className={imagemAtual === index ? "selecionada" : ""}
              onClick={() => selecionarImagem(index)}
            />
          ))}
        </div>
      )}
    </GalleryContainer>
  );
};

export default Gallery;