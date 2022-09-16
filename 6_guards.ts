function strip(x: string | number) {
  if (typeof x === "number") {
    return x.toFixed(2);
  }
  return x.trim();
}

class MyResponse {
  header = "response header";
  result = "response result";
}

class MyError {
  header = 'error header'
  message = 'error message'
}

function handle(res: MyResponse | MyError) {
  if (res instanceof MyError) return {info: res.header + res.message}
  return {info: res.header + res.result}
}

type AlertType = 'success' | 'warning' | 'danger'

function setAlertType(type: AlertType) {
  // .....
}

setAlertType('success')
setAlertType('warning')
// setAlertType('default') // error
