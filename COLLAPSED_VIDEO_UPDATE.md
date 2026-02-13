# ✅ Actualización: Video + Secciones Colapsadas

## 🎯 Cambios Realizados

### 1. ✅ Secciones Cerradas por Defecto
**Antes:** Las 3 secciones estaban ABIERTAS (−)
**Ahora:** Las 3 secciones están CERRADAS (+)

Las personas deben hacer **click** para leer el contenido:
- ✨ "Welcome, dear soul. I'm Arimi"
- 🎸 "My Journey as a Sound Healer"
- 🎵 "My Healing Sounds"

**Beneficios:**
- Página más corta al cargar
- Mejor experiencia en móvil
- Usuario decide qué leer
- Se ve más limpio

### 2. ✅ Video de YouTube Embebido

**Ubicación:** Debajo de los botones sociales, antes de donación

**Características:**
- 📺 Responsive (16:9 automático)
- 🎨 Diseño moderno con glassmorphism
- ✨ Efecto hover sutil
- 📱 Perfecto en móvil

**Placeholder actual:**
```html
src="https://www.youtube.com/embed/VIDEO_ID_HERE"
```

**Para cambiarlo:** Lee el **VIDEO_GUIDE.md**

## 📁 Archivos Actualizados

### 1. index.html
- Secciones con `class="card-content"` (sin "active")
- Toggle icons cambiados a "+"
- Nueva sección de video agregada

### 2. styles.css
- Estilos para `.video-section`
- `.video-wrapper` responsive
- `.video-title` y `.video-caption`

## 🚀 Cómo Actualizar

### En GitHub:

**Para index.html:**
1. Click en `index.html`
2. Edit ✏️
3. Borra todo y pega el nuevo
4. Commit

**Para styles.css:**
1. Click en `styles.css`
2. Edit ✏️
3. Borra todo y pega el nuevo
4. Commit

### Agregar el Video:
1. Lee **VIDEO_GUIDE.md**
2. Elige un video de YouTube
3. Copia el ID (lo que viene después de `v=`)
4. Busca `VIDEO_ID_HERE` en index.html
5. Reemplázalo con tu ID
6. Commit

## 🎥 Ejemplo de Video ID

Si tu video es:
```
https://www.youtube.com/watch?v=abc123xyz
```

El ID es: `abc123xyz`

Reemplaza en index.html:
```html
<!-- ANTES -->
src="https://www.youtube.com/embed/VIDEO_ID_HERE"

<!-- DESPUÉS -->
src="https://www.youtube.com/embed/abc123xyz"
```

## 📱 Vista Previa

### Desktop:
```
┌─────────────────────────────────────┐
│    [Foto Arimi]                     │
│    Arimi | Sound Healer             │
│    [TikTok] [YouTube] [Insight]     │
│                                     │
│  ┌─────────────────────────────┐   │
│  │   🎥 VIDEO AQUÍ             │   │
│  │   Experience a Sound        │   │
│  │   Healing Session           │   │
│  └─────────────────────────────┘   │
│                                     │
│  🌿 [Donación CTA]                  │
│                                     │
│  ┌─────────────────────────────┐   │
│  │ Welcome, dear soul... [+]   │   │
│  └─────────────────────────────┘   │
│                                     │
│  ┌─────────────────────────────┐   │
│  │ My Journey... [+]           │   │
│  └─────────────────────────────┘   │
│                                     │
│  ┌─────────────────────────────┐   │
│  │ My Healing Sounds [+]       │   │
│  └─────────────────────────────┘   │
└─────────────────────────────────────┘
```

### Móvil:
```
┌──────────────┐
│ [Foto]       │
│ Arimi        │
│ [TikTok]     │
│ [YouTube]    │
│ [Insight]    │
│              │
│ ┌──────────┐ │
│ │  VIDEO   │ │
│ └──────────┘ │
│              │
│ [Donación]   │
│              │
│ Welcome [+]  │
│ Journey [+]  │
│ Sounds  [+]  │
└──────────────┘
```

## ✨ Funcionalidad de Secciones

**Al hacer click en el "+":**
- Se abre la sección (muestra contenido)
- El "+" cambia a "−"
- Animación suave

**Al hacer click en el "−":**
- Se cierra la sección (oculta contenido)
- El "−" cambia a "+"
- Animación suave

## 💡 Tips

### Para el Video:
- **Duración ideal:** 5-15 minutos
- **Contenido:** Una sesión real de sound healing
- **Calidad:** Mínimo 720p (HD)
- **Audio:** Muy importante - que se escuchen bien las frecuencias

### Para las Secciones:
- Si quieres que una esté ABIERTA por defecto:
  - Agrega `active` a `class="card-content"`
  - Cambia el `+` a `−`

## 🎯 Prioridad de Acciones

**Ahora mismo:**
1. ✅ Actualizar index.html (secciones cerradas + video)
2. ✅ Actualizar styles.css (estilos de video)

**Después (cuando tengas el video):**
3. 🎥 Elegir video de YouTube
4. 🔄 Reemplazar VIDEO_ID_HERE con tu ID
5. ✏️ (Opcional) Cambiar título/caption del video

**Más tarde:**
6. 📸 Agregar imágenes de testimonios (cuando las tengas)

## ⏱️ Tiempo Estimado

- Actualizar HTML/CSS: **5 minutos**
- Agregar video ID: **2 minutos**
- **Total: 7 minutos**

## ✅ Checklist Final

- [ ] Descargar index.html actualizado
- [ ] Descargar styles.css actualizado
- [ ] Reemplazar ambos en GitHub
- [ ] Commit changes
- [ ] Esperar 2-3 minutos
- [ ] Visitar sitio para verificar
- [ ] Ver que secciones están cerradas (+)
- [ ] Ver placeholder del video
- [ ] (Cuando tengas video) Agregar ID real
- [ ] ¡Disfrutar del sitio modernizado! 🎉

---

**¿Dudas?** Lee el VIDEO_GUIDE.md para más detalles sobre el video.
