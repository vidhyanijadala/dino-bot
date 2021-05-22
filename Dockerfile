FROM hayd/debian-deno:1.10.2

WORKDIR /deno-bot

VOLUME /deno-bot/db

COPY . .

RUN chown -R deno:deno /deno-bot

USER deno

CMD ["run", "-A","--unstable", "./mod.ts"]
