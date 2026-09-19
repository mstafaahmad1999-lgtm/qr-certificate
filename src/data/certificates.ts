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
  transportDetails: string;
  countryOfOrigin: string;
  placeAndDateOfIssue: string;
  goods: GoodsItem[];
}

export const certificates: Certificate[] = [
  {
    guid: "1cdaac6e-5c03-11f0-90bc-48df373f5970",
    certificateNumber: "E1239335",
    exporterName:
      "WHITRON TRADING DAYANIKLI TÜKETİM MALLARI LİMİTED ŞİRKETİ",
    exporterAddress:
      "AKZİYARET MAH. ARAFAT SK. NO: 17GE KIZILTEPE / MARDİN",
    consigneeName: "KHOSHNAW COMPANY",
    consigneeAddress: "ERBİL",
    consigneeCountry: "Iraq",
    transportDetails: "TRUCK",
    countryOfOrigin: "Türkiye",
    placeAndDateOfIssue:
      "KIZILTEPE CHAMBER OF COMMERCE AND INDUSTRY / 17.Sep.2026",
    goods: [
      {
        description:
          "MAKARNA(%100 EKMEKLİK ADI BUĞDAYDAN) (BÜYÜK DİRSEK)",
        quantity: "54,500.00",
        unit: "KG",
      },
    ],
  },
  {
    guid: "demo-certificate-001",
    certificateNumber: "E1240001",
    exporterName: "DEMO EXPORT COMPANY LTD.",
    exporterAddress: "DEMO ADDRESS, İSTANBUL",
    consigneeName: "DEMO IMPORT CO.",
    consigneeAddress: "BAGHDAD",
    consigneeCountry: "Iraq",
    transportDetails: "TRUCK",
    countryOfOrigin: "Türkiye",
    placeAndDateOfIssue:
      "İSTANBUL CHAMBER OF COMMERCE / 01.Jan.2026",
    goods: [
      {
        description: "DEMO GOODS DESCRIPTION",
        quantity: "10,000.00",
        unit: "KG",
      },
    ],
  },
];

export function findCertificateByGuid(
  guid: string
): Certificate | undefined {
  return certificates.find(
    (c) => c.guid.toLowerCase() === guid.toLowerCase()
  );
}

export function findCertificateByNumber(
  certNumber: string
): Certificate | undefined {
  return certificates.find(
    (c) =>
      c.certificateNumber.toLowerCase() === certNumber.toLowerCase()
  );
}
