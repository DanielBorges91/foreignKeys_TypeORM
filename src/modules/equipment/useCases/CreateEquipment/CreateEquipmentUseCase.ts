import { inject, injectable } from "tsyringe";

import { Equipment } from "@modules/equipment/infra/typeorm/entities/Equipment";
import { IEquipmentsRepository } from "@modules/equipment/repositories/IEquipmentsRepository";

@injectable()
class CreateEquipmentUseCase {
  constructor(
    @inject("EquipmentsRepository")
    private equipmentsRepository: IEquipmentsRepository
  ) {}

  async execute(name: string, customer_id: string): Promise<Equipment> {
    const equipment = await this.equipmentsRepository.create(name, customer_id);

    return equipment;
  }
}

export { CreateEquipmentUseCase };
