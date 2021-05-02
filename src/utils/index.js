// Formatting Rp currency
export const formatCurrency = (value) => {
  let string = value.toString();
  let sisa = string.length % 3;
  let rupiah = string.substr(0, sisa);
  let ribuan = string.substr(sisa).match(/\d{3}/g);

  if (ribuan) {
    let separator = sisa ? '.' : '';
    return (rupiah += separator + ribuan.join('.'));
  }
};

// Formatting Indonesian date
export const formatDate = (value) => {
  let string = value.toString();
  let date = string.split(' ')[0];
  let year = parseInt(date.split('-')[0]);
  let month = parseInt(date.split('-')[1] - 1);
  let day = parseInt(date.split('-')[2]);

  const months = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ];

  let newDate = `${day.toString()} ${months[
    month
  ].toString()} ${year.toString()}`;
  return newDate;
};

// Counting sum of amount
export const countTotal = (value) => {
  let total = 0;
  value.map((val) => {
    return (total += val.amount);
  });
  return total;
};

// Sorting
export const sortAsc = (arr, field) => {
  return arr.sort(function (a, b) {
    if (a[field] > b[field]) {
      return 1;
    }
    if (b[field] > a[field]) {
      return -1;
    }
    return 0;
  });
};

export const sortDesc = (arr, field) => {
  return arr.sort(function (a, b) {
    if (a[field] > b[field]) {
      return -1;
    }
    if (b[field] > a[field]) {
      return 1;
    }
    return 0;
  });
};
