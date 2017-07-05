# api-service

### Example

```javascript
import server from 'api-service';
import authApi from 'api-service/authenticate';
import usersApi from 'api-service/users';
import { apiParams: { secureToken } } from 'config';


authApi.login('test.user@example.com', 'qwerty')
.then(r => {
  
  // set secure token after successful login
  server.interceptors.request.use((config) => {
    config.headers[secureToken] = r.data.token;
  });
  
  // go to a secure content
  
})
.catch(err => {
  // handle error
});
```