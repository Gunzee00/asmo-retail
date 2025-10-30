// /loading.jsx

import preloader from './assets/images/icons/preloader.gif'

export default function Loading() {
  return (
    <div className='preloader'>
      <img
        src={preloader}
        loading='lazy'
        alt='Loading...'
      />
    </div>
  );
}
