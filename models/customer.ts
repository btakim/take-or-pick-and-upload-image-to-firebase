// utils/validation.ts
import { capitalizeName, formatTurkishDate, formatTurkishPhoneNumber } from "@/utils/validation";

  // CustomerInfo interface
  export interface CustomerInfo {
    name: string;
    phone: string;
    desired_delivery_date: string;
    form_editor_name: string;
  }
  
  // Customer class
  export class Customer implements CustomerInfo {
    name: string;
    phone: string;
    desired_delivery_date: string;
    form_editor_name: string;
  
    constructor(name: string, phone: string, desired_delivery_date: string, form_editor_name: string) {
      // Validate and format names
      if (name.split(' ').length < 2 || !/^[a-zA-ZğüşıöçĞÜŞİÖÇ\s]+$/.test(name)) {
        throw new Error('Name must contain at least 2 words and can only include English/Turkish characters');
      }
      this.name = capitalizeName(name);
  
      // Validate and format phone number
      this.phone = formatTurkishPhoneNumber(phone);
  
      // Validate and format date
      this.desired_delivery_date = formatTurkishDate(desired_delivery_date);
  
      // Validate and format form editor name
      if (form_editor_name.split(' ').length < 2 || !/^[a-zA-ZğüşıöçĞÜŞİÖÇ\s]+$/.test(form_editor_name)) {
        throw new Error('Form editor name must contain at least 2 words and can only include English/Turkish characters');
      }
      this.form_editor_name = capitalizeName(form_editor_name);
    }
  }
