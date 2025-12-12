# 📚 Guía para Docentes
## Sistema de Evaluación de Pensamiento Matemático I

---

## 🎯 Introducción

Esta plataforma web permite evaluar a tus estudiantes en 6 temas clave de matemáticas mediante una interfaz interactiva y gamificada. Los resultados se guardan automáticamente en la nube y puedes consultarlos en cualquier momento desde el panel administrativo.

---

## 🌐 Acceso a la Plataforma

### Para Estudiantes
**URL Principal:** https://josepe-co.github.io/evaluacion-matematicas/

Los estudiantes accederán a esta dirección para realizar su evaluación.

### Para Docentes (Panel Admin)
**URL Administrativa:** https://josepe-co.github.io/evaluacion-matematicas/admin.html

⚠️ **IMPORTANTE:** Esta URL es privada. No la compartas con estudiantes.

---

## 👨‍🎓 Proceso de Evaluación para Estudiantes

### Paso 1: Registro
Al entrar a la plataforma, el estudiante debe proporcionar:
- **Nombre completo**
- **Grupo** (programación, matemáticas, etc.)
- **Semestre** (1-6)

### Paso 2: Selección de Temas
El estudiante verá 6 tarjetas con los siguientes temas:
1. 🧠 **Lógica** - Razonamiento lógico y proposiciones
2. 🔢 **Operaciones** - Números enteros y fraccionarios
3. 📊 **Porcentaje** - Cálculo de porcentajes
4. ⚖️ **Proporción** - Proporcionalidad directa e inversa
5. 🎯 **Jerarquía** - Orden de operaciones
6. 🚀 **Aplicación** - Problemas prácticos

**Características importantes:**
- Pueden realizar los temas en **cualquier orden**
- Cada tema tiene **5 preguntas**
- Tienen **3 intentos máximo** por tema
- Cada tema vale **16.67 puntos** (100 puntos en total)

### Paso 3: Responder Preguntas
- Las preguntas son de **opción múltiple**
- Deben seleccionar una respuesta y dar click en "Verificar"
- Al finalizar las 5 preguntas, se muestra la calificación del tema

### Paso 4: Finalizar Evaluación
Una vez completados todos los temas (o los que deseen), pueden:
- Ver sus estadísticas parciales
- Finalizar la evaluación
- Los datos se guardan **automáticamente** en Firebase

---

## 👨‍🏫 Panel Administrativo

### Acceso
1. Abre en tu navegador: https://josepe-co.github.io/evaluacion-matematicas/admin.html
2. La página cargará automáticamente todas las evaluaciones guardadas

### Funciones Disponibles

#### 📊 Estadísticas Generales
En la parte superior verás:
- **Total de Evaluaciones** completadas
- **Promedio General** de todos los estudiantes
- **Última Evaluación** registrada con fecha y hora

#### 🔍 Filtros de Búsqueda
Puedes filtrar las evaluaciones por:
- **Grupo:** Selecciona un grupo específico del dropdown
- **Semestre:** Filtra por semestre (1-6)
- **Nombre:** Busca a un estudiante específico

#### 📋 Tabla de Resultados
Muestra todos los estudiantes con:
- **Nombre completo**
- **Grupo y Semestre**
- **Calificación Final** (0-100)
- **Fecha y hora** de la evaluación
- **Botón "Ver Detalles"** para ver el desglose por tema

#### 📈 Vista Detallada
Al hacer click en "Ver Detalles" de un estudiante, verás:
- Calificación obtenida en cada uno de los 6 temas
- Número de intentos utilizados por tema
- Progreso visual con barras de color

#### 📥 Exportar Datos
- Click en el botón **"Exportar a CSV"**
- Se descarga un archivo Excel con todos los datos
- Incluye: nombre, grupo, semestre, calificaciones por tema, total

---

## 🎮 Modo de Prueba (Solo para Docentes)

Existe un modo especial para que pruebes la plataforma sin afectar los datos reales.

### Activación
1. Entra a la página principal
2. Presiona **Ctrl + Alt + P** (las 3 teclas al mismo tiempo)
3. Se iniciará automáticamente con datos de prueba

**Nota:** Los estudiantes NO conocen esta combinación de teclas.

### Características del Modo Prueba
- Usuario: "🧪 Modo Prueba"
- Puedes probar todas las funciones
- Los datos NO se guardan en Firebase
- Ideal para familiarizarte con la interfaz antes de usarla con estudiantes

---

