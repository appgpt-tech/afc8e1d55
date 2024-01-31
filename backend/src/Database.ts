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
    let data: any = {"Players":[{"Player_Name":"Player 1","Wins":10,"Losses":5,"Draws":2},{"Player_Name":"Player 2","Wins":3,"Losses":4,"Draws":2},{"Player_Name":"Player 3","Wins":0,"Losses":15,"Draws":0}],"Games":[{"Game_ID":"123e4567-e89b-12d3-a456-426614174000","Player_1":"Player 1","Player_2":"Player 2","Final_Score":"1-0"},{"Game_ID":"123e4567-e89b-12d3-a456-426614174001","Player_1":"Player 2","Player_2":"Player 3","Final_Score":"0-0"},{"Game_ID":"123e4567-e89b-12d3-a456-426614174002","Player_1":"Player 1","Player_2":"Player 3","Final_Score":"2-0"}],"Animations":[{"Animation_ID":"123e4567-e89b-12d3-a456-426614174010","Animation_Name":"Slide","Animation_Type":"Transition","Duration":500},{"Animation_ID":"123e4567-e89b-12d3-a456-426614174011","Animation_Name":"Fade","Animation_Type":"Transition","Duration":300},{"Animation_ID":"123e4567-e89b-12d3-a456-426614174012","Animation_Name":"Bounce","Animation_Type":"Effect","Duration":1000}],"Colors":[{"Color_ID":"123e4567-e89b-12d3-a456-426614174020","Color_Name":"Red","Color_Code":"#FF0000"},{"Color_ID":"123e4567-e89b-12d3-a456-426614174021","Color_Name":"Green","Color_Code":"#008000"},{"Color_ID":"123e4567-e89b-12d3-a456-426614174022","Color_Name":"Blue","Color_Code":"#0000FF"}],"Lights":[{"Light_ID":"123e4567-e89b-12d3-a456-426614174030","Light_Type":"Spot","Color":"Red"},{"Light_ID":"123e4567-e89b-12d3-a456-426614174031","Light_Type":"Ambient","Color":"Green"},{"Light_ID":"123e4567-e89b-12d3-a456-426614174032","Light_Type":"Point","Color":"Blue"}]};
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

