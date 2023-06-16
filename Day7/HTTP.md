**HTTP**

- HyperText Transfer Protocol is used to exchnage the information over the internet.

**HTTP-Verbs(Methods)**

- GET 
- POST
- DELETE
- PUT
- PATCH
- HEAD
- OPTIONS

**HTTP Status Codes**
2xx- success
- 200: OK, the request is successful and provided the requested reponse
- 201:Created
- 202: Accepted
- 204:No Content

3xx redirection 
- 301: Moved Permnenntly
- 302: Found
- 304: Not Modified

4xx: client error
- 400: Bad Request
- 401: Unauthorized
- 404: Not Found

5xx: server errors
- 500: Interbal server error
- 503:  Server Unavilabe


**JSON**

- JavaScript Object Notation.
- Used to trasmit data between server and web client. 
- It is language-agnostic(can be parsed and used by various languages).


**JSON Server**

```
npm install json-server
 ```
```
json-server --watch <filepath-- filename.json> --port 8081
 ```
- you can change the port number.
```
json-server --watch db.json
```
```
npx json-server -w db.json -p 8080
```


