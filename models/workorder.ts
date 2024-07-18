// models/ApplicationWorkOrder.ts

import { Customer } from './customer'; // Assuming you have Customer class defined
import { Order } from './order'; // Assuming you have OrderInfo class defined
import { Vehicle } from './vehicle'; // Assuming you have VehicleInfo class defined
import { Application } from './application'; // Assuming you have ApplicationInfo class defined

export class ApplicationWorkOrder {
  customer: Customer;
  order: Order;
  vehicle: Vehicle;
  applications: Application[];

  constructor(
    customer: Customer,
    order: Order,
    vehicle: Vehicle,
    applications: Application[]
  ) {
    this.customer = customer;
    this.order = order;
    this.vehicle = vehicle;
    this.applications = applications;
  }

  addApplication(application: Application): void {
    this.applications.push(application);
  }

  removeApplication(otobotoxId: string): void {
    this.applications = this.applications.filter(
      app => app.otobotoxId !== otobotoxId
    );
  }

  getApplications(): Application[] {
    return this.applications;
  }

  // Example method to get a summary
  getSummary(): string {
    return `
      Customer: ${this.customer.name}
      Order: ${this.order.name} (${this.order.date})
      Vehicle: ${this.vehicle.brand} ${this.vehicle.model} (${this.vehicle.uuid})
      Applications:
      ${this.applications.map(app => `${app.name} - ${app.price} TL`).join('\n')}
    `;
  }
}
