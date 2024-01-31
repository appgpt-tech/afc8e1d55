import {
  Datagrid,
  List,
  EditButton,
  Edit,
  SimpleForm,
  Create,
  SelectColumnsButton,
  DatagridConfigurable,
  TopToolbar,
  CreateButton,
  ExportButton,
  FilterButton,
  //Field controls
  BooleanField,
  DateField,
  EmailField,
  ImageField,
  NumberField,
  ReferenceField,
  TextField,
  UrlField,
  //Input controls
  BooleanInput,
  DateInput,
  //EmailInput,
  ImageInput,
  NumberInput,
  ReferenceInput,
  TextInput,
  //UrlInput,
} from "react-admin";
import { useRecordContext } from "react-admin";
const ListActions = () => (
    <TopToolbar>
        <FilterButton />
        <CreateButton />
        <ExportButton />
        <SelectColumnsButton />
    </TopToolbar>
);
const ColorsTitle = () => {
  const record = useRecordContext();
  return <span>Colors {record ? `"${ record.Color_ID }"` : ""}</span>;
};

export const ColorsList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <TextField source="Color_ID" />
<TextField source="Color_Name" />
<TextField source="Color_Code" />
<NumberField source="id" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const ColorsEdit = () => (
                    <Edit title={<ColorsTitle />}>
                      <SimpleForm>
                          <TextInput source="Color_ID"   />
<TextInput source="Color_Name"   />
<TextInput source="Color_Code"   />
<NumberInput source="id"   disabled/>
                      </SimpleForm>
                    </Edit>
                  );

export const ColorsCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <TextInput source="Color_ID"   />
<TextInput source="Color_Name"   />
<TextInput source="Color_Code"   />
<NumberInput source="id"   disabled/>
                                    </SimpleForm>
                                  </Create>
                                );

const ResourceFilters = [
      <TextInput source="q" label="Search" alwaysOn />,
,
,
,

    ];


