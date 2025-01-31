import {
  Table,
  Column,
  Model,
  ForeignKey,
  BelongsTo,
  DataType,
} from "sequelize-typescript";
import { User } from "./user.model";

@Table({
  tableName: "posts",
  modelName: "Post",
  timestamps: true,
  underscored: true,
})
export class Post extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title!: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  content!: string;

  // Associate
  @BelongsTo(() => User, {
    targetKey: "id",
    foreignKey: { name: "user_id", allowNull: false },
    as: "user_detail",
  })
  user_id!: number;
}
