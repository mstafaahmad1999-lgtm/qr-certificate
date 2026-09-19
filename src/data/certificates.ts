export interface GoodsItem {
  description: string;
  quantity: string;
  unit: string;
}

export interface Certificate {
  guid: string;
  certificateNumber: string;
  exporterName: string;
  exporterAddress: string;
  consigneeName: string;
  consigneeAddress: string;
  consigneeCountry: string;
  transport: string;
  origin: string;
  placeAndDate: string;
  goods: GoodsItem[];
}

export const certificates: Certificate[] = [
  {
    guid: "554483a9-a682-4be7-aba3-ef6a268a73a3",
    certificateNumber: "E1239335",
    exporterName: "WHITRON TRADING DAYANIKLI TÜKETİM MALLARI LİMİTED ŞİRKETİ",
    exporterAddress: "AKZİYARET MAH. ARAFAT SK. NO: 17GE KIZILTEPE / MARDİN",
    consigneeName: "KHOSHNAW COMPANY",
    consigneeAddress: "ERBİL",
    consigneeCountry: "Iraq",
    transport: "TRUCK",
    origin: "Türkiye",
    placeAndDate: "KIZILTEPE CHAMBER OF COMMERCE AND INDUSTRY / 17.Sep.2026",
    goods: [
      {
        description: "MAKARNA(%100 EKMEKLİK ADİ BUĞDAYDAN) (BÜYÜK DİRSEK)",
        quantity: "54,500.00",
        unit: "KG",
      },
    ],
  },
];

export const findCertificateByGuid = (guid: string): Certificate | undefined => {
  return certificates.find((c) => c.guid === guid);
};

export const findCertificateByNumber = (certNumber: string): Certificate | undefined => {
  return certificates.find((c) => c.certificateNumber === certNumber);
};
