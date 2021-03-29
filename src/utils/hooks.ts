import { ReactNode } from "react"
import { useIntl } from "react-intl"

export const useFormatMessages = (
  messages: Array<{ id: string; values?: Record<string, string | number | boolean | Date | ReactNode> }>,
): ReactNode[] => {
  const intl = useIntl()

  return messages.map(({ id, values }) => intl.formatMessage({ id }, values))
}
