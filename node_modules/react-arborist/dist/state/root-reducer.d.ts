import { ActionFromReducer } from "redux";
export declare const rootReducer: import("redux").Reducer<import("redux").CombinedState<{
    nodes: import("redux").CombinedState<{
        focus: import("./focus-slice").FocusState;
        edit: import("./edit-slice").EditState;
        open: import("./open-slice").OpenSlice;
        selection: import("./selection-slice").SelectionState;
        drag: import("./drag-slice").DragSlice;
    }>;
    dnd: import("./dnd-slice").DndState;
}>, import("redux").AnyAction>;
export declare type RootState = ReturnType<typeof rootReducer>;
export declare type Actions = ActionFromReducer<typeof rootReducer>;
