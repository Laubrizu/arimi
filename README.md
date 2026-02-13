# Arimi Sound Healer - Website

Sitio web moderno y responsivo para Arimi Sound Healer, creado con HTML, CSS y JavaScript vanilla. Optimizado para GitHub Pages.

## 🎨 Características

- **Diseño Moderno**: Paleta de colores naturales con gradientes y efectos de vidrio
- **Totalmente Responsivo**: Se adapta perfectamente a móviles, tablets y desktop
- **Animaciones Suaves**: Efectos de onda sonora, transiciones y animaciones al scroll
- **Sin Dependencias**: HTML, CSS y JavaScript puro - no requiere frameworks
- **Optimizado para SEO**: Meta tags, estructura semántica
- **Accesible**: Navegación por teclado, ARIA labels, alto contraste
- **GitHub Pages Ready**: Listo para publicar gratis

## 📁 Estructura de Archivos

```
arimi-soundhealer/
├── index.html          # Página principal
├── styles.css          # Estilos y animaciones
├── script.js           # Funcionalidad interactiva
├── profile.jpg         # Foto de perfil (debes agregar)
└── README.md           # Este archivo
```

## 🚀 Instalación en GitHub Pages

### Opción 1: Crear Repositorio Nuevo

1. **Crear repositorio en GitHub**
   - Ve a GitHub.com y crea un nuevo repositorio
   - Nombre sugerido: `arimi-soundhealer` o `[tu-usuario].github.io`
   - Marca como público

2. **Subir archivos**
   ```bash
   # En tu terminal/consola
   git clone https://github.com/[tu-usuario]/[nombre-repo].git
   cd [nombre-repo]
   
   # Copiar los archivos del sitio aquí
   # Luego:
   git add .
   git commit -m "Initial commit - Arimi Sound Healer website"
   git push origin main
   ```

3. **Activar GitHub Pages**
   - Ve a Settings → Pages
   - En "Source", selecciona "main" branch
   - Click en "Save"
   - Tu sitio estará en: `https://[tu-usuario].github.io/[nombre-repo]`

### Opción 2: Usuario GitHub Pages (Dominio Corto)

Si creas un repo llamado exactamente `[tu-usuario].github.io`:
- El sitio será: `https://[tu-usuario].github.io`
- No necesitas activar Pages, se activa automáticamente

## 🖼️ Agregar Imágenes

1. **Foto de Perfil**
   - Nombra tu imagen como `profile.jpg`
   - Tamaño recomendado: 500x500px mínimo
   - Colócala en la raíz del repositorio
   - Formatos: .jpg, .png, .webp

2. **Optimización** (opcional pero recomendado)
   - Usa herramientas como TinyPNG para comprimir
   - Mantén el tamaño bajo 200KB para carga rápida

## 🔧 Personalización

### Cambiar Colores

Edita las variables CSS en `styles.css` (líneas 1-30):

```css
:root {
    --primary-cream: #F5F1E8;    /* Fondo principal */
    --accent-sage: #8FA889;       /* Color de acento */
    /* ... más colores ... */
}
```

### Modificar Contenido

Edita `index.html` y busca las secciones:
- **Links de redes sociales**: Busca `.social-links`
- **Links de donación**: Busca `donate.stripe.com`
- **Contenido de tarjetas**: Busca `.content-card`
- **Links externos**: Busca `.link-card`

### Añadir Google Analytics (Opcional)

1. Crea una cuenta en [Google Analytics](https://analytics.google.com)
2. Obtén tu Tracking ID (ej: G-XXXXXXXXXX)
3. Agrega antes de `</head>` en `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## 🌐 Conectar Dominio Personalizado

Si tienes el dominio `musicforthesoul.live`:

1. **En GitHub**:
   - Settings → Pages → Custom domain
   - Escribe: `musicforthesoul.live`
   - Click "Save"

2. **En tu proveedor de dominio** (ej: Namecheap, GoDaddy):
   - Agrega registros DNS:
   ```
   Tipo: A
   Host: @
   Valor: 185.199.108.153
   
   Tipo: A
   Host: @
   Valor: 185.199.109.153
   
   Tipo: A
   Host: @
   Valor: 185.199.110.153
   
   Tipo: A
   Host: @
   Valor: 185.199.111.153
   
   Tipo: CNAME
   Host: www
   Valor: [tu-usuario].github.io
   ```

3. **Esperar**: Los cambios DNS pueden tardar 24-48 horas

4. **Activar HTTPS**: En GitHub Pages, marca "Enforce HTTPS"

## 📱 Probar Localmente

Para ver el sitio en tu computadora antes de subirlo:

1. Abre `index.html` directamente en tu navegador, o
2. Usa un servidor local:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   
   # Node.js (si tienes http-server instalado)
   npx http-server
   ```
3. Visita: `http://localhost:8000`

## 🔄 Actualizar el Sitio

Cada vez que quieras hacer cambios:

```bash
# Edita los archivos
# Luego:
git add .
git commit -m "Descripción de los cambios"
git push origin main
```

Los cambios se publicarán automáticamente en minutos.

## ✨ Características Técnicas

- **Performance**: 
  - Carga rápida (< 2 segundos)
  - Optimizado para Core Web Vitals
  - Lazy loading de imágenes

- **SEO**:
  - Meta tags optimizados
  - Open Graph para redes sociales
  - Estructura semántica HTML5

- **Accesibilidad**:
  - WCAG 2.1 Level AA
  - Navegación por teclado
  - Screen reader friendly

- **Responsive**:
  - Mobile-first design
  - Breakpoints: 480px, 768px
  - Touch-friendly en móviles

## 🆘 Solución de Problemas

### La imagen de perfil no aparece
- Verifica que el archivo se llame exactamente `profile.jpg`
- Asegúrate de que esté en la raíz del repositorio
- Prueba con otro formato (`.png`)

### Los colores se ven diferentes
- Limpia el caché del navegador (Ctrl + F5)
- Verifica que `styles.css` esté linkeado correctamente

### El sitio no se actualiza
- Los cambios en GitHub pueden tardar 1-5 minutos
- Limpia el caché del navegador
- Verifica que hiciste `git push` correctamente

### Errores en GitHub Pages
- Ve a Settings → Pages
- Revisa si hay mensajes de error
- Asegúrate de que el branch sea `main` y la carpeta sea `/ (root)`

## 💰 Comparación de Costos

| Servicio | Costo Mensual | Costo Anual |
|----------|---------------|-------------|
| GitHub Pages | **$0** | **$0** |
| Servicio actual | $30 | $360 |
| **Ahorro** | **$30** | **$360** |

## 📞 Soporte

Si tienes preguntas:
1. Revisa esta documentación
2. Busca en [GitHub Pages Docs](https://docs.github.com/pages)
3. Revisa la consola del navegador (F12) para errores

## 📄 Licencia

Código creado para uso personal de Arimi Sound Healer.

---

**¡Éxito con tu nuevo sitio! 🎵✨**

Recuerda: Ahora tienes control total del sitio, sin pagos mensuales, y puedes actualizarlo cuando quieras.
