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
    type: DataType.UUID, // Use UUID instead of INTEGER
    primaryKey: true,
    defaultValue: DataType.UUIDV4, // Automatically generate UUIDs
    allowNull: false,
  })
  declare id: string; // Use `string` for UUID

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare name: string;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  declare email: string;

  // Associate
  @HasOne(() => UserDetail, {
    sourceKey: "id",
    foreignKey: { name: "user_id", allowNull: false },
    as: "user_detail",
  })
  declare userDetail: UserDetail;

  @HasMany(() => Post, {
    sourceKey: "id",
    foreignKey: { name: "user_id", allowNull: false },
    as: "posts",
  })
  declare posts: Post[];
}
