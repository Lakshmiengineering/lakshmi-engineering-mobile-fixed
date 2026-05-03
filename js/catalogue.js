/* ===================================================
   LAKSHMI ENGINEERING — PRODUCT CATALOGUE DATA
   WhatsApp: +91 9080154987
   To add images: put your JPG/PNG in assets/products/{folder}/
   and update the img path in each product below.
   =================================================== */

const WA_NUMBER = '919080154987';

function sendWhatsApp(productName, category, spec) {
  let msg = `Hello Lakshmi Engineering,\n\nI am interested in:\n*${productName}*\nCategory: ${category}`;
  if (spec) msg += `\nSpec/Model: ${spec}`;
  msg += `\n\nKindly share pricing and availability. Thank you.`;
  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
}

/* ─── CATALOGUE SECTIONS ─────────────────────────── */
const CATALOGUE = [

  /* ═══════════════════════════════════════════════
     SECTION 0 — COMPRESSORS
  ═══════════════════════════════════════════════ */
  {
    id: 'compressors',
    icon: '⚙️',
    title: 'Compressor Technology',
    subtitle: 'GMCC & Major Brand Compressors for Refrigeration',
    subsections: [
      {
        title: 'Refrigeration & AC Compressors',
        products: [
          { name: 'LG Refrigerator Compressor',       img: 'assets/products/compressors/a1.png' },
          { name: 'Samsung Refrigerator Compressor',   img: 'assets/products/compressors/a2.png' },
          { name: 'Donper Refrigerator Compressor',    img: 'assets/products/compressors/a3.png' },
          { name: 'Siberia Refrigerator Compressor',   img: 'assets/products/compressors/a4.png' },
          { name: 'Panasonic Rotary Compressor',       img: 'assets/products/compressors/a5.png' },
          { name: 'Hitachi Scroll Compressor',         img: 'assets/products/compressors/a6.png' },
          { name: 'Highly Rotary Compressor',          img: 'assets/products/compressors/a7.png' },
          { name: 'Wanbao Rotary Compressor',          img: 'assets/products/compressors/a8.png' },
          { name: 'Samsung Rotary Compressor',         img: 'assets/products/compressors/a9.png' },
          { name: 'Huayi Refrigerator Compressor',     img: 'assets/products/compressors/a10.png' },
          { name: 'Cubigel Refrigerator Compressor',   img: 'assets/products/compressors/a11.png' },
          { name: 'Copeland Scroll Compressor',        img: 'assets/products/compressors/a12.png' },
          { name: 'Daikin Scroll Compressor',          img: 'assets/products/compressors/a13.png' },
          { name: 'Invotech Scroll Compressor',        img: 'assets/products/compressors/a14.png' },
          { name: 'Gree Rotary Compressor',            img: 'assets/products/compressors/a15.png' },
          { name: 'GMCC Rotary Compressor',            img: 'assets/products/compressors/a16.png' },
          { name: 'Jiaxipera Refrigerator Compressor', img: 'assets/products/compressors/a17.png' },
          { name: 'Sanyo Scroll Compressor',           img: 'assets/products/compressors/a18.png' },
          { name: 'OD Compressor',                     img: 'assets/products/compressors/a19.png' },
          { name: 'LG Rotary Compressor',              img: 'assets/products/compressors/a20.png' },
        ]
      }
    ],
    tables: []
  },

  /* ═══════════════════════════════════════════════
     SECTION 1 — CAPACITORS
  ═══════════════════════════════════════════════ */
  {
    id: 'capacitors',
    icon: '⚡',
    title: 'Capacitors',
    subtitle: 'Start & Run Capacitors for HVAC and Refrigeration',
    subsections: [
      {
        title: 'CD60 Series — Start Capacitor',
        products: [
          { name: 'CD60 Start Capacitor 118V/125V', img: 'assets/products/capacitors/c1.png' },
          { name: 'CD60 Start Capacitor 220V/250V', img: 'assets/products/capacitors/c1.png' },
          { name: 'CD60 Start Capacitor 330V',      img: 'assets/products/capacitors/c1.png' },
        ]
      },
      {
        title: 'CBB65 Series — Run Capacitor (370V & 440V)',
        products: [
          { name: 'CBB65 Run Capacitor 3–10 µF',    img: 'assets/products/capacitors/c2.png' },
          { name: 'CBB65 Run Capacitor 12.5–50 µF', img: 'assets/products/capacitors/c2.png' },
          { name: 'CBB65 Run Capacitor 55–120 µF',  img: 'assets/products/capacitors/c2.png' },
          { name: 'CBB65 Dual Capacitor 30+10 µF',  img: 'assets/products/capacitors/c2.png' },
          { name: 'CBB65 Dual Capacitor 40+7.5 µF', img: 'assets/products/capacitors/c2.png' },
          { name: 'CBB65 Dual Capacitor 50+7.5 µF', img: 'assets/products/capacitors/c2.png' },
        ]
      },
      {
        title: 'CH85 — Microwave Oven Capacitor (2100/2500VAC)',
        products: [
          { name: 'CH85 Capacitor 0.50 µF',  img: 'assets/products/capacitors/c6.png' },
          { name: 'CH85 Capacitor 0.75 µF',  img: 'assets/products/capacitors/c6.png' },
          { name: 'CH85 Capacitor 0.92 µF',  img: 'assets/products/capacitors/c6.png' },
          { name: 'CH85 Capacitor 1.07 µF',  img: 'assets/products/capacitors/c6.png' },
          { name: 'CH85 Capacitor 1.10 µF',  img: 'assets/products/capacitors/c6.png' },
          { name: 'CH85 Capacitor 1.20 µF',  img: 'assets/products/capacitors/c6.png' },
        ]
      },
      {
        title: 'Hard Start Kit & SPP Capacitor',
        products: [
          { name: 'Hard Start Kit ', img: 'assets/products/capacitors/c7.png' },
          { name: 'SPP5 Capacitor',              img: 'assets/products/capacitors/c5.png' },
          { name: 'SPP6 Capacitor',              img: 'assets/products/capacitors/c5.png' },
          { name: 'RC0410 Capacitor',            img: 'assets/products/capacitors/c5.png' },
          { name: 'SPP 810 Capacitor',           img: 'assets/products/capacitors/c5.png' },
        ]
      },
      {
        title: 'CBB60 Series — Run Capacitor (250V / 440V)',
        products: [
          { name: 'CBB60 2–6 µF',   img: 'assets/products/capacitors/c3.png' },
          { name: 'CBB60 7–14 µF',  img: 'assets/products/capacitors/c3.png' },
          { name: 'CBB60 16–30 µF', img: 'assets/products/capacitors/c3.png' },
          { name: 'CBB60 35–80 µF', img: 'assets/products/capacitors/c3.png' },
        ]
      },
      {
        title: 'CBB61 Series — Run Capacitor (250V / 450V)',
        products: [
          { name: 'CBB61 1–3.5 µF', img: 'assets/products/capacitors/c4.png' },
          { name: 'CBB61 4–8 µF',   img: 'assets/products/capacitors/c4.png' },
          { name: 'CBB61 10–12 µF', img: 'assets/products/capacitors/c4.png' },
        ]
      },
      {
        title: 'Dual Capacitance Series',
        products: [
          { name: 'Dual Cap 450V — 10+4 to 10+6 µF', img: 'assets/products/capacitors/c8.png' },
          { name: 'Dual Cap 450V — 12+4 to 12+6 µF', img: 'assets/products/capacitors/c8.png' },
          { name: 'Dual Cap 250V-380V — 24.9/9 µF',  img: 'assets/products/capacitors/c9.png' },
          { name: 'Dual Cap 250V-380V — 44+15 µF',   img: 'assets/products/capacitors/c9.png' },
        ]
      },
      {
        title: 'Capillary Tubes',
        products: [
          { name: 'Capillary GC-1 (3M)',  img: 'assets/products/capacitors/c11.png' },
          { name: 'Capillary GC-2 (3M)',  img: 'assets/products/capacitors/c11.png' },
          { name: 'Capillary GC-3 (3M)',  img: 'assets/products/capacitors/c11.png' },
          { name: 'Capillary GC-4 (3M)',  img: 'assets/products/capacitors/c11.png' },
          { name: 'Capillary GC-5 (3M)',  img: 'assets/products/capacitors/c11.png' },
          { name: 'Capillary GC-6 (3M)',  img: 'assets/products/capacitors/c11.png' },
          { name: 'Capillary GC-7 (3M)',  img: 'assets/products/capacitors/c11.png' },
          { name: 'Capillary GC-8 (3M)',  img: 'assets/products/capacitors/c11.png' },
          { name: 'Capillary GC-9 (3M)',  img: 'assets/products/capacitors/c11.png' },
          { name: 'Capillary GC-10 (3M)', img: 'assets/products/capacitors/c11.png' },
          { name: 'Capillary GC-11 (3M)', img: 'assets/products/capacitors/c11.png' },
          { name: 'Capillary GC-12 (3M)', img: 'assets/products/capacitors/c11.png' },
          { name: 'Capillary GC-1 (30M)', img: 'assets/products/capacitors/c10.png' },
          { name: 'Capillary GC-4 (30M)', img: 'assets/products/capacitors/c10.png' },
          { name: 'Capillary GC-8 (30M)', img: 'assets/products/capacitors/c10.png' },
          { name: 'Capillary GC-12 (30M)',img: 'assets/products/capacitors/c10.png' },
        ]
      },
    ],
    tables: [
      {
        afterSubsection: 0,
        title: 'CD60 Start Capacitor — Capacitance Values (µF)',
        html: `<table class="prod-table"><thead><tr><th>118V/125V</th><th>220V/250V</th><th>330V</th></tr></thead><tbody>
<tr><td>88–108</td><td>88–108</td><td>72–86</td></tr>
<tr><td>104–126</td><td>108–130</td><td>88–108</td></tr>
<tr><td>124–149</td><td>120–130</td><td>108–149</td></tr>
<tr><td>130–156</td><td>130–155</td><td>126–149</td></tr>
<tr><td>161–193</td><td>161–193</td><td>145–156</td></tr>
<tr><td>191–227</td><td>219–257</td><td>161–193</td></tr>
<tr><td>216–239</td><td>216–256</td><td>239–289</td></tr>
<tr><td>270–274</td><td>223–330</td><td>324–388</td></tr>
<tr><td>324–358</td><td>324–388</td><td>354–368</td></tr>
<tr><td>378–454</td><td>378–484</td><td>378–480</td></tr>
<tr><td>400–480</td><td>400–480</td><td>400–480</td></tr>
<tr><td>430–516</td><td>450–616</td><td>700</td></tr>
<tr><td>540–648</td><td>548–648</td><td>800</td></tr>
<tr><td>673–774</td><td>674–774</td><td>1000</td></tr>
</tbody></table>`
      },
      {
        afterSubsection: 1,
        title: 'CBB65 Run Capacitor — Available Values (µF) @ 370V & 440V',
        html: `<table class="prod-table"><thead><tr><th>Single (µF)</th><th>Single (µF)</th><th>Dual (µF)</th></tr></thead><tbody>
<tr><td>3</td><td>55</td><td>30 + 10</td></tr><tr><td>4</td><td>60</td><td>35 + 5</td></tr>
<tr><td>5</td><td>65</td><td>35 + 7.5</td></tr><tr><td>6</td><td>70</td><td>35 + 10</td></tr>
<tr><td>7.5</td><td>75</td><td>40 + 5</td></tr><tr><td>8</td><td>80</td><td>40 + 7.5</td></tr>
<tr><td>10</td><td>100</td><td>45 + 5</td></tr><tr><td>12.5</td><td>120</td><td>45 + 7.5</td></tr>
<tr><td>15</td><td>15 + 5</td><td>50 + 5</td></tr><tr><td>17.5</td><td>15 + 10</td><td>50 + 7.5</td></tr>
<tr><td>20</td><td>20 + 5</td><td>60 + 5</td></tr><tr><td>25</td><td>25 + 5</td><td>60 + 7.5</td></tr>
<tr><td>30</td><td>25 + 7.5</td><td>70 + 5</td></tr><tr><td>35</td><td>30 + 5</td><td>70 + 7.5</td></tr>
<tr><td>40</td><td>30 + 7.5</td><td>—</td></tr><tr><td>50</td><td>—</td><td>—</td></tr>
</tbody></table>`
      },
      {
        afterSubsection: 4,
        title: 'CBB60 Run Capacitor — Values (µF) @ 250V / 440V',
        html: `<table class="prod-table"><thead><tr><th>µF</th><th>µF</th><th>µF</th><th>µF</th><th>µF</th></tr></thead><tbody>
<tr><td>2</td><td>7</td><td>14</td><td>35</td><td>80</td></tr>
<tr><td>2.5</td><td>8</td><td>16</td><td>40</td><td>—</td></tr>
<tr><td>3</td><td>9</td><td>18</td><td>45</td><td>—</td></tr>
<tr><td>4</td><td>10</td><td>20</td><td>60</td><td>—</td></tr>
<tr><td>5</td><td>12</td><td>30</td><td>70</td><td>—</td></tr>
</tbody></table>`
      },
      {
        afterSubsection: 5,
        title: 'CBB61 Run Capacitor — Values (µF) @ 250V / 450V',
        html: `<table class="prod-table"><thead><tr><th>µF</th><th>µF</th><th>µF</th></tr></thead><tbody>
<tr><td>1</td><td>4</td><td>10</td></tr>
<tr><td>1.5</td><td>4.5</td><td>12</td></tr>
<tr><td>2</td><td>5</td><td>—</td></tr>
<tr><td>2.5</td><td>6</td><td>—</td></tr>
<tr><td>3</td><td>7</td><td>—</td></tr>
<tr><td>3.5</td><td>8</td><td>—</td></tr>
</tbody></table>`
      },
      {
        afterSubsection: 6,
        title: 'Dual Capacitance — Dimensions Reference',
        html: `<table class="prod-table"><thead><tr><th>Voltage (VAC)</th><th>Capacitance (µF)</th><th>D × H (mm)</th></tr></thead><tbody>
<tr><td>450V</td><td>10+4, 10+5, 10+6</td><td>40 × 85</td></tr>
<tr><td>450V</td><td>12+4, 12+5, 12+6</td><td>45 × 95</td></tr>
<tr><td>450V</td><td>13+4, 13+5, 13+6</td><td>50 × 95</td></tr>
<tr><td>250V–380V</td><td>24.9+9, 26+9, 26+13, 23+14, 33+14, 35+15</td><td>45 × 95</td></tr>
<tr><td>250V–380V</td><td>41.9+28.8, 44+15, 46+18</td><td>45 × 95</td></tr>
<tr><td>250V–380V</td><td>44+18, 45.8+28.8, 45.6+25</td><td>50 × 100</td></tr>
</tbody></table>`
      },
    ]
  },

  /* ═══════════════════════════════════════════════
     SECTION 2 — MOTORS & ACCESSORIES
  ═══════════════════════════════════════════════ */
  {
    id: 'motors',
    icon: '🔄',
    title: 'Motors & Accessories',
    subtitle: 'Fan Motors, Disconnect Switches & Sensors',
    subsections: [
      {
        title: 'Fan Motor & Resin-Packing Motor',
        products: [
          { name: 'DC Motor',           img: 'assets/products/motors/DC-MOTOR.png' },
          { name: 'Motor 1392 R',        img: 'assets/products/motors/Motor 1392 R.png' },
          { name: 'YDK68-6L Motor',     img: 'assets/products/motors/YDK68-6L Motor.png' },
          { name: 'GALD75H61225-K02',    img: 'assets/products/motors/mi.png' },
          { name: 'YDK-40-GCF',         img: 'assets/products/motors/GALD75H61225-K02.png' },
          { name: 'Y4S408A67',          img: 'assets/products/motors/YDK-40-GCF.png' },
          { name: 'HQM-94/35-6-7082',   img: 'assets/products/motors/y1.png' },
          { name: 'YDK53-6C',           img: 'assets/products/motors/y2.png' },
          { name: 'Motor 21212',        img: 'assets/products/motors/y3.png' },
          { name: 'YYF94-31-4',         img: 'assets/products/motors/y4.png' },
          { name: 'YDK140/35-6-185A',   img: 'assets/products/motors/y5.png' },
          { name: 'YDK140-185-6',       img: 'assets/products/motors/y6.png' },
          { name: 'YDK140/60-6-500B1',  img: 'assets/products/motors/y7.png' },
          { name: 'YDK140-550-6',       img: 'assets/products/motors/y8.png' },
          { name: 'YDK120/30-6-908',    img: 'assets/products/motors/y9.png' },
          { name: 'YSK120/35-6',        img: 'assets/products/motors/y10.png' },
          { name: 'YSK140/30-4-150',    img: 'assets/products/motors/y11.png' },
          { name: 'YSK140-150-6A4',     img: 'assets/products/motors/y12.png' },
          { name: 'YSK-100-6',          img: 'assets/products/motors/y13.png' },
          { name: 'YFK-257',            img: 'assets/products/motors/y14.png' },
          { name: 'ZWF-56',             img: 'assets/products/motors/y15.png' },
          { name: 'R039HB',             img: 'assets/products/motors/y16.png' },
          { name: 'RPG15C-1',           img: 'assets/products/motors/y17.png' },
          { name: 'YYR35-4A1 P6',       img: 'assets/products/motors/y18.png' },
          { name: 'ZWF-42',             img: 'assets/products/motors/y19.png' },
        ]
      },
      {
        title: 'A/C Disconnect Switch Box',
        products: [
          { name: 'PDS-30A Disconnect Switch (Plastic, Non-Fused)',  img: 'assets/products/motors/spec.png' },
          { name: 'PCDS-30A Disconnect Switch (Plastic, Fused)',      img: 'assets/products/motors/spec.png' },
          { name: 'PDS-60A Disconnect Switch (Metal, Non-Fused)',     img: 'assets/products/motors/spec.png' },
          { name: 'PCDS-60A Disconnect Switch (Metal, Fused)',        img: 'assets/products/motors/spec.png' },
          { name: 'POS-60AN Disconnect Switch 60A',                   img: 'assets/products/motors/spec.png' },
        ]
      },
      {
        title: 'Aliac Brands Sensor',
        products: [
  { name: 'Sensor SC-01', img: 'assets/products/motors/z1.png' },
  { name: 'Sensor SC-02', img: 'assets/products/motors/z2.png' },
  { name: 'Sensor SC-03', img: 'assets/products/motors/z3.png' },
  { name: 'Sensor SC-04', img: 'assets/products/motors/z4.png' },
  { name: 'Sensor SC-05', img: 'assets/products/motors/z5.png' },
  { name: 'Sensor SC-06', img: 'assets/products/motors/z6.png' },
  { name: 'Sensor SC-07', img: 'assets/products/motors/z7.png' },
  { name: 'Sensor SC-08', img: 'assets/products/motors/z8.png' },
  { name: 'Sensor SC-09', img: 'assets/products/motors/z9.png' },
  { name: 'Sensor SC-10', img: 'assets/products/motors/z10.png' },
  { name: 'Sensor SC-11', img: 'assets/products/motors/z11.png' },
  { name: 'Sensor SC-12', img: 'assets/products/motors/z12.png' },
  { name: 'Sensor SC-13', img: 'assets/products/motors/z13.png' },
  { name: 'Sensor SC-14', img: 'assets/products/motors/z14.png' },
  { name: 'Sensor SC-15', img: 'assets/products/motors/z15.png' },
  { name: 'Sensor SC-16', img: 'assets/products/motors/z16.png' },
  { name: 'Sensor SC-17', img: 'assets/products/motors/z17.png' },
  { name: 'Sensor SC-18', img: 'assets/products/motors/z18.png' },
  { name: 'Sensor SC-19', img: 'assets/products/motors/z19.png' },
  { name: 'Sensor SC-20', img: 'assets/products/motors/z20.png' },
  { name: 'Sensor SC-21', img: 'assets/products/motors/z21.png' },
  { name: 'Sensor SC-22', img: 'assets/products/motors/z22.png' },
  { name: 'Sensor SC-DK', img: 'assets/products/motors/z23.png' },
  { name: 'Sensor SC-LG', img: 'assets/products/motors/z24.png' },
  { name: 'Sensor SC-PA', img: 'assets/products/motors/z25.png' },
  { name: 'Sensor SC-SA', img: 'assets/products/motors/z26.png' },
  { name: 'Sensor SC-SH', img: 'assets/products/motors/z27.png' },
]
      },
      {
        title: 'Auxiliary Equipment',
        products: [
          { name: 'Condensate Pump SC-DK',   img: 'assets/all.png' },
          { name: 'Condensate Pump BW1000A', img: 'assets/all.png' },
          { name: 'Air Cooler Switch DZ-619', img: 'assets/all.png' },
          { name: 'Leak Stop Kit',            img: 'assets/all.png' },
        ]
      }
    ],
    tables: [
      {
        afterSubsection: 1,
        title: 'A/C Disconnect Switch — Specifications',
        html: `<table class="prod-table"><thead><tr><th>Cat No.</th><th>Rating</th><th>HP @ 120V</th><th>HP @ 240V</th><th>Enclosure</th><th>Fuse</th></tr></thead><tbody>
<tr><td>PDS-30A / PCDS-30A</td><td>30A, 240VAC 1-Phase 3-Wire</td><td>0.5 Max 2</td><td>1.5 Max 3</td><td>Plastic (PDOS)</td><td>Non-Fused / Fused</td></tr>
<tr><td>PDS-60A / PCDS-60A</td><td>60A, 240VAC 1-Phase 3-Wire</td><td>1.5 Max 2</td><td>1.5 Max 3</td><td>Metal (POS)</td><td>Non-Fused / Fused</td></tr>
<tr><td>POS-60AN / PCDS-600N</td><td>60A, 240VAC 1-Phase 3-Wire</td><td>—</td><td>3 Max 10</td><td>Metal</td><td>Non-Fused</td></tr>
</tbody></table>`
      }
    ]
  },

  /* ═══════════════════════════════════════════════
     SECTION 3 — Deprost TIMERS
  ═══════════════════════════════════════════════ */
  {
    id: 'Deprost-timers',
    icon: '⏱️',
    title: 'Deprost Timers',
    subtitle: 'Sanyko, Paragon & Korea Series Deprost Timers',
    subsections: [
      {
        title: 'Sanyko Series — TMDE Models (Max 1.5W)',
        products: [
          { name: 'Deprost Timer 520ZC1', img: 'assets/all.png' },
          { name: 'Deprost Timer S20TA1', img: 'assets/all.png' },
          { name: 'Deprost Timer 625ZF1', img: 'assets/all.png' },
          { name: 'Deprost Timer 702ZA1', img: 'assets/all.png' },
          { name: 'Deprost Timer 706SC',  img: 'assets/all.png' },
          { name: 'Deprost Timer 706SA1', img: 'assets/all.png' },
          { name: 'Deprost Timer 802ZC1', img: 'assets/all.png' },
          { name: 'Deprost Timer 807KA1', img: 'assets/all.png' },
          { name: 'Deprost Timer 807KF1', img: 'assets/all.png' },
          { name: 'Deprost Timer X09UM1', img: 'assets/all.png' },
        ]
      },
      {
        title: 'Sanyko Series — TMDE Models (Max 1.7W)',
        products: [
          { name: 'Deprost Timer 702DH1',  img: 'assets/all.png' },
          { name: 'Deprost Timer 702DH2',  img: 'assets/all.png' },
          { name: 'Deprost Timer 702ZD1',  img: 'assets/all.png' },
          { name: 'Deprost Timer 702ZH2',  img: 'assets/all.png' },
          { name: 'Deprost Timer 702KB1',  img: 'assets/all.png' },
          { name: 'Deprost Timer 702KA2',  img: 'assets/all.png' },
          { name: 'Deprost Timer 706KL1',  img: 'assets/all.png' },
          { name: 'Deprost Timer 706KL4',  img: 'assets/all.png' },
          { name: 'Deprost Timer 706ZC2',  img: 'assets/all.png' },
          { name: 'Deprost Timer 706KF4',  img: 'assets/all.png' },
          { name: 'Deprost Timer 706ZD1',  img: 'assets/all.png' },
          { name: 'Deprost Timer 706CD1',  img: 'assets/all.png' },
          { name: 'Deprost Timer 802ZH1',  img: 'assets/all.png' },
          { name: 'Deprost Timer 807KH2',  img: 'assets/all.png' },
          { name: 'Deprost Timer 835KA2',  img: 'assets/all.png' },
          { name: 'Deprost Timer X0D4KH2', img: 'assets/all.png' },
          { name: 'Deprost Timer XOD4ZD1', img: 'assets/all.png' },
        ]
      },
      {
        title: 'Sanyko Series — TMDJ Models (Max 1.5W)',
        products: [
          { name: 'Deprost Timer 521ZF1',  img: 'assets/all.png' },
          { name: 'Deprost Timer 621ZF1',  img: 'assets/all.png' },
          { name: 'Deprost Timer 625ZF1', img: 'assets/all.png' },
          { name: 'Deprost Timer 62SSCR', img: 'assets/all.png' },
          { name: 'Deprost Timer 721ZF1', img: 'assets/all.png' },
          { name: 'Deprost Timer 7377RC1',  img: 'assets/all.png' },
          { name: 'Deprost Timer 807ZF1', img: 'assets/all.png' },
          { name: 'Deprost Timer 824ZF1', img: 'assets/all.png' },
          { name: 'Deprost Timer 833RC1', img: 'assets/all.png' },
          { name: 'Deprost Timer 833RC1', img: 'assets/all.png' },
          { name: 'Deprost Timer X255CR',img: 'assets/all.png' },
          { name: 'Deprost Timer 62SSCRX',img: 'assets/all.png' },
          { name: 'Deprost Timer 725ZF1X',img: 'assets/all.png' },
          { name: 'Deprost Timer X25SCAX',img: 'assets/all.png' },
        ]
      },
      {
        title: 'Paragon Series — TMDJ Models (Max 3W)',
        products: [
          { name: 'Paragon Timer M8322X',  img: 'assets/all.png' },
          { name: 'Paragon Timer M8322',   img: 'assets/all.png' },
          { name: 'Paragon Timer M8308X',   img: 'assets/all.png' },
          { name: 'Paragon Timer M8429X',   img: 'assets/all.png' },
          { name: 'Paragon Timer M8429',   img: 'assets/all.png' },
          { name: 'Paragon Timer M8429RX', img: 'assets/all.png' },
        ]
      },
      {
        title: 'Paragon Series — TMDE Models (Max 2W)',
        products: [
          { name: 'Paragon Timer 621-1',    img: 'assets/all.png' },
          { name: 'Paragon Timer 725-1',    img: 'assets/all.png' },
          { name: 'Paragon Timer 821-1',    img: 'assets/all.png' },
          { name: 'Paragon Timer 1221-1',   img: 'assets/all.png' },
          { name: 'Paragon Timer 1225-1',   img: 'assets/all.png' },
          { name: 'Paragon Timer 625-1A',   img: 'assets/all.png' },
          { name: 'Paragon Timer 1222-1A',  img: 'assets/all.png' },
          { name: 'Paragon Timer 621-1AX',  img: 'assets/all.png' },
          { name: 'Paragon Timer 1225-1AX', img: 'assets/all.png' },
        ]
      },
      {
        title: 'Korea Series — TMDE Models (Max 2W)',
        products: [
          { name: 'Korea Timer TMDD807C',  img: 'assets/all.png' },
          { name: 'Korea Timer TMDD807L',  img: 'assets/all.png' },
          { name: 'Korea Timer TMDD814C',  img: 'assets/all.png' },
          { name: 'Korea Timer TMDD814L',  img: 'assets/all.png' },
          { name: 'Korea Timer TMDDX210C', img: 'assets/all.png' },
          { name: 'Korea Timer TMDDX210L', img: 'assets/all.png' },
          { name: 'Korea Timer TMDDX407L', img: 'assets/all.png' },
          { name: 'Korea Timer TMDDX412C', img: 'assets/all.png' },
        ]
      },
      {
        title: 'Electronic Control Timers',
        products: [
          { name: 'Electronic Timer DD-20',   img: 'assets/all.png' },
          { name: 'Electronic Timer DMDJ',    img: 'assets/all.png' },
          { name: 'Electronic Timer DMDE',    img: 'assets/all.png' },
          { name: 'Electronic Timer DMDF',    img: 'assets/all.png' },
          { name: 'Electronic Timer TMDC',    img: 'assets/all.png' },
          { name: 'Electronic Timer UET120',  img: 'assets/all.png' },
          { name: 'Electronic Timer TMDG',    img: 'assets/all.png' },
          { name: 'Electronic Timer TNM-01',  img: 'assets/all.png' },
          { name: 'Auto Control Timer',       img: 'assets/all.png' },
          { name: 'Timer ORDT0624H',          img: 'assets/all.png' },
          { name: 'Timer SC1230',             img: 'assets/all.png' },
        ]
      },
    ],
    tables: [
      {
        afterSubsection: 0,
        title: 'Sanyko TMDE Series — Specifications',
        html: `<table class="prod-table"><thead><tr><th>Model</th><th>Voltage</th><th>Freq</th><th>Switch Rating</th><th>Defrost Time (50/60Hz)</th><th>Cycle Time (50/60Hz)</th></tr></thead><tbody>
<tr><td>520ZC1</td><td>240V</td><td>50/60Hz</td><td>AC250V/5A</td><td>21m / 18m</td><td>6h17m / 6h17m</td></tr>
<tr><td>S20TA1</td><td>110V</td><td>50/60Hz</td><td>AC250V/8A</td><td>21m / 11m</td><td>6h01m / 5h11m</td></tr>
<tr><td>625ZF1</td><td>220V</td><td>50/60Hz</td><td>AC250V/5A</td><td>21m / 13m</td><td>6h16m / 6h08m</td></tr>
<tr><td>702ZA1</td><td>110V</td><td>50/60Hz</td><td>AC250V/8A</td><td>2m / 2m</td><td>6h45m / 7h28m</td></tr>
<tr><td>706SC</td><td>220V</td><td>50/60Hz</td><td>AC250V/8A</td><td>7m / 5m35s</td><td>7h32m / 5h23m</td></tr>
<tr><td>706SA1</td><td>110V</td><td>50/60Hz</td><td>AC250V/3A</td><td>7m / 2m25s</td><td>7h43m / 7h28m</td></tr>
<tr><td>802ZC1</td><td>110V</td><td>50/60Hz</td><td>AC230V/8A</td><td>2h3m / 2m</td><td>5h55m / 7h23m</td></tr>
<tr><td>807KA1</td><td>110V</td><td>50/60Hz</td><td>AC250V/3A</td><td>7m / 2m25s</td><td>7h43m / 8h2m</td></tr>
<tr><td>807KF1</td><td>220V</td><td>50/60Hz</td><td>AC250V/5A</td><td>7m / 5m55s</td><td>7h53m / 8h3m</td></tr>
<tr><td>X09UM1</td><td>220V</td><td>50/60Hz</td><td>AC250V/5A</td><td>1s / 20m</td><td>10h8m / 10h5m</td></tr>
</tbody></table>`
      },
      
      {
        afterSubsection: 3,
        title: 'Paragon TMDJ Series — Specifications',
        html: `<table class="prod-table"><thead><tr><th>Model</th><th>Voltage</th><th>Freq</th><th>Switch</th><th>Defrost Time</th><th>Cycle Time</th></tr></thead><tbody>
<tr><td>M8322X</td><td>200–240V</td><td>50/60Hz</td><td>AC250V/5A</td><td>20m / 21m</td><td>2h18m / 12h</td></tr>
<tr><td>M8322</td><td>200–240V</td><td>50/60Hz</td><td>AC250V/5A</td><td>20m / 21m</td><td>6h30m / 8h</td></tr>
<tr><td>M8308X</td><td>100–130V</td><td>50/60Hz</td><td>AC250V/5A</td><td>20m / 21m</td><td>7h24m / 8h</td></tr>
<tr><td>M8429X</td><td>100–130V</td><td>50/60Hz</td><td>AC230V/5A</td><td>2m / 21m</td><td>7h31m / 8h</td></tr>
<tr><td>M8429</td><td>100–130V</td><td>50/60Hz</td><td>AC250V/5A</td><td>2m / 21m</td><td>7h41m / 8h</td></tr>
<tr><td>M8429RX</td><td>100–130V</td><td>30/60Hz</td><td>AC230V/5A</td><td>20m / 21m</td><td>10h8m / 10h</td></tr>
</tbody></table>`
      },
      {
        afterSubsection: 5,
        title: 'Korea TMDE Series — Specifications',
        html: `<table class="prod-table"><thead><tr><th>Model</th><th>Voltage</th><th>Freq</th><th>Switch</th><th>Defrost Time</th><th>Cycle Time</th></tr></thead><tbody>
<tr><td>TMDD807C</td><td>200–240V</td><td>50/60Hz</td><td>AC250V/5A</td><td>7m / 8m</td><td>8h / 8h40m</td></tr>
<tr><td>TMDD807L</td><td>200–240V</td><td>50/60Hz</td><td>AC250V/5A</td><td>7m / 8m</td><td>8h / 8h40m</td></tr>
<tr><td>TMDD814C</td><td>200–220V</td><td>50/60Hz</td><td>AC250V/5A</td><td>14m / 12m</td><td>8h / 6h40m</td></tr>
<tr><td>TMDD814L</td><td>200–220V</td><td>50/60Hz</td><td>AC250V/5A</td><td>14m / 12m</td><td>8h / 6h40m</td></tr>
<tr><td>TMDDX210C</td><td>100–130V</td><td>50/60Hz</td><td>AC230V/8A</td><td>14m / 12m</td><td>8h / 8h40m</td></tr>
<tr><td>TMDDX210L</td><td>100–130V</td><td>50/60Hz</td><td>AC230V/8A</td><td>14m / 12m</td><td>8h / 8h40m</td></tr>
<tr><td>TMDDX407L</td><td>100–120V</td><td>50/60Hz</td><td>AC250V/3A</td><td>14m / 12m</td><td>12h / 4m / 13m</td></tr>
<tr><td>TMDDX412C</td><td>100–120V</td><td>50/60Hz</td><td>AC250V/3A</td><td>14m / 12m</td><td>12h / 10m / 2m</td></tr>
</tbody></table>`
      },
    ]
  },

  /* ═══════════════════════════════════════════════
     SECTION 4 — THERMAL FUSE, SYNC MOTOR, SWITCHES
  ═══════════════════════════════════════════════ */
  {
    id: 'thermal-switches',
    icon: '🔌',
    title: 'Thermal Fuse, Motors & Switches',
    subtitle: 'Thermal Fuses, Synchronous/Stepping Motors & Select Switches',
    subsections: [
      {
        title: 'Thermal Fuse',
        products: [
          { name: 'Thermal Fuse SE-066', img: 'assets/all.png' },
          { name: 'Thermal Fuse SC-067', img: 'assets/all.png' },
          { name: 'Thermal Fuse SC-068', img: 'assets/all.png' },
          { name: 'Thermal Fuse SC-069', img: 'assets/all.png' },
          { name: 'Thermal Fuse SC-071', img: 'assets/all.png' },
          { name: 'Thermal Fuse SC-072,-073', img: 'assets/all.png' },
        ]
      },
      {
        title: 'Synchronous & Stepping Motor (Series A–W)',
        products: [
          { name: 'Sync Motor Z', img: 'assets/all.png' },
          { name: 'Sync Motor A', img: 'assets/all.png' },
          { name: 'Sync Motor B', img: 'assets/all.png' },
          { name: 'Sync Motor C', img: 'assets/all.png' },
          { name: 'Sync Motor D', img: 'assets/all.png' },
          { name: 'Sync Motor E', img: 'assets/all.png' },
          { name: 'Sync Motor F', img: 'assets/all.png' },
          { name: 'Sync Motor G', img: 'assets/all.png' },
          { name: 'Sync Motor H', img: 'assets/all.png' },
          { name: 'Sync Motor I', img: 'assets/all.png' },
          { name: 'Sync Motor J', img: 'assets/all.png' },
          { name: 'Sync Motor K', img: 'assets/all.png' },
          { name: 'Sync Motor L', img: 'assets/all.png' },
          { name: 'Sync Motor M', img: 'assets/all.png' },
          { name: 'Sync Motor N', img: 'assets/all.png' },
          { name: 'Sync Motor O', img: 'assets/all.png' },
          { name: 'Sync Motor P', img: 'assets/all.png' },
          { name: 'Sync Motor Q', img: 'assets/all.png' },
          { name: 'Sync Motor R', img: 'assets/all.png' },
          { name: 'Sync Motor S', img: 'assets/all.png' },
          { name: 'Sync Motor T', img: 'assets/all.png' },
          { name: 'Sync Motor U', img: 'assets/all.png' },
          { name: 'Sync Motor V', img: 'assets/all.png' },
          { name: 'Sync Motor W', img: 'assets/all.png' },
        ]
      },
      {
        title: 'Select Switch',
        products: [
          { name: 'Select Switch SC-309-1', img: 'assets/all.png' },
          { name: 'Select Switch SC-401',   img: 'assets/all.png' },
          { name: 'Select Switch SC-401-1', img: 'assets/all.png' },
          { name: 'Select Switch SC-402',   img: 'assets/all.png' },
          { name: 'Select Switch SE-403',   img: 'assets/all.png' },
          { name: 'Select Switch SC-404',   img: 'assets/all.png' },
          { name: 'Select Switch SC-405',   img: 'assets/all.png' },
          { name: 'Select Switch SC-406',   img: 'assets/all.png' },
          { name: 'Select Switch SC-407',   img: 'assets/all.png' },
          { name: 'Select Switch SE-408',   img: 'assets/all.png' },
          { name: 'Select Switch SC-501',   img: 'assets/all.png' },
          { name: 'Select Switch SC-502',   img: 'assets/all.png' },
          { name: 'Select Switch SE-503',   img: 'assets/all.png' },
          { name: 'Select Switch SC-504',   img: 'assets/all.png' },
          { name: 'Select Switch SE-505',   img: 'assets/all.png' },
          { name: 'Select Switch SC-506',   img: 'assets/all.png' },
          { name: 'Select Switch SD-507',   img: 'assets/all.png' },
          { name: 'Select Switch SC-508',   img: 'assets/all.png' },
          { name: 'Select Switch SC-307',   img: 'assets/all.png' },
          { name: 'Select Switch SC-309',   img: 'assets/all.png' },
          { name: 'Select Switch SC-400-S', img: 'assets/all.png' },
          { name: 'Select Switch 7131',     img: 'assets/all.png' },
          { name: 'Select Switch 71105',    img: 'assets/all.png' },
          { name: 'Select Switch 7112',     img: 'assets/all.png' },
          { name: 'Select Switch SC-510',   img: 'assets/all.png' },
          { name: 'Select Switch SC-511',   img: 'assets/all.png' },
          { name: 'Select Switch SC-512',   img: 'assets/all.png' },
          { name: 'Select Switch SC-513',   img: 'assets/all.png' },
        ]
      },
    ],
    tables: []
  },

  /* ═══════════════════════════════════════════════
     SECTION 5 — TOOLS, FITTINGS, GAUGES, VALVES
  ═══════════════════════════════════════════════ */
  {
    id: 'tools-fittings',
    icon: '🔧',
    title: 'Tools, Fittings & Gauges',
    subtitle: 'Hand Tools, Copper/Brass Fittings, Gauges, EMI Filters & Valves',
    subsections: [
      {
        title: 'Tube Bender & Hand Tools',
        products: [
          { name: 'CT-95 Swaging Tool Bit',            img: 'assets/all.png' },
          { name: 'CT-96 Swaging Tool Bit',            img: 'assets/all.png' },
          { name: 'CT-122 Ratchet Wrench',             img: 'assets/all.png' },
          { name: 'CT-125 Lever Tube Bender',          img: 'assets/all.png' },
          { name: 'CT-193 Multi-Size Swaging Tool Set',img: 'assets/all.png' },
          { name: 'CT-201 Locking Pliers',             img: 'assets/all.png' },
          { name: 'CT-202 Pinch-Off Tool',             img: 'assets/all.png' },
          { name: 'CT-204 Flaring Tool',               img: 'assets/all.png' },
          { name: 'CT-207 Deburring Tool (Pen)',        img: 'assets/all.png' },
          { name: 'CT-208 Reamer (Plastic Body)',       img: 'assets/all.png' },
          { name: 'CT-209 Reamer (Metal Body)',         img: 'assets/all.png' },
          { name: 'CT-210 Deburring Tool + Blades',    img: 'assets/all.png' },
          { name: 'CT-351 Fin Comb',                   img: 'assets/all.png' },
          { name: 'CT-352 Cleaning Brush',             img: 'assets/all.png' },
          { name: 'CT-501 Inspection Mirror',          img: 'assets/all.png' },
          { name: 'CT-502 Inspection Mirror',          img: 'assets/all.png' },
          { name: 'CT-503 Telescoping Pick-Up Tool',   img: 'assets/all.png' },
          { name: 'CT-1104 Wire Stripper/Cutter',      img: 'assets/all.png' },
          { name: 'RCT-01 Capillary Tube Cutter',      img: 'assets/all.png' },
          { name: 'ST-22 Hand-Held Tube Expander',     img: 'assets/all.png' },
        ]
      },
      {
        title: 'EMI Filter',
        products: [
          { name: 'EMI Filter R05-09 (5A/9mH)',   img: 'assets/all.png' },
          { name: 'EMI Filter R10-05 (10A/5mH)',  img: 'assets/all.png' },
          { name: 'EMI Filter R10-15 (10A/15mH)', img: 'assets/all.png' },
          { name: 'EMI Filter R12-05 (12A/5mH)',  img: 'assets/all.png' },
          { name: 'EMI Filter R12-30 (12A/30mH)', img: 'assets/all.png' },
          { name: 'EMI Filter R13-10 (13A/10mH)', img: 'assets/all.png' },
          { name: 'EMI Filter R18-02 (18A/2mH)',  img: 'assets/all.png' },
          { name: 'EMI Filter R18-05 (18A/5mH)',  img: 'assets/all.png' },
          { name: 'EMI Filter R18-14 (18A/14mH)', img: 'assets/all.png' },
          { name: 'EMI Filter R22-05 (22A/3mH)',  img: 'assets/all.png' },
          { name: 'EMI Filter R22-45 (25A/4.5mH)',img: 'assets/all.png' },
          { name: 'EMI Filter R28-05 (28A/5mH)',  img: 'assets/all.png' },
          { name: 'EMI Filter R50-05 (50A/5mH)',  img: 'assets/all.png' },
          { name: 'EMI Filter R50-15 (50A/1.5mH)',img: 'assets/all.png' },
        ]
      },
      {
        title: 'Brass Fittings',
        products: [
          { name: 'Brass Female Tee',           img: 'assets/all.png' },
          { name: 'Brass Reduce Tee',           img: 'assets/all.png' },
          { name: 'Brass Female Reduce Tee',    img: 'assets/all.png' },
          { name: 'Brass Male Tee',             img: 'assets/all.png' },
          { name: 'Brass Swivel Tee',           img: 'assets/all.png' },
          { name: 'Brass 90 Degrees Male Elbow',          img: 'assets/all.png' },
          { name: 'Brass Flare Union',          img: 'assets/all.png' },
          { name: 'Brass Half Union',           img: 'assets/all.png' },
          { name: 'Brass 90 Degree Female Copper Elbow',            img: 'assets/all.png' },
          { name: 'Brass 90 Degree Female Reducing ELBOW',    img: 'assets/all.png' },
          { name: 'Brass Male-Copper Connector',img: 'assets/all.png' },
          { name: 'Brass 90 Degree Female Elbow',         img: 'assets/all.png' },
          { name: 'Brass Female Reduce Elbow',  img: 'assets/all.png' },
          { name: 'Brass 90 Degree Male Reduce connector',  img: 'assets/all.png' },
          { name: 'Brass 45 Degree Female Elbow',           img: 'assets/all.png' },
          { name: 'Brass Reducing Hex Adapter', img: 'assets/all.png' },
          { name: 'Brass Reducing Hex Nipple',  img: 'assets/all.png' },
          { name: 'Brass Reduce Female & Male Connector',             img: 'assets/all.png' },
        ]
      },
      {
        title: 'Copper Fittings',
        products: [
          { name: 'Copper 90° Elbow C×C',          img: 'assets/all.png' },
          { name: 'Copper 90° Elbow FT×C',         img: 'assets/all.png' },
          { name: 'Copper 45° Elbow C×C',          img: 'assets/all.png' },
          { name: 'Copper 45° Elbow FT×C',         img: 'assets/all.png' },
          { name: 'Copper Return Bend FT×C',       img: 'assets/all.png' },
          { name: 'Copper Adapter Male C×C',       img: 'assets/all.png' },
          { name: 'Copper Adapter Female C×C',     img: 'assets/all.png' },
          { name: 'Copper Coupling C×C',           img: 'assets/all.png' },
          { name: 'Copper Coupling FT×C',          img: 'assets/all.png' },
          { name: 'Copper Tee C×C×C',              img: 'assets/all.png' },
          { name: 'Copper Reducing Tee C×C×C',     img: 'assets/all.png' },
          { name: 'Copper Cross C×C×C×C',          img: 'assets/all.png' },
          { name: 'Copper Straight Coupling',      img: 'assets/all.png' },
          { name: 'Copper P-Trap',                 img: 'assets/all.png' },
          { name: 'Copper U-Bend',                 img: 'assets/all.png' },
          { name: 'Copper Pigtail Coupling',       img: 'assets/all.png' },
          { name: 'Copper Multi-Branch Header',    img: 'assets/all.png' },
          { name: 'Copper Multiple Branch Tee',    img: 'assets/all.png' },
        ]
      },
      {
        title: 'Gauges — Single, Manifold & Pressure',
        products: [
          { name: 'Single Gauge MG-L',      img: 'assets/all.png' },
          { name: 'Single Gauge MG-H',      img: 'assets/all.png' },
          { name: 'Single Gauge CT-466',    img: 'assets/all.png' },
          { name: 'Single Gauge CT-466A',   img: 'assets/all.png' },
          { name: 'Single Gauge CT-467',    img: 'assets/all.png' },
          { name: 'Single Gauge CT-L01',    img: 'assets/all.png' },
          { name: 'Single Gauge CT-L04',    img: 'assets/all.png' },
          { name: 'Manifold Gauge AT-536A', img: 'assets/all.png' },
          { name: 'Manifold Gauge AT-536B', img: 'assets/all.png' },
          { name: 'Manifold Gauge AT-536E', img: 'assets/all.png' },
          { name: 'Manifold Gauge AT-536H', img: 'assets/all.png' },
          { name: 'Manifold Gauge AT-536L', img: 'assets/all.png' },
          { name: 'Manifold Gauge AT-601A', img: 'assets/all.png' },
          { name: 'Manifold Gauge MG-2-R32',img: 'assets/all.png' },
          { name: 'Digital Manifold LMG-20A',img: 'assets/all.png' },
          { name: 'Digital Manifold LMG-20B',img: 'assets/all.png' },
          { name: 'Manifold Gauge AL-03A',  img: 'assets/all.png' },
          { name: 'Manifold Gauge AL-03B',  img: 'assets/all.png' },
          { name: 'Digital Test Kit SC-EXA',img: 'assets/all.png' },
          { name: 'Diagnostic Tool SC-EXB', img: 'assets/all.png' },
          { name: 'Service Kit SC-EXC',     img: 'assets/all.png' },
          { name: 'Vacuum Gauge VGW-MINI',  img: 'assets/all.png' },
          { name: 'Charging Hose',          img: 'assets/all.png' },
          { name: 'Valve Core Tool',        img: 'assets/all.png' },
          { name: 'Valve Core Remover',     img: 'assets/all.png' },
          { name: 'Pressure Gauge SC-A',    img: 'assets/all.png' },
          { name: 'Pressure Gauge SC-B',    img: 'assets/all.png' },
          { name: 'Pressure Gauge SC-C',    img: 'assets/all.png' },
          { name: 'Pressure Gauge SC-D',    img: 'assets/all.png' },
          { name: 'Pressure Gauge SC-E',    img: 'assets/all.png' },
          { name: 'Pressure Gauge SC-F',    img: 'assets/all.png' },
          { name: 'Pressure Gauge SC-G',    img: 'assets/all.png' },
          { name: 'Pressure Gauge SC-H',    img: 'assets/all.png' },
        ]
      },
      {
        title: 'Valves — Expansion, 4-Way, Ball & Service Valves',
        products: [
          { name: 'Expansion Valve Electronic', img: 'assets/all.png' },
          { name: 'Expansion Valve TH',         img: 'assets/all.png' },
          { name: 'Expansion Valve FRF-R134',   img: 'assets/all.png' },
          { name: 'Expansion Valve THW',        img: 'assets/all.png' },
          { name: 'Expansion Valve ERFW',       img: 'assets/all.png' },
          { name: 'Expansion Valve ERF',        img: 'assets/all.png' },
          { name: '4-Way Reversing Valve DHF-3',  img: 'assets/all.png' },
          { name: '4-Way Reversing Valve DHF-9',  img: 'assets/all.png' },
          { name: '4-Way Reversing Valve DHF-11', img: 'assets/all.png' },
          { name: '4-Way Reversing Valve DHF-20', img: 'assets/all.png' },
          { name: 'Ball Valve',                 img: 'assets/all.png' },
          { name: 'CO₂ Ball Valve',             img: 'assets/all.png' },
          { name: 'CO₂ Service Valve',          img: 'assets/all.png' },
          { name: 'CO₂ Check Valve',            img: 'assets/all.png' },
          { name: 'Solenoid Valve',             img: 'assets/all.png' },
          { name: 'Motorized Valve',            img: 'assets/all.png' },
          { name: 'Flow Switch',                img: 'assets/all.png' },
          { name: 'Service Valve',              img: 'assets/all.png' },
          { name: 'Right Angle Valve',          img: 'assets/all.png' },
          { name: 'Brass Filter',               img: 'assets/all.png' },
          { name: 'Female Gate Valve',          img: 'assets/all.png' },
          { name: 'Compressor Valve',           img: 'assets/all.png' },
          { name: 'Can Tap Valve CH-338',       img: 'assets/all.png' },
          { name: 'Can Tap Valve CH-339',       img: 'assets/all.png' },
          { name: 'Can Tap Valve CH-340',       img: 'assets/all.png' },
          { name: 'Can Tap Valve CH-341',       img: 'assets/all.png' },
          { name: 'Quick Joint GE-MK',          img: 'assets/all.png' },
          { name: 'Quick Joint GL-12AH',        img: 'assets/all.png' },
          { name: 'Quick Joint QC-12L',         img: 'assets/all.png' },
          { name: 'Quick Joint QC-156K',        img: 'assets/all.png' },
          { name: 'Sight Glass (Welding)',       img: 'assets/all.png' },
          { name: 'Sight Glass (Joining)',       img: 'assets/all.png' },
          { name: 'Charging Hose w/ Ball Valve SC-336A', img: 'assets/all.png' },
          { name: 'Charging Hose w/ Ball Valve SC-336B', img: 'assets/all.png' },
        ]
      }
    ],
    tables: [
      {
        afterSubsection: 1,
        title: 'EMI Filter — Specifications',
        html: `<table class="prod-table"><thead><tr><th>Type</th><th>Rated Current</th><th>Frequency</th><th>Inductance</th></tr></thead><tbody>
<tr><td>R05-09</td><td>5A</td><td>50Hz</td><td>9mH</td></tr>
<tr><td>R10-05</td><td>10A</td><td>50Hz</td><td>5mH</td></tr>
<tr><td>R10-15</td><td>10A</td><td>50Hz</td><td>15mH</td></tr>
<tr><td>R12-05</td><td>12A</td><td>50Hz</td><td>5mH</td></tr>
<tr><td>R12-30</td><td>12A</td><td>50Hz</td><td>30mH</td></tr>
<tr><td>R13-10</td><td>13A</td><td>50Hz</td><td>10mH</td></tr>
<tr><td>R18-02</td><td>18A</td><td>50Hz</td><td>2mH</td></tr>
<tr><td>R18-05</td><td>18A</td><td>50Hz</td><td>5mH</td></tr>
<tr><td>R18-03</td><td>18A</td><td>50Hz</td><td>3mH</td></tr>
<tr><td>R18-14</td><td>18A</td><td>50Hz</td><td>14mH</td></tr>
<tr><td>R22-45</td><td>22A</td><td>50Hz</td><td>4.5mH</td></tr>
<tr><td>R22-05</td><td>22A</td><td>50Hz</td><td>3mH</td></tr>
<tr><td>R28-05</td><td>28A</td><td>50Hz</td><td>5mH</td></tr>
<tr><td>R50-05</td><td>50A</td><td>50Hz</td><td>5mH</td></tr>
<tr><td>R50-15</td><td>50A</td><td>50Hz</td><td>1.5mH</td></tr>
</tbody></table>`
      },
      {
        afterSubsection: 5,
        title: '4-Way Reversing Valve — Specifications',
        html: `<table class="prod-table"><thead><tr><th>Model</th><th>Port Dia (mm)</th><th>Conn D (mm)</th><th>Conn E.S.C (mm)</th><th>Min ΔP (MPa)</th><th>Max ΔP (MPa)</th><th>Match HP</th></tr></thead><tbody>
<tr><td>DHF-3</td><td>φ7.94</td><td>φ7.94</td><td>φ9.52</td><td>0.25</td><td>2.5</td><td>0.75–1.5</td></tr>
<tr><td>DHF-9</td><td>φ11</td><td>φ9.32</td><td>φ12</td><td>0.25</td><td>2.5</td><td>2–3</td></tr>
<tr><td>DHF-11</td><td>φ11.5</td><td>φ9.32</td><td>φ16</td><td>0.34</td><td>2.5</td><td>2.5–4</td></tr>
<tr><td>DHF-20</td><td>φ15.5</td><td>φ12</td><td>φ19</td><td>0.34</td><td>2.5</td><td>4–8</td></tr>
</tbody></table>
<table class="prod-table" style="margin-top:16px"><thead><tr><th colspan="3">Handle Valves (Welding) — Connect OD</th></tr><tr><th>Model</th><th>Connect OD</th><th>—</th></tr></thead><tbody>
<tr><td>SC12M-04-06</td><td>3/8"</td><td></td></tr>
<tr><td>SC15M-04-06</td><td>5/8"</td><td></td></tr>
<tr><td>SC12H-04-06</td><td>1/2"</td><td></td></tr>
<tr><td>SC12M-01-06</td><td>1/8"</td><td></td></tr>
</tbody></table>
<table class="prod-table" style="margin-top:16px"><thead><tr><th colspan="3">Flaring Handle Valves</th></tr><tr><th>Model</th><th>Connect OD</th><th>Flaring Nuts</th></tr></thead><tbody>
<tr><td>SC15H-04-06</td><td>3/8"</td><td>1-1/16"</td></tr>
<tr><td>SE15H-02-06</td><td>5/8"</td><td>3/4"</td></tr>
<tr><td>SC13H-02-03</td><td>3/8"</td><td>3/8"</td></tr>
<tr><td>SC11H-02-02</td><td>1/4"</td><td>7/16"</td></tr>
</tbody></table>`
      }
    ]
  }
];

