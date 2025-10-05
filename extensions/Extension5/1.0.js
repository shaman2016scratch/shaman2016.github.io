(async function(Scratch) {
    const variables = {};


    if (!Scratch.extensions.unsandboxed) {
        alert("This extension needs to be unsandboxed to run!")
        return
    }

    const ExtForge = {
        Broadcasts: new function() {
            this.raw_ = {};
            this.register = (name, blocks) => {
                this.raw_[name] = blocks;
            };
            this.execute = async (name) => {
                if (this.raw_[name]) {
                    await this.raw_[name]();
                };
            };
        },

        Variables: new function() {
            this.raw_ = {};
            this.set = (name, value) => {
                this.raw_[name] = value;
            };
            this.get = (name) => {
                return this.raw_[name] ?? null;
            }
        },

        Vector: class {
            constructor(x, y) {
                this.x = x;
                this.y = y;
            }

            static from(v) {
                if (v instanceof ExtForge.Vector) return v
                if (v instanceof Array) return new ExtForge.Vector(Number(v[0]), Number(v[1]))
                if (v instanceof Object) return new ExtForge.Vector(Number(v.x), Number(v.y))
                return new ExtForge.Vector()
            }

            add(v) {
                return new Vector(this.x + v.x, this.y + v.y);
            }

            set(x, y) {
                return new Vector(x ?? this.x, y ?? this.y)
            }
        },

        Utils: {
            setList: (list, index, value) => {
                [...list][index] = value;
                return list;
            },
            lists_foreach: {
                index: [0],
                value: [null],
                depth: 0
            },
            countString: (x, y) => {
                return y.length == 0 ? 0 : x.split(y).length - 1
            }
        }
    }

    class Extension {
        getInfo() {
            return {
                "id": "LocalDataBySHAMAN2016",
                "name": "Локальное сохранение",
                "color1": "#00b000",
                "blocks": [{
                    "opcode": "block_1",
                    "text": "Сохранить куки [1-1] [1-2] по адресу [1-3] действие до [1-4]",
                    "blockType": Scratch.BlockType.COMMAND,
                    "arguments": {"1-1":"{"type":"Scratch.ArgumentType.STRING"}","1-2":"{"type":"Scratch.ArgumentType.STRING"}","1-3":"{"type":"Scratch.ArgumentType.STRING"}","1-4":"{"type":"Scratch.ArgumentType.STRING"}"}
                }, {
                    "opcode": "block_2",
                    "text": "Сохранить в локальном хранилище [2-1] [2-2]",
                    "blockType": Scratch.BlockType.COMMAND,
                    "arguments": {"2-1":"{"type":"Scratch.ArgumentType.STRING"}","2-2":"{"type":"Scratch.ArgumentType.STRING"}"}
                }, {
                    "opcode": "block_3",
                    "text": "Сохранить в сессионном хранилище [3-1] [3-2]",
                    "blockType": Scratch.BlockType.COMMAND,
                    "arguments": {"3-1":"{"type":"Scratch.ArgumentType.STRING"}","3-2":"{"type":"Scratch.ArgumentType.STRING"}"}
                    }]
                }
            }
        }
        async block_1(args) {
          per1 = args.1-1
          per2 = args.1-2
          per3 = args.1-3
          per4 = args.1-4
          document.cookie = `${per1}=${per2}; path=${per3}; expires=${per4}`;
        }
        async block_2(args) {
          per1 = args.2-1
          per2 = args.2-2
          localStorage.setItem(`${per1}`, `${per2}`);
        }
        async block_3(args) {
          per1 = args.3-1
          per2 = args.3-2
          sessionStorage.setItem(`${per1}`, `${per2}`);
        }
    }

    let extension = new Extension();

    Scratch.extensions.register(extension);
})(Scratch);
