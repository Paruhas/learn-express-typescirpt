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
  tableName: "user_details",
  modelName: "UserDetail",
  timestamps: true,
  underscored: true,
})
export class UserDetail extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  address!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  phone!: string;

  // Associate
  @BelongsTo(() => User, {
    targetKey: "id",
    foreignKey: { name: "user_id", allowNull: false },
    as: "user",
  })
  user_id!: number;
}
