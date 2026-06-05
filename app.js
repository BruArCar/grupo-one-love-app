const STORAGE_KEY = "grupo-one-love-v1";

const states = [
  "Por confirmar",
  "Presupuesto enviado",
  "Cerrado",
  "Pendiente anticipo",
  "Pendiente cobrar",
  "Cobrado"
];

const defaultData = {
  bolos: [],
  clips: [],
  checklists: { sonido: {}, luces: {} }
};

const protocols = {
  "No suena micro Bruno": [
    "Confirmar que el micro esta encendido y con pila.",
    "Revisar cable XLR o receptor en la Mackie Onyx8.",
    "Subir gain poco a poco y comprobar mute/canal.",
    "Probar otro canal de mesa.",
    "Si sigue fallando, pasar a micro de backup."
  ],
  "No suena micro Wendy/Rosa": [
    "Comprobar pila y switch del micro.",
    "Confirmar que el canal correcto esta abierto.",
    "Revisar XLR, receptor o entrada en mesa.",
    "Cambiar cable antes de tocar la mezcla general.",
    "Usar micro compartido o backup si el fallo continua."
  ],
  "No sale musica": [
    "Comprobar volumen del portatil y del reproductor.",
    "Revisar cable USB/audio hacia Mackie Onyx8.",
    "Confirmar canal de musica sin mute.",
    "Probar musica backup desde movil.",
    "Reiniciar app de reproduccion solo si hay pausa segura."
  ],
  "No detecta DMX": [
    "Desconectar y conectar DMX USB FTDI.",
    "Abrir QLC+ y confirmar universo/interfaz.",
    "Revisar cable DMX de salida.",
    "Lanzar escena blanca de emergencia.",
    "Pasar fixtures a modo automatico si no vuelve DMX."
  ],
  "Alto TS415 suena flojo": [
    "Revisar gain trasero del Alto TS415.",
    "Comprobar cable y salida de mesa.",
    "Comparar con el otro altavoz usando misma fuente.",
    "Revisar EQ o limitador si esta activo.",
    "Usar Mackie Thump como refuerzo si hace falta."
  ],
  "Monitor acopla": [
    "Bajar envio del monitor afectado.",
    "Alejar micro del monitor y orientar capsula.",
    "Recortar graves/medios molestos.",
    "Bajar gain del micro si esta demasiado alto.",
    "Priorizar voces principales sobre volumen de escenario."
  ],
  "Fallo de corriente": [
    "Pedir confirmacion de toma electrica al responsable.",
    "Apagar etapas/altavoces antes de reconectar.",
    "Cambiar regleta o alargo.",
    "Separar luces y sonido si salta diferencial.",
    "Encender primero mesa/portatil y despues altavoces."
  ],
  "No funciona humo": [
    "Comprobar enchufe y calentamiento.",
    "Revisar liquido de humo.",
    "Probar disparo manual.",
    "Confirmar canal DMX o modo autonomo.",
    "Dejarla fuera del show si no calienta con seguridad."
  ],
  "Fallo de portatil": [
    "No reiniciar si el audio aun funciona.",
    "Conectar movil con playlist backup.",
    "Reabrir QLC+ o reproductor cuando haya margen.",
    "Revisar cargador y puerto USB.",
    "Continuar con modo manual si el show lo permite."
  ]
};

const gear = [
  "Mesa Mackie Onyx8", "Altavoces Alto TS415", "Mackie Thump", "Subgrave",
  "Monitores Vonyx", "QLC+", "DMX USB FTDI", "Cabezas moviles", "PAR",
  "Barras LED", "Spider", "Maquina de humo"
];

const soundItems = [
  "Mesa Mackie Onyx8", "Portatil", "Cargadores", "Micros", "Cables XLR",
  "Altavoces Alto TS415", "Mackie Thump", "Subgrave", "Monitores Vonyx",
  "Regletas", "Alargos", "Adaptadores", "Musica backup"
];

const lightItems = [
  "Interfaz DMX FTDI", "Cable DMX", "Cabezas moviles", "PAR", "Barras LED",
  "Spider", "Maquina de humo", "Liquido de humo", "QLC+", "Escena blanca de emergencia",
  "Modo automatico"
];

const songs = [
  { title: "Medley fiesta pueblo", singer: "Todos", level: "dificil" },
  { title: "Balada Bruno", singer: "Bruno", level: "nueva" },
  { title: "Hit Wendy energia alta", singer: "Wendy", level: "dificil" },
  { title: "Tema Rosa protagonista", singer: "Rosa", level: "nueva" },
  { title: "Final potente One Love", singer: "Todos", level: "final" },
  { title: "Tardeo comercial", singer: "Todos", level: "transicion" }
];

