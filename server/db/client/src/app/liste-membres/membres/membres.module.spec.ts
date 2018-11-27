import { MembresModule } from './membres.module';

describe('MembresModule', () => {
  let membresModule: MembresModule;

  beforeEach(() => {
    membresModule = new MembresModule();
  });

  it('should create an instance', () => {
    expect(membresModule).toBeTruthy();
  });
});
