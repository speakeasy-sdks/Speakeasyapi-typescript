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
import { PetStatusEnum } from "new-swagger-pet-store/dist/sdk/models/shared";

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
  status: PetStatusEnum.Sold,
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
}).then((res: AddPetFormResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## addPetJson

Add a new pet to the store

### Example Usage

```typescript
import { SDK } from "new-swagger-pet-store";
import { AddPetJsonResponse } from "new-swagger-pet-store/dist/sdk/models/operations";
import { PetStatusEnum } from "new-swagger-pet-store/dist/sdk/models/shared";

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
  status: PetStatusEnum.Sold,
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
}).then((res: AddPetJsonResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## addPetRaw

Add a new pet to the store

### Example Usage

```typescript
import { SDK } from "new-swagger-pet-store";
import { AddPetRawResponse } from "new-swagger-pet-store/dist/sdk/models/operations";
import { PetStatusEnum } from "new-swagger-pet-store/dist/sdk/models/shared";

const sdk = new SDK();

sdk.pet.addPetRaw("saepe".encode()).then((res: AddPetRawResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

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
}).then((res: DeletePetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## findPetsByStatus

Multiple status values can be provided with comma separated strings

### Example Usage

```typescript
import { SDK } from "new-swagger-pet-store";
import { FindPetsByStatusResponse, FindPetsByStatusStatusEnum } from "new-swagger-pet-store/dist/sdk/models/operations";
import { PetStatusEnum } from "new-swagger-pet-store/dist/sdk/models/shared";

const sdk = new SDK();

sdk.pet.findPetsByStatus({
  status: FindPetsByStatusStatusEnum.Pending,
}).then((res: FindPetsByStatusResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## findPetsByTags

Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.

### Example Usage

```typescript
import { SDK } from "new-swagger-pet-store";
import { FindPetsByTagsResponse } from "new-swagger-pet-store/dist/sdk/models/operations";
import { PetStatusEnum } from "new-swagger-pet-store/dist/sdk/models/shared";

const sdk = new SDK();

sdk.pet.findPetsByTags({
  tags: [
    "iure",
    "saepe",
    "quidem",
  ],
}).then((res: FindPetsByTagsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getPetById

Returns a single pet

### Example Usage

```typescript
import { SDK } from "new-swagger-pet-store";
import { GetPetByIdResponse } from "new-swagger-pet-store/dist/sdk/models/operations";
import { PetStatusEnum } from "new-swagger-pet-store/dist/sdk/models/shared";

const sdk = new SDK();

sdk.pet.getPetById({
  petId: 99280,
}).then((res: GetPetByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

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
}).then((res: UpdatePetWithFormResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## updatePetForm

Update an existing pet by Id

### Example Usage

```typescript
import { SDK } from "new-swagger-pet-store";
import { UpdatePetFormResponse } from "new-swagger-pet-store/dist/sdk/models/operations";
import { PetStatusEnum } from "new-swagger-pet-store/dist/sdk/models/shared";

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
  status: PetStatusEnum.Available,
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
}).then((res: UpdatePetFormResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## updatePetJson

Update an existing pet by Id

### Example Usage

```typescript
import { SDK } from "new-swagger-pet-store";
import { UpdatePetJsonResponse } from "new-swagger-pet-store/dist/sdk/models/operations";
import { PetStatusEnum } from "new-swagger-pet-store/dist/sdk/models/shared";

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
  status: PetStatusEnum.Pending,
  tags: [
    {
      id: 338007,
      name: "Kayla O'Kon",
    },
  ],
}).then((res: UpdatePetJsonResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## updatePetRaw

Update an existing pet by Id

### Example Usage

```typescript
import { SDK } from "new-swagger-pet-store";
import { UpdatePetRawResponse } from "new-swagger-pet-store/dist/sdk/models/operations";
import { PetStatusEnum } from "new-swagger-pet-store/dist/sdk/models/shared";

const sdk = new SDK();

sdk.pet.updatePetRaw("quo".encode()).then((res: UpdatePetRawResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

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
}).then((res: UploadFileResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
