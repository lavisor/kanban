import { createContext } from "react";
import {dummyBoards , dummyTask} from "../constants/constants";


export const BoardContext = createContext(dummyBoards);
export const TaskContext = createContext(dummyTask);

