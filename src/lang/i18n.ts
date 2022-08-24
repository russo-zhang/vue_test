import { getCurrentLang } from "@/utils";
import { createI18n } from "vue-i18n";
import messages from "./index";
const locale = getCurrentLang();
const i18n = createI18n({
    locale,
    messages,
});
export default i18n;
