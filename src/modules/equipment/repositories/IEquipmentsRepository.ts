import { Equipment } from "../infra/typeorm/entities/Equipment";

interface IEquipmentsRepository {
  create(name: string, customer_id: string): Promise<Equipment>;
  delete(id: string): Promise<void>;
}

export { IEquipmentsRepository };
