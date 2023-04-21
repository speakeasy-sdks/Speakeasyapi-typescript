/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * Everything about your Pets
 *
 * @see {@link http://swagger.io} - Find out more
 */
export class Pet {
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
   * Add a new pet to the store
   *
   * @remarks
   * Add a new pet to the store
   */
  addPetForm(
    req: shared.Pet,
    security: operations.AddPetFormSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.AddPetFormResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new shared.Pet(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/pet";

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

    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.AddPetFormSecurity(security);
    }
    const client: AxiosInstance = utils.createSecurityClient(
      this._defaultClient,
      security
    );

    const headers = { ...reqBodyHeaders, ...config?.headers };
    if (reqBody == null || Object.keys(reqBody).length === 0)
      throw new Error("request body is required");

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
      const res: operations.AddPetFormResponse =
        new operations.AddPetFormResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.pet = utils.objectToClass(httpRes?.data, shared.Pet);
          }
          if (utils.matchContentType(contentType, `application/xml`)) {
            const resBody: string = JSON.stringify(httpRes?.data, null, 0);
            const out: Uint8Array = new Uint8Array(resBody.length);
            for (let i = 0; i < resBody.length; i++)
              out[i] = resBody.charCodeAt(i);
            res.body = out;
          }
          break;
        case httpRes?.status == 405:
          break;
      }

      return res;
    });
  }

  /**
   * Add a new pet to the store
   *
   * @remarks
   * Add a new pet to the store
   */
  addPetJson(
    req: shared.Pet,
    security: operations.AddPetJsonSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.AddPetJsonResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new shared.Pet(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/pet";

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

    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.AddPetJsonSecurity(security);
    }
    const client: AxiosInstance = utils.createSecurityClient(
      this._defaultClient,
      security
    );

    const headers = { ...reqBodyHeaders, ...config?.headers };
    if (reqBody == null || Object.keys(reqBody).length === 0)
      throw new Error("request body is required");

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
      const res: operations.AddPetJsonResponse =
        new operations.AddPetJsonResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.pet = utils.objectToClass(httpRes?.data, shared.Pet);
          }
          if (utils.matchContentType(contentType, `application/xml`)) {
            const resBody: string = JSON.stringify(httpRes?.data, null, 0);
            const out: Uint8Array = new Uint8Array(resBody.length);
            for (let i = 0; i < resBody.length; i++)
              out[i] = resBody.charCodeAt(i);
            res.body = out;
          }
          break;
        case httpRes?.status == 405:
          break;
      }

      return res;
    });
  }

  /**
   * Add a new pet to the store
   *
   * @remarks
   * Add a new pet to the store
   */
  addPetRaw(
    req: Uint8Array,
    security: operations.AddPetRawSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.AddPetRawResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/pet";

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

    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.AddPetRawSecurity(security);
    }
    const client: AxiosInstance = utils.createSecurityClient(
      this._defaultClient,
      security
    );

    const headers = { ...reqBodyHeaders, ...config?.headers };
    if (reqBody == null || Object.keys(reqBody).length === 0)
      throw new Error("request body is required");

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
      const res: operations.AddPetRawResponse =
        new operations.AddPetRawResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.pet = utils.objectToClass(httpRes?.data, shared.Pet);
          }
          if (utils.matchContentType(contentType, `application/xml`)) {
            const resBody: string = JSON.stringify(httpRes?.data, null, 0);
            const out: Uint8Array = new Uint8Array(resBody.length);
            for (let i = 0; i < resBody.length; i++)
              out[i] = resBody.charCodeAt(i);
            res.body = out;
          }
          break;
        case httpRes?.status == 405:
          break;
      }

      return res;
    });
  }

  /**
   * Deletes a pet
   *
   * @remarks
   * delete a pet
   */
  deletePet(
    req: operations.DeletePetRequest,
    security: operations.DeletePetSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.DeletePetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeletePetRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/pet/{petId}", req);

    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.DeletePetSecurity(security);
    }
    const client: AxiosInstance = utils.createSecurityClient(
      this._defaultClient,
      security
    );

    const headers = { ...utils.getHeadersFromRequest(req), ...config?.headers };

    const r = client.request({
      url: url,
      method: "delete",
      headers: headers,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.DeletePetResponse =
        new operations.DeletePetResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 400:
          break;
      }

      return res;
    });
  }

  /**
   * Finds Pets by status
   *
   * @remarks
   * Multiple status values can be provided with comma separated strings
   */
  findPetsByStatus(
    req: operations.FindPetsByStatusRequest,
    security: operations.FindPetsByStatusSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.FindPetsByStatusResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FindPetsByStatusRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/pet/findByStatus";

    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.FindPetsByStatusSecurity(security);
    }
    const client: AxiosInstance = utils.createSecurityClient(
      this._defaultClient,
      security
    );

    const queryParams: string = utils.serializeQueryParams(req);

    const r = client.request({
      url: url + queryParams,
      method: "get",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.FindPetsByStatusResponse =
        new operations.FindPetsByStatusResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.pets = [];
            const resFieldDepth: number = utils.getResFieldDepth(res);
            res.pets = utils.objectToClass(
              httpRes?.data,
              shared.Pet,
              resFieldDepth
            );
          }
          if (utils.matchContentType(contentType, `application/xml`)) {
            const resBody: string = JSON.stringify(httpRes?.data, null, 0);
            const out: Uint8Array = new Uint8Array(resBody.length);
            for (let i = 0; i < resBody.length; i++)
              out[i] = resBody.charCodeAt(i);
            res.body = out;
          }
          break;
        case httpRes?.status == 400:
          break;
      }

      return res;
    });
  }

  /**
   * Finds Pets by tags
   *
   * @remarks
   * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
   */
  findPetsByTags(
    req: operations.FindPetsByTagsRequest,
    security: operations.FindPetsByTagsSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.FindPetsByTagsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FindPetsByTagsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/pet/findByTags";

    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.FindPetsByTagsSecurity(security);
    }
    const client: AxiosInstance = utils.createSecurityClient(
      this._defaultClient,
      security
    );

    const queryParams: string = utils.serializeQueryParams(req);

    const r = client.request({
      url: url + queryParams,
      method: "get",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.FindPetsByTagsResponse =
        new operations.FindPetsByTagsResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.pets = [];
            const resFieldDepth: number = utils.getResFieldDepth(res);
            res.pets = utils.objectToClass(
              httpRes?.data,
              shared.Pet,
              resFieldDepth
            );
          }
          if (utils.matchContentType(contentType, `application/xml`)) {
            const resBody: string = JSON.stringify(httpRes?.data, null, 0);
            const out: Uint8Array = new Uint8Array(resBody.length);
            for (let i = 0; i < resBody.length; i++)
              out[i] = resBody.charCodeAt(i);
            res.body = out;
          }
          break;
        case httpRes?.status == 400:
          break;
      }

      return res;
    });
  }

  /**
   * Find pet by ID
   *
   * @remarks
   * Returns a single pet
   */
  getPetById(
    req: operations.GetPetByIdRequest,
    security: operations.GetPetByIdSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPetByIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPetByIdRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/pet/{petId}", req);

    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.GetPetByIdSecurity(security);
    }
    const client: AxiosInstance = utils.createSecurityClient(
      this._defaultClient,
      security
    );

    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.GetPetByIdResponse =
        new operations.GetPetByIdResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.pet = utils.objectToClass(httpRes?.data, shared.Pet);
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
   * Updates a pet in the store with form data
   */
  updatePetWithForm(
    req: operations.UpdatePetWithFormRequest,
    security: operations.UpdatePetWithFormSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdatePetWithFormResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdatePetWithFormRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/pet/{petId}", req);

    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.UpdatePetWithFormSecurity(security);
    }
    const client: AxiosInstance = utils.createSecurityClient(
      this._defaultClient,
      security
    );

    const queryParams: string = utils.serializeQueryParams(req);

    const r = client.request({
      url: url + queryParams,
      method: "post",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.UpdatePetWithFormResponse =
        new operations.UpdatePetWithFormResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 405:
          break;
      }

      return res;
    });
  }

  /**
   * Update an existing pet
   *
   * @remarks
   * Update an existing pet by Id
   */
  updatePetForm(
    req: shared.Pet,
    security: operations.UpdatePetFormSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdatePetFormResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new shared.Pet(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/pet";

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

    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.UpdatePetFormSecurity(security);
    }
    const client: AxiosInstance = utils.createSecurityClient(
      this._defaultClient,
      security
    );

    const headers = { ...reqBodyHeaders, ...config?.headers };
    if (reqBody == null || Object.keys(reqBody).length === 0)
      throw new Error("request body is required");

    const r = client.request({
      url: url,
      method: "put",
      headers: headers,
      data: reqBody,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.UpdatePetFormResponse =
        new operations.UpdatePetFormResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.pet = utils.objectToClass(httpRes?.data, shared.Pet);
          }
          if (utils.matchContentType(contentType, `application/xml`)) {
            const resBody: string = JSON.stringify(httpRes?.data, null, 0);
            const out: Uint8Array = new Uint8Array(resBody.length);
            for (let i = 0; i < resBody.length; i++)
              out[i] = resBody.charCodeAt(i);
            res.body = out;
          }
          break;
        case [400, 404, 405].includes(httpRes?.status):
          break;
      }

      return res;
    });
  }

  /**
   * Update an existing pet
   *
   * @remarks
   * Update an existing pet by Id
   */
  updatePetJson(
    req: shared.Pet,
    security: operations.UpdatePetJsonSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdatePetJsonResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new shared.Pet(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/pet";

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

    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.UpdatePetJsonSecurity(security);
    }
    const client: AxiosInstance = utils.createSecurityClient(
      this._defaultClient,
      security
    );

    const headers = { ...reqBodyHeaders, ...config?.headers };
    if (reqBody == null || Object.keys(reqBody).length === 0)
      throw new Error("request body is required");

    const r = client.request({
      url: url,
      method: "put",
      headers: headers,
      data: reqBody,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.UpdatePetJsonResponse =
        new operations.UpdatePetJsonResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.pet = utils.objectToClass(httpRes?.data, shared.Pet);
          }
          if (utils.matchContentType(contentType, `application/xml`)) {
            const resBody: string = JSON.stringify(httpRes?.data, null, 0);
            const out: Uint8Array = new Uint8Array(resBody.length);
            for (let i = 0; i < resBody.length; i++)
              out[i] = resBody.charCodeAt(i);
            res.body = out;
          }
          break;
        case [400, 404, 405].includes(httpRes?.status):
          break;
      }

      return res;
    });
  }

  /**
   * Update an existing pet
   *
   * @remarks
   * Update an existing pet by Id
   */
  updatePetRaw(
    req: Uint8Array,
    security: operations.UpdatePetRawSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdatePetRawResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/pet";

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

    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.UpdatePetRawSecurity(security);
    }
    const client: AxiosInstance = utils.createSecurityClient(
      this._defaultClient,
      security
    );

    const headers = { ...reqBodyHeaders, ...config?.headers };
    if (reqBody == null || Object.keys(reqBody).length === 0)
      throw new Error("request body is required");

    const r = client.request({
      url: url,
      method: "put",
      headers: headers,
      data: reqBody,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.UpdatePetRawResponse =
        new operations.UpdatePetRawResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.pet = utils.objectToClass(httpRes?.data, shared.Pet);
          }
          if (utils.matchContentType(contentType, `application/xml`)) {
            const resBody: string = JSON.stringify(httpRes?.data, null, 0);
            const out: Uint8Array = new Uint8Array(resBody.length);
            for (let i = 0; i < resBody.length; i++)
              out[i] = resBody.charCodeAt(i);
            res.body = out;
          }
          break;
        case [400, 404, 405].includes(httpRes?.status):
          break;
      }

      return res;
    });
  }

  /**
   * uploads an image
   */
  uploadFile(
    req: operations.UploadFileRequest,
    security: operations.UploadFileSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.UploadFileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UploadFileRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/pet/{petId}/uploadImage",
      req
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "requestBody",
        "raw"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }

    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.UploadFileSecurity(security);
    }
    const client: AxiosInstance = utils.createSecurityClient(
      this._defaultClient,
      security
    );

    const headers = { ...reqBodyHeaders, ...config?.headers };
    const queryParams: string = utils.serializeQueryParams(req);

    const r = client.request({
      url: url + queryParams,
      method: "post",
      headers: headers,
      data: reqBody,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.UploadFileResponse =
        new operations.UploadFileResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.apiResponse = utils.objectToClass(
              httpRes?.data,
              shared.ApiResponse
            );
          }
          break;
      }

      return res;
    });
  }
}