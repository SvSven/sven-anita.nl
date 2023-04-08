import { UnitTypeLongPlural } from 'dayjs'

export type TimerFormat = Exclude<UnitTypeLongPlural, 'dates'> | 'weeks'
