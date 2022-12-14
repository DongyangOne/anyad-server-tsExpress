import { Association, DataTypes, Model } from "sequelize"
import sequelize from ".."
import { AccessAttributes } from "../interface/Access"
import { Module } from "./Module"
import { User } from "./User"

export class Access extends Model<AccessAttributes> {
  public readonly idx!: number
  public moduleIdx!: number
  public userIdx!: number

  public readonly createdAt!: Date
  public readonly updatedAt!: Date

  public static associations: {
    userAccess: Association<Access, User>
    moduleAccess: Association<Access, Module>
  }
}

Access.init(
  {
    idx: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    moduleIdx: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userIdx: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    modelName: "Access",
    tableName: "tbl_access",
    sequelize,
    freezeTableName: true,
  }
)

User.hasMany(Access, {
  sourceKey: "idx",
  foreignKey: "userIdx",
  as: "userAccess",
})

Access.belongsTo(User, {
  foreignKey: "userIdx",
  as: "userAccess",
})

Module.hasMany(Access, {
  sourceKey: "idx",
  foreignKey: "moduleIdx",
  as: "moduleAccess",
})

Access.belongsTo(Module, {
  foreignKey: "moduleIdx",
  as: "moduleAccess",
})
