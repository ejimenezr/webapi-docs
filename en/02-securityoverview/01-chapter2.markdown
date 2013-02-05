# Security Overview

TradeStation WebAPI authorization is based on OAuth 2.0.

All WebAPI clients require an Access Token in order to access protected resources. The application flow for obtaining a token will vary from application to application but all tokens are issued via the `/security/authorize` endpoint which grants tokens based on "Grant Types." Currently, WebAPI supports OAuth 2.0's Authorization Code, Client Credentials, and Password grant types.

The WebAPI issues Access Tokens of type Bearer.

    Bearer Token
        A security token with the property that any party in possession of
        the token (a "bearer") can use the token in any way that any other
        party in possession of it can. Using a bearer token does not
        require a bearer to prove possession of cryptographic key material
        (proof of poessession).

Notes:

* Users authorizing an API client must have their Multi-Factor questions and answers defined, otherwise Authorization will fail.
* The Password grant type is disabled since it requires the end-user to provide login credentials to the API Client directly.
* All requests require HTTPS. Some examples may be from a test environment and use HTTP for demonstration only.

## Application Flow

### Native Mobile Application with Embedded Browser Flow

This flow is based on the Web Server flow but uses an embedded browser for obtaining the authorization code.
