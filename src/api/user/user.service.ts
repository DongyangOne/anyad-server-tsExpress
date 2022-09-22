import { Request, Response } from "express"
import passport from "passport"
import { User } from "../../models/domain/User"
import jwt from "jsonwebtoken"
import { Provider } from "../../models/interface/Provider"
import nodemailer from "nodemailer"

exports.localSave = async (req: Request, res: Response) => {
  try {
    const { email, password, name } = req.body
    const user = await User.create({
      email,
      password,
      name,
      provider: Provider.LOCAL,
    })
    res.json({ result: true, user: User })
  } catch (err) {
    console.log(err)
  }
}

exports.localLogin = async (req: Request, res: Response) => {
  exports.localLogin = async (req: Request, res: Response) => {
    passport.authenticate("local", { session: false }, (err, user) => {
      if (err || !user) {
        return res.status(400).json({
          message: "Something is not right",
          user: user,
        })
      }
      req.login(user, { session: false }, (err) => {
        if (err) {
          res.send(err)
        }
        const token = jwt.sign({ idx: user.idx }, "123")
        res.cookie("accessToken", token, {
          expires: new Date(Date.now() + 86400e3),
          sameSite: "lax",
        })
        return res.json({ user, token })
      })
    })(req, res)
  }
}

exports.sendMail = async (req: Request, res: Response) => {
  try {
    const checkCode = String(getNumber())
    const transporter = nodemailer.createTransport({
      service: "Naver",
      port: 587,
      host: "smtp.gmail.com",
      secure: false,
      requireTLS: false,
      auth: {
        user: "inhoo25@naver.com",
        pass: "wjd1127@!",
      },
    })
    const mailOptions = {
      from: "inhoo25@naver.com",
      to: req.body.email,
      subject: "[ANYAD Sign Up Check Code]",
      text: `Your Code : ${checkCode}`,
    }
    await transporter.sendMail(mailOptions)
    res.json({ code: checkCode })
  } catch (error) {
    console.log(error)
  }
}

const getNumber = () => {
  let number = Math.floor(Math.random() * 1000000) + 100000
  if (number > 1000000) number -= 100000
  return number
}
