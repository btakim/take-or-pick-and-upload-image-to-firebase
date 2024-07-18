// models/Application.ts

import { applicationData, OtobotoxId, OtobotoxType } from '../constants/Application';

export class Application {
  otobotoxId: OtobotoxId;
  type: OtobotoxType;
  name: string;
  content: string;
  price: number;

  constructor(otobotoxId: OtobotoxId) {
    const details = applicationData[otobotoxId];
    if (!details) {
      throw new Error(`Application with ID ${otobotoxId} does not exist.`);
    }

    this.otobotoxId = otobotoxId;
    this.type = details.type;
    this.name = details.name;
    this.content = details.content;
    this.price = details.price;
  }
}
