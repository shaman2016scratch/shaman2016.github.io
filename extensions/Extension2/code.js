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
                "id": "operators",
                "name": "Операторы+",
                "color1": "#00ff00",
                "blocks": [{
                    "opcode": "block_25209a1f2e13a6f7",
                    "text": "обьеденить [c2aa866ae6bcdf67] [8b65eb4323a6a180] [eb3bc52a43a5e9d3]",
                    "blockType": "reporter",
                    "arguments": {
                        "c2aa866ae6bcdf67": {
                            "type": "string"
                        },
                        "8b65eb4323a6a180": {
                            "type": "string"
                        },
                        "eb3bc52a43a5e9d3": {
                            "type": "string"
                        }
                    }
                }, {
                    "opcode": "block_4f844e65853e9f3e",
                    "text": "обьеденить [82375eff91ae7b64] [9702e72f1f5f846c] [20d5351dfa38b00d] [1d31dd5ca3dccd77]",
                    "blockType": "reporter",
                    "arguments": {
                        "82375eff91ae7b64": {
                            "type": "string"
                        },
                        "9702e72f1f5f846c": {
                            "type": "string"
                        },
                        "20d5351dfa38b00d": {
                            "type": "string"
                        },
                        "1d31dd5ca3dccd77": {
                            "type": "string"
                        }
                    }
                }, {
                    "opcode": "block_417c2ed1c8ad18cc",
                    "text": "обьеденить [a59c70cc2f98a587] [40a7143c86f1510b] [07b2f834d077346d] [9c4e669c67279876] [ea203e68c2df5bf6]",
                    "blockType": "reporter",
                    "arguments": {
                        "a59c70cc2f98a587": {
                            "type": "string"
                        },
                        "40a7143c86f1510b": {
                            "type": "string"
                        },
                        "07b2f834d077346d": {
                            "type": "string"
                        },
                        "9c4e669c67279876": {
                            "type": "string"
                        },
                        "ea203e68c2df5bf6": {
                            "type": "string"
                        }
                    }
                }, {
                    "opcode": "block_47ee10aa92ea1ab7",
                    "text": "true",
                    "blockType": "Boolean",
                    "arguments": {}
                }, {
                    "opcode": "block_95242d2071f4b53a",
                    "text": "false",
                    "blockType": "Boolean",
                    "arguments": {}
                }, {
                    "opcode": "block_bae564ff9ebd4e16",
                    "text": "Случайный шанс",
                    "blockType": "reporter",
                    "arguments": {}
                }, {
                    "opcode": "block_11191318a61cd689",
                    "text": "[b2b19684746334b9] и [1bdc2c98e27f978a] и [9486250a3bd0ebfd]",
                    "blockType": "Boolean",
                    "arguments": {
                        "b2b19684746334b9": {
                            "type": "Boolean"
                        },
                        "1bdc2c98e27f978a": {
                            "type": "Boolean"
                        },
                        "9486250a3bd0ebfd": {
                            "type": "Boolean"
                        }
                    }
                }, {
                    "opcode": "block_2d393ebae60c95fd",
                    "text": "[6c6b815b8a5aa7c1] И [06b746a0e81192c6] Или [ad4aca94966a0bba]",
                    "blockType": "Boolean",
                    "arguments": {
                        "6c6b815b8a5aa7c1": {
                            "type": "Boolean"
                        },
                        "06b746a0e81192c6": {
                            "type": "Boolean"
                        },
                        "ad4aca94966a0bba": {
                            "type": "Boolean"
                        }
                    }
                }, {
                    "opcode": "block_fb42ad82663f9db0",
                    "text": "[ad22b6b5d5de437d] и [59c66d68cce24aec] не [f38e023a9b26f1fd]",
                    "blockType": "Boolean",
                    "arguments": {
                        "ad22b6b5d5de437d": {
                            "type": "Boolean"
                        },
                        "59c66d68cce24aec": {
                            "type": "Boolean"
                        },
                        "f38e023a9b26f1fd": {
                            "type": "Boolean"
                        }
                    }
                }, {
                    "opcode": "block_7189b0ac30f7a320",
                    "text": "[6573597d80ee2d56] и не [ffd053fbd1ce0cce]",
                    "blockType": "Boolean",
                    "arguments": {
                        "6573597d80ee2d56": {
                            "type": "Boolean"
                        },
                        "ffd053fbd1ce0cce": {
                            "type": "Boolean"
                        }
                    }
                }, {
                    "opcode": "block_7ff3cd0c8baa6629",
                    "text": "[789cfbba928fa90f] или [6dae0378691b6d03] и [88ae0b687e00a1bb]",
                    "blockType": "Boolean",
                    "arguments": {
                        "789cfbba928fa90f": {
                            "type": "Boolean"
                        },
                        "6dae0378691b6d03": {
                            "type": "Boolean"
                        },
                        "88ae0b687e00a1bb": {
                            "type": "Boolean"
                        }
                    }
                }, {
                    "opcode": "block_3c72c01c163a6cec",
                    "text": "[ab229d258681a8c0] или [8729c6401af7a76b] или [42fe8e000c8f403e]",
                    "blockType": "Boolean",
                    "arguments": {
                        "ab229d258681a8c0": {
                            "type": "Boolean"
                        },
                        "8729c6401af7a76b": {
                            "type": "Boolean"
                        },
                        "42fe8e000c8f403e": {
                            "type": "Boolean"
                        }
                    }
                }, {
                    "opcode": "block_25212ef4c683001d",
                    "text": "[0110127deef877b8] или [c58016ecf5680b05] не [accc0f72a7197a08]",
                    "blockType": "Boolean",
                    "arguments": {
                        "0110127deef877b8": {
                            "type": "Boolean"
                        },
                        "c58016ecf5680b05": {
                            "type": "Boolean"
                        },
                        "accc0f72a7197a08": {
                            "type": "Boolean"
                        }
                    }
                }, {
                    "opcode": "block_5e4c2efb5f5b847d",
                    "text": "[678fe56ad04b0efd] или не [706a9ef2e1a25e30]",
                    "blockType": "Boolean",
                    "arguments": {
                        "678fe56ad04b0efd": {
                            "type": "Boolean"
                        },
                        "706a9ef2e1a25e30": {
                            "type": "Boolean"
                        }
                    }
                }, {
                    "opcode": "block_f6e2bc59230b273f",
                    "text": "Выдать случайное  [df63b9dad7c7773b] [4ac6a9f74906ec58] [4fbb244e56c8fb28]",
                    "blockType": "reporter",
                    "arguments": {
                        "df63b9dad7c7773b": {
                            "type": "number",
                            "defaultValue": 0
                        },
                        "4ac6a9f74906ec58": {
                            "type": "number",
                            "defaultValue": 5
                        },
                        "4fbb244e56c8fb28": {
                            "type": "number",
                            "defaultValue": 10
                        }
                    }
                }, {
                    "opcode": "block_28353adbc01a59b1",
                    "text": "[546a74f03f79ad80] =< [b2a0faf3591cfb17]",
                    "blockType": "Boolean",
                    "arguments": {
                        "546a74f03f79ad80": {
                            "type": "number",
                            "defaultValue": 0
                        },
                        "b2a0faf3591cfb17": {
                            "type": "number",
                            "defaultValue": 0
                        }
                    }
                }, {
                    "opcode": "block_0bf8bc0ece778c03",
                    "text": "обьеденить [1f72b8d9efcc1c18] [b48863af24a7c9cb] [69e68eb95d51d367] [7dbf42d4d62f8432] [5531ed8ee407a456] [3775337ea22f8840]",
                    "blockType": "reporter",
                    "arguments": {
                        "1f72b8d9efcc1c18": {
                            "type": "string"
                        },
                        "b48863af24a7c9cb": {
                            "type": "string"
                        },
                        "69e68eb95d51d367": {
                            "type": "string"
                        },
                        "7dbf42d4d62f8432": {
                            "type": "string"
                        },
                        "5531ed8ee407a456": {
                            "type": "string"
                        },
                        "3775337ea22f8840": {
                            "type": "string"
                        }
                    }
                }]
            }
        }
        async block_25209a1f2e13a6f7(args) {
            return (String.prototype.concat(args["c2aa866ae6bcdf67"], String.prototype.concat(args["8b65eb4323a6a180"], args["eb3bc52a43a5e9d3"])))
        }
        async block_4f844e65853e9f3e(args) {
            return (String.prototype.concat(String.prototype.concat(args["82375eff91ae7b64"], args["9702e72f1f5f846c"]), String.prototype.concat(args["20d5351dfa38b00d"], args["1d31dd5ca3dccd77"])))
        }
        async block_417c2ed1c8ad18cc(args) {
            return (String.prototype.concat(String.prototype.concat(args["a59c70cc2f98a587"], String.prototype.concat(args["40a7143c86f1510b"], args["07b2f834d077346d"])), String.prototype.concat(args["9c4e669c67279876"], args["ea203e68c2df5bf6"])))
        }
        async block_47ee10aa92ea1ab7(args) {
            return (true)
        }
        async block_95242d2071f4b53a(args) {
            return (false)
        }
        async block_bae564ff9ebd4e16(args) {
            return (vm.runtime.ext_scratch3_operators._random((1), (10)))
        }
        async block_11191318a61cd689(args) {
            if ((args["b2b19684746334b9"] && (args["1bdc2c98e27f978a"] && args["9486250a3bd0ebfd"]))) {
                return (true)
            } else {
                return (false)
            };
        }
        async block_2d393ebae60c95fd(args) {
            if ((args["6c6b815b8a5aa7c1"] && (args["06b746a0e81192c6"] || args["ad4aca94966a0bba"]))) {
                return (true)
            } else {
                return (false)
            };
        }
        async block_fb42ad82663f9db0(args) {
            if ((args["ad22b6b5d5de437d"] && (args["59c66d68cce24aec"] && (!args["f38e023a9b26f1fd"])))) {
                return (true)
            } else {
                return (false)
            };
        }
        async block_7189b0ac30f7a320(args) {
            if ((args["6573597d80ee2d56"] && (!args["ffd053fbd1ce0cce"]))) {
                return (true)
            } else {
                return (false)
            };
        }
        async block_7ff3cd0c8baa6629(args) {
            if ((args["789cfbba928fa90f"] || (args["6dae0378691b6d03"] && args["88ae0b687e00a1bb"]))) {
                return (true)
            } else {
                return (false)
            };
        }
        async block_3c72c01c163a6cec(args) {
            if ((args["ab229d258681a8c0"] || (args["8729c6401af7a76b"] || args["42fe8e000c8f403e"]))) {
                return (true)
            } else {
                return (false)
            };
        }
        async block_25212ef4c683001d(args) {
            if ((args["0110127deef877b8"] || (args["c58016ecf5680b05"] || (!args["accc0f72a7197a08"])))) {
                return (true)
            } else {
                return (false)
            };
        }
        async block_5e4c2efb5f5b847d(args) {
            if ((args["678fe56ad04b0efd"] || (!args["706a9ef2e1a25e30"]))) {
                return (true)
            } else {
                return (false)
            };
        }
        async block_f6e2bc59230b273f(args) {
            ExtForge.Variables.set("1", vm.runtime.ext_scratch3_operators._random((1), (3)))
            if ((ExtForge.Variables.get("1") ==
                    ("1"))) {
                return (vm.runtime.ext_scratch3_operators._random(args["df63b9dad7c7773b"], args["4ac6a9f74906ec58"]))
            } else {
                if ((ExtForge.Variables.get("1") ==
                        ("2"))) {
                    return (vm.runtime.ext_scratch3_operators._random(args["4ac6a9f74906ec58"], args["4fbb244e56c8fb28"]))
                } else {
                    if ((ExtForge.Variables.get("1") ==
                            ("3"))) {
                        return (vm.runtime.ext_scratch3_operators._random(args["df63b9dad7c7773b"], args["4fbb244e56c8fb28"]))
                    } else {};
                };
            };
        }
        async block_28353adbc01a59b1(args) {
            if (((1) <= (1))) {
                return (true)
            } else {
                return (false)
            };
        }
        async block_0bf8bc0ece778c03(args) {
            return (String.prototype.concat(args["1f72b8d9efcc1c18"], String.prototype.concat(args["b48863af24a7c9cb"], String.prototype.concat(args["69e68eb95d51d367"], String.prototype.concat(args["7dbf42d4d62f8432"], String.prototype.concat(args["5531ed8ee407a456"], args["3775337ea22f8840"]))))))
        }
    }

    let extension = new Extension();
    // code compiled from extforge

    Scratch.extensions.register(extension);
})(Scratch);
