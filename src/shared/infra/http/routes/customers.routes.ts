import { Router } from "express";

import { CreateCustomerController } from "@modules/customer/useCases/createCustomer/CreateCustomerController";
import { DeleteCustomerController } from "@modules/customer/useCases/deleteCustomer/DeleteCustomerController";

const customerRoutes = Router();

const createCustomerController = new CreateCustomerController();
const deleteCustomerController = new DeleteCustomerController();

customerRoutes.post("/", createCustomerController.handle);

customerRoutes.delete("/", deleteCustomerController.handle);

export { customerRoutes };
