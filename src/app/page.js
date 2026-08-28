"use client";

import { useState, useEffect } from "react";
import Navigation from "@/components/navigation";

// ข้อมูลรูปภาพนักขับความละเอียดสูงอย่างเป็นทางการ (Formula1.com CDN)
const DRIVER_IMAGES = {
  ANT: "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/mercedes/andant01/2026mercedesandant01right.webp",
  RUS: "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/mercedes/georus01/2026mercedesgeorus01right.webp",
  HAM: "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/ferrari/lewham01/2026ferrarilewham01right.webp",
  NOR: "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/mclaren/lannor01/2026mclarenlannor01right.webp",
  LEC: "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/ferrari/chalec01/2026ferrarichalec01right.webp",
  VER: "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/redbullracing/maxver01/2026redbullracingmaxver01right.webp",
  PIA: "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/mclaren/oscpia01/2026mclarenoscpia01right.webp",
  HAD: "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/redbullracing/isahad01/2026redbullracingisahad01right.webp",
  LAW: "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/redbullracing/lialaw01/2026redbullracinglialaw01right.webp",
  GAS: "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/alpine/piegas01/2026alpinepiegas01right.webp",
  LIN: "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/racingbulls/arvlin01/2026racingbullsarvlin01right.webp",
  COL: "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/alpine/fracol01/2026alpinefracol01right.webp",
  BEA: "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/haasf1team/olibea01/2026haasf1teamolibea01right.webp",
  BOR: "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/audi/gabbor01/2026audigabbor01right.webp",
  HUL: "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/audi/nichul01/2026audinichul01right.webp",
  SAI: "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/williams/carsai01/2026williamscarsai01right.webp",
  ALB: "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/williams/alealb01/2026williamsalealb01right.webp",
  OCO: "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/haasf1team/estoco01/2026haasf1teamestoco01right.webp",
  ALO: "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/astonmartin/feralo01/2026astonmartinferalo01right.webp",
  TSU: "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/racingbulls/yuktsu01/2026racingbullsyuktsu01right.webp",
  STR: "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/astonmartin/lanstr01/2026astonmartinlanstr01right.webp",
  BOT: "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/cadillac/valbot01/2026cadillacvalbot01right.webp",
  PER: "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/cadillac/serper01/2026cadillacserper01right.webp"
};

