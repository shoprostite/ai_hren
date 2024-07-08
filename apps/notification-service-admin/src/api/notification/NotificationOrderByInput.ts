import { SortOrder } from "../../util/SortOrder";

export type NotificationOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
  readAt?: SortOrder;
  message?: SortOrder;
};
