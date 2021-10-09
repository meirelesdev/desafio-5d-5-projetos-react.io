import { FormActions } from "../contexts/FormContext";

export type Action = {
    type: FormActions;
    payload: any;
}