import type { Schema, Attribute } from '@strapi/strapi';

export interface PacketPrices extends Schema.Component {
  collectionName: 'components_packet_prices';
  info: {
    displayName: 'Prices';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    price: Attribute.BigInteger & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'packet.prices': PacketPrices;
    }
  }
}
