import { useCallback, useEffect } from "react";
import { IAdamConfig } from "@/types/project";

type Props = {
  adamConfig: IAdamConfig;
};

let interval: any;

export function useAdamStyles({ adamConfig }: Props) {
  const handleIFrameOnload = useCallback((iframe: HTMLIFrameElement) => {
    const iframeHead = iframe.contentWindow?.document.head;

    console.log({ iframeHead });

    if (!iframeHead) return;

    const adamOverrideStyles = iframeHead.querySelector(
      "#adam-override-styles"
    );
    console.log({ adamOverrideStyles });
    if (!adamOverrideStyles) {
      console.log("should add style");
      iframeHead.insertAdjacentHTML(
        "beforeend",
        `<style id="adam-override-styles">
          #chat_header {
            background-color: ${adamConfig.primaryColor};
          }
          .botMsg {
            font-size: ${adamConfig.fontSize};
          }
          .userMsg {
            font-size: ${adamConfig.fontSize};
            background-color: ${adamConfig.secondaryColor};
          }
        </style>`
      );
    }
  }, [adamConfig]);

  useEffect(() => {
    const startDate = Date.now();

    interval = setInterval(() => {
      const iframe: HTMLIFrameElement | null =
        document.querySelector("iframe#iadamWidget");

      if (Date.now() - startDate >= 7e3) {
        clearInterval(interval);
      }

      if (iframe) {
        try {
          handleIFrameOnload(iframe);
          clearInterval(interval);
        } catch (err) {
          console.log(err);
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [handleIFrameOnload]);
}
