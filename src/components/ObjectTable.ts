import { ComponentType } from "../constants/ComponentType";
import { TableType } from "../constants/TableStyle";
import { BaseComponent } from "./BaseComponent";
import { Action } from "./control/Action";
import { Field } from "./control/Field";

export interface ObjectTable extends BaseComponent {
  type: ComponentType.ObjectTable;
  fields: Array<Field>;
  actions: Array<Action>;
  tableType: TableType;
}

