import Script from 'next/script';

type GoogleAnalyticsTrackingProps = {
  measurementId: string;
};

export function GoogleAnalyticsTracking({ measurementId }: GoogleAnalyticsTrackingProps) {
  return (
    <>
      {/* <!-- Google tag (gtag.js) --> */}
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} />
      <Script id="google-tags-initializer" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', '${measurementId}');
        `}
      </Script>
    </>
  );
}
