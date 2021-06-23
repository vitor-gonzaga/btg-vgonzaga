# btg-vgonzaga


btg-vgonzaga é uma biblioteca que contem dois componentes atualmente, sendo eles menu e buttons.
> A branch master está puxando a biblioteca pelo link: [Link biblioteca no npm](https://www.npmjs.com/package/btg-vgonzaga),
Já na branch develop, a mesma está apontando para a dist da bilioteca 
que está na aplicação, e para rodar de forma correta e necessario utilizar os  seguintes comandos: 

```
npm install
npm build btg-vgonzaga
ng serve
```

### Recursos componente Menu

- [x] DarkMode
- [x] Possibilita o carregamento por lazyload mediante a configuração do desenvolvedor

### Instalação

btg-vgonzaga requer [Node.js](https://nodejs.org/) v11+ para funcionar.

Instalação da biblioteca:

```
npm install btg-vgonzaga
```

# Modo de uso da Biblioteca

## Utilização do menu
O componente `lib-menu` onde recebe como parâmetro o nome de seus itens assim como a rota para cada item, além da opção de darkMode .
Método de implementação da lib: 
```
 <lib-menu [menuValues]="menu"></lib-menu>
```
O parâmetro `menuValues` deverá seguir a interface abaixo: 
###### interface:
```
{
  isDarkMode: boolean,
  menuItems: [
    {
      menuItemName: string,
      menuItemRoute: string,
    }
  ]
};
```


---
## Utilização do Botão 
Para utilizar o componente `lib-button` é necessario passar alguns parâmetro.

Método de implementação:

```
 <lib-button [buttonValues]="button"></lib-button>
```
 
O componente button contem um Input `buttonValues` do tipo da interface abaixo:

###### Interface:
```
{
    name: string,
    type: Enum
};
```

###### Enum:
```
SUCCESS,
INFO,
ERROR,
```



## Licença

MIT

**Software Livre**
