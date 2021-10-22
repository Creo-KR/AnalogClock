export const timeZone = new Date().getTimezoneOffset() / 60;

export function getHourDegree(time) {
  const hours = ((time / (1000 * 60 * 60)) % 24) - timeZone;
  return (hours * 30).toFixed(1);
}
export function getMinuteDegree(time) {
  const minutes = (time / (1000 * 60)) % 60;
  return (minutes * 6).toFixed(1);
}
export function getSecondDegree(time) {
  const seconds = ((time / 1000) % 60).toFixed(0);
  return seconds * 6;
}
