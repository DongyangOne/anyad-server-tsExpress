import { Request, Response } from "express"
import { Access } from "../../models/domain/Access"
import { Module } from "../../models/domain/Module"

exports.saveModule = async (req: Request, res: Response) => {
  try {
    const user: any = req.user
    const { name } = req.body
    const module = await Module.create({ name: name, userIdx: user.idx })
    for (let i = 0; i < 12; i++) {
      const access = await Access.create({
        userIdx: user.idx,
        moduleIdx: module.idx,
      })
    }
    res.json({ result: true, module: module })
  } catch (err) {
    console.log(err)
  }
}
