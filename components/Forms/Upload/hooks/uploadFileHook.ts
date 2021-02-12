import {useCallback, useState} from 'react';

import environment from '../../../../config/environment';
import {httpClient} from '../../../../util/httpClient';

const {uploadApi} = environment;

interface IDocument {
  userId?: string;
  name?: string;
  file?: {
    filename: string;
    size: number;
    mimtype: string;
  };
  fileType?: string;
  url?: string;
}

export const useUploadFile = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, seError] = useState(null);

  const uploadFile = useCallback(async (file: File) => {
    const data = new FormData();
    data.append('image', file);

    try {
      setLoading(true);
      const response = await httpClient.post<{data: IDocument[]}>(uploadApi, data, {
        headers: {'Content-Type': 'multipart/form-data'},
      });
      setData(response);
      setLoading(false);
      return response.data.data.map(fileObj => fileObj.url);
    } catch (error) {
      seError(error);
      setLoading(false);
      throw error;
    }
  }, []);

  return {uploadFile, loading, data, error};
};
