import { BaseComponent } from "./BaseComponent";
import { Field } from "./Control/Field";

export interface ObjectTable extends BaseComponent {
  type: "ObjectTable";
  fields: Array<Field>;
}

