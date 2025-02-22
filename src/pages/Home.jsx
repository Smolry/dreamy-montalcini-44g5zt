import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  const recipes = [
    {
      img: "https://pinchofyum.com/wp-content/uploads/Cauliflower-Black-Bean-Tostadas-4-420x600.jpg",
      label: "Healthy",
    },
    {
      img: "https://pinchofyum.com/wp-content/uploads/Spicy-Peanut-Chicken-Salad-Soba-4-840x1200.jpg",
      label: "Soups",
    },
    {
      img: "https://pinchofyum.com/wp-content/uploads/Marry-Me-Chicken-6-840x1200.jpg",
      label: "Winter",
    },
    {
      img: "https://pinchofyum.com/wp-content/uploads/Tortilla-Soup-840x1200.jpg",
      label: "Vegetarian",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <header className="hero text-center d-flex align-items-center justify-content-center">
        <h1 className="text-white p-3 text-shadow">
          Simple Recipes Made for Real, Actual, Everyday Life.
        </h1>
      </header>

      {/* Recipe Cards */}
      <div className="container my-5">
        <div className="row g-4">
          {recipes.map((recipe, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-3">
              <div className="card">
                <img
                  src={recipe.img}
                  className="card-img-top"
                  alt={recipe.label}
                />
                <div className="card-body text-center">
                  <span className="category-label">{recipe.label}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* View All Recipes Button */}
      <div className="container text-center my-4">
        <button className="btn btn-custom">View All Recipes</button>
      </div>
    </div>
  );
};

export default Home;
