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
        }

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
                "id": "1shaman2016",
                "name": "Test-Extension",
                "color1": "#0fbd8c",
                "blocks": [{
                    "opcode": "block_d14ad7d29ce6dbb0",
                    "text": "[7e915e119c1dda0a]",
                    "blockType": "reporter",
                    "arguments": {
                        "7e915e119c1dda0a": {
                            "type": "string",
                            "defaultValue": "1_1"
                        }
                    }
                }, {
                    "opcode": "block_2dc55a0c1b404c6a",
                    "text": "Обьеденить [64a1e11df3371369] [e6963159bd80cd0b] [d6d93102975abe1c]",
                    "blockType": "reporter",
                    "arguments": {
                        "64a1e11df3371369": {
                            "type": "string",
                            "defaultValue": ""
                        },
                        "e6963159bd80cd0b": {
                            "type": "string"
                        },
                        "d6d93102975abe1c": {
                            "type": "string"
                        }
                    }
                }, {
                    "opcode": "block_387009679fe99018",
                    "text": "Обьеденить [caaeeae5b6d38ebf] [49146ebeedde7f22] [0e753afca5060284] [94331c45aa0f3ead]",
                    "blockType": "reporter",
                    "arguments": {
                        "caaeeae5b6d38ebf": {
                            "type": "string"
                        },
                        "49146ebeedde7f22": {
                            "type": "string"
                        },
                        "0e753afca5060284": {
                            "type": "string"
                        },
                        "94331c45aa0f3ead": {
                            "type": "string"
                        }
                    }
                }, {
                    "opcode": "block_01738f2b3ad09e3e",
                    "text": "Ссылка на аккаунт пользователя Скретч:  [bf7e22cd7f0348d9]",
                    "blockType": "reporter",
                    "arguments": {
                        "bf7e22cd7f0348d9": {
                            "type": "string"
                        }
                    }
                }]
            }
        }
        async block_d14ad7d29ce6dbb0(args) {
            return (args["7e915e119c1dda0a"])
        }
        async block_2dc55a0c1b404c6a(args) {
            return (String.prototype.concat(args["64a1e11df3371369"], String.prototype.concat(args["e6963159bd80cd0b"], args["d6d93102975abe1c"])))
        }
        async block_387009679fe99018(args) {
            return (String.prototype.concat(args["caaeeae5b6d38ebf"], String.prototype.concat(args["49146ebeedde7f22"], String.prototype.concat(args["0e753afca5060284"], args["94331c45aa0f3ead"]))))
        }
        async block_01738f2b3ad09e3e(args) {
            return (String.prototype.concat(Scratch.Cast.toString(("https://scratch.mit.edu/users/")), String.prototype.concat(args["bf7e22cd7f0348d9"], String("/"))))
        }
    }

    let extension = new Extension();
    // code compiled from extforge

    Scratch.extensions.register(extension);
})(Scratch);
