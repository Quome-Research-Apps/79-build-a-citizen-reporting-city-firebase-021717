export type IssueStatus = 'Received' | 'Assigned' | 'In Progress' | 'Completed';
export type IssueCategory = 'Pothole' | 'Streetlight Out' | 'Trash Overflow' | 'Graffiti' | 'Other';

export interface Issue {
  id: string;
  category: IssueCategory;
  description: string;
  location: {
    lat: number;
    lng: number;
    top: string;
    left: string;
  };
  imageUrl?: string;
  status: IssueStatus;
  reportedAt: string;
  citizenEmail?: string;
  summary?: string;
}
