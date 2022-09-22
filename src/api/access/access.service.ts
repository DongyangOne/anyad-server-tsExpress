import { Request, Response } from "express"
import { Module } from "../../models/domain/Module"
import { Access } from "../../models/domain/Access"
const { Op } = require("sequelize")

exports.getAccessList = async (req: Request, res: Response) => {
  try {
    const user: any = req.user
    const data = await Access.findAll({ where: { userIdx: user.idx } })
    res.json({ data: data })
  } catch (err) {
    console.log(err)
  }
}

exports.getAccess = async (req: Request, res: Response) => {
  const { idx } = req.params
  try {
    const data = await Access.findOne({ where: { idx } })
    res.json({ data: data })
  } catch (err) {
    console.log(err)
  }
}

exports.buyAccess = async (req: Request, res: Response) => {
  try {
    const user: any = req.user
    const { idx } = req.params
    const module = await Module.findOne({ where: { idx } })
    const accessList = await Access.findAll({
      where: {
        moduleIdx: idx,
        userIdx: {
          [Op.ne]: user.idx,
        },
      },
    })
    const access = Access.update(
      { userIdx: user.idx },
      { where: { idx: accessList[0].idx } }
    )
    res.json({ data: access })
  } catch (err) {
    console.log(err)
  }
}
