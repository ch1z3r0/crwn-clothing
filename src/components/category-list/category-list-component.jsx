import "./category-list.style.scss";
import CategoryItem from "../category-item/category-item.component";

const CategoryList = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category, id) => (
        <CategoryItem key={id} category={category} />
      ))}
    </div>
  );
};

export default CategoryList;
