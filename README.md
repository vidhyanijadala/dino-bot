# dino

## 👏 Add dino to your Discord Server
**To start using dino [just click on this link](https://discord.com/api/oauth2/authorize?client_id=830530080349749248&permissions=59392&scope=bot) and add it to your server!**

<img src="https://media.discordapp.net/attachments/814300036665442324/846727185808752660/unknown.png">

<img src="https://cdn.discordapp.com/attachments/814300036665442324/846732776869986314/unknown.png">

<h1>want to run it locally?</h1>

create a archive .env

and put

```
TOKEN=yourtoken
```

then create a archive ``execute.ts`` that is where the code is going to execute

and finally run:

```
deno run -A -q --unstable mod.ts
```

or if you want to run it with docker just run:

```
sudo docker build -t deno-bot . && sudo docker run -d deno-bot

```


