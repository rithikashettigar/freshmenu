import chickenImage from '../assets/images/menu/chicken.jpg';
import burritoImage from '../assets/images/menu/burrito.jpg';
import mexicanImage from '../assets/images/menu/mexican.jpg';
import paneerWrapImage from '../assets/images/menu/paneer-wrap.jpg';
import chickenWrapImage from '../assets/images/menu/chicken-wrap.jpg';
import cheeseBurgerImage from '../assets/images/menu/cheese-burger.jpg';
import chickenBurgerImage from '../assets/images/menu/chicken-burger.jpg';
import alfredoPastaImage from '../assets/images/menu/alfredo-pasta.jpg';
import penneArrabbiataImage from '../assets/images/menu/penne-arrabbiata.jpg';
import greekSaladImage from '../assets/images/menu/greek-salad.jpg';
import caesarSaladImage from '../assets/images/menu/caesar-salad.jpg';

const menuItems = [
  {
    category: "Bowls",
    items: [
      { id: 1, name: "Chicken Maryland", price: 129, calories: 370, image: chickenImage },
      { id: 2, name: "Ultimate Burrito Bowl", price: 129, calories: 450, image: burritoImage },
      { id: 3, name: "Mexican Burrito Bowl", price: 129, calories: 291, image: mexicanImage },
    ],
  },
  {
    category: "Wraps",
    items: [
      { id: 4, name: "Paneer Tikka Wrap", price: 99, calories: 320, image: paneerWrapImage },
      { id: 5, name: "Chicken Wrap", price: 119, calories: 350, image: chickenWrapImage },
    ],
  },
  {
    category: "Burgers",
    items: [
      { id: 6, name: "Cheese Burger", price: 149, calories: 400, image: cheeseBurgerImage },
      { id: 7, name: "Chicken Burger", price: 159, calories: 450, image: chickenBurgerImage },
    ],
  },
  {
    category: "Pastas",
    items: [
      { id: 8, name: "Alfredo Pasta", price: 179, calories: 500, image: alfredoPastaImage },
      { id: 9, name: "Penne Arrabbiata", price: 169, calories: 550, image: penneArrabbiataImage },
    ],
  },
  {
    category: "Salads",
    items: [
      { id: 10, name: "Greek Salad", price: 99, calories: 250, image: greekSaladImage },
      { id: 11, name: "Caesar Salad", price: 109, calories: 300, image: caesarSaladImage },
    ],
  },
];

export default menuItems;
