const getDeadlineFormat = (date) =>
{
  if (!date) return ''
  const day = 86400000;
  const period = Math.abs(new Date().getTime() - new Date(date).getTime());
  if (period > day * 7) return getDateFormat(date);
  return Math.ceil(period / day) - 1 + " días";
}

const getDateInput = data =>{
  if (!data) return '';
  let date = new Date(data);
  let res = `${date.getFullYear()}-${f(date.getMonth())}-${f(date.getDate())}T${f(date.getHours())}:${f(date.getMinutes())}:${f(date.getSeconds())}`

  function f(num){
    return ("0" + num).slice(-2);
   }
  return res;
}


const getDateFormat = (date) =>
{
  if (!date) return '';
  const monthNames = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
  return `${new Date(date).getDate()} ${monthNames[new Date(date).getMonth()]}`;
}

export { getDeadlineFormat, getDateFormat }