import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'

const app = express()
const port = 8000

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

app.listen(port, () => {
  console.log(`SERVER ON! PORT : ${port}`)
})
