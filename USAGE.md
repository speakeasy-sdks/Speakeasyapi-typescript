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