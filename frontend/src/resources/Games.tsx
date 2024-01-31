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
const GamesTitle = () => {
  const record = useRecordContext();
  return <span>Games {record ? `"${ record.Game_ID }"` : ""}</span>;
};

export const GamesList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <TextField source="Game_ID" />
<TextField source="Player_1" />
<TextField source="Player_2" />
<TextField source="Final_Score" />
<NumberField source="id" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const GamesEdit = () => (
                    <Edit title={<GamesTitle />}>
                      <SimpleForm>
                          <TextInput source="Game_ID"   />
<TextInput source="Player_1"   />
<TextInput source="Player_2"   />
<TextInput source="Final_Score"   />
<NumberInput source="id"   disabled/>
                      </SimpleForm>
                    </Edit>
                  );

export const GamesCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <TextInput source="Game_ID"   />
<TextInput source="Player_1"   />
<TextInput source="Player_2"   />
<TextInput source="Final_Score"   />
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


