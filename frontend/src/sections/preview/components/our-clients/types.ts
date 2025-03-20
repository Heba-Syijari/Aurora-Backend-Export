import { ImageData, TextData } from '../../types';

export enum OurClientsComponentName {
  OUR_CLIENTS_ONE = 'OUR_CLIENTS_ONE',
}


// ! uncomment this if u need to edit the clients
// export type BaseOurClientsConfig = {
//   // titleTextColor: string;
//   // priceTextColor: string;
//   // periodTextColor: string;
//   // featuresTextColor: string;

//   imageUrl: ImageData,
//   link: string,
// };

export type OurClientsItemData = {
  image: string
  link: string
};

export type OurClientsConfig = {
  // Image: ImageData,
  // title: string,
  clients: OurClientsItemData[];
};

export type OurClientsData = {
  image: ImageData; // backGround
  titlePartOne: TextData;
  titlePartTwo: TextData;
  config: OurClientsConfig;
};


// export type OurClientsOneConfig = OurClientsConfig;

export type OurClientsOneData = OurClientsData


// export type GenericSubscriptionConfig =
//   | OurClientsConfig
// | OurClientsOneConfig
// | SubscriptionTwoConfig
// | SubscriptionFourConfig
// | SubscriptionThreeConfig
// | SubscriptionFiveConfig;

export type OurClientsComponentNameType = `${OurClientsComponentName}`;
