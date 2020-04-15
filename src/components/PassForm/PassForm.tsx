import React from "react";
import { PassType, PassField } from "../Pass";

import "./PassForm.css";

export interface PassFormProps {
  type: PassType;
  values: Record<string, any>;
  onChange: React.ChangeEventHandler<HTMLSelectElement | HTMLInputElement>;
}

export function PassForm(props: PassFormProps) {
  return (
    <div className="PassForm">
      <div className="PassForm-field PassForm-field--passport">
        <label className="PassForm-label">Паспорт РФ</label>
        <div className="PassForm-field PassForm-fieldBlock">
          <input
            className="PassForm-input PassForm-input--inline"
            type="text"
            name={PassField.PASSPORT_SERIES}
            placeholder="Серия"
            size={4}
            onChange={props.onChange}
          />
          <input
            className="PassForm-input PassForm-input--inline"
            type="text"
            name={PassField.PASSPORT_NUMBER}
            placeholder="Номер"
            size={6}
            onChange={props.onChange}
          />
        </div>
      </div>
      {props.type === PassType.MEDICAL ? (
        <div className="PassForm-field">
          <label className="PassForm-label">Дата рождения</label>
          <input
            className="PassForm-input"
            type="text"
            name={PassField.DATE_OF_BIRTH}
            placeholder="ДД.ММ.ГГГГ"
            onChange={props.onChange}
          />
        </div>
      ) : null}
      <div className="PassForm-field">
        <label className="PassForm-label">Номер транспортного средства</label>
        <input
          className="PassForm-input"
          type="text"
          name={PassField.VEHICLE_NUMBER}
          placeholder="Р043МП177 или 0505АА77"
          onChange={props.onChange}
        />
      </div>
      <div className="PassForm-field">
        <label className="PassForm-label">Номер Тройки</label>
        <input
          className="PassForm-input"
          type="text"
          name={PassField.TROIKA}
          placeholder="12345678901"
          pattern="\d*"
          onChange={props.onChange}
        />
      </div>
      <div className="PassForm-field">
        <label className="PassForm-label">Номер Стрелки</label>
        <input
          className="PassForm-input"
          type="text"
          name={PassField.STRELKA}
          placeholder="12345678901"
          onChange={props.onChange}
        />
      </div>
      {props.type === PassType.WORK ? (
        <div className="PassForm-field">
          <label className="PassForm-label">ИНН организации</label>
          <input
            className="PassForm-input"
            type="text"
            name={PassField.EMPLOYER_TAX_NUMBER}
            placeholder="ИНН"
            maxLength={20}
            onChange={props.onChange}
          />
        </div>
      ) : null}
      {props.type === PassType.WORK ? (
        <div className="PassForm-field">
          <label className="PassForm-label">
            Краткое наименование организации
          </label>
          <input
            className="PassForm-input"
            type="text"
            name={PassField.EMPLOYER_DESCRIPTION}
            placeholder="ООО Ромашка"
            onChange={props.onChange}
          />
        </div>
      ) : null}
      {props.type === PassType.MEDICAL ? (
        <div className="PassForm-field">
          <label className="PassForm-label">
            Краткое наименование медучреждения
          </label>
          <input
            className="PassForm-input"
            type="text"
            name={PassField.HOSPITAL_DESCRIPTION}
            placeholder="ГКБ Боткина"
            onChange={props.onChange}
          />
        </div>
      ) : null}
      {props.type === PassType.OTHER ? (
        <div className="PassForm-field">
          <label className="PassForm-label">Цель выхода</label>
          <input
            className="PassForm-input"
            type="text"
            name={PassField.PURPOSE}
            placeholder="на дачу"
            maxLength={20}
            onChange={props.onChange}
          />
        </div>
      ) : null}
      {props.type === PassType.OTHER ? (
        <div className="PassForm-field">
          <label className="PassForm-label">Адрес назначения</label>
          <input
            className="PassForm-input"
            type="text"
            name={PassField.DESTINATION}
            placeholder="Опалиха Пришвина 11"
            onChange={props.onChange}
          />
        </div>
      ) : null}
    </div>
  );
}
