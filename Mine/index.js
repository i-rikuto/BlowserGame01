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

    g.width = 100;
    g.height = 100;
    g.x = 0;
    g.y = 0;
    let count = 0;
    let _h = 200, hs = 1;
    let _w = 200, ws = 2;
    let rect;
    //setInterval(() => {
    move = (w, h) => {
        if (_w + w >= 500 || _w + w <= 0) {
            return;
        }
        if (_h + h >= 500 || _h + h <= 0) {
            return;
        }
        _w += w;
        _h += h;
        g.clear();
        g.beginFill(0xff0000);
        g.drawRect(_w, _h, 100, 100);//四角形
        g.endFill();
        rect = new PIXI.Rectangle(_w, _h, 100, 100);
        g.hitArea = rect;
    }
    //g.clear();
    //g.beginFill(0xff0000);
    //g.drawRect(w, h, 100, 100);//四角形
    //g.drawRect(120, 12, 64, 96);
    //g.endFill();


    const p = new PIXI.Text(count, style);
    p.anchor.set(0.5, 0.5);
    p.position.set(500, 500);
    app.stage.addChild(p);
    //}, 10);

    g.interactive = true;

    g.on('click', function () {
        count++;
        console.log('click');
    });

    g.on('pointerdown', (event) => {
        console.log("A");
        //g.position.set(300, 300);
        //const pos = event.data.getLocalPosition(event.currentTarget);
        //p.postion.set(pos.x, pos.y);
    });
    const data = [160, 130, 200, 200, 120, 180];//多角形
    g.drawPolygon(data);




    let keyFlag = 0;
    let W_Key, A_Key, S_Key, D_Key;
    W_Key = A_Key = S_Key = D_Key = false;
    function downHandler(event) {
        switch (event.key) {
            case 'd':
                keyFlag = 1;
                D_Key = true;
                break;
            case 'a':
                keyFlag = 2;
                A_Key = true;
                break;
            case 's':
                keyFlag = 3;
                S_Key = true;
                break;
            case 'w':
                keyFlag = 4;
                W_Key = true;
                break;
        }

    }

    // upHandlerを定義
    function upHandler(event) {
        switch (event.key) {
            case 'd':
                keyFlag = 1;
                D_Key = false;
                break;
            case 'a':
                keyFlag = 2;
                A_Key = false;
                break;
            case 's':
                keyFlag = 3;
                S_Key = false;
                break;
            case 'w':
                keyFlag = 4;
                W_Key = false;
                break;
        }
    }

    app.ticker.add(update);
    function update() {
        if (D_Key) {
            move(3, 0);
        }
        if (A_Key) {
            move(-3, 0);
        }
        if (S_Key) {
            move(0, 3);
        }
        if (W_Key) {
            move(0, -3);
        }

    }

    window.addEventListener("keydown", (event) => { downHandler(event) }, false);
    window.addEventListener("keyup", (event) => { upHandler(event) }, false);




}

