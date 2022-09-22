import { Association, DataTypes, Model } from "sequelize"
import sequelize from ".."
import { VideoAttributes } from "../interface/Video"
import { Access } from "./Access"
import { User } from "./User"

export class Video extends Model<VideoAttributes> {
  public readonly idx!: number
  public path!: string
  public accessIdx!: number
  public userIdx!: number

  public readonly createdAt!: Date
  public readonly updatedAt!: Date

  public static associations: {
    userVideo: Association<Video, User>
    accessVideo: Association<Video, Access>
  }
}

Video.init(
  {
    idx: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    path: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    accessIdx: {
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

User.hasMany(Video, {
  sourceKey: "idx",
  foreignKey: "userIdx",
  as: "userVideo",
})

Video.belongsTo(User, {
  foreignKey: "userIdx",
  as: "userVideo",
})

Access.hasMany(Video, {
  sourceKey: "idx",
  foreignKey: "accessIdx",
  as: "accessVideo",
})

Video.belongsTo(Access, {
  foreignKey: "accessIdx",
  as: "accessVideo",
})
