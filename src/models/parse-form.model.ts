import {ParseFolderModel} from "@/models/parse-folder.model";

export interface ParseFormModel {
    url: string;
    folders: ParseFolderModel[];
}
