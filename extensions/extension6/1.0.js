function output(g) {
   w1 = g
   return (g)
}
/*
   Created with ExtForge
   https://jwklong.github.io/extforge
*/
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
                "id": "JavaScriptRunner",
                "name": "JavaScript",
                "color1": "#0fbd8c",
                "blocks": [{
                    "opcode": "block_5d359f31b5c974e1",
                    "text": "JS [64da17827811ee9b]",
                    "blockType": "command",
                    "arguments": {
                        "64da17827811ee9b": {
                            "type": "string",
                            "defaultValue": "alert(\"Hello World\")"
                        }
                    }
                }, {
                    "opcode": "block_2508108deeadbfe3",
                    "text": "JS [c102856b32dd671c]",
                    "blockType": "reporter",
                    "arguments": {
                        "c102856b32dd671c": {
                            "type": "string",
                            "defaultValue": "function output() { return (\"hello\") }"
                        }
                    }
                }, {
                    "opcode": "block_b40918ade783bba9",
                    "text": "JS [4989c57eeb7d0fc9]",
                    "blockType": "Boolean",
                    "arguments": {
                        "4989c57eeb7d0fc9": {
                            "type": "string",
                            "defaultValue": "function output() { return 1 < 2 }"
                        }
                    }
                }]
            }
        }
        async block_5d359f31b5c974e1(args) {
            eval(args["64da17827811ee9b"])
        }
        async block_2508108deeadbfe3(args) {
            output(return (eval(args["c102856b32dd671c"])))
        }
        async block_b40918ade783bba9(args) {
            output(return (eval(args["4989c57eeb7d0fc9"])))
        }
    }

    let extension = new Extension();
    // code compiled from extforge

    Scratch.extensions.register(extension);
})(Scratch);
