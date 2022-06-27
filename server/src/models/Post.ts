import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
} from "typeorm";

@Entity({ name: "Posts" })
export class Post extends BaseEntity {
  @PrimaryGeneratedColumn({ name: "Id", type: "bigint" })
  id: number;
  @Column("varchar", { name: "FirstName", nullable: false })
  firstName: string;
  @Column("varchar", { name: "LastName", nullable: false })
  lastName: string;
  @Column({ name: "Age", nullable: false })
  age: number;
  @Column("varchar", { name: "Email", nullable: true })
  email: string;
  @Column("varchar", { name: "PhoneNumber", nullable: false })
  phone: string;
  @Column("varchar", { name: "Category", nullable: false })
  category: string;
  @Column("varchar", { name: "Massage", length: 500, nullable: false })
  message: string;
  @CreateDateColumn({ name: "Created_at" })
  createdAt: Date;
  @UpdateDateColumn({ name: "Updated_at" })
  updatedAt: Date;
}
