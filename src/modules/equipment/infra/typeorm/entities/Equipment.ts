import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { Customer } from "@modules/customer/infra/typeorm/entities/Customer";

@Entity("equipments")
class Equipment {
  @PrimaryColumn()
  id: string;

  @Column()
  status: boolean;

  @Column()
  name: string;

  @ManyToOne(() => Customer)
  @JoinColumn({ name: "customer_id" })
  customer: Customer;

  @Column()
  customer_id: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
      this.status = false;
    }
  }
}

export { Equipment };
