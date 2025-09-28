let terminSDKzag = (false)
const url = new URL(window.location);
const searchParams = url.searchParams;
function getversion() {
  return (("1.0"))
}
function textContent(e,t) {
 document.getElementById(e).textContent = t;
}
function search.urlparams(t) {
  return (searchParams.get(t))
}
function urlparams() {
  return (searchParams)
}
function innerHTML(e,t) {
  document.getElementById(e).innerHTML = t;
}
function zagTERMINsdk() {
  terminSDKzag = (true)
}
function delTERMINsdk() {
  terminSDKzag = (false)
}
function TERMINstatus() {
  return (terminSDKzag)
}
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
                "id": "miniTERMINbySHAMAN2016",
                "name": "miniTERMIN SDK 1.0",
                "color1": "#00b000",
                "blocks": [{
                    "opcode": "block_1",
                    "text": "Загрузить SDK",
                    "blockType": Scratch.BlockType.COMMAND,
                    "arguments": {}
                }, {
                    "opcode": "block_2",
                    "text": "Удалить SDK",
                    "blockType": Scratch.BlockType.COMMAND,
                    "arguments": {}
                }, {
                    "opcode": "block_3",
                    "text": "SDK загружен?",
                    "blockType": Scratch.BlockType.BOOLEAN,
                    "arguments": {}
                }, {
                    "opcode": "block_4",
                    "text": "Версия расширения",
                    "blockType": Scratch.BlockType.REPORTER,
                    "arguments": {}
                }, {
                    "opcode": "block_5",
                    "text": "Версия miniTERMIN",
                    "blockType": Scratch.BlockType.REPORTER,
                    "arguments": {}
                }, {
                    "opcode": "block_6",
                    "text": "textContent [6-1] [6-2]",
                    "blockType": Scratch.BlockType.COMMAND,
                    "arguments": {"6-1": {"type": "string"}, "6-2": {"type": "string"}}
                }, {
                    "opcode": "block_7",
                    "text": "innerHTML [7-1] [7-2]",
                    "blockType": Scratch.BlockType.COMMAND,
                    "arguments": {"7-1": {"type": "string"}, "7-2": {"type": "string"}}
                }]
                }
            }
        }
        async block_1(args) {
            zagTERMINsdk()
        }
        async block_2(args) {
            delTERMINsdk()
        }
        async block_3(args) {
            return (TERMINstatus())
        }
        async block_4(args) {
            return (("1.0"))
        }
        async block_5(args) {
            return (getversion())
        }
        async block_6(args) {
            textContent(args["6-1"],args["6-2"])
        }
        async block_7(args) {
            innerHTML(args["7-1"],args["7-2"])
        }
    }

    let extension = new Extension();

    Scratch.extensions.register(extension);
})(Scratch);
