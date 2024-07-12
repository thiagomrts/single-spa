import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  max-width: 400px;
  margin: 0 auto;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  font-size: 18px;
`;

export const Input = styled.input`
  padding: 8px;
  width: calc(100% - 20px);
  margin-bottom: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

export const Button = styled.button`
  padding: 10px 20px;
  border-radius: 4px;
  border: none;
  background: #007bff;
  color: white;
  cursor: pointer;

  &:hover {
    background: #0056b3;
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 20px;
`;

export const ListItem = styled.li`
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;
