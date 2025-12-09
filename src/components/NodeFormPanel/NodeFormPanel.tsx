import type { FC } from "react";
import type { Node } from "reactflow";

import StartNodeForm from "./StartNodeForm";
import TaskNodeForm from "./TaskNodeForm";
import ApprovalNodeForm from "./ApprovalNodeForm";
import AutomatedNodeForm from "./AutomatedNodeForm";
import EndNodeForm from "./EndNodeForm";

interface Props {
  nodes: Node[];
  selectedNodeId: string | null;
  onChangeNodeData: (id: string, data: any) => void;
  onDeleteNode: (id: string) => void;
}

const NodeFormPanel: FC<Props> = ({
  nodes,
  selectedNodeId,
  onChangeNodeData,
  onDeleteNode,
}) => {
  const node = nodes.find((n) => n.id === selectedNodeId);

  if (!node) {
    return <div className="form-panel empty">Select a node to edit</div>;
  }

  const commonProps = {
    data: node.data,
    onChange: (data: any) => onChangeNodeData(node.id, data),
  };

  let form: JSX.Element | null = null;
  switch (node.type) {
    case "start":
      form = <StartNodeForm {...commonProps} />;
      break;
    case "task":
      form = <TaskNodeForm {...commonProps} />;
      break;
    case "approval":
      form = <ApprovalNodeForm {...commonProps} />;
      break;
    case "automated":
      form = <AutomatedNodeForm {...commonProps} />;
      break;
    case "end":
      form = <EndNodeForm {...commonProps} />;
      break;
    default:
      form = null;
  }

  return (
    <div className="form-panel">
      <div className="form-panel-header">
        <h3>Edit Node</h3>
        <button type="button" onClick={() => onDeleteNode(node.id)}>
          Delete
        </button>
      </div>
      {form}
    </div>
  );
};

export default NodeFormPanel;
