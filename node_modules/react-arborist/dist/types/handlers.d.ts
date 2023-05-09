import { NodeApi } from "../interfaces/node-api";
import { IdObj } from "./utils";
export declare type CreateHandler<T> = (args: {
    parentId: string | null;
    parentNode: NodeApi<T> | null;
    index: number;
    type: "internal" | "leaf";
}) => (IdObj | null) | Promise<IdObj | null>;
export declare type MoveHandler<T> = (args: {
    dragIds: string[];
    dragNodes: NodeApi<T>[];
    parentId: string | null;
    parentNode: NodeApi<T> | null;
    index: number;
}) => void | Promise<void>;
export declare type RenameHandler<T> = (args: {
    id: string;
    name: string;
    node: NodeApi<T>;
}) => void | Promise<void>;
export declare type DeleteHandler<T> = (args: {
    ids: string[];
    nodes: NodeApi<T>[];
}) => void | Promise<void>;
export declare type EditResult = {
    cancelled: true;
} | {
    cancelled: false;
    value: string;
};
