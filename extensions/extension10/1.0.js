// Name: Modification Http
// ID: ModHttpShaman2016
// Description: Extension for http requests
// By: SHAMAN2016 <https://scratch.mit.edu/users/shaman2016/>

(function (Scratch) {
  "use strict";

  if (!Scratch.extensions.unsandboxed) {
    throw new Error("This Extension must run unsandboxed");
  }

    class ModHttpShaman2016 {
      getInfo() {
        return {
          id: "ModHttpShaman2016",
          name: "Modification Http",
          color1: "#a3c0e1",
          blocks: [
            {
              opcode: "mget",
              blockType: Scratch.BlockType.REPORTER,
              text: "get [url] headers: [params]",
              arguments: {
                url: {
                  defaultValue: "https://api.scratch.mit.edu/users/shaman2016/",
                  type: Scratch.ArgumentType.STRING,
                },
              },
              params: {
                defaultValue: '{"Content-Type": "application/json"}',
                type: Scratch.ArgumentType.STRING,
              },
            }, {
              opcode: "mpost",
              blockType: Scratch.BlockType.REPORTER,
              text: "post [url] headers: [params]",
              arguments: {
                url: {
                  defaultValue: "https://api.scratch.mit.edu/users/shaman2016/",
                  type: Scratch.ArgumentType.STRING,
                },
              },
              params: {
                defaultValue: '{"Content-Type": "application/json"}',
                type: Scratch.ArgumentType.STRING,
              },
            }, {
              opcode: "mput",
              blockType: Scratch.BlockType.REPORTER,
              text: "put [url] headers: [params]",
              arguments: {
                url: {
                  defaultValue: "https://api.scratch.mit.edu/users/shaman2016/",
                  type: Scratch.ArgumentType.STRING,
                },
              },
              params: {
                defaultValue: '{"Content-Type": "application/json"}',
                type: Scratch.ArgumentType.STRING,
              },
            }, {
              opcode: "mdelete",
              blockType: Scratch.BlockType.REPORTER,
              text: "delete [url] headers: [params]",
              arguments: {
                url: {
                  defaultValue: "https://api.scratch.mit.edu/users/shaman2016/",
                  type: Scratch.ArgumentType.STRING,
                },
              },
              params: {
                defaultValue: '{"Content-Type": "application/json"}',
                type: Scratch.ArgumentType.STRING,
              },
            }, {
              opcode: "mhead",
              blockType: Scratch.BlockType.REPORTER,
              text: "head [url] headers: [params]",
              arguments: {
                url: {
                  defaultValue: "https://api.scratch.mit.edu/users/shaman2016/",
                  type: Scratch.ArgumentType.STRING,
                },
              },
              params: {
                defaultValue: '{"Content-Type": "application/json"}',
                type: Scratch.ArgumentType.STRING,
              },
            },
          ],
        };
      }
      mget(args) {
        Otvet = fetch(args['url'], {  
          method: 'GET',  
          headers: JSON.parse(args['params'])
        });
        return JSON.stringify(Otvet)
      }
      mpost(args) {
        Otvet = fetch(args['url'], {  
          method: 'POST',  
          headers: JSON.parse(args['params'])
        });
        return JSON.stringify(Otvet)
      }
      mput(args) {
        Otvet = fetch(args['url'], {  
          method: 'PUT',  
          headers: JSON.parse(args['params'])
        });
        return JSON.stringify(Otvet)
      }
      mdelete(args) {
        Otvet = fetch(args['url'], {  
          method: 'DELETE',  
          headers: JSON.parse(args['params'])
        });
        return JSON.stringify(Otvet)
      }
      mhead(args) {
        Otvet = fetch(args['url'], {  
          method: 'HEAD',  
          headers: JSON.parse(args['params'])
        });
        return JSON.stringify(Otvet)
      }
    }
    Scratch.extensions.register(new ModHttpShaman2016());
  })(Scratch);
