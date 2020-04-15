import React, { useState } from "react";
import Clipboard from "clipboard";
import { PassForm } from "../Passes";
import { PassSelector } from "../PassSelector";

import "./PassGenerator.css";

export enum PassType {
  WORK = "work",
  MEDICAL = "medical",
  OTHER = "other",
}

export enum Field {
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
  fields: Field[];
}

export const passes: Record<PassType, Pass> = {
  [PassType.WORK]: {
    id: 1,
    name: "Работа",
    fields: [
      Field.PASSPORT_SERIES,
      Field.PASSPORT_NUMBER,
      Field.VEHICLE_NUMBER,
      Field.TROIKA,
      Field.STRELKA,
      Field.EMPLOYER_TAX_NUMBER,
      Field.EMPLOYER_DESCRIPTION,
    ],
  },
  [PassType.MEDICAL]: {
    id: 2,
    name: "Медицина",
    fields: [
      Field.PASSPORT_SERIES,
      Field.PASSPORT_NUMBER,
      Field.DATE_OF_BIRTH,
      Field.VEHICLE_NUMBER,
      Field.TROIKA,
      Field.STRELKA,
      Field.HOSPITAL_DESCRIPTION,
    ],
  },
  [PassType.OTHER]: {
    id: 3,
    name: "Иные цели",
    fields: [
      Field.PASSPORT_SERIES,
      Field.PASSPORT_NUMBER,
      Field.VEHICLE_NUMBER,
      Field.TROIKA,
      Field.STRELKA,
      Field.PURPOSE,
      Field.DESTINATION,
    ],
  },
};

function onSubmit(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();
}

const clipboard = new Clipboard(".PassGenerator-copy", {
  target: () => document.getElementById("sms-text")!,
});

export function PassGenerator() {
  const [type, setPassType] = useState<keyof typeof passes>(PassType.WORK);
  const [fieldsState, setFieldsState] = useState<Record<string, any>>({});

  return (
    <div>
      <PassSelector
        onChange={(type) => {
          setPassType(type);
        }}
      />
      <form onSubmit={onSubmit}>
        <PassForm
          type={type}
          values={fieldsState}
          onChange={(event: any) => {
            setFieldsState({
              ...fieldsState,
              [event.target.name]: event.target.value,
            });
          }}
        />
        <br />
        <div className="PassGenerator-smsText" id="sms-text">
          {formatSMS(fieldsState, type, passes[type].fields)}
        </div>
        <button className="PassGenerator-copy">Скопировать</button>
        <div className="PassGenerator-smsNumber">
          <label>Москва: СМС на 7377</label>
        </div>
      </form>
    </div>
  );
}

function formatSMS(
  state: Record<string, any>,
  type: PassType,
  fields: Field[]
) {
  return (
    "Пропуск*" +
    passes[type].id +
    "*1*" +
    fields.map((field) => state[field]).join("*")
  );
}

export interface PassFormProps {
  type: keyof typeof passes;
  values: Record<string, any>;
  onChange: React.ChangeEventHandler<HTMLSelectElement | HTMLInputElement>;
}
