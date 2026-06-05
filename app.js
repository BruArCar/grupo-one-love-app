const STORAGE_KEY = "grupo-one-love-v1";
const APP_VERSION = "2026.06.seed-v2";

const states = [
  "Por confirmar",
  "Presupuesto enviado",
  "Cerrado",
  "Pendiente anticipo",
  "Pendiente cobrar",
  "Cobrado"
];

const seedBolos = [
  ["2026-06-20", "Càlig", "A.M.P.A. Càlig", "Dúo / opción discomóvil", 350, 0, "Por confirmar", "Hacer seguimiento. Todavía no saben si lo harán."],
  ["2026-06-23", "Batea", "Abel / Batea", "Trío · Rosa / Wendy / Bruno", 700, 100, "Cerrado", "Preparar repertorio, intros, recibí del anticipo, horario, ubicación, toma eléctrica y montaje."],
  ["2026-07-18", "El Pont de Suert", "Olaya", "Dúo tardeo 19:00-21:00", 700, 0, "Presupuesto enviado", "Hacer seguimiento y confirmar si acepta el precio."],
  ["2026-07-25", "Tarragona", "Barrios / empresa eventos", "Pendiente confirmar formato", 0, 0, "Por confirmar", "Pedir horario, ubicación, formato exacto, equipo necesario y precio final."],
  ["2026-08-08", "Cuesta del Rato", "Sandra", "Pendiente", 400, 0, "Cerrado", "Confirmar horario, ubicación, toma eléctrica y forma de pago."],
  ["2026-08-09", "Monterde de Albarracín", "Comisión / Ayuntamiento", "Pendiente", 350, 0, "Cerrado", "Confirmar horario, ubicación, toma eléctrica y recibí/factura."],
  ["2026-08-12", "Càlig", "Bolo de mañana", "Equipo reducido · dos altavoces", 0, 0, "Cerrado", "Guardar fecha. Confirmar horario exacto, contacto y pago."],
  ["2026-08-14", "La Pobla de Benifassà", "David", "Pendiente", 500, 0, "Cerrado", "Confirmar horario, montaje, acceso y forma de pago."],
  ["2026-08-15", "Càlig", "Motoclub Càlig", "Mañana · hora 10:00", 0, 0, "Cerrado", "Pagan allí en mano. Confirmar ubicación exacta, hora de montaje y toma eléctrica."],
  ["2026-08-20", "Herves", "Lo Botador", "Discomóvil + DJ Taky", 600, 0, "Cerrado", "Confirmar horario, acceso, toma eléctrica, montaje y pago."],
  ["2026-09-09", "Andorra, Teruel", "Pendiente", "Pendiente", 400, 0, "Cerrado", "Confirmar horario, ubicación, toma eléctrica y documentación."],
  ["2026-09-10", "Andorra, Teruel", "Pendiente", "Pendiente", 400, 0, "Cerrado", "Confirmar horario, ubicación, toma eléctrica y documentación."],
  ["2026-10-10", "Vinaròs", "Toni y Vanessa", "DJ boda", 0, 0, "Cerrado", "Confirmar horario, ubicación, entrada de invitados, montaje y música especial."],
  ["2026-07-04", "Villalgordo del Júcar", "Oportunidad", "Pendiente", 0, 0, "Presupuesto enviado", "Seguimiento."],
  ["2026-07-25", "Camping Altafulla", "Oportunidad", "Pendiente", 0, 0, "Presupuesto enviado", "Seguimiento."],
  ["2026-07-28", "Albalat dels Tarongers", "Oportunidad", "Pendiente", 0, 0, "Presupuesto enviado", "Seguimiento."],
  ["2026-08-01", "Gualba", "Carina-Trapisonde", "Pendiente", 0, 0, "Presupuesto enviado", "Seguimiento."],
  ["2026-08-11", "Picassent", "Lázaro", "Pendiente", 0, 0, "Presupuesto enviado", "Seguimiento."],
  ["2026-08-13", "Torrechiva", "Tot Per Fira", "Pendiente", 0, 0, "Presupuesto enviado", "Seguimiento."],
  ["2027-02-28", "Falla La Gallera", "Oportunidad", "Pendiente", 0, 0, "Presupuesto enviado", "Seguimiento."],
  ["2027-03-06", "Falla La Gallera", "Oportunidad", "Pendiente", 0, 0, "Presupuesto enviado", "Seguimiento."],
  ["", "Sin fecha", "Falla Plaça de la Moreria", "Pendiente", 0, 0, "Por confirmar", "Seguimiento."]
].map(([fecha, pueblo, cliente, formato, precio, anticipo, estado, paso], index) => ({
  id: `seed-bolo-${index + 1}`,
  fecha,
  pueblo,
  cliente,
  formato,
  precio,
  anticipo,
  estado,
  paso
}));

