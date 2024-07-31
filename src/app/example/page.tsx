"use client";

import { FormattedMessage } from "react-intl";
import messages from "./messages";
import { useAppContext } from "../providers/context";

export default function Example() {
  const { todo, setTodo } = useAppContext();
  
  return (
    <div className="flex h-screen items-center">
      <div className="mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            <FormattedMessage {...messages.title} />
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            <FormattedMessage {...messages.description} />
          </p>
        </div>
      </div>
    </div>
  );
}
