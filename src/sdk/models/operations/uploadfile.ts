/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class UploadFileSecurity extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2;name=Authorization" })
    petstoreAuth: string;
}

export class UploadFileRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/octet-stream" })
    requestBody?: Uint8Array;

    /**
     * Additional Metadata
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=additionalMetadata" })
    additionalMetadata?: string;

    /**
     * ID of pet to update
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=petId" })
    petId: number;
}

export class UploadFileResponse extends SpeakeasyBase {
    /**
     * successful operation
     */
    @SpeakeasyMetadata()
    apiResponse?: shared.ApiResponse;

    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
