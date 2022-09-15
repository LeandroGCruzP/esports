/**
 * @example 1080 -> 1080 / 60 -> Math.floor = 18 -> % 60 = 0 -> '18:00'
 * @example '18:00' -> ['18', '00'] -> [18, 00] -> (18 * 60) + 00 = 1080 minutes
 * @param minutes number
 * @returns minutes
 */

export function convertMinutesToHourString(minutesAmount: number) {
    const hours = Math.floor(minutesAmount / 60)
    const minutes = minutesAmount % 60

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`
}
