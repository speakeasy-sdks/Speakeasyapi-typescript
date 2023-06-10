# user

## Overview

Operations about user

### Available Operations

* [createUserForm](#createuserform) - Create user
* [createUserJson](#createuserjson) - Create user
* [createUserRaw](#createuserraw) - Create user
* [createUsersWithListInput](#createuserswithlistinput) - Creates list of users with given input array
* [deleteUser](#deleteuser) - Delete user
* [getUserByName](#getuserbyname) - Get user by user name
* [loginUser](#loginuser) - Logs user into the system
* [logoutUser](#logoutuser) - Logs out current logged in user session
* [updateUserForm](#updateuserform) - Update user
* [updateUserJson](#updateuserjson) - Update user
* [updateUserRaw](#updateuserraw) - Update user

## createUserForm

This can only be done by the logged in user.

### Example Usage

```typescript
import { SDK } from "new-swagger-pet-store";
import { CreateUserFormResponse } from "new-swagger-pet-store/dist/sdk/models/operations";

const sdk = new SDK();

sdk.user.createUserForm({
  email: "john@email.com",
  firstName: "John",
  id: 10,
  lastName: "James",
  password: "12345",
  phone: "12345",
  userStatus: 1,
  username: "theUser",
}).then((res: CreateUserFormResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [shared.User](../../models/shared/user.md)                   | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.CreateUserFormResponse](../../models/operations/createuserformresponse.md)>**


## createUserJson

This can only be done by the logged in user.

### Example Usage

```typescript
import { SDK } from "new-swagger-pet-store";
import { CreateUserJsonResponse } from "new-swagger-pet-store/dist/sdk/models/operations";

const sdk = new SDK();

sdk.user.createUserJson({
  email: "john@email.com",
  firstName: "John",
  id: 10,
  lastName: "James",
  password: "12345",
  phone: "12345",
  userStatus: 1,
  username: "theUser",
}).then((res: CreateUserJsonResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [shared.User](../../models/shared/user.md)                   | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.CreateUserJsonResponse](../../models/operations/createuserjsonresponse.md)>**


## createUserRaw

This can only be done by the logged in user.

### Example Usage

```typescript
import { SDK } from "new-swagger-pet-store";
import { CreateUserRawResponse } from "new-swagger-pet-store/dist/sdk/models/operations";

const sdk = new SDK();

sdk.user.createUserRaw("quasi".encode()).then((res: CreateUserRawResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [Uint8Array](../../models//.md)                              | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.CreateUserRawResponse](../../models/operations/createuserrawresponse.md)>**


## createUsersWithListInput

Creates list of users with given input array

### Example Usage

```typescript
import { SDK } from "new-swagger-pet-store";
import { CreateUsersWithListInputResponse } from "new-swagger-pet-store/dist/sdk/models/operations";

const sdk = new SDK();

sdk.user.createUsersWithListInput([
  {
    email: "john@email.com",
    firstName: "John",
    id: 10,
    lastName: "James",
    password: "12345",
    phone: "12345",
    userStatus: 1,
    username: "theUser",
  },
  {
    email: "john@email.com",
    firstName: "John",
    id: 10,
    lastName: "James",
    password: "12345",
    phone: "12345",
    userStatus: 1,
    username: "theUser",
  },
  {
    email: "john@email.com",
    firstName: "John",
    id: 10,
    lastName: "James",
    password: "12345",
    phone: "12345",
    userStatus: 1,
    username: "theUser",
  },
  {
    email: "john@email.com",
    firstName: "John",
    id: 10,
    lastName: "James",
    password: "12345",
    phone: "12345",
    userStatus: 1,
    username: "theUser",
  },
]).then((res: CreateUsersWithListInputResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [shared.User[]](../../models//.md)                           | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.CreateUsersWithListInputResponse](../../models/operations/createuserswithlistinputresponse.md)>**


## deleteUser

This can only be done by the logged in user.

### Example Usage

```typescript
import { SDK } from "new-swagger-pet-store";
import { DeleteUserResponse } from "new-swagger-pet-store/dist/sdk/models/operations";

const sdk = new SDK();

sdk.user.deleteUser({
  username: "Weston_Thiel",
}).then((res: DeleteUserResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.DeleteUserRequest](../../models/operations/deleteuserrequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.DeleteUserResponse](../../models/operations/deleteuserresponse.md)>**


## getUserByName

Get user by user name

### Example Usage

```typescript
import { SDK } from "new-swagger-pet-store";
import { GetUserByNameResponse } from "new-swagger-pet-store/dist/sdk/models/operations";

const sdk = new SDK();

sdk.user.getUserByName({
  username: "Whitney.Bednar",
}).then((res: GetUserByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.GetUserByNameRequest](../../models/operations/getuserbynamerequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.GetUserByNameResponse](../../models/operations/getuserbynameresponse.md)>**


## loginUser

Logs user into the system

### Example Usage

```typescript
import { SDK } from "new-swagger-pet-store";
import { LoginUserResponse } from "new-swagger-pet-store/dist/sdk/models/operations";

const sdk = new SDK();

sdk.user.loginUser({
  password: "cum",
  username: "Aiyana.Batz",
}).then((res: LoginUserResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [operations.LoginUserRequest](../../models/operations/loginuserrequest.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.LoginUserResponse](../../models/operations/loginuserresponse.md)>**


## logoutUser

Logs out current logged in user session

### Example Usage

```typescript
import { SDK } from "new-swagger-pet-store";
import { LogoutUserResponse } from "new-swagger-pet-store/dist/sdk/models/operations";

const sdk = new SDK();

sdk.user.logoutUser().then((res: LogoutUserResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.LogoutUserResponse](../../models/operations/logoutuserresponse.md)>**


## updateUserForm

This can only be done by the logged in user.

### Example Usage

```typescript
import { SDK } from "new-swagger-pet-store";
import { UpdateUserFormResponse } from "new-swagger-pet-store/dist/sdk/models/operations";

const sdk = new SDK();

sdk.user.updateUserForm({
  user: {
    email: "john@email.com",
    firstName: "John",
    id: 10,
    lastName: "James",
    password: "12345",
    phone: "12345",
    userStatus: 1,
    username: "theUser",
  },
  username: "Wilfrid.Carter",
}).then((res: UpdateUserFormResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.UpdateUserFormRequest](../../models/operations/updateuserformrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.UpdateUserFormResponse](../../models/operations/updateuserformresponse.md)>**


## updateUserJson

This can only be done by the logged in user.

### Example Usage

```typescript
import { SDK } from "new-swagger-pet-store";
import { UpdateUserJsonResponse } from "new-swagger-pet-store/dist/sdk/models/operations";

const sdk = new SDK();

sdk.user.updateUserJson({
  user: {
    email: "john@email.com",
    firstName: "John",
    id: 10,
    lastName: "James",
    password: "12345",
    phone: "12345",
    userStatus: 1,
    username: "theUser",
  },
  username: "Jayden.Carter88",
}).then((res: UpdateUserJsonResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.UpdateUserJsonRequest](../../models/operations/updateuserjsonrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.UpdateUserJsonResponse](../../models/operations/updateuserjsonresponse.md)>**


## updateUserRaw

This can only be done by the logged in user.

### Example Usage

```typescript
import { SDK } from "new-swagger-pet-store";
import { UpdateUserRawResponse } from "new-swagger-pet-store/dist/sdk/models/operations";

const sdk = new SDK();

sdk.user.updateUserRaw({
  requestBody: "commodi".encode(),
  username: "Terrill69",
}).then((res: UpdateUserRawResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.UpdateUserRawRequest](../../models/operations/updateuserrawrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.UpdateUserRawResponse](../../models/operations/updateuserrawresponse.md)>**

