import createHistory from 'history/createBrowserHistory';

export default createHistory({
  basename: process.env.NODE_ENV === 'development' ? '' : '/' //not sure what to put where the slash is... was originally name of guy's project
});
// import { createBrowserHistory } from "history";
// export default createBrowserHistory();