import { inject, injectable } from "tsyringe";

import { Customer } from "@modules/customer/infra/typeorm/entities/Customer";
import { ICustomersRepository } from "@modules/customer/repositories/ICustomersRepository";

interface IRequest {
  name: string;
  email: string;
}

@injectable()
class CreateCustomerUseCase {
  constructor(
    @inject("CustomersRepository")
    private customersRepository: ICustomersRepository
  ) {}

  async execute({ name, email }: IRequest): Promise<Customer> {
    const customer = this.customersRepository.create({ name, email });

    return customer;
  }
}

export { CreateCustomerUseCase };
