import { FidgetSpinner } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader = () => (
  <div className={css.loader}>
    <FidgetSpinner
      visible
      height={80}
      width={80}
      wrapperClass={css.wrapper}
      ariaLabel="fidget-spinner-loading"
    />
  </div>
);

export default Loader;