const formats = [
  ["Duo", "Dos voces, equipo compacto y repertorio adaptable.", "Bares, tardeos, eventos pequenos y previas.", "Desde 450 EUR"],
  ["Trio", "Tres voces, mas presencia escenica y repertorio amplio.", "Fiestas privadas, restaurantes, campings y plazas medianas.", "Desde 650 EUR"],
  ["Cuarteto", "Show mas completo con mayor pegada visual y vocal.", "Fiestas de pueblo, eventos grandes y programaciones municipales.", "Desde 900 EUR"],
  ["DJ / Discomovil", "Musica continua, luces y animacion despues del directo.", "Finales de fiesta, bodas y eventos largos.", "Desde 400 EUR"],
  ["Tardeos", "Formato dinamico, cercano y con repertorio comercial.", "Restaurantes, terrazas, campings y plazas.", "Desde 450 EUR"],
  ["Fiestas de pueblo", "Directo popular, tecnica propia y opciones con DJ.", "Ayuntamientos, comisiones y barrios.", "Segun formato y horario"],
  ["Bodas", "Musica para coctel, fiesta o pack con DJ.", "Ceremonias, cocteles y celebraciones privadas.", "Desde 700 EUR"],
  ["Campings", "Animacion musical familiar y tardeo de verano.", "Programacion semanal o fechas especiales.", "Desde 500 EUR"],
  ["Eventos privados", "Show flexible con repertorio ajustado al publico.", "Cumpleanos, empresas y celebraciones.", "Desde 450 EUR"]
];

const searches = [
  "contratacion fiestas patronales 2026 grupo musical",
  "ayuntamiento programacion fiestas 2026 tardeo",
  "comision de fiestas busca grupo musical",
  "camping animacion musical verano 2026",
  "empresa espectaculos contratacion grupos Castellon",
  "verbena tardeo agosto 2026 grupo musical",
  "fiestas barrio contratacion actuacion musical",
  "restaurante tardeo verano grupo musical"
];

const baseWhatsapp = "Hola, te paso el showroom de Grupo One Love para que puedas ver formatos, opciones y condiciones. Para vuestra fecha os recomendaria valorar Duo, Trio o Duo + DJ segun horario y tipo de evento. ¿Me confirmas fecha, pueblo, horario aproximado y si teneis escenario/toma electrica?";
const salesMessage = "Hola, somos Grupo One Love. Hacemos directo musical para fiestas, tardeos, campings, bodas y eventos privados, con formatos Duo, Trio, Cuarteto y opcion DJ/discomovil. ¿Con quien podria hablar para enviar propuesta y disponibilidad para vuestra programacion 2026?";

let data = loadData();
let currentSinger = "Todos";
let deferredInstallPrompt = null;

function loadData() {
  try {
    return { ...defaultData, ...JSON.parse(localStorage.getItem(STORAGE_KEY)) };
  } catch {
    return structuredClone(defaultData);
  }
}

function saveData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  render();
}

function money(value) {
  return `${Number(value || 0).toLocaleString("es-ES")} EUR`;
}

function pending(bolo) {
  return Math.max(Number(bolo.precio || 0) - Number(bolo.anticipo || 0), 0);
}

function byId(id) {
  return document.getElementById(id);
}

function card(title, body, meta = [], actions = "") {
  return `<article class="card"><div class="card-head"><div><h3>${title}</h3>${body}</div></div><div class="meta">${meta.join("")}</div>${actions}</article>`;
}

function stateClass(estado) {
  if (estado === "Cobrado") return "state";
  if (estado.includes("Pendiente")) return "state danger";
  return "state warn";
}

function renderBolos() {
  byId("bolosList").innerHTML = data.bolos.map((bolo) => card(
    `${bolo.pueblo || "Sin pueblo"} · ${bolo.cliente || "Sin cliente"}`,
    `<p>${bolo.fecha || "Sin fecha"} · ${bolo.formato || "Formato por definir"}<br>Proximo paso: ${bolo.paso || "Definir seguimiento"}</p>`,
    [
      `<span class="${stateClass(bolo.estado)}">${bolo.estado}</span>`,
      `<span class="tag">Precio ${money(bolo.precio)}</span>`,
      `<span class="tag">Anticipo ${money(bolo.anticipo)}</span>`,
      `<span class="tag">Pendiente ${money(pending(bolo))}</span>`
    ],
    `<div class="actions">
      <button data-close="${bolo.id}">Marcar cerrado</button>
      <button data-paid="${bolo.id}">Marcar cobrado</button>
      <button class="ghost" data-delete="${bolo.id}">Eliminar</button>
    </div>`
  )).join("");
}

