import type { Issue } from './types';

export const mockIssues: Issue[] = [
  {
    id: '1',
    category: 'Pothole',
    description: 'Large pothole on the corner of Main St and 2nd Ave. It is a hazard to cyclists.',
    location: { lat: 34.0522, lng: -118.2437, top: '30%', left: '40%' },
    imageUrl: 'https://picsum.photos/400/300',
    status: 'Received',
    reportedAt: '2024-07-20T10:00:00Z',
    citizenEmail: 'test1@example.com',
    summary: 'A large pothole on Main St and 2nd Ave poses a risk to cyclists. Immediate attention is recommended due to the safety hazard.',
  },
  {
    id: '2',
    category: 'Streetlight Out',
    description: 'The streetlight at the entrance of the park has been out for three days.',
    location: { lat: 34.055, lng: -118.24, top: '50%', left: '60%' },
    status: 'Completed',
    reportedAt: '2024-07-18T22:15:00Z',
  },
  {
    id: '3',
    category: 'Graffiti',
    description: 'Graffiti on the wall of the public library. It is offensive.',
    location: { lat: 34.05, lng: -118.25, top: '75%', left: '25%' },
    imageUrl: 'https://picsum.photos/400/300',
    status: 'Assigned',
    reportedAt: '2024-07-21T11:30:00Z',
    citizenEmail: 'test3@example.com',
    summary: 'Offensive graffiti has been reported on the public library wall. The issue has been assigned for cleanup.',
  },
  {
    id: '4',
    category: 'Trash Overflow',
    description: 'The trash can at the bus stop is overflowing. It has been like this for a week.',
    location: { lat: 34.048, lng: -118.245, top: '20%', left: '70%' },
    status: 'In Progress',
    reportedAt: '2024-07-19T08:00:00Z',
    summary: 'An overflowing trash can at a bus stop has been reported. The sanitation department is currently addressing the issue.'
  },
  {
    id: '5',
    category: 'Pothole',
    description: 'Another pothole near the school. It is getting dangerous for the kids.',
    location: { lat: 34.058, lng: -118.255, top: '60%', left: '50%' },
    status: 'Received',
    reportedAt: '2024-07-22T09:45:00Z',
    citizenEmail: 'parent@example.com',
    summary: 'A pothole has been reported near a school, raising safety concerns for children. It is marked as urgent.'
  },
];
