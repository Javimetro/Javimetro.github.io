(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e){let t=Math.min(Math.max(e,800),3e4)/100,n=t<=66?1:Math.min(Math.max(1.293*(t-60)**-.1332,0),1),r=Math.min(Math.max(t<=66?.39*Math.log(t)-.632:1.13*(t-60)**-.0755,0),1),i=t>=66?1:t<=19?0:Math.min(Math.max(.543*Math.log(t-10)-1.196,0),1);return[n*n,r*r,i*i]}var t=e=>{let t=Math.min(Math.max((e-700)/800,0),1);return 40*(e/6e3)**4+.4*t*t*(3-2*t)},n=.6,r=68e-6,i=class{value=1;update(e,t){let n=e<this.value?.12:.9;return this.value+=(e-this.value)*(1-Math.exp(-t/n)),this.value}reset(){this.value=1}};function a(t,i){if(i<700)return[0,0,0];let a=e(i),o=t.nuclear?1:.025,s=(i/5800)**4*Math.PI/r*n*o;return[a[0]*s,a[1]*s,a[2]*s]}var o=e=>.2126*e[0]+.7152*e[1]+.0722*e[2];function s(e){let t=e.burns[2]*3;if(e.heatAt(0)<t)return 0;let n=0,r=1e7;for(let i=0;i<60;i++){let i=(n+r)/2;e.heatAt(i)>t?n=i:r=i}return n}function c(e,n,r,i,s,c,u,d,f){let p=e.ex.look,m=e.fireballMax,h=null,g=[0,0,0],_=0,v=e.hb,y=0,b=0,x=0,S={fireball:null,bolide:null,front:null,cloudTop:0},ee=[0,0,0,0],te=[0,0,0,0],ne=0,C=0,w=(e,t)=>[(e-r.cx)/(r.vh*r.aspect),(t-r.cy)/r.vh];if(n>0){let i=e.fireball(n),o=e.cloud(n),s=e.shockRadius(n);b=e.groundRing(n);let c=b>0?e.groundOverpressure(b):e.groundOverpressure(0);x=p.dust*Math.min(1,Math.max(0,Math.log10(c/1500)/1.5))*+(b>0);let f=p.condensation*.9*l(m*1,m*1.6,s)*(1-l(m*3,m*7,s));g=a(e,i.temp),_=i.r,v=i.y,h={fire:[i.y,i.r,i.temp,1-o.morph],cap:[o.capY,o.capA,o.capB,o.roll],stem:[o.stemTop,o.stemW,o.stem,o.morph],skirt:[o.skirtR,o.skirtH,o.skirt,b],shock:[s,e.hb,x,f],look:[p.smoke[0],p.smoke[1],p.smoke[2],p.soot],look2:[p.mushroom,d,n/e.riseTau,i.temp],look3:[1,p.cloud??1,0,0],trail:[0,0,0,0],trail2:[0,0,0,0],trail3:[0,0,0,0],bbox:null};let y=Math.max(o.capA*1.5,i.r*1.6);o.skirt>.01&&(y=Math.max(y,o.skirtR*1.35)),x>.01&&(y=Math.max(y,b*1.12));let T=Math.max(o.capY+o.capB+.45*Math.max(o.capA,i.r),i.y+i.r*1.6,o.stemTop);f>.001&&(y=Math.max(y,s*1.05),T=Math.max(T,e.hb+s*1.05));let[E,re]=w(-y,-.35*m),[D,ie]=w(y,T);h.bbox=[E,re,D,ie],S.fireball={x:0,y:i.y,r:i.r,temp:i.temp},S.front=b>0?{x:b,dp:c,speed:340.3*Math.sqrt(1+6*c/709275)}:null,S.cloudTop=o.morph>.3?o.capY+o.capB:0;let ae=u/(2*r.vh),[oe,se]=w(0,e.hb),ce=s*ae,le=Math.min(1,Math.max(0,Math.log10(c/400)/2));ce>2&&ce<u*3&&(ee=[oe,se,ce,le]);let[ue,de]=w(0,i.y),O=l(1200,3500,i.temp);O>0&&(te=[ue,de,i.r*ae*1.8,O*.7]);let fe=Math.PI*(i.r*ae)**2/(u*u*r.aspect);ne=Math.min(fe,1),C=t(i.temp)*(e.nuclear?1:.4)}let T=e.entry(n),E=e.ex.impact;if(T&&E){let r=Math.max(E.diameter*50,300),i=n<0,o=[T.ax,T.ay,T.bx,T.by],s=[r,i?t(9e3)*1.5:0,.85*Math.exp(-Math.max(n,0)/900),E.speed],c=[Math.max(n,0),0,0,0];h?(h.trail=o,h.trail2=s,h.trail3=c):h={fire:[e.hb,0,0,0],cap:[e.hb,1,1,0],stem:[0,0,0,0],skirt:[0,0,0,0],shock:[0,e.hb,0,0],look:[p.smoke[0],p.smoke[1],p.smoke[2],p.soot],look2:[p.mushroom,d,0,0],look3:[0,p.cloud??1,0,0],trail:o,trail2:s,trail3:c,bbox:null};let l=r*6,[u,f]=w(Math.min(T.ax,T.bx)-l,Math.min(T.ay,T.by)-l),[m,b]=w(Math.max(T.ax,T.bx)+l,Math.max(T.ay,T.by)+l),x=h.bbox;h.bbox=x?[Math.min(x[0],u),Math.min(x[1],f),Math.max(x[2],m),Math.max(x[3],b)]:[u,f,m,b],i&&(g=a(e,9e3).map(e=>e*.25),_=r*.5,y=T.bx,v=T.by,C=t(9e3)*.2,S.bolide={x:T.bx,y:T.by,speed:E.speed,size:E.diameter})}let re=(r.cx-y)**2+(r.eyeY-v)**2+r.dist*r.dist,D=_>0?o(g)*(_*_)/(re+_*_):0,ie=_>0?o(g)*(_*_)/(v*v+_*_):0,ae=ie/(1+ie/60),oe=1/(1+.08*(D/(1+D/50))+.03*ae+1.5*ne*C),se=s.update(oe,c),ce={flash:[g[0],g[1],g[2],v],flashR:_,flashX:y,glow:_>0?C:0,ring:[b,x,n>0&&e.crater?e.crater.r:0,n>e.timeScale?f:0]},[,le]=w(0,0),ue={exposure:se,bloom:.16,shake:[0,0],shockScr:ee,groundV:le,haze:te,white:e.nuclear&&n>0&&n<.07*e.timeScale?.85*(1-n/(.07*e.timeScale)):0},de=[i.sunCol[0]*.9+i.zenith[0]*.45+Math.min(D,30)*.05,i.sunCol[1]*.9+i.zenith[1]*.45+Math.min(D,30)*.04,i.sunCol[2]*.9+i.zenith[2]*.45+Math.min(D,30)*.03];return{boom:h,world:ce,post:ue,hud:S,light:de}}function l(e,t,n){let r=Math.min(Math.max((n-e)/(t-e),0),1);return r*r*(3-2*r)}var u=class{renderer;session;perf;audio;haptics;realTime=0;busy=!1;constructor(e,t,n,r,i){this.renderer=e,this.session=t,this.perf=n,this.audio=r,this.haptics=i}resizeLive(){let e=Math.min(window.devicePixelRatio||1,2);this.renderer.resize(window.innerWidth*e*this.perf.scale,window.innerHeight*e*this.perf.scale)}step(e,t){let n=this.session;this.realTime+=e;let r=t.frozen?0:n.update(e),i=n.blast,a=n.t;n.director.groundAt=t.groundAt;let o=n.director.update(i,n.distance,a,t.aspect,e,n.jumpCamera||!!t.frozen);n.jumpCamera=!1;let s=t.octaves??this.perf.octaves,l=c(i,a,o,n.scenario.look,n.exposure,t.frozen?1:e,this.renderer.height,s,n.scorch);return l.post.shake=n.shake(this.realTime),a>0?n.particles.update(a,Math.max(r,t.frozen?n.clock.rate(a)/60:0),l.light):n.particles.count=0,n.props.update(a),this.renderer.render({view:o,look:n.scenario.look,world:l.world,boom:l.boom,particles:n.particles.data,particleCount:n.particles.count,props:n.props.data,propCount:n.props.count,post:l.post,time:this.realTime,octaves:s}),{view:o,hud:l.hud}}},d=class{ctx;out;reverb;noise;brown;windGain=null;constructor(e,t,n=1){this.ctx=e;let r=e.createDynamicsCompressor();r.threshold.value=-10,r.knee.value=8,r.ratio.value=8,r.attack.value=.002,r.release.value=.4,r.connect(t),this.out=e.createGain(),this.out.gain.value=.9,this.out.connect(r);let i=n>>>0||1,a=()=>(i=i*1664525+1013904223>>>0)/4294967296*2-1,o=e.sampleRate*3;this.noise=e.createBuffer(1,o,e.sampleRate),this.brown=e.createBuffer(1,o,e.sampleRate);let s=this.noise.getChannelData(0),c=this.brown.getChannelData(0),l=0;for(let e=0;e<o;e++)s[e]=a(),l=(l+.02*s[e])/1.02,c[e]=l*3.5;let u=Math.floor(e.sampleRate*3.5),d=e.createBuffer(2,u,e.sampleRate);for(let e=0;e<2;e++){let t=d.getChannelData(e);for(let e=0;e<u;e++)t[e]=a()*(1-e/u)**3.2*.5}this.reverb=e.createConvolver(),this.reverb.buffer=d;let f=e.createGain();f.gain.value=.35,this.reverb.connect(f).connect(this.out)}src(e,t=!1){let n=this.ctx.createBufferSource();return n.buffer=e,n.loop=t,n}wind(e,t){let n=this.ctx,r=this.src(this.noise,!0),i=n.createBiquadFilter();i.type=`bandpass`,i.frequency.value=500,i.Q.value=.6;let a=n.createGain();a.gain.value=.012;let o=n.createOscillator();o.frequency.value=.13;let s=n.createGain();s.gain.value=180,o.connect(s).connect(i.frequency),r.connect(i).connect(a).connect(this.out),r.start(e),o.start(e),t!==void 0&&(r.stop(t),o.stop(t)),this.windGain=a}boom(e,t){let n=this.ctx,r=t,i=Math.min(1,Math.max(.03,(e.db-85)/85))**1.4,a=Math.log10(Math.max(e.kt,1e-9)*1e9)/18,o=Math.min(14e3,Math.max(250,14e3*Math.exp(-e.distance/2500))),s=Math.min(4,Math.max(.12,e.duration*5)),c=.4+18*a*a,l=this.src(this.noise),u=n.createBiquadFilter();u.type=`lowpass`,u.frequency.value=o;let d=n.createGain();d.gain.setValueAtTime(0,r),d.gain.linearRampToValueAtTime(i,r+.002),d.gain.exponentialRampToValueAtTime(.001,r+Math.max(.04,s*.5)),l.connect(u).connect(d),d.connect(this.out),d.connect(this.reverb),l.start(r),l.stop(r+s+.1);let f=this.src(this.noise),p=n.createBiquadFilter();p.type=`lowpass`,p.frequency.value=Math.min(o,500-300*a);let m=n.createGain();m.gain.setValueAtTime(0,r),m.gain.linearRampToValueAtTime(i*1.6,r+.01),m.gain.exponentialRampToValueAtTime(.001,r+s*2),f.connect(p).connect(m),m.connect(this.out),m.connect(this.reverb),f.start(r),f.stop(r+s*2+.1);let h=n.createOscillator();h.type=`sine`,h.frequency.setValueAtTime(70-30*a,r),h.frequency.exponentialRampToValueAtTime(24,r+s*1.5);let g=n.createGain();if(g.gain.setValueAtTime(0,r),g.gain.linearRampToValueAtTime(i*.9,r+.015),g.gain.exponentialRampToValueAtTime(.001,r+s*1.8),h.connect(g).connect(this.out),h.start(r),h.stop(r+s*2),c>.6){let e=this.src(this.brown,!0),t=n.createBiquadFilter();t.type=`lowpass`,t.frequency.value=140;let a=n.createGain();a.gain.setValueAtTime(0,r),a.gain.linearRampToValueAtTime(i*.8,r+.3+c*.1),a.gain.exponentialRampToValueAtTime(.001,r+c),e.connect(t).connect(a).connect(this.out),e.start(r),e.stop(r+c+.2)}this.windGain&&(this.windGain.gain.setValueAtTime(.012+i*.05,r+.05),this.windGain.gain.setTargetAtTime(.012,r+.4,Math.max(1,c*.5)))}rumble(e,t){let n=this.ctx,r=this.src(this.brown),i=n.createBiquadFilter();i.type=`lowpass`,i.frequency.value=60;let a=n.createGain();a.gain.setValueAtTime(0,t),a.gain.linearRampToValueAtTime(.5*e,t+.08),a.gain.exponentialRampToValueAtTime(.001,t+1.6),r.connect(i).connect(a).connect(this.out),r.start(t),r.stop(t+1.8)}},f=class{ctx=null;synth=null;enabled=!0;muted=!1;unlock(){if(this.ctx){this.ctx.resume();return}let e=new AudioContext;this.ctx=e,this.synth=new d(e,e.destination,Math.floor(Math.random()*1e9)),this.synth.wind(e.currentTime),this.setEnabled(this.enabled)}setEnabled(e){this.enabled=e,this.ctx&&this.synth&&this.synth.out.gain.setTargetAtTime(e&&!this.muted?.9:0,this.ctx.currentTime,.05)}setMuted(e){this.muted=e,this.setEnabled(this.enabled)}boom(e){this.ctx&&this.synth&&this.enabled&&!this.muted&&this.synth.boom(e,this.ctx.currentTime+.01)}rumble(e){this.ctx&&this.synth&&this.enabled&&!this.muted&&this.synth.rumble(e,this.ctx.currentTime+.01)}};async function p(e,t,n=48e3){let r=new OfflineAudioContext(2,Math.ceil(t*n),n),i=new d(r,r.destination,7);i.wind(0,t);for(let t of e)t.rumble!==void 0&&i.rumble(t.rumble,t.at),t.boom&&i.boom(t.boom,t.at);return r.startRendering()}var m=class{enabled=!0;supported=typeof navigator<`u`&&`vibrate`in navigator;buzz(e){this.enabled&&this.supported&&navigator.vibrate(e)}blast(e){e<200?this.buzz([25]):e<1e3?this.buzz([45,25,30]):e<7e3?this.buzz([90,30,70,30,40]):e<35e3?this.buzz([160,40,130,40,90,40,50]):this.buzz([320,50,260,50,200,60,130,60,80])}seismic(){this.buzz([18,35,18,35,18,35,12])}tap(){this.buzz([8])}},h=4184e3,g=101325,_=340.3,v=1.225,y=9.81,b=299792458,x=6894.76,S=304.8,ee=41868,te=e=>20*Math.log10(Math.max(e,1e-9)/2e-5);function ne(e,t,n){return e<t?t:e>n?n:e}function C(e,t,n){let r=ne((n-e)/(t-e),0,1);return r*r*(3-2*r)}function w(e,t,n){let r=t.length;if(e<=t[0])return n[0];if(e>=t[r-1])return n[r-1];let i=0,a=r-1;for(;a-i>1;){let n=i+a>>1;t[n]<=e?i=n:a=n}let o=(e-t[i])/(t[a]-t[i]);return n[i]+(n[a]-n[i])*o}var T=[-3,-2,-1,0,Math.log10(20),3,4,Math.log10(5e4)],E=[.6,1.4,2.8,5.5,11.3,22.5,40,64];function re(e,t){if(!t)return 10*e**.3*(1+e/1e3)**.18;let n=Math.log10(e/1e6);return n>T[T.length-1]?64e3*10**((n-T[T.length-1])*.25):w(n,T,E)*1e3}function D(e,t,n){return n?e*(.35+.08*Math.log10(t/1e6+1)):.45*e}var ie=e=>1.8*Math.sqrt(e/y);function ae(e,t){if(!t)return 1.6*Math.cbrt(e);let n=e/1e6;return n<=1e3?70*n**.4:1109*(n/1e3)**.36}function oe(e,t){return 1.03*(e*t*t/v)**.2}var se=e=>.0417*e**.44,ce=e=>.03*Math.cbrt(e);function le(e,t,n){if(e<=0)return 0;if(t){let t=n,r=.07*t;return e<r?ue(e,1e-6,r,3e4,3e3):e<t?ue(e,r,t,3e3,7700):Math.max(7700*(e/t)**-.5,0)}let r=.15*n;return e<r?3e3:3e3*(e/r)**-.6}function ue(e,t,n,r,i){let a=Math.log(Math.max(e,t)/t)/Math.log(n/t);return r+(i-r)*Math.min(Math.max(a,0),1)}var de=(e,t=0)=>e.toLocaleString(`en-US`,{maximumFractionDigits:t,minimumFractionDigits:t});function O(e){let t=Math.abs(e);return t>=100?de(e,0):t>=10?de(e,1).replace(/\.0$/,``):de(e,2).replace(/0$/,``).replace(/\.0?$/,``)}function fe(e){return e>=1e9?`${O(e/1e9)} Mt`:e>=1e6?`${O(e/1e6)} kt`:e>=1e3?`${O(e/1e3)} t`:e>=1?`${O(e)} kg`:`${O(e*1e3)} g`}function k(e){return e>=1e3?`${O(e/1e3)} km`:e>=1?`${O(e)} m`:e>=.01?`${O(e*100)} cm`:`${O(e*1e3)} mm`}var pe=e=>e<0?`T − ${me(-e)}`:`T + ${me(e)}`;function me(e){if(e<.001)return`${O(e*1e6)} µs`;if(e<1)return`${O(e*1e3)} ms`;if(e<60)return`${O(e)} s`;let t=Math.floor(e/60),n=Math.round(e-t*60);return n?`${t} min ${n} s`:`${t} min`}function he(e){let t=e/6894.76,n=e>=1e6?`${O(e/1e6)} MPa`:e>=1e3?`${O(e/1e3)} kPa`:`${O(e)} Pa`;return t>=.1?`${n} · ${O(t)} psi`:n}var ge=e=>`${de(Math.round(e*3.6/10)*10)} km/h`,_e=e=>`${de(Math.round((e-273)/50)*50)} °C`;function ve(e){let t=e/41868;return t>=.1?`${O(t)} cal/cm²`:`none`}function ye(e){return e<.95?`slow-mo ×${O(1/e)}`:e>1.05?`fast ×${O(e)}`:`real time`}function be(e){let t=10**Math.floor(Math.log10(e)),n=e/t;return(n>=5?5:n>=2?2:1)*t}var xe=[{id:`tianjin`,name:`Tianjin port`,category:`accident`,nuclear:!1,tntKg:26e4,burstHeight:0,when:`12 August 2015`,where:`Port of Tianjin, China`,blurb:`A fire in a chemical warehouse set off two explosions 33 seconds apart. This is the second, bigger one.`,facts:[`About 800 t of ammonium nitrate went up, roughly 256 t of TNT. Seismic estimates for the blast vary widely.`,`An overheated container of dry nitrocellulose started it all.`,`173 people died, many of them firefighters.`],observer:{def:1e3,min:60,max:15e3},look:{smoke:[.6,.4,.3],soot:.35,dust:.55,condensation:.5,sparks:200,debris:380,mushroom:.5,prefire:!0}},{id:`beirut`,name:`Beirut port`,category:`accident`,nuclear:!1,tntKg:8e5,burstHeight:0,when:`4 August 2020`,where:`Port of Beirut, Lebanon`,blurb:`About 2,750 t of ammonium nitrate, forgotten in a port warehouse, caught fire and detonated.`,facts:[`Estimated at 0.5–1.1 kilotons of TNT (Rigby et al., 2020), one of the biggest non-nuclear blasts ever.`,`Humid sea air turned the shock wave into a white dome of condensation, filmed from all over the city.`,`It left a crater about 124 m wide and registered as a magnitude 3.3 earthquake.`,`It was heard in Cyprus, about 240 km away. Over 200 people died and some 300,000 lost their homes.`],observer:{def:2e3,min:100,max:3e4},look:{smoke:[.62,.36,.26],soot:.25,dust:.6,condensation:1,sparks:180,debris:420,mushroom:.55,prefire:!0}},{id:`halifax`,name:`Halifax harbour`,category:`accident`,nuclear:!1,tntKg:29e5,burstHeight:0,when:`6 December 1917`,where:`Halifax, Nova Scotia, Canada`,blurb:`The munitions ship Mont-Blanc, loaded with TNT, picric acid and benzol, collided with another ship and caught fire.`,facts:[`About 2.9 kilotons of TNT: the largest human-made explosion until the atomic bomb.`,`A cloud of white smoke rose at least 3.6 km, and a tsunami up to 18 m high swept the shore.`,`Part of the ship's anchor, weighing over 500 kg, landed nearly 4 km away.`,`At least 1,782 people died and about 9,000 were injured.`],observer:{def:2e3,min:150,max:4e4},look:{smoke:[.86,.84,.82],soot:.15,dust:.5,condensation:.7,sparks:220,debris:450,mushroom:.6,prefire:!0}},{id:`texas-city`,name:`Texas City`,category:`accident`,nuclear:!1,tntKg:3e6,burstHeight:0,when:`16 April 1947`,where:`Port of Texas City, Texas, USA`,blurb:`A fire on the freighter Grandcamp detonated about 2,100 t of ammonium nitrate fertiliser.`,facts:[`Estimated at around 3 kilotons of TNT, the deadliest industrial accident in US history.`,`It broke windows in Houston, 64 km away, and was felt 400 km away in Louisiana.`,`At least 581 people died, including almost the whole town fire department.`],observer:{def:2e3,min:150,max:6e4},look:{smoke:[.5,.42,.36],soot:.45,dust:.55,condensation:.6,sparks:220,debris:450,mushroom:.6,prefire:!0}}],Se=[{id:`firecracker`,name:`Firecracker`,category:`chemical`,nuclear:!1,tntKg:5e-4,burstHeight:0,blurb:`Half a gram of flash powder: aluminium and potassium perchlorate.`,facts:[`Flash powder burns in well under a millisecond, so the bang is a real (tiny) shock wave.`,`Right next to it the bang peaks above 150 dB, about as loud as a jet engine at 30 m.`,`Almost all firework injuries are to hands, eyes and ears, not from the blast wave.`],observer:{def:3,min:.5,max:60},look:{smoke:[.82,.82,.84],soot:.05,dust:.15,condensation:0,sparks:260,debris:50,mushroom:0}},{id:`dynamite`,name:`Stick of dynamite`,category:`chemical`,nuclear:!1,tntKg:.2,burstHeight:0,blurb:`One classic stick: about 190 g of nitroglycerin soaked into an absorbent filler.`,facts:[`Alfred Nobel patented dynamite in 1867. Nitroglycerin alone explodes if you so much as drop it.`,`Nobel left most of his fortune to fund the Nobel Prizes.`,`Its energy is close to that of the same weight of TNT.`],observer:{def:15,min:1,max:300},look:{smoke:[.5,.45,.4],soot:.55,dust:.65,condensation:0,sparks:90,debris:200,mushroom:.08}},{id:`grenade`,name:`Hand grenade`,category:`chemical`,nuclear:!1,tntKg:.24,burstHeight:.3,blurb:`An M67 fragmentation grenade: 180 g of Composition B inside a steel body.`,facts:[`It kills within about 5 m and wounds out to 15 m, mostly with fragments. This game shows the blast, not the fragments.`,`Fragments can fly as far as 230 m.`,`The fuse burns for 4–5 seconds after the lever flies off.`],observer:{def:15,min:1,max:300},look:{smoke:[.48,.44,.4],soot:.6,dust:.5,condensation:0,sparks:80,debris:220,mushroom:.05}},{id:`c4`,name:`C-4 block`,category:`chemical`,nuclear:!1,tntKg:.76,burstHeight:0,blurb:`One standard M112 block: 570 g of C-4, worth about 760 g of TNT.`,facts:[`C-4 is about 91% RDX, a military high explosive, mixed with a plasticiser.`,`Its detonation front races through the block at about 8 km/s.`,`It is so stable that soldiers in Vietnam burned small pieces as cooking fuel. Only a detonator sets it off.`],observer:{def:30,min:2,max:600},look:{smoke:[.4,.35,.3],soot:.7,dust:.7,condensation:0,sparks:120,debris:260,mushroom:.15}},{id:`moab`,name:`MOAB`,category:`chemical`,nuclear:!1,tntKg:11e3,burstHeight:2,blurb:`The GBU-43/B "Massive Ordnance Air Blast": 8.5 t of H6 explosive, about 11 t of TNT.`,facts:[`Too big for a bomber, it slides out of the back of a cargo plane on a parachute and then glides to its target.`,`It goes off just above the ground, so its blast spreads instead of digging a crater.`,`It has been used in combat once, in Afghanistan on 13 April 2017.`],observer:{def:300,min:20,max:1e4},look:{smoke:[.46,.4,.34],soot:.55,dust:.75,condensation:.15,sparks:160,debris:300,mushroom:.35}},{id:`minor-scale`,name:`Minor Scale`,category:`chemical`,nuclear:!1,tntKg:4e6,burstHeight:0,when:`27 June 1985`,where:`White Sands Missile Range, New Mexico`,blurb:`4,744 t of ANFO (fertiliser and fuel oil) stacked in a dome, set off to mimic a nuclear blast.`,facts:[`About 4 kilotons of TNT: reported as the largest planned conventional explosion in the history of the free world.`,`It was built to roughly simulate an 8-kiloton nuclear airburst, to test military equipment.`,`ANFO is the same mixture used in mining and quarrying.`],observer:{def:3e3,min:150,max:4e4},look:{smoke:[.66,.56,.46],soot:.25,dust:.85,condensation:.2,sparks:120,debris:450,mushroom:.65}}],Ce=e=>Math.PI/12*e.density*e.diameter**3*e.speed**2;function we(e,t=2500){return 1.25*(1.161*(e.density/t)**(1/3)*e.diameter**.78*e.speed**.44*y**-.22*Math.sin(e.angle*Math.PI/180)**(1/3))}var Te=e=>e+Math.max(25e3,1.2*e);function Ee(e,t){return(Te(t)-t)/Math.sin(e.angle*Math.PI/180)/e.speed}var De=e=>Ce(e)/h,Oe={diameter:19,density:3300,speed:19e3,angle:18},ke={diameter:60,density:3e3,speed:17e3,angle:35},Ae={diameter:50,density:7800,speed:12800,angle:45},je=[{id:`chelyabinsk`,name:`Chelyabinsk meteor`,category:`cosmic`,nuclear:!0,impact:Oe,tntKg:De(Oe),burstHeight:3e4,when:`15 February 2013`,where:`Chelyabinsk, Russia`,blurb:`A 19 m, 12,000-tonne asteroid hit the atmosphere at 19 km/s and blew apart about 30 km up.`,facts:[`About 500 kilotons of TNT, some 30 times Hiroshima, released high in the air.`,`For a moment it was brighter than the Sun, and people felt its heat on their faces.`,`The blast wave reached the ground a minute or two later and broke windows in about 7,200 buildings.`,`About 1,500 people were hurt, mostly by flying glass: many had gone to the window to look at the flash.`],observer:{def:4e4,min:5e3,max:3e5},look:{smoke:[.8,.77,.74],soot:.05,dust:0,condensation:0,sparks:0,debris:0,mushroom:0,cloud:.2}},{id:`tunguska`,name:`Tunguska event`,category:`cosmic`,nuclear:!0,impact:ke,tntKg:De(ke),burstHeight:8e3,when:`30 June 1908`,where:`Podkamennaya Tunguska, Siberia`,blurb:`A stony object about 60 m across exploded 5–10 km above the Siberian forest.`,facts:[`Estimates range from 3 to 15 megatons of TNT; this one comes out near 12.`,`It flattened some 80 million trees over 2,150 km², an area about the size of Tokyo.`,`At a trading post 60 km away, a man felt heat as if his shirt were on fire and was thrown from his chair.`,`No crater was ever found: it blew apart in the air.`],observer:{def:6e4,min:5e3,max:5e5},look:{smoke:[.7,.62,.56],soot:.15,dust:.45,condensation:.1,sparks:0,debris:0,mushroom:.7,cloud:.8}},{id:`meteor-crater`,name:`Meteor Crater`,category:`cosmic`,nuclear:!0,impact:Ae,tntKg:De(Ae),burstHeight:0,when:`About 50,000 years ago`,where:`Arizona, USA`,blurb:`An iron meteorite about 50 m across struck the desert at about 13 km/s.`,facts:[`About 10 megatons of TNT.`,`The real crater is 1.2 km wide and 170 m deep, one of the best preserved on Earth. Crater scaling here gives about 1.5 km.`,`Most of the iron vaporised or melted. Fragments, the Canyon Diablo meteorites, still lie scattered around it.`],observer:{def:1e4,min:1500,max:2e5},look:{smoke:[.66,.54,.44],soot:.2,dust:.9,condensation:0,sparks:120,debris:600,mushroom:.6}}],Me={soot:.2,sparks:0,debris:0,mushroom:1},Ne=[{id:`hiroshima`,name:`Hiroshima`,category:`nuclear`,nuclear:!0,tntKg:15e6,burstHeight:600,when:`6 August 1945`,where:`Hiroshima, Japan`,blurb:`Little Boy, a uranium gun-type bomb, exploded about 600 m above the city.`,facts:[`Its energy was about 15 kilotons of TNT.`,`Less than 1 kg of its 64 kg of uranium actually fissioned.`,`Almost every building within about 1.6 km was destroyed: that is the 5 psi ring.`,`Around 70,000–80,000 people died that day, and about 140,000 by the end of 1945.`],observer:{def:3e3,min:200,max:4e4},look:{...Me,smoke:[.66,.56,.5],dust:.5,condensation:.25}},{id:`trinity`,name:`Trinity`,category:`nuclear`,nuclear:!0,tntKg:248e5,burstHeight:30,when:`16 July 1945`,where:`Jornada del Muerto desert, New Mexico`,blurb:`The first nuclear explosion ever: a plutonium bomb hung on a 30 m steel tower in the desert.`,facts:[`Its yield is now estimated at about 25 kilotons of TNT.`,`Enrico Fermi, 16 km away, dropped scraps of paper as the blast passed and estimated about 10 kilotons from how far they moved.`,`The heat melted the desert sand into a green glass now called trinitite.`,`From photos alone, G.I. Taylor later worked out its yield with the same blast-wave formula this game uses.`],observer:{def:16e3,min:300,max:6e4},look:{...Me,smoke:[.72,.58,.5],dust:.85,condensation:.1}},{id:`nagasaki`,name:`Nagasaki`,category:`nuclear`,nuclear:!0,tntKg:21e6,burstHeight:500,when:`9 August 1945`,where:`Nagasaki, Japan`,blurb:`Fat Man, a plutonium implosion bomb, exploded about 500 m above the Urakami valley.`,facts:[`About 21 kilotons of TNT, more than Hiroshima, but the city's hills sheltered some districts.`,`Its core was about 6 kg of plutonium, the size of a grapefruit.`,`Estimates of the dead by the end of 1945 range from about 39,000 to 80,000.`],observer:{def:3e3,min:250,max:4e4},look:{...Me,smoke:[.68,.58,.52],dust:.5,condensation:.3}},{id:`w88`,name:`W88 warhead`,category:`nuclear`,nuclear:!0,tntKg:475e6,burstHeight:1900,blurb:`A US submarine-launched warhead of today: 475 kilotons, set to burst high for the widest damage.`,facts:[`About 30 times Hiroshima, in a cone small enough to fit on a Trident II missile with several others.`,`Each warhead on a missile can be aimed at a different target.`,`Bursting about 1.9 km up maximises the area hit by 5 psi, the pressure that flattens most buildings.`],observer:{def:1e4,min:1e3,max:15e4},look:{...Me,smoke:[.72,.64,.6],dust:.4,condensation:.25}},{id:`ivy-mike`,name:`Ivy Mike`,category:`nuclear`,nuclear:!0,tntKg:104e8,burstHeight:0,when:`1 November 1952`,where:`Elugelab island, Enewetak Atoll`,blurb:`The first hydrogen bomb: "the Sausage", a 74-tonne device the size of a building, cooled with liquid deuterium.`,facts:[`10.4 megatons of TNT, about 700 times Hiroshima.`,`The island of Elugelab vanished, leaving a crater 1.9 km wide and 50 m deep.`,`The fireball reached about 3 km in radius, and the cloud rose to 41 km.`,`The cloud's top eventually spread 161 km wide.`],observer:{def:5e4,min:4e3,max:4e5},look:{...Me,smoke:[.76,.7,.68],dust:.6,condensation:.5}},{id:`castle-bravo`,name:`Castle Bravo`,category:`nuclear`,nuclear:!0,tntKg:15e9,burstHeight:0,when:`1 March 1954`,where:`Bikini Atoll, Marshall Islands`,blurb:`Expected to yield 6 megatons, it gave 15: the biggest US test ever, and its worst miscalculation.`,facts:[`The designers thought lithium-7 in the fuel would stay inert. It didn't, and the yield came out 2.5 times bigger.`,`It blew a crater about 2 km wide in the reef.`,`Fallout poisoned the crew of the Japanese fishing boat Lucky Dragon No. 5 and the people of Rongelap, more than 150 km away.`],observer:{def:4e4,min:4e3,max:4e5},look:{...Me,smoke:[.76,.7,.68],dust:.6,condensation:.5}},{id:`tsar`,name:`Tsar Bomba`,category:`nuclear`,nuclear:!0,tntKg:5e10,burstHeight:4e3,when:`30 October 1961`,where:`Novaya Zemlya, Soviet Arctic`,blurb:`The biggest explosion humans have ever made: 50 megatons, dropped by parachute and set off 4 km up.`,facts:[`About 1,400 times the energy of the Hiroshima and Nagasaki bombs combined.`,`It was a 100-megaton design, run at half power to limit fallout.`,`The mushroom cloud rose about 64 km, seven times higher than Everest.`,`Windows broke as far as 900 km away, in Norway and Finland.`],observer:{def:6e4,min:3e3,max:1e6},look:{...Me,smoke:[.74,.68,.66],soot:.1,dust:.35,condensation:.15}}],Pe=[`chemical`,`accident`,`nuclear`,`nature`,`cosmic`,`custom`],Fe=[...Se,...xe,...Ne,...je].sort((e,t)=>Pe.indexOf(e.category)-Pe.indexOf(t.category)||e.tntKg-t.tntKg);function Ie(){let e=new Map;for(let t of Fe)e.has(t.category)||e.set(t.category,[]),e.get(t.category).push(t);return[...e.entries()]}var Le={minLogKg:-3,maxLogKg:11,maxHeight:3e4},Re=(e,t,n)=>e+(t-e)*n;function ze(e,t){if(t)return{smoke:[.68,.58,.52],soot:.15,dust:.45,condensation:.2,sparks:0,debris:0,mushroom:1};let n=Math.min(1,Math.max(0,Math.log10(e)/6));return{smoke:[Re(.42,.62,n),Re(.37,.4,n),Re(.32,.3,n)],soot:Re(.65,.3,n),dust:Re(.5,.6,n),condensation:.6*n,sparks:Math.round(Re(180,150,n)),debris:Math.round(Re(200,400,n)),mushroom:Re(.05,.6,n)}}function Be(e){let t=Fe.filter(e=>e.category!==`custom`).sort((e,t)=>e.tntKg-t.tntKg),n=[...t].reverse().find(t=>t.tntKg<=e),r=t.find(t=>t.tntKg>e),i=e=>e>=10?Math.round(e).toLocaleString(`en-US`):e.toFixed(1).replace(/\.0$/,``),a=[];return n&&a.push(e/n.tntKg<1.05?`about the same as ${n.name}`:`${i(e/n.tntKg)}× ${n.name}`),r&&a.push(`1/${i(r.tntKg/e)} of ${r.name}`),`That's ${a.join(` and `)}.`}function Ve(e){let t=Math.cbrt(e.kg),n=ae(e.kg,e.nuclear),r=re(e.kg,e.nuclear),i=e.height<1?`on the ground`:`${k(e.height)} up`;return{id:`custom`,name:`Custom ${e.nuclear?`nuclear`:`chemical`}`,category:`custom`,nuclear:e.nuclear,tntKg:e.kg,burstHeight:e.height,blurb:`Your own blast: ${fe(e.kg)} of TNT, ${e.nuclear?`nuclear`:`chemical`}, ${i}.`,facts:[Be(e.kg),`Its fireball grows to about ${k(2*n)} across, and the cloud tops out near ${k(r)}.`],observer:{def:Math.max(25*t,n*3,e.height*1.5),min:Math.max(.3,n*1.2),max:Math.min(2e6,Math.max(400*t,50,e.height*20))},look:ze(e.kg,e.nuclear)}}var He={id:`desert`,name:`Desert test range`,blurb:`Flat desert at sunrise, mesas and mountains on the horizon. Nothing to hide behind.`,look:{sunDir:Ue([-.72,.3,-.5]),sunCol:[1,.78,.56],zenith:[.13,.27,.6],skyMid:[.4,.56,.84],horizon:[1,.7,.5],ground:[.66,.48,.33],ground2:[.4,.28,.2],rock:[.58,.36,.26],dustCol:[.78,.62,.48],visibility:9e4,deckHeight:6500,deckCover:.45}};function Ue(e){let t=Math.hypot(e[0],e[1],e[2]);return[e[0]/t,e[1]/t,e[2]/t]}var We=[He];function Ge(e){let t=Math.max(e,.05);return 808*(1+(t/4.5)**2)/Math.sqrt((1+(t/.048)**2)*(1+(t/.32)**2)*(1+(t/1.35)**2))}function Ke(e,t){let n=Math.max(e,.05);return 980*(1+(n/.54)**10)/((1+(n/.02)**3)*(1+(n/.74)**6)*Math.sqrt(1+(n/6.9)**2))/1e3*Math.cbrt(t)}function qe(e,t,n){let r=1.22-3.908*e**2/(1+810.2*e**5),i=2.321+6.195*e**18/(1+1.113*e**18)-.03831*e**17/(1+.02415*e**17)+.6692/(1+4164*e**8),a=4.153-1.149*e**18/(1+1.641*e**18)-1.1/(1+2.771*e**2.5),o=-4.166+25.76*e**1.75/(1+1.382*e**18)+8.257*e/(1+3.219*e),s=1-.004642*e**18/(1+.003886*e**18),c=.6096+2.879*e**9.25/(1+2.359*e**14.5)-17.5*e**2/(1+71.66*e**3),l=1.83+5.361*e**2/(1+.3139*e**6),u=8.808*e**1.5/(1+154.5*e**3.5)-(.2905+64.67*e**5)/(1+441.5*e**5)-1.389*e/(1+49.03*e**5)+1.094*t**2/((781.2-123.4*t+37.98*t**1.5+t**2)*(1+2*n)),d=629e-6*n**4/(3.493e-9+n**4)-2.67*n**2/(1+1e7*n**4.3),f=5.18+.2803*n**3.5/(3788e-9+n**4);return 10.47/t**r+i/t**a+o*s/(1+c*t**l)+u+d/t**f}function Je(e,t){let n=Math.max(e,.02),r=Math.max(Math.hypot(n,t),.06);return Math.max(qe(t/n,r,t),0)}function Ye(e){return e<=25?Je(e,0):Je(25,0)*(25/e)**1.2}var Xe=10;function Ze(e,t,n){let r=Math.cbrt(e),i=Math.max(t,1)/S/r,a=Math.max(n,0)/S/r;return(i<=Xe?Je(i,a):Je(Xe,a)*Ye(i)/Ye(Xe))*x}var Qe=e=>_*Math.sqrt(1+6*e/(7*g)),$e=e=>_*(5*e/(7*g))/Math.sqrt(1+6*e/(7*g));function et(e,t){return e>=t[2]?3:e>=t[1]?2:+(e>=t[0])}function tt(e){if(e.insideFireball)return{severity:5,title:`Inside the fireball`,effects:[`Vaporised before the blast even arrives.`]};let t=[],n=0,r=e=>n=Math.max(n,e),i=.5*e.dp*e.duration,a=Math.min(4,Math.sqrt(Math.max(.01/Math.max(e.duration,1e-5),1)));e.dp>=4e5*a?(r(5),t.push(`The pressure wave crushes your lungs.`)):e.dp>=2e5*a?(r(5),t.push(`Severe lung damage; survival unlikely.`)):e.dp>=1e5?(r(4),t.push(`Eardrums burst for most people.`)):e.dp>=35e3&&(r(4),t.push(`Your eardrums may burst.`)),i>=30&&(e.dp>=35e3?(t.push(`Most buildings around you collapse.`),r(4)):e.dp>=2e4?(t.push(`Houses collapse.`),r(3)):e.dp>=7e3?(t.push(`Windows shatter into flying glass.`),r(2)):e.dp>=1e3&&(t.push(`Windows can break.`),r(1)));let o=e.wind*3.6;o>=400&&e.duration>.05?(t.push(`A ${nt(o)} wind throws you like debris.`),r(5)):o>=150&&e.duration>.05?(t.push(`A ${nt(o)} gust knocks you down.`),r(3)):o>=60&&e.duration>.05&&(t.push(`A ${nt(o)} gust hits you.`),r(1));let s=et(e.heat,e.burns);return s===3?(t.push(`Third-degree burns on exposed skin.`),r(5)):s===2?(t.push(`Second-degree burns (blisters).`),r(3)):s===1&&(t.push(`First-degree burns, like a bad sunburn.`),r(2)),e.db>=140&&e.dp<35e3?(t.push(`Painfully loud: risk of permanent hearing damage.`),r(1)):e.db>=120&&e.dp<35e3?t.push(`A very loud bang.`):e.db<120&&t.push(e.db>=90?`A distant boom.`:`A faint rumble.`),{severity:n,title:[`You are fine`,`Shaken, not hurt`,`Injured`,`Badly injured`,`Critical`,`Not survivable`][n],effects:t}}function nt(e){return`${Math.round(e/10)*10} km/h`}var rt=e=>e?.35:.08,it=e=>Math.exp(-((e/22e3)**.35));function at(e,t,n,r=rt(t)){let i=Math.max(n,1);return r*e*it(i)/(4*Math.PI*i*i)}function ot(e,t){let n=t?[2,4,6]:[1.5,3,5],r=t?Math.max(1,(e/1e6)**.06):1;return n.map(e=>e*r*ee)}var st=class{ex;kg;kt;energy;nuclear;hb;surface;timeScale;fireballMax;fireballMaxTime;cloudTop;capRadius;riseTau;crater;burns;heatFraction;entryTime;wFree;wGround;tableR;tableT;capFinalY;constructor(e){this.ex=e,this.kg=e.tntKg,this.kt=e.tntKg/1e6,this.energy=e.tntKg*h,this.nuclear=e.nuclear,this.hb=e.burstHeight;let t=ae(this.kg,this.nuclear);this.surface=this.hb<.5*t,this.fireballMax=this.nuclear&&this.surface?t*1.3:t,this.timeScale=this.nuclear?se(this.kt):ce(this.kg);let n=this.nuclear?.5*this.kg:this.kg;this.wFree=this.surface?n*(this.nuclear?2:1.8):n,this.wGround=n*1.8,this.fireballMaxTime=Math.sqrt((this.fireballMax/1.03)**5*(1.225/this.energy))*1.5,this.cloudTop=re(this.kg,this.nuclear),this.capRadius=D(this.cloudTop,this.kg,this.nuclear),this.riseTau=ie(this.cloudTop);let r=this.capRadius*.42*e.look.mushroom+this.capRadius*.8*(1-e.look.mushroom);this.capFinalY=Math.max(this.cloudTop-r,this.hb+this.fireballMax);let i=this.nuclear?.4:.8,a=e.impact;if(!this.surface)this.crater=null;else if(a){let e=we(a);this.crater={r:e/2,depth:e/7}}else this.crater={r:i*Math.cbrt(this.kg),depth:.35*i*Math.cbrt(this.kg)};this.burns=ot(this.kg,this.nuclear),this.heatFraction=a?this.surface?.003:.15:rt(this.nuclear),this.entryTime=a?Ee(a,this.hb):0;let o=Math.cbrt(this.wFree),s=.05*o;this.tableR=new Float64Array(500),this.tableT=new Float64Array(500);let c=s/Qe(Ge(.05)*g),l=s;for(let e=0;e<500;e++){let t=s*(5e6/s)**(e/499);if(e>0){let e=.5*(t+l);c+=(t-l)/Qe(Ge(e/o)*g)}this.tableR[e]=t,this.tableT[e]=c,l=t}}shockRadius(e){if(e<=0)return 0;let t=w(e,this.tableT,this.tableR),n=this.nuclear?oe(this.energy,e):0;return Math.max(t,n,e<this.tableT[0]?this.tableR[0]*e/this.tableT[0]:0)}arrival(e){if(this.nuclear){let t=Math.sqrt((e/1.03)**5*(1.225/this.energy));return Math.min(t,w(e,this.tableR,this.tableT))}return w(e,this.tableR,this.tableT)}groundRing(e){let t=this.shockRadius(e);return t>this.hb?Math.sqrt(t*t-this.hb*this.hb):0}slant(e){return Math.hypot(e,this.hb)}groundOverpressure(e){return this.nuclear?Ze(this.kt,e,this.hb):Ge(this.slant(e)/Math.cbrt(this.wGround))*g}positivePhase(e){let t=Math.cbrt(this.wGround);return Ke(this.slant(e)/t,this.wGround)}heatAt(e){return at(this.energy,this.nuclear,this.slant(e),this.heatFraction)}entry(e){let t=this.ex.impact;if(!t)return null;let n=t.angle*Math.PI/180,r=(Te(this.hb)-this.hb)/Math.sin(n),i=-Math.cos(n)*r,a=this.hb+Math.sin(n)*r,o=e>=0?1:Math.max(0,1+e/this.entryTime);return{ax:i,ay:a,bx:i+(0-i)*o,by:a+(this.hb-a)*o}}fireball(e){let t=oe(this.energy,Math.max(e,0)),n=this.fireballMax*Math.tanh(t/this.fireballMax),r=this.cloud(e);return{y:Math.max(r.capY,this.hb),r:n,temp:le(e,this.nuclear,this.timeScale)}}cloud(e){let t=this.riseTau,n=this.ex.look.mushroom,r=1-Math.exp(-((Math.max(e,0)/t)**1.2)),i=1-Math.exp(-((Math.max(e,0)/(1.5*t))**1.3)),a=this.hb+(this.capFinalY-this.hb)*r,o=this.fireballMax+(this.capRadius-this.fireballMax)*i,s=o*(.95+-.53*i*n+(.8-.95)*i*(1-n)),c=this.arrival(Math.max(this.hb,1)),l=n*Math.min(1,Math.max(0,1-(this.hb-2*this.fireballMax)/(8*this.fireballMax)))*C(c,c+.6*t,e)*C(.02,.4,r),u=this.groundRing(e),d=this.ex.look.dust*C(0,1,u/Math.max(this.fireballMax,1))*Math.exp(-e/(6*t));return{capY:a,capA:o,capB:s,stemTop:a-s*.5,stemW:o*(.07+.06*n)*(.6+.4*i),stem:l,skirtR:Math.min(u*.5,o*1.25),skirtH:Math.min(u*.5,o*1.25)*.28,skirt:d,roll:e/t*5,morph:C(.01,.5,r)}}observer(e){let t=this.slant(e),n=t<this.fireballMax,r=this.groundOverpressure(e),i=this.heatAt(e),a=this.arrival(t),o=this.nuclear?Ke(t/Math.cbrt(this.kg),this.kg):this.positivePhase(e),s=$e(r),c=te(r),l=this.surface&&e<3e3*Math.cbrt(Math.max(this.kt,1e-6))&&this.kg>50;return{distance:e,slant:t,flashT:t/b,heat:i,burn:et(i,this.burns),shockT:a,dp:r,wind:s,duration:o,db:c,seismicT:l?e/2500:null,insideFireball:n,verdict:tt({dp:r,duration:o,wind:s,db:c,heat:i,burns:this.burns,insideFireball:n})}}endTime(e){let t=this.arrival(this.slant(e));return Math.max(t*1.3,2.4*this.riseTau,this.fireballMaxTime*4)}timeline(e){let t=this.observer(e),n=[{t:0,kind:`detonation`,text:`Detonation`}];return n.push({t:t.flashT,kind:`flash`,text:`The flash reaches you`}),n.push({t:this.fireballMaxTime,kind:`fireball`,text:`Fireball at full size`}),this.nuclear&&n.push({t:this.timeScale,kind:`heat`,text:`Heat pulse at its peak`}),t.seismicT!==null&&n.push({t:t.seismicT,kind:`seismic`,text:`The ground shakes`}),n.push({t:t.shockT,kind:`shock`,text:`The blast wave hits you`}),n.push({t:2*this.riseTau,kind:`cloud`,text:`The cloud reaches its top`}),n.sort((e,t)=>e.t-t.t)}},ct=2.4;function lt(e,t,n,r,i=[0,0,0]){let a=e.dist/(r+e.dist);if(!(a>0))return null;let o=e.cx+(t-e.cx)*a,s=e.eyeY+(n-e.eyeY)*a;return i[0]=(o-e.cx)/(e.vh*e.aspect),i[1]=(s-e.cy)/e.vh,i[2]=a,i}var ut=.1,dt=class{view={cx:0,cy:1,vh:1,aspect:1,eyeY:.5,dist:2.4};logVh=0;cx=0;primed=!1;g=.2;groundAt=.2;target(e,t,n,r){let i=e.fireballMax,a=-i*1.6,o=i*1.6,s=Math.max(e.hb+i*1.8,i*3);if(n>0){let r=e.cloud(n),i=e.fireball(n),c=Math.max(r.capA*1.3,i.r*1.6,r.skirt>.2?r.skirtR*1.1:0);a=Math.min(a,-c),o=Math.max(o,c),s=Math.max(s,r.capY+r.capB*1.25,i.y+i.r*1.4),e.ex.impact&&e.hb>0&&(s=Math.max(s,e.hb*1.45),a=Math.min(a,-e.hb*.7));let l=e.arrival(e.slant(t)),u=e.groundRing(n),d=Math.min(u,t);n<l*1.6&&d>o*.8&&(o=Math.max(o,d*1.12)),u>t*.55&&n<l*1.6&&(o=Math.max(o,t*1.12))}n<=0&&t<i*8&&(o=Math.max(o,t*1.15));let c=n<0?e.entry(n):null;c&&(a=Math.min(a,c.bx-Math.max(8e3,.35*Math.abs(c.bx))),s=Math.max(s,c.by+Math.max(6e3,.3*c.by),e.hb*1.25));let l=(o-a)/2,u=2-2*this.g-ut*2,d=Math.max(s/u,l/r,.05);return{cx:(a+o)/2,vh:d}}update(e,t,n,r,i,a=!1){let o=this.target(e,t,n,r),s=Math.log(o.vh);if(a||!this.primed)this.logVh=s,this.cx=o.cx,this.g=this.groundAt,this.primed=!0;else{this.g+=(this.groundAt-this.g)*(1-Math.exp(-3*i));let e=s>this.logVh?4.5:1.2,t=1-Math.exp(-e*i);this.logVh+=(s-this.logVh)*t,this.cx+=(o.cx-this.cx)*t}let c=Math.exp(this.logVh),l=-1+2*this.g,u=-l*c,d=l+.2;return this.view={cx:this.cx,cy:u,vh:c,aspect:r,eyeY:u+d*c,dist:ct*c},this.view}reset(){this.primed=!1}},ft=2,pt=4.5,mt=class{t=0;speed=1;playing=!1;rMin;tA;entryRate;start;end;constructor(e,t){this.start=-e.entryTime,this.t=this.start,this.entryRate=e.entryTime/pt,this.rMin=e.fireballMaxTime/1.8,this.tA=e.arrival(e.slant(t)),this.end=e.endTime(t)}rate(e){if(e<0)return this.entryRate;let t=Math.max(this.rMin,e/ft),n=.12*this.tA+this.rMin;return t*(1-.8*Math.exp(-(((e-this.tA)/n)**2)))}tick(e){if(!this.playing)return 0;let t=Math.min(e,.1),n=this.rate(this.t),r=this.rate(this.t+n*t*.5*this.speed)*t*this.speed;return this.t<0&&this.t+r>0&&(r=-this.t),this.t+=r,this.t>this.end*3&&(this.t=this.end*3,this.playing=!1),r}get done(){return this.t>=this.end}get factor(){return this.rate(this.t)*this.speed}};function ht(e){let t=e>>>0,n=()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296};return{next:n,range:(e,t)=>e+(t-e)*n(),log:(e,t)=>e*(t/e)**n(),sign:()=>n()<.5?-1:1}}var gt=12,_t=class{ps=[];data;count=0;constructor(e,t,n=1){let r=e.ex.look,i=e.fireballMax,a=e.timeScale,o=ht(Math.round(e.kg*1e3)+7),s=e.crater?.r??0,c=Math.round(r.sparks*n);for(let t=0;t<c;t++){let t=o.range(0,Math.PI*2),n=Math.acos(o.range(-1,1)),r=Math.cos(n);e.surface&&(r=Math.abs(r)*.9+.1);let s=Math.sin(n)*Math.cos(t),c=Math.sin(n)*Math.sin(t),l=i/a*o.range(1,3);this.ps.push({t0:o.range(0,.3*a),x:s*i*.3,y:e.hb+Math.max(r*i*.3,0),z:c*i*.3,vx:s*l,vy:r*l,vz:c*l,tau:a*o.range(2,6),g:-9.81,size:i*o.range(.006,.02),grow:0,life:a*o.range(8,30),kind:2,r:1,gg:1,b:1,a:0})}if(e.surface&&s>0){let i=Math.round(r.debris*n),c=e.ex.id===`firecracker`;for(let e=0;e<i;e++){let e=o.range(.6,1.45),n=o.range(0,Math.PI*2),r=Math.sqrt(9.81*Math.max(s,.05)*o.range(2,14)),i=2*r*Math.sin(e)/9.81,l=o.range(.3,.6),u=c?[.7,.08,.06]:[t.dustCol[0]*l,t.dustCol[1]*l,t.dustCol[2]*l],d=s*Math.sqrt(o.next())*.8;this.ps.push({t0:o.range(0,.2*a),x:Math.cos(n)*d,y:0,z:Math.sin(n)*d,vx:Math.cos(n)*Math.cos(e)*r,vy:Math.sin(e)*r,vz:Math.sin(n)*Math.cos(e)*r,tau:i*o.range(.6,3),g:-9.81,size:Math.max(s*o.range(.015,.06),.003),grow:0,life:i*o.range(1.5,3)+5*a,kind:1,r:u[0],gg:u[1],b:u[2],a:1})}}let l=Math.round(r.dust*600*n);if(l>0){let n=i*2;for(let t=i*2;t<1e7&&!(e.groundOverpressure(t)<3e3);t*=1.15)n=t;let r=Math.max(i*1.1,e.hb*.3);for(let i=0;i<l;i++){let i=o.log(r,Math.max(n,r*1.5)),s=o.range(0,Math.PI*2),c=e.arrival(e.slant(i)),l=e.groundOverpressure(i),u=340*(5*l/709275)/Math.sqrt(1+6*l/709275),d=o.range(.85,1.15);this.ps.push({t0:c,x:Math.cos(s)*i,y:0,z:Math.sin(s)*i,vx:Math.cos(s)*u*o.range(.15,.4),vy:u*o.range(.04,.15),vz:Math.sin(s)*u*o.range(.15,.4),tau:i/Math.max(u,1)*o.range(.3,1.2),g:.1962,size:i*o.range(.02,.06),grow:o.range(.3,1.2)/(i/Math.max(u,1)+a),life:c*o.range(1.5,4)+a*10,kind:0,r:t.dustCol[0]*d,gg:t.dustCol[1]*d,b:t.dustCol[2]*d,a:o.range(.25,.5)})}}this.data=new Float32Array(this.ps.length*gt)}update(n,r,i){let a=this.data,o=0;for(let s of this.ps){let c=n-s.t0;if(c<0||c>s.life)continue;let l=Math.exp(-c/s.tau),u=s.g*s.tau,d=s.x+s.vx*s.tau*(1-l),f=s.z+s.vz*s.tau*(1-l),p=s.y+u*c+(s.vy-u)*s.tau*(1-l),m=s.vx*l,h=u+(s.vy-u)*l,g=s.vz*l,_=p<0;_&&(p=0);let v=s.size*(1+s.grow*c),y=c/s.life,b=Math.min(1,y*20)*(1-vt(.6,1,y)),x=o*gt;a[x]=d,a[x+1]=p+(s.kind===0?v*.5:0),a[x+2]=f,a[x+3]=v;let S=s.kind===2&&!_?Math.min(r,s.tau)*1.5:0;if(a[x+4]=m*S,a[x+5]=h*S,a[x+6]=g*S,a[x+7]=s.kind,s.kind===2){let n=2600-1700*y,r=e(n),i=t(n)*3*b;a[x+8]=r[0]*i,a[x+9]=r[1]*i,a[x+10]=r[2]*i,a[x+11]=0}else{let e=s.a*b;a[x+8]=s.r*i[0]*e,a[x+9]=s.gg*i[1]*e,a[x+10]=s.b*i[2]*e,a[x+11]=e}o++}this.count=o}};function vt(e,t,n){let r=Math.min(Math.max((n-e)/(t-e),0),1);return r*r*(3-2*r)}var yt=8;function bt(){let e=ht(1945),t=[],n=(n,r,i,a)=>t.push({x:n,z:r,h:i,type:a,seed:e.next(),arrival:0,dp:0,impulse:0,windKmh:0,heat:0,vaporised:!1});for(let t=0;t<60;t++)n(e.sign()*e.log(.15,60),e.log(.4,80),e.log(.02,.35),4);for(let t=0;t<90;t++){let t=e.log(35,2e4);n(e.sign()*e.range(0,1.5)*t,t,e.range(3,11),2)}for(let t=-6e3;t<=6e3;t+=60)n(t+e.range(-2,2),220,10,3);for(let t of[40,120,350,1e3,2500,6e3,15e3,4e4]){let r=2+Math.floor(e.next()*3);for(let i=0;i<r;i++)n(t+e.range(-.15,.15)*t,e.range(5,30)+t*e.range(.05,.4),6,1);n(-t*e.range(.8,1.2),e.range(10,40)+t*.3,6,1)}return t}var xt=class{blast;ps;data;count=0;obsIndex;constructor(e){this.blast=e,this.ps=bt(),this.obsIndex=this.ps.length,this.ps.push({x:0,z:0,h:1.75,type:0,seed:.5,arrival:0,dp:0,impulse:0,windKmh:0,heat:0,vaporised:!1});for(let e of this.ps)this.measure(e);this.data=new Float32Array(this.ps.length*yt)}measure(e){let t=this.blast,n=Math.hypot(e.x,e.z);e.arrival=t.arrival(t.slant(n)),e.dp=t.groundOverpressure(n),e.impulse=.5*e.dp*t.positivePhase(n);let r=e.dp;e.windKmh=3.6*(340*(5*r/709275)/Math.sqrt(1+6*r/709275)),e.heat=t.heatAt(n),e.vaporised=t.slant(n)<t.fireballMax*1.05}setObserver(e){let t=this.ps[this.obsIndex];t.x=e,this.measure(t)}update(e){let t=this.blast,n=this.data,r=t.burns[2],i=0;for(let a of this.ps){if(e>0&&a.vaporised)continue;let o=0,s=0,c=0;if(e>t.timeScale&&(c=Math.min(1,Math.max(0,(a.heat-r)/(r*2)))),e>a.arrival){let n=Math.min(1,(e-a.arrival)/Math.max(t.timeScale*2,.05)),r=n*n*(3-2*n),i=a.impulse>=30;if(a.type===1&&i)o=(a.dp>=35e3?1:a.dp>=2e4?.85:a.dp>=7e3?.5:a.dp>=1e3?.15:0)*r;else if(a.type!==1&&a.type!==4){let e=Math.sign(a.x||1),t=a.windKmh,n=a.type===0?150:a.type===3?300:220;s=e*(t>=n?1.45:t>=n*.5?t/n*.25:0)*r}}let l=i*yt;n[l]=a.x,n[l+1]=a.z,n[l+2]=a.h,n[l+3]=a.type,n[l+4]=o,n[l+5]=s,n[l+6]=a.seed,n[l+7]=c,i++}this.count=i}},St=class{explosive;scenario;audio;haptics;particleBudget;blast;clock;particles;props;report;timeline;scorch=0;phase=`setup`;distance=0;director=new dt;exposure=new i;hitAge=-1;hitAmp=0;quakeAge=-1;firedShock=!1;firedQuake=!1;jumpCamera=!0;constructor(e,t,n,r,i){this.explosive=e,this.scenario=t,this.audio=n,this.haptics=r,this.particleBudget=i,this.select(e)}select(e){this.explosive=e,this.blast=new st(e),this.scorch=s(this.blast),this.particles=new _t(this.blast,this.scenario.look,this.particleBudget),this.props=new xt(this.blast),this.setDistance(e.observer.def),this.reset()}setDistance(e){let t=this.explosive.observer;this.distance=Math.min(Math.max(e,t.min),t.max),this.props.setObserver(this.distance),this.report=this.blast.observer(this.distance),this.timeline=this.blast.timeline(this.distance),this.clock=new mt(this.blast,this.distance)}setParticleBudget(e){e!==this.particleBudget&&(this.particleBudget=e,this.particles=new _t(this.blast,this.scenario.look,e))}detonate(){this.reset(),this.phase=`running`,this.clock.playing=!0}reset(){this.clock=new mt(this.blast,this.distance),this.phase=`setup`,this.firedShock=!1,this.firedQuake=!1,this.hitAge=-1,this.quakeAge=-1,this.exposure.reset(),this.director.reset(),this.jumpCamera=!0}get t(){return this.clock.t}update(e){let t=this.clock.tick(e),n=this.clock.t,r=this.report;return this.hitAge>=0&&(this.hitAge+=e),this.quakeAge>=0&&(this.quakeAge+=e),this.phase===`running`&&(!this.firedQuake&&r.seismicT!==null&&n>=r.seismicT&&(this.firedQuake=!0,this.quakeAge=0,this.audio.rumble(Math.min(1,this.blast.kt*2+.2)),this.haptics.seismic()),!this.firedShock&&n>=r.shockT&&(this.firedShock=!0,this.hitAge=0,this.hitAmp=Math.min(1,Math.max(0,Math.log10(r.dp/50)/3.5)),this.audio.boom({db:r.db,duration:r.duration,distance:r.distance,kt:this.blast.kt}),this.haptics.blast(r.dp)),this.clock.done&&this.firedShock&&(this.phase=`done`)),t}get shockHasHit(){return this.firedShock}shake(e){let t=0;if(this.hitAge>=0&&(t+=this.hitAmp*.014*Math.exp(-this.hitAge/.45)),this.quakeAge>=0&&(t+=.002*Math.exp(-this.quakeAge/.6)),t<1e-5)return[0,0];let n=e*47;return[t*(Math.sin(n)+.5*Math.sin(n*2.3+1)),t*(Math.cos(n*1.3)+.5*Math.sin(n*3.1))]}},Ct={battery:{min:.42,max:.55,start:.5,octaves:3,budget:.5},auto:{min:.4,max:1,start:.8,octaves:5,budget:1},high:{min:.6,max:1,start:.85,octaves:5,budget:1}},wt=class{quality;scale;octaves;budget;fps=60;acc=0;frames=0;goodWindows=0;lastChange=0;clock=0;constructor(e){this.quality=e;let t=Ct[e];this.scale=t.start,this.octaves=t.octaves,this.budget=t.budget}setQuality(e){this.quality=e;let t=Ct[e];this.scale=t.start,this.octaves=t.octaves,this.budget=t.budget}sample(e){if(this.clock+=e,this.acc+=e,this.frames++,this.acc<.5)return!1;this.fps=this.frames/this.acc,this.acc=0,this.frames=0;let t=Ct[this.quality];if(this.clock-this.lastChange<1.2)return!1;let n=this.scale;return this.fps<50?(n=Math.max(t.min,this.scale*(this.fps<35?.8:.9)),this.goodWindows=0):this.fps>57&&++this.goodWindows>=4&&(n=Math.min(t.max,this.scale*1.08),this.goodWindows=0),this.octaves=this.quality===`battery`?3:n<=t.min+.01&&this.fps<45?4:t.octaves,Math.abs(n-this.scale)<.01?!1:(this.scale=n,this.lastChange=this.clock,!0)}};function Tt(e,t,n,r){let i=e.createShader(t);if(e.shaderSource(i,n),e.compileShader(i),!e.getShaderParameter(i,e.COMPILE_STATUS)){let t=e.getShaderInfoLog(i);throw Error(`Shader ${r} failed:\n${t}`)}return i}function Et(e,t,n,r){let i=`#version 300 es
`,a=e.createProgram();if(e.attachShader(a,Tt(e,e.VERTEX_SHADER,i+t,r+`.vert`)),e.attachShader(a,Tt(e,e.FRAGMENT_SHADER,i+n,r+`.frag`)),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw Error(`Program ${r} failed to link:\n${e.getProgramInfoLog(a)}`);let o={},s=e.getProgramParameter(a,e.ACTIVE_UNIFORMS);for(let t=0;t<s;t++){let n=e.getActiveUniform(a,t),r=n.name.replace(/\[0\]$/,``);o[r]=e.getUniformLocation(a,n.name)}return{prog:a,u:o}}function Dt(e,t,n,r){let i=e.createTexture();e.bindTexture(e.TEXTURE_2D,i),r?e.texImage2D(e.TEXTURE_2D,0,e.RGBA16F,t,n,0,e.RGBA,e.HALF_FLOAT,null):e.texImage2D(e.TEXTURE_2D,0,e.RGBA8,t,n,0,e.RGBA,e.UNSIGNED_BYTE,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE);let a=e.createFramebuffer();return e.bindFramebuffer(e.FRAMEBUFFER,a),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,i,0),{fb:a,tex:i,w:t,h:n}}function Ot(e,t){e.deleteFramebuffer(t.fb),e.deleteTexture(t.tex)}var kt=`// Shared by every scene shader: camera, noise, colour helpers.
precision highp float;

uniform vec4 uCam;   // window centre x, y, half-height, aspect
uniform vec2 uEye;   // eye height, eye distance in front of the action plane
uniform vec2 uRes;   // render target size, px
uniform float uOut;  // output scale (HDR fallback for 8-bit targets)

const float R_EARTH = 6371000.0;

// Point on the action plane (z = 0) seen at normalised screen coords.
vec2 planePoint(vec2 ndc) {
  return vec2(uCam.x + ndc.x * uCam.z * uCam.w, uCam.y + ndc.y * uCam.z);
}

// Metres per pixel on the action plane.
float pixelSize() { return 2.0 * uCam.z / uRes.y; }

// Height of the (parabolic) Earth's surface at ground coords (x, z).
float groundY(vec2 xz) { return -dot(xz, xz) / (2.0 * R_EARTH); }

// ---- Noise -----------------------------------------------------------------
float hash12(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}

float vnoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);
  float a = hash12(i);
  float b = hash12(i + vec2(1.0, 0.0));
  float c = hash12(i + vec2(0.0, 1.0));
  float d = hash12(i + vec2(1.0, 1.0));
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

const mat2 ROT = mat2(0.80, 0.60, -0.60, 0.80);

float fbm(vec2 p, int oct) {
  float s = 0.0, a = 0.5;
  for (int i = 0; i < 8; i++) {
    if (i >= oct) break;
    s += a * vnoise(p);
    p = ROT * p * 2.03 + 17.1;
    a *= 0.5;
  }
  return s;
}

// fbm whose finest octave stops at the pixel size, so detail never shimmers.
// p is in metres, \`big\` is the largest feature size, \`fp\` the pixel footprint.
float lodFbm(vec2 p, float big, float fp) {
  float s = 0.0, a = 0.5, w = 0.0;
  float f = 1.0 / big;
  for (int i = 0; i < 9; i++) {
    float fade = 1.0 - smoothstep(0.25, 0.5, f * fp);
    if (fade <= 0.0) break;
    s += a * fade * vnoise(p * f + float(i) * 7.3);
    w += a * fade;
    f *= 2.07;
    a *= 0.55;
  }
  return w > 0.0 ? s / w : 0.5;
}

// ---- Colour ----------------------------------------------------------------
// Approximate colour of a black body at temperature T (K), normalised.
vec3 blackbody(float t) {
  t = clamp(t, 800.0, 30000.0) / 100.0;
  vec3 c;
  c.r = t <= 66.0 ? 1.0 : clamp(1.293 * pow(t - 60.0, -0.1332), 0.0, 1.0);
  c.g = t <= 66.0 ? clamp(0.390 * log(t) - 0.632, 0.0, 1.0) : clamp(1.130 * pow(t - 60.0, -0.0755), 0.0, 1.0);
  c.b = t >= 66.0 ? 1.0 : (t <= 19.0 ? 0.0 : clamp(0.543 * log(t - 10.0) - 1.196, 0.0, 1.0));
  return c * c; // to linear
}

// Brightness of a hot surface relative to a sunlit cloud (compressed HDR).
// The second term keeps dull-red embers visible in daylight, as the eye sees them.
float glowIntensity(float t) {
  float x = t / 6000.0;
  return 40.0 * x * x * x * x + 0.4 * smoothstep(700.0, 1500.0, t);
}
`,At=`// One big triangle covering the screen.
precision highp float;
out vec2 vNdc;
out vec2 vUv;
void main() {
  vec2 p = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2)) * 2.0 - 1.0;
  vNdc = p;
  vUv = p * 0.5 + 0.5;
  gl_Position = vec4(p, 0.0, 1.0);
}
`,jt=`// Sky, sun, weather clouds, distant mountains and the receding ground plane.
// Everything behind the explosion. Ray-traced per pixel from the eye.

uniform vec3 uSunDir;      // towards the sun
uniform vec3 uSunCol;
uniform vec3 uZenith;
uniform vec3 uSkyMid;
uniform vec3 uHorizon;
uniform vec3 uGround;      // sand
uniform vec3 uGround2;     // darker soil / rock
uniform vec3 uRock;        // mountains
uniform vec4 uFlash;       // fireball light (rgb, HDR) and its height
uniform float uFlashX;     // ground-range position of the light (0 except during an asteroid's entry)
uniform vec4 uFlash2;      // fireball radius, haze visibility (m), cloud deck height, cloud cover
uniform vec4 uRing;        // ground shock radius, dust strength, crater radius, scorch radius
uniform float uGlow;       // fireball surface brightness (same units as the boom shader)
uniform float uTime;

in vec2 vNdc;
out vec4 fragColor;

vec3 skyColor(vec3 n) {
  float el = n.y;
  vec3 sky = mix(uHorizon, uSkyMid, pow(smoothstep(0.0, 0.2, el), 0.7));
  sky = mix(sky, uZenith, smoothstep(0.12, 0.75, el));
  // Warmer towards the sun along the horizon.
  float az = max(dot(normalize(vec2(n.x, n.z)), normalize(vec2(uSunDir.x, uSunDir.z))), 0.0);
  sky = mix(sky, uHorizon * vec3(1.05, 0.85, 0.7), (1.0 - smoothstep(0.0, 0.25, el)) * az * 0.5);
  // Below the horizon (curvature): fade into hazy horizon colour.
  sky = mix(sky, uHorizon * 0.8, smoothstep(0.0, -0.05, el));
  float mu = max(dot(n, uSunDir), 0.0);
  sky += uSunCol * (0.35 * pow(mu, 6.0) + 0.6 * pow(mu, 60.0));
  sky += uSunCol * 60.0 * smoothstep(0.99965, 0.9999, mu);
  return sky;
}

vec3 haze(vec3 col, vec3 n, float dist) {
  float f = 1.0 - exp(-dist / uFlash2.y);
  vec3 h = mix(uHorizon, uSunCol * 0.6, 0.25 * pow(max(dot(n, uSunDir), 0.0), 4.0));
  return mix(col, h, f);
}

// Light from the fireball reaching a point.
vec3 flashLight(vec3 p, vec3 nrm) {
  vec3 l = vec3(uFlashX, uFlash.w, 0.0) - p;
  float d2 = dot(l, l);
  float r = max(uFlash2.x, 1.0);
  float lam = max(dot(nrm, normalize(l)), 0.0) * 0.8 + 0.2;
  vec3 e = uFlash.rgb * lam * r * r / (d2 + r * r);
  return e / (1.0 + dot(e, vec3(0.33)) / 60.0);
}

// Mountain range silhouette height: ridged noise, detail down to the pixel.
float ridge(float x, float height, float width, float fp, float seed) {
  float s = 0.0, a = 0.5, w = 0.0, prev = 1.0;
  float f = 1.0 / width;
  for (int i = 0; i < 8; i++) {
    float fade = 1.0 - smoothstep(0.25, 0.5, f * fp);
    if (fade <= 0.0) break;
    float n = 1.0 - abs(vnoise(vec2(x * f, seed + float(i) * 3.7)) * 2.0 - 1.0);
    n *= n;
    s += a * fade * n * (0.5 + 0.5 * prev);
    prev = n;
    w += a;
    f *= 2.1;
    a *= 0.5;
  }
  float r = w > 0.0 ? s / w : 0.5;
  return height * (0.08 + 1.1 * r * r);
}

void main() {
  vec2 P = planePoint(vNdc);
  float D = uEye.y;
  vec3 eye = vec3(uCam.x, uEye.x, -D);
  vec3 dir = vec3(P - eye.xy, D);
  float dl = length(dir);
  vec3 n = dir / dl;
  float pix = pixelSize();

  // ---- Ground (parabolic Earth) ----
  float a = (dir.x * dir.x + D * D) / (2.0 * R_EARTH);
  float b = dir.y + (eye.x * dir.x - D * D) / R_EARTH;
  float c = eye.y + (eye.x * eye.x + D * D) / (2.0 * R_EARTH);
  float disc = b * b - 4.0 * a * c;
  float sG = 1e30;
  if (disc >= 0.0) {
    float q = -0.5 * (b + sign(b) * sqrt(disc));
    float s1 = q / a;
    float s2 = c / q;
    float lo = min(s1, s2), hi = max(s1, s2);
    sG = lo > 0.0 ? lo : (hi > 0.0 ? hi : 1e30);
  }

  vec3 col = vec3(0.0);
  bool hit = false;

  // ---- Mountain layers, near to far ----
  // depth, height, feature width, colour mix
  vec4 layers[4] = vec4[4](
    vec4(7000.0, 420.0, 3500.0, 0.0),
    vec4(26000.0, 1500.0, 11000.0, 1.0),
    vec4(70000.0, 2400.0, 26000.0, 2.0),
    vec4(170000.0, 3300.0, 50000.0, 3.0)
  );
  for (int i = 0; i < 4; i++) {
    vec4 L = layers[i];
    float s = 1.0 + L.x / D;
    if (s > sG) break;
    vec2 lp = eye.xy + s * dir.xy;
    float gy = groundY(vec2(lp.x, L.x));
    float fp = pix * s;
    float h = ridge(lp.x, L.y, L.z, fp, 13.0 + L.w * 5.0);
    if (lp.y < gy + h) {
      float u = clamp((lp.y - gy) / max(h, 1.0), 0.0, 1.0);
      float dx = max(L.z * 0.004, fp * 2.0);
      float slope = (ridge(lp.x + dx, L.y, L.z, fp, 13.0 + L.w * 5.0) - h) / dx;
      float lit = clamp(0.5 + slope * 1.4 * -sign(uSunDir.x), 0.12, 1.0);
      float strata = lodFbm(vec2(lp.x * 0.25, lp.y * 3.0), L.y * 0.6, fp);
      vec3 rock = mix(uRock * 0.5, uRock * 1.1, u) * (0.75 + 0.35 * strata);
      vec3 pnt = vec3(lp.x, lp.y, L.x);
      col = rock * (uSunCol * lit * 0.9 + uZenith * 0.35) + rock * flashLight(pnt, vec3(0.0, 0.3, -1.0));
      col = haze(col, n, s * dl);
      hit = true;
      break;
    }
  }

  // ---- Ground plane ----
  if (!hit && sG < 1e29) {
    vec2 g = vec2(eye.x + sG * dir.x, -D + sG * D); // ground coords (x, z)
    float dist = sG * dl;
    float fp = pix * sG / max(abs(n.y) * 3.0 + 0.15, 0.15);
    float big = lodFbm(g, 1800.0, fp);
    float mid = lodFbm(g + 91.0, 60.0, fp);
    float fine = lodFbm(g * vec2(1.0, 1.7) + 7.0, 3.0, fp);
    vec3 albedo = mix(uGround2, uGround, smoothstep(0.25, 0.75, big));
    albedo *= 0.75 + 0.35 * mid;
    albedo *= 0.85 + 0.25 * fine;
    // Sparse scrub / rocks.
    float scrub = smoothstep(0.72, 0.78, lodFbm(g * 1.3 + 400.0, 4.0, fp));
    albedo = mix(albedo, uGround2 * 0.45, scrub * 0.6);

    float r = length(g);
    // Crater and scorched ground.
    if (uRing.z > 0.0) {
      float cr = uRing.z;
      albedo *= mix(0.35, 1.0, smoothstep(cr * 0.85, cr * 1.05, r));
      albedo *= 1.0 + 0.5 * exp(-pow((r - cr * 1.1) / (cr * 0.12 + fp), 2.0));
    }
    if (uRing.w > 0.0) albedo *= mix(0.72, 1.0, smoothstep(uRing.w * 0.5, uRing.w * (1.0 + 0.3 * big), r));

    vec3 pnt = vec3(g.x, groundY(g), g.y);
    float sunLit = max(uSunDir.y, 0.0) * 1.6 + 0.08;
    col = albedo * (uSunCol * sunLit + uZenith * 0.45) + albedo * flashLight(pnt, vec3(0.0, 1.0, 0.0));

    // Dust raised by the shock: a band behind the front.
    if (uRing.x > 0.0 && uRing.y > 0.0) {
      float behind = uRing.x - r;
      float band = behind > 0.0 ? exp(-behind / (uRing.x * 0.12 + fp)) : exp(-pow(behind / (fp * 2.0 + uRing.x * 0.004), 2.0));
      vec3 dust = mix(uGround, uHorizon, 0.35) * (uSunCol * 0.9 + uZenith * 0.5);
      col = mix(col, dust, clamp(band * uRing.y, 0.0, 0.85));
    }
    col = haze(col, n, dist);
    hit = true;
  }

  // ---- Sky with a deck of weather clouds ----
  if (!hit) {
    col = skyColor(n);
    float deck = uFlash2.z;
    if (n.y > 0.002 && uFlash2.w > 0.0) {
      float s = (deck - eye.y) / dir.y;
      vec2 hp = vec2(eye.x + s * dir.x, -D + s * D);
      if (s > 0.0 && hp.y > 0.0) {
        float dist = s * dl;
        float fp = pix * s / max(n.y * 3.0, 0.05);
        float cl = lodFbm(hp * vec2(1.0, 1.6) + vec2(uTime * 2.0, 0.0), 9000.0, fp);
        float cov = smoothstep(1.0 - uFlash2.w, 1.0 - uFlash2.w + 0.25, cl);
        vec3 ccol = mix(uHorizon * 1.1, vec3(1.0), 0.5) * (uSunCol * 0.8 + uZenith * 0.6);
        ccol += flashLight(vec3(hp.x, deck, hp.y), vec3(0.0, -1.0, 0.0)) * 0.12;
        float fade = exp(-dist / (uFlash2.y * 6.0));
        col = mix(col, ccol, cov * 0.8 * fade);
      }
    }
    // Sky lit up by the flash (light scattered by the air), strongest near the fireball.
    vec3 toF = vec3(uFlashX, uFlash.w, 0.0) - eye;
    float dF2 = dot(toF, toF);
    float r = max(uFlash2.x, 1.0);
    // Scattered light can never outshine its source, so the sky glow is tied to
    // the fireball's own brightness, scaled by how big it looks from here.
    float near = pow(max(dot(n, toF / sqrt(dF2)), 0.0), 8.0);
    float size = 1.0 - exp(-r * r / dF2 * 400.0);
    vec3 tint = normalize(uFlash.rgb + 1e-6) * 1.7;
    col += tint * uGlow * 0.12 * size * (0.15 + 0.85 * near * near) * smoothstep(5.0, 400.0, r);
  }

  fragColor = vec4(min(col, vec3(6e4)) * uOut, 1.0);
}
`,Mt=`// The explosion itself, drawn on the action plane: the fireball, the mushroom
// cloud (cap, stem, dust skirt), the dust wall at the shock foot and the white
// condensation shell. Shapes are signed distance fields roughened by noise.
// The cap's rolling (toroidal) motion uses two crossfaded flow layers so the
// pattern turns without ever winding up or tearing. Lighting uses a normal
// built from the shape and the noise, plus glow from the hot gas.

uniform vec4 uFire;   // fireball centre y, radius, temperature K, early-phase weight
uniform vec4 uCap;    // cap centre y, half-width, half-height, roll phase
uniform vec4 uStem;   // stem top, half-width, formed 0-1, morph 0-1
uniform vec4 uSkirt;  // skirt radius, height, amount, dust-front ground radius
uniform vec4 uShock;  // shock sphere radius, burst height, dust-front strength, condensation
uniform vec4 uLook;   // smoke rgb, soot
uniform vec4 uLook2;  // mushroom 0-1, octaves, evolution (t / rise time), gas temperature K
uniform vec4 uLook3;  // body on 0/1, cloud opacity, 0, 0
uniform vec4 uTrail;  // asteroid entry: trail start x, y and head x, y (m)
uniform vec4 uTrail2; // head width (m), head glow, smoke opacity, speed (m/s)
uniform vec4 uTrail3; // seconds since impact (0 before), 0, 0, 0
uniform vec3 uSunDir;
uniform vec3 uSunCol;
uniform vec3 uAmbient;
uniform vec3 uDustCol;
uniform float uTime;

in vec2 vNdc;
out vec4 fragColor;

float sdEllipse(vec2 p, vec2 r) {
  float k0 = length(p / r);
  float k1 = length(p / (r * r));
  return k0 * (k0 - 1.0) / max(k1, 1e-6);
}

float smin(float a, float b, float k) {
  float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
  return mix(b, a, h) - k * h * (1.0 - h);
}

// Shape of the cloud body (negative inside), before noise. In metres.
// which: 0 = cap / fireball, 1 = stem, 2 = dust.
float body(vec2 p, out float which) {
  float m = uLook2.x;
  float morph = uStem.w;
  float dF = length(p - vec2(0.0, uFire.x)) - uFire.y;
  float dC = sdEllipse(p - vec2(0.0, uCap.x), vec2(uCap.y, uCap.z));
  // Smoke puffs (small chemical blasts) are a lumpy cluster of lobes, not an ellipse.
  if (m < 0.99) {
    // Lobes on a sunflower spiral: big ones in the middle, smaller towards the rim.
    float u = min(uCap.y, uCap.z);
    float dP = 1e9;
    for (int i = 0; i < 8; i++) {
      float fi = float(i);
      float fr = sqrt((fi + 0.5) / 8.0);
      float an = fi * 2.39996 + 0.7;
      vec2 off = vec2(cos(an), sin(an) * 0.85 + 0.1) * fr * vec2(uCap.y * 0.62, uCap.z * 0.55);
      float rad = (0.5 - 0.22 * fr) * u * (0.9 + 0.2 * sin(fi * 5.3));
      dP = smin(dP, length(p - vec2(0.0, uCap.x) - off * morph) - rad, u * 0.18);
    }
    dC = mix(dP, dC, m);
  }
  // Mushroom underside: a hollow scooped out under the cap where the stem enters.
  float dU = sdEllipse(p - vec2(0.0, uCap.x - uCap.z * 1.1), vec2(uCap.y * 0.6, uCap.z * 0.72));
  dC = mix(dC, max(dC, -dU), m * morph * 0.9);
  float d = mix(dF, dC, morph);
  which = 0.0;

  // Stem, flared at the ground and where it meets the cap. Its top ends inside the cap.
  if (uStem.z > 0.001) {
    float top = uCap.x;
    float yy = clamp(p.y / max(top, 1.0), 0.0, 1.0);
    float w = uStem.y * uStem.z * (1.0 + 2.4 * pow(1.0 - yy, 6.0) + 1.6 * smoothstep(0.62, 1.0, yy));
    float dS = max(abs(p.x) - w, max(p.y - top, -p.y));
    if (dS < d) which = 1.0;
    d = smin(d, dS, uCap.y * 0.15);
  }
  // Dust skirt hugging the ground.
  if (uSkirt.z > 0.001) {
    float dK = sdEllipse(p, vec2(uSkirt.x, uSkirt.y * (0.3 + 0.7 * uSkirt.z)));
    if (dK < d) which = 2.0;
    d = smin(d, dK, uSkirt.x * 0.12);
  }
  // Dust wall riding the foot of the shock wave.
  if (uShock.z > 0.001 && uSkirt.w > 0.0) {
    float xr = uSkirt.w;
    float hw = xr * 0.05 * uShock.z;
    float dW = sdEllipse(vec2(abs(p.x) - xr * 0.96, p.y), vec2(hw * 1.8 + 1e-3, hw + 1e-3));
    if (dW < d) which = 2.0;
    d = min(d, dW);
  }
  return d;
}

float bodyOnly(vec2 p) {
  float w;
  return body(p, w);
}

// Rotate p around the ring core on its side of the cloud by \`ang\`, strongest
// near the core. Fades out at the centre line so the two halves meet cleanly.
vec2 roll(vec2 p, float ang) {
  float side = p.x >= 0.0 ? 1.0 : -1.0;
  vec2 core = vec2(side * uCap.y * 0.55, uCap.x);
  vec2 v = p - core;
  float rr = length(v / vec2(uCap.y * 0.55, uCap.z * 1.1));
  float a = -side * ang * exp(-rr * rr * 1.5) * smoothstep(0.0, uCap.y * 0.3, abs(p.x));
  float c = cos(a), s = sin(a);
  return core + vec2(c * v.x - s * v.y, s * v.x + c * v.y);
}

float noiseAt(vec2 p, int oct) {
  vec2 q = p / max(uCap.y, uFire.y) * 3.0 + vec2(0.0, -uLook2.z * 0.8);
  vec2 warp = vec2(vnoise(q * 0.6 + 3.1), vnoise(q * 0.6 - 5.3));
  return fbm(q + warp * 1.2 + uTime * 0.02, oct);
}

// Cheap single-layer version, good enough for the lighting slope.
float billowFast(vec2 p, int oct) {
  float m = uLook2.x * uStem.w;
  if (m < 0.02) return noiseAt(p, oct);
  return noiseAt(roll(p, (fract(uCap.w * 0.25) - 0.5) * 2.2), oct);
}

// Billowing noise carried around the torus: two flow layers, half a cycle apart.
float billow(vec2 p, int oct) {
  float m = uLook2.x * uStem.w;
  if (m < 0.02) return noiseAt(p, oct);
  float ph = uCap.w * 0.25;
  float fa = fract(ph);
  float fb = fract(ph + 0.5);
  const float SPAN = 2.2; // radians turned per cycle
  float na = noiseAt(roll(p, (fa - 0.5) * SPAN), oct);
  float nb = noiseAt(roll(p, (fb - 0.5) * SPAN) + 37.0, oct);
  float wa = 1.0 - abs(2.0 * fa - 1.0);
  return mix(nb, na, wa);
}

void main() {
  vec2 p = planePoint(vNdc);
  float S = max(uCap.y, uFire.y);
  float pix = pixelSize();
  int oct = int(uLook2.y);

  float which;
  float d0 = body(p, which);
  vec4 outc = vec4(0.0);

  if (uLook3.x > 0.5 && d0 < S * 0.3) {
    float n = billow(p, oct);
    float amp = mix(0.1, 0.3, uStem.w) + (which > 0.5 ? 0.08 : 0.0);
    float dn = d0 / S - amp * (n - 0.45);
    // Smoke puffs and dust are thinner and wispier than a nuclear cap, and thin out with time.
    float puff = 1.0 - uLook2.x;
    float soft = 0.012 + pix / S * 1.5 + 0.05 * puff + (which > 1.5 ? 0.06 : 0.0);
    float density = mix(1.0, 0.82 * exp(-uLook2.z * 0.25), puff) * (which > 1.5 ? 0.6 : 1.0);
    float alpha = (1.0 - smoothstep(-soft, soft, dn)) * mix(density, 1.0, uFire.w * smoothstep(1500.0, 2500.0, uFire.z));
    alpha *= mix(uLook3.y, 1.0, uFire.w * smoothstep(1500.0, 3000.0, uFire.z));
    alpha *= smoothstep(-pix * 1.5, pix * 0.5, p.y); // nothing shows below the ground

    if (alpha > 0.002) {
      // Normal: shape gradient plus the slope of the (cheaper) noise.
      float e = S * 0.04;
      vec2 gs = vec2(bodyOnly(p + vec2(e, 0.0)) - bodyOnly(p - vec2(e, 0.0)),
                     bodyOnly(p + vec2(0.0, e)) - bodyOnly(p - vec2(0.0, e))) / (2.0 * e);
      int lo = max(oct - 2, 2);
      float nc = billowFast(p, lo);
      vec2 gn = vec2(billowFast(p + vec2(e, 0.0), lo) - nc, billowFast(p + vec2(0.0, e), lo) - nc) / 0.04;
      vec2 g = gs - amp * gn;
      float inside = clamp(-dn / 0.22, 0.0, 1.0);
      vec3 N = normalize(vec3(g * (1.0 - 0.55 * inside), -(0.3 + inside)));
      float sun = max(dot(N, uSunDir), 0.0);
      float sky = (0.55 + 0.45 * N.y) * (1.0 - 0.3 * inside);

      // Young clouds are dark and brown (soot, dust, nitrogen dioxide); they
      // whiten as water condenses in them.
      vec3 smoke = mix(uLook.rgb, uLook.rgb * vec3(0.62, 0.42, 0.32), exp(-uLook2.z * 1.6) * uLook2.x * 0.85);
      if (which > 1.5) smoke = uDustCol;
      else if (which > 0.5) smoke = mix(smoke, uDustCol, 0.5);
      smoke *= mix(1.0, 0.3, uLook.a * (0.4 + 0.6 * n));
      vec3 col = smoke * (uSunCol * sun * 1.3 + uAmbient * sky * 0.65 + vec3(0.03));

      // Glow of the hot gas: hottest in the core, cooling outwards and with time.
      float core = 1.0 - smoothstep(0.0, 1.0, length((p - vec2(0.0, uFire.x)) / max(uFire.y, 1.0)));
      float tGas = uLook2.w * (0.55 + 0.6 * inside) * (0.75 + 0.5 * n);
      float tLocal = mix(tGas, uFire.z, uFire.w * (0.35 + 0.65 * core));
      if (which > 0.5) tLocal *= 0.35;
      float hot = smoothstep(700.0, 1400.0, tLocal);
      // Limb darkening and boiling surface make the young fireball look solid.
      vec2 fr = (p - vec2(0.0, uFire.x)) / max(uFire.y, 1.0);
      float limb = 0.55 + 0.45 * sqrt(max(1.0 - dot(fr, fr), 0.0));
      float boil = mix(0.6 + 0.8 * n, (0.35 + 1.3 * n * n) * limb, uFire.w);
      vec3 emit = blackbody(tLocal) * glowIntensity(tLocal) * boil;
      // A young fireball is an opaque glowing ball; an older cloud glows from inside.
      // Young fireball: the glow replaces the smoke. Older cloud: glow adds from within.
      col = mix(col + emit * hot * (0.15 + 0.6 * inside), emit, clamp(hot * uFire.w, 0.0, 1.0));
      outc = vec4(col * alpha, alpha);
    }
  }

  // Asteroid entry: glowing head, incandescent wake, then a long smoke trail
  // that widens with age. Drawn behind the cloud.
  if (uTrail2.x > 0.0) {
    vec2 A = uTrail.xy, B = uTrail.zw;
    vec2 ab = B - A;
    float len = max(length(ab), 1.0);
    float h = clamp(dot(p - A, ab) / (len * len), 0.0, 1.0);
    float side = length(p - (A + ab * h));
    float behind = (1.0 - h) * len;                  // metres behind the head
    float age = behind / max(uTrail2.w, 1.0) + uTrail3.x; // seconds since that bit was made
    float w = uTrail2.x * (0.5 + 0.7 * sqrt(age) + 0.03 * age) + pix * 1.5;
    float nn = fbm(vec2(behind / (uTrail2.x * 6.0), side / w) * 2.0 + vec2(uTime * 0.05, 3.0), 4);
    float core = exp(-side * side / (w * w)) * (0.7 + 0.8 * nn) * 1.3;
    float smoke = uTrail2.z * clamp(core, 0.0, 1.0) * smoothstep(0.0, uTrail2.x * 3.0, behind + uTrail2.x * 0.5);
    // Lit on the sun side, shadowed on the other, so it stands out from the sky.
    vec2 nrm = normalize(vec2(-ab.y, ab.x));
    float lit = 0.5 + 0.5 * clamp(dot(p - (A + ab * h), nrm) / w, -1.0, 1.0) * sign(dot(nrm, uSunDir.xy));
    vec3 scol = mix(vec3(0.62, 0.6, 0.58), uDustCol, 0.25) * (uSunCol * (0.35 + 0.8 * lit) + uAmbient * 0.45);
    float hotWake = exp(-age / 0.7) * step(uTrail3.x, 0.0);
    float hotCore = exp(-side * side / (w * w * 0.12));
    vec3 glow = blackbody(mix(1800.0, 6500.0, hotWake)) * glowIntensity(mix(1800.0, 6500.0, hotWake)) * hotWake * hotCore * 0.35;
    vec4 tr = vec4(scol * smoke + glow * smoke, smoke);
    // The head itself.
    float dh = length(p - B) / max(uTrail2.x * 0.35, pix * 3.0);
    tr.rgb += vec3(1.0, 0.95, 0.85) * uTrail2.y * exp(-dh * dh);
    tr.a = max(tr.a, min(1.0, uTrail2.y * 0.02) * exp(-dh * dh));
    // Composite the trail behind whatever cloud is here.
    outc.rgb = outc.rgb + tr.rgb * (1.0 - outc.a);
    outc.a = outc.a + tr.a * (1.0 - outc.a);
  }

  // White condensation shell (Wilson cloud) just behind the shock in humid air.
  if (uShock.w > 0.001) {
    vec2 c = vec2(0.0, uShock.y);
    float r = length(p - c);
    float R = uShock.x;
    float shell = smoothstep(R * 0.72, R * 0.9, r) * (1.0 - smoothstep(R * 0.93, R * 0.995, r));
    float ground = smoothstep(-R * 0.02, R * 0.02, p.y);
    float nn = fbm(p / R * 5.0 + 11.0, 3);
    float a = min(shell * ground * uShock.w * (0.6 + 0.7 * nn) * 1.3, 0.95);
    vec3 wc = vec3(1.0) * (uSunCol * 1.1 + uAmbient * 0.7);
    outc.rgb = outc.rgb + wc * a * (1.0 - outc.a);
    outc.a = outc.a + a * (1.0 - outc.a);
  }

  fragColor = vec4(min(outc.rgb, vec3(6e4)) * uOut, outc.a);
}
`,Nt=`// Instanced props standing on the ground: you, houses, cacti, power poles.
precision highp float;
layout(location = 0) in vec2 aCorner;   // x -1..1, y 0..1
layout(location = 1) in vec4 iA;        // ground x, z, height (m), type
layout(location = 2) in vec4 iB;        // damage 0-1, lean (rad), seed, char 0-1

uniform vec4 uCam;
uniform vec2 uEye;

out vec2 vLocal;
out float vDist;
flat out vec4 vA;
flat out vec4 vB;

const float R_EARTH = 6371000.0;
const float WIDTH[5] = float[5](0.45, 1.6, 0.9, 0.5, 1.8); // width/height per type

void main() {
  float h = iA.z;
  int type = int(iA.w);
  float w = h * WIDTH[type];
  vec2 local = vec2(aCorner.x * w * 0.5, aCorner.y * h);
  // Lean around the base (blown over).
  float c = cos(iB.y), s = sin(iB.y);
  vec2 rot = vec2(local.x * c + local.y * s, -local.x * s + local.y * c);
  float gy = -(iA.x * iA.x + iA.y * iA.y) / (2.0 * R_EARTH);
  vec3 wp = vec3(iA.x + rot.x, gy + rot.y, iA.y);
  float k = uEye.y / (wp.z + uEye.y);
  vec2 pp = vec2(uCam.x + (wp.x - uCam.x) * k, uEye.x + (wp.y - uEye.x) * k);
  vec2 ndc = vec2((pp.x - uCam.x) / (uCam.z * uCam.w), (pp.y - uCam.y) / uCam.z);
  vLocal = vec2(aCorner.x * 0.5, aCorner.y);
  vDist = length(wp - vec3(uCam.x, uEye.x, -uEye.y));
  vA = iA;
  vB = iB;
  gl_Position = vec4(ndc, 0.0, 1.0);
}
`,Pt=`// Silhouettes drawn with signed distance fields, lit by the sun and the flash.
uniform vec3 uSunCol;
uniform vec3 uZenith;
uniform vec3 uHorizon;
uniform vec4 uFlash;   // fireball light rgb, fireball height
uniform float uVis;    // haze visibility, m
uniform float uFlashR; // fireball radius, m
uniform float uFlashX; // light position along the ground (asteroid entry)

in vec2 vLocal;
in float vDist;
flat in vec4 vA;
flat in vec4 vB;
out vec4 fragColor;

float box(vec2 p, vec2 c, vec2 hs) { vec2 d = abs(p - c) - hs; return length(max(d, 0.0)) + min(max(d.x, d.y), 0.0); }
float circle(vec2 p, vec2 c, float r) { return length(p - c) - r; }
float seg(vec2 p, vec2 a, vec2 b, float r) {
  vec2 pa = p - a, ba = b - a;
  float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
  return length(pa - ba * h) - r;
}

void main() {
  int type = int(vA.w);
  float dmg = vB.x;
  float seed = vB.z;
  vec2 p = vLocal; // x -0.5..0.5 (of width), y 0..1 (of height)
  float aspect = (type == 0 ? 0.45 : type == 1 ? 1.6 : type == 2 ? 0.9 : type == 3 ? 0.5 : 1.8);
  vec2 q = vec2(p.x * aspect, p.y); // uniform units of height
  float d = 1.0;
  vec3 base = vec3(0.3);
  float glass = 0.0;

  if (type == 0) {
    // Person in a hi-vis jacket.
    d = circle(q, vec2(0.0, 0.92), 0.075);
    d = min(d, seg(q, vec2(0.0, 0.78), vec2(0.0, 0.48), 0.085));
    d = min(d, seg(q, vec2(-0.03, 0.48), vec2(-0.07, 0.02), 0.04));
    d = min(d, seg(q, vec2(0.03, 0.48), vec2(0.07, 0.02), 0.04));
    d = min(d, seg(q, vec2(-0.08, 0.74), vec2(-0.12, 0.47), 0.03));
    d = min(d, seg(q, vec2(0.08, 0.74), vec2(0.12, 0.47), 0.03));
    base = q.y > 0.46 && q.y < 0.84 ? vec3(1.0, 0.45, 0.05) : vec3(0.12, 0.13, 0.18);
  } else if (type == 1) {
    // House: walls, gabled roof, windows. Damage tears off the roof, then the walls.
    float wallH = 0.62 * (1.0 - 0.75 * smoothstep(0.6, 1.0, dmg));
    float jag = (vnoise(vec2(q.x * 18.0, seed)) - 0.5) * 0.12 * smoothstep(0.5, 0.8, dmg);
    float walls = box(q, vec2(0.0, wallH * 0.5), vec2(0.7, wallH * 0.5 + jag));
    float roofH = 0.38 * (1.0 - smoothstep(0.25, 0.55, dmg));
    float roof = max(abs(q.x) * roofH / 0.78 + (q.y - wallH - roofH), -(q.y - wallH));
    d = min(walls, roofH > 0.01 ? roof : 1.0);
    bool isRoof = roof < walls;
    base = isRoof ? vec3(0.42, 0.20, 0.14) : vec3(0.78, 0.70, 0.58);
    vec2 wq = vec2(mod(q.x + 0.7, 0.35) - 0.175, q.y - 0.36);
    float win = box(wq, vec2(0.0), vec2(0.07, 0.09));
    if (!isRoof && win < 0.0 && q.y < wallH - 0.05) {
      glass = 1.0 - smoothstep(0.05, 0.2, dmg);
      base = mix(vec3(0.05, 0.06, 0.08), vec3(0.35, 0.45, 0.55), glass);
    }
  } else if (type == 2) {
    // Saguaro cactus.
    d = seg(q, vec2(0.0, 0.0), vec2(0.0, 0.93), 0.07);
    float armL = 0.35 + 0.25 * fract(seed * 3.7);
    float armR = 0.45 + 0.2 * fract(seed * 7.1);
    d = min(d, seg(q, vec2(0.0, armL), vec2(-0.2, armL), 0.045));
    d = min(d, seg(q, vec2(-0.2, armL), vec2(-0.2, armL + 0.3), 0.045));
    d = min(d, seg(q, vec2(0.0, armR), vec2(0.18, armR), 0.045));
    d = min(d, seg(q, vec2(0.18, armR), vec2(0.18, armR + 0.22), 0.045));
    base = vec3(0.20, 0.32, 0.16) * (0.55 + 0.45 * clamp(-d / 0.035, 0.0, 1.0));
  } else if (type == 3) {
    // Wooden power pole.
    d = box(q, vec2(0.0, 0.5), vec2(0.018, 0.5));
    d = min(d, box(q, vec2(0.0, 0.9), vec2(0.2, 0.012)));
    base = vec3(0.30, 0.22, 0.15);
  } else {
    // Rock: a lumpy half-buried boulder, lit from the upper left.
    vec2 rq = vec2(q.x / 0.8, q.y);
    d = length(rq - vec2(0.0, 0.05)) - 0.85 + (vnoise(q * 6.0 + seed * 10.0) - 0.5) * 0.25;
    d = max(d, -q.y);
    float top = clamp(q.y * 1.3 - q.x * 0.4, 0.0, 1.0);
    base = vec3(0.36, 0.28, 0.22) * (0.55 + 0.6 * top) * (0.8 + 0.4 * vnoise(q * 25.0 + seed));
  }

  float aa = fwidth(d) * 1.2 + 1e-5;
  float alpha = 1.0 - smoothstep(-aa, aa, d);
  if (alpha < 0.01) discard;

  base = mix(base, vec3(0.04, 0.03, 0.03), vB.w); // charred by heat
  float side = 0.55 + 0.45 * clamp(-p.x * 2.0, -1.0, 1.0);
  vec3 col = base * (uSunCol * (0.4 + 0.8 * side) + uZenith * 0.4);
  vec3 l = vec3(uFlashX, uFlash.w, 0.0) - vec3(vA.x, vA.z * p.y, vA.y);
  float fr = max(uFlashR, 1.0);
  vec3 fl = uFlash.rgb * fr * fr / (dot(l, l) + fr * fr);
  col += base * fl / (1.0 + dot(fl, vec3(0.33)) / 60.0);
  col += glass * uSunCol * 0.3;
  float f = 1.0 - exp(-vDist / uVis);
  col = mix(col, uHorizon, f);
  fragColor = vec4(min(col, vec3(6e4)) * alpha * uOut, alpha);
}
`,Ft=`// Instanced particles: sparks, debris and dust, projected with the scene camera.
// Sparks are stretched along their motion (motion blur).
precision highp float;
layout(location = 0) in vec2 aCorner;
layout(location = 1) in vec4 iPos;  // world x, y, z, radius (m)
layout(location = 2) in vec4 iVel;  // motion during one frame (m), kind
layout(location = 3) in vec4 iCol;  // premultiplied colour (HDR), alpha

uniform vec4 uCam;
uniform vec2 uEye;
uniform vec2 uRes;

out vec2 vUv;
out vec4 vCol;
flat out float vKind;

vec2 toPx(vec3 w) {
  float k = uEye.y / (w.z + uEye.y);
  vec2 pp = vec2(uCam.x + (w.x - uCam.x) * k, uEye.x + (w.y - uEye.x) * k);
  vec2 ndc = vec2((pp.x - uCam.x) / (uCam.z * uCam.w), (pp.y - uCam.y) / uCam.z);
  return ndc * uRes * 0.5;
}

void main() {
  float k = uEye.y / (iPos.z + uEye.y);
  vec2 c = toPx(iPos.xyz);
  vec2 c0 = toPx(iPos.xyz - iVel.xyz);
  float r = max(iPos.w * k / uCam.z * uRes.y * 0.5, 0.9);
  vec2 axis = c - c0;
  float len = length(axis);
  vec2 dx = len > 0.5 ? axis / len : vec2(1.0, 0.0);
  vec2 dy = vec2(-dx.y, dx.x);
  float half_ = len * 0.5;
  vec2 mid = (c + c0) * 0.5;
  vec2 px = mid + dx * aCorner.x * (half_ + r) + dy * aCorner.y * r;
  vUv = vec2(aCorner.x * (half_ + r) / r, aCorner.y);
  vUv.x = sign(vUv.x) * max(abs(vUv.x) - half_ / r, 0.0);
  vCol = iCol;
  // Faint sub-pixel particles fade instead of popping.
  float sub = clamp(iPos.w * k / uCam.z * uRes.y * 0.5 / 0.9, 0.0, 1.0);
  vCol *= mix(sub * sub, 1.0, step(1.5, iVel.w));
  vKind = iVel.w;
  gl_Position = vec4(px / (uRes * 0.5), 0.0, 1.0);
}
`,It=`precision highp float;
in vec2 vUv;
in vec4 vCol;
flat in float vKind;
uniform float uOut;
out vec4 fragColor;
void main() {
  float r2 = dot(vUv, vUv);
  if (r2 > 1.0) discard;
  float a;
  if (vKind < 0.5) a = (1.0 - r2) * (1.0 - r2);          // dust: soft puff
  else if (vKind < 1.5) a = smoothstep(1.0, 0.6, r2);    // debris: solid chunk
  else a = exp(-r2 * 3.0);                                // spark: glow
  fragColor = vec4(vCol.rgb * a * uOut, vCol.a * a);
}
`,Lt=`// Dual-filter (Kawase) bloom: cheap on mobile GPUs. Mode 0 = first downsample
// with a soft brightness threshold, 1 = downsample, 2 = upsample.
precision highp float;
uniform sampler2D uSrc;
uniform vec2 uTexel;   // 1 / source size
uniform int uMode;
uniform float uThreshold;
in vec2 vUv;
out vec4 fragColor;

vec3 pre(vec3 c) {
  float br = max(c.r, max(c.g, c.b));
  float soft = clamp(br - uThreshold * 0.5, 0.0, uThreshold);
  soft = soft * soft / (4.0 * uThreshold + 1e-4);
  float w = max(soft, br - uThreshold) / max(br, 1e-4);
  return c * w;
}

void main() {
  vec2 o = uTexel;
  if (uMode < 2) {
    vec3 s = texture(uSrc, vUv).rgb * 4.0;
    s += texture(uSrc, vUv + vec2(-o.x, -o.y)).rgb;
    s += texture(uSrc, vUv + vec2(o.x, -o.y)).rgb;
    s += texture(uSrc, vUv + vec2(-o.x, o.y)).rgb;
    s += texture(uSrc, vUv + vec2(o.x, o.y)).rgb;
    s /= 8.0;
    if (uMode == 0) s = pre(min(s, vec3(200.0)));
    fragColor = vec4(s, 1.0);
  } else {
    vec3 s = texture(uSrc, vUv + vec2(-o.x * 2.0, 0.0)).rgb;
    s += texture(uSrc, vUv + vec2(-o.x, o.y)).rgb * 2.0;
    s += texture(uSrc, vUv + vec2(0.0, o.y * 2.0)).rgb;
    s += texture(uSrc, vUv + vec2(o.x, o.y)).rgb * 2.0;
    s += texture(uSrc, vUv + vec2(o.x * 2.0, 0.0)).rgb;
    s += texture(uSrc, vUv + vec2(o.x, -o.y)).rgb * 2.0;
    s += texture(uSrc, vUv + vec2(0.0, -o.y * 2.0)).rgb;
    s += texture(uSrc, vUv + vec2(-o.x, -o.y)).rgb * 2.0;
    fragColor = vec4(s / 12.0, 1.0);
  }
}
`,Rt=`// Final image: shock-wave refraction, heat haze, camera shake, bloom, exposure,
// filmic tone mapping, vignette and grain.
precision highp float;
uniform sampler2D uScene;
uniform sampler2D uBloom;
uniform vec2 uRes;        // output size, px
uniform float uExposure;
uniform float uBloomAmt;
uniform vec2 uShake;      // uv offset
uniform vec4 uShockScr;   // centre (ndc), radius (px), strength
uniform float uGroundV;   // ndc y of the ground line at ground zero
uniform vec4 uHaze;       // centre (ndc), radius (px), strength
uniform float uTime;
uniform float uWhite;     // flash white-out 0-1
uniform float uHdrScale;  // scene values were stored divided by this
in vec2 vUv;
in vec2 vNdc;
out vec4 fragColor;

float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }

vec3 aces(vec3 x) {
  return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0);
}

void main() {
  vec2 uv = vUv + uShake;
  vec2 px = vNdc * uRes * 0.5;

  // Shock wave: a thin ring that bends light passing through it.
  if (uShockScr.w > 0.0) {
    vec2 c = uShockScr.xy * uRes * 0.5;
    vec2 v = px - c;
    float r = length(v);
    float x = (r - uShockScr.z) / max(6.0, uShockScr.z * 0.025);
    float prof = x * exp(-x * x);
    float above = smoothstep(-6.0, 6.0, px.y - uGroundV * uRes.y * 0.5);
    uv += (v / max(r, 1.0)) * prof * uShockScr.w * 14.0 / uRes * above;
  }
  // Heat haze around the hot fireball.
  if (uHaze.w > 0.0) {
    vec2 c = uHaze.xy * uRes * 0.5;
    float r = length(px - c) / max(uHaze.z, 1.0);
    float a = uHaze.w * exp(-r * r * 0.6);
    vec2 n = vec2(sin(px.y * 0.09 + uTime * 7.0) + sin(px.y * 0.23 - uTime * 11.0),
                  cos(px.x * 0.07 + uTime * 6.0));
    uv += n * a * 2.5 / uRes;
  }

  vec3 col = texture(uScene, uv).rgb * uHdrScale;
  col += texture(uBloom, uv).rgb * uHdrScale * uBloomAmt;
  col *= uExposure;
  col = aces(col);
  float luma = dot(col, vec3(0.2126, 0.7152, 0.0722));
  col = clamp(mix(vec3(luma), col, 1.15), 0.0, 1.0);
  col = col * col * (3.0 - 2.0 * col) * 0.25 + col * 0.75; // gentle S-curve
  col = mix(col, vec3(1.0, 0.98, 0.95), uWhite);
  col = pow(col, vec3(1.0 / 2.2));
  float vig = smoothstep(1.6, 0.35, length(vNdc * vec2(0.8, 0.9)));
  col *= mix(0.72, 1.0, vig);
  col += (hash(px + fract(uTime) * 91.0) - 0.5) * 0.025;
  fragColor = vec4(col, 1.0);
}
`,zt=5,Bt=class{canvas;gl;hdr;bg;boom;props;parts;bloom;comp;emptyVao;partVao;partBuf;partCap=0;propVao;propBuf;propCap=0;scene=null;chain=[];width=0;height=0;constructor(e){this.canvas=e;let t=e.getContext(`webgl2`,{antialias:!1,alpha:!1,depth:!1,stencil:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,powerPreference:`high-performance`});if(!t)throw Error(`WebGL2 is not available`);this.gl=t,this.hdr=!!t.getExtension(`EXT_color_buffer_float`);let n=e=>kt+`
`+e;this.bg=Et(t,At,n(jt),`background`),this.boom=Et(t,At,n(Mt),`boom`),this.props=Et(t,Nt,n(Pt),`props`),this.parts=Et(t,Ft,It,`particles`),this.bloom=Et(t,At,Lt,`bloom`),this.comp=Et(t,At,Rt,`composite`),this.emptyVao=t.createVertexArray(),this.partVao=t.createVertexArray(),t.bindVertexArray(this.partVao);let r=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,r),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),t.STATIC_DRAW),t.enableVertexAttribArray(0),t.vertexAttribPointer(0,2,t.FLOAT,!1,0,0),this.partBuf=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,this.partBuf);for(let e=0;e<3;e++)t.enableVertexAttribArray(1+e),t.vertexAttribPointer(1+e,4,t.FLOAT,!1,48,e*16),t.vertexAttribDivisor(1+e,1);this.propVao=t.createVertexArray(),t.bindVertexArray(this.propVao);let i=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,i),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,0,1,0,-1,1,1,1]),t.STATIC_DRAW),t.enableVertexAttribArray(0),t.vertexAttribPointer(0,2,t.FLOAT,!1,0,0),this.propBuf=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,this.propBuf);for(let e=0;e<2;e++)t.enableVertexAttribArray(1+e),t.vertexAttribPointer(1+e,4,t.FLOAT,!1,32,e*16),t.vertexAttribDivisor(1+e,1);t.bindVertexArray(null)}resize(e,t){if(e=Math.max(16,Math.round(e)),t=Math.max(16,Math.round(t)),e===this.width&&t===this.height)return;let n=this.gl;this.width=e,this.height=t,this.canvas.width=e,this.canvas.height=t,this.scene&&Ot(n,this.scene),this.chain.forEach(e=>Ot(n,e)),this.scene=Dt(n,e,t,this.hdr),this.chain=[];let r=e,i=t;for(let e=0;e<zt;e++)r=Math.max(2,r>>1),i=Math.max(2,i>>1),this.chain.push(Dt(n,r,i,this.hdr))}camera(e,t){let n=this.gl;n.uniform4f(e.u.uCam,t.cx,t.cy,t.vh,t.aspect),n.uniform2f(e.u.uEye,t.eyeY,t.dist),n.uniform2f(e.u.uRes,this.width,this.height),n.uniform1f(e.u.uOut,this.hdr?1:1/8)}render(e){let t=this.gl,n=this.scene,r=e.look,i=(e,n)=>e&&t.uniform3f(e,n[0],n[1],n[2]),a=(e,n)=>e&&t.uniform4f(e,n[0],n[1],n[2],n[3]);t.bindFramebuffer(t.FRAMEBUFFER,n.fb),t.viewport(0,0,n.w,n.h),t.disable(t.BLEND),t.bindVertexArray(this.emptyVao);let o=this.bg;if(t.useProgram(o.prog),this.camera(o,e.view),i(o.u.uSunDir,r.sunDir),i(o.u.uSunCol,r.sunCol),i(o.u.uZenith,r.zenith),i(o.u.uSkyMid,r.skyMid),i(o.u.uHorizon,r.horizon),i(o.u.uGround,r.ground),i(o.u.uGround2,r.ground2),i(o.u.uRock,r.rock),a(o.u.uFlash,e.world.flash),a(o.u.uFlash2,[e.world.flashR,r.visibility,r.deckHeight,r.deckCover]),a(o.u.uRing,e.world.ring),t.uniform1f(o.u.uGlow,e.world.glow),t.uniform1f(o.u.uFlashX,e.world.flashX),t.uniform1f(o.u.uTime,e.time),t.drawArrays(t.TRIANGLES,0,3),t.enable(t.BLEND),t.blendFunc(t.ONE,t.ONE_MINUS_SRC_ALPHA),e.propCount>0){o=this.props,t.useProgram(o.prog),this.camera(o,e.view),i(o.u.uSunCol,r.sunCol),i(o.u.uZenith,r.zenith),i(o.u.uHorizon,r.horizon),a(o.u.uFlash,e.world.flash),t.uniform1f(o.u.uFlashR,e.world.flashR),t.uniform1f(o.u.uFlashX,e.world.flashX),t.uniform1f(o.u.uVis,r.visibility),t.bindVertexArray(this.propVao),t.bindBuffer(t.ARRAY_BUFFER,this.propBuf);let n=e.propCount*32;n>this.propCap&&(this.propCap=n*2,t.bufferData(t.ARRAY_BUFFER,this.propCap,t.DYNAMIC_DRAW)),t.bufferSubData(t.ARRAY_BUFFER,0,e.props,0,e.propCount*8),t.drawArraysInstanced(t.TRIANGLE_STRIP,0,4,e.propCount)}if(e.boom&&e.boom.bbox){let s=e.boom,[c,l,u,d]=s.bbox,f=Math.floor((Math.max(c,-1)+1)/2*n.w),p=Math.floor((Math.max(l,-1)+1)/2*n.h),m=Math.ceil((Math.min(u,1)+1)/2*n.w),h=Math.ceil((Math.min(d,1)+1)/2*n.h);m>f&&h>p&&(t.enable(t.SCISSOR_TEST),t.scissor(f,p,m-f,h-p),o=this.boom,t.useProgram(o.prog),this.camera(o,e.view),a(o.u.uFire,s.fire),a(o.u.uCap,s.cap),a(o.u.uStem,s.stem),a(o.u.uSkirt,s.skirt),a(o.u.uShock,s.shock),a(o.u.uLook,s.look),a(o.u.uLook2,s.look2),a(o.u.uLook3,s.look3),a(o.u.uTrail,s.trail),a(o.u.uTrail2,s.trail2),a(o.u.uTrail3,s.trail3),i(o.u.uSunDir,r.sunDir),i(o.u.uSunCol,r.sunCol),i(o.u.uAmbient,[(r.zenith[0]+r.skyMid[0]+r.horizon[0])/3,(r.zenith[1]+r.skyMid[1]+r.horizon[1])/3,(r.zenith[2]+r.skyMid[2]+r.horizon[2])/3]),i(o.u.uDustCol,r.dustCol),t.uniform1f(o.u.uTime,e.time),t.bindVertexArray(this.emptyVao),t.drawArrays(t.TRIANGLES,0,3),t.disable(t.SCISSOR_TEST))}if(e.particleCount>0){o=this.parts,t.useProgram(o.prog),this.camera(o,e.view),t.bindVertexArray(this.partVao),t.bindBuffer(t.ARRAY_BUFFER,this.partBuf);let n=e.particleCount*48;n>this.partCap&&(this.partCap=n*2,t.bufferData(t.ARRAY_BUFFER,this.partCap,t.DYNAMIC_DRAW)),t.bufferSubData(t.ARRAY_BUFFER,0,e.particles,0,e.particleCount*12),t.drawArraysInstanced(t.TRIANGLE_STRIP,0,4,e.particleCount)}t.disable(t.BLEND),t.bindVertexArray(this.emptyVao),o=this.bloom,t.useProgram(o.prog),t.activeTexture(t.TEXTURE0),t.uniform1i(o.u.uSrc,0),t.uniform1f(o.u.uThreshold,this.hdr?1.6:1.6/8);let s=n;for(let e=0;e<this.chain.length;e++){let n=this.chain[e];t.bindFramebuffer(t.FRAMEBUFFER,n.fb),t.viewport(0,0,n.w,n.h),t.bindTexture(t.TEXTURE_2D,s.tex),t.uniform2f(o.u.uTexel,1/s.w,1/s.h),t.uniform1i(o.u.uMode,e===0?0:1),t.drawArrays(t.TRIANGLES,0,3),s=n}t.enable(t.BLEND),t.blendFunc(t.ONE,t.ONE),t.uniform1i(o.u.uMode,2);for(let e=this.chain.length-1;e>0;e--){let n=this.chain[e],r=this.chain[e-1];t.bindFramebuffer(t.FRAMEBUFFER,r.fb),t.viewport(0,0,r.w,r.h),t.bindTexture(t.TEXTURE_2D,n.tex),t.uniform2f(o.u.uTexel,.5/n.w,.5/n.h),t.drawArrays(t.TRIANGLES,0,3)}t.disable(t.BLEND),t.bindFramebuffer(t.FRAMEBUFFER,null),t.viewport(0,0,this.width,this.height),o=this.comp,t.useProgram(o.prog),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,n.tex),t.uniform1i(o.u.uScene,0),t.activeTexture(t.TEXTURE1),t.bindTexture(t.TEXTURE_2D,this.chain[0].tex),t.uniform1i(o.u.uBloom,1);let c=e.post;t.uniform2f(o.u.uRes,this.width,this.height),t.uniform1f(o.u.uExposure,c.exposure),t.uniform1f(o.u.uBloomAmt,c.bloom),t.uniform2f(o.u.uShake,c.shake[0],c.shake[1]),a(o.u.uShockScr,c.shockScr),t.uniform1f(o.u.uGroundV,c.groundV),a(o.u.uHaze,c.haze),t.uniform1f(o.u.uTime,e.time),t.uniform1f(o.u.uWhite,c.white),t.uniform1f(o.u.uHdrScale,this.hdr?1:8),t.drawArrays(t.TRIANGLES,0,3),t.activeTexture(t.TEXTURE0)}},Vt=`pop-porn/settings`,Ht=class e{sound=!0;haptics=!0;numbers=!0;fps=!1;quality=`auto`;custom={kg:1e3,nuclear:!1,height:0};static load(){let t=new e;try{Object.assign(t,JSON.parse(localStorage.getItem(Vt)??`{}`))}catch{}return t}save(){let{sound:e,haptics:t,numbers:n,fps:r,quality:i,custom:a}=this;try{localStorage.setItem(Vt,JSON.stringify({sound:e,haptics:t,numbers:n,fps:r,quality:i,custom:a}))}catch{}}},Ut=(e,t,n)=>{if(!t.has(e))throw TypeError(`Cannot `+n)},A=(e,t,n)=>(Ut(e,t,`read from private field`),n?n.call(e):t.get(e)),j=(e,t,n)=>{if(t.has(e))throw TypeError(`Cannot add the same private member more than once`);t instanceof WeakSet?t.add(e):t.set(e,n)},M=(e,t,n,r)=>(Ut(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),Wt=(e,t,n,r)=>({set _(r){M(e,t,r,n)},get _(){return A(e,t,r)}}),N=(e,t,n)=>(Ut(e,t,`access private method`),n),P=new Uint8Array(8),F=new DataView(P.buffer),I=e=>[(e%256+256)%256],L=e=>(F.setUint16(0,e,!1),[P[0],P[1]]),Gt=e=>(F.setInt16(0,e,!1),[P[0],P[1]]),Kt=e=>(F.setUint32(0,e,!1),[P[1],P[2],P[3]]),R=e=>(F.setUint32(0,e,!1),[P[0],P[1],P[2],P[3]]),qt=e=>(F.setInt32(0,e,!1),[P[0],P[1],P[2],P[3]]),Jt=e=>(F.setUint32(0,Math.floor(e/2**32),!1),F.setUint32(4,e,!1),[P[0],P[1],P[2],P[3],P[4],P[5],P[6],P[7]]),Yt=e=>(F.setInt16(0,256*e,!1),[P[0],P[1]]),z=e=>(F.setInt32(0,2**16*e,!1),[P[0],P[1],P[2],P[3]]),Xt=e=>(F.setInt32(0,2**30*e,!1),[P[0],P[1],P[2],P[3]]),B=(e,t=!1)=>{let n=Array(e.length).fill(null).map((t,n)=>e.charCodeAt(n));return t&&n.push(0),n},Zt=e=>e&&e[e.length-1],Qt=e=>{let t;for(let n of e)(!t||n.presentationTimestamp>t.presentationTimestamp)&&(t=n);return t},V=(e,t,n=!0)=>{let r=e*t;return n?Math.round(r):r},$t=e=>{let t=Math.PI/180*e,n=Math.cos(t),r=Math.sin(t);return[n,r,0,-r,n,0,0,0,1]},en=$t(0),tn=e=>[z(e[0]),z(e[1]),Xt(e[2]),z(e[3]),z(e[4]),Xt(e[5]),z(e[6]),z(e[7]),Xt(e[8])],nn=e=>!e||typeof e!=`object`?e:Array.isArray(e)?e.map(nn):Object.fromEntries(Object.entries(e).map(([e,t])=>[e,nn(t)])),rn=e=>e>=0&&e<2**32,H=(e,t,n)=>({type:e,contents:t&&new Uint8Array(t.flat(10)),children:n}),U=(e,t,n,r,i)=>H(e,[I(t),Kt(n),r??[]],i),an=e=>e.fragmented?H(`ftyp`,[B(`iso5`),R(512),B(`iso5`),B(`iso6`),B(`mp41`)]):H(`ftyp`,[B(`isom`),R(512),B(`isom`),e.holdsAvc?B(`avc1`):[],B(`mp41`)]),on=e=>({type:`mdat`,largeSize:e}),sn=e=>({type:`free`,size:e}),cn=(e,t,n=!1)=>H(`moov`,null,[ln(t,e),...e.map(e=>un(e,t)),n?Vn(e):null]),ln=(e,t)=>{let n=V(Math.max(0,...t.filter(e=>e.samples.length>0).map(e=>{let t=Qt(e.samples);return t.presentationTimestamp+t.duration})),Mr),r=Math.max(...t.map(e=>e.id))+1,i=!rn(e)||!rn(n),a=i?Jt:R;return U(`mvhd`,+i,0,[a(e),a(e),R(Mr),a(n),z(1),Yt(1),Array(10).fill(0),tn(en),Array(24).fill(0),R(r)])},un=(e,t)=>H(`trak`,null,[dn(e,t),fn(e,t)]),dn=(e,t)=>{let n=Qt(e.samples),r=V(n?n.presentationTimestamp+n.duration:0,Mr),i=!rn(t)||!rn(r),a=i?Jt:R,o;return o=e.info.type===`video`?typeof e.info.rotation==`number`?$t(e.info.rotation):e.info.rotation:en,U(`tkhd`,+i,3,[a(t),a(t),R(e.id),R(0),a(r),Array(8).fill(0),L(0),L(0),Yt(+(e.info.type===`audio`)),L(0),tn(o),z(e.info.type===`video`?e.info.width:0),z(e.info.type===`video`?e.info.height:0)])},fn=(e,t)=>H(`mdia`,null,[pn(e,t),mn(e.info.type===`video`?`vide`:`soun`),hn(e)]),pn=(e,t)=>{let n=Qt(e.samples),r=V(n?n.presentationTimestamp+n.duration:0,e.timescale),i=!rn(t)||!rn(r),a=i?Jt:R;return U(`mdhd`,+i,0,[a(t),a(t),R(e.timescale),a(r),L(21956),L(0)])},mn=e=>U(`hdlr`,0,0,[B(`mhlr`),B(e),R(0),R(0),R(0),B(`mp4-muxer-hdlr`,!0)]),hn=e=>H(`minf`,null,[e.info.type===`video`?gn():_n(),vn(),xn(e)]),gn=()=>U(`vmhd`,0,1,[L(0),L(0),L(0),L(0)]),_n=()=>U(`smhd`,0,0,[L(0),L(0)]),vn=()=>H(`dinf`,null,[yn()]),yn=()=>U(`dref`,0,0,[R(1)],[bn()]),bn=()=>U(`url `,0,1),xn=e=>{let t=e.compositionTimeOffsetTable.length>1||e.compositionTimeOffsetTable.some(e=>e.sampleCompositionTimeOffset!==0);return H(`stbl`,null,[Sn(e),Fn(e),In(e),Ln(e),Rn(e),zn(e),t?Bn(e):null])},Sn=e=>U(`stsd`,0,0,[R(1)],[e.info.type===`video`?Cn($n[e.info.codec],e):Mn(tr[e.info.codec],e)]),Cn=(e,t)=>H(e,[[,,,,,,].fill(0),L(1),L(0),L(0),Array(12).fill(0),L(t.info.width),L(t.info.height),R(4718592),R(4718592),R(0),L(1),Array(32).fill(0),L(24),Gt(65535)],[er[t.info.codec](t),t.info.decoderConfig.colorSpace?Dn(t):null]),wn={bt709:1,bt470bg:5,smpte170m:6},Tn={bt709:1,smpte170m:6,"iec61966-2-1":13},En={rgb:0,bt709:1,bt470bg:5,smpte170m:6},Dn=e=>H(`colr`,[B(`nclx`),L(wn[e.info.decoderConfig.colorSpace.primaries]),L(Tn[e.info.decoderConfig.colorSpace.transfer]),L(En[e.info.decoderConfig.colorSpace.matrix]),I(!!e.info.decoderConfig.colorSpace.fullRange<<7)]),On=e=>e.info.decoderConfig&&H(`avcC`,[...new Uint8Array(e.info.decoderConfig.description)]),kn=e=>e.info.decoderConfig&&H(`hvcC`,[...new Uint8Array(e.info.decoderConfig.description)]),An=e=>{if(!e.info.decoderConfig)return null;let t=e.info.decoderConfig;if(!t.colorSpace)throw Error(`'colorSpace' is required in the decoder config for VP9.`);let n=t.codec.split(`.`),r=Number(n[1]),i=Number(n[2]),a=(Number(n[3])<<4)+0+Number(t.colorSpace.fullRange);return U(`vpcC`,1,0,[I(r),I(i),I(a),I(2),I(2),I(2),L(0)])},jn=()=>H(`av1C`,[129,0,0,0]),Mn=(e,t)=>H(e,[[,,,,,,].fill(0),L(1),L(0),L(0),R(0),L(t.info.numberOfChannels),L(16),L(0),L(0),z(t.info.sampleRate)],[nr[t.info.codec](t)]),Nn=e=>{let t=new Uint8Array(e.info.decoderConfig.description);return U(`esds`,0,0,[R(58753152),I(32+t.byteLength),L(1),I(0),R(75530368),I(18+t.byteLength),I(64),I(21),Kt(0),R(130071),R(130071),R(92307584),I(t.byteLength),...t,R(109084800),I(1),I(2)])},Pn=e=>{let t=3840,n=0,r=e.info.decoderConfig?.description;if(r){if(r.byteLength<18)throw TypeError(`Invalid decoder description provided for Opus; must be at least 18 bytes long.`);let e=ArrayBuffer.isView(r)?new DataView(r.buffer,r.byteOffset,r.byteLength):new DataView(r);t=e.getUint16(10,!0),n=e.getInt16(14,!0)}return H(`dOps`,[I(0),I(e.info.numberOfChannels),L(t),R(e.info.sampleRate),Yt(n),I(0)])},Fn=e=>U(`stts`,0,0,[R(e.timeToSampleTable.length),e.timeToSampleTable.map(e=>[R(e.sampleCount),R(e.sampleDelta)])]),In=e=>{if(e.samples.every(e=>e.type===`key`))return null;let t=[...e.samples.entries()].filter(([,e])=>e.type===`key`);return U(`stss`,0,0,[R(t.length),t.map(([e])=>R(e+1))])},Ln=e=>U(`stsc`,0,0,[R(e.compactlyCodedChunkTable.length),e.compactlyCodedChunkTable.map(e=>[R(e.firstChunk),R(e.samplesPerChunk),R(1)])]),Rn=e=>U(`stsz`,0,0,[R(0),R(e.samples.length),e.samples.map(e=>R(e.size))]),zn=e=>e.finalizedChunks.length>0&&Zt(e.finalizedChunks).offset>=2**32?U(`co64`,0,0,[R(e.finalizedChunks.length),e.finalizedChunks.map(e=>Jt(e.offset))]):U(`stco`,0,0,[R(e.finalizedChunks.length),e.finalizedChunks.map(e=>R(e.offset))]),Bn=e=>U(`ctts`,0,0,[R(e.compositionTimeOffsetTable.length),e.compositionTimeOffsetTable.map(e=>[R(e.sampleCount),R(e.sampleCompositionTimeOffset)])]),Vn=e=>H(`mvex`,null,e.map(Hn)),Hn=e=>U(`trex`,0,0,[R(e.id),R(1),R(0),R(0),R(0)]),Un=(e,t)=>H(`moof`,null,[Wn(e),...t.map(Kn)]),Wn=e=>U(`mfhd`,0,0,[R(e)]),Gn=e=>{let t=0,n=0,r=e.type===`delta`;return n|=+r,t|=r?1:2,t<<24|n<<16},Kn=e=>H(`traf`,null,[qn(e),Jn(e),Yn(e)]),qn=e=>{let t=0;t|=8,t|=16,t|=32,t|=131072;let n=e.currentChunk.samples[1]??e.currentChunk.samples[0],r={duration:n.timescaleUnitsToNextSample,size:n.size,flags:Gn(n)};return U(`tfhd`,0,t,[R(e.id),R(r.duration),R(r.size),R(r.flags)])},Jn=e=>U(`tfdt`,1,0,[Jt(V(e.currentChunk.startTimestamp,e.timescale))]),Yn=e=>{let t=e.currentChunk.samples.map(e=>e.timescaleUnitsToNextSample),n=e.currentChunk.samples.map(e=>e.size),r=e.currentChunk.samples.map(Gn),i=e.currentChunk.samples.map(t=>V(t.presentationTimestamp-t.decodeTimestamp,e.timescale)),a=new Set(t),o=new Set(n),s=new Set(r),c=new Set(i),l=s.size===2&&r[0]!==r[1],u=a.size>1,d=o.size>1,f=!l&&s.size>1,p=c.size>1||[...c].some(e=>e!==0),m=0;return m|=1,m|=4*l,m|=256*u,m|=512*d,m|=1024*f,m|=2048*p,U(`trun`,1,m,[R(e.currentChunk.samples.length),R(e.currentChunk.offset-e.currentChunk.moofOffset||0),l?R(r[0]):[],e.currentChunk.samples.map((e,a)=>[u?R(t[a]):[],d?R(n[a]):[],f?R(r[a]):[],p?qt(i[a]):[]])])},Xn=e=>H(`mfra`,null,[...e.map(Zn),Qn()]),Zn=(e,t)=>U(`tfra`,1,0,[R(e.id),R(63),R(e.finalizedChunks.length),e.finalizedChunks.map(n=>[Jt(V(n.startTimestamp,e.timescale)),Jt(n.moofOffset),R(t+1),R(1),R(1)])]),Qn=()=>U(`mfro`,0,0,[R(0)]),$n={avc:`avc1`,hevc:`hvc1`,vp9:`vp09`,av1:`av01`},er={avc:On,hevc:kn,vp9:An,av1:jn},tr={aac:`mp4a`,opus:`Opus`},nr={aac:Nn,opus:Pn},rr=class{},ir=class extends rr{constructor(){super(...arguments),this.buffer=null}},ar=class extends rr{constructor(e){if(super(),this.options=e,typeof e!=`object`)throw TypeError(`StreamTarget requires an options object to be passed to its constructor.`);if(e.onData){if(typeof e.onData!=`function`)throw TypeError(`options.onData, when provided, must be a function.`);if(e.onData.length<2)throw TypeError(`options.onData, when provided, must be a function that takes in at least two arguments (data and position). Ignoring the position argument, which specifies the byte offset at which the data is to be written, can lead to broken outputs.`)}if(e.chunked!==void 0&&typeof e.chunked!=`boolean`)throw TypeError(`options.chunked, when provided, must be a boolean.`);if(e.chunkSize!==void 0&&(!Number.isInteger(e.chunkSize)||e.chunkSize<1024))throw TypeError(`options.chunkSize, when provided, must be an integer and not smaller than 1024.`)}},or=class extends rr{constructor(e,t){if(super(),this.stream=e,this.options=t,!(e instanceof FileSystemWritableFileStream))throw TypeError(`FileSystemWritableFileStreamTarget requires a FileSystemWritableFileStream instance.`);if(t!==void 0&&typeof t!=`object`)throw TypeError(`FileSystemWritableFileStreamTarget's options, when provided, must be an object.`);if(t&&t.chunkSize!==void 0&&(!Number.isInteger(t.chunkSize)||t.chunkSize<=0))throw TypeError(`options.chunkSize, when provided, must be a positive integer`)}},sr,cr,lr=class{constructor(){this.pos=0,j(this,sr,new Uint8Array(8)),j(this,cr,new DataView(A(this,sr).buffer)),this.offsets=new WeakMap}seek(e){this.pos=e}writeU32(e){A(this,cr).setUint32(0,e,!1),this.write(A(this,sr).subarray(0,4))}writeU64(e){A(this,cr).setUint32(0,Math.floor(e/2**32),!1),A(this,cr).setUint32(4,e,!1),this.write(A(this,sr).subarray(0,8))}writeAscii(e){for(let t=0;t<e.length;t++)A(this,cr).setUint8(t%8,e.charCodeAt(t)),t%8==7&&this.write(A(this,sr));e.length%8!=0&&this.write(A(this,sr).subarray(0,e.length%8))}writeBox(e){if(this.offsets.set(e,this.pos),e.contents&&!e.children)this.writeBoxHeader(e,e.size??e.contents.byteLength+8),this.write(e.contents);else{let t=this.pos;if(this.writeBoxHeader(e,0),e.contents&&this.write(e.contents),e.children)for(let t of e.children)t&&this.writeBox(t);let n=this.pos,r=e.size??n-t;this.seek(t),this.writeBoxHeader(e,r),this.seek(n)}}writeBoxHeader(e,t){this.writeU32(e.largeSize?1:t),this.writeAscii(e.type),e.largeSize&&this.writeU64(t)}measureBoxHeader(e){return 8+(e.largeSize?8:0)}patchBox(e){let t=this.pos;this.seek(this.offsets.get(e)),this.writeBox(e),this.seek(t)}measureBox(e){if(e.contents&&!e.children)return this.measureBoxHeader(e)+e.contents.byteLength;{let t=this.measureBoxHeader(e);if(e.contents&&(t+=e.contents.byteLength),e.children)for(let n of e.children)n&&(t+=this.measureBox(n));return t}}};sr=new WeakMap,cr=new WeakMap;var ur,dr,fr,pr,mr,hr,gr=class extends lr{constructor(e){super(),j(this,mr),j(this,ur,void 0),j(this,dr,new ArrayBuffer(2**16)),j(this,fr,new Uint8Array(A(this,dr))),j(this,pr,0),M(this,ur,e)}write(e){N(this,mr,hr).call(this,this.pos+e.byteLength),A(this,fr).set(e,this.pos),this.pos+=e.byteLength,M(this,pr,Math.max(A(this,pr),this.pos))}finalize(){N(this,mr,hr).call(this,this.pos),A(this,ur).buffer=A(this,dr).slice(0,Math.max(A(this,pr),this.pos))}};ur=new WeakMap,dr=new WeakMap,fr=new WeakMap,pr=new WeakMap,mr=new WeakSet,hr=function(e){let t=A(this,dr).byteLength;for(;t<e;)t*=2;if(t===A(this,dr).byteLength)return;let n=new ArrayBuffer(t),r=new Uint8Array(n);r.set(A(this,fr),0),M(this,dr,n),M(this,fr,r)};var _r=2**24,vr=2,yr,br,xr,W,G,Sr,Cr,wr,Tr,Er,Dr,Or,kr,Ar=class extends lr{constructor(e){super(),j(this,Sr),j(this,wr),j(this,Er),j(this,Or),j(this,yr,void 0),j(this,br,[]),j(this,xr,void 0),j(this,W,void 0),j(this,G,[]),M(this,yr,e),M(this,xr,e.options?.chunked??!1),M(this,W,e.options?.chunkSize??_r)}write(e){A(this,br).push({data:e.slice(),start:this.pos}),this.pos+=e.byteLength}flush(){if(A(this,br).length===0)return;let e=[],t=[...A(this,br)].sort((e,t)=>e.start-t.start);e.push({start:t[0].start,size:t[0].data.byteLength});for(let n=1;n<t.length;n++){let r=e[e.length-1],i=t[n];i.start<=r.start+r.size?r.size=Math.max(r.size,i.start+i.data.byteLength-r.start):e.push({start:i.start,size:i.data.byteLength})}for(let t of e){t.data=new Uint8Array(t.size);for(let e of A(this,br))t.start<=e.start&&e.start<t.start+t.size&&t.data.set(e.data,e.start-t.start);A(this,xr)?(N(this,Sr,Cr).call(this,t.data,t.start),N(this,Or,kr).call(this)):A(this,yr).options.onData?.(t.data,t.start)}A(this,br).length=0}finalize(){A(this,xr)&&N(this,Or,kr).call(this,!0)}};yr=new WeakMap,br=new WeakMap,xr=new WeakMap,W=new WeakMap,G=new WeakMap,Sr=new WeakSet,Cr=function(e,t){let n=A(this,G).findIndex(e=>e.start<=t&&t<e.start+A(this,W));n===-1&&(n=N(this,Er,Dr).call(this,t));let r=A(this,G)[n],i=t-r.start,a=e.subarray(0,Math.min(A(this,W)-i,e.byteLength));r.data.set(a,i);let o={start:i,end:i+a.byteLength};if(N(this,wr,Tr).call(this,r,o),r.written[0].start===0&&r.written[0].end===A(this,W)&&(r.shouldFlush=!0),A(this,G).length>vr){for(let e=0;e<A(this,G).length-1;e++)A(this,G)[e].shouldFlush=!0;N(this,Or,kr).call(this)}a.byteLength<e.byteLength&&N(this,Sr,Cr).call(this,e.subarray(a.byteLength),t+a.byteLength)},wr=new WeakSet,Tr=function(e,t){let n=0,r=e.written.length-1,i=-1;for(;n<=r;){let a=Math.floor(n+(r-n+1)/2);e.written[a].start<=t.start?(n=a+1,i=a):r=a-1}for(e.written.splice(i+1,0,t),(i===-1||e.written[i].end<t.start)&&i++;i<e.written.length-1&&e.written[i].end>=e.written[i+1].start;)e.written[i].end=Math.max(e.written[i].end,e.written[i+1].end),e.written.splice(i+1,1)},Er=new WeakSet,Dr=function(e){let t={start:Math.floor(e/A(this,W))*A(this,W),data:new Uint8Array(A(this,W)),written:[],shouldFlush:!1};return A(this,G).push(t),A(this,G).sort((e,t)=>e.start-t.start),A(this,G).indexOf(t)},Or=new WeakSet,kr=function(e=!1){for(let t=0;t<A(this,G).length;t++){let n=A(this,G)[t];if(n.shouldFlush||e){for(let e of n.written)A(this,yr).options.onData?.(n.data.subarray(e.start,e.end),n.start+e.start);A(this,G).splice(t--,1)}}};var jr=class extends Ar{constructor(e){super(new ar({onData:(t,n)=>e.stream.write({type:`write`,data:t,position:n}),chunked:!0,chunkSize:e.options?.chunkSize}))}},Mr=1e3,Nr=[`avc`,`hevc`,`vp9`,`av1`],Pr=[`aac`,`opus`],Fr=2082844800,Ir=[`strict`,`offset`,`cross-track-offset`],K,q,Lr,J,Y,X,Rr,zr,Br,Vr,Hr,Ur,Wr,Gr,Kr,qr,Jr,Yr,Xr,Zr,Qr,$r,ei,ti,Z,Q,ni,ri,ii,ai,oi,si,ci,li,ui,di,fi=class{constructor(e){if(j(this,Wr),j(this,Kr),j(this,Jr),j(this,Xr),j(this,Qr),j(this,ei),j(this,Z),j(this,ni),j(this,ii),j(this,oi),j(this,ci),j(this,ui),j(this,K,void 0),j(this,q,void 0),j(this,Lr,void 0),j(this,J,void 0),j(this,Y,null),j(this,X,null),j(this,Rr,Math.floor(Date.now()/1e3)+Fr),j(this,zr,[]),j(this,Br,1),j(this,Vr,[]),j(this,Hr,[]),j(this,Ur,!1),N(this,Wr,Gr).call(this,e),e.video=nn(e.video),e.audio=nn(e.audio),e.fastStart=nn(e.fastStart),this.target=e.target,M(this,K,{firstTimestampBehavior:`strict`,...e}),e.target instanceof ir)M(this,q,new gr(e.target));else if(e.target instanceof ar)M(this,q,new Ar(e.target));else if(e.target instanceof or)M(this,q,new jr(e.target));else throw Error(`Invalid target: ${e.target}`);N(this,Xr,Zr).call(this),N(this,Kr,qr).call(this)}addVideoChunk(e,t,n,r){if(!(e instanceof EncodedVideoChunk))throw TypeError(`addVideoChunk's first argument (sample) must be of type EncodedVideoChunk.`);if(t&&typeof t!=`object`)throw TypeError(`addVideoChunk's second argument (meta), when provided, must be an object.`);if(n!==void 0&&(!Number.isFinite(n)||n<0))throw TypeError(`addVideoChunk's third argument (timestamp), when provided, must be a non-negative real number.`);if(r!==void 0&&!Number.isFinite(r))throw TypeError(`addVideoChunk's fourth argument (compositionTimeOffset), when provided, must be a real number.`);let i=new Uint8Array(e.byteLength);e.copyTo(i),this.addVideoChunkRaw(i,e.type,n??e.timestamp,e.duration,t,r)}addVideoChunkRaw(e,t,n,r,i,a){if(!(e instanceof Uint8Array))throw TypeError(`addVideoChunkRaw's first argument (data) must be an instance of Uint8Array.`);if(t!==`key`&&t!==`delta`)throw TypeError(`addVideoChunkRaw's second argument (type) must be either 'key' or 'delta'.`);if(!Number.isFinite(n)||n<0)throw TypeError(`addVideoChunkRaw's third argument (timestamp) must be a non-negative real number.`);if(!Number.isFinite(r)||r<0)throw TypeError(`addVideoChunkRaw's fourth argument (duration) must be a non-negative real number.`);if(i&&typeof i!=`object`)throw TypeError(`addVideoChunkRaw's fifth argument (meta), when provided, must be an object.`);if(a!==void 0&&!Number.isFinite(a))throw TypeError(`addVideoChunkRaw's sixth argument (compositionTimeOffset), when provided, must be a real number.`);if(N(this,ui,di).call(this),!A(this,K).video)throw Error(`No video track declared.`);if(typeof A(this,K).fastStart==`object`&&A(this,Y).samples.length===A(this,K).fastStart.expectedVideoChunks)throw Error(`Cannot add more video chunks than specified in 'fastStart' (${A(this,K).fastStart.expectedVideoChunks}).`);let o=N(this,ei,ti).call(this,A(this,Y),e,t,n,r,i,a);if(A(this,K).fastStart===`fragmented`&&A(this,X)){for(;A(this,Hr).length>0&&A(this,Hr)[0].decodeTimestamp<=o.decodeTimestamp;){let e=A(this,Hr).shift();N(this,Z,Q).call(this,A(this,X),e)}o.decodeTimestamp<=A(this,X).lastDecodeTimestamp?N(this,Z,Q).call(this,A(this,Y),o):A(this,Vr).push(o)}else N(this,Z,Q).call(this,A(this,Y),o)}addAudioChunk(e,t,n){if(!(e instanceof EncodedAudioChunk))throw TypeError(`addAudioChunk's first argument (sample) must be of type EncodedAudioChunk.`);if(t&&typeof t!=`object`)throw TypeError(`addAudioChunk's second argument (meta), when provided, must be an object.`);if(n!==void 0&&(!Number.isFinite(n)||n<0))throw TypeError(`addAudioChunk's third argument (timestamp), when provided, must be a non-negative real number.`);let r=new Uint8Array(e.byteLength);e.copyTo(r),this.addAudioChunkRaw(r,e.type,n??e.timestamp,e.duration,t)}addAudioChunkRaw(e,t,n,r,i){if(!(e instanceof Uint8Array))throw TypeError(`addAudioChunkRaw's first argument (data) must be an instance of Uint8Array.`);if(t!==`key`&&t!==`delta`)throw TypeError(`addAudioChunkRaw's second argument (type) must be either 'key' or 'delta'.`);if(!Number.isFinite(n)||n<0)throw TypeError(`addAudioChunkRaw's third argument (timestamp) must be a non-negative real number.`);if(!Number.isFinite(r)||r<0)throw TypeError(`addAudioChunkRaw's fourth argument (duration) must be a non-negative real number.`);if(i&&typeof i!=`object`)throw TypeError(`addAudioChunkRaw's fifth argument (meta), when provided, must be an object.`);if(N(this,ui,di).call(this),!A(this,K).audio)throw Error(`No audio track declared.`);if(typeof A(this,K).fastStart==`object`&&A(this,X).samples.length===A(this,K).fastStart.expectedAudioChunks)throw Error(`Cannot add more audio chunks than specified in 'fastStart' (${A(this,K).fastStart.expectedAudioChunks}).`);let a=N(this,ei,ti).call(this,A(this,X),e,t,n,r,i);if(A(this,K).fastStart===`fragmented`&&A(this,Y)){for(;A(this,Vr).length>0&&A(this,Vr)[0].decodeTimestamp<=a.decodeTimestamp;){let e=A(this,Vr).shift();N(this,Z,Q).call(this,A(this,Y),e)}a.decodeTimestamp<=A(this,Y).lastDecodeTimestamp?N(this,Z,Q).call(this,A(this,X),a):A(this,Hr).push(a)}else N(this,Z,Q).call(this,A(this,X),a)}finalize(){if(A(this,Ur))throw Error(`Cannot finalize a muxer more than once.`);if(A(this,K).fastStart===`fragmented`){for(let e of A(this,Vr))N(this,Z,Q).call(this,A(this,Y),e);for(let e of A(this,Hr))N(this,Z,Q).call(this,A(this,X),e);N(this,oi,si).call(this,!1)}else A(this,Y)&&N(this,ii,ai).call(this,A(this,Y)),A(this,X)&&N(this,ii,ai).call(this,A(this,X));let e=[A(this,Y),A(this,X)].filter(Boolean);if(A(this,K).fastStart===`in-memory`){let t;for(let n=0;n<2;n++){let n=cn(e,A(this,Rr)),r=A(this,q).measureBox(n);t=A(this,q).measureBox(A(this,J));let i=A(this,q).pos+r+t;for(let e of A(this,zr)){e.offset=i;for(let{data:n}of e.samples)i+=n.byteLength,t+=n.byteLength}if(i<2**32)break;t>=2**32&&(A(this,J).largeSize=!0)}let n=cn(e,A(this,Rr));A(this,q).writeBox(n),A(this,J).size=t,A(this,q).writeBox(A(this,J));for(let e of A(this,zr))for(let t of e.samples)A(this,q).write(t.data),t.data=null}else if(A(this,K).fastStart===`fragmented`){let t=A(this,q).pos,n=Xn(e);A(this,q).writeBox(n);let r=A(this,q).pos-t;A(this,q).seek(A(this,q).pos-4),A(this,q).writeU32(r)}else{let t=A(this,q).offsets.get(A(this,J)),n=A(this,q).pos-t;A(this,J).size=n,A(this,J).largeSize=n>=2**32,A(this,q).patchBox(A(this,J));let r=cn(e,A(this,Rr));if(typeof A(this,K).fastStart==`object`){A(this,q).seek(A(this,Lr)),A(this,q).writeBox(r);let e=t-A(this,q).pos;A(this,q).writeBox(sn(e))}else A(this,q).writeBox(r)}N(this,ci,li).call(this),A(this,q).finalize(),M(this,Ur,!0)}};K=new WeakMap,q=new WeakMap,Lr=new WeakMap,J=new WeakMap,Y=new WeakMap,X=new WeakMap,Rr=new WeakMap,zr=new WeakMap,Br=new WeakMap,Vr=new WeakMap,Hr=new WeakMap,Ur=new WeakMap,Wr=new WeakSet,Gr=function(e){if(typeof e!=`object`)throw TypeError(`The muxer requires an options object to be passed to its constructor.`);if(!(e.target instanceof rr))throw TypeError(`The target must be provided and an instance of Target.`);if(e.video){if(!Nr.includes(e.video.codec))throw TypeError(`Unsupported video codec: ${e.video.codec}`);if(!Number.isInteger(e.video.width)||e.video.width<=0)throw TypeError(`Invalid video width: ${e.video.width}. Must be a positive integer.`);if(!Number.isInteger(e.video.height)||e.video.height<=0)throw TypeError(`Invalid video height: ${e.video.height}. Must be a positive integer.`);let t=e.video.rotation;if(typeof t==`number`&&![0,90,180,270].includes(t))throw TypeError(`Invalid video rotation: ${t}. Has to be 0, 90, 180 or 270.`);if(Array.isArray(t)&&(t.length!==9||t.some(e=>typeof e!=`number`)))throw TypeError(`Invalid video transformation matrix: ${t.join()}`);if(e.video.frameRate!==void 0&&(!Number.isInteger(e.video.frameRate)||e.video.frameRate<=0))throw TypeError(`Invalid video frame rate: ${e.video.frameRate}. Must be a positive integer.`)}if(e.audio){if(!Pr.includes(e.audio.codec))throw TypeError(`Unsupported audio codec: ${e.audio.codec}`);if(!Number.isInteger(e.audio.numberOfChannels)||e.audio.numberOfChannels<=0)throw TypeError(`Invalid number of audio channels: ${e.audio.numberOfChannels}. Must be a positive integer.`);if(!Number.isInteger(e.audio.sampleRate)||e.audio.sampleRate<=0)throw TypeError(`Invalid audio sample rate: ${e.audio.sampleRate}. Must be a positive integer.`)}if(e.firstTimestampBehavior&&!Ir.includes(e.firstTimestampBehavior))throw TypeError(`Invalid first timestamp behavior: ${e.firstTimestampBehavior}`);if(typeof e.fastStart==`object`){if(e.video){if(e.fastStart.expectedVideoChunks===void 0)throw TypeError(`'fastStart' is an object but is missing property 'expectedVideoChunks'.`);if(!Number.isInteger(e.fastStart.expectedVideoChunks)||e.fastStart.expectedVideoChunks<0)throw TypeError(`'expectedVideoChunks' must be a non-negative integer.`)}if(e.audio){if(e.fastStart.expectedAudioChunks===void 0)throw TypeError(`'fastStart' is an object but is missing property 'expectedAudioChunks'.`);if(!Number.isInteger(e.fastStart.expectedAudioChunks)||e.fastStart.expectedAudioChunks<0)throw TypeError(`'expectedAudioChunks' must be a non-negative integer.`)}}else if(![!1,`in-memory`,`fragmented`].includes(e.fastStart))throw TypeError(`'fastStart' option must be false, 'in-memory', 'fragmented' or an object.`);if(e.minFragmentDuration!==void 0&&(!Number.isFinite(e.minFragmentDuration)||e.minFragmentDuration<0))throw TypeError(`'minFragmentDuration' must be a non-negative number.`)},Kr=new WeakSet,qr=function(){if(A(this,q).writeBox(an({holdsAvc:A(this,K).video?.codec===`avc`,fragmented:A(this,K).fastStart===`fragmented`})),M(this,Lr,A(this,q).pos),A(this,K).fastStart===`in-memory`)M(this,J,on(!1));else if(A(this,K).fastStart!==`fragmented`){if(typeof A(this,K).fastStart==`object`){let e=N(this,Jr,Yr).call(this);A(this,q).seek(A(this,q).pos+e)}M(this,J,on(!0)),A(this,q).writeBox(A(this,J))}N(this,ci,li).call(this)},Jr=new WeakSet,Yr=function(){if(typeof A(this,K).fastStart!=`object`)return;let e=0,t=[A(this,K).fastStart.expectedVideoChunks,A(this,K).fastStart.expectedAudioChunks];for(let n of t)n&&(e+=8*Math.ceil(2/3*n),e+=4*n,e+=12*Math.ceil(2/3*n),e+=4*n,e+=8*n);return e+=4096,e},Xr=new WeakSet,Zr=function(){if(A(this,K).video&&M(this,Y,{id:1,info:{type:`video`,codec:A(this,K).video.codec,width:A(this,K).video.width,height:A(this,K).video.height,rotation:A(this,K).video.rotation??0,decoderConfig:null},timescale:A(this,K).video.frameRate??57600,samples:[],finalizedChunks:[],currentChunk:null,firstDecodeTimestamp:void 0,lastDecodeTimestamp:-1,timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,compactlyCodedChunkTable:[]}),A(this,K).audio&&(M(this,X,{id:A(this,K).video?2:1,info:{type:`audio`,codec:A(this,K).audio.codec,numberOfChannels:A(this,K).audio.numberOfChannels,sampleRate:A(this,K).audio.sampleRate,decoderConfig:null},timescale:A(this,K).audio.sampleRate,samples:[],finalizedChunks:[],currentChunk:null,firstDecodeTimestamp:void 0,lastDecodeTimestamp:-1,timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,compactlyCodedChunkTable:[]}),A(this,K).audio.codec===`aac`)){let e=N(this,Qr,$r).call(this,2,A(this,K).audio.sampleRate,A(this,K).audio.numberOfChannels);A(this,X).info.decoderConfig={codec:A(this,K).audio.codec,description:e,numberOfChannels:A(this,K).audio.numberOfChannels,sampleRate:A(this,K).audio.sampleRate}}},Qr=new WeakSet,$r=function(e,t,n){let r=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350].indexOf(t),i=n,a=``;a+=e.toString(2).padStart(5,`0`),a+=r.toString(2).padStart(4,`0`),r===15&&(a+=t.toString(2).padStart(24,`0`)),a+=i.toString(2).padStart(4,`0`);let o=Math.ceil(a.length/8)*8;a=a.padEnd(o,`0`);let s=new Uint8Array(a.length/8);for(let e=0;e<a.length;e+=8)s[e/8]=parseInt(a.slice(e,e+8),2);return s},ei=new WeakSet,ti=function(e,t,n,r,i,a,o){let s=r/1e6,c=(r-(o??0))/1e6,l=i/1e6,u=N(this,ni,ri).call(this,s,c,e);return s=u.presentationTimestamp,c=u.decodeTimestamp,a?.decoderConfig&&(e.info.decoderConfig===null?e.info.decoderConfig=a.decoderConfig:Object.assign(e.info.decoderConfig,a.decoderConfig)),{presentationTimestamp:s,decodeTimestamp:c,duration:l,data:t,size:t.byteLength,type:n,timescaleUnitsToNextSample:V(l,e.timescale)}},Z=new WeakSet,Q=function(e,t){A(this,K).fastStart!==`fragmented`&&e.samples.push(t);let n=V(t.presentationTimestamp-t.decodeTimestamp,e.timescale);if(e.lastTimescaleUnits!==null){let r=V(t.decodeTimestamp,e.timescale,!1),i=Math.round(r-e.lastTimescaleUnits);if(e.lastTimescaleUnits+=i,e.lastSample.timescaleUnitsToNextSample=i,A(this,K).fastStart!==`fragmented`){let t=Zt(e.timeToSampleTable);t.sampleCount===1?(t.sampleDelta=i,t.sampleCount++):t.sampleDelta===i?t.sampleCount++:(t.sampleCount--,e.timeToSampleTable.push({sampleCount:2,sampleDelta:i}));let r=Zt(e.compositionTimeOffsetTable);r.sampleCompositionTimeOffset===n?r.sampleCount++:e.compositionTimeOffsetTable.push({sampleCount:1,sampleCompositionTimeOffset:n})}}else e.lastTimescaleUnits=0,A(this,K).fastStart!==`fragmented`&&(e.timeToSampleTable.push({sampleCount:1,sampleDelta:V(t.duration,e.timescale)}),e.compositionTimeOffsetTable.push({sampleCount:1,sampleCompositionTimeOffset:n}));e.lastSample=t;let r=!1;if(!e.currentChunk)r=!0;else{let n=t.presentationTimestamp-e.currentChunk.startTimestamp;if(A(this,K).fastStart===`fragmented`){let i=A(this,Y)??A(this,X),a=A(this,K).minFragmentDuration??1;e===i&&t.type===`key`&&n>=a&&(r=!0,N(this,oi,si).call(this))}else r=n>=.5}r&&(e.currentChunk&&N(this,ii,ai).call(this,e),e.currentChunk={startTimestamp:t.presentationTimestamp,samples:[]}),e.currentChunk.samples.push(t)},ni=new WeakSet,ri=function(e,t,n){let r=A(this,K).firstTimestampBehavior===`strict`,i=n.lastDecodeTimestamp===-1;if(r&&i&&t!==0)throw Error(`The first chunk for your media track must have a timestamp of 0 (received DTS=${t}).Non-zero first timestamps are often caused by directly piping frames or audio data from a MediaStreamTrack into the encoder. Their timestamps are typically relative to the age of thedocument, which is probably what you want.

If you want to offset all timestamps of a track such that the first one is zero, set firstTimestampBehavior: 'offset' in the options.
`);if(A(this,K).firstTimestampBehavior===`offset`||A(this,K).firstTimestampBehavior===`cross-track-offset`){n.firstDecodeTimestamp===void 0&&(n.firstDecodeTimestamp=t);let r;r=A(this,K).firstTimestampBehavior===`offset`?n.firstDecodeTimestamp:Math.min(A(this,Y)?.firstDecodeTimestamp??1/0,A(this,X)?.firstDecodeTimestamp??1/0),t-=r,e-=r}if(t<n.lastDecodeTimestamp)throw Error(`Timestamps must be monotonically increasing (DTS went from ${n.lastDecodeTimestamp*1e6} to ${t*1e6}).`);return n.lastDecodeTimestamp=t,{presentationTimestamp:e,decodeTimestamp:t}},ii=new WeakSet,ai=function(e){if(A(this,K).fastStart===`fragmented`)throw Error(`Can't finalize individual chunks if 'fastStart' is set to 'fragmented'.`);if(e.currentChunk){if(e.finalizedChunks.push(e.currentChunk),A(this,zr).push(e.currentChunk),(e.compactlyCodedChunkTable.length===0||Zt(e.compactlyCodedChunkTable).samplesPerChunk!==e.currentChunk.samples.length)&&e.compactlyCodedChunkTable.push({firstChunk:e.finalizedChunks.length,samplesPerChunk:e.currentChunk.samples.length}),A(this,K).fastStart===`in-memory`)e.currentChunk.offset=0;else{e.currentChunk.offset=A(this,q).pos;for(let t of e.currentChunk.samples)A(this,q).write(t.data),t.data=null;N(this,ci,li).call(this)}}},oi=new WeakSet,si=function(e=!0){if(A(this,K).fastStart!==`fragmented`)throw Error(`Can't finalize a fragment unless 'fastStart' is set to 'fragmented'.`);let t=[A(this,Y),A(this,X)].filter(e=>e&&e.currentChunk);if(t.length===0)return;let n=Wt(this,Br)._++;if(n===1){let e=cn(t,A(this,Rr),!0);A(this,q).writeBox(e)}let r=A(this,q).pos,i=Un(n,t);A(this,q).writeBox(i);{let e=on(!1),n=0;for(let e of t)for(let t of e.currentChunk.samples)n+=t.size;let r=A(this,q).measureBox(e)+n;r>=2**32&&(e.largeSize=!0,r=A(this,q).measureBox(e)+n),e.size=r,A(this,q).writeBox(e)}for(let e of t){e.currentChunk.offset=A(this,q).pos,e.currentChunk.moofOffset=r;for(let t of e.currentChunk.samples)A(this,q).write(t.data),t.data=null}let a=A(this,q).pos;A(this,q).seek(A(this,q).offsets.get(i));let o=Un(n,t);A(this,q).writeBox(o),A(this,q).seek(a);for(let e of t)e.finalizedChunks.push(e.currentChunk),A(this,zr).push(e.currentChunk),e.currentChunk=null;e&&N(this,ci,li).call(this)},ci=new WeakSet,li=function(){A(this,q)instanceof Ar&&A(this,q).flush()},ui=new WeakSet,di=function(){if(A(this,Ur))throw Error(`Cannot add new video or audio chunks after the file has been finalized.`)};var pi=[`#7fd18b`,`#c6e07a`,`#ffb347`,`#ff6a1a`,`#ff4d4d`,`#ff4d4d`];function mi(e,t,n,r){let i=Math.min(t,n)/100,a=(e,t=600)=>`${t} ${e}px system-ui, -apple-system, Roboto, sans-serif`;e.save(),e.textBaseline=`top`,e.shadowColor=`rgba(0,0,0,0.65)`,e.shadowBlur=i*1.2;let o=i*5;if(e.fillStyle=`#fff`,e.font=a(i*6.2,800),e.fillText(r.ex.name,o,o),e.font=a(i*3.4,600),e.fillStyle=`#ffd9a8`,e.fillText(`${fe(r.ex.tntKg)} of TNT · seen from ${k(r.report.distance)}`,o,o+i*7.6),r.ex.when&&(e.fillStyle=`rgba(255,255,255,0.75)`,e.font=a(i*2.9,500),e.fillText([r.ex.when,r.ex.where].filter(Boolean).join(` · `),o,o+i*12)),e.font=a(i*2.8,800),e.fillStyle=`rgba(255,255,255,0.7)`,e.textAlign=`right`,e.textBaseline=`bottom`,e.fillText(`pop-porn`,t-o,n-o*.7),e.textAlign=`left`,e.textBaseline=`top`,r.numbers&&hi(e,t,n,i,r,a),r.sinceHit>=0&&r.sinceHit<2.2&&r.endFade<=0&&(e.globalAlpha=Math.min(1,r.sinceHit*6)*(1-_i(1.6,2.2,r.sinceHit)),e.textAlign=`center`,e.font=a(i*5,800),e.fillStyle=`#fff`,e.fillText(`BLAST WAVE HITS`,t/2,n*.62),r.numbers&&(e.font=a(i*3.4,600),e.fillStyle=`#ffd9a8`,e.fillText(`${he(r.report.dp)} · ${ge(r.report.wind)} wind`,t/2,n*.62+i*6.5)),e.textAlign=`left`,e.globalAlpha=1),r.endFade>0){e.globalAlpha=r.endFade;let s=r.report.verdict,c=n*.3;e.shadowBlur=0;let l=e.createLinearGradient(0,n-c,0,n);l.addColorStop(0,`rgba(8,10,14,0)`),l.addColorStop(.35,`rgba(8,10,14,0.78)`),l.addColorStop(1,`rgba(8,10,14,0.92)`),e.fillStyle=l,e.fillRect(0,n-c,t,c),e.shadowBlur=i;let u=n-c*.62;e.font=a(i*3.2,600),e.fillStyle=`rgba(255,255,255,0.75)`,e.fillText(`You, at ${k(r.report.distance)}:`,o,u),u+=i*4.6,e.font=a(i*6,800),e.fillStyle=pi[s.severity],e.fillText(s.title,o,u),u+=i*8.2,e.font=a(i*3.1,500),e.fillStyle=`#fff`;for(let n of s.effects.slice(0,3))e.fillText(`• ${n}`,o,u,t-o*2),u+=i*4.4;e.globalAlpha=1}e.restore()}function hi(e,t,n,r,i,a){let o=(e,r)=>{let a=lt(i.view,e,r,0);return a?[(a[0]+1)/2*t,(1-a[1])/2*n]:[-1e4,-1e4]},s=n/(2*i.view.vh);if(i.t!==0){e.textAlign=`right`,e.font=a(r*4.2,700),e.fillStyle=`#fff`;let n=r*5;e.fillText(pe(i.t),t-n,n),e.font=a(r*2.8,500),e.fillStyle=`rgba(255,255,255,0.75)`,e.fillText(i.t<0?`until impact`:ye(i.speedFactor),t-n,n+r*5.2),e.textAlign=`left`}let c=(i,o,s,c)=>{e.font=a(r*2.9,700);let l=e.measureText(s+` `).width;e.font=a(r*2.9,500);let u=l+e.measureText(c).width+r*3,d=r*5;i=Math.min(Math.max(i,r*2),t-u-r*2),o=Math.min(Math.max(o,r*22),n-d-r*8),e.save(),e.shadowBlur=0,e.fillStyle=`rgba(10,12,16,0.6)`,gi(e,i,o,u,d,r*1.2),e.fill(),e.restore(),e.font=a(r*2.9,700),e.fillStyle=`#fff`,e.fillText(s,i+r*1.5,o+r*1),e.font=a(r*2.9,500),e.fillStyle=`#ffd9a8`,e.fillText(c,i+r*1.5+l,o+r*1)},l=i.hud.fireball;if(l&&l.temp>1100&&l.r*s>6){let[e,t]=o(l.r,l.y);c(e+r*2,t-r*2.5,`Fireball`,`${k(2*l.r)} · ${_e(l.temp)}`)}let u=i.hud.bolide;if(u){let[e,t]=o(u.x,u.y);c(e+r*3,t+r*2,`Asteroid`,`${k(u.size)} · ${ge(u.speed)} · ${k(u.y)} up`)}let d=i.hud.front;if(d&&d.dp>60){let[e,n]=o(d.x,0);e>0&&e<t+r*10&&c(e-r*10,n+r*2,`Blast wave`,`${he(d.dp)} · ${ge(d.speed)}`)}if(i.hud.cloudTop*s>n*.08&&i.t>0){let[e,t]=o(0,i.hud.cloudTop);c(e-r*12,t-r*7,`Cloud top`,k(i.hud.cloudTop))}}function gi(e,t,n,r,i,a){e.beginPath(),e.moveTo(t+a,n),e.arcTo(t+r,n,t+r,n+i,a),e.arcTo(t+r,n+i,t,n+i,a),e.arcTo(t,n+i,t,n,a),e.arcTo(t,n,t+r,n,a),e.closePath()}function _i(e,t,n){let r=Math.min(Math.max((n-e)/(t-e),0),1);return r*r*(3-2*r)}var vi=.8,yi=2.8,bi=48e3,xi=()=>window.isSecureContext&&typeof VideoEncoder<`u`&&typeof AudioEncoder<`u`;async function Si(e,t,n){let r=n>30?[`avc1.64002A`,`avc1.4D002A`,`avc1.640028`]:[`avc1.640028`,`avc1.4D0028`,`avc1.64002A`];for(let i of r){let r=e*t/2073600,a={codec:i,width:e,height:t,bitrate:(n>30?12e6:8e6)*Math.max(r,.1),framerate:n,avc:{format:`avc`}};if((await VideoEncoder.isConfigSupported(a)).supported)return a}throw Error(`This browser cannot encode H.264 video.`)}async function Ci(){for(let[e,t]of[[`mp4a.40.2`,`aac`],[`opus`,`opus`]]){let n={codec:e,sampleRate:bi,numberOfChannels:2,bitrate:16e4};if((await AudioEncoder.isConfigSupported(n)).supported)return{cfg:n,mux:t}}return null}var wi=()=>new Promise(e=>setTimeout(e,0));async function Ti(e,t,n,r){let i=e.session,a=e.renderer,o=t.scale??1,s=e=>Math.round(e*o/2)*2,[c,l]=t.aspect===`9:16`?[s(1080),s(1920)]:[s(1920),s(1080)],u=t.fps,d=1/u,f=i.report,m=new mt(i.blast,i.distance);m.playing=!0;let h=0,g=-1,_=-1;for(;m.tick(d),h++,_<0&&f.seismicT!==null&&m.t>=f.seismicT&&(_=h),g<0&&m.t>=f.shockT&&(g=h),!(m.t>=m.end&&g>=0&&h-g>1.5*u||h/u>54.400000000000006););let v=Math.round(vi*u),y=Math.round(yi*u),b=v+h+y,x=e=>(v+e-1)/u,S=[];_>=0&&S.push({at:x(_),rumble:Math.min(1,i.blast.kt*2+.2)}),g>=0&&S.push({at:x(g),boom:{db:f.db,duration:f.duration,distance:f.distance,kt:i.blast.kt}});let ee=await p(S,b/u,bi),te=await Si(c,l,u),ne=await Ci(),C=new ir,w=new fi({target:C,video:{codec:`avc`,width:c,height:l,frameRate:u},audio:ne?{codec:ne.mux,numberOfChannels:2,sampleRate:bi}:void 0,fastStart:`in-memory`,firstTimestampBehavior:`offset`}),T=null,E=new VideoEncoder({output:(e,t)=>w.addVideoChunk(e,t),error:e=>T=e});if(E.configure(te),ne){let e=new AudioEncoder({output:(e,t)=>w.addAudioChunk(e,t),error:e=>T=e});e.configure(ne.cfg);let t=ee.getChannelData(0),n=ee.getChannelData(1),r=4800;for(let i=0;i<ee.length;i+=r){let a=Math.min(r,ee.length-i),o=new Float32Array(a*2);o.set(t.subarray(i,i+a),0),o.set(n.subarray(i,i+a),a);let s=new AudioData({format:`f32-planar`,sampleRate:bi,numberOfFrames:a,numberOfChannels:2,timestamp:Math.round(i/bi*1e6),data:o});e.encode(s),s.close()}await e.flush(),e.close()}let re={haptics:e.haptics.enabled,budget:e.perf.budget};e.busy=!0,e.audio.setMuted(!0),e.haptics.enabled=!1,i.setParticleBudget(1),a.resize(c,l),a.canvas.style.objectFit=`contain`;let D=document.createElement(`canvas`);D.width=c,D.height=l;let ie=D.getContext(`2d`);i.reset();try{for(let o=0;o<b;o++){if(r.aborted)throw new DOMException(`Cancelled`,`AbortError`);if(T)throw T;o===v&&i.detonate();let s=e.step(o===0?0:d,{aspect:c/l,groundAt:.12,octaves:5});ie.drawImage(a.canvas,0,0,c,l),mi(ie,c,l,{ex:i.explosive,report:f,t:i.phase===`setup`?0:i.t,speedFactor:i.clock.factor,sinceHit:i.hitAge,endFade:Math.min(1,Math.max(0,(o-v-h)/(.6*u))),numbers:t.numbers,view:s.view,hud:s.hud});let p=new VideoFrame(D,{timestamp:Math.round(o*1e6/u),duration:Math.round(1e6/u)});for(E.encode(p,{keyFrame:o%(u*2)==0}),p.close();E.encodeQueueSize>3;)await new Promise(e=>setTimeout(e,4));o%3==0&&(n(o/b),await wi())}await E.flush(),E.close(),w.finalize()}finally{E.state!==`closed`&&E.close(),a.canvas.style.objectFit=``,e.busy=!1,e.audio.setMuted(!1),e.haptics.enabled=re.haptics,i.setParticleBudget(re.budget),i.reset(),e.resizeLive()}n(1);let ae=`pop-porn-${i.explosive.id}-${Math.round(i.distance)}m-${t.aspect.replace(`:`,`x`)}.mp4`;return{file:new File([C.buffer],ae,{type:`video/mp4`}),seconds:b/u}}async function Ei(e,t){let n=e.session,r=e.renderer,i=Math.min(window.devicePixelRatio||1,3),a=Math.round(window.innerWidth*i),o=Math.round(window.innerHeight*i),s=Math.min(1,3200/Math.max(a,o));a=Math.round(a*s),o=Math.round(o*s),e.busy=!0;try{r.resize(a,o),e.step(0,{aspect:a/o,groundAt:t,octaves:5});let i=document.createElement(`canvas`);i.width=a,i.height=o;let s=i.getContext(`2d`);s.drawImage(r.canvas,0,0);let c=Math.min(a,o)/100;s.shadowColor=`rgba(0,0,0,0.6)`,s.shadowBlur=c,s.textBaseline=`bottom`,s.font=`700 ${c*3}px system-ui, Roboto, sans-serif`,s.fillStyle=`rgba(255,255,255,0.85)`;let l=n.explosive;s.fillText(`${l.name} · ${fe(l.tntKg)} · T+${me(Math.max(n.t,0))}`,c*4,o-c*4),s.textAlign=`right`,s.font=`800 ${c*2.6}px system-ui, Roboto, sans-serif`,s.fillText(`pop-porn`,a-c*4,o-c*4);let u=await new Promise((e,t)=>i.toBlob(n=>n?e(n):t(Error(`Could not encode the photo`)),`image/jpeg`,.93));return new File([u],`pop-porn-${l.id}-T${Math.max(n.t,0).toPrecision(3)}s.jpg`,{type:`image/jpeg`})}finally{e.busy=!1,e.resizeLive()}}async function Di(e){if(navigator.canShare?.({files:[e]}))try{return await navigator.share({files:[e],title:e.name}),`shared`}catch(e){if(e.name===`AbortError`)return`cancelled`}return Oi(e),`saved`}function Oi(e){let t=URL.createObjectURL(e),n=document.createElement(`a`);n.href=t,n.download=e.name,document.body.append(n),n.click(),n.remove(),setTimeout(()=>URL.revokeObjectURL(t),6e4)}var ki={chemical:`Chemical`,accident:`Accidents`,nuclear:`Nuclear`,nature:`Nature`,cosmic:`Cosmic`,custom:`Custom`},$=(e,t=document)=>t.querySelector(e),Ai=class{app;settings;dist=$(`#dist`);labFire=$(`#lab-fire`);labBolide=$(`#lab-bolide`);labFront=$(`#lab-front`);labCloud=$(`#lab-cloud`);pin=$(`#pin-you`);scale=$(`#scalebar`);clock=$(`#clock`);obs=$(`#obs`);result=$(`#result`);fps=$(`#fps`);lastText=new Map;touchTimer=0;resultShown=!1;factIndex=0;onQuality=()=>{};s;audio;haptics;vid={aspect:`9:16`,fps:60,numbers:!1,scale:Number(new URLSearchParams(location.search).get(`vscale`)??1)};abort=null;output=null;constructor(e,t){this.app=e,this.settings=t,this.s=e.session,this.audio=e.audio,this.haptics=e.haptics,this.bind(),this.bindCapture(),this.applySettings(),this.refreshBlast()}bind(){$(`#start`).addEventListener(`click`,()=>{this.audio.unlock(),this.audio.setEnabled(this.settings.sound),$(`#splash`).classList.add(`gone`);let e=document.documentElement;!matchMedia(`(display-mode: fullscreen)`).matches&&e.requestFullscreen&&e.requestFullscreen({navigationUI:`hide`}).catch(()=>{})}),$(`#pick`).addEventListener(`click`,()=>this.openPicker()),$(`#open-settings`).addEventListener(`click`,()=>this.openSheet(`#sheet-settings`)),document.querySelectorAll(`.sheet`).forEach(e=>{e.addEventListener(`click`,t=>{(t.target===e||t.target.closest(`.close`))&&(e.hidden=!0)})}),$(`#toggle-num`).addEventListener(`click`,()=>{this.settings.numbers=!this.settings.numbers,this.settings.save(),this.applySettings()}),this.dist.addEventListener(`input`,()=>{let e=this.s.explosive.observer,t=e.min*(e.max/e.min)**(Number(this.dist.value)/1e3);this.s.setDistance(t),this.s.director.reset(),this.updateSetup()}),$(`#go`).addEventListener(`click`,()=>this.detonate()),$(`#replay`).addEventListener(`click`,()=>this.detonate()),$(`#playpause`).addEventListener(`click`,()=>{let e=this.s.clock;if(this.s.clock.t>=e.end*3)return this.detonate();e.playing=!e.playing,this.syncPlay()}),$(`#slowmo`).addEventListener(`click`,e=>{let t=this.s.clock;t.speed=t.speed<1?1:.25,e.currentTarget.classList.toggle(`on`,t.speed<1)}),$(`#newblast`).addEventListener(`click`,()=>this.toSetup()),this.result.addEventListener(`click`,e=>{let t=e.target.closest(`button`)?.dataset.act;t&&(t===`closer`||t===`farther`?(this.s.setDistance(this.s.distance*(t===`closer`?.5:2)),this.detonate()):t===`replay`?this.detonate():t===`pick`?this.openPicker():t===`video`&&this.openVideo())});let e=(e,t)=>{let n=$(e);n.checked=this.settings[t],n.addEventListener(`change`,()=>{this.settings[t]=n.checked,this.settings.save(),this.applySettings()})};e(`#set-sound`,`sound`),e(`#set-haptics`,`haptics`),e(`#set-numbers`,`numbers`),e(`#set-fps`,`fps`),$(`#set-quality`).addEventListener(`click`,e=>{let t=e.target.dataset.q;t&&(this.settings.quality=t,this.settings.save(),this.applySettings(),this.onQuality(t))}),$(`#view`).addEventListener(`pointerdown`,()=>{document.body.classList.add(`touched`),clearTimeout(this.touchTimer),this.touchTimer=window.setTimeout(()=>document.body.classList.remove(`touched`),3e3)})}bindCapture(){let e=(e,t,n)=>{let r=$(e),i=()=>r.querySelectorAll(`button`).forEach(e=>e.classList.toggle(`on`,e.dataset.v===t()));r.addEventListener(`click`,e=>{let t=e.target.dataset.v;t&&(n(t),i(),this.updateVideoInfo())}),i()};e(`#vid-aspect`,()=>this.vid.aspect,e=>this.vid.aspect=e),e(`#vid-fps`,()=>String(this.vid.fps),e=>this.vid.fps=Number(e));let t=$(`#vid-numbers`);t.addEventListener(`change`,()=>this.vid.numbers=t.checked),$(`#video`).addEventListener(`click`,()=>this.openVideo()),$(`#vid-go`).addEventListener(`click`,()=>this.renderVideo()),$(`#photo`).addEventListener(`click`,()=>this.photo()),$(`#busy-close`).addEventListener(`click`,()=>{this.abort?this.abort.abort():this.closeBusy()}),$(`#busy-share`).addEventListener(`click`,()=>this.output&&Di(this.output)),$(`#busy-save`).addEventListener(`click`,()=>this.output&&Oi(this.output))}openVideo(){$(`#vid-numbers`).checked=this.vid.numbers,this.updateVideoInfo(),this.openSheet(`#sheet-video`)}updateVideoInfo(){let e=xi();if($(`#vid-go`).disabled=!e,!e){$(`#vid-info`).textContent=`Video export needs Chrome over https (the installed app or the GitHub Pages link).`;return}let t=new mt(this.s.blast,this.s.distance);t.playing=!0;let n=0;for(;t.t<t.end&&n<55;)t.tick(.05),n+=.05;let r=Math.min(58,n+.8+2.8+1.5),[i,a]=this.vid.aspect===`9:16`?[1080,1920]:[1920,1080];$(`#vid-info`).textContent=`About ${Math.round(r)} s of ${i}×${a} video with sound, rendered on your phone frame by frame (full quality, no stutter). Takes a minute or two; keep the app open.`}showBusy(e){document.body.classList.add(`busy`),$(`#busy`).hidden=!1,$(`#busy-title`).textContent=e,$(`#busy-text`).textContent=``,$(`.bar i`,$(`#busy`)).style.width=`0%`,$(`.bar`,$(`#busy`)).hidden=!1,$(`#busy-video`).hidden=!0,$(`#busy-img`).hidden=!0,$(`#busy-share`).hidden=!0,$(`#busy-save`).hidden=!0,$(`#busy-close`).textContent=`Cancel`}showOutput(e,t,n){this.output=e;let r=URL.createObjectURL(e);if($(`#busy-title`).textContent=t===`video`?`Your video is ready`:`Photo ready`,$(`.bar`,$(`#busy`)).hidden=!0,$(`#busy-text`).textContent=n,t===`video`){let e=$(`#busy-video`);e.src=r,e.hidden=!1,e.play().catch(()=>{})}else{let e=$(`#busy-img`);e.src=r,e.hidden=!1}$(`#busy-share`).hidden=!1,$(`#busy-save`).hidden=!1,$(`#busy-close`).textContent=`Done`}closeBusy(){$(`#busy`).hidden=!0,document.body.classList.remove(`busy`);let e=$(`#busy-video`);e.pause(),e.src&&URL.revokeObjectURL(e.src),e.removeAttribute(`src`);let t=$(`#busy-img`);t.src&&URL.revokeObjectURL(t.src),t.removeAttribute(`src`),this.output=null}async renderVideo(){$(`#sheet-video`).hidden=!0,this.showBusy(`Rendering video…`),this.abort=new AbortController;let e=$(`.bar i`,$(`#busy`)),t=performance.now();try{let n=await Ti(this.app,this.vid,n=>{e.style.width=`${(n*100).toFixed(1)}%`;let r=(performance.now()-t)/1e3,i=n>.03?r/n*(1-n):NaN;$(`#busy-text`).textContent=`${Math.round(n*100)}%${Number.isFinite(i)?` · about ${Math.ceil(i)} s left`:``}`},this.abort.signal);this.abort=null;let r=(n.file.size/1e6).toFixed(1);this.showOutput(n.file,`video`,`${Math.round(n.seconds)} s · ${r} MB · rendered in ${Math.round((performance.now()-t)/1e3)} s`)}catch(e){this.abort=null,e.name===`AbortError`?this.closeBusy():($(`#busy-title`).textContent=`The video failed`,$(`#busy-text`).textContent=e.message,$(`#busy-close`).textContent=`Close`)}this.toSetup()}async photo(){let e=this.s.clock.playing;this.s.clock.playing=!1,this.syncPlay(),this.showBusy(`Taking photo…`);try{let e=window.innerWidth/window.innerHeight,t=await Ei(this.app,e<1?.17:.13);this.showOutput(t,`photo`,`${k(this.s.distance)} from ${this.s.explosive.name}, T+${me(Math.max(this.s.t,0))}`)}catch(e){$(`#busy-title`).textContent=`The photo failed`,$(`#busy-text`).textContent=e.message}e&&this.syncPlay()}applySettings(){let e=this.settings;document.body.classList.toggle(`clean`,!e.numbers),$(`#toggle-num`).classList.toggle(`on`,e.numbers),$(`#set-numbers`).checked=e.numbers,this.audio.setEnabled(e.sound),this.haptics.enabled=e.haptics,this.fps.hidden=!e.fps,document.querySelectorAll(`#set-quality button`).forEach(t=>t.classList.toggle(`on`,t.dataset.q===e.quality))}openSheet(e){$(e).hidden=!1}openPicker(){let e=$(`#sheet-picker`),t=$(`.tabs`,e),n=$(`.list`,e),r=Ie(),i=this.s.explosive,a=e=>{if(t.querySelectorAll(`button`).forEach(t=>t.classList.toggle(`on`,t.dataset.cat===e)),n.innerHTML=``,e===`custom`)return n.append(this.customForm());for(let t of r.find(([t])=>t===e)[1])n.append(this.item(t,t===i))};t.innerHTML=``;for(let[e]of[...r,[`custom`]]){let n=document.createElement(`button`);n.textContent=ki[e],n.dataset.cat=e,n.addEventListener(`click`,()=>a(e)),t.append(n)}a(i.category),e.hidden=!1}customForm(){let e=this.settings.custom,t=Le,n=document.createElement(`div`);n.className=`custom`,n.innerHTML=`
      <label><span>Energy <b class="v-kg"></b> of TNT</span><input type="range" class="r-kg" min="0" max="1000" /></label>
      <div class="seg"><span>Kind</span><button data-k="0">Chemical</button><button data-k="1">Nuclear</button></div>
      <label><span>Height <b class="v-h"></b></span><input type="range" class="r-h" min="0" max="1000" /></label>
      <p class="small facts"></p>
      <button class="big use">Use this blast</button>`;let r=$(`.r-kg`,n),i=$(`.r-h`,n),a=e=>10**(t.minLogKg+(t.maxLogKg-t.minLogKg)*e/1e3),o=e=>e<20?0:10**(Math.log10(t.maxHeight)*(e-20)/980);r.value=String(Math.round((Math.log10(e.kg)-t.minLogKg)/(t.maxLogKg-t.minLogKg)*1e3)),i.value=String(e.height<1?0:Math.round(20+980*Math.log10(e.height)/Math.log10(t.maxHeight)));let s=()=>{let t=Number(a(Number(r.value)).toPrecision(2)),s=Number(o(Number(i.value)).toPrecision(2));Object.assign(e,{kg:t,height:s}),$(`.v-kg`,n).textContent=fe(t),$(`.v-h`,n).textContent=s<1?`on the ground`:`${k(s)} up`,n.querySelectorAll(`.seg button`).forEach(t=>t.classList.toggle(`on`,t.dataset.k===`1`===e.nuclear));let c=Ve(e);$(`.facts`,n).textContent=`${c.facts.join(` `)}`};return r.addEventListener(`input`,s),i.addEventListener(`input`,s),n.querySelector(`.seg`).addEventListener(`click`,t=>{let n=t.target.dataset.k;n!==void 0&&(e.nuclear=n===`1`,s())}),$(`.use`,n).addEventListener(`click`,()=>{this.settings.save(),$(`#sheet-picker`).hidden=!0,this.haptics.tap(),this.s.select(Ve(e)),this.factIndex=0,this.refreshBlast(),this.toSetup()}),s(),n}item(e,t){let n=document.createElement(`button`);n.className=`item`+(t?` on`:``);let r=[e.when,e.where].filter(Boolean).join(` · `);return n.innerHTML=`<div class="t">${e.name}<span>${fe(e.tntKg)} TNT</span></div>${r?`<div class="w">${r}</div>`:``}<p>${e.blurb}</p>`,n.addEventListener(`click`,()=>{$(`#sheet-picker`).hidden=!0,this.haptics.tap(),this.s.select(e),this.factIndex=0,this.refreshBlast(),this.toSetup()}),n}detonate(){this.audio.unlock(),this.s.detonate(),this.resultShown=!1,this.result.classList.remove(`show`),document.body.classList.remove(`setup`),document.body.classList.add(`playing`),this.syncPlay()}toSetup(){this.s.reset(),this.resultShown=!1,this.result.classList.remove(`show`),document.body.classList.add(`setup`),document.body.classList.remove(`playing`),this.factIndex=(this.factIndex+1)%this.s.explosive.facts.length,this.updateSetup()}syncPlay(){$(`#playpause`).classList.toggle(`paused`,!this.s.clock.playing)}refreshBlast(){let e=this.s.explosive;$(`#pick .cat`).textContent=ki[e.category],$(`#pick .name`).textContent=e.name,$(`#pick .energy`).textContent=fe(e.tntKg);let t=e.observer;this.dist.value=String(Math.round(1e3*Math.log(this.s.distance/t.min)/Math.log(t.max/t.min))),document.body.classList.add(`setup`),this.updateSetup()}updateSetup(){let e=this.s.explosive;$(`.dist-label b`).textContent=k(this.s.distance);let t=e.facts[this.factIndex%e.facts.length];$(`#setup .blurb`).textContent=`${e.blurb} ${t}`}text(e,t,n=!1){this.lastText.get(e)!==t&&(this.lastText.set(e,t),n?e.innerHTML=t:e.textContent=t)}place(e,t,n,r){e.classList.toggle(`show`,r),r&&(e.style.transform=`translate(${t.toFixed(1)}px, ${n.toFixed(1)}px)`)}frame(e,t,n){let r=this.s,i=r.blast,a=r.t,o=window.innerWidth,s=window.innerHeight,c=(t,n,r=0)=>{let i=lt(e,t,n,r);return i?[(i[0]+1)/2*o,(1-i[1])/2*s]:[-1e4,-1e4]},l=s/(2*e.vh),u=r.phase!==`setup`;this.settings.fps&&this.text(this.fps,n),u&&this.text(this.clock,`${pe(a)}<small>${a<0?`until impact`:ye(r.clock.factor)}</small>`,!0);let d=t.fireball;if(d&&d.temp>1100&&i.cloud(a).morph<.6&&d.r*l>4){let[e,t]=c(d.r,d.y);this.text(this.labFire,`<b>Fireball</b> ${k(2*d.r)} wide <em>${_e(d.temp)}</em>`,!0),this.place(this.labFire,Math.min(e+8,o-190),t-12,e>0&&e<o&&t>60&&t<s)}else this.place(this.labFire,0,0,!1);let f=t.bolide;if(f){let[e,t]=c(f.x,f.y);this.text(this.labBolide,`<b>Asteroid</b> ${k(f.size)} · ${ge(f.speed)}<br><em>${k(f.y)} up</em>`,!0),this.place(this.labBolide,Math.min(Math.max(e+24,8),o-170),t+22,t>80&&t<s)}else this.place(this.labBolide,0,0,!1);let p=t.front;if(p&&p.dp>60){let[e,t]=c(p.x,0);this.text(this.labFront,`<b>Blast wave</b> ${he(p.dp)}<br><em>${ge(p.speed)}</em>`,!0),this.place(this.labFront,Math.min(e-40,o-170),t+10,e>20&&e<o+40)}else this.place(this.labFront,0,0,!1);if(t.cloudTop*l>60){let[e,n]=c(0,t.cloudTop);this.text(this.labCloud,`<b>Cloud top</b> ${k(t.cloudTop)}`,!0),this.place(this.labCloud,e-50,n-34,n>90)}else this.place(this.labCloud,0,0,!1);let[m,h]=c(r.distance,1.75),g=m>10&&m<o-10;this.pin.classList.toggle(`edge`,!g),this.text($(`b`,this.pin),k(r.distance));let _=g?m-20:o-58,v=g?h-44:Math.min(Math.max(h-30,120),s-200);this.pin.style.transform=`translate(${_.toFixed(1)}px, ${v.toFixed(1)}px)`;let y=be(o*.28/l),[,b]=c(0,0);if(this.scale.style.top=`${Math.min(b+18,s-40)}px`,$(`i`,this.scale).style.width=`${(y*l).toFixed(1)}px`,this.text($(`span`,this.scale),k(y)),this.observerCard(a),!this.resultShown&&r.shockHasHit&&(r.hitAge>1.4||r.phase===`done`)){this.resultShown=!0;let e=r.report.verdict;$(`h2`,this.result).innerHTML=`<span class="sev-${e.severity}">${e.title}</span> at ${k(r.distance)}`,$(`ul`,this.result).innerHTML=e.effects.map(e=>`<li>${e}</li>`).join(``),this.result.classList.add(`show`)}r.clock.playing===!1&&this.syncPlay()}observerCard(e){let t=this.s,n=t.report,r=t.blast,i=t.phase!==`setup`,a=[`<div class="head">You · ${k(n.distance)} away</div>`],o=(e,t,n)=>a.push(`<div class="row ${n?`done`:`wait`}"><span>${e}</span><b>${t}</b></div>`);if(n.insideFireball)o(`Position`,`inside the fireball`,!0);else{o(`Flash`,i&&e>=n.flashT?`seen`:`in ${me(n.flashT)}`,i&&e>=n.flashT);let t=i&&e>r.timeScale;if(o(`Heat`,t?`${ve(n.heat)} · ${[`no burns`,`1st-degree burns`,`2nd-degree burns`,`3rd-degree burns`][n.burn]}`:`coming`,t),n.seismicT!==null){let t=i&&e>=n.seismicT;o(`Ground shakes`,t?`felt`:`at T+${me(n.seismicT)}`,t)}let a=i&&e>=n.shockT;o(`Blast wave`,a?he(n.dp):`at T+${me(n.shockT)}`,a),a&&(o(`Wind`,ge(n.wind),!0),o(`Loudness`,`${Math.round(n.db)} dB`,!0))}i&&e>=n.shockT&&a.push(`<div class="verdict sev-${n.verdict.severity}">${n.verdict.title}</div>`),this.text(this.obs,a.join(``),!0)}},ji=new URLSearchParams(location.search);function Mi(e){let t=document.getElementById(`error`);t.hidden=!1,t.textContent=`Something broke:\n${e instanceof Error?e.message:String(e)}`,console.error(e)}function Ni(){let e=Ht.load();ji.has(`numbers`)&&(e.numbers=ji.get(`numbers`)!==`0`);let t=new Bt(document.getElementById(`view`)),n=new f,r=new m,i=new wt(e.quality),a=ji.get(`custom`)?.split(`,`).map(Number),o=new St(a?Ve({kg:a[0],nuclear:a[1]===1,height:a[2]??0}):Fe.find(e=>e.id===(ji.get(`blast`)??`hiroshima`))??Fe[0],We[0],n,r,i.budget);ji.has(`d`)&&o.setDistance(Number(ji.get(`d`)));let s=new u(t,o,i,n,r),c=new Ai(s,e);c.onQuality=e=>{i.setQuality(e),o.setParticleBudget(i.budget),s.resizeLive()},window.addEventListener(`resize`,()=>!s.busy&&s.resizeLive()),s.resizeLive();let l=ji.has(`t`)?Number(ji.get(`t`)):null;(ji.has(`nosplash`)||l!==null)&&document.getElementById(`splash`).classList.add(`gone`),l!==null&&(o.detonate(),o.clock.playing=!1,o.clock.t=l,document.body.classList.remove(`setup`),document.body.classList.add(`playing`)),window.__app=s;let d=performance.now(),p=0,h=e=>{let n=Math.min((e-d)/1e3,.1);if(d=e,!s.busy){l===null&&i.sample(n)&&s.resizeLive();let e=window.innerWidth/window.innerHeight,r=e<1?o.phase===`setup`?.34:.17:.13,a=s.step(n,{aspect:e,groundAt:r,frozen:l!==null});c.frame(a.view,a.hud,`${i.fps.toFixed(0)} fps · ${(i.scale*100).toFixed(0)}% · ${t.width}×${t.height}`),++p===8&&(window.__ready=!0)}requestAnimationFrame(h)};requestAnimationFrame(h)}try{Ni()}catch(e){Mi(e)}window.addEventListener(`error`,e=>Mi(e.error??e.message)),`serviceWorker`in navigator&&navigator.serviceWorker.register(`./sw.js`).catch(()=>{});