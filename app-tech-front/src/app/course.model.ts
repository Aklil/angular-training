export interface Course {
  id: number;
  name: string;
  code: string;
  description?: string;
  lastGivenBy?: string;
  category?: string;
}
