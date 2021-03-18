import { ActionType } from "../../constants/ActionType";
import { BaseControl } from "./BaseControl";
import { Field } from "./Field";

export interface Action extends BaseControl {
  actionType: ActionType;
  enable: any; // TODO
  actionForm?: {
    fields: Array<Field>;
    validateRule: any; // TODO
  };
}