function renderHomeAndDashboard() {
  const urgent = data.bolos.filter((b) => b.estado !== "Cobrado" && (b.estado.includes("Pendiente") || b.estado === "Por confirmar"));
  const follow = data.bolos.filter((b) => b.estado !== "Cobrado" && b.paso);
  const pendingMoney = data.bolos.reduce((sum, b) => b.estado === "Cobrado" ? sum : sum + pending(b), 0);
  const closed = data.bolos.filter((b) => ["Cerrado", "Pendiente anticipo", "Pendiente cobrar", "Cobrado"].includes(b.estado)).length;
  const sent = data.bolos.filter((b) => b.estado === "Presupuesto enviado").length;

  byId("urgentCount").textContent = urgent.length;
  byId("pendingMoney").textContent = money(pendingMoney);
  byId("followCount").textContent = follow.length;
  byId("urgentList").innerHTML = urgent.slice(0, 5).map((b) => card(
    `${b.pueblo || "Bolo"} · ${b.estado}`,
    `<p>${b.cliente || "Cliente por definir"} · ${b.paso || "Llamar o escribir seguimiento"}</p>`
  )).join("");
  byId("closedShows").textContent = closed;
  byId("liveOpps").textContent = data.bolos.filter((b) => b.estado !== "Cobrado").length;
  byId("dashPending").textContent = money(pendingMoney);
  byId("sentBudgets").textContent = sent;
  byId("hotClients").textContent = follow.length;
  byId("nextAction").textContent = urgent[0]
    ? `Prioridad: ${urgent[0].cliente || "cliente"} en ${urgent[0].pueblo || "pueblo"} (${urgent[0].estado}). ${urgent[0].paso || "Enviar seguimiento hoy."}`
    : "Crear o revisar oportunidades en Radar y enviar el mensaje comercial a nuevos contactos.";
}

function renderTechnique() {
  byId("protocolButtons").innerHTML = Object.keys(protocols).map((name) => `<button data-protocol="${name}">${name}</button>`).join("");
  byId("gearList").innerHTML = gear.map((item) => `<span class="tag">${item}</span>`).join("");
}

function renderChecklist(target, items, group) {
  byId(target).innerHTML = items.map((item) => {
    const checked = data.checklists[group][item] ? "checked" : "";
    return `<label><input type="checkbox" data-check="${group}" value="${item}" ${checked}>${item}</label>`;
  }).join("");
}

function renderSongs() {
  const visible = songs.filter((song) => currentSinger === "Todos" || song.singer === currentSinger || song.singer === "Todos");
  byId("songList").innerHTML = visible.map((song) => card(
    song.title,
    `<p>Cantante: ${song.singer}</p>`,
    [`<span class="tag">${song.level}</span>`]
  )).join("");
}

function renderClips() {
  byId("clipsList").innerHTML = data.clips.map((clip) => card(
    clip.nombre,
    `<p>${clip.texto || "Sin texto comercial"}<br>${clip.hook || "Sin hook"}</p>`,
    [
      `<span class="state">${clip.energia}</span>`,
      `<span class="tag">${clip.sirve || "Uso por definir"}</span>`,
      `<span class="tag">${clip.hashtags || "Sin hashtags"}</span>`
    ],
    `<div class="actions"><button class="ghost" data-delete-clip="${clip.id}">Eliminar</button></div>`
  )).join("");
}

function renderShowroom() {
  byId("baseWhatsapp").textContent = baseWhatsapp;
  byId("formatsList").innerHTML = formats.map(([name, includes, event, price]) => card(
    name,
    `<p><strong>Incluye:</strong> ${includes}<br><strong>Sirve para:</strong> ${event}</p>`,
    [`<span class="tag">${price}</span>`],
    `<div class="actions"><button data-format-message="${name}">Copiar WhatsApp</button></div>`
  )).join("");
}

function renderRadar() {
  byId("salesMessage").textContent = salesMessage;
  byId("searchList").innerHTML = searches.map((query) => card(
    query,
    "<p>Busqueda lista para Google, Facebook o directorios municipales.</p>",
    [],
    `<div class="actions"><button data-copy-text="${query}">Copiar busqueda</button></div>`
  )).join("");
}

function render() {
  renderHomeAndDashboard();
  renderBolos();
  renderTechnique();
  renderChecklist("soundChecklist", soundItems, "sonido");
  renderChecklist("lightChecklist", lightItems, "luces");
  renderSongs();
  renderClips();
  renderShowroom();
  renderRadar();
}

