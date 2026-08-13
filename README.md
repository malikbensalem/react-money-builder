# React Money Builder

A React and Vite calculator that projects savings growth using an annual interest rate.

## Features

- Enter starting savings, annual interest, and years saved.
- Calculate the projected amount for each year.
- View yearly growth and the final total.
- Reset the calculator to its default values.

## Tech Stack

- React
- Vite
- Tailwind CSS

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL printed by Vite, usually <http://localhost:5173>.

## Other Commands

```bash
npm run build    # Create a production build
npm run preview  # Preview the production build
npm run lint     # Run ESLint
```

## Calculation

The calculator applies the annual rate once per year. For each year, it calculates:

```text
new amount = current amount * (1 + annual interest / 100)
```

The displayed values are rounded to two decimal places.
