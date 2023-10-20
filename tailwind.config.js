/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#38415b",
        secondary: "#f6bd70",
        back: "#000E28"
      },
      height: {
        "120": "24rem",
        "140": "28rem",
        "100": "20rem",
        "160": "32rem",
        "180": "36rem",
        "200": "40rem",
        "screen-1/2": "50vh",
      },
      width: {
        "100": "20rem",
        "120": "24rem",
        "140": "28rem",
        "160": "32rem",
        "180": "36rem",
        "200": "40rem",
      },
      backgroundImage: {
        'solarPanel': "url('/src/assets/solarPanel.jpeg')",
        'solarPanel2': "url('/src/assets/solarPanel2.jpg')",
        'solarPanel3': "url('/src/assets/solarPanel3.jpg')",
        'solarPanel4': "url('/src/assets/solarPanel4.jpg')",
        'worker1': "url('/src/assets/worker1.jpg')",
        'worker2': "url('/src/assets/worker2.jpg')",
        'worker3': "url('/src/assets/worker3.jpg')",
        'worker4': "url('/src/assets/worker4.jpg')",
        'worker5': "url('/src/assets/worker5.jpg')",
        'worker6': "url('/src/assets/worker6.jpg')",
        'customer': "url('/src/assets/customer.jpeg')",
        'background': "url('/src/assets/bg.jpg')",
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]

}

