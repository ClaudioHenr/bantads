import { CanActivateFn } from '@angular/router';

export const verificarClienteGuard: CanActivateFn = (route, state) => {
  return true;

  /*
  //vai retorna um valor true/false
  canActivate(): boolean {

    //se o usuário for um cliente, irá permitir o acesso 
    if (this.authService.isCliente()) {
      return true;

    } else {
      // se o usuário não for um cliente, não vai permitir o acesso e vai voltar para a páginax inicial
      this.router.navigate(['/']);
      return false; 
    }
    */
};

