export enum PassType {
  WORK = "work",
  MEDICAL = "medical",
  OTHER = "other",
}

export enum PassField {
  PASSPORT_SERIES = "passport-series",
  PASSPORT_NUMBER = "passport-number",
  DATE_OF_BIRTH = "date-of-birth",
  VEHICLE_NUMBER = "vehicle-number",
  TROIKA = "troika",
  STRELKA = "strelka",
  EMPLOYER_TAX_NUMBER = "employer-tax-number",
  EMPLOYER_DESCRIPTION = "employer-description",
  PURPOSE = "purpose",
  HOSPITAL_DESCRIPTION = "hospital-description",
  DESTINATION = "destination",
  DESCRIPTION = "description",
}

interface Pass {
  id: number;
  name: string;
  fields: PassField[];
}

export const passes: Record<PassType, Pass> = {
  [PassType.WORK]: {
    id: 1,
    name: "Работа",
    fields: [
      PassField.PASSPORT_SERIES,
      PassField.PASSPORT_NUMBER,
      PassField.VEHICLE_NUMBER,
      PassField.TROIKA,
      PassField.STRELKA,
      PassField.EMPLOYER_TAX_NUMBER,
      PassField.EMPLOYER_DESCRIPTION,
    ],
  },
  [PassType.MEDICAL]: {
    id: 2,
    name: "Медицина",
    fields: [
      PassField.PASSPORT_SERIES,
      PassField.PASSPORT_NUMBER,
      PassField.DATE_OF_BIRTH,
      PassField.VEHICLE_NUMBER,
      PassField.TROIKA,
      PassField.STRELKA,
      PassField.HOSPITAL_DESCRIPTION,
    ],
  },
  [PassType.OTHER]: {
    id: 3,
    name: "Иные цели",
    fields: [
      PassField.PASSPORT_SERIES,
      PassField.PASSPORT_NUMBER,
      PassField.VEHICLE_NUMBER,
      PassField.TROIKA,
      PassField.STRELKA,
      PassField.PURPOSE,
      PassField.DESTINATION,
    ],
  },
};
