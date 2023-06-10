# pet

## Overview

Everything about your Pets

Find out more
<http://swagger.io>
### Available Operations

* [addPetForm](#addpetform) - Add a new pet to the store
* [addPetJson](#addpetjson) - Add a new pet to the store
* [addPetRaw](#addpetraw) - Add a new pet to the store
* [deletePet](#deletepet) - Deletes a pet
* [findPetsByStatus](#findpetsbystatus) - Finds Pets by status
* [findPetsByTags](#findpetsbytags) - Finds Pets by tags
* [getPetById](#getpetbyid) - Find pet by ID
* [updatePetWithForm](#updatepetwithform) - Updates a pet in the store with form data
* [updatePetForm](#updatepetform) - Update an existing pet
* [updatePetJson](#updatepetjson) - Update an existing pet
* [updatePetRaw](#updatepetraw) - Update an existing pet
* [uploadFile](#uploadfile) - uploads an image

## addPetForm

Add a new pet to the store

### Example Usage

```typescript
import { SDK } from "new-swagger-pet-store";
import { AddPetFormResponse } from "new-swagger-pet-store/dist/sdk/models/operations";
import { PetStatus } from "new-swagger-pet-store/dist/sdk/models/shared";

const sdk = new SDK();

sdk.pet.addPetForm({
  category: {
    id: 1,
    name: "Dogs",
  },
  id: 10,
  name: "doggie",
  photoUrls: [
    "ipsam",
  ],
  status: PetStatus.Sold,
  tags: [
    {
      id: 778157,
      name: "Teri Strosin",
    },
    {
      id: 799159,
      name: "Erik Lebsack",
    },
    {
      id: 118274,
      name: "Luke McCullough",
    },
    {
      id: 944669,
      name: "Everett Breitenberg",
    },
  ],
}, {
  petstoreAuth: "",
}).then((res: AddPetFormResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [shared.Pet](../../models/shared/pet.md)                                       | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `security`                                                                     | [operations.AddPetFormSecurity](../../models/operations/addpetformsecurity.md) | :heavy_check_mark:                                                             | The security requirements to use for the request.                              |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.AddPetFormResponse](../../models/operations/addpetformresponse.md)>**


## addPetJson

Add a new pet to the store

### Example Usage

```typescript
import { SDK } from "new-swagger-pet-store";
import { AddPetJsonResponse } from "new-swagger-pet-store/dist/sdk/models/operations";
import { PetStatus } from "new-swagger-pet-store/dist/sdk/models/shared";

const sdk = new SDK();

sdk.pet.addPetJson({
  category: {
    id: 1,
    name: "Dogs",
  },
  id: 10,
  name: "doggie",
  photoUrls: [
    "qui",
    "impedit",
  ],
  status: PetStatus.Sold,
  tags: [
    {
      id: 216550,
      name: "Brandon Auer",
    },
    {
      id: 149675,
      name: "Curtis Morissette",
    },
  ],
}, {
  petstoreAuth: "",
}).then((res: AddPetJsonResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [shared.Pet](../../models/shared/pet.md)                                       | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `security`                                                                     | [operations.AddPetJsonSecurity](../../models/operations/addpetjsonsecurity.md) | :heavy_check_mark:                                                             | The security requirements to use for the request.                              |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.AddPetJsonResponse](../../models/operations/addpetjsonresponse.md)>**


## addPetRaw

Add a new pet to the store

### Example Usage

```typescript
import { SDK } from "new-swagger-pet-store";
import { AddPetRawResponse } from "new-swagger-pet-store/dist/sdk/models/operations";
import { PetStatus } from "new-swagger-pet-store/dist/sdk/models/shared";

const sdk = new SDK();

sdk.pet.addPetRaw("saepe".encode(), {
  petstoreAuth: "",
}).then((res: AddPetRawResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [Uint8Array](../../models//.md)                                              | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `security`                                                                   | [operations.AddPetRawSecurity](../../models/operations/addpetrawsecurity.md) | :heavy_check_mark:                                                           | The security requirements to use for the request.                            |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.AddPetRawResponse](../../models/operations/addpetrawresponse.md)>**


## deletePet

delete a pet

### Example Usage

```typescript
import { SDK } from "new-swagger-pet-store";
import { DeletePetResponse } from "new-swagger-pet-store/dist/sdk/models/operations";

const sdk = new SDK();

sdk.pet.deletePet({
  apiKey: "fuga",
  petId: 449950,
}, {
  petstoreAuth: "",
}).then((res: DeletePetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.DeletePetRequest](../../models/operations/deletepetrequest.md)   | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `security`                                                                   | [operations.DeletePetSecurity](../../models/operations/deletepetsecurity.md) | :heavy_check_mark:                                                           | The security requirements to use for the request.                            |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.DeletePetResponse](../../models/operations/deletepetresponse.md)>**


## findPetsByStatus

Multiple status values can be provided with comma separated strings

### Example Usage

```typescript
import { SDK } from "new-swagger-pet-store";
import { FindPetsByStatusResponse, FindPetsByStatusStatus } from "new-swagger-pet-store/dist/sdk/models/operations";
import { PetStatus } from "new-swagger-pet-store/dist/sdk/models/shared";

const sdk = new SDK();

sdk.pet.findPetsByStatus({
  status: FindPetsByStatusStatus.Pending,
}, {
  petstoreAuth: "",
}).then((res: FindPetsByStatusResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.FindPetsByStatusRequest](../../models/operations/findpetsbystatusrequest.md)   | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `security`                                                                                 | [operations.FindPetsByStatusSecurity](../../models/operations/findpetsbystatussecurity.md) | :heavy_check_mark:                                                                         | The security requirements to use for the request.                                          |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.FindPetsByStatusResponse](../../models/operations/findpetsbystatusresponse.md)>**


## findPetsByTags

Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.

### Example Usage

```typescript
import { SDK } from "new-swagger-pet-store";
import { FindPetsByTagsResponse } from "new-swagger-pet-store/dist/sdk/models/operations";
import { PetStatus } from "new-swagger-pet-store/dist/sdk/models/shared";

const sdk = new SDK();

sdk.pet.findPetsByTags({
  tags: [
    "iure",
    "saepe",
    "quidem",
  ],
}, {
  petstoreAuth: "",
}).then((res: FindPetsByTagsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.FindPetsByTagsRequest](../../models/operations/findpetsbytagsrequest.md)   | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `security`                                                                             | [operations.FindPetsByTagsSecurity](../../models/operations/findpetsbytagssecurity.md) | :heavy_check_mark:                                                                     | The security requirements to use for the request.                                      |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.FindPetsByTagsResponse](../../models/operations/findpetsbytagsresponse.md)>**


## getPetById

Returns a single pet

### Example Usage

```typescript
import { SDK } from "new-swagger-pet-store";
import { GetPetByIdResponse } from "new-swagger-pet-store/dist/sdk/models/operations";
import { PetStatus } from "new-swagger-pet-store/dist/sdk/models/shared";

const sdk = new SDK();

sdk.pet.getPetById({
  petId: 99280,
}, {
  apiKey: "",
}).then((res: GetPetByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.GetPetByIdRequest](../../models/operations/getpetbyidrequest.md)   | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `security`                                                                     | [operations.GetPetByIdSecurity](../../models/operations/getpetbyidsecurity.md) | :heavy_check_mark:                                                             | The security requirements to use for the request.                              |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.GetPetByIdResponse](../../models/operations/getpetbyidresponse.md)>**


## updatePetWithForm

Updates a pet in the store with form data

### Example Usage

```typescript
import { SDK } from "new-swagger-pet-store";
import { UpdatePetWithFormResponse } from "new-swagger-pet-store/dist/sdk/models/operations";

const sdk = new SDK();

sdk.pet.updatePetWithForm({
  name: "Lela Orn",
  petId: 170909,
  status: "dolorem",
}, {
  petstoreAuth: "",
}).then((res: UpdatePetWithFormResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.UpdatePetWithFormRequest](../../models/operations/updatepetwithformrequest.md)   | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `security`                                                                                   | [operations.UpdatePetWithFormSecurity](../../models/operations/updatepetwithformsecurity.md) | :heavy_check_mark:                                                                           | The security requirements to use for the request.                                            |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.UpdatePetWithFormResponse](../../models/operations/updatepetwithformresponse.md)>**


## updatePetForm

Update an existing pet by Id

### Example Usage

```typescript
import { SDK } from "new-swagger-pet-store";
import { UpdatePetFormResponse } from "new-swagger-pet-store/dist/sdk/models/operations";
import { PetStatus } from "new-swagger-pet-store/dist/sdk/models/shared";

const sdk = new SDK();

sdk.pet.updatePetForm({
  category: {
    id: 1,
    name: "Dogs",
  },
  id: 10,
  name: "doggie",
  photoUrls: [
    "explicabo",
    "nobis",
  ],
  status: PetStatus.Available,
  tags: [
    {
      id: 363711,
      name: "Velma Batz",
    },
    {
      id: 988374,
      name: "Juan O'Hara",
    },
    {
      id: 161309,
      name: "Shaun McCullough",
    },
  ],
}, {
  petstoreAuth: "",
}).then((res: UpdatePetFormResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [shared.Pet](../../models/shared/pet.md)                                             | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `security`                                                                           | [operations.UpdatePetFormSecurity](../../models/operations/updatepetformsecurity.md) | :heavy_check_mark:                                                                   | The security requirements to use for the request.                                    |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.UpdatePetFormResponse](../../models/operations/updatepetformresponse.md)>**


## updatePetJson

Update an existing pet by Id

### Example Usage

```typescript
import { SDK } from "new-swagger-pet-store";
import { UpdatePetJsonResponse } from "new-swagger-pet-store/dist/sdk/models/operations";
import { PetStatus } from "new-swagger-pet-store/dist/sdk/models/shared";

const sdk = new SDK();

sdk.pet.updatePetJson({
  category: {
    id: 1,
    name: "Dogs",
  },
  id: 10,
  name: "doggie",
  photoUrls: [
    "molestiae",
    "velit",
  ],
  status: PetStatus.Pending,
  tags: [
    {
      id: 338007,
      name: "Kayla O'Kon",
    },
  ],
}, {
  petstoreAuth: "",
}).then((res: UpdatePetJsonResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [shared.Pet](../../models/shared/pet.md)                                             | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `security`                                                                           | [operations.UpdatePetJsonSecurity](../../models/operations/updatepetjsonsecurity.md) | :heavy_check_mark:                                                                   | The security requirements to use for the request.                                    |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.UpdatePetJsonResponse](../../models/operations/updatepetjsonresponse.md)>**


## updatePetRaw

Update an existing pet by Id

### Example Usage

```typescript
import { SDK } from "new-swagger-pet-store";
import { UpdatePetRawResponse } from "new-swagger-pet-store/dist/sdk/models/operations";
import { PetStatus } from "new-swagger-pet-store/dist/sdk/models/shared";

const sdk = new SDK();

sdk.pet.updatePetRaw("quo".encode(), {
  petstoreAuth: "",
}).then((res: UpdatePetRawResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [Uint8Array](../../models//.md)                                                    | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `security`                                                                         | [operations.UpdatePetRawSecurity](../../models/operations/updatepetrawsecurity.md) | :heavy_check_mark:                                                                 | The security requirements to use for the request.                                  |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.UpdatePetRawResponse](../../models/operations/updatepetrawresponse.md)>**


## uploadFile

uploads an image

### Example Usage

```typescript
import { SDK } from "new-swagger-pet-store";
import { UploadFileResponse } from "new-swagger-pet-store/dist/sdk/models/operations";

const sdk = new SDK();

sdk.pet.uploadFile({
  requestBody: "sequi".encode(),
  additionalMetadata: "tenetur",
  petId: 368725,
}, {
  petstoreAuth: "",
}).then((res: UploadFileResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.UploadFileRequest](../../models/operations/uploadfilerequest.md)   | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `security`                                                                     | [operations.UploadFileSecurity](../../models/operations/uploadfilesecurity.md) | :heavy_check_mark:                                                             | The security requirements to use for the request.                              |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.UploadFileResponse](../../models/operations/uploadfileresponse.md)>**

