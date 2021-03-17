import { PageState } from "../../constants/PageState";

export interface Field {
  technicalName: string;
  displayName: string;
  displayWhen: Array<PageState>;
  editWhen: Array<PageState>;
  dataType: string; // TODO
  tooltip?: string;
  placeholder?: string;
  displayOrder?: number;
  displayGroup?: number;
}