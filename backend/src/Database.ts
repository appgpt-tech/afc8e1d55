//Class to create tables and seed new database
import { DataSource } from "typeorm";
import { DBConfiguration } from "./Configuration";
import { SettingsEntity } from "./db/Settings.entity";
//autogenerate imports based on resources
import { PlayersEntity } from "./db/Players.entity";
import { GamesEntity } from "./db/Games.entity";
import { AnimationsEntity } from "./db/Animations.entity";
import { ColorsEntity } from "./db/Colors.entity";
import { LightsEntity } from "./db/Lights.entity";

export class Database {
  static dbConfiguration: DBConfiguration;
  public static ds: DataSource;

  static async Initialize(dbConfiguration: DBConfiguration) {
    Database.dbConfiguration = dbConfiguration;
    let dbConfig: any = dbConfiguration as any;
    //Autogenerate entities array from resource names

    dbConfig.entities = [SettingsEntity, PlayersEntity, GamesEntity, AnimationsEntity, ColorsEntity, LightsEntity];
    Database.ds = new DataSource(dbConfig);
    await Database.ds.initialize();

    //TODO: Drop all tables


    await Database.Seed();
  }
  static async Seed() {
    let data: any = {"Players":[{"Player_Name":"John Doe","Wins":5,"Losses":3,"Draws":2},{"Player_Name":"Jane Doe","Wins":6,"Losses":2,"Draws":2},{"Player_Name":"Steve Smith","Wins":4,"Losses":4,"Draws":2}],"Games":[{"Game_ID":1,"Player_1":"John Doe","Player_2":"Jane Doe","Final_Score":"5:3"},{"Game_ID":2,"Player_1":"Jane Doe","Player_2":"Steve Smith","Final_Score":"6:4"},{"Game_ID":3,"Player_1":"Steve Smith","Player_2":"John Doe","Final_Score":"4:5"}],"Animations":[{"Animation_ID":1,"Animation_Name":"Jump","Animation_Type":"Loop","Duration":"3 seconds"},{"Animation_ID":2,"Animation_Name":"Run","Animation_Type":"Loop","Duration":"1 second"},{"Animation_ID":3,"Animation_Name":"Stand","Animation_Type":"Static","Duration":"0 seconds"}],"Colors":[{"Color_ID":1,"Color_Name":"Red","Color_Code":"#FF0000"},{"Color_ID":2,"Color_Name":"Green","Color_Code":"#008000"},{"Color_ID":3,"Color_Name":"Blue","Color_Code":"#0000FF"}],"Lights":[{"Light_ID":1,"Light_Type":"Spotlight","Color":"Red"},{"Light_ID":2,"Light_Type":"Ambient","Color":"Green"},{"Light_ID":3,"Light_Type":"Point","Color":"Blue"}]};
    //Autogenerate multiple such calls ie for each resource and its data object
    let isSeeded = await this.IsSeeded();
    //if (!isSeeded) {
    //forcing app recreation
    if (true){
      console.log('   Seeding database...');
      await this.SeedResource("PlayersEntity", data.Players);
await this.SeedResource("GamesEntity", data.Games);
await this.SeedResource("AnimationsEntity", data.Animations);
await this.SeedResource("ColorsEntity", data.Colors);
await this.SeedResource("LightsEntity", data.Lights); 
      await this.SeedResource("SettingsEntity", {
        settingname: "isSeeded",
        settingvalue: "true",
      });
    }else{
      console.log('   Database seeded already!');
    }
  }
  static async IsSeeded() {
    const repo = Database.ds.getRepository("SettingsEntity");
    let rec: any = await repo.findOne({
      select: {
        settingname: true,
        settingvalue: true,
      },
      where: {
        settingname: "isSeeded",
      },
    });
    if (rec && rec.settingvalue) return true;
    return false;
  }
  static async SeedResource(resourceName: any, resourceData: any) {
    const repo = Database.ds.getRepository(resourceName);
    //await repo.clear();
    console.log('   Seeding table '+resourceName);
    await repo.upsert(resourceData, ["id"]);
  }
}

