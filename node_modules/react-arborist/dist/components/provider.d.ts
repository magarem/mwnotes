import { ReactNode } from "react";
import { TreeApi } from "../interfaces/tree-api";
import { TreeProps } from "../types/tree-props";
declare type Props<T> = {
    treeProps: TreeProps<T>;
    imperativeHandle: React.Ref<TreeApi<T> | undefined>;
    children: ReactNode;
};
export declare function TreeProvider<T>({ treeProps, imperativeHandle, children, }: Props<T>): JSX.Element;
export {};
