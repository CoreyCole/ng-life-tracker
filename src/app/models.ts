export interface TrackingCategory {
  name: string;
  columns: TrackingColumn[];
}

export interface TrackingColumn {
  name: string;
  type: SchemaType;
  config?: any;
}

export enum SchemaType {
  TEXT = 'text',
  INT = 'int',
  DECIMAL = 'decimal',
  AUTOTIME = 'autotime',
  DISTANCE = 'distance',
  AUTO_CALCULATED = 'auto_calculated',
}

export enum Operations {
  SUM = 'sum',
  DIVIDE = 'divide',
}
