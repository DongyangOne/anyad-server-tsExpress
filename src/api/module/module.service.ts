import { Request, Response } from "express"
import { Module } from "../../models/domain/Module"

exports.saveModule = async (req: Request, res: Response) => {
  try {
    const user: any = req.user
    const { name } = req.body
    const module = await Module.create({ name: name, userIdx: user.idx })
    res.json({ result: true, module: module })
  } catch (err) {
    console.log(err)
  }
}
