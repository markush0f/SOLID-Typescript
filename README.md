# SOLID en JavaScript/TypeScript

## ✨ Principios SOLID
Los principios SOLID son un conjunto de reglas y mejores prácticas para diseñar software más mantenible y escalable. En este proyecto, aplicamos estos principios en JavaScript/TypeScript.

---

## 📈 Principios Explicados

### 1. ✨ Principio de Responsabilidad Única (SRP - Single Responsibility Principle)
Cada clase o módulo debe tener una “sólo una razón para cambiar”. Es decir, debe encargarse de una sola responsabilidad dentro del sistema.

**Ejemplo:** Separar la lógica de autenticación de la lógica de almacenamiento de usuarios.

---

### 2. 🔒 Principio de Abierto/Cerrado (OCP - Open/Closed Principle)
El código debe estar **abierto para la extensión**, pero **cerrado para la modificación**.

**Ejemplo:** Usar clases base e interfaces para agregar nuevas funcionalidades sin modificar el código existente.

---

### 3. 🐶 Principio de Sustitución de Liskov (LSP - Liskov Substitution Principle)
Las subclases deben poder reemplazar a sus clases base sin alterar el comportamiento del programa.

**Ejemplo:** Si una clase `Animal` tiene un método `hacerSonido()`, una subclase `Perro` debe poder usar este método sin romper la lógica del código.

---

### 4. ⚙️ Principio de Segregación de Interfaces (ISP - Interface Segregation Principle)
Una clase no debe verse obligada a implementar interfaces que no necesita.

**Ejemplo:** En lugar de una interfaz gigante con muchos métodos, es mejor dividirla en interfaces más pequeñas y específicas.

---

### 5. 🛠️ Principio de Inversión de Dependencias (DIP - Dependency Inversion Principle)
Los módulos de alto nivel no deben depender de módulos de bajo nivel, sino de abstracciones.

**Ejemplo:** Usar inyección de dependencias en lugar de crear instancias directamente dentro de una clase.

---

## 🛠️ Tecnologías Utilizadas
- **TypeScript**
- **Principios SOLID**


