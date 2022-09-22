import { Video } from "../../models/domain/Video"

console.log("======Create Video Table======")

const create_table_video = async () => {
  await Video.sync({ force: true })
    .then(() => {
      console.log("✅Success Create Video Table")
    })
    .catch((err) => {
      console.log("❗️Error in Create Video Table : ", err)
    })
}

create_table_video()
