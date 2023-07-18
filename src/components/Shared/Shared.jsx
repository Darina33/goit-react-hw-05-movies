import { Suspense } from 'react';
import { Outlet, Link } from 'react-router-dom';
import css from './Shared.module.css'

const Shared= () => {
  return (
    <div>
      <header>
        <nav>
          <ul  className={css.list}>
            <li>
              <Link className={css.link} to="/">
                HOME
              </Link>
            </li>
            <li>
              <Link className={css.link} to="/movies">
                MOVIES
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Suspense fallback={<div>Loading page</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Shared;