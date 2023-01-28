import { ProgressBar } from 'react-loader-spinner';


export const Loader = () => {
  return <ProgressBar
  height="200"
  width=""
  ariaLabel="progress-bar-loading"
  wrapperStyle={{}}
  wrapperClass="progress-bar-wrapper"
  borderColor = '#0bb3c9'
  barColor = '#ff1906'
  />;
};