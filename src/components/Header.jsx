import { Link, NavLink } from "react-router-dom";
import styled from "styled-components"
import logo from "../assets/logo-header.svg"
import imgCarrinho from "../assets/mini-cart.svg"

const HeaderContainer = styled.header`


margin-left: 100px;
margin-right: 100px;
margin-top: 20px;

.container{
 
  display: flex;
  gap: 30px;
  
  align-items: center
}
.containerLogo{
  
  display: flex;
  gap: 20px;
 
  align-items: center;
}

.containerBotoes{
 
  display: flex;
  gap: 65px;
  
  align-items: center;
  
}

.navegacao{
  margin-top: 30px;
}
button{
  padding: 10px;
  width: 100px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  background-color: #C92071;
  color: #F5F5F5;
}

ul{
  padding: 0;
  display: flex;
  gap: 18px;
  list-style: none;
  
}

a{
  text-decoration: none;
  color: #474747;
}
a:active{
  color: #C92071;
  
}

.logo{
  width: 200px;
}


input{
  padding: 10px;
  width: 300px;
  border-radius: 5px;
  color: #666666;
  
}


`;
 


const Header = () => {
    return ( 
        <HeaderContainer>
            <div class="container">
              <div class="containerLogo">
                <img class="logo" src={logo} alt="logo"/>
                <input placeholder="Pesquisar produtos"/> 
                <Link to={"#"}>Cadastre-se</Link>                      
              </div>

              <div class="containerBotoes">
                <div>
                    <button>Entrar</button>
                </div>
                <div>
                  <img src={imgCarrinho} alt="carrinho"/>
                </div>
              
                
              </div>
            </div>
            

            <nav class="navegacao">
              <ul>
                  <li><NavLink to={"/"}>Home</NavLink></li>
                  <li><NavLink to={"#"}>Produtos</NavLink></li>
                  <li><NavLink to={"#"}>Categorias</NavLink></li>
                  <li><NavLink to={"#"}>Meus Pedidos</NavLink></li>
                </ul>  
            </nav>
          
        </HeaderContainer>
     );
}
 
export default Header;