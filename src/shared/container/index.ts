import { container } from "tsyringe";

import { CustomersRepository } from "@modules/customer/infra/typeorm/repositories/CustomersRepository";
import { ICustomersRepository } from "@modules/customer/repositories/ICustomersRepository";
import { EquipmentsRepository } from "@modules/equipment/infra/typeorm/repositories/EquipmentRepository";
import { IEquipmentsRepository } from "@modules/equipment/repositories/IEquipmentsRepository";

container.registerSingleton<ICustomersRepository>(
  "CustomersRepository",
  CustomersRepository
);

container.registerSingleton<IEquipmentsRepository>(
  "EquipmentsRepository",
  EquipmentsRepository
);
