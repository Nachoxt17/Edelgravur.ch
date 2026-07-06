/* ============================================================================
   EDELGRAVUR.CH — Translations & interactivity
   ----------------------------------------------------------------------------
   WHAT THIS FILE DOES
     1. Holds every piece of text on the site, in 4 languages (de/fr/it/en).
     2. Fills each HTML element that has a  data-i18n="key"  attribute.
     3. Runs the language switch buttons + the mobile menu button.

   HOW TO EDIT WORDING
     • Find the key you want under the right language below and change the text.
     • English (en) is the "source of truth" — keep the others in sync with it.
     • To add a NEW piece of text: add  data-i18n="my.key"  in index.html, then
       add "my.key": "…" to ALL FOUR languages here.

   The four language objects all use the SAME keys, so it's easy to compare.
   ============================================================================ */

const translations = {

  /* ------------------------------------------------------------------ ENGLISH */
  en: {
    "meta.title": "Edelgravur — Mobile Laser Engraving for Hotels & Fine Kitchens",
    "meta.desc":  "Mobile laser engraving for Switzerland's finest hotels and restaurants. We come to you to mark cutlery, cookware and kitchen tools — logos for prestige, serial numbers for order.",

    "nav.service": "Service",
    "nav.pillars": "Two Ways to Engrave",
    "nav.how":     "How It Works",
    "nav.where":   "Where We Work",
    "nav.contact": "Contact",
    "nav.cta":     "Request a Visit",

    "hero.overline": "Mobile Laser Engraving · Swiss Made",
    "hero.title":    "Your mark, engraved to last.",
    "hero.subline":  "We bring precision laser engraving to your door — permanently marking the cutlery, cookware and kitchen tools of Switzerland's finest hotels and restaurants.",
    "hero.cta1":     "Request a Visit",
    "hero.cta2":     "Discover the Service",

    "intro.eyebrow": "The Service",
    "intro.title":   "A workshop on wheels.",
    "intro.body":    "Our fully-equipped engraving studio travels in a van and sets up right at your establishment. No shipping, no downtime, no risk of losing a single piece — your tools never leave the building. From a single signature chef's knife to a complete inventory, we work on-site, cleanly and precisely, and hand everything back ready for service.",

    "pillars.eyebrow": "Two Ways to Engrave",
    "pillars.title":   "One craft, two purposes.",

    "pillar1.kicker": "Distinction",
    "pillar1.title":  "Your logo, on every piece.",
    "pillar1.body":   "Turn everyday tools into a statement of identity. We engrave your emblem, monogram or wordmark into blades, handles and cookware with jeweller-grade precision — a quiet mark of prestige that guests notice and staff take pride in.",
    "pillar1.tags":   "Prestige · Elegance · Luxury",

    "pillar2.kicker": "Order",
    "pillar2.title":  "Numbered, named, accounted for.",
    "pillar2.body":   "Bring calm to a busy kitchen. We engrave serial numbers, storage locations, set references and department codes directly onto your equipment — so every item has a home, inventory is effortless, and nothing walks off. Durable, legible, and impossible to peel away.",
    "pillar2.tags":   "Practicality · Order · Efficiency",

    "craft.eyebrow": "Craftsmanship",
    "craft.title":   "Engraved to endure.",
    "craft.body":    "Our laser marks stainless steel, Damascus, titanium, aluminium and coated surfaces without weakening the material or dulling an edge. The result is permanent, food-safe, corrosion-resistant and as beautiful up close as it is practical in daily use.",

    "how.eyebrow": "How It Works",
    "how.title":   "From first call to back in service.",
    "how.step1.t": "Get in touch",
    "how.step1.b": "Tell us what you'd like marked and where you are.",
    "how.step2.t": "We come to you",
    "how.step2.b": "Our engraving van arrives at your establishment at an agreed time.",
    "how.step3.t": "We engrave on-site",
    "how.step3.b": "Logos or inventory data, applied precisely while you watch.",
    "how.step4.t": "Back in service",
    "how.step4.b": "Your tools are returned immediately, permanently marked and ready to use.",

    "where.eyebrow": "Where We Work",
    "where.title":   "Based in the Bernese Oberland — heading across Switzerland.",
    "where.body":    "We start close to home in Grindelwald and the surrounding valleys, and travel throughout Switzerland by arrangement. Expanding soon into France. If you run a hotel or restaurant and want your tools marked, ask us about coming to you.",

    "contact.eyebrow":        "Contact",
    "contact.title":          "Let's mark your tools.",
    "contact.body":           "Tell us about your establishment and what you'd like engraved — we'll arrange a visit.",
    "contact.location_label": "Location",
    "contact.location":       "Grindelwald 3818, Switzerland",
    "contact.email_label":    "Email",
    "contact.phone_label":    "Phone",

    "footer.tagline": "Mobile Laser Engraving · Switzerland",
    "footer.rights":  "© 2026 Edelgravur · All rights reserved.",
  },

  /* ------------------------------------------------------------------- GERMAN */
  de: {
    "meta.title": "Edelgravur — Mobile Lasergravur für Hotels & gehobene Küchen",
    "meta.desc":  "Mobile Lasergravur für die besten Hotels und Restaurants der Schweiz. Wir kommen zu Ihnen und gravieren Besteck, Kochgeschirr und Küchenwerkzeuge — Logos für Prestige, Seriennummern für Ordnung.",

    "nav.service": "Leistung",
    "nav.pillars": "Zwei Arten zu Gravieren",
    "nav.how":     "So funktioniert's",
    "nav.where":   "Einsatzgebiet",
    "nav.contact": "Kontakt",
    "nav.cta":     "Besuch anfragen",

    "hero.overline": "Mobile Lasergravur · Swiss Made",
    "hero.title":    "Ihr Zeichen, für die Ewigkeit graviert.",
    "hero.subline":  "Wir bringen präzise Lasergravur direkt zu Ihnen — und markieren dauerhaft das Besteck, Kochgeschirr und die Küchenwerkzeuge der besten Hotels und Restaurants der Schweiz.",
    "hero.cta1":     "Besuch anfragen",
    "hero.cta2":     "Die Leistung entdecken",

    "intro.eyebrow": "Die Leistung",
    "intro.title":   "Eine Werkstatt auf Rädern.",
    "intro.body":    "Unser voll ausgestattetes Gravuratelier reist im Van an und richtet sich direkt in Ihrem Betrieb ein. Kein Versand, kein Stillstand, kein Risiko, ein einziges Stück zu verlieren — Ihre Werkzeuge verlassen das Haus nie. Vom einzelnen Signature-Kochmesser bis zum kompletten Inventar arbeiten wir vor Ort, sauber und präzise, und geben alles einsatzbereit zurück.",

    "pillars.eyebrow": "Zwei Arten zu Gravieren",
    "pillars.title":   "Ein Handwerk, zwei Zwecke.",

    "pillar1.kicker": "Distinktion",
    "pillar1.title":  "Ihr Logo, auf jedem Stück.",
    "pillar1.body":   "Machen Sie aus alltäglichen Werkzeugen ein Zeichen Ihrer Identität. Wir gravieren Ihr Emblem, Monogramm oder Ihren Schriftzug mit feinster Präzision in Klingen, Griffe und Kochgeschirr — ein stilles Zeichen von Prestige, das Gäste bemerken und auf das Ihr Team stolz ist.",
    "pillar1.tags":   "Prestige · Eleganz · Luxus",

    "pillar2.kicker": "Ordnung",
    "pillar2.title":  "Nummeriert, benannt, erfasst.",
    "pillar2.body":   "Bringen Sie Ruhe in eine hektische Küche. Wir gravieren Seriennummern, Lagerorte, Set-Referenzen und Abteilungscodes direkt auf Ihre Ausrüstung — so hat jedes Teil seinen Platz, die Inventur gelingt mühelos und nichts verschwindet. Beständig, gut lesbar und unmöglich abzulösen.",
    "pillar2.tags":   "Praktisch · Ordnung · Effizienz",

    "craft.eyebrow": "Handwerk",
    "craft.title":   "Graviert, um zu bleiben.",
    "craft.body":    "Unser Laser markiert Edelstahl, Damast, Titan, Aluminium und beschichtete Oberflächen, ohne das Material zu schwächen oder die Schneide zu beeinträchtigen. Das Ergebnis ist dauerhaft, lebensmittelecht, korrosionsbeständig und aus der Nähe ebenso schön wie im täglichen Gebrauch praktisch.",

    "how.eyebrow": "So funktioniert's",
    "how.title":   "Vom ersten Anruf bis zurück in den Einsatz.",
    "how.step1.t": "Kontakt aufnehmen",
    "how.step1.b": "Sagen Sie uns, was Sie gravieren möchten und wo Sie sind.",
    "how.step2.t": "Wir kommen zu Ihnen",
    "how.step2.b": "Unser Gravur-Van erreicht Ihren Betrieb zum vereinbarten Zeitpunkt.",
    "how.step3.t": "Wir gravieren vor Ort",
    "how.step3.b": "Logos oder Inventardaten, präzise angebracht, während Sie zusehen.",
    "how.step4.t": "Zurück im Einsatz",
    "how.step4.b": "Ihre Werkzeuge kommen sofort zurück — dauerhaft graviert und einsatzbereit.",

    "where.eyebrow": "Einsatzgebiet",
    "where.title":   "Zuhause im Berner Oberland — unterwegs in der ganzen Schweiz.",
    "where.body":    "Wir starten in unserer Nähe in Interlaken und den umliegenden Tälern und reisen nach Vereinbarung durch die ganze Schweiz. Bald auch in Frankreich. Wenn Sie ein Hotel oder Restaurant führen und Ihre Werkzeuge markieren möchten, fragen Sie uns — wir kommen zu Ihnen.",

    "contact.eyebrow":        "Kontakt",
    "contact.title":          "Markieren wir Ihre Werkzeuge.",
    "contact.body":           "Erzählen Sie uns von Ihrem Betrieb und was Sie gravieren möchten — wir vereinbaren einen Besuch.",
    "contact.location_label": "Standort",
    "contact.location":       "Interlaken 3800, Schweiz",
    "contact.email_label":    "E-Mail",
    "contact.phone_label":    "Telefon",

    "footer.tagline": "Mobile Lasergravur · Schweiz",
    "footer.rights":  "© 2026 Edelgravur · Alle Rechte vorbehalten.",
  },

  /* ------------------------------------------------------------------- FRENCH */
  fr: {
    "meta.title": "Edelgravur — Gravure laser mobile pour hôtels et cuisines d'exception",
    "meta.desc":  "Gravure laser mobile pour les meilleurs hôtels et restaurants de Suisse. Nous venons à vous pour marquer couverts, ustensiles et outils de cuisine — logos pour le prestige, numéros de série pour l'ordre.",

    "nav.service": "Service",
    "nav.pillars": "Deux façons de graver",
    "nav.how":     "Comment ça marche",
    "nav.where":   "Zone d'intervention",
    "nav.contact": "Contact",
    "nav.cta":     "Demander une visite",

    "hero.overline": "Gravure laser mobile · Swiss Made",
    "hero.title":    "Votre marque, gravée pour durer.",
    "hero.subline":  "Nous apportons la gravure laser de précision jusqu'à votre porte — pour marquer durablement les couverts, ustensiles et outils de cuisine des plus belles adresses de Suisse.",
    "hero.cta1":     "Demander une visite",
    "hero.cta2":     "Découvrir le service",

    "intro.eyebrow": "Le service",
    "intro.title":   "Un atelier sur roues.",
    "intro.body":    "Notre atelier de gravure entièrement équipé se déplace en van et s'installe directement dans votre établissement. Pas d'envoi, pas d'interruption, aucun risque de perdre la moindre pièce — vos outils ne quittent jamais les lieux. D'un simple couteau de chef signature à un inventaire complet, nous travaillons sur place, proprement et avec précision, et vous rendons tout prêt à l'emploi.",

    "pillars.eyebrow": "Deux façons de graver",
    "pillars.title":   "Un savoir-faire, deux usages.",

    "pillar1.kicker": "Distinction",
    "pillar1.title":  "Votre logo, sur chaque pièce.",
    "pillar1.body":   "Transformez des outils du quotidien en signe d'identité. Nous gravons votre emblème, votre monogramme ou votre logotype dans les lames, les manches et les ustensiles avec une précision de joaillier — une marque discrète de prestige que les clients remarquent et dont votre équipe est fière.",
    "pillar1.tags":   "Prestige · Élégance · Luxe",

    "pillar2.kicker": "Ordre",
    "pillar2.title":  "Numéroté, nommé, répertorié.",
    "pillar2.body":   "Apportez de la sérénité à une cuisine animée. Nous gravons numéros de série, lieux de rangement, références de lots et codes de service directement sur votre matériel — ainsi chaque pièce a sa place, l'inventaire devient simple et rien ne disparaît. Durable, lisible et impossible à décoller.",
    "pillar2.tags":   "Praticité · Ordre · Efficacité",

    "craft.eyebrow": "Savoir-faire",
    "craft.title":   "Gravé pour durer.",
    "craft.body":    "Notre laser marque l'acier inoxydable, le damas, le titane, l'aluminium et les surfaces revêtues sans affaiblir le matériau ni émousser le tranchant. Le résultat est permanent, compatible avec les aliments, résistant à la corrosion et aussi beau de près que pratique au quotidien.",

    "how.eyebrow": "Comment ça marche",
    "how.title":   "Du premier appel au retour en service.",
    "how.step1.t": "Prenez contact",
    "how.step1.b": "Dites-nous ce que vous souhaitez marquer et où vous êtes.",
    "how.step2.t": "Nous venons à vous",
    "how.step2.b": "Notre van de gravure arrive dans votre établissement à l'heure convenue.",
    "how.step3.t": "Nous gravons sur place",
    "how.step3.b": "Logos ou données d'inventaire, appliqués avec précision sous vos yeux.",
    "how.step4.t": "De retour en service",
    "how.step4.b": "Vos outils vous sont rendus immédiatement, gravés durablement et prêts à l'emploi.",

    "where.eyebrow": "Zone d'intervention",
    "where.title":   "Basés dans l'Oberland bernois — en route à travers la Suisse.",
    "where.body":    "Nous commençons tout près, à Interlaken et dans les vallées environnantes, et nous nous déplaçons dans toute la Suisse sur rendez-vous. Bientôt en France. Si vous dirigez un hôtel ou un restaurant et souhaitez faire marquer vos outils, demandez-nous de venir à vous.",

    "contact.eyebrow":        "Contact",
    "contact.title":          "Marquons vos outils.",
    "contact.body":           "Parlez-nous de votre établissement et de ce que vous souhaitez graver — nous organiserons une visite.",
    "contact.location_label": "Lieu",
    "contact.location":       "Interlaken 3800, Suisse",
    "contact.email_label":    "E-mail",
    "contact.phone_label":    "Téléphone",

    "footer.tagline": "Gravure laser mobile · Suisse",
    "footer.rights":  "© 2026 Edelgravur · Tous droits réservés.",
  },

  /* ------------------------------------------------------------------ ITALIAN */
  it: {
    "meta.title": "Edelgravur — Incisione laser mobile per hotel e cucine d'eccellenza",
    "meta.desc":  "Incisione laser mobile per i migliori hotel e ristoranti della Svizzera. Veniamo da voi per marcare posate, pentole e utensili da cucina — loghi per il prestigio, numeri di serie per l'ordine.",

    "nav.service": "Servizio",
    "nav.pillars": "Due modi di incidere",
    "nav.how":     "Come funziona",
    "nav.where":   "Zona di intervento",
    "nav.contact": "Contatto",
    "nav.cta":     "Richiedi una visita",

    "hero.overline": "Incisione laser mobile · Swiss Made",
    "hero.title":    "Il vostro marchio, inciso per durare.",
    "hero.subline":  "Portiamo l'incisione laser di precisione fino alla vostra porta — per marcare in modo permanente posate, pentole e utensili da cucina dei migliori hotel e ristoranti della Svizzera.",
    "hero.cta1":     "Richiedi una visita",
    "hero.cta2":     "Scopri il servizio",

    "intro.eyebrow": "Il servizio",
    "intro.title":   "Un laboratorio su ruote.",
    "intro.body":    "Il nostro atelier di incisione completamente attrezzato viaggia su un van e si installa direttamente nel vostro locale. Nessuna spedizione, nessun fermo, nessun rischio di perdere un solo pezzo — i vostri strumenti non lasciano mai l'edificio. Da un singolo coltello da chef signature a un intero inventario, lavoriamo sul posto, in modo pulito e preciso, e restituiamo tutto pronto all'uso.",

    "pillars.eyebrow": "Due modi di incidere",
    "pillars.title":   "Un'arte, due scopi.",

    "pillar1.kicker": "Distinzione",
    "pillar1.title":  "Il vostro logo, su ogni pezzo.",
    "pillar1.body":   "Trasformate gli strumenti di ogni giorno in un segno di identità. Incidiamo il vostro emblema, monogramma o logotipo su lame, manici e pentole con precisione da gioielliere — un discreto segno di prestigio che gli ospiti notano e di cui il vostro team va fiero.",
    "pillar1.tags":   "Prestigio · Eleganza · Lusso",

    "pillar2.kicker": "Ordine",
    "pillar2.title":  "Numerato, nominato, registrato.",
    "pillar2.body":   "Portate serenità in una cucina frenetica. Incidiamo numeri di serie, luoghi di stoccaggio, riferimenti di set e codici di reparto direttamente sulla vostra attrezzatura — così ogni pezzo ha il suo posto, l'inventario diventa semplice e nulla sparisce. Resistente, leggibile e impossibile da staccare.",
    "pillar2.tags":   "Praticità · Ordine · Efficienza",

    "craft.eyebrow": "Artigianalità",
    "craft.title":   "Inciso per durare.",
    "craft.body":    "Il nostro laser marca acciaio inox, damasco, titanio, alluminio e superfici rivestite senza indebolire il materiale né rovinare il filo. Il risultato è permanente, sicuro per gli alimenti, resistente alla corrosione e bello da vicino quanto pratico nell'uso quotidiano.",

    "how.eyebrow": "Come funziona",
    "how.title":   "Dalla prima chiamata al ritorno in servizio.",
    "how.step1.t": "Contattateci",
    "how.step1.b": "Diteci cosa desiderate marcare e dove vi trovate.",
    "how.step2.t": "Veniamo da voi",
    "how.step2.b": "Il nostro van per l'incisione raggiunge il vostro locale all'ora concordata.",
    "how.step3.t": "Incidiamo sul posto",
    "how.step3.b": "Loghi o dati di inventario, applicati con precisione sotto i vostri occhi.",
    "how.step4.t": "Di nuovo in servizio",
    "how.step4.b": "I vostri strumenti vi vengono restituiti subito, incisi in modo permanente e pronti all'uso.",

    "where.eyebrow": "Zona di intervento",
    "where.title":   "Con base nell'Oberland bernese — in viaggio per tutta la Svizzera.",
    "where.body":    "Iniziamo vicino a casa, a Interlaken e nelle valli circostanti, e ci spostiamo in tutta la Svizzera su appuntamento. Presto anche in Francia. Se gestite un hotel o un ristorante e volete far marcare i vostri strumenti, chiedeteci di venire da voi.",

    "contact.eyebrow":        "Contatto",
    "contact.title":          "Marchiamo i vostri strumenti.",
    "contact.body":           "Raccontateci del vostro locale e di cosa desiderate incidere — organizzeremo una visita.",
    "contact.location_label": "Luogo",
    "contact.location":       "Interlaken 3800, Svizzera",
    "contact.email_label":    "E-mail",
    "contact.phone_label":    "Telefono",

    "footer.tagline": "Incisione laser mobile · Svizzera",
    "footer.rights":  "© 2026 Edelgravur · Tutti i diritti riservati.",
  },

};

