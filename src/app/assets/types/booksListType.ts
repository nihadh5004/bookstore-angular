export type booksListType = {
  kind: string;
  totalItems: number;
  items: [
    {
      accessInfo: {
        accessViewStatus: string;
        country: string;
        epub: {
          acsTokenLink: string;
          isAvailable: boolean;
        };

        pdf: {
          acsTokenLink: string;
          isAvailable: boolean;
        };
      };
      etag: string;
      id: string;
      kind: string;
      saleInfo: {
        buyLink: string;
        country: string;
        listPrice: {
          amount: number;
          currencyCode: string;
        };
        offers: [
          {
            finskyOfferType: number;
            listPrice: {
              amountInMicros: number;
              currencyCode: string;
            };
            retailPrice: {
              amountInMicros: number;
              currencyCode: string;
            };
          }
        ];
        retailPrice: {
          amount: number;
          currencyCode: string;
        };
      };
      searchInfo: {
        textSnippet: string;
      };
      selfLink: string;
      volumeInfo: {
        allowAnonLogging: boolean;
        authors: string[];
        canonicalVolumeLink: string;
        contentVersion: string;
        description: string;
        imageLinks: {
          smallThumbnail: string;
          thumbnail: string;
        };
        infoLink: string;
        maturityRating: string;
        panelizationSummary: {
          containsEpubBubbles: boolean;
          containsImageBubbles: boolean;
        };
        previewLink: string;
        publishedDate: string;
        publisher: string;
        readingModes: {
          image: boolean;
          text: boolean;
        };
        title: string;
      };
    }
  ];
};
