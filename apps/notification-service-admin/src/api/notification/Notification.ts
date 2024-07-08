export type Notification = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  userId: number | null;
  readAt: Date | null;
  message: string | null;
};
