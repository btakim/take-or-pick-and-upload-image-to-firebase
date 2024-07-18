// models/Vehicle.ts

import { vehicles, VehicleBrand, VehicleModel } from '../constants/VehicleModels';

const turkishPlateRegex = /^[0-9]{2} [A-Z]{1,3} [0-9]{1,4}$/;
const chassisNumberRegex = /^[A-HJ-NPR-Z0-9]{17}$/;

export interface VehicleInfo {
  brand: VehicleBrand;
  model: VehicleModel;
  uuid_type: 'car_plate' | 'chassis_number';
  uuid: string;
}

export class Vehicle implements VehicleInfo {
  brand: VehicleBrand;
  model: VehicleModel;
  uuid_type: 'car_plate' | 'chassis_number';
  uuid: string;

  constructor(brand: VehicleBrand, model: VehicleModel, uuid_type: 'car_plate' | 'chassis_number', uuid: string) {
    if (!vehicles[brand].includes(model)) {
      throw new Error(`Invalid model ${model} for brand ${brand}`);
    }

    if (uuid_type === 'car_plate' && !turkishPlateRegex.test(uuid)) {
      throw new Error(`Invalid car plate format: ${uuid}`);
    }

    if (uuid_type === 'chassis_number' && !chassisNumberRegex.test(uuid)) {
      throw new Error(`Invalid chassis number format: ${uuid}`);
    }

    this.brand = brand;
    this.model = model;
    this.uuid_type = uuid_type;
    this.uuid = uuid;
  }
}
