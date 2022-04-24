import { inject, injectable } from "tsyringe";

import { ICustomersRepository } from "@modules/customer/repositories/ICustomersRepository";

@injectable()
class DeleteCustomerUseCase {
  constructor(
    @inject("CustomersRepository")
    private customersRepository: ICustomersRepository
  ) {}

  async execute(id: string): Promise<void> {
    this.customersRepository.delete(id);
  }
}

export { DeleteCustomerUseCase };
