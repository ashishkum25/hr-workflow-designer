import React, { FC, useState } from "react";

interface Props {
  data: any;
  onChange: (data: any) => void;
}

const TaskNodeForm: FC<Props> = ({ data, onChange }) => {
  const [fieldKey, setFieldKey] = useState("");
  const [fieldValue, setFieldValue] = useState("");

  const handleChange = (field: string, value: any) => {
    onChange({ ...data, [field]: value });
  };

  const addCustomField = () => {
    if (!fieldKey) return;
    onChange({
      ...data,
      customFields: {
        ...(data.customFields || {}),
        [fieldKey]: fieldValue,
      },
    });
    setFieldKey("");
    setFieldValue("");
  };

  const removeCustomField = (key: string) => {
    const copy = { ...(data.customFields || {}) };
    delete copy[key];
    onChange({ ...data, customFields: copy });
  };

  const customFields = data.customFields || {};

  return (
    <div className="node-form">
      <label className="field">
        <span>Title *</span>
        <input
          value={data.label || ""}
          onChange={(e) => handleChange("label", e.target.value)}
          placeholder="Collect documents"
        />
      </label>

      <label className="field">
        <span>Description</span>
        <textarea
          rows={3}
          value={data.description || ""}
          onChange={(e) => handleChange("description", e.target.value)}
          placeholder="Explain what needs to be done"
        />
      </label>

      <label className="field">
        <span>Assignee</span>
        <input
          value={data.assignee || ""}
          onChange={(e) => handleChange("assignee", e.target.value)}
          placeholder="HR Executive"
        />
      </label>

      <label className="field">
        <span>Due date</span>
        <input
          type="date"
          value={data.dueDate || ""}
          onChange={(e) => handleChange("dueDate", e.target.value)}
        />
      </label>

      <div className="field">
        <span>Custom fields</span>
        <div className="kv-row">
          <input
            placeholder="key"
            value={fieldKey}
            onChange={(e) => setFieldKey(e.target.value)}
          />
          <input
            placeholder="value"
            value={fieldValue}
            onChange={(e) => setFieldValue(e.target.value)}
          />
          <button type="button" onClick={addCustomField}>
            Add
          </button>
        </div>

        {Object.keys(customFields).length > 0 && (
          <ul className="kv-list">
            {Object.entries(customFields).map(([k, v]) => (
              <li key={k}>
                <span>
                  <strong>{k}</strong>: {String(v)}
                </span>
                <button type="button" onClick={() => removeCustomField(k)}>
                  ✕
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TaskNodeForm;

