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
import { AxiosError } from "axios";
import { SDK } from "new-swagger-pet-store";
import { AddPetFormResponse, Pet } from "new-swagger-pet-store/dist/sdk/models/operations";
import { PetStatusEnum } from "new-swagger-pet-store/dist/sdk/models/shared";

const sdk = new SDK();

const req: shared.Pet = {
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
};

sdk.pet.addPetForm(req).then((res: AddPetFormResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## addPetJson

Add a new pet to the store

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "new-swagger-pet-store";
import { AddPetJsonResponse, Pet } from "new-swagger-pet-store/dist/sdk/models/operations";
import { PetStatusEnum } from "new-swagger-pet-store/dist/sdk/models/shared";

const sdk = new SDK();

const req: shared.Pet = {
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
};

sdk.pet.addPetJson(req).then((res: AddPetJsonResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## addPetRaw

Add a new pet to the store

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "new-swagger-pet-store";
import { , AddPetRawResponse } from "new-swagger-pet-store/dist/sdk/models/operations";
import { PetStatusEnum } from "new-swagger-pet-store/dist/sdk/models/shared";

const sdk = new SDK();

const req: . = "saepe".encode();

sdk.pet.addPetRaw(req).then((res: AddPetRawResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## deletePet

delete a pet

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "new-swagger-pet-store";
import { DeletePetRequest, DeletePetResponse } from "new-swagger-pet-store/dist/sdk/models/operations";

const sdk = new SDK();

const req: DeletePetRequest = {
  apiKey: "fuga",
  petId: 449950,
};

sdk.pet.deletePet(req).then((res: DeletePetResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## findPetsByStatus

Multiple status values can be provided with comma separated strings

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "new-swagger-pet-store";
import { FindPetsByStatusRequest, FindPetsByStatusResponse, FindPetsByStatusStatusEnum } from "new-swagger-pet-store/dist/sdk/models/operations";
import { PetStatusEnum } from "new-swagger-pet-store/dist/sdk/models/shared";

const sdk = new SDK();

const req: FindPetsByStatusRequest = {
  status: FindPetsByStatusStatusEnum.Pending,
};

sdk.pet.findPetsByStatus(req).then((res: FindPetsByStatusResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## findPetsByTags

Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "new-swagger-pet-store";
import { FindPetsByTagsRequest, FindPetsByTagsResponse } from "new-swagger-pet-store/dist/sdk/models/operations";
import { PetStatusEnum } from "new-swagger-pet-store/dist/sdk/models/shared";

const sdk = new SDK();

const req: FindPetsByTagsRequest = {
  tags: [
    "iure",
    "saepe",
    "quidem",
  ],
};

sdk.pet.findPetsByTags(req).then((res: FindPetsByTagsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getPetById

Returns a single pet

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "new-swagger-pet-store";
import { GetPetByIdRequest, GetPetByIdResponse } from "new-swagger-pet-store/dist/sdk/models/operations";
import { PetStatusEnum } from "new-swagger-pet-store/dist/sdk/models/shared";

const sdk = new SDK();

const req: GetPetByIdRequest = {
  petId: 99280,
};

sdk.pet.getPetById(req).then((res: GetPetByIdResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## updatePetWithForm

Updates a pet in the store with form data

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "new-swagger-pet-store";
import { UpdatePetWithFormRequest, UpdatePetWithFormResponse } from "new-swagger-pet-store/dist/sdk/models/operations";

const sdk = new SDK();

const req: UpdatePetWithFormRequest = {
  name: "Lela Orn",
  petId: 170909,
  status: "dolorem",
};

sdk.pet.updatePetWithForm(req).then((res: UpdatePetWithFormResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## updatePetForm

Update an existing pet by Id

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "new-swagger-pet-store";
import { Pet, UpdatePetFormResponse } from "new-swagger-pet-store/dist/sdk/models/operations";
import { PetStatusEnum } from "new-swagger-pet-store/dist/sdk/models/shared";

const sdk = new SDK();

const req: shared.Pet = {
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
};

sdk.pet.updatePetForm(req).then((res: UpdatePetFormResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## updatePetJson

Update an existing pet by Id

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "new-swagger-pet-store";
import { Pet, UpdatePetJsonResponse } from "new-swagger-pet-store/dist/sdk/models/operations";
import { PetStatusEnum } from "new-swagger-pet-store/dist/sdk/models/shared";

const sdk = new SDK();

const req: shared.Pet = {
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
};

sdk.pet.updatePetJson(req).then((res: UpdatePetJsonResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## updatePetRaw

Update an existing pet by Id

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "new-swagger-pet-store";
import { , UpdatePetRawResponse } from "new-swagger-pet-store/dist/sdk/models/operations";
import { PetStatusEnum } from "new-swagger-pet-store/dist/sdk/models/shared";

const sdk = new SDK();

const req: . = "quo".encode();

sdk.pet.updatePetRaw(req).then((res: UpdatePetRawResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## uploadFile

uploads an image

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "new-swagger-pet-store";
import { UploadFileRequest, UploadFileResponse } from "new-swagger-pet-store/dist/sdk/models/operations";

const sdk = new SDK();

const req: UploadFileRequest = {
  requestBody: "sequi".encode(),
  additionalMetadata: "tenetur",
  petId: 368725,
};

sdk.pet.uploadFile(req).then((res: UploadFileResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
