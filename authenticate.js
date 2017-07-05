import server from './index';
import { handleOk } from './handlers';

export default class {
  static login(email = null, password = null) {
    return server.post(`/login`, {
      email,
      password,
    })
    .then(handleOk);
  }
  
  static signUp(params) {
    
  }
  
  static logout() {
    
  }
  
  static verifySession() {
    
  }
  
  static refreshSession() {
    
  }
  
  static restorePassword(email = null) {
    
  }
}