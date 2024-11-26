# Test frontend

## Descripción
Para esta prueba se debe de crear un proyecto angular con una de las versión más actuales, el proyecto debe de contar con 2 rutas.
- Listado de Managers (Ruta principal)
- Creación/Edición de Managers

## Listado de Managers
Se debe de maquetar  la interfaz `managers.pdf`, el objetivo de esta vista es tener un listao de managers, que se pueda filtrar por la busqueda de nombre y tenga los links de crear y editar Manager.

Los campos que se deben de visualizar en el listado de Manager son:


**Campo:** Name 

**Tipo:** String

---

**Campo:** Email 

**Tipo:** String

---

**Campo:** Company 

**Tipo:** String

---

**Campo:** WhatsApp 

**Tipo:** String

---

**Campo:** Created At 

**Tipo:** String

---

**Campo:** Options 

**Tipo:** Button/Link

**Descripción:** 
- Botón Editar: Debe de existir un link editar el cual al hacer click debe de llevarnos a la vista de edición de Manager
- Botón Eliminar: Debe de existir un botón de eliminar, el cual al hacer click mande un alert para confirmar si se desea eliminar el registro, Si el usuario confirma la acción se debe de remover el registro de la lista de managers, de lo contrario no se realiza ninguna acción.

---

## Creación/Edición de Managers
Se debe de maquetar  la interfaz `creacion-edición-managers.pdf`, el objetivo de esta vista es tener un formulario que nos permita crear/editar un registro de Managers. Los campos a agregar al formulario son:


**Campo:** Company 

**Tipo:** String

**Requerido:** Si

--- 

**Campo:** Name 

**Tipo:** String

**Requerido:** Si

---

**Campo:** Country 

**Tipo:** String

**Requerido:** No

---

**Campo:** WhatsApp/Telephone 

**Tipo:** String

**Requerido:** Si


---

**Campo:** Email

**Tipo:** Email

**Requerido:** Si

---

En esta vista el usuario debe de poder guardar o actualizar un Manager siempre y cuando el formulario esten llenos todos los campos requeridos, de lo contrario se puede indicar cuales son los campos que contienen error.
Después de guardar o actualizar el registro, este item debe de agregarse al listado de Managers y hacer el redirect a dicha ruta.