import { Action } from "./Action";
import { State } from "./State";

export type ContextType = {
    state: State;
    dispatch: (action: Action) => void;
}