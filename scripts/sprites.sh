#!/bin/bash

PS3="Select type: "

select type in icon logo;
do
  case $type in
    icon)
      svgo -f assets/icons && spritesh --input assets/icons --output public/imgs/icn_sprite.svg
      break
      ;;
    logo)
      svgo -f assets/logos && spritesh --input assets/logos --output public/imgs/lgo_sprite.svg
      break
      ;;
  esac
done
