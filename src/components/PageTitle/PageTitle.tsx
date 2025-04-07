import { PageTitleProps } from './PageTitle.types';

export default function PageTitle({ children }: PageTitleProps) {
  return <h1>{children}</h1>;
}
