import React, { FC } from "react";
import { SearchWrapper, Search, SearchIconWrapper, SearchButton } from "./styles";

import { AiOutlineSearch } from "react-icons/ai";

export const SearchBar: FC = () => {
  return (
    <SearchWrapper>
      <SearchIconWrapper>
        <AiOutlineSearch />
      </SearchIconWrapper>
      <Search placeholder="Atividade de interesse" type="text" />
      <SearchButton>Procurar</SearchButton>
    </SearchWrapper>
  );
};

export default SearchBar;
