import { I18N_DEFAULT_LOCALE, LANGUAGE_PT_BR } from "./constants";
import * as ptBR from "../translations/pt-BR.json"

export const getMessages = (locale = I18N_DEFAULT_LOCALE) => {
    switch (locale) {
        case LANGUAGE_PT_BR:
        default:
            return ptBR;
    }
}
