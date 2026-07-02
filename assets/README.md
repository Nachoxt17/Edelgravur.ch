# Photos for the website

Put your three photos in **this `assets/` folder** using these **exact file names**.
The website looks for them by name, so the names must match precisely (all lowercase).

| File name to use                | Which photo                                                        | Where it appears        |
|---------------------------------|-------------------------------------------------------------------|-------------------------|
| `hero-knives-mountain.jpg`      | The two Kuhn Rikon knives with the Jungfrau mountain engraving     | Big background at the top (hero) |
| `damascus-dark.jpg`             | The Damascus chef's knife with the **dark** wood handle            | "Craftsmanship" section |
| `damascus-burl.jpg`             | The Damascus chef's knife with the **light burl** wood handle      | "Craftsmanship" section |

## Notes
- **Until you add them**, the page still looks fine: the hero shows an elegant
  dark background and the two craft photos simply stay hidden.
- Recommended: JPG, roughly **1600–2000 px wide**, saved at good quality but
  compressed for the web (aim for under ~500 KB each so the page loads fast).
- The hero photo works best as a **wide, landscape** image. The two craft photos
  are shown in a tall 3:4 frame, so a **portrait or square** crop looks best.
- To use different file names, change them in two places:
  `index.html` (the `<img src="...">` lines and the hero comment) and
  `css/styles.css` (the `.hero { background-image: ... }` line).
