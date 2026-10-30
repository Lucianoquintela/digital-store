import { Link } from "react-router-dom";

const Notfound = () => {
    return ( 
        <>
          <h3>Pàgina não encontrada</h3>
          <Link to={"/"}>Voltar</Link>
        </>
     );
}
 
export default Notfound;