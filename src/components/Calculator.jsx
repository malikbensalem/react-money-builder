import React, { useState } from 'react'

function format(n){
  return n.toLocaleString(undefined, {minimumFractionDigits:2, maximumFractionDigits:2})
}

export default function Calculator(){
  const [initial, setInitial] = useState(1000)
  const [rate, setRate] = useState(5)
  const [years, setYears] = useState(10)
  const [rows, setRows] = useState([])

  function calculate(e){
    e && e.preventDefault()
    const r = parseFloat(rate)/100
    const y = Math.max(1, parseInt(years,10)||0)
    let amt = parseFloat(initial) || 0
    const out = []
    for(let i=1;i<=y;i++){
      const newAmt = +(amt*(1+r)).toFixed(2)
      const improvement = +(newAmt - amt).toFixed(2)
      out.push({year:i, amount:newAmt, improvement})
      amt = newAmt
    }
    setRows(out)
  }

  const finalTotal = rows.length ? rows[rows.length-1].amount : (parseFloat(initial)||0)

  return (
    <div>
      <form onSubmit={calculate} className="grid md:grid-cols-2 gap-4 items-end">
        <label className="flex flex-col text-sm">
          <span className="mb-1">Starting savings</span>
          <input className="border rounded px-2 py-1" type="number" value={initial} onChange={e=>setInitial(e.target.value)} step="0.01" min="0" />
        </label>
        <label className="flex flex-col text-sm">
          <span className="mb-1">Annual interest (%)</span>
          <input className="border rounded px-2 py-1" type="number" value={rate} onChange={e=>setRate(e.target.value)} step="0.01" />
        </label>
        <label className="flex flex-col text-sm">
          <span className="mb-1">Years saved</span>
          <input className="border rounded px-2 py-1" type="number" value={years} onChange={e=>setYears(e.target.value)} min="1" />
        </label>
        <div className="flex gap-2">
          <button className="bg-black text-white px-4 py-2 rounded" type="submit">Calculate</button>
          <button className="border px-4 py-2 rounded" type="button" onClick={()=>{setRows([]); setInitial(1000); setRate(5); setYears(10)}}>Reset</button>
        </div>
      </form>

      {rows.length>0 && (
        <div className="mt-6 overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="text-left bg-gray-100">
                <th className="p-2">Year</th>
                <th className="p-2">Total Amount</th>
                <th className="p-2">Improvement</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(r=> (
                <tr key={r.year} className="border-b">
                  <td className="p-2">{r.year}</td>
                  <td className="p-2 text-right">{format(r.amount)}</td>
                  <td className="p-2 text-right">{format(r.improvement)}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="font-semibold">
                <td className="p-2">Total</td>
                <td className="p-2 text-right">{format(finalTotal)}</td>
                <td className="p-2"></td>
              </tr>
            </tfoot>
          </table>
        </div>
      )}
    </div>
  )
}
