import React, { useState, useEffect } from "react";

export default function SimuladorImobiliario() {
  const [dados, setDados] = useState({
    valorAvaliacao: 214000,
    fgts: 0,
    subsidio: 1961,
    financiamento: 171200,
    parcelaCaixa: 973.6,
    valorVenda: 220000,
    ato: 1000,
    mensais: 636.65,
    qtdMensais: 72,
    anuais: 0,
    qtdAnuais: 3
  });

  const totalEntrada = dados.ato + dados.mensais * dados.qtdMensais + dados.anuais * dados.qtdAnuais;
  const poupanca = totalEntrada;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDados({ ...dados, [name]: parseFloat(value) || 0 });
  };

  return (
    <div className="p-6 max-w-xl mx-auto space-y-6">
      <h1 className="text-xl font-bold">Simulação Caixa</h1>
      <div className="grid grid-cols-2 gap-4">
        <CampoInput label="Valor de Avaliação" name="valorAvaliacao" value={dados.valorAvaliacao} onChange={handleChange} />
        <CampoInput label="FGTS" name="fgts" value={dados.fgts} onChange={handleChange} />
        <CampoInput label="Subsídio" name="subsidio" value={dados.subsidio} onChange={handleChange} />
        <CampoInput label="Valor de Financiamento" name="financiamento" value={dados.financiamento} onChange={handleChange} />
        <CampoInput label="Parcela Caixa" name="parcelaCaixa" value={dados.parcelaCaixa} onChange={handleChange} />
        <CampoInput label="Valor de Venda" name="valorVenda" value={dados.valorVenda} onChange={handleChange} />
      </div>

      <h2 className="text-lg font-bold mt-8">Entrada Parcelada Construtora</h2>
      <div className="grid grid-cols-2 gap-4">
        <CampoValor label="Poupança (não editável)" value={poupanca} />
        <CampoInput label="Ato" name="ato" value={dados.ato} onChange={handleChange} />
        <CampoInput label="Mensais (valor)" name="mensais" value={dados.mensais} onChange={handleChange} />
        <CampoInput label="Qtd. de Mensais" name="qtdMensais" value={dados.qtdMensais} onChange={handleChange} />
        <CampoInput label="Anuais (valor)" name="anuais" value={dados.anuais} onChange={handleChange} />
        <CampoInput label="Qtd. de Anuais" name="qtdAnuais" value={dados.qtdAnuais} onChange={handleChange} />
        <CampoValor label="Total (não editável)" value={totalEntrada} />
      </div>
    </div>
  );
}

function CampoInput({ label, name, value, onChange }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">{label}</label>
      <input
        type="text"
        inputMode="decimal"
        name={name}
        value={value}
        onChange={onChange}
        className="w-full p-2 border rounded bg-green-100"
      />
    </div>
  );
}

function CampoValor({ label, value }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">{label}</label>
      <input
        type="text"
        value={`R$ ${value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`}
        readOnly
        className="w-full p-2 border rounded bg-red-100 text-right"
      />
    </div>
  );
}
