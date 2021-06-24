# btg-vgonzaga

btg-vgonzaga é uma biblioteca que contem dois componentes atualmente, sendo eles menu e buttons.

> Para utiliza-la de forma correta e necessario rodar o seguinte comando dentro da sua aplicação:

```
npm i btg-vgonzaga
```

### Link do código fonte da biblioteca

#[GitHub](https://github.com/vitor-gonzaga/btg-vgonzaga)

### Recursos componente Menu

- [x] DarkMode
- [x] Possibilita o carregamento por lazyload mediante a configuração do desenvolvedor

### Recursos componente Button

- [x] Retorno do evento de click no botão
- [x] Conteúdo e tipo customizável

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
