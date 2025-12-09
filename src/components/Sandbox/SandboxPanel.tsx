import type { FC } from "react";
import type { Edge, Node } from "reactflow";
import { simulateWorkflow } from "../../api/simulate";
import type { WorkflowExecutionLog } from "../../types/workflow";

interface Props {
  nodes: Node[];
  edges: Edge[];
}

const SandboxPanel: FC<Props> = ({ nodes, edges }) => {
  const [log, setLog] = useState<WorkflowExecutionLog | null>(null);
  const [errors, setErrors] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const validateWorkflow = () => {
    const errs: string[] = [];

    const startNodes = nodes.filter((n) => n.type === "start");
    const endNodes = nodes.filter((n) => n.type === "end");

    if (startNodes.length !== 1) {
      errs.push("Workflow must have exactly one Start node.");
    }
    if (endNodes.length === 0) {
      errs.push("Workflow must have at least one End node.");
    }

    return errs;
  };

  const handleRun = async () => {
    const errs = validateWorkflow();
    setErrors(errs);
    setLog(null);

    if (errs.length) return;

    setLoading(true);
    try {
      const result = await simulateWorkflow({ nodes, edges });
      setLog(result);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="sandbox-panel">
      <div className="sandbox-header">
        <h3 style={{ fontSize: 14 }}>Workflow Sandbox</h3>
        <button onClick={handleRun} disabled={loading}>
          {loading ? "Running..." : "Simulate"}
        </button>
      </div>

      {errors.length > 0 && (
        <div className="sandbox-errors">
          {errors.map((e) => (
            <div key={e}>{e}</div>
          ))}
        </div>
      )}

      {log && (
        <div className="sandbox-log">
          {log.steps.map((s) => (
            <div key={s.stepId}>
              <strong>{s.stepId}</strong> – {s.message} [{s.status}]
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

import { useState } from "react";
export default SandboxPanel;
