import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const NotificationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="userId" source="userId" />
        <DateTimeInput label="readAt" source="readAt" />
        <TextInput label="message" source="message" />
      </SimpleForm>
    </Create>
  );
};
