'use client';

import { IAdamConfig } from '@/types/project';
import { useAdamStyles } from './use-adam-styles';

type Props = {
  adamConfig: IAdamConfig;
};

export default function AdamWidgetProvider({ adamConfig }: Props) {
  useAdamStyles({ adamConfig });

  return (
    <script
      id="widget"
      src={`https://widget.dev.iadam.ai/widget-load?clientId=${adamConfig.clientId}&source=${adamConfig.source}`}
      async
    />
  );
}
