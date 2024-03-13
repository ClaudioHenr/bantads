# Bantads

Este projeto se refere ao front end do trabalho final de Desenvolvimento de Aplicações Corporativas da UFPR.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.2.1.

# Disposição dos arquivos do projeto

As pastas foram criadas para que cada uma contenha os componentes necessarios para as funcionalidades de cada usuario da aplicação

Exemplo:
A pasta cliente terá
página inicial do cliente
página de edição
...

# Resalvas
Foi adicionado o arquivo proxy.conf.json devido a um erro de CORS ao tentar acessar a API
depois foi adicionado a seguinte linha no arquivo angular.json

"proxyConfig": "./src/proxy.conf.json"


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
