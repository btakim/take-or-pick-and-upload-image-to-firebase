// constants/applicationConstants.ts

export type OtobotoxId = 
  | 'B01SRMKB' | 'B01SRMKL' | 'B01PKT01' | 'B01PKT1L' | 'B03ONCSI' 
  | 'B03PKT16' | 'B01KLTKR' | 'B01SHRPK' | 'B02SRMKB' | 'B02SRMKL'
  | 'B02PKT03' | 'B02PKT04' | 'B02KLTKR' | 'B02PKT14' | 'B02HJYNP'
  | 'B02BYKRM' | 'B02BYKRL' | 'B03MTRKR' | 'B03RCNTM' | 'B02KLTKT'
  | 'B02PARCA' | 'B02KURTM' | 'B04CFFLL' | 'B04CFOCM' | 'B04CFO2C'
  | 'B04CFA3C' | 'B04GCFFL' | 'B04KFYRM' | 'B04KFTAM' | 'B04SKFTM'
  | 'B04KFTMC' | 'B05GNLTM';

export type OtobotoxType = 'Yeni_Araç_Uygulamaları' | 'Kullanılmış_Araç_Uygulamaları' | 'Film_Uygulamaları' | '2.el';

interface ApplicationDetail {
  type: OtobotoxType;
  name: string;
  content: string;
  price: number;
}

