import { defineStore } from "pinia";
import { ref, computed } from "vue";
import type { Session } from "@/types";

export const useSessionsStore = defineStore(
  "sessions",
  () => {
    // State
    const sessions = ref<Session[]>([]);

    // Getters (computed)
    const sessionsCount = computed(() => sessions.value.length);

    // Actions
    function addSession(session: Omit<Session, "id">) {
      sessions.value.push({
        ...session,
        id: Date.now(),
      });
    }

    function getSessionById(id: number) {
      return sessions.value.find((s) => s.id === id);
    }

    return { sessions, sessionsCount, addSession, getSessionById };
  },
  {
    persist: true,
  },
);
