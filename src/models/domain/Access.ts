import { Association, DataTypes, Model } from "sequelize"
import sequelize from ".."
import { ModuleAttributes } from "../interface/Module"
import { User } from "./User"

export class Module extends Model<ModuleAttributes> {
  public readonly idx!: number
  public name!: string
  public userIdx!: number

  public readonly createdAt!: Date
  public readonly updatedAt!: Date

  public static associations: {
    userModule: Association<Module, User>
  }
}

Module.init(
  {
    idx: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    userIdx: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    modelName: "Module",
    tableName: "tbl_module",
    sequelize,
    freezeTableName: true,
  }
)

User.hasMany(Module, {
  sourceKey: "idx",
  foreignKey: "userIdx",
  as: "userModule",
})

Module.belongsTo(User, {
  foreignKey: "userIdx",
  as: "userModule",
})
