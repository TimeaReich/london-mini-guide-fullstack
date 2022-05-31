import React from "react";
const CategoriesButtons = (props) => {
  console.log(props.category);
  return (
    <div>
      <button
        value="hospitals"
        className={
          props.category === "hospitals" ? "category-button" : "inactive-button"
        }
        onClick={(e) => props.setCategory(e.target.value)}
      >
        Hospitals
      </button>
      <button
        value="doctors"
        className={
          props.category === "doctors" ? "category-button" : "inactive-button"
        }
        onClick={(e) => props.setCategory(e.target.value)}
      >
        Doctors
      </button>
      <button
        value="colleges"
        className={
          props.category === "colleges" ? "category-button" : "inactive-button"
        }
        onClick={(e) => props.setCategory(e.target.value)}
      >
        Schools
      </button>
      <button
        value="pharmacies"
        className={
          props.category === "pharmacies"
            ? "category-button"
            : "inactive-button"
        }
        onClick={(e) => props.setCategory(e.target.value)}
      >
        Pharmacies
      </button>
    </div>
  );
};
export default CategoriesButtons;
