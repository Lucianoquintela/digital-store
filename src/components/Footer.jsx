import styled from "styled-components";
import logoFooter from "../assets/logo-footer.svg";

import imgFacebook from "../assets/facebook.svg";
import imgInstagram from "../assets/instagram.svg";
import imgTwitter from "../assets/twitter.svg";

const FooterContainer = styled.footer`
background-color: #1F1F1F;

.logoFooter{
  width: 200px;
}

h3{
  color: white;
}

p{
  color: #CCCCCC;
}

.containerFooter{
  display: flex;
  margin-left: 100px;
  margin-right: 100px;
  gap: 50px;
  padding-top: 40px;
}

.descricao{
  width: 400px;
  
}

.redesSociais{
 
  display: flex;
  gap: 15px;
  margin-top: 25px;
}


`;
 
const Footer = () => {

    return ( 
         <FooterContainer>
          <div class="containerFooter">
            <div class="descricao">
              <img class="logoFooter" src={logoFooter} alt="logoFooter"/>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
              <div class="redesSociais">
                <img class="imgRedesSociais" src={imgFacebook} alt="facebook"/>
                <img class="imgRedesSociais" src={imgInstagram} alt="instagram"/>
                <img class="imgRedesSociais" src={imgTwitter} alt="twitter"/>
              </div>
            </div>
            <div>
              <h3>Informação</h3>
              <p>Sobre Drip Store</p>
              <p>Segurança</p>
              <p>Wishlist</p>
              <p>Blog</p>
              <p>Trabalhe conosco</p>
              <p>Meus Pedidos</p>
            </div>
            <div>
               <h3>Categorias</h3>
               <p>Camisetas</p>
               <p>Calças</p>
               <p>Bonés</p>
               <p>Headphones</p>
               <p>Tênis</p>
            </div>
            <div>
               <h3>Contato</h3>
               <p>Av. Santos Dumont, 1510 - 1 <br/>andar - Aldeota, Fortaleza - CE, 60150-161</p>
               <p>(85) 3051-3411</p>
            </div>
          </div>
           
         </FooterContainer>
     );
}
 

export default Footer;

