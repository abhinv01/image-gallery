import React, { useEffect, useState } from "react";
import Skeleton from "./Skeleton";
import Image from "./Image";
import axios from "axios";
// import RandomAxios from "../hooks/randomAxios";
function InfyImages() {
  const heightWidth = "h-24 w-11/12 md:h-72 md:w-full";
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState([
    // {
    //   id: "7LrifMX_KFU",
    //   slug: "grayscale-photo-of-mans-face-statue-7LrifMX_KFU",
    //   alternative_slugs: {
    //     en: "grayscale-photo-of-mans-face-statue-7LrifMX_KFU",
    //     es: "foto-en-escala-de-grises-de-la-estatua-de-la-cara-del-hombre-7LrifMX_KFU",
    //     ja: "男の顔の彫像のグレースケール写真-7LrifMX_KFU",
    //     fr: "photo-en-niveaux-de-gris-de-la-statue-du-visage-de-lhomme-7LrifMX_KFU",
    //     it: "foto-in-scala-di-grigi-della-statua-del-volto-delluomo-7LrifMX_KFU",
    //     ko: "남자-얼굴-동상의-그레이스케일-사진-7LrifMX_KFU",
    //     de: "graustufenfoto-der-gesichtsstatue-des-mannes-7LrifMX_KFU",
    //     pt: "foto-em-tons-de-cinza-da-estatua-do-rosto-dos-homens-7LrifMX_KFU",
    //   },
    //   created_at: "2021-03-28T05:34:49Z",
    //   updated_at: "2024-05-08T00:25:55Z",
    //   promoted_at: "2021-03-28T14:51:01Z",
    //   width: 2333,
    //   height: 3500,
    //   color: "#404026",
    //   blur_hash: "L354{YEM4;~U?GayE2%L4;xaxa9b",
    //   description:
    //     "A beautiful idol of Lord Ganesha on display at a workshop in Mumbai",
    //   alt_description: "grayscale photo of mans face statue",
    //   breadcrumbs: [],
    //   urls: {
    //     raw: "https://images.unsplash.com/photo-1616908841648-a4bc4322d64e?ixid=M3w2MTkxMzV8MHwxfHNlYXJjaHwxfHxpbmRpYXxlbnwwfHx8YmxhY2t8MTcxNzkyMTA1Nnww&ixlib=rb-4.0.3",
    //     full: "https://images.unsplash.com/photo-1616908841648-a4bc4322d64e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2MTkxMzV8MHwxfHNlYXJjaHwxfHxpbmRpYXxlbnwwfHx8YmxhY2t8MTcxNzkyMTA1Nnww&ixlib=rb-4.0.3&q=85",
    //     regular:
    //       "https://images.unsplash.com/photo-1616908841648-a4bc4322d64e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTkxMzV8MHwxfHNlYXJjaHwxfHxpbmRpYXxlbnwwfHx8YmxhY2t8MTcxNzkyMTA1Nnww&ixlib=rb-4.0.3&q=80&w=1080",
    //     small:
    //       "https://images.unsplash.com/photo-1616908841648-a4bc4322d64e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTkxMzV8MHwxfHNlYXJjaHwxfHxpbmRpYXxlbnwwfHx8YmxhY2t8MTcxNzkyMTA1Nnww&ixlib=rb-4.0.3&q=80&w=400",
    //     thumb:
    //       "https://images.unsplash.com/photo-1616908841648-a4bc4322d64e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTkxMzV8MHwxfHNlYXJjaHwxfHxpbmRpYXxlbnwwfHx8YmxhY2t8MTcxNzkyMTA1Nnww&ixlib=rb-4.0.3&q=80&w=200",
    //     small_s3:
    //       "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1616908841648-a4bc4322d64e",
    //   },
    //   links: {
    //     self: "https://api.unsplash.com/photos/grayscale-photo-of-mans-face-statue-7LrifMX_KFU",
    //     html: "https://unsplash.com/photos/grayscale-photo-of-mans-face-statue-7LrifMX_KFU",
    //     download:
    //       "https://unsplash.com/photos/7LrifMX_KFU/download?ixid=M3w2MTkxMzV8MHwxfHNlYXJjaHwxfHxpbmRpYXxlbnwwfHx8YmxhY2t8MTcxNzkyMTA1Nnww",
    //     download_location:
    //       "https://api.unsplash.com/photos/7LrifMX_KFU/download?ixid=M3w2MTkxMzV8MHwxfHNlYXJjaHwxfHxpbmRpYXxlbnwwfHx8YmxhY2t8MTcxNzkyMTA1Nnww",
    //   },
    //   likes: 185,
    //   liked_by_user: false,
    //   current_user_collections: [],
    //   sponsorship: null,
    //   topic_submissions: {},
    //   asset_type: "photo",
    //   user: {
    //     id: "RO13npDfVuo",
    //     updated_at: "2024-06-05T23:42:01Z",
    //     username: "sonika_agarwal",
    //     name: "Sonika Agarwal",
    //     first_name: "Sonika",
    //     last_name: "Agarwal",
    //     twitter_username: "agarwalsonika7",
    //     portfolio_url: "https://sonikaagarwal.in/",
    //     bio: "Web Designer by profession, Photographer by passion",
    //     location: "Mumbai",
    //     links: {
    //       self: "https://api.unsplash.com/users/sonika_agarwal",
    //       html: "https://unsplash.com/@sonika_agarwal",
    //       photos: "https://api.unsplash.com/users/sonika_agarwal/photos",
    //       likes: "https://api.unsplash.com/users/sonika_agarwal/likes",
    //       portfolio: "https://api.unsplash.com/users/sonika_agarwal/portfolio",
    //       following: "https://api.unsplash.com/users/sonika_agarwal/following",
    //       followers: "https://api.unsplash.com/users/sonika_agarwal/followers",
    //     },
    //     profile_image: {
    //       small:
    //         "https://images.unsplash.com/profile-1598528544454-a4b47f91305aimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
    //       medium:
    //         "https://images.unsplash.com/profile-1598528544454-a4b47f91305aimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
    //       large:
    //         "https://images.unsplash.com/profile-1598528544454-a4b47f91305aimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
    //     },
    //     instagram_username: "agarwalsonika",
    //     total_collections: 8,
    //     total_likes: 497,
    //     total_photos: 1762,
    //     total_promoted_photos: 25,
    //     total_illustrations: 0,
    //     total_promoted_illustrations: 0,
    //     accepted_tos: true,
    //     for_hire: true,
    //     social: {
    //       instagram_username: "agarwalsonika",
    //       portfolio_url: "https://sonikaagarwal.in/",
    //       twitter_username: "agarwalsonika7",
    //       paypal_email: null,
    //     },
    //   },
    //   tags: [
    //     {
    //       type: "search",
    //       title: "maharashtra",
    //     },
    //     {
    //       type: "search",
    //       title: "india",
    //     },
    //     {
    //       type: "search",
    //       title: "mumbai",
    //     },
    //   ],
    // },
    // {
    //   id: "4qIRBzVL9u8",
    //   slug: "a-couple-of-people-walking-down-a-rain-soaked-street-4qIRBzVL9u8",
    //   alternative_slugs: {
    //     en: "a-couple-of-people-walking-down-a-rain-soaked-street-4qIRBzVL9u8",
    //     es: "un-par-de-personas-caminando-por-una-calle-empapada-por-la-lluvia-4qIRBzVL9u8",
    //     ja: "雨に濡れた通りを歩いているカップル-4qIRBzVL9u8",
    //     fr: "un-couple-de-personnes-marchant-dans-une-rue-detrempee-par-la-pluie-4qIRBzVL9u8",
    //     it: "un-paio-di-persone-che-camminano-lungo-una-strada-bagnata-dalla-pioggia-4qIRBzVL9u8",
    //     ko: "비에-젖은-거리를-걷는-두-사람-4qIRBzVL9u8",
    //     de: "ein-paar-leute-gehen-eine-regennasse-strasse-entlang-4qIRBzVL9u8",
    //     pt: "um-casal-de-pessoas-andando-por-uma-rua-encharcada-de-chuva-4qIRBzVL9u8",
    //   },
    //   created_at: "2020-09-21T21:04:30Z",
    //   updated_at: "2024-06-09T03:40:19Z",
    //   promoted_at: null,
    //   width: 4227,
    //   height: 2972,
    //   color: "#262626",
    //   blur_hash: "L45E]S4mDh?cWBRjxvV@8^xu.9IA",
    //   description: "Rain stories",
    //   alt_description: "a couple of people walking down a rain soaked street",
    //   breadcrumbs: [],
    //   urls: {
    //     raw: "https://images.unsplash.com/photo-1600721946649-e26bc4424d9d?ixid=M3w2MTkxMzV8MHwxfHNlYXJjaHwyfHxpbmRpYXxlbnwwfHx8YmxhY2t8MTcxNzkyMTA1Nnww&ixlib=rb-4.0.3",
    //     full: "https://images.unsplash.com/photo-1600721946649-e26bc4424d9d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2MTkxMzV8MHwxfHNlYXJjaHwyfHxpbmRpYXxlbnwwfHx8YmxhY2t8MTcxNzkyMTA1Nnww&ixlib=rb-4.0.3&q=85",
    //     regular:
    //       "https://images.unsplash.com/photo-1600721946649-e26bc4424d9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTkxMzV8MHwxfHNlYXJjaHwyfHxpbmRpYXxlbnwwfHx8YmxhY2t8MTcxNzkyMTA1Nnww&ixlib=rb-4.0.3&q=80&w=1080",
    //     small:
    //       "https://images.unsplash.com/photo-1600721946649-e26bc4424d9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTkxMzV8MHwxfHNlYXJjaHwyfHxpbmRpYXxlbnwwfHx8YmxhY2t8MTcxNzkyMTA1Nnww&ixlib=rb-4.0.3&q=80&w=400",
    //     thumb:
    //       "https://images.unsplash.com/photo-1600721946649-e26bc4424d9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTkxMzV8MHwxfHNlYXJjaHwyfHxpbmRpYXxlbnwwfHx8YmxhY2t8MTcxNzkyMTA1Nnww&ixlib=rb-4.0.3&q=80&w=200",
    //     small_s3:
    //       "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1600721946649-e26bc4424d9d",
    //   },
    //   links: {
    //     self: "https://api.unsplash.com/photos/a-couple-of-people-walking-down-a-rain-soaked-street-4qIRBzVL9u8",
    //     html: "https://unsplash.com/photos/a-couple-of-people-walking-down-a-rain-soaked-street-4qIRBzVL9u8",
    //     download:
    //       "https://unsplash.com/photos/4qIRBzVL9u8/download?ixid=M3w2MTkxMzV8MHwxfHNlYXJjaHwyfHxpbmRpYXxlbnwwfHx8YmxhY2t8MTcxNzkyMTA1Nnww",
    //     download_location:
    //       "https://api.unsplash.com/photos/4qIRBzVL9u8/download?ixid=M3w2MTkxMzV8MHwxfHNlYXJjaHwyfHxpbmRpYXxlbnwwfHx8YmxhY2t8MTcxNzkyMTA1Nnww",
    //   },
    //   likes: 18,
    //   liked_by_user: false,
    //   current_user_collections: [],
    //   sponsorship: null,
    //   topic_submissions: {},
    //   asset_type: "photo",
    //   user: {
    //     id: "PiDlUA8EQTE",
    //     updated_at: "2024-05-20T12:38:17Z",
    //     username: "priyash",
    //     name: "Priyash Vasava",
    //     first_name: "Priyash",
    //     last_name: "Vasava",
    //     twitter_username: null,
    //     portfolio_url: null,
    //     bio: null,
    //     location: "india",
    //     links: {
    //       self: "https://api.unsplash.com/users/priyash",
    //       html: "https://unsplash.com/@priyash",
    //       photos: "https://api.unsplash.com/users/priyash/photos",
    //       likes: "https://api.unsplash.com/users/priyash/likes",
    //       portfolio: "https://api.unsplash.com/users/priyash/portfolio",
    //       following: "https://api.unsplash.com/users/priyash/following",
    //       followers: "https://api.unsplash.com/users/priyash/followers",
    //     },
    //     profile_image: {
    //       small:
    //         "https://images.unsplash.com/profile-1714002943886-a91730192f36image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
    //       medium:
    //         "https://images.unsplash.com/profile-1714002943886-a91730192f36image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
    //       large:
    //         "https://images.unsplash.com/profile-1714002943886-a91730192f36image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
    //     },
    //     instagram_username: null,
    //     total_collections: 0,
    //     total_likes: 31,
    //     total_photos: 52,
    //     total_promoted_photos: 1,
    //     total_illustrations: 0,
    //     total_promoted_illustrations: 0,
    //     accepted_tos: true,
    //     for_hire: false,
    //     social: {
    //       instagram_username: null,
    //       portfolio_url: null,
    //       twitter_username: null,
    //       paypal_email: null,
    //     },
    //   },
    //   tags: [
    //     {
    //       type: "search",
    //       title: "india",
    //     },
    //     {
    //       type: "search",
    //       title: "gujarat",
    //     },
    //     {
    //       type: "search",
    //       title: "vadodara",
    //     },
    //   ],
    // },
    // {
    //   id: "zQZaAs9yIE4",
    //   slug: "man-walking-beside-dog-between-buildings-zQZaAs9yIE4",
    //   alternative_slugs: {
    //     en: "man-walking-beside-dog-between-buildings-zQZaAs9yIE4",
    //     es: "hombre-caminando-junto-a-un-perro-entre-edificios-zQZaAs9yIE4",
    //     ja: "建物と建物の間を犬の横を歩く男-zQZaAs9yIE4",
    //     fr: "homme-marchant-a-cote-dun-chien-entre-les-batiments-zQZaAs9yIE4",
    //     it: "uomo-che-cammina-accanto-al-cane-tra-gli-edifici-zQZaAs9yIE4",
    //     ko: "건물-사이-개-옆을-걷는-남자-zQZaAs9yIE4",
    //     de: "mann-geht-neben-hund-zwischen-gebauden-zQZaAs9yIE4",
    //     pt: "homem-passeando-ao-lado-do-cao-entre-edificios-zQZaAs9yIE4",
    //   },
    //   created_at: "2017-12-27T16:26:07Z",
    //   updated_at: "2024-06-08T12:06:50Z",
    //   promoted_at: "2017-12-28T13:35:06Z",
    //   width: 3640,
    //   height: 5462,
    //   color: "#262626",
    //   blur_hash: "L96@{0Rj0Kt7%MWBM{oe%MWBM{of",
    //   description:
    //     "I thought my granddad were joking when I was told that the place where he lived in the 60s, the streets were so narrow that people could shake hands from their balconies. So, I went there to see for myself and damn, you really could. The bottom left place is actually where my grandfather lived in his primes is now abandoned. It also makes me think how far we all have come and probably is responsible for me appreciating the smallest of things in life.",
    //   alt_description: "man walking beside dog between buildings",
    //   breadcrumbs: [],
    //   urls: {
    //     raw: "https://images.unsplash.com/photo-1514391769-b976b26cc53c?ixid=M3w2MTkxMzV8MHwxfHNlYXJjaHwzfHxpbmRpYXxlbnwwfHx8YmxhY2t8MTcxNzkyMTA1Nnww&ixlib=rb-4.0.3",
    //     full: "https://images.unsplash.com/photo-1514391769-b976b26cc53c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2MTkxMzV8MHwxfHNlYXJjaHwzfHxpbmRpYXxlbnwwfHx8YmxhY2t8MTcxNzkyMTA1Nnww&ixlib=rb-4.0.3&q=85",
    //     regular:
    //       "https://images.unsplash.com/photo-1514391769-b976b26cc53c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTkxMzV8MHwxfHNlYXJjaHwzfHxpbmRpYXxlbnwwfHx8YmxhY2t8MTcxNzkyMTA1Nnww&ixlib=rb-4.0.3&q=80&w=1080",
    //     small:
    //       "https://images.unsplash.com/photo-1514391769-b976b26cc53c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTkxMzV8MHwxfHNlYXJjaHwzfHxpbmRpYXxlbnwwfHx8YmxhY2t8MTcxNzkyMTA1Nnww&ixlib=rb-4.0.3&q=80&w=400",
    //     thumb:
    //       "https://images.unsplash.com/photo-1514391769-b976b26cc53c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTkxMzV8MHwxfHNlYXJjaHwzfHxpbmRpYXxlbnwwfHx8YmxhY2t8MTcxNzkyMTA1Nnww&ixlib=rb-4.0.3&q=80&w=200",
    //     small_s3:
    //       "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1514391769-b976b26cc53c",
    //   },
    //   links: {
    //     self: "https://api.unsplash.com/photos/man-walking-beside-dog-between-buildings-zQZaAs9yIE4",
    //     html: "https://unsplash.com/photos/man-walking-beside-dog-between-buildings-zQZaAs9yIE4",
    //     download:
    //       "https://unsplash.com/photos/zQZaAs9yIE4/download?ixid=M3w2MTkxMzV8MHwxfHNlYXJjaHwzfHxpbmRpYXxlbnwwfHx8YmxhY2t8MTcxNzkyMTA1Nnww",
    //     download_location:
    //       "https://api.unsplash.com/photos/zQZaAs9yIE4/download?ixid=M3w2MTkxMzV8MHwxfHNlYXJjaHwzfHxpbmRpYXxlbnwwfHx8YmxhY2t8MTcxNzkyMTA1Nnww",
    //   },
    //   likes: 260,
    //   liked_by_user: false,
    //   current_user_collections: [],
    //   sponsorship: null,
    //   topic_submissions: {},
    //   asset_type: "photo",
    //   user: {
    //     id: "QaaSSBY0720",
    //     updated_at: "2024-04-01T13:02:11Z",
    //     username: "raghunayyar",
    //     name: "Raghu Nayyar",
    //     first_name: "Raghu",
    //     last_name: "Nayyar",
    //     twitter_username: "raghunayyar",
    //     portfolio_url: "http://raghunayyar.com",
    //     bio: "Designer, Photographer based out of Stockholm.\r\nI am @raghunayyar on Instagram.",
    //     location: "Stockholm",
    //     links: {
    //       self: "https://api.unsplash.com/users/raghunayyar",
    //       html: "https://unsplash.com/@raghunayyar",
    //       photos: "https://api.unsplash.com/users/raghunayyar/photos",
    //       likes: "https://api.unsplash.com/users/raghunayyar/likes",
    //       portfolio: "https://api.unsplash.com/users/raghunayyar/portfolio",
    //       following: "https://api.unsplash.com/users/raghunayyar/following",
    //       followers: "https://api.unsplash.com/users/raghunayyar/followers",
    //     },
    //     profile_image: {
    //       small:
    //         "https://images.unsplash.com/profile-1495391929558-64f9b42830c9?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
    //       medium:
    //         "https://images.unsplash.com/profile-1495391929558-64f9b42830c9?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
    //       large:
    //         "https://images.unsplash.com/profile-1495391929558-64f9b42830c9?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
    //     },
    //     instagram_username: "raghunayyar",
    //     total_collections: 7,
    //     total_likes: 341,
    //     total_photos: 42,
    //     total_promoted_photos: 7,
    //     total_illustrations: 0,
    //     total_promoted_illustrations: 0,
    //     accepted_tos: false,
    //     for_hire: true,
    //     social: {
    //       instagram_username: "raghunayyar",
    //       portfolio_url: "http://raghunayyar.com",
    //       twitter_username: "raghunayyar",
    //       paypal_email: null,
    //     },
    //   },
    //   tags: [
    //     {
    //       type: "search",
    //       title: "india",
    //     },
    //     {
    //       type: "search",
    //       title: "amritsar",
    //     },
    //     {
    //       type: "search",
    //       title: "street",
    //     },
    //   ],
    // },
    // {
    //   id: "jO1OyKR7s68",
    //   slug: "woman-leaning-on-wall-jO1OyKR7s68",
    //   alternative_slugs: {
    //     en: "woman-leaning-on-wall-jO1OyKR7s68",
    //     es: "mujer-apoyada-en-la-pared-jO1OyKR7s68",
    //     ja: "壁にもたれかかる女性-jO1OyKR7s68",
    //     fr: "femme-appuyee-sur-le-mur-jO1OyKR7s68",
    //     it: "donna-appoggiata-al-muro-jO1OyKR7s68",
    //     ko: "벽에-기대어-있는-여자-jO1OyKR7s68",
    //     de: "frau-lehnt-an-wand-jO1OyKR7s68",
    //     pt: "mulher-encostada-na-parede-jO1OyKR7s68",
    //   },
    //   created_at: "2018-02-08T23:11:16Z",
    //   updated_at: "2024-05-15T00:18:13Z",
    //   promoted_at: "2018-02-09T15:04:23Z",
    //   width: 7770,
    //   height: 5183,
    //   color: "#260c0c",
    //   blur_hash: "LL9~+*jY0zkWI=S4s.xDWBfkofay",
    //   description: null,
    //   alt_description: "woman leaning on wall",
    //   breadcrumbs: [],
    //   urls: {
    //     raw: "https://images.unsplash.com/photo-1518131296958-df44106fd0ae?ixid=M3w2MTkxMzV8MHwxfHNlYXJjaHw0fHxpbmRpYXxlbnwwfHx8YmxhY2t8MTcxNzkyMTA1Nnww&ixlib=rb-4.0.3",
    //     full: "https://images.unsplash.com/photo-1518131296958-df44106fd0ae?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2MTkxMzV8MHwxfHNlYXJjaHw0fHxpbmRpYXxlbnwwfHx8YmxhY2t8MTcxNzkyMTA1Nnww&ixlib=rb-4.0.3&q=85",
    //     regular:
    //       "https://images.unsplash.com/photo-1518131296958-df44106fd0ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTkxMzV8MHwxfHNlYXJjaHw0fHxpbmRpYXxlbnwwfHx8YmxhY2t8MTcxNzkyMTA1Nnww&ixlib=rb-4.0.3&q=80&w=1080",
    //     small:
    //       "https://images.unsplash.com/photo-1518131296958-df44106fd0ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTkxMzV8MHwxfHNlYXJjaHw0fHxpbmRpYXxlbnwwfHx8YmxhY2t8MTcxNzkyMTA1Nnww&ixlib=rb-4.0.3&q=80&w=400",
    //     thumb:
    //       "https://images.unsplash.com/photo-1518131296958-df44106fd0ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTkxMzV8MHwxfHNlYXJjaHw0fHxpbmRpYXxlbnwwfHx8YmxhY2t8MTcxNzkyMTA1Nnww&ixlib=rb-4.0.3&q=80&w=200",
    //     small_s3:
    //       "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1518131296958-df44106fd0ae",
    //   },
    //   links: {
    //     self: "https://api.unsplash.com/photos/woman-leaning-on-wall-jO1OyKR7s68",
    //     html: "https://unsplash.com/photos/woman-leaning-on-wall-jO1OyKR7s68",
    //     download:
    //       "https://unsplash.com/photos/jO1OyKR7s68/download?ixid=M3w2MTkxMzV8MHwxfHNlYXJjaHw0fHxpbmRpYXxlbnwwfHx8YmxhY2t8MTcxNzkyMTA1Nnww",
    //     download_location:
    //       "https://api.unsplash.com/photos/jO1OyKR7s68/download?ixid=M3w2MTkxMzV8MHwxfHNlYXJjaHw0fHxpbmRpYXxlbnwwfHx8YmxhY2t8MTcxNzkyMTA1Nnww",
    //   },
    //   likes: 285,
    //   liked_by_user: false,
    //   current_user_collections: [],
    //   sponsorship: null,
    //   topic_submissions: {
    //     people: {
    //       status: "approved",
    //       approved_on: "2021-02-19T12:55:27Z",
    //     },
    //   },
    //   asset_type: "photo",
    //   user: {
    //     id: "--zk4nkOuL0",
    //     updated_at: "2024-05-19T02:42:57Z",
    //     username: "tomcchen",
    //     name: "Tom Chen",
    //     first_name: "Tom",
    //     last_name: "Chen",
    //     twitter_username: null,
    //     portfolio_url: null,
    //     bio: null,
    //     location: null,
    //     links: {
    //       self: "https://api.unsplash.com/users/tomcchen",
    //       html: "https://unsplash.com/@tomcchen",
    //       photos: "https://api.unsplash.com/users/tomcchen/photos",
    //       likes: "https://api.unsplash.com/users/tomcchen/likes",
    //       portfolio: "https://api.unsplash.com/users/tomcchen/portfolio",
    //       following: "https://api.unsplash.com/users/tomcchen/following",
    //       followers: "https://api.unsplash.com/users/tomcchen/followers",
    //     },
    //     profile_image: {
    //       small:
    //         "https://images.unsplash.com/profile-fb-1506358426-42d4c692e9ed.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
    //       medium:
    //         "https://images.unsplash.com/profile-fb-1506358426-42d4c692e9ed.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
    //       large:
    //         "https://images.unsplash.com/profile-fb-1506358426-42d4c692e9ed.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
    //     },
    //     instagram_username: null,
    //     total_collections: 7,
    //     total_likes: 188,
    //     total_photos: 18,
    //     total_promoted_photos: 9,
    //     total_illustrations: 0,
    //     total_promoted_illustrations: 0,
    //     accepted_tos: false,
    //     for_hire: false,
    //     social: {
    //       instagram_username: null,
    //       portfolio_url: null,
    //       twitter_username: null,
    //       paypal_email: null,
    //     },
    //   },
    //   tags: [
    //     {
    //       type: "search",
    //       title: "india",
    //     },
    //     {
    //       type: "landing_page",
    //       title: "people",
    //       source: {
    //         ancestry: {
    //           type: {
    //             slug: "images",
    //             pretty_slug: "Images",
    //           },
    //           category: {
    //             slug: "people",
    //             pretty_slug: "People",
    //           },
    //         },
    //         title: "People images & pictures",
    //         subtitle: "Download free people images",
    //         description:
    //           "Human faces speak to us in a way that language cannot. Everyone recognize a smile, a frown, tears. Unsplash has the finest selection of people images on the web: high-def and curated for quality. Family, friends, men, women, Unsplash has photos for all.",
    //         meta_title:
    //           "People Pictures [HQ] | Download Free Images on Unsplash",
    //         meta_description:
    //           "Choose from hundreds of free people pictures. Download HD people photos for free on Unsplash.",
    //         cover_photo: {
    //           id: "PmNjS6b3XP4",
    //           slug: "woman-carrying-baby-while-walking-PmNjS6b3XP4",
    //           alternative_slugs: {
    //             en: "woman-carrying-baby-while-walking-PmNjS6b3XP4",
    //             es: "mujer-cargando-bebe-mientras-camina-PmNjS6b3XP4",
    //             ja: "赤ん坊を抱きながら歩く女性-PmNjS6b3XP4",
    //             fr: "femme-portant-un-bebe-en-marchant-PmNjS6b3XP4",
    //             it: "donna-che-trasporta-il-bambino-mentre-cammina-PmNjS6b3XP4",
    //             ko: "걷는-동안-아기를-안고-있는-여자-PmNjS6b3XP4",
    //             de: "frau-tragt-baby-beim-gehen-PmNjS6b3XP4",
    //             pt: "mulher-que-carrega-o-bebe-enquanto-caminha-PmNjS6b3XP4",
    //           },
    //           created_at: "2017-04-20T22:04:07Z",
    //           updated_at: "2024-05-29T00:21:29Z",
    //           promoted_at: "2017-04-21T16:00:49Z",
    //           width: 4630,
    //           height: 3087,
    //           color: "#a6d9d9",
    //           blur_hash: "LjI=x%:QUbv#NHWVa}kCt7jFjZfQ",
    //           description: "Summer in France with baby",
    //           alt_description: "woman carrying baby while walking",
    //           breadcrumbs: [
    //             {
    //               slug: "images",
    //               title: "1,000,000+ Free Images",
    //               index: 0,
    //               type: "landing_page",
    //             },
    //             {
    //               slug: "stock",
    //               title: "Stock Photos & Images",
    //               index: 1,
    //               type: "landing_page",
    //             },
    //             {
    //               slug: "non-copyrighted",
    //               title: "Non-Copyrighted Images",
    //               index: 2,
    //               type: "landing_page",
    //             },
    //           ],
    //           urls: {
    //             raw: "https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?ixlib=rb-4.0.3",
    //             full: "https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
    //             regular:
    //               "https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
    //             small:
    //               "https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
    //             thumb:
    //               "https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max",
    //             small_s3:
    //               "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1492725764893-90b379c2b6e7",
    //           },
    //           links: {
    //             self: "https://api.unsplash.com/photos/woman-carrying-baby-while-walking-PmNjS6b3XP4",
    //             html: "https://unsplash.com/photos/woman-carrying-baby-while-walking-PmNjS6b3XP4",
    //             download: "https://unsplash.com/photos/PmNjS6b3XP4/download",
    //             download_location:
    //               "https://api.unsplash.com/photos/PmNjS6b3XP4/download",
    //           },
    //           likes: 2826,
    //           liked_by_user: false,
    //           current_user_collections: [],
    //           sponsorship: null,
    //           topic_submissions: {
    //             "current-events": {
    //               status: "approved",
    //               approved_on: "2021-03-01T12:52:57Z",
    //             },
    //           },
    //           asset_type: "photo",
    //           user: {
    //             id: "7S_pCRiCiQo",
    //             updated_at: "2023-11-08T01:20:24Z",
    //             username: "thedakotacorbin",
    //             name: "Dakota Corbin",
    //             first_name: "Dakota",
    //             last_name: "Corbin",
    //             twitter_username: "thedakotacorbin",
    //             portfolio_url: null,
    //             bio: "Husband | Father | Creator",
    //             location: "Utah, United States",
    //             links: {
    //               self: "https://api.unsplash.com/users/thedakotacorbin",
    //               html: "https://unsplash.com/@thedakotacorbin",
    //               photos:
    //                 "https://api.unsplash.com/users/thedakotacorbin/photos",
    //               likes: "https://api.unsplash.com/users/thedakotacorbin/likes",
    //               portfolio:
    //                 "https://api.unsplash.com/users/thedakotacorbin/portfolio",
    //               following:
    //                 "https://api.unsplash.com/users/thedakotacorbin/following",
    //               followers:
    //                 "https://api.unsplash.com/users/thedakotacorbin/followers",
    //             },
    //             profile_image: {
    //               small:
    //                 "https://images.unsplash.com/profile-1688334779765-edbf1229e3fa?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
    //               medium:
    //                 "https://images.unsplash.com/profile-1688334779765-edbf1229e3fa?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
    //               large:
    //                 "https://images.unsplash.com/profile-1688334779765-edbf1229e3fa?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
    //             },
    //             instagram_username: "thedakotacorbin",
    //             total_collections: 0,
    //             total_likes: 1,
    //             total_photos: 44,
    //             total_promoted_photos: 17,
    //             total_illustrations: 0,
    //             total_promoted_illustrations: 0,
    //             accepted_tos: true,
    //             for_hire: true,
    //             social: {
    //               instagram_username: "thedakotacorbin",
    //               portfolio_url: null,
    //               twitter_username: "thedakotacorbin",
    //               paypal_email: null,
    //             },
    //           },
    //         },
    //       },
    //     },
    //     {
    //       type: "search",
    //       title: "jaipur",
    //     },
    //   ],
    // },
  ]);
  const [load, setload] = useState(true);

  const fe = async () => {
    try {
      setload(true);
      let res = await axios.get(
        `https://api.unsplash.com/photos/random?count=13&client_id=${process.env.REACT_APP_ACCESS_KEY}`
      );
      setResponse((prev) => [...prev, ...res.data]);
      // console.log("feeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
    } catch (error) {
      console.log(error);
      setMessage("Server error try after some time");
    } finally {
      setload(false);
    }
    // try {
    //   setload(true);
    //   const res = await RandomAxios();
    //   setResponse((prev) => [...prev, ...res]);
    // } catch (error) {
    //   console.error("Promise rejected with error:", error);
    // } finally {
    //   setload(false);
    // }
  };

  useEffect(() => {
    fe();
    console.log("after feeeeeeeeee");

    const handleScroll = () => {
      let heightHtmlElement = document.documentElement.scrollHeight;
      let scrollTop = document.documentElement.scrollTop;
      let windowHeight = window.innerHeight;
      console.log(heightHtmlElement, scrollTop, windowHeight);

      if (windowHeight + scrollTop + 1 >= heightHtmlElement) {
        fe();
      } else if (heightHtmlElement <= windowHeight) {
        fe();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      let heightHtmlElement = document.documentElement.scrollHeight;
      let scrollTop = document.documentElement.scrollTop;
      let windowHeight = window.innerHeight;
      console.log(heightHtmlElement, scrollTop, windowHeight);

      if (heightHtmlElement <= windowHeight) {
        fe();
      }
    };
    window.addEventListener("load", handleScroll);
    return () => window.removeEventListener("load", handleScroll);
  }, []);

  return (
    <div className="pb-10 px-2 md:px-5 bg-gradient-to-l from-slate-100 from-10% via-sky-100 via-30% to-gray-300 to-90%">
      <h1 className="text-center text-bold py-6 font-corsiva font-extrabold tracking-wider text-emerald-800 text-3xl">
        {message ? (
          <span className="text-red-600 capitalize">{message}</span>
        ) : (
          "Random Images Genrated below"
        )}
      </h1>
      <div className="grid justify-items-center grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 max-w-7xl px-4 mx-auto ">
        {response.map((data, index) => {
          return (
            <div className={`${heightWidth}`} key={index}>
              <Image data={data} />
            </div>
          );
        })}
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((data, index) => {
          return (
            <div
              className={`${heightWidth}`}
              key={index}
              style={{ display: `${!load ? "none" : "block"}` }}
            >
              <Skeleton />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default InfyImages;
