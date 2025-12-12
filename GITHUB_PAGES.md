# 🚀 Guía de Despliegue en GitHub Pages

## Requisitos Previos

- Cuenta de GitHub
- Git instalado en tu computadora
- Firebase ya configurado (ver FIREBASE_SETUP.md)

## Método 1: Usando GitHub Desktop (Más Fácil)

### Paso 1: Descargar GitHub Desktop
1. Ve a [desktop.github.com](https://desktop.github.com/)
2. Descarga e instala GitHub Desktop
3. Inicia sesión con tu cuenta de GitHub

### Paso 2: Crear Repositorio
1. En GitHub Desktop, ve a **File → New repository**
2. Configura:
   - **Name:** `pensamiento-matematico` (o el nombre que prefieras)
   - **Local path:** Selecciona la carpeta padre de tu proyecto
   - Marca **"Initialize this repository with a README"**
3. Haz clic en **Create repository**

### Paso 3: Agregar Archivos
1. Copia todos los archivos de tu proyecto a la carpeta del repositorio
2. GitHub Desktop detectará los cambios automáticamente
3. En el campo "Summary", escribe: `Versión inicial`
4. Haz clic en **Commit to main**

### Paso 4: Publicar
1. Haz clic en **Publish repository**
2. Desmarca **"Keep this code private"** si quieres que sea público
3. Haz clic en **Publish repository**

### Paso 5: Activar GitHub Pages
1. Ve a tu repositorio en [github.com](https://github.com)
2. Haz clic en **Settings** (arriba a la derecha)
3. En el menú lateral, busca **Pages**
4. En **Source**, selecciona **main** branch
5. Haz clic en **Save**
6. Espera 1-2 minutos

✅ **Tu sitio estará disponible en:** `https://tu-usuario.github.io/pensamiento-matematico/`

## Método 2: Usando la Terminal/PowerShell

### Paso 1: Inicializar Git en tu proyecto

Abre PowerShell en la carpeta de tu proyecto y ejecuta:

```powershell
git init
git add .
git commit -m "Versión inicial"
```

### Paso 2: Crear Repositorio en GitHub

1. Ve a [github.com](https://github.com) y haz clic en **+** → **New repository**
2. Nombre: `pensamiento-matematico`
3. Deja todo lo demás por defecto
4. Haz clic en **Create repository**

### Paso 3: Conectar y Subir

Copia los comandos que GitHub te muestra y ejecútalos:

```powershell
git remote add origin https://github.com/TU-USUARIO/pensamiento-matematico.git
git branch -M main
git push -u origin main
```

### Paso 4: Activar GitHub Pages

Ejecuta estos comandos o hazlo desde la interfaz web:

```powershell
# Crear rama gh-pages (opcional, GitHub ahora usa main)
# O simplemente actívalo desde Settings → Pages
```

Luego en GitHub.com:
1. Settings → Pages
2. Source → main branch
3. Save

## 📝 Actualizar tu Sitio

Cada vez que hagas cambios:

### Con GitHub Desktop:
1. Abre GitHub Desktop
2. Verás los archivos modificados
3. Escribe un mensaje de commit
4. Haz clic en **Commit to main**
5. Haz clic en **Push origin**

### Con Terminal:
```powershell
git add .
git commit -m "Descripción de los cambios"
git push
```

⏱️ Los cambios tardan 1-2 minutos en reflejarse en el sitio.

## 🔗 URLs Importantes

Después de desplegar:

- **Sitio principal:** `https://tu-usuario.github.io/pensamiento-matematico/`
- **Panel admin:** `https://tu-usuario.github.io/pensamiento-matematico/admin.html`

### Agregar Dominio de GitHub Pages a Firebase

Para que funcione correctamente:

1. Ve a Firebase Console
2. Authentication → Settings → Authorized domains
3. Agrega: `tu-usuario.github.io`

## 📂 Estructura Recomendada

Asegúrate de que tu repositorio tenga esta estructura:

```
pensamiento-matematico/
├── index.html
├── admin.html
├── styles.css
├── app.js
├── questions.js
├── README.md
├── FIREBASE_SETUP.md
└── GITHUB_PAGES.md
```

## ⚠️ Problemas Comunes

### 1. Error 404 al abrir el sitio
- Espera 2-5 minutos después de activar GitHub Pages
- Verifica que la rama seleccionada sea **main**
- Asegúrate de que `index.html` esté en la raíz del repositorio

### 2. "Firebase not configured"
- Verifica que hayas actualizado las credenciales en `app.js` y `admin.html`
- Revisa la consola del navegador (F12) para ver el error exacto

### 3. El sitio no se actualiza
- Limpia el caché del navegador (Ctrl + Shift + R)
- Verifica que hayas hecho `push` correctamente
- Espera 1-2 minutos para que GitHub Pages se actualice

### 4. CSS no se carga
- Verifica que `styles.css` esté en el mismo directorio que `index.html`
- Revisa que las rutas en el HTML sean relativas (sin `/` al inicio)

## 🎨 Personalizar el Dominio (Opcional)

Si tienes un dominio propio:

1. En tu repositorio, crea un archivo llamado `CNAME`
2. Escribe tu dominio dentro: `tudominio.com`
3. En tu proveedor de dominio, configura los DNS:
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   Value: 185.199.109.153
   Value: 185.199.110.153
   Value: 185.199.111.153
   ```
4. Espera 24-48 horas para propagación DNS

## 🔒 Hacer el Repositorio Privado

Si quieres que el código no sea público pero el sitio sí:

⚠️ **Nota:** GitHub Pages en repositorios privados requiere GitHub Pro

Alternativa: Usa [Vercel](https://vercel.com) o [Netlify](https://netlify.com) que soportan repositorios privados gratis.

## 📱 Probar en Móviles

Una vez desplegado, puedes probarlo en tu teléfono:
1. Abre el navegador en tu móvil
2. Visita tu URL de GitHub Pages
3. El diseño es responsive y se adapta automáticamente

## 🎓 Recursos Adicionales

- [Documentación oficial de GitHub Pages](https://docs.github.com/pages)
- [Troubleshooting GitHub Pages](https://docs.github.com/pages/getting-started-with-github-pages/troubleshooting-404-errors-for-github-pages-sites)

---

¡Listo! Tu aplicación estará disponible en internet 24/7 de forma gratuita. 🚀
