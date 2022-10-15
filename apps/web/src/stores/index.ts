import { createStore } from "solid-js/store";

interface IAppState {}

const appStore = createStore<IAppState>({});

export const useAppState = () => appStore;
