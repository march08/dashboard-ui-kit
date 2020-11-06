import { getMonthStartDay } from './utils';

test('getMonthStartDay', () => {
    expect(getMonthStartDay(new Date(2020, 0, 1))).toBe(2);
    expect(getMonthStartDay(new Date(2020, 1, 1))).toBe(5);
    expect(getMonthStartDay(new Date(2020, 2, 1))).toBe(6);
    expect(getMonthStartDay(new Date(2020, 3, 1))).toBe(2);
    expect(getMonthStartDay(new Date(2020, 4, 1))).toBe(4);
    expect(getMonthStartDay(new Date(2020, 5, 1))).toBe(0);
    expect(getMonthStartDay(new Date(2020, 6, 1))).toBe(2);
    expect(getMonthStartDay(new Date(2020, 7, 1))).toBe(5);
    expect(getMonthStartDay(new Date(2020, 8, 1))).toBe(1);
    expect(getMonthStartDay(new Date(2020, 9, 1))).toBe(3);
    expect(getMonthStartDay(new Date(2020, 10, 1))).toBe(6);
    expect(getMonthStartDay(new Date(2020, 11, 1))).toBe(1);
});
