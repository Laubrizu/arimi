# 🚀 Inicio Rápido - 5 Minutos

## Pasos Simples para Publicar

### 1️⃣ Preparar Archivos (2 min)

```bash
# Descarga todos los archivos a una carpeta
arimi-soundhealer/
├── index.html
├── styles.css
├── script.js
├── profile.jpg        ← ¡Agrega tu foto aquí!
└── README.md
```

**IMPORTANTE**: Renombra tu foto de perfil a `profile.jpg` y colócala en la carpeta.

### 2️⃣ Crear Repositorio en GitHub (1 min)

1. Ve a [github.com](https://github.com) e inicia sesión
2. Click en el botón verde "New" (o el + arriba a la derecha)
3. Nombre del repositorio: `[tu-usuario].github.io` 
   - Ejemplo: `arimi.github.io`
4. Marca como **Public**
5. Click "Create repository"

### 3️⃣ Subir Archivos (2 min)

**Opción A - Interfaz Web (más fácil)**:
1. En la página del repositorio, click "uploading an existing file"
2. Arrastra todos los archivos
3. Click "Commit changes"

**Opción B - Línea de comandos**:
```bash
git clone https://github.com/[tu-usuario]/[tu-usuario].github.io.git
cd [tu-usuario].github.io
# Copia todos los archivos aquí
git add .
git commit -m "Initial commit"
git push origin main
```

### 4️⃣ ¡Listo! 🎉

Tu sitio estará en: `https://[tu-usuario].github.io`

Espera 2-5 minutos para que se publique.

---

## 🔗 Conectar tu Dominio musicforthesoul.live

### En GitHub:
1. Repositorio → Settings → Pages
2. Custom domain: `musicforthesoul.live`
3. Save

### En tu proveedor de dominio:
Agrega estos registros DNS:

**Tipo A** (agrega los 4):
```
Host: @
Valores:
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**Tipo CNAME**:
```
Host: www
Valor: [tu-usuario].github.io
```

⏱️ Espera 24-48 horas para que los cambios se propaguen.

---

## 🎨 Personalización Básica

### Cambiar Texto
Abre `index.html` en cualquier editor de texto y modifica el contenido.

### Cambiar Colores
Abre `styles.css` y modifica las variables al inicio:
```css
--primary-cream: #F5F1E8;   /* Tu color aquí */
--accent-sage: #8FA889;      /* Tu color aquí */
```

### Actualizar
Después de hacer cambios:
```bash
git add .
git commit -m "Actualización"
git push
```

---

## 💡 Consejos

✅ **Usa HTTPS**: GitHub Pages lo ofrece gratis
✅ **Comprime imágenes**: Usa [TinyPNG](https://tinypng.com)
✅ **Prueba en móvil**: El 70% de visitantes usarán móvil
✅ **Haz backups**: Guarda una copia de los archivos

## ❓ ¿Problemas?

- **Sitio no carga**: Espera 5 minutos, limpia caché (Ctrl+F5)
- **Imagen no aparece**: Verifica nombre exacto `profile.jpg`
- **Errores**: Revisa Settings → Pages en GitHub

---

**¿Listo? ¡Adelante! 🚀**

Para más detalles, lee el README.md completo.
