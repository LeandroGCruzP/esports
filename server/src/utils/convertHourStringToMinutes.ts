/**
 * @example '18:00' -> ['18', '00'] -> [18, 00] -> (18 * 60) + 00 = 1080 minutes
 * @param hour string
 * @returns minutes
 */

export function convertHourStringToMinutes(hour: string) {
    const [hours, minutes] = hour.split(':').map(Number)

    const minutesAmount = (hours * 60) + minutes

    return minutesAmount
}