## 📝 Recomendaciones Pedagógicas

### Antes de la Evaluación
1. ✅ Prueba tú mismo la plataforma usando el modo prueba
2. ✅ Verifica que el panel admin funcione correctamente
3. ✅ Explica a los estudiantes cómo acceder y usar la plataforma
4. ✅ Menciona que tienen 3 intentos por tema
5. ✅ Aclara que pueden hacer los temas en el orden que prefieran

### Durante la Evaluación
1. 📱 Comparte la URL principal con los estudiantes
2. 🕐 Establece un tiempo límite si lo consideras necesario
3. 👀 Monitorea en tiempo real desde el panel admin
4. 💬 Estate disponible para resolver dudas técnicas

### Después de la Evaluación
1. 📊 Revisa las estadísticas generales
2. 🔍 Identifica temas con calificaciones bajas
3. 📈 Analiza qué estudiantes necesitan apoyo adicional
4. 📥 Exporta los datos para tus registros
5. 💾 Guarda el CSV en tu sistema de control escolar

---

## 🔧 Solución de Problemas Comunes

### "No puedo acceder al panel admin"
- Verifica que estés usando la URL correcta con `/admin.html`
- Revisa tu conexión a internet
- Intenta en modo incógnito o borra el caché del navegador

### "No aparecen evaluaciones en el panel"
- Verifica que algún estudiante haya completado la evaluación
- Refresca la página (F5)
- Revisa que las reglas de Firebase estén configuradas correctamente

### "Un estudiante no puede avanzar a las preguntas"
- Asegúrate de que llenen todos los campos del formulario
- Verifica que tengan conexión a internet estable
- Pide que refresquen la página e intenten de nuevo

### "Los datos no se guardan"
- Verifica que las reglas de Firestore estén publicadas
- Confirma que el estudiante tenga internet al finalizar
- Revisa en la consola del navegador (F12) si hay errores

---

## 📊 Interpretación de Resultados

### Escala de Calificación
- **90-100:** Excelente dominio del tema
- **80-89:** Buen desempeño
- **70-79:** Desempeño satisfactorio
- **60-69:** Requiere refuerzo
- **0-59:** Necesita apoyo significativo

### Análisis por Tema
Si observas que varios estudiantes fallan en un tema específico:
1. Revisa tu metodología de enseñanza para ese tema
2. Considera dedicar más tiempo a ese contenido
3. Busca recursos adicionales o ejercicios de refuerzo
4. Organiza sesiones de tutoría grupal

### Uso de Intentos
- **1 intento:** Estudiante preparado y seguro
- **2 intentos:** Estudiante con dudas menores
- **3 intentos:** Estudiante con dificultades, necesita apoyo

---

## 🔒 Seguridad y Privacidad

### Protección de Datos
- Los datos se almacenan en Firebase (Google Cloud)
- Solo tú tienes acceso al panel administrativo
- Los estudiantes NO pueden ver evaluaciones de otros
- Las reglas de seguridad impiden lectura pública

### Recomendaciones
- No compartas la URL del panel admin
- Guarda tus credenciales de Firebase de forma segura
- Exporta regularmente los datos como respaldo
- Cumple con las políticas de privacidad de tu institución

---

## 📞 Soporte Técnico

### Contacto con el Desarrollador
Si necesitas:
- Agregar más preguntas
- Modificar temas
- Ajustar puntuaciones
- Reportar errores

**Repositorio GitHub:** https://github.com/Josepe-co/evaluacion-matematicas

---

## ✅ Lista de Verificación Rápida

Antes de usar la plataforma con estudiantes:

- [ ] He probado la evaluación completa en modo prueba
- [ ] Puedo acceder al panel administrativo
- [ ] Las reglas de Firebase están configuradas
- [ ] He exportado datos de prueba a CSV exitosamente
- [ ] Conozco la URL principal para compartir con estudiantes
- [ ] He explicado a los estudiantes cómo funciona la plataforma
- [ ] Tengo un plan para analizar los resultados

---

## 🎓 Conclusión

Esta plataforma te permite:
✅ Evaluar de forma moderna e interactiva
✅ Obtener resultados inmediatos
✅ Identificar áreas de oportunidad
✅ Hacer seguimiento individual y grupal
✅ Reducir carga administrativa

**¡Éxito en tus evaluaciones! 🚀**

---

*Guía creada para el Sistema de Evaluación de Pensamiento Matemático I*  
*Versión 1.0 - Diciembre 2025*
