window.onload = () => {
    const app = new PIXI.Application({
        width: 600,
        height: 600,
        backgroundColor: 0x222222,
        resolution: 1,
        autoDensity: true
    });
    document.body.appendChild(app.view);


    const style = new PIXI.TextStyle({
        fontFamily: 'sans-serif',
        fontSize: 32,
        fill: 0xffffff,
        fontWeight: 'bold',
        stroke: 0xFF0000,//縁取りの色
        strokeThickness: 4,//縁取りの太さ
    });



    const g = new PIXI.Graphics();//図形
    app.stage.addChild(g);

    g.lineStyle(4, 0xffffff, 1);//線を引く(太さ、色、透明度)
    g.moveTo(10, 10);//始点
    g.lineTo(100, 100);//終点

    g.beginFill(0xff0000);
    g.drawCircle(1, 1, 32);//円
    g.endFill();
    let count = 0;
    let h = 101, hs = 1;
    let w = 102, ws = 2;
    let rect;
    setInterval(() => {

        g.clear();
        g.beginFill(0xff0000);
        g.drawRect(w, h, 100, 100);//四角形
        //g.drawRect(120, 12, 64, 96);
        g.endFill();
        rect = new PIXI.Rectangle(w, h, w + 100, h + 100);
        g.hitArea = rect;
        if (w === 500 || w === 0) {
            ws *= -1;
        }
        if (h === 500 || h === 0) {
            hs *= -1;
        }
        w += ws;
        h += hs;
        const p = new PIXI.Text(count, style);
        p.anchor.set(0.5, 0.5);
        p.position.set(500, 500);
        app.stage.addChild(p);
    }, 10);

    g.interactive = true;

    g.on('click', function () {
        count++;
        console.log('click');
    });
    const data = [160, 130, 200, 200, 120, 180];//多角形
    g.drawPolygon(data);

    // const Fox = [
    //     "test.json",
    //     "Fox_New.png"
    // ];

    // //g.clear();
    // PIXI.Loader.shared.add(Fox).load(() => {
    //     const _texture = PIXI.Loader.shared.resources['test.json'].texture['player'];
    //     //const _frame = new PIXI.Texture(_texture, new PIXI.Rectangle(0, 0, 320, 320));
    //     const _player = new PIXI.Sprite(_texture);
    //     app.stage.addChild(_player)
    // })






    // PIXI.Loader.shared
    //     .add(Fox)
    //     .load(() => {
    //         const texture = PIXI.Loader.shared.resources["test.json"].texture["player"];
    //         const player = new PIXI.Sprite(texture);
    //         app.stage.addChild(player);
    //     });

    // this.on('pointerdown', (event) => {
    //     const pos = event.data.getLocalPosition(event.currentTarget);
    //     ball.postion.set(pos.x, pos.y);
    // });

    // app.ticker.add((delta) => {
    //     //ここに処理を書く
    // });
}