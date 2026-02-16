export interface Session {
  id: number;
  date: string;
  windSpeed: number;
  windDirection: string;
  performance: 1 | 2 | 3 | 4 | 5;
  seaCondition: "calm" | "moderate" | "rough";
  notes: string;
}

export type SeaCondition = Session["seaCondition"];
export type WindDirection = "N" | "NE" | "E" | "SE" | "S" | "SW" | "W" | "NW";
