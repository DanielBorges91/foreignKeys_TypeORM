import { Router } from "express";

import { CreateEquipmentController } from "@modules/equipment/useCases/CreateEquipment/CreateEquipmentController";
import { DeleteEquipmentController } from "@modules/equipment/useCases/DeleteEquipment/DeleteEquipmentController";

const equipmentRoutes = Router();

const createEquipmentController = new CreateEquipmentController();
const deleteEquipmentController = new DeleteEquipmentController();

equipmentRoutes.post("/", createEquipmentController.handle);

equipmentRoutes.delete("/", deleteEquipmentController.handle);

export { equipmentRoutes };
