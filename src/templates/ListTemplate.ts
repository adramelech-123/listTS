import FullList from "../model/FullList"

interface DOMList {
    ul: HTMLUListElement,
    clear(): void,
    render(fullList: FullList): void,
}

export default class ListTemplate implements DOMList {
    ul: HTMLUListElement

    static instance: ListTemplate = new ListTemplate();

    private constructor() {
        this.ul = document.getElementById("listItems") as HTMLUListElement;
    }

    clear() : void {
        this.ul.innerHTML = "";
    }

    render(fullList: FullList): void { 
        this.clear()
        fullList.list.forEach(item => {
            // Render the List Element
            const li = document.createElement("li") as HTMLLIElement
            li.className = "item"

            // Render checkbox and append to the list element
            const check = document.createElement("input") as HTMLInputElement
            check.type = "checkbox"
            check.id = item.id
            check.tabIndex = 0
            check.checked = item.checked
            check.addEventListener('change', () => {
                item.checked = !item.checked
                fullList.save()
            })
            li.append(check)

            // Render the Label and append to list item
            const label = document.createElement("label") as HTMLLabelElement
            label.htmlFor = item.id
            label.textContent = item.item
            li.append(label)

            // Render Button and append to list item
            const button = document.createElement("button") as HTMLButtonElement
            button.className = "button"
            button.textContent = "X"
            button.addEventListener('click', () => {
                fullList.removeItem(item.id)
                this.render(fullList)
            })

            li.append(button)

            // Append List Item to the unordered list
            this.ul.append(li)
        })
    }
}