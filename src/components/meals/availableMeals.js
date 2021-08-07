import { useEffect, useState } from 'react';


import classes from './AvailableMeals.module.css';
import Card from '../ui/card';
import MealItem from './mealItem/mealItem';

const AvailableMeals = () => {

  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      const res = await fetch('https://react-4f9c4-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json');

      if(!res.ok){
        throw new Error('Something went wrong!');
      }
      const resData = await res.json();

      const loadedMeals = [];

      for(const key in resData) {
        loadedMeals.push({
          id: key,
          name: resData[key].name,
          description: resData[key].description,
          price: resData[key].price
        });
      }

      setMeals(loadedMeals);
      setIsLoading(false);
    };
    
      fetchMeals().catch((error) => {
        setIsLoading(false);
          setIsError(error.message);
      });
  
  }, []);

  if(isLoading) {
    return  (
      <section className={classes.mealsLoading}>
        <p>....Loading</p>
      </section>
    );
  }

  if(isError) {
    return  (
      <section className={classes.mealsError}>
        <p>{isError}</p>
      </section>
    );
  }

    const mealsList = meals.map((meal) => (
      <MealItem
        key={meal.id}
        id={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    ));

    return (
      <section className={classes.meals}>
        <Card>
          <ul>{mealsList}</ul>
        </Card>
      </section>
    );
};

export default AvailableMeals;