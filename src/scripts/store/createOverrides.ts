import { IProduct } from "../dataIO";

export function createOverrides(product: IProduct) {
    const overridesElement = document.createElement("div")
    overridesElement.classList.add("overrides")

    const storageSelect = document.createElement("select")
    storageSelect.classList.add("storage-select")
    storageSelect.title = `Storage selection for ${product.short_name}`
    storageSelect.innerHTML = `<option value="">Select a storage option</option>`

    for (const storageOption of product.overrides.storage) {
        const storageOptionElement = document.createElement("option")
        storageOptionElement.value = storageOption.size.toString()
        storageOptionElement.innerHTML = storageOption.name

        storageSelect.append(storageOptionElement)
    }

    const colorSelect = document.createElement("select")
    colorSelect.classList.add("color-select")
    colorSelect.title = `Color selection for ${product.short_name}`

    storageSelect.addEventListener("change", () => {
        if ((storageSelect.firstElementChild as HTMLOptionElement).value === "") {
            storageSelect.firstElementChild.remove()
        }
        colorSelect.style.display = "inline-block"
        const selectedStorageOption = product.overrides.storage.find((storageOption) => storageOption.size.toString() === storageSelect.value)
        colorSelect.innerHTML = ''

        if (selectedStorageOption.colorcomp) {
            for (const color of selectedStorageOption.colorcomp) {
                const compatibleColor = product.overrides.color.find((colorOption) => colorOption.name === color)

                const colorOptionElement = document.createElement("option")
                colorOptionElement.value = compatibleColor.name
                colorOptionElement.innerHTML = compatibleColor.readable

                colorSelect.append(colorOptionElement)
            }
        } else {
            for (const color of product.overrides.color) {
                const colorOptionElement = document.createElement("option")
                colorOptionElement.value = color.name
                colorOptionElement.innerHTML = color.readable

                colorSelect.append(colorOptionElement)
            }
        }
    })

    overridesElement.append(storageSelect)
    overridesElement.append(colorSelect)

    return overridesElement
}