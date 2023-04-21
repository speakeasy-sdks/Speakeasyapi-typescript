/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

export class DeleteOrderRequest extends SpeakeasyBase {
  /**
   * ID of the order that needs to be deleted
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=orderId",
  })
  orderId: number;
}

export class DeleteOrderResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