// ข้อมูลสนามแข่ง F1 ฤดูกาล 2026 พร้อมสเปกและแกลเลอรีรูปภาพ
const F1_2026_CALENDAR = [
  {
    round: "ROUND 01",
    country: "Australia",
    flag: "🇦🇺",
    grandPrix: "Australian Grand Prix 2026",
    circuit: "Albert Park Circuit",
    circuitImage: "https://media.formula1.com/image/upload/f_auto/q_auto/v1677244975/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Australia_Circuit.png",
    date: "06 - 08 MAR",
    localTime: "15:00 AEST",
    thaiTime: "11:00 น. (เวลาไทย)",
    completed: true,
    length: "5.278 km",
    turns: 14,
    laps: 58,
    lapRecord: "1:19.813 (Charles Leclerc)",
    gallery: [
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80"
    ],
    top3: [
      { pos: "1ST", code: "RUS", driver: "George Russell", team: "Mercedes", time: "1:24:12.420", isWinner: true },
      { pos: "2ND", code: "ANT", driver: "Kimi Antonelli", team: "Mercedes", time: "+3.210", isWinner: false },
      { pos: "3RD", code: "LEC", driver: "Charles Leclerc", team: "Ferrari", time: "+12.450", isWinner: false },
    ]
  },
  {
    round: "ROUND 02",
    country: "China",
    flag: "🇨🇳",
    grandPrix: "Chinese Grand Prix 2026",
    circuit: "Shanghai International Circuit",
    circuitImage: "https://media.formula1.com/image/upload/f_auto/q_auto/v1677244975/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/China_Circuit.png",
    date: "13 - 15 MAR",
    localTime: "15:00 CST",
    thaiTime: "14:00 น. (เวลาไทย)",
    completed: true,
    length: "5.451 km",
    turns: 16,
    laps: 56,
    lapRecord: "1:32.238 (Michael Schumacher)",
    gallery: [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80"
    ],
    top3: [
      { pos: "1ST", code: "ANT", driver: "Kimi Antonelli", team: "Mercedes", time: "1:33:15.607", isWinner: true },
      { pos: "2ND", code: "RUS", driver: "George Russell", team: "Mercedes", time: "+5.515", isWinner: false },
      { pos: "3RD", code: "HAM", driver: "Lewis Hamilton", team: "Ferrari", time: "+25.267", isWinner: false },
    ]
  },
  {
    round: "ROUND 03",
    country: "Japan",
    flag: "🇯🇵",
    grandPrix: "Japanese Grand Prix 2026",
    circuit: "Suzuka Circuit",
    circuitImage: "https://media.formula1.com/image/upload/f_auto/q_auto/v1677244975/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Japan_Circuit.png",
    date: "27 - 29 MAR",
    localTime: "14:00 JST",
    thaiTime: "12:00 น. (เวลาไทย)",
    completed: true,
    length: "5.807 km",
    turns: 18,
    laps: 53,
    lapRecord: "1:30.983 (Lewis Hamilton)",
    gallery: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80"
    ],
    top3: [
      { pos: "1ST", code: "ANT", driver: "Kimi Antonelli", team: "Mercedes", time: "1:28:44.112", isWinner: true },
      { pos: "2ND", code: "PIA", driver: "Oscar Piastri", team: "McLaren", time: "+1.890", isWinner: false },
      { pos: "3RD", code: "LEC", driver: "Charles Leclerc", team: "Ferrari", time: "+8.330", isWinner: false },
    ]
  },
  {
    round: "ROUND 04",
    country: "Miami",
    flag: "🇺🇸",
    grandPrix: "Miami Grand Prix 2026",
    circuit: "Miami International Autodrome",
    circuitImage: "https://media.formula1.com/image/upload/f_auto/q_auto/v1677244975/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Miami_Circuit.png",
    date: "01 - 03 MAY",
    localTime: "16:00 EDT",
    thaiTime: "03:00 น. (+1 วัน / เวลาไทย)",
    completed: true,
    length: "5.412 km",
    turns: 19,
    laps: 57,
    lapRecord: "1:29.708 (Max Verstappen)",
    gallery: [
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1200&q=80"
    ],
    top3: [
      { pos: "1ST", code: "ANT", driver: "Kimi Antonelli", team: "Mercedes", time: "1:30:22.500", isWinner: true },
      { pos: "2ND", code: "NOR", driver: "Lando Norris", team: "McLaren", time: "+4.120", isWinner: false },
      { pos: "3RD", code: "PIA", driver: "Oscar Piastri", team: "McLaren", time: "+11.050", isWinner: false },
    ]
  },
  {
    round: "ROUND 05",
    country: "Canada",
    flag: "🇨🇦",
    grandPrix: "Canadian Grand Prix 2026",
    circuit: "Circuit Gilles-Villeneuve",
    circuitImage: "https://media.formula1.com/image/upload/f_auto/q_auto/v1677244975/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Canada_Circuit.png",
    date: "22 - 24 MAY",
    localTime: "16:00 EDT",
    thaiTime: "03:00 น. (+1 วัน / เวลาไทย)",
    completed: true,
    length: "4.361 km",
    turns: 14,
    laps: 70,
    lapRecord: "1:13.078 (Valtteri Bottas)",
    gallery: [
      "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1200&q=80"
    ],
    top3: [
      { pos: "1ST", code: "ANT", driver: "Kimi Antonelli", team: "Mercedes", time: "1:35:01.880", isWinner: true },
      { pos: "2ND", code: "HAM", driver: "Lewis Hamilton", team: "Ferrari", time: "+0.845", isWinner: false },
      { pos: "3RD", code: "VER", driver: "Max Verstappen", team: "Red Bull", time: "+6.402", isWinner: false },
    ]
  },
  {
    round: "ROUND 06",
    country: "Monaco",
    flag: "🇲🇨",
    grandPrix: "Monaco Grand Prix 2026",
    circuit: "Circuit de Monaco",
    circuitImage: "https://media.formula1.com/image/upload/f_auto/q_auto/v1677244975/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Monaco_Circuit.png",
    date: "05 - 07 JUN",
    localTime: "15:00 CEST",
    thaiTime: "20:00 น. (เวลาไทย)",
    completed: true,
    length: "3.337 km",
    turns: 19,
    laps: 78,
    lapRecord: "1:12.909 (Lewis Hamilton)",
    gallery: [
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=1200&q=80"
    ],
    top3: [
      { pos: "1ST", code: "ANT", driver: "Kimi Antonelli", team: "Mercedes", time: "1:41:16.230", isWinner: true },
      { pos: "2ND", code: "HAM", driver: "Lewis Hamilton", team: "Ferrari", time: "+2.110", isWinner: false },
      { pos: "3RD", code: "GAS", driver: "Pierre Gasly", team: "Alpine", time: "+18.990", isWinner: false },
    ]
  },
  {
    round: "ROUND 07",
    country: "Spain",
    flag: "🇪🇸",
    grandPrix: "Spanish Grand Prix 2026",
    circuit: "Circuit de Barcelona-Catalunya",
    circuitImage: "https://media.formula1.com/image/upload/f_auto/q_auto/v1677244975/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Spain_Circuit.png",
    date: "12 - 14 JUN",
    localTime: "15:00 CEST",
    thaiTime: "20:00 น. (เวลาไทย)",
    completed: true,
    length: "4.657 km",
    turns: 14,
    laps: 66,
    lapRecord: "1:16.330 (Max Verstappen)",
    gallery: [
      "https://images.unsplash.com/photo-1541348263662-e08266f92f3a?auto=format&fit=crop&w=1200&q=80"
    ],
    top3: [
      { pos: "1ST", code: "HAM", driver: "Lewis Hamilton", team: "Ferrari", time: "1:29:08.777", isWinner: true },
      { pos: "2ND", code: "RUS", driver: "George Russell", team: "Mercedes", time: "+3.901", isWinner: false },
      { pos: "3RD", code: "NOR", driver: "Lando Norris", team: "McLaren", time: "+14.520", isWinner: false },
    ]
  },
  {
    round: "ROUND 08",
    country: "Austria",
    flag: "🇦🇹",
    grandPrix: "Austrian Grand Prix 2026",
    circuit: "Red Bull Ring",
    circuitImage: "https://media.formula1.com/image/upload/f_auto/q_auto/v1677244975/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Austria_Circuit.png",
    date: "26 - 28 JUN",
    localTime: "15:00 CEST",
    thaiTime: "20:00 น. (เวลาไทย)",
    completed: true,
    length: "4.318 km",
    turns: 10,
    laps: 71,
    lapRecord: "1:05.619 (Carlos Sainz)",
    gallery: [
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80"
    ],
    top3: [
      { pos: "1ST", code: "RUS", driver: "George Russell", team: "Mercedes", time: "1:24:22.990", isWinner: true },
      { pos: "2ND", code: "VER", driver: "Max Verstappen", team: "Red Bull", time: "+1.988", isWinner: false },
      { pos: "3RD", code: "ANT", driver: "Kimi Antonelli", team: "Mercedes", time: "+7.610", isWinner: false },
    ]
  },
  {
    round: "ROUND 09",
    country: "Great Britain",
    flag: "🇬🇧",
    grandPrix: "British Grand Prix 2026",
    circuit: "Silverstone Circuit",
    circuitImage: "https://media.formula1.com/image/upload/f_auto/q_auto/v1677244975/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Great_Britain_Circuit.png",
    date: "03 - 05 JUL",
    localTime: "15:00 BST",
    thaiTime: "21:00 น. (เวลาไทย)",
    completed: true,
    length: "5.891 km",
    turns: 18,
    laps: 52,
    lapRecord: "1:27.097 (Max Verstappen)",
    gallery: [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80"
    ],
    top3: [
      { pos: "1ST", code: "LEC", driver: "Charles Leclerc", team: "Ferrari", time: "1:22:39.005", isWinner: true },
      { pos: "2ND", code: "RUS", driver: "George Russell", team: "Mercedes", time: "+4.410", isWinner: false },
      { pos: "3RD", code: "HAM", driver: "Lewis Hamilton", team: "Ferrari", time: "+9.120", isWinner: false },
    ]
  },
  {
    round: "ROUND 10",
    country: "Belgium",
    flag: "🇧🇪",
    grandPrix: "Belgian Grand Prix 2026",
    circuit: "Circuit de Spa-Francorchamps",
    circuitImage: "https://media.formula1.com/image/upload/f_auto/q_auto/v1677244975/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Belgium_Circuit.png",
    date: "17 - 19 JUL",
    localTime: "15:00 CEST",
    thaiTime: "20:00 น. (เวลาไทย)",
    completed: true,
    length: "7.004 km",
    turns: 19,
    laps: 44,
    lapRecord: "1:46.286 (Valtteri Bottas)",
    gallery: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80"
    ],
    top3: [
      { pos: "1ST", code: "ANT", driver: "Kimi Antonelli", team: "Mercedes", time: "1:25:56.300", isWinner: true },
      { pos: "2ND", code: "LEC", driver: "Charles Leclerc", team: "Ferrari", time: "+2.890", isWinner: false },
      { pos: "3RD", code: "VER", driver: "Max Verstappen", team: "Red Bull", time: "+11.450", isWinner: false },
    ]
  },
  {
    round: "ROUND 11",
    country: "Hungary",
    flag: "🇭🇺",
    grandPrix: "Hungarian Grand Prix 2026",
    circuit: "Hungaroring",
    circuitImage: "https://media.formula1.com/image/upload/f_auto/q_auto/v1677244975/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Hungary_Circuit.png",
    date: "24 - 26 JUL",
    localTime: "15:00 CEST",
    thaiTime: "20:00 น. (เวลาไทย)",
    completed: true,
    length: "4.381 km",
    turns: 14,
    laps: 70,
    lapRecord: "1:16.627 (Lewis Hamilton)",
    gallery: [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80"
    ],
    top3: [
      { pos: "1ST", code: "NOR", driver: "Lando Norris", team: "McLaren", time: "1:35:40.110", isWinner: true },
      { pos: "2ND", code: "VER", driver: "Max Verstappen", team: "Red Bull", time: "+6.220", isWinner: false },
      { pos: "3RD", code: "ANT", driver: "Kimi Antonelli", team: "Mercedes", time: "+13.080", isWinner: false },
    ]
  },
  {
    round: "ROUND 12",
    country: "Netherlands",
    flag: "🇳🇱",
    grandPrix: "Dutch Grand Prix 2026",
    circuit: "Circuit Zandvoort",
    circuitImage: "https://media.formula1.com/image/upload/f_auto/q_auto/v1677244975/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Netherlands_Circuit.png",
    date: "21 - 23 AUG",
    localTime: "15:00 CEST",
    thaiTime: "20:00 น. (เวลาไทย)",
    completed: true,
    length: "4.259 km",
    turns: 14,
    laps: 72,
    lapRecord: "1:11.097 (Lewis Hamilton)",
    gallery: [
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=80"
    ],
    top3: [
      { pos: "1ST", code: "NOR", driver: "Lando Norris", team: "McLaren", time: "1:30:45.519", isWinner: true },
      { pos: "2ND", code: "ANT", driver: "Kimi Antonelli", team: "Mercedes", time: "+2.412", isWinner: false },
      { pos: "3RD", code: "RUS", driver: "George Russell", team: "Mercedes", time: "+8.995", isWinner: false },
    ]
  },
  {
    round: "ROUND 13",
    country: "Italy",
    flag: "🇮🇹",
    grandPrix: "Italian Grand Prix 2026",
    circuit: "Autodromo Nazionale Monza",
    circuitImage: "https://media.formula1.com/image/upload/f_auto/q_auto/v1677244975/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Italy_Circuit.png",
    date: "04 - 06 SEP",
    localTime: "15:00 CEST",
    thaiTime: "20:00 น. (เวลาไทย)",
    completed: false,
    isCurrentUpcoming: true,
    length: "5.793 km",
    turns: 11,
    laps: 53,
    lapRecord: "1:21.046 (Rubens Barrichello)",
    gallery: [
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1541348263662-e08266f92f3a?auto=format&fit=crop&w=1200&q=80"
    ],
    top3: null
  },
  {
    round: "ROUND 14",
    country: "Azerbaijan",
    flag: "🇦🇿",
    grandPrix: "Azerbaijan Grand Prix 2026",
    circuit: "Baku City Circuit",
    circuitImage: "https://media.formula1.com/image/upload/f_auto/q_auto/v1677244975/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Baku_Circuit.png",
    date: "18 - 20 SEP",
    localTime: "15:00 AZT",
    thaiTime: "18:00 น. (เวลาไทย)",
    completed: false,
    length: "6.003 km",
    turns: 20,
    laps: 51,
    lapRecord: "1:43.009 (Charles Leclerc)",
    gallery: [
      "https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=1200&q=80"
    ],
    top3: null
  },
  {
    round: "ROUND 15",
    country: "Singapore",
    flag: "🇸🇬",
    grandPrix: "Singapore Grand Prix 2026",
    circuit: "Marina Bay Street Circuit",
    circuitImage: "https://media.formula1.com/image/upload/f_auto/q_auto/v1677244975/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Singapore_Circuit.png",
    date: "02 - 04 OCT",
    localTime: "20:00 SGT",
    thaiTime: "19:00 น. (เวลาไทย)",
    completed: false,
    length: "4.940 km",
    turns: 19,
    laps: 62,
    lapRecord: "1:35.867 (Lewis Hamilton)",
    gallery: [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80"
    ],
    top3: null
  },
  {
    round: "ROUND 16",
    country: "United States",
    flag: "🇺🇸",
    grandPrix: "United States Grand Prix 2026",
    circuit: "Circuit of The Americas",
    circuitImage: "https://media.formula1.com/image/upload/f_auto/q_auto/v1677244975/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/USA_Circuit.png",
    date: "16 - 18 OCT",
    localTime: "14:00 CDT",
    thaiTime: "02:00 น. (+1 วัน / เวลาไทย)",
    completed: false,
    length: "5.513 km",
    turns: 20,
    laps: 56,
    lapRecord: "1:36.169 (Charles Leclerc)",
    gallery: [
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1200&q=80"
    ],
    top3: null
  },
  {
    round: "ROUND 17",
    country: "Mexico",
    flag: "🇲🇽",
    grandPrix: "Mexico City Grand Prix 2026",
    circuit: "Autódromo Hermanos Rodríguez",
    circuitImage: "https://media.formula1.com/image/upload/f_auto/q_auto/v1677244975/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Mexico_Circuit.png",
    date: "23 - 25 OCT",
    localTime: "14:00 CST",
    thaiTime: "03:00 น. (+1 วัน / เวลาไทย)",
    completed: false,
    length: "4.304 km",
    turns: 17,
    laps: 71,
    lapRecord: "1:17.774 (Valtteri Bottas)",
    gallery: [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80"
    ],
    top3: null
  },
  {
    round: "ROUND 18",
    country: "Brazil",
    flag: "🇧🇷",
    grandPrix: "São Paulo Grand Prix 2026",
    circuit: "Autódromo José Carlos Pace",
    circuitImage: "https://media.formula1.com/image/upload/f_auto/q_auto/v1677244975/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Brazil_Circuit.png",
    date: "06 - 08 NOV",
    localTime: "14:00 BRT",
    thaiTime: "23:00 น. (เวลาไทย)",
    completed: false,
    length: "4.309 km",
    turns: 15,
    laps: 71,
    lapRecord: "1:10.540 (Valtteri Bottas)",
    gallery: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80"
    ],
    top3: null
  },
  {
    round: "ROUND 19",
    country: "Las Vegas",
    flag: "🇺🇸",
    grandPrix: "Las Vegas Grand Prix 2026",
    circuit: "Las Vegas Strip Circuit",
    circuitImage: "https://media.formula1.com/image/upload/f_auto/q_auto/v1677244975/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Las_Vegas_Circuit.png",
    date: "19 - 21 NOV",
    localTime: "22:00 PST",
    thaiTime: "13:00 น. (เวลาไทย)",
    completed: false,
    length: "6.201 km",
    turns: 17,
    laps: 50,
    lapRecord: "1:35.490 (Oscar Piastri)",
    gallery: [
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=80"
    ],
    top3: null
  },
  {
    round: "ROUND 20",
    country: "Qatar",
    flag: "🇶🇦",
    grandPrix: "Qatar Grand Prix 2026",
    circuit: "Lusail International Circuit",
    circuitImage: "https://media.formula1.com/image/upload/f_auto/q_auto/v1677244975/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Qatar_Circuit.png",
    date: "27 - 29 NOV",
    localTime: "20:00 AST",
    thaiTime: "00:00 น. (+1 วัน / เวลาไทย)",
    completed: false,
    length: "5.419 km",
    turns: 16,
    laps: 57,
    lapRecord: "1:24.319 (Max Verstappen)",
    gallery: [
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80"
    ],
    top3: null
  },
  {
    round: "ROUND 21",
    country: "Abu Dhabi",
    flag: "🇦🇪",
    grandPrix: "Abu Dhabi Grand Prix 2026",
    circuit: "Yas Marina Circuit",
    circuitImage: "https://media.formula1.com/image/upload/f_auto/q_auto/v1677244975/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Abu_Dhabi_Circuit.png",
    date: "04 - 06 DEC",
    localTime: "17:00 GST",
    thaiTime: "20:00 น. (เวลาไทย)",
    completed: false,
    length: "5.281 km",
    turns: 16,
    laps: 58,
    lapRecord: "1:26.103 (Max Verstappen)",
    gallery: [
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80"
    ],
    top3: null
  }
];

