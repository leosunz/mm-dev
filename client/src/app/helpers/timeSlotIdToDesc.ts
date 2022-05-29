export function timeSlotIdToDesc(time: string): string {
  if (typeof time !== 'string') {
    return null;
  }
  const spl = time.split('__');
  const tm =
    spl[1] === '09'
      ? '09-12'
      : spl[1] === '13'
      ? '13-16'
      : spl[1] === '18'
      ? '18-21'
      : '???';

  return spl[0] + ': kl ' + tm;
}
