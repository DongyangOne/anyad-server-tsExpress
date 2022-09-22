import { Module } from "../../models/domain/Module"

console.log("======Create Module Table======")

const create_table_module = async () => {
  await Module.sync({ force: true })
    .then(() => {
      console.log("✅Success Create Module Table")
    })
    .catch((err) => {
      console.log("❗️Error in Create Module Table : ", err)
    })
}

create_table_module()
