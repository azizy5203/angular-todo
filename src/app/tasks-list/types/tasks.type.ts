export interface Task {
  id: number;
  title: string;
  description: string;
  status: string;
  statusCode: number;
  priority: string;
  dueDate: Date | string;
  assignedTo: string;
  tags: string[];
}
