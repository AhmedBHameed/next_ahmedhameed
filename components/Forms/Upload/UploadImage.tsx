import dynamic from 'next/dynamic';
import React, {useCallback} from 'react';

import environment from '../../../config/environment';
import {clsx} from '../../../util/clsx';
import Image from '../../Image/Image';
import LoadingOverlay from '../../LoadingOverlay/LoadingOverlay';
import useNotification from '../../Notification/Hooks/NotificationHook';
import {useUploadFile} from './hooks/uploadFileHook';

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

const UploadImage: React.FC<UploadImageProps> = ({src, rootClasses, width, height, imgClasses, onChange}) => {
  const {uploadFile, loading} = useUploadFile();
  const {triggerNotification} = useNotification();

  const onDropAccepted = useCallback(
    async (acceptedFiles: File[], event) => {
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
    [uploadFile, onChange, triggerNotification]
  );

  const onDropRejected = useCallback(
    async (rejectedFiles, event) => {
      event.stopPropagation();
      triggerNotification({type: 'error', message: rejectedFiles.errors[0].message});
    },
    [triggerNotification]
  );

  return (
    <>
      <Dropzone onDropAccepted={onDropAccepted} onDropRejected={onDropRejected} accept={environment.uploadFileTypes}>
        {({getRootProps, getInputProps}) => (
          <label
            className={clsx([
              'flex justify-center p-1 border-2 border-dashed cursor-pointer focus:outline-none',
              rootClasses,
            ])}
            {...getRootProps()}
          >
            <Image src={src} className={imgClasses} width={width} height={height} alt="upload placeholder" />
            <input {...getInputProps()} />
          </label>
        )}
      </Dropzone>

      {loading && <LoadingOverlay />}
    </>
  );
};

export default UploadImage;
