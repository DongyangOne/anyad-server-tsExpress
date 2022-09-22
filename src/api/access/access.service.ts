import { Request, Response } from "express"
import { Access } from "../../models/domain/Access"

const { Op } = require("sequelize")
const models = require("../../models")

exports.getAccessList = async (req: Request, res: Response) => {
  
  try {
    const user: any = req.user
    const { idx } = req.params
    const data = await Access.findAll({ where: { userIdx : user.idx } })
    res.json({ result: true, data: data})
  } catch (err) {
    console.log(err)
  }
}

exports.getAccess = async (req, res) => {
  const { id } = req.params
  try {
    const data = await models.Access.findAll({ where: { id: id } })
    res.json({ result: true, data: data })
  } catch (err) {
    console.log(err)
  }
}

exports.buyAccess = async (req, res) => {
  const { id: mId } = req.params
  // const { id: uId } = req.body.user
  // console.log(mId, uId)
  try {
    // const module = await models.Module.findOne({ where: { id: mId } })
    const access = await models.Access.findAll({
      where: {
        module_id: mId,
        user_id: {
          [Op.ne]: 2,
        },
      },
    })
    console.log(access)
    await models.Access.update({ user_id: 1 }, { where: { id: access[0].id } })
    res.json({ result: true })
  } catch (err) {
    console.log(err)
  }
}