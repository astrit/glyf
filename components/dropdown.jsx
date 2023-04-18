import React, { useState, useEffect } from "react";
import styled from "styled-components";

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button`
  background-color: #fff;
  color: #333;
  border: 1px solid #ccc;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
`;

const DropdownContent = styled.div`
  position: absolute;
  z-index: 1;
  background-color: #fff;
  border: 1px solid #ccc;
  border-top: none;
  display: none;
`;

const OptionItem = styled.a`
  color: #333;
  padding: 10px;
  display: block;
  cursor: pointer;
`;

const Dropdown = ({ options, onChange, placeholder = "Select an option" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onChange(option.value);
  };

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOutsideClick = (event) => {
    const target = event.target;
    const dropdown = document.getElementById("dropdown");

    if (dropdown && !dropdown.contains(target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick, false);

    return () => {
      document.removeEventListener("click", handleOutsideClick, false);
    };
  }, []);

  return (
    <DropdownContainer id="dropdown">
      <DropdownButton onClick={handleButtonClick}>
        {selectedOption ? selectedOption.label : placeholder}
      </DropdownButton>
      {isOpen && (
        <DropdownContent>
          {options.map((option) => (
            <OptionItem
              key={option.value}
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </OptionItem>
          ))}
        </DropdownContent>
      )}
    </DropdownContainer>
  );
};

export default Dropdown;
