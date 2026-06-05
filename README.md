# Grupo One Love App

PWA privada y estatica para gestionar Grupo One Love como empresa y como show: bolos, clientes, cobros, repertorio, ensayos, tecnica, videos, showroom comercial, radar de bolos y dashboard.

La primera version no usa backend, servidor de pago ni base de datos. Todo lo que se anade desde el movil se guarda en `localStorage`, dentro del propio dispositivo. No subas datos privados sensibles al repositorio.

## Archivos

- `index.html`: estructura de la app.
- `styles.css`: diseno oscuro, movil y navegacion inferior.
- `app.js`: logica, localStorage, formularios, checklists y copias a WhatsApp.
- `manifest.webmanifest`: configuracion PWA instalable.
- `sw.js`: cache offline.
- `icon.svg`: icono de la app.

## Como subirla a GitHub

1. Crear un repositorio llamado `grupo-one-love-app`.
2. Subir estos archivos a la rama `main`.
3. No incluir datos privados reales en el repositorio.

Con GitHub CLI:

```bash
git init
git add .
git commit -m "Crear PWA Grupo One Love"
gh repo create grupo-one-love-app --private --source=. --remote=origin --push
```

## Como activar GitHub Pages

1. Entrar en el repositorio en GitHub.
2. Abrir `Settings`.
3. Abrir `Pages`.
4. En `Build and deployment`, elegir `Deploy from a branch`.
5. En `Branch`, seleccionar `main`.
6. En carpeta, seleccionar `/root`.
7. Guardar.

La URL final normalmente sera:

```text
https://TU-USUARIO.github.io/grupo-one-love-app/
```

Nota: si el repositorio es privado, GitHub Pages puede depender del plan/configuracion de GitHub. Si Pages no permite publicar desde privado, manten el repositorio sin datos sensibles o usa una alternativa privada.

## Como instalarla en Android

1. Abrir la URL publicada en Chrome.
2. Pulsar los tres puntos.
3. Pulsar `Anadir a pantalla de inicio` o `Instalar aplicacion`.
4. Confirmar.
5. Abrir la app desde el icono de la pantalla del movil.

## Como actualizarla

1. Editar los archivos.
2. Hacer commit.
3. Subir a GitHub.
4. GitHub Pages publicara los cambios.

Si cambias archivos cacheados y el movil no ve la actualizacion, incrementa `CACHE_NAME` en `sw.js`.

## Mejoras para v2

- Conexion con Google Sheets.
- Login privado.
- Dashboard mas visual.
- Exportar bolos a CSV.
- Sincronizar entre movil y ordenador.
- Anadir videos reales.
- Crear showroom publico separado.
