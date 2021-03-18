import { ComponentType } from "../constants/ComponentType";

export interface BaseComponent {
  entity: string;
  type: ComponentType;
  displayName: string;
  displayIcon?: string;
  technicalName: string;
  tooltip?: string;
}