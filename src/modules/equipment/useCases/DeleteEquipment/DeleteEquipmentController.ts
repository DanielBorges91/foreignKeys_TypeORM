import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteEquipmentUseCase } from "./DeleteEquipmentUseCase";

class DeleteEquipmentController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.body;

    const deleteEquipmentUseCase = container.resolve(DeleteEquipmentUseCase);

    await deleteEquipmentUseCase.execute(id);

    return response.send();
  }
}

export { DeleteEquipmentController };
