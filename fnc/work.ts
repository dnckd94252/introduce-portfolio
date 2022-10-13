export const readFile = async (file: any) => {
  return new Promise(res => {
    const reader = new FileReader();
    reader.onload = () => {
      res(reader);
    };
    reader.readAsDataURL(file);
  });
};

export const filesBase64Incode = async (files: any) => {
  if (files.length <= 0) return false;
  const filesForMapArray: File[] = [...files];
  const base64Array = await Promise.all(
    filesForMapArray.map(async (item: any) => {
      const { result } = await readFile(item);
      return result;
    })
  );
  return base64Array;
};

export const pickPicture = async () => {
  try {
    const handle = await window.showOpenFilePicker();
    const getFile = await handle[0].getFile();
    const { type } = getFile;
    if (type === "image/jpeg" || type === "image/png" || type === "image/jpg") {
      const { result }   = await readFile(getFile);
      return result;
    } else return false;
  } catch (err) {
    return false;
  }
};