/* ============================================================================
   ENGINE — you normally don't need to touch anything below this line.
   ============================================================================ */

// The languages we offer, and the one to use if nothing else matches.
const SUPPORTED_LANGS = ["de", "fr", "it", "en"];
const DEFAULT_LANG = "en";
const STORAGE_KEY = "edelgravur-lang";

/**
 * Apply a language to the whole page:
 *  - swap every element that has data-i18n
 *  - update <html lang>, the tab <title> and the meta description
 *  - highlight the active language button
 */
function setLanguage(lang) {
  if (!SUPPORTED_LANGS.includes(lang)) lang = DEFAULT_LANG;
  const dict = translations[lang];

  // 1) Replace the text of every tagged element.
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  // 2) Update document-level metadata (helps SEO and the browser tab).
  document.documentElement.lang = lang;
  if (dict["meta.title"]) document.title = dict["meta.title"];
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && dict["meta.desc"]) metaDesc.setAttribute("content", dict["meta.desc"]);

  // 3) Mark the matching language button as active.
  document.querySelectorAll(".lang-switch button").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.lang === lang);
  });

  // 4) Remember the choice for next time.
  try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* storage disabled */ }
}

/** Decide which language to show on first load. */
function detectInitialLang() {
  // a) A previously saved choice wins.
  let saved;
  try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) { /* ignore */ }
  if (saved && SUPPORTED_LANGS.includes(saved)) return saved;

  // b) Otherwise use the browser's language (e.g. "de-CH" -> "de").
  const browser = (navigator.language || "").slice(0, 2).toLowerCase();
  if (SUPPORTED_LANGS.includes(browser)) return browser;

  // c) Fall back to English.
  return DEFAULT_LANG;
}

// Wire everything up once the page is ready.
document.addEventListener("DOMContentLoaded", () => {

  // Set the initial language.
  setLanguage(detectInitialLang());

  // Language buttons.
  document.querySelectorAll(".lang-switch button").forEach((btn) => {
    btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
  });

  // Mobile hamburger menu: toggle the dropdown open/closed.
  const toggle = document.getElementById("nav-toggle");
  const nav = document.getElementById("main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    // Close the menu after tapping any link inside it (nicer on phones).
    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }
});
