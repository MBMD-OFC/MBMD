let handler = async (m, { usedPrefix, command, text, args,  }) => {
let menu = `
\`\`\`
╭─────────────────
│ ✩⩢ INFORMACIÓN ⩢✩
├─────────────────
│#reporte  │ #actividad
│#cuentas  │ #donar
│#comunidad│ #info_reg
│#infobot  │ #status
│#wabots   │ #usos
│#creador  │ #menulist
│#sockets  │ info_host
│#test     │ #colaboracion
├─────────────────
│  ✩⩢ ALEATORIO ⩢✩
├─────────────────
│#comando  │ #p
│#normas   │
├─────────────────
│     ✩⩢ TOLS ⩢✩
├─────────────────
│#s        │ #animef
│#simg     │ #ts_audio
│#ts_nota  │ #ts_vide
│#turl     │ #turl2
│#textvoz  │ #testvoz2
│#ts_emoji │ #qr
│#viewqr   │ #style
│#react    │ #simface
│#tols_yt  │ #remini
│#ts_pdf   │
├─────────────────
│   ✩⩢ AJUSTES ⩢✩
├─────────────────
│#usergit  │ #tinyurl
│#calc     │ #dell
│#usuarios │ #encriptar
│#botmb    │ #traducir
│#on       │ #off
│#hours    │ #wcap
│#poll     │ #fsms
│#bininfo  │ #readmore
│#dstatus  │
├─────────────────
│   ✩⩢ JUEGOS ⩢✩
├─────────────────
│#ship     │ #person
│#fun      │ #tops
├─────────────────
│   ✩⩢ SOCKETS ⩢✩
├─────────────────
│#newbot   │ #infosock
│#sockets  │
├─────────────────
│   ✩⩢ MENTIONS ⩢✩
├─────────────────
│#kiss     │ #cita
│#feed     │ #hug
│#caress   │ #slap
│#kill     │ #wrap
│#carry    │
├─────────────────
│  ✩⩢ DESCARGAS ⩢✩
├─────────────────
│#mp3      │ #musica
│#mp4      │ #video
│#mp3_rf   │ #mp4_rf
│#imagen   │ #pinterest
│#mediafire│ #mediafire2
│#github   │ #github2
│#apk      │ #apk2
│#instagram│ #instagram2
│#facebook │ #facebook2
│#twitter  │ #twitter2
│#tiktok   │ #tiktok2
│#mega     │ #spotify
│#igh      │ #capcut
│#deezer   │ #genius
│#threads  │ #yahoo
│#drive    │ #igver
│#appmusic │ #tiktokfoto
│#usertok  │ #imgtiktok
│#tiktoknew│
├─────────────────
│    ✩⩢ GRUPOS ⩢✩
├─────────────────
│#add      │ #admins
│#warn     │ #nowarn
│#group    │ #tage
│#tags     │ #infgp
│#linkg    │ #descartar
│#asignar  │ #mute
│#unmute   │ #inum
│#dnum     │ #dp
│#dbanchat │ #banchat
├─────────────────
│    ✩⩢ MAKER ⩢✩
├─────────────────
│#pixel    │ #mtext
│#ytc      │ #blur
│#horny    │ #stupid
│#pololi   │ #book
│#friends  │ #gay
│#fluximg  │
├─────────────────
│      ✩⩢ IA ⩢✩
├─────────────────
│#chatgpt  │ #iadel
│#chatgptv │ #chatgpt4
│#photoleap│ #gemini
│#gemini2  │ #dalle
│#imgemini │ #profe
├─────────────────
│   ✩⩢ BUSCADOR ⩢✩
├─────────────────
│#userblox │ #infogen
│#infolgd  │ #wmusic
│#mrlibre  │ #npm
│#steamlist│ #sfilemobi
│#playstore│ #animeinfo
│#drivefl  │ #google
│#ip       │ #lyrics
│#lyrics2  │ #cinema
│#spotify2 │ #wikipedia
│#yts      │ #animes
│#pinlist  │ #pixabay
│#reddit   │ #spotifylist
│#twpost   │ #tiktoks
├─────────────────
│   ✩⩢ STICKERS ⩢✩
├─────────────────
│#stt      │ #scircle
│#emojix   │ #sdados
│#sc       │ #stickm
│#sfiltro  │ #sfiltro2
│#txtstick │ #sbg
│#stg      │
├─────────────────
│  ✩⩢ EDIT BOT ⩢✩
├─────────────────
│#set_mbmd │ #set_name
│#setprefix│ #set_foto
├─────────────────
│  ✩⩢ EDIT GROUP ⩢✩
├─────────────────
│#cbye     │ #cwelcom
│#cdesc    │ #clink
│#cfoto    │
├─────────────────
│  ✩⩢ EDIT MENU ⩢✩
├─────────────────
│#m_imgs   │ #m_video
│#m_iv     │ #m_recuso
│#m_cortar │ #m_add
├─────────────────
│  ✩⩢ ROL : RPG ⩢✩
├─────────────────
│#d_boletos│ #d_money_*
│#d_bcoin  │ #d_dmt
│#r_boletos│#r_money
│#r_bcoin  │#r_dmt
│#buy      │#sell
│#mine     │#w
│#cofre    │#usertops
│#cartera
╰─────────────────
\`\`\`
`.trim();
conn.sendFile(m.chat, imagens, 'mbmd.jpg', menu, m);
};
handler.command = ['allmenu', 'mc'];
export default handler
