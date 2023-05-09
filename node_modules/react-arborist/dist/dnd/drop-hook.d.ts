import { RefObject } from "react";
import { ConnectDropTarget } from "react-dnd";
import { NodeApi } from "../interfaces/node-api";
export declare type DropResult = {
    parentId: string | null;
    index: number;
};
export declare function useDropHook(el: RefObject<HTMLElement | null>, node: NodeApi<any>): ConnectDropTarget;
