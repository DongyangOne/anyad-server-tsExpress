import { Association, DataTypes, Model } from "sequelize"
import sequelize from ".."
import { BoardAttributes } from "../interface/Board"
import { Module } from "./Module"
import { User } from "./User"

export class Board extends Model<BoardAttributes> {
  public readonly idx!: number
  public moduleIdx!: number
  public userIdx!: number
  public title!: string
  public text!: string
  public price!: number
  public imgPath!: string

  public readonly createdAt!: Date
  public readonly updatedAt!: Date

  public static associations: {
    userBoard: Association<Board, User>
    moduleBoard: Association<Board, Module>
  }
}

Board.init(
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
    title: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    text: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    imgPath: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    modelName: "Board",
    tableName: "tbl_board",
    sequelize,
    freezeTableName: true,
  }
)

User.hasMany(Board, {
  sourceKey: "idx",
  foreignKey: "userIdx",
  as: "userBoard",
})

Board.belongsTo(User, {
  foreignKey: "userIdx",
  as: "userBoard",
})

Module.hasMany(Board, {
  sourceKey: "idx",
  foreignKey: "moduleIdx",
  as: "moduleBoard",
})

Board.belongsTo(Module, {
  foreignKey: "moduleIdx",
  as: "moduleBoard",
})
