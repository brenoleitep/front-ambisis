
export const normalizes = () => {
  const normalizeCnpjNumber = (value: String | undefined) => {
    if (!value) return ''
    
    return value.replace(/[\D]/g, '')
        .replace(/(\d{2})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1/$2')
        .replace(/(\d{4})(\d)/, '$1-$2')
        .replace(/(-\d{2})\d+?$/, '$1')
    }

    const normalizeCepNumber = (value: String | undefined) => {
        if (!value) return ''
        return value.replace(/\D/g, "")
        .replace(/^(\d{5})(\d{3})+?$/, "$1-$2")
        .replace(/(-\d{3})(\d+?)/, '$1')    
    }

    const normalizeDate = (value: string | undefined) => {
  if (!value) return '';

  // Remove caracteres não numéricos
  const cleanedValue = value.replace(/\D/g, '');

  // Obtém apenas os números para dia, mês e ano
  const day = cleanedValue.slice(0, 2);
  const month = cleanedValue.slice(2, 4);
  const year = cleanedValue.slice(4, 8);

  // Monta a data no formato DD/MM/YYYY
  return `${day}-${month}-${year}`;
};

  return {
    normalizeDate,
    normalizeCnpjNumber,
    normalizeCepNumber
  }
}

