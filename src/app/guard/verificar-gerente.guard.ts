import { CanActivateFn } from '@angular/router';

export const verificarGerenteGuard: CanActivateFn = (route, state) => {
  return true;

  /*
  //vai retorna um valor true/false
  canActivate(): boolean {

    //se o usuário for um gerente, irá permitir o acesso 
    if (this.authService.isGerente()) {
      return true;

    } else {
      // se o usuário não for um gerente, não vai permitir o acesso e vai voltar para a página inicial
      this.router.navigate(['/']);
      return false; 
    }
  */
};
