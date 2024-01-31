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
const LightsTitle = () => {
  const record = useRecordContext();
  return <span>Lights {record ? `"${ record.Light_ID }"` : ""}</span>;
};

export const LightsList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <TextField source="Light_ID" />
<TextField source="Light_Type" />
<TextField source="Color" />
<NumberField source="id" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const LightsEdit = () => (
                    <Edit title={<LightsTitle />}>
                      <SimpleForm>
                          <TextInput source="Light_ID"   />
<TextInput source="Light_Type"   />
<TextInput source="Color"   />
<NumberInput source="id"   disabled/>
                      </SimpleForm>
                    </Edit>
                  );

export const LightsCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <TextInput source="Light_ID"   />
<TextInput source="Light_Type"   />
<TextInput source="Color"   />
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


