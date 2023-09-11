module.exports = {
  format_data: (date) => {
    return `${Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(
      date,
    ).getFullYear()}`;
  },
};
