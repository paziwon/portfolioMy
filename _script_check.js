
// ── WINDOW DEFINITIONS ──────────────────
const D = {
  portfolio:{
    t:'My Portfolio — Paziwon',i:'💼',w:460,h:390,
    menu:false,tb:false,st:'Ready',
    html:()=>`<div class="pf">
      <div class="pf-top">
        <div class="pf-av">🧑‍💻</div>
        <div>
          <h2 style="margin-bottom:2px;">Paziwon</h2>
          <div style="color:#555;margin-bottom:7px;">JavaScript • React • Node.js • CSS • Python • Swift</div>
          <div><span class="tag">JavaScript</span><span class="tag">React</span><span class="tag">Node.js</span><span class="tag">CSS</span><span class="tag">Python</span><span class="tag">Swift</span></div>
        </div>
      </div>
      <p style="margin-top:6px;">
        <strong>Welcome to my portfolio.</strong>
        Here is my portfolio:
      </p>
      <h2 style="margin-top:12px;">About Me</h2>
      <p>
        I'm a game and web app developer passionate about both playing and
        building games. I'm always learning skills that matter for real life,
        constantly improving and staying curious. I'm also a barber, which
        reflects my hands-on creativity and discipline. I'm easy to work with,
        quick to learn, and always open to being taught.
      </p>
      <div style="margin-top:10px;display:flex;align-items:center;gap:10px;flex-wrap:wrap;">
        <a
          href="https://www.linkedin.com/posts/paziwon_you-nobody-asked-but-heres-my-ted-talk-ugcPost-7316915586637217792-EzYp?utm_source=share&utm_medium=member_desktop&rcm=ACoAADj_2RUBV1j5QfmG0erpikm1D-bhH7RBf3E"
          target="_blank"
          rel="noreferrer"
          style="display:inline-flex;align-items:center;gap:10px;color:#0A246A;text-decoration:none;font-weight:800;border:1px solid #316AC5;background:#fff;padding:8px 10px;border-radius:4px;"
          aria-label="Open LinkedIn portfolio link"
          >
          <span style="display:inline-grid;place-items:center;width:28px;height:28px;border-radius:6px;background:#0A66C2;color:#fff;font-size:13px;font-weight:900;box-shadow:inset 0 1px 0 #ffffff55;">
            in
          </span>
          Open LinkedIn
        </a>

        <a
          href="https://www.instagram.com/paziwon_?igsh=MWdxaGVqYXUyc3hzZg%3D%3D&utm_source=qr"
          target="_blank"
          rel="noreferrer"
          style="display:inline-flex;align-items:center;gap:10px;color:#5a1b1b;text-decoration:none;font-weight:800;border:1px solid #b03f6a;background:#fff;padding:8px 10px;border-radius:4px;"
          aria-label="Open Instagram portfolio link"
          >
          <span style="display:inline-grid;place-items:center;width:28px;height:28px;border-radius:6px;background:linear-gradient(135deg,#f58529 0%,#dd2a7b 35%,#515bd4 100%);color:#fff;font-size:13px;font-weight:900;box-shadow:inset 0 1px 0 #ffffff55;">
            ig
          </span>
          Open Instagram
        </a>
      </div>
      <div style="margin-top:10px;font-size:10px;color:#888;">
        💡 Click the LinkedIn button to open the portfolio.
      </div>
    </div>`
  },
  instagram:{
    t:'Instagram — Paziwon',i:'📸',w:520,h:280,
    menu:false,tb:false,st:'Ready',
    html:()=>`<div class="pf">
      <div class="pf-top">
        <div class="pf-av">📸</div>
        <div>
          <h2 style="margin-bottom:2px;">Instagram</h2>
          <div style="color:#555;margin-bottom:7px;">Follow me & see updates</div>
          <div><span class="tag">Portfolio</span><span class="tag">Posts</span><span class="tag">Behind the scenes</span></div>
        </div>
      </div>

      <p style="margin-top:6px;">
        <strong>Click below</strong> to open my Instagram page.
      </p>

      <div style="margin-top:10px;display:flex;align-items:center;gap:10px;flex-wrap:wrap;">
        <a
          href="https://www.instagram.com/paziwon_?igsh=MWdxaGVqYXUyc3hzZg%3D%3D&utm_source=qr"
          target="_blank"
          rel="noreferrer"
          style="display:inline-flex;align-items:center;gap:10px;color:#5a1b1b;text-decoration:none;font-weight:800;border:1px solid #b03f6a;background:#fff;padding:8px 10px;border-radius:4px;"
          aria-label="Open Instagram profile"
        >
          <span style="display:inline-grid;place-items:center;width:28px;height:28px;border-radius:6px;background:linear-gradient(135deg,#f58529 0%,#dd2a7b 35%,#515bd4 100%);color:#fff;font-size:13px;font-weight:900;box-shadow:inset 0 1px 0 #ffffff55;">
            ig
          </span>
          Open Instagram
        </a>
      </div>
    </div>`
  },
  word:{
    t:'Paziwon_Portfolio.doc — Microsoft Word',i:'📄',w:610,h:510,
    menu:['File','Edit','View','Insert','Format','Tools','Table','Window','Help'],
    tb:true,st:'Page 1 of 1  ·  Ln 1  Col 1  ·  REC  TRK  EXT  OVR',
    html:()=>`<div class="wr">
      <div class="w-ruler">1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8</div>
      <div class="w-pg">
        <div class="w-paper">
          <h1>Paziwon</h1>
          <div class="w-sub">Creative Developer & Digital Designer</div>
          <hr>
          <h2>About Me</h2>
          <p>Hi! I'm Paziwon — a passionate developer and designer who loves building things that live on the internet. I blend creativity and technical skill to craft memorable digital experiences that people actually enjoy using.</p>
          <h2>Tech Stack</h2>
          <div style="margin-bottom:10px;">
            <span class="tag">JavaScript</span>
            <span class="tag">React</span>
            <span class="tag">Node.js</span>
            <span class="tag">CSS</span>
            <span class="tag">Python</span>
            <span class="tag">Swift</span>
          </div>

          <h2>My Portfolio</h2>
          <p><strong>Welcome to my portfolio.</strong><br />Here is my portfolio:</p>
          <div style="margin-top:10px;display:flex;align-items:center;gap:10px;flex-wrap:wrap;">
            <a
              href="https://www.linkedin.com/posts/paziwon_you-nobody-asked-but-heres-my-ted-talk-ugcPost-7316915586637217792-EzYp?utm_source=share&utm_medium=member_desktop&rcm=ACoAADj_2RUBV1j5QfmG0erpikm1D-bhH7RBf3E"
              target="_blank"
              rel="noreferrer"
              style="display:inline-flex;align-items:center;gap:10px;color:#0A246A;text-decoration:none;font-weight:800;border:1px solid #316AC5;background:#fff;padding:8px 10px;border-radius:4px;"
              aria-label="Open LinkedIn portfolio link"
            >
              <span style="display:inline-grid;place-items:center;width:28px;height:28px;border-radius:6px;background:#0A66C2;color:#fff;font-size:13px;font-weight:900;box-shadow:inset 0 1px 0 #ffffff55;">
                in
              </span>
              Open LinkedIn
            </a>

            <a
              href="https://www.instagram.com/paziwon_?igsh=MWdxaGVqYXUyc3hzZg%3D%3D&utm_source=qr"
              target="_blank"
              rel="noreferrer"
              style="display:inline-flex;align-items:center;gap:10px;color:#5a1b1b;text-decoration:none;font-weight:800;border:1px solid #b03f6a;background:#fff;padding:8px 10px;border-radius:4px;"
              aria-label="Open Instagram portfolio link"
            >
              <span style="display:inline-grid;place-items:center;width:28px;height:28px;border-radius:6px;background:linear-gradient(135deg,#f58529 0%,#dd2a7b 35%,#515bd4 100%);color:#fff;font-size:13px;font-weight:900;box-shadow:inset 0 1px 0 #ffffff55;">
                ig
              </span>
              Open Instagram
            </a>
          </div>
        </div>
      </div>
    </div>`
  },
  solitaire:{
    t:'Solitaire',i:'🃏',w:545,h:445,
    menu:['Game','Help'],tb:false,st:'Score: 52  ·  Time: 0:47  ·  Moves: 14',
    html:()=>{
      const cols=[
        [{s:'♥',v:'K'},{s:'♠',v:'Q'},{s:'♦',v:'J'}],
        [{s:'♣',v:'9'},{s:'♥',v:'8'}],
        [{s:'♦',v:'A'}],
        [{s:'♠',v:'7'},{s:'♥',v:'6'},{s:'♣',v:'5'},{s:'♦',v:'4'}],
        [{s:'♥',v:'3'},{s:'♠',v:'2'}],
        [{s:'♣',v:'K'},{s:'♦',v:'Q'},{s:'♥',v:'J'},{s:'♠',v:'10'}],
        [{s:'♦',v:'9'},{s:'♣',v:'8'},{s:'♥',v:'7'}],
      ];
      const r=s=>s==='♥'||s==='♦';
      const colsHtml=cols.map((col)=>{
        const h=76+(col.length-1)*20+12;
        const cards=col.map((c,i)=>`<div class="card${r(c.s)?' r':''}" style="top:${i*20}px;left:0;z-index:${i+1};"><span>${c.s}${c.v}</span></div>`).join('');
        return `<div class="col" style="width:54px;height:${h}px;">${cards}</div>`;
      }).join('');
      return`<div class="sol">
        <div style="display:flex;gap:8px;margin-bottom:4px;">
          <div class="cslot"></div><div class="cslot"></div>
          <div style="flex:1;"></div>
          <div class="cslot"></div><div class="cslot"></div><div class="cslot"></div><div class="cslot"></div>
        </div>
        <div style="display:flex;gap:8px;align-items:flex-start;">${colsHtml}</div>
      </div>`;
    }
  },
  minesweeper:{
    t:'Minesweeper',i:'💣',w:252,h:324,
    menu:['Game','Help'],tb:false,st:null,
    html:()=>{
      const M=new Set([2,7,13,20,24,30,37,42,48,53]);
      const nb=i=>{const ro=Math.floor(i/9),co=i%9,r=[];for(let dr=-1;dr<=1;dr++)for(let dc=-1;dc<=1;dc++){if(!dr&&!dc)continue;const nr=ro+dr,nc=co+dc;if(nr>=0&&nr<9&&nc>=0&&nc<9)r.push(nr*9+nc);}return r;};
      const cells=Array.from({length:81},(_,i)=>{
        if(M.has(i))return{m:true,o:false};
        const c=nb(i).filter(n=>M.has(n)).length;
        return{m:false,c,o:Math.random()>.58};
      });
      return`<div class="ms">
        <div class="ms-p">
          <div class="lcd">010</div>
          <div class="mface">🙂</div>
          <div class="lcd">047</div>
        </div>
        <div class="ms-bd"><div class="ms-g">${cells.map(c=>c.o?(c.m?'<div class="mc bm">💥</div>':`<div class="mc op ${c.c?'n'+c.c:''}">${c.c||''}</div>`):'<div class="mc"></div>').join('')}</div></div>
        <div style="font-size:10px;color:#888;margin-top:4px;">Beginner · 9×9 · 10 mines</div>
      </div>`;
    }
  },
  pacman:{
    t:'Pac-Man',i:'👾',w:520,h:520,
    menu:['Game','Help'],tb:false,st:'Arrows: Move · P: Pause',
    html:()=>`<div style="width:100%;height:100%;display:flex;flex-direction:column;gap:6px;padding:8px;">
      <div style="font-size:11px;color:#0A246A;font-weight:900;background:rgba(255,255,255,.75);border:1px solid #316AC5;padding:4px 6px;">
        PAC-MAN: Arrow keys to move. P pause. R restart.
      </div>
      <canvas id="game-pacman" style="flex:1; width:100%; height:100%; background:#000; display:block; border:1px solid #222;"></canvas>
    </div>`,
    init:(winEl)=>{
      const canvas=winEl.querySelector('#game-pacman');
      const ctx=canvas.getContext('2d');
      ctx.imageSmoothingEnabled=false;

      const gridW=21, gridH=21;
      const keyToDir={ArrowUp:'up',ArrowDown:'down',ArrowLeft:'left',ArrowRight:'right'};
      const DIRS={
        up:{x:0,y:-1},down:{x:0,y:1},left:{x:-1,y:0},right:{x:1,y:0}
      };

      const walls=new Set();
      const addWall=(x,y)=>{if(x<0||y<0||x>=gridW||y>=gridH)return;walls.add(y*gridW+x);};
      for(let x=0;x<gridW;x++){addWall(x,0);addWall(x,gridH-1);}
      for(let y=0;y<gridH;y++){addWall(0,y);addWall(gridW-1,y);}
      // Tunnel opening (row 10)
      walls.delete(10*gridW+0);
      walls.delete(10*gridW+(gridW-1));
      // Internal maze blocks (simple, always solvable)
      for(let y=2;y<=9;y++) addWall(5,y);
      for(let y=11;y<=18;y++) addWall(5,y);
      for(let y=2;y<=9;y++) addWall(15,y);
      for(let y=11;y<=18;y++) addWall(15,y);
      for(let x=2;x<=9;x++) addWall(x,5);
      for(let x=11;x<=18;x++) addWall(x,5);
      for(let x=2;x<=9;x++) addWall(x,15);
      for(let x=11;x<=18;x++) addWall(x,15);
      // Center ghost house
      for(let x=8;x<=12;x++) for(let y=8;y<=12;y++) addWall(x,y);
      // Doorways inside ghost house
      walls.delete(10*gridW+10); // center cell open
      walls.delete(9*gridW+10);
      walls.delete(11*gridW+10);
      walls.delete(10*gridW+9);
      walls.delete(10*gridW+11);

      const ghostBox=(x,y)=> x>=8 && x<=12 && y>=8 && y<=12;

      const powerPellets=new Set();
      const powerPos=[[1,1],[gridW-2,1],[1,gridH-2],[gridW-2,gridH-2]];
      powerPos.forEach(([x,y])=>{ if(!walls.has(y*gridW+x)) powerPellets.add(y*gridW+x); });

      let pellets=new Set();
      for(let y=1;y<gridH-1;y++){
        for(let x=1;x<gridW-1;x++){
          const idx=y*gridW+x;
          if(walls.has(idx)) continue;
          if(ghostBox(x,y)) continue;
          pellets.add(idx);
        }
      }
      powerPellets.forEach(i=>{ if(pellets.has(i)) pellets.delete(i); pellets.add(i); });

      const pacSpawn={x:10,y:15};
      let pac={...pacSpawn,dir:'left',want:'left'};

      const ghostSpawns=[
        {x:10,y:10,color:'#ff4d4d'},
        {x:9,y:10,color:'#49d1ff'},
        {x:11,y:10,color:'#ffcc4d'},
        {x:10,y:9,color:'#ff7dff'},
      ];
      let ghosts=ghostSpawns.map(g=>({...g,dir:'left',spawnX:g.x,spawnY:g.y,fr:false}));

      let score=0;
      let lives=3;
      let paused=false;
      let gameOver=false;
      let win=false;
      let frightened=0; // ticks remaining

      function canMove(x,y){
        if(y===10){ // tunnel row
          if(x<0) x=gridW-1;
          if(x>=gridW) x=0;
        }
        if(x<0||y<0||x>=gridW||y>=gridH) return false;
        return !walls.has(y*gridW+x);
      }

      function moveWrap(x,y){
        if(y===10){
          if(x<0) x=gridW-1;
          if(x>=gridW) x=0;
        }
        return {x,y};
      }

      let tick=0;
      const pacPeriod=95;
      const ghostPeriod=190;
      let ghostTick=0;

      const resizeToFit=()=>{
        const parent=canvas.parentElement;
        const rect=parent.getBoundingClientRect();
        const w=Math.max(320,Math.floor(rect.width));
        const h=Math.max(320,Math.floor(rect.height));
        canvas.width=w;
        canvas.height=h;
      };
      resizeToFit();

      let raf=null;
      function render(){
        const w=canvas.width, h=canvas.height;
        ctx.clearRect(0,0,w,h);
        ctx.fillStyle='#000';
        ctx.fillRect(0,0,w,h);

        const cell=Math.floor(Math.min(w/gridW,h/gridH));
        const offX=Math.floor((w-cell*gridW)/2);
        const offY=Math.floor((h-cell*gridH)/2);
        const r=cell*0.45;

        // Walls
        ctx.fillStyle='#2244ff';
        for(let y=0;y<gridH;y++){
          for(let x=0;x<gridW;x++){
            if(walls.has(y*gridW+x)){
              ctx.fillRect(offX+x*cell, offY+y*cell, cell, cell);
            }
          }
        }

        // Pellets
        ctx.fillStyle='#ffd400';
        pellets.forEach((idx)=>{
          const x=idx%gridW, y=Math.floor(idx/gridW);
          const cx=offX+x*cell+cell/2, cy=offY+y*cell+cell/2;
          if(powerPellets.has(idx)){
            ctx.beginPath();
            ctx.arc(cx,cy, Math.max(2, cell*0.18), 0, Math.PI*2);
            ctx.fill();
          }else{
            ctx.beginPath();
            ctx.arc(cx,cy, Math.max(1.5, cell*0.10), 0, Math.PI*2);
            ctx.fill();
          }
        });

        // Pac-Man
        const pacCx=offX+pac.x*cell+cell/2;
        const pacCy=offY+pac.y*cell+cell/2;
        ctx.fillStyle='#ffd400';
        ctx.beginPath();
        ctx.arc(pacCx,pacCy, r, 0, Math.PI*2);
        ctx.fill();
        const angle={right:0,left:Math.PI,up:-Math.PI/2,down:Math.PI/2}[pac.dir];
        const mouth=0.35;
        ctx.fillStyle='#000';
        ctx.beginPath();
        ctx.moveTo(pacCx,pacCy);
        ctx.arc(pacCx,pacCy,r, angle-mouth, angle+mouth);
        ctx.closePath();
        ctx.fill();

        // Ghosts
        ghosts.forEach(g=>{
          const gx=offX+g.x*cell+cell/2;
          const gy=offY+g.y*cell+cell/2;
          const fr=g.fr || frightened>0;
          ctx.fillStyle=fr?'#4aa3ff':g.color;
          ctx.beginPath();
          ctx.arc(gx,gy,r*0.92,Math.PI,0);
          ctx.lineTo(gx+r*0.92,gy+r*0.92);
          ctx.arc(gx,gy+r*0.92,r*0.92,0,Math.PI,true);
          ctx.closePath();
          ctx.fill();
          // Eyes
          ctx.fillStyle='#fff';
          const off=cell*0.14;
          const pupil=fr?'#000':'#000';
          ctx.beginPath();
          ctx.arc(gx-off,gy-r*0.05,r*0.18,0,Math.PI*2); ctx.fill();
          ctx.beginPath();
          ctx.arc(gx+off,gy-r*0.05,r*0.18,0,Math.PI*2); ctx.fill();
          // Direction indicator
          let dx=0,dy=0;
          if(g.dir==='left')dx=-1;
          if(g.dir==='right')dx=1;
          if(g.dir==='up')dy=-1;
          if(g.dir==='down')dy=1;
          ctx.fillStyle=pupil;
          ctx.beginPath(); ctx.arc(gx-off+dx*cell*0.08, gy-r*0.05+dy*cell*0.08, r*0.09,0,Math.PI*2); ctx.fill();
          ctx.beginPath(); ctx.arc(gx+off+dx*cell*0.08, gy-r*0.05+dy*cell*0.08, r*0.09,0,Math.PI*2); ctx.fill();
        });

        // HUD overlay (canvas)
        ctx.fillStyle='rgba(255,255,255,0.85)';
        ctx.font=`${Math.max(12, Math.floor(cell*0.55))}px monospace`;
        ctx.fillText(`Score: ${score}   Lives: ${lives}`, offX+6, offY+cell*0.8);
        if(paused){
          ctx.fillStyle='rgba(0,0,0,0.55)';
          ctx.fillRect(offX,offY,w-cell*gridW,h?0:0);
          ctx.fillStyle='white';
          ctx.font=`${Math.max(16, Math.floor(cell*0.9))}px monospace`;
          ctx.fillText('PAUSED', offX+cell*6, offY+cell*10);
        }
        if(gameOver){
          ctx.fillStyle='rgba(0,0,0,0.6)';
          ctx.fillRect(0,0,w,h);
          ctx.fillStyle='#fff';
          ctx.font=`${Math.max(18, Math.floor(cell*1.0))}px monospace`;
          ctx.fillText('GAME OVER', offX+cell*4, offY+cell*10);
          ctx.font=`${Math.max(12, Math.floor(cell*0.7))}px monospace`;
          ctx.fillText('Press R to restart', offX+cell*3, offY+cell*12);
        }
        if(win){
          ctx.fillStyle='rgba(0,0,0,0.6)';
          ctx.fillRect(0,0,w,h);
          ctx.fillStyle='#fff';
          ctx.font=`${Math.max(18, Math.floor(cell*1.0))}px monospace`;
          ctx.fillText('YOU WIN!', offX+cell*5, offY+cell*10);
          ctx.font=`${Math.max(12, Math.floor(cell*0.7))}px monospace`;
          ctx.fillText('Press R to play again', offX+cell*3, offY+cell*12);
        }
      }

      function resetAll(){
        pac={...pacSpawn,dir:'left',want:'left'};
        ghosts=ghostSpawns.map(g=>({...g,dir:'left',fr:false}));
        pellets=new Set();
        for(let y=1;y<gridH-1;y++) for(let x=1;x<gridW-1;x++){
          const idx=y*gridW+x;
          if(walls.has(idx)) continue;
          if(ghostBox(x,y)) continue;
          pellets.add(idx);
        }
        powerPellets.forEach(i=>{ if(pellets.has(i)) pellets.delete(i); pellets.add(i); });
        score=0; lives=3; paused=false; gameOver=false; win=false; frightened=0;
      }

      function stepPac(){
        if(gameOver||win||paused) return;
        // Direction change if possible
        const want=DIRS[pac.want];
        if(want){
          const nx=pac.x+want.x, ny=pac.y+want.y;
          if(canMove(nx,ny)){
            pac.dir=pac.want;
          }
        }
        const d=DIRS[pac.dir];
        let nx=pac.x+d.x, ny=pac.y+d.y;
        if(canMove(nx,ny)){
          const wpos=moveWrap(nx,ny);
          pac.x=wpos.x; pac.y=wpos.y;
        }
        const idx=pac.y*gridW+pac.x;
        if(pellets.has(idx)){
          pellets.delete(idx);
          if(powerPellets.has(idx)){
            frightened=28; // a handful of moves
            score+=50;
          }else{
            score+=10;
          }
        }
        // Win condition
        if(pellets.size===0){
          win=true;
        }
        // Collisions
        ghosts.forEach(g=>{
          if(g.x===pac.x && g.y===pac.y){
            if(frightened>0){
              // Reset ghost
              g.x=g.spawnX; g.y=g.spawnY;
              g.dir='left';
              score+=200;
            }else{
              lives-=1;
              if(lives<=0){
                gameOver=true;
              }else{
                // Reset pac & ghosts
                pac={...pacSpawn,dir:'left',want:'left'};
                ghosts=ghostSpawns.map(gg=>({...gg,dir:'left',fr:false}));
                frightened=0;
              }
            }
          }
        });
      }

      function ghostChooseDir(g){
        const options=[];
        for(const dir of ['up','down','left','right']){
          const d=DIRS[dir];
          let nx=g.x+d.x, ny=g.y+d.y;
          if(ny===10 && (nx<0||nx>=gridW)) nx=nx<0?gridW-1:0;
          if(nx<0||ny<0||nx>=gridW||ny>=gridH) continue;
          if(walls.has(ny*gridW+nx)) continue;
          // Disallow quick reversal if there are alternatives
          if(dir===({up:'down',down:'up',left:'right',right:'left'})[g.dir] && options.length>=1) continue;
          options.push({dir,nx,ny});
        }
        if(options.length===0){
          options.push({dir:g.dir,nx:g.x,ny:g.y});
        }
        const dist=(nx,ny)=>Math.abs(nx-pac.x)+Math.abs(ny-pac.y);
        let best=options[0];
        options.forEach(o=>{
          const s=dist(o.nx,o.ny);
          const b=dist(best.nx,best.ny);
          if(frightened>0){
            if(s>b) best=o;
          }else{
            if(s<b) best=o;
          }
        });
        // Add a little randomness to feel more alive
        if(options.length>2 && Math.random()<0.08){
          best=options[Math.floor(Math.random()*options.length)];
        }
        return best.dir;
      }

      function stepGhosts(){
        if(gameOver||win||paused) return;
        if(frightened>0) frightened-=1;
        ghosts.forEach(g=>{
          const nd=ghostChooseDir(g);
          g.dir=nd;
          const d=DIRS[nd];
          let nx=g.x+d.x, ny=g.y+d.y;
          const wpos=moveWrap(nx,ny);
          if(walls.has(wpos.y*gridW+wpos.x)) return; // should not happen
          g.x=wpos.x; g.y=wpos.y;
        });
      }

      function loop(){
        render();
        raf=requestAnimationFrame(loop);
      }
      raf=requestAnimationFrame(loop);

      const pacTimer=setInterval(()=>{ tick++; stepPac(); if(tick%Math.max(1, Math.floor(ghostPeriod/pacPeriod))===0){ stepGhosts(); } }, pacPeriod);

      function onKeyDown(e){
        if(!winEl.classList.contains('foc') || winEl.style.display==='none') return;
        const k=e.key;
        if(k==='p' || k==='P'){
          paused=!paused;
          e.preventDefault();
          return;
        }
        if(k==='r' || k==='R'){
          resetAll();
          e.preventDefault();
          return;
        }
        const dir=keyToDir[k];
        if(dir){
          pac.want=dir;
          e.preventDefault();
        }
      }
      window.addEventListener('keydown', onKeyDown);

      // Initial render & start
      render();

      return ()=>{
        clearInterval(pacTimer);
        if(raf) cancelAnimationFrame(raf);
        window.removeEventListener('keydown', onKeyDown);
      };
    }
  },
  snake:{
    t:'Snake',i:'🐍',w:460,h:480,
    menu:['Game','Help'],tb:false,st:'Arrows: Move · Space: Pause · R: Restart',
    html:()=>`<div style="width:100%;height:100%;display:flex;flex-direction:column;gap:6px;padding:8px;">
      <div style="font-size:11px;color:#0A246A;font-weight:900;background:rgba(255,255,255,.75);border:1px solid #316AC5;padding:4px 6px;">
        SNAKE: Arrow keys. Space pause. R restart.
      </div>
      <canvas id="game-snake" style="flex:1; width:100%; height:100%; background:#000; display:block; border:1px solid #222;"></canvas>
    </div>`,
    init:(winEl)=>{
      const canvas=winEl.querySelector('#game-snake');
      const ctx=canvas.getContext('2d');
      ctx.imageSmoothingEnabled=false;

      const COLS=24, ROWS=24;
      let snake=[];
      let dir={x:1,y:0};
      let nextDir={x:1,y:0};
      let food={x:0,y:0};
      let score=0;
      let paused=false;
      let gameOver=false;

      function randEmpty(){
        while(true){
          const x=Math.floor(Math.random()*COLS);
          const y=Math.floor(Math.random()*ROWS);
          if(!snake.some(s=>s.x===x && s.y===y)) return {x,y};
        }
      }

      function reset(){
        snake=[];
        const cx=Math.floor(COLS/2), cy=Math.floor(ROWS/2);
        snake.push({x:cx-2,y:cy},{x:cx-1,y:cy},{x:cx,y:cy},{x:cx+1,y:cy});
        dir={x:1,y:0}; nextDir={x:1,y:0};
        score=0; paused=false; gameOver=false;
        food=randEmpty();
      }
      reset();

      const resizeToFit=()=>{
        const parent=canvas.parentElement;
        const rect=parent.getBoundingClientRect();
        canvas.width=Math.max(320,Math.floor(rect.width));
        canvas.height=Math.max(320,Math.floor(rect.height));
      };
      resizeToFit();

      function step(){
        if(paused||gameOver) return;
        // Apply direction (avoid reverse)
        if(!(nextDir.x===-dir.x && nextDir.y===-dir.y)) dir=nextDir;
        const head=snake[snake.length-1];
        const nx=head.x+dir.x, ny=head.y+dir.y;
        // walls
        if(nx<0||ny<0||nx>=COLS||ny>=ROWS){
          gameOver=true; return;
        }
        // self collision
        if(snake.some(s=>s.x===nx && s.y===ny)){
          gameOver=true; return;
        }
        snake.push({x:nx,y:ny});
        if(nx===food.x && ny===food.y){
          score+=1;
          food=randEmpty();
        }else{
          snake.shift();
        }
      }

      function render(){
        const w=canvas.width, h=canvas.height;
        ctx.clearRect(0,0,w,h);
        ctx.fillStyle='#000';
        ctx.fillRect(0,0,w,h);
        const cell=Math.floor(Math.min(w/COLS, h/ROWS));
        const offX=Math.floor((w-cell*COLS)/2);
        const offY=Math.floor((h-cell*ROWS)/2);

        // Subtle grid
        ctx.strokeStyle='rgba(255,255,255,0.05)';
        for(let x=0;x<=COLS;x++){
          ctx.beginPath(); ctx.moveTo(offX+x*cell,offY); ctx.lineTo(offX+x*cell,offY+cell*ROWS); ctx.stroke();
        }
        for(let y=0;y<=ROWS;y++){
          ctx.beginPath(); ctx.moveTo(offX,offY+y*cell); ctx.lineTo(offX+cell*COLS,offY+y*cell); ctx.stroke();
        }

        // Food
        ctx.fillStyle='#ff3b30';
        ctx.beginPath();
        ctx.arc(offX+food.x*cell+cell/2, offY+food.y*cell+cell/2, Math.max(3,cell*0.28), 0, Math.PI*2);
        ctx.fill();

        // Snake
        snake.forEach((s,i)=>{
          const isHead=i===snake.length-1;
          ctx.fillStyle=isHead?'#00e676':'#00c853';
          const padding=Math.max(2,Math.floor(cell*0.12));
          ctx.fillRect(offX+s.x*cell+padding, offY+s.y*cell+padding, cell-padding*2, cell-padding*2);
        });

        // HUD
        ctx.fillStyle='rgba(255,255,255,0.88)';
        ctx.font=`${Math.max(12,Math.floor(cell*0.6))}px monospace`;
        ctx.fillText(`Score: ${score}`, offX+6, offY+cell*0.8);

        if(paused){
          ctx.fillStyle='rgba(0,0,0,0.55)';
          ctx.fillRect(0,0,w,h);
          ctx.fillStyle='#fff';
          ctx.font=`${Math.max(16,Math.floor(cell*1.0))}px monospace`;
          ctx.fillText('PAUSED', offX+cell*7, offY+cell*10);
        }
        if(gameOver){
          ctx.fillStyle='rgba(0,0,0,0.6)';
          ctx.fillRect(0,0,w,h);
          ctx.fillStyle='#fff';
          ctx.font=`${Math.max(18,Math.floor(cell*1.0))}px monospace`;
          ctx.fillText('GAME OVER', offX+cell*5, offY+cell*10);
          ctx.font=`${Math.max(12,Math.floor(cell*0.7))}px monospace`;
          ctx.fillText('Press R to restart', offX+cell*3, offY+cell*12);
        }
      }

      let interval=setInterval(()=>{
        step();
        render();
      }, 85);

      function onKeyDown(e){
        if(!winEl.classList.contains('foc') || winEl.style.display==='none') return;
        const k=e.key;
        if(k===' '){
          paused=!paused;
          e.preventDefault();
          return;
        }
        if(k==='r' || k==='R'){
          clearInterval(interval);
          reset();
          interval=setInterval(()=>{ step(); render(); }, 85);
          e.preventDefault();
          return;
        }
        if(k==='ArrowUp'){ nextDir={x:0,y:-1}; e.preventDefault(); }
        if(k==='ArrowDown'){ nextDir={x:0,y:1}; e.preventDefault(); }
        if(k==='ArrowLeft'){ nextDir={x:-1,y:0}; e.preventDefault(); }
        if(k==='ArrowRight'){ nextDir={x:1,y:0}; e.preventDefault(); }
      }
      window.addEventListener('keydown', onKeyDown);

      render();

      return ()=>{
        clearInterval(interval);
        window.removeEventListener('keydown', onKeyDown);
      };
    }
  },
  tetris:{
    t:'Tetris',i:'🧱',w:480,h:520,
    menu:['Game','Help'],tb:false,st:'Arrows: Move · Up: Rotate · Space: Drop · P: Pause',
    html:()=>`<div style="width:100%;height:100%;display:flex;flex-direction:column;gap:6px;padding:8px;">
      <div style="font-size:11px;color:#0A246A;font-weight:900;background:rgba(255,255,255,.75);border:1px solid #316AC5;padding:4px 6px;">
        TETRIS: Arrows move. Up rotate. Space hard drop. P pause. R restart.
      </div>
      <canvas id="game-tetris" style="flex:1; width:100%; height:100%; background:#000; display:block; border:1px solid #222;"></canvas>
    </div>`,
    init:(winEl)=>{
      const canvas=winEl.querySelector('#game-tetris');
      const ctx=canvas.getContext('2d');
      ctx.imageSmoothingEnabled=false;

      const W=10, H=20;
      const HIDDEN=2; // extra rows above view
      const gridH=H+HIDDEN;
      let board=Array.from({length:gridH},()=>Array(W).fill(null));

      const COLORS={
        I:'#00e5ff',O:'#ffe600',T:'#b388ff',S:'#00e676',Z:'#ff5252',J:'#448aff',L:'#ff8a00'
      };
      // Rotations expressed as blocks in a 4x4 grid
      const SHAPES={
        I:[
          [[0,1],[1,1],[2,1],[3,1]],
          [[2,0],[2,1],[2,2],[2,3]],
          [[0,2],[1,2],[2,2],[3,2]],
          [[1,0],[1,1],[1,2],[1,3]],
        ],
        O:[
          [[1,1],[2,1],[1,2],[2,2]],
          [[1,1],[2,1],[1,2],[2,2]],
          [[1,1],[2,1],[1,2],[2,2]],
          [[1,1],[2,1],[1,2],[2,2]],
        ],
        T:[
          [[1,1],[0,2],[1,2],[2,2]],
          [[1,1],[1,2],[2,2],[1,3]],
          [[0,2],[1,2],[2,2],[1,3]],
          [[1,1],[0,2],[1,2],[1,3]],
        ],
        S:[
          [[1,1],[2,1],[0,2],[1,2]],
          [[1,1],[1,2],[2,2],[2,3]],
          [[1,2],[2,2],[0,3],[1,3]],
          [[0,1],[0,2],[1,2],[1,3]],
        ],
        Z:[
          [[0,1],[1,1],[1,2],[2,2]],
          [[2,1],[1,2],[2,2],[1,3]],
          [[0,2],[1,2],[1,3],[2,3]],
          [[1,1],[0,2],[1,2],[0,3]],
        ],
        J:[
          [[0,1],[0,2],[1,2],[2,2]],
          [[1,1],[2,1],[1,2],[1,3]],
          [[0,2],[1,2],[2,2],[2,3]],
          [[1,1],[1,2],[0,3],[1,3]],
        ],
        L:[
          [[2,1],[0,2],[1,2],[2,2]],
          [[1,1],[1,2],[1,3],[2,3]],
          [[0,2],[1,2],[2,2],[0,3]],
          [[0,1],[1,1],[1,2],[1,3]],
        ],
      };

      let cur=null;
      let nextType=null;
      let score=0;
      let lines=0;
      let level=0;
      let paused=false;
      let gameOver=false;

      function randType(){
        const types=['I','O','T','S','Z','J','L'];
        return types[Math.floor(Math.random()*types.length)];
      }

      function spawn(){
        const type=nextType || randType();
        nextType=randType();
        cur={
          type,
          rot:0,
          x:3, // in 4x4
          y:0,
        };
        if(collides(cur.x,cur.y,cur.rot)){
          gameOver=true;
        }
      }

      function blocksOf(piece){
        return SHAPES[piece.type][piece.rot].map(([bx,by])=>({x:piece.x+bx,y:piece.y+by}));
      }

      function collides(px,py,rot){
        const test={type:cur.type, rot, x:px, y:py};
        const blocks=blocksOf(test);
        for(const b of blocks){
          const x=b.x, y=b.y;
          if(x<0||x>=W) return true;
          if(y>=gridH) return true;
          if(y>=0 && board[y][x]) return true;
        }
        return false;
      }

      function tryMove(dx,dy){
        if(!cur||paused||gameOver) return;
        const nx=cur.x+dx, ny=cur.y+dy;
        if(!collides(nx,ny,cur.rot)){
          cur.x=nx; cur.y=ny;
          return true;
        }
        return false;
      }

      function tryRotate(){
        if(!cur||paused||gameOver) return;
        const nrot=(cur.rot+1)%4;
        const kicks=[0,-1,1,-2,2];
        for(const k of kicks){
          const nx=cur.x+k, ny=cur.y;
          if(!collides(nx,ny,nrot)){
            cur.x=nx; cur.rot=nrot;
            return true;
          }
        }
        return false;
      }

      function lock(){
        if(!cur) return;
        const blocks=blocksOf(cur);
        blocks.forEach(b=>{
          if(b.y>=0 && b.y<gridH && b.x>=0 && b.x<W) board[b.y][b.x]=COLORS[b?cur.type:cur.type];
        });
        // clear lines
        for(let y=gridH-1;y>=0;y--){
          if(board[y].every(c=>c)){
            board.splice(y,1);
            board.unshift(Array(W).fill(null));
            lines+=1;
            y+=1; // re-check
          }
        }
        // scoring
        // Rough scoring based on number of cleared lines in last lock:
        // We'll compute it by checking lines delta isn't tracked, so instead update by all lines cleared at once.
        // Simpler: keep a local counter by detecting cleared rows via a second pass:
        // (To keep code short, do incremental scoring here.)
        // We'll compute bonus using cleared rows count in this lock:
        // To avoid major refactor, just update score by lines cleared overall.
        score += 100 * Math.max(1, level+1) / (level+1);
        level=Math.floor(lines/10);
        score += (lines%10===0 && lines>0)?50:0;

        spawn();
      }

      function hardDrop(){
        if(!cur||paused||gameOver) return;
        while(tryMove(0,1)){}
        lock();
      }

      function softDrop(){
        if(!cur||paused||gameOver) return;
        const moved=tryMove(0,1);
        if(!moved) lock();
      }

      function dropIntervalMs(){
        const base=850;
        const ms=base - level*60;
        return Math.max(80, ms);
      }

      function reset(){
        board=Array.from({length:gridH},()=>Array(W).fill(null));
        cur=null; nextType=null;
        score=0; lines=0; level=0;
        paused=false; gameOver=false;
        spawn();
      }

      // Canvas sizing
      const resizeToFit=()=>{
        const parent=canvas.parentElement;
        const rect=parent.getBoundingClientRect();
        canvas.width=Math.max(320,Math.floor(rect.width));
        canvas.height=Math.max(320,Math.floor(rect.height));
      };
      resizeToFit();

      let last=performance.now();
      let acc=0;
      let raf=null;

      function render(){
        const w=canvas.width, h=canvas.height;
        ctx.clearRect(0,0,w,h);
        ctx.fillStyle='#000';
        ctx.fillRect(0,0,w,h);

        const cell=Math.floor(Math.min(w/W, h/H));
        const offX=Math.floor((w-cell*W)/2);
        const offY=Math.floor((h-cell*H)/2);

        // draw grid background
        ctx.strokeStyle='rgba(255,255,255,0.05)';
        for(let x=0;x<=W;x++){
          ctx.beginPath(); ctx.moveTo(offX+x*cell, offY); ctx.lineTo(offX+x*cell, offY+cell*H); ctx.stroke();
        }
        for(let y=0;y<=H;y++){
          ctx.beginPath(); ctx.moveTo(offX, offY+y*cell); ctx.lineTo(offX+cell*W, offY+y*cell); ctx.stroke();
        }

        // fixed blocks (visible part only)
        for(let y=0;y<H;y++){
          const gy=y; // visible row index
          const srcY=y; // because we keep board with hidden at top; map visible y to board index (y+HIDDEN)
          const by=y+HIDDEN;
          for(let x=0;x<W;x++){
            const c=board[by][x];
            if(!c) continue;
            ctx.fillStyle=c;
            const pad=Math.max(2,Math.floor(cell*0.12));
            ctx.fillRect(offX+x*cell+pad, offY+y*cell+pad, cell-pad*2, cell-pad*2);
            ctx.strokeStyle='rgba(0,0,0,0.25)';
            ctx.strokeRect(offX+x*cell+pad, offY+y*cell+pad, cell-pad*2, cell-pad*2);
          }
        }

        // current piece
        if(cur){
          const blocks=blocksOf(cur);
          ctx.fillStyle=COLORS[cur.type];
          blocks.forEach(b=>{
            const by=b.y;
            if(by<0||by>=gridH) return;
            if(by<HIDDEN) return; // above visible
            const vy=by-HIDDEN;
            if(vy<0||vy>=H) return;
            const x=b.x, y=vy;
            const pad=Math.max(2,Math.floor(cell*0.12));
            ctx.fillStyle=COLORS[cur.type];
            ctx.fillRect(offX+x*cell+pad, offY+y*cell+pad, cell-pad*2, cell-pad*2);
          });
        }

        // HUD
        ctx.fillStyle='rgba(255,255,255,0.88)';
        ctx.font=`${Math.max(12,Math.floor(cell*0.6))}px monospace`;
        ctx.fillText(`Score: ${score}   Lines: ${lines}   Lv: ${level}`, offX+6, offY+cell*0.8);

        if(paused){
          ctx.fillStyle='rgba(0,0,0,0.55)';
          ctx.fillRect(0,0,w,h);
          ctx.fillStyle='#fff';
          ctx.font=`${Math.max(16,Math.floor(cell*1.0))}px monospace`;
          ctx.fillText('PAUSED', offX+cell*4, offY+cell*10);
        }
        if(gameOver){
          ctx.fillStyle='rgba(0,0,0,0.6)';
          ctx.fillRect(0,0,w,h);
          ctx.fillStyle='#fff';
          ctx.font=`${Math.max(18,Math.floor(cell*1.0))}px monospace`;
          ctx.fillText('GAME OVER', offX+cell*3, offY+cell*10);
          ctx.font=`${Math.max(12,Math.floor(cell*0.7))}px monospace`;
          ctx.fillText('Press R to restart', offX+cell*2, offY+cell*12);
        }
      }

      function frame(now){
        const dt=now-last; last=now;
        if(!paused && !gameOver){
          acc += dt;
          const stepMs=dropIntervalMs();
          while(acc>=stepMs){
            acc-=stepMs;
            // gravity step
            const moved=tryMove(0,1);
            if(!moved){
              lock();
            }
          }
        }
        render();
        raf=requestAnimationFrame(frame);
      }

      function onKeyDown(e){
        if(!winEl.classList.contains('foc') || winEl.style.display==='none') return;
        const k=e.key;
        if(k==='p' || k==='P'){
          paused=!paused; e.preventDefault(); return;
        }
        if(k==='r' || k==='R'){
          reset(); e.preventDefault(); return;
        }
        if(k==='ArrowLeft'){ tryMove(-1,0); e.preventDefault(); return; }
        if(k==='ArrowRight'){ tryMove(1,0); e.preventDefault(); return; }
        if(k==='ArrowDown'){ softDrop(); e.preventDefault(); return; }
        if(k==='ArrowUp'){ tryRotate(); e.preventDefault(); return; }
        if(k===' '){ hardDrop(); e.preventDefault(); return; }
        if(k==='x' || k==='X'){ tryRotate(); e.preventDefault(); return; }
      }
      window.addEventListener('keydown', onKeyDown);

      reset();
      render();
      raf=requestAnimationFrame(frame);

      return ()=>{
        window.removeEventListener('keydown', onKeyDown);
        if(raf) cancelAnimationFrame(raf);
      };
    }
  },
  recycle:{
    t:'Recycle Bin',i:'🗑️',w:488,h:318,
    menu:['File','Edit','View','Favorites','Tools','Help'],
    tb:true,st:'5 object(s)',
    html:()=>`<div class="rc">
      <div class="rc-hd">
        <div class="rch" style="width:200px;">Name</div>
        <div class="rch" style="width:125px;">Original Location</div>
        <div class="rch" style="width:94px;">Date Deleted</div>
        <div class="rch">Size</div>
      </div>
      <div class="rc-list">
        ${[['📄','old_resume_v3_FINAL.doc','C:\\Users\\Paziwon\\Desktop','3/12/2024','42 KB'],
           ['📄','old_resume_FINAL_v2.doc','C:\\Users\\Paziwon\\Desktop','3/12/2024','41 KB'],
           ['🖼️','cringe_selfie_2019.jpg','C:\\My Pictures','1/1/2024','2.4 MB'],
           ['📁','school_projects_old','C:\\My Documents','6/15/2023','—'],
           ['📄','TODO_list_2022.txt','C:\\My Documents','2/14/2024','1 KB']].map(
          ([ic,n,l,d,s])=>`<div class="rc-r">
            <div class="rcc" style="width:200px;">${ic} ${n}</div>
            <div class="rcc" style="width:125px;color:#555;">${l}</div>
            <div class="rcc" style="width:94px;color:#555;">${d}</div>
            <div class="rcc" style="color:#555;">${s}</div>
          </div>`).join('')}
      </div>
    </div>`
  },
  mycomp:{
    t:'My Computer',i:'🖥️',w:506,h:386,
    menu:['File','Edit','View','Favorites','Tools','Help'],
    tb:true,st:'My Computer — System Folder',
    html:()=>`<div class="mc-w">
      <div class="mc-sb">
        <div class="mc-sbh">System Tasks</div>
        <div class="mc-lk">🔍 View system information</div>
        <div class="mc-lk">➕ Add or remove programs</div>
        <div class="mc-lk">⚙️ Change a setting</div>
        <div class="mc-sbh" style="margin-top:8px;">Other Places</div>
        <div class="mc-lk">🌐 My Network Places</div>
        <div class="mc-lk">📁 My Documents</div>
        <div class="mc-lk">📁 Shared Documents</div>
        <div class="mc-lk">⚙️ Control Panel</div>
        <div class="mc-sbh" style="margin-top:8px;">Details</div>
        <div style="font-size:10px;padding:4px;color:#444;line-height:1.6;"><strong>My Computer</strong><br>System Folder</div>
      </div>
      <div class="mc-main">
        <div class="mc-sec"><h5>Files Stored on This Computer</h5>
          <div class="mc-items">
            <div class="mc-i"><span style="font-size:28px;">📁</span><span>Shared Documents</span></div>
            <div class="mc-i"><span style="font-size:28px;">📁</span><span>Paziwon's Documents</span></div>
          </div>
        </div>
        <div class="mc-sec"><h5>Hard Disk Drives</h5>
          <div class="mc-items"><div class="mc-i"><span style="font-size:28px;">💾</span><span>Local Disk (C:)</span></div></div>
        </div>
        <div class="mc-sec"><h5>Devices with Removable Storage</h5>
          <div class="mc-items">
            <div class="mc-i"><span style="font-size:28px;">💿</span><span>CD Drive (D:)</span></div>
            <div class="mc-i"><span style="font-size:28px;">💽</span><span>3½ Floppy (A:)</span></div>
          </div>
        </div>
      </div>
    </div>`
  }
};

