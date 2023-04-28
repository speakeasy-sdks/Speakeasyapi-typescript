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
