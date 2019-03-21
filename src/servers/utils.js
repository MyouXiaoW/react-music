import request from 'superagent';
import {host} from './host';
const api = requsetfn => params => {
  let req = requsetfn.query(params);
  //这里可以选择进行获取token

  return new Promise((res, rej) => {
    req.end((err, result) => {
      if (err) {
        rej(err);
      } else {
        res(result);
      }
    });
  });
};

const handleError = res => {};

const requestCreator = type => url => api(request[type](host + url));

export const GET = requestCreator('get');
export const POST = requestCreator('post');
