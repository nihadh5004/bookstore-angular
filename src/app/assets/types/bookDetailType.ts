export type bookDetailType = {
        accessInfo: {
            accessViewStatus: string;
            country: string;
            embeddable:boolean;
            epub: {
                acsTokenLink: string;
                isAvailable: boolean;
            };
    
            pdf: {
                acsTokenLink: string;
                isAvailable: boolean;
            };
            publicDomain: boolean;
            quoteSharingAllowed: boolean;
            textToSpeechPermission: string;
            viewability: string;
            webReaderLink: string;
        };
        etag: string;
        id: string;
        kind: string;
        layerInfo: {
            layers: [{
                layerId: string;
                volumeAnnotationsVersion: string;
            }] 
        };
        saleInfo: {
          buyLink: string;
          country: string;
          isEbook:boolean;
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
          saleability : string;
        };
        selfLink: string;
        volumeInfo: {
          allowAnonLogging: boolean;
          authors: string[];
          canonicalVolumeLink: string;
          categories:string[];
          contentVersion: string;
          description: string;
          imageLinks: {
            extraLarge: string;
            large: string;
            medium: string;
            small: string;
            smallThumbnail: string;
            thumbnail: string;
          };
          industryIdentifiers: [{
            type: string;
            identifier: string;
        }]

          infoLink: string;
          language:string;
          maturityRating: string;
          pageCount:number;
          panelizationSummary: {
            containsEpubBubbles: boolean;
            containsImageBubbles: boolean;
          };
          previewLink: string;
          printType:string;
          printedPageCount:number;
          publishedDate: string;
          publisher: string;
          readingModes: {
            image: boolean;
            text: boolean;
          };
          title: string;
        };
}

  