const seedTasks = [
  { id: "seed-task-1", cliente: "AMPA Càlig", estado: "No saben todavía si lo harán", prioridad: "Alta", accion: "Seguimiento sin presionar demasiado." },
  { id: "seed-task-2", cliente: "Alejandra", estado: "Contactada", prioridad: "Media", accion: "Esperar respuesta o seguimiento si pasan varios días." },
  { id: "seed-task-3", cliente: "Batea", estado: "Anticipo de 100 EUR recibido", prioridad: "Alta", accion: "Preparar recibí, controlar pendiente de 600 EUR, pedir horario, ubicación y toma eléctrica." },
  { id: "seed-task-4", cliente: "Motoclub Càlig", estado: "Cerrado", prioridad: "Alta", accion: "Actuación a las 10:00. Pagan allí en mano." },
  { id: "seed-task-5", cliente: "Olaya / El Pont de Suert", estado: "Presupuesto enviado", prioridad: "Alta", accion: "Seguimiento comercial." }
];

const protocols = {
  "No suena micro Bruno": [
    "Revisar canal en Mackie Onyx8.",
    "Comprobar gain, mute y volumen.",
    "Revisar cable XLR.",
    "Probar otro micro.",
    "Probar otro canal.",
    "Plan B: usar canal libre sin efectos."
  ],
  "No suena micro Wendy/Rosa": [
    "Revisar canal.",
    "Comprobar cable XLR.",
    "Revisar mute.",
    "Subir gain poco a poco.",
    "Cambiar micro.",
    "Plan B: compartir micro temporalmente."
  ],
  "No sale musica": [
    "Revisar salida del portatil/controladora.",
    "Revisar canal en la Mackie Onyx8.",
    "Comprobar volumen del software.",
    "Cambiar cable.",
    "Plan B: musica desde movil."
  ],
  "No detecta DMX": [
    "Revisar interfaz FTDI.",
    "Revisar Universe 1 en QLC+.",
    "Revisar cable DMX.",
    "Revisar direcciones.",
    "Plan B: luces en automatico o blanco fijo."
  ],
  "Alto TS415 suena flojo": [
    "Revisar senal de entrada.",
    "Revisar volumen del altavoz.",
    "Revisar master de la Mackie.",
    "Revisar cable.",
    "Comparar un altavoz solo."
  ],
  "Monitor acopla": [
    "Bajar volumen.",
    "Cambiar orientacion.",
    "Alejar micro.",
    "Reducir agudos/medios.",
    "Plan B: bajar monitor y usar referencia de PA."
  ],
  "Fallo de corriente": [
    "No encender todo de golpe.",
    "Separar sonido y luces si hay otra toma.",
    "Probar otra regleta.",
    "Encender primero mesa y portatil.",
    "Despues PA.",
    "Plan B: show reducido."
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

const gearGroups = {
  Sonido: [
    "Mesa Mackie Onyx8", "2 Alto TS415", "Mackie Thump", "Subgrave", "Monitores Vonyx",
    "Micros", "Portatil", "Controladora / reproductor", "Cables XLR", "Cables jack",
    "Regletas", "Alargos", "Adaptadores", "Pendrive backup", "Musica backup en movil"
  ],
  Luces: [
    "QLC+", "Interfaz DMX FTDI", "Cabezas moviles", "PAR", "Barras LED", "Spider",
    "Maquina de humo", "Liquido de humo", "Cable DMX", "Truss",
    "Escena blanca de emergencia", "Modo automatico"
  ]
};

const soundItems = gearGroups.Sonido;
const lightItems = gearGroups.Luces;

const songs = [
  { title: "Amigo", singer: "Bruno", level: "repertorio 23/06" },
  { title: "La perla", singer: "Wendy", level: "repertorio 23/06" },
  { title: "Pasodoble Rosa", singer: "Rosa", level: "pasodoble" },
  { title: "Un beso", singer: "Wendy", level: "repertorio 23/06" },
  { title: "La morocha", singer: "Bruno", level: "repertorio 23/06" },
  { title: "Noche de copas", singer: "Rosa", level: "repertorio 23/06" },
  { title: "20 de abril", singer: "Bruno", level: "repertorio 23/06" },
  { title: "No se no se", singer: "Bruno", level: "repertorio 23/06" },
  { title: "Este amor ya no se toca", singer: "Wendy", level: "repertorio 23/06" },
  { title: "Waka Waka", singer: "Rosa", level: "repertorio 23/06" },
  { title: "Esa diva / La diva", singer: "Rosa", level: "repertorio 23/06" },
  { title: "Queen final", singer: "Todos", level: "final obligatorio" }
];

const rehearsalNotes = [
  "Formato: Trio · Rosa, Wendy y Bruno.",
  "Alternar una cancion cada uno siempre que sea posible.",
  "Meter pasodobles al principio.",
  "Bruno canta Amigo, 20 de abril y La morocha.",
  "Wendy canta La perla y Un beso.",
  "Rosa canta Esa diva / La diva.",
  "No repetir canciones.",
  "Terminar con Queen."
];

const seedClips = [
  {
    id: "seed-clip-1",
    nombre: "Publico bailando",
    energia: "Alta",
    sirve: "Ayuntamientos, fiestas de pueblo, Facebook",
    hook: "Asi acaba un tardeo cuando Grupo One Love entra en accion.",
    texto: "",
    hashtags: "#GrupoOneLove #FiestasDePueblo #Tardeo"
  },
  {
    id: "seed-clip-2",
    nombre: "Luces + humo + escenario",
    energia: "Alta",
    sirve: "TikTok, Instagram Reels, empresas de contratacion",
    hook: "No hace falta un escenario gigante para montar una fiesta potente.",
    texto: "",
    hashtags: "#Discomovil #MusicaEnDirecto #Eventos"
  },
  {
    id: "seed-clip-3",
    nombre: "Bruno / Wendy / Rosa cantando",
    energia: "Media",
    sirve: "Showroom, dossier, clientes que piden ver formato",
    hook: "Tres voces, repertorio variado y un show preparado para que la gente participe.",
    texto: "",
    hashtags: "#ShowroomMusical #TrioMusical #GrupoOneLove"
  }
];

const formats = [
  ["Duo", "Para tardeos, bares, comidas, fiestas privadas y eventos medianos.", "Tardeos, bares, comidas, fiestas privadas y eventos medianos.", "450-650 EUR"],
  ["Trio", "Mas presencia escenica, mas voces, mas movimiento y mas impacto visual.", "Eventos medianos, plazas, fiestas privadas y campings.", "650-800 EUR"],
  ["Cuarteto", "Opcion mas completa para escenarios grandes, fiestas de pueblo y eventos potentes.", "Escenarios grandes, fiestas de pueblo y programaciones fuertes.", "Desde 850 EUR"],
  ["DJ / Discomovil", "Complemento para alargar la fiesta despues del show o cubrir formato DJ completo.", "Finales de fiesta, bodas, tardeos largos y discomovil completa.", "+200-300 EUR"]
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
const salesMessage = `Hola, somos Grupo One Love.

Estamos cerrando fechas para fiestas, tardeos y eventos de 2026.
Trabajamos formatos Duo, Trio, Cuarteto y opcion DJ/Discomovil, adaptandonos al espacio y al tipo de publico.

Si estais preparando programacion, puedo pasaros una propuesta rapida con formato recomendado, precio y condiciones.

Gracias.`;

const defaultData = {
  version: APP_VERSION,
  bolos: seedBolos,
  clips: seedClips,
  tasks: seedTasks,
  checklists: { sonido: {}, luces: {} }
};

let data = loadData();
let currentSinger = "Todos";
let deferredInstallPrompt = null;

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function normalizeData(value) {
  return {
    ...clone(defaultData),
    ...value,
    bolos: Array.isArray(value?.bolos) ? value.bolos : clone(defaultData.bolos),
    clips: Array.isArray(value?.clips) ? value.clips : clone(defaultData.clips),
    tasks: Array.isArray(value?.tasks) ? value.tasks : clone(defaultData.tasks),
    checklists: {
      sonido: value?.checklists?.sonido || {},
      luces: value?.checklists?.luces || {}
    }
  };
}

function loadData() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return clone(defaultData);
  try {
    return normalizeData(JSON.parse(stored));
  } catch {
    return clone(defaultData);
  }
}

function saveData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  render();
}

function restoreSeedData() {
  if (!confirm("Esto borrara los datos guardados en este movil y cargara los datos iniciales. ¿Quieres continuar?")) return;
  data = clone(defaultData);
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

function sortedBolos() {
  return [...data.bolos].sort((a, b) => (a.fecha || "9999-99-99").localeCompare(b.fecha || "9999-99-99"));
}

function renderBolos() {
  byId("bolosList").innerHTML = sortedBolos().map((bolo) => card(
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

function renderTasks() {
  byId("taskList").innerHTML = data.tasks.map((task) => card(
    task.cliente,
    `<p><strong>Estado:</strong> ${task.estado}<br><strong>Accion:</strong> ${task.accion}</p>`,
    [`<span class="${task.prioridad === "Alta" ? "state danger" : "state warn"}">${task.prioridad}</span>`]
  )).join("");
}

function renderHomeAndDashboard() {
  const activeBolos = data.bolos.filter((b) => b.estado !== "Cobrado");
  const urgent = activeBolos.filter((b) => b.estado.includes("Pendiente") || b.estado === "Por confirmar");
  const follow = activeBolos.filter((b) => b.paso);
  const hotTasks = data.tasks.filter((task) => task.prioridad === "Alta");
  const pendingMoney = data.bolos.reduce((sum, b) => {
    if (b.estado === "Cobrado" || b.estado === "Por confirmar") return sum;
    return sum + pending(b);
  }, 0);
  const closed = data.bolos.filter((b) => ["Cerrado", "Pendiente anticipo", "Pendiente cobrar", "Cobrado"].includes(b.estado)).length;
  const sent = data.bolos.filter((b) => b.estado === "Presupuesto enviado").length;

  byId("urgentCount").textContent = urgent.length;
  byId("pendingMoney").textContent = money(pendingMoney);
  byId("followCount").textContent = follow.length + hotTasks.length;
  byId("urgentList").innerHTML = [
    ...urgent.slice(0, 4).map((b) => card(
      `${b.pueblo || "Bolo"} · ${b.estado}`,
      `<p>${b.cliente || "Cliente por definir"} · ${b.paso || "Llamar o escribir seguimiento"}</p>`
    )),
    ...hotTasks.slice(0, 3).map((task) => card(
      `${task.cliente} · Cliente caliente`,
      `<p>${task.accion}</p>`,
      [`<span class="state danger">${task.prioridad}</span>`]
    ))
  ].join("");
  byId("closedShows").textContent = closed;
  byId("liveOpps").textContent = activeBolos.length;
  byId("dashPending").textContent = money(pendingMoney);
  byId("sentBudgets").textContent = sent;
  byId("hotClients").textContent = hotTasks.length;
  byId("nextAction").textContent = hotTasks[0]
    ? `Prioridad: ${hotTasks[0].cliente}. ${hotTasks[0].accion}`
    : urgent[0]
      ? `Prioridad: ${urgent[0].cliente || "cliente"} en ${urgent[0].pueblo || "pueblo"} (${urgent[0].estado}). ${urgent[0].paso || "Enviar seguimiento hoy."}`
      : "Crear o revisar oportunidades en Radar y enviar el mensaje comercial a nuevos contactos.";
}

function renderTechnique() {
  byId("protocolButtons").innerHTML = Object.keys(protocols).map((name) => `<button data-protocol="${name}">${name}</button>`).join("");
  byId("gearList").innerHTML = Object.entries(gearGroups).map(([group, items]) => `
    <div class="gear-group">
      <h4>${group}</h4>
      <div class="tag-list">${items.map((item) => `<span class="tag">${item}</span>`).join("")}</div>
    </div>
  `).join("");
}

function renderChecklist(target, items, group) {
  byId(target).innerHTML = items.map((item) => {
    const checked = data.checklists[group][item] ? "checked" : "";
    return `<label><input type="checkbox" data-check="${group}" value="${item}" ${checked}>${item}</label>`;
  }).join("");
}

function renderSongs() {
  const visible = songs.filter((song) => currentSinger === "Todos" || song.singer === currentSinger || song.singer === "Todos");
  byId("songList").innerHTML = visible.map((song, index) => card(
    `${index + 1}. ${song.title}`,
    `<p>Cantante: ${song.singer}</p>`,
    [`<span class="tag">${song.level}</span>`]
  )).join("");
  byId("repertoireNotes").innerHTML = rehearsalNotes.map((note) => `<li>${note}</li>`).join("");
}

function renderClips() {
  byId("clipsList").innerHTML = data.clips.map((clip) => card(
    clip.nombre,
    `<p>${clip.hook || "Sin hook"}<br>${clip.texto || "Texto comercial pendiente"}</p>`,
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
  renderTasks();
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
  if (button.id === "restoreSeedBtn") restoreSeedData();

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
    byId("rehearsalPlan").innerHTML = [
      "5 min · prueba de micros Bruno, Wendy y Rosa",
      "8 min · pasodobles y entradas",
      "12 min · alternar Bruno / Wendy / Rosa sin repetir canciones",
      "8 min · repasar Amigo, La perla, Un beso, La morocha y Esa diva / La diva",
      "6 min · transiciones habladas",
      "6 min · Queen final"
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
