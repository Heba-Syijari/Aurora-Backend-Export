import dynamic from 'next/dynamic';
import { OurClientsOneProps } from './our-clients-one/our-clients-one';
import { OurClientsComponentName } from './types';

const OurClientsOne = dynamic(() => import('./our-clients-one'), { ssr: false });
type ComponentProps =
  | OurClientsOneProps & {
      name: OurClientsComponentName.OUR_CLIENTS_ONE;
    };

type Props = ComponentProps;

export default function FeaturesFactory({ name, data, ...rest }: Props) {
  switch (name) {
    case OurClientsComponentName.OUR_CLIENTS_ONE:
      return <OurClientsOne data={data} {...rest} />;

    default:
      return null;
  }
}
