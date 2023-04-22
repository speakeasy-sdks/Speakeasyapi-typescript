# Pet-Store

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add new-swagger-pet-store
```

### Yarn

```bash
yarn add new-swagger-pet-store
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  shared.Pet,
  AddPetFormResponse
} from "new-swagger-pet-store/dist/sdk/models/operations";
import {
  PetStatusEnum,
} from "new-swagger-pet-store/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "new-swagger-pet-store";
const sdk = new SDK();

const req: shared.Pet = {
  category: {
    id: 1,
    name: "Dogs",
  },
  id: 10,
  name: "doggie",
  photoUrls: [
    "provident",
    "distinctio",
    "quibusdam",
  ],
  status: PetStatusEnum.Pending,
  tags: [
    {
      id: 544883,
      name: "Ben Mueller",
    },
    {
      id: 437587,
      name: "Raquel Bednar",
    },
    {
      id: 383441,
      name: "Alexandra Schulist",
    },
    {
      id: 568045,
      name: "Mrs. Sophie Smith MD",
    },
  ],
};

sdk.pet.addPetForm(req).then((res: AddPetFormResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### pet

* `addPetForm` - Add a new pet to the store
* `addPetJson` - Add a new pet to the store
* `addPetRaw` - Add a new pet to the store
* `deletePet` - Deletes a pet
* `findPetsByStatus` - Finds Pets by status
* `findPetsByTags` - Finds Pets by tags
* `getPetById` - Find pet by ID
* `updatePetWithForm` - Updates a pet in the store with form data
* `updatePetForm` - Update an existing pet
* `updatePetJson` - Update an existing pet
* `updatePetRaw` - Update an existing pet
* `uploadFile` - uploads an image

### store

* `deleteOrder` - Delete purchase order by ID
* `getInventory` - Returns pet inventories by status
* `getOrderById` - Find purchase order by ID
* `placeOrderForm` - Place an order for a pet
* `placeOrderJson` - Place an order for a pet
* `placeOrderRaw` - Place an order for a pet

### user

* `createUserForm` - Create user
* `createUserJson` - Create user
* `createUserRaw` - Create user
* `createUsersWithListInput` - Creates list of users with given input array
* `deleteUser` - Delete user
* `getUserByName` - Get user by user name
* `loginUser` - Logs user into the system
* `logoutUser` - Logs out current logged in user session
* `updateUserForm` - Update user
* `updateUserJson` - Update user
* `updateUserRaw` - Update user
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