/* ─── RENDER ENGINE ─────────────────────────────── */
function buildCatalogue() {
  const container = document.getElementById('cat-content');
  if (!container) return;

  CATALOGUE.forEach(section => {
    const secEl = document.createElement('div');
    secEl.className = 'cat-section';
    secEl.id = section.id;

    let html = `<div class="cat-sec-header">
      <span class="cat-sec-icon">${section.icon}</span>
      <div>
        <h2>${section.title}</h2>
        <p>${section.subtitle}</p>
      </div>
    </div>`;

    section.subsections.forEach((sub, si) => {
      html += `<div class="cat-subsection">
        <h3 class="sub-title">${sub.title}</h3>
        <div class="prod-grid">`;

      sub.products.forEach(prod => {
        const wa = `sendWhatsApp('${prod.name.replace(/'/g,"\\'")}', '${section.title.replace(/'/g,"\\'")}')`;
        html += `<div class="prod-card" onclick="${wa}" title="Enquire about ${prod.name}">
          <div class="prod-img-box">
            <img src="${prod.img}" alt="${prod.name}" loading="lazy" onerror="this.style.opacity=0">
            <div class="prod-img-placeholder">
              <span>${section.icon}</span>
              <small>Add Image</small>
            </div>
          </div>
          <div class="prod-info">
            <div class="prod-name">${prod.name}</div>
            <div class="prod-wa-hint">📲 Tap to Enquire</div>
          </div>
        </div>`;
      });

      html += `</div></div>`; // close prod-grid & subsection

      // Inject table after this subsection if one exists
      const tbl = section.tables.find(t => t.afterSubsection === si);
      if (tbl) {
        html += `<div class="table-block">
          <div class="table-block-title">${tbl.title}</div>
          <div class="table-wrap">${tbl.html}</div>
        </div>`;
      }
    });

    secEl.innerHTML = html;
    container.appendChild(secEl);
  });
}

