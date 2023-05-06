# store

## Overview

Access to Petstore orders

Find out more about our store
<http://swagger.io>
### Available Operations

* [deleteOrder](#deleteorder) - Delete purchase order by ID
* [getInventory](#getinventory) - Returns pet inventories by status
* [getOrderById](#getorderbyid) - Find purchase order by ID
* [placeOrderForm](#placeorderform) - Place an order for a pet
* [placeOrderJson](#placeorderjson) - Place an order for a pet
* [placeOrderRaw](#placeorderraw) - Place an order for a pet

## deleteOrder

For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors

### Example Usage

```typescript
import { SDK } from "new-swagger-pet-store";
import { DeleteOrderResponse } from "new-swagger-pet-store/dist/sdk/models/operations";

const sdk = new SDK();

sdk.store.deleteOrder({
  orderId: 662527,
}).then((res: DeleteOrderResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getInventory

Returns a map of status codes to quantities

### Example Usage

```typescript
import { SDK } from "new-swagger-pet-store";
import { GetInventoryResponse } from "new-swagger-pet-store/dist/sdk/models/operations";

const sdk = new SDK();

sdk.store.getInventory({
  apiKey: "YOUR_API_KEY_HERE",
}).then((res: GetInventoryResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getOrderById

For valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions.

### Example Usage

```typescript
import { SDK } from "new-swagger-pet-store";
import { GetOrderByIdResponse } from "new-swagger-pet-store/dist/sdk/models/operations";
import { OrderStatusEnum } from "new-swagger-pet-store/dist/sdk/models/shared";

const sdk = new SDK();

sdk.store.getOrderById({
  orderId: 820994,
}).then((res: GetOrderByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## placeOrderForm

Place a new order in the store

### Example Usage

```typescript
import { SDK } from "new-swagger-pet-store";
import { PlaceOrderFormResponse } from "new-swagger-pet-store/dist/sdk/models/operations";
import { OrderStatusEnum } from "new-swagger-pet-store/dist/sdk/models/shared";

const sdk = new SDK();

sdk.store.placeOrderForm({
  complete: false,
  id: 10,
  petId: 198772,
  quantity: 7,
  shipDate: new Date("2022-11-26T13:23:33.410Z"),
  status: OrderStatusEnum.Approved,
}).then((res: PlaceOrderFormResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## placeOrderJson

Place a new order in the store

### Example Usage

```typescript
import { SDK } from "new-swagger-pet-store";
import { PlaceOrderJsonResponse } from "new-swagger-pet-store/dist/sdk/models/operations";
import { OrderStatusEnum } from "new-swagger-pet-store/dist/sdk/models/shared";

const sdk = new SDK();

sdk.store.placeOrderJson({
  complete: false,
  id: 10,
  petId: 198772,
  quantity: 7,
  shipDate: new Date("2021-04-29T07:12:18.684Z"),
  status: OrderStatusEnum.Approved,
}).then((res: PlaceOrderJsonResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## placeOrderRaw

Place a new order in the store

### Example Usage

```typescript
import { SDK } from "new-swagger-pet-store";
import { PlaceOrderRawResponse } from "new-swagger-pet-store/dist/sdk/models/operations";
import { OrderStatusEnum } from "new-swagger-pet-store/dist/sdk/models/shared";

const sdk = new SDK();

sdk.store.placeOrderRaw("laborum".encode()).then((res: PlaceOrderRawResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
