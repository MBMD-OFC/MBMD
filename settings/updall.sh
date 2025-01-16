MBMD_NOMBRE="MBMD"  
MBMD_GITHUB="https://github.com/MBMD/$MBMD_NOMBRE"
MBMD_JSON="database.json"
 
GREEN='\033[32m'
BOLD='\033[1m'
RESET='\033[0m'
  
if [[ $(basename "$PWD") == "MBMD" ]]; then
if [ -e "$MBMD_JSON" ]; then 
echo -e "${BOLD}${GREEN}🚀 Moviendo la base de datos \"$MBMD_JSON\" al actual \"$HOME\" para clonar nuevamente el git \"$MBMD_GITHUB\" en \"$HOME\"...${RESET}"
mv "$HOME/$MBMD_NOMBRE/$MBMD_JSON" "$HOME" && cd && rm -rf "$HOME/$MBMD_NOMBRE" && git clone "$MBMD_GITHUB" && cd "$HOME/$MBMD_NOMBRE" && yarn --ignore-scripts && npm install && cd
if [ -e "$HOME/$MBMD_JSON" ]; then
echo -e "${BOLD}${GREEN}♻️ Guardando el archivo \"$MBMD_JSON\" y moviendo a \"$MBMD_NOMBRE\".${RESET}"
echo -e "${BOLD}${GREEN}🚀 Iniciando instalacion de modulos en $MBMD_NOMBRE...${RESET}"
mv "$HOME/$MBMD_JSON" "$HOME/$MBMD_NOMBRE/" && cd "$MBMD_NOMBRE" && npm start
else
echo -e "${BOLD}${GREEN}❌ El archivo \"$MBMD_JSON\" no existe en el actual \"$HOME\"${RESET}"
echo -e "${BOLD}${GREEN}🚀 Iniciando instalación de $MBMD_NOMBRE...${RESET}"
cd "$MBMD_NOMBRE" && npm start
fi

else
echo -e "${BOLD}${GREEN}❌ El archivo database no existe en \"$MBMD_NOMBRE\", iniciando el bot en el actual: \"$HOME\"...${RESET}"
cd && rm -rf "$HOME/$MBMD_NOMBRE" && git clone "$MBMD_GITHUB" && cd "$HOME/$MBMD_NOMBRE" && yarn --ignore-scripts && npm install && cd
if [ -e "$HOME/$MBMD_JSON" ]; then
echo -e "${BOLD}${GREEN}♻️ Guardando datos de database al actual \"$MBMD_NOMBRE\".${RESET}"
echo -e "${BOLD}${GREEN}🚀 Instalando a $MBMD_NOMBRE...${RESET}"
mv "$HOME/$MBMD_JSON" "$HOME/$MBMD_NOMBRE/" && cd "$MBMD_NOMBRE" && npm start
else
echo -e "${BOLD}${GREEN}❌ El archivo database no existe en la actual \"$HOME\"${RESET}"
echo -e "${BOLD}${GREEN}🚀 Instalando a $MBMD_NOMBRE...${RESET}"
cd "$MBMD_NOMBRE" && npm start
fi
fi

else
echo -e "${BOLD}${GREEN}✅ Ubicación actual encontrada en: \"$HOME\"${RESET}"
cd "$HOME"
if [ -e "$HOME/$MBMD_NOMBRE" ]; then
echo -e "${BOLD}${GREEN}🔩 Corrigiendo dirección a \"$MBMD_NOMBRE\".${RESET}"
cd "$HOME/$MBMD_NOMBRE"
if [ -e "$HOME/$MBMD_NOMBRE/$MBMD_JSON" ]; then
echo -e "${BOLD}${GREEN}♻️ Moviendo \"$MBMD_JSON\" a \"$HOME\" y clonando repositorio \"$MBMD_GITHUB\" en \"$HOME\"...${RESET}"
mv "$HOME/$MBMD_NOMBRE/$MBMD_JSON" "$HOME" && cd && rm -rf "$MBMD_NOMBRE" && git clone "$MBMD_GITHUB" && cd "$MBMD_NOMBRE" && yarn --ignore-scripts && npm install && cd
if [ -e "$HOME/$MBMD_JSON" ]; then
echo -e "${BOLD}${GREEN}♻️ Moviendo archivo database al actual \"$MBMD_NOMBRE\".${RESET}"
mv "$HOME/$MBMD_JSON" "$HOME/$MBMD_NOMBRE/" && cd "$MBMD_NOMBRE" &&
echo -e "${BOLD}${GREEN}🚀 Instalando a $MBMD_NOMBRE...${RESET}"
npm start
else
echo -e "${BOLD}${GREEN}🔩 Corrigiendo dirección a \"$MBMD_NOMBRE\"...${RESET}"
cd "$MBMD_NOMBRE" && 
echo -e "${BOLD}${GREEN}🚀 Instalando a $MBMD_NOMBRE...${RESET}"
npm start
fi
else
echo -e "${BOLD}${GREEN}❌ El archivo \"$MBMD_NOMBRE\" no existe en ninguna parte, se clonara el bot en \"$HOME\"...${RESET}"
cd && rm -rf "$MBMD_NOMBRE" && git clone "$MBMD_GITHUB" && cd "$MBMD_NOMBRE" && yarn --ignore-scripts && npm install &&
echo -e "${BOLD}${GREEN}🚀 Iniciando a $MBMD_NOMBRE...${RESET}"
npm start
fi
else
echo -e "${BOLD}${GREEN}❌ El archivo \"$MBMD_NOMBRE\" no existe en ninguna parte, se clonara el bot en \"$HOME\"...${RESET}"
git clone "$MBMD_GITHUB" && cd "$MBMD_NOMBRE" && yarn --ignore-scripts && npm install && cd
if [ -e "$HOME/$MBMD_JSON" ]; then
echo -e "${BOLD}${GREEN}🔩 Se ha encontrado el archivo \"$MBMD_JSON\" en  el actual \"$HOME\", se movera a \"$MBMD_NOMBRE\".${RESET}"
mv "$HOME/$MBMD_JSON" "$HOME/$MBMD_NOMBRE/" && cd "$MBMD_NOMBRE" &&
echo -e "${BOLD}${GREEN}🚀 Iniciando a $MBMD_NOMBRE...${RESET}"
npm start
else
cd "$MBMD_NOMBRE" &&
echo -e "${BOLD}${GREEN}✅ Preparando codigos de vinculación en $MBMD_NOMBRE...${RESET}"
npm start
fi
fi
fi
