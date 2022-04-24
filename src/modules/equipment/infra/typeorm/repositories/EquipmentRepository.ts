import { getRepository, Repository } from "typeorm";

import { IEquipmentsRepository } from "@modules/equipment/repositories/IEquipmentsRepository";

import { Equipment } from "../entities/Equipment";

class EquipmentsRepository implements IEquipmentsRepository {
  private repository: Repository<Equipment>;

  constructor() {
    this.repository = getRepository(Equipment);
  }

  async create(name: string, customer_id: string): Promise<Equipment> {
    const equipment = this.repository.create({ name, customer_id });

    await this.repository.save(equipment);

    return equipment;
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}

export { EquipmentsRepository };
