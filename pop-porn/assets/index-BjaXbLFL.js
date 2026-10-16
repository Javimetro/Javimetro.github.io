(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=class{ctx=null;master;reverb;noise;brown;wind=null;enabled=!0;unlock(){if(this.ctx){this.ctx.resume();return}let e=new AudioContext;this.ctx=e;let t=e.createDynamicsCompressor();t.threshold.value=-10,t.knee.value=8,t.ratio.value=8,t.attack.value=.002,t.release.value=.4,t.connect(e.destination),this.master=e.createGain(),this.master.gain.value=.9,this.master.connect(t);let n=e.sampleRate*3;this.noise=e.createBuffer(1,n,e.sampleRate),this.brown=e.createBuffer(1,n,e.sampleRate);let r=this.noise.getChannelData(0),i=this.brown.getChannelData(0),a=0;for(let e=0;e<n;e++)r[e]=Math.random()*2-1,a=(a+.02*r[e])/1.02,i[e]=a*3.5;let o=e.sampleRate*3.5,s=e.createBuffer(2,o,e.sampleRate);for(let e=0;e<2;e++){let t=s.getChannelData(e);for(let e=0;e<o;e++)t[e]=(Math.random()*2-1)*(1-e/o)**3.2*.5}this.reverb=e.createConvolver(),this.reverb.buffer=s;let c=e.createGain();c.gain.value=.35,this.reverb.connect(c).connect(this.master),this.startWind()}setEnabled(e){this.enabled=e,this.ctx&&this.master.gain.setTargetAtTime(e?.9:0,this.ctx.currentTime,.05)}src(e,t=!1){let n=this.ctx.createBufferSource();return n.buffer=e,n.loop=t,n.loopStart=Math.random(),n}startWind(){let e=this.ctx,t=this.src(this.noise,!0),n=e.createBiquadFilter();n.type=`bandpass`,n.frequency.value=500,n.Q.value=.6;let r=e.createGain();r.gain.value=.012;let i=e.createOscillator();i.frequency.value=.13;let a=e.createGain();a.gain.value=180,i.connect(a).connect(n.frequency),t.connect(n).connect(r).connect(this.master),t.start(),i.start(),this.wind=r}boom(e){let t=this.ctx;if(!t||!this.enabled)return;let n=t.currentTime+.01,r=Math.min(1,Math.max(.03,(e.db-85)/85))**1.4,i=Math.log10(Math.max(e.kt,1e-9)*1e9)/18,a=Math.min(14e3,Math.max(250,14e3*Math.exp(-e.distance/2500))),o=Math.min(4,Math.max(.12,e.duration*5)),s=.4+18*i*i,c=this.src(this.noise),l=t.createBiquadFilter();l.type=`lowpass`,l.frequency.value=a;let u=t.createGain();u.gain.setValueAtTime(0,n),u.gain.linearRampToValueAtTime(r,n+.002),u.gain.exponentialRampToValueAtTime(.001,n+Math.max(.04,o*.5)),c.connect(l).connect(u),u.connect(this.master),u.connect(this.reverb),c.start(n),c.stop(n+o+.1);let d=this.src(this.noise),f=t.createBiquadFilter();f.type=`lowpass`,f.frequency.value=Math.min(a,500-300*i);let p=t.createGain();p.gain.setValueAtTime(0,n),p.gain.linearRampToValueAtTime(r*1.6,n+.01),p.gain.exponentialRampToValueAtTime(.001,n+o*2),d.connect(f).connect(p),p.connect(this.master),p.connect(this.reverb),d.start(n),d.stop(n+o*2+.1);let m=t.createOscillator();m.type=`sine`,m.frequency.setValueAtTime(70-30*i,n),m.frequency.exponentialRampToValueAtTime(24,n+o*1.5);let h=t.createGain();if(h.gain.setValueAtTime(0,n),h.gain.linearRampToValueAtTime(r*.9,n+.015),h.gain.exponentialRampToValueAtTime(.001,n+o*1.8),m.connect(h).connect(this.master),m.start(n),m.stop(n+o*2),s>.6){let e=this.src(this.brown,!0),i=t.createBiquadFilter();i.type=`lowpass`,i.frequency.value=140;let a=t.createGain();a.gain.setValueAtTime(0,n),a.gain.linearRampToValueAtTime(r*.8,n+.3+s*.1),a.gain.exponentialRampToValueAtTime(.001,n+s),e.connect(i).connect(a).connect(this.master),e.start(n),e.stop(n+s+.2)}this.wind&&(this.wind.gain.setValueAtTime(.012+r*.05,n+.05),this.wind.gain.setTargetAtTime(.012,n+.4,Math.max(1,s*.5)))}rumble(e){let t=this.ctx;if(!t||!this.enabled)return;let n=t.currentTime+.01,r=this.src(this.brown),i=t.createBiquadFilter();i.type=`lowpass`,i.frequency.value=60;let a=t.createGain();a.gain.setValueAtTime(0,n),a.gain.linearRampToValueAtTime(.5*e,n+.08),a.gain.exponentialRampToValueAtTime(.001,n+1.6),r.connect(i).connect(a).connect(this.master),r.start(n),r.stop(n+1.8)}},t=class{enabled=!0;supported=typeof navigator<`u`&&`vibrate`in navigator;buzz(e){this.enabled&&this.supported&&navigator.vibrate(e)}blast(e){e<200?this.buzz([25]):e<1e3?this.buzz([45,25,30]):e<7e3?this.buzz([90,30,70,30,40]):e<35e3?this.buzz([160,40,130,40,90,40,50]):this.buzz([320,50,260,50,200,60,130,60,80])}seismic(){this.buzz([18,35,18,35,18,35,12])}tap(){this.buzz([8])}},n=[{id:`beirut`,name:`Beirut port`,category:`accident`,nuclear:!1,tntKg:8e5,burstHeight:0,when:`4 August 2020`,where:`Port of Beirut, Lebanon`,blurb:`About 2,750 t of ammonium nitrate, forgotten in a port warehouse, caught fire and detonated.`,facts:[`Estimated at 0.5–1.1 kilotons of TNT (Rigby et al., 2020), one of the biggest non-nuclear blasts ever.`,`Humid sea air turned the shock wave into a white dome of condensation, filmed from all over the city.`,`It left a crater about 124 m wide and registered as a magnitude 3.3 earthquake.`,`It was heard in Cyprus, about 240 km away. Over 200 people died and some 300,000 lost their homes.`],observer:{def:2e3,min:100,max:3e4},look:{smoke:[.62,.36,.26],soot:.25,dust:.6,condensation:1,sparks:180,debris:420,mushroom:.55,prefire:!0}}],r=[{id:`firecracker`,name:`Firecracker`,category:`chemical`,nuclear:!1,tntKg:5e-4,burstHeight:0,blurb:`Half a gram of flash powder: aluminium and potassium perchlorate.`,facts:[`Flash powder burns in well under a millisecond, so the bang is a real (tiny) shock wave.`,`Right next to it the bang peaks above 150 dB, about as loud as a jet engine at 30 m.`,`Almost all firework injuries are to hands, eyes and ears, not from the blast wave.`],observer:{def:3,min:.5,max:60},look:{smoke:[.82,.82,.84],soot:.05,dust:.15,condensation:0,sparks:260,debris:50,mushroom:0}},{id:`c4`,name:`C-4 block`,category:`chemical`,nuclear:!1,tntKg:.76,burstHeight:0,blurb:`One standard M112 block: 570 g of C-4, worth about 760 g of TNT.`,facts:[`C-4 is about 91% RDX, a military high explosive, mixed with a plasticiser.`,`Its detonation front races through the block at about 8 km/s.`,`It is so stable that soldiers in Vietnam burned small pieces as cooking fuel. Only a detonator sets it off.`],observer:{def:30,min:2,max:600},look:{smoke:[.4,.35,.3],soot:.7,dust:.7,condensation:0,sparks:120,debris:260,mushroom:.15}}],i=[{id:`hiroshima`,name:`Hiroshima`,category:`nuclear`,nuclear:!0,tntKg:15e6,burstHeight:600,when:`6 August 1945`,where:`Hiroshima, Japan`,blurb:`Little Boy, a uranium gun-type bomb, exploded about 600 m above the city.`,facts:[`Its energy was about 15 kilotons of TNT.`,`Less than 1 kg of its 64 kg of uranium actually fissioned.`,`Almost every building within about 1.6 km was destroyed: that is the 5 psi ring.`,`Around 70,000–80,000 people died that day, and about 140,000 by the end of 1945.`],observer:{def:3e3,min:200,max:4e4},look:{smoke:[.66,.56,.5],soot:.2,dust:.5,condensation:.25,sparks:0,debris:0,mushroom:1}},{id:`tsar`,name:`Tsar Bomba`,category:`nuclear`,nuclear:!0,tntKg:5e10,burstHeight:4e3,when:`30 October 1961`,where:`Novaya Zemlya, Soviet Arctic`,blurb:`The biggest explosion humans have ever made: 50 megatons, dropped by parachute and set off 4 km up.`,facts:[`About 1,400 times the energy of the Hiroshima and Nagasaki bombs combined.`,`It was a 100-megaton design, run at half power to limit fallout.`,`The mushroom cloud rose about 64 km, seven times higher than Everest.`,`Windows broke as far as 900 km away, in Norway and Finland.`],observer:{def:6e4,min:3e3,max:1e6},look:{smoke:[.74,.68,.66],soot:.1,dust:.35,condensation:.15,sparks:0,debris:0,mushroom:1}}],a=[...r,...n,...i];function o(){let e=new Map;for(let t of a)e.has(t.category)||e.set(t.category,[]),e.get(t.category).push(t);return[...e.entries()]}var s={id:`desert`,name:`Desert test range`,blurb:`Flat desert at sunrise, mesas and mountains on the horizon. Nothing to hide behind.`,look:{sunDir:c([-.72,.3,-.5]),sunCol:[1,.78,.56],zenith:[.13,.27,.6],skyMid:[.4,.56,.84],horizon:[1,.7,.5],ground:[.66,.48,.33],ground2:[.4,.28,.2],rock:[.58,.36,.26],dustCol:[.78,.62,.48],visibility:9e4,deckHeight:6500,deckCover:.45}};function c(e){let t=Math.hypot(e[0],e[1],e[2]);return[e[0]/t,e[1]/t,e[2]/t]}var l=[s];function u(e){let t=Math.min(Math.max(e,800),3e4)/100,n=t<=66?1:Math.min(Math.max(1.293*(t-60)**-.1332,0),1),r=Math.min(Math.max(t<=66?.39*Math.log(t)-.632:1.13*(t-60)**-.0755,0),1),i=t>=66?1:t<=19?0:Math.min(Math.max(.543*Math.log(t-10)-1.196,0),1);return[n*n,r*r,i*i]}var d=e=>{let t=Math.min(Math.max((e-700)/800,0),1);return 40*(e/6e3)**4+.4*t*t*(3-2*t)},f=.6,p=68e-6,m=class{value=1;update(e,t){let n=e<this.value?.12:.9;return this.value+=(e-this.value)*(1-Math.exp(-t/n)),this.value}reset(){this.value=1}};function h(e,t){if(t<700)return[0,0,0];let n=u(t),r=e.nuclear?1:.025,i=(t/5800)**4*Math.PI/p*f*r;return[n[0]*i,n[1]*i,n[2]*i]}var g=e=>.2126*e[0]+.7152*e[1]+.0722*e[2];function _(e){let t=e.burns[2]*3;if(e.heatAt(0)<t)return 0;let n=0,r=1e7;for(let i=0;i<60;i++){let i=(n+r)/2;e.heatAt(i)>t?n=i:r=i}return n}function v(e,t,n,r,i,a,o,s,c){let l=e.ex.look,u=e.fireballMax,f=null,p=[0,0,0],m=0,_=e.hb,v=0,b=0,x={fireball:null,front:null,cloudTop:0},S=[0,0,0,0],C=[0,0,0,0],w=0,T=0,E=(e,t)=>[(e-n.cx)/(n.vh*n.aspect),(t-n.cy)/n.vh];if(t>0){let r=e.fireball(t),i=e.cloud(t),a=e.shockRadius(t);v=e.groundRing(t);let c=v>0?e.groundOverpressure(v):e.groundOverpressure(0);b=l.dust*Math.min(1,Math.max(0,Math.log10(c/1500)/1.5))*+(v>0);let g=l.condensation*.9*y(u*1,u*1.6,a)*(1-y(u*3,u*7,a));p=h(e,r.temp),m=r.r,_=r.y,f={fire:[r.y,r.r,r.temp,1-i.morph],cap:[i.capY,i.capA,i.capB,i.roll],stem:[i.stemTop,i.stemW,i.stem,i.morph],skirt:[i.skirtR,i.skirtH,i.skirt,v],shock:[a,e.hb,b,g],look:[l.smoke[0],l.smoke[1],l.smoke[2],l.soot],look2:[l.mushroom,s,t/e.riseTau,r.temp],bbox:null};let D=Math.max(i.capA*1.5,r.r*1.6);i.skirt>.01&&(D=Math.max(D,i.skirtR*1.35)),b>.01&&(D=Math.max(D,v*1.12));let O=Math.max(i.capY+i.capB+.45*Math.max(i.capA,r.r),r.y+r.r*1.6,i.stemTop);g>.001&&(D=Math.max(D,a*1.05),O=Math.max(O,e.hb+a*1.05));let[k,A]=E(-D,-.35*u),[j,M]=E(D,O);f.bbox=[k,A,j,M],x.fireball={x:0,y:r.y,r:r.r,temp:r.temp},x.front=v>0?{x:v,dp:c,speed:340.3*Math.sqrt(1+6*c/709275)}:null,x.cloudTop=i.capY+i.capB;let N=o/(2*n.vh),[P,F]=E(0,e.hb),I=a*N,L=Math.min(1,Math.max(0,Math.log10(c/400)/2));I>2&&I<o*3&&(S=[P,F,I,L]);let[R,ee]=E(0,r.y),z=y(1200,3500,r.temp);z>0&&(C=[R,ee,r.r*N*1.8,z*.7]);let B=Math.PI*(r.r*N)**2/(o*o*n.aspect);w=Math.min(B,1),T=d(r.temp)*(e.nuclear?1:.4)}let D=n.cx*n.cx+(n.eyeY-_)**2+n.dist*n.dist,O=m>0?g(p)*(m*m)/(D+m*m):0,k=m>0?g(p)*(m*m)/(_*_+m*m):0,A=k/(1+k/60),j=1/(1+.08*(O/(1+O/50))+.03*A+1.5*w*T),M=i.update(j,a),N={flash:[p[0],p[1],p[2],_],flashR:m,glow:m>0?T:0,ring:[v,b,t>0&&e.crater?e.crater.r:0,t>e.timeScale?c:0]},[,P]=E(0,0),F={exposure:M,bloom:.16,shake:[0,0],shockScr:S,groundV:P,haze:C,white:e.nuclear&&t>0&&t<.07*e.timeScale?.85*(1-t/(.07*e.timeScale)):0},I=[r.sunCol[0]*.9+r.zenith[0]*.45+Math.min(O,30)*.05,r.sunCol[1]*.9+r.zenith[1]*.45+Math.min(O,30)*.04,r.sunCol[2]*.9+r.zenith[2]*.45+Math.min(O,30)*.03];return{boom:f,world:N,post:F,hud:x,light:I}}function y(e,t,n){let r=Math.min(Math.max((n-e)/(t-e),0),1);return r*r*(3-2*r)}var b=4184e3,x=101325,S=340.3,C=1.225,w=9.81,T=299792458,E=6894.76,D=304.8,O=41868,k=e=>20*Math.log10(Math.max(e,1e-9)/2e-5);function A(e,t,n){return e<t?t:e>n?n:e}function j(e,t,n){let r=A((n-e)/(t-e),0,1);return r*r*(3-2*r)}function M(e,t,n){let r=t.length;if(e<=t[0])return n[0];if(e>=t[r-1])return n[r-1];let i=0,a=r-1;for(;a-i>1;){let n=i+a>>1;t[n]<=e?i=n:a=n}let o=(e-t[i])/(t[a]-t[i]);return n[i]+(n[a]-n[i])*o}function N(e){let t=Math.max(e,.05);return 808*(1+(t/4.5)**2)/Math.sqrt((1+(t/.048)**2)*(1+(t/.32)**2)*(1+(t/1.35)**2))}function P(e,t){let n=Math.max(e,.05);return 980*(1+(n/.54)**10)/((1+(n/.02)**3)*(1+(n/.74)**6)*Math.sqrt(1+(n/6.9)**2))/1e3*Math.cbrt(t)}function F(e,t,n){let r=1.22-3.908*e**2/(1+810.2*e**5),i=2.321+6.195*e**18/(1+1.113*e**18)-.03831*e**17/(1+.02415*e**17)+.6692/(1+4164*e**8),a=4.153-1.149*e**18/(1+1.641*e**18)-1.1/(1+2.771*e**2.5),o=-4.166+25.76*e**1.75/(1+1.382*e**18)+8.257*e/(1+3.219*e),s=1-.004642*e**18/(1+.003886*e**18),c=.6096+2.879*e**9.25/(1+2.359*e**14.5)-17.5*e**2/(1+71.66*e**3),l=1.83+5.361*e**2/(1+.3139*e**6),u=8.808*e**1.5/(1+154.5*e**3.5)-(.2905+64.67*e**5)/(1+441.5*e**5)-1.389*e/(1+49.03*e**5)+1.094*t**2/((781.2-123.4*t+37.98*t**1.5+t**2)*(1+2*n)),d=629e-6*n**4/(3.493e-9+n**4)-2.67*n**2/(1+1e7*n**4.3),f=5.18+.2803*n**3.5/(3788e-9+n**4);return 10.47/t**r+i/t**a+o*s/(1+c*t**l)+u+d/t**f}function I(e,t){let n=Math.max(e,.02),r=Math.max(Math.hypot(n,t),.06);return Math.max(F(t/n,r,t),0)}function L(e){return e<=25?I(e,0):I(25,0)*(25/e)**1.2}var R=10;function ee(e,t,n){let r=Math.cbrt(e),i=Math.max(t,1)/D/r,a=Math.max(n,0)/D/r;return(i<=R?I(i,a):I(R,a)*L(i)/L(R))*E}var z=e=>S*Math.sqrt(1+6*e/(7*x)),B=e=>S*(5*e/(7*x))/Math.sqrt(1+6*e/(7*x)),V=[-3,-2,-1,0,Math.log10(20),3,4,Math.log10(5e4)],te=[.6,1.4,2.8,5.5,11.3,22.5,40,64];function ne(e,t){if(!t)return 10*e**.3;let n=Math.log10(e/1e6);return n>V[V.length-1]?64e3*10**((n-V[V.length-1])*.25):M(n,V,te)*1e3}function re(e,t,n){return n?e*(.35+.08*Math.log10(t/1e6+1)):.45*e}var ie=e=>1.8*Math.sqrt(e/w);function ae(e,t){if(!t)return 1.6*Math.cbrt(e);let n=e/1e6;return n<=1e3?70*n**.4:1109*(n/1e3)**.36}function oe(e,t){return 1.03*(e*t*t/C)**.2}var se=e=>.0417*e**.44,ce=e=>.03*Math.cbrt(e);function le(e,t,n){if(e<=0)return 0;if(t){let t=n,r=.07*t;return e<r?ue(e,1e-6,r,3e4,3e3):e<t?ue(e,r,t,3e3,7700):Math.max(7700*(e/t)**-.5,0)}let r=.15*n;return e<r?3e3:3e3*(e/r)**-.6}function ue(e,t,n,r,i){let a=Math.log(Math.max(e,t)/t)/Math.log(n/t);return r+(i-r)*Math.min(Math.max(a,0),1)}function H(e,t){return e>=t[2]?3:e>=t[1]?2:+(e>=t[0])}function de(e){if(e.insideFireball)return{severity:5,title:`Inside the fireball`,effects:[`Vaporised before the blast even arrives.`]};let t=[],n=0,r=e=>n=Math.max(n,e),i=.5*e.dp*e.duration,a=Math.min(4,Math.sqrt(Math.max(.01/Math.max(e.duration,1e-5),1)));e.dp>=4e5*a?(r(5),t.push(`The pressure wave crushes your lungs.`)):e.dp>=2e5*a?(r(5),t.push(`Severe lung damage; survival unlikely.`)):e.dp>=1e5?(r(4),t.push(`Eardrums burst for most people.`)):e.dp>=35e3&&(r(4),t.push(`Your eardrums may burst.`)),i>=30&&(e.dp>=35e3?(t.push(`Most buildings around you collapse.`),r(4)):e.dp>=2e4?(t.push(`Houses collapse.`),r(3)):e.dp>=7e3?(t.push(`Windows shatter into flying glass.`),r(2)):e.dp>=1e3&&(t.push(`Windows can break.`),r(1)));let o=e.wind*3.6;o>=400&&e.duration>.05?(t.push(`A ${U(o)} wind throws you like debris.`),r(5)):o>=150&&e.duration>.05?(t.push(`A ${U(o)} gust knocks you down.`),r(3)):o>=60&&e.duration>.05&&(t.push(`A ${U(o)} gust hits you.`),r(1));let s=H(e.heat,e.burns);return s===3?(t.push(`Third-degree burns on exposed skin.`),r(5)):s===2?(t.push(`Second-degree burns (blisters).`),r(3)):s===1&&(t.push(`First-degree burns, like a bad sunburn.`),r(2)),e.db>=140&&e.dp<35e3?(t.push(`Painfully loud: risk of permanent hearing damage.`),r(1)):e.db>=120&&e.dp<35e3?t.push(`A very loud bang.`):e.db<120&&t.push(e.db>=90?`A distant boom.`:`A faint rumble.`),{severity:n,title:[`You are fine`,`Shaken, not hurt`,`Injured`,`Badly injured`,`Critical`,`Not survivable`][n],effects:t}}function U(e){return`${Math.round(e/10)*10} km/h`}var fe=e=>e?.35:.08,pe=e=>Math.exp(-((e/22e3)**.35));function me(e,t,n){let r=Math.max(n,1);return fe(t)*e*pe(r)/(4*Math.PI*r*r)}function he(e,t){let n=t?[2,4,6]:[1.5,3,5],r=t?Math.max(1,(e/1e6)**.06):1;return n.map(e=>e*r*O)}var ge=class{ex;kg;kt;energy;nuclear;hb;surface;timeScale;fireballMax;fireballMaxTime;cloudTop;capRadius;riseTau;crater;burns;wFree;wGround;tableR;tableT;capFinalY;constructor(e){this.ex=e,this.kg=e.tntKg,this.kt=e.tntKg/1e6,this.energy=e.tntKg*b,this.nuclear=e.nuclear,this.hb=e.burstHeight,this.fireballMax=ae(this.kg,this.nuclear),this.surface=this.hb<.5*this.fireballMax,this.timeScale=this.nuclear?se(this.kt):ce(this.kg);let t=this.nuclear?.5*this.kg:this.kg;this.wFree=this.surface?t*(this.nuclear?2:1.8):t,this.wGround=t*1.8,this.fireballMaxTime=Math.sqrt((this.fireballMax/1.03)**5*(1.225/this.energy))*1.5,this.cloudTop=ne(this.kg,this.nuclear),this.capRadius=re(this.cloudTop,this.kg,this.nuclear),this.riseTau=ie(this.cloudTop);let n=this.capRadius*.42*e.look.mushroom+this.capRadius*.8*(1-e.look.mushroom);this.capFinalY=Math.max(this.cloudTop-n,this.hb+this.fireballMax),this.crater=this.surface?{r:.8*Math.cbrt(this.kg),depth:.28*Math.cbrt(this.kg)}:null,this.burns=he(this.kg,this.nuclear);let r=Math.cbrt(this.wFree),i=.05*r;this.tableR=new Float64Array(500),this.tableT=new Float64Array(500);let a=i/z(N(.05)*x),o=i;for(let e=0;e<500;e++){let t=i*(5e6/i)**(e/499);if(e>0){let e=.5*(t+o);a+=(t-o)/z(N(e/r)*x)}this.tableR[e]=t,this.tableT[e]=a,o=t}}shockRadius(e){if(e<=0)return 0;let t=M(e,this.tableT,this.tableR),n=this.nuclear?oe(this.energy,e):0;return Math.max(t,n,e<this.tableT[0]?this.tableR[0]*e/this.tableT[0]:0)}arrival(e){if(this.nuclear){let t=Math.sqrt((e/1.03)**5*(1.225/this.energy));return Math.min(t,M(e,this.tableR,this.tableT))}return M(e,this.tableR,this.tableT)}groundRing(e){let t=this.shockRadius(e);return t>this.hb?Math.sqrt(t*t-this.hb*this.hb):0}slant(e){return Math.hypot(e,this.hb)}groundOverpressure(e){return this.nuclear?ee(this.kt,e,this.hb):N(this.slant(e)/Math.cbrt(this.wGround))*x}positivePhase(e){let t=Math.cbrt(this.wGround);return P(this.slant(e)/t,this.wGround)}heatAt(e){return me(this.energy,this.nuclear,this.slant(e))}fireball(e){let t=oe(this.energy,Math.max(e,0)),n=this.fireballMax*Math.tanh(t/this.fireballMax),r=this.cloud(e);return{y:Math.max(r.capY,this.hb),r:n,temp:le(e,this.nuclear,this.timeScale)}}cloud(e){let t=this.riseTau,n=this.ex.look.mushroom,r=1-Math.exp(-((Math.max(e,0)/t)**1.2)),i=1-Math.exp(-((Math.max(e,0)/(1.5*t))**1.3)),a=this.hb+(this.capFinalY-this.hb)*r,o=this.fireballMax+(this.capRadius-this.fireballMax)*i,s=o*(.95+-.53*i*n+(.8-.95)*i*(1-n)),c=this.arrival(Math.max(this.hb,1)),l=n*j(c,c+.6*t,e)*j(.02,.4,r),u=this.groundRing(e),d=this.ex.look.dust*j(0,1,u/Math.max(this.fireballMax,1))*Math.exp(-e/(6*t));return{capY:a,capA:o,capB:s,stemTop:a-s*.5,stemW:o*(.07+.06*n)*(.6+.4*i),stem:l,skirtR:Math.min(u*.5,o*1.25),skirtH:Math.min(u*.5,o*1.25)*.28,skirt:d,roll:e/t*5,morph:j(.01,.5,r)}}observer(e){let t=this.slant(e),n=t<this.fireballMax,r=this.groundOverpressure(e),i=this.heatAt(e),a=this.arrival(t),o=this.nuclear?P(t/Math.cbrt(this.kg),this.kg):this.positivePhase(e),s=B(r),c=k(r),l=this.surface&&e<3e3*Math.cbrt(Math.max(this.kt,1e-6))&&this.kg>50;return{distance:e,slant:t,flashT:t/T,heat:i,burn:H(i,this.burns),shockT:a,dp:r,wind:s,duration:o,db:c,seismicT:l?e/2500:null,insideFireball:n,verdict:de({dp:r,duration:o,wind:s,db:c,heat:i,burns:this.burns,insideFireball:n})}}endTime(e){let t=this.arrival(this.slant(e));return Math.max(t*1.3,2.4*this.riseTau,this.fireballMaxTime*4)}timeline(e){let t=this.observer(e),n=[{t:0,kind:`detonation`,text:`Detonation`}];return n.push({t:t.flashT,kind:`flash`,text:`The flash reaches you`}),n.push({t:this.fireballMaxTime,kind:`fireball`,text:`Fireball at full size`}),this.nuclear&&n.push({t:this.timeScale,kind:`heat`,text:`Heat pulse at its peak`}),t.seismicT!==null&&n.push({t:t.seismicT,kind:`seismic`,text:`The ground shakes`}),n.push({t:t.shockT,kind:`shock`,text:`The blast wave hits you`}),n.push({t:2*this.riseTau,kind:`cloud`,text:`The cloud reaches its top`}),n.sort((e,t)=>e.t-t.t)}},_e=2.4;function ve(e,t,n,r,i=[0,0,0]){let a=e.dist/(r+e.dist);if(!(a>0))return null;let o=e.cx+(t-e.cx)*a,s=e.eyeY+(n-e.eyeY)*a;return i[0]=(o-e.cx)/(e.vh*e.aspect),i[1]=(s-e.cy)/e.vh,i[2]=a,i}var ye=.1,be=class{view={cx:0,cy:1,vh:1,aspect:1,eyeY:.5,dist:2.4};logVh=0;cx=0;primed=!1;g=.2;groundAt=.2;target(e,t,n,r){let i=e.fireballMax,a=-i*1.6,o=i*1.6,s=Math.max(e.hb+i*1.8,i*3);if(n>0){let r=e.cloud(n),i=e.fireball(n),c=Math.max(r.capA*1.3,i.r*1.6,r.skirt>.2?r.skirtR*1.1:0);a=Math.min(a,-c),o=Math.max(o,c),s=Math.max(s,r.capY+r.capB*1.25,i.y+i.r*1.4);let l=e.arrival(e.slant(t)),u=e.groundRing(n),d=Math.min(u,t);n<l*1.6&&d>o*.8&&(o=Math.max(o,d*1.12)),u>t*.55&&n<l*1.6&&(o=Math.max(o,t*1.12))}n<=0&&t<i*8&&(o=Math.max(o,t*1.15));let c=(o-a)/2,l=2-2*this.g-ye*2,u=Math.max(s/l,c/r,.05);return{cx:(a+o)/2,vh:u}}update(e,t,n,r,i,a=!1){let o=this.target(e,t,n,r),s=Math.log(o.vh);if(a||!this.primed)this.logVh=s,this.cx=o.cx,this.g=this.groundAt,this.primed=!0;else{this.g+=(this.groundAt-this.g)*(1-Math.exp(-3*i));let e=s>this.logVh?4.5:1.2,t=1-Math.exp(-e*i);this.logVh+=(s-this.logVh)*t,this.cx+=(o.cx-this.cx)*t}let c=Math.exp(this.logVh),l=-1+2*this.g,u=-l*c,d=l+.2;return this.view={cx:this.cx,cy:u,vh:c,aspect:r,eyeY:u+d*c,dist:_e*c},this.view}reset(){this.primed=!1}},xe=2,Se=class{t=0;speed=1;playing=!1;rMin;tA;end;constructor(e,t){this.rMin=e.fireballMaxTime/1.8,this.tA=e.arrival(e.slant(t)),this.end=e.endTime(t)}rate(e){let t=Math.max(this.rMin,e/xe),n=.12*this.tA+this.rMin;return t*(1-.8*Math.exp(-(((e-this.tA)/n)**2)))}tick(e){if(!this.playing)return 0;let t=Math.min(e,.1),n=this.rate(this.t),r=this.rate(this.t+n*t*.5*this.speed)*t*this.speed;return this.t+=r,this.t>this.end*3&&(this.t=this.end*3,this.playing=!1),r}get done(){return this.t>=this.end}get factor(){return this.rate(this.t)*this.speed}};function Ce(e){let t=e>>>0,n=()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296};return{next:n,range:(e,t)=>e+(t-e)*n(),log:(e,t)=>e*(t/e)**n(),sign:()=>n()<.5?-1:1}}var we=12,Te=class{ps=[];data;count=0;constructor(e,t,n=1){let r=e.ex.look,i=e.fireballMax,a=e.timeScale,o=Ce(Math.round(e.kg*1e3)+7),s=e.crater?.r??0,c=Math.round(r.sparks*n);for(let t=0;t<c;t++){let t=o.range(0,Math.PI*2),n=Math.acos(o.range(-1,1)),r=Math.cos(n);e.surface&&(r=Math.abs(r)*.9+.1);let s=Math.sin(n)*Math.cos(t),c=Math.sin(n)*Math.sin(t),l=i/a*o.range(1,3);this.ps.push({t0:o.range(0,.3*a),x:s*i*.3,y:e.hb+Math.max(r*i*.3,0),z:c*i*.3,vx:s*l,vy:r*l,vz:c*l,tau:a*o.range(2,6),g:-9.81,size:i*o.range(.006,.02),grow:0,life:a*o.range(8,30),kind:2,r:1,gg:1,b:1,a:0})}if(e.surface&&s>0){let i=Math.round(r.debris*n),c=e.ex.id===`firecracker`;for(let e=0;e<i;e++){let e=o.range(.6,1.45),n=o.range(0,Math.PI*2),r=Math.sqrt(9.81*Math.max(s,.05)*o.range(10,60)),i=2*r*Math.sin(e)/9.81,l=o.range(.3,.6),u=c?[.7,.08,.06]:[t.dustCol[0]*l,t.dustCol[1]*l,t.dustCol[2]*l],d=s*Math.sqrt(o.next())*.8;this.ps.push({t0:o.range(0,.2*a),x:Math.cos(n)*d,y:0,z:Math.sin(n)*d,vx:Math.cos(n)*Math.cos(e)*r,vy:Math.sin(e)*r,vz:Math.sin(n)*Math.cos(e)*r,tau:i*o.range(.6,3),g:-9.81,size:Math.max(s*o.range(.015,.06),.003),grow:0,life:i*o.range(1.5,3)+5*a,kind:1,r:u[0],gg:u[1],b:u[2],a:1})}}let l=Math.round(r.dust*600*n);if(l>0){let n=i*2;for(let t=i*2;t<1e7&&!(e.groundOverpressure(t)<3e3);t*=1.15)n=t;let r=Math.max(i*1.1,e.hb*.3);for(let i=0;i<l;i++){let i=o.log(r,Math.max(n,r*1.5)),s=o.range(0,Math.PI*2),c=e.arrival(e.slant(i)),l=e.groundOverpressure(i),u=340*(5*l/709275)/Math.sqrt(1+6*l/709275),d=o.range(.85,1.15);this.ps.push({t0:c,x:Math.cos(s)*i,y:0,z:Math.sin(s)*i,vx:Math.cos(s)*u*o.range(.15,.4),vy:u*o.range(.04,.15),vz:Math.sin(s)*u*o.range(.15,.4),tau:i/Math.max(u,1)*o.range(.3,1.2),g:.1962,size:i*o.range(.02,.06),grow:o.range(.3,1.2)/(i/Math.max(u,1)+a),life:c*o.range(1.5,4)+a*10,kind:0,r:t.dustCol[0]*d,gg:t.dustCol[1]*d,b:t.dustCol[2]*d,a:o.range(.25,.5)})}}this.data=new Float32Array(this.ps.length*we)}update(e,t,n){let r=this.data,i=0;for(let a of this.ps){let o=e-a.t0;if(o<0||o>a.life)continue;let s=Math.exp(-o/a.tau),c=a.g*a.tau,l=a.x+a.vx*a.tau*(1-s),f=a.z+a.vz*a.tau*(1-s),p=a.y+c*o+(a.vy-c)*a.tau*(1-s),m=a.vx*s,h=c+(a.vy-c)*s,g=a.vz*s,_=p<0;_&&(p=0);let v=a.size*(1+a.grow*o),y=o/a.life,b=Math.min(1,y*20)*(1-Ee(.6,1,y)),x=i*we;r[x]=l,r[x+1]=p+(a.kind===0?v*.5:0),r[x+2]=f,r[x+3]=v;let S=a.kind===2&&!_?Math.min(t,a.tau)*1.5:0;if(r[x+4]=m*S,r[x+5]=h*S,r[x+6]=g*S,r[x+7]=a.kind,a.kind===2){let e=2600-1700*y,t=u(e),n=d(e)*3*b;r[x+8]=t[0]*n,r[x+9]=t[1]*n,r[x+10]=t[2]*n,r[x+11]=0}else{let e=a.a*b;r[x+8]=a.r*n[0]*e,r[x+9]=a.gg*n[1]*e,r[x+10]=a.b*n[2]*e,r[x+11]=e}i++}this.count=i}};function Ee(e,t,n){let r=Math.min(Math.max((n-e)/(t-e),0),1);return r*r*(3-2*r)}var De=8;function Oe(){let e=Ce(1945),t=[],n=(n,r,i,a)=>t.push({x:n,z:r,h:i,type:a,seed:e.next(),arrival:0,dp:0,impulse:0,windKmh:0,heat:0,vaporised:!1});for(let t=0;t<60;t++)n(e.sign()*e.log(.15,60),e.log(.4,80),e.log(.02,.35),4);for(let t=0;t<90;t++){let t=e.log(35,2e4);n(e.sign()*e.range(0,1.5)*t,t,e.range(3,11),2)}for(let t=-6e3;t<=6e3;t+=60)n(t+e.range(-2,2),220,10,3);for(let t of[40,120,350,1e3,2500,6e3,15e3,4e4]){let r=2+Math.floor(e.next()*3);for(let i=0;i<r;i++)n(t+e.range(-.15,.15)*t,e.range(5,30)+t*e.range(.05,.4),6,1);n(-t*e.range(.8,1.2),e.range(10,40)+t*.3,6,1)}return t}var ke=class{blast;ps;data;count=0;obsIndex;constructor(e){this.blast=e,this.ps=Oe(),this.obsIndex=this.ps.length,this.ps.push({x:0,z:0,h:1.75,type:0,seed:.5,arrival:0,dp:0,impulse:0,windKmh:0,heat:0,vaporised:!1});for(let e of this.ps)this.measure(e);this.data=new Float32Array(this.ps.length*De)}measure(e){let t=this.blast,n=Math.hypot(e.x,e.z);e.arrival=t.arrival(t.slant(n)),e.dp=t.groundOverpressure(n),e.impulse=.5*e.dp*t.positivePhase(n);let r=e.dp;e.windKmh=3.6*(340*(5*r/709275)/Math.sqrt(1+6*r/709275)),e.heat=t.heatAt(n),e.vaporised=t.slant(n)<t.fireballMax*1.05}setObserver(e){let t=this.ps[this.obsIndex];t.x=e,this.measure(t)}update(e){let t=this.blast,n=this.data,r=t.burns[2],i=0;for(let a of this.ps){if(e>0&&a.vaporised)continue;let o=0,s=0,c=0;if(e>t.timeScale&&(c=Math.min(1,Math.max(0,(a.heat-r)/(r*2)))),e>a.arrival){let n=Math.min(1,(e-a.arrival)/Math.max(t.timeScale*2,.05)),r=n*n*(3-2*n),i=a.impulse>=30;if(a.type===1&&i)o=(a.dp>=35e3?1:a.dp>=2e4?.85:a.dp>=7e3?.5:a.dp>=1e3?.15:0)*r;else if(a.type!==1&&a.type!==4){let e=Math.sign(a.x||1),t=a.windKmh,n=a.type===0?150:a.type===3?300:220;s=e*(t>=n?1.45:t>=n*.5?t/n*.25:0)*r}}let l=i*De;n[l]=a.x,n[l+1]=a.z,n[l+2]=a.h,n[l+3]=a.type,n[l+4]=o,n[l+5]=s,n[l+6]=a.seed,n[l+7]=c,i++}this.count=i}},Ae=class{explosive;scenario;audio;haptics;particleBudget;blast;clock;particles;props;report;timeline;scorch=0;phase=`setup`;distance=0;director=new be;exposure=new m;hitAge=-1;hitAmp=0;quakeAge=-1;firedShock=!1;firedQuake=!1;jumpCamera=!0;constructor(e,t,n,r,i){this.explosive=e,this.scenario=t,this.audio=n,this.haptics=r,this.particleBudget=i,this.select(e)}select(e){this.explosive=e,this.blast=new ge(e),this.scorch=_(this.blast),this.particles=new Te(this.blast,this.scenario.look,this.particleBudget),this.props=new ke(this.blast),this.setDistance(e.observer.def),this.reset()}setDistance(e){let t=this.explosive.observer;this.distance=Math.min(Math.max(e,t.min),t.max),this.props.setObserver(this.distance),this.report=this.blast.observer(this.distance),this.timeline=this.blast.timeline(this.distance),this.clock=new Se(this.blast,this.distance)}setParticleBudget(e){e!==this.particleBudget&&(this.particleBudget=e,this.particles=new Te(this.blast,this.scenario.look,e))}detonate(){this.reset(),this.phase=`running`,this.clock.playing=!0}reset(){this.clock=new Se(this.blast,this.distance),this.phase=`setup`,this.firedShock=!1,this.firedQuake=!1,this.hitAge=-1,this.quakeAge=-1,this.exposure.reset(),this.director.reset(),this.jumpCamera=!0}get t(){return this.clock.t}update(e){let t=this.clock.tick(e),n=this.clock.t,r=this.report;return this.hitAge>=0&&(this.hitAge+=e),this.quakeAge>=0&&(this.quakeAge+=e),this.phase===`running`&&(!this.firedQuake&&r.seismicT!==null&&n>=r.seismicT&&(this.firedQuake=!0,this.quakeAge=0,this.audio.rumble(Math.min(1,this.blast.kt*2+.2)),this.haptics.seismic()),!this.firedShock&&n>=r.shockT&&(this.firedShock=!0,this.hitAge=0,this.hitAmp=Math.min(1,Math.max(0,Math.log10(r.dp/50)/3.5)),this.audio.boom({db:r.db,duration:r.duration,distance:r.distance,kt:this.blast.kt}),this.haptics.blast(r.dp)),this.clock.done&&this.firedShock&&(this.phase=`done`)),t}get shockHasHit(){return this.firedShock}shake(e){let t=0;if(this.hitAge>=0&&(t+=this.hitAmp*.014*Math.exp(-this.hitAge/.45)),this.quakeAge>=0&&(t+=.002*Math.exp(-this.quakeAge/.6)),t<1e-5)return[0,0];let n=e*47;return[t*(Math.sin(n)+.5*Math.sin(n*2.3+1)),t*(Math.cos(n*1.3)+.5*Math.sin(n*3.1))]}},W={battery:{min:.42,max:.55,start:.5,octaves:3,budget:.5},auto:{min:.4,max:1,start:.8,octaves:5,budget:1},high:{min:.6,max:1,start:.85,octaves:5,budget:1}},je=class{quality;scale;octaves;budget;fps=60;acc=0;frames=0;goodWindows=0;lastChange=0;clock=0;constructor(e){this.quality=e;let t=W[e];this.scale=t.start,this.octaves=t.octaves,this.budget=t.budget}setQuality(e){this.quality=e;let t=W[e];this.scale=t.start,this.octaves=t.octaves,this.budget=t.budget}sample(e){if(this.clock+=e,this.acc+=e,this.frames++,this.acc<.5)return!1;this.fps=this.frames/this.acc,this.acc=0,this.frames=0;let t=W[this.quality];if(this.clock-this.lastChange<1.2)return!1;let n=this.scale;return this.fps<50?(n=Math.max(t.min,this.scale*(this.fps<35?.8:.9)),this.goodWindows=0):this.fps>57&&++this.goodWindows>=4&&(n=Math.min(t.max,this.scale*1.08),this.goodWindows=0),this.octaves=this.quality===`battery`?3:n<=t.min+.01&&this.fps<45?4:t.octaves,Math.abs(n-this.scale)<.01?!1:(this.scale=n,this.lastChange=this.clock,!0)}};function Me(e,t,n,r){let i=e.createShader(t);if(e.shaderSource(i,n),e.compileShader(i),!e.getShaderParameter(i,e.COMPILE_STATUS)){let t=e.getShaderInfoLog(i);throw Error(`Shader ${r} failed:\n${t}`)}return i}function G(e,t,n,r){let i=`#version 300 es
`,a=e.createProgram();if(e.attachShader(a,Me(e,e.VERTEX_SHADER,i+t,r+`.vert`)),e.attachShader(a,Me(e,e.FRAGMENT_SHADER,i+n,r+`.frag`)),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw Error(`Program ${r} failed to link:\n${e.getProgramInfoLog(a)}`);let o={},s=e.getProgramParameter(a,e.ACTIVE_UNIFORMS);for(let t=0;t<s;t++){let n=e.getActiveUniform(a,t),r=n.name.replace(/\[0\]$/,``);o[r]=e.getUniformLocation(a,n.name)}return{prog:a,u:o}}function Ne(e,t,n,r){let i=e.createTexture();e.bindTexture(e.TEXTURE_2D,i),r?e.texImage2D(e.TEXTURE_2D,0,e.RGBA16F,t,n,0,e.RGBA,e.HALF_FLOAT,null):e.texImage2D(e.TEXTURE_2D,0,e.RGBA8,t,n,0,e.RGBA,e.UNSIGNED_BYTE,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE);let a=e.createFramebuffer();return e.bindFramebuffer(e.FRAMEBUFFER,a),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,i,0),{fb:a,tex:i,w:t,h:n}}function Pe(e,t){e.deleteFramebuffer(t.fb),e.deleteTexture(t.tex)}var Fe=`// Shared by every scene shader: camera, noise, colour helpers.
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
`,K=`// One big triangle covering the screen.
precision highp float;
out vec2 vNdc;
out vec2 vUv;
void main() {
  vec2 p = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2)) * 2.0 - 1.0;
  vNdc = p;
  vUv = p * 0.5 + 0.5;
  gl_Position = vec4(p, 0.0, 1.0);
}
`,Ie=`// Sky, sun, weather clouds, distant mountains and the receding ground plane.
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
  vec3 l = vec3(0.0, uFlash.w, 0.0) - p;
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
    vec3 toF = vec3(0.0, uFlash.w, 0.0) - eye;
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
`,Le=`// The explosion itself, drawn on the action plane: the fireball, the mushroom
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

  if (d0 < S * 0.3) {
    float n = billow(p, oct);
    float amp = mix(0.1, 0.3, uStem.w) + (which > 0.5 ? 0.08 : 0.0);
    float dn = d0 / S - amp * (n - 0.45);
    // Smoke puffs and dust are thinner and wispier than a nuclear cap, and thin out with time.
    float puff = 1.0 - uLook2.x;
    float soft = 0.012 + pix / S * 1.5 + 0.05 * puff + (which > 1.5 ? 0.06 : 0.0);
    float density = mix(1.0, 0.82 * exp(-uLook2.z * 0.25), puff) * (which > 1.5 ? 0.6 : 1.0);
    float alpha = (1.0 - smoothstep(-soft, soft, dn)) * mix(density, 1.0, uFire.w * smoothstep(1500.0, 2500.0, uFire.z));
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
`,Re=`// Instanced props standing on the ground: you, houses, cacti, power poles.
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
`,ze=`// Silhouettes drawn with signed distance fields, lit by the sun and the flash.
uniform vec3 uSunCol;
uniform vec3 uZenith;
uniform vec3 uHorizon;
uniform vec4 uFlash;   // fireball light rgb, fireball height
uniform float uVis;    // haze visibility, m
uniform float uFlashR; // fireball radius, m

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
  vec3 l = vec3(0.0, uFlash.w, 0.0) - vec3(vA.x, vA.z * p.y, vA.y);
  float fr = max(uFlashR, 1.0);
  vec3 fl = uFlash.rgb * fr * fr / (dot(l, l) + fr * fr);
  col += base * fl / (1.0 + dot(fl, vec3(0.33)) / 60.0);
  col += glass * uSunCol * 0.3;
  float f = 1.0 - exp(-vDist / uVis);
  col = mix(col, uHorizon, f);
  fragColor = vec4(min(col, vec3(6e4)) * alpha * uOut, alpha);
}
`,Be=`// Instanced particles: sparks, debris and dust, projected with the scene camera.
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
`,Ve=`precision highp float;
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
`,He=`// Dual-filter (Kawase) bloom: cheap on mobile GPUs. Mode 0 = first downsample
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
`,Ue=`// Final image: shock-wave refraction, heat haze, camera shake, bloom, exposure,
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
`,We=5,Ge=class{canvas;gl;hdr;bg;boom;props;parts;bloom;comp;emptyVao;partVao;partBuf;partCap=0;propVao;propBuf;propCap=0;scene=null;chain=[];width=0;height=0;constructor(e){this.canvas=e;let t=e.getContext(`webgl2`,{antialias:!1,alpha:!1,depth:!1,stencil:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,powerPreference:`high-performance`});if(!t)throw Error(`WebGL2 is not available`);this.gl=t,this.hdr=!!t.getExtension(`EXT_color_buffer_float`);let n=e=>Fe+`
`+e;this.bg=G(t,K,n(Ie),`background`),this.boom=G(t,K,n(Le),`boom`),this.props=G(t,Re,n(ze),`props`),this.parts=G(t,Be,Ve,`particles`),this.bloom=G(t,K,He,`bloom`),this.comp=G(t,K,Ue,`composite`),this.emptyVao=t.createVertexArray(),this.partVao=t.createVertexArray(),t.bindVertexArray(this.partVao);let r=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,r),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),t.STATIC_DRAW),t.enableVertexAttribArray(0),t.vertexAttribPointer(0,2,t.FLOAT,!1,0,0),this.partBuf=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,this.partBuf);for(let e=0;e<3;e++)t.enableVertexAttribArray(1+e),t.vertexAttribPointer(1+e,4,t.FLOAT,!1,48,e*16),t.vertexAttribDivisor(1+e,1);this.propVao=t.createVertexArray(),t.bindVertexArray(this.propVao);let i=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,i),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,0,1,0,-1,1,1,1]),t.STATIC_DRAW),t.enableVertexAttribArray(0),t.vertexAttribPointer(0,2,t.FLOAT,!1,0,0),this.propBuf=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,this.propBuf);for(let e=0;e<2;e++)t.enableVertexAttribArray(1+e),t.vertexAttribPointer(1+e,4,t.FLOAT,!1,32,e*16),t.vertexAttribDivisor(1+e,1);t.bindVertexArray(null)}resize(e,t){if(e=Math.max(16,Math.round(e)),t=Math.max(16,Math.round(t)),e===this.width&&t===this.height)return;let n=this.gl;this.width=e,this.height=t,this.canvas.width=e,this.canvas.height=t,this.scene&&Pe(n,this.scene),this.chain.forEach(e=>Pe(n,e)),this.scene=Ne(n,e,t,this.hdr),this.chain=[];let r=e,i=t;for(let e=0;e<We;e++)r=Math.max(2,r>>1),i=Math.max(2,i>>1),this.chain.push(Ne(n,r,i,this.hdr))}camera(e,t){let n=this.gl;n.uniform4f(e.u.uCam,t.cx,t.cy,t.vh,t.aspect),n.uniform2f(e.u.uEye,t.eyeY,t.dist),n.uniform2f(e.u.uRes,this.width,this.height),n.uniform1f(e.u.uOut,this.hdr?1:1/8)}render(e){let t=this.gl,n=this.scene,r=e.look,i=(e,n)=>e&&t.uniform3f(e,n[0],n[1],n[2]),a=(e,n)=>e&&t.uniform4f(e,n[0],n[1],n[2],n[3]);t.bindFramebuffer(t.FRAMEBUFFER,n.fb),t.viewport(0,0,n.w,n.h),t.disable(t.BLEND),t.bindVertexArray(this.emptyVao);let o=this.bg;if(t.useProgram(o.prog),this.camera(o,e.view),i(o.u.uSunDir,r.sunDir),i(o.u.uSunCol,r.sunCol),i(o.u.uZenith,r.zenith),i(o.u.uSkyMid,r.skyMid),i(o.u.uHorizon,r.horizon),i(o.u.uGround,r.ground),i(o.u.uGround2,r.ground2),i(o.u.uRock,r.rock),a(o.u.uFlash,e.world.flash),a(o.u.uFlash2,[e.world.flashR,r.visibility,r.deckHeight,r.deckCover]),a(o.u.uRing,e.world.ring),t.uniform1f(o.u.uGlow,e.world.glow),t.uniform1f(o.u.uTime,e.time),t.drawArrays(t.TRIANGLES,0,3),t.enable(t.BLEND),t.blendFunc(t.ONE,t.ONE_MINUS_SRC_ALPHA),e.propCount>0){o=this.props,t.useProgram(o.prog),this.camera(o,e.view),i(o.u.uSunCol,r.sunCol),i(o.u.uZenith,r.zenith),i(o.u.uHorizon,r.horizon),a(o.u.uFlash,e.world.flash),t.uniform1f(o.u.uFlashR,e.world.flashR),t.uniform1f(o.u.uVis,r.visibility),t.bindVertexArray(this.propVao),t.bindBuffer(t.ARRAY_BUFFER,this.propBuf);let n=e.propCount*32;n>this.propCap&&(this.propCap=n*2,t.bufferData(t.ARRAY_BUFFER,this.propCap,t.DYNAMIC_DRAW)),t.bufferSubData(t.ARRAY_BUFFER,0,e.props,0,e.propCount*8),t.drawArraysInstanced(t.TRIANGLE_STRIP,0,4,e.propCount)}if(e.boom&&e.boom.bbox){let s=e.boom,[c,l,u,d]=s.bbox,f=Math.floor((Math.max(c,-1)+1)/2*n.w),p=Math.floor((Math.max(l,-1)+1)/2*n.h),m=Math.ceil((Math.min(u,1)+1)/2*n.w),h=Math.ceil((Math.min(d,1)+1)/2*n.h);m>f&&h>p&&(t.enable(t.SCISSOR_TEST),t.scissor(f,p,m-f,h-p),o=this.boom,t.useProgram(o.prog),this.camera(o,e.view),a(o.u.uFire,s.fire),a(o.u.uCap,s.cap),a(o.u.uStem,s.stem),a(o.u.uSkirt,s.skirt),a(o.u.uShock,s.shock),a(o.u.uLook,s.look),a(o.u.uLook2,s.look2),i(o.u.uSunDir,r.sunDir),i(o.u.uSunCol,r.sunCol),i(o.u.uAmbient,[(r.zenith[0]+r.skyMid[0]+r.horizon[0])/3,(r.zenith[1]+r.skyMid[1]+r.horizon[1])/3,(r.zenith[2]+r.skyMid[2]+r.horizon[2])/3]),i(o.u.uDustCol,r.dustCol),t.uniform1f(o.u.uTime,e.time),t.bindVertexArray(this.emptyVao),t.drawArrays(t.TRIANGLES,0,3),t.disable(t.SCISSOR_TEST))}if(e.particleCount>0){o=this.parts,t.useProgram(o.prog),this.camera(o,e.view),t.bindVertexArray(this.partVao),t.bindBuffer(t.ARRAY_BUFFER,this.partBuf);let n=e.particleCount*48;n>this.partCap&&(this.partCap=n*2,t.bufferData(t.ARRAY_BUFFER,this.partCap,t.DYNAMIC_DRAW)),t.bufferSubData(t.ARRAY_BUFFER,0,e.particles,0,e.particleCount*12),t.drawArraysInstanced(t.TRIANGLE_STRIP,0,4,e.particleCount)}t.disable(t.BLEND),t.bindVertexArray(this.emptyVao),o=this.bloom,t.useProgram(o.prog),t.activeTexture(t.TEXTURE0),t.uniform1i(o.u.uSrc,0),t.uniform1f(o.u.uThreshold,this.hdr?1.6:1.6/8);let s=n;for(let e=0;e<this.chain.length;e++){let n=this.chain[e];t.bindFramebuffer(t.FRAMEBUFFER,n.fb),t.viewport(0,0,n.w,n.h),t.bindTexture(t.TEXTURE_2D,s.tex),t.uniform2f(o.u.uTexel,1/s.w,1/s.h),t.uniform1i(o.u.uMode,e===0?0:1),t.drawArrays(t.TRIANGLES,0,3),s=n}t.enable(t.BLEND),t.blendFunc(t.ONE,t.ONE),t.uniform1i(o.u.uMode,2);for(let e=this.chain.length-1;e>0;e--){let n=this.chain[e],r=this.chain[e-1];t.bindFramebuffer(t.FRAMEBUFFER,r.fb),t.viewport(0,0,r.w,r.h),t.bindTexture(t.TEXTURE_2D,n.tex),t.uniform2f(o.u.uTexel,.5/n.w,.5/n.h),t.drawArrays(t.TRIANGLES,0,3)}t.disable(t.BLEND),t.bindFramebuffer(t.FRAMEBUFFER,null),t.viewport(0,0,this.width,this.height),o=this.comp,t.useProgram(o.prog),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,n.tex),t.uniform1i(o.u.uScene,0),t.activeTexture(t.TEXTURE1),t.bindTexture(t.TEXTURE_2D,this.chain[0].tex),t.uniform1i(o.u.uBloom,1);let c=e.post;t.uniform2f(o.u.uRes,this.width,this.height),t.uniform1f(o.u.uExposure,c.exposure),t.uniform1f(o.u.uBloomAmt,c.bloom),t.uniform2f(o.u.uShake,c.shake[0],c.shake[1]),a(o.u.uShockScr,c.shockScr),t.uniform1f(o.u.uGroundV,c.groundV),a(o.u.uHaze,c.haze),t.uniform1f(o.u.uTime,e.time),t.uniform1f(o.u.uWhite,c.white),t.uniform1f(o.u.uHdrScale,this.hdr?1:8),t.drawArrays(t.TRIANGLES,0,3),t.activeTexture(t.TEXTURE0)}},Ke=`pop-porn/settings`,qe=class e{sound=!0;haptics=!0;numbers=!0;fps=!1;quality=`auto`;static load(){let t=new e;try{Object.assign(t,JSON.parse(localStorage.getItem(Ke)??`{}`))}catch{}return t}save(){let{sound:e,haptics:t,numbers:n,fps:r,quality:i}=this;try{localStorage.setItem(Ke,JSON.stringify({sound:e,haptics:t,numbers:n,fps:r,quality:i}))}catch{}}},Je={chemical:`Chemical`,accident:`Accidents`,nuclear:`Nuclear`,nature:`Nature`,cosmic:`Cosmic`},q=(e,t=0)=>e.toLocaleString(`en-US`,{maximumFractionDigits:t,minimumFractionDigits:t});function J(e){let t=Math.abs(e);return t>=100?q(e,0):t>=10?q(e,1).replace(/\.0$/,``):q(e,2).replace(/0$/,``).replace(/\.0?$/,``)}function Y(e){return e>=1e9?`${J(e/1e9)} Mt`:e>=1e6?`${J(e/1e6)} kt`:e>=1e3?`${J(e/1e3)} t`:e>=1?`${J(e)} kg`:`${J(e*1e3)} g`}function X(e){return e>=1e3?`${J(e/1e3)} km`:e>=1?`${J(e)} m`:e>=.01?`${J(e*100)} cm`:`${J(e*1e3)} mm`}function Z(e){if(e<.001)return`${J(e*1e6)} µs`;if(e<1)return`${J(e*1e3)} ms`;if(e<60)return`${J(e)} s`;let t=Math.floor(e/60),n=Math.round(e-t*60);return n?`${t} min ${n} s`:`${t} min`}function Ye(e){let t=e/6894.76,n=e>=1e6?`${J(e/1e6)} MPa`:e>=1e3?`${J(e/1e3)} kPa`:`${J(e)} Pa`;return t>=.1?`${n} · ${J(t)} psi`:n}var Xe=e=>`${q(Math.round(e*3.6/10)*10)} km/h`,Ze=e=>`${q(Math.round((e-273)/50)*50)} °C`;function Qe(e){let t=e/41868;return t>=.1?`${J(t)} cal/cm²`:`none`}function $e(e){return e<.95?`slow-mo ×${J(1/e)}`:e>1.05?`fast ×${J(e)}`:`real time`}function et(e){let t=10**Math.floor(Math.log10(e)),n=e/t;return(n>=5?5:n>=2?2:1)*t}var Q=(e,t=document)=>t.querySelector(e),tt=class{s;settings;audio;haptics;dist=Q(`#dist`);labFire=Q(`#lab-fire`);labFront=Q(`#lab-front`);labCloud=Q(`#lab-cloud`);pin=Q(`#pin-you`);scale=Q(`#scalebar`);clock=Q(`#clock`);obs=Q(`#obs`);result=Q(`#result`);fps=Q(`#fps`);lastText=new Map;touchTimer=0;resultShown=!1;factIndex=0;onQuality=()=>{};constructor(e,t,n,r){this.s=e,this.settings=t,this.audio=n,this.haptics=r,this.bind(),this.applySettings(),this.refreshBlast()}bind(){Q(`#start`).addEventListener(`click`,()=>{this.audio.unlock(),this.audio.setEnabled(this.settings.sound),Q(`#splash`).classList.add(`gone`);let e=document.documentElement;!matchMedia(`(display-mode: fullscreen)`).matches&&e.requestFullscreen&&e.requestFullscreen({navigationUI:`hide`}).catch(()=>{})}),Q(`#pick`).addEventListener(`click`,()=>this.openPicker()),Q(`#open-settings`).addEventListener(`click`,()=>this.openSheet(`#sheet-settings`)),document.querySelectorAll(`.sheet`).forEach(e=>{e.addEventListener(`click`,t=>{(t.target===e||t.target.closest(`.close`))&&(e.hidden=!0)})}),Q(`#toggle-num`).addEventListener(`click`,()=>{this.settings.numbers=!this.settings.numbers,this.settings.save(),this.applySettings()}),this.dist.addEventListener(`input`,()=>{let e=this.s.explosive.observer,t=e.min*(e.max/e.min)**(Number(this.dist.value)/1e3);this.s.setDistance(t),this.s.director.reset(),this.updateSetup()}),Q(`#go`).addEventListener(`click`,()=>this.detonate()),Q(`#replay`).addEventListener(`click`,()=>this.detonate()),Q(`#playpause`).addEventListener(`click`,()=>{let e=this.s.clock;if(this.s.clock.t>=e.end*3)return this.detonate();e.playing=!e.playing,this.syncPlay()}),Q(`#slowmo`).addEventListener(`click`,e=>{let t=this.s.clock;t.speed=t.speed<1?1:.25,e.currentTarget.classList.toggle(`on`,t.speed<1)}),Q(`#newblast`).addEventListener(`click`,()=>this.toSetup()),this.result.addEventListener(`click`,e=>{let t=e.target.closest(`button`)?.dataset.act;t&&(t===`closer`||t===`farther`?(this.s.setDistance(this.s.distance*(t===`closer`?.5:2)),this.detonate()):t===`replay`?this.detonate():t===`pick`&&this.openPicker())});let e=(e,t)=>{let n=Q(e);n.checked=this.settings[t],n.addEventListener(`change`,()=>{this.settings[t]=n.checked,this.settings.save(),this.applySettings()})};e(`#set-sound`,`sound`),e(`#set-haptics`,`haptics`),e(`#set-numbers`,`numbers`),e(`#set-fps`,`fps`),Q(`#set-quality`).addEventListener(`click`,e=>{let t=e.target.dataset.q;t&&(this.settings.quality=t,this.settings.save(),this.applySettings(),this.onQuality(t))}),Q(`#view`).addEventListener(`pointerdown`,()=>{document.body.classList.add(`touched`),clearTimeout(this.touchTimer),this.touchTimer=window.setTimeout(()=>document.body.classList.remove(`touched`),3e3)})}applySettings(){let e=this.settings;document.body.classList.toggle(`clean`,!e.numbers),Q(`#toggle-num`).classList.toggle(`on`,e.numbers),Q(`#set-numbers`).checked=e.numbers,this.audio.setEnabled(e.sound),this.haptics.enabled=e.haptics,this.fps.hidden=!e.fps,document.querySelectorAll(`#set-quality button`).forEach(t=>t.classList.toggle(`on`,t.dataset.q===e.quality))}openSheet(e){Q(e).hidden=!1}openPicker(){let e=Q(`#sheet-picker`),t=Q(`.tabs`,e),n=Q(`.list`,e),r=o(),i=this.s.explosive,a=e=>{t.querySelectorAll(`button`).forEach(t=>t.classList.toggle(`on`,t.dataset.cat===e)),n.innerHTML=``;for(let t of r.find(([t])=>t===e)[1])n.append(this.item(t,t===i))};t.innerHTML=``;for(let[e]of r){let n=document.createElement(`button`);n.textContent=Je[e],n.dataset.cat=e,n.addEventListener(`click`,()=>a(e)),t.append(n)}a(i.category),e.hidden=!1}item(e,t){let n=document.createElement(`button`);n.className=`item`+(t?` on`:``);let r=[e.when,e.where].filter(Boolean).join(` · `);return n.innerHTML=`<div class="t">${e.name}<span>${Y(e.tntKg)} TNT</span></div>${r?`<div class="w">${r}</div>`:``}<p>${e.blurb}</p>`,n.addEventListener(`click`,()=>{Q(`#sheet-picker`).hidden=!0,this.haptics.tap(),this.s.select(e),this.factIndex=0,this.refreshBlast(),this.toSetup()}),n}detonate(){this.audio.unlock(),this.s.detonate(),this.resultShown=!1,this.result.classList.remove(`show`),document.body.classList.remove(`setup`),document.body.classList.add(`playing`),this.syncPlay()}toSetup(){this.s.reset(),this.resultShown=!1,this.result.classList.remove(`show`),document.body.classList.add(`setup`),document.body.classList.remove(`playing`),this.factIndex=(this.factIndex+1)%this.s.explosive.facts.length,this.updateSetup()}syncPlay(){Q(`#playpause`).classList.toggle(`paused`,!this.s.clock.playing)}refreshBlast(){let e=this.s.explosive;Q(`#pick .cat`).textContent=Je[e.category],Q(`#pick .name`).textContent=e.name,Q(`#pick .energy`).textContent=Y(e.tntKg);let t=e.observer;this.dist.value=String(Math.round(1e3*Math.log(this.s.distance/t.min)/Math.log(t.max/t.min))),document.body.classList.add(`setup`),this.updateSetup()}updateSetup(){let e=this.s.explosive;Q(`.dist-label b`).textContent=X(this.s.distance);let t=e.facts[this.factIndex%e.facts.length];Q(`#setup .blurb`).textContent=`${e.blurb} ${t}`}text(e,t,n=!1){this.lastText.get(e)!==t&&(this.lastText.set(e,t),n?e.innerHTML=t:e.textContent=t)}place(e,t,n,r){e.classList.toggle(`show`,r),r&&(e.style.transform=`translate(${t.toFixed(1)}px, ${n.toFixed(1)}px)`)}frame(e,t,n){let r=this.s,i=r.blast,a=r.t,o=window.innerWidth,s=window.innerHeight,c=(t,n,r=0)=>{let i=ve(e,t,n,r);return i?[(i[0]+1)/2*o,(1-i[1])/2*s]:[-1e4,-1e4]},l=s/(2*e.vh),u=r.phase!==`setup`;this.settings.fps&&this.text(this.fps,n),u&&this.text(this.clock,`T + ${Z(Math.max(a,0))}<small>${$e(r.clock.factor)}</small>`,!0);let d=t.fireball;if(d&&d.temp>1100&&i.cloud(a).morph<.6&&d.r*l>4){let[e,t]=c(d.r,d.y);this.text(this.labFire,`<b>Fireball</b> ${X(2*d.r)} wide <em>${Ze(d.temp)}</em>`,!0),this.place(this.labFire,Math.min(e+8,o-190),t-12,e>0&&e<o&&t>60&&t<s)}else this.place(this.labFire,0,0,!1);let f=t.front;if(f&&f.dp>60){let[e,t]=c(f.x,0);this.text(this.labFront,`<b>Blast wave</b> ${Ye(f.dp)}<br><em>${Xe(f.speed)}</em>`,!0),this.place(this.labFront,Math.min(e-40,o-170),t+10,e>20&&e<o+40)}else this.place(this.labFront,0,0,!1);if(i.cloud(a).morph>.3&&t.cloudTop*l>60){let[e,n]=c(0,t.cloudTop);this.text(this.labCloud,`<b>Cloud top</b> ${X(t.cloudTop)}`,!0),this.place(this.labCloud,e-50,n-34,n>90)}else this.place(this.labCloud,0,0,!1);let[p,m]=c(r.distance,1.75),h=p>10&&p<o-10;this.pin.classList.toggle(`edge`,!h),this.text(Q(`b`,this.pin),X(r.distance));let g=h?p-20:o-58,_=h?m-44:Math.min(Math.max(m-30,120),s-200);this.pin.style.transform=`translate(${g.toFixed(1)}px, ${_.toFixed(1)}px)`;let v=et(o*.28/l),[,y]=c(0,0);if(this.scale.style.top=`${Math.min(y+18,s-40)}px`,Q(`i`,this.scale).style.width=`${(v*l).toFixed(1)}px`,this.text(Q(`span`,this.scale),X(v)),this.observerCard(a),!this.resultShown&&r.shockHasHit&&(r.hitAge>1.4||r.phase===`done`)){this.resultShown=!0;let e=r.report.verdict;Q(`h2`,this.result).innerHTML=`<span class="sev-${e.severity}">${e.title}</span> at ${X(r.distance)}`,Q(`ul`,this.result).innerHTML=e.effects.map(e=>`<li>${e}</li>`).join(``),this.result.classList.add(`show`)}r.clock.playing===!1&&this.syncPlay()}observerCard(e){let t=this.s,n=t.report,r=t.blast,i=t.phase!==`setup`,a=[`<div class="head">You · ${X(n.distance)} away</div>`],o=(e,t,n)=>a.push(`<div class="row ${n?`done`:`wait`}"><span>${e}</span><b>${t}</b></div>`);if(n.insideFireball)o(`Position`,`inside the fireball`,!0);else{o(`Flash`,i&&e>=n.flashT?`seen`:`in ${Z(n.flashT)}`,i&&e>=n.flashT);let t=i&&e>r.timeScale;if(o(`Heat`,t?`${Qe(n.heat)} · ${[`no burns`,`1st-degree burns`,`2nd-degree burns`,`3rd-degree burns`][n.burn]}`:`coming`,t),n.seismicT!==null){let t=i&&e>=n.seismicT;o(`Ground shakes`,t?`felt`:`at T+${Z(n.seismicT)}`,t)}let a=i&&e>=n.shockT;o(`Blast wave`,a?Ye(n.dp):`at T+${Z(n.shockT)}`,a),a&&(o(`Wind`,Xe(n.wind),!0),o(`Loudness`,`${Math.round(n.db)} dB`,!0))}i&&e>=n.shockT&&a.push(`<div class="verdict sev-${n.verdict.severity}">${n.verdict.title}</div>`),this.text(this.obs,a.join(``),!0)}},$=new URLSearchParams(location.search);function nt(e){let t=document.getElementById(`error`);t.hidden=!1,t.textContent=`Something broke:\n${e instanceof Error?e.message:String(e)}`,console.error(e)}function rt(){let n=qe.load();$.has(`numbers`)&&(n.numbers=$.get(`numbers`)!==`0`);let r=new Ge(document.getElementById(`view`)),i=new e,o=new t,s=new je(n.quality),c=new Ae(a.find(e=>e.id===($.get(`blast`)??`hiroshima`))??a[0],l[0],i,o,s.budget);$.has(`d`)&&c.setDistance(Number($.get(`d`)));let u=new tt(c,n,i,o);u.onQuality=e=>{s.setQuality(e),c.setParticleBudget(s.budget),f()};let d=()=>Math.min(window.devicePixelRatio||1,2);function f(){r.resize(window.innerWidth*d()*s.scale,window.innerHeight*d()*s.scale)}window.addEventListener(`resize`,f),f();let p=$.has(`t`)?Number($.get(`t`)):null;($.has(`nosplash`)||p!==null)&&document.getElementById(`splash`).classList.add(`gone`),p!==null&&(c.detonate(),c.clock.playing=!1,c.clock.t=p,document.body.classList.remove(`setup`),document.body.classList.add(`playing`));let m=performance.now(),h=0,g=0,_=e=>{let t=Math.min((e-m)/1e3,.1);m=e,h+=t,p===null&&s.sample(t)&&f();let n=c.update(t),i=c.blast,a=c.t,o=window.innerWidth/window.innerHeight,l=o<1;c.director.groundAt=l?c.phase===`setup`?.34:.17:.13;let d=c.director.update(i,c.distance,a,o,t,c.jumpCamera||p!==null);c.jumpCamera=!1;let y=v(i,a,d,c.scenario.look,c.exposure,p===null?t:1,r.height,s.octaves,c.scorch);y.post.shake=c.shake(h),a>0?c.particles.update(a,Math.max(n,p===null?0:c.clock.rate(a)/60),y.light):c.particles.count=0,c.props.update(a),r.render({view:d,look:c.scenario.look,world:y.world,boom:y.boom,particles:c.particles.data,particleCount:c.particles.count,props:c.props.data,propCount:c.props.count,post:y.post,time:h,octaves:s.octaves}),u.frame(d,y.hud,`${s.fps.toFixed(0)} fps · ${(s.scale*100).toFixed(0)}% · ${r.width}×${r.height}`),++g===8&&(window.__ready=!0),requestAnimationFrame(_)};requestAnimationFrame(_)}try{rt()}catch(e){nt(e)}window.addEventListener(`error`,e=>nt(e.error??e.message)),`serviceWorker`in navigator&&navigator.serviceWorker.register(`./sw.js`).catch(()=>{});