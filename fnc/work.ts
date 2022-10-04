const readFile = (file: any) => {
  return new Promise(res => {
    const reader = new FileReader();
    reader.onload = () => {
      res(reader);
    };
    reader.readAsDataURL(file);
  });
};

export const pickPicture = async () => {
  try {
    const handle = await window.showOpenFilePicker();
    const getFile = await handle[0].getFile();
    const { type } = getFile;
    if (type === "image/jpeg" || type === "image/png" || type === "image/jpg") {
      const { result }  = await readFile(getFile);
      return result;
    } else return false;
  } catch (err) {
    return false;
  }
};
