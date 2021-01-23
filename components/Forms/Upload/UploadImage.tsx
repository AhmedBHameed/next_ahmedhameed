import React, {useCallback} from 'react';
import {clsx} from '../../../util/clsx';
import Image from '../../Image/Image';

import useNotification from '../../Notification/Hooks/NotificationHook';
import {useUploadFile} from './hooks/uploadFileHook';
import environment from '../../../config/environment';
import dynamic from 'next/dynamic';
import LoadingOverlay from '../../LoadingOverlay/LoadingOverlay';
const Dropzone = dynamic(() => import('react-dropzone'), {ssr: false});

interface UploadImageProps {
  rootClasses?: string;
  imgClasses?: string;
  src: string;
  width?: number;
  height?: number;
  // eslint-disable-next-line no-unused-vars
  onChange?: (url: string[], files: File[]) => void;
}

const UploadImage: React.FC<UploadImageProps> = ({src, rootClasses, imgClasses, onChange}) => {
  const {uploadFile, loading} = useUploadFile();
  const {triggerNotification} = useNotification();

  const onDrop = useCallback(
    async (acceptedFiles: File[], rejectedFiles, event) => {
      event.stopPropagation();
      try {
        const response = await uploadFile(acceptedFiles[0]);
        triggerNotification({type: 'success', message: 'Image uploaded successfully'});
        onChange && onChange(response, acceptedFiles);
      } catch (error) {
        console.log(error);
        triggerNotification({type: 'error', message: 'Uploading failed!'});
      }
    },
    [uploadFile]
  );

  return (
    <>
      <Dropzone onDrop={onDrop} accept={environment.uploadFileTypes}>
        {({getRootProps, getInputProps}) => (
          <label
            className={clsx([
              'flex p-1 mr-3 rounded-full border-2 border-dashed cursor-pointer focus:outline-none',
              rootClasses,
            ])}
            {...getRootProps()}
          >
            <Image src={src} className={clsx(['rounded-full', imgClasses])} width={50} height={50} />
            <input {...getInputProps()} />
          </label>
        )}
      </Dropzone>

      {loading && <LoadingOverlay />}
    </>
  );
};

export default UploadImage;
