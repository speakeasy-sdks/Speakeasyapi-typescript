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
import { AxiosError } from "axios";
import { SDK } from "new-swagger-pet-store";
import { DeleteOrderRequest, DeleteOrderResponse } from "new-swagger-pet-store/dist/sdk/models/operations";

const sdk = new SDK();

const req: DeleteOrderRequest = {
  orderId: 662527,
};

sdk.store.deleteOrder(req).then((res: DeleteOrderResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getInventory

Returns a map of status codes to quantities

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "new-swagger-pet-store";
import { GetInventoryResponse } from "new-swagger-pet-store/dist/sdk/models/operations";

const sdk = new SDK();

sdk.store.getInventory().then((res: GetInventoryResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getOrderById

For valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "new-swagger-pet-store";
import { GetOrderByIdRequest, GetOrderByIdResponse } from "new-swagger-pet-store/dist/sdk/models/operations";
import { OrderStatusEnum } from "new-swagger-pet-store/dist/sdk/models/shared";

const sdk = new SDK();

const req: GetOrderByIdRequest = {
  orderId: 820994,
};

sdk.store.getOrderById(req).then((res: GetOrderByIdResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## placeOrderForm

Place a new order in the store

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "new-swagger-pet-store";
import { Order, PlaceOrderFormResponse } from "new-swagger-pet-store/dist/sdk/models/operations";
import { OrderStatusEnum } from "new-swagger-pet-store/dist/sdk/models/shared";

const sdk = new SDK();

const req: shared.Order = {
  complete: false,
  id: 10,
  petId: 198772,
  quantity: 7,
  shipDate: new Date("2022-11-26T13:23:33.410Z"),
  status: OrderStatusEnum.Approved,
};

sdk.store.placeOrderForm(req).then((res: PlaceOrderFormResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## placeOrderJson

Place a new order in the store

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "new-swagger-pet-store";
import { Order, PlaceOrderJsonResponse } from "new-swagger-pet-store/dist/sdk/models/operations";
import { OrderStatusEnum } from "new-swagger-pet-store/dist/sdk/models/shared";

const sdk = new SDK();

const req: shared.Order = {
  complete: false,
  id: 10,
  petId: 198772,
  quantity: 7,
  shipDate: new Date("2021-04-29T07:12:18.684Z"),
  status: OrderStatusEnum.Approved,
};

sdk.store.placeOrderJson(req).then((res: PlaceOrderJsonResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## placeOrderRaw

Place a new order in the store

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "new-swagger-pet-store";
import { , PlaceOrderRawResponse } from "new-swagger-pet-store/dist/sdk/models/operations";
import { OrderStatusEnum } from "new-swagger-pet-store/dist/sdk/models/shared";

const sdk = new SDK();

const req: . = "laborum".encode();

sdk.store.placeOrderRaw(req).then((res: PlaceOrderRawResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
