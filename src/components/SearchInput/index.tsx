import React, { useCallback, useState } from "react";
import { RiSearch2Line } from "react-icons/ri";
import * as S from "./styles";

const SearchInput: React.FC = () => {
  const [isFocused, setIsFocused] = useState(false);
  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);
  return (
    <S.Container isFocused={isFocused}>
      <RiSearch2Line size={24} />
      <input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        placeholder="Search"
      />
    </S.Container>
  );
};

export default SearchInput;