/* ─── SIDEBAR NAV ───────────────────────────────── */
function buildSidebar() {
  const sidebar = document.getElementById('cat-sidebar-list');
  if (!sidebar) return;

  CATALOGUE.forEach(section => {
    const li = document.createElement('li');
    li.innerHTML = `<a href="#${section.id}" class="sidebar-link" data-id="${section.id}">
      <span class="sb-icon">${section.icon}</span>
      <span>${section.title}</span>
    </a>`;
    sidebar.appendChild(li);
  });
}

/* ─── ACTIVE LINK ON SCROLL ─────────────────────── */
function initScrollSpy() {
  const links = document.querySelectorAll('.sidebar-link');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        links.forEach(l => l.classList.remove('active'));
        const active = document.querySelector(`.sidebar-link[data-id="${e.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { threshold: 0.15, rootMargin: '-80px 0px -40% 0px' });

  document.querySelectorAll('.cat-section').forEach(s => observer.observe(s));
}

/* ─── SEARCH ────────────────────────────────────── */
function initSearch() {
  const input = document.getElementById('cat-search');
  if (!input) return;
  input.addEventListener('input', () => {
    const q = input.value.toLowerCase().trim();
    document.querySelectorAll('.prod-card').forEach(card => {
      const name = card.querySelector('.prod-name').textContent.toLowerCase();
      card.style.display = name.includes(q) ? '' : 'none';
    });
    document.querySelectorAll('.cat-subsection').forEach(sub => {
      const visible = [...sub.querySelectorAll('.prod-card')].some(c => c.style.display !== 'none');
      sub.style.display = visible ? '' : 'none';
    });
    document.querySelectorAll('.cat-section').forEach(sec => {
      const visible = [...sec.querySelectorAll('.cat-subsection')].some(s => s.style.display !== 'none');
      sec.style.display = visible ? '' : 'none';
    });
  });
}

/* ─── MOBILE SIDEBAR TOGGLE ─────────────────────── */
function initMobileSidebar() {
  const sidebar = document.getElementById('cat-sidebar');
  const openButton = document.getElementById('sidebar-open');
  const closeButton = document.getElementById('sidebar-close');
  if (!sidebar || !openButton || !closeButton) return;

  // Create a real overlay div for reliable touch/click handling
  let overlay = document.getElementById('sidebar-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'sidebar-overlay';
    overlay.setAttribute('aria-hidden', 'true');
    document.body.appendChild(overlay);
  }

  const setSidebarState = isOpen => {
    sidebar.classList.toggle('open', isOpen);
    openButton.classList.toggle('active', isOpen);
    openButton.setAttribute('aria-expanded', String(isOpen));
    overlay.classList.toggle('active', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  };

  openButton.setAttribute('aria-expanded', 'false');
  openButton.addEventListener('click', () => {
    setSidebarState(!sidebar.classList.contains('open'));
  });
  closeButton.addEventListener('click', () => {
    setSidebarState(false);
  });
  // Tap overlay to close
  overlay.addEventListener('click', () => setSidebarState(false));
  overlay.addEventListener('touchstart', (e) => {
    e.preventDefault();
    setSidebarState(false);
  }, { passive: false });

  sidebar.querySelectorAll('.sidebar-link').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 900) setSidebarState(false);
    });
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) {
      setSidebarState(false);
    }
  });
}

/* ─── INIT ──────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  buildSidebar();
  buildCatalogue();
  initScrollSpy();
  initSearch();
  initMobileSidebar();
});
