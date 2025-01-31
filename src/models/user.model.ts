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

@Table
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

  // User HasOne UserDetail
  @HasOne(() => UserDetail)
  userDetail!: UserDetail;

  // User HasMany Post
  @HasMany(() => Post)
  posts!: Post[];
}
