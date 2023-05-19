<!-- Start SDK Example Usage -->
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
    "provident",
    "distinctio",
    "quibusdam",
  ],
  status: PetStatus.Pending,
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
}, {
  petstoreAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AddPetFormResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->