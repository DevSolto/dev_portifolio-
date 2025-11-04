"use client";

import { create } from "zustand";

export type AboutTopicId = "intro" | string;

type AboutState = {
  activeTopic: AboutTopicId;
  setActiveTopic: (id: AboutTopicId) => void;
};

export const useAboutStore = create<AboutState>((set) => ({
  activeTopic: "intro",
  setActiveTopic: (id) => set({ activeTopic: id }),
}));