function navigate(id) {
  document.querySelectorAll(".view").forEach((view) => view.classList.toggle("active", view.id === id));
  document.querySelectorAll("[data-nav]").forEach((button) => button.classList.toggle("active", button.dataset.nav === id));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function copyText(text) {
  navigator.clipboard?.writeText(text);
}

document.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;

  if (button.dataset.nav) navigate(button.dataset.nav);
  if (button.id === "addBoloBtn") byId("boloForm").hidden = !byId("boloForm").hidden;
  if (button.id === "addClipBtn") byId("clipForm").hidden = !byId("clipForm").hidden;

  if (button.dataset.close) {
    data.bolos = data.bolos.map((b) => b.id === button.dataset.close ? { ...b, estado: "Cerrado" } : b);
    saveData();
  }
  if (button.dataset.paid) {
    data.bolos = data.bolos.map((b) => b.id === button.dataset.paid ? { ...b, estado: "Cobrado", anticipo: b.precio } : b);
    saveData();
  }
  if (button.dataset.delete) {
    data.bolos = data.bolos.filter((b) => b.id !== button.dataset.delete);
    saveData();
  }
  if (button.dataset.deleteClip) {
    data.clips = data.clips.filter((clip) => clip.id !== button.dataset.deleteClip);
    saveData();
  }
  if (button.dataset.protocol) {
    byId("protocolTitle").textContent = button.dataset.protocol;
    byId("protocolSteps").innerHTML = protocols[button.dataset.protocol].map((step) => `<li>${step}</li>`).join("");
    byId("protocolDialog").showModal();
  }
  if (button.id === "closeProtocol") byId("protocolDialog").close();
  if (button.dataset.copy) copyText(document.querySelector(button.dataset.copy).textContent);
  if (button.dataset.copyText) copyText(button.dataset.copyText);
  if (button.dataset.formatMessage) copyText(`${baseWhatsapp}\n\nFormato recomendado: ${button.dataset.formatMessage}.`);
  if (button.id === "makeRehearsal") {
    const difficult = songs.filter((song) => song.level === "dificil" || song.level === "nueva").slice(0, 3);
    byId("rehearsalPlan").innerHTML = [
      "5 min · prueba de micros Bruno, Wendy y Rosa",
      "8 min · entradas y primeros compases",
      `12 min · canciones nuevas: ${difficult.map((s) => s.title).join(", ")}`,
      "8 min · canciones dificiles y cortes",
      "6 min · transiciones habladas",
      "6 min · final potente"
    ].map((step) => `<li>${step}</li>`).join("");
  }
});

byId("boloForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  data.bolos.unshift({
    id: crypto.randomUUID(),
    fecha: form.get("fecha"),
    pueblo: form.get("pueblo"),
    cliente: form.get("cliente"),
    formato: form.get("formato"),
    precio: Number(form.get("precio")),
    anticipo: Number(form.get("anticipo")),
    estado: form.get("estado"),
    paso: form.get("paso")
  });
  event.currentTarget.reset();
  event.currentTarget.hidden = true;
  saveData();
});

byId("clipForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  data.clips.unshift({
    id: crypto.randomUUID(),
    nombre: form.get("nombre"),
    energia: form.get("energia"),
    sirve: form.get("sirve"),
    hook: form.get("hook"),
    texto: form.get("texto"),
    hashtags: form.get("hashtags")
  });
  event.currentTarget.reset();
  event.currentTarget.hidden = true;
  saveData();
});

document.addEventListener("change", (event) => {
  const checkbox = event.target.closest("[data-check]");
  if (!checkbox) return;
  data.checklists[checkbox.dataset.check][checkbox.value] = checkbox.checked;
  saveData();
});

byId("singerFilter").addEventListener("click", (event) => {
  const button = event.target.closest("button[data-singer]");
  if (!button) return;
  currentSinger = button.dataset.singer;
  byId("singerFilter").querySelectorAll("button").forEach((btn) => btn.classList.toggle("active", btn === button));
  renderSongs();
});

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredInstallPrompt = event;
  byId("installBtn").hidden = false;
});

byId("installBtn").addEventListener("click", async () => {
  if (!deferredInstallPrompt) return;
  deferredInstallPrompt.prompt();
  await deferredInstallPrompt.userChoice;
  deferredInstallPrompt = null;
  byId("installBtn").hidden = true;
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => navigator.serviceWorker.register("sw.js"));
}

render();
