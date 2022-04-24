import { inject, injectable } from "tsyringe";

import { IEquipmentsRepository } from "@modules/equipment/repositories/IEquipmentsRepository";

@injectable()
class DeleteEquipmentUseCase {
  constructor(
    @inject("EquipmentsRepository")
    private equipmentsRepository: IEquipmentsRepository
  ) {}

  async execute(id: string): Promise<void> {
    this.equipmentsRepository.delete(id);
  }
}

export { DeleteEquipmentUseCase };
