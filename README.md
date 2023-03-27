# OpenPhones
This is the source code for the [OpenPhones website](https://Openphones.github.io/OpenPhones-website).

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
