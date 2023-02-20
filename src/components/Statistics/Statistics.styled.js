import styled from 'styled-components';

// import { BiLike } from 'react-icons/bi';
// import { MdPeople, MdAddShoppingCart } from 'react-icons/md';
// import { GiTreeDoor } from 'react-icons/gi';

export const Container = styled.div`
  margin: 0 auto;
  width: 600px;
`;
export const Title = styled.h2`
  width: inherit;
  text-align: center;
`;
export const List = styled.ul`
  display: flex;
  padding: 0;
  margin: 0 auto;
  gap: 10px;
  border-radius: 10px;
`;
export const Item = styled(List).attrs({
  as: 'li',
})`
  width: 80px;
  background-color: ${({ active }) => (active ? 'red' : 'white')};
  padding: 20px 40px;
  flex-direction: column;
  align-items: center;
  text-align: center;

  :focus,
  :hover {
    transform: scale(1.1);
  }
`;

export const Total = styled.div`
  color: #4a94ec;
  font-weight: 800;
  font-size: 24px;
  flex-direction: column;
  display: flex;
  align-items: center;
`;
export const Text = styled.span`
  color: #9f9f9e;
`;

// export const Like = styled(BiLike)`
//   color: green;
//   width: 30px;
//   height: 30px;
//   color: black;

//   :focus,
//   :hover {
//     color: green;
//   }
// `;

//стилі для svg

export const Icon = styled.svg`
  font-size: 50px;
  width: 50px;
  height: 50px;
  color: black;
`;
