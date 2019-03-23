import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {all} from 'redux-saga/effects';
import reducer from './reducer';
import Saga from './saga';

//
function* rootSaga(params) {
  yield all([Saga()]);
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleWare = createSagaMiddleware();
const store = createStore(reducer, composeEnhancers(applyMiddleware(sagaMiddleWare)));

//sagaMiddleWare.run 执行的本身就是异步函数，所以使用all来加载多个saga文件
sagaMiddleWare.run(rootSaga);

//在创建saga文件的时候
//首先就要就是创建一constants来定义action.type类型，建议最好使用‘xxx/xxxx'这种形式的用以区分
//然后创建一个创建{action,reducer,saga}文件为一体的sagacreator
//最后使用rootSaga把所有的saga文件注入的sagamiddleware中

export default store;