// F1 Team Styling & Neon Color Config
const getTeamStyling = (team) => {
  switch (team) {
    case "Mercedes":
      return {
        badgeBorder: "border-emerald-400",
        badgeBg: "bg-emerald-950/80",
        text: "text-emerald-300",
        glow: "hover:shadow-[0_0_20px_rgba(52,211,153,0.4)]"
      };
    case "Ferrari":
      return {
        badgeBorder: "border-red-500",
        badgeBg: "bg-red-950/80",
        text: "text-red-400",
        glow: "hover:shadow-[0_0_20px_rgba(239,68,68,0.4)]"
      };
    case "McLaren":
      return {
        badgeBorder: "border-orange-500",
        badgeBg: "bg-orange-950/80",
        text: "text-orange-400",
        glow: "hover:shadow-[0_0_20px_rgba(249,115,22,0.4)]"
      };
    case "Red Bull":
    case "Red Bull Racing":
      return {
        badgeBorder: "border-blue-500",
        badgeBg: "bg-blue-950/80",
        text: "text-blue-400",
        glow: "hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
      };
    case "Alpine":
      return {
        badgeBorder: "border-[#0094e6]",
        badgeBg: "bg-sky-950/80",
        text: "text-sky-400",
        glow: "hover:shadow-[0_0_20px_rgba(56,189,248,0.4)]"
      };
    default:
      return {
        badgeBorder: "border-zinc-600",
        badgeBg: "bg-zinc-900",
        text: "text-zinc-300",
        glow: "hover:shadow-lg"
      };
  }
};

