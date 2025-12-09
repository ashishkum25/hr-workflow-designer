import React, { FC } from "react";

interface Props {
  data: any;
  onChange: (data: any) => void;
}

const EndNodeForm: FC<Props> = ({ data, onChange }) => {
  const handleChange = (field: string, value: any) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <div className="node-form">
      <label className="field">
        <span>End message</span>
        <input
          value={data.endMessage || ""}
          onChange={(e) => handleChange("endMessage", e.target.value)}
          placeholder="Onboarding complete"
        />
      </label>

      <label className="field checkbox-field">
        <input
          type="checkbox"
          checked={Boolean(data.summaryFlag)}
          onChange={(e) => handleChange("summaryFlag", e.target.checked)}
        />
        <span>Generate summary at the end</span>
      </label>
    </div>
  );
};

export default EndNodeForm;


