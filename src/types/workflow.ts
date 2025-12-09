export type NodeType = "start" | "task" | "approval" | "automated" | "end";

export interface BaseNodeData {
  id: string;
  type: NodeType;
  label: string;
}

export interface StartNodeData extends BaseNodeData {
  type: "start";
  metadata: Record<string, string>;
}

export interface TaskNodeData extends BaseNodeData {
  type: "task";
  description?: string;
  assignee?: string;
  dueDate?: string;
  customFields: Record<string, string>;
}

export interface ApprovalNodeData extends BaseNodeData {
  type: "approval";
  approverRole: string;
  autoApproveThreshold?: number;
}

export interface AutomatedNodeData extends BaseNodeData {
  type: "automated";
  actionId?: string;
  params: Record<string, string>;
}

export interface EndNodeData extends BaseNodeData {
  type: "end";
  endMessage?: string;
  summaryFlag: boolean;
}

export type WorkflowNodeData =
  | StartNodeData
  | TaskNodeData
  | ApprovalNodeData
  | AutomatedNodeData
  | EndNodeData;

export interface WorkflowExecutionLog {
  steps: { stepId: string; message: string; status: "ok" | "error" }[];
}
