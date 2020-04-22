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
      <div className="PassGenerator-description">Cоставить SMS для получения пропуска через 7377. Власти Москвы сообщили, что отклоняют 9 из 10 заявок из-за некорректного текста SMS. 
	  <br/>Страница работает офлайн, SMS формируется прямо на телефоне, ваши личные данные не собираются.</div>
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
      <button className="PassGenerator-copy" onclick="ym(61990129,'reachGoal','SMSGenerated'); return true;">Скопировать</button>
      <div className="PassGenerator-smsNumber">
        <label>Москва: СМС на 7377</label><br/>
        <label className="PassGenerator-projectLink"><a href="https://github.com/vtambourine/smstogo" target="_blank">Проект с открытым кодом</a></label>
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
