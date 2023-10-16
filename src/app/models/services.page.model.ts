import { GhostBG } from "./ghost.model";
import { HomeImmageIntesation } from "./home.immages.model";

export interface ServicePage{
    content:string;
    title:string;
    headImmage:HomeImmageIntesation[];
    photos:string[];
    ghosts:GhostBG[]
}