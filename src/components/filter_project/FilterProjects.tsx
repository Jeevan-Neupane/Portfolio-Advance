import React, { useEffect, useState } from "react";
import { FilterContainer, FilterButton } from "./style";

// Define the type for each filter option
interface FilterOption {
  id: number;
  name: string;
}

// Define the component props
interface MultiSelectFilterProps {
  filterOptions: FilterOption[]; // List of filter options
  onFilterChange?: (selectedFilters: string[]) => void; // Optional callback for selected filters
}

const MultiSelectFilter: React.FC<MultiSelectFilterProps> = ({
  filterOptions,
  onFilterChange,
}) => {
  // Initialize state with "All" selected by default
  const [selectedFilters, setSelectedFilters] = useState<string[]>(["All"]);

  const toggleFilter = (filterName: string) => {
    setSelectedFilters((prevFilters) => {
      if (filterName === "All") {
        // If "All" is selected, reset to only "All"
        const newFilters = ["All"];
        onFilterChange && onFilterChange(newFilters);
        return newFilters;
      }

      // Remove "All" if another filter is selected
      const filters = prevFilters.includes("All")
        ? prevFilters.filter((f) => f !== "All")
        : prevFilters;

      // Toggle the selected filter
      const newFilters = filters.includes(filterName)
        ? filters.filter((f) => f !== filterName)
        : [...filters, filterName];

      // Update parent component if onFilterChange is provided
      onFilterChange && onFilterChange(newFilters);
      return newFilters;
    });
  };

  useEffect(() => {
    if (selectedFilters.length === 0) {
      setSelectedFilters(["All"]);
    }
  }, [selectedFilters]);

  return (
    <FilterContainer>
      {filterOptions.map((filter) => (
        <FilterButton
          key={filter.id}
          isActive={selectedFilters.includes(filter.name)}
          onClick={() => toggleFilter(filter.name)}
        >
          {filter.name}
        </FilterButton>
      ))}
    </FilterContainer>
  );
};

export default MultiSelectFilter;
