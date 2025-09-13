import { useEffect } from "react";

// src/pages/PriceListPage.jsx
export default function PriceListPage() {
  const priceList = [
    { name: "NEW AYLA 1.0 M MT", price: "2.245.800" },
    { name: "NEW AYLA 1.0 X MT", price: "2.406.700" },
    { name: "NEW AYLA 1.0 X MT ADS", price: "2.493.300" },
    { name: "NEW AYLA 1.0 X CVT", price: "2.700.300" },
    { name: "NEW AYLA 1.0 X CVT ADS", price: "2.787.000" },
    { name: "NEW AYLA 1.2 R MT", price: "2.584.300" },
    { name: "NEW AYLA 1.2 R MT ADS", price: "2.671.000" },
    { name: "NEW AYLA 1.2 R CVT", price: "2.878.000" },
    { name: "NEW AYLA 1.2 R CVT ADS", price: "2.964.600" },
    { name: "SIGRA 1.0 D MT MC", price: "2.276.300" },
    { name: "SIGRA 1.0 M MT MC", price: "2.429.400" },
    { name: "SIGRA 1.2 X MT MC", price: "2.484.500" },
    { name: "SIGRA 1.2 X MT DLX MC", price: "2.566.700" },
    { name: "SIGRA 1.2 X AT MC", price: "2.679.800" },
    { name: "SIGRA 1.2 X AT DLX MC", price: "2.760.500" },
    { name: "SIGRA 1.2 R MT MC", price: "2.582.900" },
    { name: "SIGRA 1.2 R MT DLX MC", price: "2.638.700" },
    { name: "SIGRA 1.2 R AT MC", price: "2.800.200" },
    { name: "SIGRA 1.2 R AT DLX MC", price: "2.856.000" },
    { name: "ALL NEW XENIA 1.3 M MT", price: "3.439.700" },
    { name: "ALL NEW XENIA 1.3 X MT", price: "3.728.400" },
    { name: "ALL NEW XENIA 1.3 X CVT", price: "3.648.200" },
    { name: "ALL NEW XENIA 1.3 R MT", price: "3.767.900" },
    { name: "ALL NEW XENIA 1.3 R MT ADS", price: "3.670.200" },
    { name: "ALL NEW XENIA 1.3 R MT SC", price: "3.789.800" },
    { name: "ALL NEW XENIA 1.3 R MT SC ADS", price: "3.890.800" },
    { name: "ALL NEW XENIA 1.3 R CVT", price: "4.022.400" },
    { name: "ALL NEW XENIA 1.3 R CVT ADS", price: "3.912.700" },
    { name: "ALL NEW XENIA 1.3 R CVT SC", price: "4.044.400" },
    { name: "ALL NEW XENIA 1.3 R CVT SC ADS", price: "3.886.400" },
    { name: "ALL NEW XENIA 1.5 R MT", price: "4.018.000" },
    { name: "ALL NEW XENIA 1.5 R MT ADS", price: "3.908.300" },
    { name: "ALL NEW XENIA 1.5 R MT SC", price: "4.040.000" },
    { name: "ALL NEW XENIA 1.5 R MT SC ADS", price: "4.097.000" },
    { name: "ALL NEW XENIA 1.5 R CVT", price: "4.230.200" },
    { name: "ALL NEW XENIA 1.5 R CVT ADS", price: "4.119.000" },
    { name: "ALL NEW XENIA 1.5 R CVT SC", price: "4.252.100" },
    { name: "ALL NEW XENIA 1.5 R CVT SC ADS", price: "4.241.900" },
    { name: "ALL NEW XENIA 1.5 R CVT ASA", price: "4.263.800" },
    { name: "ALL NEW XENIA 1.5 R CVT ASA SC", price: "4.424.700" },
    { name: "NEW TERIOS X MT MC", price: "3.829.300" },
    { name: "NEW TERIOS X MT ADS MC", price: "4.004.100" },
    { name: "NEW TERIOS X AT MC", price: "3.988.800" },
    { name: "NEW TERIOS X AT ADS MC", price: "4.163.600" },
    { name: "NEW TERIOS R MT MC", price: "4.233.100" },
    { name: "NEW TERIOS R MT ADS MC", price: "4.379.400" },
    { name: "NEW TERIOS R AT MC", price: "4.392.600" },
    { name: "NEW TERIOS R AT ADS MC", price: "4.538.900" },
    { name: "NEW TERIOS R MT CUSTOM MC", price: "4.566.600" },
    { name: "NEW TERIOS R AT CUSTOM MC", price: "4.726.100" },
    { name: "ROCKY 1.2 M MT", price: "3.253.200" },
    { name: "ROCKY 1.2 M MT SC", price: "3.275.200" },
    { name: "ROCKY 1.2 M CVT", price: "3.516.000" },
    { name: "ROCKY 1.2 M CVT SC", price: "3.538.000" },
    { name: "ROCKY 1.2 X MT", price: "3.460.200" },
    { name: "ROCKY 1.2 X MT ADS", price: "3.579.200" },
    { name: "ROCKY 1.2 X MT SC", price: "3.482.200" },
    { name: "ROCKY 1.2 X MT ADS SC", price: "3.601.200" },
    { name: "ROCKY 1.2 X CVT", price: "3.709.400" },
    { name: "ROCKY 1.2 X CVT ADS", price: "3.827.900" },
    { name: "ROCKY 1.2 X CVT SC", price: "3.731.300" },
    { name: "ROCKY 1.2 X CVT ADS SC", price: "3.849.800" },
    { name: "ROCKY 1.0 R TC MT", price: "3.775.200" },
    { name: "ROCKY 1.0 R TC MT SC", price: "3.797.100" },
    { name: "ROCKY 1.0 R TC MT TWO TONE", price: "3.811.800" },
    { name: "ROCKY 1.0 R TC MT TWO TONE SC", price: "3.826.400" },
    { name: "ROCKY 1.0 R TC MT ADS", price: "3.893.700" },
    { name: "ROCKY 1.0 R TC MT ADS SC", price: "3.915.600" },
    { name: "ROCKY 1.0 R TC MT ADS TWO TONE", price: "3.930.300" },
    { name: "ROCKY 1.0 R TC MT ADS TWO TONE SC", price: "3.944.900" },
    { name: "ROCKY 1.0 R TC CVT", price: "3.994.600" },
    { name: "ROCKY 1.0 R TC CVT SC", price: "4.016.600" },
    { name: "ROCKY 1.0 R TC CVT TWO TONE", price: "4.031.200" },
    { name: "ROCKY 1.0 R TC CVT TWO TONE SC", price: "4.045.800" },
    { name: "ROCKY 1.0 R TC CVT ADS", price: "4.113.100" },
    { name: "ROCKY 1.0 R TC CVT ADS SC", price: "4.135.100" },
    { name: "ROCKY 1.0 R TC CVT ADS TWO TONE", price: "4.149.700" },
    { name: "ROCKY 1.0 R TC CVT ADS TWO TONE SC", price: "4.164.300" },
    { name: "ROCKY 1.0 R TC CVT ASA", price: "4.139.500" },
    { name: "ROCKY 1.0 R TC CVT ASA SC", price: "4.161.400" },
    { name: "ROCKY 1.0 R TC CVT ASA TWO TONE", price: "4.176.000" },
    { name: "ROCKY 1.0 R TC CVT ASA TWO TONE SC", price: "4.190.700" },
    { name: "ROCKY 1.0 R TC CVT ASA+ SC", price: "4.322.300" },
  ];


  // Bagi dua untuk 2 kolom
  const mid = Math.ceil(priceList.length / 2);
  const leftCol = priceList.slice(0, mid);
  const rightCol = priceList.slice(mid);

  useEffect(() => {
    const main = document.getElementById("main-content");
    if (main) {
      main.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <div className="py-12 px-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-10 text-center">Price List</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Tabel kiri */}
        <table className="w-full border">
          <thead>
            <tr className="bg-red-600 text-white">
              <th className="px-4 py-2 text-left">Tipe Unit</th>
              <th className="px-4 py-2 text-left">Angsuran</th>
            </tr>
          </thead>
          <tbody>
            {leftCol.map((item, i) => (
              <tr key={i} className="border-b">
                <td className="px-4 py-2">{item.name}</td>
                <td className="px-4 py-2 font-semibold">{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Tabel kanan */}
        <table className="w-full border">
          <thead>
            <tr className="bg-red-600 text-white">
              <th className="px-4 py-2 text-left">Tipe Unit</th>
              <th className="px-4 py-2 text-left">Angsuran</th>
            </tr>
          </thead>
          <tbody>
            {rightCol.map((item, i) => (
              <tr key={i} className="border-b">
                <td className="px-4 py-2">{item.name}</td>
                <td className="px-4 py-2 font-semibold">{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
