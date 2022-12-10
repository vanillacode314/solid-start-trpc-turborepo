import { createStore } from "solid-js/store";

interface IAppState {}

const [appState, setAppState] = createStore<IAppState>({});

export const useAppState = () => [appState, setAppState] as const;
