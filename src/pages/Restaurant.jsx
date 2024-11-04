import React from 'react';
import Card from '../components/Card';

const Restaurant = () => (
   <div className="restaurant-page">
      <h2>Our Restaurants</h2>
      <div className="restaurant-list">
         <Card title="Pizza Place" image="/assets/pizza.jpg" description="Best pizzas in town" />
         <Card title="Sushi House" image="/assets/sushi.jpg" description="Fresh sushi and more" />
         {/* More restaurant cards */}
      </div>
   </div>
);

export default Restaurant;
