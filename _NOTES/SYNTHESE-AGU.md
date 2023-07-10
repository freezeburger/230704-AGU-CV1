# Angular

**ng** pour Angular.

| Framework de composants web pour l'interface utilisateur.

## Transversal

- Un polyfill est un bout de code (généralement en JavaScript sur le web) utilisé pour fournir des fonctionnalités récentes sur d'anciens navigateurs qui ne les supportent pas nativement.

## Outils

- NodeJS - Est un cadre d'éxécution machine (_runtime_) supportant le JavaScript.
- NPM (Node Package Mananger) - Permet l'installation de _package_ (scripts) pour node JS.
- MDN - https://developer.mozilla.org/fr/ Documentation WEB (HTMl/CSS/JS)
- https://angular.io/ Documentation Angular
- TypeScript : https://www.typescriptlang.org/
- Angular Devtools : https://angular.io/guide/devtools

### TypeScript

| TypeScript apporte une surcouche de **Typage Statique** au language JavaScript ( c'est un _subset_ JavaScript)

**Typage Statique** : Mécanisme de vérification des type lors du _build_ (création du livrable en pahse de développement).
Le code TypeScript est _transpilé_ en JavaScript.

**Déclaration de Type**

```ts
//let identifiant:Type;

let name: string;

// Type Primitif
/**
 * number
 * string
 * boolean
 */
```

**Alias de Type**
Permet de redéfinir un type.

```ts
type UserName = string;

const name: UserName = "Bill";
```

**Interface**
Permet décrire un structure complexe.

```ts
interface User {
  name: string;
  email: string;
  connect(password: string): void;
}
```

# Angular Framework

| Encapsule les bonnes pratiques de mise en production du code.

- Génération de _hash_ de signature de contenu ( pour le cache ).
- Concaténation du code.
- Minification du code.

**5 Concepts fondamentaux**

- Module
  - Composant
  - Directive
  - Pipe
- Service

## @angular/cli

**cli** pour _command line interface_ ou _interface en ligne de commande_
| Est un outil de productivité pour le travail sur une application angular.

**Création de projet**
`ng new PROJECT_NAME`

**Création de livrable**
`ng build`

**Lancer le mode développment**
`ng serve`

**Générer des élément applicatifs**
`ng generate PATH/NAME`

- Module `ng g m PATH/NAME`
- Composant `ng g c PATH/NAME`
- Directive `ng g d PATH/NAME`
- Pipe `ng g p PATH/NAME`
- Service `ng g s PATH/NAME`

## Angular Application

Une application Angular est un ensemble (arbre) de composants.

|Définir la granularité dfes composants (vue, ui, ...)

## Méthodologie

1. Créer le project Angular.
2. Analyse du besoin et des mockups (maquette fonctionnelles)
3. Définir (planifier) les composants (vue utilitaires....).
4. Créer les interfaces TS.
5. Créer l'architecture de module.
6. Générer le code (composants, services...)

## Utiliser une librairie CSS

**installation**
`npm i PACKAGE_CSS`

**référencement dans le fichier angular.json**

| Le fichier angular.json est la configurationde `@angular/cli

```json
...
  "styles": [
    "node_modules/bootstrap/dist/css/bootstrap.css",
    "src/styles.scss"
  ],
...
```

## Angular Module

Un _module_ est un ensemble de _composants_, ( _pipe_ , _directive_ )

## Composant

Un composant possède un nom composé `<app-div>` pour les différencier des balises HTML `<div>`
Par défaut Angular ajoute le préfice **app**

| Unité partielle de la vue Web

- HTML
- CSS
- JavaScript (en TypeScript)

## Composant Communication

Les \*décorateurs** `@Input` et `@Output` permettent la mise en place de la communication entre composant sur **un\*\* niveau.

- `@Input` permet la communication **parent > enfant**
  - Permet la réception de valeur via un propriété.
- `@Output` permet la communication **enfant > parent**
  - DOIT être un `EventEmitter`

```ts
@Component({
  selector:'app-my-component',
  template:`
    Content of template
  `
})
export class MyComponent(){

  @Input() value = '';
  @Output() customEvent = new EventEmitter();

}
```

```html
<!-- Utilisation -->

<app-my-component
  [value]="expression"
  (customEvent)="callback()"
></app-my-component>
```

## Composant Template

Le **data-binding** ou (liaison de données) est l'action effectuée par angular pour lier les valeurs de la `classe` au `template` HTML du composant.

```html
<!-- (DSL) Syntaxe spécifique au Data Binding angular -->

<!-- Text Binding  -->
{{expressionAsString}}

<!-- Event Binding -->
<element (event)="expressionAsFunction"></element>

<!-- Property Binding -->
<element [attributeOrInput]="expressionAsValue"></element>

<!-- Directive -->
<element *ngIf="expressionAsBoolean"></element>
<element *ngFor="let myVar of myIterableCollection">{{myVar}}</element>

<element [ngClass]="expressionAsObjectOrStringOrStringArray"></element>
<element [ngStyle]="expressionAsObject"></element>

<ng-content></ng-content>

<ng-container></ng-container>

```

## Component LifeCycle

| Angular observe des étapes clés lors de la restiturion d'un composant.
Il est possible de déclencher des traitement en se raccrochant (`hook`) à ces étapes.

1. Création `constructor`
2. Initialisation dans le DOM `ngOnInit`
*   2. Changement des @Input `ngOnChanges`
3. Changement dans le DOM `ngDocheck`
4. Destruction `ngOnDestory`

## Service

| Un service est code logique indépendant de la vue.

Le mécanisme **d'injection** permet l'accès à un service.

```ts
@Component({
  selector:'app-my-component',
  ...
})
export class MyComponent(){

  service = inject(ServiceClassName)

}
```

## Observable

Les Observables de `RxJs` sont une implémentation du **Pattern Observer**

| Le **Pattern Observer** est une solution à la relation **1-N**

- Un observable est une source capable d'émettre des informations
- Les observers qui écoutent par souscription.

Angular propose le pipe `async` pour simplifier la souscription d'observable depuis un template.

La méthode `next` permet la publication d'une nouvelle valeur sur un oservable. 


## Angular Routing

Permet la navigation entre les vues (Des Composant dédiés)

La navination de sbase sur définitionde `Routes`

```ts
const routes: Routes = [
  {
    path: 'home',
    component: ViewDiscountComponent
  },
  {
    path: 'list',
    component: ViewListComponent
  },
  {
    path: 'product',
    component: ViewDetailComponent
    
  },
  {
    path:'**',
    redirectTo:'home',
    pathMatch:'full'
  }
];
```