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
const AnimationsTitle = () => {
  const record = useRecordContext();
  return <span>Animations {record ? `"${ record.Animation_ID }"` : ""}</span>;
};

export const AnimationsList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <TextField source="Animation_ID" />
<TextField source="Animation_Name" />
<TextField source="Animation_Type" />
<TextField source="Duration" />
<NumberField source="id" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const AnimationsEdit = () => (
                    <Edit title={<AnimationsTitle />}>
                      <SimpleForm>
                          <TextInput source="Animation_ID"   />
<TextInput source="Animation_Name"   />
<TextInput source="Animation_Type"   />
<TextInput source="Duration"   />
<NumberInput source="id"   disabled/>
                      </SimpleForm>
                    </Edit>
                  );

export const AnimationsCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <TextInput source="Animation_ID"   />
<TextInput source="Animation_Name"   />
<TextInput source="Animation_Type"   />
<TextInput source="Duration"   />
<NumberInput source="id"   disabled/>
                                    </SimpleForm>
                                  </Create>
                                );

const ResourceFilters = [
      <TextInput source="q" label="Search" alwaysOn />,
,
,
,
,

    ];


