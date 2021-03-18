import { DataType } from "../../constants/DataType";
import { BaseControl } from "./BaseControl";

export interface Field extends BaseControl {
  displayWhen: Array<any>;
  editWhen: Array<any>;
  dataType: DataType;

  placeholder?: string;
  displayOrder?: number;
  displayGroup?: number;
  validateRule?: any;
}