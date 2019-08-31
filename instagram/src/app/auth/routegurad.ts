
import { CanActivate} from '@angular/router';
import { auth } from 'firebase/app';

export class RouteGuard implements CanActivate{
    canActivate(){
            if(auth().currentUser){
                return true;
            }else{
                 return false;
            }
        }
  }

