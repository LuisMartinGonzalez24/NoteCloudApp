import { AuthAction } from "./authAction";
import { NoteAction } from "./noteAction";
import { UIAction } from "./uiAction";

export type Action = AuthAction | UIAction | NoteAction;