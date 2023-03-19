import {Priority, STATUS} from "./type";

export const getPriorityString = (type: Priority) => {
    switch (type) {
        case Priority.HIGH:
            return "HIGH";
        case Priority.MEDIUM:
            return "MEDIUM";
        case Priority.LOW:
            return "LOW";
        default:
            return "";
    }
}

export const getStatusString = (type: STATUS) => {
    switch (type) {
        case STATUS.DONE:
            return "DONE";
        case STATUS.PROGRESS:
            return "PROGRESS";
        case STATUS.TODO:
            return "TODO";
        default:
            return "";
    }
}