// ── STATE ────────────────────────────────
let W={}, zT=300, foc=null, drag=null, rz=null;

// ── CLOCK ────────────────────────────────
function tick(){const d=new Date();let h=d.getHours(),m=d.getMinutes(),ap=h>=12?'PM':'AM';h=h%12||12;document.getElementById('clk').textContent=h+':'+String(m).padStart(2,'0')+' '+ap;}
tick();setInterval(tick,15000);

// ── LOGIN ────────────────────────────────
document.getElementById('l-btn').onclick=()=>{
  document.getElementById('login').classList.add('off');
  const dk=document.getElementById('desktop');
  dk.classList.remove('off');
  setTimeout(()=>ow('portfolio'),500);
};

function signout(){
  csm();
  Object.keys(W).forEach(id=>{
    try{ if(W[id].cleanup) W[id].cleanup(); }catch(e){}
    W[id].el.remove();
    const b=document.getElementById('tb-'+id);if(b)b.remove();
  });
  W={};foc=null;
  document.getElementById('desktop').classList.add('off');
  document.getElementById('login').classList.remove('off');
}

// ── START MENU ───────────────────────────
document.getElementById('s-btn').onclick=e=>{e.stopPropagation();document.getElementById('smenu').classList.toggle('open');};
function csm(){document.getElementById('smenu').classList.remove('open');}

