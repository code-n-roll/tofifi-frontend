export const toFormData = (data) => {
  const formData = new FormData();
  Object.keys(data).forEach((key) => {
    if (data.hasOwnProperty(key)) {
      formData.append(key, data[key]);
    }
  });

  return formData;
};
