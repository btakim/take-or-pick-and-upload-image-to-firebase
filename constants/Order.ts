// constants/orderConstants.ts

  export const validNamesWithRoles: Record<string, string> = {
    '2.El': '2.El Satış Danışmanı',
    'Çağkan Fazlıoğlu': '2.El Satış Danışmanı',
    'Mehmet Temizel': '2.El Satış Şefi',
    'Halil Özaltın': 'Satş Şefi',
    'Sibel Marangoz': 'Satış Danışmanı',
    'Anıl Aluş': 'Satış Danışmanı',
    'Orçun Donan': 'Satış Danışmanı',
    'Hakan Desova': 'Satış Danışmanı',
    'Selda Gezgen': 'Satış Danışmanı',
    'Ferhat Özcan': 'Opel Konsinye',
    'KONSİNYE-O': 'Satış Müdürü',
    'Ömür Çelik': 'Servis Danışmanı',
    'Ahmet Çiçek': 'Servis Danışmanı',
    'Denizhan Özkan': 'Servis Danışmanı',
    'Erdem Albayrak': 'Servis Danışmanı',
    'Erkut Dikeç': 'Servis Danışmanı',
    'Hilal Akyüz': 'Hasar Danışmanı',
    'Doğancan Yüce': 'Servis Danışmanı',
    'Murat Caymaz': 'Servis Danışmanı',
    'Mustafa Ünlü': 'Servis Danışmanı',
    'Ramazan Alağeyik': 'Servis Danışmanı',
    'Tarık Tunç': 'Servis Müdürü',
    'Yalçın Sedefoğlu': 'Satş Şefi',
    'Hanifi Koçoğlu': 'Satış Danışmanı',
    'Hakan Kamber': 'Satış Danışmanı',
    'Egemen Fatih Çakan': 'Satış Danışmanı',
    'Sergen Karpuzcu': 'Satış Danışmanı',
    'Burcu Gül': 'Satış Danışmanı',
    'Samet Pala': 'KONSİNYE-H',
    'Emrah Ünlü': 'Satış Müdürü',
    'Barış Yeral': 'Servis Danışmanı',
    'Batuhan Kıyak': 'Servis Danışmanı',
    'Ayhan Acar': 'Servis Danışmanı',
    'Aykut Oktar': 'Servis Danışmanı',
    'Selçuk Ocak': 'Servis Müdürü',
    'Uğur Sami Aygan': 'Satış Danışmanı',
    'Ergün Yılmaz': 'Satış Danışmanı',
    'Çiğdem Aktan': 'Satış Danışmanı',
    'Ozan Küçükçitak': 'Satış Danışmanı',
    'Mikail Ak': 'Peugeot Konsinye',
    'Elif Kartal': 'Satış Müdürü',
    'Kübra Tatar': 'Servis Danışmanı',
    'Yiğit Aslan': 'Servis Danışmanı',
    'Gökhan Gökay': 'Servis Danışmanı',
    'Enes Göral': 'Servis Danışmanı',
    'Engin Aztopal': 'Servis Danışmanı',
    'Müge Bişkin': 'Filo Müdürü',
    'Kutay Kaymakçı': 'Servis Danışmanı',
    'Fuat Çaytemel': 'Servis Danışmanı',
    'Atakan Uygur': 'Servis Danışmanı',
    'Oğuz Yıldırım': 'Satış Danışmanı',
    'İbrahim Demiray': 'Satış Danışmanı',
    'Aslı Uzun': 'Satış Danışmanı',
    'Rüya Çetin': 'Satış Danışmanı',
    'Mert Demirci': 'Satış Danışmanı',
    'Menekşe Atiz': 'Servis Danışmanı',
    'Metin Tekin': 'Satış Danışmanı',
    'Hilal Özel': 'Satış Danışmanı',
    'Merve Akpınar': 'Satış Danışmanı',
    'Şule Özcan': 'Satış Danışmanı',
    'Yunuscan Yüce': 'Servis Danışmanı'
  };
  
  export const departments = [
    'Opel_Satış',
    'Opel_Servis',
    'Hyundai_Satış',
    'Hyundai_Servis',
    'Peugeot_Satış',
    'Peugeot_Servis',
    'İkinci_El'
  ];
  
  export type Department = typeof departments[number];
  export type ValidName = keyof typeof validNamesWithRoles;
  export type ValidRole = typeof validNamesWithRoles[ValidName];
  