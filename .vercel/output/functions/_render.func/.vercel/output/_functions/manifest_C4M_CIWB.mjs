import { d as decodeKey } from './chunks/astro/server_DTb4TK__.mjs';
import './chunks/astro-designed-error-pages_BpdygvX4.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/onli/Desktop/Projects/landing-tomas/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@4.15.8_typescript@5.6.2/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/send-email","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/send-email\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"send-email","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/send-email.ts","pathname":"/api/send-email","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const l=document.getElementById(\"btn-contact\");l.addEventListener(\"click\",function(){window.location.href=\"#contactos\"});const c=document.querySelectorAll(\".typing-word\");let o=0;function d(){const e=c[o];e.classList.remove(\"active\"),e.classList.add(\"prev\"),o=(o+1)%c.length;const t=c[o];t.classList.remove(\"prev\"),t.classList.add(\"active\")}c.forEach((e,t)=>{t!==0&&e.classList.add(\"prev\")});setInterval(d,3e3);document.addEventListener(\"astro:page-load\",()=>{const e=document.querySelectorAll(\"section\"),t=document.querySelectorAll(\"header nav ul li a\"),i=n=>{n.forEach(a=>{a.isIntersecting&&t.forEach(r=>{r.getAttribute(\"aria-label\")==a.target.id?r.classList.add(\"text-blue-500\"):r.classList.remove(\"text-blue-500\")})})},s=new IntersectionObserver(i,{root:null,rootMargin:\"0px\",threshold:.3});e.forEach(n=>{s.observe(n)}),document.onvisibilitychange=()=>{document.visibilityState===\"hidden\"?s.disconnect():e.forEach(n=>{s.observe(n)})}});document.getElementById(\"hamburger\").addEventListener(\"click\",function(){this.classList.toggle(\"active\"),document.getElementById(\"nav-menu\").classList.toggle(\"active\")});document.getElementById(\"footer\").innerHTML=`© neurosoft.dev ${new Date().getFullYear()}`;\n"}],"styles":[{"type":"external","src":"/_astro/index.D0pqTYkq.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://neurosoft.vercel.app/","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/onli/Desktop/Projects/landing-tomas/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/api/send-email@_@ts":"pages/api/send-email.astro.mjs","\u0000@astro-page:node_modules/.pnpm/astro@4.15.8_typescript@5.6.2/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","C:/Users/onli/Desktop/Projects/landing-tomas/node_modules/.pnpm/astro@4.15.8_typescript@5.6.2/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","\u0000@astrojs-manifest":"manifest_C4M_CIWB.mjs","C:/Users/onli/Desktop/Projects/landing-tomas/src/components/ContactForm":"_astro/ContactForm.C45pEjPp.js","@astrojs/preact/client.js":"_astro/client.k5pBZKgW.js","/astro/hoisted.js?q=0":"_astro/hoisted.C_aQT5tU.js","C:/Users/onli/Desktop/Projects/landing-tomas/node_modules/.pnpm/@preact+signals@1.3.0_preact@10.24.0/node_modules/@preact/signals/dist/signals.module.js":"_astro/signals.module.CEFHoljs.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/twinkle-star-vietnamese-400-normal.BAGYNzaB.woff2","/_astro/twinkle-star-latin-400-normal.tNjckd4A.woff2","/_astro/twinkle-star-latin-ext-400-normal.CcfqmM-i.woff2","/_astro/twinkle-star-vietnamese-400-normal.Cbh7im_e.woff","/_astro/twinkle-star-latin-ext-400-normal.CikcENlC.woff","/_astro/twinkle-star-latin-400-normal.CbYBwE5s.woff","/_astro/index.D0pqTYkq.css","/analisis_datos.svg","/arrow-down.svg","/bg-gradient.svg","/brain-ia.svg","/chat_bot.svg","/favicon.svg","/logo-facebook.svg","/logo-github.svg","/logo-ig.svg","/logo-linkedin.svg","/logo.svg","/mineria_dato.svg","/mobile_dev.svg","/seccion-1.webp","/web_dev.svg","/_astro/client.k5pBZKgW.js","/_astro/ContactForm.C45pEjPp.js","/_astro/hooks.module.DGL6TaUJ.js","/_astro/index.80XcjYl2.css","/_astro/preact.module.Da0bjiRp.js","/_astro/signals.module.CEFHoljs.js"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"YjYXGmm3cd+GmelLxz7cThNURBgl6LZY0VQT1mnzMlw=","experimentalEnvGetSecretEnabled":false});

export { manifest };
