import express, { Request, Response } from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
import sequelize from "./models"
import path from "path"
import YAML from "yamljs"
import swaggerUi from "swagger-ui-express"
import passport from "passport"

const app = express()
const port = 3000
const PassportCofig = require("./utils/passport")
const swaggerSpec = YAML.load(
  path.join(__dirname, "./utils/swagger/openapi.yaml")
)

PassportCofig()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(
  cors({
    origin: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
  })
)
app.use(passport.initialize())
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))
app.use("/api", require("./api"))
app.get("/", (req: Request, res: Response) => res.json("SERVER ON!"))

app.listen(port, async () => {
  console.log(`SERVER ON SUCCESS! PORT : ${port}`)
  await sequelize
    .authenticate()
    .then(async () => {
      console.log("DATABASE CONNECTION SUCCESS")
    })
    .catch((e) => {
      console.log(e)
    })
})
