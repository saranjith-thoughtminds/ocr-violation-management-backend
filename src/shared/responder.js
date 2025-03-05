export default class Responder {
  constructor(res) {
    this.res = res;
  }

  sucess = (message, data) => {
    this.res.statusCode = 200;
    return this.res.json({ message, data });
  };

  error = (message, data) => {
    this.res.statusCode = 400;
    return this.res.json({ message, data });
  };
}