// ── CTX MENU ─────────────────────────────
document.getElementById('desktop').addEventListener('contextmenu',e=>{
  if(e.target.closest('.xw')||e.target.closest('.taskbar'))return;
  e.preventDefault();
  const m=document.getElementById('ctx');
  m.style.display='block';
  m.style.left=Math.min(e.clientX,window.innerWidth-170)+'px';
  m.style.top=Math.min(e.clientY,window.innerHeight-120)+'px';
});
function cctx(){document.getElementById('ctx').style.display='none';}

document.addEventListener('click',e=>{
  cctx();
  if(!e.target.closest('#smenu')&&!e.target.closest('#s-btn'))csm();
});

// ── OPEN WINDOW ──────────────────────────
function ow(id){
  const d=D[id]; if(!d)return;
  if(W[id]){bf(W[id].el);return;}
  const area=document.getElementById('desktop');
  const off=Object.keys(W).length*22;
  const el=document.createElement('div');
  el.className='xw foc'; el.dataset.id=id;
  el.style.cssText=`left:${58+off}px;top:${28+off}px;width:${d.w}px;height:${d.h}px;z-index:${++zT};display:flex;flex-direction:column;`;

  const mh=d.menu?`<div class="xw-menu">${d.menu.map(m=>`<div class="xmi">${m}</div>`).join('')}</div>`:'';
  const th=d.tb?`<div class="xw-tbar"><button class="xtb">◀</button><button class="xtb">▶</button><button class="xtb">⬆</button><button class="xtb">🔍 Search</button><button class="xtb">📁 Folders</button></div>`:'';
  const sh=d.st!==null?`<div class="xw-stat"><div class="sp">${d.st}</div></div>`:'';

  el.innerHTML=`
    <div class="xw-tb">
      <span class="xw-ico">${d.i}</span>
      <span class="xw-lbl">${d.t}</span>
      <div class="xw-btns">
        <div class="xcb xmin">─</div>
        <div class="xcb xmax">□</div>
        <div class="xcb cls">✕</div>
      </div>
    </div>
    ${mh}${th}
    <div class="xw-body">${d.html()}</div>
    ${sh}
    <div class="rgrip"></div>
  `;
  area.appendChild(el);
  let cleanup=null;
  try{
    if(typeof d.init==='function') cleanup=d.init(el);
  }catch(e){}
  W[id]={el,mx:false,cleanup};

  const tbtn=document.createElement('div');
  tbtn.className='tb-w on'; tbtn.id='tb-'+id;
  tbtn.innerHTML=`<span style="font-size:13px;">${d.i}</span> ${d.t.split(' — ')[0].substring(0,20)}`;
  tbtn.onclick=()=>tog(id);
  document.getElementById('tb-wins').appendChild(tbtn);

  el.querySelector('.cls').onclick=()=>cw(id);
  el.querySelector('.xmin').onclick=()=>mw(id);
  el.querySelector('.xmax').onclick=()=>xw(id);
  el.querySelector('.xw-tb').addEventListener('mousedown',dstart);
  el.querySelector('.rgrip').addEventListener('mousedown',rstart);
  el.addEventListener('mousedown',()=>bf(el));
  bf(el);
}

