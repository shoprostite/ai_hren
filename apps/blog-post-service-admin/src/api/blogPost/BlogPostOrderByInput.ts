import { SortOrder } from "../../util/SortOrder";

export type BlogPostOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  title?: SortOrder;
  content?: SortOrder;
  authorId?: SortOrder;
};
