import { expect, test } from 'vitest';
import { formatDate } from '../../utils/formatDate';

test('date formats to Day Month Year', () => {
  expect(formatDate('2023-01-01T00:00:00.000Z')).to.eq('1 January 2023');
});
