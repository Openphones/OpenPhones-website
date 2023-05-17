# OpenPhones

This is the source code for the [OpenPhones website](https://openphones.global).

## Build instructions

1.  ```bash
    git clone https://github.com/Openphones/OpenPhones-website && cd OpenPhones-website
    ```
2.  ```bash
    npm install
    npm run dev
    ```
    Run this in the root directory (`OpenPhones-website/` if you followed the instructions above) and open `localhost:3000` in your desired browser to see the preview. Make sure to keep this repository and your dependencies up-to-date, especially if you plan to contribute.
3.  ```bash
    npm run build
    ```
    This builds the site and places the files in the `dist/` directory.

## Licenses

The licenses of all npm dependencies are in their respective folders in `node_modules/` when you install them with `npm install`.

[Astro](https://astro.build/), the static site generator used to generate this website, is licensed under the [MIT license](https://github.com/withastro/astro/blob/main/LICENSE).

The icons come from [Material Symbols](https://fonts.google.com/icons) and are licensed under the [Apache-2.0 license](https://www.apache.org/licenses/LICENSE-2.0.html). The [Wire](https://wire.com) logo comes from their [brand guidelines](https://brand.wire.com/). The [Matrix](https://matrix.org/) icon comes from [Simple Icons](https://simpleicons.org/).

The [Inter](https://rsms.me/inter/) font is licensed under the [OFL-1.1 license](https://github.com/rsms/inter/blob/master/LICENSE.txt).

All of the remaining content in this repository is licensed under the [BSD Zero Clause license](LICENSE). The favicon was designed by [noClaps](https://github.com/noClaps) and is under the [CC0-1.0 license](/public/icon/LICENSE).
