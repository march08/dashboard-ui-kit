export type DatePickerRangeValue = { from?: Date | null | undefined, to?: Date | null | undefined }

export type DatePickerSimpleValue = Date | null | undefined

export type DatePickerValue<M extends boolean> = (M extends true ? DatePickerRangeValue : DatePickerSimpleValue)

export type DatePickerOnChange<M extends boolean> = (value: DatePickerValue<M>) => void
