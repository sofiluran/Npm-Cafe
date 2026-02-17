import express from "express"
import * as path from "path"
import { staff } from "../data/data.js";

const aboutRouter = express.Router()
const __dirname = path.resolve();


aboutRouter.get('/', (req, res) => {
  res.render(
    path.join(__dirname, 'views/pages/about'),
    {
      pageTitle: "About Us", 
      subTitle: "Learn more about us!",
      description: "Welcome to our sanctuary of flavors! Founded with a love for traditional baking and a passion for the perfect brew, our cafe has become a gathering place for friends and families alike. We take pride in using locally sourced ingredients to create everything from our hearty lunch pies to our delicate, hand-crafted pastries. Whether you're here for a quick espresso or a long, lazy lunch, our mission is to make you feel right at home", 
      className: "about",
      documentTitle: "About Us",
      pageType: "about"
    })
})


// underrouters 

aboutRouter.get('/staff', (req, res) => {
  res.render(
    path.join(__dirname, 'views/pages/about'),
    {
      pageTitle: "Staff", 
      subTitle: "Our team is the heart of our cafe.",
      description: "From our skilled baristas who craft the perfect cup of coffee to our creative bakers who prepare our famous pies every morning, we are united by a passion for quality and hospitality. We believe that great food tastes even better when served with a genuine smile and a bit of local charm.",
      documentTitle: "Staff",
      pageType: "staff", 
      className: "staff", 
      staffList: staff
    })
})

export default aboutRouter