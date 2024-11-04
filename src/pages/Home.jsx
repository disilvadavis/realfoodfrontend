import React from 'react';
import Card from '../components/Card';

// Import images
import pizza from '../assets/pizza.jpg';
import sushi from '../assets/sushi.jpg';
import burger from '../assets/burger.jpg';
import pasta from '../assets/pasta.jpg';
import salad from '../assets/salad.jpg';
import tacos from '../assets/tacos.jpg';
import steak from '../assets/steak.jpg';
import friedChicken from '../assets/friedchicken.jpg';
import pancakes from '../assets/pancakes.jpg';
import dessert from '../assets/dessert.jpg';


const Home = () => {
   const foodItems = [
      { title: "Pizza", image: pizza, description: "Classic cheese pizza with a crispy crust" },
      { title: "Sushi", image: sushi, description: "Fresh sushi rolls with various fillings" },
      { title: "Burger", image: burger, description: "Juicy beef burger with cheese and lettuce" },
      { title: "Pasta", image: pasta, description: "Creamy pasta with a rich sauce" },
      { title: "Salad", image: salad, description: "Healthy green salad with fresh vegetables" },
      { title: "Tacos", image: tacos, description: "Mexican tacos with seasoned meat" },
      { title: "Steak", image: steak, description: "Grilled steak cooked to perfection" },
      { title: "Fried Chicken", image: friedChicken, description: "Crispy fried chicken with spices" },
      { title: "Pancakes", image: pancakes, description: "Fluffy pancakes with syrup" },
      { title: "Dessert", image: dessert, description: "Decadent chocolate dessert" },
    
   ];

   return (
      <div className="home">
         <h2>Popular Dishes</h2>
         <div className="food-list">
            {foodItems.map((item, index) => (
               <Card key={index} title={item.title} image={item.image} description={item.description} />
            ))}
         </div>
      </div>
   );
};

export default Home;
