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
import { AxiosError } from "axios";
import { SDK } from "new-swagger-pet-store";
import { CreateUserFormResponse, User } from "new-swagger-pet-store/dist/sdk/models/operations";

const sdk = new SDK();

const req: shared.User = {
  email: "john@email.com",
  firstName: "John",
  id: 10,
  lastName: "James",
  password: "12345",
  phone: "12345",
  userStatus: 1,
  username: "theUser",
};

sdk.user.createUserForm(req).then((res: CreateUserFormResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## createUserJson

This can only be done by the logged in user.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "new-swagger-pet-store";
import { CreateUserJsonResponse, User } from "new-swagger-pet-store/dist/sdk/models/operations";

const sdk = new SDK();

const req: shared.User = {
  email: "john@email.com",
  firstName: "John",
  id: 10,
  lastName: "James",
  password: "12345",
  phone: "12345",
  userStatus: 1,
  username: "theUser",
};

sdk.user.createUserJson(req).then((res: CreateUserJsonResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## createUserRaw

This can only be done by the logged in user.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "new-swagger-pet-store";
import { , CreateUserRawResponse } from "new-swagger-pet-store/dist/sdk/models/operations";

const sdk = new SDK();

const req: . = "quasi".encode();

sdk.user.createUserRaw(req).then((res: CreateUserRawResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## createUsersWithListInput

Creates list of users with given input array

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "new-swagger-pet-store";
import { , CreateUsersWithListInputResponse } from "new-swagger-pet-store/dist/sdk/models/operations";

const sdk = new SDK();

const req: . = [
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
];

sdk.user.createUsersWithListInput(req).then((res: CreateUsersWithListInputResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## deleteUser

This can only be done by the logged in user.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "new-swagger-pet-store";
import { DeleteUserRequest, DeleteUserResponse } from "new-swagger-pet-store/dist/sdk/models/operations";

const sdk = new SDK();

const req: DeleteUserRequest = {
  username: "Weston_Thiel",
};

sdk.user.deleteUser(req).then((res: DeleteUserResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getUserByName

Get user by user name

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "new-swagger-pet-store";
import { GetUserByNameRequest, GetUserByNameResponse } from "new-swagger-pet-store/dist/sdk/models/operations";

const sdk = new SDK();

const req: GetUserByNameRequest = {
  username: "Whitney.Bednar",
};

sdk.user.getUserByName(req).then((res: GetUserByNameResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## loginUser

Logs user into the system

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "new-swagger-pet-store";
import { LoginUserRequest, LoginUserResponse } from "new-swagger-pet-store/dist/sdk/models/operations";

const sdk = new SDK();

const req: LoginUserRequest = {
  password: "cum",
  username: "Aiyana.Batz",
};

sdk.user.loginUser(req).then((res: LoginUserResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## logoutUser

Logs out current logged in user session

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "new-swagger-pet-store";
import { LogoutUserResponse } from "new-swagger-pet-store/dist/sdk/models/operations";

const sdk = new SDK();

sdk.user.logoutUser().then((res: LogoutUserResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## updateUserForm

This can only be done by the logged in user.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "new-swagger-pet-store";
import { UpdateUserFormRequest, UpdateUserFormResponse } from "new-swagger-pet-store/dist/sdk/models/operations";

const sdk = new SDK();

const req: UpdateUserFormRequest = {
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
};

sdk.user.updateUserForm(req).then((res: UpdateUserFormResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## updateUserJson

This can only be done by the logged in user.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "new-swagger-pet-store";
import { UpdateUserJsonRequest, UpdateUserJsonResponse } from "new-swagger-pet-store/dist/sdk/models/operations";

const sdk = new SDK();

const req: UpdateUserJsonRequest = {
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
};

sdk.user.updateUserJson(req).then((res: UpdateUserJsonResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## updateUserRaw

This can only be done by the logged in user.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "new-swagger-pet-store";
import { UpdateUserRawRequest, UpdateUserRawResponse } from "new-swagger-pet-store/dist/sdk/models/operations";

const sdk = new SDK();

const req: UpdateUserRawRequest = {
  requestBody: "commodi".encode(),
  username: "Terrill69",
};

sdk.user.updateUserRaw(req).then((res: UpdateUserRawResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
