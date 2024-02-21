import {ParseType} from "@/enums/parse-type.enum";

export interface ParseFolderModel{
    type: ParseType;
    className: string;
    propertyName: string;
}