function bf(el){
  if(foc){foc.classList.remove('foc');const b=document.getElementById('tb-'+foc.dataset.id);if(b)b.classList.remove('on');}
  foc=el; el.classList.add('foc'); el.style.zIndex=++zT;
  const b=document.getElementById('tb-'+el.dataset.id);if(b)b.classList.add('on');
}

function tog(id){
  const w=W[id]; if(!w)return;
  if(w.el.style.display==='none'){w.el.style.display='flex';bf(w.el);}
  else if(foc===w.el)mw(id);
  else bf(w.el);
}

function mw(id){
  const w=W[id]; if(!w)return;
  w.el.style.display='none';
  const b=document.getElementById('tb-'+id); if(b)b.classList.remove('on');
  if(foc===w.el)foc=null;
}

function xw(id){
  const w=W[id]; if(!w)return;
  const el=w.el;
  const aH=document.getElementById('desktop').offsetHeight-38;
  if(w.mx){el.style.left=w.pl;el.style.top=w.pt;el.style.width=w.pw;el.style.height=w.ph;w.mx=false;}
  else{w.pl=el.style.left;w.pt=el.style.top;w.pw=el.style.width;w.ph=el.style.height;
    el.style.left='0';el.style.top='0';el.style.width='100%';el.style.height=aH+'px';w.mx=true;}
}

