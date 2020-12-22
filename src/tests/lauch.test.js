import { Application } from 'spectron';

describe('launch app', () => {
  jest.setTimeout(20000);
  const app = new Application({
    path: 'dist/display 0.1.0.exe'
  });

  beforeEach(async () => {
    await app.start();
    //await app.start().catch(console.log); // this will ignore the error but endup application not working correctly as it not closing as start is failed
  })

  afterEach(async () => {
    if(app.isRunning()){
      app.stop();
    }
  });
  it("see it works", async () => {
    const count = await app.client.getWindowCount();
    expect(count).toEqual(1);
  });

  it("check title", async () => {
    const title = await app.client.getTitle();
    return expect(title).toBe('Menu Display');
  }); 
});