import { ComponentType } from "../constants/ComponentType";
import { BaseComponent } from "./BaseComponent";
import { Action } from "./control/Action";
import { Field } from "./Control/Field";

export interface SingleObjectPage extends BaseComponent {
  type: ComponentType.SingleObjectPage;
  fields: Array<Field>;
  actions: Array<Action>;
}
