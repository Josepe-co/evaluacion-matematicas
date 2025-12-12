# 🔥 Guía de Configuración de Firebase

Sigue estos pasos para configurar Firebase y que tu aplicación pueda guardar datos:

## Paso 1: Crear Proyecto en Firebase

1. Ve a [Firebase Console](https://console.firebase.google.com/)
2. Haz clic en **"Agregar proyecto"**
3. Escribe un nombre para tu proyecto (ej: "pensamiento-matematico")
4. Acepta los términos y haz clic en **Continuar**
5. Desactiva Google Analytics (opcional, no lo necesitas para este proyecto)
6. Haz clic en **Crear proyecto**
7. Espera a que se configure y haz clic en **Continuar**

## Paso 2: Configurar Cloud Firestore

1. En el menú lateral, busca **"Compilación"** → **"Firestore Database"**
2. Haz clic en **"Crear base de datos"**
3. Selecciona **"Comenzar en modo de prueba"** (para desarrollo)
4. Elige una ubicación (recomendado: **us-central** o la más cercana)
5. Haz clic en **"Habilitar"**

## Paso 3: Configurar Reglas de Seguridad

1. En Firestore Database, ve a la pestaña **"Reglas"**
2. Reemplaza el contenido con esto:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /evaluations/{document=**} {
      allow read, write: if true;
    }
  }
}
```

3. Haz clic en **"Publicar"**

⚠️ **IMPORTANTE:** Estas reglas son para desarrollo. Para producción, implementa autenticación.

## Paso 4: Obtener las Credenciales

1. Ve al ícono de **⚙️ Configuración** (esquina superior izquierda)
2. Selecciona **"Configuración del proyecto"**
3. Desplázate hasta **"Tus aplicaciones"**
4. Haz clic en el ícono **</> Web**
5. Registra un apodo para la app (ej: "pensamiento-matematico-web")
6. **NO** marques "Configurar Firebase Hosting"
7. Haz clic en **"Registrar app"**
8. Copia el objeto `firebaseConfig` que aparece

## Paso 5: Agregar Credenciales a tu Proyecto

### En el archivo `app.js`:

1. Abre el archivo `app.js`
2. Busca las líneas 13-19 (donde dice `const firebaseConfig`)
3. Reemplaza los valores con los que copiaste:

```javascript
const firebaseConfig = {
    apiKey: "AIzaSyXXXXXXXXXXXXXXXXXXX",  // Tu apiKey aquí
    authDomain: "tu-proyecto.firebaseapp.com",
    projectId: "tu-proyecto-id",
    storageBucket: "tu-proyecto.appspot.com",
    messagingSenderId: "123456789",
    appId: "1:123456789:web:abcdef123456"
};
```

### En el archivo `admin.html`:

1. Abre el archivo `admin.html`
2. Busca las líneas 247-253 (donde dice `const firebaseConfig`)
3. Pega **las mismas credenciales** que en `app.js`

## Paso 6: Probar la Conexión

1. Abre `index.html` en tu navegador
2. Completa una evaluación de prueba
3. Ve a Firebase Console → Firestore Database
4. Deberías ver una colección llamada **"evaluations"** con un documento

✅ Si ves el documento, ¡Firebase está funcionando correctamente!

## Paso 7: Verificar el Panel Admin

1. Abre `admin.html` en tu navegador
2. Deberías ver los datos de la evaluación que hiciste
3. Prueba los filtros y búsqueda

## ❌ Solución de Problemas

### Error: "Firebase not configured"
- Verifica que copiaste todas las credenciales correctamente
- Asegúrate de que NO haya comillas extras o espacios

### No aparecen datos en admin.html
- Verifica que usaste las mismas credenciales en ambos archivos
- Revisa la consola del navegador (F12) para ver errores
- Confirma que las reglas de Firestore estén publicadas

### Error de CORS al desplegar en GitHub Pages
- Agrega tu dominio de GitHub Pages a los dominios autorizados:
  - Firebase Console → Authentication → Sign-in method → Authorized domains
  - Agrega: `tu-usuario.github.io`

## 🚀 Para Producción

Cuando estés listo para producción, cambia las reglas de Firestore:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /evaluations/{document=**} {
      allow read: if request.auth != null;
      allow write: if request.auth != null;
    }
  }
}
```

Y configura Firebase Authentication (Email/Password, Google, etc.)

## 📱 Recursos Adicionales

- [Documentación de Firebase](https://firebase.google.com/docs)
- [Firestore Quickstart](https://firebase.google.com/docs/firestore/quickstart)
- [Firebase Pricing](https://firebase.google.com/pricing) - El plan gratuito es suficiente para este proyecto

---

¿Necesitas ayuda? Revisa la consola del navegador (F12) para ver mensajes de error detallados.
