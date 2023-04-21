/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * Access to Petstore orders
 *
 * @see {@link http://swagger.io} - Find out more about our store
 */
export class Store {
  _defaultClient: AxiosInstance;
  _securityClient: AxiosInstance;
  _serverURL: string;
  _language: string;
  _sdkVersion: string;
  _genVersion: string;

  constructor(
    defaultClient: AxiosInstance,
    securityClient: AxiosInstance,
    serverURL: string,
    language: string,
    sdkVersion: string,
    genVersion: string
  ) {
    this._defaultClient = defaultClient;
    this._securityClient = securityClient;
    this._serverURL = serverURL;
    this._language = language;
    this._sdkVersion = sdkVersion;
    this._genVersion = genVersion;
  }

  /**
   * Delete purchase order by ID
   *
   * @remarks
   * For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors
   */
  deleteOrder(
    req: operations.DeleteOrderRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteOrderResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteOrderRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/store/order/{orderId}",
      req
    );

    const client: AxiosInstance = this._defaultClient;

    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.DeleteOrderResponse =
        new operations.DeleteOrderResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case [400, 404].includes(httpRes?.status):
          break;
      }

      return res;
    });
  }

  /**
   * Returns pet inventories by status
   *
   * @remarks
   * Returns a map of status codes to quantities
   */
  getInventory(
    config?: AxiosRequestConfig
  ): Promise<operations.GetInventoryResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/store/inventory";

    const client: AxiosInstance = this._defaultClient;

    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.GetInventoryResponse =
        new operations.GetInventoryResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getInventory200ApplicationJSONObject = utils.objectToClass(
              httpRes?.data
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Find purchase order by ID
   *
   * @remarks
   * For valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions.
   */
  getOrderById(
    req: operations.GetOrderByIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOrderByIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOrderByIdRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/store/order/{orderId}",
      req
    );

    const client: AxiosInstance = this._defaultClient;

    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.GetOrderByIdResponse =
        new operations.GetOrderByIdResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.order = utils.objectToClass(httpRes?.data, shared.Order);
          }
          if (utils.matchContentType(contentType, `application/xml`)) {
            const resBody: string = JSON.stringify(httpRes?.data, null, 0);
            const out: Uint8Array = new Uint8Array(resBody.length);
            for (let i = 0; i < resBody.length; i++)
              out[i] = resBody.charCodeAt(i);
            res.body = out;
          }
          break;
        case [400, 404].includes(httpRes?.status):
          break;
      }

      return res;
    });
  }

  /**
   * Place an order for a pet
   *
   * @remarks
   * Place a new order in the store
   */
  placeOrderForm(
    req: shared.Order,
    config?: AxiosRequestConfig
  ): Promise<operations.PlaceOrderFormResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new shared.Order(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/store/order";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "request",
        "form"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }

    const client: AxiosInstance = this._defaultClient;

    const headers = { ...reqBodyHeaders, ...config?.headers };

    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.PlaceOrderFormResponse =
        new operations.PlaceOrderFormResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.order = utils.objectToClass(httpRes?.data, shared.Order);
          }
          break;
        case httpRes?.status == 405:
          break;
      }

      return res;
    });
  }

  /**
   * Place an order for a pet
   *
   * @remarks
   * Place a new order in the store
   */
  placeOrderJson(
    req: shared.Order,
    config?: AxiosRequestConfig
  ): Promise<operations.PlaceOrderJsonResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new shared.Order(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/store/order";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "request",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }

    const client: AxiosInstance = this._defaultClient;

    const headers = { ...reqBodyHeaders, ...config?.headers };

    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.PlaceOrderJsonResponse =
        new operations.PlaceOrderJsonResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.order = utils.objectToClass(httpRes?.data, shared.Order);
          }
          break;
        case httpRes?.status == 405:
          break;
      }

      return res;
    });
  }

  /**
   * Place an order for a pet
   *
   * @remarks
   * Place a new order in the store
   */
  placeOrderRaw(
    req: Uint8Array,
    config?: AxiosRequestConfig
  ): Promise<operations.PlaceOrderRawResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/store/order";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "request",
        "raw"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }

    const client: AxiosInstance = this._defaultClient;

    const headers = { ...reqBodyHeaders, ...config?.headers };

    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.PlaceOrderRawResponse =
        new operations.PlaceOrderRawResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.order = utils.objectToClass(httpRes?.data, shared.Order);
          }
          break;
        case httpRes?.status == 405:
          break;
      }

      return res;
    });
  }
}