import React, { FC, useEffect } from "react";
import { useAutomations } from "../../hooks/useAutomations";

interface Props {
  data: any;
  onChange: (data: any) => void;
}

const AutomatedNodeForm: FC<Props> = ({ data, onChange }) => {
  const { automations, loading } = useAutomations();

  const handleChange = (field: string, value: any) => {
    onChange({ ...data, [field]: value });
  };

  // When actionId changes, ensure params object has keys for that action
  useEffect(() => {
    if (!data.actionId) return;
    const def = automations.find((a) => a.id === data.actionId);
    if (!def) return;

    const currentParams = data.params || {};
    const next: Record<string, string> = {};

    def.params.forEach((p) => {
      next[p] = currentParams[p] || "";
    });

    onChange({ ...data, params: next });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data.actionId, automations.length]);

  const selected = automations.find((a) => a.id === data.actionId);

  return (
    <div className="node-form">
      <label className="field">
        <span>Title</span>
        <input
          value={data.label || ""}
          onChange={(e) => handleChange("label", e.target.value)}
          placeholder="Send welcome email"
        />
      </label>

      <label className="field">
        <span>Action</span>
        <select
          value={data.actionId || ""}
          onChange={(e) => handleChange("actionId", e.target.value)}
        >
          <option value="">Select an action</option>
          {automations.map((a) => (
            <option key={a.id} value={a.id}>
              {a.label}
            </option>
          ))}
        </select>
        {loading && <small>Loading actions…</small>}
      </label>

      {selected && (
        <div className="field">
          <span>Action parameters</span>
          <div className="kv-column">
            {selected.params.map((p) => (
              <label key={p} className="kv-input">
                <span>{p}</span>
                <input
                  value={(data.params && data.params[p]) || ""}
                  onChange={(e) =>
                    onChange({
                      ...data,
                      params: {
                        ...(data.params || {}),
                        [p]: e.target.value,
                      },
                    })
                  }
                  placeholder={`Enter ${p}`}
                />
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AutomatedNodeForm;

