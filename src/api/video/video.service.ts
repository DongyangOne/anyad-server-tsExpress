import { Response, Request } from "express"
import { Video } from "../../models/domain/Video"

exports.uploadVideo = async (req: any, res: Response) => {
  try {
    const user: any = req.user
    const userIdx: number = user.idx
    const { idx } = req.params
    const filename = req.file.filename
    const video = await Video.create({
      userIdx,
      accessIdx: Number(idx),
      path: filename,
    })
    res.json({ data: video })
  } catch (err) {
    console.log(err)
  }
}
