import dynamic from 'next/dynamic';
import { HowItWorksOneProps } from './how-it-works-one/how-it-works-one';
import { HowItWorksComponentName } from './types';

const HowItWorsOne = dynamic(() => import('./how-it-works-one'), { ssr: false });

type ComponentProps =
  | HowItWorksOneProps & {
      name: HowItWorksComponentName.HOW_IT_WORKS_ONE;
    };

type Props = ComponentProps;

export default function TeamFactory({ name, data, ...rest }: Props) {
  switch (name) {
    case HowItWorksComponentName.HOW_IT_WORKS_ONE:
      return <HowItWorsOne data={data} {...rest} />;

    default:
      return null;
  }
}
