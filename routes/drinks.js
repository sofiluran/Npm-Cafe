import express from "express"
import * as path from "path"
import { alcohol, coffee } from "../data/data.js";

const drinksRouter = express.Router();
const __dirname = path.resolve();

drinksRouter.get('/', (req, res) => {
  res.render(
    path.join(__dirname, "views/pages/drinks"),
    {
      pageTitle: "Our Drinks", 
      subTitle: "Thirsty?",
      description: "Quench your thirst with our wide selection of beverages. From our barista-made specialty coffees to a refreshing glass of wine or a cold craft beer, we have something to suit every mood and occasion.", 
      className: "drinks",
      documentTitle: "Drinks",
      pageType: "drinks"
    }
)
})

drinksRouter.get('/coffee', (req, res) => {
  res.render(
    path.join(__dirname, "views/pages/drinks"),
    {
      pageTitle: "Coffee", 
      subTitle: "Tired?",
      description: "Experience the art of the perfect brew. We source high-quality, ethically grown beans to bring you a rich and aromatic coffee experience. Whether you prefer a bold espresso, a creamy latte, or a classic drip coffee, our baristas prepare every cup with precision and care.",
      documentTitle: "Coffee", 
      pageType: "coffee",
      className: "coffee",
      coffeeList: coffee
    }
)
})

drinksRouter.get('/alcohol', (req, res) => {
  res.render(
    path.join(__dirname, "views/pages/drinks"),
    {
      pageTitle: "Alcohol", 
      subTitle: "Time for after work?",
      description: "Relax and unwind with our curated selection of spirits. We offer a variety of local craft beers, crisp white wines, and full-bodied reds. Perfect for pairing with our lunch dishes or enjoying on their own during a cozy evening at the cafe.",
      documentTitle: "Alcohol",
      pageType: "alcohol",
      className: "alcohol",
      alcoholList: alcohol
    }
)
})

export default drinksRouter