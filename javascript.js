fetch("https://api.restful-api.dev/objects")
  .then(response => {
    let type = response.headers.get("Content-Type");
    let date = response.headers.get("Date");
    let status = response.status;

    console.log(status);
    console.log(date, type);

    return response.json();
  })
  .then(data => {
    console.log(data);
  });