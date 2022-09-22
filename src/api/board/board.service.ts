import { Request, Response } from "express"
import { Op } from "sequelize"
import { Board } from "../../models/domain/Board"

exports.getBoardList = async (req: Request, res: Response) => {
  try {
    const boardList = await Board.findAll()
    res.json({ data: boardList })
  } catch (err) {
    console.log(err)
  }
}

exports.getBoard = async (req: Request, res: Response) => {
  try {
    const { idx } = req.params
    const board = await Board.findOne({ where: { idx } })
    res.json({ data: board })
  } catch (err) {
    console.log(err)
  }
}

exports.searchBoard = async (req: Request, res: Response) => {
  try {
    const { keyword } = req.query
    const boardList = await Board.findAll({
      where: {
        title: {
          [Op.substring]: String(keyword),
        },
      },
    })
    res.json({ data: boardList })
  } catch (err) {
    console.log(err)
  }
}

exports.saveBoard = async (req: Request, res: Response) => {
  try {
    const user: any = req.user

    const { title, text, price } = req.body

    const { idx } = req.params
    const board = await Board.create({
      title,
      price,
      text,
      imgPath: "sibal",
      moduleIdx: Number(idx),
      userIdx: user.idx,
    })
    res.json({ data: board })
  } catch (err) {
    console.log(err)
  }
}
