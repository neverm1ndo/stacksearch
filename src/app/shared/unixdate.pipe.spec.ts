import { UnixdatePipe } from './unixdate.pipe';

describe('UnixdatePipe', () => {
  const pipe = new UnixdatePipe();
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
});
