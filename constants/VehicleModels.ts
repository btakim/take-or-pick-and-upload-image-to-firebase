export type VehicleBrand = keyof typeof vehicles;
export type VehicleModel = typeof vehicles[VehicleBrand][number];

export const vehicles = {
    "OPEL": ["CORSA", "ASTRA HB", "ASTRA SEDAN", "CROSSLAND X", "GRANDLAND X", "INSIGNIA", "MOKKA X", "COMBO", "ZAFIRA", "FRONTERA", "MERIVA", "ADAM", "CASCADA", "Other"],
    "HYUNDAI": ["ACCENT BLUE", "ELANTRA", "I10", "I20", "I30", "IONIQ", "KONA", "TUCSON", "BAYON", "SANTA FE", "GENESIS", "Other"],
    "CHEVROLET": ["CAPTIVA", "CRUZE", "AVEO", "TRAX", "SPARK", "Other"],
    "PEUGEOT": ["208", "301", "308", "508", "2008", "3008", "5008", "Partner", "Expert", "Rifter", "Boxer", "Other"],
    "NISSAN": ["JUKE", "MICRA", "PULSAR", "QASHQAI", "X-TRAIL", "Other"],
    "ALFA_ROMEO": ["4C", "Giulia", "Giulietta", "Stelvio", "Other"],
    "ASTON_MARTIN": ["DB11", "DB9", "Rapide", "Rapide S", "Vanquish", "Vantage", "Other"],
    "AUDI": ["A1", "A3", "A4", "A5", "A6", "A7", "A8", "Q2", "Q3", "Q5", "Q7", "Q8", "R8", "RS3", "RS6", "RS6 AVANT", "RS7 SPORTBACK", "S3", "S8", "TT", "TTC", "Other"],
    "BENTLEY": ["BENTLEY", "CONTINENTAL", "FLYING SPUR", "FLYING SPUR V8", "GT", "MULSANNE", "MULSANNE SPEED", "Other"],
    "BMW": ["1 Serisi", "2 Serisi", "3 Serisi", "4 Serisi", "5 Serisi", "6 Serisi", "7 Serisi", "i", "X1", "X2", "X3", "X4", "X5", "X6", "Z4", "M Modeller", "Other"],
    "CITROEN": ["C3", "C3 AIRCROSS", "C4", "C4 CACTUS", "C4 PICASSO", "C-ELYSEE", "Other"],
    "DACIA": ["DUSTER", "LODGY", "Logan MCV", "SANDERO", "Other"],
    "DS": ["DS 3", "DS 4", "DS 5", "DS 7 Crossback", "Other"],
    "FERRARI": ["488", "488GTB", "488SPIDER", "812 Superfast", "California T", "F12", "GTC4 Lusso", "Portofino", "Other"],
    "FIAT": ["124 SPIDER", "500", "500C", "500L", "500X", "DOBLO", "Egea", "FIAT 500", "FIORINO", "FREEMONT", "LINEA", "PANDA", "Punto", "Other"],
    "FORD": ["B-Max", "C-Max", "CONNECT", "COURIER", "EcoSport", "EDGE", "FIESTA", "FOCUS", "FOCUS CMAX", "GALAXY", "Kuga", "MONDEO", "MUSTANG", "S-Max", "Tourneo", "Other"],
    "HONDA": ["CIVIC", "CR-V", "HR-V", "JAZZ", "NSX", "Other"],
    "INFINITI": ["Q30", "Q50", "Q60", "QX70", "Other"],
    "JAGUAR": ["E-PACE AWD", "F-PACE AWD", "F-TYPE", "I-PACE", "Jaguar XE", "XE", "XF", "XJ", "Other"],
    "JEEP": ["COMPASS", "GRAND CHEROKEE", "RENEGADE", "WRANGLER", "Other"],
    "KIA": ["cee'd", "CERATO", "NIRO", "PICANTO", "RIO", "SORENTO", "SOUL", "SPORTAGE", "STONIC", "STINGER", "Other"],
    "LAMBORGHINI": ["AVENTADOR", "Aventador S Coupe", "Huracan", "URUS", "Other"],
    "LAND_ROVER": ["DISCOVERY", "RANGE ROVER", "Other"],
    "LEXUS": ["CT", "ES", "GS", "IS", "LS", "NX", "RC", "RX", "Other"],
    "MASERATI": ["Ghibli", "Levante", "Quattroporte", "Other"],
    "MAZDA": ["Mazda CX-3", "Mazda CX-5", "Mazda MX-5", "Mazda3", "Mazda6", "Other"],
    "MERCEDES_BENZ": ["A", "B", "C", "Cabrio", "CLA", "CLS", "E", "E Cabriolet", "E Coupe", "E Coupé", "E Estate", "G", "GL Serisi", "GLA", "GLC", "GLC Coupe", "GLC Coupé", "GLE", "GLE Coupe", "GLE Coupé", "GLS", "GT", "GT C", "M SERISI", "Mercedes-AMG GT", "S", "S Cabriolet", "S Coupé", "SL", "SLC", "SLK SERISI", "Other"],
    "MINI": ["Clubman", "COOPER", "Countryman", "Hatch 3 Kapi", "Hatch 5 Kapi", "JCW Countryman", "John Cooper Works", "Other"],
    "MITSUBISHI": ["ASX", "ATTRAGE", "Eclipse Cross", "LANCER", "OUTLANDER", "PAJERO", "SPACE STAR", "Other"],
    "PORSCHE": ["718", "911", "CAYENNE", "MACAN", "PANAMERA", "Other"],
    "RENAULT": ["CAPTUR", "CLIO", "Kadjar", "Koleos", "Megane", "SYMBOL", "Talisman", "ZOE", "Other"],
    "SEAT": ["ALHAMBRA", "ARONA", "ATECA", "IBIZA", "Leon", "Toledo", "Other"],
    "SKODA": ["Fabia", "Karoq", "KODIAQ", "OCTAVIA", "Rapid", "Rapid Spaceback", "SUPERB", "YETI", "Other"],
    "SMART": ["Smart Forfour", "Smart Fortwo", "Other"],
    "SSANGYONG": ["REXTON W", "RODIUS", "TIVOLI", "XLV", "Other"],
    "SUBARU": ["BRZ", "Forester", "LEVORG", "OUTBACK", "WRX STI", "XV", "Other"],
    "SUZUKI": ["BALENO", "JIMNY", "SWIFT", "VITARA", "Other"],
    "TOYOTA": ["AURIS", "AVENSIS", "C-HR", "COROLLA", "Land Cruiser Prado", "PRIUS", "PROACE", "RAV4", "VERSO", "YARIS", "Other"],
    "VOLKSWAGEN": ["ARTEON", "BEETLE", "GOLF", "JETTA", "PASSAT", "PASSAT CC", "POLO", "SCIROCCO", "TIGUAN", "TIGUAN ALLSPACE", "TOUAREG", "Other"],
    "VOLVO": ["S60", "S90", "V40", "V60", "V90", "XC40", "XC60", "XC60 II", "XC90", "Other"],
    "Other": ["Other"]
  };

