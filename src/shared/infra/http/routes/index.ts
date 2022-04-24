import { Router } from "express";

import { customerRoutes } from "./customers.routes";
import { equipmentRoutes } from "./equipments.routes";

const router = Router();

router.use("/customer", customerRoutes);
router.use("/equipment", equipmentRoutes);

export { router };
