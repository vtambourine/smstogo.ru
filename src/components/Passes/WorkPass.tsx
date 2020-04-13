import React from "react";
import { PassFormProps } from "../PassGenerator";

export function WorkPass(props: PassFormProps) {
  return (
    <div className="Pass">
      <div className="Pass-field">
        <label className="Pass-label">Паспорт</label>
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
      <div className="Pass-field">
        <label className="Pass-label">Номер ТС</label>
        <input
          type="text"
          name="vehicle"
          placeholder="Номер"
          onChange={props.onChange}
        />
      </div>
      <div className="Pass-field">
        <label className="Pass-label">Номер Тройки</label>
        <input
          type="text"
          name="troika"
          placeholder="Номер Тройки"
          onChange={props.onChange}
        />
      </div>
      <div className="Pass-field">
        <label className="Pass-label">Номер Стрелки</label>
        <input
          type="text"
          name="strelka"
          placeholder="Номер Стрелки"
          onChange={props.onChange}
        />
      </div>
      <div className="Pass-field">
        <label className="Pass-label">ИНН организации</label>
        <input
          type="text"
          name="employee-tax-number"
          placeholder="ИНН"
          maxLength={20}
          onChange={props.onChange}
        />
      </div>
      <div className="Pass-field">
        <label className="Pass-label">Краткое наименование</label>
        <input
          type="text"
          name="employee-description"
          placeholder="Название"
          onChange={props.onChange}
        />
      </div>
    </div>
  );
}
