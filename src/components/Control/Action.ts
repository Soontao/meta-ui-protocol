import { ActionType } from "../../constants/ActionType";
import { Field } from "./Field";

export interface Action {
  displayName: string;
  displayIcon?: string;
  technicalAction: string;
  actionType: ActionType;
  form?: {
    fields: Array<Field>;
    doubleConfirm?: boolean;
  }
}
