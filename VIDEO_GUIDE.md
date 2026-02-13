# 🎥 Cómo Agregar el Video de YouTube

## 📍 Ubicación del Video

El video aparecerá **justo debajo de los botones de redes sociales** y **antes de la sección de donación**.

```
[Foto de perfil]
[Redes sociales: TikTok | YouTube | Insight Timer]

┌─────────────────────────────────┐
│  🎥 VIDEO DE YOUTUBE AQUÍ       │
│  Experience a Sound Healing     │
│  Session                        │
└─────────────────────────────────┘

[🌿 Sección de Donación]
```

## 🔧 Cómo Cambiar el Video

### Paso 1: Obtener el ID del Video de YouTube

1. Ve al video que quieres mostrar en YouTube
2. Mira la URL, se verá algo así:
   ```
   https://www.youtube.com/watch?v=dQw4w9WgXcQ
                                    ↑ Este es el ID
   ```
3. Copia solo la parte después de `v=` (en este ejemplo: `dQw4w9WgXcQ`)

### Paso 2: Actualizar el HTML

1. Abre `index.html` en GitHub (o tu editor)
2. Busca esta línea (está cerca del principio, después de los botones sociales):
   ```html
   src="https://www.youtube.com/embed/VIDEO_ID_HERE"
   ```
3. Reemplaza `VIDEO_ID_HERE` con tu ID:
   ```html
   src="https://www.youtube.com/embed/dQw4w9WgXcQ"
   ```
4. Guarda/Commit

## 📝 Ejemplo Completo

**Antes:**
```html
<iframe 
    src="https://www.youtube.com/embed/VIDEO_ID_HERE" 
    title="Sound Healing Session by Arimi"
    ...
```

**Después:**
```html
<iframe 
    src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
    title="Sound Healing Session by Arimi"
    ...
```

## 🎨 Personalizar el Título

Puedes cambiar el título que aparece sobre el video:

Busca:
```html
<h2 class="video-title">Experience a Sound Healing Session</h2>
```

Cambia a lo que quieras:
```html
<h2 class="video-title">528 Hz Love Frequency - Live Session</h2>
```

## 💬 Personalizar el Caption

El texto debajo del video también se puede cambiar:

Busca:
```html
<p class="video-caption">🎵 A glimpse into the transformative power of healing frequencies</p>
```

Cambia a:
```html
<p class="video-caption">✨ Experience deep relaxation with solfeggio frequencies</p>
```

## 🎯 Sugerencias de Videos

**Opciones para mostrar:**
1. **Video más popular** de YouTube
2. **Live session grabada** de TikTok (subida a YouTube)
3. **Introducción** a sound healing
4. **Testimonial compilado** en video
5. **Session completa** (30-60 min)

**Recomendación:** Un video de 5-15 minutos que muestre una sesión real.

## ✅ Checklist

- [ ] Elegir el video de YouTube
- [ ] Copiar el ID del video (lo que viene después de `v=`)
- [ ] Abrir `index.html` en GitHub
- [ ] Buscar `VIDEO_ID_HERE`
- [ ] Reemplazar con tu ID
- [ ] (Opcional) Cambiar título del video
- [ ] (Opcional) Cambiar caption
- [ ] Commit changes
- [ ] Esperar 2-3 minutos
- [ ] Visitar sitio para verificar

## 🎨 Cómo Se Ve

El video tendrá:
- ✅ Bordes redondeados modernos
- ✅ Sombra flotante con efecto glassmorphism
- ✅ Responsive (se ajusta al móvil)
- ✅ Hover effect sutil
- ✅ Aspecto 16:9 automático

## 📱 Responsive

El video se verá perfecto en:
- **Desktop:** Máximo 800px de ancho, centrado
- **Tablet:** Se ajusta al 100% del ancho
- **Móvil:** 100% de ancho, mantiene proporción 16:9

## 🔄 Cambiar el Video Después

Simplemente:
1. Ve a `index.html`
2. Edita la línea del `src`
3. Reemplaza el ID con el nuevo
4. Commit

**¡Tan fácil como eso!** El video se actualiza instantáneamente.

## ❓ FAQ

**P: ¿Puedo poner un video de TikTok?**
R: No directamente. Súbelo primero a YouTube, luego úsalo.

**P: ¿El video empieza automáticamente?**
R: No, el usuario debe hacer click para reproducirlo.

**P: ¿Puedo quitar el video?**
R: Sí, simplemente borra toda la sección `<!-- Featured Video Section -->` del HTML.

**P: ¿Qué pasa si pongo un ID incorrecto?**
R: El video no cargará, aparecerá un error. Verifica que el ID sea correcto.

---

**¡Listo!** Ahora el sitio tiene un video destacado que muestra el trabajo de Pier en acción 🎥✨
