import { FC } from "react";
import { IntlProvider as Provider } from "react-intl";
import { I18N_DEFAULT_LOCALE } from "@/app/base/i18n/constants";
import { getMessages } from "@/app/base/i18n/locale";

export const IntlProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const messages = getMessages();
  return (
    <Provider
      locale={I18N_DEFAULT_LOCALE}
      defaultLocale={I18N_DEFAULT_LOCALE}
      messages={messages}
    >
      {children}
    </Provider>
  );
};
