import { Action } from "./Action";
import { BaseControl } from "./BaseControl";


export interface ActionGroup extends BaseControl {
  order: number;
  actions: Array<Action>;
}