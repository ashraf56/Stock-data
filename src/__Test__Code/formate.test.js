import formatDate from "../components/util/fromateDate";

describe('formatDate', () => {
  test('formats a timestamp into a short date', () => {
    const timestamp = new Date('2023-01-15').getTime();
    const formattedDate = formatDate(timestamp);
    expect(formattedDate).toEqual('Jan 2023');
  });
});
