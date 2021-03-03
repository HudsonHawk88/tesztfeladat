function handleResponse(response) {
  if (response.ok) {
    let data = response.json().then((adat) => {
      return adat;
    });
    return data;
  } else {
    throw new Error("Something went wrong ...");
  }
}

class Microservices {
  static fetchApi = async (url, requestOptions) => {
    return await fetch(url, requestOptions).then(handleResponse);
  };
}

export { Microservices };
