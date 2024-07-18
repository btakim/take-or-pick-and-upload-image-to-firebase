// models/Order.ts

import { departments, Department, validNamesWithRoles, ValidName, ValidRole } from '../constants/Order';
import { capitalizeName, formatTurkishDateTime } from "@/utils/validation";

// OrderInfo interface
export interface OrderInfo {
  department: Department;
  name: ValidName;
  role: ValidRole;
  date: string;
}

// Order class
export class Order implements OrderInfo {
  department: Department;
  name: ValidName;
  role: ValidRole;
  date: string;

  constructor(department: Department, name: ValidName, date: string) {
    if (!departments.includes(department)) {
      throw new Error(`Invalid department: ${department}`);
    }
    this.department = department;

    if (!validNamesWithRoles[name]) {
      throw new Error(`Invalid name: ${name}`);
    }
    this.name = capitalizeName(name);
    this.role = validNamesWithRoles[name];

    this.date = formatTurkishDateTime(date);
  }
}
