import React from "react";
import { PassFormProps, Field, PassType } from "../PassGenerator";

export function PassForm(props: PassFormProps) {
  return (
    <div className="Pass">
      <div className="Pass-field">
        <label className="Pass-label">Паспорт РФ</label>
        <input
          type="text"
          name={Field.PASSPORT_SERIES}
          placeholder="Серия"
          onChange={props.onChange}
        />
        <input
          type="text"
          name={Field.PASSPORT_NUMBER}
          placeholder="Номер"
          onChange={props.onChange}
        />
      </div>
      {props.type === PassType.MEDICAL ? (
        <div className="Pass-field">
          <label className="Pass-label">Дата рождения</label>
          <input
            type="text"
            name={Field.DATE_OF_BIRTH}
            placeholder="ДД.ММ.ГГГГ"
            onChange={props.onChange}
          />
        </div>
      ) : null}
      <div className="Pass-field">
        <label className="Pass-label">Номер транспортного средства</label>
        <input
          type="text"
          name={Field.VEHICLE_NUMBER}
          placeholder="Р043МП177 или 0505АА77"
          onChange={props.onChange}
        />
      </div>
      <div className="Pass-field">
        <label className="Pass-label">Номер Тройки</label>
        <input
          type="text"
          name={Field.TROIKA}
          placeholder="12345678901"
          pattern="\d*"
          onChange={props.onChange}
        />
      </div>
      <div className="Pass-field">
        <label className="Pass-label">Номер Стрелки</label>
        <input
          type="text"
          name={Field.STRELKA}
          placeholder="12345678901"
          onChange={props.onChange}
        />
      </div>
      {props.type === PassType.WORK ? (
        <div className="Pass-field">
          <label className="Pass-label">ИНН организации</label>
          <input
            type="text"
            name={Field.EMPLOYER_TAX_NUMBER}
            placeholder="ИНН"
            maxLength={20}
            onChange={props.onChange}
          />
        </div>
      ) : null}
      {props.type === PassType.WORK ? (
        <div className="Pass-field">
          <label className="Pass-label">Краткое наименование организации</label>
          <input
            type="text"
            name={Field.EMPLOYER_DESCRIPTION}
            placeholder="ООО Ромашка"
            onChange={props.onChange}
          />
        </div>
      ) : null}
      {props.type === PassType.MEDICAL ? (
        <div className="Pass-field">
          <label className="Pass-label">
            Краткое наименование медучреждения
          </label>
          <input
            type="text"
            name={Field.HOSPITAL_DESCRIPTION}
            placeholder="ГКБ Боткина"
            onChange={props.onChange}
          />
        </div>
      ) : null}
      {props.type === PassType.OTHER ? (
        <div className="Pass-field">
          <label className="Pass-label">Цель выхода</label>
          <input
            type="text"
            name={Field.PURPOSE}
            placeholder="на дачу"
            maxLength={20}
            onChange={props.onChange}
          />
        </div>
      ) : null}
      {props.type === PassType.OTHER ? (
        <div className="Pass-field">
          <label className="Pass-label">Адрес назначения</label>
          <input
            type="text"
            name={Field.DESTINATION}
            placeholder="Опалиха Пришвина 11"
            onChange={props.onChange}
          />
        </div>
      ) : null}
    </div>
  );
}
