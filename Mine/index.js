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

    const p = new PIXI.Text("Hello World!", style);
    p.anchor.set(0.5, 0.5);
    p.position.set(300, 300);
    app.stage.addChild(p);

    const g = new PIXI.Graphics();//図形
    app.stage.addChild(g);

    g.lineStyle(4, 0xffffff, 1);//線を引く(太さ、色、透明度)
    g.moveTo(10, 10);//始点
    g.lineTo(100, 100);//終点

    g.beginFill(0xff0000);
    g.drawCircle(1, 1, 32);//円
    g.endFill();

    let h = 101, hs = 1;
    let w = 102, ws = 2;
    setInterval(() => {
        g.clear();
        g.beginFill(0xff0000);
        g.drawRect(w, h, 100, 100);//四角形
        //g.drawRect(120, 12, 64, 96);
        g.endFill();
        if (w === 500 || w === 0) {
            ws *= -1;
        }
        if (h === 500 || h === 0) {
            hs *= -1;
        }
        w += ws;
        h += hs;
    }, 10);


    const data = [160, 130, 200, 200, 120, 180];//多角形
    g.drawPolygon(data);

    //g.clear();
}