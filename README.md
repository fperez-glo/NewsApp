El proyecto es una aplicación de noticias construida con un enfoque Clean Architecture aplicado al Frontend junto con el patron MVVM. Es una aproximacion ya que hay N formas de aplicarla y cada uno a su manera.
Consta de 3 capas, una capa de Data (o acceso a datos), una capa de Dominio (o lógica de negocios) y una capa de UI (o presentación).
A su vez utiliza algunas librerias externas como mobx, mobx-react-lite y awilix que acompañan y facilitan la implementacion de este enfoque y a utilizar algunos de los principios SOLID.

- "mobx" es un global state manager unidireccional, es framework agnostic (su API funciona practicamente con clases de Javascript) y ayuda a implementar el patron observer dentro de la aplicacion.
- "mobx-react-lite" es una libreria que ayuda a implementar el patron observer dentro de la aplicacion react y consumirla en las vistas.
- "awilix" es el contenedor de injeccion de dependencias en la aplicacion. Lo bueno de tener esto es que facilita ampliamente la injeccion automatica de clases y lo deja ordenado en el codigo. A su vez la injeccion de dependencias facilita el catching de errores porque suceden en tiempo de compilacion ya que cada clase conoce sus dependencias.

Otras librerias que se utilizan:

- "i18next" y "react-i18next" para las traducciones.
- "react-query" para la gestion de estados de carga y caching de datos.
- "prettier" para normalizar el formato del codigo.
- "lucide-react-native" es un paquete de iconos que me gusta mucho.
- "nativewind" para el estilo de los componentes.
  PD: Con siceridad.. esto fue mas un experimento porque queria ver que tan maduro estaba esta liberia de tailwindCss para react-native.
  La realidad es que si mejora la velocidad de desarrollo en cuanto a darle estilo a los componentes pero react-native esta muy atado a los CSS StyleSheet e inevitablemente terminas usandolos. A mi personalmente no me gusta que quede mezclado porque siento que confunde a mi y al equipo si no esta familiarizado.
- "react-native-async-storage/async-storage" para guardar los datos en el dispositivo. Se utilizo para almacenar la configuracion y los bookmarks de las noticias.
- "axios" para las requests HTTP.

  --- Ventajas de la arquitectura: ---

- El proyecto está diseñado para ser modular (framework agnostic), lo que significa que si se quisiera mover a otro framework de Javascript (como puede ser Vue por ejemplo) se podria reutilizar la mayor parte de la aplicacion. (Rara vez sucede..)
- Se puede agregar, remover o extender funcionalidades facilmente sin afectar el resto del código.
- Por un lado mejora la estructura del proyecto ya que lo que se intenta es que cada capa cumpla con determinada funcion. Por ejemplo en el caso de la capa de presentacion o UI se beneficia ampliamente ya que queda muy desaclopada del negocio y como veran los componentes son super escuetos en cuanto a lineas de codigo. Solo se encargan de presentar la informacion que le envie el ViewModel.
- Otra ventaja que tiene es que en caso de tener diferentes fuentes de datos externas, este patron permite que se pueda mapear facilmente y que las demas capas no se enteren de donde provienen los datos.
- Desacoplamiento de responsabilidades, cada capa se encarga de un solo tema y no de otros. Esto lo hace a traves contratos/abstracciones.

  --- Desventajas que yo le veo a este patron: ---

- Depende mucho del alcance del proyecto y la escalabilidad que se le quiera dar a la aplicacion.
- Para aplicaciones como esta que son muy chicas no tiene mucho sentido aplicarlo, para eso esta el enfoque clasico que se aplica en la mayoria de apps y que vez en youtube de los influencers de programacion.
- Tiene mucho boilerplate/repeticion de codigo en cuando a capas y archivos que se tienen que generar para implementar el patron (Repositories, casos de uso, entidades, DTO's, ViewModels).
- El equipo tiene que estar alineado con el patron ya que sino se la estructura. Puede que algunos de los devs no esten muy familiarizados y lleve curva de aprendizaje al principio.

En cuando a los componentes visuales estan en carpetas con un enfoque Atomic Desing que consta de componentes que van desde Atoms, Molecules, Organisms y Page.

PD: Con respecto a la carga de las NOTICIAS y USUARIOS. Las notificas las deje mockeadas con datos reales para que queden mejor visualmente pero en caso de tener que implementar la llamada a la API seria tan facil como:

1.  Modificar el NewsModel (DTO) para adaptarlo al JSON que llega con los posts y asi mapearlo a la entidad de Dominio "News" (que es el que termina utilizando la APP).
2.  Luego en el NewsRepository cambiar el metodo "getNews" y "getNewsById" para que ejecuten el metodo this.\_http.get("https://jsonplaceholder.typicode.com/posts") y this.\_http.get("https://jsonplaceholder.typicode.com/posts/{id}") respectivamente.
    Con respecto a los USUARIOS, estos si se estan consumiendo desde el endpoint "https://jsonplaceholder.typicode.com/users".

Aclaraciones: Con respecto a Android no tuve inconvenientes (se ejecuto con un Pixel 4 API 30), en cuanto a IOS les pido disculpas ya que no pude buildearlo. Tengo algun problema con las dependencias del SDK 51 de Expo y Xcode (pods, version de ruby). En el medio, tambien tuve actualizaciones al SO de mi maquina entre otras cosas y algo se rompio ahi (creeria que es un tema de configuracion pero no pude solucionarlo).
No quiero que suene a excusas pero no queria perder mas tiempo en eso sinceramente, lo voy a revisar con mas tiempo.

Instrucciones para Levantar y Ejecutar el Proyecto

1. Requisitos previos:

   - Tener instalado Node.js (Yo tengo una version 22).
   - Instalar Expo CLI globalmente: "npm install -g expo-cli"

2. Instalar dependencias: "npm install"
3. Ejecutar el proyecto: "npm run android" o "npm run ios"

En el package.json hay informacion de las veriones en el apartado de "engines".
