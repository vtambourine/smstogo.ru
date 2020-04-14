import React, { useState } from "react";
import classNames from "classnames";
import { passes, PassType } from "../PassGenerator";

import "./PassSelector.css";

interface PassSelectorProps {
  onChange: (type: PassType) => void;
}

export function PassSelector({ onChange }: PassSelectorProps) {
  const [active, setActive] = useState(Object.keys(passes)[0]);

  return (
    <div className="PassSelector">
      <div className="PassSelector-label">Тип пропуска</div>
      <div className="PassSelector-tabs">
        {Object.entries(passes).map(([type, pass]) => {
          return (
            <div
              key={type}
              className={classNames("PassSelector-tab", {
                "PassSelector-tab--active": type === active,
              })}
              onClick={() => {
                setActive(type);
                onChange(type as PassType);
              }}
            >
              {pass.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}
