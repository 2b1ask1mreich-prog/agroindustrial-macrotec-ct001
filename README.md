# 🛢️ PROYECTO CT-001 | AGROINDUSTRIAL MACROTEC C.A.
### Página Web Corporativa & Portafolio Técnico de Coiled Tubing

Página web estática de alto impacto desarrollada para **Agroindustrial Macrotec C.A.**, orientada a la presentación ejecutiva del **Plan Maestro de Mantenimiento e Intervención Mayor de la Unidad de Coiled Tubing CT-001** ante gerentes de operaciones, clientes industriales y contratistas del sector petrolero (*Oil & Gas*).

---

## 🚀 Vista Previa y Características Principales
- **Diseño Mobile-First & Responsive:** Diseñado con prioridad móvil para apertura directa y navegación fluida desde enlaces compartidos por WhatsApp o correo corporativo.
- **Identidad Visual Corporativa:** Paleta de colores exacta extraída de la marca vectorial de Agroindustrial Macrotec C.A.:
  - **Verde Industrial Primario:** `#2f8a4e` / `#58a565` / `#a3cd80`
  - **Azul Técnico Petrolero:** `#3f6c99` / `#5d8dc2`
  - **Gris Acero / Grafito Industrial:** `#c8c8c6` / `#6b6b69` / `#4c4c4b` / `#0a0d0f`
- **Tipografías Técnicas:** *Rajdhani* para encabezados de ingeniería y *Inter* para textos de lectura técnica.
- **Galería Interactiva con Lightbox:** Visualizador en pantalla completa con soporte táctil, flechas de navegación y pie de foto técnico detallado.
- **Optimizado para WhatsApp (Open Graph):** Metadatos `og:title`, `og:description` y `og:image` configurados para generar tarjetas de previsualización profesional al enviar el enlace.
- **Llamados a la Acción Directos:** Enlaces directos a WhatsApp (`+58 422-0221841`) con mensajes preconfigurados para cotizaciones y consultas técnicas.

---

## 📂 Estructura del Proyecto

```text
├── index.html                   # Página principal (One-page semántica y optimizada)
├── README.md                    # Documentación de despliegue y uso
├── assets/
│   ├── css/
│   │   └── style.css            # Estilos corporativos industriales y diseño responsivo
│   ├── js/
│   │   └── main.js              # Controlador de navbar, filtros de galería y Lightbox modal
│   └── img/
│       ├── logo-agroindustrial-macrotec.svg      # Logo corporativo vectorial oficial
│       ├── ct001-hero-unit.jpeg                  # Vista general de la unidad pesada
│       ├── ct001-injector-reel.jpeg              # Carrete e inyector Coiled Tubing
│       ├── ct001-power-pack.png                  # Motor Cummins ISX y power pack
│       ├── ct001-hydraulic-console.png           # Consola de mandos y válvulas
│       ├── ct001-gantt-chart-1.png               # Soporte original de cronograma (1/2)
│       ├── ct001-gantt-chart-2.png               # Soporte original de cronograma (2/2)
│       └── ct001-maintenance-budget.png          # Estructura presupuestaria ($19,032 USD)
```

---

## 🌐 Instrucciones de Despliegue en GitHub Pages (Paso a Paso)

Este proyecto está construido con arquitectura 100% estática y **rutas relativas** (`./assets/...`), por lo que funciona de inmediato en la raíz de cualquier dominio o en subdirectorios de **GitHub Pages** sin configuraciones complejas.

### Paso 1: Inicializar el repositorio Git local
Abre tu terminal en la carpeta del proyecto y ejecuta:

```bash
# Inicializar repositorio git
git init

# Agregar todos los archivos preparados
git add .

# Crear el primer commit
git commit -m "feat: landing corporativa proyecto CT-001 Coiled Tubing Agroindustrial Macrotec"
```

### Paso 2: Crear el repositorio en GitHub y subir los archivos
1. Ve a [GitHub](https://github.com) y crea un nuevo repositorio (por ejemplo, `cct01-macrotec` o `proyecto-ct001`). Déjalo como **Público**.
2. Conecta tu repositorio local con GitHub ejecutando:

```bash
# Renombrar rama a main
git branch -M main

# Conectar con tu repositorio remoto (reemplaza TU-USUARIO y TU-REPOSITORIO)
git remote add origin https://github.com/TU-USUARIO/TU-REPOSITORIO.git

# Subir los archivos
git push -u origin main
```

### Paso 3: Activar GitHub Pages
1. En GitHub, entra en tu repositorio y haz clic en la pestaña **Settings** (Configuración).
2. En el menú lateral izquierdo, haz clic en **Pages**.
3. En la sección **Build and deployment**:
   - **Source:** Selecciona `Deploy from a branch`.
   - **Branch:** Selecciona `main` y en la carpeta elige `/(root)`.
   - Haz clic en **Save** (Guardar).
4. Espera 1 a 2 minutos. GitHub te entregará el enlace público listo para compartir:
   `https://TU-USUARIO.github.io/TU-REPOSITORIO/`

---

## 📞 Contacto y Soporte Técnico
- **Empresa:** Agroindustrial Macrotec C.A.
- **WhatsApp / Operaciones:** [+58 422-0221841](https://wa.me/584220221841)
- **Correo Corporativo:** Agroindustrialmacrotec@gmail.com
- **Ubicación:** El Tigre, Estado Anzoátegui, Venezuela.
