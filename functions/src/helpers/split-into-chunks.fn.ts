export function splitIntoChunks(
  maxInterval: number,
  chunkSize: number,
  min?: number,
  max?: number,
): number[] {
  if (typeof chunkSize !== 'number') {
    throw Error('ChunkSize needs to be a number');
  }
  if (typeof maxInterval !== 'number') {
    throw Error('ChunkSize needs to be a number');
  }
  if (maxInterval <= chunkSize) {
    throw Error('maxInterval needs to be greater than or equal to chunkSize');
  }

  let currentInterval = chunkSize;
  let interval = [];
  do {
    interval.push(currentInterval);
    currentInterval += chunkSize;
  } while (currentInterval <= maxInterval);

  if (!!min && isFinite(min)) {
    interval = interval.filter(ta => ta >= min);
  }
  if (!!max && isFinite(max)) {
    interval = interval.filter(ta => ta <= max);
  }

  return interval;
}
