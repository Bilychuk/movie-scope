import Navigation from '../Navigation/Navigation';
import { Suspense } from 'react';
import Loader from '../Loader/Loader';
import css from './Layout.module.css';
import { LayoutProps } from './Layout.types';

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={css.container}>
      <Navigation />
      <Suspense fallback={<Loader />}>{children}</Suspense>
    </div>
  );
}
