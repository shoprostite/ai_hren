import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type NotificationWhereInput = {
  id?: StringFilter;
  userId?: IntNullableFilter;
  readAt?: DateTimeNullableFilter;
  message?: StringNullableFilter;
};
