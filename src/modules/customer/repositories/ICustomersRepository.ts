import { Customer } from "../infra/typeorm/entities/Customer";

interface ICreateCustomerDTO {
  name: string;
  email: string;
}

interface ICustomersRepository {
  create({ name, email }: ICreateCustomerDTO): Promise<Customer>;
  delete(id: string): Promise<void>;
}

export { ICustomersRepository, ICreateCustomerDTO };
