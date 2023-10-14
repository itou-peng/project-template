import { isOdd } from './is-odd';
import {isEven} from "@project-template/is-even";

describe('isOdd', () => {
  it('should work', () => {
    expect(isOdd()).toEqual('is-odd');
  });

  it('should success', () => {
    expect(isEven()).toEqual('is-even');
  });
});
