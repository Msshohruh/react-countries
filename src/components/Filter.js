import "./Filter.css";
import { useState } from "react";
import { MdSearch } from "react-icons/md";

function Filter({ allCategories, filterCategory, filterCountry }) {
  const [showCategory, setShowCategory] = useState(false);
  console.log(allCategories)
  return (
    <div>
      <div className="container filter-container">
        <form >
          <MdSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search for a country..."
            autoFocus
            autoComplete="off"
            onChange={(e) => {
              filterCountry(e.target.value)
            }}
          />
        </form>
        <div
          className="select"
          onClick={() => {
            setShowCategory(showCategory ? false : true);
          }}
        >
          <span>Filter by region</span>

          {showCategory && 
          <div className="select-categories">
            {allCategories.map((category) => {
              return (
                <span className="select-category" onClick={() => {
                  filterCategory(category)
                }}>{category}</span>
              )
            })}
          </div>}
        </div>
      </div>
    </div>
  );
}

export default Filter;
