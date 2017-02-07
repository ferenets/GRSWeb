'use strict';

const IndicatorsHourly = [
  {
    "GRS_ID": "145",
    "DAY_HOUR": "01.12.16 07:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "615.284485",
    "VOL_PY": "155.000015",
    "PRESSURE": "3.829804",
    "TEMPERATURE": "2.763217"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "01.12.16 08:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "634.972961",
    "VOL_PY": "160.000015",
    "PRESSURE": "3.833408",
    "TEMPERATURE": "3.089259"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "01.12.16 09:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "609.219788",
    "VOL_PY": "152.000015",
    "PRESSURE": "3.864876",
    "TEMPERATURE": "2.610007"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "01.12.16 10:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "561.864441",
    "VOL_PY": "139.000015",
    "PRESSURE": "3.878223",
    "TEMPERATURE": "1.318752"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "01.12.16 11:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "541.981079",
    "VOL_PY": "134.000015",
    "PRESSURE": "3.879437",
    "TEMPERATURE": "1.247052"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "01.12.16 12:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "538.094849",
    "VOL_PY": "133.000015",
    "PRESSURE": "3.880549",
    "TEMPERATURE": "1.244796"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "01.12.16 13:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "522.977234",
    "VOL_PY": "129.000015",
    "PRESSURE": "3.886231",
    "TEMPERATURE": "1.094514"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "01.12.16 14:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "507.846497",
    "VOL_PY": "125.000008",
    "PRESSURE": "3.887573",
    "TEMPERATURE": "0.624831"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "01.12.16 15:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "507.396301",
    "VOL_PY": "125.000008",
    "PRESSURE": "3.879155",
    "TEMPERATURE": "0.273178"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "01.12.16 16:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "504.879608",
    "VOL_PY": "125.000008",
    "PRESSURE": "3.858762",
    "TEMPERATURE": "0.176985"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "01.12.16 07:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "615.284485",
    "VOL_PY": "155.000015",
    "PRESSURE": "3.829804",
    "TEMPERATURE": "2.763217"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "01.12.16 08:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "634.972961",
    "VOL_PY": "160.000015",
    "PRESSURE": "3.833408",
    "TEMPERATURE": "3.089259"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "01.12.16 09:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "609.219788",
    "VOL_PY": "152.000015",
    "PRESSURE": "3.864876",
    "TEMPERATURE": "2.610007"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "01.12.16 10:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "561.864441",
    "VOL_PY": "139.000015",
    "PRESSURE": "3.878223",
    "TEMPERATURE": "1.318752"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "01.12.16 11:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "541.981079",
    "VOL_PY": "134.000015",
    "PRESSURE": "3.879437",
    "TEMPERATURE": "1.247052"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "01.12.16 12:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "538.094849",
    "VOL_PY": "133.000015",
    "PRESSURE": "3.880549",
    "TEMPERATURE": "1.244796"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "01.12.16 13:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "522.977234",
    "VOL_PY": "129.000015",
    "PRESSURE": "3.886231",
    "TEMPERATURE": "1.094514"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "01.12.16 14:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "507.846497",
    "VOL_PY": "125.000008",
    "PRESSURE": "3.887573",
    "TEMPERATURE": "0.624831"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "01.12.16 15:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "507.396301",
    "VOL_PY": "125.000008",
    "PRESSURE": "3.879155",
    "TEMPERATURE": "0.273178"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "01.12.16 16:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "504.879608",
    "VOL_PY": "125.000008",
    "PRESSURE": "3.858762",
    "TEMPERATURE": "0.176985"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "01.12.16 17:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "526.949646",
    "VOL_PY": "132.000015",
    "PRESSURE": "3.829096",
    "TEMPERATURE": "1.178805"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "01.12.16 18:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "710.121948",
    "VOL_PY": "179.000015",
    "PRESSURE": "3.824569",
    "TEMPERATURE": "2.559072"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "01.12.16 19:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "726.275635",
    "VOL_PY": "183.000015",
    "PRESSURE": "3.833553",
    "TEMPERATURE": "3.083965"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "01.12.16 20:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "650.781006",
    "VOL_PY": "163.000015",
    "PRESSURE": "3.851684",
    "TEMPERATURE": "2.742512"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "01.12.16 21:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "618.504883",
    "VOL_PY": "155.000015",
    "PRESSURE": "3.846358",
    "TEMPERATURE": "2.494516"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "01.12.16 22:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "519.721375",
    "VOL_PY": "129.000015",
    "PRESSURE": "3.879175",
    "TEMPERATURE": "2.221778"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "01.12.16 23:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "582.573914",
    "VOL_PY": "146.000015",
    "PRESSURE": "3.842743",
    "TEMPERATURE": "2.048823"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "02.12.16 00:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "664.050171",
    "VOL_PY": "167.000015",
    "PRESSURE": "3.837487",
    "TEMPERATURE": "2.846016"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "02.12.16 01:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "630.829346",
    "VOL_PY": "158.000015",
    "PRESSURE": "3.851549",
    "TEMPERATURE": "2.692586"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "02.12.16 02:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "596.476868",
    "VOL_PY": "150.000015",
    "PRESSURE": "3.828576",
    "TEMPERATURE": "2.173175"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "02.12.16 03:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "648.066589",
    "VOL_PY": "163.000015",
    "PRESSURE": "3.826344",
    "TEMPERATURE": "2.102871"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "02.12.16 04:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "621.066223",
    "VOL_PY": "156.000015",
    "PRESSURE": "3.828276",
    "TEMPERATURE": "1.86121"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "02.12.16 05:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "595.254272",
    "VOL_PY": "149.000015",
    "PRESSURE": "3.839961",
    "TEMPERATURE": "1.698135"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "02.12.16 06:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "637.203857",
    "VOL_PY": "160.000015",
    "PRESSURE": "3.824078",
    "TEMPERATURE": "1.48145"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "02.12.16 07:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "722.469543",
    "VOL_PY": "182.000015",
    "PRESSURE": "3.814932",
    "TEMPERATURE": "1.725282"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "02.12.16 08:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "735.774475",
    "VOL_PY": "185.000015",
    "PRESSURE": "3.826509",
    "TEMPERATURE": "2.031441"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "02.12.16 09:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "671.33844",
    "VOL_PY": "168.000015",
    "PRESSURE": "3.835794",
    "TEMPERATURE": "1.39588"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "02.12.16 10:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "628.407715",
    "VOL_PY": "156.000015",
    "PRESSURE": "3.849706",
    "TEMPERATURE": "0.097179"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "02.12.16 11:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "523.83551",
    "VOL_PY": "129.000015",
    "PRESSURE": "3.873518",
    "TEMPERATURE": "-0.212594"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "02.12.16 12:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "514.878235",
    "VOL_PY": "127.000008",
    "PRESSURE": "3.868784",
    "TEMPERATURE": "-0.105029"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "02.12.16 13:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "513.79834",
    "VOL_PY": "127.000008",
    "PRESSURE": "3.862936",
    "TEMPERATURE": "0.042842"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "02.12.16 14:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "512.586121",
    "VOL_PY": "127.000008",
    "PRESSURE": "3.853832",
    "TEMPERATURE": "0.029685"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "02.12.16 15:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "520.711304",
    "VOL_PY": "129.000015",
    "PRESSURE": "3.844973",
    "TEMPERATURE": "-0.593008"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "02.12.16 16:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "544.274719",
    "VOL_PY": "133.000015",
    "PRESSURE": "3.851274",
    "TEMPERATURE": "-3.750969"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "02.12.16 17:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "534.427246",
    "VOL_PY": "129.000015",
    "PRESSURE": "3.859478",
    "TEMPERATURE": "-6.38672"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "02.12.16 18:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "533.212646",
    "VOL_PY": "128.000015",
    "PRESSURE": "3.852061",
    "TEMPERATURE": "-8.28502"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "02.12.16 19:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "527.365295",
    "VOL_PY": "126.000008",
    "PRESSURE": "3.851228",
    "TEMPERATURE": "-9.548306"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "02.12.16 20:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "528.931885",
    "VOL_PY": "126.000008",
    "PRESSURE": "3.846008",
    "TEMPERATURE": "-10.645963"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "02.12.16 21:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "522.515625",
    "VOL_PY": "124.000008",
    "PRESSURE": "3.848514",
    "TEMPERATURE": "-11.439612"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "02.12.16 22:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "502.903687",
    "VOL_PY": "119.000008",
    "PRESSURE": "3.854329",
    "TEMPERATURE": "-11.786054"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "02.12.16 23:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "490.858612",
    "VOL_PY": "116.000008",
    "PRESSURE": "3.856859",
    "TEMPERATURE": "-11.937737"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "03.12.16 00:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "482.950684",
    "VOL_PY": "114.000008",
    "PRESSURE": "3.857814",
    "TEMPERATURE": "-12.167892"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "03.12.16 01:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "479.252991",
    "VOL_PY": "113.000008",
    "PRESSURE": "3.855737",
    "TEMPERATURE": "-12.584592"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "03.12.16 02:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "433.683685",
    "VOL_PY": "103.000008",
    "PRESSURE": "3.825694",
    "TEMPERATURE": "-12.717193"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "03.12.16 03:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "452.714294",
    "VOL_PY": "109.000008",
    "PRESSURE": "3.766967",
    "TEMPERATURE": "-13.257474"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "03.12.16 04:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "452.990784",
    "VOL_PY": "110.000008",
    "PRESSURE": "3.726232",
    "TEMPERATURE": "-13.867551"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "03.12.16 05:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "515.807617",
    "VOL_PY": "126.000008",
    "PRESSURE": "3.6965",
    "TEMPERATURE": "-14.40944"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "03.12.16 06:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "540.268494",
    "VOL_PY": "132.000015",
    "PRESSURE": "3.68974",
    "TEMPERATURE": "-14.816604"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "03.12.16 07:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "581.433105",
    "VOL_PY": "142.000015",
    "PRESSURE": "3.682675",
    "TEMPERATURE": "-15.413198"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "03.12.16 08:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "611.18396",
    "VOL_PY": "149.000015",
    "PRESSURE": "3.689906",
    "TEMPERATURE": "-15.350579"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "03.12.16 09:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "663.175293",
    "VOL_PY": "164.000015",
    "PRESSURE": "3.698496",
    "TEMPERATURE": "-11.390134"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "03.12.16 10:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "661.104126",
    "VOL_PY": "164.000015",
    "PRESSURE": "3.824468",
    "TEMPERATURE": "-1.644016"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "03.12.16 11:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "717.745056",
    "VOL_PY": "180.000015",
    "PRESSURE": "3.810776",
    "TEMPERATURE": "0.196252"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "03.12.16 12:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "683.544739",
    "VOL_PY": "171.000015",
    "PRESSURE": "3.830788",
    "TEMPERATURE": "0.874406"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "03.12.16 13:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "644.19751",
    "VOL_PY": "161.000015",
    "PRESSURE": "3.836485",
    "TEMPERATURE": "0.851632"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "03.12.16 14:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "586.54303",
    "VOL_PY": "146.000015",
    "PRESSURE": "3.854705",
    "TEMPERATURE": "1.298274"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "03.12.16 15:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "558.843079",
    "VOL_PY": "139.000015",
    "PRESSURE": "3.855333",
    "TEMPERATURE": "1.165711"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "03.12.16 16:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "572.950256",
    "VOL_PY": "144.000015",
    "PRESSURE": "3.826254",
    "TEMPERATURE": "1.872272"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "03.12.16 17:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "675.79541",
    "VOL_PY": "171.000015",
    "PRESSURE": "3.816853",
    "TEMPERATURE": "2.989261"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "03.12.16 18:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "812.745361",
    "VOL_PY": "207.000015",
    "PRESSURE": "3.807283",
    "TEMPERATURE": "4.045763"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "03.12.16 19:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "781.1203",
    "VOL_PY": "198.000015",
    "PRESSURE": "3.83104",
    "TEMPERATURE": "4.48874"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "03.12.16 20:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "797.660767",
    "VOL_PY": "203.000015",
    "PRESSURE": "3.814543",
    "TEMPERATURE": "4.409847"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "03.12.16 21:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "794.046143",
    "VOL_PY": "201.000015",
    "PRESSURE": "3.8339",
    "TEMPERATURE": "4.344484"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "03.12.16 22:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "785.761658",
    "VOL_PY": "199.000015",
    "PRESSURE": "3.83078",
    "TEMPERATURE": "4.259702"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "03.12.16 23:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "786.591675",
    "VOL_PY": "198.000015",
    "PRESSURE": "3.840511",
    "TEMPERATURE": "3.311041"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "04.12.16 00:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "730.708374",
    "VOL_PY": "183.000015",
    "PRESSURE": "3.851832",
    "TEMPERATURE": "2.720191"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "04.12.16 01:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "746.832336",
    "VOL_PY": "188.000015",
    "PRESSURE": "3.828255",
    "TEMPERATURE": "2.423567"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "04.12.16 02:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "734.663635",
    "VOL_PY": "185.000015",
    "PRESSURE": "3.820294",
    "TEMPERATURE": "1.957709"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "04.12.16 03:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "790.767029",
    "VOL_PY": "200.000015",
    "PRESSURE": "3.808587",
    "TEMPERATURE": "2.331952"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "04.12.16 04:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "784.365601",
    "VOL_PY": "198.000015",
    "PRESSURE": "3.816798",
    "TEMPERATURE": "2.390324"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "04.12.16 05:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "807.885498",
    "VOL_PY": "205.000015",
    "PRESSURE": "3.799356",
    "TEMPERATURE": "2.540455"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "04.12.16 06:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "849.861877",
    "VOL_PY": "216.000015",
    "PRESSURE": "3.792467",
    "TEMPERATURE": "2.487114"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "04.12.16 07:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "918.962341",
    "VOL_PY": "235.000015",
    "PRESSURE": "3.784743",
    "TEMPERATURE": "3.578519"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "04.12.16 08:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "960.000488",
    "VOL_PY": "246.000015",
    "PRESSURE": "3.786651",
    "TEMPERATURE": "4.267129"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "04.12.16 09:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "916.075806",
    "VOL_PY": "231.000015",
    "PRESSURE": "3.822856",
    "TEMPERATURE": "2.392112"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "04.12.16 10:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "820.025269",
    "VOL_PY": "206.000015",
    "PRESSURE": "3.826926",
    "TEMPERATURE": "1.805611"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "04.12.16 11:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "846.168335",
    "VOL_PY": "211.000015",
    "PRESSURE": "3.849479",
    "TEMPERATURE": "1.405997"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "04.12.16 12:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "808.758057",
    "VOL_PY": "202.000015",
    "PRESSURE": "3.840955",
    "TEMPERATURE": "1.272517"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "04.12.16 13:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "750.651611",
    "VOL_PY": "186.000015",
    "PRESSURE": "3.865186",
    "TEMPERATURE": "0.755425"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "04.12.16 14:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "706.475403",
    "VOL_PY": "175.000015",
    "PRESSURE": "3.850621",
    "TEMPERATURE": "-0.353012"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "04.12.16 15:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "753.920898",
    "VOL_PY": "188.000015",
    "PRESSURE": "3.835601",
    "TEMPERATURE": "0.369826"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "04.12.16 16:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "716.68219",
    "VOL_PY": "179.000015",
    "PRESSURE": "3.836946",
    "TEMPERATURE": "0.860604"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "04.12.16 17:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "728.775024",
    "VOL_PY": "183.000015",
    "PRESSURE": "3.830388",
    "TEMPERATURE": "1.847621"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "04.12.16 18:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "735.167664",
    "VOL_PY": "185.000015",
    "PRESSURE": "3.825693",
    "TEMPERATURE": "2.135097"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "04.12.16 19:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "757.165405",
    "VOL_PY": "190.000015",
    "PRESSURE": "3.833971",
    "TEMPERATURE": "1.824584"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "04.12.16 20:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "645.057007",
    "VOL_PY": "161.000015",
    "PRESSURE": "3.845612",
    "TEMPERATURE": "1.191452"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "04.12.16 21:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "784.9328",
    "VOL_PY": "198.000015",
    "PRESSURE": "3.815995",
    "TEMPERATURE": "2.068734"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "04.12.16 22:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "741.71106",
    "VOL_PY": "186.000015",
    "PRESSURE": "3.824923",
    "TEMPERATURE": "1.184066"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "04.12.16 23:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "780.564941",
    "VOL_PY": "196.000015",
    "PRESSURE": "3.822136",
    "TEMPERATURE": "1.351812"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "05.12.16 00:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "811.338745",
    "VOL_PY": "205.000015",
    "PRESSURE": "3.808248",
    "TEMPERATURE": "2.021605"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "05.12.16 01:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "722.127991",
    "VOL_PY": "181.000015",
    "PRESSURE": "3.829664",
    "TEMPERATURE": "1.370468"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "05.12.16 02:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "632.508301",
    "VOL_PY": "157.000015",
    "PRESSURE": "3.858466",
    "TEMPERATURE": "0.704818"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "05.12.16 03:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "570.706177",
    "VOL_PY": "141.000015",
    "PRESSURE": "3.859604",
    "TEMPERATURE": "-0.315228"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "05.12.16 04:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "570.047729",
    "VOL_PY": "142.000015",
    "PRESSURE": "3.827023",
    "TEMPERATURE": "-0.406123"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "05.12.16 05:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "608.916199",
    "VOL_PY": "153.000015",
    "PRESSURE": "3.802969",
    "TEMPERATURE": "0.178754"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "05.12.16 06:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "660.611389",
    "VOL_PY": "166.000015",
    "PRESSURE": "3.806696",
    "TEMPERATURE": "0.476554"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "05.12.16 07:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "687.374512",
    "VOL_PY": "173.000015",
    "PRESSURE": "3.793637",
    "TEMPERATURE": "-0.032463"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "05.12.16 08:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "735.52478",
    "VOL_PY": "186.000015",
    "PRESSURE": "3.792954",
    "TEMPERATURE": "1.186102"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "05.12.16 09:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "817.572327",
    "VOL_PY": "206.000015",
    "PRESSURE": "3.82785",
    "TEMPERATURE": "2.480901"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "05.12.16 10:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "655.480286",
    "VOL_PY": "163.000015",
    "PRESSURE": "3.85832",
    "TEMPERATURE": "1.315879"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "05.12.16 11:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "647.561523",
    "VOL_PY": "161.000015",
    "PRESSURE": "3.855266",
    "TEMPERATURE": "1.052157"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "05.12.16 12:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "642.719788",
    "VOL_PY": "160.000015",
    "PRESSURE": "3.853707",
    "TEMPERATURE": "1.27864"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "05.12.16 13:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "814.887817",
    "VOL_PY": "206.000015",
    "PRESSURE": "3.816755",
    "TEMPERATURE": "2.765826"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "05.12.16 14:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "856.199768",
    "VOL_PY": "216.000015",
    "PRESSURE": "3.835049",
    "TEMPERATURE": "3.532932"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "05.12.16 15:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "832.294983",
    "VOL_PY": "209.000015",
    "PRESSURE": "3.85084",
    "TEMPERATURE": "3.370933"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "05.12.16 16:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "779.309326",
    "VOL_PY": "196.000015",
    "PRESSURE": "3.830696",
    "TEMPERATURE": "2.351994"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "05.12.16 17:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "843.058899",
    "VOL_PY": "213.000015",
    "PRESSURE": "3.812108",
    "TEMPERATURE": "2.296202"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "05.12.16 18:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "871.677063",
    "VOL_PY": "220.000015",
    "PRESSURE": "3.818063",
    "TEMPERATURE": "2.435047"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "05.12.16 19:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "814.441101",
    "VOL_PY": "205.000015",
    "PRESSURE": "3.827086",
    "TEMPERATURE": "2.348013"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "05.12.16 20:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "846.979187",
    "VOL_PY": "214.000015",
    "PRESSURE": "3.81549",
    "TEMPERATURE": "2.547739"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "05.12.16 21:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "834.540344",
    "VOL_PY": "210.000015",
    "PRESSURE": "3.835129",
    "TEMPERATURE": "2.841001"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "05.12.16 22:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "826.735962",
    "VOL_PY": "208.000015",
    "PRESSURE": "3.834814",
    "TEMPERATURE": "2.774435"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "05.12.16 23:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "812.033081",
    "VOL_PY": "204.000015",
    "PRESSURE": "3.840011",
    "TEMPERATURE": "2.746724"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "06.12.16 00:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "787.159424",
    "VOL_PY": "198.000015",
    "PRESSURE": "3.831485",
    "TEMPERATURE": "2.480522"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "06.12.16 01:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "805.187012",
    "VOL_PY": "203.000015",
    "PRESSURE": "3.828664",
    "TEMPERATURE": "2.89852"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "06.12.16 02:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "806.247192",
    "VOL_PY": "203.000015",
    "PRESSURE": "3.83381",
    "TEMPERATURE": "2.910732"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "06.12.16 03:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "804.198059",
    "VOL_PY": "202.000015",
    "PRESSURE": "3.842321",
    "TEMPERATURE": "2.867738"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "06.12.16 04:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "784.765564",
    "VOL_PY": "197.000015",
    "PRESSURE": "3.844439",
    "TEMPERATURE": "2.857577"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "06.12.16 05:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "807.459229",
    "VOL_PY": "204.000015",
    "PRESSURE": "3.822792",
    "TEMPERATURE": "3.038919"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "06.12.16 06:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "841.581726",
    "VOL_PY": "213.000015",
    "PRESSURE": "3.821642",
    "TEMPERATURE": "3.439719"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "06.12.16 07:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "861.648438",
    "VOL_PY": "218.000015",
    "PRESSURE": "3.823677",
    "TEMPERATURE": "3.486141"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "06.12.16 08:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "876.844055",
    "VOL_PY": "222.000015",
    "PRESSURE": "3.823599",
    "TEMPERATURE": "3.666668"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "06.12.16 09:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "878.141968",
    "VOL_PY": "220.000015",
    "PRESSURE": "3.846404",
    "TEMPERATURE": "2.447395"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "06.12.16 10:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "820.21698",
    "VOL_PY": "204.000015",
    "PRESSURE": "3.857387",
    "TEMPERATURE": "1.293908"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "06.12.16 11:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "784.660522",
    "VOL_PY": "196.000015",
    "PRESSURE": "3.843888",
    "TEMPERATURE": "1.494217"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "06.12.16 12:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "810.205566",
    "VOL_PY": "202.000015",
    "PRESSURE": "3.85003",
    "TEMPERATURE": "1.416098"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "06.12.16 13:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "773.385071",
    "VOL_PY": "193.000015",
    "PRESSURE": "3.848077",
    "TEMPERATURE": "1.528056"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "06.12.16 14:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "788.926147",
    "VOL_PY": "196.000015",
    "PRESSURE": "3.861054",
    "TEMPERATURE": "1.247204"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "06.12.16 15:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "768.697388",
    "VOL_PY": "192.000015",
    "PRESSURE": "3.84464",
    "TEMPERATURE": "1.531512"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "06.12.16 16:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "811.930908",
    "VOL_PY": "204.000015",
    "PRESSURE": "3.829535",
    "TEMPERATURE": "2.045241"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "06.12.16 17:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "646.242798",
    "VOL_PY": "160.000015",
    "PRESSURE": "3.877838",
    "TEMPERATURE": "1.403105"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "06.12.16 18:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "581.139404",
    "VOL_PY": "143.000015",
    "PRESSURE": "3.888379",
    "TEMPERATURE": "0.603699"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "06.12.16 19:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "574.161011",
    "VOL_PY": "141.000015",
    "PRESSURE": "3.885336",
    "TEMPERATURE": "-0.134641"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "06.12.16 20:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "578.966125",
    "VOL_PY": "142.000015",
    "PRESSURE": "3.87171",
    "TEMPERATURE": "-1.399436"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "06.12.16 21:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "578.340332",
    "VOL_PY": "142.000015",
    "PRESSURE": "3.853241",
    "TEMPERATURE": "-2.389271"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "06.12.16 22:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "574.773926",
    "VOL_PY": "142.000015",
    "PRESSURE": "3.837979",
    "TEMPERATURE": "-1.818098"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "06.12.16 23:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "571.785889",
    "VOL_PY": "141.000015",
    "PRESSURE": "3.84504",
    "TEMPERATURE": "-1.815973"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "07.12.16 00:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "577.886963",
    "VOL_PY": "142.000015",
    "PRESSURE": "3.849066",
    "TEMPERATURE": "-2.467166"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "07.12.16 01:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "573.009216",
    "VOL_PY": "141.000015",
    "PRESSURE": "3.845801",
    "TEMPERATURE": "-2.319019"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "07.12.16 02:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "574.076416",
    "VOL_PY": "142.000015",
    "PRESSURE": "3.82498",
    "TEMPERATURE": "-2.395986"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "07.12.16 03:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "587.320984",
    "VOL_PY": "146.000015",
    "PRESSURE": "3.799932",
    "TEMPERATURE": "-2.834196"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "07.12.16 04:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "610.211731",
    "VOL_PY": "152.000015",
    "PRESSURE": "3.790921",
    "TEMPERATURE": "-2.924058"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "07.12.16 05:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "621.269226",
    "VOL_PY": "155.000015",
    "PRESSURE": "3.787157",
    "TEMPERATURE": "-2.770836"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "07.12.16 06:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "659.931641",
    "VOL_PY": "165.000015",
    "PRESSURE": "3.780547",
    "TEMPERATURE": "-2.67064"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "07.12.16 07:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "722.763977",
    "VOL_PY": "181.000015",
    "PRESSURE": "3.775999",
    "TEMPERATURE": "-2.578612"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "07.12.16 08:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "771.366943",
    "VOL_PY": "194.000015",
    "PRESSURE": "3.780646",
    "TEMPERATURE": "-1.123258"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "07.12.16 09:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "749.429871",
    "VOL_PY": "187.000015",
    "PRESSURE": "3.820781",
    "TEMPERATURE": "-0.409388"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "07.12.16 10:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "677.421143",
    "VOL_PY": "168.000015",
    "PRESSURE": "3.844646",
    "TEMPERATURE": "-0.356551"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "07.12.16 11:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "649.509521",
    "VOL_PY": "161.000015",
    "PRESSURE": "3.856268",
    "TEMPERATURE": "0.324791"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "07.12.16 12:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "647.601318",
    "VOL_PY": "160.000015",
    "PRESSURE": "3.872563",
    "TEMPERATURE": "0.579122"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "07.12.16 13:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "632.974304",
    "VOL_PY": "156.000015",
    "PRESSURE": "3.882952",
    "TEMPERATURE": "0.644994"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "07.12.16 14:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "626.228821",
    "VOL_PY": "154.000015",
    "PRESSURE": "3.886342",
    "TEMPERATURE": "0.297528"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "07.12.16 15:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "625.001526",
    "VOL_PY": "154.000015",
    "PRESSURE": "3.867568",
    "TEMPERATURE": "-0.458345"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "07.12.16 16:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "648.43634",
    "VOL_PY": "161.000015",
    "PRESSURE": "3.828025",
    "TEMPERATURE": "-1.191214"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "07.12.16 17:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "666.860535",
    "VOL_PY": "166.000015",
    "PRESSURE": "3.82061",
    "TEMPERATURE": "-1.014898"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "07.12.16 18:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "664.397644",
    "VOL_PY": "165.000015",
    "PRESSURE": "3.825874",
    "TEMPERATURE": "-1.265302"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "07.12.16 19:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "662.085938",
    "VOL_PY": "164.000015",
    "PRESSURE": "3.823878",
    "TEMPERATURE": "-2.082501"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "07.12.16 20:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "660.618652",
    "VOL_PY": "164.000015",
    "PRESSURE": "3.818233",
    "TEMPERATURE": "-1.892948"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "07.12.16 21:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "655.672119",
    "VOL_PY": "163.000015",
    "PRESSURE": "3.811816",
    "TEMPERATURE": "-1.971298"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "07.12.16 22:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "659.757263",
    "VOL_PY": "164.000015",
    "PRESSURE": "3.813749",
    "TEMPERATURE": "-1.862047"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "07.12.16 23:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "656.999207",
    "VOL_PY": "163.000015",
    "PRESSURE": "3.817908",
    "TEMPERATURE": "-2.079855"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "08.12.16 00:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "661.069153",
    "VOL_PY": "164.000015",
    "PRESSURE": "3.818599",
    "TEMPERATURE": "-2.045531"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "08.12.16 01:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "653.736572",
    "VOL_PY": "162.000015",
    "PRESSURE": "3.824452",
    "TEMPERATURE": "-1.930818"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "08.12.16 02:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "651.149658",
    "VOL_PY": "161.000015",
    "PRESSURE": "3.831424",
    "TEMPERATURE": "-2.03212"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "08.12.16 03:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "650.806152",
    "VOL_PY": "161.000015",
    "PRESSURE": "3.829451",
    "TEMPERATURE": "-2.034683"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "08.12.16 04:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "645.78418",
    "VOL_PY": "160.000015",
    "PRESSURE": "3.820446",
    "TEMPERATURE": "-2.257412"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "08.12.16 05:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "665.645996",
    "VOL_PY": "166.000015",
    "PRESSURE": "3.799912",
    "TEMPERATURE": "-1.982791"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "08.12.16 06:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "703.854126",
    "VOL_PY": "176.000015",
    "PRESSURE": "3.795374",
    "TEMPERATURE": "-1.588752"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "08.12.16 07:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "732.101807",
    "VOL_PY": "183.000015",
    "PRESSURE": "3.803655",
    "TEMPERATURE": "-1.104451"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "08.12.16 08:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "734.533203",
    "VOL_PY": "184.000015",
    "PRESSURE": "3.803768",
    "TEMPERATURE": "-0.5342"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "08.12.16 09:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "735.199524",
    "VOL_PY": "184.000015",
    "PRESSURE": "3.818923",
    "TEMPERATURE": "0.285403"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "08.12.16 10:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "703.802795",
    "VOL_PY": "175.000015",
    "PRESSURE": "3.844688",
    "TEMPERATURE": "0.350691"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "08.12.16 11:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "680.695374",
    "VOL_PY": "169.000015",
    "PRESSURE": "3.851269",
    "TEMPERATURE": "0.421795"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "08.12.16 12:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "669.604065",
    "VOL_PY": "166.000015",
    "PRESSURE": "3.860505",
    "TEMPERATURE": "0.670914"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "08.12.16 13:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "638.330688",
    "VOL_PY": "158.000015",
    "PRESSURE": "3.873986",
    "TEMPERATURE": "1.177645"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "08.12.16 14:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "614.137573",
    "VOL_PY": "153.000015",
    "PRESSURE": "3.851943",
    "TEMPERATURE": "1.354879"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "08.12.16 15:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "653.062317",
    "VOL_PY": "163.000015",
    "PRESSURE": "3.847039",
    "TEMPERATURE": "1.533869"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "08.12.16 16:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "648.133301",
    "VOL_PY": "161.000015",
    "PRESSURE": "3.863266",
    "TEMPERATURE": "1.393111"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "08.12.16 17:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "621.069397",
    "VOL_PY": "154.000015",
    "PRESSURE": "3.87113",
    "TEMPERATURE": "1.462308"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "08.12.16 18:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "613.239868",
    "VOL_PY": "152.000015",
    "PRESSURE": "3.875494",
    "TEMPERATURE": "1.661054"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "08.12.16 19:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "605.363831",
    "VOL_PY": "150.000015",
    "PRESSURE": "3.879615",
    "TEMPERATURE": "1.860421"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "08.12.16 20:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "590.644348",
    "VOL_PY": "146.000015",
    "PRESSURE": "3.88837",
    "TEMPERATURE": "1.825414"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "08.12.16 21:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "562.587585",
    "VOL_PY": "139.000015",
    "PRESSURE": "3.892699",
    "TEMPERATURE": "2.002761"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "08.12.16 22:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "561.975769",
    "VOL_PY": "139.000015",
    "PRESSURE": "3.890683",
    "TEMPERATURE": "2.151312"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "08.12.16 23:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "558.751099",
    "VOL_PY": "138.000015",
    "PRESSURE": "3.897824",
    "TEMPERATURE": "2.254149"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "09.12.16 00:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "547.134583",
    "VOL_PY": "135.000015",
    "PRESSURE": "3.902194",
    "TEMPERATURE": "2.297681"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "09.12.16 01:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "535.314941",
    "VOL_PY": "132.000015",
    "PRESSURE": "3.90495",
    "TEMPERATURE": "2.320468"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "09.12.16 02:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "530.558228",
    "VOL_PY": "131.000015",
    "PRESSURE": "3.900572",
    "TEMPERATURE": "2.369853"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "09.12.16 03:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "533.894958",
    "VOL_PY": "132.000015",
    "PRESSURE": "3.895817",
    "TEMPERATURE": "2.396764"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "09.12.16 04:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "537.633362",
    "VOL_PY": "133.000015",
    "PRESSURE": "3.894305",
    "TEMPERATURE": "2.444948"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "09.12.16 05:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "541.929993",
    "VOL_PY": "134.000015",
    "PRESSURE": "3.896791",
    "TEMPERATURE": "2.490424"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "09.12.16 06:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "540.902466",
    "VOL_PY": "134.000015",
    "PRESSURE": "3.891036",
    "TEMPERATURE": "2.591727"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "09.12.16 07:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "552.971802",
    "VOL_PY": "138.000015",
    "PRESSURE": "3.863703",
    "TEMPERATURE": "2.639239"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "09.12.16 08:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "592.026367",
    "VOL_PY": "148.000015",
    "PRESSURE": "3.859561",
    "TEMPERATURE": "2.827653"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "09.12.16 09:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "587.321228",
    "VOL_PY": "146.000015",
    "PRESSURE": "3.883586",
    "TEMPERATURE": "2.991896"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "09.12.16 10:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "548.828674",
    "VOL_PY": "135.000015",
    "PRESSURE": "3.914929",
    "TEMPERATURE": "2.340976"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "09.12.16 11:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "517.599243",
    "VOL_PY": "127.000008",
    "PRESSURE": "3.923506",
    "TEMPERATURE": "2.275376"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "09.12.16 12:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "513.512695",
    "VOL_PY": "126.000008",
    "PRESSURE": "3.923127",
    "TEMPERATURE": "2.255973"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "09.12.16 13:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "514.234192",
    "VOL_PY": "126.000008",
    "PRESSURE": "3.924567",
    "TEMPERATURE": "1.980689"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "09.12.16 14:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "520.824341",
    "VOL_PY": "128.000015",
    "PRESSURE": "3.909749",
    "TEMPERATURE": "1.672722"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "10.12.16 01:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "579.663696",
    "VOL_PY": "143.000015",
    "PRESSURE": "3.891176",
    "TEMPERATURE": "1.49007"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "10.12.16 02:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "615.31311",
    "VOL_PY": "153.000015",
    "PRESSURE": "3.86327",
    "TEMPERATURE": "1.627891"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "10.12.16 03:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "588.001099",
    "VOL_PY": "146.000015",
    "PRESSURE": "3.869269",
    "TEMPERATURE": "1.656559"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "10.12.16 04:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "606.226379",
    "VOL_PY": "150.000015",
    "PRESSURE": "3.886324",
    "TEMPERATURE": "1.793946"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "10.12.16 05:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "464.497986",
    "VOL_PY": "113.000008",
    "PRESSURE": "3.947594",
    "TEMPERATURE": "1.626292"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "10.12.16 06:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "446.149261",
    "VOL_PY": "109.000008",
    "PRESSURE": "3.929096",
    "TEMPERATURE": "1.512459"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "10.12.16 07:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "457.470032",
    "VOL_PY": "113.000008",
    "PRESSURE": "3.886431",
    "TEMPERATURE": "1.471054"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "10.12.16 08:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "511.096558",
    "VOL_PY": "127.000008",
    "PRESSURE": "3.863559",
    "TEMPERATURE": "1.501"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "10.12.16 09:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "521.588745",
    "VOL_PY": "129.000015",
    "PRESSURE": "3.882716",
    "TEMPERATURE": "1.57485"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "10.12.16 10:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "508.501465",
    "VOL_PY": "125.000008",
    "PRESSURE": "3.908172",
    "TEMPERATURE": "1.705545"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "10.12.16 01:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "579.663696",
    "VOL_PY": "143.000015",
    "PRESSURE": "3.891176",
    "TEMPERATURE": "1.49007"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "10.12.16 02:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "615.31311",
    "VOL_PY": "153.000015",
    "PRESSURE": "3.86327",
    "TEMPERATURE": "1.627891"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "10.12.16 03:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "588.001099",
    "VOL_PY": "146.000015",
    "PRESSURE": "3.869269",
    "TEMPERATURE": "1.656559"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "10.12.16 04:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "606.226379",
    "VOL_PY": "150.000015",
    "PRESSURE": "3.886324",
    "TEMPERATURE": "1.793946"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "10.12.16 05:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "464.497986",
    "VOL_PY": "113.000008",
    "PRESSURE": "3.947594",
    "TEMPERATURE": "1.626292"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "10.12.16 06:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "446.149261",
    "VOL_PY": "109.000008",
    "PRESSURE": "3.929096",
    "TEMPERATURE": "1.512459"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "10.12.16 07:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "457.470032",
    "VOL_PY": "113.000008",
    "PRESSURE": "3.886431",
    "TEMPERATURE": "1.471054"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "10.12.16 08:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "511.096558",
    "VOL_PY": "127.000008",
    "PRESSURE": "3.863559",
    "TEMPERATURE": "1.501"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "10.12.16 09:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "521.588745",
    "VOL_PY": "129.000015",
    "PRESSURE": "3.882716",
    "TEMPERATURE": "1.57485"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "10.12.16 10:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "508.501465",
    "VOL_PY": "125.000008",
    "PRESSURE": "3.908172",
    "TEMPERATURE": "1.705545"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "10.12.16 11:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "493.613647",
    "VOL_PY": "121.000008",
    "PRESSURE": "3.920143",
    "TEMPERATURE": "1.790635"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "10.12.16 12:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "477.280121",
    "VOL_PY": "117.000008",
    "PRESSURE": "3.920349",
    "TEMPERATURE": "1.816139"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "10.12.16 13:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "611.598328",
    "VOL_PY": "152.000015",
    "PRESSURE": "3.867347",
    "TEMPERATURE": "1.782066"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "10.12.16 14:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "589.229553",
    "VOL_PY": "146.000015",
    "PRESSURE": "3.881684",
    "TEMPERATURE": "1.957957"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "10.12.16 15:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "523.114563",
    "VOL_PY": "129.000015",
    "PRESSURE": "3.897084",
    "TEMPERATURE": "1.795279"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "10.12.16 16:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "552.771179",
    "VOL_PY": "137.000015",
    "PRESSURE": "3.874491",
    "TEMPERATURE": "1.564536"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "10.12.16 17:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "579.415466",
    "VOL_PY": "144.000015",
    "PRESSURE": "3.864984",
    "TEMPERATURE": "1.615678"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "10.12.16 18:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "637.858398",
    "VOL_PY": "159.000015",
    "PRESSURE": "3.854287",
    "TEMPERATURE": "1.686298"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "10.12.16 19:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "628.438477",
    "VOL_PY": "156.000015",
    "PRESSURE": "3.868776",
    "TEMPERATURE": "1.591903"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "10.12.16 20:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "514.393005",
    "VOL_PY": "126.000008",
    "PRESSURE": "3.920879",
    "TEMPERATURE": "1.539266"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "10.12.16 21:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "444.270599",
    "VOL_PY": "108.000008",
    "PRESSURE": "3.945837",
    "TEMPERATURE": "1.330535"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "10.12.16 22:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "427.401398",
    "VOL_PY": "104.000008",
    "PRESSURE": "3.942357",
    "TEMPERATURE": "1.354724"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "10.12.16 23:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "427.453094",
    "VOL_PY": "104.000008",
    "PRESSURE": "3.941784",
    "TEMPERATURE": "1.280549"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "11.12.16 00:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "411.335724",
    "VOL_PY": "100.000008",
    "PRESSURE": "3.947414",
    "TEMPERATURE": "1.456454"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "11.12.16 01:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "407.785095",
    "VOL_PY": "99.000008",
    "PRESSURE": "3.942608",
    "TEMPERATURE": "0.764507"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "11.12.16 02:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "404.259613",
    "VOL_PY": "98.000008",
    "PRESSURE": "3.930722",
    "TEMPERATURE": "-0.429858"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "11.12.16 03:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "404.640472",
    "VOL_PY": "98.000008",
    "PRESSURE": "3.916078",
    "TEMPERATURE": "-1.666362"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "11.12.16 04:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "410.325073",
    "VOL_PY": "100.000008",
    "PRESSURE": "3.887529",
    "TEMPERATURE": "-1.968936"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "11.12.16 05:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "406.823883",
    "VOL_PY": "100.000008",
    "PRESSURE": "3.854578",
    "TEMPERATURE": "-1.984687"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "11.12.16 06:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "446.883667",
    "VOL_PY": "111.000008",
    "PRESSURE": "3.81961",
    "TEMPERATURE": "-1.672631"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "11.12.16 07:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "497.731537",
    "VOL_PY": "124.000008",
    "PRESSURE": "3.813153",
    "TEMPERATURE": "-1.321494"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "11.12.16 08:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "526.827454",
    "VOL_PY": "131.000015",
    "PRESSURE": "3.816966",
    "TEMPERATURE": "-1.554356"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "11.12.16 09:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "527.619507",
    "VOL_PY": "131.000015",
    "PRESSURE": "3.833583",
    "TEMPERATURE": "-0.797696"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "11.12.16 10:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "507.894257",
    "VOL_PY": "125.000008",
    "PRESSURE": "3.876493",
    "TEMPERATURE": "-0.167833"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "11.12.16 11:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "470.49231",
    "VOL_PY": "115.000008",
    "PRESSURE": "3.90038",
    "TEMPERATURE": "-0.330125"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "11.12.16 12:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "462.684326",
    "VOL_PY": "113.000008",
    "PRESSURE": "3.900615",
    "TEMPERATURE": "-0.521362"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "11.12.16 13:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "463.189972",
    "VOL_PY": "113.000008",
    "PRESSURE": "3.897094",
    "TEMPERATURE": "-1.0448"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "11.12.16 14:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "458.290833",
    "VOL_PY": "112.000008",
    "PRESSURE": "3.886339",
    "TEMPERATURE": "-1.324021"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "11.12.16 15:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "456.308563",
    "VOL_PY": "112.000008",
    "PRESSURE": "3.877582",
    "TEMPERATURE": "-0.781137"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "11.12.16 16:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "451.947113",
    "VOL_PY": "112.000008",
    "PRESSURE": "3.846451",
    "TEMPERATURE": "-0.411667"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "11.12.16 17:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "496.540771",
    "VOL_PY": "124.000008",
    "PRESSURE": "3.815343",
    "TEMPERATURE": "-0.544582"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "11.12.16 18:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "505.112701",
    "VOL_PY": "126.000008",
    "PRESSURE": "3.821851",
    "TEMPERATURE": "-0.377023"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "11.12.16 19:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "502.800964",
    "VOL_PY": "125.000008",
    "PRESSURE": "3.836185",
    "TEMPERATURE": "-0.274723"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "11.12.16 20:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "497.053375",
    "VOL_PY": "123.000008",
    "PRESSURE": "3.854621",
    "TEMPERATURE": "-0.220946"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "11.12.16 21:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "478.466858",
    "VOL_PY": "118.000008",
    "PRESSURE": "3.867961",
    "TEMPERATURE": "-0.194876"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "11.12.16 22:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "459.001678",
    "VOL_PY": "113.000008",
    "PRESSURE": "3.875284",
    "TEMPERATURE": "-0.150753"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "11.12.16 23:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "451.30365",
    "VOL_PY": "111.000008",
    "PRESSURE": "3.879877",
    "TEMPERATURE": "-0.088078"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "12.12.16 00:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "439.078735",
    "VOL_PY": "108.000008",
    "PRESSURE": "3.879694",
    "TEMPERATURE": "-0.081711"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "12.12.16 01:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "434.449432",
    "VOL_PY": "107.000008",
    "PRESSURE": "3.875815",
    "TEMPERATURE": "-0.003176"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "12.12.16 02:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "428.738251",
    "VOL_PY": "106.000008",
    "PRESSURE": "3.864339",
    "TEMPERATURE": "0.219601"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "12.12.16 03:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "430.995148",
    "VOL_PY": "107.000008",
    "PRESSURE": "3.850383",
    "TEMPERATURE": "0.347179"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "12.12.16 04:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "433.067749",
    "VOL_PY": "108.000008",
    "PRESSURE": "3.83066",
    "TEMPERATURE": "0.165084"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "12.12.16 05:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "463.775055",
    "VOL_PY": "116.000008",
    "PRESSURE": "3.811884",
    "TEMPERATURE": "-0.364851"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "12.12.16 06:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "499.205109",
    "VOL_PY": "125.000008",
    "PRESSURE": "3.802992",
    "TEMPERATURE": "-0.702724"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "12.12.16 07:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "538.456421",
    "VOL_PY": "135.000015",
    "PRESSURE": "3.802585",
    "TEMPERATURE": "-0.387726"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "12.12.16 08:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "570.824097",
    "VOL_PY": "143.000015",
    "PRESSURE": "3.810211",
    "TEMPERATURE": "-0.07207"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "12.12.16 09:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "569.350342",
    "VOL_PY": "142.000015",
    "PRESSURE": "3.825857",
    "TEMPERATURE": "-0.149634"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "12.12.16 10:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "547.867676",
    "VOL_PY": "136.000015",
    "PRESSURE": "3.843106",
    "TEMPERATURE": "-0.193635"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "12.12.16 11:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "521.442627",
    "VOL_PY": "129.000015",
    "PRESSURE": "3.853141",
    "TEMPERATURE": "-0.395462"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "12.12.16 12:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "510.684204",
    "VOL_PY": "126.000008",
    "PRESSURE": "3.85779",
    "TEMPERATURE": "-0.775871"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "12.12.16 03:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "430.995148",
    "VOL_PY": "107.000008",
    "PRESSURE": "3.850383",
    "TEMPERATURE": "0.347179"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "12.12.16 04:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "433.067749",
    "VOL_PY": "108.000008",
    "PRESSURE": "3.83066",
    "TEMPERATURE": "0.165084"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "12.12.16 05:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "463.775055",
    "VOL_PY": "116.000008",
    "PRESSURE": "3.811884",
    "TEMPERATURE": "-0.364851"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "12.12.16 06:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "499.205109",
    "VOL_PY": "125.000008",
    "PRESSURE": "3.802992",
    "TEMPERATURE": "-0.702724"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "12.12.16 07:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "538.456421",
    "VOL_PY": "135.000015",
    "PRESSURE": "3.802585",
    "TEMPERATURE": "-0.387726"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "12.12.16 08:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "570.824097",
    "VOL_PY": "143.000015",
    "PRESSURE": "3.810211",
    "TEMPERATURE": "-0.07207"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "12.12.16 09:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "569.350342",
    "VOL_PY": "142.000015",
    "PRESSURE": "3.825857",
    "TEMPERATURE": "-0.149634"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "12.12.16 10:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "547.867676",
    "VOL_PY": "136.000015",
    "PRESSURE": "3.843106",
    "TEMPERATURE": "-0.193635"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "12.12.16 11:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "521.442627",
    "VOL_PY": "129.000015",
    "PRESSURE": "3.853141",
    "TEMPERATURE": "-0.395462"
  },
  {
    "GRS_ID": "145",
    "DAY_HOUR": "12.12.16 12:00",
    "DEV_NO": "41",
    "LINE_NO": "1",
    "VOL_STD": "510.684204",
    "VOL_PY": "126.000008",
    "PRESSURE": "3.85779",
    "TEMPERATURE": "-0.775871"
  }
];

module.exports = IndicatorsHourly;
