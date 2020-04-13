import React from "react";
import { PassFormProps } from "../PassGenerator";

export function MedicalPass(props: PassFormProps) {
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
        <label>Дата рождения</label>
        <input
          type="text"
          name="vehicle"
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
        <label>Краткое наименование организации</label>
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
