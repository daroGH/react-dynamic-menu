import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

//set take it only unique value avoid duplicate value
//add all into first array then the rest are from the list
const allCategories = ['all',...new Set(items.map((item)=> item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  //set allCategories to the useState as array  
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if(category === 'all')
    {
      setMenuItems(items);
      return;
    }
    const newItem = items.filter((item) => item.category === category);
    setMenuItems(newItem);
  };
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"> </div>
        </div>
        <Categories categories ={categories} filterItems={filterItems}/>
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;