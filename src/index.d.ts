// Type definitions for jsqrcode
// Project: https://github.com/edi9999/jsqrcode
// Definitions by: Connor Poole <https://github.com/cpoole>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped/jsqrcode

export as namespace QrCodeLib;

export = QrCode;

declare class QrCode {
  constructor ();
  decode(src?: any, data?: any): void;
}


// declare namespace QrCode {
//   export interface ClassMethodOptions {
//     width?: number;
//     height?: number;
//   }
// }
