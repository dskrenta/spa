export function parseUrl() {
  const url = window.location.hash.slice(1).toLowerCase() || '/';
  const values = url.split("/");

  const request = {
    resource: values[0],
    id: values[1],
    url: window.location.href
  };

  return request;
}
