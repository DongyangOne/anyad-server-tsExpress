import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import sequelize from './models'
import path from 'path'
import YAML from 'yamljs'
import swaggerUi from 'swagger-ui-express'

const app = express()
const port = 8000

const swaggerSpec = YAML.load(
  path.join(__dirname, './utils/swagger/openapi.yaml'),
)
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(
  cors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
  }),
)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

app.listen(port, async () => {
  console.log(`SERVER ON! PORT : ${port}`)
  await sequelize
    .authenticate()
    .then(async () => {
      console.log('connection success')
    })
    .catch((e) => {
      console.log(e)
    })
})
