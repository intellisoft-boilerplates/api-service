export function handleOk(response, delay = 0) {
  return new Promise((resolve, reject) => {
    if(response.status < 300) {
      resolve(response);
    } else {
      reject(response);
    }
  });
}

export function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}