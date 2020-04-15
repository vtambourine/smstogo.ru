import React, { useState } from "react";
import Clipboard from "clipboard";
import { PassType, PassField, passes } from "../Pass";
import { PassForm } from "../PassForm";
import { PassSelector } from "../PassSelector";

import "./PassGenerator.css";

const clipboard = new Clipboard(".PassGenerator-copy", {
  target: () => document.getElementById("sms-text")!,
});

export function PassGenerator() {
  const [type, setPassType] = useState<PassType>(PassType.WORK);
  const [fieldsState, setFieldsState] = useState<Record<string, any>>({});

  return (
    <div className="PassGenerator">
      <PassSelector
        onChange={(type) => {
          setPassType(type);
        }}
      />
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
      <div className="PassGenerator-smsText" id="sms-text">
        {formatSMS(fieldsState, type, passes[type].fields)}
      </div>
      <button className="PassGenerator-copy">Скопировать</button>
      <div className="PassGenerator-smsNumber">
        <label>Москва: СМС на 7377</label>
      </div>
    </div>
  );
}

function formatSMS(
  state: Record<string, any>,
  type: PassType,
  fields: PassField[]
) {
  return (
    "Пропуск*" +
    passes[type].id +
    "*1*" +
    fields.map((field) => state[field]).join("*")
  );
}
