// Function to capitalize names
export const capitalizeName = (name: string): string => {
    return name
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  };
  
  // Regex for Turkish phone number validation
  export const turkishPhoneRegex = /^(?:\+90|0090|0)?(5\d{2})\d{7}$/;
  
  // Function to format Turkish phone numbers
  export const formatTurkishPhoneNumber = (phone: string): string => {
    const match = phone.match(turkishPhoneRegex);
    if (match) {
      return `+90 ${match[1]} ${phone.replace(turkishPhoneRegex, '$1')}`;
    }
    throw new Error('Invalid Turkish phone number');
  };
  
  // Regex for Turkish date format (day.month.year or day/month/year or day-month-year)
  export const turkishDateRegex = /^(?<day>\d{1,2})[./-](?<month>\d{1,2})[./-](?<year>\d{4})$/;
  
  // Function to format Turkish dates to day.month.year format
  export const formatTurkishDate = (date: string): string => {
    const match = date.match(turkishDateRegex);
    if (match) {
      const { day, month, year } = match.groups!;
      return `${day.padStart(2, '0')}.${month.padStart(2, '0')}.${year}`;
    }
    throw new Error('Invalid date format');
  };
  
  export const formatTurkishDateTime = (dateTime: string): string => {
    // Define regex to parse date and time
    const regex = /(\d{1,2})[\/.\-](\d{1,2})[\/.\-](\d{2,4})\s*(\d{1,2}):(\d{2})/;
    const match = dateTime.match(regex);
  
    if (!match) {
      throw new Error('Invalid date/time format');
    }
  
    const [, day, month, year, hours, minutes] = match;
  
    // Convert year to four digits if it's two digits
    const fullYear = year.length === 2 ? `20${year}` : year;
  
    // Format the date and time
    return `${day.padStart(2, '0')}.${month.padStart(2, '0')}.${fullYear} ${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}`;
  };