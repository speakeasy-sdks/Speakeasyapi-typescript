<!-- Start SDK Example Usage -->
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
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->