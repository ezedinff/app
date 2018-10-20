import {User} from './User';

export interface File {
  id: number;
  name: string;
  tag: string;
  file_path: string;
  is_activity_file: boolean;
  created_at: string;
  user: User;
}
