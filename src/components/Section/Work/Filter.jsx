import React, { useState } from 'react';

const Filter = ({options =['react']}) => {
    const [selectedTags, setSelectedTags] = useState([]);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    

    const handleCheckboxChange = (option) => {
        if (selectedTags.includes(option)) {
            setSelectedTags(selectedTags.filter(tag => tag !== option));
        } else {
            setSelectedTags([...selectedTags, option]);
        }
    };

    const handleTagRemove = (tag) => {
        setSelectedTags(selectedTags.filter(t => t !== tag));
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <div className=" w-full max-w-[300px]">
            
            <div 
                className="relative inline-block w-full outline outline-1 outline-gray-300 rounded py-2 px-3 cursor-pointer"
                onClick={toggleDropdown}
                aria-haspopup="listbox"
                aria-expanded={dropdownOpen}
                aria-label="Selecciona un filtro"
            >
                <div className="flex flex-wrap items-center">
                    {selectedTags.length > 0 ? (
                        selectedTags.map(tag => (
                            <div 
                                key={tag} 
                                className="flex items-center  text-gray-400 px-3 py-1 rounded-full mr-2 mb-2"
                            >
                                {tag}
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleTagRemove(tag);
                                    }}
                                    className="ml-2 text-gray-500 hover:text-gray-700 focus:outline-none"
                                    aria-label={`Remover ${tag}`}
                                >
                                    &times;
                                </button>
                            </div>
                        ))
                    ) : (
                        <span className="text-gray-500">Selecciona un filtro</span>
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
                            >
                                <input 
                                    type="checkbox" 
                                    checked={selectedTags.includes(option)} 
                                    onChange={() => handleCheckboxChange(option)}
                                    className="mr-2"
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
