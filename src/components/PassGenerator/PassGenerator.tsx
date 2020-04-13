import React, { useState } from "react";
import { MedicalPass, OtherPass, WorkPass } from "../Passes";
import { PassSelector } from "../PassSelector";

enum Field {
  PASSPORT_SERIES = "passport-series",
  PASSPORT_NUMBER = "passport-number",
  DATE_OF_BIRTH = "date-of-birth",
  VEHICLE_NUMBER = "vehicle-number",
  TROIKA = "troika",
  STRELKA = "strelka",
  EMPLOYER_TAX_NUMBER = "employer-tax-number",
  EMPLOYER_DESCRIPTION = "employer-description",
  DESTINATION = "destination",
}

interface Pass {
  id: number;
  name: string;
  FormPass: React.FunctionComponent<PassFormProps>;
  fields: Field[];
}

export const passes: Record<string, Pass> = {
  work: {
    id: 1,
    name: "Работа",
    FormPass: WorkPass,
    fields: [
      Field.PASSPORT_SERIES,
      Field.PASSPORT_NUMBER,
      Field.TROIKA,
      Field.STRELKA,
      Field.EMPLOYER_TAX_NUMBER,
      Field.EMPLOYER_DESCRIPTION,
    ],
  },
  medical: {
    id: 2,
    name: "Медицина",
    FormPass: MedicalPass,
    fields: [
      Field.PASSPORT_SERIES,
      Field.PASSPORT_NUMBER,
      Field.DATE_OF_BIRTH,
      Field.TROIKA,
      Field.STRELKA,
      Field.EMPLOYER_TAX_NUMBER,
      Field.EMPLOYER_DESCRIPTION,
    ],
  },
  other: {
    id: 3,
    name: "Иные",
    FormPass: OtherPass,
    fields: [Field.PASSPORT_SERIES, Field.PASSPORT_NUMBER, Field.DESTINATION],
  },
};

function onSubmit(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();
}

export function PassGenerator() {
  const [type, setPassType] = useState<keyof typeof passes>("work");
  const [fieldsState, setFieldsState] = useState<Record<string, any>>({});

  const Pass = passes[type].FormPass;

  return (
    <div>
      <PassSelector
        onChange={(type) => {
          setPassType(type);
        }}
      />
      <form onSubmit={onSubmit}>
        <Pass
          values={fieldsState}
          onChange={(event: any) => {
            setFieldsState({
              ...fieldsState,
              [event.target.name]: event.target.value,
            });
          }}
        />
        <br />
        <div>{formatSMS(fieldsState, passes[type].fields)}</div>
      </form>
    </div>
  );
}

function formatSMS(state: Record<string, any>, fields: Field[]) {
  return "Пропуск*" + fields.map((field) => state[field]).join("*");
}

export interface PassFormProps {
  values: Record<string, any>;
  onChange: React.ChangeEventHandler<HTMLSelectElement | HTMLInputElement>;
}
