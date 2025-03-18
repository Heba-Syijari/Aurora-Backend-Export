// lazy image
import 'react-lazy-load-image-component/src/effects/blur.css';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import { FontsLink, GoogleAnalyticsTracking } from '@/components/global';
import SnackbarProvider from '@/components/snackbar/snackbar-provider';
import { WebsiteData } from '@/data';
import AdamWidgetProvider from '@/providers/adam/AdamWidgetProvider';
import ThemeProvider from '@/theme';
import { IAdamConfig, IPalette } from '@/types/project';

async function getProjectData(): Promise<{
  font: string;
  measurementId?: string;
  palette: IPalette;
  adamConfig?: IAdamConfig;
}> {
  const data = WebsiteData.getInstance();
  const { project, measurementId, adamConfig } = data.getData();

  return {
    font: project.settings.fontFamily,
    palette: project.settings.palette,
    measurementId,
    adamConfig,
  };
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { font, measurementId, adamConfig, palette } = await getProjectData();

  return (
    <html lang="en">
      <head>
        <FontsLink font={font} />
        {measurementId && <GoogleAnalyticsTracking measurementId={measurementId} />}
      </head>

      <body>
        <ThemeProvider fontFamily={font} palette={palette}>
          <SnackbarProvider>{children}</SnackbarProvider>
        </ThemeProvider>

        {adamConfig && <AdamWidgetProvider adamConfig={adamConfig} />}
      </body>
    </html>
  );
}
