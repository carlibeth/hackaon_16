# hackaton-vuex
semana 16 pachaqtec

    PREGUNTA 1 ¿Qué es vuex ? Ventajas y desventajas
    RESPUESTA: 
    Vuex es una librería de gestión de estados, exclusiva para vue, a traves de la cual el desarrollador puede administrar datos compartidos entre multiples componentes     y en       ocasiones no relacionados. Presenta un flujo de datos unidireccional que conduce a un diseño y un razonamiento más simples.
    VENTAJAS:
    *Para las aplicaciones que dependen en gran medida de grandes fuentes de datos, la gestión de estados adecuada se vuelve crucial para evitar escenarios desordenados.
    *Permite la fácil comunicación entre componentes distantes o no relacionados.
    DESCENTAJAS:
    *Vuelve lento el proceso de desarrollo.
    *Sólo es útil para proyectos de gran escala y gran gestón de datos. 
    
    PREGUNTA 2 ¿CUÁLES SON LOS PRINCIPALES CONCEPTOS DE VUEX? ejemplificar
    RESPUESTA:
    1) El state: es la parte del store donde se tienen los valores del sistema, estos valores estarán en un objeto desde donde se tendrá mapeado el estado.
    2) Las mutations:  seran los unicos responsables de modificar el estado del store. Facilitara el estado actual y a partir de eso  se podrá modificar.
    3) Las actions: serán las encargadas de disparar mutations, también serán las encargadas de hacer las llamada asíncronas y cuando estas se resuelvan podremos modificar el         estado a través de un mutation.
    
    PREGUNTA 3 ¿POR QUÉ Y PARA QUÉ SE NECESITARIA UTILIZAR UN ADMINISTRADOR DE ESTADOS'
    RESPUESTA: 
    La administración de estatado centralizado facilita la comprensión de qué tipo de mutaciones podrían ocurrir y cómo se activan. Ahora, cuando algo sale mal, también se tendrá     un registro de lo que sucedió antes del error.
    
    


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
