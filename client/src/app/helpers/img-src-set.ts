import { imageSizes } from '../core/config';

export function srcSet(imgFullPath: string, sizes: number[] = imageSizes) {
  return sizes
    .map(size => {
      const imgDirectories = imgFullPath.split('/').slice(0, -1); // ['a'/'b'];
      const imgNameAndExtension = imgFullPath.split('/').splice(-1)[0]; // 'def.jpg'
      const imgName = imgNameAndExtension.split('.')[0]; // 'def'
      const fileExtension = imgNameAndExtension.split('.')[1]; // 'jpg'

      return (
        imgDirectories.join('/') +
        '/resized/' +
        imgName +
        '-' +
        size +
        'w.' +
        fileExtension +
        ' ' +
        size +
        'w'
      );
    })
    .join(', ');
}