// Web Audio API Sound FX
const playF1EngineSound = () => {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sawtooth";

    const now = ctx.currentTime;
    osc.frequency.setValueAtTime(140, now);
    osc.frequency.exponentialRampToValueAtTime(850, now + 0.35);
    osc.frequency.exponentialRampToValueAtTime(320, now + 0.75);

    gain.gain.setValueAtTime(0.01, now);
    gain.gain.linearRampToValueAtTime(0.2, now + 0.2);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.75);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.75);
  } catch (e) {
    console.error("Audio Context Error", e);
  }
};

export default function F1CalendarApp() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [selectedCircuit, setSelectedCircuit] = useState(null);
  const [timeLeft, setTimeLeft] = useState({ days: 8, hours: 14, mins: 22, secs: 45 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.secs > 0) return { ...prev, secs: prev.secs - 1 };
        return { ...prev, secs: 59, mins: prev.mins > 0 ? prev.mins - 1 : 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const currentRace = F1_2026_CALENDAR.find((r) => r.isCurrentUpcoming);

  const filteredSchedule = F1_2026_CALENDAR.filter((race) => {
    const matchesSearch =
      race.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
      race.grandPrix.toLowerCase().includes(searchQuery.toLowerCase()) ||
      race.circuit.toLowerCase().includes(searchQuery.toLowerCase());

    if (activeFilter === "COMPLETED") return matchesSearch && race.completed;
    if (activeFilter === "UPCOMING") return matchesSearch && !race.completed;
    return matchesSearch;
  });

  return (
    <div className="relative min-h-screen bg-[#070709] text-white font-sans selection:bg-[#E10600] selection:text-white overflow-x-hidden">
      
      {/* BACKGROUND FX */}
      <div 
        className="fixed inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 0%, rgba(225, 6, 0, 0.25), transparent 70%),
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "100% 100%, 40px 40px, 40px 40px"
        }}
      />
      
      <div className="fixed top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#E10600]/15 blur-[140px] pointer-events-none z-0 rounded-full" />

      <div className="relative z-10">
        <div className="w-full h-2 bg-gradient-to-r from-red-700 via-[#E10600] to-orange-600 shadow-[0_0_25px_#E10600]" />

        <Navigation searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6">
          
          {/* HEADER SECTION */}
          <header className="mb-10 text-center sm:text-left relative">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
              <span className="text-[11px] font-mono font-black text-[#E10600] tracking-[0.25em] uppercase bg-[#E10600]/10 px-4 py-1.5 rounded-full border border-[#E10600]/40 shadow-[0_0_20px_rgba(225,6,0,0.3)] backdrop-blur-md inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#E10600] animate-ping" />
                FIA FORMULA ONE WORLD CHAMPIONSHIP™ 2026
              </span>

              <button
                onClick={playF1EngineSound}
                className="group relative inline-flex items-center gap-2 px-4 py-1.5 text-xs font-mono font-bold uppercase tracking-wider text-zinc-300 bg-zinc-900/80 border border-zinc-700 rounded-full hover:border-[#E10600] hover:text-white transition-all shadow-lg active:scale-95"
              >
                <span className="text-[#E10600] group-hover:animate-bounce">🔊</span>
                <span>REV ENGINE (SFX)</span>
              </button>
            </div>

            <h1 className="text-4xl sm:text-7xl font-black italic uppercase tracking-tighter bg-gradient-to-r from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent drop-shadow-2xl">
              F1 SCHEDULE <span className="text-[#E10600] drop-shadow-[0_0_25px_rgba(225,6,0,0.8)]">2026</span>
            </h1>
            <p className="text-zinc-400 text-xs sm:text-sm max-w-2xl font-mono mt-2 flex items-center gap-2">
              <span className="text-[#E10600]">///</span> LIVE RACE CALENDAR, PODIUM TELEMETRY DATA & OFFICIAL DRIVER PORTRAITS
            </p>
          </header>

          {/* NEXT RACE BANNER */}
          {currentRace && (
            <section className="relative group bg-gradient-to-br from-zinc-900/90 via-zinc-950/95 to-black border-2 border-[#E10600] p-6 sm:p-8 rounded-3xl shadow-[0_0_40px_rgba(225,6,0,0.25)] mb-12 backdrop-blur-xl overflow-hidden">
              <div 
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                  backgroundImage: "repeating-linear-gradient(-45deg, #E10600, #E10600 2px, transparent 2px, transparent 10px)"
                }}
              />
              
              <div className="relative z-10 flex flex-col lg:flex-row justify-between items-stretch gap-8">
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-[#E10600] text-white text-[10px] font-mono font-black tracking-widest px-3 py-1 rounded-sm uppercase inline-flex items-center gap-1.5 shadow-[0_0_15px_#E10600]">
                        <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                        NEXT RACE TRANSMISSION
                      </span>
                      <span className="text-xs font-mono text-zinc-400 bg-zinc-900 px-3 py-1 rounded-md border border-zinc-800">
                        {currentRace.round}
                      </span>
                    </div>

                    <h2 className="text-4xl sm:text-6xl font-black italic uppercase text-white flex items-center gap-4 tracking-tight">
                      <span className="filter drop-shadow-md">{currentRace.flag}</span> {currentRace.country}
                    </h2>
                    <p className="text-base font-bold text-zinc-200 uppercase mt-1 tracking-wider">{currentRace.grandPrix}</p>
                    <p className="text-xs text-zinc-400 font-mono mt-1 flex items-center gap-1">
                      <span className="text-[#E10600]">📍</span> {currentRace.circuit}
                    </p>
                  </div>

                  {/* COUNTDOWN */}
                  <div className="mt-6 pt-6 border-t border-zinc-800/80">
                    <p className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E10600]" />
                      LIGHTS OUT COUNTDOWN (MONZA GP)
                    </p>
                    <div className="grid grid-cols-4 gap-2 sm:gap-4 font-mono max-w-md">
                      {[
                        { label: "DAYS", val: timeLeft.days },
                        { label: "HRS", val: timeLeft.hours },
                        { label: "MINS", val: timeLeft.mins },
                        { label: "SECS", val: timeLeft.secs }
                      ].map((t, idx) => (
                        <div key={idx} className="bg-zinc-900/90 border border-zinc-800 p-2 sm:p-3 rounded-xl text-center shadow-inner">
                          <span className="text-xl sm:text-3xl font-black text-white block tracking-tighter">
                            {String(t.val).padStart(2, "0")}
                          </span>
                          <span className="text-[9px] text-zinc-500 font-bold block">{t.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-between items-center lg:items-end gap-4">
                  <div 
                    onClick={() => setSelectedCircuit(currentRace)}
                    className="cursor-pointer w-full sm:w-72 h-48 bg-gradient-to-b from-zinc-950 to-zinc-900 rounded-2xl p-4 border border-zinc-800/90 flex items-center justify-center relative shadow-2xl group-hover:border-[#E10600]/60 transition-colors"
                  >
                    <div className="absolute top-3 left-3 text-[9px] font-mono text-zinc-500 uppercase">CIRCUIT TELEMETRY (CLICK)</div>
                    <img 
                      src={currentRace.circuitImage} 
                      alt={currentRace.circuit} 
                      className="max-h-full max-w-full object-contain invert opacity-95 group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>

                  <div className="w-full flex gap-3 font-mono text-xs">
                    <div className="flex-1 bg-zinc-950/90 p-3 rounded-xl border border-zinc-800/90 shadow-inner">
                      <span className="text-zinc-500 block text-[10px] uppercase font-bold">เวลาไทย (TH)</span>
                      <span className="text-[#E10600] font-black text-sm">{currentRace.thaiTime}</span>
                    </div>
                    <div className="flex-1 bg-zinc-950/90 p-3 rounded-xl border border-zinc-800/90 shadow-inner">
                      <span className="text-zinc-500 block text-[10px] uppercase font-bold">เวลาสนาม (LOCAL)</span>
                      <span className="text-zinc-200 font-bold text-sm">{currentRace.localTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* FILTER TABS */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 pb-4 border-b border-zinc-800/80">
            <h3 className="text-2xl font-black italic uppercase tracking-wider flex items-center gap-3">
              <span className="w-3 h-3 bg-[#E10600] rotate-45" />
              2026 RACE CALENDAR ({filteredSchedule.length})
            </h3>

            <div className="flex items-center gap-1.5 bg-zinc-900 p-1 rounded-xl border border-zinc-800 font-mono text-xs">
              {["ALL", "COMPLETED", "UPCOMING"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveFilter(tab)}
                  className={`px-4 py-1.5 rounded-lg font-bold transition-all ${
                    activeFilter === tab
                      ? "bg-[#E10600] text-white shadow-[0_0_12px_rgba(225,6,0,0.5)]"
                      : "text-zinc-400 hover:text-white hover:bg-zinc-800"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* RACE CARDS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSchedule.map((race) => {
              const p1 = race.top3?.find((d) => d.pos === "1ST");
              const p2 = race.top3?.find((d) => d.pos === "2ND");
              const p3 = race.top3?.find((d) => d.pos === "3RD");
              const podiumOrdered = [p2, p1, p3].filter(Boolean);

              return (
                <div
                  key={race.round}
                  className={`group relative bg-zinc-900/60 border rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1.5 backdrop-blur-md flex flex-col justify-between overflow-hidden ${
                    race.isCurrentUpcoming
                      ? "border-[#E10600] shadow-[0_0_35px_rgba(225,6,0,0.3)] bg-gradient-to-b from-red-950/20 to-zinc-900/80"
                      : race.completed
                      ? "border-zinc-800/80 hover:border-zinc-600"
                      : "border-zinc-800/40 opacity-75 hover:opacity-100 hover:border-zinc-700"
                  }`}
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#E10600] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div>
                    <div className="flex justify-between items-center mb-3 font-mono">
                      <span className="text-xs font-black text-[#E10600] tracking-wider flex items-center gap-1">
                        {race.completed && <span className="text-emerald-400 text-[10px]">✓ FINISHED</span>}
                        {race.isCurrentUpcoming && <span className="text-amber-400 text-[10px] animate-pulse">● LIVE NEXT</span>}
                        {!race.completed && !race.isCurrentUpcoming && race.round}
                      </span>
                      <span className="text-xs bg-zinc-950 text-zinc-400 px-3 py-1 rounded-full border border-zinc-800">
                        {race.date}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-3xl filter drop-shadow">{race.flag}</span>
                      <h4 className="text-2xl font-black italic uppercase text-white tracking-tight group-hover:text-[#E10600] transition-colors">
                        {race.country}
                      </h4>
                    </div>
                    <p className="text-xs font-bold text-zinc-300 uppercase mb-4 line-clamp-1 tracking-wider">{race.grandPrix}</p>

                    {/* CLICKABLE TRACK CONTAINER */}
                    <div 
                      onClick={() => setSelectedCircuit(race)}
                      className="cursor-pointer h-28 w-full bg-zinc-950/90 rounded-2xl border border-zinc-800/80 flex items-center justify-center p-3 mb-3 relative overflow-hidden group/track hover:border-[#E10600]/80 transition-all shadow-inner"
                    >
                      <span className="absolute bottom-2 right-3 text-[8px] font-mono text-zinc-500 uppercase group-hover/track:text-[#E10600]">
                        🔍 CLICK TO EXPLORE TRACK
                      </span>
                      <img
                        src={race.circuitImage}
                        alt={race.circuit}
                        className="max-h-full max-w-full object-contain invert opacity-75 group-hover/track:opacity-100 group-hover/track:scale-110 transition-all duration-500"
                        onError={(e) => {
                          e.target.style.display = "none";
                        }}
                      />
                    </div>

                    <button
                      onClick={() => setSelectedCircuit(race)}
                      className="w-full mb-4 py-2 bg-zinc-950 hover:bg-[#E10600] text-zinc-300 hover:text-white font-mono text-[11px] font-bold uppercase rounded-xl border border-zinc-800 hover:border-[#E10600] transition-all flex items-center justify-center gap-2 shadow-sm"
                    >
                      <span>🏎️ VIEW CIRCUIT DATA & PHOTOS</span>
                    </button>

                    <div className="space-y-1.5 bg-zinc-950/80 p-3 rounded-xl border border-zinc-800/60 text-xs font-mono mb-4 shadow-inner">
                      <div className="flex justify-between items-center">
                        <span className="text-zinc-500">เวลาไทย (TH):</span>
                        <span className="font-bold text-[#E10600]">{race.thaiTime}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-zinc-500">เวลาสนาม (LOCAL):</span>
                        <span className="text-zinc-300">{race.localTime}</span>
                      </div>
                    </div>
                  </div>

                  {/* 3D PODIUM STANDINGS */}
                  {race.completed && race.top3 && (
                    <div className="pt-3 border-t border-zinc-800/80">
                      <div className="flex justify-between items-center mb-3">
                        <p className="text-[10px] font-mono text-zinc-400 font-bold uppercase tracking-wider flex items-center gap-1">
                          <span className="text-amber-400">🏆</span> PODIUM TELEMETRY
                        </p>
                        <span className="text-[9px] font-mono text-zinc-500 uppercase">2ND - 1ST - 3RD</span>
                      </div>

                      <div className="grid grid-cols-3 gap-2 items-end">
                        {podiumOrdered.map((res) => {
                          const teamStyle = getTeamStyling(res.team);
                          const isFirst = res.pos === "1ST";
                          const isSecond = res.pos === "2ND";

                          return (
                            <div
                              key={res.pos}
                              className={`relative bg-gradient-to-b from-zinc-900 to-zinc-950 border rounded-2xl p-2.5 flex flex-col items-center text-center shadow-xl transition-all ${
                                teamStyle.badgeBorder
                              } ${teamStyle.glow} ${
                                isFirst ? "h-36 border-amber-500/80 z-10 scale-105 bg-gradient-to-b from-amber-950/20 to-zinc-950" : isSecond ? "h-32" : "h-28"
                              }`}
                            >
                              {isFirst && (
                                <span className="absolute -top-3 text-sm animate-bounce z-20">👑</span>
                              )}

                              <span
                                className={`text-[10px] font-black font-mono px-2 py-0.5 rounded-full mb-1 z-20 ${
                                  isFirst
                                    ? "bg-amber-400 text-black font-bold shadow-[0_0_10px_#f59e0b]"
                                    : isSecond
                                    ? "bg-slate-300 text-black font-bold"
                                    : "bg-amber-700 text-white font-bold"
                                }`}
                              >
                                {res.pos}
                              </span>

                              <div className="relative my-1 w-11 h-11 rounded-full overflow-hidden bg-zinc-950 border-2 shadow-md flex items-center justify-center">
                                <img
                                  src={DRIVER_IMAGES[res.code] || `https://api.dicebear.com/7.x/bottts-neutral/svg?seed=${res.code}`}
                                  alt={res.driver}
                                  className="w-full h-full object-cover object-top scale-125 translate-y-1"
                                />
                              </div>

                              <span className="text-xs font-black tracking-wider text-white uppercase line-clamp-1">
                                {res.code}
                              </span>

                              <span
                                className={`text-[8.5px] font-mono mt-auto ${
                                  res.isWinner ? "text-emerald-400 font-black" : "text-zinc-400"
                                }`}
                              >
                                {res.time}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                </div>
              );
            })}
          </div>
        </main>
      </div>

      {/* 🏁 CIRCUIT MODAL DETAILS & GALLERY */}
      {selectedCircuit && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200">
          <div 
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-zinc-950 border-2 border-[#E10600] rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(225,6,0,0.4)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setSelectedCircuit(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 rounded-full bg-zinc-900 hover:bg-[#E10600] text-zinc-400 hover:text-white border border-zinc-700 flex items-center justify-center font-mono font-bold transition-all shadow-lg"
            >
              ✕
            </button>

            {/* MODAL HEADER */}
            <div className="flex items-center gap-3 mb-2 font-mono text-xs">
              <span className="bg-[#E10600] text-white px-3 py-1 rounded-sm font-black uppercase">
                {selectedCircuit.round}
              </span>
              <span className="text-zinc-400">{selectedCircuit.date}</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black italic uppercase text-white tracking-tight flex items-center gap-3 mb-1">
              <span>{selectedCircuit.flag}</span> {selectedCircuit.country}
            </h2>
            <p className="text-lg font-bold text-zinc-300 uppercase font-mono mb-6">{selectedCircuit.grandPrix}</p>

            {/* CIRCUIT TELEMETRY GRID */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono mb-8">
              <div className="bg-zinc-900/90 border border-zinc-800 p-3 rounded-2xl text-center">
                <span className="text-[10px] text-zinc-500 font-bold block">TRACK LENGTH</span>
                <span className="text-lg sm:text-xl font-black text-white">{selectedCircuit.length || "5.300 km"}</span>
              </div>
              <div className="bg-zinc-900/90 border border-zinc-800 p-3 rounded-2xl text-center">
                <span className="text-[10px] text-zinc-500 font-bold block">TURNS</span>
                <span className="text-lg sm:text-xl font-black text-white">{selectedCircuit.turns || "16"}</span>
              </div>
              <div className="bg-zinc-900/90 border border-zinc-800 p-3 rounded-2xl text-center">
                <span className="text-[10px] text-zinc-500 font-bold block">RACE LAPS</span>
                <span className="text-lg sm:text-xl font-black text-[#E10600]">{selectedCircuit.laps || "56"}</span>
              </div>
              <div className="bg-zinc-900/90 border border-zinc-800 p-3 rounded-2xl text-center">
                <span className="text-[10px] text-zinc-500 font-bold block">LAP RECORD</span>
                <span className="text-xs sm:text-sm font-bold text-emerald-400 block mt-1 line-clamp-1">
                  {selectedCircuit.lapRecord || "1:21.046"}
                </span>
              </div>
            </div>

            {/* CIRCUIT MAP DISPLAY */}
            <div className="mb-8">
              <h3 className="text-sm font-mono font-bold text-zinc-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#E10600]" />
                OFFICIAL CIRCUIT MAP TELEMETRY
              </h3>
              <div className="w-full h-64 sm:h-80 bg-zinc-900/80 rounded-2xl border border-zinc-800 flex items-center justify-center p-6 relative">
                <img
                  src={selectedCircuit.circuitImage}
                  alt={selectedCircuit.circuit}
                  className="max-h-full max-w-full object-contain invert filter drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                />
              </div>
            </div>

            {/* CIRCUIT PHOTOS & ATMOSPHERE GALLERY */}
            {selectedCircuit.gallery && selectedCircuit.gallery.length > 0 && (
              <div>
                <h3 className="text-sm font-mono font-bold text-zinc-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#E10600]" />
                  CIRCUIT ATMOSPHERE & GALLERY
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {selectedCircuit.gallery.map((imgUrl, idx) => (
                    <div key={idx} className="relative h-48 rounded-2xl overflow-hidden border border-zinc-800 group">
                      <img
                        src={imgUrl}
                        alt={`${selectedCircuit.circuit} photo ${idx + 1}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex items-end">
                        <span className="text-xs font-mono font-bold text-white">
                          {selectedCircuit.circuit} - View {idx + 1}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
