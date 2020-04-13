import React from "react";
import { PassFormProps } from "../PassGenerator/PassGenerator";

export function OtherPass(props: PassFormProps) {
  return (
    <div className="Pass">
      <div>
        <label>Паспорт</label>
        <input
          type="text"
          name="passport-series"
          placeholder="Серия"
          onChange={props.onChange}
        />
        <input
          type="text"
          name="passport-number"
          placeholder="Номер"
          onChange={props.onChange}
        />
      </div>
      <div>
        <label>Номер ТС</label>
        <input
          type="text"
          name="vehicle"
          placeholder="Номер"
          onChange={props.onChange}
        />
      </div>
      <div>
        <label>Номер Тройки</label>
        <input
          type="text"
          name="troika"
          placeholder="Номер Тройки"
          onChange={props.onChange}
        />
      </div>
      <div>
        <label>Номер Стрелки</label>
        <input
          type="text"
          name="strelka"
          placeholder="Номер Стрелки"
          onChange={props.onChange}
        />
      </div>
      <div>
        <label>Цель выхода</label>
        <input
          type="text"
          name="aim"
          placeholder="Цель выхода"
          maxLength={20}
          onChange={props.onChange}
        />
      </div>
      <div>
        <label>Пункт назначения</label>
        <input
          type="text"
          name="aim-address"
          placeholder="Пункт назначения"
          onChange={props.onChange}
        />
      </div>
    </div>
  );
}
