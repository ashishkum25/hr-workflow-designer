import type { FC } from "react";
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  type Node,
} from "reactflow";
import "reactflow/dist/style.css";

import { nodeTypes } from "./nodeTypes";
import { useWorkflow } from "../../hooks/useWorkflow";
import type { NodeType } from "../../types/workflow";
import NodeSidebar from "../Sidebar/NodeSidebar";
import NodeFormPanel from "../NodeFormPanel/NodeFormPanel";
import SandboxPanel from "../Sandbox/SandboxPanel";

let idCounter = 1;
const getId = () => `node_${idCounter++}`;

const WorkflowCanvas: FC = () => {
  const {
    nodes,
    edges,
    setNodes,
    onNodesChange,
    onEdgesChange,
    onConnect,
    onNodeClick,
    selectedNodeId,
    updateNodeData,
    deleteNode,
  } = useWorkflow();

  const onAddNode = (type: NodeType) => {
    const id = getId();
    const position = { x: 100 + nodes.length * 50, y: 50 + nodes.length * 50 };

    const baseData = { id, type, label: `${type.toUpperCase()} ${nodes.length + 1}` };

    const data = (() => {
      switch (type) {
        case "start":
          return { ...baseData, metadata: {} };
        case "task":
          return { ...baseData, customFields: {} };
        case "approval":
          return { ...baseData, approverRole: "Manager" };
        case "automated":
          return { ...baseData, params: {} };
        case "end":
          return { ...baseData, summaryFlag: true };
      }
    })();

    const node: Node = {
      id,
      type,
      position,
      data,
    };

    if (type === "start" && nodes.some((n) => n.type === "start")) {
      alert("Only one Start node allowed");
      return;
    }

    setNodes((nds) => nds.concat(node));
  };

  return (
    <div className="layout">
      <NodeSidebar onAddNode={onAddNode} />

      <div className="canvas-container">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onNodeClick={onNodeClick}
          fitView
        >
          <Background />
          <MiniMap />
          <Controls />
        </ReactFlow>
      </div>

      <NodeFormPanel
        nodes={nodes}
        selectedNodeId={selectedNodeId}
        onChangeNodeData={updateNodeData}
        onDeleteNode={deleteNode}
      />

      <SandboxPanel nodes={nodes} edges={edges} />
    </div>
  );
};

export default WorkflowCanvas;
