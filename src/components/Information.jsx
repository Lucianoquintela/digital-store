import { Link } from "react-router-dom";
import styled from "styled-components";

const InformationContainer = styled.div`
  h3 {
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: 20px;
  }

  a {
    display: block;
    color: ${({ theme }) => theme.colors["light-gray-2"]};
    text-decoration: none;
    margin-bottom: 15px;
    line-height: 1.5;
  }

  a:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Information = ({ title, informations }) => {
  return (
    <InformationContainer>
      <h3>{title}</h3>

      {informations.map((item) => (
        <Link key={item.link} to={item.link}>
          {item.text}
        </Link>
      ))}
    </InformationContainer>
  );
};

export default Information;