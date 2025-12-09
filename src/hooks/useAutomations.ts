import { useEffect, useState } from "react";
import { fetchAutomations, type AutomationDefinition } from "../api/automations";

export function useAutomations() {
  const [automations, setAutomations] = useState<AutomationDefinition[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchAutomations()
      .then(setAutomations)
      .finally(() => setLoading(false));
  }, []);

  return { automations, loading };
}

