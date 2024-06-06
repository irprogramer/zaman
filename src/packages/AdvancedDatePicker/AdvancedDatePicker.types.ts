import type { InputHTMLAttributes, RefObject } from 'react'
import type {
  BaseProps,
  DatePickerValue,
  DaysRange,
  Positions
} from '../../types'
import type {
  CalendarDefaultProps,
  CalendarRangeProps
} from '../Calendar/Calendar.types'

export interface DatePickerBaseProps extends BaseProps {
  defaultValue?: DatePickerValue
  weekends?: DaysRange[]
  show: boolean
  inputClass?: string
  className?: string
  inputAttributes?: InputHTMLAttributes<HTMLInputElement>
  position?: Positions
  customShowDateFormat?: string,
  destinationRef:RefObject<HTMLInputElement>,
  toggleShowCalendar:() => (void | Promise<void>)
  closeCalendar: () => (void | Promise<void>)
}

export type AdvancedDatePickerProps = DatePickerBaseProps &
  (CalendarRangeProps | CalendarDefaultProps)
