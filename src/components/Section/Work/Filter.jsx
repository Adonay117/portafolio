import React, { useState } from 'react';
import useScrollVisibilitySection from '../../../hook/ScrollSection';

const Filter = ({ options = [], onChange }) => {
  const [selectedTags, setSelectedTags] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const isVisible = useScrollVisibilitySection('filter', 200);

  const handleCheckboxChange = (option) => {
    const newSelectedTags = selectedTags.includes(option)
      ? selectedTags.filter(tag => tag !== option)
      : [...selectedTags, option];

    console.log("Filter Selected Tags:", newSelectedTags);
    setSelectedTags(newSelectedTags);
    onChange(newSelectedTags);
  };

  const handleTagRemove = (tag) => {
    const newSelectedTags = selectedTags.filter(t => t !== tag);
    setSelectedTags(newSelectedTags);
    onChange(newSelectedTags);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div
      id="filter"
      className={`w-full max-w-[300px] h-[70px] transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div
        className="relative inline-block w-full outline outline-1 outline-gray-300 rounded py-2 px-3 cursor-pointer"
        onClick={toggleDropdown}
        aria-haspopup="listbox"
        aria-expanded={dropdownOpen}
        aria-label="Selecciona un filtro"
      >
        <div
          className="flex flex-wrap items-center transition-all duration-300 ease-in-out max-h-24 overflow-y-auto"
          style={{ maxHeight: selectedTags.length > 0 ? '6rem' : '2rem' }}
        >
          {selectedTags.length > 0 ? (
            selectedTags.map(tag => (
              <div
                key={tag}
                className="flex items-center text-gray-500 dark:text-gray-200 px-3 py-1 rounded-full mr-2 mb-2"
              >
                {tag}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleTagRemove(tag);
                  }}
                  className="ml-2 dark:text-gray-200 text-gray-600 hover:text-gray-500 dark:hover:text-gray-400 focus:outline-none"
                  aria-label={`Remover ${tag}`}
                >
                  &times;
                </button>
              </div>
            ))
          ) : (
            <span className="text-gray-300">Filtro por etiquetas</span>
          )}
        </div>

        {dropdownOpen && (
          <div
            className="absolute top-full mt-2 left-0 right-0 bg-white opacity-80 border border-gray-300 rounded shadow-lg z-10 max-h-48 overflow-y-auto"
            role="listbox"
          >
            {options.map(option => (
              <label
                key={option}
                className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
                role="option"
                aria-selected={selectedTags.includes(option)}
                onClick={() => handleCheckboxChange(option)}
              >
                <input
                  type="checkbox"
                  checked={selectedTags.includes(option)}
                  onChange={() => handleCheckboxChange(option)}
                  className="mr-2 "
                  aria-label={option}
                />
                {option}
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Filter;
