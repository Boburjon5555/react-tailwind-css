/** @type {import('tailwindcss').Config} */
module.exports = { 
  
  content: ["./src/**/*.{js,jsx,ts,tsx,}",], 
  theme: {   
    
      
    spacing: {    
                   
      sm: '8px',
      md: '12px',
      lg: '16px',
      xl: '24px',   
      
      '1': '8px',
      '2': '12px',
      '3': '16px',
      '4': '24px',
      '5': '32px',
      '6': '48px',  

      px: '1px',
      0: '0',
      0.5: '0.125rem',
      1: '0.25rem',
      1.5: '0.375rem',
      2: '0.5rem',
      2.5: '0.625rem',
      3: '0.75rem',
      3.5: '0.875rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
      11: '2.75rem',
      12: '3rem',
      14: '3.5rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
      28: '7rem',
      32: '8rem',
      36: '9rem',
      40: '10rem',
      44: '11rem',
      48: '12rem',
      52: '13rem',
      56: '14rem',
      60: '15rem',
      64: '16rem',
      72: '18rem',
      80: '20rem',
      96: '24rem',
    },
    extend: { 
    
      colors: {
        primary: '#00040f', 
        secondary: '#00f6ff', 
        lightwhite: 'rgb(255, 255, 255, 0.7 )', 
        lightblue: 'rgb(9, 151, 124, 0.1)', 
        'white': '#ffffff', 
        'purple': '#3f3cbb', 
        'Emerald': '#10b981',   /*500*/
        'Emerald': '#065f46',   /*800*/
        'Green':  '#22c55e', 
        'Green': '#86efac', 
        'Rose': '#f43f5e', 
         
      },
      fontfamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
  },
  screens: {
      xs: '480px', 
      ss: '680px', 
      sm: '768px', 
      md: '1060px', 
      lg: '1200px', 
      xl: '1700px',

  },
     
    plugins: [] ,
  },

}
