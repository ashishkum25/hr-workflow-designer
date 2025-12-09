export interface AutomationDefinition {
  id: string;
  label: string;
  params: string[];
}

const MOCK_AUTOMATIONS: AutomationDefinition[] = [
  { id: "send_email", label: "Send Email", params: ["to", "subject"] },
  {
    id: "generate_doc",
    label: "Generate Document",
    params: ["template", "recipient"],
  },
  {
    id: "slack_notify",
    label: "Slack Notification",
    params: ["channel", "message"],
  },
];

export function fetchAutomations(): Promise<AutomationDefinition[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(MOCK_AUTOMATIONS), 300);
  });
}
