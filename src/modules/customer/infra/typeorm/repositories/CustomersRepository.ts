import { getRepository, Repository } from "typeorm";

import {
  ICreateCustomerDTO,
  ICustomersRepository,
} from "@modules/customer/repositories/ICustomersRepository";

import { Customer } from "../entities/Customer";

class CustomersRepository implements ICustomersRepository {
  private repository: Repository<Customer>;

  constructor() {
    this.repository = getRepository(Customer);
  }

  async create({ name, email }: ICreateCustomerDTO): Promise<Customer> {
    const user = this.repository.create({ name, email });

    await this.repository.save(user);

    return user;
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}

export { CustomersRepository };
