//Made by @isragdd (@isragdd12 on github), thanks for using my plugin! :)

const { Plugin } = require('obsidian');

module.exports = class ProgbarPlugin extends Plugin {
    async onload() {
        this.registerMarkdownCodeBlockProcessor("progbar", (source, el, ctx) => {
            const options = {};
            const lines = source.split("\n");
            
            lines.forEach(line => {
                const parts = line.split(":");
                if (parts.length < 2) return;
                const key = parts[0].trim();
                const val = parts.slice(1).join(":").trim();
                if (!key) return;
                
                if (val === "true") options[key] = true;
                else if (val === "false") options[key] = false;
                else if (!isNaN(Number(val)) && val !== "") options[key] = Number(val);
                else options[key] = val.replace(/^["']|["']$/g, '');
            });

            const max = options.max ?? 100;
            const initialValue = options.value ?? 0;
            const id = options.id ?? 'no-id';
            const name = options.name ?? 'Unnamed';
            const barWidth = options.width ?? '160px';
            const step = options.step ?? 1;
            const btnUp = options.btnUp ?? '+'
            const btnDown = options.btnDown ?? '-'
            const showName = options.showName ?? true;
            const showButtons = options.showButtons ?? true;
            const showId = options.showId ?? false;
            const showBar = options.showBar ?? true;
            const showLabel = options.showLabel ?? true;
            const customFormat = options.customFormat ?? '[{value}/{max}] ';

            const renderTemplate = (currentVal) => {
                let percent = Math.round((currentVal/max) * 100)
                return customFormat
                    .replace("{name}", name)
                    .replace("{max}", max)
                    .replace("{value}", currentVal)
                    .replace("{val}", currentVal)
                    .replace("{id}", id)
                    .replace("{barWidth}", barWidth)
                    .replace("{step}", step)
                    .replace("{percent}", percent)
                    .replace("{%}", percent)
                    .replace("{percentage}", percent);
            };

            const container = el.createDiv();
            const nameLabel = container.createEl('span', { text: name });
            const btnsub = container.createEl('button', { text: btnDown });
            const progress = container.createEl('progress', { attr: { max, value: initialValue, id } });
            const btnadd = container.createEl('button', { text: btnUp });
            const label = container.createEl('span', { text: renderTemplate(initialValue) });
            const idLabel = container.createEl('span', { text: ` (${id})` });

            nameLabel.style.marginRight = "10px";
            progress.style.marginRight = "10px";
            progress.style.width = barWidth
            btnsub.style.marginRight = "10px";
            btnadd.style.marginLeft = "10px";
            btnadd.style.marginRight = "10px";

            if (!showName) nameLabel.style.display = 'none';
            if (!showId) idLabel.style.display = 'none';
            if (!showBar) progress.style.display = 'none';
            if (!showLabel) label.style.display = 'none';
            if (!showButtons) {
                btnadd.style.display = 'none';
                btnsub.style.display = 'none';
            }

            btnadd.addEventListener('click', () => {
                if (progress.value < max) {
                    progress.value += step;
                    label.innerText = renderTemplate(progress.value);
                }
            });

            btnsub.addEventListener('click', () => {
                if (progress.value > 0) {
                    progress.value -= step;
                    label.innerText = renderTemplate(progress.value);
                }
            });
        });
    }
}