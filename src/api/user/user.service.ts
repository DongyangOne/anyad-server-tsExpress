import { Request, Response } from "express"
import { User } from "../../models/domain/User"
import { Provider } from "../../models/interface/Provider"

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
