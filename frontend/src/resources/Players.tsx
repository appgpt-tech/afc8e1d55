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
const PlayersTitle = () => {
  const record = useRecordContext();
  return <span>Players {record ? `"${ record.Player_Name }"` : ""}</span>;
};

export const PlayersList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <TextField source="Player_Name" />
<NumberField source="Wins" />
<NumberField source="Losses" />
<NumberField source="Draws" />
<NumberField source="id" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const PlayersEdit = () => (
                    <Edit title={<PlayersTitle />}>
                      <SimpleForm>
                          <TextInput source="Player_Name"   />
<NumberInput source="Wins"   />
<NumberInput source="Losses"   />
<NumberInput source="Draws"   />
<NumberInput source="id"   disabled/>
                      </SimpleForm>
                    </Edit>
                  );

export const PlayersCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <TextInput source="Player_Name"   />
<NumberInput source="Wins"   />
<NumberInput source="Losses"   />
<NumberInput source="Draws"   />
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


