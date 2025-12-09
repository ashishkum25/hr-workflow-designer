import type { FC } from "react";

interface Props {
  data: any;
  onChange: (data: any) => void;
}

const StartNodeForm: FC<Props> = ({ data, onChange }) => {
  const handleChange = (field: string, value: any) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <div>
      <label>
        Start title
        <input
          value={data.label ?? ""}
          onChange={(e) => handleChange("label", e.target.value)}
        />
      </label>
      <label>
        Metadata (JSON)
        <textarea
          placeholder='e.g. {"role": "new_hire"}'
          value={JSON.stringify(data.metadata ?? {}, null, 2)}
          onChange={(e) => {
            try {
              const parsed = JSON.parse(e.target.value || "{}");
              onChange({ ...data, metadata: parsed });
            } catch {
              // ignore parse errors while typing
            }
          }}
        />
      </label>
    </div>
  );
};

export default StartNodeForm;

