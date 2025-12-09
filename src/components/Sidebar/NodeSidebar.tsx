import type { FC } from "react";
import type { NodeType } from "../../types/workflow";

interface Props {
  onAddNode: (type: NodeType) => void;
}

const NodeSidebar: FC<Props> = ({ onAddNode }) => {
  return (
    <div className="sidebar">
      <h3>Node Types</h3>
      <button onClick={() => onAddNode("start")}>Start Node</button>
      <button onClick={() => onAddNode("task")}>Task Node</button>
      <button onClick={() => onAddNode("approval")}>Approval Node</button>
      <button onClick={() => onAddNode("automated")}>Automated Step</button>
      <button onClick={() => onAddNode("end")}>End Node</button>
    </div>
  );
};

export default NodeSidebar;