export const applicationData: Record<OtobotoxId, ApplicationDetail> = {
  B01SRMKB: { type: 'Yeni_Araç_Uygulamaları', name: 'Seramik Kaplama', content: 'Seramik Kaplama - \'\'0\'\' Km Araçlar İçin', price: 11000 },
  B01SRMKL: { type: 'Yeni_Araç_Uygulamaları', name: 'Seramik Kaplama XL', content: 'Seramik Kaplama - \'\'0\'\' Km Zafira, Vivaro vb.', price: 17500 },
  B01PKT01: { type: 'Yeni_Araç_Uygulamaları', name: 'Paket 1', content: 'Paket 1 - Boya Koruma  + Antibakteriyel  Koruma', price: 4500 },
  B01PKT1L: { type: 'Yeni_Araç_Uygulamaları', name: 'Paket 1 XL', content: 'Paket 1 XL - Boya Koruma  + Antibakteriyel  Koruma', price: 6750 },
  B03ONCSI: { type: 'Yeni_Araç_Uygulamaları', name: 'Ön Cam Su İtici', content: 'Ön Cam Su İtici', price: 750 },
  B03PKT16: { type: 'Yeni_Araç_Uygulamaları', name: 'Paket 16', content: 'Paket 16 - Motor Koruma + Antibakteriyel  Koruma', price: 1750 },
  B01KLTKR: { type: 'Yeni_Araç_Uygulamaları', name: 'Nano Koltuk Koruma', content: 'Nano Koltuk Koruma (Kumaş&Deri)', price: 2500 },
  B01SHRPK: { type: 'Yeni_Araç_Uygulamaları', name: 'Showroom Paketi', content: 'Showroom Paketi - Reçine Temizliği & Showroom Cilası', price: 750 },
  B02SRMKB: { type: 'Kullanılmış_Araç_Uygulamaları', name: 'Seramik Kaplama 2', content: 'Seramik Kaplama- Kullanılmış Araçlar İçin', price: 11500 },
  B02SRMKL: { type: 'Kullanılmış_Araç_Uygulamaları', name: 'Seramik Kaplama 2 XL', content: 'Seramik Kaplama- Kullanılmış Araçlar İçin (Zafira, Vivaro vb.)', price: 18000 },
  B02PKT03: { type: 'Kullanılmış_Araç_Uygulamaları', name: 'Paket 3', content: 'Paket 3 - Koltuk Temizlik, Vinil Temizlik, Kapı İç Döşeme Temizliği, Taban Temizlik, Tavan Temizlik, Motor Temizlik, Motor Koruma', price: 3400 },
  B02PKT04: { type: 'Kullanılmış_Araç_Uygulamaları', name: 'Paket 4', content: 'Paket 4 - Boya Koruma , Motor Temizlik , Motor Koruma , Vinil Temizlik, Vinil Koruma , Jant Temizlik , Koltuk Temizlik , Taban Temizlik , Tavan Temizlik, Kapı İç Döşeme Temizliği', price: 5600 },
  B02KLTKR: { type: 'Kullanılmış_Araç_Uygulamaları', name: 'Nano Koltuk Koruma', content: 'Nano Koltuk Koruma (Paket-3,Paket-4 veya Koltuk temizliği işlemi sonrası uygulanabilir)', price: 2500 },
  B02PKT14: { type: 'Kullanılmış_Araç_Uygulamaları', name: 'Paket 14', content: 'Paket 14 - Motor Koruma + Klima Temizlik + Koku Giderici', price: 949 },
  B02HJYNP: { type: 'Kullanılmış_Araç_Uygulamaları', name: 'Hijyen Paketi', content: 'Hijyen Paketi : Nano Clear - Antibakteriyel Koruma', price: 949 },
  B02BYKRM: { type: 'Kullanılmış_Araç_Uygulamaları', name: 'Boya Koruma', content: 'Boya Koruma', price: 3500 },
  B02BYKRL: { type: 'Kullanılmış_Araç_Uygulamaları', name: 'Boya Koruma XL', content: 'Boya Koruma XL', price: 5250 },
  B03MTRKR: { type: 'Kullanılmış_Araç_Uygulamaları', name: 'Motor Koruma', content: 'Motor Koruma', price: 800 },
  B03RCNTM: { type: 'Kullanılmış_Araç_Uygulamaları', name: 'Reçine Temizliği', content: 'Reçine Temizliği', price: 750 },
  B02KLTKT: { type: 'Kullanılmış_Araç_Uygulamaları', name: 'Koltuk Temizlik', content: 'Koltuk Temizlik', price: 1500 },
  B02PARCA: { type: 'Kullanılmış_Araç_Uygulamaları', name: 'Parça Başı', content: 'Parça Başı işlem ( Çizik Giderme/pasta cila )', price: 750 },
  B02KURTM: { type: 'Kullanılmış_Araç_Uygulamaları', name: 'Araç İçi Kurutma', content: 'Araç İçi Kurutma (Paket-3, Paket-4 harici işlemler)', price: 1000 },
  B04CFFLL: { type: 'Film_Uygulamaları', name: 'Güneş Cam Filmi', content: 'Güneş Cam Filmi', price: 6000 },
  B04CFOCM: { type: 'Film_Uygulamaları', name: 'Ön Cam - Güneş Cam Filmi', content: 'Ön Cam - Güneş Cam Filmi', price: 3250 },
  B04CFO2C: { type: 'Film_Uygulamaları', name: 'Ön 2 Kapı - Güneş Cam Filmi', content: 'Ön 2 Kapı - Güneş Cam Filmi', price: 3250 },
  B04CFA3C: { type: 'Film_Uygulamaları', name: 'Arka 3 Cam - Güneş Cam Filmi', content: 'Arka 3 Cam - Güneş Cam Filmi', price: 4750 },
  B04GCFFL: { type: 'Film_Uygulamaları', name: 'Güvenlikli Güneş Cam Filmi', content: 'Güvenlikli Güneş Cam Filmi', price: 9000 },
  B04KFYRM: { type: 'Film_Uygulamaları', name: 'Yarım Kaput Filmi', content: 'Yarım Kaput Filmi', price: 5000 },
  B04KFTAM: { type: 'Film_Uygulamaları', name: 'Tam Boy Kaput Filmi', content: 'Tam Boy Kaput Filmi', price: 8000 },
  B04SKFTM: { type: 'Film_Uygulamaları', name: 'Tam Boy Kaput Filmi SİYAH', content: 'Tam Boy Kaput Filmi SİYAH', price: 12000 },
  B04KFTMC: { type: 'Film_Uygulamaları', name: 'Tam Boy Kaput Filmi + Çamurluk Uçları ile birlikte', content: 'Tam Boy Kaput Filmi + Çamurluk Uçları ile birlikte', price: 10000 },
  B05GNLTM: { type: '2.el', name: '2.El Genel Temizlik', content: '2.El Genel Temizlik', price: 0 }
};
