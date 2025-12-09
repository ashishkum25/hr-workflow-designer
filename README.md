# HR Workflow Designer (Frontend Internship Assignment)

A visual workflow builder that allows HR teams to design and simulate onboarding
and approval workflows using a node-based interface.

Built as part of the Frontend Internship assignment.

---

## 🚀 Features

- Visual workflow design using **React Flow**
- Node types:
  - Start
  - Task
  - Approval
  - Automated Step
  - End
- Sidebar to add nodes
- Click-to-edit node configuration panel
- Real-time edge connections between nodes
- Workflow validation rules:
  - Only one Start node allowed
  - At least one End node required
- Workflow sandbox to simulate execution
- Step-by-step execution logs

---

## 🛠️ Tech Stack

- **React + TypeScript**
- **Vite**
- **React Flow**
- CSS (custom styling)
- Mock API layer (simulated backend)

---

## 🧠 Architecture Overview

- `components/Canvas`  
  Handles React Flow canvas and custom node rendering

- `components/NodeFormPanel`  
  Dynamic configuration forms for each node type

- `components/Sandbox`  
  Workflow validation and execution simulation

- `hooks/`
  - `useWorkflow`: manages nodes, edges, selection
  - `useAutomations`: fetches mock automation actions

- `api/`
  - `/automations`: simulated GET endpoint
  - `/simulate`: simulated POST workflow execution

---

## ▶️ Running the project locally

```bash
npm install
npm run dev
