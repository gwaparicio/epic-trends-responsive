# EPIC Trends Responsive Production Redesign

A Vite + React responsive front-end for EPIC trends.

## Production homepage

The approved structure and styling are preserved:

1. Header
2. Image-only hero
3. Our Brands
4. Digital Resources
5. Showroom Appointments
6. Footer

Our Team remains a separate `/team` route. Digital Resources is now a dedicated `/digital-resources` page in the same design system. Community remains removed. The hero and overall visual design are unchanged.

## Manufacturer links

Every brand card opens the manufacturer's official website in a new tab:

| Brand card | Official destination |
| --- | --- |
| Allermuir | https://www.allermuir.com/us |
| Amish Country | https://www.amishcountry.com/ |
| Camira | https://www.camirafabrics.com/us |
| Luna Textiles | https://lunatextiles.com/ |
| Darran | https://www.darran.com/ |
| Egan | https://egan.com/ |
| Enwork | https://www.enwork.com/ |
| Martin Brattrud | https://martinbrattrud.com/ |
| Nuans Design | https://nuansdesign.com/ |
| OM Seating | https://www.omseating.com/ |
| Prismatique | https://www.prismatique.com/ |
| Senator | https://www.senator.online/ |
| Stance Healthcare | https://www.stancehealthcare.com/ |

## Manufacturer image sources

The 13 local card images were downloaded from official manufacturer sites on September 21–22, 2026. They replace the earlier prototype/concept assets. Confirm reuse rights with each manufacturer before public launch.

| Local asset | Official source page or image |
| --- | --- |
| `brand-allermuir.jpg` | https://www.allermuir.com/siteassets/allermuir/products/bastille-lounge/family/family-partial/bastille_lounge_mood_image_09.jpg |
| `brand-amish-country.jpg` | https://www.amishcountry.com/cdn/shop/files/Mobile-About-Feature.jpg |
| `brand-camira.jpg` | https://content.camirafabrics.com/media/qhedhgvf/nesta_hero_carousel.jpg |
| `brand-luna.jpg` | https://lunatextiles.com/wp-content/uploads/2025/06/Luna-Recharged-1536x659.jpg |
| `brand-darran.jpg` | https://www.darran.com/wp-content/uploads/2026/06/Carosuel_Web_NeoCon-Launch_Limousine.jpg |
| `brand-egan.jpg` | https://egan.com/wp-content/uploads/2026/01/Glass-walls.jpg |
| `brand-enwork.jpg` | https://cdn.prod.website-files.com/69d521c64df5061c5bf7dc12/6a9868e88c44a294eb70d904_Enwork_Jet_Champagne%20Bronze%20Blue%20Black_073026.jpg |
| `brand-martin-brattrud.jpg` | https://martinbrattrud.com/slir/w2800-h1400-c2800x1400/image-assets/6569.jpg |
| `brand-nuans-design.jpg` | https://nuansdesign.com/wp-content/uploads/2025/06/nuans-Moon-MODULAR-s-shape-sofa.jpg |
| `brand-om-seating.jpg` | https://www.omseating.com/wp-content/uploads/2024/07/OM5-Active-nest3840x1400-carousel-images-scaled.jpg |
| `brand-prismatique.jpg` | https://images.squarespace-cdn.com/content/v1/695e7661871dc649c4695f79/eadbc91a-ef62-47b9-9a5e-0715c5ec19e9/004+Prismatique+Parsons+Table.png |
| `brand-senator.jpg` | https://www.senator.online/siteassets/senator/generic-content/carousels/products/product-category-light-work-partial.jpg |
| `brand-stance-healthcare.jpg` | https://www.stancehealthcare.com/userContent/ecom/products/55344298-9618-4B82-AF13-97D74A468088/finals/pdl42-a24tl.jpg |

## Digital resources

The `/digital-resources` page presents EPIC trends' current 2026 regional line cards, Allermuir/Senator/Enwork Quickship documents, materials references, and table-planning guide in the approved visual language. Resource links open the original PDFs hosted by EPIC trends.

## Team and showroom image sources

The seven previously missing team portraits are now stored locally as `team-*.jpg`. Each was matched by name to the corresponding portrait on https://www.epictrends.net/ourteam. Existing Terri, Sabrina and Vanessa portraits remain sourced from the same official page.

The Showroom Appointments image is now `showroom-allermuir.jpg`, sourced from Allermuir's official Haven collection gallery. The light ivory and warm neutral upholstery was selected to complement the site's blush color palette:

https://www.allermuir.com/siteassets/allermuir/products/haven/family/pdp-carousel/haven_family_mood_image_04.jpeg?format=webp&width=1920

## Run locally

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## Deployment

- Netlify: `netlify.toml` and `_redirects` included.
- Vercel: `vercel.json` included.

## CRM integration

The showroom form supports an optional `VITE_CRM_ENDPOINT` environment variable. Set it to a CRM/webhook endpoint to forward lead data without changing the form UI.
