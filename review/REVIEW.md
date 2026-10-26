# Arwyn portfolio review

The edit selects **36 collection photos plus one desktop hero from 159 unique new photos**, retains all **18 existing collection photos**, and reduces the new material from 13 provisional groups to **seven coherent new collections**. The site now has **12 collections / 54 collection photos** and a **nine-image Selected Work grid** with five new images and four existing images.

This is an editorial judgement based on expression, pose, composition, background control, variety and usefulness in a solo model portfolio. It is not a score of the model's appearance. All 159 unique new photos and the existing portfolio were visually reviewed in contact sheets; the final selection and representative compression comparisons were checked separately.

## Comparison with the existing portfolio

The existing red-lit portrait remains a strong dramatic image. The lakeside parasol image, woodland standing portrait and gold stage image retain location, mood and performance range. Previously four of the six selected images used the same pale-blue-and-black outfit around the lake and woods, including an overhead landscape frame. That made the front grid feel narrower than the available work.

The staircase close portrait and monochrome studio portrait are the strongest new face-led additions: they give the eyes and expression more prominence, with controlled backgrounds. The floral movement image adds a full-length fashion view. Pastel Knit adds a softer interior mood; Pink Boots adds a different styling and vehicle setting. The new photos complement the original work; the red stage and strongest outdoor images still earn their places.

The original woodland framed-by-trees and overhead forest-floor images remain inside Woodland rather than occupying additional front-grid positions. No original shoot photos are removed.

## Selected Work order

1. Black gown staircase portrait — new; a strong direct introduction.
2. Red stage portrait — existing; dramatic light and a different mood.
3. Floral dress in motion — new; full-length fashion and movement.
4. Lakeside parasol portrait — existing; recognisable location work.
5. Monochrome studio portrait — new; face-led studio range.
6. Pink boots seated in truck — new; complete styling and a different setting.
7. Woodland standing portrait — existing; strongest clear standing woodland view.
8. Pastel knit hanging-chair portrait — new; softer colour and expression.
9. Gold stage image — existing; performance pose and lighting variety.

## Collection decisions

None of the new groups should be appended to the five existing shoots merely because a prop or broad theme overlaps. A studio parasol does not make it part of Lakeside Parasol; a pumpkin does not make a bedroom or vehicle image part of Woodland Ghosts. Shoot dates are not supplied, so the seven new groupings are visual collections rather than claims that each was photographed in one session.

| New collection | Selected | Decision |
|---|---:|---|
| Black Gown Editorial | 7 | Staircase and candlelit interiors share the black-gown styling. One coherent fashion collection is stronger than two small location folders. |
| Pastel Knit | 6 | The hanging chair and leather sofa form one soft-knit story. Keep a small mix of portraits, seated poses and a wide interior view. |
| Floral Dress | 5 | Garden and interior frames share the same floral dress; combine them into a fashion story. The outfit and lighting differ from the existing woodland shoots. |
| Pink Boots | 6 | Truck and motorcycle share the same black-and-white outfit and pink boots. Combine the locations to avoid two repetitive collections. |
| Studio Portraits | 5 | A clean studio background and graphic black outfit add a setting missing from the existing site. The parasol is a prop here, not a reason to merge with Lakeside Parasol. |
| Bedroom Portraits | 4 | Keep four direct, readable portraits together. Omit the obscured mirror frames and repeated reclining poses; a pumpkin prop alone does not connect this to the woodland ghost shoot. |
| Autumn Leather | 3 | Three complementary leather-and-pumpkin images make a compact seasonal collection. Different wardrobe and location justify keeping it separate from Woodland Ghosts. |

## Material held in reserve

122 unique new photographs are left out of the deployable site. Most are alternative poses, crops or expressions already represented by a stronger selected frame. Colour and monochrome alternatives are retained only where they add a different purpose.

The balcony set is held back as a whole: railings repeatedly cut across the figure, and garden furniture competes with the subject. The selected gown and studio frames offer cleaner presentation. Group truck portraits are held back because the solo portraits make Arwyn more prominent. Obscured mirror views and repeated bedroom reclining poses are also held back. This is a portfolio edit, not a finding that those photographs have no other use.

No source photos have been deleted or moved. The full original and organised packages remain in their existing locations. The five exact source duplicates need no additional gallery entries. `photo-decisions.csv` records all 164 source filenames, including selected, reserve and duplicate decisions. `optimisation.csv` records every selected new image's source, final path, dimensions, quality and comparison measurements.

## Naming and optimisation

The 36 selected images have descriptive, lowercase names in seven folders under `images/shoots/`, such as `black-gown-editorial/01-arwyn-staircase-portrait.webp`. Names and numbering follow the gallery sequence. Selected Work references those same files; it does not create another copy.

Each selected new WebP was encoded directly from its source JPEG, not recompressed from the earlier WebP package. EXIF orientation is applied, embedded metadata is omitted, original pixel dimensions are retained, and no upscaling, cropping, retouching or colour adjustment is applied to the files. The website's existing card cropping remains a display choice; the lightbox shows the full image.

Quality is chosen per image using the first candidate meeting local-window RGB SSIM of at least 0.985 and PSNR of at least 40 dB against the oriented source. These measurements support the visual comparison, but do not guarantee every observer will perceive images identically. Existing compressed source files limit available detail; conversion cannot restore it.

The 36 collection-source JPEGs total 2.75 MB; selected WebP files total 3.97 MB. High-quality WebP is not smaller than the already compressed JPEGs in this selection; quality was prioritised over a lower byte count. The large reduction from the all-photo package comes from editorial selection.

Minimum measured SSIM: 0.9851; minimum PSNR: 40.04 dB.

## Website and deployment

The desktop hero now uses the wide staircase frame (source Snapchat-458507834.jpg). This landscape composition shows both stair rails and the pose across the full screen, giving the opening more energy without the extreme crop of a portrait-format source. The seated black-gown portrait remains the phone hero. Social-sharing metadata uses the wide frame. The title stays below the face, with light shading behind the lettering. The original woodland hero file remains available in the package. Model Info height is corrected to 5'1".

The existing colours, typography, mobile breakpoints, hover effects, collection viewer and lightbox remain. New and existing cards reveal individually so a long mobile grid does not remain hidden below the old observer threshold. The six-to-nine change expands Selected Work within its existing desktop three-column and mobile one-column layout.

See `TEST-RESULTS.txt` for the completed checks and `DEPLOYMENT.txt` for upload steps. The original Email link still has no address and needs the owner's real email before it can send mail. Nothing has been published or sent to GitHub.

## Additional desktop hero selection

One former reserve image, staircase frame 14, is now selected specifically for its landscape hero composition. It is stored as `images/hero/arwyn-black-gown-staircase-wide.webp`, encoded directly from the original 1079 × 720 JPEG at quality 90. PSNR is 42.940 dB and local RGB SSIM is 0.985026. This is separate from the 36 collection selections, so the gallery counts and nine-image front grid are unchanged. Its source and optimisation measurements are recorded in the CSV audit files.
