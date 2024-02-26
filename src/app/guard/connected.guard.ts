import { CanActivateFn } from '@angular/router';

export const connectedGuard: CanActivateFn = (route, state) => {


  if(localStorage.getItem("token") == null)
    return false;

  return true;
};
