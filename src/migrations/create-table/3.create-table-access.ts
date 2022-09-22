import { Access } from "../../models/domain/Access"

console.log("======Create Access Table======")

const create_table_access = async () => {
  await Access.sync({ force: true })
    .then(() => {
      console.log("✅Success Create Access Table")
    })
    .catch((err) => {
      console.log("❗️Error in Create Access Table : ", err)
    })
}

create_table_access()
