import type { Edge, Node } from "reactflow";
import type { WorkflowExecutionLog } from "../types/workflow";

export interface WorkflowGraphPayload {
  nodes: Node[];
  edges: Edge[];
}

export function simulateWorkflow(
  payload: WorkflowGraphPayload
): Promise<WorkflowExecutionLog> {
  return new Promise((resolve) => {
    const steps = payload.nodes.map((n, index) => ({
      stepId: n.id,
      message: `Executed node ${n.data?.label ?? n.id} (#${index + 1})`,
      status: "ok" as const,
    }));

    setTimeout(() => resolve({ steps }), 500);
  });
}
