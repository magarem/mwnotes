import { ActionTypes } from "../types/utils";
import { actions as dnd } from "./dnd-slice";
export declare type DragSlice = {
    id: string | null;
    idWillReceiveDrop: string | null;
};
export declare function reducer(state: DragSlice | undefined, action: ActionTypes<typeof dnd>): DragSlice;
