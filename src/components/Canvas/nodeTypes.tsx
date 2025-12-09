import type { FC } from "react";
import { Handle, Position, type NodeProps } from "reactflow";

const BaseNode: FC<NodeProps> = ({ data }) => (
  <div className="node-card">
    <div className="node-title">{data.label}</div>
  </div>
);

export const StartNode: FC<NodeProps> = (props) => (
  <div className="node-card start-node">
    <div className="node-title">{props.data.label || "Start"}</div>
    <Handle type="source" position={Position.Bottom} />
  </div>
);

export const TaskNode: FC<NodeProps> = (props) => (
  <div className="node-card task-node">
    <Handle type="target" position={Position.Top} />
    <div className="node-title">{props.data.label || "Task"}</div>
    <Handle type="source" position={Position.Bottom} />
  </div>
);

export const ApprovalNode: FC<NodeProps> = (props) => (
  <div className="node-card approval-node">
    <Handle type="target" position={Position.Top} />
    <div className="node-title">{props.data.label || "Approval"}</div>
    <Handle type="source" position={Position.Bottom} />
  </div>
);

export const AutomatedNode: FC<NodeProps> = (props) => (
  <div className="node-card automated-node">
    <Handle type="target" position={Position.Top} />
    <div className="node-title">{props.data.label || "Automated"}</div>
    <Handle type="source" position={Position.Bottom} />
  </div>
);

export const EndNode: FC<NodeProps> = (props) => (
  <div className="node-card end-node">
    <Handle type="target" position={Position.Top} />
    <div className="node-title">{props.data.label || "End"}</div>
  </div>
);

export const nodeTypes = {
  start: StartNode,
  task: TaskNode,
  approval: ApprovalNode,
  automated: AutomatedNode,
  end: EndNode,
};

export default BaseNode;
