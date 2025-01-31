import {
  Table,
  Column,
  Model,
  HasOne,
  HasMany,
  DataType,
} from "sequelize-typescript";
import { UserDetail } from "./userDetail.model";
import { Post } from "./post.model";

@Table({
  tableName: "users",
  modelName: "User",
  timestamps: true,
  underscored: true,
})
export class User extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email!: string;

  // Associate
  @HasOne(() => UserDetail, {
    sourceKey: "id",
    foreignKey: "user_id",
    as: "user_detail",
  })
  userDetail!: UserDetail;

  @HasMany(() => Post, {
    sourceKey: "id",
    foreignKey: "user_id",
    as: "posts",
  })
  posts!: Post[];
}
