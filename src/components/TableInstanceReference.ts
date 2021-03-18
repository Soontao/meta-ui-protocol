import { ComponentType } from "../constants/ComponentType";
import { BaseComponent } from "./BaseComponent";
import { Field } from "./Control/Field";

/**
 * find a table reference
 */
export interface TableInstanceReference extends BaseComponent {
  type: ComponentType.TableInstanceReference;
  fields: Array<Field>;
  searchFields: Array<Field>;
  multiSelect: boolean;
}
