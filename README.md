una c# Notas y comentarios de desarrollo

## [Versión 0.1] 08/03/2025 - Emir Mena

Los cambios que hice fueron relativamente mínimos a lo que ya tenías en tu versión inicial.
Se añade el fondo dinámico [ArtDecoPattern.tsx](./src/components/reactbits/ArtDecoPattern.tsx).
Se refactoriza el código para tener más componentes y poder "jugar" más con estos, faltan por agregar comentarios.
Se modifica el anterior forms de busqueda de propiedad y se agrega un menú interactivo de 4 preguntas que se encuentra en [QuestionnaireForm.tsx](./src/components/home/Questionnaire.tsx) , pendiente de revision.
Se añadieron las imagenes de los servicios que se ofrecen en [Services.tsx](./src/components/home/Services.tsx)

## [Versión 0.1] 09/03/2025 - Mauricio May

Se agregaron las traducciones para el formulario de inicio, para el footer y tarjetas de servicios.
En la sección de Copyright se corrigió el año de "© {year} DOHMI. Todos los derechos reservados." a "© 2025 DOHMI. Todos los derechos reservados."
Se refactorizó el archivo de traducciones [](./¡18n/index.ts) para mejorar al mantenimiento y facilitar el proceso de agregar más traducciones, básicamente se segmentaron varias porciones de código de una misma clase y se agregaron comentarios en todo el archivo.

## [Versión 0.1.1] 09/03/2025 - Emir Mena

Se agregó la página de "Asesoría personalizada" su carpeta se encuentra en [AdvisoryForm.tsx](./src/components/advisory/AdvisoryForm.tsx) y se accede en ejecución del sitio web en la barra de navegación "Asesorías", aún no he agregado el vinculo en la landing page
/////NOTA IMPORTANTE//////
Cuidado al modificar manualmente el diseño de un componente generado por Bolt y después pedirle que haga algun cambio al mismo porque este suele sobreescribir lo que implementaste manualmente. POSIBLE SOLUCION: dejarle claro que no modifique los cambios realizados por ti.

## [Versión 0.1.2] 011/03/2025 - Mauricio May

Se agregó una página nueva y genérica con el texto "Próximamente" para todos los demás hiperviculos que no están implementados del Navbar que se implementarán hasta el segundo incremento.
Se agregaron todas las traducciones para la página de inicio, por lo cual toda la pagina de inicio ya se encuentra completamente traducida.
Además las tarjetas de servicios ya redirijen correctamente a la página correspondiente en el caso de la tarjeta de "Asesoría" y en las demás tarjetas redirije a la página de "Próximamente".
Se actualizó la imagen de la tarjeta de "Asesoría".

## [Versión 0.1.2] 04/04/2025 - Emir Mena

Se crea el acceso a la base de datos para el cuestionario y se le pasa valores null para garantizar que funcione.
y ya reorganicé un poco las carpetas (sin cambiarles el nombre para no editar las referencias en todos lados). 

componentes es todo lo visual y dentro de cada subcarpeta están los componentes de ese apartado visual adicional a una carpeta "hooks" que se encarga de toda la funcionalidad propia del front: por ejemplo en "home" está "cuestionario" y dentro de esta carpeta está el codigo visual y el codigo que asocia cada respuesta del usuario a lo que equivale esa respuesta, esto sirve porque es lo que tomará el backend para trabajar.

en data está información de despliegue generica y no funcional, por ejemplo las ladas de los paises y de momento las locaciones de méxico 

en i18n (se tiene que llamar así por lo que vi) está, las traducciones por paginas 

lib/supabase.ts son las funciones que conectan con el backend y guardan la información segun se necesite, toman la información de los "hooks" que anteriormente mencioné.