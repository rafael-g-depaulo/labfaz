import styled from "styled-components";

export const Search = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  outline: none;
  border: none;

  color: black;
  font-size: 11px;
  font-weight: 500;
`;

export const SearchIconWrapper = styled.div`
  margin: 5px 15px 0 15px;
`;

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  width: 100%;
  height: 45px;
  background-color: #ffffff;
  border: 1px solid black;
`;

export const SearchButton = styled.button`
  border-left: 1px solid black;
  border-top: none;
  border-bottom: none;
  border-right: none;
  padding: 0 25px;
  color: black;
  font-size: 12px;
  font-weight: 700;
  outline: none;
  background-color: #ffffff;
  cursor: pointer;
`;
