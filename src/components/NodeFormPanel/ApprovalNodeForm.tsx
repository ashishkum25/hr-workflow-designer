import React, { FC } from "react";

interface Props {
  data: any;
  onChange: (data: any) => void;
}

const ApprovalNodeForm: FC<Props> = ({ data, onChange }) => {
  const handleChange = (field: string, value: any) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <div className="node-form">
      <label className="field">
        <span>Title</span>
        <input
          value={data.label || ""}
          onChange={(e) => handleChange("label", e.target.value)}
          placeholder="Manager approval"
        />
      </label>

      <label className="field">
        <span>Approver role</span>
        <input
          value={data.approverRole || ""}
          onChange={(e) => handleChange("approverRole", e.target.value)}
          placeholder="Manager / HRBP / Director"
        />
      </label>

      <label className="field">
        <span>Auto-approve threshold</span>
        <input
          type="number"
          value={
            typeof data.autoApproveThreshold === "number"
              ? data.autoApproveThreshold
              : ""
          }
          onChange={(e) =>
            handleChange(
              "autoApproveThreshold",
              e.target.value === "" ? undefined : Number(e.target.value)
            )
          }
          placeholder="Enter a number"
        />
      </label>
    </div>
  );
};

export default ApprovalNodeForm;

