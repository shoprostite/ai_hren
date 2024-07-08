import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const NotificationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="userId" source="userId" />
        <DateTimeInput label="readAt" source="readAt" />
        <TextInput label="message" source="message" />
      </SimpleForm>
    </Edit>
  );
};
