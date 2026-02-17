import express from "express"
import { lunchMenu, cakes } from "../data/data.js";
import * as path from "path"

const menuRouter = express.Router()
const __dirname = path.resolve();

menuRouter.get('/', (req, res) => {
  console.log(lunchMenu)
  res.render(
    path.join(__dirname, "views/pages/menu"),
    {
      pageTitle: "Menu", 
      subTitle: "Hangry?",
      description: "Explore our carefully curated menu, where every dish and drink tells a story of quality and craft. From our kitchen’s seasonal lunch specials to our bakery’s daily treats and our barista’s specialty brews, we offer a diverse selection to satisfy every craving. Select a category below to discover your next favorite meal.", 
      className: "menu",
      documentTitle: "Menu"
    }
)
})

menuRouter.get('/lunch', (req, res) => {
  res.render(
    path.join(__dirname, "views/pages/menu"),
    {
      pageTitle: "Lunch", 
      subTitle: "Best lunch in town",
      description: "Savor our selection of hearty, homemade lunch options. We specialize in savory pies with flaky crusts, vibrant seasonal salads, and comforting soups. Every dish is prepared daily in our kitchen using fresh, local ingredients to ensure a delicious and satisfying midday meal that keeps you going all day.",
      documentTitle: "Lunch", 
      className: "lunch",
      lunchList: lunchMenu, 
      pageType: "lunch" 
      
    }
)
})

menuRouter.get('/cakes', (req, res) => {
  res.render(
    path.join(__dirname, "views/pages/menu"),
    {
      pageTitle: "CAKES", 
      subTitle: "WE LOVE CARBS",
      description: "Indulge in a sweet escape with our hand-crafted cakes and pastries. Following traditional recipes with a modern twist, our bakers create everything from rich chocolate treats to light, fruit-filled tarts. Whether it's a classic 'fika' or a special celebration, our desserts are designed to bring a little extra joy to your table.",
      documentTitle: "Cakes",
      className: "cakes",
      cakesMenu: cakes,
      pageType: "cakes"
    }
)
})


export default menuRouter