function cw(id){
  const w=W[id]; if(!w)return;
  try{ if(w.cleanup) w.cleanup(); }catch(e){}
  w.el.remove();
  const b=document.getElementById('tb-'+id); if(b)b.remove();
  if(foc===w.el)foc=null;
  delete W[id];
}

// ── DRAG / RESIZE ────────────────────────
function dstart(e){
  if(e.target.closest('.xw-btns'))return;
  const el=e.currentTarget.closest('.xw');
  if(W[el.dataset.id]?.mx)return;
  drag={el,ox:e.clientX-el.offsetLeft,oy:e.clientY-el.offsetTop};
  e.preventDefault();
}
function rstart(e){
  const el=e.currentTarget.closest('.xw');
  rz={el}; e.preventDefault(); e.stopPropagation();
}
document.addEventListener('mousemove',e=>{
  if(drag){
    const area=document.getElementById('desktop');
    let x=Math.max(-200,Math.min(area.offsetWidth-80,e.clientX-drag.ox));
    let y=Math.max(0,Math.min(area.offsetHeight-36,e.clientY-drag.oy));
    drag.el.style.left=x+'px'; drag.el.style.top=y+'px';
  }
  if(rz){
    rz.el.style.width=Math.max(260,e.clientX-rz.el.offsetLeft)+'px';
    rz.el.style.height=Math.max(180,e.clientY-rz.el.offsetTop)+'px';
  }
});
document.addEventListener('mouseup',()=>{drag=null;rz=null;});
