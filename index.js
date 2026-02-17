import express from "express"
import 'dotenv/config'
import drinksRouter from "./routes/drinks.js";
import menuRouter from "./routes/menu.js";
import aboutRouter from "./routes/about.js";
import * as path from "path"


const app = express()
const port = process.env.PORT;

const __dirname = path.resolve()

app.set('view engine', 'ejs')
app.use(express.static("public"))


app.get('/', (req, res) => {
  res.render(
    path.join(__dirname, "views/pages/index"),
    {
      pageTitle: "Welcome to Café Carbs",
      subTitle: "Your local escape for authentic flavors and cozy moments.",
      description: "Nestled in the heart of the neighborhood, we invite you to experience the perfect blend of tradition and passion. Whether you're starting your day with a freshly roasted coffee, enjoying a wholesome homemade lunch, or treating yourself to our artisan pastries, we provide a warm atmosphere where every guest feels like family. Step inside and discover why Cafe Carbs is the community's favorite spot for food, friends, and fika.",
      className: "home",
      documentTitle: "Cafe Carbs"
    }
  )
})

app.use('/drinks', drinksRouter)

app.use('/menu', menuRouter)

app.use('/about', aboutRouter)

app.listen(port, () => {
  console.log(`listening to port ${port}`)
})

export default app